import { createI18n } from 'vue-i18n'
import BASE_EN from './base/en'
import BASE_ZH from './base/zh'
import BASE_KO from './base/ko'
import { useAppStore } from '@/stores/app'
import { config } from '@/config'

// 语言配置
const messages = {
  en: { ...BASE_EN },
  zh: { ...BASE_ZH },
  ko: { ...BASE_KO },
}

// 从本地数据中读取当前语言
function getLanguageFromLocalStorage() {
  const localStorageData = localStorage.getItem('app') // 获取本地持久化数据
  if (localStorageData) {
    try {
      const parsedData = JSON.parse(localStorageData)
      const language = parsedData.language
      if (language && language.trim() !== '') {
        return language
      }
    } catch (error) {
      return config.defaultLanguage
    }
  }
  // 默认返回 'en' 作为容错机制
  return config.defaultLanguage
}

const i18n = createI18n({
  locale: getLanguageFromLocalStorage(), // 设置当前语言类型
  messages,
})

i18n.global.init = () => {
  const appStore = useAppStore()

  appStore.initLanguage(messages, (lang) => {
    // console.log(lang)
    if (messages[lang]) {
      i18n.global.locale = lang // 切换语言
      return true // 返回 true 表示切换成功并有相关配置
    } else {
      return false // 返回 false 表示切换失败或没有相关配置
    }
  })
}

export default i18n
