import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

function EmblaCarousel({ slides, imageFunc }) {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    inViewThreshold: 0.7,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  // prev arrow click event
  const scrollPrev = useCallback(() => {
    if (embla) embla.scrollPrev();
  }, [embla]);

  // next arrow click event
  const scrollNext = useCallback(() => {
    if (embla) embla.scrollNext();
  }, [embla]);

  // jump to clicked navigation dot
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [embla]);

  // highlight navigation dot of current image
  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <div className="mx-auto max-w-[475px] space-y-2">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((index) => (
            <div className="relative flex flex-none flex-wrap w-full mx-10" key={index}>
              <div>
                <Image src={imageFunc(index)} height={267} width={475} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center space-x-2">
        <ChevronLeftIcon className="w-6 text-red-500 cursor-pointer" onClick={scrollPrev} />
        {scrollSnaps.map((_, idx) => (
          <button
            className={`w-2 h-2 rounded-full ${idx === selectedIndex ? "bg-red-500" : "bg-gray-500"}`}
            key={idx}
            onClick={() => scrollTo(idx)}
          />
        ))}
        <ChevronRightIcon className="w-6 text-red-500 cursor-pointer" onClick={scrollNext} />
      </div>
    </div>
  );
}

export default EmblaCarousel;
