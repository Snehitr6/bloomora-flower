import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Eye,
  EyeOff,
  Flower2,
  LockKeyhole,
  Mail,
  ShieldCheck,
  User,
} from "lucide-react";

function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (error) {
      setError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const password = formData.password;
    const confirmPassword = formData.confirmPassword;

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all required fields.");
      return;
    }

    if (name.length < 2) {
      setError("Please enter your full name.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!formData.terms) {
      setError("Please accept the terms and conditions.");
      return;
    }

    localStorage.setItem(
      "bloomora-user",
      JSON.stringify({
        name,
        email,
        loggedIn: true,
      })
    );

    navigate("/");
  };

  return (
    <main className="min-h-screen bg-[#fffaf7] px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-rose-100 bg-white shadow-[0_25px_80px_rgba(244,63,94,0.10)] lg:grid-cols-2">

        {/* LEFT SIDE */}

        <section className="relative hidden min-h-[720px] overflow-hidden bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-500 lg:block">

          <img
            src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=85"
            alt="Fresh flowers"
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-rose-600/95 via-pink-500/85 to-fuchsia-600/90" />

          <div className="relative z-10 flex h-full flex-col justify-between p-12 text-white">

            <div>

              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md">
                <Flower2 size={30} />
              </div>

              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-white/80">
                Join Bloomora
              </p>

              <h1 className="max-w-md text-5xl font-black leading-[1.08]">
                Bring more beauty into every day.
              </h1>

              <p className="mt-6 max-w-md text-base leading-7 text-white/80">
                Create your Bloomora account and discover beautiful
                flowers, exclusive offers and easy ordering.
              </p>

            </div>

            <div className="space-y-3">

              <Benefit
                text="Fresh flowers delivered to your doorstep"
              />

              <Benefit
                text="Save your favorite flowers"
              />

              <Benefit
                text="Track your orders easily"
              />

              <Benefit
                text="Exclusive Bloomora offers"
              />

            </div>

          </div>
        </section>

        {/* RIGHT SIDE */}

        <section className="flex min-h-[720px] items-center justify-center p-6 sm:p-10 lg:p-14">

          <div className="w-full max-w-md">

            {/* MOBILE BRAND */}

            <div className="mb-8 flex items-center gap-3 lg:hidden">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-500 text-white shadow-lg shadow-rose-200">
                <Flower2 size={23} />
              </div>

              <div>
                <h2 className="text-xl font-black text-slate-900">
                  Bloomora
                </h2>

                <p className="text-xs text-slate-400">
                  Flowers & beautiful moments
                </p>
              </div>

            </div>

            {/* HEADER */}

            <div className="mb-7">

              <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-rose-500">
                Create account
              </p>

              <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Join Bloomora
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Create an account to save your favorites and enjoy
                a smoother shopping experience.
              </p>

            </div>

            {/* ERROR */}

            {error && (
              <div className="mb-5 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                {error}
              </div>
            )}

            {/* FORM */}

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              {/* NAME */}

              <div>

                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-bold text-slate-700"
                >
                  Full name
                </label>

                <div className="relative">

                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-rose-400 focus:bg-white focus:ring-4 focus:ring-rose-100"
                  />

                </div>

              </div>

              {/* EMAIL */}

              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold text-slate-700"
                >
                  Email address
                </label>

                <div className="relative">

                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-rose-400 focus:bg-white focus:ring-4 focus:ring-rose-100"
                  />

                </div>

              </div>

              {/* PASSWORD */}

              <div>

                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-bold text-slate-700"
                >
                  Password
                </label>

                <div className="relative">

                  <LockKeyhole
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="password"
                    name="password"
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    autoComplete="new-password"
                    className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-rose-400 focus:bg-white focus:ring-4 focus:ring-rose-100"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        (current) => !current
                      )
                    }
                    className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-xl text-slate-400 transition hover:bg-rose-50 hover:text-rose-500"
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>

                </div>

                <p className="mt-2 text-[11px] text-slate-400">
                  Use at least 6 characters.
                </p>

              </div>

              {/* CONFIRM PASSWORD */}

              <div>

                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-bold text-slate-700"
                >
                  Confirm password
                </label>

                <div className="relative">

                  <LockKeyhole
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-rose-400 focus:bg-white focus:ring-4 focus:ring-rose-100"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        (current) => !current
                      )
                    }
                    className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-xl text-slate-400 transition hover:bg-rose-50 hover:text-rose-500"
                    aria-label={
                      showConfirmPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>

                </div>

              </div>

              {/* TERMS */}

              <label className="flex cursor-pointer items-start gap-3 pt-1">

                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 accent-rose-500"
                />

                <span className="text-xs leading-5 text-slate-500">
                  I agree to Bloomora's{" "}
                  <span className="font-bold text-rose-500">
                    Terms & Conditions
                  </span>{" "}
                  and{" "}
                  <span className="font-bold text-rose-500">
                    Privacy Policy
                  </span>
                  .
                </span>

              </label>

              {/* SUBMIT */}

              <button
                type="submit"
                className="group flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-slate-900 px-6 text-sm font-bold text-white shadow-xl shadow-slate-200 transition duration-300 hover:-translate-y-0.5 hover:bg-rose-500 hover:shadow-rose-200"
              >
                Create Account

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

            </form>

            {/* LOGIN */}

            <div className="mt-7 text-center">

              <p className="text-sm text-slate-500">
                Already have an account?{" "}

                <Link
                  to="/login"
                  className="font-bold text-rose-500 transition hover:text-rose-600"
                >
                  Sign in
                </Link>
              </p>

            </div>

            {/* SECURITY */}

            <div className="mt-7 flex items-center justify-center gap-2 text-xs text-slate-400">

              <ShieldCheck
                size={15}
                className="text-emerald-500"
              />

              Your information is kept secure

            </div>

          </div>

        </section>

      </div>
    </main>
  );
}

function Benefit({ text }) {
  return (
    <div className="flex items-center gap-3">

      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
        <Check size={15} />
      </div>

      <span className="text-sm font-medium text-white/85">
        {text}
      </span>

    </div>
  );
}

export default Signup;