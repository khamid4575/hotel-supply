"use client"

import { motion } from "framer-motion"
import SectionHeader from "./section-header"
import FeatureCard from "./feature-card"
import { RefreshCw, ShieldCheck, Truck, Clock, Sparkles, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"

export default function OperatingSection() {
  const t = useTranslations("operating");

  const features = [
    {
      icon: RefreshCw,
      title: t("regularReplenishment"),
      description: t("regularReplenishmentDesc"),
    },
    {
      icon: ShieldCheck,
      title: t("qualityAssurance"),
      description: t("qualityAssuranceDesc"),
    },
    {
      icon: Truck,
      title: t("fastDelivery"),
      description: t("fastDeliveryDesc"),
    },
    {
      icon: Clock,
      title: t("support"),
      description: t("supportDesc"),
    },
    {
      icon: Sparkles,
      title: t("cleaningSupplies"),
      description: t("cleaningSuppliesDesc"),
    },
    {
      icon: Headphones,
      title: t("dedicatedAccountManager"),
      description: t("dedicatedAccountManagerDesc"),
    },
  ]

  return (
    <section id="operating" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle={t("title")}
          title={t("h1")}
          description={t("description")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 relative overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-600 opacity-90"></div>
          <div className="relative z-10 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{t("streamlineYourHotelOperations")}</h3>
                <p className="text-white/90 mb-6">
                  {t("streamlineYourHotelOperationsDesc")}
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    t("li1"),
                    t("li2"),
                    t("li3"),
                    t("li4"),
                    t("li5"),
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                      className="flex items-start"
                    >
                      <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      </div>
                      <span className="text-white/90">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  className="bg-white text-sky-600 hover:bg-white/90"
                  onClick={() => {
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  {t("scheduleConsultation")}
                </Button>
              </div>
              <div className="hidden lg:block">
                <img
                  src="/placeholder.svg?height=400&width=600&text=Hotel+Operations"
                  alt="Hotel Operations"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
