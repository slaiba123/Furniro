import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '@/sanity/env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token: process.env.SANITY_API_WRITE_TOKEN, // Use this for write operations
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
