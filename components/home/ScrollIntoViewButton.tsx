"use client";

import React from "react";

type ScrollIntoViewButtonType = {
    children: React.ReactNode;
    id: string;
    className: string;
};

export default function ScrollIntoViewButton({
    children,
    id,
    className,
}: ScrollIntoViewButtonType) {
    return (
        <button
            className={className}
            onClick={() =>
                document
                    .getElementById(id)
                    ?.scrollIntoView({ behavior: "smooth" })
            }
        >
            {children}
        </button>
    );
}
