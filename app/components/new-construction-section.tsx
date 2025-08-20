"use client";

import { motion } from "framer-motion";
import { Bed, Building, Palette, Ruler, Sofa, Utensils } from "lucide-react";
import { useTranslations } from "next-intl";
import FeatureCard from "./feature-card";
import SectionHeader from "./section-header";

export default function NewConstructionSection() {
  const t = useTranslations("newConstruction");

  const features = [
    {
      icon: Building,
      title: t("architecturalSupplies"),
      description: t("architecturalSuppliesDesc"),
    },
    {
      icon: Bed,
      title: t("roomFurnishings"),
      description: t("roomFurnishingsDesc"),
    },
    {
      icon: Sofa,
      title: t("LobbyCommonAreas"),
      description: t("LobbyCommonAreasDesc"),
    },
    {
      icon: Utensils,
      title: t("kitchenEquipment"),
      description: t("kitchenEquipmentDesc"),
    },
    {
      icon: Palette,
      title: t("interiorDesign"),
      description: t("interiorDesignDesc"),
    },
    {
      icon: Ruler,
      title: t("customSolutions"),
      description: t("customSolutionsDesc"),
    },
  ];

  return (
    <section
      id="new-construction"
      className="py-20 bg-gradient-to-b from-white to-sky-50"
    >
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {t("completeProjectManagement")}
              </h3>
              <p className="text-gray-600 mb-6">
                {t("completeProjectManagementDesc")}
              </p>
              <ul className="space-y-3">
                {[t("li1"), t("li2"), t("li3"), t("li4"), t("li5")].map(
                  (item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      className="flex items-start"
                    >
                      <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-sky-600"></div>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  )
                )}
              </ul>
            </div>
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600&text=Hotel+Construction"
                alt="Hotel Construction"
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
