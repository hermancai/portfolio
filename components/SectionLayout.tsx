import { ReactNode } from "react";

type SectionLayoutType = {
    smallIcon: ReactNode;
    largeIcon: ReactNode;
    title: ReactNode;
    content: ReactNode;
    id: string;
    button?: ReactNode;
};

export default function SectionLayout({
    smallIcon,
    largeIcon,
    title,
    content,
    button,
    id,
}: SectionLayoutType) {
    return (
        <div
            id={id}
            className="flex flex-col justify-center items-center text-white scroll-mt-12"
        >
            <div className="w-[95%] md:w-[85%] sm:w-3/4 flex flex-row max-w-[50rem] p-8 gap-4">
                <div className="md:min-w-[8rem] md:min-h-[8rem] justify-center hidden md:flex md:mt-9">
                    {largeIcon}
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <div className="flex flex-row items-center gap-2">
                        <div>{smallIcon}</div>
                        <p className="font-raleway text-3xl text-transparent bg-clip-text bg-gradient-orange">
                            {title}
                        </p>
                        <div className="ml-3 relative bottom-1">{button}</div>
                    </div>
                    {content}
                </div>
            </div>
        </div>
    );
}
