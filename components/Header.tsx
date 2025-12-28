"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { smoothScrollToSection } from "./utils/smoothScroll";

const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Project", href: "#project" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(0);

  const indicatorRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const el = itemsRef.current[hoverIndex];
    const indicator = indicatorRef.current;

    if (el && indicator) {
      const rect = el.getBoundingClientRect();
      const parentRect = el.parentElement!.getBoundingClientRect();

      indicator.style.width = `${rect.width}px`;
      indicator.style.left = `${rect.left - parentRect.left}px`;
    }
  }, [hoverIndex]);

  return (
    <header className="fixed top-0 w-full bg-gray-950/55 border-b border-gray-800 z-50 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-6 md:px-12 py-2 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 border-2 border-white rounded-lg flex items-center justify-center">
            <span className="text-lg font-bold text-white">SY</span>
          </div>
          <span className="text-xl font-bold text-white hidden md:inline">
            Syed Yarooq
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 relative">

          {/* REAL VIP INDICATOR */}
          <div
            ref={indicatorRef}
            className="
              absolute -bottom-2 h-0.75
              bg-white
              rounded-full
              shadow-[-1px_-15px_30px_7px_rgba(255,255,255,0.8)]
              transition-all duration-500
              ease-[cubic-bezier(.22,1,.36,1)]
              will-change-transform
            "
          />

          {navigationItems.map((item, index) => (
            <button
              key={item.href}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              className="relative group"
              onMouseEnter={() => setHoverIndex(index)}
              onClick={(e) => smoothScrollToSection(e, item.href)}
            >
              {/* VIP Glow */}
              <div
                className="
                  absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2
                  w-20 h-24
                  bg-gradient-to-b from-white/80 via-white/40 to-transparent
                  blur-2xl rounded-full
                  transition-all duration-500
                  animate-[pulse_2.5s_ease-in-out_infinite]
                "
                style={{
                  opacity: hoverIndex === index ? 1 : 0,
                }}
              />

              <span
                className={`
                  text-sm font-semibold tracking-wide transition-all duration-500
                  ${
                    hoverIndex === index
                      ? "text-white scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]"
                      : "text-gray-400 group-hover:text-gray-200"
                  }
                `}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-black border-b border-gray-800 md:hidden">
            <div className="flex flex-col gap-4 px-6 py-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    smoothScrollToSection(e, item.href);
                    setIsOpen(false);
                  }}
                  className="text-white hover:text-gray-300 transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
