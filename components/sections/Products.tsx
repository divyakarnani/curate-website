import SectionLabel from "@/components/SectionLabel";
import { supabase } from "@/lib/supabase";
import ProductCarousel from "@/components/ProductCarousel";

interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  image_url: string | null;
  msrp_usd: number | null;
  description: string | null;
}

interface ScoreRow {
  product_id: string;
  objective_score: number;
  products: Product;
}

interface RatingRow {
  product_id: string;
  rating: number;
}

function generateDummyScore(seed: string, min: number, max: number): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash + seed.charCodeAt(i)) | 0;
  }
  const normalized = (Math.abs(hash) % 100) / 100;
  return parseFloat((min + normalized * (max - min)).toFixed(1));
}

async function getProducts() {
  // Get all ratings grouped by product
  const { data: ratingsRaw } = await supabase
    .from("ratings")
    .select("product_id, rating")
    .not("rating", "is", null);

  const ratingsByProduct: Record<string, number[]> = {};
  for (const r of (ratingsRaw as RatingRow[] | null) ?? []) {
    if (!ratingsByProduct[r.product_id]) ratingsByProduct[r.product_id] = [];
    ratingsByProduct[r.product_id].push(r.rating);
  }
  const ratedProductIds = Object.keys(ratingsByProduct);

  // Get objective scores only for rated products
  const { data: topScores } = await supabase
    .from("product_objective_scores")
    .select(
      `product_id, objective_score,
      products ( id, name, brand, category, image_url, msrp_usd, description )`
    )
    .in("product_id", ratedProductIds)
    .order("objective_score", { ascending: false })
    .limit(8);

  return (topScores as ScoreRow[] | null)?.map((s) => {
    const ratings = ratingsByProduct[s.product_id] ?? [];
    const communityScore = ratings.length > 0
      ? parseFloat((ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1))
      : null;

    return {
      product: s.products,
      objectiveScore: parseFloat((s.objective_score / 10).toFixed(1)),
      communityScore,
      matchScore: generateDummyScore(s.product_id + "match", 6.5, 9.5),
      friendScore: generateDummyScore(s.product_id + "friend", 5.5, 9.0),
    };
  }) ?? [];
}

export default async function Products() {
  const products = await getProducts();

  return (
    <section className="py-16 md:py-24" id="products">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <SectionLabel>Featured Products</SectionLabel>
          <h2 className="text-[32px] md:text-[48px] font-bold text-ink leading-tight">
            See Curate in{" "}
            <em className="text-purple-light not-italic font-bold">
              action.
            </em>
          </h2>
          <p className="text-[15px] text-gray-700 leading-[1.65] mt-6 max-w-[480px]">
            Real products from our database, ranked by overall score.
            Swipe to explore. Scores are computed live.
          </p>
        </div>

        <ProductCarousel products={products} />
      </div>
    </section>
  );
}
