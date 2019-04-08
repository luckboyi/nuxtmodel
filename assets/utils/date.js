function add0(m) { // 对日期类数据返回两位数字
  return m < 10 ? '0' + m : m
}

function applyNew(ctor, args) {
  var applyArgs = ([{}]).concat(args || [])
  var f = Function.prototype.bind.apply(ctor, applyArgs)
  return new f()
}

/**
 * 获取当前时间
 * @return string
 * @param ("Y-M-D h:m:s") 或 ("Y-M-D h:m:s",时间戳)
 * YMDhms直接替换对应时间单位，格式可自由替换
 * 没有参数直接返回Y-M-D h:m:s(如2018-01-01 12:21:45)
 * 有参数则直接替换
 */
function traferDate() {
  var now
  if (arguments.length == 2 && arguments[1] && new Date(arguments[1]) == 'Invalid Date') {
    var arr = arguments[1].match(/\d+/g)
    now = applyNew(Date, arr)
  } else if (arguments.length != 2) {
    now = new Date()
  } else {
    now = new Date(arguments[1])
  }
  // var now = arguments.length == 2 ? new Date(arguments[1]) : new Date();
  var year = now.getFullYear()
  var month = add0(now.getMonth() + 1)
  var date = add0(now.getDate())
  var hour = add0(now.getHours())
  var minute = add0(now.getMinutes())
  var seconds = add0(now.getSeconds())
  if (!arguments.length) {
    return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + seconds
  } else if (arguments.length > 0) {
    if (arguments[0].indexOf('Y') > -1) {
      arguments[0] = arguments[0].replace(/Y/g, year)
    }
    if (arguments[0].indexOf('M') > -1) {
      arguments[0] = arguments[0].replace(/M/g, month)
    }
    if (arguments[0].indexOf('D') > -1) {
      arguments[0] = arguments[0].replace(/D/g, date)
    }
    if (arguments[0].indexOf('h') > -1) {
      arguments[0] = arguments[0].replace(/h/g, hour)
    }
    if (arguments[0].indexOf('m') > -1) {
      arguments[0] = arguments[0].replace(/m/g, minute)
    }
    if (arguments[0].indexOf('s') > -1) {
      arguments[0] = arguments[0].replace(/s/g, seconds)
    }
    return arguments[0]
  }
}

export const showDate = traferDate

/**
 * 赛事时间传换为以下规则的方法
 * 1. 当日24点之后的比赛时间-当前时间>24小时，展示1天后；超过48小时，展示2天后……
 * 2. 当日24点之后的比赛时间-当前时间<24小时，展示x小时后
 * 3. 当日24点之后的比赛时间-当前时间<3小时，具体时间xx:xx
 * @param {*} time
 */
export const traferVisibleMarchTime = (time) => {
  const now = new Date().getTime()
  if (new Date(time) == 'Invalid Date') {
    var arr = time.match(/\d+/g)
    time = applyNew(Date, arr)
  } else {
    time = new Date(time).getTime()
  }
  const diffDays = parseInt((time - now) / 1000 / 3600 / 24)

  if (diffDays >= 1) {
    return `${diffDays}天后······`
  }
  const diffHours = parseInt((time - now) / 1000 / 3600)
  if (diffHours >= 3) {
    return `${diffHours}小时后`
  }
  return traferDate('h:m', time)
}

export const getMonthBetween = (start, end) => {
  var result = []
  var s = start.split('-')
  var e = end.split('-')
  var min = new Date()
  var max = new Date()
  min.setFullYear(s[0], s[1])
  max.setFullYear(e[0], e[1])
  var curr = min
  while (curr <= max) {
    var month = curr.getMonth()
    // month=month==0?12:month;
    var str = curr.getFullYear() + '年' + (month) + '月'
    var s = curr.getFullYear() + '年0月'
    if (str == s) {
      str = curr.getFullYear() + '年12月'
    }
    var viewStr = curr.getFullYear() + '-' + (month)
    var vs = curr.getFullYear() + '0'
    if (viewStr == vs) {
      viewStr = curr.getFullYear() + '12'
    }
    result.push({
      key: str,
      val: viewStr
    })
    curr.setMonth(month + 1)
  }
  return result
}
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}
function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}
