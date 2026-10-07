import { useState } from "react";
import {
  Flower2,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  User,
  X,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const { cartItems } = useCart();
  const { wishlist } = useWishlist();

  const cartCount = cartItems?.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const wishlistCount = wishlist?.length || 0;

  /* ================================
     SCROLL TO HOME SECTION
  ================================= */
  const goToSection = (sectionId) => {
    setMobileMenu(false);

    // Already on Home page
    if (location.pathname === "/") {
      setTimeout(() => {
        const section = document.getElementById(sectionId);

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
      }, 50);

      return;
    }

    // From another page → go Home first with hash
    navigate(`/#${sectionId}`);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const value = search.trim();

    if (!value) return;

    setMobileMenu(false);
    setSearchOpen(false);

    navigate(`/shop?search=${encodeURIComponent(value)}`);
  };

  return (
    <>
      <header className="bloomora-navbar fixed left-0 right-0 top-0 z-[100]">
        <div className="container-shell">
          <div className="flex h-[76px] items-center justify-between gap-4">
            {/* LOGO */}
            <Link
              to="/"
              onClick={() => setMobileMenu(false)}
              className="group flex shrink-0 items-center gap-2"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#173f35] text-white transition-transform duration-300 group-hover:rotate-6">
                <Flower2 size={19} />
              </div>

              <div className="leading-none">
                <span className="font-display text-xl font-bold tracking-tight text-[#173f35]">
                  Bloomora
                </span>

                <span className="mt-1 block text-[8px] font-bold uppercase tracking-[0.25em] text-[#8b8178]">
                  Flowers & Gifts
                </span>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden items-center gap-7 lg:flex">
              <Link
                to="/"
                className={`text-sm font-semibold transition-colors ${
                  location.pathname === "/"
                    ? "text-[#173f35]"
                    : "text-[#6e746f] hover:text-[#173f35]"
                }`}
              >
                Home
              </Link>

              <Link
                to="/shop"
                className={`text-sm font-semibold transition-colors ${
                  location.pathname === "/shop"
                    ? "text-[#173f35]"
                    : "text-[#6e746f] hover:text-[#173f35]"
                }`}
              >
                Shop
              </Link>

              {/* CATEGORIES */}
              <button
                type="button"
                onClick={() => goToSection("categories")}
                className="cursor-pointer border-0 bg-transparent p-0 text-sm font-semibold text-[#6e746f] transition-colors hover:text-[#173f35]"
              >
                Categories
              </button>

              {/* ABOUT */}
              <button
                type="button"
                onClick={() => goToSection("about")}
                className="cursor-pointer border-0 bg-transparent p-0 text-sm font-semibold text-[#6e746f] transition-colors hover:text-[#173f35]"
              >
                About
              </button>
            </nav>

            {/* DESKTOP ACTIONS */}
            <div className="hidden items-center gap-2 sm:flex">
              {/* SEARCH */}
              {searchOpen && (
                <form
                  onSubmit={handleSearch}
                  className="flex items-center overflow-hidden rounded-full border border-[#e8e3dc] bg-white shadow-sm"
                >
                  <input
                    autoFocus
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search flowers..."
                    className="w-[180px] border-none bg-transparent px-4 py-2 text-sm outline-none"
                  />

                  <button
                    type="submit"
                    className="flex h-9 w-9 items-center justify-center text-[#173f35]"
                  >
                    <Search size={17} />
                  </button>
                </form>
              )}

              <button
                type="button"
                onClick={() => setSearchOpen((prev) => !prev)}
                className="relative flex h-10 w-10 items-center justify-center rounded-full text-[#4d5751] transition-all hover:bg-[#f4f1eb] hover:text-[#173f35]"
                aria-label="Search"
              >
                {searchOpen ? <X size={19} /> : <Search size={19} />}
              </button>

              {/* ACCOUNT */}
              <Link
                to="/login"
                className="flex h-10 w-10 items-center justify-center rounded-full text-[#4d5751] transition-all hover:bg-[#f4f1eb] hover:text-[#173f35]"
                aria-label="Account"
              >
                <User size={19} />
              </Link>

              {/* WISHLIST */}
              <Link
                to="/wishlist"
                className="relative flex h-10 w-10 items-center justify-center rounded-full text-[#4d5751] transition-all hover:bg-[#f4f1eb] hover:text-[#173f35]"
                aria-label="Wishlist"
              >
                <Heart size={19} />

                {wishlistCount > 0 && (
                  <span className="absolute right-0 top-0 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-[#d96b7c] px-1 text-[9px] font-bold text-white">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* CART */}
              <Link
                to="/cart"
                className="relative flex h-10 w-10 items-center justify-center rounded-full text-[#4d5751] transition-all hover:bg-[#f4f1eb] hover:text-[#173f35]"
                aria-label="Cart"
              >
                <ShoppingBag size={19} />

                {cartCount > 0 && (
                  <span className="absolute right-0 top-0 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-[#173f35] px-1 text-[9px] font-bold text-white">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>

            {/* MOBILE ACTIONS */}
            <div className="flex items-center gap-1 sm:hidden">
              <Link
                to="/cart"
                className="relative flex h-10 w-10 items-center justify-center rounded-full text-[#173f35]"
                aria-label="Cart"
              >
                <ShoppingBag size={19} />

                {cartCount > 0 && (
                  <span className="absolute right-0 top-0 flex h-[16px] min-w-[16px] items-center justify-center rounded-full bg-[#173f35] px-1 text-[8px] font-bold text-white">
                    {cartCount}
                  </span>
                )}
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenu((prev) => !prev)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-[#173f35]"
                aria-label="Menu"
              >
                {mobileMenu ? <X size={21} /> : <Menu size={21} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-x-0 top-[76px] z-[90] overflow-hidden border-t border-[#eee9e2] bg-white shadow-xl transition-all duration-300 lg:hidden ${
          mobileMenu
            ? "visible max-h-[500px] opacity-100"
            : "invisible max-h-0 opacity-0"
        }`}
      >
        <div className="container-shell py-5">
          {/* MOBILE SEARCH */}
          <form
            onSubmit={handleSearch}
            className="mb-4 flex items-center overflow-hidden rounded-2xl border border-[#e8e3dc] bg-[#faf8f4]"
          >
            <Search
              size={17}
              className="ml-4 shrink-0 text-[#8b8178]"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search flowers..."
              className="w-full bg-transparent px-3 py-3 text-sm outline-none"
            />

            <button
              type="submit"
              className="mr-2 rounded-xl bg-[#173f35] px-4 py-2 text-xs font-bold text-white"
            >
              Search
            </button>
          </form>

          <nav className="flex flex-col">
            {/* HOME */}
            <Link
              to="/"
              onClick={() => setMobileMenu(false)}
              className="border-b border-[#eee9e2] py-4 text-sm font-semibold text-[#173f35]"
            >
              Home
            </Link>

            {/* SHOP */}
            <Link
              to="/shop"
              onClick={() => setMobileMenu(false)}
              className="border-b border-[#eee9e2] py-4 text-sm font-semibold text-[#4f5752]"
            >
              Shop
            </Link>

            {/* CATEGORIES */}
            <button
              type="button"
              onClick={() => goToSection("categories")}
              className="w-full cursor-pointer border-b border-[#eee9e2] bg-transparent py-4 text-left text-sm font-semibold text-[#4f5752]"
            >
              Categories
            </button>

            {/* ABOUT */}
            <button
              type="button"
              onClick={() => goToSection("about")}
              className="w-full cursor-pointer border-b border-[#eee9e2] bg-transparent py-4 text-left text-sm font-semibold text-[#4f5752]"
            >
              About
            </button>

            {/* ACCOUNT / WISHLIST */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              <Link
                to="/login"
                onClick={() => setMobileMenu(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#f5f2ec] py-3 text-sm font-semibold text-[#173f35]"
              >
                <User size={17} />
                Account
              </Link>

              <Link
                to="/wishlist"
                onClick={() => setMobileMenu(false)}
                className="relative flex items-center justify-center gap-2 rounded-xl bg-[#f5f2ec] py-3 text-sm font-semibold text-[#173f35]"
              >
                <Heart size={17} />
                Wishlist

                {wishlistCount > 0 && (
                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#d96b7c] px-1 text-[9px] font-bold text-white">
                    {wishlistCount}
                  </span>
                )}
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}