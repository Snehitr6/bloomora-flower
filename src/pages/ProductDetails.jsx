import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  Heart,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Star,
  Truck,
} from "lucide-react";

import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const product = products.find(
    (item) => String(item.id) === String(id)
  );

  const relatedProducts = useMemo(() => {
    if (!product) return [];

    return products
      .filter(
        (item) =>
          item.category === product.category &&
          item.id !== product.id
      )
      .slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <main className="min-h-screen bg-[#fffaf7] px-4 pb-20 pt-32">
        <div className="mx-auto max-w-3xl rounded-3xl border border-rose-100 bg-white p-10 text-center shadow-sm">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rose-50 text-rose-500">
            <ShoppingBag size={28} />
          </div>

          <h1 className="mt-6 text-3xl font-black text-slate-900">
            Product not found
          </h1>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
            Sorry, we couldn't find the flower you're looking for.
          </p>

          <Link
            to="/shop"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-rose-500"
          >
            <ArrowLeft size={17} />
            Back to Shop
          </Link>

        </div>
      </main>
    );
  }

  const discount =
    product.oldPrice && product.oldPrice > product.price
      ? Math.round(
          ((product.oldPrice - product.price) /
            product.oldPrice) *
            100
        )
      : 0;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i += 1) {
      addToCart(product);
    }

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2200);
  };

  const increaseQuantity = () => {
    setQuantity((current) => Math.min(current + 1, 10));
  };

  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(current - 1, 1));
  };

  const handleWishlist = () => {
    toggleWishlist(product.id);
  };

  return (
    <main className="min-h-screen bg-[#fffaf7] pb-20">

      {/* PRODUCT SECTION */}

      <section className="px-4 pb-14 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="mx-auto max-w-7xl">

          {/* BACK */}

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="mb-6 inline-flex items-center gap-2 rounded-full px-2 py-2 text-sm font-semibold text-slate-500 transition hover:text-rose-500"
          >
            <ArrowLeft size={17} />
            Back
          </button>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">

            {/* IMAGE */}

            <div className="relative">

              <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-sm">

                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-square w-full object-cover transition duration-700 hover:scale-[1.03]"
                />

                {product.badge && (
                  <div className="absolute left-5 top-5 rounded-full bg-rose-500 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                    {product.badge}
                  </div>
                )}

                {discount > 0 && (
                  <div className="absolute bottom-5 left-5 rounded-full bg-emerald-500 px-4 py-2 text-xs font-bold text-white shadow-lg">
                    {discount}% OFF
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleWishlist}
                  aria-label="Toggle wishlist"
                  className={`absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full shadow-lg backdrop-blur-md transition ${
                    isWishlisted(product.id)
                      ? "bg-rose-500 text-white"
                      : "bg-white/95 text-slate-600 hover:bg-rose-500 hover:text-white"
                  }`}
                >
                  <Heart
                    size={21}
                    className={
                      isWishlisted(product.id)
                        ? "fill-current"
                        : ""
                    }
                  />
                </button>

              </div>

              {/* SMALL TRUST BADGES */}

              <div className="mt-4 grid grid-cols-2 gap-3">

                <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
                    <Truck size={19} />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-slate-800">
                      Fast Delivery
                    </p>

                    <p className="mt-0.5 text-[11px] text-slate-400">
                      Fresh to your door
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <ShieldCheck size={19} />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-slate-800">
                      Quality Assured
                    </p>

                    <p className="mt-0.5 text-[11px] text-slate-400">
                      Carefully selected
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* DETAILS */}

            <div className="flex flex-col justify-center">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-500">
                {product.category}
              </p>

              <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                {product.name}
              </h1>

              {/* RATING */}

              <div className="mt-5 flex flex-wrap items-center gap-3">

                <div className="flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1.5">
                  <Star
                    size={15}
                    className="fill-amber-400 text-amber-400"
                  />

                  <span className="text-sm font-bold text-slate-800">
                    {product.rating}
                  </span>
                </div>

                <span className="text-sm text-slate-400">
                  {product.reviews} verified reviews
                </span>

              </div>

              {/* PRICE */}

              <div className="mt-7 flex flex-wrap items-end gap-3">

                <span className="text-3xl font-black text-slate-900">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>

                {product.oldPrice && (
                  <span className="mb-1 text-lg text-slate-400 line-through">
                    ₹{product.oldPrice.toLocaleString("en-IN")}
                  </span>
                )}

                {discount > 0 && (
                  <span className="mb-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
                    Save {discount}%
                  </span>
                )}

              </div>

              <div className="my-7 h-px bg-slate-100" />

              {/* DESCRIPTION */}

              <p className="text-base leading-8 text-slate-500">
                {product.description}
              </p>

              {/* DELIVERY */}

              <div className="mt-7 rounded-2xl border border-rose-100 bg-rose-50/60 p-4">

                <div className="flex items-start gap-3">

                  <Truck
                    size={20}
                    className="mt-0.5 shrink-0 text-rose-500"
                  />

                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      Fresh flower delivery
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Carefully packed and delivered fresh to your
                      doorstep.
                    </p>
                  </div>

                </div>

              </div>

              {/* QUANTITY + CART */}

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                <div className="flex h-14 items-center justify-between rounded-2xl border border-slate-200 bg-white px-3 sm:w-36">

                  <button
                    type="button"
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                    className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-500 transition hover:bg-rose-50 hover:text-rose-500 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Minus size={17} />
                  </button>

                  <span className="text-sm font-bold text-slate-900">
                    {quantity}
                  </span>

                  <button
                    type="button"
                    onClick={increaseQuantity}
                    disabled={quantity >= 10}
                    className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-500 transition hover:bg-rose-50 hover:text-rose-500 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Plus size={17} />
                  </button>

                </div>

                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={`flex h-14 flex-1 items-center justify-center gap-3 rounded-2xl px-6 text-sm font-bold text-white shadow-lg transition duration-300 ${
                    added
                      ? "bg-emerald-500 shadow-emerald-100"
                      : "bg-slate-900 shadow-slate-200 hover:-translate-y-0.5 hover:bg-rose-500 hover:shadow-rose-200"
                  }`}
                >
                  {added ? (
                    <>
                      <Check size={19} />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={19} />
                      Add to Cart
                    </>
                  )}
                </button>

              </div>

              {/* BUY NOW */}

              <button
                type="button"
                onClick={() => {
                  handleAddToCart();
                  setTimeout(() => {
                    navigate("/cart");
                  }, 300);
                }}
                className="mt-3 h-14 w-full rounded-2xl border-2 border-slate-900 bg-transparent text-sm font-bold text-slate-900 transition hover:bg-slate-900 hover:text-white"
              >
                Buy Now
              </button>

              {/* FEATURES */}

              <div className="mt-8 grid grid-cols-3 gap-3 border-t border-slate-100 pt-7">

                <div className="text-center">
                  <p className="text-xs font-bold text-slate-800">
                    Fresh
                  </p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    Hand selected
                  </p>
                </div>

                <div className="border-x border-slate-100 text-center">
                  <p className="text-xs font-bold text-slate-800">
                    Secure
                  </p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    Safe packaging
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-xs font-bold text-slate-800">
                    Premium
                  </p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    Quality assured
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}

      {relatedProducts.length > 0 && (
        <section className="border-t border-rose-100 bg-white px-4 py-16 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-7xl">

            <div className="mb-8 flex items-end justify-between gap-4">

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-500">
                  You may also like
                </p>

                <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
                  More from {product.category}
                </h2>
              </div>

              <Link
                to="/shop"
                className="hidden text-sm font-bold text-rose-500 transition hover:text-rose-600 sm:block"
              >
                View all →
              </Link>

            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {relatedProducts.map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                />
              ))}
            </div>

            <div className="mt-7 text-center sm:hidden">
              <Link
                to="/shop"
                className="text-sm font-bold text-rose-500"
              >
                View all flowers →
              </Link>
            </div>

          </div>

        </section>
      )}

    </main>
  );
}

export default ProductDetails;