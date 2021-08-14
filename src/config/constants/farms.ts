import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
   {
    pid: 0,
    lpSymbol: 'UNR',
    lpAddresses: {
      97: '0x40f61130DD31B3b7392C48E2A65703b7b1Bd0743',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    token: tokens.unr,
    quoteToken: tokens.wbnb,
  },
  
  {
    pid: 1,
    lpSymbol: 'BNB-UNR LP',
    lpAddresses: {
      97: '0x5606b34e7f1635797b5e809a262da36faf389fa3',
      56: '0xb8df5a2d382776dc5e0605d702e3e520da0ba621',
    },
    token: tokens.unr,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '0x6d7a17b3b9f77fe1786dd5315e6962fcf0926c6b',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'BNB-UNRS LP',
    lpAddresses: {
      97: '0x3047fd857ef38d348af47c04c96d9ac515dd0765',
      56: '0xb8df5a2d382776dc5e0605d702e3e520da0ba621',
    },
    token: tokens.unrs,
    quoteToken: tokens.wbnb,
  },
  
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
  
]

export default farms
