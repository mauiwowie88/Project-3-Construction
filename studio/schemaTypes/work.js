import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
    defineField({
      name: 'imgPath',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'tasks',
      title: 'Tasks',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
