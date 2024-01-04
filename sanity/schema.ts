import { type SchemaTypeDefinition } from 'sanity'
import headerSchema from './schemas/header-schema'
import portadaSchema from './schemas/portada-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [headerSchema, portadaSchema],
}
