export default {
  app: {
    needLogin: 'You need to log in to access this page.',
    loginOtherDevice: 'Your account has been logged in on another device',
    sessionTimeout: 'Login has expired.',
    needLoginBtn: 'Log in now',
    signOut: 'sign out',
    requestFail: 'Request failed, please try again later.',
    searchParamsTitle: '~~~~~~~搜索',
    searchResultTitle: '~~~~~~~~查询结果',
    editDialogTitle: '~~~~~~~~编辑{title}',
  },
  com: {
    btnYes: 'yes',
    btnNo: 'no',
    btnOk: 'ok',
    btnSubmit: 'Submit',
    btnCancel: 'cancel',
    btnSearch: 'Search',
    btnCancelSearch: 'Cancel Search',
    btnEdit: 'Edit',
    btnCreate: 'Create',
    btnDelete: 'Delete',
    btnReset: 'Reset',
    btnApply: 'Apply',
    handler: 'Operation',
    creatTime: 'Creation Time',
    updateTime: 'Update Time',
    index: 'Index',
    noPermission: 'No permission',
  },
  language: '英语',
  person: {
    name: '张三',
    hobby: '唱跳，rap，篮球',
  },
  // 登录页面
  loginView: {
    inputAccount: 'Enter your account',
    inputPassword: 'Enter your password',
    loginFail: 'Incorrect account or password',
    accountIsLock: 'Account is locked',
    remainLoginTimes: 'Remaining login attempts: ',
    loginBtn: 'Login',
  },
  // 个人信息页面
  userInfoView: {
    router: 'user info',
  },
  // 用户列表页面
  userListView: {
    router: 'User List',
    account: 'Account',
    role: 'Role',
    note: 'Note',
    accountStatus: 'Account Status',
    lock: 'Locked',
    normal: 'Normal',
    otpStatus: 'OTP Status',
    otpStatusBind: 'Bound',
    otpStatusUnbind: 'Pending Binding',
    otpStatusClose: 'Not Enabled',
    creator: 'Creator',
    searchAccount: 'Search Account',
    createAccount: 'Create Account',
    disableAccount: 'Disable Account',
    clearOtp: 'Reset OTP',
    onlineStatus: 'Online Status',
    onlineStatus_on: 'Online',
    onlineStatus_off: 'Offline',
    deleteAccountTip: 'Are you sure you want to delete user {account}?',
  },
  createUserDialog: {
    account: 'Account',
    password: 'Password',
    role: 'Role',
    note: 'Note',
    accountMustInput: 'Account cannot be empty',
    accountLengthError: 'Account length should be between 4 and 20 characters',
    passwordMustInput: 'Password cannot be empty',
    passwordLengthError: 'Password length should be between 6 and 20 characters',
    chooseRoleTip: 'Please choose a user role',
  },
  changeUserInfoDialog: {
    title: 'Modify User Information',
    account: 'Account',
    password: 'Password',
    role: 'Role',
    note: 'Note',
    accountStatus: 'Account Status',
    lock: 'Locked',
    normal: 'Normal',
  },
  // 角色列表页面
  roleListView: {
    router: 'Roles',
    name: 'Role Name',
    note: 'Note',
    status: 'Status',
    lock: 'Lock',
    unlock: 'Unlock',
    normal: 'Normal',
    groupStatus: 'Group Status',
    lockTip: 'Are you sure you want to lock this role ({name})?',
    lockChildrenTip: 'Do you want to lock all child roles synchronously?',
    unlockTip: 'Are you sure you want to unlock this role ({name})?',
    unlockChildrenTip: 'Do you want to unlock all child roles synchronously?',
    deleteEnableTip: 'Only roles in locked status can be deleted',
    deleteTip: 'Are you sure you want to delete this role ({name})?',
    editPermission: 'Permissions',
  },
  // 创建角色窗口
  createRoleDialog: {
    title: 'Create Role',
    name: 'Role Name',
    note: 'Note',
    roleInputTip: 'Please enter the role name',
    roleLengthTip: 'Role name length valid range 4~20',
  },
  // 修改角色信息窗口
  changeRoleInfoDialog: {
    title: 'Edit Role Information',
    name: 'Role Name',
    note: 'Note',
    permission: 'Permission',
  },
  // 路由配置页面
  routerListView: {
    router: 'Menu List',
    name: 'name',
    icon: 'Icon',
    title: 'Title',
    korean: 'Korean',
    chinese: 'Chinese',
    english: 'English',
    display: 'Display',
    path: 'Page Address',
    cache: 'Cache',
    defaultConfig: 'Basic Configuration',
    filePath: 'File Path',
    btnInit: 'Initialize',
    changeTitle: 'Modify title content',
    changeComponent: 'Modify component path',
    changeIconTitle: 'Select Icon',
    deleteTip: 'Are you sure you want to delete ({name})?',
    directory: 'directory',
    view: 'page',
    type: 'Type',
    btnSetMain: 'Set as Home',
    homePage: 'home',
    homePageTip: 'Would you like to set it ({name}) as the home page?',
    displayPermission: 'View permissions',
    btnLoadProject: 'Load Project',
    btnUpdateMenus: 'Update Menus',
    btnUpdatePermission: 'Update Component Permissions',
  },
  roleMenuConfigView: {
    title: 'Menu Assignment',
    noMenus: 'No menus assigned yet',
    noMenusFull: 'No assignable menus available',
    setHome: 'Set As Home',
  },
  rolePermissionView: {
    title: 'Page Permissions',
  },
  uiMenuPermission: {
    view: 'Page',
    includeView: 'Include Page',
    permission: 'Permission',
    components: 'Components',
    parentTitle: 'Parent Title',
    displayTitle: 'Title',
    status: 'Status',
    tableGroup: 'Table',
    componentGroup: 'Component',
  },
}
