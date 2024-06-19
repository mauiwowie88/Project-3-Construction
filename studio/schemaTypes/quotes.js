import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'quotes',
  title: 'Quotes',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
    }),
  ],
})
