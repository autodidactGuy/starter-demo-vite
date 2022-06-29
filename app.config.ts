import getIpAdress from './devtools/utils/node/getIpAdress.js'
import pkg from './package.json' assert { type: 'json' }
import themeTokens from './src/theme/tokens/tokens.js'

export default async function appConfig(): Promise<AppConfigTypes> {
  return {
    domain: {
      main: '',
    },
    manifestJson: {
      name: 'Demo Starter',
      short_name: 'Demo Starter',
      description: pkg.description,
      start_url: '/',
      orientation: 'any',
      display: 'standalone',
      theme_color: themeTokens.colors.primary.main,
      background_color: themeTokens.colors.black.main,
    },
    server: {
      local: {
        port: 3001,
        IPAddress: getIpAdress(),
      },
    },
    theme: {
      tokens: themeTokens,
    },
  }
}

export type AppConfigTypes = {
  manifestJson: {
    name: string
    short_name: string
    description: string
    orientation: string
    display: string
    theme_color: string
    background_color: string
    start_url: string
    gcm_sender_id?: string
    screenshots?: {
      src: string
      sizes: string
      type: string
    }[]
    shortcuts?: {
      name?: string
      short_name?: string
      description?: string
      url?: string
      icons?: {
        src: string
        sizes: string
      }[]
    }[]
  }
  server: {
    local: {
      port: number
      IPAddress: string | undefined
    }
  }
  theme: {
    tokens: any
  }
  domain: {
    main: string
  }
}
