import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import {
  ArrowDownUp,
  ArrowRight,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";

import products from "../data/products";
import ProductCard from "../components/ProductCard";

function BloomoraCTA() {
  return (
    <section className="bg-[#fffaf7] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-[28px] px-5 py-12 sm:rounded-[32px] sm:px-10 sm:py-14 lg:px-16 lg:py-16"
          style={{
            background:
              "linear-gradient(135deg, #ff2858 0%, #f62b91 100%)",
          }}
        >
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Make someone smile today{" "}
              <span className="inline-block">🌸</span>
            </h2>

            <p className="mx-auto mt-4 max-w-[620px] text-center text-sm leading-6 text-white/90 sm:text-base sm:leading-7">
              Beautiful flowers, carefully arranged and delivered
              fresh to your doorstep.
            </p>

            <Link
              to="/shop"
              className="group mt-8 inline-flex h-[52px] items-center gap-3 rounded-full px-3 py-2.5 text-sm font-bold shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:h-[56px]"
              style={{
                backgroundColor: "#ffffff",
                color: "#173f35",
              }}
            >
              <span
                className="pl-3"
                style={{
                  color: "#173f35",
                }}
              >
                Shop Flowers
              </span>

              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full sm:h-10 sm:w-10"
                style={{
                  backgroundColor: "#173f35",
                }}
              >
                <ArrowRight
                  size={16}
                  style={{
                    color: "#ffffff",
                  }}
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  const [category, setCategory] = useState(
    searchParams.get("category") || "All"
  );

  const [sort, setSort] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
  "All",
  "Roses",
  "Lilies",
  "Orchids",
  "Sunflowers",
  "Tulips",
  "Gerberas",
  "Carnations",
];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (search.trim()) {
      const query = search.toLowerCase();

      result = result.filter((product) =>
        `${product.name} ${product.category} ${
          product.description || ""
        }`
          .toLowerCase()
          .includes(query)
      );
    }

    if (category !== "All") {
      result = result.filter(
        (product) =>
          product.category?.toLowerCase() ===
          category.toLowerCase()
      );
    }

    if (sort === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [search, category, sort]);

  const handleSearch = (value) => {
    setSearch(value);

    const params = new URLSearchParams(searchParams);

    if (value.trim()) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    if (category !== "All") {
      params.set("category", category);
    }

    setSearchParams(params);
  };

  const handleCategory = (value) => {
    setCategory(value);

    const params = new URLSearchParams(searchParams);

    if (value === "All") {
      params.delete("category");
    } else {
      params.set("category", value);
    }

    if (search.trim()) {
      params.set("search", search);
    }

    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setSort("featured");
    setSearchParams({});
  };

  return (
    <main className="min-h-screen bg-[#fffaf7]">

      {/* =====================================================
          SHOP HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#173f35]">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#f7b8c4]/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#8fc5aa]/10 blur-3xl" />

        <div className="container-shell relative z-10 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f7b8c4]" />
              Bloomora collection
            </div>

            <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Find flowers
              <br />
              <span className="text-[#f7b8c4]">
                worth gifting.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
              Discover fresh bouquets and thoughtful floral
              arrangements for birthdays, celebrations,
              anniversaries and everyday moments.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SEARCH / FILTER
      ====================================================== */}
      <section className="sticky top-[72px] z-30 border-b border-stone-200 bg-[#fffaf7]/95 backdrop-blur-xl">
        <div className="container-shell py-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">

            <div className="relative w-full lg:max-w-md">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
              />

              <input
                value={search}
                onChange={(e) =>
                  handleSearch(e.target.value)
                }
                placeholder="Search flowers..."
                className="h-12 w-full rounded-full border border-stone-200 bg-white pl-11 pr-11 text-sm text-[#173f35] outline-none transition-all placeholder:text-stone-400 focus:border-[#9eb9ad] focus:ring-4 focus:ring-[#173f35]/5"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => handleSearch("")}
                  className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-stone-100 text-stone-500 transition hover:bg-stone-200"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            <div className="hidden items-center gap-2 lg:flex">
              <div className="flex items-center gap-2 rounded-full border border-stone-200 bg-white p-1">
                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => handleCategory(item)}
                    className="rounded-full px-4 py-2 text-xs font-bold transition-all"
                    style={{
                      backgroundColor:
                        category === item
                          ? "#173f35"
                          : "transparent",
                      color:
                        category === item
                          ? "#ffffff"
                          : "#6b7280",
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) =>
                    setSort(e.target.value)
                  }
                  className="h-12 appearance-none rounded-full border border-stone-200 bg-white pl-11 pr-10 text-xs font-bold text-[#173f35] outline-none focus:border-[#9eb9ad]"
                >
                  <option value="featured">
                    Featured
                  </option>

                  <option value="price-low">
                    Price: Low to High
                  </option>

                  <option value="price-high">
                    Price: High to Low
                  </option>

                  <option value="rating">
                    Highest Rated
                  </option>
                </select>

                <ArrowDownUp
                  size={15}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#173f35]"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                setShowFilters((value) => !value)
              }
              className="flex h-12 items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-5 text-xs font-bold text-[#173f35] lg:hidden"
            >
              <SlidersHorizontal size={16} />
              Filters & Sort
            </button>
          </div>

          {showFilters && (
            <div className="mt-3 rounded-3xl border border-stone-200 bg-white p-4 lg:hidden">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-stone-400">
                Categories
              </p>

              <div className="flex flex-wrap gap-2">
                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => handleCategory(item)}
                    className="rounded-full px-4 py-2 text-xs font-bold"
                    style={{
                      backgroundColor:
                        category === item
                          ? "#173f35"
                          : "#f5f5f4",
                      color:
                        category === item
                          ? "#ffffff"
                          : "#57534e",
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="mt-5">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-stone-400">
                  Sort by
                </p>

                <select
                  value={sort}
                  onChange={(e) =>
                    setSort(e.target.value)
                  }
                  className="h-11 w-full rounded-full border border-stone-200 bg-white px-4 text-xs font-bold text-[#173f35] outline-none"
                >
                  <option value="featured">
                    Featured
                  </option>

                  <option value="price-low">
                    Price: Low to High
                  </option>

                  <option value="price-high">
                    Price: High to Low
                  </option>

                  <option value="rating">
                    Highest Rated
                  </option>
                </select>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          PRODUCTS
      ====================================================== */}
      <section className="section-padding">
        <div className="container-shell">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#d45b72]">
                Our flowers
              </p>

              <h2 className="mt-2 font-display text-3xl font-semibold text-[#173f35] sm:text-4xl">
                {category === "All"
                  ? "All collections"
                  : category}
              </h2>

              <p className="mt-2 text-sm text-stone-500">
                {filteredProducts.length}{" "}
                {filteredProducts.length === 1
                  ? "flower"
                  : "flowers"}{" "}
                available
              </p>
            </div>

            {(search || category !== "All") && (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-3 text-xs font-bold text-[#173f35] transition hover:-translate-y-1 hover:shadow-md"
              >
                Clear filters
                <X size={14} />
              </button>
            )}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-xl rounded-[32px] border border-stone-200 bg-white px-6 py-16 text-center shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#fff0f3] text-[#d45b72]">
                <Search size={24} />
              </div>

              <h3 className="mt-5 font-display text-2xl font-semibold text-[#173f35]">
                No flowers found
              </h3>

              <p className="mt-2 text-sm leading-6 text-stone-500">
                Try another search or clear your filters to
                explore all Bloomora flowers.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="group mt-6 inline-flex items-center gap-3 rounded-full px-3 py-2.5 text-sm font-bold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  backgroundColor: "#173f35",
                  color: "#ffffff",
                }}
              >
                <span
                  className="pl-3"
                  style={{ color: "#ffffff" }}
                >
                  View all flowers
                </span>

                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: "#ffffff",
                  }}
                >
                  <ArrowRight
                    size={15}
                    style={{ color: "#173f35" }}
                  />
                </span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          SAME CTA AS HOME
      ====================================================== */}
      <BloomoraCTA />

    </main>
  );
}