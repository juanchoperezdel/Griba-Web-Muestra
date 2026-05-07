import { InfiniteSlider } from "./ui/infinite-slider";
import { ProgressiveBlur } from "./ui/progressive-blur";

const brands = [
  { name: "Volkswagen", domain: "volkswagen.com" },
  { name: "Renault", domain: "renault.com" },
  { name: "Stellantis", domain: "stellantis.com" },
  { name: "Fiat", domain: "fiat.com" },
  { name: "Toyota", domain: "toyota.com" },
  { name: "Nissan", domain: "nissan.com" },
  { name: "Chevrolet", domain: "chevrolet.com" },
  { name: "Ford", domain: "ford.com" },
  { name: "Citroën", domain: "citroen.com" },
  { name: "Peugeot", domain: "peugeot.com" },
  { name: "Mercedes-Benz", domain: "mercedes-benz.com" },
  { name: "Honda", domain: "honda.com" },
];

export function BrandLogos() {
  return (
    <div className="bg-white py-12 border-y border-slate-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="relative w-full">
          <InfiniteSlider
            className="flex h-12 w-full items-center"
            duration={50}
            gap={64}
          >
            {brands.map((brand) => (
              <div
                key={brand.domain}
                className="flex h-12 items-center justify-center px-2"
              >
                <img
                  src={`https://logo.clearbit.com/${brand.domain}?size=128`}
                  alt={brand.name}
                  title={brand.name}
                  className="h-9 w-auto max-w-[140px] object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all"
                  loading="lazy"
                />
              </div>
            ))}
          </InfiniteSlider>
          <ProgressiveBlur
            className="pointer-events-none absolute top-0 left-0 h-full w-32 sm:w-48"
            direction="left"
            blurIntensity={1}
          />
          <ProgressiveBlur
            className="pointer-events-none absolute top-0 right-0 h-full w-32 sm:w-48"
            direction="right"
            blurIntensity={1}
          />
        </div>
      </div>
    </div>
  );
}
