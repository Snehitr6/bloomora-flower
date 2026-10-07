import {
  ArrowUpRight,
  Flower2,
  Heart,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (id) => {
    if (window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }

    const section = document.getElementById(id);

    if (section) {
      const navbarHeight = 80;

      const sectionTop =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-[#17141c] text-white">
      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="mx-auto w-full max-w-[1400px] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">

          {/* =================================================
              BRAND
          ================================================== */}

          <div>
            {/* SAME BLOOMORA LOGO AS NAVBAR */}
            <Link
              to="/"
              onClick={scrollTop}
              className="group inline-flex items-center gap-2"
            >
              {/* Logo Icon */}
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#173f35] transition-transform duration-300 group-hover:rotate-6">
                <Flower2
                  size={19}
                  strokeWidth={1.8}
                />
              </span>

              {/* Logo Name */}
              <span className="leading-none">
                <span className="block font-display text-xl font-bold tracking-tight text-white">
                  Bloomora
                </span>

                <span className="mt-1 block text-[8px] font-bold uppercase tracking-[0.25em] text-white/55">
                  Flowers & Gifts
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">
              Beautiful flowers for beautiful moments.
              Freshly arranged, thoughtfully packed and
              delivered with love.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-7 flex items-center gap-3">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#f62b91] hover:bg-[#f62b91]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[17px] w-[17px] fill-none stroke-current"
                  strokeWidth="1.8"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1877f2]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px] fill-current"
                >
                  <path d="M14 8h3V4h-3c-3.3 0-5 1.9-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.7.3-1 1-1Z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#25D366]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px] fill-none stroke-current"
                  strokeWidth="1.8"
                >
                  <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z" />

                  <path d="M8.5 8.5c.3-.4.6-.4.9-.1l1 1c.2.2.2.5 0 .8l-.5.6c.6 1.1 1.4 1.8 2.5 2.4l.6-.5c.3-.2.6-.2.8 0l1 1c.3.3.3.6-.1.9-.5.4-1.2.6-1.8.4-2.1-.7-4.4-2.8-5.2-4.8-.3-.7-.1-1.3.8-1.7Z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:hello@bloomora.com"
                aria-label="Email"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff2858]"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>


          {/* =================================================
              QUICK LINKS
          ================================================== */}

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
              Explore
            </h3>

            <div className="mt-6 space-y-4">

              <Link
                to="/"
                onClick={scrollTop}
                className="block text-sm text-white/50 transition hover:translate-x-1 hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/shop"
                onClick={scrollTop}
                className="block text-sm text-white/50 transition hover:translate-x-1 hover:text-white"
              >
                Shop Flowers
              </Link>

              {/* CATEGORIES */}
              <button
                type="button"
                onClick={() => scrollToSection("categories")}
                className="block cursor-pointer border-0 bg-transparent p-0 text-left text-sm text-white/50 transition hover:translate-x-1 hover:text-white"
              >
                Categories
              </button>

              {/* ABOUT */}
              <button
                type="button"
                onClick={() => scrollToSection("about")}
                className="block cursor-pointer border-0 bg-transparent p-0 text-left text-sm text-white/50 transition hover:translate-x-1 hover:text-white"
              >
                About Bloomora
              </button>

              <Link
                to="/wishlist"
                className="block text-sm text-white/50 transition hover:translate-x-1 hover:text-white"
              >
                Wishlist
              </Link>

              <Link
                to="/cart"
                className="block text-sm text-white/50 transition hover:translate-x-1 hover:text-white"
              >
                Shopping Bag
              </Link>
            </div>
          </div>


          {/* =================================================
              CUSTOMER CARE
          ================================================== */}

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
              Customer Care
            </h3>

            <div className="mt-6 space-y-4">

              <Link
                to="/login"
                className="block text-sm text-white/50 transition hover:translate-x-1 hover:text-white"
              >
                My Account
              </Link>

              <Link
                to="/shop"
                className="block text-sm text-white/50 transition hover:translate-x-1 hover:text-white"
              >
                Delivery Information
              </Link>

              <Link
                to="/shop"
                className="block text-sm text-white/50 transition hover:translate-x-1 hover:text-white"
              >
                Freshness Promise
              </Link>

              <Link
                to="/shop"
                className="block text-sm text-white/50 transition hover:translate-x-1 hover:text-white"
              >
                Gift Flowers
              </Link>
            </div>
          </div>


          {/* =================================================
              CONTACT
          ================================================== */}

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
              Get in touch
            </h3>

            <div className="mt-6 space-y-5">

              {/* LOCATION */}
              <div className="flex items-start gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#ff4b72]">
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/35">
                    Visit us
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/65">
                    Bengaluru, Karnataka
                    <br />
                    India
                  </p>
                </div>
              </div>


              {/* PHONE */}
              <a
                href="tel:+919876543210"
                className="group flex items-center gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#ff4b72] transition group-hover:bg-[#ff2858] group-hover:text-white">
                  <Phone size={18} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/35">
                    Call us
                  </p>

                  <p className="mt-1 text-sm text-white/65 transition group-hover:text-white">
                    +91 98765 43210
                  </p>
                </div>
              </a>


              {/* EMAIL */}
              <a
                href="mailto:hello@bloomora.com"
                className="group flex items-center gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#ff4b72] transition group-hover:bg-[#ff2858] group-hover:text-white">
                  <Mail size={18} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/35">
                    Email us
                  </p>

                  <p className="mt-1 break-all text-sm text-white/65 transition group-hover:text-white">
                    hello@bloomora.com
                  </p>
                </div>
              </a>

            </div>
          </div>

        </div>
      </div>


      {/* =====================================================
          NEWSLETTER STRIP
      ====================================================== */}

      <div className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col items-start justify-between gap-5 px-5 py-7 sm:px-8 md:flex-row md:items-center lg:px-10">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff2858]/10 text-[#ff4b72]">
              <Sparkles size={17} />
            </div>

            <div>
              <p className="text-sm font-bold text-white">
                Stay in bloom
              </p>

              <p className="mt-1 text-xs text-white/40">
                Fresh flowers, gifting ideas & offers.
              </p>
            </div>

          </div>

          <Link
            to="/shop"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#173f35]"
          >
            Explore flowers

            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

        </div>
      </div>


      {/* =====================================================
          COPYRIGHT
      ====================================================== */}

      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-3 px-5 py-6 text-xs text-white/35 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">

        <p>
          © {new Date().getFullYear()} Bloomora. All rights reserved.
        </p>

        <div className="flex items-center gap-2">
          Made with

          <Heart
            size={13}
            fill="#ff2858"
            className="text-[#ff2858]"
          />

          for flower lovers.
        </div>

      </div>

    </footer>
  );
}