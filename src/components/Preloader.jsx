import { useEffect, useState } from "react";
import { Flower2, Sparkles } from "lucide-react";

export default function Preloader({ onComplete }) {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Intro stays visible for 2 seconds
    const startExit = setTimeout(() => {
      setExit(true);
    }, 2000);

    // Completely finish shortly after exit begins
    const finish = setTimeout(() => {
      document.body.style.overflow = "";
      onComplete?.();
    }, 2650);

    return () => {
      clearTimeout(startExit);
      clearTimeout(finish);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <div className={`bloomora-intro ${exit ? "bloomora-intro-exit" : ""}`}>
      <style>{`
        .bloomora-intro {
          position: fixed;
          inset: 0;
          z-index: 99999;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #102f29;
          isolation: isolate;
        }

        .bloomora-intro-bg {
          position: absolute;
          inset: -5%;
          background-image:
            linear-gradient(
              135deg,
              rgba(10, 37, 31, 0.86),
              rgba(16, 47, 41, 0.62),
              rgba(10, 31, 27, 0.9)
            ),
            url("https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=2200&q=90");
          background-position: center;
          background-size: cover;
          animation: bloomoraBgIn 1.8s ease-out forwards;
          transform: scale(1.04);
        }

        .bloomora-intro-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at center,
              rgba(255,255,255,0.08),
              transparent 35%
            ),
            linear-gradient(
              to bottom,
              rgba(0,0,0,0.08),
              rgba(0,0,0,0.2)
            );
        }

        .bloomora-intro-content {
          position: relative;
          z-index: 5;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 24px;
          animation: bloomoraContentIn 1.15s cubic-bezier(.22,1,.36,1) both;
        }

        .bloomora-intro-logo {
          width: 76px;
          height: 76px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255,255,255,0.96);
          color: #173f35;
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.25),
            0 15px 50px rgba(0,0,0,0.28);
          animation: bloomoraLogo 1.2s cubic-bezier(.22,1,.36,1) both;
        }

        .bloomora-intro-title {
          margin-top: 22px;
          color: white;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(42px, 8vw, 76px);
          line-height: 0.95;
          font-weight: 600;
          letter-spacing: -0.04em;
          animation: bloomoraTitle 1.1s cubic-bezier(.22,1,.36,1) 0.15s both;
        }

        .bloomora-intro-tagline {
          margin-top: 16px;
          color: rgba(255,255,255,0.72);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.34em;
          text-transform: uppercase;
          animation: bloomoraTagline 0.9s ease-out 0.35s both;
        }

        .bloomora-intro-line {
          width: 70px;
          height: 1px;
          margin-top: 22px;
          background: rgba(255,255,255,0.35);
          animation: bloomoraLine 0.8s ease-out 0.45s both;
        }

        .bloomora-intro-bottom {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 6;
          display: flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
          color: rgba(255,255,255,0.52);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          animation: bloomoraBottom 0.8s ease-out 0.55s both;
        }

        .bloomora-petal {
          position: absolute;
          z-index: 3;
          width: 9px;
          height: 15px;
          border-radius: 100% 0 100% 0;
          background: rgba(255, 183, 198, 0.75);
          filter: blur(0.2px);
          opacity: 0;
          animation: bloomoraPetal 3.5s linear infinite;
        }

        .bloomora-petal:nth-child(1) {
          left: 12%;
          top: 12%;
          animation-delay: 0.3s;
          transform: rotate(25deg);
        }

        .bloomora-petal:nth-child(2) {
          left: 82%;
          top: 18%;
          animation-delay: 1s;
          transform: rotate(70deg);
        }

        .bloomora-petal:nth-child(3) {
          left: 88%;
          top: 65%;
          animation-delay: 1.8s;
          transform: rotate(15deg);
        }

        .bloomora-petal:nth-child(4) {
          left: 15%;
          top: 72%;
          animation-delay: 2.3s;
          transform: rotate(80deg);
        }

        .bloomora-petal:nth-child(5) {
          left: 68%;
          top: 82%;
          animation-delay: 2.8s;
          transform: rotate(35deg);
        }

        .bloomora-intro-exit .bloomora-intro-bg {
          animation: bloomoraBgOut 0.65s cubic-bezier(.22,1,.36,1) forwards;
        }

        .bloomora-intro-exit .bloomora-intro-overlay {
          animation: bloomoraOverlayOut 0.65s ease forwards;
        }

        .bloomora-intro-exit .bloomora-intro-content {
          animation: bloomoraContentOut 0.65s cubic-bezier(.22,1,.36,1) forwards;
        }

        .bloomora-intro-exit .bloomora-intro-bottom {
          animation: bloomoraBottomOut 0.4s ease forwards;
        }

        @keyframes bloomoraBgIn {
          from {
            transform: scale(1.08);
          }
          to {
            transform: scale(1);
          }
        }

        @keyframes bloomoraContentIn {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bloomoraLogo {
          from {
            opacity: 0;
            transform: scale(0.65) rotate(-12deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0);
          }
        }

        @keyframes bloomoraTitle {
          from {
            opacity: 0;
            transform: translateY(18px);
            letter-spacing: 0.04em;
          }
          to {
            opacity: 1;
            transform: translateY(0);
            letter-spacing: -0.04em;
          }
        }

        @keyframes bloomoraTagline {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bloomoraLine {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 70px;
            opacity: 1;
          }
        }

        @keyframes bloomoraBottom {
          from {
            opacity: 0;
            transform: translate(-50%, 10px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }

        @keyframes bloomoraPetal {
          0% {
            opacity: 0;
            transform: translateY(-20px) rotate(0deg);
          }
          15% {
            opacity: 0.8;
          }
          85% {
            opacity: 0.55;
          }
          100% {
            opacity: 0;
            transform: translateY(120px) rotate(220deg);
          }
        }

        @keyframes bloomoraBgOut {
          from {
            opacity: 1;
            transform: scale(1);
          }
          to {
            opacity: 0;
            transform: scale(1.06);
          }
        }

        @keyframes bloomoraOverlayOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        @keyframes bloomoraContentOut {
          from {
            opacity: 1;
            transform: scale(1);
          }
          to {
            opacity: 0;
            transform: scale(1.05);
          }
        }

        @keyframes bloomoraBottomOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        @media (max-width: 640px) {
          .bloomora-intro-logo {
            width: 68px;
            height: 68px;
          }

          .bloomora-intro-title {
            font-size: 46px;
          }

          .bloomora-intro-tagline {
            font-size: 8px;
            letter-spacing: 0.25em;
          }

          .bloomora-intro-bottom {
            bottom: 22px;
            font-size: 7px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bloomora-intro-bg,
          .bloomora-intro-content,
          .bloomora-intro-logo,
          .bloomora-intro-title,
          .bloomora-intro-tagline,
          .bloomora-intro-line,
          .bloomora-intro-bottom,
          .bloomora-petal {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>

      <div className="bloomora-intro-bg" />
      <div className="bloomora-intro-overlay" />

      <span className="bloomora-petal" />
      <span className="bloomora-petal" />
      <span className="bloomora-petal" />
      <span className="bloomora-petal" />
      <span className="bloomora-petal" />

      <div className="bloomora-intro-content">
        <div className="bloomora-intro-logo">
          <Flower2 size={31} strokeWidth={1.7} />
        </div>

        <h1 className="bloomora-intro-title">
          Bloomora
        </h1>

        <p className="bloomora-intro-tagline">
          Flowers & Gifts
        </p>

        <div className="bloomora-intro-line" />
      </div>

      <div className="bloomora-intro-bottom">
        <Sparkles size={11} />
        Crafted for beautiful moments
      </div>
    </div>
  );
}