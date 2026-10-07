import { Link } from "react-router-dom";
import { ArrowLeft, Heart, ShoppingBag, Trash2 } from "lucide-react";

import { products } from "../data/products";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

function Wishlist() {
  const {
    wishlist,
    toggleWishlist,
    clearWishlist,
  } = useWishlist();

  const { addToCart } = useCart();

  const wishlistProducts = products.filter((product) =>
    wishlist.includes(product.id)
  );

  const handleAddAllToCart = () => {
    wishlistProducts.forEach((product) => {
      addToCart(product);
    });
  };

  return (
    <main className="min-h-screen bg-[#fffaf7] px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <Link
              to="/shop"
              className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-rose-500"
            >
              <ArrowLeft size={16} />
              Continue Shopping
            </Link>

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-500">
                <Heart
                  size={23}
                  className="fill-current"
                />
              </div>

              <div>
                <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                  My Wishlist
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                  {wishlistProducts.length}{" "}
                  {wishlistProducts.length === 1
                    ? "flower"
                    : "flowers"}{" "}
                  saved for later
                </p>
              </div>

            </div>
          </div>

          {/* ACTIONS */}

          {wishlistProducts.length > 0 && (
            <div className="flex gap-2">

              <button
                type="button"
                onClick={handleAddAllToCart}
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-xs font-bold text-white transition hover:bg-rose-500 sm:text-sm"
              >
                <ShoppingBag size={16} />
                Add All to Cart
              </button>

              <button
                type="button"
                onClick={clearWishlist}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-xs font-bold text-slate-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500 sm:text-sm"
              >
                <Trash2 size={16} />
                <span className="hidden sm:inline">
                  Clear
                </span>
              </button>

            </div>
          )}

        </div>

        {/* EMPTY STATE */}

        {wishlistProducts.length === 0 ? (
          <div className="rounded-[2rem] border border-rose-100 bg-white px-6 py-20 text-center shadow-sm">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-rose-50 text-rose-400">
              <Heart
                size={35}
                className="fill-rose-100"
              />
            </div>

            <h2 className="mt-6 text-2xl font-black text-slate-900">
              Your wishlist is empty
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
              Save your favorite flowers here and come back
              whenever you're ready to make someone smile.
            </p>

            <Link
              to="/shop"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-rose-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-rose-200 transition hover:-translate-y-0.5 hover:bg-rose-600"
            >
              <ShoppingBag size={17} />
              Explore Flowers
            </Link>

          </div>
        ) : (

          /* PRODUCTS */

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">

            {wishlistProducts.map((product) => (
              <div
                key={product.id}
                className="relative"
              >

                <ProductCard product={product} />

                {/* REMOVE BUTTON */}

                <button
                  type="button"
                  onClick={() =>
                    toggleWishlist(product.id)
                  }
                  aria-label={`Remove ${product.name} from wishlist`}
                  className="absolute bottom-24 right-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 shadow-md transition hover:border-red-200 hover:bg-red-50 hover:text-red-500 sm:bottom-24"
                >
                  <Trash2 size={15} />
                </button>

              </div>
            ))}

          </div>
        )}

      </div>
    </main>
  );
}

export default Wishlist;