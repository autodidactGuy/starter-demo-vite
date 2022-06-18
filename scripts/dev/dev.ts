import shellDashboard from '../../devtools/utils/terminal/shellDashboard.js'
import getAppConfig from '../../app.config.js'
import type { CommandProps } from '../../devtools/utils/terminal/shellDashboard.js'

type DevProps = {
  onReady?: () => any
}

export default async function dev({ onReady }: DevProps = { onReady: undefined }) {
  const appConfig = await getAppConfig()

  const commands: CommandProps[] = [
    {
      label: 'Vite',
      command: 'npm run app:dev',
      ports: [appConfig.server.local.port],
      color: '#01BF81',
      enableQRCode: true,
    },
  ]

  shellDashboard({ commands, onCommandsRunning: onReady })
}
