<template>
  <div id="app">
    <el-container>
      <el-header class="layout-header">
        <ui-logo />
        <div class="layout-top-icon">
          <ui-icon-login :size="38" force-open />
        </div>
      </el-header>
      <el-main style="height: 0; flex-grow: 1">
        <el-scrollbar style="width: 100%">
          <div style="padding: 10px 10px 10px 10px">
            <RouterView />
          </div>
        </el-scrollbar>
      </el-main>

      <el-footer height="84px">
        <ui-navigation-mobile :routes="routes"></ui-navigation-mobile>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import UiLogo from '@/ui/components/UiLogo.vue'
import UiIconLogin from '@/ui/components/Header/HeaderUserInfo.vue'
import UiNavigationMobile from '@/ui/components/UiNavigationMobile.vue'

export default {
  name: 'UiLayout',
  components: {
    UiNavigationMobile,
    UiIconLogin,
    UiLogo,
    RouterView,
  },
  data() {
    return {
      routes: this.$router.options.routes, // 获取路由配置
    }
  },
}
</script>

<style scoped lang="scss">
// 顶部菜单高度
$header-height: 60px;
// 顶部背景颜色
$header-background-color: #333333;

.layout-header {
  width: 100%;
  height: $header-height;
  // 背景颜色
  background-color: $header-background-color;
  // 底部阴影
  box-shadow: inset 0 -10px 4px -10px rgba(0, 0, 0, 1);
}

.layout-top-icon {
  margin-left: auto !important;
  margin-right: 20px;
}
</style>
