import { scroller } from "react-scroll";

export default function useScroll(name: string, duration: number) {
  return () => {
    scroller.scrollTo(name, {
      duration,
      smooth: true,
      offset: name === "Home" ? 0 : 80,
    });
  };
}
