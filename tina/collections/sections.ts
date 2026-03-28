import type { TinaCollection } from 'tinacms'

export const sections: TinaCollection = {
  label: 'Sections',
  name: 'sections',
  path: 'content/sections',
  format: 'md',
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title',
    },
    {
      type: 'rich-text',
      label: 'Content',
      name: 'content',
    },
    {
      type: 'image',
      label: 'Image',
      name: 'image',
    },
    {
      type: 'number',
      label: 'Order',
      name: 'order',
    },
  ],
}