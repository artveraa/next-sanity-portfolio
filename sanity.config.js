import {defineConfig} from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from '@/sanity/schemas'

const config = defineConfig({
    projectId: 'vmjf30z2',
    dataset: 'production',
    title: 'Backend Portfolio',
    apiVersion: '2023-11-04',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: {types: schemas},
})

export default config