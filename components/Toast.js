import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";

function Toast({ message, bgColor }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 10000);
  }, []);

  return (
    <Transition
      appear={true}
      show={visible}
      enter="transition-transform duration-1000"
      enterFrom="translate-y-[200%]"
      enterTo="translate-y-0"
      leave="transition-transform duration-1000"
      leaveFrom="translate-y-0"
      leaveTo="translate-y-[200%]"
    >
      <div className={`${bgColor} p-3 rounded-md flex flex-row`}>
        <p className="text-black">{message}</p>
        <div
          className="cursor-pointer text-slate-800"
          onClick={() => setVisible(false)}
        >
          <XIcon className="h-6 ml-2" />
        </div>
      </div>
    </Transition>
  );
}

export default Toast;
