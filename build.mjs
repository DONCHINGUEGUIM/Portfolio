import { build } from 'vite'
const result = await build({ logLevel: 'info' })
console.log('Build complete:', result)
