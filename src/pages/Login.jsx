import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Eye,
  EyeOff,
  Flower2,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
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

    const email = formData.email.trim();
    const password = formData.password.trim();

    if (!email || !password) {
      setError("Please enter your email and password.");
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

    // Demo login
    localStorage.setItem(
      "bloomora-user",
      JSON.stringify({
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

        <section className="relative hidden min-h-[680px] overflow-hidden bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-500 lg:block">

          <img
            src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=85"
            alt="Beautiful flowers"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-rose-600/90 via-pink-500/80 to-fuchsia-600/90" />

          <div className="relative z-10 flex h-full flex-col justify-between p-12 text-white">

            <div>
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md">
                <Flower2 size={30} />
              </div>

              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-white/80">
                Welcome to Bloomora
              </p>

              <h1 className="max-w-md text-5xl font-black leading-[1.08]">
                Flowers that make every moment beautiful.
              </h1>

              <p className="mt-6 max-w-md text-base leading-7 text-white/80">
                Discover fresh flowers, premium bouquets and beautiful
                arrangements crafted to make your special moments memorable.
              </p>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-rose-500">
                  <ShieldCheck size={22} />
                </div>

                <div>
                  <h3 className="font-bold">
                    Fresh & trusted delivery
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-white/75">
                    Carefully selected flowers delivered beautifully to your
                    doorstep.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* RIGHT SIDE */}

        <section className="flex min-h-[680px] items-center justify-center p-6 sm:p-10 lg:p-14">

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

            <div className="mb-8">
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-rose-500">
                Welcome back
              </p>

              <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Sign in to Bloomora
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Access your wishlist, orders and personalized flower
                recommendations.
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
              className="space-y-5"
            >

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
                    className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-rose-400 focus:bg-white focus:ring-4 focus:ring-rose-100"
                  />

                </div>
              </div>

              {/* PASSWORD */}

              <div>
                <div className="mb-2 flex items-center justify-between">

                  <label
                    htmlFor="password"
                    className="block text-sm font-bold text-slate-700"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    onClick={() => setError("Password reset is available in the demo version after account setup.")}
                    className="text-xs font-bold text-rose-500 transition hover:text-rose-600"
                  >
                    Forgot password?
                  </button>

                </div>

                <div className="relative">

                  <LockKeyhole
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-12 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-rose-400 focus:bg-white focus:ring-4 focus:ring-rose-100"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((current) => !current)
                    }
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                    className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-xl text-slate-400 transition hover:bg-rose-50 hover:text-rose-500"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>

                </div>
              </div>

              {/* REMEMBER */}

              <label className="flex cursor-pointer items-center gap-3">

                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-slate-300 accent-rose-500"
                />

                <span className="text-sm text-slate-500">
                  Remember me
                </span>

              </label>

              {/* SUBMIT */}

              <button
                type="submit"
                className="group flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-slate-900 px-6 text-sm font-bold text-white shadow-xl shadow-slate-200 transition duration-300 hover:-translate-y-0.5 hover:bg-rose-500 hover:shadow-rose-200"
              >
                Sign In

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

            </form>

            {/* SIGNUP */}

            <div className="mt-8 text-center">

              <p className="text-sm text-slate-500">
                Don't have an account?{" "}

                <Link
                  to="/signup"
                  className="font-bold text-rose-500 transition hover:text-rose-600"
                >
                  Create account
                </Link>
              </p>

            </div>

            {/* SHOP LINK */}

            <div className="mt-8 border-t border-slate-100 pt-6 text-center">

              <Link
                to="/shop"
                className="text-sm font-semibold text-slate-500 transition hover:text-rose-500"
              >
                Continue shopping →
              </Link>

            </div>

          </div>

        </section>

      </div>
    </main>
  );
}

export default Login;