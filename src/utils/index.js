import { config } from '@/config'
import { DateTime } from 'luxon'

/**
 * 判断是否是移动设备
 * @returns {boolean}
 */
export function isMobile() {
  const userAgent = navigator.userAgent
  // 使用正则表达式匹配常见的移动设备关键词
  const mobileKeywords = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
  const isMobilePlatform = mobileKeywords.test(userAgent)
  if (isMobilePlatform) {
    // 屏幕宽度小于500px使用手机显示
    return window.innerWidth < 500
  }
  return false // PC端
}

/**
 * 时间戳转时间
 * @param timestamp 时间戳
 * @returns {String}
 */
export function tsToTime(timestamp) {
  try {
    const targetTime = DateTime.fromMillis(timestamp).setZone(config.timezone)
    return targetTime.toFormat('yyyy/MM/dd HH:mm:ss')
  } catch (error) {
    return ''
  }
}

/**
 * 获取文本宽度
 * @param text 文本内容
 * @param font
 * @returns {number} 宽度 100
 */
export function getTextWidth(text, font = null) {
  // 创建一个临时的 div 元素
  let element = document.createElement('div')
  element.style.position = 'absolute'
  element.style.visibility = 'hidden'
  element.style.height = 'auto'
  element.style.width = 'auto'
  element.style.whiteSpace = 'nowrap'
  if (font) {
    element.style.font = font
  }
  element.textContent = text

  // 将元素添加到文档中，计算宽度，然后移除
  document.body.appendChild(element)
  const width = element.offsetWidth
  document.body.removeChild(element)

  return width
}

/**
 *
 * @param texts 文本数组
 * @param font 字体
 * @returns {number} 宽度 100
 */
export function getTextListMaxWidth(texts, font = null) {
  let max = 0
  texts.forEach((item) => {
    const w = getTextWidth(item, font)
    if (w > max) {
      max = w
    }
  })
  return max
}
