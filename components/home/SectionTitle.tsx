"use client";

import { motion } from "motion/react";

export default function SectionTitle({ name }: { name: string }) {
    return (
        <div className="flex flex-nowrap justify-center items-center gap-2">
            <motion.span
                initial={{ opacity: 0, translateX: "-100%" }}
                whileInView={{ opacity: 1, translateX: "0" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-8 h-px bg-neutral-400 translate-y-1"
            />
            <motion.p
                initial={{ opacity: 0, translateY: "100%" }}
                whileInView={{ opacity: 1, translateY: "0" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-4xl tracking-tight"
            >
                {name}
            </motion.p>
            <motion.span
                initial={{ opacity: 0, translateX: "100%" }}
                whileInView={{ opacity: 1, translateX: "0" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-8 h-px bg-neutral-400 translate-y-1"
            />
        </div>
    );
}
