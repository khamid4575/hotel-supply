"use client"

import { motion } from "framer-motion"
import SectionHeader from "./section-header"
import { ClipboardCheck, Settings, Users, BarChart, Lightbulb, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"

export default function ServicesSection() {
    const t = useTranslations("services");

  const services = [
    {
      icon: ClipboardCheck,
      title: t("procurementConsulting"),
      description: t("procurementConsultingDesc"),
    },
    {
      icon: Settings,
      title: t("installationSetup"),
      description: t("installationSetupDesc"),
    },
    {
      icon: Users,
      title: t("staffTraining"),
      description: t("staffTrainingDesc"),
    },
    {
      icon: BarChart,
      title: t("inventoryManagement"),
      description: t("inventoryManagementDesc"),
    },
    {
      icon: Lightbulb,
      title: t("energyEfficiency"),
      description: t("energyEfficiencyDesc"),
    },
    {
      icon: Zap,
      title: t("maintenanceRepairs"),
      description: t("maintenanceRepairsDesc"),
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle={t("title")}
          title={t("h1")}
          description={t("description")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-b from-sky-50 to-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{t("customizedServicePackages")}</h3>
              <p className="text-white/90 mb-6">
                {t("customizedServicePackagesDesc")}
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
                {t("requestCustomPackage")}
              </Button>
            </div>
            <div className="hidden lg:block relative">
              <img
                src="/placeholder.svg?height=500&width=600&text=Hospitality+Services"
                alt="Hospitality Services"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
