<template>
  <div
    :style="{ width: size, height: size, backgroundColor: backgroundColor }"
    class="custom-icon-box unselect"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    @click="onClick"
  >
    <svg :width="svgSize" :height="svgSize" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
      <path
        v-for="(pathData, index) in svgPaths"
        :key="index"
        :d="pathData"
        :fill="(!disableMouseHover && isHovered) || forceHover ? svgHoverColor : svgColor"
        :style="props.style"
      />
    </svg>
  </div>
</template>

<script setup>
import { ref, defineProps, computed, reactive, watch } from 'vue'

/** 作为组件时，外部传参 */
const props = defineProps({
  /* 设置SVG的Path */
  svgCode: {
    type: String,
    default: '',
  },
  /** 30 */
  size: {
    type: String,
    default: '24',
  },
  /** svg大小, 整数 */
  svgSize: {
    type: String,
    default: '',
  },
  /** svg默认颜色 */
  svgColor: {
    type: String,
    default: 'black',
  },
  /** svg指向颜色 */
  svgHoverColor: {
    type: String,
    default: '',
  },
  bgColor: {
    type: String,
    default: 'transparent',
  },
  bgHoverColor: {
    type: String,
    default: '',
  },
  forceHover: {
    type: Boolean,
    default: false,
  },
  // 禁止鼠标指向时高亮
  disableMouseHover: {
    type: Boolean,
    default: false,
  },
  // 动态style
  style: {
    type: Object,
    default: () => {},
  },
})

const size = ref(props.size)
const svgColor = ref(props.svgColor)
const bgColor = ref(props.bgColor)
const svgHoverColor = ref(props.svgHoverColor)
if (svgHoverColor.value === '') {
  svgHoverColor.value = svgColor.value
}

const svgSize = ref(props.svgSize)
if (svgSize.value === '') {
  const match = size.value.match(/\d+/) // 使用正则表达式提取数字部分
  svgSize.value = match ? match[0] : '24' // 转换为整数
}

const bgHoverColor = ref(props.bgHoverColor)
if (bgHoverColor.value === '') {
  bgHoverColor.value = bgColor.value
}

const isHovered = ref(false)
const backgroundColor = computed(() => {
  return isHovered.value ? bgHoverColor.value : bgColor.value
})

/** 作为子组件时，定义有什么事件 */
const emit = defineEmits(['click'])
/** 触发点击事件 */
const onClick = () => {
  emit('click', {})
}

const svgPaths = ref(reactive(parseSvgIcon(props.svgCode)))
watch(
  () => [props.svgCode],
  ([newSvgPath], [oldSvgPath]) => {
    if (newSvgPath !== oldSvgPath) {
      svgPaths.value = parseSvgIcon(newSvgPath)
    }
  },
  { deep: true }
)

function parseSvgIcon(svgCode) {
  if (svgCode === '') {
    return []
  }

  const pathRegex = /<path[^>]*\bd="([^"]*)"/g
  const dValues = []
  let match

  while ((match = pathRegex.exec(svgCode)) !== null) {
    if (match[1]) {
      dValues.push(match[1])
    }
  }

  return dValues
}
</script>

<style scoped lang="scss">
/* 在这里添加样式，可以根据需要自定义 */
.custom-icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
