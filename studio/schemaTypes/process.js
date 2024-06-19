import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'process',
  title: 'Process',
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
      type: 'text',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true, // Enables hotspot/crop functionality
      },
    }),
  ],
})
