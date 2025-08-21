"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import Language from "./language";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("nav");

  const navItems = [
    { name: t("newConstruction"), href: "#new-construction" },
    { name: t("operating"), href: "#operating" },
    { name: t("restaurantsBars"), href: "#restaurants" },
    { name: t("services"), href: "#services" },
    { name: t("deliveryPayment"), href: "#delivery" },
    { name: t("contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                Hotel Supply
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-600 hover:text-sky-600 transition-colors font-medium"
                >
                  {item.name}
                </button>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
            >
              <Language />
              {/* <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white"
              >
                Get a Quote
              </Button> */}
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-16 left-0 right-0 z-40 bg-white shadow-lg lg:hidden"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-600 hover:text-sky-600 transition-colors py-2 font-medium"
                >
                  {item.name}
                </button>
              ))}
              <div className="w-full flex justify-center">
                <Language />
              </div>
              {/* <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white w-full"
              >
                Get a Quote
              </Button> */}
            </nav>
          </div>
        </motion.div>
      )}
    </>
  );
}
