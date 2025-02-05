import { fetchData } from "@/common/utils/httpService";
import { BannerSlider, InfoCard, Product } from "@/feature";

export default async function HomePage() {
  const [specialOffers, sliders, features] = await Promise.allSettled([
    fetchData("/special-offer"),
    fetchData("/big-sliders"),
    fetchData("/features"),
  ]);

  return (
    <>
      <main className="flex justify-center">
        <div className="w-[90%]">
          <section>
            <BannerSlider
              sliders={sliders.status === "fulfilled" ? sliders.value : []}
            />
          </section>
          <section className="mt-[30px]">
            <InfoCard
              features={features.status === "fulfilled" ? features.value : []}
            />
          </section>
          <section>
            <Product
              specialOffers={
                specialOffers.status === "fulfilled" ? specialOffers.value : []
              }
            />
          </section>
        </div>
      </main>
    </>
  );
}
