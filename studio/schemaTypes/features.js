import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'features',
  title: 'Features',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'array',
      of: [{type: 'text'}],
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
    }),
  ],
})
