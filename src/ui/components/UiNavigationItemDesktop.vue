<template>
  <!-- 有子菜单 -->
  <el-sub-menu v-if="isShowGroup" :index="route.fullPath">
    <template #title>
      <!--  图标  -->
      <el-icon v-if="checkIsShowIcon(route)" :size="config.router.admin.iconSize">
        <component v-if="isElementIcon(route.meta.icon)" :is="route.meta.icon" />
        <ui-svg v-else :svg-code="route.meta.icon" svg-color="#FFFFF" />
      </el-icon>

      <span>
        <!--  菜单名  -->
        {{ getTitle(route) }}
        <!--  小红点  -->
        <el-badge :is-dot="true" :hidden="!showRedDotGroup">
          <div style="margin-left: 15px"></div>
        </el-badge>
      </span>
    </template>

    <ui-navigation-item-desktop v-for="subRoute in route.children" :key="subRoute.path" :route="subRoute" />
  </el-sub-menu>

  <!-- 无子菜单 -->
  <el-menu-item v-else-if="isShowItem" :index="route.fullPath" @click="navigateTo(route.fullPath)">
    <el-icon v-if="checkIsShowIcon(route)" :size="config.router.admin.iconSize">
      <component v-if="isElementIcon(route.meta.icon)" :is="route.meta.icon" />
      <ui-svg
        v-else
        :svg-code="route.meta.icon"
        :size="config.router.admin.iconSize + 'px'"
        :svg-color="config.router.admin.textColor"
        :svg-hover-color="config.router.admin.activeTextColor"
        :disable-mouse-hover="true"
        :force-hover="route.fullPath === appStore.routerPath"
        :style="{ transition: 'fill 0.3s' }"
      />
    </el-icon>

    <template #title>
      <!--  菜单名  -->
      {{ getTitle(route) }}
      <!--  小红点  -->
      <el-badge :is-dot="!redDotValue" :value="redDotValue" :hidden="!showRedDot">
        <div style="margin-left: 15px"></div>
      </el-badge>
    </template>
  </el-menu-item>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { defineProps, computed } from 'vue'
import { useAppStore } from '@/stores/app'
import { config } from '@/config'
import UiSvg from '@/ui/components/UiSvg.vue'

const router = useRouter()
const props = defineProps({
  route: {
    type: Object,
    default: () => ({}),
  },
})

const appStore = useAppStore()

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// icon相关

function isElementIcon(icon) {
  return !icon.includes('.')
}

function getTitle(obj) {
  return obj.meta.title[appStore.language]
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// 路由相关

/**
 * 检查是否为菜单组
 */
function checkIsGroup(obj) {
  return obj.children && obj.children.length > 0
}

/**
 * 检查是否显示
 */
function checkIsShow(obj) {
  return !obj.meta || obj.meta.hidden === undefined || !obj.meta.hidden
}

/**
 * 检查是否显示图标
 * @param obj
 * @returns {boolean}
 */
function checkIsShowIcon(obj) {
  return obj.meta && obj.meta.icon
}

/**
 * 检查菜单组是否显示
 */
function checkIsShowGroup(obj) {
  if (!checkIsGroup(obj)) {
    return false
  }

  if (!checkIsShow(obj)) {
    return false
  }

  // 判断是否有要显示的子菜单

  for (const key in obj.children) {
    const item = obj.children[key]
    // 菜单分组
    if (checkIsGroup(item)) {
      return checkIsShowGroup(item)
    }

    // 是否显示菜单
    if (checkIsShowItem(item)) {
      return true
    }
  }

  return false
}

/**
 * 检查菜单是否显示
 * @param obj
 * @returns {boolean}
 */
function checkIsShowItem(obj) {
  if (checkIsGroup(obj)) {
    return false
  }
  // if (config.websiteModel === 'admin') {
  //   if (obj.fullPath === config.router.homePage) {
  //     return false
  //   }
  // }

  if (!obj.component) {
    return false
  }

  return checkIsShow(obj)
}

/**
 * 是否显示菜单分组
 * @type {ComputedRef<boolean|*>}
 */
const isShowGroup = computed(() => {
  return checkIsShowGroup(props.route)
})

/**
 * 是否显示菜单
 * @type {ComputedRef<boolean>}
 */
const isShowItem = computed(() => {
  return checkIsShowItem(props.route)
})
//
// console.log('-------------------------- ', props.route.path)
// console.log('isShowItem', isShowItem.value)
// console.log('isShowGroup', isShowGroup.value)

const navigateTo = (path) => {
  if (path === router.currentRoute.value.fullPath) {
    if (config.router.clickSamePageReload) {
      router.push({ path: '/refresh', query: { redirect: path } })
    }
  } else {
    router.push(path)
  }
  appStore.tryHideRouteRedDot(path)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// 小红点相关
/** 是否显示小红点 */
const showRedDot = computed(() => appStore.isShowRouteRedDot(props.route.fullPath))
/** 小红点显示内容 */
const redDotValue = computed(() => appStore.getRouteRedDotValue(props.route.fullPath))
/** 是否显示分区的小红点 */
const showRedDotGroup = computed(() => {
  if (!checkIsGroup(props.route)) {
    return false
  }

  if (!checkIsShow(props.route)) {
    return false
  }

  // 判断是否有要显示的子菜单
  for (const key in props.route.children) {
    const item = props.route.children[key]
    // 菜单分组
    if (checkIsGroup(item)) {
      return checkIsShowGroup(item)
    }

    // 是否显示菜单
    if (checkIsShowItem(item)) {
      // 是否有小红点显示
      if (appStore.isShowRouteRedDot(item.fullPath) && !appStore.getRouteRedDotIsLooked(item.fullPath)) {
        return true
      }
    }
  }
  return false
})

// 测试路由小红点
// appStore.setRouteRedDot(props.route.fullPath, '', false)
// appStore.setRouteRedDot(props.route.fullPath, '18', true)
</script>
