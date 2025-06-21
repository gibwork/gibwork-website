import React from "react";
import { cn } from "@/lib/utils";

interface CaseStudyContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CaseStudyContent({
  children,
  className,
}: CaseStudyContentProps) {
  return (
    <div
      className={cn(
        "prose prose-base max-w-none dark:prose-invert",
        "prose-headings:font-bold prose-headings:tracking-tight",
        "prose-h1:text-2xl prose-h1:mb-5 prose-h1:mt-6",
        "prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3",
        "prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2",
        "prose-p:leading-6 prose-p:mb-3",
        "prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline",
        "prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:bg-blue-50 dark:prose-blockquote:bg-blue-900/10 prose-blockquote:py-2 prose-blockquote:rounded-r-md",
        "prose-img:rounded-lg prose-img:shadow-md",
        "prose-ul:my-4 prose-li:my-1",
        className
      )}
    >
      {children}
    </div>
  );
}

export default CaseStudyContent;
