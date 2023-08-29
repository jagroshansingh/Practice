import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
// import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Sanity Next.js Site',

  projectId: 'mgnjpk36',
  dataset: 'production',
  basePath:'/studio',
  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})