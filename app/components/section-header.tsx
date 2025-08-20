"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
  subtitle: string
  title: string
  description: string
  alignment?: "left" | "center"
}

export default function SectionHeader({ subtitle, title, description, alignment = "center" }: SectionHeaderProps) {
  const textAlign = alignment === "center" ? "text-center" : "text-left"

  return (
    <div className={`max-w-3xl ${alignment === "center" ? "mx-auto" : ""} mb-12 ${textAlign}`}>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-block px-4 py-1.5 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-4"
      >
        {subtitle}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-gray-600"
      >
        {description}
      </motion.p>
    </div>
  )
}
