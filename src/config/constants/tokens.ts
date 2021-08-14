import { ChainId, Token } from '@unirealchain/sdk'

export const CAKE: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    18,
    'CAKE',
    'UnirealSwap Token',
  ),
  [ChainId.TESTNET]: new Token(
    ChainId.TESTNET,
    '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    18,
    'CAKE',
    'UnirealSwap Token',
  ),
}

export const UNR: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    18,
    'UNR',
    'UnirealSwap Token',
  ),
  [ChainId.TESTNET]: new Token(
    ChainId.TESTNET,
    '0x40f61130DD31B3b7392C48E2A65703b7b1Bd0743',
    18,
    'UNR',
    'UnirealSwap Token',
  ),
}
export const UNRS: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    18,
    'UNRS',
    'UNRS Token',
  ),
  [ChainId.TESTNET]: new Token(
    ChainId.TESTNET,
    '0x1EB9A9002067f62F2e11B87b6141eb8c0a8Da8eB',
    18,
    'UNRS',
    'UNRS Token',
  ),
}
export const BUSD: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    18,
    'BUSD',
    'Binance USD',
  ),
  [ChainId.TESTNET]: new Token(
    ChainId.TESTNET,
    '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee',
    18,
    'BUSD',
    'Binance USD',
  ),
}

export const WBNB = new Token(ChainId.MAINNET, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'WBNB', 'Wrapped BNB')
export const DAI = new Token(ChainId.MAINNET, '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3', 18, 'DAI', 'Dai Stablecoin')
export const USDT = new Token(ChainId.MAINNET, '0x55d398326f99059fF775485246999027B3197955', 18, 'USDT', 'Tether USD')
export const BTCB = new Token(ChainId.MAINNET, '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18, 'BTCB', 'Binance BTC')
export const UST = new Token(
  ChainId.MAINNET,
  '0x23396cF899Ca06c4472205fC903bDB4de249D6fC',
  18,
  'UST',
  'Wrapped UST Token',
)
export const ETH = new Token(
  ChainId.MAINNET,
  '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
  18,
  'ETH',
  'Binance-Peg Ethereum Token',
)
export const USDC = new Token(
  ChainId.MAINNET,
  '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  18,
  'USDC',
  'Binance-Peg USD Coin',
)

const tokens = {
  bnb: {
    symbol: 'BNB',
    projectLink: 'https://www.binance.com/',
  },
  cake: {
    symbol: 'CAKE',
    address: {
      56: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
      97: '0x405eE08ab20bE7A8c967dCA148a28ac66576e9C8',
    },
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
  },
  unr: {
    symbol: 'UNR',
    address: {
      56: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
      97: '0x40f61130DD31B3b7392C48E2A65703b7b1Bd0743',
    },
    decimals: 18,
    projectLink: 'https://unirealchain.com/',
  },
  unrs: {
    symbol: 'UNRS',
    address: {
      56: '0xc194af6c3e426b27ac75fff1b78ae26ecfced8e3',
      97: '0x1EB9A9002067f62F2e11B87b6141eb8c0a8Da8eB',
    },
    decimals: 18,
    projectLink: 'https://unirealchain.com/',
  },
  
  wbnb: {
    symbol: 'wBNB',
    address: {
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      97: '0x61bB4256e4773242745E771cB442E6F869729ba8',
    },
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
  },
  syrup: {
    symbol: 'SYRUP',
    address: {
      56: '0x009cF7bC57584b7998236eff51b98A168DceA9B0',
      97: '0xfE1e507CeB712BDe086f3579d2c03248b2dB77f9',
    },
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
  },
  busd: {
    symbol: 'BUSD',
    address: {
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      97: '0x86D4069a700D8D39C48Ad7a1DC79Aea4455E5BcD',
    },
    decimals: 18,
    projectLink: 'https://www.paxos.com/busd/',
  },
  revv: {
    symbol: 'REVV',
    address: {
      56: '0x833f307ac507d47309fd8cdd1f835bef8d702a93',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://revvmotorsport.com/',
  },
  btt: {
    symbol: 'BTT',
    address: {
      56: '0x8595F9dA7b868b1822194fAEd312235E43007b49',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.bittorrent.com/',
  },
}

export default tokens
