import React from "react";
import { motion } from "framer-motion";

export default function SVGFront() {
  return (
    <motion.div
      initial={{ opacity: 0, y: "25%" }}
      animate={{ opacity: 1, y: "0%" }}
      transition={{ y: { duration: 1.5 } }}
      className="h-full w-full absolute bottom-0 z-50 pointer-events-none"
    >
      <svg
        className="block sm:hidden"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      >
        <path
          d="M0 80L9 81L18 81L27 79L36 83L45 83L55 79L64 80L73 80L82 83L91 82L100 82L100 101L91 101L82 101L73 101L64 101L55 101L45 101L36 101L27 101L18 101L9 101L0 101Z"
          fill="#2b6a8b"
          id="s13"
        />
        <path
          d="M0 89L9 88L18 85L27 88L36 87L45 87L55 87L64 89L73 85L82 87L91 85L100 86L100 101L91 101L82 101L73 101L64 101L55 101L45 101L36 101L27 101L18 101L9 101L0 101Z"
          fill="#294863"
          id="s14"
        />
        <path
          d="M0 94L9 93L18 94L27 94L36 91L45 91L55 93L64 93L73 94L82 92L91 93L100 92L100 101L91 101L82 101L73 101L64 101L55 101L45 101L36 101L27 101L18 101L9 101L0 101Z"
          fill="#1e293b"
        />
      </svg>

      <svg
        className="hidden sm:block"
        viewBox="0 0 960 540"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      >
        <path
          d="M0 439L80 463L160 437L240 428L320 459L400 423L480 431L560 420L640 420L720 454L800 436L880 413L960 439L960 541L880 541L800 541L720 541L640 541L560 541L480 541L400 541L320 541L240 541L160 541L80 541L0 541Z"
          fill="#2b6a8b"
          id="l13"
        />
        <path
          d="M0 481L80 485L160 461L240 461L320 450L400 458L480 472L560 449L640 471L720 462L800 480L880 484L960 484L960 541L880 541L800 541L720 541L640 541L560 541L480 541L400 541L320 541L240 541L160 541L80 541L0 541Z"
          fill="#294863"
          id="l14"
        />
        <path
          d="M0 504L80 507L160 519L240 510L320 496L400 496L480 483L560 503L640 523L720 512L800 482L880 520L960 496L960 541L880 541L800 541L720 541L640 541L560 541L480 541L400 541L320 541L240 541L160 541L80 541L0 541Z"
          fill="#1e293b"
        />
      </svg>
    </motion.div>
  );
}
