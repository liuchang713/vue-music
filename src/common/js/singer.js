export default class Singer {
  constructor ({id, name}) {
    this.id = id
    this.name = name
    this.avatar = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${id}.jpg?max_age=2592000`
    this.linkurl = `https://y.qq.com/n/yqq/singer/${id}.html#stat=y_new.singerlist.singerpic`
  }
}
