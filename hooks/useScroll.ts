import { scroller } from "react-scroll";

export default function useScroll(
  name: string,
  offset: number = 0,
  duration: number = 0
) {
  return () => {
    scroller.scrollTo(name, {
      duration: duration || undefined,
      smooth: true,
      offset,
    });
  };
}
