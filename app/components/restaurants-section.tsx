"use client"

import { motion } from "framer-motion"
import SectionHeader from "./section-header"
import { Utensils, GlassWater, Coffee, ChefHat, Hammer, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslations } from "next-intl"

export default function RestaurantsSection() {
    const t = useTranslations("restaurantsBars");

  const constructionItems = [
    {
      icon: Hammer,
      title: t("kitchenDesignInstallation"),
      description: t("kitchenDesignInstallationDesc"),
    },
    {
      icon: Utensils,
      title: t("commercialKitchenEquipment"),
      description: t("commercialKitchenEquipmentDesc"),
    },
    {
      icon: Wrench,
      title: t("barSetupEquipment"),
      description: t("barSetupEquipmentDesc"),
    },
  ]

  const operatingItems = [
    {
      icon: ChefHat,
      title: t("chefSuppliesUtensils"),
      description: t("chefSuppliesUtensilsDesc"),
    },
    {
      icon: GlassWater,
      title: t("glasswareTableware"),
      description: t("glasswareTablewareDesc"),
    },
    {
      icon: Coffee,
      title: t("beverageEquipment"),
      description: t("beverageEquipmentDesc"),
    },
  ]

  return (
    <section id="restaurants" className="py-20 bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle={t("title")}
          title={t("h1")}
          description={t("description")}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-sky-100 mb-6">
                <Hammer className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t("underConstruction")}</h3>
              <p className="text-gray-600 mb-8">
                {t("underConstructionDesc")}
              </p>

              <div className="space-y-6">
                {constructionItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <Button
                  variant="outline"
                  className="border-sky-500 text-sky-600 hover:bg-sky-50"
                  onClick={() => {
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  {t("requestDesignConsultation")}
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-blue-100 mb-6">
                <Utensils className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t("operatingEstablishments")}</h3>
              <p className="text-gray-600 mb-8">
                {t("operatingEstablishmentsDesc")}
              </p>

              <div className="space-y-6">
                {operatingItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <Button
                  variant="outline"
                  className="border-blue-500 text-blue-600 hover:bg-blue-50"
                  onClick={() => {
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  {t("viewSupplyCatalog")}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: t("equipmentMaintenance"),
                description: t("equipmentMaintenanceDesc"),
              },
              {
                title: t("staffTraining"),
                description: t("staffTrainingDesc"),
              },
              {
                title: t("emergencyRepairs"),
                description: t("emergencyRepairsDesc"),
              },
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  >
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
