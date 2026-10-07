import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Check,
  Flower2,
  Gift,
  Heart,
  Leaf,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";

import products from "../data/products";


/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
  {
    name: "Roses",
    image:
      "https://images.unsplash.com/photo-1495231916356-a86217efff12?auto=format&fit=crop&w=900&q=90",
  },
  {
    name: "Lilies",
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=90",
  },
  {
    name: "Orchids",
    image:
      "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?auto=format&fit=crop&w=900&q=90",
  },
  {
    name: "Sunflowers",
    image:
      "https://images.unsplash.com/photo-1597848212624-e19e7f2f8c2b?auto=format&fit=crop&w=900&q=90",
  },
  {
    name: "Mixed",
    image:
      "https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=900&q=90",
  },
  {
    name: "Gifts",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=90",
  },
];


/* =========================================================
   SCROLL REVEAL COMPONENT
========================================================= */

function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -70px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const directionClass = {
    up: visible
      ? "translate-y-0 opacity-100"
      : "translate-y-14 opacity-0",

    left: visible
      ? "translate-x-0 opacity-100"
      : "-translate-x-14 opacity-0",

    right: visible
      ? "translate-x-0 opacity-100"
      : "translate-x-14 opacity-0",

    scale: visible
      ? "scale-100 opacity-100"
      : "scale-90 opacity-0",
  }[direction];

  return (
    <div
      ref={ref}
      className={`transform-gpu transition-all duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] ${directionClass} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}


/* =========================================================
   STAGGER WRAPPER
========================================================= */

function StaggerGrid({ children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      data-visible={visible}
    >
      {children}
    </div>
  );
}


/* =========================================================
   HOME PAGE
========================================================= */

export default function Home() {
  const featuredProducts = products.slice(0, 8);

  return (
    <main className="overflow-hidden bg-[#fffaf7]">

      {/* =====================================================
          ADVANCED SCROLL ANIMATION STYLES
      ====================================================== */}

      <style>{`

        /* -----------------------------------------------
           BASE
        ------------------------------------------------ */

        html {
          scroll-behavior: smooth;
        }

        /* -----------------------------------------------
           STAGGER CARDS
        ------------------------------------------------ */

        .bloomora-stagger > * {
          opacity: 0;
          transform: translateY(45px) scale(0.97);
          transition:
            opacity 800ms cubic-bezier(.22,1,.36,1),
            transform 800ms cubic-bezier(.22,1,.36,1);
        }

        .bloomora-stagger[data-visible="true"] > * {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .bloomora-stagger[data-visible="true"] > *:nth-child(1) {
          transition-delay: 80ms;
        }

        .bloomora-stagger[data-visible="true"] > *:nth-child(2) {
          transition-delay: 160ms;
        }

        .bloomora-stagger[data-visible="true"] > *:nth-child(3) {
          transition-delay: 240ms;
        }

        .bloomora-stagger[data-visible="true"] > *:nth-child(4) {
          transition-delay: 320ms;
        }

        .bloomora-stagger[data-visible="true"] > *:nth-child(5) {
          transition-delay: 400ms;
        }

        .bloomora-stagger[data-visible="true"] > *:nth-child(6) {
          transition-delay: 480ms;
        }

        .bloomora-stagger[data-visible="true"] > *:nth-child(7) {
          transition-delay: 560ms;
        }

        .bloomora-stagger[data-visible="true"] > *:nth-child(8) {
          transition-delay: 640ms;
        }

        /* -----------------------------------------------
           SECTION HEADING
        ------------------------------------------------ */

        .bloomora-section-heading {
          transition:
            opacity 900ms cubic-bezier(.22,1,.36,1),
            transform 900ms cubic-bezier(.22,1,.36,1);
        }

        /* -----------------------------------------------
           HOVER IMAGE EFFECT
        ------------------------------------------------ */

        .bloomora-scroll-image {
          overflow: hidden;
        }

        .bloomora-scroll-image img {
          transition:
            transform 1.2s cubic-bezier(.22,1,.36,1);
        }

        .bloomora-scroll-image:hover img {
          transform: scale(1.06);
        }

        /* -----------------------------------------------
           TRUST CARDS
        ------------------------------------------------ */

        .bloomora-trust-card {
          transition:
            transform 400ms ease,
            background-color 400ms ease;
        }

        .bloomora-trust-card:hover {
          transform: translateY(-6px);
          background-color: #fffaf7;
        }

        /* -----------------------------------------------
           CTA
        ------------------------------------------------ */

        .bloomora-cta {
          transition:
            transform 700ms cubic-bezier(.22,1,.36,1),
            box-shadow 700ms ease;
        }

        .bloomora-cta:hover {
          transform: translateY(-5px);
          box-shadow:
            0 30px 80px rgba(23,63,53,0.18);
        }

        /* -----------------------------------------------
           FLOATING DECORATION
        ------------------------------------------------ */

        @keyframes bloomoraSoftFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-12px);
          }
        }

        .bloomora-soft-float {
          animation: bloomoraSoftFloat 5s ease-in-out infinite;
        }

        /* -----------------------------------------------
           REDUCED MOTION
        ------------------------------------------------ */

        @media (prefers-reduced-motion: reduce) {

          html {
            scroll-behavior: auto;
          }

          .bloomora-stagger > *,
          .bloomora-section-heading,
          .bloomora-scroll-image img,
          .bloomora-cta {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }

          .bloomora-soft-float {
            animation: none !important;
          }
        }

      `}</style>


      {/* =====================================================
          HERO
      ====================================================== */}

      <Hero />


      {/* =====================================================
          CATEGORIES
      ====================================================== */}

      <section
        id="categories"
        className="scroll-mt-24 bg-white py-20 sm:py-24"
      >

        <div className="container-shell">

          {/* SECTION HEADING */}

          <ScrollReveal
            direction="up"
            className="bloomora-section-heading mb-10"
          >

            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

              <div>

                <div className="section-eyebrow">
                  Shop by collection
                </div>

                <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[#173f35] sm:text-5xl">

                  Find flowers for{" "}

                  <span className="text-[#d45b72]">
                    every feeling.
                  </span>

                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-stone-500">

                  Explore beautiful blooms carefully selected for every
                  celebration, emotion and special moment.

                </p>

              </div>


              <Link
                to="/shop"
                className="group inline-flex w-fit items-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-3 text-sm font-bold text-[#173f35] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >

                View all flowers

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </Link>

            </div>

          </ScrollReveal>


          {/* CATEGORY CARDS */}

          <StaggerGrid className="bloomora-stagger grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">

            {categories.map((category) => (

              <CategoryCard
                key={category.name}
                name={category.name}
                image={category.image}
              />

            ))}

          </StaggerGrid>

        </div>

      </section>


      {/* =====================================================
          FEATURED PRODUCTS
      ====================================================== */}

      <section className="bg-[#fffaf7] py-20 sm:py-24">

        <div className="container-shell">

          <ScrollReveal
            direction="up"
            className="bloomora-section-heading mb-10"
          >

            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

              <div>

                <div className="section-eyebrow">
                  Bloomora favourites
                </div>

                <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[#173f35] sm:text-5xl">

                  Loved by our{" "}

                  <span className="text-[#d45b72]">
                    customers.
                  </span>

                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-stone-500">

                  Our most-loved arrangements, freshly prepared and
                  beautifully presented.

                </p>

              </div>


              <Link
                to="/shop"
                className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#173f35] px-5 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#245b4d]"
              >

                Shop all flowers

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </Link>

            </div>

          </ScrollReveal>


          {/* PRODUCTS COME ONE AFTER ANOTHER */}

          <StaggerGrid className="bloomora-stagger grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">

            {featuredProducts.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))}

          </StaggerGrid>

        </div>

      </section>


      {/* =====================================================
          TRUST FEATURES
      ====================================================== */}

      <section className="border-y border-stone-200 bg-white">

        <div className="container-shell">

          <StaggerGrid className="bloomora-stagger grid grid-cols-2 divide-x divide-stone-200 md:grid-cols-4">

            {/* DELIVERY */}

            <div className="bloomora-trust-card flex items-center gap-3 px-4 py-7 sm:px-6">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#e7f5ed] text-[#173f35]">

                <Truck size={20} />

              </div>

              <div>

                <p className="text-sm font-bold text-[#173f35]">
                  Fast Delivery
                </p>

                <p className="mt-1 text-[11px] text-stone-400">
                  Same-day available
                </p>

              </div>

            </div>


            {/* LOVE */}

            <div className="bloomora-trust-card flex items-center gap-3 px-4 py-7 sm:px-6">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#fff0f3] text-[#d45b72]">

                <Heart size={20} />

              </div>

              <div>

                <p className="text-sm font-bold text-[#173f35]">
                  Made With Love
                </p>

                <p className="mt-1 text-[11px] text-stone-400">
                  Carefully arranged
                </p>

              </div>

            </div>


            {/* SECURITY */}

            <div className="bloomora-trust-card flex items-center gap-3 px-4 py-7 sm:px-6">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#fff6df] text-[#b47d15]">

                <ShieldCheck size={20} />

              </div>

              <div>

                <p className="text-sm font-bold text-[#173f35]">
                  Secure Shopping
                </p>

                <p className="mt-1 text-[11px] text-stone-400">
                  Safe checkout
                </p>

              </div>

            </div>


            {/* FRESHNESS */}

            <div className="bloomora-trust-card flex items-center gap-3 px-4 py-7 sm:px-6">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#edf5ed] text-[#4d795f]">

                <Leaf size={20} />

              </div>

              <div>

                <p className="text-sm font-bold text-[#173f35]">
                  Freshness Promise
                </p>

                <p className="mt-1 text-[11px] text-stone-400">
                  Fresh-picked flowers
                </p>

              </div>

            </div>

          </StaggerGrid>

        </div>

      </section>


      {/* =====================================================
          ABOUT BLOOMORA
      ====================================================== */}

      <section
        id="about"
        className="scroll-mt-24 bg-white py-20 sm:py-24"
      >

        <div className="container-shell">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* IMAGE */}

            <ScrollReveal
              direction="left"
              className="bloomora-scroll-image group relative overflow-hidden rounded-[32px]"
            >

              <img
                src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=90"
                alt="Beautiful Bloomora flowers"
                className="h-[420px] w-full object-cover sm:h-[520px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#102f29]/40 to-transparent" />


              {/* FLOATING BADGE */}

              <div className="bloomora-soft-float absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff0f3] text-[#d45b72]">

                    <Flower2 size={18} />

                  </div>

                  <div>

                    <p className="text-sm font-bold text-[#173f35]">
                      Bloomora
                    </p>

                    <p className="text-[10px] text-stone-400">
                      Flowers with feeling
                    </p>

                  </div>

                </div>

              </div>

            </ScrollReveal>


            {/* CONTENT */}

            <ScrollReveal
              direction="right"
              delay={180}
            >

              <div>

                <div className="section-eyebrow">
                  About Bloomora
                </div>

                <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-[#173f35] sm:text-5xl">

                  More than flowers.

                  <br />

                  <span className="text-[#d45b72]">
                    It's a feeling.
                  </span>

                </h2>

                <p className="mt-6 text-sm leading-7 text-stone-500">

                  At Bloomora, we believe flowers are one of the
                  simplest and most beautiful ways to express what
                  words sometimes cannot.

                </p>

                <p className="mt-4 text-sm leading-7 text-stone-500">

                  From romantic roses and elegant lilies to bright
                  sunflowers and thoughtful gift arrangements, every
                  Bloomora bouquet is selected and prepared with care.

                </p>


                {/* FEATURES */}

                <StaggerGrid className="bloomora-stagger mt-7 grid gap-4 sm:grid-cols-2">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e7f5ed] text-[#173f35]">
                      <Check size={17} />
                    </div>

                    <div>

                      <p className="text-sm font-bold text-[#173f35]">
                        Fresh Flowers
                      </p>

                      <p className="text-[11px] text-stone-400">
                        Carefully selected
                      </p>

                    </div>

                  </div>


                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff0f3] text-[#d45b72]">
                      <Heart size={17} />
                    </div>

                    <div>

                      <p className="text-sm font-bold text-[#173f35]">
                        Made With Love
                      </p>

                      <p className="text-[11px] text-stone-400">
                        Thoughtfully arranged
                      </p>

                    </div>

                  </div>


                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff6df] text-[#b47d15]">
                      <Leaf size={17} />
                    </div>

                    <div>

                      <p className="text-sm font-bold text-[#173f35]">
                        Fresh Delivery
                      </p>

                      <p className="text-[11px] text-stone-400">
                        Delivered with care
                      </p>

                    </div>

                  </div>


                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#edf5ed] text-[#4d795f]">
                      <Sparkles size={17} />
                    </div>

                    <div>

                      <p className="text-sm font-bold text-[#173f35]">
                        Beautiful Moments
                      </p>

                      <p className="text-[11px] text-stone-400">
                        Made memorable
                      </p>

                    </div>

                  </div>

                </StaggerGrid>


                <Link
                  to="/shop"
                  className="bloomora-btn bloomora-btn-primary mt-8 inline-flex"
                >

                  Explore Flowers

                  <ArrowRight size={16} />

                </Link>

              </div>

            </ScrollReveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          SPECIAL CTA
      ====================================================== */}

      <section className="bg-[#fffaf7] py-20 sm:py-24">

        <div className="container-shell">

          <ScrollReveal
            direction="scale"
            className="bloomora-cta relative overflow-hidden rounded-[32px] bg-[#173f35] px-6 py-12 sm:px-10 lg:px-16"
          >

            {/* DECORATION */}

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#f7b8c4]/10 blur-3xl" />

            <div className="absolute -bottom-20 left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />


            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_auto]">

              <div>

                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white">

                  <Sparkles size={13} />

                  Bloomora special

                </div>

                <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">

                  Make someone's day{" "}

                  <span className="text-[#f7b8c4]">
                    bloom.
                  </span>

                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-white/65">

                  Send a little happiness with a beautifully arranged
                  bouquet delivered straight to their doorstep.

                </p>

              </div>


              <Link
                to="/shop"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#173f35] shadow-xl transition-all duration-300 hover:-translate-y-1"
              >

                Shop Flowers

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />

              </Link>

            </div>

          </ScrollReveal>

        </div>

      </section>


      {/* =====================================================
          NEWSLETTER
      ====================================================== */}

      <section className="bg-white py-20 sm:py-24">

        <div className="container-shell">

          <ScrollReveal
            direction="up"
            className="text-center"
          >

            <div className="mx-auto max-w-3xl">

              <div className="bloomora-soft-float mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#fff0f3] text-[#d45b72]">

                <Gift size={20} />

              </div>

              <h2 className="font-display text-4xl font-semibold text-[#173f35] sm:text-5xl">

                A little bloom in{" "}

                <span className="text-[#d45b72]">
                  your inbox.
                </span>

              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-stone-500">

                Get seasonal flower inspiration, gifting ideas and
                exclusive Bloomora offers.

              </p>


              <div className="mx-auto mt-7 flex max-w-lg flex-col gap-3 sm:flex-row">

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="bloomora-input"
                />

                <button
                  type="button"
                  className="bloomora-btn bloomora-btn-primary shrink-0"
                >

                  Subscribe

                  <ArrowRight size={15} />

                </button>

              </div>

            </div>

          </ScrollReveal>

        </div>

      </section>

    </main>
  );
}