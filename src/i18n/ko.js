export default {
  app: {
    needLogin: '이 페이지에 접속하려면 로그인이 필요합니다.',
    loginOtherDevice: '귀하의 계정이 다른 장치에서 로그인되었습니다.',
    sessionTimeout: '로그인이 만료되었습니다.',
    needLoginBtn: '지금 로그인',
    signOut: '로그아웃하기',
    requestFail: '요청 실패, 나중에 다시 시도해 주세요.',
  },
  com: {
    btnYes: '예',
    btnNo: '아니요',
    btnOk: '확인',
    btnSearch: '검색',
    btnSubmit: '제출',
    btnCancel: '취소',
    btnCancelSearch: '검색 취소',
    btnEdit: '수정',
    btnCreate: '생성',
    btnDelete: '삭제',
    handler: '조작',
    creatTime: '생성 시간',
    updateTime: '업데이트 시간',
    index: '인덱스',
    noPermission: '권한 없음',
  },
  language: '韩语',
  person: {
    name: '张三',
    hobby: '唱跳，rap，篮球',
  },
  // 登录页面
  loginView: {
    inputAccount: '계정을 입력하세요',
    inputPassword: '비밀번호를 입력하세요',
    loginFail: '계정 또는 비밀번호가 잘못되었습니다',
    accountIsLock: '계정이 잠겼습니다',
    remainLoginTimes: '남은 로그인 시도 횟수: ',
    loginBtn: '로그인',
  },
  // 个人信息页面
  userInfoView: {
    router: '개인 정보',
  },
  // 用户列表页面
  userListView: {
    router: '사용자 목록',
    account: '계정',
    role: '역할',
    note: '비고',
    accountStatus: '계정 상태',
    lock: '잠김',
    normal: '정상',
    otpStatus: 'OTP 상태',
    otpStatusBind: '연결됨',
    otpStatusUnbind: '연결 대기',
    otpStatusClose: '비활성화됨',
    creator: '생성자',
    searchAccount: '계정 검색',
    createAccount: '계정 생성',
    disableAccount: '계정 비활성화',
    clearOtp: 'OTP 초기화',
    onlineStatus: '온라인 상태',
    onlineStatus_on: '온라인',
    onlineStatus_off: '오프라인',
    deleteAccountTip: '사용자 {account}를 삭제하시겠습니까?',
  },
  createUserDialog: {
    account: '계정',
    password: '비밀번호',
    role: '역할',
    note: '비고',
    accountMustInput: '계정을 입력하세요',
    accountLengthError: '계정 길이는 4에서 20자 사이여야 합니다',
    passwordMustInput: '비밀번호를 입력하세요',
    passwordLengthError: '비밀번호 길이는 6에서 20자 사이여야 합니다',
    chooseRoleTip: '사용자 역할을 선택하세요',
  },
  changeUserInfoDialog: {
    title: '사용자 정보 수정',
    account: '계정',
    password: '비밀번호',
    role: '역할',
    note: '비고',
    accountStatus: '계정 상태',
    lock: '잠김',
    normal: '정상',
  },
  // 角色列表页面
  roleListView: {
    router: '역할',
    name: '역할 이름',
    note: '비고',
    status: '상태',
    lock: '잠금',
    unlock: '잠금 해제',
    normal: '정상',
    groupStatus: '그룹 상태',
    lockTip: '이 역할을 잠그시겠습니까 ({name})?',
    lockChildrenTip: '모든 하위 역할을 동기화하여 잠글까요?',
    unlockTip: '이 역할을 잠금 해제하시겠습니까 ({name})?',
    unlockChildrenTip: '모든 하위 역할을 동기화하여 잠금 해제하시겠습니까?',
    deleteEnableTip: '잠금 상태의 역할만 삭제할 수 있습니다',
    deleteTip: '이 역할을 삭제하시겠습니까 ({name})?',
  },
  // 创建角色窗口
  createRoleDialog: {
    title: '역할 생성',
    name: '역할 이름',
    note: '비고',
    roleInputTip: '역할 이름을 입력하세요',
    roleLengthTip: '역할 이름 길이 유효 범위 4~20',
  },
  // 修改角色信息窗口
  changeRoleInfoDialog: {
    title: '역할 정보 수정',
    name: '역할 이름',
    note: '비고',
  },
  // 以下为自定义页面的翻译 --------------------------------------
  //会员列表页面
  memberListView: {
    Date: '날짜',
    SiteName: '사이트명',
    GameName: '게임명',
    MemberStatus: '회원상태',
    MemberLevel: '회원등급',
    MemberAccount: '회원계정',
    MemberID: '회원ID',
    Agent: '에이전트',
    MemberName: '회원성함',
    DepositorName: '입금자명',
    LastWithdrawalName: '최근출금자명',
    MemberLv: '회원등급',
    PhoneNumber: '전화번호',
    RequestAmount: '신청금액',
    BalanceAtDeposit: '입금시잔액',
    DepositBonus: '입금보너스',
    DepositBankAccount: '입금계좌구분',
    ShooterID: '슈터ID',
    Memo: '메모',
    RequestTime: '신청시간',
    ProcessingStatus: '처리상태',
    ApprovalTime: '승인시간',
    Edit: '편집',
  },
}
