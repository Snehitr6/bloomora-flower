import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ShoppingBag,
  Trash2,
  ShieldCheck,
  Truck,
} from "lucide-react";

import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

function Cart() {
  const {
    cart,
    subtotal,
    delivery,
    total,
    clearCart,
  } = useCart();

  const navigate = useNavigate();

  /* EMPTY CART */
  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-[#fffaf7] px-4 pb-20 pt-28">
        <div className="mx-auto flex min-h-[65vh] max-w-3xl items-center justify-center">
          <div className="w-full rounded-3xl bg-white p-8 text-center shadow-sm sm:p-12">

            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-rose-100">
              <ShoppingBag
                size={40}
                className="text-rose-500"
              />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">
              Your Shopping Bag
            </p>

            <h1 className="mt-2 text-3xl font-bold text-slate-900">
              Your cart is empty
            </h1>

            <p className="mx-auto mt-3 max-w-md text-slate-500">
              You haven't added any flowers yet. Explore our beautiful
              collection and find something special.
            </p>

            <Link
              to="/shop"
              className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 font-semibold text-white transition hover:bg-rose-500 hover:shadow-lg"
            >
              Explore Flowers
              <ArrowRight size={18} />
            </Link>

          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fffaf7] px-4 pb-20 pt-28">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="mb-8">

          <Link
            to="/shop"
            className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-rose-500"
          >
            <ArrowLeft size={16} />
            Continue Shopping
          </Link>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">
                Shopping Bag
              </p>

              <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
                Your Cart
              </h1>

              <p className="mt-2 text-slate-500">
                {cart.length}{" "}
                {cart.length === 1 ? "product" : "products"} in your cart
              </p>
            </div>

            <button
              type="button"
              onClick={clearCart}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-50"
            >
              <Trash2 size={16} />
              Clear Cart
            </button>

          </div>
        </div>

        {/* CONTENT */}

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

          {/* CART ITEMS */}

          <div className="space-y-4">

            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
              />
            ))}

            {/* BENEFITS */}

            <div className="grid gap-4 pt-4 sm:grid-cols-2">

              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-emerald-600">
                    <Truck size={21} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Free Delivery
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      On orders above ₹999
                    </p>
                  </div>

                </div>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-600">
                    <ShieldCheck size={21} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Secure Checkout
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Safe and secure shopping
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* ORDER SUMMARY */}

          <aside className="h-fit rounded-3xl border border-slate-100 bg-white p-6 shadow-sm lg:sticky lg:top-28">

            <h2 className="text-xl font-bold text-slate-900">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4 border-b border-slate-100 pb-6">

              <div className="flex items-center justify-between text-slate-500">
                <span>Subtotal</span>

                <span className="font-semibold text-slate-900">
                  ₹{subtotal.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="flex items-center justify-between text-slate-500">
                <span>Delivery</span>

                <span className="font-semibold text-slate-900">
                  {delivery === 0
                    ? "FREE"
                    : `₹${delivery}`}
                </span>
              </div>

            </div>

            {/* TOTAL */}

            <div className="flex items-center justify-between py-6">

              <span className="text-lg font-bold text-slate-900">
                Total
              </span>

              <span className="text-2xl font-bold text-rose-500">
                ₹{total.toLocaleString("en-IN")}
              </span>

            </div>

            {/* FREE DELIVERY MESSAGE */}

            {subtotal < 999 && (
              <div className="mb-5 rounded-2xl bg-rose-50 p-4 text-sm leading-6 text-rose-700">
                Add{" "}
                <strong>
                  ₹{(999 - subtotal).toLocaleString("en-IN")}
                </strong>{" "}
                more to unlock free delivery.
              </div>
            )}

            {subtotal >= 999 && (
              <div className="mb-5 rounded-2xl bg-emerald-50 p-4 text-sm font-medium text-emerald-700">
                🎉 Congratulations! You've unlocked free delivery.
              </div>
            )}

            {/* CHECKOUT */}

            <button
              type="button"
              onClick={() => navigate("/checkout")}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-4 font-semibold text-white transition hover:bg-rose-500 hover:shadow-xl"
            >
              Proceed to Checkout
              <ArrowRight size={18} />
            </button>

            <Link
              to="/shop"
              className="mt-3 flex w-full items-center justify-center rounded-full border border-slate-200 px-6 py-3.5 font-semibold text-slate-700 transition hover:border-rose-300 hover:text-rose-500"
            >
              Continue Shopping
            </Link>

          </aside>
        </div>
      </div>
    </main>
  );
}

export default Cart;