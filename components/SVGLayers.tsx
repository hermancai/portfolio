import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [0, distance]);
}

function Layer1() {
  const { scrollYProgress } = useScroll();
  const y = useParallax(scrollYProgress, 200);

  return (
    <motion.div
      initial={{ opacity: 0, y: "50%" }}
      animate={{ opacity: 1, y: "0%" }}
      transition={{ y: { duration: 2 }, delay: 0.2, ease: "easeIn" }}
      className={`h-full w-full absolute bottom-0 z-20`}
      style={{ y }}
    >
      <svg
        className="block md:hidden absolute bottom-0"
        viewBox="0 0 675 900"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 611L84 584L169 619L253 615L338 558L422 612L506 542L591 613L675 634L675 901L591 901L506 901L422 901L338 901L253 901L169 901L84 901L0 901Z"
          fill="#06b6d4"
          id="s11"
        />
      </svg>

      <svg
        className="hidden md:block absolute bottom-0"
        viewBox="0 0 960 540"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
      >
        <path
          d="M0 404L80 369L160 353L240 398L320 372L400 392L480 357L560 401L640 353L720 356L800 396L880 365L960 385L960 541L880 541L800 541L720 541L640 541L560 541L480 541L400 541L320 541L240 541L160 541L80 541L0 541Z"
          fill="#06b6d4"
          id="l11"
        />
      </svg>
    </motion.div>
  );
}

function Layer2() {
  const { scrollYProgress } = useScroll();
  const y = useParallax(scrollYProgress, 150);

  return (
    <motion.div
      initial={{ opacity: 0, y: "50%" }}
      animate={{ opacity: 1, y: "0%" }}
      transition={{ y: { duration: 2 }, ease: "easeIn" }}
      className={`h-full w-full absolute bottom-0 z-20`}
      style={{ y }}
    >
      <svg
        className="block md:hidden absolute bottom-0"
        viewBox="0 0 675 900"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
      >
        <path
          d="M0 604L84 652L169 666L253 665L338 611L422 638L506 674L591 656L675 691L675 901L591 901L506 901L422 901L338 901L253 901L169 901L84 901L0 901Z"
          fill="#228fb1"
          id="s11"
        />
      </svg>

      <svg
        className="hidden md:block absolute bottom-0"
        viewBox="0 0 960 540"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
      >
        <path
          d="M0 407L80 391L160 402L240 396L320 416L400 413L480 384L560 407L640 419L720 404L800 391L880 406L960 396L960 541L880 541L800 541L720 541L640 541L560 541L480 541L400 541L320 541L240 541L160 541L80 541L0 541Z"
          fill="#228fb1"
          id="l11"
        />
      </svg>
    </motion.div>
  );
}

function Layer3() {
  const { scrollYProgress } = useScroll();
  const y = useParallax(scrollYProgress, 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: "50%" }}
      animate={{ opacity: 1, y: "0%" }}
      transition={{ y: { duration: 1.5 }, ease: "easeIn" }}
      className={`h-full w-full absolute bottom-0 z-40 pointer-events-none`}
      style={{ y }}
    >
      <svg
        className="block md:hidden absolute bottom-0"
        viewBox="0 0 675 900"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
      >
        <path
          d="M0 734L84 669L169 756L253 705L338 744L422 730L506 734L591 712L675 696L675 901L591 901L506 901L422 901L338 901L253 901L169 901L84 901L0 901Z"
          fill="#2b6a8b"
          id="s13"
        />
      </svg>

      <svg
        className="hidden md:block absolute bottom-0"
        viewBox="0 0 960 540"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
      >
        <path
          d="M0 439L80 463L160 437L240 428L320 459L400 423L480 431L560 420L640 420L720 454L800 436L880 413L960 439L960 541L880 541L800 541L720 541L640 541L560 541L480 541L400 541L320 541L240 541L160 541L80 541L0 541Z"
          fill="#2b6a8b"
          id="l13"
        />
      </svg>
    </motion.div>
  );
}

function Layer4() {
  const { scrollYProgress } = useScroll();
  const y = useParallax(scrollYProgress, 50);

  return (
    <motion.div
      initial={{ opacity: 0, y: "25%" }}
      animate={{ opacity: 1, y: "0%" }}
      transition={{ y: { duration: 1 }, delay: 0.25, ease: "easeIn" }}
      className={`h-full w-full absolute bottom-0 z-40 pointer-events-none`}
      style={{ y }}
    >
      <svg
        className="block md:hidden absolute bottom-0"
        viewBox="0 0 675 900"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
      >
        <path
          d="M0 738L84 762L169 766L253 774L338 790L422 732L506 747L591 746L675 764L675 901L591 901L506 901L422 901L338 901L253 901L169 901L84 901L0 901Z"
          fill="#294863"
          id="s14"
        />
      </svg>

      <svg
        className="hidden md:block absolute bottom-0"
        viewBox="0 0 960 540"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
      >
        <path
          d="M0 481L80 485L160 461L240 461L320 450L400 458L480 472L560 449L640 471L720 462L800 480L880 484L960 484L960 541L880 541L800 541L720 541L640 541L560 541L480 541L400 541L320 541L240 541L160 541L80 541L0 541Z"
          fill="#294863"
          id="l14"
        />
      </svg>
    </motion.div>
  );
}

function Layer5() {
  const { scrollYProgress } = useScroll();
  const y = useParallax(scrollYProgress, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: "25%" }}
      animate={{ opacity: 1, y: "0%" }}
      transition={{ y: { duration: 1 }, ease: "easeIn" }}
      className={`h-full w-full absolute bottom-0 z-40 pointer-events-none`}
      style={{ y }}
    >
      <svg
        className="block md:hidden absolute bottom-0"
        viewBox="0 0 675 900"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
      >
        <path
          d="M0 835L84 820L169 829L253 796L338 827L422 821L506 828L591 840L675 831L675 901L591 901L506 901L422 901L338 901L253 901L169 901L84 901L0 901Z"
          fill="#1e293b"
          id="s14"
        />
      </svg>

      <svg
        className="hidden md:block absolute bottom-0"
        viewBox="0 0 960 540"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
      >
        <path
          d="M0 504L80 507L160 519L240 510L320 496L400 496L480 483L560 503L640 523L720 512L800 482L880 520L960 496L960 541L880 541L800 541L720 541L640 541L560 541L480 541L400 541L320 541L240 541L160 541L80 541L0 541Z"
          fill="#1e293b"
          id="l14"
        />
      </svg>
    </motion.div>
  );
}

export { Layer1, Layer2, Layer3, Layer4, Layer5 };
