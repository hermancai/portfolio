import { Transition } from "@headlessui/react";

/**
 * Wrapper for transition to fade in ONCE on mount.
 *
 * Template strings don't work with SOME arbitrary values.
 *  Ex: "3000" works but not "4000".
 *  Template strings work for the duration property but not delay.
 *  Stick with Tailwind's given default values or make a custom theme.
 *  https://tailwindcss.com/docs/transition-duration
 *
 */
const TransitionFadeIn = ({ children, show, duration, delay }) => {
  return (
    <Transition
      appear={true}
      show={show}
      enter={`transition-opacity duration-[${duration}ms] ${
        delay === undefined ? "" : "delay-" + delay
      }`}
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      {children}
    </Transition>
  );
};

export default TransitionFadeIn;
