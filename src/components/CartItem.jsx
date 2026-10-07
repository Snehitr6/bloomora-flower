import {
  Minus,
  Plus,
  Trash2,
} from "lucide-react";

import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-4 shadow-sm transition hover:shadow-md sm:p-5">
      <div className="flex gap-4">

        {/* PRODUCT IMAGE */}

        <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-slate-100 sm:h-32 sm:w-32">
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
          />
        </div>

        {/* PRODUCT INFO */}

        <div className="min-w-0 flex-1">

          <div className="flex items-start justify-between gap-3">

            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wider text-rose-500">
                {item.category}
              </p>

              <h2 className="mt-1 truncate text-base font-bold text-slate-900 sm:text-lg">
                {item.name}
              </h2>
            </div>

            {/* REMOVE */}

            <button
              type="button"
              onClick={() => removeFromCart(item.id)}
              aria-label={`Remove ${item.name}`}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-slate-400 transition hover:bg-red-50 hover:text-red-500"
            >
              <Trash2 size={17} />
            </button>

          </div>

          {/* PRICE */}

          <div className="mt-2 flex items-center gap-2">

            <span className="font-bold text-rose-500">
              ₹{item.price.toLocaleString("en-IN")}
            </span>

            {item.oldPrice && (
              <span className="text-sm text-slate-400 line-through">
                ₹{item.oldPrice.toLocaleString("en-IN")}
              </span>
            )}

          </div>

          {/* BOTTOM */}

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">

            {/* QUANTITY */}

            <div className="flex items-center overflow-hidden rounded-full border border-slate-200 bg-slate-50">

              <button
                type="button"
                onClick={() => decreaseQuantity(item.id)}
                aria-label="Decrease quantity"
                className="flex h-9 w-9 items-center justify-center text-slate-600 transition hover:bg-white hover:text-rose-500"
              >
                <Minus size={15} />
              </button>

              <span className="min-w-[32px] text-center text-sm font-bold text-slate-900">
                {item.quantity}
              </span>

              <button
                type="button"
                onClick={() => increaseQuantity(item.id)}
                aria-label="Increase quantity"
                className="flex h-9 w-9 items-center justify-center text-slate-600 transition hover:bg-white hover:text-rose-500"
              >
                <Plus size={15} />
              </button>

            </div>

            {/* ITEM TOTAL */}

            <div className="text-right">
              <p className="text-xs text-slate-400">
                Item Total
              </p>

              <p className="font-bold text-slate-900">
                ₹{(
                  item.price * item.quantity
                ).toLocaleString("en-IN")}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;