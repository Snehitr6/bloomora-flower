import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Home,
  PackageCheck,
  ShoppingBag,
} from "lucide-react";

export default function OrderSuccess() {
  const order = JSON.parse(
    localStorage.getItem("bloomora-last-order") || "null"
  );

  const orderId = order?.orderId || "BLM00000000";

  return (
    <main className="min-h-screen bg-[#fffaf7] px-4 pb-20 pt-28">
      <div className="mx-auto max-w-3xl">

        <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl">

          <div className="relative overflow-hidden bg-gradient-to-br from-rose-500 to-pink-600 px-6 py-14 text-center text-white sm:px-10">

            <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-white/10" />
            <div className="absolute -bottom-20 -right-10 h-48 w-48 rounded-full bg-white/10" />

            <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg">
              <Check size={38} className="text-rose-500" strokeWidth={3} />
            </div>

            <p className="relative mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              Order Confirmed
            </p>

            <h1 className="relative mt-2 text-3xl font-bold sm:text-4xl">
              Thank You!
            </h1>

            <p className="relative mx-auto mt-3 max-w-lg text-white/80">
              Your beautiful flowers are on their way. We've received your
              order successfully.
            </p>
          </div>

          <div className="p-6 sm:p-10">

            <div className="rounded-2xl bg-slate-50 p-5 text-center">
              <p className="text-sm text-slate-500">
                Your Order ID
              </p>

              <p className="mt-1 text-2xl font-bold tracking-wider text-slate-900">
                #{orderId}
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">

              <InfoCard
                icon={<PackageCheck size={21} />}
                title="Order Confirmed"
                text="Your order has been placed."
              />

              <InfoCard
                icon={<ShoppingBag size={21} />}
                title="Being Prepared"
                text="Our team will prepare your flowers."
              />

              <InfoCard
                icon={<Home size={21} />}
                title="Delivery"
                text="Fresh blooms coming to your door."
              />

            </div>

            {order && (
              <div className="mt-8 rounded-2xl border border-slate-100 p-5">
                <h2 className="font-bold text-slate-900">
                  Delivery To
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {order.customer.firstName} {order.customer.lastName}
                  <br />
                  {order.customer.address}
                  <br />
                  {order.customer.city}, {order.customer.state} -{" "}
                  {order.customer.pincode}
                  <br />
                  Phone: {order.customer.phone}
                </p>
              </div>
            )}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/shop"
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-4 font-semibold text-white transition hover:bg-rose-500"
              >
                Continue Shopping
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/"
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 px-6 py-4 font-semibold text-slate-700 transition hover:border-rose-300 hover:text-rose-500"
              >
                <Home size={18} />
                Back Home
              </Link>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function InfoCard({ icon, title, text }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-5 text-center">
      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-rose-100 text-rose-500">
        {icon}
      </div>

      <h3 className="mt-3 text-sm font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-1 text-xs leading-5 text-slate-500">
        {text}
      </p>
    </div>
  );
}