import React from 'react';
import { MDXComponents } from 'mdx/types';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ className, ...props }) => (
      <h1 
        className={cn("mt-6 mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100", 
        className)} 
        {...props} 
      />
    ),
    h2: ({ className, ...props }) => (
      <h2 
        className={cn("mt-6 mb-3 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100", 
        className)} 
        {...props} 
      />
    ),
    h3: ({ className, ...props }) => (
      <h3 
        className={cn("mt-5 mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100", 
        className)} 
        {...props} 
      />
    ),
    h4: ({ className, ...props }) => (
      <h4 
        className={cn("mt-4 mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100", 
        className)} 
        {...props} 
      />
    ),
    p: ({ className, ...props }) => (
      <p 
        className={cn("leading-7 mb-4 text-gray-700 dark:text-gray-300", 
        className)} 
        {...props} 
      />
    ),
    a: ({ className, href, ...props }) => {
      const isInternal = href && (href.startsWith('/') || href.startsWith('#'));
      if (isInternal) {
        return (
          <Link 
            href={href} 
            className={cn("font-medium text-blue-600 underline underline-offset-4 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300", 
            className)} 
            {...props} 
          />
        );
      }
      
      return (
        <a 
          href={href}
          className={cn("font-medium text-blue-600 underline underline-offset-4 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300", 
          className)} 
          target="_blank" 
          rel="noopener noreferrer" 
          {...props} 
        />
      );
    },
    ul: ({ className, ...props }) => (
      <ul 
        className={cn("my-6 ml-6 list-disc", 
        className)} 
        {...props} 
      />
    ),
    ol: ({ className, ...props }) => (
      <ol 
        className={cn("my-6 ml-6 list-decimal", 
        className)} 
        {...props} 
      />
    ),
    li: ({ className, ...props }) => (
      <li 
        className={cn("mt-2", 
        className)} 
        {...props} 
      />
    ),
    blockquote: ({ className, ...props }) => (
      <blockquote 
        className={cn("mt-6 border-l-4 border-gray-300 pl-6 italic text-gray-700 dark:border-gray-600 dark:text-gray-300", 
        className)} 
        {...props} 
      />
    ),
    code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
      <code
        className={cn(
          "relative rounded bg-gray-100 px-[0.3rem] py-[0.2rem] font-mono text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-100",
          className
        )}
        {...props}
      />
    ),
    pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
      <pre
        className={cn(
          "mb-4 mt-6 overflow-x-auto rounded-lg bg-gray-100 p-4 dark:bg-gray-800",
          className
        )}
        {...props}
      />
    ),
    img: ({ className, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        className={cn("rounded-md border border-gray-200 dark:border-gray-700", className)}
        alt={alt || ""}
        {...props}
      />
    ),
    hr: ({ className, ...props }) => (
      <hr 
        className={cn("my-8 border-gray-200 dark:border-gray-700", 
        className)} 
        {...props} 
      />
    ),
    table: ({ className, ...props }) => (
      <div className="my-6 w-full overflow-y-auto">
        <table 
          className={cn("w-full", 
          className)} 
          {...props} 
        />
      </div>
    ),
    tr: ({ className, ...props }) => (
      <tr 
        className={cn("m-0 border-t border-gray-200 p-0 even:bg-gray-50 dark:border-gray-700 dark:even:bg-gray-800", 
        className)} 
        {...props} 
      />
    ),
    th: ({ className, ...props }) => (
      <th 
        className={cn("border border-gray-200 px-4 py-2 text-left font-bold dark:border-gray-700",
        className)} 
        {...props} 
      />
    ),
    td: ({ className, ...props }) => (
      <td 
        className={cn("border border-gray-200 px-4 py-2 text-left dark:border-gray-700",
        className)} 
        {...props} 
      />
    ),
    ...components,
  };
}
