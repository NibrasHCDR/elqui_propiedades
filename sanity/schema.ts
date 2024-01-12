import { type SchemaTypeDefinition } from 'sanity'
import headerSchema from './schemas/header-schema'
import portadaSchema from './schemas/portada-schema'
import terrenosSchema from './schemas/terrenos-schema'
import seccion1Schema from './schemas/seccion1-schema'
import seccion2Schema from './schemas/seccion2-schema'
import casasSchema from './schemas/casas-schema'
import contactoSchema from './schemas/Contacto-schema'
import footerSchema from './schemas/footer-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [headerSchema, portadaSchema, seccion1Schema ,terrenosSchema, seccion2Schema, casasSchema, contactoSchema, footerSchema],
}
