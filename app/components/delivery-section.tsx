"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  CreditCard,
  Receipt,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { useTranslations } from "next-intl";
import SectionHeader from "./section-header";

export default function DeliverySection() {
  const t = useTranslations("deliveryPayment");

  const deliveryFeatures = [
    {
      icon: Truck,
      title: t("nationwideDelivery"),
      description: t("nationwideDeliveryDesc"),
    },
    {
      icon: Calendar,
      title: t("scheduledDeliveries"),
      description: t("scheduledDeliveriesDesc"),
    },
    {
      icon: Clock,
      title: t("expressOptions"),
      description: t("expressOptionsDesc"),
    },
  ];

  const paymentFeatures = [
    {
      icon: CreditCard,
      title: t("flexiblePaymentOptions"),
      description: t("flexiblePaymentOptionsDesc"),
    },
    {
      icon: Receipt,
      title: t("transparentPricing"),
      description: t("transparentPricingDesc"),
    },
    {
      icon: ShieldCheck,
      title: t("secureTransactions"),
      description: t("secureTransactionsDesc"),
    },
  ];

  return (
    <section
      id="delivery"
      className="py-20 bg-gradient-to-b from-white to-sky-50"
    >
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
                <Truck className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {t("deliverySolutions")}
              </h3>
              <p className="text-gray-600 mb-8">{t("deliverySolutionsDesc")}</p>

              <div className="space-y-6">
                {deliveryFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-5 w-5 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="mt-8 p-4 bg-sky-50 rounded-lg border border-sky-100"
              >
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {t("deliveryTracking")}
                </h4>
                <p className="text-gray-600">{t("deliveryTrackingDesc")}</p>
              </motion.div>
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
                <CreditCard className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {t("paymentOptions")}
              </h3>
              <p className="text-gray-600 mb-8">{t("paymentOptionsDesc")}</p>

              <div className="space-y-6">
                {paymentFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100"
              >
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {t("businessFinancing")}
                </h4>
                <p className="text-gray-600">{t("businessFinancingDesc")}</p>
              </motion.div>
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
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              {t("ourDeliveryProcess")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: t("orderConfirmation"),
                  description: t("orderConfirmationDesc"),
                },
                {
                  step: "2",
                  title: t("preparation"),
                  description: t("preparationDesc"),
                },
                {
                  step: "3",
                  title: t("shipping"),
                  description: t("shippingDesc"),
                },
                {
                  step: "4",
                  title: t("delivery"),
                  description: t("deliveryDesc"),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="relative"
                >
                  <Card className="border-0 shadow-none">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mx-auto mb-4">
                        <span className="text-sky-600 font-bold">
                          {item.step}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-sky-100 -z-10 transform translate-x-1/2">
                      <div className="absolute right-0 top-1/2 w-3 h-3 rounded-full bg-sky-400 transform -translate-y-1/2 translate-x-1/2"></div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
