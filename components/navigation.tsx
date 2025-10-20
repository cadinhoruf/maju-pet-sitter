"use client";

import { cn } from "@/lib/utils";
import { PawPrint } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: "/sobre", label: "Sobre mim" },
    { href: "/contato", label: "Contato" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <PawPrint className="mr-2 w-8 h-8 text-primary" />
            <Link href="/" className="font-bold text-foreground text-2xl">
              Maria Julia Pet Sitter
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            {pathname === "/" ? (
              <>
                <Link
                  href="/sobre"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre mim
                </Link>
                <button
                  onClick={() => scrollToSection("servicos")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Serviços
                </button>
                <button
                  onClick={() => scrollToSection("depoimentos")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Depoimentos
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  FAQ
                </button>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contato
                </button>
              </>
            ) : (
              navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "hover:text-primary transition-colors",
                    pathname === item.href
                      ? "text-primary font-semibold"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
