"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import SectionHeader from "./section-header";

export default function ContactSection() {
  const t = useTranslations();

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    interest: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, interest: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log("Form submitted:", formState);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormState({
      name: "",
      email: "",
      phone: "",
      company: "",
      interest: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle={t("contact.title")}
          title={t("contact.h1")}
          description={t("contact.description")}
        />

        <div className="flex flex-col lg:flex-row items-start gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                {t("contact.sendUsMessage")}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("contact.fullName")}</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder={t("contact.fullName")}
                      value={formState.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t("contact.emailAddress")}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={t("contact.emailAddressPlaceholder")}
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t("contact.phoneNumber")}</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+998 (99) 123-45-67"
                      value={formState.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">{t("contact.companyName")}</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder={t("contact.companyName")}
                      value={formState.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="interest">{t("contact.theme")}</Label>
                  <Select
                    value={formState.interest}
                    onValueChange={handleSelectChange}
                  >
                    <SelectTrigger id="interest">
                      <SelectValue
                        placeholder={t("contact.themeSelector")}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new-construction">
                        {t("newConstruction.title")}
                      </SelectItem>
                      <SelectItem value="operating">
                        {t("operating.title")}
                      </SelectItem>
                      <SelectItem value="restaurants">
                        {t("restaurantsBars.title")}
                      </SelectItem>
                      <SelectItem value="services">
                        {t("services.title")}
                      </SelectItem>
                      <SelectItem value="other">
                        {t("contact.other")}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t("contact.message")}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t("contact.messagePlaceholder")}
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white"
                >
                  {t("contact.sendMessage")}
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                {t("contact.contactInformation")}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-sky-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      {t("contact.ourLocation")}
                    </h4>
                    <p className="text-gray-600">
                      {t("contact.address")}
                      {/* 123 Hospitality Avenue
                      <br />
                      Suite 456
                      <br />
                      New York, NY 10001 */}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-sky-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      {t("contact.phone")}
                    </h4>
                    <p className="text-gray-600">
                      +998 (90) 176 62 50
                      <br />
                      +998 (95) 177 62 50
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-sky-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      Email
                    </h4>
                    <p className="text-gray-600">
                      info@hotelsupply.com
                      <br />
                      support@hotelsupply.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-sky-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      {t("contact.businessHours")}
                    </h4>
                    <p className="text-gray-600">{t("contact.mondayFriday")}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="rounded-xl overflow-hidden h-64 bg-gray-100">
                  <img
                    src="/placeholder.svg?height=300&width=600&text=Map+Location"
                    alt="Office Location Map"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
