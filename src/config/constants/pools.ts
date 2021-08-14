import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.unr,
    earningToken: tokens.unr,
    contractAddress: {
      97: '0x2D534C19200Cc08F83B7fa94cc2d572e01114460',
      56: '0x405eE08ab20bE7A8c967dCA148a28ac66576e9C8',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  // {
  //   sousId: 1,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.cake,
  //   contractAddress: {
  //     97: '0xb28a6a8e112ac93b784c411dcf692a74b8a1653b',
  //     56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '10',
  //   sortOrder: 1,
  //   isFinished: false,
  // },
  {
    sousId: 1,
    stakingToken: tokens.unr,
    earningToken: tokens.unrs,
    contractAddress: {
      97: '0x15EE052aFa196BB2e40CDf845aE1673C5cE829e9',
      56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  // {
  //   sousId: 208,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.revv,
  //   contractAddress: {
  //     97: '',
  //     56: '0x8aa5b2c67852ed5334c8a7f0b5eb0ef975106793',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '1.331',
  // },
  // {
  //   sousId: 207,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.btt,
  //   contractAddress: {
  //     97: '',
  //     56: '0x3b804460c3c62f0f565af593984159f13b1ac976',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '263',
  // },
  
]

export default pools
