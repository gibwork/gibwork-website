"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { ArrowRight }from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAllCaseStudies } from "@/data/case-studies";

export default function CaseStudies() {
  const caseStudies = getAllCaseStudies();
  
  return (
    <div className="relative w-full sm:pb-12 sm:px-6">
      <div className="w-full max-w-7xl mx-auto p-4 sm:p-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Case Studies
          </motion.span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          See how Gibwork has helped companies and organizations transform their projects.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <motion.div
            key={study.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-56 w-full">
                <Image 
                  src={study.imageSrc} 
                  alt={study.title}
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex flex-wrap gap-2">
                    {study.category.map((cat, index) => (
                      <span key={index} className="text-sm px-2 py-1 rounded-full bg-blue-100 text-blue-600 font-medium">
                        {cat}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    {study.readTime}
                  </span>
                </div>
                <CardTitle>{study.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {study.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-gray-500">
                  Published on {study.date}
                </p>
              </CardContent>
              <CardFooter>
                <Link href={`/case-studies/${study.slug}`} className="w-full">
                <Button asChild className="group">
              <Link href={`/case-studies/${study.slug}`} target="_blank">
                Read more
                <ArrowRight className="size-0 group-hover:size-5 transition-all -ml-2 group-hover:ml-0" />
              </Link>
            </Button> 
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      </div>
    </div>
  );
}
