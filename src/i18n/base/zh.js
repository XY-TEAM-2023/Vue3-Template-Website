export default {
  app: {
    needLogin: '需要登录后才能访问该页面',
    loginOtherDevice: '账号在其他设备上登录',
    sessionTimeout: '登录已经失效',
    needLoginBtn: '立即登录',
    signOut: '退出登录',
    requestFail: '请求失败，请稍后再试',
    editI18nLabel: '请输入修改后的内容',
    searchParamsTitle: '过滤器',
    searchResultTitle: '报表',
    editDialogTitle: '编辑{title}',
  },
  com: {
    btnYes: '是',
    btnNo: '否',
    btnOk: '确定',
    btnSubmit: '提交',
    btnCancel: '取消',
    btnSearch: '搜索',
    btnCancelSearch: '取消搜索',
    btnEdit: '编辑',
    btnCreate: '创建',
    btnDelete: '删除',
    btnReset: '重置',
    btnApply: '应用',
    handler: '操作',
    creatTime: '创建时间',
    updateTime: '更新时间',
    index: '索引',
    noPermission: '无权限',
    requestFailTip: '请求失败，是否重试？',
    deleteTip: '是否确认删除？',
    imgTypeError: '不支持的图片格式',
    imgSizeError: '图片大小不能大于{size}MB',
  },
  tabs: {
    close: '关闭当前',
    closeLeft: '关闭左侧',
    closeRight: '关闭右侧',
    closeOther: '关闭其他',
    closeAll: '关闭所有',
  },
  otp: {
    titleBind: '绑定OTP',
    bindDesc: '绑定成功后，点击下一步',
    titleCheck: 'OTP验证',
    btnNext: '下一步',
  },
  language: '中文',
  person: {
    name: '张三',
    hobby: '唱跳，rap，篮球',
  },
  // 登录页面
  loginView: {
    inputAccount: '请输入账号',
    inputPassword: '请输入密码',
    loginFail: '账号或密码错误',
    accountIsLock: '账号被封禁',
    remainLoginTimes: '剩余尝试次数: ',
    loginBtn: '登录',
  },
  // 个人信息页面
  userInfoView: {
    router: '个人信息',
  },
  // 用户列表页面
  userListView: {
    router: '用户列表',
    account: '账号',
    role: '角色',
    note: '备注',
    accountStatus: '账号状态',
    lock: '封禁',
    normal: '正常',
    otpStatus: 'otp状态',
    otpStatusBind: '已绑定',
    otpStatusUnbind: '待绑定',
    otpStatusClose: '未开启',
    creator: '创建者',
    searchAccount: '搜索账号',
    createAccount: '创建账号',
    disableAccount: '封禁账号',
    clearOtp: '重置OTP',
    onlineStatus: '在线状态',
    onlineStatus_on: '在线',
    onlineStatus_off: '离线',
    deleteAccountTip: '是否确定删除用户{search_account}?',
  },
  createUserDialog: {
    account: '账号',
    password: '密码',
    role: '角色',
    note: '备注',
    accountMustInput: '账号不能为空',
    accountLengthError: '账号有效长度为4~20',
    passwordMustInput: '密码不能为空',
    passwordLengthError: '账号有效长度为6~20',
    chooseRoleTip: '请选择用户角色',
  },
  changeUserInfoDialog: {
    title: '修改用户信息',
    account: '账号',
    password: '密码',
    role: '角色',
    note: '备注',
    accountStatus: '账号状态',
    lock: '封禁',
    normal: '正常',
  },
  // 角色列表页面
  roleListView: {
    router: '角色',
    title: '角色列表',
    note: '备注',
    status: '状态',
    lock: '封禁',
    unlock: '解封',
    normal: '正常',
    lockTip: '是否确定封禁该角色({name})?',
    lockChildrenTip: '是否同步封禁所有子角色',
    unlockTip: '是否确定解封该角色({name})?',
    unlockChildrenTip: '是否同步解封所有子角色',
    deleteEnableTip: '只有处于封禁状态的角色才可以删除',
    deleteTip: '是否确定删除该角色({name})?',
    // 菜单管理
    menuTitle: '菜单管理',
  },
  // 创建角色窗口
  createRoleDialog: {
    title: '创建角色',
    name: '角色名',
    note: '备注',
    roleInputTip: '请输入角色名',
    roleLengthTip: '角色名长度有效范围4~20',
  },
  // 修改角色信息窗口
  changeRoleInfoDialog: {
    title: '编辑角色信息',
    name: '角色名',
    note: '备注',
    permission: '权限',
  },
  // 路由配置页面
  routerListView: {
    router: '菜单列表',
    name: '名字',
    icon: '图标',
    title: '标题',
    korean: '韩文',
    chinese: '中文',
    english: '英文',
    display: '是否显示',
    path: '页面地址',
    cache: '路由缓存',
    defaultConfig: '基础配置',
    filePath: '文件路径',
    btnInit: '初始化',
    changeTitle: '修改标题内容',
    changeComponent: '修改组件路径',
    changeIconTitle: '选择图标',
    deleteTip: '是否确定删除({name})?',
    directory: '目录',
    view: '页面',
    type: '类型',
    btnSetMain: '设置为首页',
    homePage: '首页',
    homePageTip: '是否将其({name})设置为主页?',
    displayPermission: '查看权限',
    btnLoadProject: '加载项目',
    btnUpdateMenus: '更新菜单',
    btnUpdatePermission: '更新组件权限',
  },
  roleMenuConfigView: {
    title: '菜单分配',
    noMenus: '暂未分配菜单',
    noMenusFull: '暂无可分配菜单',
    setHome: '置为首页',
  },
  rolePermissionView: {
    title: '页面权限',
  },
  uiMenuPermission: {
    view: '页面',
    includeView: '引用页面',
    permission: '权限值',
    components: '组件',
    parentTitle: '父级标题',
    displayTitle: '标题',
    status: '状态',
    tableGroup: '表格',
    componentGroup: '组件',
  },
}
