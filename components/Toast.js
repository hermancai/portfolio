import { useState, useEffect } from "react";
import { XIcon } from "@heroicons/react/solid";

function Toast({ message, bgColor }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 5000);
  }, []);

  return visible ? (
    <div className={`${bgColor} p-3 rounded-md animate-slideIn flex flex-row`}>
      <p className="text-black">{message}</p>
      <div className="cursor-pointer text-slate-800" onClick={() => setVisible(false)}>
        <XIcon className="h-6 ml-2" />
      </div>
    </div>
  ) : null;
}

export default Toast;
