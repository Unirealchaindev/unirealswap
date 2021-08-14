import { ChainId } from '@unirealchain/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb',
  [ChainId.TESTNET]: '0xBc778438Fba02c77e5C5dDc27D514eDe5F20D3D7',
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
