import { useState } from "react";
import { ArrowRight, Flower2 } from "lucide-react";
import { Link } from "react-router-dom";

const fallbackImage =
  "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85";

export default function CategoryCard({ name, image }) {
  const [imageSrc, setImageSrc] = useState(image);

  const handleImageError = () => {
    setImageSrc(fallbackImage);
  };

  return (
    <Link
      to={`/shop?category=${encodeURIComponent(name)}`}
      className="group relative block overflow-hidden rounded-[24px] bg-stone-100 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(23,63,53,0.12)]"
    >
      <div className="relative aspect-[0.82] overflow-hidden">

        <img
          src={imageSrc}
          alt={`${name} flowers`}
          onError={handleImageError}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#102f29]/85 via-[#102f29]/10 to-transparent" />

        <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/15 text-white backdrop-blur-md">
          <Flower2 size={15} />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex items-end justify-between gap-3">

            <div>
              <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.18em] text-white/60">
                Collection
              </p>

              <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                {name}
              </h3>
            </div>

            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#173f35] shadow-lg transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight size={15} />
            </span>

          </div>
        </div>

      </div>
    </Link>
  );
}