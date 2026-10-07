import { useState } from "react";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const fallbackImage =
  "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const [imageSrc, setImageSrc] = useState(product.image);

  const wishlisted = isWishlisted(product.id);

  const handleImageError = () => {
    setImageSrc(fallbackImage);
  };

  const discount = product.oldPrice
    ? Math.round(
        ((product.oldPrice - product.price) /
          product.oldPrice) *
          100
      )
    : 0;

  return (
    <article className="product-card group overflow-hidden rounded-[24px] border border-stone-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_50px_rgba(23,63,53,0.12)]">

      {/* IMAGE */}
      <div className="product-card-image relative aspect-[0.9] overflow-hidden bg-stone-100">

        <Link to={`/product/${product.id}`}>
          <img
            src={imageSrc}
            alt={product.name}
            onError={handleImageError}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </Link>

        {/* Badge */}
        {product.badge && (
          <span className="product-badge absolute left-3 top-3 rounded-full bg-[#173f35] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.08em] text-white">
            {product.badge}
          </span>
        )}

        {/* Discount */}
        {discount > 0 && (
          <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-2.5 py-1 text-[9px] font-bold text-[#d45b72] shadow-sm backdrop-blur-sm">
            {discount}% OFF
          </span>
        )}

        {/* Wishlist */}
        <button
          type="button"
          onClick={() => toggleWishlist(product.id)}
          aria-label={
            wishlisted
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
          className={`heart-button absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full shadow-lg backdrop-blur-md transition-all duration-300 ${
            wishlisted
              ? "bg-[#d45b72] text-white"
              : "bg-white/90 text-[#173f35] hover:bg-white hover:text-[#d45b72]"
          }`}
        >
          <Heart
            size={17}
            fill={wishlisted ? "currentColor" : "none"}
          />
        </button>

      </div>

      {/* CONTENT */}
      <div className="p-4 sm:p-5">

        <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.15em] text-stone-400">
          {product.category}
        </p>

        <Link to={`/product/${product.id}`}>
          <h3 className="line-clamp-1 text-sm font-bold text-[#173f35] transition-colors group-hover:text-[#d45b72] sm:text-base">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center gap-0.5 text-[#e4a927]">
            <Star
              size={12}
              fill="currentColor"
            />

            <span className="ml-1 text-[11px] font-bold text-[#173f35]">
              {product.rating}
            </span>
          </div>

          <span className="text-[10px] text-stone-400">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-center justify-between gap-2">

          <div className="flex items-center gap-2">
            <span className="product-price text-base font-bold text-[#173f35] sm:text-lg">
              ₹{product.price.toLocaleString("en-IN")}
            </span>

            {product.oldPrice && (
              <span className="product-old-price text-xs text-stone-400 line-through">
                ₹{product.oldPrice.toLocaleString("en-IN")}
              </span>
            )}
          </div>

          {/* Desktop Cart */}
          <button
            type="button"
            onClick={() => addToCart(product)}
            aria-label={`Add ${product.name} to cart`}
            className="hidden h-10 w-10 items-center justify-center rounded-full bg-[#173f35] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#d45b72] sm:flex"
          >
            <ShoppingBag size={16} />
          </button>

        </div>

        {/* Mobile Add */}
        <button
          type="button"
          onClick={() => addToCart(product)}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#173f35] py-2.5 text-xs font-bold text-white transition-all hover:bg-[#245b4d] sm:hidden"
        >
          <ShoppingBag size={14} />
          Add to cart
        </button>

      </div>

    </article>
  );
}