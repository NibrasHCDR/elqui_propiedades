/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'

import { myTheme } from './teheme'
import StudioNavbar from './app/components/StudioNavbar'
import Logo from './app/components/LogoCMS'

export default defineConfig({
  name: 'Studio',
  apiVersion,
  title: 'SiteWizard Sanity Studio Content',
  basePath: '/admin',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool()
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    ],
    studio: {
      components: {
        logo: Logo,
        navbar: StudioNavbar
      }
    },

    roles: [
      {
        name:'editorPersonalizado',
        title: 'Editor Personalizado',
        description: 'Puede ingresar al administrador, editar y publicar',
        // Define los permisos específicos según tus necesidades
        // Por ejemplo:
         permissions: [
           { name: 'read', path: ['studio'] },
           { name: 'write', path: ['desk'] },
        //   // ... Otros permisos
         ],
      }
    ]
    
})
