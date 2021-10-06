import { useEffect, useState } from "react";

function NavLink({ title, inView }) {
  const [activeLink, setActiveLink] = useState(false);

  useEffect(() => {
    setActiveLink(inView);
  }, [inView]);

  return (
    <a
      className={`link capitalize ${activeLink ? "activeLink" : ""}`}
      href={`#${title}`}
    >
      {title}
    </a>
  );
}

export default NavLink;
