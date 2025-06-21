
import { MetadataRoute } from 'next'
import { getAllCaseStudies } from '@/data/case-studies'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.gib.work'
  const currentDate = new Date().toISOString()
  
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changefrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: currentDate,
      changefrequency: 'weekly',
      priority: 0.8,
    },
  ]
  
  const caseStudies = getAllCaseStudies()
  const caseStudyRoutes = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: currentDate,
    changefrequency: 'monthly',
    priority: 0.7,
  }))
  
  return [...staticRoutes, ...caseStudyRoutes]
}