"use client";

import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getCaseStudyBySlug } from "@/data/case-studies";
import CaseStudyContent from "@/components/case-study-content";
import dynamic from "next/dynamic";

const MDXComponents = {
  "solana-foundation": dynamic(
    () => import("@/content/case-studies/solana-foundation.mdx"),
    {
      loading: () => (
        <div className="py-12 text-center">Loading case study...</div>
      ),
    }
  ),
  "oss-bounty": dynamic(() => import("@/content/case-studies/oss-bounty.mdx"), {
    loading: () => (
      <div className="py-12 text-center">Loading case study...</div>
    ),
  }),
  "realms-alldomains": dynamic(() => import("@/content/case-studies/realms-alldomains.mdx"), {
    loading: () => (
      <div className="py-12 text-center">Loading case study...</div>
    ),
  }),
};

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const slug = params.slug.join("/");
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const MDXContent = MDXComponents[slug as keyof typeof MDXComponents];

  if (!MDXContent) {
    notFound();
  }

  return (
    <article className="relative w-full sm:pb-12 sm:px-2">
      <div className="w-full max-w-4xl mx-auto p-2 sm:p-4">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Link href="/case-studies">
            <Button variant="ghost" className="group flex items-center gap-2">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Case Studies
            </Button>
          </Link>
        </motion.div>

        {/* Case Study Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative h-80 w-full mb-8">
            <Image
              src={caseStudy.imageSrc}
              alt={caseStudy.title}
              fill
              className="rounded-lg object-cover"
              priority
            />
          </div>
          <div className="flex flex-wrap gap-2 items-center mb-4">
            <div className="flex flex-wrap gap-2">
              {caseStudy.category.map((cat, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium"
                >
                  {cat}
                </span>
              ))}
            </div>
            <span className="text-gray-500 text-sm">
              {caseStudy.date} • {caseStudy.readTime}
            </span>
          </div>
        </motion.div>

        {/* MDX Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <CaseStudyContent>
            <MDXContent />
          </CaseStudyContent>
        </motion.div>
      </div>
    </article>
  );
}
