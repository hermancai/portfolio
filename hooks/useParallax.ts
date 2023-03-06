import { MotionValue, useTransform, useScroll } from "framer-motion";

export default function useParallax(values: number[]) {
  /**
   * Uses framer-motion library to create parallax effect.
   * Returns corresponding list of transformed y values based on vertical page scroll progress.
   *
   * @param values - List of numbers for each element in parallax
   * @returns List of MotionValue<number> equal to length of 'values'
   *
   * @example
   * const [y1, y2] = useParallax([200, 100]);
   * <motion.div style={{y1}} />
   * <motion.div style={{y2}} />
   */

  const { scrollYProgress } = useScroll();
  const results: MotionValue<number>[] = [];

  values.map((val) => {
    results.push(useTransform(scrollYProgress, [-1, 1], [-val, val]));
  });

  return results;
}
