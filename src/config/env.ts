import { config } from 'dotenv'
import { resolve } from 'path'

import { EnvironmentType } from '~/common/enums'

config({ path: resolve(__dirname, '..', '..', '.env') })

export const {
  PORT = 5000,
  NODE_ENV = EnvironmentType.DEV
} = process.env
