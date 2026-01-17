"use client";
import { useAuth } from "@/auth/hooks/use-auth";
import { ROUTES } from "@/constants/routes";
import { useCart } from "@/store/use-basket-store";
import { useFavoriteCart } from "@/store/use-favorite-store";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useCallback, useState } from "react";
import { BasketCart } from "../../components/basket";
import HeaderAccount from "./header-account";
import { HeaderButton } from "./header-button";
import { HeaderOverlayPanel } from "./header-overlay-panel";

export function HeaderButtons() {
  const [openBasket, setOpenBasket] = useState(false);
  const { user, avatarUrl } = useAuth();

  const cart = useCart();

  const favoriteCarts = useFavoriteCart();
  const toggleBasket = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenBasket((prev) => !prev);
  }, []);

  const closeBasket = useCallback(() => {
    setOpenBasket(false);
  }, []);
  return (
    <>
      <div className="flex items-center space-x-4 z-10">
        <Link href={ROUTES.WISHLIST} className="h-8 w-8">
          <HeaderButton
            src="/heart.svg"
            alt="Обрані"
            label="Обрані"
            count={favoriteCarts.length}
          />
        </Link>
        <HeaderButton
          src="/bascet.svg"
          alt="Кошик"
          label="Кошик"
          count={cart.length}
          onMouseDown={toggleBasket}
        />

        <HeaderAccount user={user} avatarUrl={avatarUrl} />
      </div>

      <HeaderOverlayPanel
        close={closeBasket}
        open={openBasket}
        setOpen={setOpenBasket}
        footerSummary
        title="Кошик"
      >
        <AnimatePresence mode="popLayout">
          {cart.map((item) => (
            <motion.div
              key={item.id + item?.selectedSize + item?.selectedColor}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <BasketCart item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </HeaderOverlayPanel>
    </>
  );
}
