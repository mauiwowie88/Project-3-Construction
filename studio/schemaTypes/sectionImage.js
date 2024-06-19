import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'sectionImage',
  title: 'Section Image',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'object',
      fields: [
        {name: 'xs', type: 'number'},
        {name: 'sm', type: 'number'},
        {name: 'md', type: 'number'},
        {name: 'lg', type: 'number'},
      ],
    }),
    defineField({
      name: 'opacity',
      title: 'Opacity',
      type: 'string',
    }),
  ],
})
