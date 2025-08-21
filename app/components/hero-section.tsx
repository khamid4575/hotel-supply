"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const t = useTranslations("hero");
  const language = useLocale();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-sky-100 blur-3xl opacity-70"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-blue-100 blur-3xl opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-block px-4 py-1.5 bg-sky-100 text-sky-700 rounded-full text-sm font-medium"
            >
              {t("title")}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800"
            >
              {language === "uz" ? (
                <>
                  <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                    {t("hospitalityExperience")}
                  </span>
                  <br />
                  {t("elevating")}{" "}
                </>
              ) : (
                <>
                  {" "}
                  {t("elevating")}{" "}
                  <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                    {t("hospitalityExperience")}
                  </span>
                </>
              )}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-gray-600 max-w-lg"
            >
              {t("description")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href={"#contact"}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white"
                >
                  {t("getStarted")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href={"#services"}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-sky-500 text-sky-600 hover:bg-sky-50"
                >
                  {t("exploreServices")}
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-200/50 to-blue-300/50 backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/hero.webp"
                  alt="Hotel Supply Solutions"
                  width={630}
                  height={420}
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.8,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 w-40"
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center">
                  <span className="text-sky-600 font-bold">20+</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500">{t("happyClients")}</p>
                  <p className="text-sm font-semibold">{t("worldWide")}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 1,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 w-40"
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold">18+</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500">{t("yearsOf")}</p>
                  <p className="text-sm font-semibold">{t("experience")}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
