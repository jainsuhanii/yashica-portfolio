"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About me", href: "/about " },
  { name: "Contact", href: "/contact" },
  { name: "Resume", href: "/resume" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full bg-[#FFFFFF] border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Name */}
        <div className="flex flex-col">
          <span className="text-xl text-black font-serif">
            Yashika P
          </span>
          <span className="text-sm text-gray-500">
            Designer
          </span>
        </div>

        {/* Menu */}
        <nav className="flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  text-md font-medium transition-colors duration-300
                  ${
                    isActive
                      ? "text-red-600"
                      : "text-black hover:text-red-600"
                  }
                `}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

      </div>
    </header>
  );
}   