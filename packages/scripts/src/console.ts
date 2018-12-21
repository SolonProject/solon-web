import * as ethereum from '@dapp-stack/ethereum'
import * as lifecycle from './shared/lifecycle'
import { globalError } from './shared/globalError'

async function consoleAsync() {
  try {
    await ethereum.start()
    lifecycle.after()
    ethereum.console()
  } catch (error) {
    globalError(error)
  }
}

consoleAsync()
