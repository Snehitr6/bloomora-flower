import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  CreditCard,
  MapPin,
  ShieldCheck,
  ShoppingBag,
  Truck,
} from "lucide-react";

import { useCart } from "../context/CartContext";

function Checkout() {
  const navigate = useNavigate();

  const {
    cart,
    subtotal,
    delivery,
    total,
    clearCart,
  } = useCart();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [payment, setPayment] = useState("cod");
  const [error, setError] = useState("");

  /* EMPTY CART */

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-[#fffaf7] px-4 pb-20 pt-28">
        <div className="mx-auto flex min-h-[65vh] max-w-2xl items-center justify-center">

          <div className="w-full rounded-3xl bg-white p-8 text-center shadow-sm sm:p-12">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-rose-100">
              <ShoppingBag
                size={34}
                className="text-rose-500"
              />
            </div>

            <h1 className="mt-6 text-2xl font-bold text-slate-900">
              Your cart is empty
            </h1>

            <p className="mt-3 text-slate-500">
              Add some beautiful flowers before proceeding to checkout.
            </p>

            <Link
              to="/shop"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-rose-500 px-7 py-3.5 font-semibold text-white transition hover:bg-rose-600"
            >
              Browse Flowers
            </Link>

          </div>
        </div>
      </main>
    );
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");

    const requiredFields = Object.values(form);

    if (requiredFields.some((value) => !value.trim())) {
      setError("Please complete all delivery details.");
      return;
    }

    if (!/^[0-9]{10}$/.test(form.phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!/^[0-9]{6}$/.test(form.pincode)) {
      setError("Please enter a valid 6-digit PIN code.");
      return;
    }

    const orderId = `BLM${Date.now().toString().slice(-8)}`;

    const order = {
      orderId,
      customer: form,
      payment,
      items: cart,
      subtotal,
      delivery,
      total,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "bloomora-last-order",
      JSON.stringify(order)
    );

    clearCart();

    navigate("/order-success");
  };

  return (
    <main className="min-h-screen bg-[#fffaf7] px-4 pb-20 pt-28">
      <div className="mx-auto max-w-7xl">

        {/* BACK */}

        <Link
          to="/cart"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-rose-500"
        >
          <ArrowLeft size={16} />
          Back to Cart
        </Link>

        {/* HEADER */}

        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">
            Almost There
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Checkout
          </h1>

          <p className="mt-2 text-slate-500">
            Enter your delivery details and place your flower order.
          </p>
        </div>

        {/* ERROR */}

        {error && (
          <div className="mb-6 rounded-2xl border border-red-100 bg-red-50 px-5 py-4 text-sm font-medium text-red-600">
            {error}
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

          {/* LEFT */}

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* DELIVERY */}

            <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">

              <div className="mb-6 flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-100 text-rose-500">
                  <MapPin size={21} />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Delivery Details
                  </h2>

                  <p className="text-sm text-slate-500">
                    Where should we deliver your flowers?
                  </p>
                </div>

              </div>

              <div className="grid gap-4 sm:grid-cols-2">

                <Input
                  label="First Name"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                />

                <Input
                  label="Last Name"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                />

                <Input
                  label="Phone Number"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="10-digit number"
                  type="tel"
                />

                <Input
                  label="PIN Code"
                  name="pincode"
                  value={form.pincode}
                  onChange={handleChange}
                  placeholder="6-digit PIN"
                />

                <div className="sm:col-span-2">
                  <Input
                    label="Full Address"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="House number, street, area"
                  />
                </div>

                <Input
                  label="City"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="City"
                />

                <Input
                  label="State"
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  placeholder="State"
                />

              </div>
            </section>

            {/* PAYMENT */}

            <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">

              <div className="mb-6 flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <CreditCard size={21} />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Payment Method
                  </h2>

                  <p className="text-sm text-slate-500">
                    Choose how you'd like to pay.
                  </p>
                </div>

              </div>

              <div className="space-y-3">

                <PaymentOption
                  value="cod"
                  selected={payment}
                  onChange={setPayment}
                  title="Cash on Delivery"
                  description="Pay when your flowers arrive."
                />

                <PaymentOption
                  value="upi"
                  selected={payment}
                  onChange={setPayment}
                  title="UPI / Online Payment"
                  description="Demo online payment option."
                />

                <PaymentOption
                  value="card"
                  selected={payment}
                  onChange={setPayment}
                  title="Credit / Debit Card"
                  description="Demo card payment option."
                />

              </div>
            </section>

            {/* SECURITY */}

            <div className="flex items-center gap-3 rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-700">
              <ShieldCheck size={20} />

              <span>
                Your order information is securely handled for this demo.
              </span>
            </div>

            {/* PLACE ORDER */}

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-4 font-semibold text-white transition hover:bg-rose-500 hover:shadow-xl"
            >
              Place Order
              <CheckCircle2 size={19} />
            </button>

          </form>

          {/* RIGHT */}

          <aside className="h-fit rounded-3xl border border-slate-100 bg-white p-6 shadow-sm lg:sticky lg:top-28">

            <h2 className="text-xl font-bold text-slate-900">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 shrink-0 rounded-xl object-cover"
                  />

                  <div className="min-w-0 flex-1">

                    <h3 className="truncate text-sm font-semibold text-slate-900">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      Qty: {item.quantity}
                    </p>

                  </div>

                  <span className="text-sm font-semibold text-slate-900">
                    ₹{(
                      item.price * item.quantity
                    ).toLocaleString("en-IN")}
                  </span>

                </div>
              ))}

            </div>

            <div className="my-6 border-t border-slate-100" />

            <div className="space-y-3 text-sm">

              <div className="flex justify-between text-slate-500">
                <span>Subtotal</span>

                <span className="font-semibold text-slate-900">
                  ₹{subtotal.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="flex justify-between text-slate-500">
                <span>Delivery</span>

                <span className="font-semibold text-slate-900">
                  {delivery === 0
                    ? "FREE"
                    : `₹${delivery}`}
                </span>
              </div>

            </div>

            <div className="my-5 border-t border-slate-100" />

            <div className="flex justify-between">

              <span className="font-bold text-slate-900">
                Total
              </span>

              <span className="text-2xl font-bold text-rose-500">
                ₹{total.toLocaleString("en-IN")}
              </span>

            </div>

            <div className="mt-6 rounded-2xl bg-emerald-50 p-4">

              <div className="flex items-center gap-3">

                <Truck
                  size={20}
                  className="text-emerald-600"
                />

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Fresh delivery
                  </p>

                  <p className="text-xs text-slate-500">
                    Carefully packed and delivered.
                  </p>
                </div>

              </div>

            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}

function Input({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}) {
  return (
    <div>

      <label className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-rose-400 focus:bg-white focus:ring-4 focus:ring-rose-100"
      />

    </div>
  );
}

function PaymentOption({
  value,
  selected,
  onChange,
  title,
  description,
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(value)}
      className={`flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition ${
        selected === value
          ? "border-rose-400 bg-rose-50"
          : "border-slate-200 hover:border-rose-200"
      }`}
    >

      <div
        className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
          selected === value
            ? "border-rose-500"
            : "border-slate-300"
        }`}
      >
        {selected === value && (
          <div className="h-2.5 w-2.5 rounded-full bg-rose-500" />
        )}
      </div>

      <div>
        <h3 className="font-semibold text-slate-900">
          {title}
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          {description}
        </p>
      </div>

    </button>
  );
}

export default Checkout;