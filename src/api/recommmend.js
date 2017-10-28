import jsonp from '../common/js/jsonp'
import {commonParams, options} from './config'

export function getRecommend () {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_first_yqq.fcg'

  const data = Object.assign({}, commonParams, {
    tpl: 'v12',
    page: 'other',
    callback: 'GetRecomListCallback967492827693659',
    rnd: 967492827693659,
    // jsonpCallback: 'GetRecomListCallback967492827693659',
    loginUin: 0,
    hostUin: 0,
    notice: 0,
    platform: 'yqq',
    needNewCode: 0
  })

  return jsonp(url, data, options)
}
