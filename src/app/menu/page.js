// src/app/menu/page.js
"use client";

import { useEffect, useRef, useState } from "react";

const MENU_ITEMS = [
  {
    id: "tonight",
    label: "Tonight’s Menu",
    icon: "🍽️",
  },
  {
    id: "random",
    label: "Random Food + Movie",
    icon: "🎲",
  },
  {
    id: "mood",
    label: "Pick by Mood",
    icon: "🎭",
  },
];

export default function MenuDropdown({
  active = "tonight",     
  onSelect = () => {},    
  align = "right",        
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleItemClick(id) {
    onSelect(id);
    setOpen(false);
  }

  return (
    <div
      ref={wrapperRef}
      className={`relative inline-block ${align === "right" ? "ml-auto" : ""}`}
    >
      <button
        onClick={() => setOpen((p) => !p)}
        className="
          flex items-center gap-2
          rounded-full
          bg-gradient-to-r from-[#ffb347] via-[#ff8c42] to-[#ff5e3a]
          hover:from-[#ff9e2c] hover:via-[#ff7a1e] hover:to-[#ff4b2b]
          px-6 py-2
          text-sm font-semibold
          text-black
          shadow-md
          transition
        "
      >
        Menu
        <span className="text-lg leading-none">☰</span>
      </button>

      {open && (
        <div
          className={`
            absolute z-50 mt-3 w-64
            ${align === "right" ? "right-0" : "left-0"}
            rounded-3xl
            bg-[#fff1dd]/95
            shadow-[0_20px_40px_rgba(191,87,34,0.25)]
            overflow-hidden
            backdrop-blur
          `}
        >
          {MENU_ITEMS.map((item, idx) => {
            const isActive = item.id === active;

            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`
                  flex w-full items-center gap-3 px-5 py-3.5 text-left
                  text-sm font-medium
                  transition
                  ${isActive
                    ? "bg-gradient-to-r from-[#ff9c45] via-[#ff7b2f] to-[#ff5e3a] text-black"
                    : "text-black hover:bg-gradient-to-r hover:from-[#ffe0b7] hover:via-[#ffd0a0] hover:to-[#ffc38d]"
                  }
                  ${idx === 0 ? "rounded-t-3xl" : ""}
                  ${idx === MENU_ITEMS.length - 1 ? "rounded-b-3xl" : ""}
                `}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
