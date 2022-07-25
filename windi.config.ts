import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        luk: {
          500: '#2D2E32',
          600:'#25262A'
        },
        lukGray:'#FFFFFF',
        primary:'#FF5A51'
      },
    },
  },
  plugins: [formsPlugin],
})