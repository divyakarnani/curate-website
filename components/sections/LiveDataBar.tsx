import { supabase } from "@/lib/supabase";

async function getLiveData() {
  const { count: productCount } = await supabase
    .from("products")
    .select("*", { count: "exact", head: true });

  const { data: cats } = await supabase.from("products").select("category");
  const uniqueCategories = new Set(cats?.map((p) => p.category)).size;

  const { data: scores } = await supabase
    .from("product_objective_scores")
    .select("objective_score");
  const avgScore = scores?.length
    ? (scores.reduce((s, r) => s + r.objective_score, 0) / scores.length / 10).toFixed(1)
    : "—";

  return { productCount: productCount ?? 0, uniqueCategories, avgScore };
}

export default async function LiveDataBar() {
  const { productCount, uniqueCategories, avgScore } = await getLiveData();

  return (
    <section className="bg-purple-faint py-5">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
        <div className="flex items-center gap-2">
          <span className="text-[17px] font-semibold text-purple">{productCount}+</span>
          <span className="text-[14px] text-gray-500">products scored</span>
        </div>
        <div className="hidden md:block w-px h-5 bg-gray-200" />
        <div className="flex items-center gap-2">
          <span className="text-[17px] font-semibold text-purple">{uniqueCategories}</span>
          <span className="text-[14px] text-gray-500">categories</span>
        </div>
        <div className="hidden md:block w-px h-5 bg-gray-200" />
        <div className="flex items-center gap-2">
          <span className="text-[17px] font-semibold text-purple">{avgScore}</span>
          <span className="text-[14px] text-gray-500">avg objective score</span>
        </div>
      </div>
    </section>
  );
}
