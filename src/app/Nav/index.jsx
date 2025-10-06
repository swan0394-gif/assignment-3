"use client";
import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const routes = [
    { label: "Home", href: "/" },
    { label: "Tour", href: "/tour" },
    { label: "Album", href: "/album" },
  ];

  const linkBtn =
    "inline-flex items-center rounded-full border border-white/80 px-5 py-3 text-sm tracking-widest hover:border-indigo-400 transition";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold tracking-widest text-white/90">
          The WEEKND
        </Link>

        <div className="hidden md:flex items-center gap-3">
          {routes.map((r) => (
            <Link key={r.href} href={r.href} className={linkBtn}>
              {r.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-full border border-white/60 w-10 h-10 hover:border-indigo-400 transition relative z-50"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {!open ? (
            <span className="flex flex-col justify-center items-center space-y-1">
              <span className="block w-5 h-0.5 bg-white" />
              <span className="block w-5 h-0.5 bg-white" />
              <span className="block w-5 h-0.5 bg-white" />
            </span>
          ) : (
            <span className="relative block w-5 h-5">
              <span className="absolute left-0 top-1/2 w-5 h-0.5 bg-white rotate-45" />
              <span className="absolute left-0 top-1/2 w-5 h-0.5 bg-white -rotate-45" />
            </span>
          )}
        </button>
      </div>

      {open && (
        <>
          <div
            className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-m z-40"
            onClick={() => setOpen(false)}
          />
          <div className="md:hidden fixed z-50 left-1/2 -translate-x-1/2 top-20 w-11/12 max-w-sm rounded-2xl bg-black/70 backdrop-blur-md shadow-xl">
            <ul className="p-5 space-y-4 text-center">
              {routes.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center w-full rounded-full border px-6 py-3 text-base tracking-widest hover:border-indigo-400 transition"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}
