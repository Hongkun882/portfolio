import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
function Header() {


  const [tab, setTab] = useState("Home");
  const handleClick = (val) => {
    setTab(val);
  };

  const navlist = useMemo(
    () => ["Home", "Project", "Skill", "Experience", "Education", "Contact"],
    []
  );

  useEffect(() => {
    const sections = navlist
      .map((item) => document.getElementById(item))
      .filter((section) => section !== null);

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Adjust based on your header height
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTab(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [navlist]);

  return (
    <header className="w-full fixed z-10 items-center flex justify-center mt-4">

      <div role="tablist" className="tabs tabs-boxed w-auto px-3 flex flex-wrap justify-center gap-2">
        {navlist.map((item) => (

          <motion.a
            role="tab"
            className={`tab mx-1 md:text-base flex-1 text-center`}
            href={`/#${item}`}
            onClick={(e) => handleClick(item)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {item}
            {tab === item && (
              <motion.div
                className="absolute left-0 right-0 bottom-0 h-1 bg-slate-500 rounded-md mt-1"
                layoutId="underline"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.4 }}
              />
            )}
          </motion.a>

        ))}

      </div>

    </header>
  );
}

export default Header;
