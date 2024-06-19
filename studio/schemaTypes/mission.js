import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'mission',
  title: 'Mission',
  type: 'document',
  fields: [
    defineField({
      name: 'statements',
      title: 'Statements',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
