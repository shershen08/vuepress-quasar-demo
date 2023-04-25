import { getDirname, path } from '@vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
const __dirname = getDirname(import.meta.url)

console.log('config!', __dirname, path.resolve(__dirname, './components/'))

export default {
  plugins: [
    registerComponentsPlugin({
        componentsDir: path.resolve(__dirname, './components/'),
    }),
  ],
}
