import { defineSchema, defineConfig } from '@tinacms/schema-tools'
import { sections } from './collections/sections'

export default defineConfig({
  schema: defineSchema({
    collections: [sections],
  }),
  branch: 'main',
  clientId: '',
  token: '',
})