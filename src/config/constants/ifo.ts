import tokens from './tokens'
import farms from './farms'
import { Ifo, Token } from './types'

const cakeBnbLpToken: Token = {
  symbol: farms[0].lpSymbol,
  address: farms[0].lpAddresses,
  decimals: 18,
}

const ifos: Ifo[] = [
  
]

export default ifos
