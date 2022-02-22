import { injectHtml } from 'vite-plugin-html'

import { PayloadTypes } from '../../vite'

import registerServiceWorker from './items/serviceWorker'

// https://github.com/anncwb/vite-plugin-html
export default function viteHtmlPlugin(payload: PayloadTypes) {
  return injectHtml({
    data: {
      title: `<title>${payload.appConfig.manifestJson.name}</title>`,
      description: `<meta name="description" content="${payload.appConfig.manifestJson.description}" />`,
      icons: `<link rel="apple-touch-icon" href="images/logo/assets/apple/apple-touch-icon.png">`,
      registerServiceWorker: registerServiceWorker({ isProdMode: payload.isProdMode }),
      themeColor: `<meta name="theme-color" content="${payload.appConfig.manifestJson.theme_color}" />`,
    },
  })
}
