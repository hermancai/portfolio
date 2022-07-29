import { Transition } from "@headlessui/react";

const TransitionSlideIn = ({ children, inView }) => {
  // The wrapper div reserves space before the transition occurs.
  // This prevents elements from shifting while scrolling.
  return (
    <div className="h-[2.25rem]">
      <Transition
        appear={true}
        show={inView}
        enter="transition-all duration-1000"
        enterFrom="opacity-0 translate-x-[-100%]"
        enterTo="opacity-100 translate-x-0"
        className="w-min"
      >
        {children}
      </Transition>
    </div>
  );
};

export default TransitionSlideIn;
