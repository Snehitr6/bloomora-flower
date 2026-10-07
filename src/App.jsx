import { useEffect, useState, useCallback } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";


/* =========================================================
   PAGE SCROLL
========================================================= */

function PageScroll() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    if (hash) return;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname, search, hash]);

  return null;
}


/* =========================================================
   APP
========================================================= */

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  const finishIntro = useCallback(() => {
    setShowIntro(false);
  }, []);

  return (
    <>
      {/* ===================================================
          BLOOMORA OPENING
      ==================================================== */}

      {showIntro && (
        <Preloader
          onComplete={finishIntro}
        />
      )}


      {/* ===================================================
          WEBSITE
      ==================================================== */}

      <div
        className={
          showIntro
            ? "pointer-events-none opacity-0"
            : "opacity-100"
        }
        style={{
          transition:
            "opacity 900ms cubic-bezier(.22,1,.36,1)",
        }}
      >

        <PageScroll />

        <Navbar />


        <main className="min-h-screen">

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/shop"
              element={<Shop />}
            />

            <Route
              path="/product/:id"
              element={<ProductDetails />}
            />

            <Route
              path="/cart"
              element={<Cart />}
            />

            <Route
              path="/wishlist"
              element={<Wishlist />}
            />

            <Route
              path="/login"
              element={<Login />}
            />

            <Route
              path="/signup"
              element={<Signup />}
            />

            <Route
              path="/checkout"
              element={<Checkout />}
            />

            <Route
              path="/order-success"
              element={<OrderSuccess />}
            />

            <Route
              path="*"
              element={
                <Navigate
                  to="/"
                  replace
                />
              }
            />

          </Routes>

        </main>


        <Footer />

      </div>
    </>
  );
}