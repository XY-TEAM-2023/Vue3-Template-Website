export default {
  app: {
    needLogin: 'You need to log in to access this page.',
    loginOtherDevice: 'Your account has been logged in on another device',
    sessionTimeout: 'Login has expired.',
    needLoginBtn: 'Log in now',
    signOut: 'sign out',
    requestFail: 'Request failed, please try again later.',
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
  },
  // 路由配置页面
  routerListView: {
    name: 'name',
    icon: 'Icon',
    title: 'Title',
    korean: 'Korean',
    chinese: 'Chinese',
    english: 'English',
    display: 'Display',
    path: 'Page Address',
    cache: 'Route Cache',
    defaultConfig: 'Basic Configuration',
    filePath: 'File Path',
    btnInit: 'Initialize',
    changeTitle: 'Modify title content',
    changeComponent: 'Modify component path',
  },
  // 以下为自定义页面的翻译 --------------------------------------

  // Member List Page
  memberListView: {
    router: 'User Management 1',
    Date: 'Date',
    MemberLevel: 'Member Level',
    SiteName: 'Site Name',
    MemberStatus: 'Member Status',
    MemberAccount: 'Member Account',
    MemberID: 'Member ID',
    Agent: 'Agent',
    GameName: 'Game Name',
    MemberName: 'Member Name',
    DepositorName: 'Depositor Name',
    LastWithdrawalName: 'Last Withdrawal Name',
    MemberLv: 'Member Level',
    PhoneNumber: 'Phone Number',
    RequestAmount: 'Request Amount',
    BalanceAtDeposit: 'Balance at Deposit',
    DepositBonus: 'Deposit Bonus',
    DepositBankAccount: 'Deposit Bank Account Type',
    ShooterID: 'Auto Reconciliation ID',
    Memo: 'Memo',
    RequestTime: 'Request Time',
    ProcessingStatus: 'Processing Status',
    ApprovalTime: 'Approval Time',
    Edit: 'Edit',
  },

  // Dragon Addition
  RouterMenu: {
    statistics: 'Statistics Management',
    ggrstatistics: 'GGR Statistics',
    FiManage: 'Financial Management',
    agent: 'Partner Management',
    agentlist: 'Partner List',
    event: 'Event Management',
    gamelog: 'Game Reports',
    livegamelog: 'LIVE Casino',
    evogamelog: 'EVO Reports',
    ppslotlog: 'PP Slot Log',
  },

  // Financial Management Menu - Related Content
  FIListView: {
    DepositRequest: 'Deposit Requests',
    WithdrawalRequest: 'Withdrawal Requests',
    TransactionHistory: 'Transaction History',
    ShooterSms: 'Auto Reconciliation SMS',
    Date: 'Date',
    SiteName: 'Site Name',
    GameName: 'Game Name',
    DepositorName: 'Depositor Name',
    BalanceAtDeposit: 'Balance at Deposit',
    DepositBonus: 'Deposit Bonus',
    DepositBankAccount: 'Deposit Bank Account Category',
    WithdrawalName: 'Withdrawal Name',
    HandlingName: 'Applicant Name',
    LastWithdrawalName: 'Last Withdrawal Name',
    RequestAmount: 'Request Amount',
    BalanceWithdrawal: 'Balance after Withdrawal',
    WithdrawalBankAccount: 'Withdrawal Account',
    WithdrawalBankName: 'Withdrawal Bank Name',
    RequestTime: 'Request Time',
    ApprovalTime: 'Approval Time',
    MemberStatus: 'Member Status',
    MemberAccount: 'Member Account',
    MemberID: 'Member ID',
    Agent: 'Partner ID',
    MemberName: 'Member Name',
    MemberLv: 'Member Level',
    PhoneNumber: 'Phone Number',
    Edit: 'Edit',
    Memo: 'Memo',
    ShooterID: 'Order Number',
    BankName: 'Bank Name',
    Sms: 'SMS Content',
    SmsType: 'SMS Category',
    SmsTime: 'SMS Time',
    DWType: 'Deposit/Withdrawal Category',
    Name: 'Name',
    Amount: 'Amount',
    Type: 'Match Status',
  },

  MemberView: {
    menu: 'Member Management',
    title: 'Member List',
    MemberNumber: 'Member ID',
    MemberAccount: 'Member Account',
    MemberStatus: 'Member Status',
    Name: 'Member Name',
    BankName: 'Bank Name',
    AccountNumber: 'Account Number',
    TestStatus: 'Test Status',
    PhoneNumber: 'Phone Number',
    MemberGrade: 'Member Grade',
    RegistrationTime: 'Registration Time',
    FirstDepositDate: 'First Deposit Date',
    LastDepositDate: 'Last Deposit Date',
    LastLogin: 'Last Login',
    LastBet: 'Last Bet',
    Referrer: 'Referrer',
    Balance: 'Balance',
    Agent: 'Agent',
    Memo: 'Memo',
  },
}
