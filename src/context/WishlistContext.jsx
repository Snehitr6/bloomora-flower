import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext(null);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem("bloomora-wishlist");

      if (!saved) {
        return [];
      }

      const parsed = JSON.parse(saved);

      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      console.error("Wishlist loading error:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        "bloomora-wishlist",
        JSON.stringify(wishlist)
      );
    } catch (error) {
      console.error("Wishlist saving error:", error);
    }
  }, [wishlist]);

  const toggleWishlist = (productId) => {
    setWishlist((currentWishlist) => {
      const alreadyExists = currentWishlist.includes(productId);

      if (alreadyExists) {
        return currentWishlist.filter(
          (id) => id !== productId
        );
      }

      return [...currentWishlist, productId];
    });
  };

  const isWishlisted = (productId) => {
    return wishlist.includes(productId);
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isWishlisted,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlist must be used inside WishlistProvider"
    );
  }

  return context;
};