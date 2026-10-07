import {
  ArrowRight,
  Check,
  Gift,
  Heart,
  Leaf,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bloomora-hero relative overflow-hidden">
      {/* =====================================================
          ADVANCED HERO ANIMATION STYLES
      ====================================================== */}

      <style>{`
        @keyframes bloomoraHeroZoom {
          0% {
            transform: scale(1.04);
          }
          50% {
            transform: scale(1.09);
          }
          100% {
            transform: scale(1.04);
          }
        }

        @keyframes bloomoraGlow {
          0%,
          100% {
            opacity: 0.25;
            transform: scale(1);
          }
          50% {
            opacity: 0.55;
            transform: scale(1.12);
          }
        }

        @keyframes bloomoraRevealUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bloomoraRevealLeft {
          from {
            opacity: 0;
            transform: translateX(-45px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bloomoraRevealRight {
          from {
            opacity: 0;
            transform: translateX(45px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes bloomoraFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes bloomoraFloatSlow {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          50% {
            transform: translate3d(0, -18px, 0) rotate(1deg);
          }
        }

        @keyframes bloomoraFloatReverse {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(10px);
          }
        }

        @keyframes bloomoraPulse {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(247, 184, 196, 0);
          }
          50% {
            transform: scale(1.04);
            box-shadow: 0 0 0 10px rgba(247, 184, 196, 0.08);
          }
        }

        @keyframes bloomoraShine {
          0% {
            transform: translateX(-130%) skewX(-18deg);
            opacity: 0;
          }
          15% {
            opacity: 0.45;
          }
          45%,
          100% {
            transform: translateX(150%) skewX(-18deg);
            opacity: 0;
          }
        }

        @keyframes bloomoraBadgeIn {
          0% {
            opacity: 0;
            transform: scale(0.7) translateY(15px);
          }
          70% {
            transform: scale(1.05) translateY(-2px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes bloomoraStatIn {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bloomoraSpark {
          0%,
          100% {
            opacity: 0.35;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        .bloomora-hero-bg {
          animation: bloomoraHeroZoom 18s ease-in-out infinite;
          transform-origin: center;
        }

        .bloomora-hero-glow {
          animation: bloomoraGlow 7s ease-in-out infinite;
        }

        .bloomora-hero-left {
          animation: bloomoraRevealLeft 0.9s cubic-bezier(.22,1,.36,1) both;
        }

        .bloomora-hero-eyebrow {
          animation: bloomoraRevealUp 0.7s 0.12s cubic-bezier(.22,1,.36,1) both;
        }

        .bloomora-hero-title {
          animation: bloomoraRevealUp 0.9s 0.24s cubic-bezier(.22,1,.36,1) both;
        }

        .bloomora-hero-description {
          animation: bloomoraRevealUp 0.8s 0.38s cubic-bezier(.22,1,.36,1) both;
        }

        .bloomora-hero-buttons {
          animation: bloomoraRevealUp 0.8s 0.5s cubic-bezier(.22,1,.36,1) both;
        }

        .bloomora-hero-trust {
          animation: bloomoraRevealUp 0.8s 0.62s cubic-bezier(.22,1,.36,1) both;
        }

        .bloomora-hero-stats {
          animation: bloomoraRevealUp 0.8s 0.76s cubic-bezier(.22,1,.36,1) both;
        }

        .bloomora-showcase {
          animation:
            bloomoraRevealRight 1.1s 0.2s cubic-bezier(.22,1,.36,1) both,
            bloomoraFloatSlow 7s 1.5s ease-in-out infinite;
          transform-origin: center;
        }

        .bloomora-delivery {
          animation:
            bloomoraBadgeIn 0.8s 1s cubic-bezier(.22,1,.36,1) both,
            bloomoraFloat 4.5s 1.8s ease-in-out infinite;
        }

        .bloomora-gift {
          animation:
            bloomoraBadgeIn 0.8s 1.25s cubic-bezier(.22,1,.36,1) both,
            bloomoraFloatReverse 5s 2s ease-in-out infinite;
        }

        .bloomora-rating {
          animation:
            bloomoraBadgeIn 0.7s 0.85s cubic-bezier(.22,1,.36,1) both,
            bloomoraFloat 5s 1.7s ease-in-out infinite;
        }

        .bloomora-fresh {
          animation:
            bloomoraBadgeIn 0.7s 0.7s cubic-bezier(.22,1,.36,1) both,
            bloomoraFloatReverse 4s 1.5s ease-in-out infinite;
        }

        .bloomora-shine {
          animation: bloomoraShine 7s 2s ease-in-out infinite;
        }

        .bloomora-stat-1 {
          animation: bloomoraStatIn 0.7s 0.85s cubic-bezier(.22,1,.36,1) both;
        }

        .bloomora-stat-2 {
          animation: bloomoraStatIn 0.7s 1s cubic-bezier(.22,1,.36,1) both;
        }

        .bloomora-stat-3 {
          animation: bloomoraStatIn 0.7s 1.15s cubic-bezier(.22,1,.36,1) both;
        }

        .bloomora-spark {
          animation: bloomoraSpark 2.5s ease-in-out infinite;
        }

        .bloomora-hero-button-primary {
          transition:
            transform 300ms ease,
            box-shadow 300ms ease;
        }

        .bloomora-hero-button-primary:hover {
          transform: translateY(-5px) scale(1.015);
          box-shadow:
            0 20px 45px rgba(0, 0, 0, 0.25),
            0 0 0 1px rgba(255, 255, 255, 0.2);
        }

        .bloomora-hero-button-secondary {
          transition:
            transform 300ms ease,
            background-color 300ms ease,
            border-color 300ms ease;
        }

        .bloomora-hero-button-secondary:hover {
          transform: translateY(-5px);
          background-color: rgba(255, 255, 255, 0.16);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .bloomora-showcase-inner {
          transition:
            transform 500ms cubic-bezier(.22,1,.36,1),
            box-shadow 500ms ease;
        }

        .bloomora-showcase:hover .bloomora-showcase-inner {
          transform: perspective(1000px) rotateX(1deg) rotateY(-2deg) scale(1.015);
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.35);
        }

        .bloomora-hero-image {
          transition: transform 1.2s cubic-bezier(.22,1,.36,1);
        }

        .bloomora-showcase:hover .bloomora-hero-image {
          transform: scale(1.055);
        }

        .bloomora-heart {
          animation: bloomoraPulse 3s ease-in-out infinite;
        }

        @media (max-width: 767px) {
          .bloomora-showcase {
            animation:
              bloomoraRevealRight 0.9s 0.2s cubic-bezier(.22,1,.36,1) both,
              bloomoraFloatSlow 8s 1.5s ease-in-out infinite;
          }

          .bloomora-hero-bg {
            animation: bloomoraHeroZoom 24s ease-in-out infinite;
          }

          .bloomora-gift {
            display: none;
          }

          .bloomora-hero {
            min-height: auto;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bloomora-hero *,
          .bloomora-hero-bg,
          .bloomora-hero-glow,
          .bloomora-hero-left,
          .bloomora-showcase,
          .bloomora-delivery,
          .bloomora-gift,
          .bloomora-rating,
          .bloomora-fresh,
          .bloomora-shine {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      {/* =====================================================
          ANIMATED BACKGROUND IMAGE
      ====================================================== */}

      <div
        className="bloomora-hero-bg absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=2200&q=90')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* =====================================================
          DARK GRADIENT OVERLAY
      ====================================================== */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(4,57,49,0.97) 0%, rgba(4,57,49,0.88) 36%, rgba(4,57,49,0.60) 70%, rgba(4,57,49,0.40) 100%)",
        }}
      />

      {/* =====================================================
          ANIMATED LIGHT GLOWS
      ====================================================== */}

      <div className="bloomora-hero-glow pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#f7b8c4]/15 blur-3xl" />

      <div
        className="bloomora-hero-glow pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#f5c451]/15 blur-3xl"
        style={{ animationDelay: "2s" }}
      />

      <div
        className="bloomora-hero-glow pointer-events-none absolute left-[45%] top-[15%] h-40 w-40 rounded-full bg-[#8de4cb]/10 blur-3xl"
        style={{ animationDelay: "4s" }}
      />

      {/* =====================================================
          SMALL FLOATING LIGHTS
      ====================================================== */}

      <span className="bloomora-spark pointer-events-none absolute left-[43%] top-[20%] h-1.5 w-1.5 rounded-full bg-[#f7c85d]" />

      <span
        className="bloomora-spark pointer-events-none absolute left-[57%] top-[32%] h-1 w-1 rounded-full bg-white"
        style={{ animationDelay: "0.8s" }}
      />

      <span
        className="bloomora-spark pointer-events-none absolute left-[73%] top-[20%] h-1.5 w-1.5 rounded-full bg-[#f7a9bb]"
        style={{ animationDelay: "1.4s" }}
      />

      <span
        className="bloomora-spark pointer-events-none absolute left-[87%] top-[65%] h-1 w-1 rounded-full bg-white"
        style={{ animationDelay: "1.9s" }}
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14 xl:px-16">

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.82fr] xl:gap-16">

          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="bloomora-hero-left max-w-[650px]">

            {/* EYEBROW */}

            <div className="bloomora-hero-eyebrow mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.17em] text-white/90 backdrop-blur-md sm:text-[10px]">

              <Sparkles
                size={13}
                className="bloomora-spark text-[#f7c85d]"
              />

              Fresh blooms • thoughtfully delivered

            </div>


            {/* HEADING */}

            <h1 className="bloomora-hero-title font-display text-[52px] font-semibold leading-[0.9] tracking-[-0.045em] text-white sm:text-[65px] md:text-[72px] lg:text-[76px] xl:text-[84px]">

              Flowers

              <br />

              <span className="relative inline-block text-[#f7a9bb]">

                that speak

                {/* animated underline glow */}

                <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-[#f7a9bb]/60 transition-transform duration-700 group-hover:scale-x-100" />

              </span>

              <br />

              for you.

            </h1>


            {/* DESCRIPTION */}

            <p className="bloomora-hero-description mt-5 max-w-[570px] text-sm leading-6 text-white/75 sm:text-base sm:leading-7">

              Discover beautiful flowers and hand-crafted
              bouquets designed for birthdays, celebrations,
              anniversaries and every special moment.

            </p>


            {/* BUTTONS */}

            <div className="bloomora-hero-buttons mt-7 flex flex-wrap items-center gap-3">

              <Link
                to="/shop"
                className="bloomora-hero-button-primary group inline-flex h-[54px] items-center gap-3 rounded-full bg-white px-3 py-2.5 text-sm font-bold text-[#173f35] shadow-xl"
              >

                <span className="pl-3">
                  Shop Flowers
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#173f35] sm:h-10 sm:w-10">

                  <ArrowRight
                    size={16}
                    className="text-white transition-transform duration-300 group-hover:translate-x-1"
                  />

                </span>

              </Link>


              <Link
                to="/shop"
                className="bloomora-hero-button-secondary group inline-flex h-[54px] items-center gap-3 rounded-full border border-white/25 bg-white/10 px-5 text-sm font-semibold text-white backdrop-blur-md"
              >

                Explore Collection

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </Link>

            </div>


            {/* TRUST POINTS */}

            <div className="bloomora-hero-trust mt-7 flex flex-wrap gap-x-6 gap-y-3">

              <div className="flex items-center gap-2 text-xs font-semibold text-white/75">

                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15">

                  <Check size={11} />

                </span>

                Same-day delivery

              </div>


              <div className="flex items-center gap-2 text-xs font-semibold text-white/75">

                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15">

                  <Check size={11} />

                </span>

                Freshness guaranteed

              </div>


              <div className="flex items-center gap-2 text-xs font-semibold text-white/75">

                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15">

                  <Check size={11} />

                </span>

                Gift-ready packaging

              </div>

            </div>


            {/* STATS */}

            <div className="bloomora-hero-stats mt-8 hidden max-w-[590px] grid-cols-3 border-t border-white/15 pt-5 sm:grid">

              <div className="bloomora-stat-1 border-r border-white/15">

                <p className="font-display text-3xl font-semibold text-white">
                  10K+
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/45">
                  Happy customers
                </p>

              </div>


              <div className="bloomora-stat-2 border-r border-white/15 pl-6">

                <div className="flex items-center gap-1">

                  <p className="font-display text-3xl font-semibold text-white">
                    4.9
                  </p>

                  <Star
                    size={15}
                    fill="#f6c453"
                    className="text-[#f6c453]"
                  />

                </div>

                <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/45">
                  Customer rating
                </p>

              </div>


              <div className="bloomora-stat-3 pl-6">

                <p className="font-display text-3xl font-semibold text-white">
                  100%
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/45">
                  Freshness promise
                </p>

              </div>

            </div>

          </div>


          {/* =================================================
              RIGHT FLOWER SHOWCASE
          ================================================== */}

          <div className="bloomora-showcase relative mx-auto w-full max-w-[520px] lg:ml-auto">

            {/* MAIN GLASS FRAME */}

            <div className="bloomora-showcase-inner relative rounded-[30px] border border-white/20 bg-white/10 p-2.5 shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:rounded-[34px] sm:p-3">

              {/* SHINE EFFECT */}

              <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-[30px] sm:rounded-[34px]">

                <div className="bloomora-shine absolute -left-1/2 top-0 h-full w-[35%] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              </div>


              {/* IMAGE */}

              <div className="relative overflow-hidden rounded-[23px] sm:rounded-[27px]">

                <img
                  src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1000&q=90"
                  alt="Bloomora flower arrangement"
                  className="bloomora-hero-image h-[430px] w-full object-cover sm:h-[470px] lg:h-[500px]"
                />


                {/* IMAGE OVERLAY */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#102f29] via-transparent to-transparent" />


                {/* FRESH BADGE */}

                <div className="bloomora-fresh absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#173f35]/80 px-3 py-2 text-[8px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md sm:left-5 sm:top-5">

                  <Leaf size={12} />

                  Freshly arranged

                </div>


                {/* RATING BADGE */}

                <div className="bloomora-rating absolute right-4 top-4 rounded-[18px] bg-white px-4 py-3 shadow-xl sm:right-5 sm:top-5">

                  <div className="flex items-center gap-1">

                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={10}
                        fill="#e9aa20"
                        className="text-[#e9aa20]"
                      />
                    ))}

                  </div>

                  <div className="mt-1.5 flex items-end gap-2">

                    <span className="font-display text-xl font-semibold text-[#173f35]">
                      4.9
                    </span>

                    <span className="mb-1 text-[8px] text-stone-400">
                      2k+ reviews
                    </span>

                  </div>

                </div>


                {/* PRODUCT INFORMATION */}

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">

                  <div className="rounded-[20px] border border-white/15 bg-[#102f29]/90 p-4 backdrop-blur-xl sm:p-5">

                    <div className="flex items-end justify-between gap-4">

                      <div>

                        <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-white/45">
                          Bloomora signature
                        </p>

                        <h3 className="mt-1 font-display text-2xl font-semibold text-white sm:text-3xl">
                          Garden Romance
                        </h3>

                        <p className="mt-1 text-xs text-white/55">
                          Hand-picked seasonal blooms
                        </p>

                      </div>


                      <div className="bloomora-heart flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">

                        <Heart
                          size={18}
                          fill="#d45b72"
                          className="text-[#d45b72]"
                        />

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                DELIVERY BADGE
            ================================================== */}

            <div className="bloomora-delivery absolute -bottom-4 left-4 flex items-center gap-3 rounded-[18px] border border-white/30 bg-white px-4 py-3 shadow-xl sm:-left-5 sm:px-5">

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#dff5e8] text-[#16834d]">

                <Truck size={17} />

              </div>

              <div>

                <p className="text-[8px] font-bold uppercase tracking-[0.13em] text-stone-400">
                  Delivery
                </p>

                <p className="mt-0.5 text-xs font-bold text-[#173f35]">
                  Fresh & Fast
                </p>

              </div>

            </div>


            {/* =================================================
                GIFT BADGE
            ================================================== */}

            <div className="bloomora-gift absolute right-2 top-[52%] hidden rounded-[16px] border border-white/20 bg-[#173f35]/90 px-4 py-3 shadow-xl backdrop-blur-md sm:flex sm:items-center sm:gap-3">

              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f7b8c4]/15 text-[#f7b8c4]">

                <Gift size={15} />

              </div>

              <div>

                <p className="text-[7px] font-bold uppercase tracking-[0.13em] text-white/45">
                  Perfect for
                </p>

                <p className="mt-0.5 text-[11px] font-bold text-white">
                  Every occasion
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}