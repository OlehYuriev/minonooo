import { Card } from "@/components/card";
import { IProduct } from "@/type/product";
import { AnimatePresence, motion } from "framer-motion";
import { memo } from "react";
type Props = {
  filteredProducts: IProduct[];
  visibleCount: number;
};
export const GridProducts = memo(function GridProducts({
  filteredProducts,
  visibleCount,
}: Props) {
  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <AnimatePresence mode="popLayout">
      {visibleProducts.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={`${
            (index + 1) % 5 === 0 ? "col-span-2 flex justify-center" : ""
          }`}
        >
          <div
            className={` ${
              (index + 1) % 5 === 0
                ? " sm:mx-20 md:mx-40 lg:mx-65 w-full aspect-[2/3.1] sm:aspect-[2/2.38]"
                : "aspect-[2/3.1] sm:aspect-[2/2.38]"
            }`}
          >
            <Card product={product} />
          </div>
        </motion.div>
      ))}
    </AnimatePresence>
  );
});
