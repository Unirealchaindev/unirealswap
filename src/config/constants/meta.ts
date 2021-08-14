import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'UnirealSwap',
  description:
    'The most popular AMM on BSC by user count! Earn UNR through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by UnirealSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://unirealchain.com/assets/images/thum.jpg',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('UnirealSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('UnirealSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('UnirealSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('UnirealSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('UnirealSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('UnirealSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('UnirealSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('UnirealSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('UnirealSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('UnirealSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('UnirealSwap')}`,
      }
    default:
      return null
  }
}
