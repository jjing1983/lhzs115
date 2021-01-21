declare class UnitAction {
    /** 攻击 */
    static ATTACK: string;
    /** 施法 */
    static CAST: string;
    /** 待机 */
    static STAND: string;
    /** 奔跑 */
    static RUN: string;
    /** 死亡 */
    static DIE: string;
    /** 受击 */
    static HIT: string;
}
declare const enum UnitType {
    ACTOR = 0,
    /** 人物 */
    ROLE = 1,
    /** 怪物 */
    MONSTER = 2,
    /** 服务器NPC */
    SNPC = 3,
    /** 天梯对象 */
    LADDERPLAYER = 4,
    /** 采集怪 */
    COLLECTIONMONST = 5,
    /** 掉落物 */
    DROPITEM = 6,
    /** 客户端假人NPC */
    CNPC = 100,
    /** 传送 */
    TRANSFER = 101,
    /** 矿工 */
    MINE = 102,
}
declare const enum UnitMcType {
    BODY = 1,
    WEAPON = 2,
    WING = 3,
    MEDAL = 5,
    HEIR = 6,
    SOUL = 7,
    ZHANLING = 8,
    WEA_LT = 9,
    CLO_LT = 10,
}
declare class EffectModel {
    configID: number;
    handle: number;
    type: number;
    x: number;
    y: number;
    dir: number;
    team: Team;
}
/**
 * Npc
 */
declare class NpcModel extends EffectModel {
    constructor();
    readonly avatarString: string;
    readonly avatarFileName: string;
    readonly weaponFileName: string;
    readonly npcConfig: NpcBaseConfig;
    clone(model?: any): NpcModel;
}
declare const enum AttributeType {
    atHp = 0,
    atMp = 1,
    atMaxHp = 2,
    atMaxMp = 3,
    atAttack = 4,
    atDef = 5,
    atRes = 6,
    atCrit = 7,
    atTough = 8,
    atMoveSpeed = 9,
    atAttackSpeed = 10,
    atHpEx = 11,
    atAtkEx = 12,
    atStunPower = 13,
    atStunRes = 14,
    atStunTime = 15,
    atDamageReduction = 16,
    atCritHurt = 17,
    atRegeneration = 18,
    atCritEnhance = 19,
    atPenetrate = 20,
    atRoleDamageEnhance = 21,
    atRoleDamageReduction = 22,
    atDefEx = 23,
    atResEx = 24,
    cruNeiGong = 25,
    maxNeiGong = 26,
    neigongAbsorbHurt = 27,
    atJob1HpEx = 28,
    atJob2HpEx = 29,
    atJob3HpEx = 30,
    atNeiGongRestore = 31,
    atVamirePro = 32,
    atVamirePen = 33,
    atVamireCd = 34,
    atCursePro = 35,
    atCurseCd = 36,
    atAttAddDamPro = 37,
    atAttAddDamVal = 38,
    atBeAttAddHpPro = 39,
    atBeAttAddHpVal = 40,
    atAttMbAddDamPen = 41,
    atHpLtAddBuff = 42,
    atAttHpLtPenAddDam = 43,
    atAttHpLtAddDamPen = 44,
    atJob1AtkEx = 45,
    atJob2AtkEx = 46,
    atJob3AtkEx = 47,
    atJob1DefEx = 48,
    atJob2DefEx = 49,
    atJob3DefEx = 50,
    atJob1ResEx = 51,
    atJob2ResEx = 52,
    atJob3ResEx = 53,
    atAttPerDamPan = 54,
    atYuPeiDeterDam = 55,
    atCritEnhanceResist = 56,
    atHolyDamege = 57,
    atHolyMaster = 58,
    atHolyResist = 59,
    atTogetherHolyDamege = 60,
    atTogetherHolyMaster = 61,
    atTogetherHolyResist = 62,
    atZhuiMingPro = 63,
    atZhuiMingVal = 64,
    atHuiXinDamage = 65,
    atNeiGongEx = 66,
    atDeadLyPro = 67,
    atDeadLyMaster = 68,
    atDeadLyResist = 69,
    atAddEnemyHp = 70,
    atHurtMyself = 71,
    atBladeMailPro = 72,
    atBladeMailPer = 73,
    atDefPen = 74,
    atResPen = 75,
    atDeadLyHurt = 76,
    atDeadLyHurtResist = 77,
    atCritHurtResist = 78,
    atHunGuPro = 79,
    atHunGuHurt = 80,
    atHunGuCd = 81,
    atHearthDamege = 82,
    atHearthHurt = 83,
    atHearthCount = 84,
    atDblDef = 85,
    atDamagePro = 86,
    atSkillDamage = 87,
    atSkillDamageResist = 88,
    atAddPowerVal = 89,
    atAddPowerPro = 90,
    atBossDamagePer = 91,
    atCount = 92,
}
declare const enum ExAttributeType {
    eatReflectProbability = 0,
    eatReflectRate = 1,
    eatIgnoreReflect = 2,
    eatGodBlessProbability = 3,
    eatGodBlessRate = 4,
    eatDeathCurseProbability = 5,
    eatDeathCurseDamageIncrease = 6,
    eatDeathCurseTime = 7,
    eatAllCrit = 8,
    eatAllCritTime = 9,
    eatBeHitTimesDodge = 10,
    eatAttackTimesCrit = 11,
    eatAttackAddHpProbability = 12,
    eatAttackAddHpValue = 13,
    eatAddToWarriorDamageInc = 14,
    eatAddToMageDamageInc = 15,
    eatAddToTaoistDamageInc = 16,
    eatSubWarriorDamageInc = 17,
    eatSubMageDamageInc = 18,
    eatSubTaoistDamageInc = 19,
    eatTogetherHitFree = 20,
    eatTogetherHitMonDamageInc = 21,
    eatTogetherHitRoleDamageInc = 22,
    eatTogetherHitCdSub = 23,
    eatAdditionalHarm = 24,
    eatReductionHarm = 25,
    eatMiss = 26,
    eatBaseSkillExArg = 27,
    eatMultipleCrit = 28,
    eatMultipleCritCoeff = 29,
    atMultipleCritHurt = 30,
    eatAddWarriorDamageInc = 31,
    eatAddMageDamageInc = 32,
    eatAddTaoistDamageInc = 33,
    eatMultipleCritTime = 34,
    eatAttackAddHpTime = 35,
    eatStunTime = 36,
    eatGodPowerCd = 37,
    eatGodPowerProbability = 38,
    eatGodPowerDamageIncrease = 39,
    eatHpLtAddBuffId = 40,
    eatHpLtAddBuffCd = 41,
    eatHit = 42,
    eatSkillVamirePro = 43,
    eatWarriorPeakDamageInc = 44,
    eatMagePeakDamageInc = 45,
    eatTaoistPeakDamageInc = 46,
    eatPetSkillLevel = 47,
    eatPetAttackInc = 48,
    eatSkillAddArgA = 49,
    eatSkillAddArgB = 50,
    eatResistDeathCd = 51,
    eatResistDeathPro = 52,
    eatResistDeathRate = 53,
    eatCritHpLt = 54,
    eatCritHpLtAddDamage = 55,
    eatMiJiKNHpPer = 56,
    eatMiJiKNHpSubPer = 57,
    eatMiJiKNDamPer = 58,
    eatMiJiZHDamPer = 59,
    eatMiJiZHTime = 60,
    eatMiJiBQHpTime = 61,
    eatMiJiBQHpPer = 62,
    eatMiJiBQBuffId = 63,
    eatTogetherHitMonDamageIncAR = 64,
    eatTogetherHitRoleDamageIncAR = 65,
    eatMasterProbability = 66,
    eatMasterDamageInc = 67,
    eatMasterBuffId = 68,
    eatMasterBuffCd = 69,
    eatTogetherHitCrit = 70,
    eatTogetherHitCritEnhance = 71,
    eatTogetherHitCritResist = 72,
    eatReboundDamPro = 73,
    eatReboundDamRate = 74,
    eatMonDamageInc = 75,
    eatMonDamageDef = 76,
    eatMagicMiss = 77,
    eatRecoverHpPro = 78,
    eatDeadLyProPhysics = 79,
    eatDeadLyProMagic = 80,
    eatDevourPro = 81,
    eatDevourHurt = 82,
    eatDevourBuffId = 83,
    eatCount = 84,
}
declare const enum AttrSystemID {
    asEnhance = 0,
    asZhuLing = 1,
    asStone = 2,
    asLongHun = 3,
}
/**
 * EuiView基类
 */
declare class BaseEuiView extends BasePanel implements IBaseView {
    private _isInit;
    /** 是否一级窗口,一级窗口会把部分主界面遮挡 */
    isTopLevel: boolean;
    /** 可销毁释放 */
    canDestroy: boolean;
    canVis: boolean;
    isEasying: boolean;
    isNotMove: boolean;
    /** 显示打开日志 */
    isShowLog: boolean;
    /** 常驻界面 */
    resident: boolean;
    /** 互斥窗口,类名或者类字符串的数组,打开某些窗口会关闭互斥的窗口*/
    exclusionWins: string[];
    /** 层级容器,构造函数中赋值 */
    uilayer: EuiLayer;
    private uiIsComplete;
    private uiInitComplete;
    anigroup: eui.Group;
    isPlayAnima: boolean;
    /**
     * 构造函数
     */
    constructor();
    private uiCompHandler();
    /**
     * 添加互斥窗口
     * @classOrName 类名或者类字符串
     */
    addExclusionWin(classOrName: string): void;
    /**
     * 是否已经初始化
     * @returns {boolean}
     */
    isInit(): boolean;
    /**
     * 面板是否显示
     */
    isShow(): boolean;
    onChangeTap(e: any): void;
    /**
     * 添加到父级
     */
    addToParent(parent: egret.DisplayObjectContainer, index?: number): void;
    /**
     * 从父级移除
     */
    removeFromParent(): void;
    /**
     * 对面板进行显示初始化，用于子类继承
     */
    initUI(): void;
    /**
     * 对面板数据的初始化，用于子类继承
     */
    initData(): void;
    /**
     * 销毁
     */
    destroy(): void;
    destoryView(destroyUI?: boolean): void;
    /**
     * 面板开启执行函数，用于子类继承
     * @param param 参数
     */
    open(...param: any[]): void;
    /**
     * 面板关闭执行函数，用于子类继承
     * @param param 参数
     */
    close(...param: any[]): void;
    closePanel(index: any): void;
    /**
     * 加载面板所需资源
     */
    loadResource(loadComplete: Function, initComplete: Function): void;
    /**
     * 设置是否隐藏
     * @param value
     */
    setVisible(value: boolean): void;
    static openCheck(...param: any[]): boolean;
    playAnima(...param: any[]): void;
    closeEx(...param: any[]): void;
    closeToRuleId(ruleId: any, func: any): boolean;
    easyToTarget(tar: any, func: any): void;
}
/**
 * PlatformBase
 */
declare class PlatformBase {
    /**
     * 初始化SDK
     */
    SDKInitNative(): void;
    /**
     * 小游戏提审版本
     */
    SDKMiniAuditVer(): number;
    /**
     * SDK需要初始化
     */
    SDKIsNeedInit(): void;
    /**
     * SDK需要登陆
     */
    SDKIsNeedLoginNative(): void;
    /**
     * SDK自动登陆
     */
    SDKAutoLoginNative(args?: any): void;
    /**
     * SDK登陆
     */
    SDKLoginNative(args?: any): void;
    /**
     * SDK自定义登陆界面
     */
    SDKHasLoginScene(): any;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): any;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    /**
     * SDK下单参数
     */
    GetMakeOrderSdkArgs(params: any): string;
    /**
     * SDK是否支持支付
     */
    CheckSupportRecharge(): boolean;
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * SDK埋点
     */
    SDKSetDataNative(params: any): void;
    /**
     * 打开平台ICO特定的功能界面
     */
    SDKShowImmersiveIconNative(params: any): void;
    /**
     * SDK登出
     */
    SDKLogoutNative(): void;
    /**
     * SDK退出
     */
    SDKExitNative(): void;
    /**
     * 渠道
     */
    nativeCallChannelType(channelId: any): void;
    /**
     * APP版本号
     */
    nativeCallAppVersion(appVersion: any): void;
    /**
     * SDK分享
     */
    SDKShowShare(params?: any): void;
    /**
     * SDK二维码
     */
    SDKShowQRCode(): void;
    /**
     * facebook礼包
     */
    SDKStartForGift(): void;
    /**
     * 活动
     */
    SDKFaceStartGift(): void;
    /**
     * SDK回调(子类实现)
     */
    nativeCallback(msg: any): void;
    /**
     * 执行tap
     */
    SDKTapExecute(): void;
    /**
     * 显示切换账号
     */
    SDKShowLogout(): boolean;
    /**
     * 获取状态栏高度
     */
    getStatusHeight(): number;
    /**
     * 获取底部安全高度
     */
    getBottomSafeHeight(): number;
    /**是否显示超级会员 */
    showSuperVip(): boolean;
    /**是否显示小游戏账号互通按钮 */
    isShowMiniAccountJumpPortalIcon(): boolean;
    /**小游戏账号互通按钮操作 */
    miniAccountJumpPortalIconTap(): void;
    /** 是否不显示任何支付样式 */
    isHideRechargeShow(): boolean;
    /** 是否显示分享入口 */
    isShowSharePortalIcon(): boolean;
    /**战斗力变化 */
    powerChange(): void;
    /** 邀请人数据 */
    getInviterInfo(): {
        inviterId: number;
        inviterSid: number;
    };
}
/**
 * 简单实体
 */
declare class UnitEffect extends egret.DisplayObjectContainer {
    /** 形象主体 */
    protected _body: GameMovieClip;
    /** 中间容器 */
    protected _bodyContainer: egret.DisplayObjectContainer;
    protected titleCantainer: egret.DisplayObjectContainer;
    myHeight: number;
    typeface: number;
    protected _disOrder: {
        [key: number]: egret.DisplayObject;
    };
    protected _mcFileName: {
        [key: number]: string;
    };
    /** 方向（默认向下） */
    protected _dir: number;
    /** 状态（默认stand） */
    protected _state: UnitAction;
    protected _infoModel: EffectModel;
    protected playComplete: () => void;
    protected shadow: UnitShadow;
    private _layerWeigth;
    /**
     * 方向顺序
     */
    static FRAME_ODER: number[][];
    static ACTION_ODER: {
        [id: number]: UnitAction[];
    };
    /**
     * 有方向的特效
     */
    hasDir: UnitMcType[];
    constructor();
    setBodyScale(value: number): void;
    infoModel: EffectModel;
    setConfig(avatar: string): void;
    updateModel(): void;
    dir: number;
    getResDir(mcType: UnitMcType): number;
    /**
     * 播放动作
     */
    playAction(action: UnitAction, callBack?: () => void): void;
    protected loadBody(): void;
    protected loadShadow(): void;
    protected loadOther(mcType: UnitMcType): void;
    protected loadNoDir(mcType: UnitMcType): void;
    protected getFileName(mcType: UnitMcType): string;
    protected playFile(mc: GameMovieClip, fileName: string): void;
    protected loadFile(mc: GameMovieClip, fileName: string, mcType: UnitMcType): void;
    protected playBody(e: egret.Event): void;
    protected syncFrame(e: egret.Event): void;
    protected removeBodyEvent(mc: GameMovieClip): void;
    protected removeMcEvent(mc: GameMovieClip): void;
    protected onImgLoaded(e: egret.Event): void;
    protected playCount(): number;
    addMc(mcType: UnitMcType, fileName: string, disType?: number): GameMovieClip | eui.Image;
    removeMc(mcType: UnitMcType): void;
    getMc(mcType: UnitMcType): GameMovieClip | eui.Image;
    removeAll(): void;
    protected addShadow(): void;
    protected setShadowType(type: any): void;
    protected removeShadow(): void;
    protected sortEffect(): void;
    readonly weight: number;
    readonly team: Team;
    destroy(): void;
    getBody(): GameMovieClip;
}
declare const enum EquipPos {
    /**武器*/
    WEAPON = 0,
    /**头部*/
    HEAD = 1,
    /**衣服*/
    CLOTHES = 2,
    /**项链*/
    NECKLACE = 3,
    /**护腕*/
    WRIST = 4,
    /**腰带*/
    BRACELET = 5,
    /**戒指*/
    RING = 6,
    /**鞋子*/
    SHOE = 7,
    /**官印 */
    DZI = 8,
    /**斗笠*/
    HAT = 9,
    /**面甲*/
    VIZARD = 10,
    /**披风*/
    CLOAK = 11,
    /**盾牌*/
    SHIELD = 12,
    /**数量 */
    MAX = 13,
}
/**
 * 基础道具显示类
 */
declare class ItemBase extends BaseItemRender {
    static ADDITION_RANGE: number;
    protected itemIcon: ItemIcon;
    protected count: eui.Label;
    protected nameTxt: eui.Label;
    redPoint: eui.Group;
    selectFrame: eui.Image;
    dropTagsGroup: eui.Group;
    bigDropGroup: eui.Group;
    equipLvImg: eui.Image;
    getImg: eui.Image;
    tagImg: eui.Image;
    tweenGroup: eui.Group;
    protected equipEffect: GameMovieClip;
    protected itemConfig: ItemConfig;
    num: number;
    desc: string;
    desc2: string;
    runeName: string;
    /** 显示特殊详细描述（传世至宝三选一） */
    showSpeicalDetail: boolean;
    protected isOpenSelectImg: boolean;
    private isCurrency;
    showName: boolean;
    roleId: number;
    notBody: boolean;
    par1: number;
    warriorEquipId: number;
    constructor();
    protected init(): void;
    setSoul(isSoul: boolean): void;
    setItemImg(str: string): void;
    setItemJob(job: number): void;
    setItemHeirloomBgImg(v: boolean, path?: string): void;
    private setDataByConfig(config, nText?);
    protected dataChanged(): void;
    dataChangeHandler(): void;
    setViewCount(count: any): void;
    /**
     * 清除格子数据
     */
    protected clear(): void;
    destruct(): void;
    isShowJob(b: boolean): void;
    onClick(): void;
    getItemType(): number;
    /** 货币 */
    protected showCurrency(): void;
    /** 非货币 */
    protected showDetail(): void;
    private getGuildGift(config);
    protected setCount(str: string): void;
    setCountEx(str: string): void;
    protected openEquipsTips(): void;
    isShowName(val: boolean): void;
    getItemSoure(): string;
    getText(): string;
    getTextColor(): number;
    showEquipEffect(): void;
    clearEffect(): void;
    HideImgBg(): void;
    showNum(isShow: boolean): void;
    setImgBg(type: number): void;
    isDropTag(v: boolean): void;
    isDropBig(v: boolean): void;
    getItemIcon(): ItemIcon;
    setSelect(selected: boolean): void;
    hideName(): void;
    setName(src: string): void;
    setImgBg1(res?: string): void;
    setRedPoint(v: boolean): void;
    static showDetail(itemBase: ItemBase): void;
    static getItemDetaileClass(itemConfig: ItemConfig): "ItemGainTipsView" | "ItemTipsView";
}
declare class StartLoading extends SingleClass {
    private content;
    private uiImageContainer;
    private uiImage;
    constructor();
    static ins(): StartLoading;
    init(): void;
    private loadReel();
    showLoading(): void;
    hideLoading(): void;
    private enterFrame(time);
}
declare class RoleItemRenderer extends BaseItemRender {
    weaponImg: eui.Image;
    bodyImg: eui.Image;
    wingImg: eui.Image;
    suitImg: eui.Image;
    title: eui.Image;
    nameLabel: eui.Label;
    soulEff: eui.Group;
    bodyEff: eui.Group;
    wingEffect: eui.Group;
    titleMcGroup: eui.Group;
    demonCirEff: eui.Group;
    touch: eui.Group;
    clothesEff: GameMovieClip;
    weaponEff: GameMovieClip;
    wingEff: GameMovieClip;
    suitEff: GameMovieClip;
    titleMc: GameMovieClip;
    gwEff: GameMovieClip;
    ltWeaponEff: GameMovieClip;
    ltClothesEff: GameMovieClip;
    deEff: GameMovieClip;
    groupRole: eui.Group;
    approachEff: GameMovieClip;
    approachAct: eui.Group;
    bodyThunderEff: eui.Group;
    weaponThunderEff: eui.Group;
    constructor();
    dataChanged(): void;
    playApproachEff(role: any, callback: any): boolean;
    playEffArr(approachEffs: any, fun: any): void;
    removeApproachEff(): void;
    setRole(role: RoleModel, showTitle?: boolean, isDress?: boolean): void;
    setSubRole(subRole: RankSubRoleVo): void;
    clearRole(): void;
    /**
     * 称号
     */
    setNameAndTitle(role: RoleModel): void;
    /**
     * 武器衣服
     */
    setBodyWeapon(role: any): void;
    setBodyWeaponEff(mcName: string, equipWithEffConfig: EquipWithEffConfig, parent: eui.Group, pointGroupName: string, zhuangbanSuitId?: number): void;
    /**
     * 传世
     */
    setSuit(role: any): void;
    /**
     * 兵魂
     */
    setGwWeapons(role: any): void;
    /**
     * 羽翼
     */
    setWing(role: any): void;
    /**
     * 雷霆
     */
    setLeiTingEffect(role: any): void;
    /**
     * 法阵
     */
    setDemonCir(deCirShowID: number): void;
    playMc(mc: GameMovieClip, resName: string, parent: eui.Group): void;
    /**
     * 层级变换
     */
    changeLayer(role: any): void;
}
/**
 * 神羽控件专属
 */
declare class FeatherDeityItemRenderer extends BaseItemRender {
    itemIcon: ItemIcon;
    nameTxt: eui.Label;
    select: eui.Image;
    redPoint: eui.Image;
    itemId: number;
    count: eui.Label;
    constructor();
    setSelect(b: boolean): void;
    protected dataChanged(): void;
    setCountVisible(b: boolean): void;
    setNameVisible(b: boolean): void;
    setImgIcon(img: string): void;
    updateRedPoint(b: boolean): void;
    setNameText(str: string): void;
    setQuality(str: string): void;
    destruct(): void;
}
/**
 * 欢迎
 */
declare class GreetView extends BaseEuiView {
    sureBtn: eui.Button;
    sureBtnEff: GameMovieClip;
    eff: GameMovieClip;
    sureGroup: eui.Group;
    effgroup: eui.Group;
    pic: eui.Image;
    constructor();
    protected createChildren(): void;
    open(...param: any[]): void;
    close(...param: any[]): void;
    onTap(e: egret.TouchEvent): void;
    playEff(): void;
}
/**
 * Scene基类
 */
declare class BaseScene {
    /**
     * 当前所有层
     */
    private _layers;
    topMask: eui.Image;
    showMask: boolean;
    constructor();
    /**
     * 进入Scene调用
     */
    onEnter(showMask?: boolean): void;
    updateBluntBangs(): void;
    /**
     * 退出Scene调用
     */
    onExit(): void;
    /**
     * 添加一个层到舞台
     */
    addLayer(layer: egret.DisplayObjectContainer): void;
    /**
     * 添加一个层到舞台
     */
    addLayerAt(layer: egret.DisplayObjectContainer, index: number): void;
    /**
     * 在舞台移除一个层
     */
    removeLayer(layer: egret.DisplayObjectContainer): void;
    /**
     * 层移除所有子对象
     */
    layerRemoveAllChild(layer: egret.DisplayObjectContainer): void;
    /**
     * 移除所有层
     */
    removeAllLayer(): void;
}
declare class RambleBaseVo {
    type: number;
    time: number;
    setTime(value: any): void;
    setNowTime(): void;
}
declare class RambleMainView extends BaseEuiView {
    /**聊天tips */
    private rambleTips;
    private message;
    private chatList;
    private dataList;
    private chatGroup;
    private guildMessage;
    private resId;
    private fistOpenGuild;
    constructor();
    initUI(): void;
    open(...param: any[]): void;
    close(): void;
    private onTap(e);
    private getNewNotice(msg);
    updateNewChatMsg(): void;
    updateChatRed(): void;
    private updataList();
    checkShow(): void;
    /**
     * 更新主界面显示布局
     * @param value    是否在副本中
     */
    updataLayer(value: boolean): void;
    /** 更新聊天tip显示状态 */
    private updateTipShow();
    destoryView(): void;
    refTipMsgStatus(): void;
}
/**
 * 数据包ID
 */
declare const enum MsgCode {
    /** 登录 */
    PROTOCOL_0 = 0,
    /** 关卡系统 */
    PROTOCOL_1 = 1,
    /** 技能系统 */
    PROTOCOL_2 = 2,
    /** 背包系统 */
    PROTOCOL_3 = 3,
    /** 装备系统 */
    PROTOCOL_4 = 4,
    /** 遭遇战 */
    PROTOCOL_5 = 5,
    /** 羽翼 */
    PROTOCOL_6 = 6,
    /** 强化 */
    PROTOCOL_7 = 7,
    /** 邮件 */
    PROTOCOL_8 = 8,
    /** 任务 */
    PROTOCOL_9 = 9,
    /** boss系统 */
    PROTOCOL_10 = 10,
    /** 精炼系统 */
    PROTOCOL_11 = 11,
    /** 经脉系统 */
    PROTOCOL_12 = 12,
    /** 转生系统 */
    PROTOCOL_13 = 13,
    /** 锻造系统 */
    PROTOCOL_14 = 14,
    /** 战将 */
    PROTOCOL_15 = 15,
    /** 商店系统 */
    PROTOCOL_16 = 16,
    /** 特戒 */
    PROTOCOL_17 = 17,
    /** 排行榜 */
    PROTOCOL_18 = 18,
    /** vip */
    PROTOCOL_19 = 19,
    /** 公告 */
    PROTOCOL_20 = 20,
    /** 龙魂护盾 */
    PROTOCOL_21 = 21,
    /** 寻宝 */
    PROTOCOL_22 = 22,
    /** 历练 */
    PROTOCOL_23 = 23,
    /** 挑战副本 */
    PROTOCOL_24 = 24,
    /** 活动 */
    PROTOCOL_25 = 25,
    /** 神器 */
    PROTOCOL_26 = 26,
    /** 充值 */
    PROTOCOL_27 = 27,
    /** 图腾领域 */
    PROTOCOL_28 = 28,
    /** 礼包 */
    PROTOCOL_29 = 29,
    /** 聊天 */
    PROTOCOL_30 = 30,
    /** 官职 */
    PROTOCOL_31 = 31,
    /** 魔主降临 */
    PROTOCOL_32 = 32,
    /** 平台活动 */
    PROTOCOL_33 = 33,
    /** 天梯 */
    PROTOCOL_34 = 34,
    /** 秘籍 */
    PROTOCOL_35 = 35,
    /** 主宰 */
    PROTOCOL_36 = 36,
    /** 帮派 */
    PROTOCOL_37 = 37,
    /** 称号 */
    PROTOCOL_38 = 38,
    /** 公会副本 */
    PROTOCOL_39 = 39,
    /** 龙城争霸 */
    PROTOCOL_40 = 40,
    /** 小系统 */
    PROTOCOL_41 = 41,
    /** 公会商店 */
    PROTOCOL_42 = 42,
    /** 战灵 */
    PROTOCOL_43 = 43,
    /** 装扮 */
    PROTOCOL_44 = 44,
    /** 神器 */
    PROTOCOL_45 = 45,
    /** 工会BOSS */
    PROTOCOL_46 = 46,
    /** 好友系统 */
    PROTOCOL_47 = 47,
    /** 神器禁地 */
    PROTOCOL_48 = 48,
    /** 采矿 */
    PROTOCOL_49 = 49,
    /** 战纹 */
    PROTOCOL_50 = 50,
    /** 内功 */
    PROTOCOL_51 = 51,
    /** 法阵 */
    PROTOCOL_52 = 52,
    /** 图鉴 */
    PROTOCOL_53 = 53,
    /** 签到 */
    PROTOCOL_54 = 54,
    /** 传世 */
    PROTOCOL_55 = 55,
    /** 兵魂 */
    PROTOCOL_56 = 56,
    /** 大富翁 */
    PROTOCOL_57 = 57,
    /** 土城 */
    PROTOCOL_58 = 58,
    /** 三英雄 */
    PROTOCOL_59 = 59,
    /** 神兵 */
    PROTOCOL_60 = 60,
    /** 阵营战 */
    PROTOCOL_61 = 61,
    /** 泡点 */
    PROTOCOL_62 = 62,
    /** 圣物合成 */
    PROTOCOL_63 = 63,
    /** 轮回 */
    PROTOCOL_64 = 64,
    /** 跨服竞技场 */
    PROTOCOL_65 = 65,
    /** 威望 */
    PROTOCOL_66 = 66,
    /** 巅峰对决 */
    PROTOCOL_67 = 67,
    /** 个人活动 */
    PROTOCOL_68 = 68,
    /** 心法 */
    PROTOCOL_69 = 69,
    /** 玉佩新 */
    PROTOCOL_70 = 70,
    /** 烈焰印记 */
    PROTOCOL_71 = 71,
    /** 跨服boss */
    PROTOCOL_72 = 72,
    /** 神兽守护 */
    PROTOCOL_73 = 73,
    /** 魂骨 */
    PROTOCOL_74 = 74,
    /** 魔界入侵 */
    PROTOCOL_75 = 75,
    /** 拍卖行 */
    PROTOCOL_76 = 76,
    /** 疯狗 */
    PROTOCOL_77 = 77,
    /** 快意恩仇 */
    PROTOCOL_78 = 78,
    /** 邀请 */
    PROTOCOL_81 = 81,
    /** 默认系统 */
    MAXVALUE = 255,
}
declare class GameLoadingUI extends egret.Sprite {
    protected bg: eui.Image;
    protected progressPane: egret.DisplayObjectContainer;
    protected messageText: eui.Label;
    protected progressBg1: eui.Image;
    protected progressBg2: eui.Image;
    protected progressBg3: eui.Image;
    protected progress: eui.Image;
    protected posImage: eui.Image;
    protected progressText: eui.Label;
    protected ownerDes: eui.Label;
    protected gameHint: eui.Label;
    protected refreshTips: eui.Label;
    protected loginImg: eui.Image;
    protected bg_bottom: eui.Image;
    protected pgrBg1: eui.Image;
    protected pgrBg2: eui.Image;
    protected pgrBg3: eui.Image;
    protected pgress: eui.Image;
    protected pgrTipsText: eui.Label;
    protected tipsIndex: number;
    protected maxIndex: number;
    private static instance;
    static GetInstance(): GameLoadingUI;
    constructor();
    private OnAddStage();
    protected initUI(): void;
    fakePress(end?: boolean): void;
    runTips(): void;
    updeteTips(): void;
    setOwnerDes(content: string): void;
    protected addLink(content: string, posY: number, color?: number): void;
    onLink(): void;
    show(parent?: any): void;
    setProgress(value: number, tips: string, duration?: number, barTotalWidth?: number): void;
    showLogin(): void;
    private onClick(e);
    close(): void;
    showProgress(): void;
    hideProgress(): void;
    showState(state: boolean): void;
}
declare class BaseSystem extends SingleClass {
    protocolsId: number;
    constructor();
    /**
     * 游戏登录初始化
     */
    protected initLogin(): void;
    /**
     * 0点游戏数据请求
     */
    protected initZero(): void;
    getBytes(messageId: number): GameByteArray;
    encodeBytes(encodeObj: any[], param: any, bytes: GameByteArray): void;
    sendToServer(bytes: GameByteArray): void;
    addCustomEvent(type: number, listener: Function): void;
    removeCustomEvents(): void;
    protected addCustomEventMany(listener: Function, ...types: number[]): void;
}
/**
 * 小7
 */
declare class PlatformX7sy extends PlatformBase {
    /**
     * SDK需要登陆
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * SDK回调
     */
    nativeCallback(msg64: any): void;
}
declare class PlatformZwH5 extends PlatformBase {
    url: string;
    /**
     * 初始化SDK
     */
    SDKInitNative(): void;
    /**
     * 是否需要登录
     */
    SDKIsNeedLoginNative(): boolean;
    /**返回拼接好的数据 */
    getUrl(obj: any): string;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    getUserInfoComplete(data: any): void;
    getUserInfoIOError(data: any): void;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    private setData(params, isCreate?, isUpLv?);
    /**
     * 战斗力变化
     */
    powerChange(): void;
    onPowerChangeComplete(event: egret.Event): void;
    onPowerChangeIOEroor(event: egret.Event): void;
    onGetComplete(event: egret.Event, a1: any, a2: any, a3: any): void;
    onGetIOError(data: any): void;
    /**
     * javascript实现PHP字典排序
     */
    ksort(vm: any, inputArr: any, sort_flags?: any): {};
    /**
     * 获取加密
     */
    getSign(obj: any): string;
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    payOnComplete(event: egret.Event): void;
    payIOError(data: any): void;
    /**显示超级会员 */
    showSuperVip(): boolean;
    /**
     * SDK回调
     */
    nativeCallback(msg: any): void;
}
/**
 * 游戏层级类
 */
declare class EuiLayer extends BaseLayer {
    constructor();
    setSafeArea(): void;
}
declare class UnitModel extends NpcModel {
    masterHandle: number;
    handle: number;
    configID: number;
    type: UnitType;
    x: number;
    y: number;
    /** 战斗力 */
    power: number;
    protected _name: string;
    protected actorId: number;
    /** 区服ID */
    protected _servId: number;
    protected _lv: number;
    _avatar: number;
    _scale: number;
    _dirNum: number;
    wanderrange: number;
    wandertime: number;
    /** 脚底光环 */
    effect: number;
    isElite: boolean;
    /** 属性集 */
    attributeData: number[];
    attributeExData: number[];
    team: Team;
    killNum: number;
    isMy: boolean;
    /** 当前兵魂id */
    weaponsId: number;
    /** 是否主动怪 */
    isWander: boolean;
    /** 烈焰印记等级 */
    lyMarkLv: number;
    /** 烈焰印记技能 */
    lyMarkSkills: number[];
    fixSkills: number[];
    /** 护盾时间 */
    huDunTime: number;
    /** 护盾结束时间 */
    huDunEndTime: number;
    static OtherAttrType: AttributeType[];
    constructor();
    init(datas: any[]): void;
    initBase(datas: any[]): void;
    initAtt(datas: number[], showTip?: boolean): void;
    initExtAtt(datas: number[], showTip?: boolean): void;
    /**
     * 是否显示护盾
     */
    showHuDun(): boolean;
    checkHandleIsMy(handle: number): boolean;
    parserHeirloom(): void;
    getAtt(attType: AttributeType): number;
    setAtt(attType: AttributeType, value: number): void;
    getExAtt(attType: ExAttributeType): number;
    readonly avatarFileName: string;
    readonly weaponFileName: string;
    readonly avatar: string | number;
    name: string;
    readonly weapon: string;
    readonly wing: string;
    readonly body: string;
    /**
     * 跨服名称
     */
    getNameWithServer(): string;
    readonly serverID: number;
    getDir(): number;
    readonly dirNum: number;
    readonly avatarScale: number;
    readonly avatarEffect: string;
    readonly attRange: number;
    readonly movePara: any;
    lv: number;
    setPos(x: number, y: number): void;
    readonly isRoleMonster: boolean;
    readonly isHideBlood: boolean;
    static getBodyDir(type?: number): number;
    static getSceneDir(): number;
}
/**
 * 怪物
 */
declare class UnitMonster extends UnitEffect {
    AI_STATE: AI_State;
    /** 称号 */
    protected _title: eui.Image;
    protected _titleMc: GameMovieClip;
    /** 文件名 */
    protected _fileName: string;
    protected _nameGroup: eui.Group;
    /** 名字显示 */
    protected _nameTxt: eui.Label;
    /** 血量条 */
    protected _hpBar: eui.ProgressBar;
    protected filterDic: {
        [key: number]: number[];
    };
    protected curFilter: UnitFilter;
    publicCD: number;
    /** 是否硬直中(不允许直接赋值，需要条用addHardStraight接口) */
    isHardStraight: boolean;
    serverEffList: any;
    /** 技能效果列表 */
    buffList: any;
    buffEff: any;
    /** 特效列表 */
    private effs;
    /** 持续伤害计时器列表 */
    private damageOverTimeList;
    /** 是否攻击中 */
    atking: boolean;
    /**下一次巡逻时间 */
    nextPatrolTick: number;
    myKill: boolean;
    dieTweenObj: {
        alpha: number;
    };
    moveTweenObj: {
        x: number;
        y: number;
    };
    /** 烈焰印记 */
    private _lyMark;
    protected isShowBody: boolean;
    canMove: boolean;
    moveRange: number;
    moveLimTime: number;
    moveMaxTime: number;
    warnDisplay: any;
    statusEffList: any;
    extHurmBuff: any;
    skillBall: SkillBallMgt;
    ballMax: number;
    bubbleDisplay: BubblePanel;
    talkDisplay: TalkPanel;
    private haloMc;
    constructor();
    protected createTweenObj(): void;
    infoModel: UnitModel;
    $onAddToStage(stage: egret.Stage, nestLevel: number): void;
    setCharName(str: string): void;
    setNameTxtColor(value: number): void;
    /**
     * 使用了烈焰印记技能
     */
    usedLyMarkSkill(): void;
    /**
     * 播放动作
     */
    playAction(action: UnitAction, callBack?: () => void): void;
    stopMove(): void;
    dir: number;
    action: UnitAction;
    getResDir(mcType: UnitMcType): number;
    readonly moveSpeed: number;
    hram(value: number): void;
    getHP(): number;
    getRealHp(): number;
    reset(): void;
    destruct(): void;
    destroy(): void;
    deadDelay(): void;
    /**
     * 清理烈焰印记
     */
    private clearLyMark();
    /**
     * 设置硬直时间
     */
    addHardStraight(time: number): void;
    removeHardStraight(): void;
    updateWarnDisplayPos(): void;
    /**
     * 设置主体动画
     */
    initBody(fileName?: string): void;
    readonly isPlaying: boolean;
    isAtkAction(): boolean;
    protected playBody(e: egret.Event): void;
    protected loadBody(): void;
    protected loadOther(mcType: UnitMcType): void;
    protected loadNoDir(mcType: UnitMcType): void;
    showBodyContainer(): void;
    hideBodyContainer(): void;
    showTitleCantainer(): void;
    hideTitleCantainer(): void;
    showShadowCantainer(): void;
    hideShadowCantainer(): void;
    getIsShowBody(): boolean;
    resetStand(): void;
    hasEffById(id: number): boolean;
    /**
     * 更新数据显示
     */
    updateBlood(force?: boolean): void;
    /**
     * 人形怪称号
     */
    updateTitle(): void;
    onTitleLoaded(e: any): void;
    protected removeTitle(): void;
    /**
     * 死亡处理
     */
    onDead(callBack?: () => void): void;
    readonly isCanAddBlood: boolean;
    /** 持续伤害 */
    private damageOverTime(e?);
    private deleteDamageOverTimer(timer);
    addServerEff(id: any, type: any, value: any): void;
    removeServerEff(id: any): void;
    addEffect(effID: number, type?: number, num?: number): void;
    addHalo(str: string): void;
    removeEffect(effID: number): void;
    removeAllEffect(): void;
    hasBuff(groupID: number): boolean;
    addBuff(buff: BuffModel): void;
    removeBuff(buff: BuffModel): void;
    removeAllBuff(): void;
    addBubble(id: number): void;
    readonly team: Team;
    startPatrol(): void;
    setMoveAtt(para: any): void;
    private getPointCanMove();
    protected playCount(): number;
    shakeIt(): void;
    showName(val: boolean): void;
    showBlood(val: boolean): void;
    readonly isMy: boolean;
    readonly weight: number;
    updateModel(): void;
    protected parseModel(): void;
    protected addGroup(groupId: number): void;
    protected removeGroup(groupId: number): void;
    protected updateFilter(): void;
    hasFilter(filter: UnitFilter): boolean;
    readonly hasMaBi: boolean;
    protected setFilter(filter: UnitFilter): void;
    protected setMcFilter(filter: UnitFilter): void;
    protected setMcFilterPlayOrStop(play: boolean): void;
    removeAllFilters(): void;
    setExtTitle(res: string, offsetX: number, offsetY: number): void;
    addScore(score?: number, camp?: number): void;
    addScoreTween(score: number, camp: number, offsetY: number): void;
    addTalk(tips: any, delay?: number): void;
    initSkillBall(num: any): void;
    hasSkillBall(): number;
    skillBallReady(): boolean;
    playSkillBall(): void;
    removeSkillBall(): void;
    skillBallAct(num: any): void;
}
declare class UnitNpc extends UnitEffect {
    protected npcHead: UnitNpcHead;
    protected _infoModel: NpcModel;
    constructor();
    infoModel: NpcModel;
    protected playCount(): number;
    updateModel(): void;
}
declare class ByteConst {
    static RewardVos: ByteType[];
    static ItemDatas: (ByteType | ByteType[])[];
    static StoreEquipVos: (ByteType | ByteType[])[];
    static EquipVos: (ByteType | ByteType[])[];
    static FeatherVos: ByteType[];
    static EmailBaseVos: ByteType[];
    static EmailDataVos: (ByteType | ByteType[])[];
    static LimitTaskVos: ByteType[];
    static WorldBossItemVos: ByteType[];
    static WorldBossRankItemVos: ByteType[];
    static MeridiansVos: ByteType[];
    static DragonSoulDataVos: ByteType[];
    static HeirloomVos: ByteType[][];
    static MythForgeVos: ByteType[][];
    static WarriorVos: ByteType[];
    static WarriorEquipVos: ByteType[];
    static StoreHadBuyVos: ByteType[];
    static StoreFeatsVos: ByteType[][];
    static HatredVos: ByteType[];
    static HatredMessageVos: ByteType[];
    static CrazyDogVos: ByteType[];
    static BargainVos: ByteType[];
    static BargainKfVos: ByteType[];
    static BargainRecordVo: ByteType[];
    static BargainRecordKfVo: ByteType[];
    static SpecialRingDataVos: ByteType[];
    static RankSubRoleVos: ByteType[];
    static RankPraiseVos: (ByteType | ByteType[])[];
    static StrideServerDataVos: ByteType[];
    static RedEnvelopes: ByteType[];
    static RedPacketVos: ByteType[];
    static PayVos: ByteType[];
    static RambleKfBlackVos: ByteType[];
    static RambleInfoVos: ByteType[];
    static DevildomGuildVos: ByteType[];
    static DominateVos: (ByteType | ByteType[])[];
    static UnionMessageInfoVos: ByteType[];
    static RankGuildInfos: ByteType[];
    static GuildRedRobInfos: ByteType[];
    static MyRankGuildInfos: ByteType[];
    static WinGuildInfos: ByteType[];
    static WarRankInfos: ByteType[];
    static PointRewarddInfos: ByteType[];
    static PartnerVos: ByteType[];
    static SoulBoneVos: (ByteType | (ByteType | ByteType[])[])[];
    static BeastVos: (ByteType | ByteType[])[];
    static CrossBossInfoVos: ByteType[];
    static JadeDataNewVos: (ByteType | ByteType[])[];
    static HeatMethodVo: (ByteType | ByteType[])[];
    static PeakedKonckReportVos: ByteType[];
    static PeakedKonckReportKfVos: ByteType[];
    static PeakedPlayerDataVos: (ByteType | ByteType[])[];
    static PeakedPlayerInfoVos: ByteType[];
    static PeakedPlayerInfoKfVos: ByteType[];
    static PeakedPlayerBaseDataVos: (ByteType | ByteType[])[];
    static PeakedPlayerBaseDataKfVos: (ByteType | ByteType[])[];
    static PeakedTopRankVos: ByteType[];
    static PeakedBetVos: ByteType[];
    static MineModels: (ByteType | ByteType[])[];
    static MineVos: (ByteType | (ByteType | ByteType[])[])[];
    static MineHelpVos: ByteType[];
    static MineRecordVos: ByteType[];
    static CalcForceVos: ByteType[];
    static MagicCircleVos: (ByteType | ByteType[][])[];
    static MagicCircleRoleVos: (ByteType | (ByteType | ByteType[][])[])[];
    static HeirloomDressVos: ByteType[];
    static ReincarnateStarEquipVos: (ByteType | (ByteType | ByteType[])[])[];
    static CrossArenaMarkVos: ByteType[];
    static CrossArenaRoleVos: ByteType[];
    static CrossArenaInviteVos: ByteType[];
    static UnionMemberInfoVos: ByteType[];
    static CrossArenaBaseVos: ByteType[];
    static CrossArenaVos: ByteType[];
    static CrossArenaRankVos: ByteType[];
    static ReincarnationVos: ByteType[];
    static BlisterRankVos: ByteType[];
    static CampWarRankVos: ByteType[];
    static GodWeaponVos: (ByteType | ByteType[])[];
    static GodWeaponDunVos: (ByteType | ByteType[])[];
    static GodWeaponRankInfoVos: ByteType[];
    static GodWeaponTaskVos: ByteType[];
    static RedPacketRecordVos: ByteType[];
    static RankDataCommons: (ByteType | ByteType[])[];
    static RankDataSkirmishVos: ByteType[];
    static RankDataPassVos: ByteType[];
    static RankDataLevelVos: ByteType[];
    static RankDataLadderVos: ByteType[];
    static RankDataXiaYiVos: ByteType[];
    static FashionIds: ByteType[];
    static RoleModels: (ByteType | (ByteType | ByteType[])[])[];
    static OtherFireRingDataVos: (ByteType | ByteType[])[];
    static ConfrontModelVos: (ByteType | (ByteType | (ByteType | ByteType[])[])[])[];
    static WildPlayers: (ByteType | (ByteType | (ByteType | ByteType[])[])[])[];
    static TotemVos: (ByteType | ByteType[])[];
    static OtherPlayerDatas: (ByteType | (ByteType | (ByteType | ByteType[])[])[])[];
    static UnitModelBases: ByteType[];
    static UnitOtherRoles: (ByteType | ByteType[])[];
    static UnitActors: ByteType[];
    static UnitRoles: (ByteType | ByteType[])[];
    static UnitMonsters: (ByteType | ByteType[])[];
    static UnitDropItems: ByteType[];
    static CrossDropRecordVos: ByteType[];
    static AmusementCoverFives: any[][];
    static AmusementCoverTens: any[][];
    static AmusementCoverTwentys: any[][];
    static AmusementCovers: any[][];
    static AmusementTypeInitBases: ByteType[];
    static AmusementTypeUpdateBases: ByteType[];
    static AmusementType1Inits: (ByteType | ByteType[])[];
    static AmusementType2Inits: (ByteType | ByteType[])[];
    static AmusementType3Inits: (ByteType | ByteType[])[];
    static AmusementType4Inits: ByteType[];
    static AmusementType5Inits: ByteType[];
    static AmusementType6Inits: (ByteType | ByteType[])[];
    static AmusementType7Inits: (ByteType | ByteType[])[];
    static AmusementType8Inits: ByteType[];
    static AmusementType9Inits: (ByteType | ByteType[])[];
    static AmusementType10Inits: (ByteType | ByteType[])[];
    static AmusementType11Inits: (ByteType | ByteType[])[];
    static AmusementType12Inits: (ByteType | ByteType[])[];
    static AmusementType13Inits: (ByteType | ByteType[])[];
    static AmusementType16Inits: ByteType[];
    static AmusementType18Inits: (ByteType | ByteType[])[];
    static AmusementType19Inits: ByteType[];
    static AmusementType20Inits: ByteType[];
    static AmusementType21Inits: ByteType[];
    static AmusementType22Inits: (ByteType | ByteType[])[];
    static AmusementType25Inits: ByteType[];
    static AmusementType26Inits: (ByteType | ByteType[])[];
    static AmusementType100Inits: ByteType[];
    static AmusementType102Inits: ByteType[];
    static AmusementType103Inits: (ByteType | ByteType[])[];
    static AmusementType1Updates: ByteType[];
    static AmusementType2Updates: ByteType[];
    static AmusementType3Updates: ByteType[];
    static AmusementType4Updates: ByteType[];
    static AmusementType5Updates: ByteType[];
    static AmusementType6Updates: ByteType[];
    static AmusementType7Updates: ByteType[];
    static AmusementType8Updates: ByteType[];
    static AmusementType9Updates: (ByteType | ByteType[])[];
    static AmusementType10Updates: (ByteType | ByteType[])[];
    static AmusementType11Updates: (ByteType | ByteType[])[];
    static AmusementType12Updates: (ByteType | ByteType[])[];
    static AmusementType13Updates: (ByteType | ByteType[])[];
    static AmusementType16Updates: ByteType[];
    static AmusementType18Updates: (ByteType | ByteType[])[];
    static AmusementType19Updates: ByteType[];
    static AmusementType20Updates: ByteType[];
    static AmusementType21Updates: ByteType[];
    static AmusementType22Updates: (ByteType | ByteType[])[];
    static AmusementType25Updates: ByteType[];
    static AmusementType26Updates: (ByteType | ByteType[])[];
    static AmusementType100Updates: ByteType[];
    static AmusementType102Updates: ByteType[];
    static AmusementType103Updates: ByteType[];
    static PAmusementCovers: any[][];
    static PAmusementTypeInitBases: ByteType[];
    static PAmusementTypeUpdateBases: ByteType[];
    static PAmusementType1Inits: (ByteType | ByteType[])[];
    static PAmusementType2Inits: (ByteType | ByteType[])[];
    static PAmusementType3Inits: (ByteType | ByteType[])[];
    static PAmusementType9Inits: (ByteType | ByteType[])[];
    static PAmusementType1Updates: ByteType[];
    static PAmusementType2Updates: ByteType[];
    static PAmusementType3Updates: ByteType[];
    static PAmusementType9Updates: (ByteType | ByteType[])[];
}
declare class GuideViewBase extends egret.DisplayObjectContainer {
    protected target: egret.DisplayObject;
    protected infoGroup: eui.Group;
    /**遮罩 */
    protected shapeMasks: egret.Shape[];
    protected rect: egret.Rectangle;
    clickCD: boolean;
    private otherMc;
    private clicking;
    constructor();
    protected drawMask(): void;
    protected drawShape(shape: egret.Shape, rect: egret.Rectangle): void;
    private onResize();
    protected onClick(e: egret.TouchEvent): void;
    /**
     * 刷新
     */
    protected refurbish(): void;
    /**
     * 设置显示数据
     * @param obj
     * @param data
     */
    show(target: egret.DisplayObject): void;
    close(): void;
}
/**
 * 活动类型4
 */
interface Amusement4Config {
    Id: number;
    rankType: number;
    ranking: number;
    value: number;
    rewards: RewardVo[];
    titleName: string;
    titleEffName: string;
    showType: number;
    range: number[];
}
interface Amusement5Config {
    Id: number;
    index: number;
    day: number;
    rewards: RewardVo[];
    showType: number;
}
/**
 * 击杀Boss活动配表
 */
interface Amusement6Config {
    Id: number;
    index: number;
    bossID: number[][];
    rewards: RewardVo[];
    groupName: string;
    sort: number;
    giftName: string;
    jump: any;
}
/**
 * 合服击杀Boss活动配表
 */
interface Amusement7Config {
    Id: number;
    index: number;
    score: number;
    rewards: RewardVo[];
    count: number;
    scount: number;
    title: number;
    showType: number;
    itemId: number;
    itemCount: number;
    exValue: {
        bossModel: string;
    };
    dailyCount: number;
    items: {
        id: number;
        count: number;
    };
}
/**
 * BOSS副本数据结构
 */
interface Amusement8Config {
    Id: number;
    index: number;
    cond: number;
    ybCount: number;
    rewards: number;
    showType: number;
    rewardsNum: number;
}
/**
 * 类型9活动
 */
interface Amusement9Config {
    Id: number;
    index: number;
    item: number;
    yb: number;
    reward: {
        type: number;
        id: number;
        count: number;
        times?: number;
    }[];
    rate: any;
    showType: number;
    middleDesc: string;
}
interface AmusementBtnConfig {
    type: number;
    sort: number;
    acTime: string;
    id: number;
    acDesc: string;
    icon: string;
    title: string;
    light: number;
    timeType: number;
    startTime: string;
    endTime: string;
    showType: number;
    activityType: number;
    showReward: {
        type: number;
        id: number;
        count: number;
    }[];
    hfTimes: number;
    pageType: number;
    relyOn: number[];
    pageSkin: string;
    jump: any;
    titleName: string;
    redPoint: number;
    listItem: string[];
}
interface AmusementConfig {
    openType: number;
    desc: string;
    tabName: string;
    startTime: string;
    Id: number;
    /** 区分开服或合服 */
    timeType: number;
    endTime: string;
    activityType: number;
    pageType: number;
    pageSkin: string;
    /**第几次合服生效 */
    hfTimes: number;
    /**奖励类型 */
    sum: number;
    helpInfo: number;
}
interface ArtifactImbaConfig {
    index: number;
    id: number;
    count: number;
    getDesc: string;
    attrDesc: string;
    attrs: AttributeData[];
    exattrs: AttributeData[];
    name: string;
    jigsawId: number[];
    power: number;
    img: string;
    imgShadow: string;
    simpleDesc: string;
    funcDesc: string;
    winGuide: {
        0: string;
        1: number;
    };
    imgName: string;
    buttonDesc: string;
    turnDesc: string;
}
interface ArtifactImbaSawConfig {
    name: string;
    power: number;
    guide: string;
    attrs: AttributeData[];
    point: egret.Point;
    img: string;
}
interface AshtarteBaseConfig {
    id: number;
    mat: number;
    talent: number;
    skill: {
        id: number;
        open: number;
    }[];
    show: number;
    sort: number;
    icon: string;
}
interface AshtarteConfig {
    openzhuanshenglv: number;
    openserverday: number;
    level: number;
    showzhanlingcd: number;
    stageitemid: number;
    stageitemexp: number;
    /**
     * 提升丹属性
     * {
     *   [200110] = {
     *              attr = {
     *                      {type=17,value=5000},
     *                      {type=2,value=1000}
     *                      ...
     *              },
     *              precent = 100,//这个字段不一定每个道具都有 万分比
     *              sort = 0//主界面控件排序字段
     *   },
     *
     *   [200001] = {  ... }
     *
     * }
     */
    upgradeInfo: any;
    equipPosCount: number;
    plusLevel: number;
    unitPrice: number;
    zlEquipName: string[];
    unitTime: number;
    disappearTime: number;
    hintNum: number;
    anchorOffset: number[];
    delayTime: number;
    fbIndex: number;
}
interface AshtarteEnhanceConfig {
    attr: AttributeData[];
    costNum: number;
    enhanceItem: number;
    id: number;
    level: number;
    per: number;
    expower: number;
}
/**战灵装备 */
interface AshtarteEquipConfig {
    id: number;
    level: number;
    pos: number;
    attrs: AttributeData[];
    mat: {
        id: number;
        count;
    }[];
}
/**战灵等级属性 */
interface AshtarteLevelConfig {
    id: number;
    level: number;
    exp: number;
    count: number;
    attrs: AttributeData[];
    talentLevel: number;
    maxCount: number;
    expower: number;
    appearance: string;
    innerAppearance: string;
    zlName: string;
    stageDesc: string;
    activeLv: number;
    zlNameLabel: string;
}
interface AshtarteLinkConfig {
    attrs: AttributeData[];
    chainDesc: string;
    firstSlot: number;
    level: number;
    secondSlot: number;
    ex_power: number;
}
interface AshtartePillExConfig {
    addLimit: number;
    costNum: number;
    id: number;
    level: number;
}
/**技能库 */
interface AshtarteSkillConfig {
    id: number;
    attrs: AttributeData[];
    passive: number;
    passivePlus: number;
    desc: {
        name: string;
        desc: string;
        icon: string;
    };
    expower: number;
}
/**战灵套装 (针对每个战灵的所有部位装备等级)*/
interface AshtarteSuitConfig {
    level: number;
    precent: number;
    attrs: AttributeData[];
    suitTname: string;
    suitCondition: string;
    suitWithName: string;
}
/**战灵天赋 (每个战灵天赋的等级数据)*/
interface AshtarteTalentConfig {
    id: number;
    level: number;
    costCount: number;
    effId: number;
    rate: number;
    passive: {
        type: number;
        id: number;
    }[];
    expower: number;
    talentDesc: {
        name: string;
        desc: string;
        icon?: string;
    };
    attrs: AttributeData[];
    showWords: string;
}
interface AsTeamCopyBaseConfig {
    needZsLv: number;
    openDay: number;
    inviteText: string;
    closeTime: number[];
    itemId: number;
    flowerChiv: number;
}
interface AsTeamCopyConfig {
    id: number;
    pmaxnum: number;
    fbid: number;
    name: string;
    rewardShow: RewardVo[];
    guanqiaImg: string;
    bossImg: string;
    nameImg: string;
    infoText: string;
    bossName: string;
    chiv: number;
}
interface AsTeamCopyGuideConfig {
    roomId: number;
    orderId: number;
    monName: string;
    monHead: string;
    dangerLv: string;
    guideText: string;
}
/**
 * 通天塔常量
 */
interface BabelLotteryChallBaseConfig {
    LotteryOpenLevel: number;
}
interface BabelLotteryChallConfig {
    count: number;
    group: RewardVo[];
}
/**
 * 挑战副本
 */
interface BabelLotteryConfig {
    id: number;
    group: number;
    layer: number;
    zsLevelLimit: number;
    levelLimit: number;
    fbId: number;
    describe: string;
    showIcon: number;
    equipPos: number;
    clearReward: RewardVo[];
    dayReward: RewardVo[];
    lotteryCount: number;
}
interface BabelLotteryNameConfig {
    group: number;
    name: string;
}
/**
 * 背包基础配置
 */
interface BackpackConfig {
    baseSize: number;
    rowSize: number;
}
/**
 * 背包扩张配置
 */
interface BackpackExpandConfig {
    row: number;
    cost: number;
}
interface BackpackVipGridConfig {
    vip: number;
    grid: number;
}
/**
 * 拍卖行基础配置
 */
interface BargainConfig {
    rushTime: number;
    sellFailureContent: string;
    globalShowTime: number;
    globalTax: number;
    sellSuccessContent: string;
    openserverday: number;
    sellSuccessGuildContent: string;
    openzhuanshenglv: number;
    priceIncrease: number;
    crossPriceIncrease: number;
    sellSuccessGuildTitle: string;
    exceedTitle: string;
    falseHints: {}[];
    exceedContent: string;
    buySuccessContent: string;
    guildShowTime: number;
    sellSuccessTitle: string;
    sellFailureTitle: string;
    buySuccessTitle: string;
    guildTax: number;
    eachPageNumber: number;
    crossShowTime: number;
    iconHideday: number;
}
/**
 * 拍卖品配置
 */
interface BargainItemConfig {
    item: RewardVo;
    globalTime: number;
    id: number;
    guildTime: number;
    bid: number;
    buy: number;
    crossTime: number;
}
interface BeastBaseConfig {
    /**神兽ID */
    id: number;
    /**装备部位最低等级 */
    minLevel: number[];
    /**技能 */
    skill: number[];
    /**图标资源 */
    iconImg: string;
    /**激活资源 */
    activeImg: string;
}
interface BeastConfig {
    /**开启转生等级 */
    openzhuanshenglv: number;
    /**装备合成材料数 */
    matCount: number;
    /**装备孔位个数 */
    posCount: number;
    /**开服天数 */
    openserverday: number;
    /**初始出战个数 */
    minCount: number;
    /**最大出战个数 */
    maxCount: number;
    /**出战个数上限提升道具 */
    battleCountItem: number;
    battleCount: any;
    equipQualityCN: string[];
    matLimit: any;
}
interface BeastEquipConfig {
    /**D物品id */
    id: number;
    /**装备属性 */
    attrs: AttributeData[];
    /**总经验 */
    totalExp: number;
    /**强化经验 */
    exp: number;
    /**额外战力 */
    expower: number;
    /**星级属性 */
    starattrs: AttributeData[];
}
interface BeastSkillConfig {
    id: number;
    attrs: AttributeData[];
    desc: string;
    name: string;
    expower: number;
    icon: string;
    quality: number;
    /**1全体出战神兽 2本体出战 */
    target: number;
}
interface BlisterAwardConfig {
    id: number;
    color: number;
    reward: {
        id: number;
        type: number;
        count: number;
    }[];
    times: number;
}
interface BlisterConfig {
    fbId: number;
    expPoint: {}[][];
    openLv: number;
    lastTimes: number;
    desc: string;
    npcPos: number[];
    sendAwardSec: number;
    rebornCd: number;
    openTips: string;
    buyRebornCdCost: number;
    efficiencyDesc: string;
}
interface BookConfig {
    id: number;
    level: number;
    attrs: AttributeData[];
    itemId: number;
    cost: number;
    power: number;
    specialAttr: AttributeData[];
}
interface BookDecomposeConfig {
    id: number;
    itemId: number;
    value: number;
    topStar: number;
    quality: number;
    imgLight: string;
    imgGray: string;
    imgShow: string;
    name: string;
    openDay: number;
}
interface BookListConfig {
    id: number;
    idList: number[];
    name: string;
    icon: string;
    nameImg: string;
    sort: number;
}
interface BookSuitConfig {
    id: number;
    level: number;
    idList: number[];
    /**升级所需张数 */
    count: number;
    attrs: AttributeData[];
    name: string;
}
interface BossHomeConfig {
    id: number;
    vip: number;
    boss: number[];
    icon: number[];
}
interface BubbleConfig {
    bubbleid: number;
    news: string;
    type: number;
}
interface CalcForceBaseConfig {
    openLevel: number;
    maxLevel: number;
    maxStage: number;
    levelPerStage: number;
    openGuanqia: number;
}
interface CalcForceStageConfig {
    stage: number;
    level: number;
    totalExp: number;
    costMoney: number;
    addExp: number;
    attribute: AttributeData[];
    tips: number;
}
interface CampWarConfig {
    effectid: number;
    openLevel: number;
    assigncounts: number;
    lastTimes: number;
    desc: string;
    npcPos: number[];
    openTips: string;
    rebornCd: number;
    buyRebornCdCost: number;
    fbId: number;
    assignPer: number;
    noAttack: number[];
}
interface CampWarPersonalAwardConfig {
    id: number;
    award: {
        id: number;
        type: number;
        count: number;
    }[];
    integral: number;
}
interface CampWarPersonalRankAwardConfig {
    award: {
        id: number;
        type: number;
        count: number;
    }[];
    rank: number;
}
/**
 * 地图关卡数据
 */
interface ChaptersConfig {
    /** 刷怪触发下限值 */
    rCount: number;
    /** 挂机金币/小时 */
    goldEff: number;
    /** 挂机经验/小时 */
    expEff: number;
    /** 初始能量 */
    energy: number;
    /** 能量 */
    waveEnergy: number;
    /** 怪物数量 */
    waveMonsterCount: number;
    /** 怪物Ids */
    waveMonsterId: number[];
    /** 出生点 */
    zyPos: any;
    /** 刷怪点 */
    rPos: {
        x: number;
        y: number;
    }[][];
    /** 传送点 */
    outPos: {
        x: number;
        y: number;
        a: number;
    };
    /** 精英怪物 */
    eliteMonsterId: number;
    /** 主动怪物 */
    wanderpercent: number;
    /**转生限制等级 */
    zsLevelLimit: number;
}
/**
 *	全局配置
 */
interface ClientGlobalConfig {
    /** 显示品质特效的物品ID */
    effectItems: number[];
    /** 羽翼登陆奖励 */
    rewardWingDay: number;
    bodyDir: any[];
    monsterDir: any[];
    activityTips: any[];
    welcomeItem: any;
    gotoPosTips: any;
    spokesmanredbag: any;
    bookCondition: any[];
    skillCd: number;
}
/**
 * 全局无限代多券
 */
interface ClientNoticeConfig {
    title: string;
    desc: string;
    desc1: string;
}
/**
 * 战斗力系数
 */
interface CombatPowerConfig {
    type: number;
    power: number;
    relate_type: number;
    relate_power: number;
}
interface CopyExpBaseConfig {
    /** 开启等级 */
    openLv: number;
    /** 每日免费次数*/
    freeCount: number;
    /** VIP额外次数*/
    vipCount: {
        [vipLv: number]: number;
    };
    /** 领取经验价格*/
    recPrice: number[];
    /** 每日可扫荡次数*/
    buyCount: number;
    /** VIP额外次数*/
    vipBuyCount: {
        [vipLv: number]: number;
    };
    /** 扫荡价格*/
    buyPrice: number[];
    luckyPrice: number;
    burden: any;
}
interface CopyExpConfig {
    id: number;
    /** 开始等级*/
    slv: number;
    /** 副本ID*/
    fbId: number;
    /** 获得经验*/
    exp: number;
}
interface CopyExpMonsterConfig {
    /** 怪物ID*/
    id: number;
    /** 获得的经验*/
    exp: number;
}
interface CopyGoldBaseConfig {
    /** 开启等级 */
    openLv: number;
    /** 每日免费次数*/
    freeCount: number;
    /** VIP额外次数*/
    vipCount: {
        [vipLv: number]: number;
    };
    /** 领取经验价格*/
    recPrice: number[];
    /** 每日可扫荡次数*/
    buyCount: number;
    /** VIP额外次数*/
    vipBuyCount: {
        [vipLv: number]: number;
    };
    /** 扫荡价格*/
    buyPrice: number[];
}
interface CopyGoldConfig {
    id: number;
    /** 开始等级*/
    slv: number;
    /** 副本ID*/
    fbId: number;
    /** 获得元宝*/
    yuanbao: number;
}
interface CrazybtplayAttrUpConfig {
    area: number;
    id: number;
    type: number;
    value: number;
}
interface CrazybtplayBaseConfig {
    cond: any[];
    eff: string[];
    enhance: number;
    id: number;
    mat: number;
    skill: any[];
    sort: number;
    type: number;
}
interface CrazybtplayBossBaseConfig {
    addStrength: number;
    addStrengthByKill: number;
    canEnterCount: number;
    cdTime: number;
    dropTags: number[];
    intervalTime: number;
    kickCountTime: number;
    maxEnterCount: number;
    openDay: number;
    rebornCd: number;
    rebornCost: number;
    totalShenWuStrength: number;
    viewRange: number;
    vipBuy: any;
    zsLevel: number;
}
interface CrazybtplayBossConfig {
    addStrength: number;
    bossId: number;
    carryAwards: RewardVo[];
    id: number;
    pos: any;
    refreshTime: number;
}
interface CrazybtplayBossFbConfig {
    bossIdList: number[];
    dropAwards: RewardVo[];
    fbid: number;
    id: number;
    lvLimit: number;
    openDay: number;
    zsLvLimit: number;
}
interface CrazybtplayConfig {
    openserverday: number;
    openzhuanshenglv: number;
    swFirstRes: string[][];
    taskInfo: any;
}
interface CrazybtplayEnhanceConfig {
    attrs: AttributeData[];
    id: number;
    level: number;
    count: number;
}
interface CrazybtplayLvConfig {
    attrs: AttributeData[];
    count: number;
    id: number;
    level: number;
    talent: AttributeData[];
    talentDesc: string[];
    showIcon: string;
}
interface CrazybtplaySkillConfig {
    attrUpId: number[];
    attrs: AttributeData[];
    id: number;
    skillInfo: string[];
}
interface CrazyDogBaseConfig {
    openserverday: number;
    level: number;
    stageitemid: number;
    unitPrice: number;
    stageitemexp: number;
    unitTime: number;
    hintNum: number;
    anchorOffset: number[];
    fbIndex: number;
    addjob: number[];
    zsLeve: number;
}
interface CrazyDogConfig {
    id: number;
    mat: number;
    skill: {
        id: number;
        open: number;
    }[];
    sort: number;
    icon: string;
    skillrevise: number;
    show: number;
}
interface CrazyDogLevelConfig {
    id: number;
    level: number;
    exp: number;
    count: number;
    attrs: any;
    innerAppearance: string;
    appearance: string;
    activeLv: number;
    zlName: string;
    zlNameLabel: string;
    stageDesc: string;
}
interface CrazyDogSkillConfig {
    id: number;
    attrs: any;
    desc: any;
}
interface CrazyDogStarConfig {
    id: number;
    level: number;
    attrs: any;
    count: number;
    showIcon: string;
}
/**
 * 跨服3v3竞技场基础配置
 */
interface CrossArenaBaseConfig {
    openDay: number;
    openLevel: number;
    lastTime: number;
    needGatherTime: number;
    flagRefreshTime: number;
    gatherScore: {
        camp: number;
        preson: number;
    };
    killScore: number;
    instScore: number;
    winScore: number;
    lowestScore: number;
    joinCount: number;
    maxJoinCount: number;
    peakCountInfo: any;
    assistsTime: number;
    rebornCd: number;
    scoreMetal: number[];
    scoreMetalName: string[];
    peakAwards: any[];
    everyDayAward: any[];
    finalAward: any[];
    zhuanshengLevel: number;
    teamScoreRange: number;
    flagBossId: number;
    rankAward: any[];
    peakItemId: number;
    tipScore: number;
    readyPos: any[];
    iniitationCd: number;
    hintTxt: string;
    degreeTpis: string;
    worldInvitationCd: number;
    maxJoinPerson: number;
}
interface CrossArenaMetalAwardConfig {
    name: string;
    award: RewardVo[];
    background: string;
    icon: string;
    metal: number;
}
interface CrossArenaMetReachAwardConfig {
    metal: number;
    award: RewardVo[];
}
interface CrossArenaRankAwardConfig {
    idx: number;
    head: string;
    award: RewardVo[];
    rankIdx: number;
    rankIdx2: number;
    name: string;
    background: string;
    icon: string;
    context: string;
}
interface CrossBossBaseConfig {
    belongMaxCount: number;
    openDay: number;
    flagBelongMaxCount: number;
    flagId: number;
    needTime: number;
    bossBelongCount: number;
    rebornCost: number;
    flagRefreshTime: number;
    rebornCd: number;
    cdTime: number;
    flagBelongCount: number;
    bossBelongMaxCount: number;
    showBoss: string;
    limitZsLv: number;
    bestDrops: number[];
    assistCount: number;
    assistMaxCount: number;
    cydDpId: number;
    gatherDoubleContidion: number[];
}
interface CrossBossConfig {
    id: number;
    bossId: number;
    fbid: number;
    levelLimit: number[];
    refreshNoticeId: number;
    refreshTime: number;
    belongRewardshow: any;
    sceneName: string;
    crossOpenDay: number;
    statuePos: XY;
    type: number;
}
interface DaifugBaseConfig {
    dicePrice: number;
    diceNum: number;
    cameraWidth: number;
    cameraHeight: number;
    speed: number;
    diceTime: number;
    /**第几天开启 */
    openday: number;
}
interface DaifugGridConfig {
    param: RewardVo[] | number;
    action: number;
    dir: number;
    exparam: RewardVo[];
}
interface DaifugRoundAwardConfig {
    award: RewardVo[];
    round: number;
}
/**
 * DailyFubenConfig
 */
interface DailyCopyConfig {
    /** 副本id */
    id: number;
    /** 每日免费次数 */
    freeCount: number;
    /** 每日可购买次数 */
    buyCount: number;
    /** 每日vip额外可购买次数 */
    vipBuyCount: any;
    /** 购买次数价格 */
    buyPrice: any;
    /** 双倍扫荡价格 */
    buyDoublePrice: any;
    /** 等级限制 */
    levelLimit: number;
    /** 限制转生等级 */
    zsLevel: number;
    /** 道具显示 */
    showItem: {
        type: number;
        id: number;
        count: number;
    }[];
    /** 描述 */
    des: string;
    /** bossID */
    bossId: number;
    /** 副本名字 */
    name: string;
    sort: number;
    ybRec: number;
    /** 月卡限制 */
    monthcard: number;
    /** 贵族限制 */
    privilege: number;
    /** 特权限制 */
    specialCard: number;
    /** 扫荡等级 */
    sweepLevel: number;
    kingCard: number;
    dropDesc: any;
}
interface DailyRedBagConfig {
    cd: number;
    lottery: number;
    openZslv: number;
}
interface DarkEquipBaConfig {
    ADrugLimit: any;
    AItemId: number;
    BDrugLimit: any;
    BItemId: number;
    addAttr: AttributeData[];
    addPre: number;
    bossDivide: number[][];
    darkSlotName: string[];
    darkSlotQuality: string[];
    darkSlotType: any;
    openDay: number;
    openLevel: number;
    replaceAttr: AttributeData[];
    replacePre: number;
}
interface DarkEquipConfig {
    attr: AttributeData[];
    darkforce: AttributeData[];
    isReplace: number;
    itemId: number;
    level: number;
    slot: number;
    star: number;
    totalExp: number;
    exPower: number;
    composeItem: any[];
}
interface DarkEquipLvUpConfig {
    exp: number;
    level: number;
    slot: number;
    strengthenAttr: AttributeData[];
}
interface DarkSuitLvConfig {
    attrs: AttributeData[];
    ex_power: number;
    level: number;
    num: number;
    type: number;
    openDay: number;
}
interface DeathgainWayConfig {
    level: number;
    itemId: string;
    gainWay: any;
}
interface DeathGuideConfig {
    zslv: number;
    lv: number;
    gainWay: number[][];
}
interface DefineEffConfig {
    effid: number;
    souce: string;
}
interface DeityEquipComposeConfig {
    /** 装备配置id */
    equipId: number;
    /** 消耗物品id */
    itemId: number;
    /** 消耗物品数量 */
    count: number;
}
interface DeityEquipLevelupConfig {
    /** 旧装备配置id */
    oldEquipId: number;
    /** 新装备配置id */
    newEquipId: number;
    /** 消耗物品id */
    itemId: number;
    /** 消耗物品数量 */
    count: number;
}
interface DevildomBigBossBsConfig {
    cdTime: number;
    hefuTimeLimit: number;
    monInfo: string;
    openDay: number;
    rebornCd: number;
    rebornCost: number;
    showBelongReward: RewardVo[][];
    showBigReward: RewardVo[][];
    showGoodsReward: RewardVo[][];
    showJoinReward: RewardVo[][];
    zsLevelLimit: number;
    open: number[];
}
interface DevildomBossBsConfig {
    /**复活cd*/
    rebornCd: number;
    /**开始时间*/
    startTime: number[];
    /**复活消耗*/
    rebornCost: number;
    /**开启天数限制*/
    openDay: number;
    /**cd时间*/
    cdTime: number;
    /**归属者奖励*/
    belongAwards: RewardVo[];
    /**归属者拍卖奖励*/
    belongSaleAwards: RewardVo[];
    /**参与者奖励*/
    partAwards: RewardVo[];
    /**参与者拍卖奖励*/
    partSaleAwards: RewardVo[];
    /**合服开启天数限制*/
    hefuTimeLimit: number;
}
interface DevildomBossConfig {
    id: number;
    levelLimit: number;
    openBossList: number[];
    bossName: string;
}
interface DevourEquipDataConfig {
    canHuanhuaPos: any[];
    chuanQiEquipEnum: any[];
    devourPosWeight: any[];
    equipIconInfo: any[];
    equipTipsInfo: any[];
    keyPos: any[];
    leevel: any[];
    lvlPrefix: any[];
    maxUp: number;
    oepnSysDay: number;
    openSysZSLevel: number;
    skillDisplayID: number;
    stoneAddSoul: number;
    stoneAttr: any;
    stoneId: number;
    stoneMax: any;
    suitNameHead: any[];
    thunderEquipEnum: any[];
    zhiZunEquipEnum: any[];
}
interface DevourEquipLevelConfig {
    ItemId: number;
    attr: any[];
    cond: any;
    devourRes: string;
    inside: string;
    level: number;
    outside: string;
    pos: number;
    soulMax: number;
    specialAttr: any;
    value: number;
}
interface DevourSoulAttrConfig {
    attr: any[];
    pos: number;
    prop: any[];
    soulvalue: any[];
}
interface DevourSoulBossConfig {
    addsoul: number;
    bossZSlevel: number;
    bossid: number;
    doubleCost: number;
    oneKeyCost: number;
    trainTime: number;
}
interface DevourSoulSuitConfig {
    attr: any[];
    count: number;
    desc: string;
    desctype: number;
    exattr: any[];
    level: number;
    effect: number;
}
interface DominateEquipBaConfig {
    bossStar: any;
    openDay: number;
    openZsLevel: number;
    posEff: string[];
    suitAttr: any;
    suitShow: any;
    tPosEff: string[];
    mixShowId: number;
}
interface DominateEquipComConfig {
    itemId: number;
    needEquip: any[];
    needItem: any;
    needWearEquipId: number;
}
interface DominateEquipDecomConfig {
    itemId: number;
    splitReward: RewardVo[];
}
interface DominateEquipLvConfig {
    attrs: AttributeData[];
    descTxt: string;
    eff: string;
    exAttrs: AttributeData[];
    ex_power: number;
    iconImg: string;
    id: number;
    level: number;
    skillName: string;
}
interface DominateEquipMastComConfig {
    compose: any[];
    id: number;
    pos: number;
}
interface DominateEquipMasterSlotConfig {
    name: string;
    slot: number;
    slotBg: string;
    tabBg: string;
}
interface DominateEquipMastLvConfig {
    attr: AttributeData[];
    mat: any[];
    id: number;
    level: number;
    point: number;
    quality: number;
    rankLv: number;
    starLv: number;
    starIcon: string;
}
interface DominateEquipPointConfig {
    id: number;
    point: number;
}
/**
 * 龙魂基础配置
 */
interface DragonSoulBaseConfig {
    openlv: number;
    smeltId: number;
    equipOpenDay: number;
    equipOpenZs: number;
    lhItemRes: string[];
    proShowList: any[];
    upgrateItem: any[];
}
interface DragonSoulConfig {
    level: number;
    name: string;
    exp: number;
    itemId: number;
    attr: AttributeData[];
}
interface DragonSoulPosConfig {
    pos: number;
    posItem: number;
    quality: number;
    star: number;
}
interface DragonSoulStageConfig {
    stage: number;
    icon: string;
    normalCost: number;
    attr: AttributeData[];
    normalCostTip: number;
}
interface DragonSoulStarConfig {
    attr: AttributeData[];
    bigIcon: string;
    costItem: number;
    costNum: number;
    effect: string;
    nextItem: number;
    posId: number;
    posItem: number;
    posSort: number;
    quality: number;
    splitNum: number;
    star: number;
    power: number;
}
interface DragonSoulSuitConfig {
    attr: AttributeData[];
    ex_attr: AttributeData[];
    inside: string;
    level: number;
    skillShowPic: string;
    skilldesc: string;
    skillname: string;
}
interface DropItemEffectConfig {
    id: number;
    resource: string;
}
/**
 * EffectConfig
 */
interface EffectConfig {
    id: number;
    fileName: string;
    type: number;
}
interface EmailIdConfig {
    attachment: RewardVo[];
    attachmentShow: boolean;
}
interface EmailLevelConfig {
    level: number;
    mType: number;
    idList: number[];
}
interface EmailLoginConfig {
    day: number;
    idList: number[];
}
interface EquipAllEffConfig {
    pos: number;
    type: number;
    limitType: any[];
    limited: any[];
}
interface EquipConfig {
    appearance: string;
    def: number;
    id: number;
    hp: number;
    additionRange: number;
    additionRangeLow: number;
    tough: number;
    res: number;
    crit: number;
    atk: number;
    exAttr1: any;
    exAttr2: any;
    baseAttr1: AttributeData;
    baseAttr2: AttributeData;
    stoneId: number;
    stoneNum: number;
    moneyNum: number;
    equipRate: number;
    moneyType: number;
    exPower: number;
    noWSoulEff: number;
    thunderEff: number;
}
interface EquipWithEffConfig {
    offX: number;
    inShowEff: string;
    nextShowEff: string;
    id: string;
    scaling: number;
    offY: number;
    specialEff: string;
    specialOffX: number;
    specialOffY: number;
    specialScaling: number;
    tipstitleImg: string;
    tipsWeaponOffset: any;
    tipsScale: any;
}
interface EsotericaBaseConfig {
    lockId: number;
}
interface EsotericaGridConfig {
    grid: number;
    zsLevel: number;
    vipLevel: number;
}
interface EsotericaSkillConfig {
    id: number;
    p1: number;
    p2: number;
    p3: number;
    item: number;
    job: number;
    power: number;
}
interface ExperienceJadeBasicConfig {
    openLv: number;
    perLevel: number;
    deterDesc: string;
}
interface ExperienceJadeConfig {
    item_id: number;
    level: number;
    count: number;
    attrs: {
        value: number;
        type: number;
    }[];
    deterLevel: number;
}
interface ExperienceJadeNewBaseConfig {
    openlv: number;
    perLevel: number;
    upgradeInfo: {
        attr: {
            value: number;
            type: number;
        }[];
        precent: number;
    }[];
    skillUnlock: {
        id: number;
        name: string;
        desc: string;
    }[];
    itemInfo: {}[];
    openDay: number;
}
interface ExperienceJadeNewLevelConfig {
    attrs: {
        value: number;
        type: number;
    }[];
    level: number;
    exp: number;
    skillIdList: number[];
    upgradeItemInfo: {}[];
}
interface ExperienceKingAwardConfig {
    id: number;
    level: number;
    exattrs: AttributeData[];
    desc: string;
    icon: string;
    skillname: string;
}
/**
 * 历练基础配置
 */
interface ExperienceKingBaseConfig {
    actImbaId: number;
}
/**
 * 历练等级配置
 */
interface ExperienceKingLevelConfig {
    /** 等级 */
    level: number;
    /** 升级所需经验 */
    exp: number;
    /** 奖励列表 */
    itemAward: RewardVo[];
    /** 奖励属性list */
    attrAward: AttributeData[];
    power: number;
    trainlevel: number;
    type: number;
    trainName: string;
    img: string;
}
interface ExperienceKingOfficeAwardConfig {
    level: number;
    award: any;
}
interface ExperienceKingTrainAwardConfig {
    openDay: number;
    id: number;
    score: number;
    reward: RewardVo[];
}
/**
 * 爵位零散配置
 */
interface ExperienceMedalBasicConfig {
    perLevel: number;
    actImbaId: number;
}
/**
 * 爵位配置
 */
interface ExperienceMedalConfig {
    level: number;
    achievementIds: TaskIdConfig[];
    attrs: AttributeData[];
    exattrs: AttributeData[];
    desc: string;
    type: string;
    effid: number;
}
interface TaskIdConfig {
    achieveId: number;
    taskId: number;
}
interface FakeitemConfig {
    addAttrs: AttributeData[];
    attrs: AttributeData[];
    id: number;
    job: string;
    pos: string;
    power: number;
    zslevel: number;
}
interface FashionConfig {
    zhuangbanpos: string[];
    effOpen: number[];
    defaultShow: number[];
}
interface FashionIdConfig {
    /**装扮id */
    id: number;
    /**位置 pos1:衣服 pos2:武器 pos3:羽翼 */
    pos: number;
    /**增加属性 */
    attr: AttributeData[];
    /**有效时长(秒)*/
    invalidtime: number;
    /**激活消耗*/
    cost: {
        itemId: number;
        num: number;
    };
    /**职业需求*/
    roletype: number;
    /**装扮显示 */
    res: string;
    /**装扮名字 */
    name: string;
    /**部位属性加成 */
    attr_precent: {
        pos: number;
        pre: number;
    }[];
    /**部位属性加成战力 */
    exPower: number;
    sort: number;
    /** 羽翼属性加成 */
    wing_attr_per: number;
    /**时装资源名称 */
    dress_name: string;
    /**特殊属性加成 */
    special_attr_desc: string;
    /**Tips显示资源 */
    show_img: string;
    /**雷霆资源 */
    thunderEff: number;
    weaponHasFamale: number;
    dressTipsType: string;
    /**套装ID */
    suitid: number;
}
interface FashionLvUpConfig {
    attr: AttributeData[];
    cost: {
        num: number;
        itemId: number;
    };
    id: number;
    level: number;
    ex_power: number;
}
interface FashionSuitConfig {
    activeNum: number;
    approachEff: string[][];
    desc: string;
    id: number;
    isShowApproachEff: number;
    zbIDs: number[];
}
/**
 * 羽翼条件配置
 */
interface FeatherCommonConfig {
    openLevel: number;
    lvMax: number;
    levelItemid: number;
    levelItemidStage: number;
    levelExpChange: number;
    tempattr: number;
    openDay: number;
    attrPillId: number;
    attrPill: AttributeData[];
    flyPillId: number;
    flyPill: number;
    flyPillAttr: AttributeData[];
    /**羽翼最高等级 */
    wingMaxLv: number;
    upgrateItem: any[];
    forgeOpenLv: number;
    forgeSkillName: string;
    forgeItemId: number;
    forgeExtraItemId: number;
    forgeSkillInitial: string;
}
interface FeatherDeityForgeExtraLvConfig {
    attr: AttributeData[];
    cost: number;
    forgeLvLimit: number;
    lv: number;
}
interface FeatherDeityForgeLvConfig {
    attr: AttributeData[];
    cost: number;
    lv: number;
}
interface FeatherDeityForgeSkillConfig {
    attr: AttributeData[];
    lv: number;
}
/**
 * 神羽阶级配置表
 */
interface FeatherDeityLevelConfig {
    level: number;
    slot: number;
    itemId: number;
}
/**
 * 神羽套装配置表
 */
interface FeatherDeitySuitConfig {
    lv: number;
    num: number[];
    precent: number;
    exattr: {
        type: number;
        value: number;
    }[];
    suitname: string;
    skillname: string;
    skillicon: string;
    skilldesc: string;
    skilllevel: number;
}
/**
 * 神羽道具基础配置表
 */
interface FeatherItemConfig {
    itemId: number;
    showlv: number;
    level: number;
    slot: number;
    composeItem: {
        id: number;
        count: number;
    };
    needMoney: number;
    attr: AttributeData[];
    exattr: AttributeData[];
    exPower: number;
}
/**
 * 羽翼等级配置
 */
interface FeatherLevelConfig {
    level: number;
    name: string;
    normalCost: number;
    normalCostTip: number;
    itemId: number;
    itemNum: number;
    itemPrice: number;
    attr: AttributeData[];
    appearance: string;
    exp: number;
    pasSkillId: number;
    clearTime: number;
    attrPill: number;
    flyPill: number;
}
interface FireRing0Config {
    level: number;
    cost: number;
    attrAward: AttributeData[];
    power: number;
}
interface FireRing1Config {
    level: number;
    cost: number;
    attrAward: AttributeData[];
    power: number;
}
/**
 * ExRingConfig
 */
interface FireRingConfig {
    /** 戒指序号 */
    id: number;
    /** 碎片id */
    costItem: number;
    /** 名字 */
    name: string;
    /** 属性类型 */
    at1: number;
    at2: number;
    at3: number;
    at4: number;
    at5: number;
}
/**
 * 神力特戒
 */
interface FireRingRole2Config {
    level: number;
    costItem: number;
    cost: number;
    upPower: number;
    addPower: number;
    bjRate: number;
    bjAddPower: number;
    attrAward: {
        type: number;
        value: number;
    }[];
    extAttrAward: {
        type: number;
        value: number;
    }[];
    judgeup: number;
    SpecialRingSkin: string;
}
/**
 * 攻击特戒
 */
interface FireRingRole3Config {
    level: number;
    costItem: number;
    cost: number;
    upPower: number;
    addPower: number;
    bjRate: number;
    bjAddPower: number;
    attrAward: {
        type: number;
        value: number;
    }[];
    extAttrAward: {
        type: number;
        value: number;
    }[];
    judgeup: number;
    SpecialRingSkin: string;
}
/**
 * 治疗特戒
 */
interface FireRingRole4Config {
    level: number;
    costItem: number;
    cost: number;
    upPower: number;
    addPower: number;
    bjRate: number;
    bjAddPower: number;
    attrAward: {
        type: number;
        value: number;
    }[];
    extAttrAward: {
        type: number;
        value: number;
    }[];
    judgeup: number;
    SpecialRingSkin: string;
}
/**
 * 治疗特戒
 */
interface FireRingRole5Config {
    level: number;
    costItem: number;
    cost: number;
    upPower: number;
    addPower: number;
    bjRate: number;
    bjAddPower: number;
    attrAward: {
        type: number;
        value: number;
    }[];
    extAttrAward: {
        type: number;
        value: number;
    }[];
    judgeup: number;
    SpecialRingSkin: string;
}
/**
 * 生命特戒
 */
interface FireRingRole6Config {
    level: number;
    costItem: number;
    cost: number;
    upPower: number;
    addPower: number;
    bjRate: number;
    bjAddPower: number;
    attrAward: {
        type: number;
        value: number;
    }[];
    extAttrAward: {
        type: number;
        value: number;
    }[];
    judgeup: number;
    SpecialRingSkin: string;
}
/**
 * 烈焰戒指数据结构
 */
interface FireRingRole7Config {
    level: number;
    costItem: number;
    cost: number;
    upPower: number;
    addPower: number;
    bjRate: number;
    bjAddPower: number;
    attrAward: {
        type: number;
        value: number;
    }[];
    extAttrAward: {
        type: number;
        value: number;
    }[];
    judgeup: number;
    SpecialRingSkin: string;
    summonerSkillId: number;
    summonerAttr: {
        type: number;
        value: number;
    }[];
    freeSkillGrid: number;
    tollSkillGrid: number;
}
/**
 * 火焰戒指能力数据结构
 */
interface FireRingRoleAbilityConfig {
    id: number;
    ringLv: number;
    abilityName: string;
    abilityDesc: string;
    abilityIcon: string;
}
/**
 * 火焰戒指技能书配置
 */
interface FireRingRoleBookConfig {
    id: number;
    level: number;
    itemId: number;
    num: number;
    attr: {
        type: number;
        value: number;
    }[];
    bookAttrPer: {
        type: number;
        value: number;
    }[];
    skillName: string;
    skillDesc: string;
    skillIcon: string;
    exPower: number;
}
interface FireRingRoleComConfig {
    MaxOutNum: number[];
    actImbaId: number;
    upgrateItem: any[];
    upgrateSkillItem: any[];
}
/**
 * 特戒玩家系统配置
 */
interface FireRingRoleConfig {
    id: number;
    openDay: number;
    openVip: number;
    openYb: number;
    name: string;
    effid: number;
    explain: string;
    mtCombat: number;
    needLevel: number;
    needZs: number;
    monsterId: number;
    order: number;
    icon: string;
    avatarFileName: number;
    wexplain: string;
    openTask: TaskIdConfig[];
    useYb: number;
    skillGridYb: number;
    showMonsterLv: number;
}
interface FireRingRoleFubenConfig {
    freeCount: number;
    recPrice: {
        [key: number]: number;
    };
    vipCount: {
        [key: number]: number;
    };
    vipcost: number;
    item: number;
    reward: RewardVo[];
}
/**
 * 特戒特殊能力
 */
interface FireRingRoleItemConfig {
    rid: number;
    id: number;
    monId: number;
    attrPer: number;
    abilityName: string;
    abilityDesc: string;
    lv: number;
    itemId: number;
}
interface FlameMarkConfig {
    openLevel: number;
    skillId: number[];
    monsterId: number[];
    attrPillId: number;
    flyPillId: number;
    attrPill: any[];
    flyPillAttr: any[];
    flyPill: number;
}
interface FlameMarkEffectConfig {
    stamp: number;
    id: number;
    costCount: number;
    stampLevel: number;
    skillname: string;
    costItem: number;
    level: number;
    icon: string;
    skillId: number;
    effId: number;
    skillDesc: string;
    uiEff: string;
    reloadTime: number;
    selfEffId: number;
    bulletDamage: {
        a: number;
        b: number;
    };
    exPower: number;
}
interface FlameMarkLvConfig {
    attrs: {
        value: number;
        type: number;
    }[];
    exp: number;
    costItem: number;
    level: number;
    costCount: number;
    bulletDamage: {
        a: number;
        b: number;
    };
    bulletDesc: string;
    attrPill: number;
    flyPill: number;
}
interface FlameMarkMatConfig {
    exp: number;
    itemId: number;
    limitLv: number;
    costItem: number;
    costCount: number;
    mixDesc: string;
}
interface FocusAttackBaseConfig {
    actImbaId: number;
    TogExgRate: number;
    awakeAttrs: number[];
    awakeNames: string[];
    itemId: number[];
    needCount: number;
    openAwakeDay: number;
    openAwakeZsLv: number;
}
interface FocusAttackConfig {
    level: number;
    condition: any[];
    skill_id: number[];
}
interface FocusAttackExchangeConfig {
    id: number;
    exchangeMaterial: RewardVo[];
    exchangeAmount: number;
    getItem: any;
    level: number;
    zsLevel: number;
}
interface FocusAttackPageConfig {
    name: number;
    id: number[];
    icon: string;
}
interface FocusAttackPunchConfig {
    id: number;
    level: number;
    attr: {
        type: number;
        value: number;
    }[];
    exattr: {
        type: number;
        value: number;
    }[];
    cost: {
        id: number;
        count: number;
    };
}
interface FocusAttackPunchMasterConfig {
    level: number;
    attr: {
        type: number;
        value: number;
    }[];
    exattr: {
        type: number;
        value: number;
    }[];
    exPower: number;
}
interface FocusAttackQmConfig {
    num: number;
    lv: number;
    zslv: number;
    attr: any[];
    exAttr: any[];
    desc: string;
}
interface FocusAwakeHitLvConfig {
    id: number;
    attr: AttributeData[];
    cost: any;
    level: number;
}
interface FocusAwakeHitSuitConfig {
    attrs: AttributeData[];
    count: number;
    exattrs: AttributeData[];
    level: number;
    skillDes: string;
    skillValue: number;
    passive: number;
}
/**
 * 注灵配置
 */
interface ForgeAttrConfig {
    index: number;
    posId: number;
    level: number;
    attr: AttributeData[];
}
/**
 * 注灵消耗配置
 */
interface ForgeCostConfig {
    level: number;
    itemId: number;
    count: number;
    price: number;
}
interface FranchiseConfig {
    priviMoney: number;
    priviCardDays: number;
    rightDesc: string;
    addKuangCount: number;
    reduceKuangTime: number;
}
interface FreshManTitleConfig {
    chapter: number;
    id: number;
    img: string;
    level: number;
}
/**神兵基本配置*/
interface GodWeaponBaseConfig {
    weaponItemCount: number;
    openLevel: number[];
    zhuanshengLevel: number;
    godWeaponCount: number;
    buffId: number[];
    freeCount: number;
    fbGrade: number[];
    fubenItem: number;
    vipMoney: number[];
    buyBuff: {
        moneyCount: number;
        maxCount: number;
    }[];
    vipCount: number[];
    openDay: number;
    noticeSkillId: number[][];
    noticeDay: number;
    noticeOpenLv: number;
    skillResetCost: number;
    sweepDay: number;
    sweepZsLevel: number;
}
interface GodWeaponFubenConfig {
    fbId: number;
    award: RewardVo[][];
    firstAward: RewardVo[];
}
interface GodweaponItemConfig {
    id: number;
    attr: {
        value: number;
        type: number;
    }[];
    skill: number[];
    onlyOne: number;
}
interface GodWeaponLevelConfig {
    everyExp: number;
    exp: number;
    attr3: {
        value: number;
        type: number;
    }[];
    attr2: {
        value: number;
        type: number;
    }[];
    attr1: {
        value: number;
        type: number;
    }[];
}
interface GodWeaponLineConfig {
    attr: {
        value: number;
        type: number;
    }[];
    upLevel: number;
    maxLevel: number;
    skinId: number;
    skillName: string;
    iconId: number;
    lineId: number[];
    condition: {}[];
    skill: number;
    exattr: {
        value: number;
        type: number;
    }[];
    passiveskill: number;
    newskill: number;
    lockDesc: string;
    exPower: number;
}
interface GodWeaponTaskConfig {
    itemName: string;
    target: number;
    tips: string;
    param: number;
    desc: string;
    controlTarget: any[];
}
interface GuardWeaponGuardConfig {
    fbId: {}[];
    sSkillIcon: number[];
    gwMonPos: number[];
    fbMaxMon: number;
    opencondition: number[];
    starDelayRsf: number;
    sSkillCd: number[];
    sBossAward: {}[];
    showReward: {}[][];
    sSummonLimit: {}[];
    sSkillCost: number[];
    recoverCD: number;
    sSkillVal: {}[][];
    gwMonId: number;
    dailyCount: number;
    cBossAward: {}[];
    sSummonCost: number[];
    sBoss: {}[][];
    sSkillUseText: string[];
    UIshowDrop: any;
    UIshowDropNotice: string;
}
interface GuardWeaponWaveConfig {
    zsLvl: number;
    time: number;
    idx: number;
}
/**
 * 任务--成就配置
 */
interface GuideAchievementConfig {
    /** 索引 */
    index: number;
    /** 成就id */
    achievementId: number;
    /** 任务id */
    taskId: number;
    /** 任务显示对象类型 */
    showType: number;
    /** 成就目标 */
    target: number;
    /** 成就名字 */
    name: string;
    /** 成就描述 */
    desc: string;
    /** 成就奖励 */
    awardList: RewardVo[];
    /** 操作类型 */
    control: number;
    /** 操作对象 */
    controlTarget: number[];
    /** 成就类型 */
    achievementType: number;
    /** 成就积分 */
    score: number;
    /** 任务类型 */
    type: number;
    /** 成就长描述 */
    longdesc: string;
    /** 成就未完成提醒 **/
    startwarning: string;
    /** 成就完成提醒 **/
    finishwarning: string;
}
/**
 * 每日活跃度奖励配置
 */
interface GuideAwardConfig {
    /** 索引 */
    id: number;
    /** 要求活跃度 */
    valueLimit: number;
    /** 奖励列表 */
    awardList: RewardVo[];
}
/**
 * 每日任务配置
 */
interface GuideBasicConfig {
    /** 索引 */
    id: number;
    /** 任务名字 */
    name: string;
    /** 任务描述 */
    desc: string;
    /** 任务目标 */
    target: number;
    /** 活跃度奖励 */
    activeValue: number;
    /** 历练值奖励 */
    trainExp: number;
    /** 奖励列表 */
    awardList: RewardVo[];
    /** 操作类型 */
    control: number;
    /** 操作对象 */
    controlTarget: number[];
    level: number;
    redpoint: number;
    sort: number;
}
interface GuideConfig {
    guideId: number;
    stepId: number;
    type: number;
    start: any;
    overs: any[];
    view: string;
    target: string;
    tips: string;
    direction: number;
}
interface GuideLimitTimeConfig {
    id: number;
    time: number;
    openLevel: number;
    openZhuan: number;
    taskIds: number[];
}
interface GuideLimitTimeTaskConfig {
    id: number;
    name: string;
    desc: string;
    target: number;
    awardList: any[];
    control: number;
    controlTarget: any[];
}
/**
 * 心法基础配置
 */
interface HeartMethodBaseConfig {
    serverDay: number;
    zsLv: number;
    starMax: number;
    proShowList: {
        id: number;
        name: string;
        filter?: number;
    }[];
}
/**
 * 心法列表
 */
interface HeartMethodConfig {
    id: number;
    name: string;
    inside: string;
    pic: string;
    skillButton: string;
    posList: number[];
    icon: string;
    blankIcon: string[];
    splitItem: number;
    skillShowPic: string;
    openTips: string;
    openCondition: {
        day: number;
        zs: number;
    };
    upGradeCondition: number;
    posGainGuide: number;
    sort: number;
}
/**
 * 心法等级
 */
interface HeartMethodLevelConfig {
    id: number;
    level: number;
    attr: {
        type: number;
        value: number;
    }[];
    costItem: number;
    costNum: number;
    power: number;
}
/**
 * 心法部位
 */
interface HeartMethodPosConfig {
    pos: number;
    quality: number;
    star: number;
    posItem: number;
}
/**
 * 心法等阶
 */
interface HeartMethodStageConfig {
    id: number;
    stage: number;
    attr: {
        type: number;
        value: number;
    }[];
    normalCostTip: number;
}
/**
 * 升星和分解
 */
interface HeartMethodStarConfig {
    posItem: number;
    star: number;
    quality: number;
    posId: number;
    nextItem: number;
    attr: {
        type: number;
        value: number;
    }[];
    costItem: number;
    costNum: number;
    bigIcon: string;
    effect: string;
    power: number;
    splitNum: number;
    heartmethodId: number;
    posSort: number;
}
/**
 * 心法技能(跟所有部位最小品质挂钩的套装)
 */
interface HeartMethodSuitConfig {
    id: number;
    level: number;
    attr: {
        type: number;
        value: number;
    }[];
    power: number;
    skillname: string;
    skilldesc: string;
    inside: string;
}
/**
 * 传世基础配置表
 */
interface HeirloomEquipConfig {
    slot: number;
    lv: number;
    expend: {
        id: number;
        count: number;
    };
    attr: {
        type: number;
        value: number;
    }[];
    icon: number;
    name: string;
    image: string;
    model: string;
    skillicon: string;
    skillname: string;
    skilldesc: string;
    attr_add: number;
}
/**
 * 传世激活配置表
 */
interface HeirloomEquipFireConfig {
    slot: number;
    expend: {
        id: number;
        count: number;
    };
}
/**
 * 传世合成配置表
 */
interface HeirloomEquipItemConfig {
    pos: number;
    item: number;
    expend: {
        id: number;
        count: number;
    };
    downitem: {
        id: number;
        count: number;
    };
}
/**
 * 传世齐鸣配置表
 */
interface HeirloomEquipSetConfig {
    lv: number;
    attr: {
        type: number;
        value: number;
    }[];
    neff: string;
    weff: string;
    name: string;
}
interface HeirloomillusionConfig {
    attr: AttributeData[];
    dressName: string;
    eff: string;
    hlLv: number;
    id: number;
    itemid: number;
    openDay: number;
    zsLv: number;
    /**幻化等级 */
    changeHlLv: number;
}
interface HeirloomTreasureConfig {
    huntTenth: number;
    huntOnce: number;
    openDay: number;
    openZSlevel: number;
    freeCount: number;
    maxBlissVal: number;
    boxes: {
        id: number;
        type: number;
        count: number;
    }[];
    huntItem: number;
}
interface HeirloomTreasureRewardConfig {
    id: number;
    reward: {
        id: number;
        type: number;
        count: number;
    }[];
    needTime: number;
}
interface HelpInfoConfig {
    id: number;
    text: string;
}
interface HideBossConfig {
    bossId: number;
    rewardShow: number[];
}
interface InstanceBaseConfig {
    maxCheckPoint: number;
    asistOpen: any;
}
/**
 * 宝石等级配置
 */
interface IntensifyLevelConfig {
    index: number;
    posId: number;
    level: number;
    attr: AttributeData[];
}
/**
 * 宝石等级消耗
 */
interface IntensifyLevelCostConfig {
    level: number;
    stoneId: number;
    soulNum: number;
}
/**
 * 宝石开启等级
 */
interface IntensifyOpenConfig {
    posId: number;
    openLv: number;
}
interface InvestmentAfterConfig {
    payId: number;
    id: number;
    reward: RewardVo[];
}
interface InvestmentBaseConfig {
    LoginInvestMoneyId: number;
    LevelInvestMoneyId: number;
    afterLoginInvestMoneyId: any[];
    afterLoginServerDay: number;
    afterLoginServerDay1: number;
    afterLoginZhuansheng: number;
    afterLoginZhuansheng1: number;
    openDayBuyLevelInvest: number;
    openDayBuyLoginInvest: number;
    showReward: RewardVo[];
    showYB: RewardVo[];
    /**关卡投资开启时间 */
    chapterInvsetOpenTime: number;
    /**关卡投资持续时间 */
    chapterInvsetSustainTime: number;
    /**关卡投资条件 */
    chapterInvsetOpenzs: number;
    /**关卡 id */
    ChapterInvsetMoneyId: number;
}
interface InvestmentBtnConfig {
    type: number;
    icon: string;
    idOpenLimit: string;
    sort: number;
    title: number;
}
interface InvestmentChapterConfig {
    /**id */
    id: number;
    /**奖励 */
    reward: RewardVo[];
    /**关卡数 */
    chapter: number;
}
interface InvestmentLevelConfig {
    id: number;
    reward: RewardVo[];
    levelLimit: number;
    zsLevelLimit: number;
}
interface InvestmentLoginConfig {
    id: number;
    reward: RewardVo[];
    desc: string;
}
interface InviteRewardConfig {
    id: number;
    type: number;
    par: number;
    standard: number;
    reward: RewardVo[];
}
interface ItemComposeConfig {
    srcItemId: number;
    srcCount: number;
}
/**
 * ItemConfig
 */
interface ItemConfig {
    /**
     * 物品id(10开头的是装备)
     */
    id: number;
    /**
     * 描述索引
     */
    descIndex: number;
    /**
     * 图标
     */
    icon: number;
    /**
     * 限制等级
     */
    level: number;
    /**
     * 限制转生等级
     */
    zsLevel: number;
    /**
     * 物品名称
     */
    name: string;
    /**
     * 物品描述
     */
    desc: string;
    /**
     * 物品使用类型
     */
    useType: number;
    /**
     * 使用条件
     */
    useCond: number;
    /**
     * 需要元宝
     */
    needyuanbao: number;
    /**
     * 寻宝仓库类型 0装备 1战纹 2传世
     */
    bagType: number;
    /**
     * 1：物品不合并
     */
    split: number;
    /**
     * 自动使用
     */
    autoUse: number;
    /**
     * 排序
     */
    sort: number;
    /**
     * 使用参数
     */
    useArg: any;
    /**
     * 等级名称
     */
    lvName: string;
    /**
     * 阶级名称
     */
    bagLvName: string;
    /**
     * 光柱id
     */
    dropeff: number;
    isWay: number;
}
interface ItemDescConfig {
    eType: number;
    id: number;
    job: number;
    quality: number;
    subType: number;
    type: number;
}
/**
 * 物品礼包配置表
 */
interface ItemGiftConfig {
    id: number;
    type: number;
    awards: {
        id: number;
        type: number;
        count: number;
    }[];
}
interface ItemUseLimitConfig {
    id: number;
    uselimit: number[];
}
interface LadderInfoConstConfig {
    /**开启等级 */
    openLevel: number;
    /**挑战次数的cd */
    challengesCountCd: number;
    /**购买挑战次数元宝 */
    buyChallengesCountYuanBao: number;
    /**最大购买挑战次数 */
    maxBuyChallengesCount: number;
    /**最多恢复的挑战次数 */
    maxRestoreChallengesCount: number;
}
interface LadderInfoDanConfig {
    level: number;
    id: number;
    showStar: number;
    showDan: number;
    showLevel: string;
    winAward: RewardVo[];
    danAward: RewardVo[];
}
interface LadderInfoRankAwardConfig {
    award: RewardVo[];
    rank: number;
}
interface LeadFubenBaseConfig {
    BuyRebornCost: number;
}
interface LeaseLvConfig {
    eff: string;
    id: number;
    recharge: number;
    sort: number;
    yb: number;
    zhuangbanId: number;
}
interface LeaseRentBaConfig {
    afterNoBuyDay: number;
    closeTime: number[];
    desc: string;
    openDay: number;
    openLevel: number;
    rentTips: string;
}
interface LittleSystemBaseConfig {
    bookUpItem: number[];
    buyAllMonthCardId: number;
    equipUpItem: number[];
    heiloomUpItem: number[];
    holyUnfuseDay: number;
    refineUpItem: number[];
    tujianpfOpenId: number;
    vipreward64id: number;
}
interface MagicCirBaseConfig {
    aGainwayId: number;
    activatedImg: string;
    dcName: string;
    footEff: string;
    id: number;
    mainNameImg: string;
    mat: number;
    matCost: number;
    nameImg: string;
    pGainwayId: number;
    skillgroup: number[];
    talent: number;
    talentImg: string;
    talentName: string;
    tezhiAttrC: number[];
    winEff: string;
}
interface MagicCirConfig {
    defultShowId: number;
    enterItemId: number;
    enterMoney: number;
    expItemId: number;
    expPerItem: number;
    fbopenserverday: number;
    openserverday: number;
    openzhuanshenglv: number;
    skillCautionCount: number;
    taskCd: number;
    taskCount: number;
    taskFb: number;
    taskRate: number;
    uiShowDay: number;
}
interface MagicCirFbConfig {
    bosNameImg: string;
    bossModel: string;
    bossName: string;
    fbName: string;
    id: number;
    itemCount: number;
    scaleValue: number;
    showAward: RewardVo[];
    quitHint: string;
}
interface MagicCirLvConfig {
    attrs: AttributeData[];
    count: number;
    exp: number;
    id: number;
    level: number;
    skillPoint: number;
    talentLimit: number;
    expower: number;
}
interface MagicCirSkillConfig {
    id: number;
    attrColor: number;
    expower: number;
    attrId: number;
    attrMin: number;
    attrType: number;
    sectionId: number;
    skillDesc: string;
    skillIcon: string;
    skillName: string;
    skillType: number;
}
interface MagicCirSkillCostConfig {
    cost: any;
    countLimit: number;
    id: number;
    sections: number;
}
interface MagicCirSkillSectionConfig {
    attrAdd: number[][];
    countLimit: number;
    id: number;
    sections: number;
}
interface MagicCirTalentConfig {
    costCount: number;
    id: number;
    level: number;
    upgradeDesc: string;
    sysAttr: any;
    specialAttr: any;
}
interface MagicCirTaskConfig {
    controlTarget: any[];
    itemId: number;
    npcDialog1: string;
    npcDialog2: string;
    npcDialog3: string;
    npcDialog4: string;
    target: number;
    taskIdx: number;
    taskInfo1: string;
    taskInfo2: string;
    taskInfo3: string;
    taskInfo4: string;
    taskRequire1: string;
    taskRequire2: string;
    taskRequire3: string;
    taskRequire4: string;
}
interface MagicCirTeZhiConfig {
    attrs: any;
    dcMaxLv: number;
    dcMinLv: number;
    desc: string;
    icon: string;
    id: number;
    name: string;
    tezhiLv: number;
}
/**
 * 经脉零散配置
 */
interface MeridiansCommonConfig {
    openLevel: number;
    levelPerStage: number;
    stageMax: number;
    levelMax: number;
    levelItemid: number;
    levelItemidStage: number;
    levelItemChange: number;
    itemid: number;
}
/**
 * 经脉等级配置
 */
interface MeridiansLevelConfig {
    level: number;
    itemId: number;
    count: number;
    attr: AttributeData[];
}
/**
 * 经脉阶级配置
 */
interface MeridiansStageConfig {
    level: number;
    name: string;
    stage: number;
    attr: AttributeData[];
}
interface MineConfig {
    maxOpenKuangCount: number;
    maxKuangCount: number;
    openLevel: number;
    openServerDay: number;
    refreshItemId: number;
    maxRobCount: number;
    quickCost: number;
    refreshCost: number[];
    transPos: {
        y: number;
        x: number;
    }[];
    fubenId: number;
    kuangPos: {
        y: number;
        x: number;
        d: number;
    }[];
    maxBeRobCount: number;
    doubleCost: number;
    needItem: {
        id: number;
        count: number;
    };
    leftTime: number;
    oneKeyMaxLvCost: number;
    helpInfo: string;
    sendMsgCD: number;
}
interface MineSourceConfig {
    npcId: number;
    baseTime: number;
    id: number;
    rewards: RewardVo[];
    needTime: number;
    name: string;
    maxTimes: number;
    level: number;
    revengePrecent: number;
    robPrecent: number;
    rewardItem: RewardVo[];
    color: number;
}
interface MoneyConfig {
    id: number;
    name: string;
    describe: string;
}
interface MonstersConfig {
    id: number;
    /** 名字 */
    name: string;
    headName: string;
    /** 等级 */
    level: number;
    /** 血量 */
    hp: number;
    /** 攻击 */
    atk: number;
    /** 防御 */
    def: number;
    /** 法防 */
    res: number;
    /** 暴击 */
    crit: number;
    /** 抗暴 */
    tough: number;
    /** 攻击速度 */
    as: number;
    /** 移动速度 */
    ms: number;
    /** 形象文件名 */
    avatar: string;
    /** 头像 */
    head: string;
    /** 放大倍率 */
    scale: number;
    /** 怪物类型 */
    type: number;
    effect: number;
    attrange: number;
    dir: number;
    sound: string;
    dirNum: number;
    weapon: string;
    wing: string;
    body: string;
    createEff: any[];
    isHideBlood: any;
    titleId: number;
    wanderrange: number;
    wandertime: number;
}
/**怪物类型 */
declare const enum MonsterType {
    /**0-普通怪物 */
    Monster = 0,
    /**1-BOSS */
    Boss = 1,
    /**3-道士召唤怪 */
    Summon = 3,
    /**4-烈焰戒指 */
    Ring = 4,
    /**5-道士群狗 */
    Summon2 = 5,
    /**6-召唤怪 */
    SummonLead = 6,
    /**10-战将 */
    Warrior = 10,
}
declare const enum BornEffType {
    EFF = 1,
    SKILL_EFF = 2,
}
/**
 * 月签到累计签到奖励
 */
interface MonstershpConfig {
    avatar: string;
    hp: number;
    typeface: number;
}
interface MonsterSpeakConfig {
    speak: string;
}
interface MonthCardConfig {
    monthCardMoney: number;
    monthCardMoneyc: number;
    privilegeMoney: number;
    privilegeMoneyc: number;
    expFubenPrecent: number;
    neiGongGoldPrecent: number;
    sweepPrecent: number;
    cardrecharge: string;
    vipcardrecharge: string;
}
interface MythLevelConfig {
    attr: AttributeData[];
    costItem: number;
    costNum: number;
    firstName: string;
    level: number;
    percent: number;
    pos: number;
    tipsImg: string;
}
interface MythSuitConfig {
    attrs: AttributeData[];
    expower: number;
    iconImg: string;
    itemId: number[];
    level: number;
    name: string;
    percent: number;
}
interface NewWorldBossAttrConfig {
    attr: {
        value: number;
        type: number;
    }[];
    type: number;
    count: number;
}
interface NewWorldBossBaseConfig {
    fbId: number;
    clearCdCost: number;
    pvpbReward: RewardVo[];
    pvpbSt: number;
    bossTime: number;
    pvpaReward: RewardVo[];
    pvpaSt: number;
    showAwards: RewardVo[];
    showDrows: RewardVo[];
    openLv: number;
    openSevDay: any;
}
interface NewWorldBossRankConfig {
    reward: RewardVo[];
}
interface NpcBaseConfig {
    controlTarget: any[];
    name: string;
    avatar: string;
    id: number;
    level: number;
    title: string;
    actType: number;
    weapon: string;
    action: string;
    icon: string;
    headIcon: string;
    bust: string;
    isLoopTask: number;
}
interface NpcTinyConfig {
    level: number;
    npc: any;
    openTimeGt: any;
    pfIdLimit: any;
    pfIdOpenLimit: any;
}
interface OfficeBaseConfig {
    openDay: number;
    zsLevel: number;
}
interface OfficeDayAwardConfig {
    award: RewardVo[];
    levelName: string;
    stage: number;
}
interface OfficeLevelConfig {
    attr: AttributeData[];
    idx: number;
    job: number;
    level: number;
    stage: number;
    costId: number;
    costCount: number;
    title: number;
}
interface OnlineQuizBaseConfig {
    answerLimit: number;
    answerTime: number;
    closeTime: number;
    highMailId: number;
    highNoticeId: number;
    lowMailId: number;
    midMailId: number;
    noneNoticeId: number;
    openChapter: number;
    openDay: number;
    openLv: number;
    openTime: number;
    openTimeGt: any;
    pfIdLimit: any;
    openTimeLt: any;
    pfIdOpenLimit: any;
    quizRewards: any;
    refreshTime: number;
    topRank: number;
}
interface OnlineQuizQuestionsConfig {
    answerId: number;
    options: any;
    question: string;
    questionId: number;
}
interface OpenSystemConfig {
    /**功能ID*/
    id: number;
    /**开启转数*/
    openzs: number;
    /**开启等级*/
    openlevel: number;
    /**开启关卡*/
    opencheck: number;
    /**开启充值*/
    recharge: number;
    /**
     * 1条件判断
     * 0功能关闭
     */
    judge: number;
    /**
     * 1小于等于前边限制条件
     * 0大于等于前边限制条件
     */
    than: number;
    /**功能名称*/
    funName: string;
    /**开启天数*/
    openday: number;
}
interface OptionalGiftConfig {
    itemid: number;
    options: {
        itemcount: number;
        level: number;
        itemid: number;
        zslimit: number;
    }[];
    show: {
        id: number;
        str: string;
        reward: {
            id: number;
            type: number;
            count: number;
        }[];
    }[];
}
/**
 * 个人活动类型1
 */
interface PAmusement1Config extends Amusement1Config {
}
/**
 * 活动类型2 限购
 */
interface PAmusement2Config {
    Id: number;
    index: number;
    vip: number;
    needRecharge: number;
    /**货币类型 2元宝 1金币 */
    currencyType: number;
    originalPrice: number;
    price: number;
    count: number;
    rewards: RewardVo[];
    countReward: {
        count: number;
        reward: RewardVo[];
    }[];
    discount: number;
    source: string[];
    showType: number;
    scount: number;
    limitTime: Array<Number>;
    shamScount: number;
    shamScountLimit: any;
    shamScountRed: string;
    giftName: string;
}
/**
 * 个人活动类型3
 */
interface PAmusement3Config {
    Id: number;
    index: number;
    type: number;
    day: number;
    val: number;
    rewards: RewardVo[];
    showType: number;
    activityID: number[];
}
/**
 * 个人活动类型9
 */
interface PAmusement9Config extends Amusement9Config {
}
interface PAmusementBtnConfig {
    type: number;
    sort: number;
    acTime: string;
    id: number;
    acDesc: string;
    icon: string;
    title: string;
    light: number;
    timeType: number;
    startTime: string;
    endTime: string;
    showType: number;
    activityType: number;
    showReward: {
        type: number;
        id: number;
        count: number;
    }[];
    hfTimes: number;
    pageType: number;
    relyOn: number[];
    pageSkin: string;
    jump: any;
    titleName: string;
    redPoint: number;
    listItem: string[];
}
interface PAmusementConfig {
    Id: number;
    lv: number;
    zslv: number;
    chapter: number;
    clgLv: number;
    activityType: number;
    openType: number;
    duration: number;
    tabName: string;
    desc: string;
    pageSkin: string;
    pageType: number;
    endZslv: number;
    helpInfo: number;
}
interface PartnerLimitConfig {
    /**开启等级限制 */
    sysLv: number;
    /**私聊等级限制 */
    chatLv: number;
    /**好友列表长度限制 */
    friendListLen: number;
    /**最近联系人列表长度限制 */
    chatsListLen: number;
    /**好友申请列表长度限制 */
    applyListLen: number;
    /**黑名单列表长度限制 */
    blacklistLen: number;
    /**内容长度限制 */
    contentLimit: number;
    addFriendLv: number;
    blackListLv: number;
}
interface PayInfoConfig {
    id: number;
    cash: number;
    name: string;
    num: number;
    vipexp: number;
}
interface PeakRaceBaseConfig {
    openDay: number;
    winMail: number;
    crossWinMail: number;
    likeScore: number;
    openTime: string;
    needZsLv: number;
    promInterval: number;
    crossRelTime: number;
    /**最高点赞次数 */
    likeCount: number;
    /**淘汰赛输多少场出局 */
    signUpLose: number;
    /**淘汰赛间隔多少时间（秒） */
    KnockOutTime: number;
    /**巅峰商城兑换需要的道具 */
    exchangeItems: number[];
    /**赢多少场晋级 */
    promWin: number;
    /**单服赛奖励展示 */
    singleRewards: RewardVo[];
    /**跨服赛奖励展示 */
    croosRewards: RewardVo[];
    /**跨服间隔时间 天数 */
    interval: number;
    /**每日最大膜拜次数 */
    mobaiNum: number;
    /**每次膜拜增加筹码 */
    mobaiChips: number;
}
interface PeakRaceCrossTimeConfig {
    status: number;
    relTime: number;
    loseMail: number;
    maxBett: number;
}
interface PeakRaceTimeConfig {
    status: number;
    relTime: number;
    loseMail: number;
    maxBett: number;
}
interface PieceConfig {
    id: number;
    index: number;
    openDay: number;
    openLv: number;
    openZs: number;
    btn_name: string;
    lv: number;
    sort: number;
}
interface PieceTotalConfig {
    id: number;
    type: number;
    openLv: number;
    openZs: number;
    btn_source: string;
    sort: number;
}
interface PortalConfig {
    id: number;
    cls: string;
    pos: number;
    layer: number;
    sort: number;
    iconCls: string;
    iconSkin: string;
    icon: string;
    iconParam: any;
    noMove: number;
    imgData: any;
    activityParam: any;
}
interface PrestigeBaseConfig {
    recycle: string;
    openLevel: number;
    cost: number;
    skillTips: string[];
    topThree: {
        des: string;
        res: string;
    }[];
    openDay: number;
    rankDeterDam: number[];
    normalDeterDam: number;
}
interface PrestigeLevelConfig {
    attr: {
        value: number;
        type: number;
    }[];
    name: string;
    exp: number;
    level: number;
    res: string;
    retrieve: number;
}
/**
 * 提示配置表
 */
interface PromptConfig {
    index: number;
    type: number;
    targetType: number;
    target: any[];
    image: string;
}
interface PropsGainConfig {
    itemId: number;
    gainWay: any;
}
interface RambleConstConfig {
    crossShieldListSize: number;
    emojiMax: number;
    helpCdTime: number;
    helpInfo: string;
    helpTime: number;
    limitZsLv: number;
    openEmojiDay: number;
    openEmojiLevel: number;
    openLevel: any[];
    openLevelByPf: any[];
}
interface RambleEmojiConfig {
    emojiId: string;
    height: number;
    id: number;
    scale: number;
    width: number;
}
interface Recharge1Config {
    type: number;
    day: number;
    awardList: {
        id: number;
        type: number;
        count: number;
    }[][];
    pay: number;
    index: number;
}
interface Recharge2Config {
    type: number;
    day: number;
    openType: number;
    awardList: {
        id: number;
        type: number;
        count: number;
    }[];
    pay: number;
    index: number;
}
interface RechargeDailyConfig {
    awards: RewardVo[];
    bigReward: RewardVo;
    id: number;
    price: number;
    sum: number;
}
interface RechargeDaysAwardsConfig {
    id: number;
    awardList: RewardVo[];
    bigReward: number;
    sum: number;
    recharge: number;
}
interface RechargeDaysAwardssConfig {
    id: number;
    awardList: RewardVo[];
    bigReward: number;
    sum: number;
    recharge: number;
}
/**
 * 首冲展示配置
 */
interface RechargeFirstClientConfig {
    job: number;
    weaponshow: string;
    bodyshow: string;
    RechargeRewardData: PayRewardVo[];
}
/**
 * 首充配置表
 */
interface RechargeFirstConfig {
    pay: number;
    payReturn: number;
    paydesc: string;
    showOther: string;
}
interface RechargeFlashSaleConfig {
    id: number;
    payId: number;
    day: number;
    awardList: RewardVo[];
    avatar: string;
    showPower: number;
    showTitle: string;
    showPrice: number;
    itemName: string;
    pictype: number;
    offsetY: number;
}
interface RechargeHappyConfig {
    id: number;
    val: number;
    rewards: RewardVo[];
    cash: any;
}
interface RechargeItemsConfig {
    itemName: number;
    cash: number;
    amount: number;
    id: number;
    award: number;
    icon: string;
    desc: string;
}
interface RechargeLoopConfig {
    awardList: RewardVo[];
    pay: number;
    day: number;
    index: number;
}
interface RechargeMultiDayConfig {
    id: number;
    num: number;
    awardList: RewardVo[][];
}
interface RechargeOneConfig {
    id: number;
    cash: number;
    payIndex: number;
    itemName: string;
    rewards: RewardVo[];
}
interface RechargePointConfig {
    /**平台id */
    pfid: number;
    /**系统 */
    os: string;
    /**包名 */
    packageName: string;
    /**档位id */
    itemId: any;
    /**计费点id */
    productId: string;
}
interface RechargeQuadrupleItemsConfig {
    itemName: number;
    cash: number;
    amount: number;
    id: number;
    award: number;
    icon: string;
    desc: string;
}
interface RechargeServiceConfig {
    awardList: RewardVo[];
    pay: number;
    day: number;
    index: number;
}
/**
 * 强化配置
 */
interface RefineAttrConfig {
    index: number;
    posId: number;
    level: number;
    attr: AttributeData[];
}
/**
 * 强化消耗配置
 */
interface RefineCostConfig {
    level: number;
    stoneId: number;
    stoneNum: number;
}
declare class RegressionConfig {
    leaveday: number;
    leaveReward: any;
}
interface ReincarnateConfig {
    /** 开始等级 */
    level: number;
    /** 普通提升道具 */
    normalItem: number;
    /** 普通提升道具经验 */
    normalExp: number;
    /** 普通提升每日次数 */
    normalCount: number;
    /** 高级提升道具 */
    advanceItem: number;
    /** 高级提升道具经验 */
    advanceExp: number;
    /** 高级提升每日次数 */
    advanceCount: number;
    /** 经验转化率 */
    conversionRate: number;
    /** 经验提升次数 */
    conversionCount: number;
    /** 转数开放天数 */
    openDay: number[];
    /** 基础最大转数(过渡值) */
    baseMaxZsLv: number;
}
interface ReincarnateExpConfig {
    level: number;
    exp: number;
}
interface ReincarnateLevelConfig {
    /** 等级 */
    level: number;
    /** 升到该级需要经验 */
    exp: number;
    /** 生命 */
    hp: number;
    /** 攻击 */
    atk: number;
    /** 物防 */
    def: number;
    /** 法防 */
    res: number;
}
interface ReincarnateStarStepBsConfig {
    bodyEff: string[];
    equipCount: number;
    levelName: string[];
    material: number[];
    maxLv: number;
    openDay: number;
    openLevel: number;
    posChange: number[];
    posNameImg: string[];
    posPanelRes: string[];
    posRes: string[];
    posScale: number[];
    slotIcon: string[][];
    slotLevelLimitDay: number;
    slotName: string[];
    soulLimitDay: number;
    soulLimitLevel: number[];
    soulLvTag: string[];
    soulPrefix: string[];
    suitChangeDay: number;
    weaponEff: string[];
}
interface ReincarnateStarStepComConfig {
    level: number;
    material: any;
    muben: any;
    pos: number;
    targetId: number;
    wearId: number;
}
interface ReincarnateStarStepConfig {
    Id: number;
    attr: AttributeData[];
    frameEff: string;
    slot: number;
    star: number;
    exPower: number;
    lineEff: string;
    ex_attr: any;
}
interface ReincarnateStarStepLinLvConfig {
    addPrecent: any[];
    attrs: AttributeData[][];
    chainDesc: string[];
    firstSlot: number;
    level: number;
    secondSlot: number;
    skillReviseId: number[][];
}
interface ReincarnateStarStepSlotLvConfig {
    attrs: AttributeData[];
    index: number;
    level: number;
    materialInfo: any;
    slot: number;
}
interface ReincarnateStarStepSoConConfig {
    condition: any[];
    index: number;
    slot: number;
}
interface ReincarnateStarStepSoLvConfig {
    addPrecent: number;
    addBasePrecent: any;
    attrs: AttributeData[];
    level: number;
    materialInfo: any;
    passiveSkillDesc: string;
    passiveSkillIcon: string;
    passiveSkillId: number[];
    passiveSkillName: string;
    slot: number;
    ex_power: number;
}
interface ReincarnateStarStepSoSumConfig {
    addSlotPrecent: number;
    slot: number;
    totalLevel: number;
}
interface ReincarnateStarStepSuitConfig {
    baseAttrs: AttributeData[];
    exAttrs: AttributeData[];
    ex_attrs: AttributeData[];
    num: number;
    star: number;
    masterEquipPre: number;
    thunderEquipPre: number;
    zhizunEquipPre: number;
    darkEquipPre: number;
    ex_power: number;
    total_power: number;
}
interface ReincarnateStarStepZsLvConfig {
    attrs: AttributeData[];
    desc: any;
    exp: number;
    level: number;
    point: any;
    pos: number;
    starLv: number;
    zsLevel: number;
    skip: any;
    equipSkip: any;
}
interface ReincarnationBaseConfig {
    normalItem: any;
    advanceItem: any;
    openLevel: number;
    levelExchangeTimes: number;
    levelLimit: number;
    hellsLv: number[];
    hellsName: string;
    animalsLv: number[];
    animalsName: string;
    humansName: string;
    state: string[];
    demigodsLv: number[];
    godsName: string;
    ghostsName: string;
    ghostsLv: number[];
    demigodsName: string;
    humansLv: number[];
    godsLv: number[];
    headName: string[];
    equipsList: number[][];
}
interface ReincarnationDemonLvConfig {
    precent: number;
    level: number;
    slot: number;
}
interface ReincarnationEqComConfig {
    id: number;
    material: RewardVo;
    distinguishi: number;
}
interface ReincarnationEquipConfig {
    atk: number;
    def: number;
    id: number;
    res: number;
    hp: number;
}
interface ReincarnationExConfig {
    value: number;
    Level: number;
}
interface ReincarnationLevelConfig {
    attrs: AttributeData[];
    consume: number;
    level: number;
    openDay: number;
}
interface ReincarnationLinkLvConfig {
    firstSlot: number;
    secondSlot: number;
    level: number;
    attrs: AttributeData[];
}
interface ReincarnationSoulLvConfig {
    attrs: {
        value: number;
        type: number;
    }[];
    slot: number;
    materialInfo: {
        id: number;
        count: number;
    };
    job: number;
    ex_attrs: {
        value: number;
        type: number;
    }[];
    ex_power: number;
    level: number;
    soulLinkLevel: number;
    demonLevel: number;
}
interface ReincarnationSpiritConfig {
    attrs: AttributeData[];
    exAttrs: AttributeData[];
    level: number;
    consume: number;
    precent: number;
    slot: number;
}
interface ReincarnationSuitConfig {
    level: number;
    attrs: AttributeData[];
    exAttrs: AttributeData[];
    ex_power: number;
}
interface RoleCreateConfig {
    id: number;
    job: number;
    sex: number[];
    screate: number;
}
interface RoleExpConfig {
    /** 等级 */
    level: number;
    /** 升级需求经验 */
    exp: number;
}
/**
 * NewRoleConfig
 */
interface RoleNewConfig {
    index: number;
    level: number;
    zsLevel: number;
    vip: number;
    firstrecharge: number;
}
interface RoleTitleConfig {
    zsLevel: number;
    index: number;
    openpf: string;
    openFun: number;
    level: number;
    title: string;
    vip: number;
}
/**熔炉熔炉属性 */
interface RongLuExpConfig {
    id: number;
    exp: number;
    reward: RewardVo[];
}
/**
 * 战纹配置
 */
interface RuneBaseConfig {
    /**ID */
    id: number;
    /**类型 */
    type: number;
    /**升级消耗数量 */
    expend: number;
    /**分解产出数量 */
    gain: number;
    /**分解产出碎片数量 */
    chip: number;
    /**普通属性集 */
    attr: AttributeData[];
    equipAttr: AttributeData[];
    exAttr: AttributeData[];
    specialAttr: AttributeData[];
    /**特殊-描述 */
    specialDesc: string;
    /**战力 */
    power: number;
    /**分解获得精金的个数 */
    goldCount: number;
}
/**
 * 战纹合成配置
 */
interface RuneComposeConfig {
    id: number;
    material: number[];
    count: number;
    mixId: number[];
    checkMaterial: number[];
}
interface RuneConverConfig {
    id: number;
    checkpoint: number;
    conversion: number;
}
/**
 * 战纹解锁配置
 */
interface RuneLockPosConfig {
    /**位置 */
    pos: number;
    /**解锁等级 */
    lockLv: number;
}
/**
 * 战纹名字配置
 */
interface RuneNameConfig {
    /**类型 */
    type: number;
    /**战纹名字 */
    runeName: string;
    runeName2: string;
}
/**
 * 战纹其他配置
 */
interface RuneOtherConfig {
    /**开启等级 */
    zsLevel: number;
    /**身上能装备的最大战纹数量 */
    maxEquip: number;
    /**最大品质 */
    maxQuality: number;
    /**最大分解个数(作废) */
    maxDecompose: number;
    /** 合成材料*/
    goldItemId: number;
}
interface ScenesConfig {
    /** 场景id */
    sceneid: number;
    /** 场景文件名字 */
    mapfilename: string;
    x: number;
    y: number;
    bossX: number;
    bossY: number;
    turn: number;
    npc: {
        id: number;
        x: number;
        d: number;
        y: number;
    }[];
    area: {
        attr: {
            type: number;
            iparm: number[];
        }[];
        grids: {
            y: number;
            x: number;
        }[];
    }[];
    effPos: {
        pos: XY[];
        eff: string;
        type: number;
    }[];
    hideBodyEff: number;
    autoPunch: number;
    filename: any;
    bodyDir: number;
    helpBtn: number;
    maxShowNum: number;
    insteadNpc: any;
}
interface SDKConfig {
    shareCount: number;
    shareReward: {
        id: number;
        type: number;
        count: number;
    }[];
    shareInterval: number;
    identficateReward: {
        id: number;
        type: number;
        count: number;
    }[];
    defendRewardReward: any;
}
interface ServerEenemyBaseConfig {
    assistAward: any;
    assistAwardCount: number;
    assistMsgTime: number;
    enemyAward: any;
    enemyAwardCount: number;
    fbId: number;
    helpInfo: any;
    maxEnemyCount: number;
    msgCd: number;
    msgInfo: any;
    openDay: number;
    openZsLevel: number;
}
/**
 * 服务器提示
 */
interface ServerTipsConfig {
    id: number;
    tips: string;
}
interface SevenDayBasicConfig {
    maxDay: number;
    pageSkin: string;
}
/**
 * 七天登录奖励配置
 */
interface SevenDayConfig {
    bg: string;
    /** 天数 */
    day: number;
    /** 奖励列表 */
    rewards: RewardVo[];
    icon: string;
    displayItemIcon: string;
    displayItemName: string;
    itemName: string;
    rewardsLimit: RewardVo[];
    rewardsLimit64: RewardVo[];
}
interface ShareConfig {
    intervalCD: number;
    dailyShareLimit: number;
    level: number;
    inviteGoldRatio: string;
    inviteVipRatio: string;
}
interface ShareCumulativeConfig {
    id: number;
    count: number;
    reward: RewardVo[];
}
interface ShareDailyConfig {
    id: number;
    count: number;
    reward: RewardVo[];
}
/**
 * 每日签到配置
 */
interface SignInConfig {
    month: number;
    day: number;
    rewards: RewardVo[];
    dayLabel: number;
    vipLabel: number;
}
/**
 * 月签到累计签到奖励
 */
interface SignInDaysConfig {
    days: number;
    rewards: RewardVo[];
}
/**
 * 每日签到VIP权限配置
 */
interface SignInVipConfig {
    vipLevel: number;
    complementTimes: number;
}
interface SkillsCommonReviseConfig {
    skill: number;
    a: number;
    b: number;
    cd: number;
    crit: number;
    critDamage: number;
    affectCount: number;
    oneDamPre: number;
    oneDamCd: number;
    penetrate: number;
    castRange: number;
    selfEff: any;
    targetEff: any;
    args: any;
}
/**
 * SkillsConfig
 */
interface SkillsConfig {
    id: number;
    /** 被动技能参数 */
    passive: {
        rate: number;
        cond: number;
        p1: number;
    };
    /** 描述id */
    desc: number;
    /** 描述扩展数字 */
    desc_ex: number[];
    /**
     * 施法目标类型
     * 1、友方
     * 2、敌方
     * 3、自己
     */
    castType: number;
    /**
     * 作用目标类型
     * 1、友方
     * 2、敌方
     */
    targetType: number;
    /**
     * 作用范围大小
     * 按格子
     * 0、单攻
     * 1、目标周围1格
     */
    affectRange: number;
    /** 最大作用个数 */
    affectCount: number;
    /**
     * 伤害计算类型
     * 0、没有伤害
     * 1、造成伤害
     * 2、加血
     */
    calcType: number;
    /**
     * 参数列表
     */
    args: {
        b: number;
        a: number;
        c: number;
    };
    /**
     * 目标附加效果
     */
    tarEff: number[];
    /**
     * 次要目标附加效果 对人物有效
     */
    otarEff: number[];
    /**
     * 自身附加效果
     */
    selfEff: number[];
    /** 自身是否位移（0否1是） */
    teleport: number;
    /** 附加击退（距离） */
    repelDistance: number;
    /** 特效播放类型 */
    effType: number;
    /**关联其他技能*/
    otherSkills: any[];
    /**死亡召唤*/
    die_summoner: number[];
    ex_summoner: number[];
    random_summoner: any;
    esEff: number[];
}
interface SkillsDescConfig {
    name: string;
    desc: string;
    cd: number;
    effectId: number;
    actionType: string;
    wordEff: string;
    castRange: number;
    sound: string;
    /** 对怪物伤害减少比例 */
    herdMonRate: number;
    /** 对玩家伤害减少比例 */
    herdPlayerRate: number;
}
/**
 * 技能效果配置
 */
interface SkillsEffectsConfig {
    id: number;
    /** 是否增益 */
    isBuff: number;
    /**
     * 效果类型
     * 1 附加伤害 {a=系数,t=施法者属性类型,b=附加值}
     * 2 加血 {a=系数,t=施法者属性类型,b=附加值}
     * 3 附加属性 {a=系数,t1=施法者属性类型,b=附加值, t2=附加属性类型}
     * 4 附加状态
     * 5 召唤 {怪物1id,怪物2id，怪物3id…}
     */
    type: SkillEffType;
    /** 效果参数 */
    args: {
        a: number;
        b: number;
        c: number;
        d: number;
        i: number;
    };
    /** 持续时间（毫秒）*/
    duration: number;
    /** 作用间隔（毫秒）*/
    interval: number;
    /**
     * 叠加类型
     * id相同时的叠加类型：
     * 0,不叠加，替换
     * 1，时间延长
     * 2，独立计算
     * 3，刷新并延长（没必要且不想做）
     */
    overlayType: number;
    overMaxCount: number;
    /** 分组类型(分组相同的会替换) */
    group: number;
    effType: number;
    /** 特效名字 */
    effName: string;
    /** 开头特效id */
    effID: number;
    unionBuff: number;
    probabilityBuff: number;
    skillEffId: string;
    actionType: string;
}
declare const enum EffectsID {
    MB = 1,
    HUSHENG = 2,
    BOSS_EFF1 = 3,
    BOSS_EFF2 = 4,
    BOSS_EFF3 = 5,
    HIT_DOWN = 6,
    TUTENG_SKILL = 7,
}
interface SkillsGWReviseConfig {
    targetEff: number[];
    gwIndex: number;
    skill: number;
    desc: string;
    d: number;
    a: number;
    b: number;
    selfEff: number[];
    args: {
        vals: number[];
        type: number;
    }[];
    critDamage: number;
    affectCount: number;
    crit: number;
    cd: number;
}
interface SkillShowConfig {
    entitys: any[];
    id: number;
    interval: number;
    upWords: any[];
}
interface SkillsImbaReviseConfig {
    id: number;
    skill: number;
    imba_id: number;
    a: number;
    b: number;
    cd: number;
    d: number;
    crit: number;
    affectCount: number;
    selfEff: any;
    targetEff: any;
    args: any;
}
/**
 * 技能开启等级配置
 */
interface SkillsOpenConfig {
    level: number;
    index: number;
}
interface SkillsSorderConfig {
    job: number;
    skillorder: number[];
}
/**
 * 升级技能配置
 */
interface SkillsUpgradeConfig {
    level: number;
    cost: number;
}
/**
 * 遭遇战常量配置
 */
interface SkirmishBaseConfig {
    refreshCost: number;
    openLevel: number;
    listSize: number;
    subPkvalCost: number;
    subPkval: number;
    onesPkval: number;
    maxPkval: number;
    range: number;
}
/**
 * 遭遇战排行
 */
interface SkirmishRankConfig {
    minRank: number;
    maxRank: number;
    rewards: RewardVo;
}
/**
 * 遭遇战奖励配置
 */
interface SkirmishRewardConfig {
    level: number;
    rewards: {
        gold: number;
        exp: number;
        essence: number;
    };
}
/**
 * 魂骨基础配置
 */
interface SoulBoneConfig {
    openzhuanshenglv: number;
    openserverday: number;
    showzhuanshenglv: number;
    equipCount: number;
    hunyuCount: number;
    suit: any;
    hunyuType: any;
    unlockCost: any;
    gainItemId: number;
    canFenjieItem: number[];
    hunguName: string[];
    suitName: any;
    /** 魂兽副本每天奖励次数 */
    dayRewardCount: number;
    /** 魂兽副本 扫荡开启关卡 */
    sweepLayer: number;
    /** 魂兽副本 开启天数（开服第几天开启） */
    fbOpenDay: number;
    /** 魂兽副本开启转生等级 */
    needZsLv: number;
    /** 提前展示魂兽副本页签转生等级限制 */
    showZsLv: number;
    /** 基础id */
    baseequipid: number[];
    zhuanyizslevel: number;
    zhuanyiday: number;
}
interface SoulBoneCopyConfig {
    idx: number;
    fbId: number;
    award: RewardVo[];
    pic: string;
    zsLevelLimit: number;
    monster: number;
    fbName: string;
}
/**
 * 魂骨装备配置
 */
interface SoulBoneEquipConfig {
    id: number;
    stage: number;
    attrs: {
        type: number;
        value: number;
    }[];
    expower: number;
    hunyuNum: number;
    addStageCost: {
        type: number;
        id: number;
        count: number;
    }[];
    nextId: number;
}
/**
 * 魂玉配置
 */
interface SoulBoneJadeEquipConfig {
    id: number;
    level: number;
    cost: {
        type: number;
        id: number;
        count: number;
    };
    attrs: {
        type: number;
        value: number;
    }[];
    expower: number;
    icon: string;
    name: string;
}
/**
 * 魂骨套装配置
 */
interface SoulBoneSuitConfig {
    id: number;
    count: number;
    stage: number;
    attrs: {
        type: number;
        value: number;
    }[];
    expower: number;
    specialAttrs: number;
    dec: string;
    effectId: number;
}
/**
 * 特殊装备过滤规则表
 */
interface SpecialEquipsConfig {
    id: number;
    style: number;
}
declare const enum FitleStyle {
    fj = 1,
    hc = 2,
}
interface SpokesPersonBaseConfig {
    openTimeGt: any;
    pfIdLimit: any;
    pfIdOpenLimit: any;
    talkTweenTime: number;
}
interface SpokesPersonDyrBaseConfig {
    dailyRewards: RewardVo[];
    openTimeGt: any;
    pfIdLimit: any;
    pfIdOpenLimit: any;
}
interface SpokesPersonHourBaseConfig {
    acceptTime: number;
    finishTime: number;
    firstTask: any;
    interface: any;
    intervalTime: number;
    level: number;
    openDay: number;
    openTimeGt: any;
    pfIdLimit: any;
    pfIdOpenLimit: any;
    tasknum: number;
}
interface SpokesPersonLevelPartConfig {
    controlTarget: any;
    db: number;
    desc: string;
    id: number;
    param: number;
    target: number;
    type: number;
    odfinish: number;
    zsfinish: number;
}
interface SpokesPersonLevelRewardsConfig {
    bigAward: RewardVo;
    bigAwardDesc: string;
    bigAwardRes: string;
    id: number;
    ids: number[];
    lv: number;
    npcTalk: string[];
    rewards: RewardVo[];
    title: string;
}
interface SpokesPersonLotteryAwardConfig {
    idx: number;
    lotteryType: number;
    itemIdx: number;
    award: RewardVo;
    openDay: number;
}
interface SpokesPersonLotteryBaseConfig {
    costItem: number;
    dabiao: any[];
    hightCount: number;
    level: number;
    openTimeGt: any;
    pfIdLimit: any;
    pfIdOpenLimit: any;
    turntableName: string;
}
interface SpokesPersonOpenConfig {
    cls: string;
    iconRes: string;
    data: any;
    id: number;
    sort: number;
    open: number;
}
interface SpokesPersonSmeltBaseConfig {
    maxShowLogs: number;
    maxShowLogsTips: number;
    openTimeGt: any;
    pfIdOpenLimit: any;
    pfIdLimit: any;
    openTimeLt: any;
    smeltLog: string;
}
interface SpokesPersonTaskListConfig {
    award: RewardVo[];
    desc: string;
    goto: any;
    idx: number;
    key: number;
    param: number;
    target: number;
    type: number;
    entertext: any;
    failtext: any;
    suctext: any;
    npcID: number;
    npctalking: any;
    targetPos: any;
    pos: any;
}
interface StarSunBaseConfig {
    zsLv: number;
    serverDay: number;
    starInfo: string[][];
}
interface StarSunLvConfig {
    id: number;
    attr: AttributeData[];
    per: number;
    level: number;
    costNum: number;
    costItem: number;
    expower: number;
}
interface StoreCommonConfig {
    IntegralProportion: number;
    diamondsNum: number;
    heirloom: number;
    /** 次数上限 */
    refreshLimit: number;
    /** 刷新CD */
    refreshCd: number;
    /** 刷新元宝数 */
    refreshYuanBao: number;
    /** 刷新积分 */
    refreshIntegral: number;
    /** 神秘商店刷新道具 **/
    refreshItem: number;
    treasureOpenDay: number;
    treasureZsLv: number;
    weekStoreCount: number[];
    /**天域宝库购买 */
    heirloomBug: number[];
}
/** 功勋商店配置 */
interface StoreConfig {
    index: number;
    /**1货币商店 2道具商店*/
    shopType: number;
    goods: RewardVo[];
    /**
     * 1每日限购 2不限次数 3永久限购
     */
    buyType: number;
    costMoney: {
        type: number;
        count: number;
    };
    daycount: number;
    costItem: RewardVo;
    use: string;
    exchangeCount: number;
}
interface StoreEquipItemConfig {
    id: number;
    use: string;
    count: number;
    itemId: number;
    discountImg: string;
}
interface StoreIntegralConfig {
    index: number;
    type: number;
    itemId: number;
    count: number;
    price: number;
    integral: number;
    showYuanBao: number;
    use: string;
}
/**
 * 道具商店配置
 */
interface StoreItemConfig {
    index: number;
    id: number;
    itemId: number;
    use: string;
    price: number;
    vipLimit: number[];
    viplv: number;
}
interface StoreTreasureDecomConfig {
    award: any;
    check: any;
    isshow: number;
    itemId: number;
}
/**商城极品预览配置*/
interface StoreTreasureOverConfig {
    id: number;
    itemId: {
        type: number;
        id: number;
        count: number;
    };
}
interface StoreWeekConfig {
    discount: number;
    index: number;
    itemId: number;
    limitCount: number;
    moneyType: number;
    openDay: number;
    price: number;
    storeType: number;
    vip: number;
    pro: number;
}
interface SummonBossConfig {
    id: number;
    levelLimit: number;
    itemId: number;
    challengeTime: number[];
    show: RewardVo[];
    titledes: string;
}
interface SuperVipbaseConfig {
    wxAccount: string;
    lineAccount: string;
    wxAccountF1game: string;
    lineAccountF1game: string;
}
interface SuperVipConfig {
    id: number;
    money: number;
}
/**
 * 三英雄配置
 */
interface ThreeHeroesConfig {
    openDay: number;
    vipLevel: number;
    loginDays: number;
    reward: {
        id: number;
        type: number;
        count: number;
    }[];
    roleCount: number;
}
interface ThunderEquipLvConfig {
    attrs: AttributeData[];
    ex_power: number;
    level: number;
    materialInfo: any;
    slot: number;
}
interface ThunderQuenBaseConfig {
    equipEff: string[];
    equipIconInfo: string[][];
    equipKong: string[][];
    kongIcon: string[][];
    openDay: number;
    suitOpenDay: number;
    openLevel: number;
    suitOpenZsLv: number;
    skillShowEff: string[];
    suitNameHead: string[];
    suitSkillName: string[];
    thunderRes: string[][];
}
interface ThunderQuenCondConfig {
    condition: any[];
    index: number;
    slot: number;
}
interface ThunderQuenLvConfig {
    attrs: AttributeData[];
    index: number;
    level: number;
    materialInfo: any;
    slot: number;
}
interface ThunderQuenSumConfig {
    attr: AttributeData[];
    precent: number;
    slot: number;
    totalLevel: number;
}
interface ThunderSuitLvConfig {
    ex_power: number;
    level: number;
    num: number;
    pre: number;
    skillId: number[];
    type: number;
    attrs: AttributeData[];
}
/**
 * 称号配置
 */
interface TitleConfig {
    /** ID */
    Id: number;
    /** 等级 */
    level: number;
    /** 职业 */
    job: number;
    /** 类型 */
    type: string;
    /** 稀有度 */
    rare: number;
    /** 资源 */
    img: string;
    /** 获得条件 */
    condition: string;
    /** 属性 */
    attrs: AttributeData[];
    /** 名字 */
    name: string;
    /** 称号动画资源*/
    eff: string;
    sort: number;
    title_attrs_pre: number;
    activeItemId: number;
    highterTitle: number[];
    keepTime: number;
    attrs1: any;
    attrs2: any;
}
/**
 * 称号升级配置
 */
interface TitleLvUpConfig {
    /** ID */
    Id: number;
    /** 等级 */
    level: number;
    /** 属性 */
    attrs: any[];
    /** 属性2 */
    attr_precent: any[];
    /** 消耗 */
    cost: number;
}
interface TitleMonsterConfig {
    Id: number;
    img: string;
    name: string;
    eff: string;
    anchorOffsetY: number;
}
interface ToseongBaseConfig {
    fbId: number;
    enterPoint: XY[];
    statuePos: XY[];
    masterPos: XY;
    rebornCd: number;
    BuyRebornCost: number;
    rebornItem: number;
    opensrvbossid: any;
    opensrvtime: any;
}
interface ToseongBossConfig {
    bossId: number;
    killCount: number[];
    killBossId: number;
    luckyReward: number[];
    showReward: number[];
}
interface TotemBaseConfig {
    attrShowType: number[];
    cornerImg: string[];
    cornerlockImg: string;
    initialskillid: any[];
    lineImg: string[];
    linelockImg: string;
    lvShowImg: string[];
    openDay: number;
    openZs: number;
    specialTotemId: number[];
}
interface TotemBossBaseConfig {
    buyBelongCount: number;
    buyCost: number;
    cdTime: number;
    dailyBelongCount: number;
    maxBelongCount: number;
    openDay: number;
    rebornCd: number;
    rebornCost: number;
    viewRange: number;
}
interface TotemBossConfig {
    areaId: number;
    bossId: number;
    dropId: number;
    dropQuality: number;
    id: number;
    pos: any;
    refreshTime: number;
    showRewards: RewardVo[];
    uiPos: any;
    belongTotemCondition: any[];
}
interface TotemBossFbConfig {
    bossIdList: number[];
    fbId: number;
    id: number;
    lvLimit: number;
    sceneName: string;
    sceneNameRes: string;
    uiBg: string;
    totemCondition: any[];
}
interface TotemCornerConfig {
    equipQualityCN: string;
    leftImg: string;
    rightImg: string;
    level: number;
    rightCount: number;
}
interface TotemEquipConfig {
    attr: AttributeData[];
    desc: string;
    id: number;
    job: number;
    slot: number;
    totemId: number;
    totemPartSkin: string;
    exPower: number;
    ex_attr: AttributeData[];
}
interface TotemLvConfig {
    attrs: AttributeData[];
    level: number;
    needExp: number;
}
interface TotemPartConfig {
    icon: string;
    id: number;
    nameImg: string;
    nameTxt: string;
    posNameImg: string;
    slot: number;
    source: string[];
    totemId: number;
    totemSkin: string;
    type: number;
    equipId: number[];
    posName: string;
}
interface TotemStageConfig {
    attrs: AttributeData[];
    costItem: any;
    id: number;
    job: number;
    slot: number;
    stage: number;
    ex_attrs: any;
    ex_power: number;
}
interface TotemSuitLvConfig {
    activeDesc: string;
    id: number;
    num: number;
    quality: number;
    skillReviseId: number[];
    skill_attrs: AttributeData[];
    totemId: number;
    skillId: number[];
    qualityColor: number;
    attrs: any;
    ex_attrs: any;
    ex_power: number;
}
/**
 * 功能预告配置
 */
interface TrailerConfig {
    index: number;
    openLv: number;
    /**0位为字符串 窗口名  1位为页面 */
    openPanel: any[];
}
/**
 * 开启预告
 */
interface TrailerNewConfig {
    id: number;
    openLv: number;
    open: number;
    close: number;
    pic: string;
    icon: string;
    closeDay: number;
    chapter: number;
    startDay: number;
    reward: RewardVo[];
    skin: string;
    openDay: number;
    zsLevel: number;
    systemUi: any;
    dess: string;
    title: string;
}
/**
 * TreasureHuntConfig
 */
interface TreasureEquipConfig {
    dropGroupId: number;
    huntItem: number;
    huntOnce: number;
    huntTenth: number;
    hefuDay: number;
}
/**
 * TreasureHuntPoolHefuConfig
 */
interface TreasureEquipHefuPoolConfig {
    index: number;
    reward: RewardVo[];
}
/**
 * TreasureHuntPoolConfig
 */
interface TreasureEquipPoolConfig {
    index: number;
    reward: RewardVo[];
}
interface TreasureRuneConfig {
    huntItem: number;
    huntOnce: number;
    huntTenth: number;
    openlevel: number;
    maxBlissVal: number;
}
interface TreasureRuneLevelConfig {
    level: number;
    levelend: number;
    showicon: RewardVo[];
}
/**
 * 探宝次数累计奖励配置
 */
interface TreasureRuneRewardConfig {
    id: number;
    needTime: number;
    reward: {
        type: number;
        id: number;
        count: number;
    }[];
}
interface UitrasoneEquipLinkLvConfig {
    attrs: AttributeData[];
    level: number;
    firstSlot: number;
    secondSlot: number;
    exAttrs: AttributeData[];
    ex_power: number;
    chainDesc: string;
}
interface UitrasoneEquipLvConfig {
    attrs: AttributeData[];
    slot: number;
    level: number;
    skillId: number;
    soulLinkLevel: number;
    materialInfo: RewardVo;
    headTxt: string;
    ex_attrs: AttributeData[];
    ex_power: number;
    showPower: number;
}
interface UnionBattleConstConfig {
    /**
     * 开启等级
    */
    openLevel: number;
    /**
     * 龙城霸主 奖励
     */
    occupationAwardShow: RewardVo[];
    /**
     * 龙城霸主 帮主奖励
     */
    occupationAward: RewardVo[];
    /**
     * 采集倒计时
     */
    gatherTime: number;
    /**
     * 活动开启时间
     */
    openServer: {
        day: number;
        hours: number;
        min: number;
    };
    continueTime: number;
    hefuOpen: {
        day: number;
        hours: number;
        min: number;
    }[];
    hefuAward: {
        leader: {
            award: {
                id: number;
                type: number;
                count: number;
            }[][];
            context: string;
            title: string;
        };
        normal: {
            award: {
                id: number;
                type: number;
                count: number;
            }[][];
            context: string;
            title: string;
        };
    };
}
/**
 * 英雄数据
 */
declare class HeroControl extends BaseSystem {
    roles: RoleModel[];
    jobDic: RoleModel[];
    isFirstSetAttr: boolean;
    isFirstSetExAttr: boolean;
    constructor();
    static ins(): HeroControl;
    /**
     * 英雄列表
     * 255-2
     */
    downSubRole(datas: any[]): void;
    /**
     * 属性变化
     * 255-8
     */
    downSubRoleAtt(roleID: number, roleAtts: any[], onePower: number): void;
    /**
     * 处理扩展属性变化
     * 255-27
     */
    downSubRoleExtAtt(roleID: number, attrs: number[]): void;
    getSubRoleByIndex(index: number): RoleModel;
    getSubRoleByJob(jobId: number): RoleModel;
    readonly subRolesLen: number;
    /**
     * 更新所有角色的名字
     */
    private updateName();
    private setGuildName(arr);
    /**
     * 是否是自己的英雄
     */
    getIsMyPlayer(han: number): boolean;
    /**
     * 是否有可解锁英雄
     */
    isLockRole(): boolean;
    getBaseAttrs(role: RoleModel, slot: number): any[];
    getBaseAttrPercent(attrs: AttributeData[], value: number, boo?: boolean): any[];
}
interface UnionBattleDistriAwardConfig {
    /**
     * 排名
    */
    rank: number;
    /**
     * id
    */
    id: number;
    /**
     * 奖励
    */
    award: RewardVo[];
    /**
     * 份数
    */
    count: number;
    /**
     * 份数
    */
    awardShow: RewardVo[];
    /**
     * 是否活动奖励标识0:日常 1:合服 2:开服
     */
    rewardFlag: number;
}
interface UnionBattleLvConfig {
    /**
     * id
    */
    id: number;
    /**
     * 副本id
    */
    fbId: number;
    /**
     * 副本名字
    */
    name: string;
    /**
     * 切换场景的cd时间
    */
    switchSceneCd: number;
    /**
     * 复活的cd
    */
    resurgenceCd: number;
    /**
     * 进入当场景需要的功勋
    */
    feats: number;
    /**
     * 场景 按钮描述
    */
    btnName: string;
    /**
     * 场景 规则描述
    */
    help: string;
}
interface UnionBattlePerAwardConfig {
    /**
     * id
    */
    id: number;
    /**
     * 积分
    */
    integral: number;
    /**
     * 奖励
    */
    award: RewardVo[];
}
interface UnionBattlePerRankAwardConfig {
    /**
     * 排名
    */
    rank: number;
    /**
     * 奖励
    */
    award: RewardVo[];
}
interface UnionBonFireConfig {
    value: number;
    level: number;
    reward: number;
}
interface UnionBossConfig {
    dayTimes: number;
    notOpenDayOfWeek: number;
    effid: number;
    radisLv: number;
}
interface UnionBossHpAwardsConfig {
    srank: number;
    erank: number;
    mail_head: string;
    mail_content: string;
    awards: any[];
}
interface UnionBossInfoConfig {
    id: number;
    fbId: number;
    boss: Object;
    passAwards: RewardVo[];
    rankAwards: RewardVo[];
    enterAwards: number;
    killerAwards: RewardVo[];
    ShowImg: string;
}
interface UnionBossRankConfig {
    srank: number;
    erank: number;
    awards: any[];
}
interface UnionCommonSkillConfig {
    /** 等级 */
    level: number;
    /** 升级需要的贡献 */
    contribute: number;
    /** 升级需要的金币 */
    money: number;
    /** 属性加成 */
    attrs: AttributeData[];
}
interface UnionConfig {
    /** 开启等级 */
    openLevel: number;
    /** 不同公会等级人数的上限 */
    maxMember: number[];
    /** 练功房等级对应的普通技能的等级上限 */
    commonSkillLevels: number[];
    /** 练功房等级对应的修炼技能的等级上限 */
    practiceSkillLevels: number[];
    /**建筑物说明 */
    buildingTips: string[];
    /**普通技能名 */
    commonSkillNames: string[];
    /**修炼技能名 */
    practiceSkillNames: string[];
    /**普通技能描述 */
    skillDesc: string[];
    /**建筑名 */
    buildingNames: string[];
    /**弹劾消耗的元宝数 */
    impeachCost: number;
    /**会长多久没上线可以弹劾(秒) */
    impeachTime: number;
    /**不同公会等级各个职位的人数上限 这里顺序是从会长到精英*/
    posCounts: number[][];
    bonfireItem: number;
    bonfireReward: RewardVo[];
    bonfireValue: number;
    bonfirecaution: any;
    bonfirecount: number;
    affairMember: number;
    uploadImgTxt: string[];
    uploadLimitTxt: string[];
    uploadOpen: number;
    uploadTimeLimit: number;
    chatLvByPf: any;
    chatLv: number;
    vipLv: number;
}
interface UnionCreateConfig {
    /** 公会等级 */
    level: number;
    /** 需要的金钱类型 */
    moneyType: number;
    /** 需要的金钱数量 */
    moneyCount: number;
    /** 返还的公会贡献 */
    award: number;
    /** 创建帮派的vip等级要求 */
    vipLv: number;
    /** 创建帮派需要充值数量 */
    recharge: number;
}
interface UnionDonateConfig {
    /** 索引 */
    index: number;
    /** 捐献类型 */
    type: number;
    /** 金钱类型或物品ID */
    id: number;
    /** 数量 */
    count: number;
    /** 每天捐献次数 */
    dayCount: any;
    /** 返还的公会贡献 */
    awardContri: number;
    /** 返还的资金 */
    awardFund: number;
}
interface UnionLevelConfig {
    /** 建筑类型 */
    type: number;
    /** 建筑等级 */
    level: number;
    /** 升级需要的资金 */
    upFund: number;
    /** 合服次数 */
    hefu: number;
}
interface UnionStoreConfig {
    day: number;
    needContrib: number;
    time: number[];
    item: number[];
    practiceSkillCount: number;
}
interface UnionTaskConfig {
    id: number;
    type: number;
    /**只对捐献任务有效 31 32 33 */
    conID: number;
    target: number;
    /**只对捐献任务有效 31元宝数 32金币数 33 道具id*/
    param: number;
    name: string;
    desc: string;
    controlTarget: number[];
}
interface VipConfig {
    /** id */
    id: number;
    /** 需要元宝数 */
    needYb: number;
    /** 奖励列表 */
    awards: any[];
    /** 文本描述 */
    description: string;
    /**VIP加成 */
    attrAddition: any[];
    weekReward: any[];
    /**野外BOSS购买次数*/
    boss1buy: number;
    /**秘境BOSS购买次数*/
    boss2buy: number;
    vipImg: string;
}
interface VipGiftConfig {
    adImg: string;
    nameImg: string;
    awards: RewardVo[];
    bgImg: string;
    id: number;
    vipLv: number;
    img: string;
    needYb: number;
    cond: number[];
    hfTimes: number;
    pageName: string;
}
interface WarriorAttrConfig {
    /**战将ID*/
    Id: number;
    /**激活属性*/
    attr: Array<AttributeData>;
    /**激活道具*/
    itemId: number;
    /**怪物Id*/
    monsterId: number;
    /**名字*/
    name: string;
    /**图标*/
    monHeadIcon: string;
    /**内观*/
    innerAppearance: string;
    /**技能图标*/
    skillIcon: string;
    /**排序*/
    slot: number;
    /**提前展示*/
    show: number;
    /**潜能丹战将等级限制 等级-限制最大吞噬数量*/
    ADrugLimit: {
        [lev: number]: number;
    };
    /**潜能丹ID*/
    AItemId: number;
    /**潜能丹基本属性*/
    Aattr: Array<AttributeData>;
    /**飞升丹战将等级限制 等级-限制最大吞噬数量*/
    BDrugLimit: {
        [lev: number]: number;
    };
    /**飞升丹ID*/
    BItemId: number;
    /**飞升丹基本属性*/
    Battr: Array<AttributeData>;
    /**飞升丹特殊属性 （只加成战将强化和激活的万分比） */
    addPre: number;
    /**技能开启等级 */
    skill: Array<{
        id: number;
        open: number;
    }>;
    /**技能图标 */
    skillicon: string;
    /**技能id */
    skillid: number;
    /**提示名称 */
    TipsName: string;
    /**名字 */
    showName: string;
}
interface WarriorBreachConfig {
    /**战将ID*/
    Id: number;
    /**等级*/
    star: number;
    /**材料数量*/
    count: number;
    /**属性*/
    attrs: Array<AttributeData>;
    /**技能升级 */
    skillid: number;
}
interface WarriorConfig {
    /**开启转生等级*/
    openZhuanshengLv: number;
    /**战将开启等级 */
    level: number;
    /**开启天数*/
    openServerDay: number;
    /**战装开启转生等级 */
    EquipZSLv: number;
    /**战转开启天数 */
    EquipOpenDay: number;
    /**战将强化丹*/
    UpgradeId: number;
    /**强化丹经验*/
    UpgradeExp: number;
    /**战将boss开启转生等级 */
    BossZSLv: number;
    /**战将boss开启开服天数 */
    BossOpenDay: number;
    /**助战个数 */
    AssistNum: number;
    /**助战继承万分比 */
    AssistInherit: number;
    /**开启任务 */
    taskInfo: {
        award: Array<RewardVo>;
        type: number;
        param: number;
        target: number;
    };
    /**战将副本id */
    fbId: number;
    /**是否显示飞升 */
    showAItem: number;
    /**是否显示潜能 */
    showBItem: number;
}
interface WarriorEquipConfig {
    /**装备*/
    Id: number;
    /**位置*/
    pos: number;
    /**星级*/
    star: number;
    /**边框特效*/
    frameEff: string;
    /**属性*/
    attr: Array<AttributeData>;
    /**分解经验 */
    totalExp: number;
    /**合成材料*/
    composeItem: Array<{
        type: number;
        id: number;
        count: number;
    }>;
    /**五行之力 */
    FiveElementsForce: Array<AttributeData>;
}
interface WarriorEquipLvUpConfig {
    /**强化部位 */
    slot: number;
    /**强化等级 */
    level: number;
    /**强化属性 */
    strengthenAttr: Array<AttributeData>;
    /**经验 */
    exp: number;
}
interface WarriorEquipSuitConfig {
    /**数量*/
    num: number;
    /**阶数 */
    level: number;
    /**属性*/
    attrs: Array<AttributeData>;
}
interface WarriorLvConfig {
    /**战将id*/
    id: number;
    /**等级*/
    level: number;
    /**升级需要经验*/
    exp: number;
    /**单次消耗进阶丹*/
    count: number;
    /**属性*/
    attrs: Array<AttributeData>;
}
interface WarriorSkillConfig {
    /**战将id */
    id: number;
    /**战将属性 */
    attrs: Array<AttributeData>;
    /**被动技能 */
    passive: number;
    /**技能图标 */
    skillicon: string;
    /**技能名称 */
    skillname: string;
    /**技能描述 */
    desc: string;
    /**额外战力 */
    expower: number;
}
/**
 * 兵魂基础配置表
 */
interface WeaponSoulBaseConfig {
    maxItemNum: number;
    itemid: number;
}
/**
 * 兵魂配置
 */
interface WeaponSoulConfig {
    id: number;
    name: string;
    actcond: number[];
    inside: string[];
    outside: string[];
    pic: string[];
    icon: string;
}
/**
 * 兵魂基础配置表
 */
interface WeaponSoulItemAttrConfig {
    id: number;
    attr: {
        type: number;
        value: number;
    }[];
}
/**
 * 兵魂部位配置
 */
interface WeaponSoulPosConfig {
    id: number;
    level: number;
    costItem: number;
    costNum: number;
    showlv: number;
    assault: number;
    icon: string;
    name: string;
    attr: {
        type: number;
        value: number;
    }[];
    ex_attr: {
        type: number;
        value: number;
    }[];
}
/**
 * 兵魂套装配置
 */
interface WeaponSoulSuitConfig {
    id: number;
    level: number;
    attr: {
        type: number;
        value: number;
    }[];
    ex_attr: {
        type: number;
        value: number;
    }[];
    skillname: string;
    skillicon: string;
    skilldesc: string;
}
interface WeiXiFocusConstConfig {
    awards: {
        id: number;
        type: number;
        count: number;
    }[];
    context: string;
    head: string;
}
interface WelfareConfig {
    panel: number;
    type: number;
    id: number;
    icon: string;
    desc: string;
    activityId: number;
    className: string;
    param: number;
}
interface WorldBossBaseConfig {
    /** 刷新时间 */
    refreshHour: number;
    /** 刷新时间 */
    refreshMinute: number;
    /** 刷新公告 */
    notice: string;
    /** 等级提升时间 */
    levelUpTime: number;
    /** 挑战cd */
    challengeCd: number;
    /** 伤害转金币比率 */
    convertRate: number;
    /** 金币上限 */
    maxGold: number;
    /** 清除cd价格 */
    clearCdCost: number[];
    /**抽奖时间*/
    lotteryTime: number;
    dayCount: number[];
    buyCountPrice: number[];
    shenyuOpenDay: number;
    challengeItem: number[];
    challengeItemYb: number[];
    canSeeDarkBossDay: number;
    buyBelongCountPrice: number[];
    belongbuycount: number[][];
    belongCount: any;
    rebornItem: number;
    canSennDarkBoss: number;
    pktipsleft: string;
    pktips: string;
    halvedActId: any;
    zsBossFbNames: string[];
    multipleNum: any;
}
/**
 * WorldBossConfig
 */
interface WorldBossConfig {
    zslook: number[];
    zsLevel: number;
    level: number;
    fbid: number;
    bossId: number;
    shield: number;
    showReward: number[];
    joinReward: number;
    shieldReward: number;
    belongReward: number;
    killReward: number;
    vip: number;
    belongRewardshow: any[];
    canRewardshow: any[];
    type: number;
    showName: string;
    samsaraLv: number;
    zhuzaiScore: number;
    darkforce: any[];
    thirteenzslv: number;
    belongvip: number;
    openTime: number;
    refreshTime: number[];
    FiveElementsForce: AttributeData[];
}
/**
 * 击杀公告
 */
interface WorldBossKillMsgConfig {
    msg: string;
    id: number;
}
interface WorldRewardConfig {
    id: number;
    /** 要求关卡数 */
    needLevel: number;
    /** 奖励 */
    rewards: RewardVo[];
    /** 章节名字 */
    name: string;
    /** 地图 */
    icon: string;
    /** 地标位置 */
    position: any;
    /** 大地图章节组id */
    groupId: number;
}
interface YouDangConfig {
    fileName: number[];
    id: number;
}
declare class DataCenter extends SingleClass {
    static cfgData: any;
    static mangleCfg: any;
    static hasMangle: boolean;
    private static loadDone;
    private static awaitLoadResolve;
    static ins(): DataCenter;
    private static awaitLoad();
    static addData(data: any): Promise<boolean>;
    AmusementConfig: AmusementConfig[];
    AmusementBtnConfig: AmusementBtnConfig[];
    Amusement1Config: Amusement1Config[][];
    Amusement2Config: Amusement2Config[][];
    Amusement3Config: Amusement3Config[][];
    Amusement4Config: Amusement4Config[][];
    Amusement5Config: Amusement5Config[][];
    Amusement6Config: Amusement6Config[][];
    Amusement7Config: Amusement7Config[][];
    Amusement8Config: Amusement8Config[][];
    Amusement9Config: Amusement9Config[][];
    Amusement10Config: Amusement10Config[][];
    Amusement11_1Config: Amusement11_1Config[][];
    Amusement11_2Config: Amusement11_2Config[][];
    Amusement12Config: Amusement12Config[][];
    Amusement13Config: Amusement13Config[][];
    Amusement16Config: Amusement16Config[][];
    Amusement18Config: Amusement18Config[][];
    Amusement19Config: Amusement19Config[][];
    Amusement20Config: Amusement20Config[][];
    Amusement22_1Config: Amusement22_1Config[][];
    Amusement22_3Config: Amusement22_3Config[][];
    Amusement25Config: Amusement25Config[][];
    Amusement26Config: Amusement26Config[][];
    Amusement100Config: Amusement100Config[];
    Amusement102Config: Amusement102Config[];
    Amusement103Config: Amusement103Config[];
    PAmusementConfig: PAmusementConfig[];
    PAmusementBtnConfig: PAmusementBtnConfig[];
    PAmusementType1Config: PAmusement1Config[][];
    PAmusement2Config: PAmusement2Config[][];
    PAmusement3Config: PAmusement3Config[][];
    PAmusementType9Config: PAmusement9Config[][];
    ArtifactImbaConfig: ArtifactImbaConfig[];
    ArtifactImbaSawConfig: ArtifactImbaSawConfig[];
    AshtarteBaseConfig: AshtarteBaseConfig[];
    AshtarteConfig: AshtarteConfig;
    AshtarteEquipConfig: AshtarteEquipConfig[];
    AshtarteLevelConfig: AshtarteLevelConfig[][];
    AshtarteSkillConfig: AshtarteSkillConfig[];
    AshtarteSuitConfig: AshtarteSuitConfig[];
    AshtarteTalentConfig: AshtarteTalentConfig[][];
    AshtartePillExConfig: AshtartePillExConfig[][];
    AshtarteEnhanceConfig: AshtarteEnhanceConfig[][];
    AshtarteLinkConfig: AshtarteLinkConfig[][][];
    AsTeamCopyBaseConfig: AsTeamCopyBaseConfig;
    AsTeamCopyConfig: AsTeamCopyConfig[];
    AsTeamCopyGuideConfig: AsTeamCopyGuideConfig[][];
    BabelLotteryChallBaseConfig: BabelLotteryChallBaseConfig;
    BabelLotteryChallConfig: BabelLotteryChallConfig[];
    BabelLotteryConfig: BabelLotteryConfig[];
    BabelLotteryNameConfig: BabelLotteryNameConfig[];
    BackpackConfig: BackpackConfig;
    BackpackExpandConfig: BackpackExpandConfig[];
    BackpackVipGridConfig: BackpackVipGridConfig[];
    BargainConfig: BargainConfig;
    BargainItemConfig: BargainItemConfig[];
    BeastBaseConfig: BeastBaseConfig[];
    BeastConfig: BeastConfig;
    BeastEquipConfig: BeastEquipConfig[];
    BeastSkillConfig: BeastSkillConfig[];
    BlisterAwardConfig: BlisterAwardConfig[];
    BlisterConfig: BlisterConfig;
    BookConfig: BookConfig[][];
    BookDecomposeConfig: BookDecomposeConfig[];
    BookListConfig: BookListConfig[];
    BookSuitConfig: BookSuitConfig[][];
    BossHomeConfig: BossHomeConfig[];
    BubbleConfig: BubbleConfig[];
    CalcForceBaseConfig: CalcForceBaseConfig;
    CalcForceStageConfig: CalcForceStageConfig[][];
    CampWarConfig: CampWarConfig;
    CampWarPersonalAwardConfig: CampWarPersonalAwardConfig[];
    CampWarPersonalRankAwardConfig: CampWarPersonalRankAwardConfig[];
    ChaptersConfig: ChaptersConfig[];
    ClientGlobalConfig: ClientGlobalConfig;
    ClientNoticeConfig: ClientNoticeConfig;
    CombatPowerConfig: CombatPowerConfig[];
    CopyExpBaseConfig: CopyExpBaseConfig;
    CopyExpConfig: CopyExpConfig[];
    CopyExpMonsterConfig: CopyExpMonsterConfig[];
    CopyGoldBaseConfig: CopyGoldBaseConfig;
    CopyGoldConfig: CopyGoldConfig[];
    CrazybtplayAttrUpConfig: CrazybtplayAttrUpConfig[];
    CrazybtplayBaseConfig: CrazybtplayBaseConfig[];
    CrazybtplayBossBaseConfig: CrazybtplayBossBaseConfig;
    CrazybtplayBossConfig: CrazybtplayBossConfig[];
    CrazybtplayBossFbConfig: CrazybtplayBossFbConfig[];
    CrazybtplayConfig: CrazybtplayConfig;
    CrazybtplayEnhanceConfig: CrazybtplayEnhanceConfig[][];
    CrazybtplayLvConfig: CrazybtplayLvConfig[][];
    CrazybtplaySkillConfig: CrazybtplaySkillConfig[];
    CrazyDogBaseConfig: CrazyDogBaseConfig;
    CrazyDogConfig: CrazyDogConfig[];
    CrazyDogLevelConfig: CrazyDogLevelConfig[][];
    CrazyDogSkillConfig: CrazyDogSkillConfig[];
    CrazyDogStarConfig: CrazyDogStarConfig[][];
    CrossArenaBaseConfig: CrossArenaBaseConfig;
    CrossArenaMetalAwardConfig: CrossArenaMetalAwardConfig[];
    CrossArenaMetReachAwardConfig: CrossArenaMetReachAwardConfig[];
    CrossArenaRankAwardConfig: CrossArenaRankAwardConfig[];
    CrossBossBaseConfig: CrossBossBaseConfig;
    CrossBossConfig: CrossBossConfig[];
    DaifugBaseConfig: DaifugBaseConfig;
    DaifugGridConfig: DaifugGridConfig[];
    DaifugRoundAwardConfig: DaifugRoundAwardConfig[];
    DailyCopyConfig: DailyCopyConfig[];
    DailyRedBagConfig: DailyRedBagConfig;
    DarkEquipBaConfig: DarkEquipBaConfig;
    DarkEquipConfig: DarkEquipConfig[];
    DarkEquipLvUpConfig: DarkEquipLvUpConfig[][];
    DarkSuitLvConfig: DarkSuitLvConfig[][][];
    DeathgainWayConfig: DeathgainWayConfig[];
    DeathGuideConfig: DeathGuideConfig[];
    DefineEffConfig: DefineEffConfig[];
    DeityEquipComposeConfig: DeityEquipComposeConfig[];
    DeityEquipLevelupConfig: DeityEquipLevelupConfig[];
    DevildomBigBossBsConfig: DevildomBigBossBsConfig;
    DevildomBossBsConfig: DevildomBossBsConfig;
    DevildomBossConfig: DevildomBossConfig[];
    DominateEquipBaConfig: DominateEquipBaConfig;
    DominateEquipMastComConfig: DominateEquipMastComConfig[];
    DominateEquipMastLvConfig: DominateEquipMastLvConfig[][];
    DominateEquipMasterSlotConfig: DominateEquipMasterSlotConfig[];
    DominateEquipComConfig: DominateEquipComConfig[];
    DominateEquipPointConfig: DominateEquipPointConfig[];
    DominateEquipLvConfig: DominateEquipLvConfig[];
    DominateEquipDecomConfig: DominateEquipDecomConfig[];
    DragonSoulBaseConfig: DragonSoulBaseConfig;
    DragonSoulConfig: DragonSoulConfig[];
    DragonSoulPosConfig: DragonSoulPosConfig[][][];
    DragonSoulStageConfig: DragonSoulStageConfig[];
    DragonSoulStarConfig: DragonSoulStarConfig[];
    DragonSoulSuitConfig: DragonSoulSuitConfig[];
    DropItemEffectConfig: DropItemEffectConfig[];
    EffectConfig: EffectConfig[];
    EmailIdConfig: EmailIdConfig[];
    EmailLevelConfig: EmailLevelConfig[];
    EmailLoginConfig: EmailLoginConfig;
    EquipAllEffConfig: EquipAllEffConfig[][];
    EquipConfig: EquipConfig[];
    EquipWithEffConfig: EquipWithEffConfig[];
    EsotericaBaseConfig: EsotericaBaseConfig;
    EsotericaGridConfig: EsotericaGridConfig[];
    EsotericaSkillConfig: EsotericaSkillConfig[];
    ExperienceJadeBasicConfig: ExperienceJadeBasicConfig;
    ExperienceJadeConfig: ExperienceJadeConfig[];
    ExperienceJadeNewBaseConfig: ExperienceJadeNewBaseConfig;
    ExperienceJadeNewLevelConfig: ExperienceJadeNewLevelConfig[];
    ExperienceKingAwardConfig: ExperienceKingAwardConfig[];
    ExperienceKingBaseConfig: ExperienceKingBaseConfig;
    ExperienceKingLevelConfig: ExperienceKingLevelConfig[];
    ExperienceKingOfficeAwardConfig: ExperienceKingOfficeAwardConfig[];
    ExperienceKingTrainAwardConfig: ExperienceKingTrainAwardConfig[][];
    ExperienceMedalBasicConfig: ExperienceMedalBasicConfig;
    ExperienceMedalConfig: ExperienceMedalConfig[];
    FakeitemConfig: FakeitemConfig[];
    FashionConfig: FashionConfig;
    FashionIdConfig: FashionIdConfig[];
    FashionLvUpConfig: FashionLvUpConfig[][];
    FashionSuitConfig: FashionSuitConfig[];
    FeatherCommonConfig: FeatherCommonConfig;
    FeatherDeityLevelConfig: FeatherDeityLevelConfig[][];
    FeatherDeitySuitConfig: FeatherDeitySuitConfig[];
    FeatherItemConfig: FeatherItemConfig[];
    FeatherLevelConfig: FeatherLevelConfig[];
    FeatherDeityForgeLvConfig: FeatherDeityForgeLvConfig[];
    FeatherDeityForgeSkillConfig: FeatherDeityForgeSkillConfig[];
    FeatherDeityForgeExtraLvConfig: FeatherDeityForgeExtraLvConfig[];
    FireRing0Config: FireRing0Config[];
    FireRing1Config: FireRing1Config[];
    FireRingConfig: FireRingConfig[];
    FireRingRole2Config: FireRingRole2Config[];
    FireRingRole3Config: FireRingRole3Config[];
    FireRingRole4Config: FireRingRole4Config[];
    FireRingRole5Config: FireRingRole5Config[];
    FireRingRole6Config: FireRingRole6Config[];
    FireRingRole7Config: FireRingRole7Config[];
    FireRingRoleAbilityConfig: FireRingRoleAbilityConfig[];
    FireRingRoleBookConfig: FireRingRoleBookConfig[][];
    FireRingRoleComConfig: FireRingRoleComConfig;
    FireRingRoleConfig: FireRingRoleConfig[];
    FireRingRoleFubenConfig: FireRingRoleFubenConfig;
    FireRingRoleItemConfig: FireRingRoleItemConfig[][][];
    FlameMarkConfig: FlameMarkConfig;
    FlameMarkEffectConfig: FlameMarkEffectConfig[][];
    FlameMarkLvConfig: FlameMarkLvConfig[];
    FlameMarkMatConfig: FlameMarkMatConfig[];
    FocusAttackBaseConfig: FocusAttackBaseConfig;
    FocusAttackConfig: FocusAttackConfig[];
    FocusAttackExchangeConfig: FocusAttackExchangeConfig[];
    FocusAttackPageConfig: FocusAttackPageConfig[];
    FocusAttackPunchConfig: FocusAttackPunchConfig[][];
    FocusAttackPunchMasterConfig: FocusAttackPunchMasterConfig[];
    FocusAttackQmConfig: FocusAttackQmConfig[][][];
    FocusAwakeHitLvConfig: FocusAwakeHitLvConfig[][];
    FocusAwakeHitSuitConfig: FocusAwakeHitSuitConfig[][];
    ForgeAttrConfig: ForgeAttrConfig[];
    ForgeCostConfig: ForgeCostConfig[];
    LittleSystemBaseConfig: LittleSystemBaseConfig;
    FranchiseConfig: FranchiseConfig;
    MonthCardConfig: MonthCardConfig;
    FreshManTitleConfig: FreshManTitleConfig[];
    GodWeaponBaseConfig: GodWeaponBaseConfig;
    GodWeaponFubenConfig: GodWeaponFubenConfig[];
    GodweaponItemConfig: GodweaponItemConfig[];
    GodWeaponLevelConfig: GodWeaponLevelConfig[];
    GodWeaponLineConfig: GodWeaponLineConfig[][];
    GodWeaponTaskConfig: GodWeaponTaskConfig[][];
    GuardWeaponGuardConfig: GuardWeaponGuardConfig;
    GuardWeaponWaveConfig: GuardWeaponWaveConfig[][];
    GuideAchievementConfig: GuideAchievementConfig[];
    GuideAwardConfig: GuideAwardConfig[];
    GuideBasicConfig: GuideBasicConfig[];
    GuideConfig: GuideConfig[][];
    GuideLimitTimeConfig: GuideLimitTimeConfig[];
    GuideLimitTimeTaskConfig: GuideLimitTimeTaskConfig[];
    HeartMethodBaseConfig: HeartMethodBaseConfig;
    HeartMethodConfig: HeartMethodConfig[];
    HeartMethodLevelConfig: HeartMethodLevelConfig[][];
    HeartMethodPosConfig: HeartMethodPosConfig[][][];
    HeartMethodStageConfig: HeartMethodStageConfig[][];
    HeartMethodStarConfig: HeartMethodStarConfig[];
    HeartMethodSuitConfig: HeartMethodSuitConfig[][];
    HeirloomEquipConfig: HeirloomEquipConfig[][];
    HeirloomEquipFireConfig: HeirloomEquipFireConfig[];
    HeirloomEquipItemConfig: HeirloomEquipItemConfig[];
    HeirloomEquipSetConfig: HeirloomEquipSetConfig[];
    HeirloomillusionConfig: HeirloomillusionConfig[];
    HeirloomTreasureConfig: HeirloomTreasureConfig;
    HeirloomTreasureRewardConfig: HeirloomTreasureRewardConfig[];
    HelpInfoConfig: HelpInfoConfig[];
    HideBossConfig: HideBossConfig[];
    InstanceBaseConfig: InstanceBaseConfig;
    IntensifyLevelConfig: IntensifyLevelConfig[];
    IntensifyLevelCostConfig: IntensifyLevelCostConfig[];
    IntensifyOpenConfig: IntensifyOpenConfig[];
    InvestmentAfterConfig: InvestmentAfterConfig[];
    InvestmentBaseConfig: InvestmentBaseConfig;
    InvestmentBtnConfig: InvestmentBtnConfig[];
    InvestmentChapterConfig: InvestmentChapterConfig[];
    InvestmentLevelConfig: InvestmentLevelConfig[];
    InvestmentLoginConfig: InvestmentLoginConfig[];
    ItemComposeConfig: ItemComposeConfig[];
    ItemConfig: ItemConfig[];
    ItemDescConfig: ItemDescConfig[];
    ItemGiftConfig: ItemGiftConfig[];
    ItemUseLimitConfig: ItemUseLimitConfig[];
    LadderInfoConstConfig: LadderInfoConstConfig;
    LadderInfoDanConfig: LadderInfoDanConfig[][];
    LadderInfoRankAwardConfig: LadderInfoRankAwardConfig[];
    LeadFubenBaseConfig: LeadFubenBaseConfig;
    LeaseLvConfig: LeaseLvConfig[];
    LeaseRentBaConfig: LeaseRentBaConfig;
    MagicCirBaseConfig: MagicCirBaseConfig[];
    MagicCirConfig: MagicCirConfig;
    MagicCirFbConfig: MagicCirFbConfig[];
    MagicCirLvConfig: MagicCirLvConfig[][];
    MagicCirSkillConfig: MagicCirSkillConfig[][];
    MagicCirSkillCostConfig: MagicCirSkillCostConfig[][];
    MagicCirSkillSectionConfig: MagicCirSkillSectionConfig[][];
    MagicCirTalentConfig: MagicCirTalentConfig[][];
    MagicCirTaskConfig: MagicCirTaskConfig[];
    MagicCirTeZhiConfig: MagicCirTeZhiConfig[][];
    MeridiansCommonConfig: MeridiansCommonConfig;
    MeridiansLevelConfig: MeridiansLevelConfig[];
    MeridiansStageConfig: MeridiansStageConfig[];
    MineConfig: MineConfig;
    MineSourceConfig: MineSourceConfig[];
    MoneyConfig: MoneyConfig[];
    MonstersConfig: MonstersConfig[];
    MonstershpConfig: MonstershpConfig[];
    MonsterSpeakConfig: MonsterSpeakConfig[][];
    RechargeMultiDayConfig: RechargeMultiDayConfig[];
    MythLevelConfig: MythLevelConfig[][];
    MythSuitConfig: MythSuitConfig[];
    NewWorldBossAttrConfig: NewWorldBossAttrConfig[];
    NewWorldBossBaseConfig: NewWorldBossBaseConfig;
    NewWorldBossRankConfig: NewWorldBossRankConfig[][];
    NpcBaseConfig: NpcBaseConfig[];
    NpcTinyConfig: NpcTinyConfig;
    OfficeBaseConfig: OfficeBaseConfig;
    OfficeDayAwardConfig: OfficeDayAwardConfig[];
    OfficeLevelConfig: OfficeLevelConfig[][];
    OnlineQuizBaseConfig: OnlineQuizBaseConfig;
    OnlineQuizQuestionsConfig: OnlineQuizQuestionsConfig[];
    OpenSystemConfig: OpenSystemConfig[];
    OptionalGiftConfig: OptionalGiftConfig[];
    PartnerLimitConfig: PartnerLimitConfig;
    PayInfoConfig: PayInfoConfig[];
    PeakRaceBaseConfig: PeakRaceBaseConfig;
    PeakRaceCrossTimeConfig: PeakRaceCrossTimeConfig[];
    PeakRaceTimeConfig: PeakRaceTimeConfig[];
    PieceConfig: PieceConfig[][];
    PieceTotalConfig: PieceTotalConfig[];
    PortalConfig: PortalConfig[];
    PrestigeBaseConfig: PrestigeBaseConfig;
    PrestigeLevelConfig: PrestigeLevelConfig[];
    PromptConfig: PromptConfig[];
    PropsGainConfig: PropsGainConfig[];
    RechargeQuadrupleItemsConfig: RechargeQuadrupleItemsConfig[];
    RambleConstConfig: RambleConstConfig;
    RambleEmojiConfig: RambleEmojiConfig[];
    Recharge1Config: Recharge1Config[][][];
    Recharge2Config: Recharge2Config[][][];
    RechargeDailyConfig: RechargeDailyConfig[];
    RechargeDaysAwardsConfig: RechargeDaysAwardsConfig[];
    RechargeDaysAwardssConfig: RechargeDaysAwardssConfig[];
    RechargeFirstClientConfig: RechargeFirstClientConfig[][];
    RechargeFirstConfig: RechargeFirstConfig[];
    RechargeFlashSaleConfig: RechargeFlashSaleConfig[];
    RechargeHappyConfig: RechargeHappyConfig[];
    RechargeItemsConfig: RechargeItemsConfig[];
    RechargeLoopConfig: RechargeLoopConfig[][];
    RechargeOneConfig: RechargeOneConfig[];
    RechargeServiceConfig: RechargeServiceConfig[][];
    RefineAttrConfig: RefineAttrConfig[];
    RefineCostConfig: RefineCostConfig[];
    ReincarnateConfig: ReincarnateConfig;
    ReincarnateExpConfig: ReincarnateExpConfig[];
    ReincarnateLevelConfig: ReincarnateLevelConfig[];
    ReincarnateStarStepBsConfig: ReincarnateStarStepBsConfig;
    ReincarnateStarStepComConfig: ReincarnateStarStepComConfig[][];
    ReincarnateStarStepConfig: ReincarnateStarStepConfig[];
    ReincarnateStarStepLinLvConfig: ReincarnateStarStepLinLvConfig[][][];
    ReincarnateStarStepSlotLvConfig: ReincarnateStarStepSlotLvConfig[][][];
    ReincarnateStarStepSoConConfig: ReincarnateStarStepSoConConfig[][];
    ReincarnateStarStepSoLvConfig: ReincarnateStarStepSoLvConfig[][];
    ReincarnateStarStepSoSumConfig: ReincarnateStarStepSoSumConfig[][];
    ReincarnateStarStepSuitConfig: ReincarnateStarStepSuitConfig[][];
    ReincarnateStarStepZsLvConfig: ReincarnateStarStepZsLvConfig[];
    ReincarnationBaseConfig: ReincarnationBaseConfig;
    ReincarnationDemonLvConfig: ReincarnationDemonLvConfig[][];
    ReincarnationEqComConfig: ReincarnationEqComConfig[];
    ReincarnationEquipConfig: ReincarnationEquipConfig[];
    ReincarnationExConfig: ReincarnationExConfig[];
    ReincarnationLevelConfig: ReincarnationLevelConfig[];
    ReincarnationLinkLvConfig: ReincarnationLinkLvConfig[][][];
    ReincarnationSoulLvConfig: ReincarnationSoulLvConfig[][][];
    ReincarnationSpiritConfig: ReincarnationSpiritConfig[][];
    ReincarnationSuitConfig: ReincarnationSuitConfig[];
    RoleCreateConfig: RoleCreateConfig[];
    RoleExpConfig: RoleExpConfig[];
    RoleNewConfig: RoleNewConfig[];
    RoleTitleConfig: RoleTitleConfig[];
    RongLuExpConfig: RongLuExpConfig[];
    RuneBaseConfig: RuneBaseConfig[];
    RuneComposeConfig: RuneComposeConfig[];
    RuneConverConfig: RuneConverConfig[];
    RuneLockPosConfig: RuneLockPosConfig[];
    RuneNameConfig: RuneNameConfig[];
    RuneOtherConfig: RuneOtherConfig;
    ScenesConfig: ScenesConfig[];
    SDKConfig: SDKConfig;
    ServerEenemyBaseConfig: ServerEenemyBaseConfig;
    ServerTipsConfig: ServerTipsConfig[];
    SevenDayConfig: SevenDayConfig[];
    SevenDayBasicConfig: SevenDayBasicConfig;
    SignInConfig: SignInConfig[];
    SignInDaysConfig: SignInDaysConfig[];
    SignInVipConfig: SignInVipConfig[];
    SkillsCommonReviseConfig: SkillsCommonReviseConfig[];
    SkillsConfig: SkillsConfig[];
    SkillsDescConfig: SkillsDescConfig[];
    SkillsEffectsConfig: SkillsEffectsConfig[];
    SkillsGWReviseConfig: SkillsGWReviseConfig[];
    SkillsImbaReviseConfig: SkillsImbaReviseConfig[];
    SkillsOpenConfig: SkillsOpenConfig[];
    SkillsSorderConfig: SkillsSorderConfig[];
    SkillsUpgradeConfig: SkillsUpgradeConfig[];
    SkirmishBaseConfig: SkirmishBaseConfig;
    SkirmishRankConfig: SkirmishRankConfig[];
    SkirmishRewardConfig: SkirmishRewardConfig[];
    SoulBoneConfig: SoulBoneConfig;
    SoulBoneCopyConfig: SoulBoneCopyConfig[];
    SoulBoneEquipConfig: SoulBoneEquipConfig[];
    SoulBoneJadeEquipConfig: SoulBoneJadeEquipConfig[][];
    SoulBoneSuitConfig: SoulBoneSuitConfig[][][];
    SpecialEquipsConfig: SpecialEquipsConfig[];
    SpokesPersonBaseConfig: SpokesPersonBaseConfig;
    SpokesPersonDyrBaseConfig: SpokesPersonDyrBaseConfig;
    SpokesPersonHourBaseConfig: SpokesPersonHourBaseConfig;
    SpokesPersonLevelPartConfig: SpokesPersonLevelPartConfig[];
    SpokesPersonLevelRewardsConfig: SpokesPersonLevelRewardsConfig[];
    SpokesPersonLotteryAwardConfig: SpokesPersonLotteryAwardConfig[][][];
    SpokesPersonLotteryBaseConfig: SpokesPersonLotteryBaseConfig;
    SpokesPersonOpenConfig: SpokesPersonOpenConfig[];
    SpokesPersonSmeltBaseConfig: SpokesPersonSmeltBaseConfig;
    SpokesPersonTaskListConfig: SpokesPersonTaskListConfig[];
    StarSunBaseConfig: StarSunBaseConfig;
    StarSunLvConfig: StarSunLvConfig[][];
    StoreCommonConfig: StoreCommonConfig;
    StoreConfig: StoreConfig[];
    StoreEquipItemConfig: StoreEquipItemConfig[];
    StoreIntegralConfig: StoreIntegralConfig[];
    StoreItemConfig: StoreItemConfig[];
    StoreTreasureDecomConfig: StoreTreasureDecomConfig[];
    StoreTreasureOverConfig: StoreTreasureOverConfig[];
    StoreWeekConfig: StoreWeekConfig[];
    SummonBossConfig: SummonBossConfig[];
    SuperVipConfig: SuperVipConfig[];
    SuperVipbaseConfig: SuperVipbaseConfig;
    ThreeHeroesConfig: ThreeHeroesConfig;
    ThunderEquipLvConfig: ThunderEquipLvConfig[][];
    ThunderQuenBaseConfig: ThunderQuenBaseConfig;
    ThunderQuenCondConfig: ThunderQuenCondConfig[][];
    ThunderQuenLvConfig: ThunderQuenLvConfig[][][];
    ThunderQuenSumConfig: ThunderQuenSumConfig[][];
    ThunderSuitLvConfig: ThunderSuitLvConfig[][][];
    TitleConfig: TitleConfig[];
    TitleMonsterConfig: TitleMonsterConfig[];
    TitleLvUpConfig: TitleLvUpConfig[][];
    ToseongBaseConfig: ToseongBaseConfig;
    ToseongBossConfig: ToseongBossConfig[];
    TotemBaseConfig: TotemBaseConfig;
    TotemBossBaseConfig: TotemBossBaseConfig;
    TotemBossConfig: TotemBossConfig[];
    TotemBossFbConfig: TotemBossFbConfig[];
    TotemCornerConfig: TotemCornerConfig[];
    TotemEquipConfig: TotemEquipConfig[][];
    TotemLvConfig: TotemLvConfig[];
    TotemPartConfig: TotemPartConfig[][][];
    TotemStageConfig: TotemStageConfig[][][][];
    TotemSuitLvConfig: TotemSuitLvConfig[][][][];
    TrailerConfig: TrailerConfig[];
    TrailerNewConfig: TrailerNewConfig[];
    TreasureEquipConfig: TreasureEquipConfig;
    TreasureEquipHefuPoolConfig: TreasureEquipHefuPoolConfig[];
    TreasureEquipPoolConfig: TreasureEquipPoolConfig[];
    TreasureRuneConfig: TreasureRuneConfig;
    TreasureRuneLevelConfig: TreasureRuneLevelConfig[];
    TreasureRuneRewardConfig: TreasureRuneRewardConfig[];
    UitrasoneEquipLinkLvConfig: UitrasoneEquipLinkLvConfig[][][];
    UitrasoneEquipLvConfig: UitrasoneEquipLvConfig[][];
    UnionBattleConstConfig: UnionBattleConstConfig;
    UnionBattleDayAwardConfig: UnionBattleDayAwardConfig[];
    UnionBattleDistriAwardConfig: UnionBattleDistriAwardConfig[][];
    UnionBattleLvConfig: UnionBattleLvConfig[];
    UnionBattlePerAwardConfig: UnionBattlePerAwardConfig[];
    UnionBattlePerRankAwardConfig: UnionBattlePerRankAwardConfig[];
    UnionBonFireConfig: UnionBonFireConfig[];
    UnionBossConfig: UnionBossConfig;
    UnionBossHpAwardsConfig: UnionBossHpAwardsConfig[][];
    UnionBossInfoConfig: UnionBossInfoConfig[];
    UnionBossRankConfig: UnionBossRankConfig[];
    UnionCommonSkillConfig: UnionCommonSkillConfig[][];
    UnionConfig: UnionConfig;
    UnionCreateConfig: UnionCreateConfig[];
    UnionDonateConfig: UnionDonateConfig[];
    UnionLevelConfig: UnionLevelConfig[][];
    UnionStoreConfig: UnionStoreConfig;
    UnionTaskConfig: UnionTaskConfig[];
    VipConfig: VipConfig[];
    VipGiftConfig: VipGiftConfig[];
    WarriorAttrConfig: WarriorAttrConfig[];
    WarriorBreachConfig: WarriorBreachConfig[][];
    WarriorConfig: WarriorConfig;
    WarriorEquipConfig: WarriorEquipConfig[];
    WarriorEquipLvUpConfig: WarriorEquipLvUpConfig[][];
    WarriorEquipSuitConfig: WarriorEquipSuitConfig[][];
    WarriorLvConfig: WarriorLvConfig[][];
    WarriorSkillConfig: WarriorSkillConfig[];
    WeaponSoulBaseConfig: WeaponSoulBaseConfig;
    WeaponSoulConfig: WeaponSoulConfig[];
    WeaponSoulItemAttrConfig: WeaponSoulItemAttrConfig[];
    WeaponSoulPosConfig: WeaponSoulPosConfig[][];
    WeaponSoulSuitConfig: WeaponSoulSuitConfig[][];
    WeiXiFocusConstConfig: WeiXiFocusConstConfig;
    WelfareConfig: WelfareConfig[];
    WorldBossBaseConfig: WorldBossBaseConfig;
    WorldBossConfig: WorldBossConfig[];
    WorldBossKillMsgConfig: WorldBossKillMsgConfig[];
    WorldRewardConfig: WorldRewardConfig[];
    RegressionConfig: RegressionConfig;
    YouDangConfig: YouDangConfig;
    DevourEquipLevelConfig: DevourEquipLevelConfig[];
    DevourEquipDataConfig: DevourEquipDataConfig;
    DevourSoulAttrConfig: DevourSoulAttrConfig[][];
    DevourSoulSuitConfig: DevourSoulSuitConfig[][];
    DevourSoulBossConfig: DevourSoulBossConfig[];
    SkillShowConfig: SkillShowConfig[];
    ShareConfig: ShareConfig;
    ShareCumulativeConfig: ShareCumulativeConfig[];
    ShareDailyConfig: ShareDailyConfig[];
    RechargePointConfig: RechargePointConfig[];
    InviteRewardConfig: InviteRewardConfig[];
}
declare class AssetAdapter implements eui.IAssetAdapter {
    /**
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    getAsset(source: string, compFunc: Function, thisObject: any): void;
}
declare const enum BluntBangsSize {
    TOP = 60,
    BOTTOM = 0,
}
declare class ThemeAdapter implements eui.IThemeAdapter {
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param compFunc 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param errorFunc 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    getTheme(url: string, compFunc: Function, errorFunc: Function, thisObject: any): void;
}
declare const enum CopyType {
    /**挂机*/
    STATIC = 0,
    /**关卡Boss*/
    GUANQIABOSS = 1,
    /**材料副本*/
    MATERIAL = 2,
    /**个人副本*/
    PERSONAL = 6,
    /**全民Boss*/
    ALLHUMENBOSS = 7,
    /**通天塔*/
    TIAOZHAN = 9,
    /**秘境Boss*/
    ZHUANSHENGBOSS = 10,
    /**龙城争霸*/
    UNION_WAR = 14,
    /**公会Boss*/
    UNION_BOSS = 15,
    /**经验副本*/
    EXP = 16,
    /**BOSS之家*/
    HOMEBOSS = 17,
    /**引导副本野外Boss*/
    GUIDEBOSS = 18,
    /**世界Boss*/
    NEW_WORLD_BOSS = 19,
    /**土城*/
    TOSEONG = 20,
    /**神兵幻境*/
    MIJING = 21,
    /**烈焰副本*/
    LIEYAN = 23,
    /**烈焰戒指副本*/
    FIRE_RING = 24,
    /**神兵圣域*/
    GOD_WEAPON = 26,
    /**神兵塔*/
    GOD_WEAPON_TOP = 27,
    /**守护神剑的副本类型*/
    GUARD_WEAPON = 29,
    /**巅峰赛季*/
    PEAKED = 30,
    /**腊八boss副本*/
    LABA = 31,
    /**跨服Boss*/
    KF_BOSS = 32,
    /**组队副本*/
    FB_TEAM = 35,
    /**暗之秘境Boss*/
    DARK_BOSS = 36,
    /**隐藏Boss*/
    HIDE_BOSS = 37,
    /**魂兽副本*/
    HUN_SHOU = 38,
    /**魔界入侵*/
    DEVILDOM_BOSS = 39,
    /**跨服竞技场*/
    KF_ARENA = 40,
    /**恶魔法阵*/
    DEMON = 41,
    /**守擂赛*/
    KF_1vN = 42,
    /**世界杯*/
    BALL = 43,
    /**暗殿*/
    DARKHALL = 44,
    /**跨服帮战*/
    UNIONCROSS = 45,
    /**跨服帮战副本*/
    KF_UNION_BATTLE = 46,
    /**神器禁地*/
    SHENWUJINDI = 47,
    /**帮会神兽*/
    UNIONMONTER = 48,
    /**主宰*/
    ZHUZAI = 50,
    /**决战群雄*/
    ADENTURE = 55,
    /**跨服入侵*/
    KFINVADE = 56,
    /**霸主BOSS*/
    ZSBOSS = 57,
    /**魔主降临*/
    DEVILDOM_FINAL_BOSS = 58,
    /**快意恩仇*/
    HATRED = 59,
    /**矿洞协助*/
    MINE_HELP = 60,
    /**魔窟Boss*/
    MOKU_VIP_BOSS = 61,
    /**图腾Boss*/
    TUTEN_BOSS = 62,
    /**召唤Boss*/
    KF_ZH_BOSS = 63,
    /**跨服帮战*/
    DECISIVE = 70,
    /**传奇神殿*/
    LEGENDTEMPLE = 71,
    /**矿洞复仇*/
    MINE_BEAT = 72,
    /**矿洞抢夺*/
    MINE_ROB = 73,
    /**夺命塔*/
    KFTOWER = 74,
    /**九州秘录*/
    FAIRLYLAND = 75,
    /**星域Boss*/
    STARSEA_BOSS = 76,
    /**明星Boss*/
    SPOKESMAN_BOSS = 77,
    MATCHFIGHTING = 80,
    /**服战Boss*/
    SERVER_BATTLE_BOSS = 81,
    FLY_TASK_BOSS = 84,
    RUNNING_RING = 85,
    FLY_TASK_NPC = 86,
    SEALPVE = 90,
    /**元宝副本*/
    GOLD = 100,
    /**神域Boss*/
    HOLYAREA_BOSS = 105,
    /**经验*/
    FB_ID_JINGYAN = 3005,
    /**矿洞*/
    FB_ID_MINE = 99999,
    /**战将BOSS*/
    WARRIOR_BOSS = 200,
}
declare class Currency {
    private static args;
    static getCurrencyName(index: number): string;
    static getCurrencyRes(index: number): string;
}
declare const enum CurrencyTypeEnum {
    /**0-经验 */
    TYPE_0 = 0,
    /**1-金币 */
    TYPE_1 = 1,
    /**2-元宝 */
    TYPE_2 = 2,
    /**3-声望 */
    TYPE_3 = 3,
    /**4-精炼石 */
    TYPE_4 = 4,
    /**5-公会贡献 */
    TYPE_5 = 5,
    /**6-工会资金 */
    TYPE_6 = 6,
    /**6-功勋 */
    TYPE_7 = 7,
    /**8-成就 */
    TYPE_8 = 8,
    /**9-战纹精华 */
    TYPE_9 = 9,
    /**10-战纹碎片 */
    TYPE_10 = 10,
    /**11-低级合击符文碎片 */
    TYPE_11 = 11,
    /**12-高级合击符文碎片 */
    TYPE_12 = 12,
    /**13-神兵经验 */
    TYPE_13 = 13,
    /**14-威望 */
    TYPE_14 = 14,
    /**15-筹码 */
    TYPE_15 = 15,
    /**16-兽神精魄 */
    TYPE_16 = 16,
}
declare class ActorControl extends BaseSystem {
    /** 句柄 */
    static handle: number;
    /** 个人id */
    static actorID: number;
    /** 战纹精华 */
    static runeShatter: number;
    /** 战纹兑换的数值 */
    static runeExchange: number;
    /** 名字 */
    private _myName;
    /** 等级 */
    private _level;
    /** 职业 */
    private _job;
    /** 经验 */
    private _exp;
    /** 战斗力 */
    private _power;
    /** 金钱 */
    private _gold;
    /** 元宝 */
    private _yb;
    /** 魂值 */
    private _soul;
    /** 功勋值 */
    private _feats;
    /** 低级合击装备碎片 */
    private _togeatter1;
    /** 高级合击装备碎片 */
    private _togeatter2;
    /** 威望 */
    private _prestigeValue;
    /** 筹码 */
    private _chip;
    static ins(): ActorControl;
    /**
     * 角色信息
     * 255-1
     */
    downActorInit(handle: number, actorId: number, srvid: number, name: string, level: number, exp: number, power: number, gold: number, yb: number, vipLv: number, soul: number, bagNum: number, feats: number, runeShatter: number, runeEx: number, togeatter1: number, togeatter2: number, prestige: number, job: number, reincarnateLv: number): void;
    /**
     * 处理经验变化
     * 255-7
     */
    downActorExp(level: number, exp1: number, exp: number): void;
    /**
     * 名称
     */
    dispatchNameChange(value: string): void;
    /**
     * 金币
     */
    dispatchGoldChange(value: number): void;
    /**
     * 元宝
     */
    dispatchYbChange(value: number): void;
    /**
     * 功勋
     */
    dispatchFeatsChange(value: number): void;
    /**
     * 修为
     */
    dispatchZsExpChange(value: number): void;
    /**
     * 符文碎片
     */
    dispatchUpdateTogeatter(value: number, type: number): void;
    /**
     * 等级
     */
    dispatchLevelChange(): void;
    /**
     * 精炼石
     */
    dispatchSoulChange(value: number): void;
    /**
     * 战力
     */
    dispatchPowerChange(value: number): void;
    /**
     * 威望
     */
    dispatchWeiWang(value: number): void;
    /**
     * 筹码
     */
    dispatchChip(value: number): void;
    static readonly level: number;
    static readonly job: number;
    static readonly exp: number;
    static readonly power: number;
    static readonly myName: string;
    static readonly gold: number;
    static readonly yb: number;
    static readonly soul: number;
    static readonly feats: number;
    static readonly togeatter1: number;
    static readonly togeatter2: number;
    static readonly samsaraLv: number;
    static readonly prestige: number;
    static readonly chip: number;
    static readonly camp: number;
}
declare const enum EventNames {
    /** SDK初始化完成 */
    SDK_INIT_COMPLETE = 0,
    /** 加载进度 */
    PERLOAD_PROGRESS = 1,
    /** 加载完成 */
    PERLOAD_COMPLETE = 2,
    /** 登陆初始化 */
    LOGIN_INIT = 3,
    /** 凌晨初始化 */
    ZERO_INIT = 4,
    /** 帧率变化 */
    FRAME_RATE_LEVEL = 5,
    /** 移动完成 */
    MAP_MOVE_COMPLETE = 6,
    /** 地图点击 */
    MAP_GRID_CLICK = 7,
    /** Boss挑战结束 */
    BOSS_CHALLENGE_RESULT = 8,
    /** 同步位置 */
    SYNC_POINT = 9,
    /** 刷新时装称号 */
    FASHION_TITLE_REFLASH = 10,
    /** 刷新组队副本 */
    TEAM_COPY_ITEM_REFLASH = 11,
    /** 退出公会 */
    UNION_QUIT = 12,
    /** 通知玩家公会职位变化 */
    UNION_OFFICE_CHANGE = 13,
    /** 公会信息 */
    UNION_INFO = 14,
    /** 公会成员 */
    UNION_MEMBERS = 15,
    /** 公会列表 */
    UNION_LIST = 16,
    /** 公会创建 */
    UNION_CREATE = 17,
    /** 通知有人申请加入公会*/
    UNION_JOIN = 18,
    /** 申请加入公会玩家信息 */
    UNION_APPLY_INFOS = 19,
    /** 通知申请的玩家申请结果 */
    UNION_PROCESS_JOIN = 20,
    /** 公会资金 */
    UNION_MONEY = 21,
    /** 公会修改公告 */
    UNION_CHANGE_NOTICE = 22,
    /** 公会技能信息 */
    UNION_SKILL_INFO = 23,
    /** 公会升级建筑 */
    UNION_UP_BUILDING = 24,
    /** 公会任务信息列表 */
    UNION_TASK_INFOS = 25,
    /** 公会事件记录 */
    UNION_MANAGE_LIST = 26,
    /** 公会捐献次数 */
    UNION_CONTRIBUTE_COUNT = 27,
    /** 玩家公会数据 */
    MY_UNION_INFO = 28,
    /** 广播公会聊天消息 - BOSS已复活 */
    UNION_BOSS_ALIVE = 29,
    /** 所有玩家公会数据 */
    UNION_ALL_INFO = 30,
    /** 公会篝火 */
    UNION_FIRE_UPDATE = 31,
    /** 历练数据 */
    EXPERIENCE_DATA = 32,
    /** 历练勋章数据 */
    EXPERIENCE_MEDAL_DATA = 33,
    /** 每日历练奖励返回 */
    EXPERIENCE_DAY_AWARD = 34,
    /** 历练玉佩等级 */
    EXPERIENCE_JADE_LV = 35,
    /** 历练获得奖励 */
    EXPERIENCE_GET_REWARD = 36,
    /** 战将数据 */
    WARRIOR_DATA = 37,
    /** 战将装备分解成功 */
    WARRIOR_EQUIP_RESOLVE = 38,
    /** 战将装备合成成功 */
    WARRIOR_EQUIP_COMPOSE = 39,
    /** 战将出战变化 */
    WARRIOR_BATTLE_CHANGE = 40,
    /** 战将装备经验 */
    WARRIOR_EQUIP_EXP = 41,
    /** 战将副本提醒 */
    WARRIOR_DUN_REMIND = 42,
    /** 战将装备数据 */
    WARRIOR_EQUIP_DATA = 43,
    /** 战将任务数据 */
    WARRIOR_TASK_DATA = 44,
    /** 神器数据初始化 */
    ARTIFACT_INIT = 45,
    /** 神器数据更新 */
    ARTIFACT_UPDATE = 46,
    /** 图鉴数据 */
    BOOK_DATA = 47,
    /** 神兵经验信息 */
    GODWEAPON_EXP = 48,
    /** 神兵信息 */
    GODWEAPON_INFO = 49,
    /** 神兵副本信息 */
    GODWEAPON_DUN_INFO = 50,
    /** 神兵排行榜信息 */
    GODWEAPON_RANK_INFO = 51,
    /** 神兵任务信息 */
    GODWEAPON_TASK_INFO = 52,
    /** 法阵数据 */
    MAGICCIRCLE_DATA = 53,
    /** 法阵任务 */
    MAGICCIRCLE_TASK = 54,
    /** 法阵升级 */
    MAGICCIRCLE_LV = 55,
    /** 法阵潜能 */
    MAGICCIRCLE_SPECIAL_UP = 56,
    /** 法阵展示 */
    MAGICCIRCLE_SHOW = 57,
    /** 法阵天赋 */
    MAGICCIRCLE_TALENT = 58,
    /** 法阵副本信息 */
    MAGICCIRCLE_DUN = 59,
    /** 天梯竞技信息 */
    LADDER_INFO = 60,
    /** 天梯排行 */
    LADDER_RANK_LIST = 61,
    /** 心法数据 */
    HEARTMETHOD_INFO = 62,
    /** 心法升级 */
    HEARTMETHOD_LV = 63,
    /** 心法分解 */
    HEARTMETHOD_DECOMPOSE = 64,
    /** 传世信息 */
    HEIRLOOM_INFO = 65,
    /** 传世寻宝结果 */
    HEIRLOOM_HUNT = 66,
    /** 传世寻宝记录 */
    HEIRLOOM_HUNT_RECORD = 67,
    /** 传世寻宝奖励信息 */
    HEIRLOOM_HUNT_BOX = 68,
    /** 传世时装 */
    HEIRLOOM_DRESS = 69,
    /** 魂骨信息 */
    SOULBONE_INFO = 70,
    /** 魂骨穿上 */
    SOULBONE_DRESS = 71,
    /** 魂骨脱下 */
    SOULBONE_UNDRESS = 72,
    /** 魂骨穿戴数据 */
    SOULBONE_DRESS_INFO = 73,
    /** 魂玉升级 */
    SOULJADE_LV = 74,
    /** 魂骨升阶 */
    SOULBONE_UPGRADE = 75,
    /** 魂骨副本扫荡 */
    SOULBONE_SWEEP = 76,
    /** 魂骨副本信息 */
    SOULBONE_DUN_INFO = 77,
    /** 魂骨道具分解 */
    SOULBONE_RESOLVE = 78,
    /** 签到数据 */
    SIGNIN_DATA = 79,
    /** 技能添加buff */
    SKILL_BUFF = 80,
    /** 技能删除buff */
    SKILL_REMOVE_BUFF = 81,
    /** 技能升级 */
    SKILL_LV = 82,
    /** 技能全部升级 */
    SKILL_ALL_LV = 83,
    /** 技能合击激活 */
    SKILL_FOCUS_ACTIVE = 84,
    /** 技能合击升级 */
    SKILL_FOCUS_UPGRADE = 85,
    /** 技能合击装备数据 */
    SKILL_FOCUS_EQUIP_DATA = 86,
    /** 技能注灵返回 */
    SKILL_UPGRADE_FORGE = 87,
    /** 回收tip */
    SMELT_TIPS = 88,
    /** 星辰数据 */
    STARSUN_INFO = 89,
    /** 任务数据更新 */
    TASK_DATA_CHANGE = 90,
    /** 任务Trace */
    TASK_TRACE = 91,
    /** 任务成就 */
    TASK_ACHIEVE_UPDATE = 92,
    /**  限时任务更新 */
    LIMIT_TASK_UPDATE = 93,
    /** 任务状态 */
    TASK_POINT_UPDATE = 94,
    /** 任务ParabolicItem */
    TASK_PARABOLIC_ITEM = 95,
    /** 雷霆淬炼数据 */
    THUNDER_STREN_INFO = 96,
    /** 雷霆套装 */
    THUNDER_EQUIP_UP = 97,
    /** 称号列表 */
    TITLE_LIST = 98,
    /** 使用称号 */
    TITLE_USE = 99,
    /** 称号显示*/
    TITLE_SHOW = 100,
    /** 主城BOSS */
    TOSEONG_BOSS_INFO = 101,
    /** 主城BOSS ID*/
    TOSEONG_BOSS_ID = 102,
    /** 主城玩家复活时间 */
    TOSEONG_REMAIN_TIME = 103,
    /** 主城护盾信息 */
    TOSEONG_SHIELD = 104,
    /** 预告奖励 */
    TRAILER_REWARD = 105,
    /** VIP数据 */
    VIP_DATA = 106,
    /** VIP经验 */
    VIP_EXP = 107,
    /** VIP领取奖励状态 */
    VIP_AWARDS = 108,
    /** VIP领取奖励状态 */
    VIP_WEEK_AWARDS = 109,
    /** vip礼包购买 */
    VIP_GIFT_BUY = 110,
    /** 超级会员信息 */
    SUPER_VIP_INFO = 111,
    /** 转生数据 */
    REINCARNATE_DATA = 112,
    /** 转星装备合成 */
    REINCARNATESTAREQUIP_COMPOSE = 113,
    /** 转星装备数据 */
    REINCARNATESTAREQUIP_DATA = 114,
    /** 转星数据 */
    REINCARNATESTAR_DATA = 115,
    /** 装备变化 */
    EQUIP_DATA_CHANGE = 116,
    /** 装备熔炼返回结果 */
    EQUIP_SMELT = 117,
    /** 神装合成 */
    MIX_EQUIP = 118,
    /** 神装合成 */
    MIX_GOD_EQUIP = 119,
    /** 装备附灵 */
    EQUIP_ADD_SPIRIT = 120,
    /** 装备灵魂锁链 */
    EQUIP_ADD_SOUL = 121,
    /** 至尊装备 */
    UITRASONEEQUIP_UPGRADE = 122,
    /** 元宝翻倍回收时间 */
    YB_SHOW_TIMER = 123,
    /** 符文镶嵌 */
    RUNE_INLAY = 124,
    /** 符文升级 */
    RUNE_UPGRADE = 125,
    /** 符文一键分解 */
    RUNE_ONE_KEY_DECOMPOSE = 126,
    /** 符文寻宝 */
    RUNE_HUNT = 127,
    /** 战纹抽奖累计奖励信息 */
    RUNE_BOX_GIFT = 128,
    /** 删除已有的战纹 */
    RUNE_DELETE = 129,
    /** 遭遇战数据 */
    CONFRONT_DATA = 130,
    /** 遭遇战创建掉落 */
    CONFRONT_CREATE_DROP = 131,
    /** 遭遇战记录 */
    CONFRONT_RECORD = 132,
    /** 遭遇战声望跟排名 */
    CONFRONT_PRESTIGE_RANK = 133,
    /** 大富翁数据 */
    DAIFUG_INFO = 134,
    /** 大富翁摇骰子返回 */
    DAIFUG_TURNDICE = 135,
    /** 大富翁返回领取圈数奖励 */
    DAIFUG_ROUND_REWARD = 136,
    /** 大富翁通知全盘需要变换到指定奖励 */
    DAIFUG_OVER_ALL_REWARD = 137,
    /** 监听大富翁一些数据变更(如:骰子数) */
    DAIFUG_UPDATE = 138,
    /** 兵魂数据 */
    WEAPONSSOUL_INFO = 139,
    /** 兵魂升级 */
    WEAPONSSOUL_LV = 140,
    /** 兵魂激活 */
    WEAPONSSOUL_ACT = 141,
    /** 兵魂使用 */
    WEAPONSSOUL_USE = 142,
    /** 返回激活兵魂之灵 */
    WEAPONS_FLEXIBLE_ACT = 143,
    /** 兵魂之灵基础信息 */
    WEAPONS_FLEXIBLE_COUNT = 144,
    /** 龙魂信息 */
    DRAGONSOUL_INFO = 145,
    /** 龙魂升阶 */
    DRAGONSOUL_STAGE_UP = 146,
    /**  龙魂激活*/
    DRAGONSOUL_STAGE_ACT = 147,
    /** 龙魂装备数据 */
    DRAGONSOUL_ITEM_INFO = 148,
    /** 龙魂装备升级 */
    DRAGONSOUL_ITEM_UPDATE = 149,
    /** 龙魂装备分解 */
    DRAGONSOUL_ITEM_SMELT = 150,
    /** 轮回数据 */
    REINCARNATION_INFO = 151,
    /** 轮回合成 */
    REINCARNATION_COMPOSE = 152,
    /** 神物数据 */
    CRAZYBTPLAY_INFO = 153,
    /** 神物升级 */
    CRAZYBTPLAY_LV = 154,
    /** 神物激活 */
    CRAZYBTPLAY_ACT = 155,
    /** 神物强化 */
    CRAZYBTPLAY_STREN = 156,
    /** 神物任务 */
    CRAZYBTPLAY_TASK = 157,
    /** 神力数据 */
    CRAZYBTPLAYCOPY_ANGER = 158,
    /** 神物副本数据 */
    CRAZYBTPLAYCOPY_INFO = 159,
    /** 神物副本护盾 */
    CRAZYBTPLAYCOPY_SHIELD = 160,
    /** 特戒数据*/
    SUPERRING_RING_UPDATE = 161,
    /** 特戒激活 */
    SUPERRING_ACT = 162,
    /** 特戒更新 */
    SUPERRING_SPECIAL_RING_UPDATE = 163,
    /** 特戒梯级 */
    SUPERRING_STAIR_UP = 164,
    /** 特戒解锁 */
    SUPERRING_UNLOCK = 165,
    /** 特戒技能信息 */
    SUPERRING_SKILL_INFO = 166,
    /** 图腾信息 */
    TOTEM_INFO = 167,
    /** 图腾LineChange */
    TOTEM_LINE_CHANGE = 168,
    /** 图腾经验 */
    TOTEM_EXP = 169,
    /** 派发强化数据变更 */
    INTENSIFY_INFO = 170,
    /** 强化-熔炼 */
    INTENSIFY_SMELT = 171,
    /** 洗练-强化 */
    REFINE_FORGE_UPDATE = 172,
    /** 光武白送-租赁 */
    LEASE_RENT = 173,
    /** 神话数据变更 */
    MYTHEQUIP_UPDATE = 174,
    /** 游戏公告 */
    GAME_NOTICE = 175,
    /** 官职数据 */
    OFFICE_INFO = 176,
    /** 支付-充值数据 */
    PAY_RECHARGE1_DATA = 177,
    /** 支付-更新充值数据 */
    PAY_UPDATE_RECHARGE = 178,
    /** 充值套餐充值记录 */
    PAY_UP_DATA_ITEM = 179,
    /** 累计充值天数 */
    PAY_RECHARGE_TOTAL_DAY = 180,
    /** 特权剩余天数 */
    PAY_FRANCHISE_INFO = 181,
    /** 多日连充基本数据 */
    PAY_MUCH_DAY_RECREWARD = 182,
    /** 一元购状态 */
    PAY_ONE_BUY_STATE = 183,
    /** 限时充值数据 */
    PAY_LIMIT_CHARGE = 184,
    /** 限时充值倍数 */
    PAY_LIMIT_CHARGE_MULTIPLE = 185,
    /** 限时特卖初始化数据 */
    PAY_FLASH_SALE_INFO = 186,
    /** 入口 */
    PORTAL_SHOW_VIEWS = 187,
    /** 可以找回的威望值 */
    PRESTIGE_BACK = 188,
    /** 拍卖行物品列表 */
    BARGAIN_LIST_DATA = 189,
    /** 竞拍结果 */
    BARGAIN_RESULT = 190,
    /** 拍卖购买成功 */
    BARGAIN_BUY_RESULT = 191,
    /** 拍卖记录*/
    BARGAIN_RECORD = 192,
    /** 跨服拍卖数据 */
    BARGAIN_CROSS_DATA = 193,
    /** 购买跨服拍品 */
    BARGAIN_CROSS_CHANGE = 194,
    /** 跨服拍卖记录 */
    BARGAIN_CROSS_RECORD = 195,
    /** 商店数据 */
    STORE_DATA = 196,
    /** 购买商品结果 */
    STORE_BUY_RESULT = 197,
    /** 已购买商品数量 */
    STORE_BUY_COUNT = 198,
    /** 商店-刷新 */
    STORE_REFRESH = 199,
    /** 积分商店回包 */
    STORE_REFRESH_INTEGRATION = 200,
    /** 获取功勋商店列表信息 */
    STORE_MEDAL_MESSAGE = 201,
    /** 功勋商店购买结果 */
    STORE_BUY_MEDAL = 202,
    /** 每周限购数据 */
    STORE_WEEK_DATA = 203,
    /** 购买每周限购商品 */
    STORE_WEEK_RESULT = 204,
    /** 珍宝阁数据 */
    STORE_TREASURE_POINT = 205,
    /** 羽翼等级提升消息 */
    FEATHER_UPGRADE = 206,
    /** 羽翼穿戴是否成 */
    FEATHER_WEAR = 207,
    /** 羽翼激活回调 */
    FEATHER_ACT = 208,
    /** 神羽数据同步 */
    FEATHER_GOD_DATA = 209,
    /** 羽翼使用提升丹成功 */
    FEATHER_USE_DAN = 210,
    /** 好友变更 */
    PARTNER_CHANGE = 212,
    /** 好友-移除最近列表 */
    PARTNER_REMOVE_RECENT_LIST = 213,
    /** 派发私聊 */
    PARTNER_CHAT_TO_FRIEND = 214,
    /** 派发处理邮件数据 */
    EMAIL_DATA = 215,
    /** 派发处理邮件详细数据 */
    EMAIL_DETAIL = 216,
    /** 派发处理领取邮件回包 */
    EMAIL_GET_ITEM = 217,
    /** 内功数据 */
    CALCFORCE_DATA = 218,
    /** 内容激活 */
    CALCFORCE_ACT = 219,
    /** 排行榜数据 */
    RANK_DATA = 220,
    /** 接受膜拜结果 */
    RANK_PRAISE_DATA = 221,
    /** 膜拜结果 */
    RANK_PRAISE_RESULT = 222,
    /** 接受所有膜拜数据 */
    RANK_ALL_PRAISE_DATA = 223,
    /** 探宝结果 */
    TREASUREHUNT_RESULT = 224,
    /** 探宝 */
    TREASUREHUNT_BEST_LIST_INFO = 225,
    /** 聊天新消息 */
    RAMBLE_NEW_MSG = 226,
    /** 聊天系统消息 */
    RAMBLE_SYS_MSG = 227,
    /** 暗殿装备强化升级 */
    DARKEQUIP_LV = 228,
    /** 暗殿装备熔炼 */
    DARKEQUIP_SMELT = 229,
    /** 暗殿装备合成 */
    DARKEQUIP_COMPOSE = 230,
    /** 暗殿装备信息 */
    DARKEQUIP_INFO = 231,
    /** 暗殿装备当前剩余强化升级经验 */
    DARKEQUIP_POINT = 232,
    /** 经脉数据 */
    MERIDIANS_DATA = 233,
    /** 秘籍数据 */
    ESOTERICA_DATA = 234,
    /** 秘籍数据更新 */
    ESOTERICA_UPDATE = 235,
    /** 秘籍Chnage */
    ESOTERICA_CHANGE = 236,
    /** 秘籍解锁信息 */
    ESOTERICA_LOCK_INFO = 237,
    /** 激情泡点进入 */
    BLISTER_ENTER_SUCCESS = 238,
    /** 激情泡点归属变更 */
    BLISTER_BELONG_CHANGE = 239,
    /** 激情泡点开放 */
    BLISTER_OPEN_INFO = 240,
    /** 激情泡点个人信息 */
    BLISTER_MY_INFO = 241,
    /** 激情泡点区域变更 */
    BLISTER_AREA_CHANGE = 242,
    /** 采矿基础信息 */
    MINE_BASE_INFO = 243,
    /** 刷新采矿品质返回 */
    MINE_REFRESH = 244,
    /** 开始采矿返回 */
    MINE_START = 245,
    /** 采矿场景信息 */
    MINE_INIT_SCENE = 246,
    /** 采矿记录 */
    MINE_RECORD = 247,
    /** 采矿场景数据更新 */
    MINE_SCENE_UPDATE = 248,
    /** 采矿结束 */
    MINE_FINISHED = 249,
    /** 采矿记录有更新 */
    MINE_RECORD_HAS_UPDATE = 250,
    /** 采矿更新战力 */
    MINE_ROLE_INFO = 251,
    /** 神兽数据 */
    BEAST_INFO = 252,
    /** 神兽穿戴 */
    BEAST_WEAR_EQUIP = 253,
    /** 神兽出战状态 */
    BEAST_BATTLE_STATE = 254,
    /** 更新神兽经验 */
    BEAST_EXP = 255,
    /** 神兽装备提升 */
    BEAST_UP_EQUIP = 256,
    /** 神兽装备熔炼 */
    BEAST_SMELT = 257,
    /** 战灵信息 */
    ASHTARTE_INFO = 258,
    /** 战灵回应提升经验 */
    ASHTARTE_UP_EXP = 259,
    /** 战灵回应使用提升丹 */
    ASHTARTE_DRUG = 260,
    /** 战灵戴上装备 */
    ASHTARTE_WEAR = 261,
    /** 战灵合成装备 */
    ASHTARTE_COMPOSE = 262,
    /** 战灵皮肤升级 */
    ASHTARTE_SKIN_UP = 263,
    /** 战灵天赋 */
    ASHTARTE_TALENT_LV = 264,
    /** 切换战灵皮肤 */
    ASHTARTE_SKIN_CHANGE = 265,
    /** 背包道具增加 */
    BACKPACK_ITEM_ADD = 266,
    /** 背包道具变更 */
    BACKPACK_ITEM_CHANGE = 267,
    /** 背包道具删除 */
    BACKPACK_ITEM_DEL = 268,
    /** 背包道具数量变更 */
    BACKPACK_ITEM_COUNT_CHANGE = 269,
    /** 背包数量快不足的提示 */
    BACKPACK_WILL_FULL = 270,
    /** 派发更新寻宝仓库 */
    BACKPACK_HUNT_STORE = 271,
    /** 派发是否有可用道具提示 */
    BACKPACK_HAS_ITEM_CAN_USE = 272,
    /** 派发使用道具成功 */
    BACKPACK_USE_ITEM_SUCCESS = 273,
    /** 背包增加格子数 */
    BACKPACK_VOL_ADD = 274,
    /** 阵营战-进入阵营*/
    CAMPWAR_ENTER_SUCCESS = 275,
    /** 阵营战排行 */
    CAMPWAR_RANK_INFO = 276,
    /** 阵营战开放信息 */
    CAMPWAR_OPEN_INFO = 277,
    /** 阵营战奖励信息 */
    CAMPWAR_GIFT_INFO = 278,
    /** 阵营战个人积分变更 */
    CAMPWAR_SCORE_CHANGE = 279,
    /** 阵营切换3秒倒计时 */
    CAMPWAR_LITTLE_CHANGE = 280,
    /** 阵营切换时间 */
    CAMPWAR_CHANGE_TIME = 281,
    /** 阵营战击杀人数 */
    CAMPWAR_KILLED = 282,
    /** 狂狗激活 */
    CRAZYDOG_ACT = 283,
    /** 狂狗幻化 */
    CRAZYDOG_ILLUSION = 284,
    /** 狂狗升级经验 */
    CRAZYDOG_UP_EXP = 285,
    /** 狂狗升级消息 */
    CRAZYDOG_UPGRADE = 286,
    /** 狂狗升星 */
    CRAZYDOG_UP_STAR = 287,
    /** 每日红包数据 */
    DAILYREDBAG_INFO = 288,
    /** 每日红包日志 */
    DAILYREDBAG_LOGS = 289,
    /** 主宰数据 */
    DOMINATE_INFO = 290,
    /** 主宰升级 */
    DOMINATE_UPGRADE = 291,
    /** 主宰合成 */
    DOMINATE_COMPOSE = 292,
    /** 时装变更信息 */
    FASHION_INFO = 293,
    /** 时装激活 */
    FASHION_ACT = 294,
    /** 派发羽翼改变 */
    FASHION_CHANGE_WING = 295,
    /** 世界boss数据初始化&更新 */
    WORLD_BOSS_INFO = 296,
    /** boss护盾百分比 */
    BOSS_SHIELD_PER = 297,
    /** 世界boss开始抽奖 */
    BOSS_LOTTERY_RAN = 298,
    /** 世界boss抽奖结果 */
    BOSS_LOTTERY_RESULT = 299,
    /** boss出现 */
    BOSS_APPEAR = 300,
    /** boss死亡或消失 */
    BOSS_DISAPPEAR = 301,
    /** boss归属变化 */
    BOSS_BELONG_CHANGE = 302,
    /** boss-攻击变化 */
    BOSS_HAS_ATTACK_CHANGE = 303,
    /** boss-可攻击变化 */
    BOSS_CAN_PLAY_CHANGE = 304,
    /** BOSS复活时间 */
    BOSS_REMAIN_TIME = 305,
    /** BOSS胜利结算 */
    WORLD_BOSS_END_TIME = 306,
    /** 通知BOSS复活 */
    WORLD_BOSS_NOTICE = 307,
    /** 新世界boss信息 */
    NEW_WORLD_BOSS_INFO = 308,
    /** 新世界boss复活cd时间 */
    NEW_WORLD_BOSS_RELIVE_TIME = 309,
    /** 新世界boss信息开启 */
    NEW_WORLD_BOSS_OPEN = 310,
    /** 新世界boss鼓舞次数 */
    NEW_WORLD_BOSS_ATTR_NUM = 311,
    /** 新世界boss排行榜数据 */
    NEW_WORLD_BOSS_RANK = 312,
    /** 隐藏boss基础信息 */
    HIDE_BOSS_INFO = 313,
    /** boss护盾 */
    BOSS_SHIELD_INFO = 314,
    /** 跨服竞技玩家个人信息 */
    CROSS_ARENA_PLAYER_INFO = 315,
    /** 跨服竞技战队信息 */
    CROSS_ARENA_TEAM_INFO = 316,
    /** 跨服竞技刷新旗帜 */
    CROSS_ARENA_REF_FLAG = 317,
    /** 跨服竞技匹配状态 */
    CROSS_ARENA_MATCH_STATE = 318,
    /** 跨服竞技变化积分 */
    CROSS_ARENA_CHANGE_SCORE = 319,
    /** 跨服竞技场景内数据信息 */
    CROSS_ARENA_INFO = 320,
    /** 跨服竞技可邀请的帮派成员列表 */
    CROSS_ARENA_GUILDS = 321,
    /** 跨服竞技我的战斗信息 */
    CROSS_ARENA_MY_BATTLE_INFO = 322,
    /** 跨服竞技奖励领取信息 */
    CROSS_ARENA_JOIN_REWARDS = 323,
    /** 跨服竞技开启预告 */
    CROSS_ARENA_OPEN = 324,
    /** 跨服竞技排行 */
    CROSS_ARENA_RANK = 325,
    /** 跨服boss数据 */
    CROSS_BOSS_INFO = 326,
    /** 跨服boss自身复活 */
    CROSS_BOSS_SELF_REVIVE = 327,
    /** 跨服boss旗帜刷新复活 */
    CROSS_BOSS_REVIVE = 328,
    /** 跨服boss基础玩家数据 */
    CROSS_BOSS_BASE_INFO = 329,
    /** 跨服boss掉落列表 */
    CROSS_BOSS_DROP_LIST = 330,
    /** 跨服boss广播结果 */
    CROSS_BOSS_BROAD_CAST_RESULT = 331,
    /** 魔界boss数据 */
    DEVILDOM_BOSS_INFO = 332,
    /** 魔界复活 */
    DEVILDOM_REVIVE = 333,
    /** 魔界信息 */
    DEVILDOM_INFO = 334,
    /** 魔界护盾 */
    DEVILDOM_SHIELD = 335,
    /** 魔界分配奖励 */
    DEVILDOM_AWARD = 336,
    /** 巅峰赛当前状态 */
    PEAKED_STATE = 337,
    /** 巅峰赛个人报名数据 */
    PEAKED_SIGN_UP = 338,
    /** 巅峰赛淘汰赛个人战报数据 */
    PEAKED_ELIMINATE_REPORT_DATA = 339,
    /** 巅峰赛本服赛面板数据 */
    PEAKED_BF_INFO_LIST = 340,
    /** 巅峰赛本服赛面板数据 */
    PEAKED_TOP_RANK = 341,
    /** 巅峰赛本服下注信息 */
    PEAKED_BET_INFO = 342,
    /** 跨服淘汰赛个人战报数据 */
    PEAKED_CROSS_ELIMINATE_REPORT_DATA = 343,
    /** 跨服赛面板数据 */
    PEAKED_CROSS_INFO_LIST = 344,
    /** 跨服点攒排行榜信息处理 */
    PEAKED_CROSS_TOP_RANK = 345,
    /** 跨服下注信息 */
    PEAKED_CROSS_BET_INFO = 346,
    /** 巅峰赛膜拜成功 */
    PEAKED_WORSHIP = 347,
    /** 巅峰赛开启 */
    PEAKED_OPEN = 348,
    /** 图腾boss基础数据 */
    TOTEM_BOSS_BASE_INFO = 349,
    /** 图腾boss数据 */
    TOTEM_BOSS_INFO = 350,
    /** 图腾boss死亡 */
    TOTEM_BOSS_DIE = 351,
    /** 子角色列表 */
    SUB_ROLE_CHANGE = 352,
    /** 进入场景 */
    ENTER_MAP = 353,
    /** 处理创建场景实体 */
    CREATE_OTHER_ENTITY = 354,
    /** 处理血量更新 */
    HP_CHANGE = 355,
    /** 移除实体 */
    REMOVE_ENTITY = 356,
    /** 派发同步实体坐标消息 */
    MOVE_CAMERA = 357,
    /** MP更新 */
    MP_CHANGE = 358,
    /** 经验mc */
    EXP_MC = 359,
    /** 公会变化 */
    GUILD_CHANGE = 360,
    /** 其他玩家更新属性 */
    OTHER_ATT_CHANGE = 361,
    /** 改变物体目标 */
    CHANGE_ATTR_POINT = 362,
    /** 改变目标 */
    CHANGE_TARGET = 363,
    /** 攻击目标 */
    ATK_TARGET = 364,
    /** 所有攻击目标 */
    ALL_ATK_TARGET = 365,
    /** 派发挂机状态变更 */
    HOOK_STATE_CHANGE = 366,
    /** 移动实体 */
    MOVE_ENTITY = 367,
    /** 初始化副本信息 */
    COPY_INFO = 368,
    /** 更新副本信息 */
    COPY_INFO_UPDATE = 369,
    /** 处理副本剩余时间 */
    COPY_TIME = 370,
    /** 副本经验信息 */
    COPY_EXP_INFO = 371,
    /** 副本怪物总数 */
    COPY_EXP_TOTAL = 372,
    /** 副本烈焰信息 */
    COPY_RING_INFO = 373,
    /** 关卡初始化信息 */
    GUAN_QIA_INFO = 374,
    /** 副本boss结果 */
    COPY_BOSS_RESULT = 375,
    /** 关卡id变化 */
    GUAN_QIA_ID_CHANGE = 376,
    /** Guard剩余时间 */
    GUARD_LEFT_TIME = 377,
    /** Guard信息 */
    GUARD_INFO = 378,
    /** Guard使用技能 */
    GUARD_USE_SKILL = 379,
    /** Guard副本信息 */
    GUARD_COPY_INFO = 380,
    /** 创建组队副本房间成功 */
    CREATE_TF_ROOM_SUCCESS = 381,
    /** 组队副本房间信息变更 */
    FT_ROOM_CHANGE = 382,
    /** 组队副本通关信息 */
    FT_ROOM_PASS_INFO = 383,
    /** 组队副本鲜花记录 */
    TEAM_DUN_FLOWER_RECORDS = 384,
    /** 守护神剑-下发获奖记录 */
    GUARD_WEAPON_LOGS = 385,
    /** 副本聊天 */
    COPY_CHAT = 386,
    /** 副本-KillNetwork */
    COPY_KILL_NETWORK = 387,
    /** 副本幸运数据 */
    COPY_EXP_LUCKY_ACT = 388,
    /** 元宝副本信息 */
    COPY_GOLD_INFO = 389,
    /** 元宝副本怪物总数 */
    COPY_GOLD_TOTAL = 390,
    /** 副本掉落元宝表现 */
    COPY_ADD_DROP_GOLD = 391,
    /** 派发活动信息初始化 */
    AMUSEMENT_DATA = 392,
    /** 活动领取结果 */
    AMUSEMENT_REWARD_RESULT = 393,
    /** 活动达标Info*/
    AMUSEMENT_DA_BIAO_INFO = 394,
    /** 切换活动页面下发 */
    AMUSEMENT_CHANGE_PAGE = 395,
    /** 七天登录系统是否有奖励领取 */
    AMUSEMENT_SEVENDAY_IS_AWARDS = 396,
    /** 跨服消费榜返回 */
    AMUSEMENT_CROSS_RANK = 397,
    /** 返回红包数据 */
    AMUSEMENT_ENVELOPE_DATA_CALL = 398,
    /** 下发红包数据 */
    AMUSEMENT_RED_ENVELOPE_DATA = 399,
    /** 活动RedPackets */
    AMUSEMENT_RED_PACKETS = 400,
    /** 活动RoleRedPacket */
    AMUSEMENT_ROLE_RED_PACKET = 401,
    /** 活动开红包消息派发 */
    AMUSEMENT_GET_RED_ENVELOPE = 402,
    /** 派发更新单个活动界面 */
    AMUSEMENT_PANEL_UPDATE = 403,
    /** 七天登录领取回调 */
    AMUSEMENT_SEVENDAY_AWARD_CALL = 404,
    /** 活动HuntResult */
    AMUSEMENT_HUNT_RESULT = 405,
    /** 矿工战力 */
    MINE_UPDATE_POWER = 406,
    /** 矿洞结束 */
    MINE_END = 407,
    /** 公会战红包信息 */
    UNION_WAR_RED_BAG_INFO = 408,
    /** 公会战的返回 */
    UNION_WAR_JOIN_PLAY_BACK = 409,
    /** 个人积分 帮派积分 变化 返回 */
    UNION_WAR_POINT_UPDATE = 410,
    /** 行会战个人排行榜 */
    UNION_WAR_PERSONAL_RANK = 411,
    /** 帮派战 皇宫归属变更 */
    UNION_WAR_CITY_OWN = 412,
    /** 公会战领取每日奖励状态 变化 */
    UNION_WAR_DAY_REWARD_INFO = 413,
    /** 公会战旗子状态变化 */
    UNION_WAR_FLAG_INFO_CHANGE = 414,
    /** 公会战护盾 */
    UNION_WAR_SHIELD = 415,
    /** 公会战AssignsReward */
    UNION_WAR_ASSIGNS_REWARD = 416,
    /** 公会战SendRewardSuccess */
    UNION_WAR_SEND_REWARD_SUCCESS = 417,
    /** 公会战获胜公会信息 */
    WIN_UNION_INFO = 418,
    /** 公会战开始信息 */
    UNION_WAR_START_INFO = 419,
    /** 公会战威胁变化 */
    UNION_WAR_THREATEN_CHANGE = 420,
    /** 公会战红点 */
    UNION_WAR_RED_POINT = 421,
    /** 击杀数 */
    UNION_WAR_KILL_HUMAN = 422,
    /** 合服活动归属公会名称 */
    HEFU_UNION_BELONG = 423,
    /** 公会战个人积分奖励数据 */
    UNION_WAR_POINT_REWARD_CHANGE = 424,
    /** 公会战可攻击列表变化 */
    UNION_WAR_CAN_PLAY_CHANGE = 425,
    /** 公会战排行列表 */
    UNION_WAR_RANK_LIST = 426,
    /** 我的公会战人数 */
    UNION_WAR_NUM = 427,
    /** 公会战SendListChange */
    UNION_WAR_SEND_LIST_CHANGE = 428,
    /** 公会战rankInfo */
    UNION_WAR_RANK_INFO = 429,
    /** 公会战我的排名变化 */
    UNION_WAR_MY_RANK_CHANGE = 430,
    /** 公会战LotteryMaxPost */
    UNION_WAR_LOTTERY_MAX_POST = 431,
    /** 公会boss玩家数据同步 */
    UNION_BOSS_INFO = 432,
    /** 公会BOSS详细信息 */
    UNION_BOSS_DETAIL_CHANGE = 433,
    /** 公会boss挑战成功 */
    UNION_BOSS_CHALLENGE_SUCCESS = 434,
    /** 公会boss关卡排名 */
    UNION_BOSS_RANK_INFO_CHANGE = 435,
    /** 公会副本信息 */
    UNION_COPY_INFO = 436,
    /** 派发活动信息初始化 */
    PAMUSEMENT_IS_GET_AWARDS = 437,
    /** 领取结果 */
    PAMUSEMENT_REWARD_RESULT = 438,
    /** 切换活动页面下发 */
    PAMUSEMENT_CHANGE_PAGE = 439,
    /** 派发更新单个活动界面,(目前是开服活动) */
    PAMUSEMENT_PANEL = 440,
    /** 公会商店信息 */
    UNION_STORE_INFO = 441,
    /** 公会宝箱记录 */
    UNION_STORE_BOX_INFO = 442,
    /** 公会宝箱结果 */
    UNION_STORE_BOX_RESULT = 443,
    /** Boss hp 变化 */
    BOSS_HP_CHANGE = 444,
    /** 派发boss数据更新 */
    BOSS_DATA = 445,
    /** UpdateRechargeEx */
    PAY_UPDATE_RECHARGE_EX = 446,
    /** 月卡剩余天数 */
    PAY_GET_MONTH_DAY = 447,
    /** 欢乐购初始化数据 */
    PAY_HAPPY_SHOP = 448,
    /** 商品的购买数据 */
    INVESTMENT_INFO = 449,
    /** 投资首次红点*/
    INVESTMENT_FIRST_RED_POINT = 450,
    /** 派发活动信息变更 */
    THREE_HEROES_INFO_CHANGE = 451,
    /** DailyGiftActInfo */
    DAILY_GIFT_ACT_INFO = 452,
    /** 处理经验变化 */
    ACTOR_EXP = 453,
    /** 角色信息 */
    ACTOR_INIT = 454,
    /** 名称 */
    ACTOR_NAME_CHANGE = 455,
    /** 金币 */
    ACTOR_GOLD_CHANGE = 456,
    /** 元宝 */
    ACTOR_YB_CHANGE = 457,
    /** 功勋 */
    ACTOR_FEATS_CHANGE = 458,
    /** 修为 */
    ACTOR_ZSEXP_CHANGE = 459,
    /** 符文碎片 */
    ACTOR_TOGEATTER = 460,
    /** 等级改变 */
    ACTOR_LEVEL_CHANGE = 461,
    /**精炼石 */
    ACTOR_SOUL_CHANGE = 462,
    /** 战力值改变 */
    ACTOR_POWER_CHANGE = 463,
    /** 威望值改变 */
    ACTOR_PRESTIGE = 464,
    /** 筹码 */
    ACTOR_CHIP = 465,
    /** 开服天数 */
    SERVER_OPEN_DAY = 466,
    /** 零点更新 */
    ZERO_UPDATE_SETTING = 467,
    /** 战纹系统-碎片读取 */
    RUNE_SHATTER = 468,
    /** 战纹系统- 战纹兑换消耗 */
    RUNE_EX_CHANGE = 469,
    /** 经验条变化 */
    LEVEL_BAR_CHANGE = 470,
    /** AdjustMapPos */
    ADJUST_MAP_POS = 471,
    /** 血量变更 */
    ENTITY_HP_CHANGE = 472,
    /** ViewOpen */
    VIEW_OPEN = 473,
    /** 阵营变更 */
    CHANGE_CAMP = 474,
    /** 飘物品 */
    FLY_ITEM = 475,
    /** 飘物品 */
    FLY_ITEM_EX = 476,
    /** 关闭view */
    OBSERVE_CLOSE_VIEW = 477,
    /** 查找其他玩家结果 */
    PLAYER_RESULT = 478,
    /** 派发分享状态信息 */
    INVITE_INFO_UPDATE = 479,
    /** SpokesPersonAchiTask初始任务数据 */
    SPOKES_PERSON_ACHI_TASK_LEVEL_INIT = 480,
    /** SpokesPersonAchiTask任务数据变更 */
    SPOKES_PERSON_ACHI_TASK_LEVEL_PER_INFO = 481,
    /** SpokesPersonAchiTask开启状态 */
    SPOKES_PERSON_ACHI_TASK_STATE = 482,
    /** SpokesPersonDoubleExpBuffInfo */
    SPOKES_PERSON_DOUBLE_EXP_BUFF_INFO = 483,
    /** SpokesPersonDoubleExpRedchange */
    SPOKES_PERSON_DOUBLE_EXP_RED_CHANGE = 484,
    /** 转盘数据 */
    SPOKES_PERSON_TURNTABLE_INFO = 485,
    /** 转盘结果 */
    SPOKES_PERSON_TURNTABLE_REWARD_INDEX = 486,
    /** SpokesPerson红点 */
    SPOKES_PERSON_RED = 487,
    /** 转盘红点 */
    SPOKES_PERSON_TURNTABLE_RED = 488,
    /** BuffExpRed */
    SPOKES_PERSON_BUFF_EXP_RED = 489,
    /** AchiTaskRed */
    SPOKES_PERSON_ACHI_TASK_RED = 490,
    /** godWeaponRentRed */
    GOD_WEAPON_RENT_RED = 491,
    /** WholeHourTaskRed */
    SPOKES_PERSON_WHOLE_HOUR_TASK_RED = 492,
    /** 副本能量 */
    COPY_ADD_ENERGY = 493,
    /** 战灵升级 */
    ASHTARTE_UPGRADE = 494,
    /** 拍卖行手动刷新数据(前端自己维护列表时用到) */
    BARGAIN_UPDATE = 495,
    /** 神兽装备强化红点 */
    BEAST_FORGE_RED = 496,
    /** 神兽装备穿戴红点 */
    BEAST_WEAR_RED = 497,
    /** 神兽总红点 */
    BEAST_RED = 498,
    /** 图鉴总红点 */
    BOOK_RED = 499,
    /** 图鉴激活红点 */
    BOOK_ACT_RED = 500,
    /** 图鉴分解红点 */
    BOOK_RESOLVE_RED = 501,
    /** 图鉴升级红点 */
    BOOK_UP_RED = 502,
    /** 跨服boss护盾 */
    CROSS_BOSS_SHIELD = 503,
    /** 公会战抽奖点数 */
    UNION_WAR_LOTTERY_POINT = 504,
    /** 目标列表 */
    TARGET_LIST = 505,
    /** 更新挑战副本信息 */
    CHALLENGE_COPY_INFO = 506,
    /** 更新挑战副本信息 */
    CHALLENGE_COPY_REWARD_STATUS = 507,
    /** 挑战副本领取每日奖励返回 */
    CHALLENGE_COPY_GET_REWARD = 508,
    /** 挑战副本抽奖 */
    CHALLENGE_COPY_LOTTERY_REWARD = 509,
    /** 遭遇战战斗结构 */
    CONFRONT_FIGHT_RESULT = 510,
    /** 服务器存储初始化设置 */
    SERVER_STORAGE_INIT_SETTING = 511,
    /** 魔主降临数据 */
    DEVILDOM_FINAL_INFO = 512,
    /** 魔主降临帮会归属数据 */
    DEVILDOM_FINAL_UNION_BELONG = 513,
    /** 击败魔主数据 */
    DEVILDOM_FINAL_LAST_INFO = 514,
    /** 魔界NRedPoint */
    DEVILDOM_N_Red = 515,
    /** 魔界BigRed */
    DEVILDOM_BIG_RED = 516,
    /** 魔界红点 */
    DEVILDOM_RED = 517,
    /** 仇恨数据 */
    HATRED_INFO = 518,
    /** 仇家数据 */
    HATRED_ENEMY_LIST = 519,
    /** 仇家更新 */
    HATRED_REP_INFO = 520,
    /** 副本红点 */
    COPY_RED = 521,
    /** 副本红点0 */
    COPY_RED0 = 522,
    /** 副本红点1 */
    COPY_RED1 = 523,
    /** 副本红点2 */
    COPY_RED2 = 524,
    /** 副本红点3 */
    COPY_RED3 = 525,
    /** 副本红点4 */
    COPY_RED4 = 526,
    /** 日常副本红点 */
    DAILY_COPY_RED = 527,
    /** 日常金币副本红点 */
    DAILY_COPY_GOLD_RED = 528,
    /** 日常经验副本红点 */
    DAILY_COPY_EXP_RED = 539,
    /** 日常副本GuardWeapon红点 */
    DAILY_COPY_GUARD_WEAPON_RED = 540,
    /** 日常副本法阵 */
    DAILY_COPY_MAGIC_CIRCLE_RED = 541,
    /** ChangeCanAttackHandle */
    CHANGE_CAN_ATTACK_HANDLE = 542,
    /** 跨服竞技红点 */
    CROSS_ARENA_RED = 543,
    /** 跨服竞技红点1 */
    CROSS_ARENA_RED1 = 544,
    /** 跨服竞技红点2 */
    CROSS_ARENA_RED2 = 545,
    /** 跨服boss红点 */
    CROSS_BOSS_RED = 546,
    /** 暗殿boss红点 */
    DARK_HALL_BOSS_RED = 547,
    /** 主宰boss红点 */
    DOMINATE_BOSS_RED = 548,
    /** 主宰穿戴装备 */
    DOMINATE_EQUIP_WEAR = 549,
    /** 跨服领域红点 */
    CROSS_FIELD_RED = 550,
    /** 跨服领域红点 */
    CROSS_FIELD_RED1 = 551,
    /** 跨服领域红点 */
    CROSS_FIELD_RED2 = 552,
    /** 跨服领域红点 */
    CROSS_FIELD_RED3 = 553,
    /** 跨服领域红点 */
    CROSS_FIELD_RED4 = 554,
    /** 跨服领域红点 */
    CROSS_FIELD_RED5 = 555,
    /** 跨服领域红点 */
    CROSS_FIELD_RED6 = 556,
    /** 图腾boss红点 */
    TOTEM_BOSS_RED = 557,
    /** 巅峰赛红点 */
    PEAKED_RED = 558,
    /** TargetListEX */
    TARGET_LIST_EX = 559,
    /** 按点装备uplist */
    DARK_EQUIP_UP_LIST = 560,
    /** 暗殿装备穿戴成功 */
    DARK_EQUIP_WEAR_SUCCESS = 561,
    /** 暗殿装备红点 */
    DARK_EQUIP_RED = 562,
    /** 暗殿装备红点 */
    DARK_EQUIP_RED00 = 563,
    /** 暗殿装备红点 */
    DARK_EQUIP_RED0 = 564,
    /** 暗殿装备红点 */
    DARK_EQUIP_RED1 = 565,
    /** 暗殿装备红点 */
    DARK_EQUIP_RED2 = 566,
    /** 暗殿装备红点 */
    DARK_EQUIP_RED3 = 567,
    /** 神话装备红点 */
    MYTH_EQUIP_RED = 568,
    /** 神话装备up红点 */
    MYTH_EQUIP_UP_RED = 569,
    /** 神话装备强化红点 */
    MYTH_EQUIP_FORGE_RED = 570,
    /** 主宰红点 */
    DOMINATE_RED = 571,
    /** 主宰装备萃取 */
    DOMINATE_EXTRACT = 572,
    /** 创角色名重复 */
    CREATE_NAME_REPEAT = 573,
    /** 心法红点 */
    HEART_METHOD_RED = 574,
    /** 角色心法红点 */
    HEART_METHOD_ROLE_RED = 575,
    /** 历练玉佩数据 */
    EXPERIENCE_JADE_NEW_DATA = 576,
    /** 魂骨红点 */
    SOUL_BONE_RED = 577,
    /** 魂骨角色红点 */
    SOUL_BONE_ROLE_RED = 578,
    /** 秘籍选择 */
    ESOTERICA_SELECTED = 579,
    /** 羽翼派发培养回调  */
    FEATHER_BOOST = 580,
    /** 升阶羽翼刷新倒计时 */
    FEATHER_TIME = 581,
    /** 神羽红点 */
    FEATHER_DEITY_RED = 582,
    /** 神羽装备红点 */
    FEATHER_DEITY_ITEM_RED = 583,
    /** 神羽合成 */
    FEATHER_DEITY_COMPOSE = 584,
    /** 派发熔炼装备勾选列表 */
    EQUIP_CHECK_LIST = 585,
    /** 派发角色按钮提示 */
    ROLE_HINT = 586,
    /** 锻造红点 */
    INTENSIFY_ALL_RED = 587,
    /** 锻造强化红点 */
    INTENSIFY_INTENSIFY_RED = 588,
    /** 锻造铸造红点 */
    INTENSIFY_FORGE_RED = 589,
    /** 锻造精炼 */
    INTENSIFY_REFINE = 590,
    /** 锻造兵魂 */
    INTENSIFY_WEAPON_SOUL = 591,
    /** 锻造法阵 */
    INTENSIFY_MAGIC_CIRCLE = 592,
    /** 怪物说话 */
    MONSTER_SPEAK = 593,
    /** 经验飘点 */
    COPY_EXP_FLY = 594,
    /** 合击移除 */
    SKILL_FOCUS_REMOVE = 595,
    /** 合击开始CD */
    SKILL_FOCUS_START_CD = 596,
    /** 连斩 */
    MULTI_KILL = 597,
    /** 技能名字 */
    SHOW_SKILL_WORD = 598,
    /** 圣物合成 */
    GOD_WEAPON_ITEM_COMPOUND = 599,
    /** 圣物融合 */
    GOD_WEAPON_ITEM_FUSE = 600,
    /** 神兵红点 */
    GOD_WEAPON_RED = 601,
    /** 神兵所有页签红点 */
    GOD_WEAPON_ALL_TAB_RED = 602,
    /** 神兵页签1红点 */
    GOD_WEAPON_TAB1_RED = 603,
    /** 神兵页签2红点 */
    GOD_WEAPON_TAB2_RED = 604,
    /** 神兵页签3红点 */
    GOD_WEAPON_TAB3_RED = 605,
    /** 神兵Boss红点 */
    GOD_WEAPON_BOSS_RED = 606,
    /** 神兵副本红点 */
    GOD_WEAPON_DUN_RED = 607,
    /** 神兵item红点 */
    GOD_WEAPON_ITEM_RED = 608,
    /** 神兵任务红点 */
    GOD_WEAPON_TASK_RED = 609,
    /** 神物升级红点 */
    CRAZYBTPLAY_UP_RED = 610,
    /** 神物强化红点 */
    CRAZYBTPLAY_STREN_RED = 611,
    /** 传世红点 */
    HEIRLOOM_RED = 612,
    /** 神物红点 */
    CRAZYBTPLAY_RED = 613,
    /** 主宰装备红点 */
    DOMINATE_EQUIP_ALL_RED = 614,
    /** 主宰装备红点 */
    DOMINATE_EQUIP_RED = 615,
    /** 主宰装备红点 */
    DOMINATE_EQUIP_TRINKET_RED = 616,
    /** 图腾红点 */
    TOTEM_RED = 617,
    /** 矿洞红点 */
    MINE_RED = 618,
    /** 矿洞抢夺红点 */
    MINE_ROB_RED = 619,
    /** 矿洞记录红点 */
    MINE_RECORD_RED = 620,
    /** 矿洞开始红点 */
    MINE_CAN_START_RED = 621,
    /** 矿洞奖励 */
    MINE_CAN_AWARD = 622,
    /** 矿洞可抢信息 */
    MINE_CAN_ROB_INFO = 623,
    /** 矿洞更新可抢信息 */
    MINE_CAN_ROB_INFO_UPDATE = 624,
    /** 掠夺返回 */
    MINE_ROB_RESULT = 625,
    /** 玩法红点 */
    PLAY_WAY_RED = 626,
    /** 阵营战红点 */
    CAMP_WAR_RED = 627,
    /** 大富翁红点 */
    DAIFUG_RED = 628,
    /** 泡点红点 */
    BLISTER_RED = 629,
    /** 神物副本红点 */
    CRAZYBTPLAY_COPY_RED = 630,
    /** 矿洞复仇结果 */
    MINE_FIGHT_BACK_RESULT = 631,
    /** 矿洞战斗状态 */
    MINE_FIGHT_STATE = 632,
    /** MythEquipSelected */
    MYTH_EQUIP_SELECTED = 633,
    /** 官职红点 */
    OFFICE_RED = 634,
    /** 官职每日奖励红点 */
    OFFICE_DAILY_AWARD_RED = 635,
    /** 官职升级红点 */
    OFFICE_UPGRADE_RED = 636,
    /** 聊天黑名单 */
    RAMBLE_BLACK_LIST = 637,
    /** 合成 */
    PIECE_COMPOSE_SEC_SEL = 638,
    /** 副本警告 */
    COPY_PLAY_WARN = 639,
    /** 副本自动Pk */
    COPY_AUTO_PK = 640,
    /** 副本自动pk2 */
    COPY_AUTO_PK2 = 641,
    /** 公会聊天红点 */
    UNION_CHAT_RED = 642,
    /** 派发新发送消息成功 */
    RAMBLE_SEND_INFO_SUCCESS = 643,
    /** 获取新公会消息 */
    GET_NEW_UNION_MESSAGE = 644,
    /** 转星boss红点 */
    REINCARNATE_STAR_BOSS_RED = 645,
    /** 转星装备红点 */
    REINCARNATE_STAR_EQUIP_RED = 646,
    /** 转星合成红点 */
    REINCARNATE_STAR_COMPOSE = 647,
    /** 转星套装红点 */
    REINCARNATE_STAR_SUIT_RED = 648,
    /** 转星QHRed */
    REINCARNATE_STAR_QH_RED = 649,
    /** 转星装备套装红点 */
    REINCARNATE_STAR_EQUIP_SUIT_RED = 650,
    /** 转星红点 */
    REINCARNATE_RED = 651,
    /** 转星升级红点 */
    REINCARNATE_UP_RED = 652,
    /** 更新印记信息 */
    FLAME_MARK_INFO = 653,
    /** 烈焰银记升级暴击返回 */
    FLAME_MARK_UPGRADE = 654,
    /** 星辰升级红点 */
    STAR_SUN_UP_RED = 655,
    /** 星辰红点 */
    STAR_SUN_RED = 656,
    /** 锻造-派发强化提示 */
    INTENSIFY_FORGE_TIPS = 657,
    /** 背包使用秘籍 */
    BAG_USE_ESOTERICA = 658,
    BACKPACK_DAMAGE_ITEM_COMPLETE = 659,
    /** 黑市红点 */
    BLACK_MARKET_RED = 660,
    /** 每周商店红点 */
    WEEK_SHOP_RED = 661,
    /** 寻宝商店红点 */
    TREASURE_STORE_RED = 662,
    /** 寻宝商店更新 */
    TREASURE_STORE_UPDATE = 663,
    /** 道具使用上限 */
    USE_LIMIT_DATA = 664,
    /** 主城状态变化 */
    TOSEONG_CHANGE_ATT_STATUE = 665,
    /** 可选礼包使用结果 0成功 */
    BACKPACK_GIFT_RESULT = 666,
    /** 公会火红点 */
    UNION_FIRE_RED = 667,
    /** 行会大厅红点 */
    UNION_HHDT_RED = 668,
    /** 管理页签 */
    UNION_GLDT_RED = 669,
    /** 公会每日奖励 */
    UNION_DAY_REWARD = 670,
    /** 龙城争霸红点 */
    UNION_SCZB_RED = 671,
    /** 公会能发送奖励红点 */
    UNION_SEND_REWARD_RED = 672,
    /** 公会红包 */
    UNION_HAVE_RED_BAG = 673,
    /** 练功房分页红点*/
    UNION_LIAN_GONG_RED = 674,
    /** 行会boss红点 */
    UNION_BOSS_RED = 675,
    /** 魔界分奖励红点 */
    DEVILDOM_FEN_AWARD_RED = 676,
    /** 每日红包首次红点 */
    DAILY_RED_BAG_FIRST_RED = 677,
    /** 狂狗红点 */
    CRAZY_DOG_RED = 678,
    /** 每日红包图标红点*/
    DAILY_RED_BAG_PORTAL_RED = 679,
    /** 特殊活动变更 */
    AMUSEMENT_SPECIALS = 680,
    /** 组队副本红点值改变 */
    COPY_SHOW_RED_CHANGE = 681,
    /** 光武白送首次红点 */
    LEASE_FIRST_RED = 682,
    /** 代言人任务数据 */
    SPOKES_PERSON_TASK_INFO = 683,
    /** 商店红点 */
    STORE_RED_POINT = 684,
    /** 行会红点 */
    UNION_HANG_HUI_RED = 685,
    /** 神器引导 */
    ARTIFACT_GUIDE = 686,
    /** 分享到桌面 */
    PLATFORM_AMUSE_GAME_DESKTOP = 687,
    /** GameFBGift */
    PLATFORM_AMUSE_GAME_FB_GIFT = 688,
    /** GameFBRate */
    PLATFORM_AMUSE_GAME_FB_RATE = 689,
    /** 关注 */
    PLATFORM_AMUSE_GUAN_ZHU = 690,
    /** 分享 */
    PLATFORM_SHARE = 691,
    /** 答题数据 */
    ONLINE_QUIZ_DATA = 692,
    /** 答题结果 */
    ONLINE_QUIZ_CHECK = 693,
    /** 代言人boss提醒 */
    SPOKES_PERSON_BOSS_REMIND = 694,
    /** 代言人任务状态 */
    SPOKES_PERSON_TASK_STATUS = 695,
    /** 首死亡处理 */
    DIE_GUIDE = 696,
    /** 魔主降临UpStatus */
    DEVILDOM_FINAL_UP_STATUS = 697,
    /** 战将boss红点 */
    WARRIOR_BOSS_RED = 698,
    /** boss更新数据列表 */
    BOSS_UPDATE_WORLD_PLAY_LIST = 699,
    /** 官职开启 */
    OFFICE_OPEN = 700,
    /** WeekStoreRed */
    WEEK_STORE_RED = 701,
    /** 代言人任务pro */
    SPOKES_PERSON_TASK_PRO = 702,
    /** 万妖活动排行下行 */
    SEAL_PVE_RANK_DATA = 703,
    /** 直升丹红点 */
    POSTZHISHENGDANRED = 704,
    /** 合击觉醒 */
    SKILL_FORGE_AWAKE = 705,
    /** 合击觉醒数据 */
    SKILL_FORGE_AWAKE_DATA = 706,
    /** 合击觉醒红点 */
    SKILL_FORGE_AWAKE_RED = 707,
    /** 合击红点 */
    SKILL_FORGE_RED = 708,
    /** 洪荒之力数据 */
    ASHTARTE_FORGE_DATA = 709,
    /** 特戒丹药 */
    FLAME_MARK_DAN = 710,
    WEAPONCLOTHESTYPE = 711,
    TUNSHIEQUIPSINITMSG = 712,
    TUNSHIEQUIPSSINGLEUPDATA = 713,
    TUNSHIEQUIPSBOSSLIST = 714,
    TUNSHIEQUIPSHOUHUNTIP = 715,
    TUNSHIEQUIPLEVELRED = 716,
    TUNSHIEQUIPSOULRED = 717,
    TUNSHIEQUIPREDPONT1 = 718,
    /**神羽铸造数据 */
    FEATHER_FORGE_DATA = 719,
    /**神羽铸造列表 */
    FEATHER_FORGE_ITEM = 720,
    /**神羽铸造红点 */
    FEATHER_FORGE_Red = 721,
    /**组队副本红点切换 */
    TEAMCOPYCHANGE_RED = 722,
    /**神殿红点 */
    DEITYTEMPLE_RED = 723,
    /**神殿下发奖励 */
    DEITYTEMPLE_REWORD = 724,
    /**神殿副本红点 */
    DEITYTEMPLE_FBRED = 725,
    /**动作结束 */
    ACTION_COMPLETE = 726,
    /**cg帧结束 */
    FRAME_COMPLETE = 727,
    /**动画结束 */
    ANIMATION_COMPLETE = 728,
    /**神殿所有数据 */
    DEITYTEMPLE_ALL_DATAS = 729,
    /**分享所有数据 */
    SHARE_ALL_INFO = 730,
    /**分享数据 */
    SHARE_INFO = 731,
    /**分享奖励数据 */
    SHARE_REWARD_INFO = 732,
    /**分享倒计时结束 */
    SHARE_COUNT_DOWN_END = 733,
    /**神殿奖励数据变化 */
    DEITYTEMPLE_REWORD_CH = 734,
    /**派发boss自动用卷勾选变化 */
    POSTCHECK_CHANGE_EFF = 735,
    /**派发跨服boss提醒设置变化 */
    CROSS_BOSS_REMIND = 736,
    /** 道具使用选择礼包 */
    TREASURE_CHOOSE_GIFT = 737,
    /** 关闭导航按钮状态 */
    CLOSE_NAV = 738,
    /**守擂 玩家列表与我的对手列表 */
    ONETOMANY_GUARDRANK = 739,
    /**守擂 下注记录 */
    ONETOMANY_BETBACK = 740,
    /**1VN 总阶段等信息 */
    ONETOMANY_STATUS = 741,
    /**1VN 我当前阶段的守擂赛记录 */
    ONETOMANY_MYRECORD = 742,
    /**守擂 下注刷新 */
    ONETOMANY_REFBETFUN = 743,
    /**信息（被下注者） */
    ONETOMANY_BETOPPONENT = 744,
    /**资格赛 玩家列表  */
    ONETOMANY_PRELIMIRANK = 745,
    /**报名情况  */
    ONETOMANY_SIGNUP = 746,
    /**1VN 红点0 */
    ONETOMANY_REDPOINT0 = 747,
    /**1VN 红点1 */
    ONETOMANY_REDPOINT1 = 748,
    /**1VN 红点2 */
    ONETOMANY_REDPOINT2 = 749,
    /**累充信息 */
    OPEN_CUMULATIVE_RECHARGE_INFO = 750,
    /**循环特权卡 */
    GM_PRIVILEGE_INFO = 751,
    /**星海红点 */
    STARSEA_REDPOINT = 752,
    /**星海地图红点 */
    STARSEA_MAP_REDPOINT = 753,
    /**星海背包红点 */
    STARSEA_BAG_REDPOINT = 754,
    /**星海BOSS红点 */
    STARSEA_BOSS_REDPOINT = 755,
    /**星海数据 */
    STARSEA_INFO = 756,
    /**星海置换数据 */
    STARSEA_ITEM_CHANGE = 757,
    /**星海BOSS死亡 */
    STARSEA_BOSS_DIE = 758,
    /**星海BOSS数据 */
    STARSEA_BOSS = 759,
    /**星海BOSS复活 */
    STARSEA_BOSS_RELIVE = 760,
    /**星海BOSS玩法数据 */
    STARSEA_BOSS_INFO = 761,
    /**星海空位 */
    STARSEA_SLOT_ACT = 762,
    /**星海地图 */
    STARSEA_MAP_ACT = 763,
    /**星海经验值变更 */
    STARSEA_EXP = 764,
    /**星海孔位数据 */
    STARSEA_SLOT_INFO = 765,
    /**邀请数据*/
    INVITE_INFO = 766,
    /**邀请奖励数据*/
    INVITE_REWARD_INFO = 767,
}
declare class GameConst {
    static FIRE_RING_ID: number;
    static FORGE_MAX: number;
    static AUTO_GUANQIA: number;
}
declare module IntensifyConst {
    /** 锻造索引 */
    const FORGE_EQUIP: number[];
    /** 装备索引 */
    const EQUIP_POS: number[];
}
declare const enum IntensifyPanelEnum {
    INTENSIFY = 0,
    REFINE = 1,
    FORGE = 2,
    WEAPONSOUL = 3,
    MAGICCIRCLE = 4,
}
/**
 * 道具常量定义
 */
declare const enum ItemConst {
    /** 改名卡 */
    RENAME = 450001,
    /** 经验丹 */
    EXP_ITEM = 200137,
    /** 官印 */
    GUANYIN_ITEM = 600005,
    /** 升级大礼包*/
    LEVELUP_ITEM = 200155,
    /** 金砖*/
    GOLD_BRICK = 200164,
    /** 装备寻宝卷*/
    TREASURE_ITEM = 200165,
    /** 战纹寻宝卷*/
    TREASURE_RUNE = 200166,
    /** 野外boss卷*/
    PUBLICBOSS = 200156,
    /** 秘境boss卷*/
    WORLDBOSS = 200157,
    /** 烈焰副本卷*/
    FIRE_FB = 202000,
    /** 神羽碎片*/
    GODWING_ITEM = 601000,
    /** 感恩节抽奖钥匙*/
    THANKS_ITEM = 0,
    /** 神域boss卷*/
    HOLYAREABOSS = 200995,
    /** 威望令牌 */
    WEIWANG_ITEM = 200318,
    /** 圣魂精华 */
    GODWEAPON_ITEM = 200333,
    /** 精金 */
    JINGJIN = 200332,
    /** 跨服令牌 */
    KFBOSS = 204246,
    /** 代言秘笈 */
    SPOKESMAN_ACHI_ITEM = 205612,
}
declare const enum ItemType {
    TYPE_0 = 0,
    TYPE_1 = 1,
    TYPE_2 = 2,
    TYPE_3 = 3,
    TYPE_4 = 4,
    TYPE_5 = 5,
    TYPE_6 = 6,
    TYPE_7 = 7,
    TYPE_8 = 8,
    TYPE_9 = 9,
    TYPE_10 = 10,
    TYPE_11 = 11,
    TYPE_12 = 12,
    TYPE_13 = 13,
    TYPE_14 = 14,
    TYPE_15 = 15,
    TYPE_16 = 16,
    TYPE_17 = 17,
    TYPE_18 = 18,
    TYPE_19 = 19,
    TYPE_20 = 20,
    TYPE_21 = 21,
    TYPE_22 = 22,
    TYPE_23 = 23,
    TYPE_24 = 24,
    TYPE_25 = 25,
    TYPE_26 = 26,
    TYPE_27 = 27,
    TYPE_28 = 28,
    TYPE_29 = 29,
    TYPE_30 = 30,
    TYPE_31 = 31,
    TYPE_33 = 33,
    TYPE_34 = 34,
    TYPE_37 = 37,
    TYPE_38 = 38,
    TYPE_39 = 39,
    TYPE_40 = 40,
    TYPE_41 = 41,
    TYPE_42 = 42,
    TYPE_43 = 43,
    TYPE_44 = 44,
    TYPE_45 = 45,
    TYPE_46 = 46,
    TYPE_47 = 47,
    TYPE_97 = 97,
    TYPE_98 = 98,
    TYPE_100 = 100,
    TYPE_101 = 101,
    TYPE_102 = 102,
}
declare const enum JobConst {
    /** 无 */
    None = 0,
    /** 战士 */
    ZhanShi = 1,
    /** 法师 */
    FaShi = 2,
    /** 道士 */
    DaoShi = 3,
}
declare const enum LinkType {
    /**组队副本 */
    teamFB = 1,
    /**跨服竞技场 */
    KfArena = 2,
    /**决战群雄 */
    adventureFB = 3,
    /**副本 */
    fbHelp = 4,
    /**快意恩仇 */
    revengeHelp = 5,
    /**矿洞 */
    mineHelp = 6,
    /**跨服入侵 */
    kfInvade = 7,
    /**道具 */
    linkItem = 8,
}
declare let PATH_ROOT: string;
declare let PATH_MAP: string;
declare let PATH_RES: string;
declare let PATH_EFF: string;
declare let PATH_WUQI: string;
declare let PATH_RENWU: string;
declare let PATH_CHIBANG: string;
declare let PATH_GUAIWU: string;
declare let PATH_SKILLEFF: string;
declare let PATH_SKILLJSON: string;
declare let PATH_PUBLIC: string;
declare let WUQI_PREFIX: string;
declare let RENWU_PREFIX: string;
declare let CHIBANG_PREFIX: string;
declare let GUAIWU_PREFIX: string;
declare const enum ShowType {
    LEVEL = 0,
    WING = 1,
    ZHUZAO = 2,
    LONGHUN = 3,
    BOOK = 5,
    EQUIP = 6,
    RING = 7,
    SAMSARA = 8,
    ZHANLING = 9,
    DEMON_ACT = 10,
    SHENWU = 11,
    POWER = 12,
    MASTEREQUIP = 13,
    ZHANWEN = 14,
    SPECIALRING = 15,
    SHENBINLV = 16,
    SHENBINACT = 17,
    SHENBINQUALITY2 = 18,
    SHENBINLAYER = 19,
    SHENSHOUFIGHT = 20,
    SHENYUEQUIP = 21,
    BINHUNACT = 22,
    ZUDUITONGGUAN = 23,
    JOINUNION = 24,
    FRIEND_COUNT = 25,
    SHENBING_TOTAL_LV = 26,
    ROLE_NUM = 27,
    XIAOFEI = 100,
}
declare class SkillConst {
    static EFF_SKY_BALL: number;
    static BASE_SKILL_INDEX: number[];
}
/**
 * 效果类型
 * 1 附加伤害 {a=系数,t=施法者属性类型,b=附加值}
 * 2 加血 {a=系数,t=施法者属性类型,b=附加值}
 * 3 附加属性 {a=系数,t1=施法者属性类型,b=附加值, t2=附加属性类型}
 * 4 附加状态
 * 5 召唤 {怪物1id,怪物2id，怪物3id…}
 * 6 未知
 * 7 开启最高承受伤害上限 {a=系数}
 * 8 免疫眩晕
 */
declare const enum SkillEffType {
    /** 附加伤害 */
    AdditionalDamage = 1,
    /** 加血 */
    AddBlood = 2,
    /** 附加属性 */
    AdditionalAttributes = 3,
    /** 附加状态 */
    AdditionalState = 4,
    /** 召唤 */
    Summon = 5,
    /** 其他 */
    AddExAttributes = 6,
    /** 宿主有效的附加属性 */
    HostAddAttributes = 7,
    /** 霸体免疫眩晕 */
    SuperArmor = 8,
    ShapeDamege = 9,
    BuffSkill = 10,
}
declare const enum SpeakType {
    appear = 1,
    hit = 2,
    die = 3,
}
declare const enum StatusType {
    StatusType_Invincibility = 0,
    StatusType_Stun = 1,
    StatusType_Shild = 2,
    StatusType_Armor = 3,
    StatusType_Bind = 4,
    StatusType_DeathCurse = 5,
    StatusType_AllCrit = 6,
    StatusType_HighestHurt = 7,
    StatusType_ResStun = 8,
    StatusType_Frozen = 9,
    StatusType_Observed = 10,
    StatusType_ActExDam = 11,
    StatusType_SkillLimit = 12,
    StatusType_ResStunFrozen = 13,
    StatusType_Silent = 14,
    StatusType_Count = 15,
}
declare const enum SwitchConst {
    FIRSTCHARGE = 1,
    ACTIVITY = 2,
    RANK = 3,
    MALL = 4,
    FULI = 5,
    MONTHCARD = 6,
    TREASURE = 7,
    WORLDMAP = 8,
    RING = 9,
    MIJI = 10,
    BOSS = 11,
    FB = 12,
    ONEKEY = 13,
    CHALLENGE = 14,
    SHENQIGUIDE = 15,
    BOOK = 16,
    WEAPONS = 17,
    UNION = 18,
    VIPGIFT = 19,
    LIMITTASK = 20,
    FOCUS = 21,
    SHARE = 22,
    FENGCE = 23,
    DAILYGIFT = 24,
    QUICKDROP = 25,
    MABI = 26,
    NEWEQUIP = 27,
    CITYMONSTER = 28,
    DOUBLEELEVEN = 29,
    GODWEAPON = 30,
    SUPERVIP = 31,
    TOSEONG = 32,
    THANKS = 33,
    HFACTIVITY = 34,
    DOUBLE_TWELVE = 35,
    DOUBLE_TWELVE_RECHARGE = 36,
    BATTLE = 37,
    PAODIAN = 38,
    CHRISTMAS = 39,
    NEWYEAR = 40,
    HAPPYSEVENDAY = 41,
    CELEBRATION = 42,
    CHAT = 43,
    ZHIZUN = 44,
    LABA = 45,
    SPRINGBEGIN = 46,
    ZHANLING = 47,
    XIAONIAN = 48,
    SPRINGFESTIVAL = 49,
    SPRINGEIGHTDAY = 50,
    KAIMENHONG = 51,
    SANBA = 52,
    LONGTAITOU = 53,
    VERSIONCEL = 54,
    PROVE = 55,
    QINGMING = 56,
    FIGHT = 57,
    WANBAVIP = 58,
    WANBASHARE = 59,
    WANBAINVATE = 60,
    WANBASAVE = 61,
    WANBAPLAT = 62,
    DEMON_ACT = 63,
    HEFUONLY = 64,
    INVESTMENT = 65,
    FOOTBALL = 66,
    HONGYUNDANGTOU = 67,
    XSTM = 68,
    SHENWU = 69,
    INVESTLV = 70,
    INVESTLOGIN = 71,
    LEGENDFORGE = 72,
    INVESTNEWLOGIN = 73,
    ACTIVITY2 = 74,
    SPOKESMAN = 75,
    LIMITRECHARGE = 76,
    ACTIVITY16INVEST = 77,
    SMELT = 78,
    MONTHTIPS = 79,
    DIRECTSHOP = 80,
    UNION_WAR_PREVIEW = 81,
    NEW_BOSS = 82,
    INVESTGUANQIA = 83,
    DECISIVEBATTLE = 90,
    REDBAGRAIN = 91,
    SPOKESMANACT = 92,
    KOBE = 93,
    SEALPVE = 95,
    ONLINECHAT = 200,
    FCM = 201,
    HONORTHOU = 202,
    BINDPHONE = 204,
    CLOSE_KFCHAT = 1001,
    ONEBUY = 1002,
    ZHANLINGWIN = 1003,
    MERRYSHOP = 1004,
    FBGIFT = 1005,
    FBRATE = 1006,
    LIMITCHARGE = 1007,
    LEVELGIFT = 1008,
    LOOPACT = 1009,
    KFJJ = 1010,
    CCFL = 1011,
    DAMAGE = 1012,
    JZFB = 1013,
    GOLDBOSS = 1014,
    INVEST = 1015,
    LTSHOW = 1016,
    BFICO = 1017,
    CSZB = 1018,
    ZGLB = 1019,
    NEWONEBUY = 1020,
    ONENBUY = 1021,
    VOUCHERS = 1022,
    JUMPGUIDE = 1024,
    TANABATAACY = 1025,
    NATIONALACY = 1026,
    HALLOWEENACY = 1027,
    DIRECTSHOP1 = 1028,
}
declare const enum TaskType {
    killMonster = 68,
    ladder = 83,
}
declare const enum ThunderSuitType {
    TYPE0 = 0,
    TYPE1 = 1,
}
/**
 * 伤害显示控制类
 */
declare class DamageControl extends SingleClass {
    private containers;
    private imgs;
    private urlDic;
    static ins(): DamageControl;
    createDamageObj(dtype: DamageTypes, num: number | string, type: string, offset?: number, offsetY?: number, job?: number, isMy?: boolean): DamageContainer;
    getTypeUrl(_type: DamageTypes, job?: number): string;
    getImage(): eui.Image;
    getContainer(): DamageContainer;
    pushImage(img: any): void;
    pushContainer(container: any): void;
}
declare class DamageContainer extends egret.DisplayObjectContainer {
    bmpContainer: egret.DisplayObjectContainer;
    offset: number;
    createDamageObj(dtype: DamageTypes, num: number | string, type: string, offset?: number, offsetY?: number, job?: number, isMy?: boolean): void;
    addImage(dtype: DamageTypes, job?: number): void;
    addBmpNumber(num: number | string, type: string, offset?: number, offsetY?: number): void;
    private onLoaded(e);
    private resetPosition();
    destroy(): void;
}
/**
 * 伤害显示
 */
declare class DamageDisplay extends BaseLeakDisplay {
    private offY;
    private offsetY;
    private _lastType;
    private damageNum;
    private tempdamageViews;
    private tick;
    private delayCount;
    constructor();
    /**
     * 飘血显示
     * @param target    飘血目标
     * @param source    伤害源
     * @param type      DamageTypes
     * @param value     伤害值
     */
    private showDamage([target, source, type, value]);
    private removeFloatTarget(floatTarger);
    /**
     * 主角受击 - 暴击和幸运一击效果
     * @param {egret.DisplayObject} floatTarger
     * @param {egret.Tween} tween
     */
    private injuredCritLucky(floatTarger, tween);
    /**
     * 主角受击 - 飘血效果
     * @param {egret.DisplayObject} floatTarger
     * @param {egret.Tween} tween
     */
    private injured(floatTarger, tween);
    /**
     * 主角攻击 - 暴击或幸运一击效果
     * @param {egret.DisplayObject} floatTarger
     * @param {egret.Tween} tween
     */
    private atkCritLucky(floatTarger, tween);
    /**
     * 主角攻击 - 合击飘血效果
     * @param {egret.DisplayObject} floatTarger
     * @param {egret.Tween} tween
     */
    private atkHeJi(floatTarger, tween);
    /**
     * 主角攻击 - 普通飘血效果
     * @param {egret.DisplayObject} floatTarger
     * @param {egret.Tween} tween
     */
    private atk(floatTarger, tween);
    /**
     * 漂浮
     * @param floatTarger  漂浮对象池
     * @param type 漂浮对象
     * @param target    飘血目标
     * @param source    伤害源
     * @param isAddDamage  伤害源
     */
    private floatImg(floatTarger, type, target, source, isAddDamage?);
    private destroyDamageObj(damage);
}
declare const enum DamageParamEnum {
    sp1 = 60,
    sp2 = 80,
    sp3 = 80,
    sp4 = 400,
    sp5 = 720,
    s0 = 1.2,
    s1 = 0.4,
    s2 = 0.75,
    s3 = 0.6,
    s4 = 0.6,
    s5 = 0.6,
    posX6 = -18,
    posX7 = -20,
    posX8 = -23,
    posX9 = -30,
    posY6 = 10,
    posY7 = 13,
    posY8 = 16,
    posY9 = 20,
    alpha6 = 0.6,
    alpha7 = 0.5,
    alpha8 = 0.4,
    alpha9 = 0,
    sp6 = 600,
    sp7 = 200,
    sp8 = 400,
    sp9 = 400,
    s6 = 0.6,
    s7 = 0.6,
    s8 = 0.6,
    s9 = 0.6,
    posX1 = 90,
    posX2 = 0,
    posX3 = 0,
    posY1 = 100,
    posY2 = 0,
    posY3 = 0,
    posY4 = 10,
    alpha0 = 1,
    alpha1 = 1,
    alpha2 = 1,
    alpha3 = 0.9,
    alpha4 = 0.5,
    alpha5 = 0,
    c_sp1 = 80,
    c_sp2 = 200,
    c_sp3 = 200,
    c_sp4 = 1000,
    c_sp5 = 1200,
    c_s0 = 0.1,
    c_s1 = 0.8,
    c_s2 = 0.8,
    c_s3 = 0.8,
    c_s4 = 0.6,
    c_s5 = 0.1,
    c_posX1 = 0,
    c_posX2 = 100,
    c_posX3 = 120,
    c_posY1 = 120,
    c_posY2 = 10,
    c_posY3 = 10,
    c_posY4 = 10,
    c_alpha0 = 1,
    c_alpha1 = 1,
    c_alpha2 = 1,
    c_alpha3 = 0.6,
    c_alpha4 = 0,
    c_alpha5 = 0,
    h_sp1 = 80,
    h_sp2 = 300,
    h_sp3 = 200,
    h_sp4 = 1000,
    h_sp5 = 1200,
    h_s0 = 0.1,
    h_s1 = 1.2,
    h_s2 = 1.2,
    h_s3 = 1.2,
    h_s4 = 1.2,
    h_s5 = 1.2,
    h_posX1 = 0,
    h_posX2 = 100,
    h_posX3 = 120,
    h_posY1 = 150,
    h_posY2 = 10,
    h_posY3 = -30,
    h_posY4 = -30,
    h_alpha0 = 1,
    h_alpha1 = 1,
    h_alpha2 = 1,
    h_alpha3 = 0.6,
    h_alpha4 = 0,
    h_alpha5 = 0,
    sn_sp1 = 600,
    sn_sp2 = 200,
    sn_sp3 = 200,
    sn_s0 = 1.3,
    sn_s1 = 1.3,
    sn_s2 = 1.3,
    sc_sp1 = 600,
    sc_sp2 = 200,
    sc_sp3 = 200,
    sc_s0 = 1.5,
    sc_s1 = 1.5,
    sc_s2 = 1.5,
}
/**
 * 伤害类型
 */
declare const enum DamageTypes {
    TYPE0 = 0,
    /** 命中 */
    TYPE1 = 1,
    /** 暴击 */
    TYPE2 = 2,
    /** 闪避 */
    TYPE4 = 4,
    /** 幸运一击 */
    TYPE8 = 8,
    /** 合击 */
    TYPE16 = 16,
    /** 附加伤害 */
    TYPE32 = 32,
    /** 玉佩的威慑 */
    TYPE64 = 64,
    /** 连续伤害 */
    TYPE128 = 128,
    /** 追命伤害 */
    TYPE256 = 256,
    /** 致命一击 */
    TYPE512 = 512,
    /** 主宰 */
    TYPE1024 = 1024,
    /** 多重暴击 */
    TYPE2048 = 2048,
    /**吞噬一击*/
    TYPE4096 = 4096,
    TYPE8192 = 8192,
}
/**
 * 地图网格
 */
declare class MapControl {
    /** 当前地图格子大小 */
    static CELL_SIZE: number;
    /** 当前地图最大宽度 */
    static MAX_WIDTH: number;
    /** 当前地图最大高度 */
    static MAX_HEIGHT: number;
    /** 当前地图最大列数 */
    static COL: number;
    /** 当前地图最大行数 */
    static ROW: number;
    /** A星 */
    static aStar: AStar;
    /** 地图数据 */
    private static mapDatas;
    /** 副本id */
    private static _copyId;
    /** 地图id */
    static mapID: number;
    static mapX: number;
    static mapY: number;
    /** 副本类型 */
    static copyType: number;
    static copyName: string;
    static copyDesc: string;
    static lastCopyTyp: number;
    static lastCopyId: number;
    /** 安全区 */
    static safetyZone: any;
    static areaData: any;
    static areaValue: any;
    /**
     * 初始化
     */
    static init(data: any): void;
    /**
     * 移动实体
     * @param entity
     * @param endX
     * @param endY
     */
    static moveEntity(entity: UnitMonster, endX: number, endY: number, isStraightLine?: boolean): void;
    /**
     * 获取一个路径参数为网格坐标
     * @param fromX
     * @param fromY
     * @param targetX
     * @param targetY
     */
    static getPatch(fromX: number, fromY: number, targetX: number, targetY: number): AStarNode[];
    /**
     * 全体人员去到某个点
     * @param tx
     * @param ty
     * @param fun
     * @param funThis
     */
    static myMoveTo(tx: number, ty: number, fun: Function, funThis?: any): void;
    static moveTo(endX: number, endY: number): boolean;
    static parser(copyId: number, mapId: number, mapX: number, mapY: number, copyType: number, copyName: string, copyDesc: string): void;
    static initArea(): void;
    static areaStore(areaData: any, area: any, areaType: any): void;
    /***
     * 检查是否在安全区
     */
    static checkSafety(point: any): boolean;
    static checkAreaById(point: any, id: any, safetyZone?: any): boolean;
    static copyId: number;
    /**
     * 挂机场景
     */
    static sceneInHook(): boolean;
    static getFileName(): string;
    /**
     * 是否反转
     */
    static getTurn(): number;
    /**
     * 是否自动合击
     */
    static autoPunch(): boolean;
    /**
     * 是否可以协助
     */
    static canHelp(): boolean;
    /** 获取相对于目标的坐标矩形 */
    static getRectangle(target: UnitMonster, x: number, y: number): egret.Rectangle;
    /**
     * 获取坐标内的怪物列表
     */
    static getIncludeElement(target: UnitMonster, points: egret.Point[], charList: UnitMonster[]): UnitMonster[];
    /**
     * 通过下标及长宽获取相对坐标
     * @param index
     * @param w
     * @param h
     * @returns {egret.Point}
     */
    static getPoint(index: number, w: number, h: number): egret.Point;
    /**
     * 获取目标的下标
     * @param sour
     * @param target
     * @param width
     * @param height
     * @returns {number}
     */
    static getTargetIndex(sour: UnitMonster, target: UnitMonster, width: number, height: number): number;
    /**
     * 检查移动
     */
    static checkWalkableByPixel(x: number, y: number): boolean;
    /**
     * 返回随机一个在>=range范围的格子
     * @param px 格子x
     * @param py 格子y
     * @param range 多少格子范围外的
     * @returns {any}
     */
    static getPosRange(px: any, py: any, range: number): any[];
    static getPosRangeByDir(px: any, py: any, dir: number, range: number): any[];
    /**
     * 获取目标点到方向格子的格子
     * @param x 目标点
     * @param y 目标点
     * @param dir 目标点（x,y)到当前点（需要求的）的方向
     * @returns {any[]}
     */
    static getPosRangeRandom(x: any, y: any, dir: number, range?: number): any;
    static point2Grip(x: any): number;
    static grip2Point(px: any): number;
}
declare const enum ScenesAreaType {
    Safe = 0,
    PaoDian = 1,
    Transfer = 2,
    KFGuildBoss = 3,
    ShenWuBelong = 4,
    TutengBoss = 5,
}
/**
 * 地图渲染
 */
declare class MapDisplay extends BaseLeakDisplay {
    static DRAW_GRID: boolean;
    private _stepIndex;
    /**地图背景 */
    private _mapTile;
    /**物品 */
    private _dropItemDisplay;
    /**实体 */
    private _entityDisplay;
    /**物品名字 */
    private _dropItemNameDisplay;
    /**技能表现 */
    private _skillBackDisplay;
    /**技能表现 */
    private _skillTopDisplay;
    /**飘血视图 */
    private _damageDisplay;
    private _shape;
    private _shapeContainer;
    sceneEff: any;
    private moveObjDic;
    constructor();
    initMap(): void;
    private sortEntity();
    private sortF(d1, d2);
    addEntity(entity: egret.DisplayObject): void;
    removeEntity(entity: egret.DisplayObject): void;
    /**
     * 移动实体
     */
    moveEntity(param: Array<any>): void;
    static moveComplete(unit: UnitMonster): void;
    private moveNextStep(entity, path, isGrid?);
    private moveToPoint(entity, nextPoint, path, isGrid);
    private onEnterFrame(dt);
    private moveObj(obj, curTime);
    private onChange(obj);
    private onComplete(obj);
    private onGridClick(e);
    /**
     * 移动镜头
     * @param x 镜头中心X
     * @param y 镜头中心Y
     * @param force 是否强制执行
     */
    lookAt(x: number, y: number, force?: boolean): void;
    private minValue(tx, stw, mv, offset?);
    /**
     * 切换地图会清除场景上的所有显示
     */
    changeMap(): void;
    protected addEvents(): void;
    /**
     * 调整地图坐标
     */
    private adjustMapPos();
    private createNpc();
    private drawGrid();
    clearAllLayer(): void;
}
/**
 * 地图块
 */
declare class MapTile extends egret.DisplayObjectContainer {
    private maxImagX;
    private maxImagY;
    private mapName;
    private thumbnail;
    private showImages;
    private lastUpdateX;
    private lastUpdateY;
    private isThumbnailComplete;
    private turn;
    private _fileDic;
    private _imageList;
    private _poolImages;
    constructor();
    destructor(): void;
    private onThumbnailComplete(e);
    initThumbnail(w: number, h: number, fName: string, turn: number): void;
    private clearHDMap();
    private destroyFile();
    private getImage();
    updateHDMap(p: {
        x: number;
        y: number;
    }, force?: boolean): void;
}
declare class AnimaMgr {
    static ANITYPE_FADEIN_LEFT_HOR: number;
    static ANITYPE_FADEIN_RIGHT_HOR: number;
    static ANITYPE_FADEIN_UP_VER: number;
    static ANITYPE_FADEIN_DOWN_VER: number;
    static ANITYPE_IN_LEFT_HOR: number;
    static ANITYPE_IN_RIGHT_HOR: number;
    static ANITYPE_IN_UP_VER: number;
    static ANITYPE_IN_DOWN_VER: number;
    static ANITYPE_OUT_LEFT_HOR: number;
    static ANITYPE_OUT_RIGHT_HOR: number;
    static ANITYPE_OUT_UP_VER: number;
    static ANITYPE_OUT_DOWN_VER: number;
    static ANITYPE_IN_SCALE_VER: number;
    static ANITYPE_OUT_SCALE_VER: number;
    private static diff;
    private static time;
    private static Egret_Ease;
    private static aniMap;
    private static hroWidh;
    static play(eobj: egret.DisplayObject, aniType: number, others?: {
        time: number;
        func?: any;
        ease?: any;
    }): void;
    private static aniStartEUI(obj, dir, others);
    private static checkObj(obj);
    private static cleanObj(obj);
}
declare class EntrustMgr extends BaseSystem {
    private isStart;
    private taskDic;
    static ins(): EntrustMgr;
    start(): void;
    stop(): void;
    regEntrusTask(type: any, doFun: any, callobj: any): void;
    cancelEntrusTask(type: any): void;
    transferTask(doFun: any, callobj: any): void;
    transferComplete(): void;
}
declare const enum EntrustType {
    Transfer = 0,
}
declare class SwitchMgr extends BaseSystem {
    static ins(): SwitchMgr;
    checkOpen(type: SwitchConst, showTips?: boolean): boolean;
    private checkExtData(config);
}
declare class GameLayer {
    static SCENE1: EuiLayer;
    static SCENE2: EuiLayer;
    static SCENE3: EuiLayer;
    static MAIN1: EuiLayer;
    static MAIN2: EuiLayer;
    static POPUP: EuiLayer;
    static TIPS: EuiLayer;
}
declare class UIMgr extends SingleClass {
    /**
     * UI实体
     */
    private _views;
    /**
     * HashCode
     */
    private _hCode2Key;
    /**
     * 开启中UI
     */
    private _opens;
    /**
     * 存储隐藏界面
     */
    private _visWinLis;
    /**
     * 存储返回界面
     */
    private _backWinList;
    /**
     * 构造函数
     */
    constructor();
    static ins(): UIMgr;
    private getKey(nameOrClass);
    private getClass(key);
    /**
     * 检测能否开启
     */
    viewOpenCheck(key: string, ...param: any[]): boolean;
    /**
     * 统一打开窗口函数
     */
    open(nameOrClass: any, ...param: any[]): BaseEuiView;
    /**
     * 界面动画
     */
    private playAnima(className?);
    /**
     * 简单的打开一个界面
     */
    private openEasy(nameOrClass, param?);
    private checkOpenView(view);
    /**
     * 统一关闭窗口函数
     */
    close(nameOrClass: any, ...param: any[]): void;
    private closeEx(className, ...param);
    checkIsTopView(nameOrClass: any): boolean;
    pushBackWin(nameOrClass: any, ...param: any[]): void;
    clreanBackWinList(): void;
    closeLastTopView(): void;
    /**
     * 简单关闭一个窗口
     */
    private closeEasy(nameOrClass, ...param);
    private checkCloseView();
    /**
     * 获取一个UI对象
     */
    getView(nameOrClass: any): BaseEuiView;
    /**
     * 获取场景
     */
    static readonly gameScene: any;
    /**
     * 获取入口
     */
    static readonly playFun: any;
    /**
     * 关闭所有开启中的UI
     */
    closeAll(): void;
    /**
     * 关闭所有一级界面
     */
    closeTopLevel(): void;
    /**
     * 检测一个UI是否开启中
     */
    isShow(nameOrClass: any): boolean;
    /**
     * 是否有一级界面
     */
    hasTopView(): boolean;
    /**
     * 释放关闭窗口
     */
    destroyAllNotShowView(): void;
    /**
     * 检查隐藏
     */
    checkVisWin(): void;
    /**
     * 清空处理
     */
    clear(): void;
    /**
     * 销毁一个面板
     */
    destroy(hCode: number): void;
}
declare class ActivationView extends BaseEuiView {
    bgClose: eui.Rect;
    lbg: eui.Image;
    rbg: eui.Image;
    imgGroup: eui.Group;
    imgAct: eui.Group;
    estrade: eui.Image;
    title: eui.Image;
    tielian: eui.Group;
    titleBg: eui.Image;
    itemBg: eui.Image;
    buttonBg: eui.Image;
    itemname: eui.Label;
    img: eui.Image;
    mcGroup: eui.Group;
    mc: GameMovieClip;
    private effGroup;
    private eff;
    private closeFunc;
    constructor();
    open(type: number, name: string, imgName: string, effName: string, spotlight: boolean, closeCallback: Function, mcRotation: number, mcOffsetY: number): void;
    close(): void;
    private playAnimaiton(spotlight);
    private showSpotlight();
    fluctuateTween(): void;
    private onTap(e);
}
declare class BubbleControl extends SingleClass {
    /**
     * 气泡
     */
    playBubbleEffect(id: number): string;
}
declare const enum BubbleType {
    TYPE1 = 1,
    TYPE2 = 2,
}
/**
 * 气泡显示
 */
declare class BubblePanel extends BasePanel {
    content: eui.Label;
    constructor();
    open(...param: any[]): void;
    setSpeak(id: number, job?: number): void;
    private start();
    private destruct();
}
/**
 * 对话显示
 */
declare class TalkPanel extends BasePanel {
    private bg;
    msgTxt: eui.Label;
    setDefSkin(): void;
    setCurSkin(name: any): void;
    open(): void;
    setScale(val: any): void;
    setSpeak(tips: string, delay?: number): void;
    start(delay: any): void;
    destruct(): void;
}
declare class AppearanceControl extends BaseSystem {
    static ins(): AppearanceControl;
    static getDefClothes(): string;
    downWeaponClothesType(roleIndex: any, weaponViewType: any, weaponViewId: any, clothesViewType: any, clothesViewId: any): void;
    checkCanShow(role: any, equipPos: number, type: number): boolean;
    getEquipEffId(role: any, equipPos: number, type: number): any;
    getEquipEffName(role: any, equipPos: number, type: number): any;
    checkWeaponHasFamale(zbId: any): boolean;
    getWeaponFashionSex(role: any): any;
    getLTEquipEffId(role: any): number;
    /**
     * 职业显示UI
     */
    getJobUIState(job: number, weaponId: number, isDress: boolean): string;
    /**
     * 职业资源处理
     */
    resJobHandler(resName: string, job: number): string;
}
declare const enum AppearanceType {
    TYPE0 = 0,
    TYPE1 = 1,
    TYPE2 = 2,
    TYPE3 = 3,
    TYPE4 = 4,
    TYPE5 = 5,
    TYPE6 = 6,
    TYPE7 = 7,
}
declare class AttributeData {
    type: number;
    value: number;
    static FILTER_EXTDATA_ID: number[];
    static FILTER_BASE_DATA_ID: number[];
    constructor(type?: number, value?: number);
    static attrNames: string[];
    static itemTranslate: {
        'hp': AttributeType;
        'atk': AttributeType;
        'def': AttributeType;
        'res': AttributeType;
    };
    static translate: {
        'hp': AttributeType;
        'atk': AttributeType;
        'def': AttributeType;
        'res': AttributeType;
        'crit': AttributeType;
        'tough': AttributeType;
    };
    static exRelate: {
        '2': AttributeType;
        '4': AttributeType;
        '5': AttributeType;
        '6': AttributeType;
    };
    static exRelateEx: {
        '11': AttributeType;
        '12': AttributeType;
        '23': AttributeType;
        '24': AttributeType;
    };
    static showTypeList: AttributeType[];
    /**
     * 两组属性数组的值相加（用于羽翼 经脉 强化等等）
     * @param attr1
     * @param attr2
     */
    static AttrAddition(attr1: AttributeData[], attr2: AttributeData[]): AttributeData[];
    static AttrDel(attr1: AttributeData[], attr2: AttributeData[]): AttributeData[];
    /**
     * 属性按比例加成
     * @param attr1 当前属性
     * @param attr2 万分比加成
     * @returns {AttributeData[]}
     * @constructor
     */
    static AttrMultiply(attr1: AttributeData[], attr2: AttributeData[]): AttributeData[];
    /**
     * 属性列表转换（用于解析配置表后的属性列表obgject转换AttributeData[])
     * @param attrObj
     */
    static transformAttr(attrObj: Object): AttributeData[];
    /**
     * 这个函数即将被getAttStr1 替换.
     * 通过属性对象数组获取字符串
     * @param att       属性对象(支持AttributeData[] | AttributeData | config )
     * @param intervals  属性名与属性值间隔多宽(默认4格)
     * @param newline   属性与属性上下间隔几行(默认1行)
     * @param sign      符号 默认 +
     * @param isInserte  是否插入空格 默认false
     * @param isShowAttName    是否显示属性名字（例如false： +1000)
     * @param info: HeirloomInfo 传世额外属性加成
     */
    static getAttStr(att: any, intervals?: number, newline?: number, sign?: string, isInserte?: boolean, isShowAttName?: boolean, info?: any, endSign?: string, attrs?: AttributeData[]): string;
    static getAttStrEx(att: any, intervals?: number, newline?: number, sign?: string, isInserte?: boolean, isShowAttName?: boolean, info?: any, endSign?: string, attrs?: AttributeData[]): string;
    /**
     * 通过属性对象数组获取字符串
     * @param att       属性对象(支持AttributeData[] | AttributeData | config )
     * @param format  属性名与属性值间隔多宽(默认4格)
     */
    static getAttStr1(att: AttributeData[], format: AttributeFormat, addColor?: boolean): string;
    /**
     * 通过属性对象获取字符串（例如：攻击 +1000)
     * @param att   属性对象
     * @param format  间隔多宽(默认4格)
     */
    static getAttStrByType1(att: AttributeData, format: AttributeFormat, addColor?: boolean): string;
    static getExAttStr(att: AttributeData[], format: AttributeFormat, addColor?: boolean): string;
    static getExAttStrByType(att: AttributeData, format: AttributeFormat, addColor?: boolean): string;
    /**
     * 这个函数即将被getAttStrByType1替换
     * 通过属性对象获取字符串（例如：攻击 +1000)
     * @param att   属性对象
     * @param interval  间隔多宽(默认4格)
     * @param sign  符号 默认 +
     * @param isInserte  是否插入空格 默认false
     * @param isShowAttName    是显示属性名字（例如false： +1000)
     */
    static getAttStrByType(att: AttributeData, interval?: number, sign?: string, isInserte?: boolean, isShowAttName?: boolean, atts?: AttributeData[]): string;
    /**
     * 通过属性对象获取扩展属性字符串
     * @param att   属性对象
     * @param interval  间隔多宽(默认4格)
     * @param sign  符号 默认 +
     * @param isInserte  是否插入空格 默认false
     * @param isShowAttName    是显示属性名字（例如false： +1000)
     */
    static getExtAttStrByType(att: AttributeData, interval?: number, sign?: string, isInserte?: boolean, isShowAttName?: boolean): string;
    /**
     * 字符串插入空格
     * @param str  要更改的字符串
     * @param blankNum 插入空格数
     * @param location 插入位置 0左边 1 中间  2 右边（默认中间）
     */
    static inserteBlank(str: string, blankNum: number, location?: number): string;
    /**
     * 通过物品来获取装备属性
     * @param data
     */
    static getAttrInfoByItemData(data: ItemData): string;
    static getAttrStrByType(type: number): string;
    static getAttrStrWithSpaceByType(type: number): string;
    static getExtAttrStrByType(type: number): string;
    static getEEquipAttrStrByType(type: number): string;
    static getExAttrNameByAttrbute(att: AttributeData, showValue?: boolean, sign?: string, valueColor?: number): string;
    static getAttrStarAdd(attrbute: AttributeData[], count: number): AttributeData[];
    static getAttrNameByAttrbute(att: AttributeData, showValue?: boolean, sign?: string, isInserte?: boolean, valueColor?: number): string;
    /**给传入的属性数组加入百分比加成 返回新的属性数字*/
    static getPercentAttr(arrAttr: AttributeData[], percent: number, isAdd?: boolean, types?: number[]): AttributeData[];
    static sortAttribute(a: AttributeData, b: AttributeData): number;
    static copyAttrbute(attr: AttributeData): AttributeData;
    static addAttrToList(list: any, ele: AttributeData): void;
    static combineAtts(attrs: any): AttributeData[];
    static getCustomAttrValue(attrs: any, type: any): number;
    static filterAttrs(attrs: any, filters: any): void;
    static getAttStrSpecial(att: any, intervals?: number, newline?: number, sign?: string, isInserte?: boolean, isShowAttName?: boolean): string;
    static getBetweenAttrs(aAttrs: any, bAttrs: any): any[];
}
/**属性格式化 */
declare class AttributeFormat {
    /** 属性名与属性值间隔多宽(默认4格)*/
    intervals: number;
    /**两个属性值之间的空行数量 ,默认为0 */
    emptyLine: number;
    /**符号 +,-,: */
    sign: string;
    /**空格的数量 */
    spaceCount: number;
    /**是否显示属性名 */
    isShowAttName: number;
    /**文字颜色 */
    wordColor: number;
    /**属性颜色 */
    attrColor: number;
    /**加空格 */
    addSpce: boolean;
    /**
     * 根据参数获取显示格式
     */
    static getFormat(intervals?: number, emptyLine?: number, sign?: string, spaceCount?: number, isShowAttName?: number, wordColor?: number, attrColor?: number, addSpce?: boolean): AttributeFormat;
    /**
     * 格式1如下
     * 力量:400
     * 敏捷:400
    */
    static FORMAT_1(): AttributeFormat;
    /**
     * 格式1如下
     * 力量:400(绿色数字)
     * 敏捷:400(绿色数字)
    */
    static FORMAT_2(): AttributeFormat;
}
/**
 * 死亡引导类
 */
declare class DieGuide extends BaseSystem {
    static Show: number;
    static Show2: number;
    static RECHARGE: number;
    static VIP: number;
    static FB: number;
    resImg: string[];
    private isInitRecharge1;
    private isInitSetting;
    static ins(): DieGuide;
    constructor();
    private initRecharge1();
    private initSetting();
    /**
     * 首死亡处理
     */
    dispatchdieGuide(result: number): void;
    /**
     * 副本红点死亡引导判定
     */
    dieFbRedPoint(resetCount: number, fbId: number): boolean;
    /**
     * 是否弹出首充或vip引导页
     */
    checkFirstChargeOrVIPWin(): void;
    /**
     * 根据对应开启角色显示引导图片
     */
    getOpenRoles(): string;
    /**
     * 设置扫荡位
     */
    setClick(fbID: number): void;
    /**
     * 材料副本全部满标记位
     */
    setMaxFb(sweeps: number[]): void;
    getDiedGainWay(): any[];
}
declare class DropControl {
    /**
     *  6   7   8
     *  5   0   1
     *  4   3   2
     */
    private static orderX;
    private static orderY;
    static starting: boolean;
    static isWillBoss: boolean;
    static tempDropPoint: egret.Point;
    static dropContainer: egret.DisplayObjectContainer;
    static dropNameContainer: egret.DisplayObjectContainer;
    private static completeFunc;
    private static itemPos;
    private static curTarget;
    private static waitTime;
    private static mainEntity;
    private static lastPoint;
    static init(parent: egret.DisplayObjectContainer, parName: egret.DisplayObjectContainer): void;
    static start(entity?: UnitMonster): void;
    static stop(): void;
    private static delayTweenItem();
    private static tweenItem(item, role, key);
    static getItemCount(): number;
    /**
     * 添加一个掉落物（格子坐标）会自动检测当前位置是否有掉落物，如果有掉落在附近的格子
     * @param x_Grid
     * @param y_Grid
     * @param parent
     * @param itemData
     */
    static addDrop(arr: any[]): void;
    /**
     * 清理所有掉落的缓动
     * @returns void
     */
    private static clearAllDropTween();
    /** 清空掉落物 */
    static clearDrop(): void;
    private static findDrop();
    private static checkDrop();
    static addCompleteFunc(f: Function, funcThis: any): void;
}
declare class EquipPosAniVo {
    x: number;
    y: number;
    scaleX: number;
    scaleY: number;
    constructor(x: number, y: number, scaleX: number, scaleY: number);
}
declare class EquipVo {
    /** 强化等级 */
    strengthen: number;
    /** 附灵等级*/
    spiritLv: number;
    /** 星级 */
    star: number;
    /** 宝石等级 */
    gem: number;
    /** 对应的带锯 */
    item: ItemData;
    /** 注灵等级 */
    zhuling: number;
    /** 附灵经验 */
    spiritExp: number;
    /** 灵魂锁链 */
    soulLv: number;
    init(datas: any[]): void;
}
/**
 * 烈焰印记实体特效
 */
declare class FlameMarkEffect {
    private _ring;
    private _balls;
    private _angle;
    private _angles;
    private _circleCenter;
    private _a;
    private _b;
    private _oldBallNum;
    private _infoModel;
    private _curTimes;
    private _isShowBall;
    constructor(superRingInfoViewSkin: GameMovieClip, infoModel: UnitModel);
    private dataChange();
    private readonly _parent;
    /** 使用了烈焰印记技能 */
    usedLyMarkSkill(): void;
    private doTimer();
    private update();
    private updateBalls(bollNum);
    private doCircle();
    private resetBalls();
    /** 根据id获得技能等级 */
    private getSkillLvById(id);
    /** 获得印记等级*/
    private getLyMarkLv();
    /** 屏蔽火球 */
    showBall(): void;
    /** 隐藏火球 */
    hideBall(): void;
    destruct(): void;
}
/**
 * 游戏控制类
 */
declare class GameControl extends BaseSystem {
    private heartBeatTimer;
    /**挂机状态 */
    private hookState;
    /**挂机状态 */
    static HOOK_STATE_HOOK: number;
    /**寻敌状态 */
    static HOOK_STATE_FIND_ENMENY: number;
    /**刷怪半径 */
    MONSTER_RADIUS: number;
    MONSTER_LEN: number;
    /**刷怪半径格子表 */
    private radiusMap;
    atkTarget: {};
    masterAtkTarget: {};
    currHandle: number;
    currAttackHandle: number;
    rPosindex: number[];
    private runTime;
    private guanqiaId;
    constructor();
    static ins(): GameControl;
    protected initLogin(): void;
    /**
     * 发送创建子角色
     * 255-2
     */
    upNewRole(job: number, sex: number): number[];
    heartbeat(): boolean;
    /**
     * 心跳包
     * 255-255
     */
    private upHeartbeat();
    /**
     * GM
     * 255-0
     */
    upGMCommad(str: string): string[];
    /**
     * 进入场景
     * 255-3
     */
    downEnterMap(copyId: number, mapId: number, mapX: number, mapY: number, copyType: number, copyName: string, copyDesc: string): void;
    /**
     * 创建场景实体
     * 255-4
     */
    downCreateOtherEntity(type: number, ...param: any[]): UnitModel;
    private afterCreateOtherEntity(type, model, target);
    /**
     * 货币变化
     * 255-5
     */
    private downGoldChange(type, value);
    dispatchRuneShatter(): void;
    dispatchRuneExchange(): void;
    dispatchLevelBarChange(lv: number): void;
    dispatchAdjustMapPos(): void;
    /**
     * 血量更新
     * 255-9
     */
    downHpChange(handle: number, hp: number): void;
    /**
     * 内功当前值更新
     * 255-26
     */
    private downNeiGongChange(handle, neigong);
    /**
     * 血量变更
     */
    dispatchEntityHpChange(target: UnitMonster, source: UnitMonster, type: DamageTypes, value: number): any;
    /**
     * 移除实体
     * 255-10
     */
    private downRemoveEntity(handle);
    dispatchRemoveEntity(handle: any, entity: any): void;
    private removeEntity(handle);
    /**
     * 实体移动
     * 255-11
     */
    private downMoveEntity(handle, tx, ty);
    /**
     * 停止实体移动
     * 255-12
     */
    private downStopMoveEntity(handle, x, y);
    /**
     * 同步实体坐标
     * 255-13
     */
    private downSyncPos(handle, type, x, y, time);
    /**
     * 派发同步实体坐标消息
     */
    dispatchMoveCamera(...param: any[]): any;
    dispatchMainRoleMove(x: any, y: any): any[];
    /**
     * 处理MP
     * 255-15
     */
    downMpChange(handle: number, mp: number): void;
    dispatchExpMc(mon: UnitMonster): void;
    /**
     * 显示服务器提示
     * 255-17
     */
    private downTips(id);
    /**
     * 第一次登陆
     * 255-18
     */
    private downFirstRegister(loginType);
    /**
     * 处理玩家死亡提示
     * 255-20
     */
    private downDieNotice();
    /**
     * 处理玩家工会变化
     * 255-21
     */
    downGuildChange(id: number, name: string): void;
    /**
     * 其他玩家更新属性
     * 255-24
     */
    downOtherAttChange(handle: number, attrs: [number, number][]): void;
    /**
     * 气泡提示
     * 255-25
     */
    private downPaoPao(handle, id);
    /**
     * 改名
     * 255-22
     */
    upRename(name: string): string[];
    /**
     * 改名结果
     * 255-22
     */
    downRename(result: number): void;
    /**
     * 改变物体目标
     * 255-25
     */
    dispatchChangeAttrPoint(handle: number): number[];
    /**
     * 问客户端寻路
     * 255-31
     */
    private downFindPath(handle, x, y, endX, endY);
    /**
     * 回复寻路结果
     * isLastGrip 格子坐标:true,像素坐标:false
     * 255-31
     */
    upFindPathToServer(handle: number, path: AStarNode[], isLastGrip?: boolean): (number | [number, number][])[];
    /**
     * 扣血飘字
     * 255-32
     */
    private downBloodNumShow(targetHandle, sourceHandle, value, type);
    /**
     * 255-33
     */
    downChangeTarget(sourceHandle: number, targetHandle: number): any;
    getAtkHandle(handle: any): any;
    getAtkMasterHandle(handle: any): any;
    dispatchChangeTarget(handle: any): void;
    dispatchAtkTarget(handle: any): void;
    dispatchAllAtkTarget(sourceHandle: any, targetHandle: any): void;
    private onKeyClick(keyCode);
    /** 开始挑战boss */
    startPkBoss(): void;
    /**
     * 创建实体（依赖数据结构）
     */
    createEntityByModel<T extends egret.DisplayObject>(model: any, ...param: any[]): T;
    addEntity(target: egret.DisplayObject): void;
    /**
     * 出生动画
     */
    charAppearEff(target: egret.DisplayObject): void;
    /**
     * 播放技能特效
     * @param skill 技能配置
     * @param self 技能释放者
     * @param target 技能目标者
     * @return 持续时间
     */
    playSkillEff(skill: SkillVo, self: UnitMonster, targets: UnitMonster[], hitFun?: (probability?: number) => void): number;
    private shakeMapView();
    addOutEff(xPos: number, yPos: number): void;
    removeOutEff(): void;
    /**
     * 创建关卡的怪物
     */
    createGuanqiaMonster(isAll?: boolean, isElite?: boolean): void;
    private addMonsterToMap(map, startX, startY, count);
    /**
     * 挂机状态变更
     */
    dispatchHookStateChange(value: number): void;
    /**
     * 是否格子移动
     */
    dispatchMoveEntity(entity: UnitMonster, asNode: AStarNode[], isGrip?: boolean): void;
    /**
     * 计算真实属性值（含增益buff）
     */
    static calculateRealAttribute(target: UnitMonster, type: AttributeType, self: UnitMonster, passiveAttr?: any): number;
    static triggerAttr(selfTarget: UnitMonster, type: AttributeType, passiveAttr?: any): boolean;
    static triggerExAttr(selfTarget: UnitMonster, type: ExAttributeType, exAtt?: any): boolean;
    static calBuffAttribute(selfTarget: any): {
        attr: {};
        exAttr: {};
    };
    static triggerCrit(selfTarget: UnitMonster, target: UnitMonster, addValue?: number): boolean;
    static triggerMiss(selfTarget: UnitMonster, target: UnitMonster): boolean;
    static triggerValue(value: number): boolean;
    private downAddMonsterConfig(cfgStr);
    /**
     * 255-35
     */
    private downZeroInit();
    /**
     * 更新阵营
     * 255-36
     */
    downChangeCamp(handle: number, camp: number): void;
    /**
     * 255-41
     * up
     */
    upChooseOldPlayer(): void;
    /**
     * 255-41
     */
    downChooseOldPlayer(): void;
    /**
     * 官印 判断
     */
    static skyBallCheck(target: UnitMonster): boolean;
    dispatchFlyItem(item: {
        item: UnitItemNameMerge;
        point: egret.Point;
    }): void;
    dispatchFlyItemEx(item: egret.DisplayObject): void;
    dispatchFlyBagToItem(flyItem: any, thisObj: any, callback: any): void;
    /***
     * 停止服务端AI
     */
    upStopAI(): void;
    /**
     * boss场景，请求发送其他玩家的属性（masterHandle不在handles中的玩家不发送）
     * 255-34
     * @param handles
     */
    upGetOtherAttr(masterHandles: number[]): number[][];
    dispatchUpdateTargetTask(): void;
    dispatchUpdateHpMp(): void;
    onEnterScene(): void;
}
declare class GameServer extends BaseSystem {
    /**服务器开服第几天 0是第一天 以此类推*/
    static serverOpenDay: number;
    /** 服务器当前时间点(不会即时，一般情况调用serverTime) 毫秒 1970年开始*/
    static _serverTime: number;
    /** 服务器开服的当前时间0点 秒 2010年开始*/
    static _serverZeroTime: number;
    /** 服务器合服的当前时间0点 秒 2010年开始 第N次合服时间*/
    static _serverHeZeroTime: number;
    /** 第N次合服 */
    static _hefuCount: number;
    /**是否开启连服*/
    static isOpenLF: boolean;
    _curServerTime: number;
    _curClientTime: number;
    _tickCount: number;
    static kfServerIDSmall: number;
    static kfServerIDBig: number;
    static kfOpenTimetampSmall: number;
    static kfOpenTimetampBig: number;
    static isTodayFirst: boolean;
    static loginTimetamp: number;
    static ins(): GameServer;
    protected initZero(): void;
    /**
     * 获取服务器当前时间从1970年开始的(即时)
     */
    static readonly serverTime: number;
    static setServerTime(time: number): void;
    /**
     * 开服信息
     * 255-23
     */
    downServerOpenDay(openDay: number, zeroTime: number, heZeroTime: number, hefuCount: number, isOpenLF: boolean, kfSvidSmall: number, kfSvidBig: number, kfOpenTimeSmall: number, kfOpenTimeBig: number): void;
    /**
     * 服务器时间
     * 255-14
     */
    downServerTime(serverTime: number): void;
    upSyncServerTime(): void;
    checkServerTime(time: any): void;
    checkIsFirstLogin(): void;
    updateDailyRedPoint(): void;
    resetDailyRedPoint(): void;
    static readonly smallKFServOpenDay: number;
    static readonly bigKFServOpenDay: number;
    static calcDayByTimetamp(timetamp: number): number;
}
/**
 * 道具数据
 */
declare class ItemData {
    handle: number;
    count: number;
    att: AttributeData[];
    extAtt: AttributeData[];
    itemConfig: ItemConfig;
    canbeUsed: boolean;
    isSuggest: boolean;
    private _point;
    private _configID;
    init(datas: any[]): void;
    configID: number;
    /**
     * 通过string数组获取多行字符串
     * @param str[]   属性string数组
     * @param newline  属性与属性上下间隔几行(默认1行)
     */
    static getStringByList(str: string[], newline?: number, addStr?: string): string;
    static getStringByNextList(now: string[], next: string[]): string;
    readonly point: number;
    /**
     * 设置道具可使用的红点提示
     */
    setCanbeUsed(): void;
    getCanbeUsed(): boolean;
    copy(item?: ItemData): ItemData;
    reset(): void;
}
declare class LookControl extends BaseSystem {
    lookerId: number;
    constructor();
    static ins(): LookControl;
    onCreateEntity(entityModel: UnitModel): void;
    dispatchOnlook(id: any): void;
    getLookRole(): any;
    checkCanLook(): boolean;
    checkIsCamera(charRole: any): boolean;
    clear(): void;
}
/**
 * 移动控制
 */
declare class MoveControl extends BaseSystem {
    private moveTar;
    private findTarget;
    constructor();
    static ins(): MoveControl;
    canMove(): boolean;
    mapClick({target, x, y}: {
        target: any;
        x: any;
        y: any;
    }): void;
    doMove(target: any, x: any, y: any): void;
    moveComplete(e: UnitMonster): void;
    moveToNpc(id: any): void;
    onEnterMap(): void;
    moveToTar(): void;
    checkIsMove(tar?: any): any;
    moveTo(target: any): boolean;
}
declare const enum MoveType {
    MAP = 0,
    TOSEONG = 1,
    MINE = 2,
}
declare class MultiKillControl extends BaseSystem {
    static ins(): MultiKillControl;
    /**
     * 连斩
     * 41-4
     */
    downFbMultiKill(num: number): void;
}
/**
 * 奖励数据
 */
declare class PayRewardVo {
    type: number;
    id: number;
    count: number;
}
declare class PayVo {
    day: number;
    curDayPay: number;
    num: number;
    isAwards: number;
    init(datas: any[]): void;
    change(datas: any[]): void;
}
/**
 * 提示模块
 */
declare class PromptControl extends BaseSystem {
    static TARTYPE_WELCOME: number;
    static TARTYPE_ACH_BEF: number;
    static TARTYPE_ACH_AFT: number;
    static TARTYPE_SCE_IN: number;
    static TARTYPE_KILL_BOSS: number;
    private presceneid;
    private prefbId;
    private killType;
    private picKillBoss;
    constructor();
    static ins(): PromptControl;
    /**
     * 进入场景
     */
    enterMap(): void;
    private checkHint(cfg?, targetType?, config?, parma?);
    private HitConfig(data?, targetType?);
    private showHint(targetType, pic?);
    /**
     * 欢迎页
     */
    dispatchWelcome(): void;
    /**
     * 接收任务
     */
    dispatchAchievementBef(cfg?: GuideBasicConfig | GuideAchievementConfig): void;
    /**
     * 任务完成后
     */
    dispatchAchievementAft(achievementVo?: any): void;
    /**
     * 击杀BOSS
     */
    dispatchKillBoss(cfg?: GuideAchievementConfig): void;
    /**
     * 击杀关卡BOSS
     */
    dispatchKillBossEx(guanqiaId: number): void;
}
declare class HintTargetData {
    taskId: number;
    sceneid: number;
    achievementId: number;
    presceneid: number;
    prefbId: number;
    fbId: number;
    guanqiaId: number;
    isfull: number;
}
/**
 * 膜拜
 */
declare class RankSubRoleVo {
    job: number;
    sex: number;
    clothID: number;
    swordID: number;
    wingLevel: number;
    pos1: number;
    pos2: number;
    pos3: number;
    deCirShowID: number;
    heirloomLv: number;
    thirteenEquipLv: number;
    weaponViewType: any;
    clothesViewType: any;
    weaponViewId: number;
    clothesViewId: number;
    init(datas: any[]): void;
}
/**
 * 奖励数据
 */
declare class RewardVo {
    /**
     * 道具id
     * 货币类型的时候表示 1金币 2元宝
     */
    id: number;
    /**
     * 奖励类型
     * 0货币奖励 1道具装备奖励
     */
    type: number;
    /**
     * 数量
     */
    count: number;
    /**
     * 职业
     */
    job: number;
    /**
     * 红点
     */
    isRedPoint: number;
    /**
     * 掉落特效Id(光柱)
     */
    dropEffId: number;
    /**
     * 掉落类型
     */
    dropType: number;
    /**
     * 必掉落
     */
    isDrop: boolean;
    init(datas: any[]): void;
    static copy(data: any): RewardVo;
    static getRewardsByOpenDay(datas: any, day?: number): any[];
    static getRewardsByJob: (t: any, e?: any) => any[];
}
declare const enum DROPTYPE {
    NORMAL = 0,
    BIGREWARD = 1,
}
declare class SkillVo {
    private _id;
    private _specialCD;
    private _preId;
    private reviseCD;
    config: SkillsConfig;
    static storeSkillReviDp: {};
    constructor(id: number);
    /** 等级 */
    readonly lv: number;
    readonly job: number;
    /** id */
    readonly id: number;
    readonly icon: string;
    /** 配置id */
    configID: number;
    preId: number;
    /** 1级的id */
    readonly lv1ConfigID: number;
    /** 施法目标 */
    readonly castType: number;
    /** 作用目标 */
    readonly targetType: number;
    /** 描述 */
    readonly desc: string;
    /** 作用范围大小 */
    readonly affectRange: number;
    /** 作用个数 */
    readonly affectCount: number;
    /** 伤害类型 */
    readonly calcType: number;
    /** 群攻对怪物伤害降低比例*/
    readonly herdMonRate: number;
    /** 群攻对人物伤害降低比例*/
    readonly herdPlayerRate: number;
    readonly cd: number;
    /** 设置特殊CD（需要计算的CD） */
    specialCD: number;
    /** 是否被动技能 */
    readonly isPassive: boolean;
    /** 触发几率 */
    readonly rate: number;
    /** 主动触发(0)还是被动触发(1) */
    readonly cond: number;
    /** 施法距离(按格子) */
    readonly castRange: number;
    /** 附加击退（距离） */
    readonly repelDistance: number;
    /** 自身是否位移（0否1是） */
    readonly teleport: number;
    /** 动作类型 */
    readonly actionType: string;
    readonly tarEff: number[];
    readonly otarEff: number[];
    readonly selfEff: number[];
    readonly canUse: boolean;
    readonly name: string;
    readonly args: {
        b: number;
        a: number;
        c: number;
    };
    readonly wordEff: string;
    readonly effType: number;
    readonly otherSkills: number[];
    getOtherSkills(state: any): number[];
    readonly effectId: number;
    readonly sound: string;
    readonly die_summoner: number[];
    static getSkillByJob(job: number, index?: number, lv?: number): SkillVo;
    private readonly descID;
    static reviseDp(id: number, index: number): any;
    static pushSkillReviDp(reviseCfg: any, id: any): void;
    static mergeReviDp(storeCfg: any, reviseCfg: any): void;
}
declare class ArrowEffect extends egret.DisplayObjectContainer {
    private _effGroup;
    private _arrowGroup;
    private _effCir;
    private _arrow;
    otherMc: any[];
    private _isShow;
    constructor();
    init(): void;
    show(tips: any, target: any, dir?: number): void;
    showTapOutEff(): void;
    hide(): void;
    isShow(): boolean;
}
/**
 * 素材需要提前加载好
 * 素材命名规则：类型_数值（有类型是因为一般会同时有几种数字图片，比如大小号或不同颜色）
 * 点号素材命名：类型_dot
 * 创建BitmapNumber使用createNumPic返回DisplayObjectContainer
 * 创建好的BitmapNumber数值需要变化是调用changeNum
 * 回收使用desstroyNumPic
 */
declare class BitmapNumber extends SingleClass {
    private _imgPool;
    private _containerPool;
    static ins(): BitmapNumber;
    /**
     * 根据需要的数字和类型返回一个DisplayObjectContainer
     * num数字值，支持小数点
     * type素材类型
     */
    createNumPic(num: number | string, type: string, offset?: number, offsetY?: number): egret.DisplayObjectContainer;
    desstroyNumPic(picContainer: egret.DisplayObjectContainer): void;
    /**
     * 改变带数字的DisplayObjectContainer数字值
     * 提供这个方法是为了提高效率，直接更换之前创建对象的texture，避免多余的删除和创建
     */
    changeNum(picContainer: egret.DisplayObjectContainer, num: number | string, type: string, offset?: number, offsetY?: number): void;
    private repositionNumPic(container, offset?, offsetY?);
    private clearContainer(picContainer);
    private recycleBM(bm);
    private getContainer();
    private getSingleNumPic(num, type);
    private getTexture(num, type);
    private getTextureAsync(num, type, bm);
    private getBitmap();
}
declare class BossAttackButton extends eui.Component {
    constructor();
}
declare class DropDown extends BasePanel {
    private value;
    private btn;
    private list;
    private dataPro;
    childrenCreated(): void;
    protected init(): void;
    private listSelect(e);
    private removeStage(e?);
    private onTap(e);
    setData(data: any[]): void;
    setSelectedIndex(value: number): void;
    getSelectedIndex(): number;
    getSelectedItemData(): any;
    setLabel(str: string): void;
    getLabel(): string;
    setEnabled(b: boolean): void;
    getEnabled(): boolean;
    destructor(): void;
}
declare class DropDownListItem extends BaseItemRender {
    private nameLbl;
    constructor();
    dataChanged(): void;
}
declare class EasyLoading extends StartLoading {
    static ins(): EasyLoading;
    init(): void;
}
declare class GainGoodsItem extends BaseItemRender {
    private desc;
    private graycolor;
    private greencolor;
    private norcolor;
    private newData;
    private dir;
    private desc2;
    private stars;
    constructor();
    protected dataChanged(): void;
    gainData(isOpen: boolean, stars: number, condition: {
        needLv: number;
        needZs: number;
        guanka: number;
    }): void;
}
declare class GainGoodsNoSkinItem extends BaseItemRender {
    private desc;
    protected dataChanged(): void;
}
interface Amusement100Config {
    id: number;
    back: string;
    jump: number;
    skinname: string;
    classname: string;
}
declare class ItemBaseNoName extends ItemBase {
    constructor();
}
declare class ItemBaseNoNameCanTap extends ItemBase {
    constructor();
}
/**
 * 基础道具显示类
 */
declare class ItemBaseNoTap extends ItemBase {
    constructor();
    onClick(): void;
}
declare class ItemBaseTimes extends BaseItemRender {
    tagImg: eui.Image;
    item: ItemBase;
    constructor();
    dataChanged(): void;
}
declare class ItemIcon extends BaseItemRender {
    config: ItemConfig;
    imgBg: eui.Image;
    imgIcon: eui.Image;
    imgJob: eui.Image;
    imgheirloom: eui.Image;
    actived: eui.Image;
    effect: GameMovieClip;
    tag: eui.Image;
    extreme: eui.Image;
    imgBg1: eui.Image;
    leftCorner: eui.Image;
    rightCorner: eui.Group;
    constructor();
    setSoul(isSoul: boolean): void;
    setData(config: ItemConfig): void;
    private resumePlay(e);
    setActived(b: boolean): void;
    setImgBg1(res?: string): void;
    setJobImg(job: number): void;
}
declare class PriceIcon extends BaseItemRender {
    private priceLabel;
    private iconImg;
    private _labelColor;
    private _price;
    private _type;
    constructor();
    childrenCreated(): void;
    /**
     * 价格
     */
    getPrice(): number;
    setPrice(value: number, value2?: number): void;
    setText(str: string): void;
    setData(data: Object): void;
    getType(): number;
    setType(value: number): void;
    labelColor: number;
}
/**
 * 特效经验条
 */
declare class ProgressBarEff extends egret.DisplayObjectContainer {
    static TYPE_GREEN: string;
    static TYPE_ORANGE: string;
    private static DEFAULT_WIDTH;
    private static DEFAULT_MC_WIDTH;
    /**值特效容器 */
    private group;
    /**值特效 */
    private bgmc;
    /**尾巴特效 */
    private xianmc;
    /**背景框特效 */
    private bordermc;
    /**值table */
    private lbvalue;
    private bgimg;
    private bgRect;
    /**是否第一次*/
    private isFisrt;
    /**最大值 */
    private maxValue;
    /**当前值 */
    private value;
    /**是否播放提升特效 */
    private isPlayMc;
    private offSetX;
    private mcWidth;
    private bgWidth;
    private oldMaxValue;
    private oldValue;
    private _proSkin;
    constructor(type?: string);
    private iniUi();
    setData(value: number, maxValue: number): void;
    setWidth(value: number): void;
    setEffXY(x: any, y: any): void;
    setValue(value: number): void;
    getValue(): number;
    getMaxValue(): number;
    reset(): void;
    rePlayMc(): void;
    setProgressSkin(t: any): void;
    setMaxValue(maxValue: number): void;
    private setui();
    max(): void;
    setLbValueText(text: any): void;
    setStroke(color: number, size: number): void;
}
/**
 * 技能效果显示
 * 必须重写bottomLayer,topLayer,setTimeout
 */
declare class SkillEffPlayDisplay {
    static bottomLayer: egret.DisplayObjectContainer;
    static topLayer: egret.DisplayObjectContainer;
    static fixedLayer: egret.DisplayObjectContainer;
    static setTimeout: (time: number, fun: () => void, funThis: any) => void;
    static shake: (e: UnitMonster, range: number, time: number, count: number, probability: number) => void;
    static urlRoot: string;
    static readonly urlSkill: string;
    static readonly urlSkillEff: string;
    static playConfigs(configs: SkillEffConfig[], param: EffParam): void;
    /**
     * 播放技能效果
     * @param skillId   技能id
     * @param source    施法者
     * @param target    目标列表
     * @param hitFun    命中回调
     * @param rate      延时的除数
     * @param append    特效名追加字符
     */
    static play(skillId: string | number, source: UnitMonster, target?: UnitMonster[], hitFun?: (probability: number) => void, rate?: number, offset?: XY, append?: string): void;
    private static type1(param, config);
    private static removeMC(mc);
    private static type96(param, config);
    private static type97(param, config);
    private static type98(param, config);
    private static type99(param, config);
    private static layer0(param);
    private static layer1(param);
    private static layer2(param);
    private static layer3(param);
    private static layer4(param);
    private static layer5(param);
    private static layer6(param);
    private static layer7(param);
    private static layer8(param);
}
declare class EffParam {
    mc: GameMovieClip;
    source: UnitMonster;
    target: UnitMonster[];
    initParam: {
        dir: number;
        x: number;
        y: number;
        tar;
    };
    hitFun: (probability: number) => void;
    append: string;
    offset: XY;
    rate: number;
}
declare class SkillEffConfig {
    /** 类型 */
    type: number;
    /** 延时毫秒 */
    delay: number;
    /** 层级 */
    layer: number;
    /** 坐标x */
    x: number;
    /** 坐标y */
    y: number;
    /** 特效id */
    effectId: number;
    /** 播放速度 */
    playSpeed: number;
    /** 水平缩放 */
    scaleX: number;
    /** 垂直缩放 */
    scaleY: number;
    /** 旋转角度 */
    rotation: number;
    /** 特效带方向 */
    isDir: number;
    isDirN: number;
    /** 移动速度 */
    moveSpeed: number;
    /** 播放次数 */
    playCount: number;
    /** 距离 */
    dis: number;
    /** 开始距离 */
    sDis: number;
    /** 透明 */
    alpha: number;
    /** 是否以目标点旋转 */
    isRot: number;
    /** 完成后是否命中 */
    hit: number;
    /** 中心点x */
    cx: number;
    /** 中心点y */
    cy: number;
    /** 幅度|角度 */
    range: number;
    /** 持续时间 */
    time: number;
    /** 攻速影响 */
    isRate: number;
    /** 是否拿初始属性做计算 */
    isInit: number;
    /** 概率*/
    probability: number;
    /** 后续特效 */
    exEff: string;
    /** 随目标方向偏移的坐标 */
    dirPos: {
        x: number;
        y: number;
        layer: number;
        rotation: number;
        scaleX: number;
        scaleY: number;
        cx: number;
        cy: number;
    }[];
    tween: any[];
    static o: SkillEffConfig;
    static initValue(config: SkillEffConfig): SkillEffConfig;
}
/**
 * 技能效果UI显示
 * 必须重写bottomLayer,topLayer,setTimeout
 */
declare class SkillEffPlayShow {
    static bottomLayer: egret.DisplayObjectContainer;
    static topLayer: egret.DisplayObjectContainer;
    static fixedLayer: egret.DisplayObjectContainer;
    static setTimeout: (time: number, fun: () => void, funThis: any) => void;
    static shake: (e: UnitMonster, range: number, time: number, count: number, probability: number) => void;
    static urlRoot: string;
    static effScale: number;
    static readonly urlSkill: string;
    static readonly urlSkillEff: string;
    static playConfigs(configs: SkillEffConfig[], param: EffParam): void;
    /**
     * 播放技能效果
     * @param skillId   技能id
     * @param source    施法者
     * @param target    目标列表
     * @param hitFun    命中回调
     * @param rate      延时的除数
     * @param append    特效名追加字符
     */
    static play(skillId: string | number, source: UnitMonster, target?: UnitMonster[], hitFun?: (probability: number) => void, rate?: number, offset?: XY, append?: string): void;
    private static type1(param, config);
    private static removeMC(mc);
    private static type96(param, config);
    private static type97(param, config);
    private static type98(param, config);
    private static type99(param, config);
    private static layer0(param);
    private static layer1(param);
    private static layer2(param);
    private static layer3(param);
    private static layer4(param);
    private static layer5(param);
    private static layer6(param);
    private static layer7(param);
    private static layer8(param);
    static clean(): void;
}
declare class StarList extends eui.Component {
    private list;
    private starList;
    private _statListLength;
    private _starNum;
    private resType;
    private resSources?;
    private mc;
    constructor(listLength?: number, starNum?: number, spacing?: number, isShowNum?: number, resType?: number, resSources?: {
        star?: string;
        fullStar?: string;
    }[]);
    setStarNum(num: number, show?: number, resSources?: {
        star?: string;
        fullStar?: string;
    }[]): void;
    updateStar(show: number, resSources: {
        star?: string;
        fullStar?: string;
    }[]): void;
    readonly starNum: number;
    readonly listLength: number;
    setlistLength(listLength?: number, starNum?: number, spacing?: number, isShowNum?: number): void;
}
declare class StarItem extends eui.Component {
    fullStarImg: eui.Image;
    starImg: eui.Image;
    constructor();
    isShow(num: number, resType?: number, resSources?: {
        star?: string;
        fullStar?: string;
    }): void;
    isShowFull(num: number, resType?: number, resSources?: {
        star?: string;
        fullStar?: string;
    }): void;
    private getStarSource(resType);
    private getStarFullSource(resType);
}
interface Amusement102Config {
    Id: number;
    index: number;
    cash: number;
    payIndex: number;
    needBuyPre: number;
    rewards: any[];
    mailInfo: any;
    icon: string;
    title: string;
}
declare class SuperRingTurnDisplayer extends egret.DisplayObjectContainer {
    /** 法宝*/
    private mc;
    private ringInfo;
    private infomodel;
    private static TARGET_POINT_X;
    private static TARGET_POINT_Y;
    private static MAX_DIS;
    private static STAR_ANGLE;
    private static SPEED_RATIO;
    private gTurnItem;
    private gFollowItem;
    private gCenterPos;
    private gAngle;
    private gTurnTime;
    private gStopTime;
    private gHasReset;
    private gInitPos;
    private gOwnerLastX;
    private gOwnerLastY;
    private gOwner;
    private gModelUrl;
    effectX: number;
    effectY: number;
    constructor();
    setOwner(player: UnitRole): void;
    private isMaxX;
    private isMaxY;
    /**
     *更新
     *
     */
    update(): void;
    private gemPos1;
    /**
     *设置中心位置
     * @param dir
     *
     */
    setEffectXY(dir: number): void;
    /**
     *像人物中心移动
     *
     */
    private moveCenterPoint();
    private lastID;
    /**
     * 设置法宝
     */
    setModel(id: number, infoModel: UnitModel, topContainer: egret.DisplayObjectContainer): void;
    /**
     * 显示戒指模型
     */
    private showRing(id);
    /**
     * 清理
     */
    reset(): void;
}
/**
 * 跨服切换
 */
declare class CrossServerSwitchView extends BaseEuiView {
    static Switch_Time: number;
    static backCloseFun: Function;
    private switchLabel;
    private progressBar;
    private isOnBack;
    private BAR_W;
    constructor();
    open(...args: any[]): void;
    static readyClose(): void;
    readyClose(): void;
    closeWin(): void;
    close(): void;
}
/**
 * 装备tips
 */
declare class EquipNormalTipsView extends BaseEuiView {
    private bgClose;
    private itemIcon;
    private nameLabel;
    private score;
    private typeValue;
    private typeName;
    private powerPanel;
    changeBtn: eui.Button;
    private content;
    private quali;
    redPoint: eui.Image;
    private itemType;
    private id;
    private sco;
    private power;
    private attrs;
    private desc;
    constructor();
    private otherClose(e);
    open(...param: any[]): void;
    updateView(...param: any[]): void;
    getItemName(): string;
    setHideButton(): void;
    onTap(e: any): void;
}
/**
 * 战斗力
 */
declare class PowerPanel extends BasePanel {
    protected totalPower: egret.DisplayObjectContainer;
    private flameMC;
    flameGroup: eui.Group;
    private powerImg;
    private bgImg;
    private showBg;
    private imgWidth;
    power: number;
    childrenCreated(): void;
    init(): void;
    setPower(value: number): void;
    private initPos();
    setBgVis(bool: boolean): void;
    setMcVisible(bool: any): void;
    /**
     * 播放火焰动画
     */
    private playFlameMC();
    destructor(): void;
}
/**
 * 三角色选择面板
 */
declare class RoleSelectPanel extends BasePanel {
    goldTxt: eui.Label;
    ybTxt: eui.Label;
    recharge: eui.Button;
    recharge0: eui.Button;
    private headGroup;
    stageImg: eui.Image;
    private leftImg;
    private rightImg;
    private bgImg;
    /** 当前选择的角色 */
    private _curRole;
    private lastX;
    private isTouchBegin;
    rolesLength: number;
    roles: eui.ToggleButton[];
    private roleMovie;
    constructor();
    $onRemoveFromStage(): void;
    childrenCreated(): void;
    private initMc();
    hideTop(): void;
    init(): void;
    private onAdd();
    initData(): void;
    getCurRole(): number;
    setCurRole(value: number): void;
    private onBtnClick(e);
    private onClick(e);
    private onMove(e);
    private isPass();
    private changeRole(value);
    updateRole(): void;
    showRedPoint(index: number, b: boolean): void;
    clearRedPoint(): void;
    openRole(): void;
    hideRole(): void;
    private destructor();
}
/**
 * 属性描述控件
 */
declare class EquipNormalTipsItemRenderer extends BaseItemRender {
    private attrType;
    private attrName;
    private attrValue;
    private desc1;
    private suit;
    private ext;
    private attrDesc;
    constructor();
    dataChanged(): void;
}
declare class OtherRoleItemRenderer extends RoleItemRenderer {
    private otherPlayerData;
    index: number;
    constructor();
    dataChanged(): void;
    private showRole(e);
}
interface Amusement103Config {
    Id: number;
    index: number;
    cash: number;
    payIndex: number;
    needBuyPre: number;
    rewards: any[];
    mailInfo: any;
    icon: string;
    title: string;
    num: number;
    itemId: any;
    exchangeYB: any;
    showType: number;
}
declare class StageItemRenderer extends BaseItemRender {
    private lv0;
    constructor();
    protected dataChanged(): void;
    private convert(strNum);
    private calcHeight();
}
declare class DailyRedBagControl extends BaseSystem {
    isFirstLogin: boolean;
    firstRedPoint: boolean;
    dailySysOpen: number;
    /**
     * 今日已抢次数
     */
    curCount: number;
    /**
     * 领取时间
     */
    nearGetTimes: number;
    /**
     * 本次红包值
     */
    nearNormalValue: number;
    /**
     * 充值额外红包值
     */
    nearGetRechargeValue: number;
    /**
     * 是否已额外领取
     */
    curDayRechargeSuccess: number;
    /**
     * 日志
     */
    logs: any[];
    static ins(): DailyRedBagControl;
    checkSysOpen(): boolean;
    checkLvOpen(): boolean;
    getLeftTime(): number;
    isNormalGet(): boolean;
    isExtraGet(): boolean;
    isEnvelope(): boolean;
    isCount(): boolean;
    checkFirstRedPoint(): void;
    setFirstRedPoint(): void;
    dispatchFirstRedPoint(): void;
    dispatchRuleIconRedPoint(): void;
    isRedPoint(): boolean;
    /**
     * 领取红包
     * 41-6
     */
    upDailyEnvelope(type: any): any[];
    /**
     * 获取日志
     * 41-7
     */
    upDailyEnvelopeLogs(): void;
    /**
     * 红包数据
     * 41-5
     */
    downInfo(dailySysOpen: number, curCount: number, nearGetTimes: number, nearNormalValue: number, nearGetRechargeValue: number, curDayRechargeSuccess: number): void;
    /**
     * 红包日志
     * 41-7
     */
    downLogs(datas: any[]): void;
}
declare class DailyRedBagPanel extends BaseEuiView {
    topImg: eui.Image;
    downImg: eui.Image;
    twGroup: eui.Group;
    getBtn: eui.Button;
    normalGet: eui.Button;
    ExtraGet: eui.Button;
    timer: eui.Label;
    timeGroup: eui.Label;
    count: eui.Label;
    normalRedbg: eui.Label;
    extraRedbg: eui.Label;
    logList: eui.List;
    logListData: eui.ArrayCollection;
    bt1: boolean;
    bt2: boolean;
    bt3: boolean;
    startTopImgY: number;
    startDownImgY: number;
    callFun: any;
    constructor();
    init(): void;
    static openCheck(): boolean;
    close(): void;
    open(): void;
    callBack(): void;
    logsTick(): void;
    tick(): void;
    updateView(): void;
    updateLogs(): void;
    onClick(e: any): void;
    reset(): void;
    playAni(CallBack: any, thisObj: any): void;
}
declare class DailyRedBagLogsItemRenderer extends BaseItemRender {
    nameLabel: eui.Label;
    num: eui.Label;
    constructor();
    dataChanged(): void;
}
declare class GMCommandView extends BaseEuiView {
    commandSendBtn: eui.Button;
    rechargeBtn: eui.Button;
    niubiBtn: eui.Button;
    superManBtn: eui.Button;
    superAttrBtn: eui.Button;
    chapterBtn: eui.Button;
    monthCardBtn: eui.Button;
    monthCardBtn1: eui.Button;
    additemBtn: eui.Button;
    clearBagBtn: eui.Button;
    storeBtn: eui.Button;
    stopAIBtn: eui.Button;
    openAIBtn: eui.Button;
    testFbBtn: eui.Button;
    rgBtn: eui.Button;
    newdayBtn: eui.Button;
    commandInput: eui.Label;
    rechargeInput: eui.Label;
    chapterInput: eui.Label;
    additemInput: eui.Label;
    versionLabel: eui.Label;
    accountTxt: eui.Label;
    serverTxt: eui.Label;
    serverTimer: eui.Label;
    kfServerTimer: eui.Label;
    hasCountTxt: eui.Label;
    xyLabel: eui.Label;
    private hasCount;
    private static _ins;
    constructor();
    static ins(): GMCommandView;
    initUI(): void;
    open(...param: any[]): void;
    onTime(): void;
    close(...param: any[]): void;
    focusInHandler(e: any): void;
    focusOutHandler(e: any): void;
    onTou(e: any): void;
    keyEnter(): void;
}
declare class GMMemView extends egret.Sprite {
    private memText;
    private static instance;
    showState: boolean;
    static Ins(): GMMemView;
    constructor();
    show(state: boolean): void;
    private showMem();
}
declare class GMNetCalcItemRenderer extends BaseItemRender {
    idTxt: eui.Label;
    sumTxt: eui.Label;
    countTxt: eui.Label;
    perTxt: eui.Label;
    constructor();
    dataChanged(): void;
}
declare class GMNetCalcView extends BaseEuiView {
    private list;
    private _dataPro;
    private totalBtn;
    private countBtn;
    private perBtn;
    private idBtn;
    private clearBtn;
    private changeBtn;
    private bgClose;
    private timeTxt;
    private totalTxt;
    listState: number;
    lastState: number;
    constructor();
    open(): void;
    updateView(): void;
    onTap(e: any): void;
}
declare class DownloadView extends BaseEuiView {
    private androidBtn;
    private iosBtn;
    private bgClose;
    constructor();
    open(...param: any[]): void;
    close(...param: any[]): void;
    onTap(e: any): void;
    private downloadFile(type);
}
/**
 * 邮件数据
 */
declare class EmailUserControl extends BaseSystem {
    currentMailHandle: number;
    mailData: EmailDataVo[];
    private _mailListData;
    isAllReceive: boolean;
    static ins(): EmailUserControl;
    readonly mailListData: eui.ArrayCollection;
    /**
     * 邮件数据
     * 8-2
     */
    upMailContentData(mailHandle: number): number[];
    /**
     * 邮件领取附件
     * 8-4
     */
    upGetItem(list: number[]): number[][];
    /**
     * 处理邮件数据
     * 8-1
     */
    private downMailData(datas);
    /**
     * 处理邮件数据
     */
    dispatchMailData(): void;
    /**
     * 处理邮件详细数据
     * 8-2
     */
    private downMailDetailedData(...param);
    /**
     * 处理邮件详细数据
     */
    dispatchMailDetail(data: EmailDataVo): void;
    /**
     * 处理删除邮件
     * 8-3
     */
    private downDeleteMail(handle);
    /**
     * 处理领取邮件回包
     * 8-4
     */
    private downGetItemMail(datas);
    /**
     * 派发处理领取邮件
     */
    dispatchGetItemFromMail(): void;
    /**
     * 添加邮件
     * 8-5
     */
    private downAddMail(...param);
    /**
     * 通过唯一id获取邮件数据
     * @param handle
     */
    getMailDataByHandle(handle: number): EmailDataVo;
    /**
     * 通过唯一id删除邮件数据
     * @param handle
     */
    deleteMailDataByHandle(handle: number): void;
    /**
     * 通过领取状态获取邮件
     * @param receive  默认0未领  1已领
     */
    getMailByReceive(receive?: number): EmailDataVo[];
    getUnreadMail(): number;
    /**
     * 获取当前邮件
     */
    getCurrentMail(): EmailDataVo;
    private sortDesc(a, b);
    private sortAsc(a, b);
    /**
     * 邮件排列
     * @param isSort 0:从小到大 1:从大到小
     */
    private mailSort(isSort);
    /**
     * 邮件排列
     */
    mailSort2(a: EmailDataVo, b: EmailDataVo): number;
}
/**
 * 邮件系统
 */
declare class EmailDataVo {
    handle: number;
    title: string;
    times: number;
    type: number;
    receive: number;
    text: string;
    item: RewardVo[];
    /**
     * 基础数据
     */
    initBase(datas: any[]): void;
    /**
     * 详细数据
     */
    init(datas: any[]): void;
}
declare class EmailDetailedView extends BaseEuiView {
    private closeBtn;
    private closeBtn0;
    private receiveBtn;
    private textLabel;
    private itemList;
    private background;
    private colorCanvas;
    desc: eui.Label;
    rect: eui.Rect;
    constructor();
    initUI(): void;
    open(...param: any[]): void;
    close(...param: any[]): void;
    private linkClick(evt);
    private onTap(e);
    private otherClose(evt);
    private setMailData();
    /**
     * 设置领取按钮
     * @param receive
     */
    private setReceiveBtn(receive, isShow?);
}
/**
 * 邮件窗口
 */
declare class EmailPanel extends BasePanel {
    private closeBtn;
    private closeBtn0;
    private allReceiveBtn;
    private mailScroller;
    private mailList;
    private noMailTip;
    private _mails;
    constructor();
    protected childrenCreated(): void;
    open(...param: any[]): void;
    close(...param: any[]): void;
    private mailCall();
    private onTap(e);
    private onSendMail(e);
    private setMailData();
    private setOpenMail(mailData);
}
declare class EmailItemRenderer extends BaseItemRender {
    private nameLabel;
    private dateLabel;
    private treasure;
    constructor();
    protected createChildren(): void;
    protected dataChanged(): void;
}
/**
 * 羽翼
 */
declare class FeatherControl extends BaseSystem {
    static WingExpRedPoint: number;
    static GodWingMaxSlot: number;
    static hint: boolean;
    private timeID;
    private godWing;
    private isListen;
    private wingSkillLevelDic;
    wingSkillDic: number[];
    godWingForge: any[];
    constructor();
    static ins(): FeatherControl;
    static readonly WingMaxLv: number;
    private initConfig();
    getWingSkillByIndex(index: any): number;
    private startCheckHaveCan(isWear?, roleIndex?);
    /**
     * 培养请求
     * 6-2
     */
    upBoost(roleId: number, type: number): number[];
    /**
     * 升级请求
     * 6-3
     */
    upUpgrade(roleId: number): number[];
    /**
     * 激活请求
     * 6-4
     */
    upActivate(roleId: number): number[];
    /**
     * 发送直升一阶
     * 6-12
     */
    upBigUpLevel(roleId: number): number[];
    /**
     * 羽翼数据
     * 6-1
     */
    private downUpDataWing(index, ...param);
    /**
     * 培养
     * 6-2
     */
    private downBoost(index, lv, exp, addExp, clearTime, crit);
    /**
     * 派发培养回调
     */
    dispatchBoost(crit: number, addExp: number): void;
    /**
     * 激活
     * 6-4
     */
    downActivate(index: number, openStatus: number): void;
    /**
     * 升阶羽翼刷新倒计时
     */
    dispatchWingTime(): void;
    /**
     * 检查是否需要显示红点
     */
    private showNavBtnRedPoint();
    getLevelBySkill(index: number): number;
    /**
     * 是否可以提升翅膀（包括直升丹道具）
     */
    canGradeupWing(): boolean[];
    /**
     * 是否可以使用道具（羽毛）提升羽翼
     */
    canItemGradeupWing(): boolean[];
    /**
     * 是否有羽翼可以激活
     * @params roleId == -1 表示取全部
     */
    isHaveActivationWing(roleId?: number): boolean;
    /**
     * 是否可以激活角色羽翼
     * @returns boolean
     */
    canRoleOpenWing(): boolean[];
    /**
     * 申请穿戴
     * 6-3
     */
    upWingWear(roleId: number, itemId: number): number[];
    /**
     * 穿戴是否成功
     * 6-3
     */
    downWingWear(result: boolean): void;
    /**
     * 神羽数据同步
     * 6-5
     */
    downGodWingData(roleId: number, datas: any[]): void;
    /**
     * 使用提升丹
     * 6-8
     */
    upUseDan(id: number, type: number): number[];
    /**
     * 使用提升丹成功
     * 6-8
     */
    downUseDanSuccess(index: number, type: number, count: number): void;
    /**
     * 可以使用飞升丹
     */
    canUseFlyUp(): boolean;
    /**
     * 子角色可以使用飞升丹
     * @param roleID
     */
    canUseFlyUpByRoleID(roleID: number): boolean;
    /**
     * 可以使用资质丹
     */
    canUseAptitude(): boolean;
    /**
     * 子角色可以使用资质丹
     * @param roleID
     */
    canUseAptitudeByRoleID(roleID: number): boolean;
    /**
     * 使用飞升丹或资质丹
     * @param id
     */
    userDans(id: number): void;
    /**
     * 神羽合成
     * 6-6
     */
    upWingCompose(type: number, itemId: number, roleIndex?: number): number[];
    /**
     * 神羽置换
     * 6-7
     */
    upResetGodWing(src: number, des: number): number[];
    /**
     * 获取神羽部位当前道具id
     */
    getCurLevelItemId(roleId: number, slot: number): FeatherDeityLevelConfig;
    /**
     * 获取神羽部位下一级道具id
     */
    getNextLevelItemId(roleId: number, slot: number): FeatherDeityLevelConfig;
    /**
     * 快速合成红点
     */
    quickComposeRedPoint(roleIndex: number, slot: number): boolean;
    /**
     * 装备红点
     */
    wearItemRedPoint(roleIndex: number, slot: number): boolean;
    /**
     * 格子红点
     */
    gridRedPoint(roleIndex: number, slot: number): boolean;
    /**
     * 是否有可装备的神羽
     */
    isWearGodWing(i: number): boolean;
    /**
     * 检查某个部位是否有穿戴
     */
    checkSlot(roleId: number, slot: number): boolean;
    /**
     * 获取能穿的id
     */
    getWearItem(roleId: number, slot: number): number;
    /**
     * 在背包是否有更高阶可替换
     */
    checkSlotLevel(roleId: number, slot: number): boolean;
    /**
     * 检查当前神羽道具是否符合穿戴要求
     */
    checkGodWingLevel(roleId: number, itemId: number): boolean;
    /**
     * 检查当前神羽道具是否有足够材料合成
     */
    checkGodWingItem(roleId: number, itemId: number, slot?: number): boolean;
    /**
     * 当前部位是否有可快速合成/升阶神羽
     * 快速合成条件:1.可合成 2.能穿戴
     */
    isQuicComposeGodWing(roleId: number, slot: number): boolean;
    /**
     * 当前部位仅判断是否有可合成神羽
     */
    isComposeGodWingOnly(itemId: number): boolean;
    /**
     * 判断合成页所有阶神羽是否可合成
     */
    isComposeGodWingAll(): boolean;
    /**
     * 判断合成页某部位某阶神羽是否可合成
     */
    isComposeGodWingLevel(lv: number, slot: number): boolean;
    /**
     * 判断合成页某阶某部位神羽是否可合成
     */
    isComposeGodWingSlot(lv: number, slot: number): boolean;
    /**
     * 是否有可合成神羽
     * @param type: 空值:是否可合成  1:是否可合成并且达到可装备条件
     */
    isComposeGodWing(type?: number): boolean;
    /**
     * 求出当前角色四个部位神羽数据
     */
    calcGodWingSlot(roleId: number): {
        slot: number;
        level: number;
    }[];
    /**
     * 获取表中某个部位最初神羽等级数据
     */
    getStartLevel(slot: number): number;
    /**
     * 获取当前等级的上一级
     */
    getPreLevel(curLevel: number): number;
    /**
     * 获取当前等级的下一级
     */
    getNextLevel(curLevel: number): any;
    /**
     * 获取神羽部位名字
     */
    getNameFromSlot(slot: number): string;
    /**
     * 获取神羽数据
     */
    getGodWing(roleId: number): FeatherDeityVo;
    getGodWingItem(): number;
    checkDanRed(): boolean;
    checkDanRedByIndex(rid: any): boolean;
    checkIsOpen(): boolean;
    checkRoleRed(roleId: any): boolean;
    checkSlotRed(roleId: any, slot: any): boolean;
    checkIsCanTupo(lv: any): boolean;
    /**
     * 下发所有仙炼数据
     * 6-13
     * down
     */
    downAllForge(datas: any[]): void;
    /**
     * 仙炼升级
     * 6-14
     * up
     */
    upForge(roleId: number, slot: number): number[];
    /**
     * 仙炼升级下行
     * 6-14
     * down
     */
    downItemForge(roleId: number, slot: number, lv: number, isTupo: number): FeatherDeityForgeItemVo;
    getGodWingForgeData(roleId: number): FeatherDeityForgeVo;
    getSkillLv(roleId: any): number;
    getStarData(lv: any, isTupo: any): {
        level: number;
        star: number;
    };
}
declare class FeatherVo {
    lv: number;
    exp: number;
    openStatus: number;
    clearTime: number;
    aptitudeDan: number;
    flyUpDan: number;
    init(datas: any[]): void;
    parserBoost(lv: number, exp: number): void;
    parserOpenStatus(openStatus: number): void;
    parserClearTime(clearTime: number): void;
    /**
     * 飞升丹和资质丹
     */
    parserDans(aptitudeDan: number, flyUpDan: number): void;
    getImgSource(): string;
    static getWingAllLevel(): number;
}
/**
 * 羽翼资质
 */
declare class FeatherAptitudesTipsView extends BaseEuiView {
    bgClose: eui.Rect;
    BG: eui.Image;
    attr1: eui.Label;
    attr1NextLv: eui.Label;
    attr2: eui.Label;
    attr2NextLv: eui.Label;
    attr3: eui.Label;
    attr3NextLv: eui.Label;
    attr4: eui.Label;
    attr4NextLv: eui.Label;
    powerPanel: PowerPanel;
    wingName: eui.Label;
    zizhiLv: eui.Label;
    career: eui.Label;
    updateBtn: eui.Button;
    maxLvDesc: eui.Label;
    itemImg: eui.Image;
    costNum: eui.Label;
    private itemIcon;
    private _curRole;
    constructor();
    open(...args: any[]): void;
    close(): void;
    private update();
    private updateAttrs();
    private itemChange();
    private onTouch(e);
}
declare class FeatherHintView extends BaseEuiView {
    BG: eui.Rect;
    desc: eui.Label;
    closeBtn: eui.Button;
    up: eui.Button;
    nextHint: eui.CheckBox;
    fgClose: eui.Button;
    private type;
    private index;
    private data;
    private lastTimeDown;
    constructor();
    initUI(): void;
    open(...param: any[]): void;
    close(...param: any[]): void;
    private onClick(e);
}
/**
 * 羽翼
 */
declare class FeatherPanel extends BasePanel {
    wingImg: eui.Image;
    arrows: eui.Image;
    attrLabel: eui.Label;
    nextAttrLabel: eui.Label;
    attrTempLabel: eui.Label;
    openStatusBtn: eui.Button;
    boostBtn1: eui.Button;
    boostBtn0: eui.Button;
    boostPrice1: PriceIcon;
    rightBtn: eui.Button;
    leftBtn: eui.Button;
    checkBoxs: eui.CheckBox;
    expGroup: eui.Group;
    skillGroup: eui.Group;
    nameTxt: eui.Label;
    weijihuo: eui.Group;
    jihuo: eui.Group;
    jihuolv: eui.Label;
    clearGroup: eui.Group;
    desc: eui.Label;
    lastTime: eui.Label;
    timeLabel: eui.Label;
    powerPanel: PowerPanel;
    maxInfo: eui.Group;
    bigUpLevelBtn: eui.Button;
    noclean: eui.Label;
    dor1: eui.Image;
    dor2: eui.Image;
    wing: eui.Group;
    shan: eui.Rect;
    attrGroup: eui.Group;
    redPoint: eui.Image;
    shenyu: eui.Button;
    redPoint0: eui.Image;
    feishengBtn: eui.Button;
    redPoint1: eui.Image;
    zizhiBtn: eui.Button;
    redPoint2: eui.Image;
    actEff: eui.Group;
    wingeff: eui.Group;
    wingMid: eui.Image;
    wingL: eui.Image;
    wingR: eui.Image;
    upBtn: ItemDirUpLvPanel;
    private mc;
    private reliveEff;
    private openEffect;
    private flyUpEffect;
    private barbc;
    curRole: number;
    private danItemID;
    private _totalPower;
    private _wingsData;
    private _lastLv;
    private _isAutoUp;
    private skillIconArr;
    private currViewNum;
    private lastTimeDown;
    private rapetNum;
    childrenCreated(): void;
    init(): void;
    open(...param: any[]): void;
    close(...param: any[]): void;
    private updateLevel();
    /**
     * 刷新飞升丹和资质丹
     */
    private updateDans();
    private onTap(e);
    private skillItemClick(e);
    private stopAutoUp();
    private autoUpStar();
    /**
     * 未激活
     */
    private notOpenStatus();
    /**
     * 已激活
     */
    private openStatusOpen();
    /**
     * 培养表现
     * @param crit 暴击（1=不暴击，2=两倍暴击，以此类推）
     * @param addExp 增加的经验
     */
    private showBoost(param);
    private setWingView(lv);
    private setWingData();
    private setSeeBtnStatu();
    private setTimeDown();
    private refushTimeLabel();
    private updateAtt();
    /**
     * 资质丹和飞升丹增加的属性
     */
    private getDanAttrs(lv);
    private expBarChange();
    private isShowUpGradeBtn();
    private showOpenMovie();
    private flowReckEffect();
    private updateRedPoint();
}
declare class FeatherSkillTipsView extends BaseEuiView {
    private nameLabel;
    private description;
    private BG;
    private imgSkill;
    private lblNoAcitveTip;
    private grpNoActiveTip;
    private lblAcitveTip;
    constructor();
    initUI(): void;
    open(...param: any[]): void;
    close(...param: any[]): void;
    private otherClose(evt);
    private setData(id, index, roleIndex);
}
/**
 * 羽翼飞升
 */
declare class FeatherSoaringTipsView extends BaseEuiView {
    bgClose: eui.Rect;
    BG: eui.Image;
    attr1: eui.Label;
    attr1NextLv: eui.Label;
    attr2: eui.Label;
    attr2NextLv: eui.Label;
    attr3: eui.Label;
    attr3NextLv: eui.Label;
    attr4: eui.Label;
    attr4NextLv: eui.Label;
    powerPanel: PowerPanel;
    wingName: eui.Label;
    feishengLv: eui.Label;
    career: eui.Label;
    updateBtn: eui.Button;
    maxLvDesc: eui.Label;
    itemImg: eui.Image;
    costNum: eui.Label;
    attr5: eui.Label;
    attr5NextLv: eui.Label;
    attr6: eui.Label;
    attr6NextLv: eui.Label;
    attr7: eui.Label;
    attr7NextLv: eui.Label;
    attr8: eui.Label;
    attr8NextLv: eui.Label;
    private itemIcon;
    private _curRole;
    constructor();
    open(...args: any[]): void;
    close(): void;
    private update();
    private updateAttrs();
    private itemChange();
    private onTouch(e);
}
declare class FeatherSkillItemRenderer extends BaseItemRender {
    icon: eui.Image;
    skillIcon: eui.Image;
    blackImg: eui.Rect;
    constructor();
    dataChanged(): void;
}
/**
 * 神羽红点
 */
declare class FeatherDeityRedPoint extends BaseSystem {
    redPoint: boolean;
    roleTabs: Map<Map<boolean>>;
    tabs: {
        [tab: number]: boolean;
    };
    constructor();
    /**
     * 神羽入口红点
     */
    dispatchGodWingRedPoint(): void;
    /**
     * 神羽装备
     */
    dispatchGodWingItem(): void;
    /**
     * 神羽合成
     */
    dispatchGodWingCompose(): void;
    /**
     * 神羽转换
     */
    dispatchGodWingTransfer(): void;
    /**
     * 仙炼
     */
    postGodWingForge(): boolean;
    /**
     * 判定神羽最大红点
     */
    getGodWingRedPoint(): boolean;
}
declare class FeatherDeityForgeItemVo {
    roleId: number;
    slot: number;
    lv: number;
    isTupo: number;
}
declare class FeatherDeityForgeVo {
    roleId: number;
    data: {};
    parse(datas: any[]): void;
    getSlotData(slot: any): FeatherDeityForgeItemVo;
}
/**
 * 神羽
 */
declare class FeatherDeityVo {
    private data;
    parser(datas: any[]): void;
    getLevel(slot: number): number;
    getData(): Map<{
        slot: number;
        level: number;
    }>;
    /**
     * 获取套装等级
     */
    getSuitLevel(): number;
    /**
     * 获取套装数量
     */
    getSuitSum(): number;
}
/**
 * 神羽合成装备界面
 */
declare class FeatherDeityComposePanel extends BasePanel {
    powerPanel: PowerPanel;
    skill: eui.Image;
    attr: eui.Button;
    private list;
    private now;
    private next;
    private compose;
    private redPoint;
    private attr0;
    private power0;
    private attr1;
    private power1;
    private attr2;
    private power2;
    private number;
    curIndex: number;
    private slot;
    private itemList;
    private dataList;
    close(...param: any[]): void;
    open(...param: any[]): void;
    private onListTap(e);
    private onSlot(e);
    private onClick(e);
    /**UI*/
    private updateGodWing();
    private updateItem();
    private updateGodWingItem();
    private updateRedPoint();
}
declare class FeatherDeityForgePanel extends BasePanel {
    schedule0: eui.Group;
    getItemTxt: eui.Label;
    upGradeBtn: eui.Button;
    icon: eui.Image;
    nameLbl: eui.Label;
    curState: eui.Label;
    curAttr: eui.Label;
    nextState: eui.Label;
    nextAttr: eui.Label;
    costGroup: eui.Group;
    maxDesc: eui.Label;
    arrow: eui.Image;
    arrow1: eui.Image;
    icon0: eui.Image;
    countLabel0: eui.Label;
    forgeinfo: eui.Group;
    skillinfo: eui.Group;
    forgeoprate: eui.Group;
    skillrequire: eui.Group;
    curSkillState: eui.Label;
    curSkillAttr: eui.Label;
    nextSkillState: eui.Label;
    nextSkillAttr: eui.Label;
    skillSelectEff: eui.Group;
    mc: GameMovieClip;
    skillSelMc: GameMovieClip;
    powerPanel: PowerPanel;
    starList: StarList;
    roleId: number;
    slot: number;
    nextLv: number;
    nextTupo: number;
    needGet: boolean;
    constructor();
    childrenCreated(): void;
    open(...param: any[]): void;
    update(item: any): void;
    updateItem(): void;
    updateSlot(): void;
    updateSkillName(): void;
    setSelectSlot(slot: any, showStar?: boolean, index?: number): void;
    sortAttr(aAttr: any, bAttr: any): any;
    setSelectSkill(): void;
    setSelectSkillEff(state: any): void;
    onTap(e: any): void;
    buyItem(): void;
    getItem(index: any): any;
    getLabel(index: any): any;
    sendUp(): void;
    updatePower(): void;
    updateRedPoint(): void;
    playUpMc(): void;
    close(): void;
}
/**
 * 神羽装备界面
 */
declare class FeatherDeityPanel extends BasePanel {
    powerPanel: PowerPanel;
    skill: FeatherDeitySuitItemRenderer;
    attr: eui.Button;
    private attr0;
    private power0;
    private state0;
    private attr1;
    private power1;
    private state1;
    private attr2;
    private power2;
    private state2;
    private attr3;
    private power3;
    private state3;
    private costImg0;
    private cost0;
    private replace;
    private redPointReplace;
    private replace0;
    private redPointReplace0;
    curRole: number;
    private slot;
    private isActive;
    private getItemTxt;
    private costName;
    open(...param: any[]): void;
    /**选中的神羽部位 */
    private onTab(e);
    private onClick(e);
    private onTouch(e);
    private updateGodWing();
    private updateItem();
    private setNnactive();
    private updateSkill();
    private updateCost(gitem);
    private updateRedPoint();
    /**
     * 计算每个角色神羽的总战力
     */
    private updatePower();
}
/**
 * 神羽技能tips
 */
declare class FeatherDeitySkillTipsView extends BaseEuiView {
    /**当前*/
    private icon;
    private lv;
    private content;
    private condition;
    private name1;
    /**下一阶*/
    private icon0;
    private lv0;
    private content0;
    private condition0;
    private bgClose;
    private gwsConfig;
    private nextConfig;
    constructor();
    open(...param: any[]): void;
    close(...param: any[]): void;
    private onClick();
    private updateDesc();
    /**当前 */
    private setCurDesc();
    /**下一阶 */
    private setNextDesc();
}
/**
 * 神羽套装tips
 */
declare class FeatherDeitySuitTipsView extends BaseEuiView {
    /**当前*/
    private content0;
    private name0;
    /**下一阶*/
    private name1;
    private content1;
    private bgClose;
    private activeLbl;
    private nextActiveLbl;
    private gwsConfig;
    private nextConfig;
    private roleIndex;
    constructor();
    open(...param: any[]): void;
    close(...param: any[]): void;
    private onClick();
    private updateDesc();
    /**
     * 当前
     */
    private setCurDesc();
    /**
     * 下一阶
     */
    private setNextDesc();
}
declare class FeatherDeityTipsView extends BaseEuiView {
    private group;
    private nameLabel;
    private type;
    private lv;
    private career;
    private score;
    private attr0;
    private itemIcon;
    private powerPanel;
    private bgClose;
    private gwConfig;
    private quali;
    constructor();
    open(...param: any[]): void;
    close(...param: any[]): void;
    private otherClose(evt);
    private updateTips();
}
/**
 * 神羽转换界面
 */
declare class FeatherDeityTransferPanel extends BasePanel {
    powerPanel: PowerPanel;
    attr: eui.Button;
    private have;
    private item0;
    private transfer;
    private cost;
    private costImg0;
    private itemList;
    private curItemId;
    private desId;
    private warn;
    close(...param: any[]): void;
    open(...param: any[]): void;
    private reset();
    private updateBagList();
    private callbackUpdate();
    /**
     * 转换
     */
    private onClick(e);
    /**
     * 选择转换目标
     */
    private onTouchItem(e);
    /**
     * 点击背包列表
     */
    private onListTap(e);
    /**UI*/
    private updateGodWing();
    private updateCost();
}
/**
 * 神羽
 */
declare class FeatherDeityView extends BaseEuiView {
    private redPoint0;
    private redPoint1;
    private redPoint2;
    /** tabPanel */
    viewStack: eui.ViewStack;
    /** 标签页 */
    tab: eui.TabBar;
    roleSelect: RoleSelectPanel;
    featherDeityPanel: FeatherDeityPanel;
    featherDeityComposePanel: FeatherDeityComposePanel;
    featherDeityTransferPanel: FeatherDeityTransferPanel;
    godWingForgePanel: FeatherDeityForgePanel;
    redPointGroup: eui.Group;
    private roleIndex;
    constructor();
    open(...param: any[]): void;
    static openCheck(...param: any[]): boolean;
    private onTabTouching(e);
    /**
     * 各页签开启条件
     */
    private checkIsOpen(index);
    private onChange(e);
    /**
     * 点击标签页按钮
     */
    private onTabTouch(e);
    private setRoleId(roleId);
    private setOpenIndex(selectedIndex);
    private updateRedPoint();
    private getForeRedByRole(roleIndex);
    private getForgeRed();
}
/**
 * 神羽合成列表控件
 */
declare class FeatherDeityComposeItemRenderer extends BaseItemRender {
    private nameTxt;
    private redPoint;
    private bg0;
    private bg;
    constructor();
    protected dataChanged(): void;
    setRedPoint(b: boolean): void;
    destruct(): void;
}
declare class FeatherDeityForgeItemRendrere extends FeatherDeityItemRenderer {
    dataChanged(): void;
}
declare class FeatherDeityItemItemRenderer extends FeatherDeityItemRenderer {
    protected dataChanged(): void;
}
/**
 * 类型10活动
 */
interface Amusement10Config {
    id: number;
    level: number;
    recharge: number;
    yuanBao: number;
    info: {
        multiple: number;
        value: number;
    }[];
}
declare class FeatherDeitySuitItemRenderer extends FeatherDeityItemRenderer {
    protected dataChanged(): void;
}
/**
 * 送花记录
 */
declare class FlowerLogView extends BaseEuiView {
    scroller: eui.Scroller;
    list: eui.List;
    charmCount: eui.Label;
    closeBtn: eui.Button;
    closeBtn0: eui.Button;
    private _collect;
    constructor();
    childrenCreated(): void;
    open(...args: any[]): void;
    close(): void;
    private update();
    private onTouch(e);
}
declare class FlowerPanel extends BasePanel {
    imgBg: eui.Image;
    flowerImg: eui.Image;
    flowereff: eui.Group;
    isPlaying: boolean;
    mcEff: GameMovieClip;
    private _inited;
    constructor();
    childrenCreated(): void;
    private onTouch(e);
    private onRemove(e);
    showEffect(): void;
    private playComplete();
}
/**
 * 送花
 */
declare class FlowerUseView extends BaseEuiView {
    bgClose: eui.Rect;
    anigroup: eui.Group;
    BG: eui.Image;
    sub1Btn: eui.Button;
    add1Btn: eui.Button;
    maxBtn: eui.Button;
    minBtn: eui.Button;
    itemCount: eui.Label;
    charmPoint: eui.Label;
    sendBtn: eui.Button;
    openListBtn: eui.Button;
    scroller: eui.Scroller;
    list: eui.List;
    selectName: eui.Label;
    numLabel: eui.Label;
    closeBtn: eui.Button;
    private _showFriendsList;
    private _collect;
    private _friendID;
    private _sendCount;
    private _maxCount;
    constructor();
    childrenCreated(): void;
    open(...args: any[]): void;
    close(): void;
    private update();
    private updateMaterial();
    private onTouch(e);
    private onTouchList(e);
    private updateCount();
}
/**
 * 送花记录
 */
declare class FlowerLogItemRenderer extends BaseItemRender {
    playerName: eui.Label;
    flowerCount: eui.Label;
    dataChanged(): void;
}
/**
 * 送花对象
 */
declare class FlowerUseTargetItemRenderer extends BaseItemRender {
    nameTxt: eui.Label;
    constructor();
    dataChanged(): void;
}
/**
 * 欢迎
 */
declare class Greet1View extends GreetView {
    bgClose: eui.Rect;
    awardList: eui.List;
    constructor();
    open(): void;
    onTap(e: any): void;
}
interface Amusement11_1Config {
    activityID: number;
    index: number;
    id: number;
    showType: number;
    score: number;
    reward: {
        id: number;
        type: number;
        count: number;
    }[];
    showText: string;
    condition: number[];
}
/**
 * 引导
 */
declare class GuideControl extends SingleClass {
    private static guideEffect;
    private static tempMainRole;
    protected isInit: boolean;
    protected view: GuideView;
    protected step: number;
    protected part: number;
    protected wrongCount: number;
    protected maxWrongCount: number;
    private cfg;
    curCfg: GuideConfig;
    private overs;
    static ins(): GuideControl;
    init(): void;
    /** 任务的引导 */
    private updateByTask();
    /**点击任务之后的引导 */
    updateByClick(): void;
    /** 根据某些出现触发引导*/
    updateByAppear(): void;
    private canShow();
    private checkShow();
    private addTimeHandler();
    private removeTimeHandler();
    private timeHandler();
    /**
     * 根据任务状态判断引导是否结束
     */
    private guideOver();
    private update(type?);
    /**
     * 显示
     */
    show(part: number, step: number): void;
    clickOut(): void;
    private readyForNext();
    protected close(): void;
    protected next(): void;
    /**保存设置 */
    protected save(): void;
    /**获取焦点显示对象 */
    protected getDisplayObj(part: number, step: number): egret.DisplayObject;
    /**
     * 任务相关引导
     * @param id  任务id
     * @param taskType  任务类型  0 每日任务 1成就任务或任务追踪
     */
    static taskGuidance(id: number, taskType: number): void;
    private static guideFun();
    /**
     * 引导
     */
    static guidance(...param: any[]): void;
    static challengeBoss(func?: any): void;
    static startTaskEffect(): void;
    static stopTaskEffect(): void;
}
declare const enum GuideType {
    OpenWin = 1,
    ChallengeBoss = 2,
    ArtifactGuide = 3,
    AtkMonster = 4,
    AutoPk = 5,
    KillDeer = 6,
    GuideFb = 7,
}
declare class GuideConditionVo {
    type: number;
    value: number;
}
declare class GuideArrow extends eui.Component {
    bg: eui.Group;
    lab: eui.Label;
    constructor();
    update(): void;
    close(): void;
}
declare class GuideArrow2 extends eui.Component {
    bg: eui.Group;
    lab: eui.Label;
    constructor();
    setDirection(direction: any): void;
    setTips(tips: any): void;
    removeTweens(): void;
}
declare class GuideEffectDisplay extends BaseLeakDisplay {
    private _effCir;
    private _arrow;
    private _effGroup;
    private _arrowGroup;
    private _isShow;
    constructor();
    start(): void;
    stop(): void;
    show(tips: any): void;
    hide(): void;
    isShow(): boolean;
    private update();
}
declare class GuideUpgradeView extends BaseEuiView {
    frame: eui.Image;
    desc: eui.Label;
    desc0: eui.Label;
    bgClose: eui.Rect;
    private gainList;
    private gainWay;
    constructor();
    initUI(): void;
    open(...param: any[]): void;
    close(...param: any[]): void;
    private onTouchList(e);
    private onTap(e);
}
declare class GuideView extends GuideViewBase {
    private mc;
    private lab;
    private arrowGroup;
    private arrow;
    constructor();
    /**
     * 设置显示数据
     * @param obj
     */
    show(obj: egret.DisplayObject): void;
    close(): void;
}
interface Amusement11_2Config {
    type: number;
    index: number;
    dayLimit: number;
    id: number;
    name: string;
    score: number;
    turn: any[];
    day: number;
    group: number;
    gName: string;
    gNameRes: string;
    dayImg: string;
    target: number;
    rate: number;
    againYb: number;
}
declare class GuideSelectControl extends BaseSystem {
    static ins(): GuideSelectControl;
    upNoGuide(): void;
}
declare class GuideSelectView extends BaseEuiView {
    bgClose: eui.Rect;
    guideImg: eui.Image;
    guideImgGray: eui.Image;
    selectGuideImg: eui.Image;
    noGuideImg: eui.Image;
    noGuideImgGray: eui.Image;
    noSelectGuideImg: eui.Image;
    sureBtn: eui.Button;
    grpGuide: eui.Group;
    grpNoGuide: eui.Group;
    constructor();
    open(): void;
    close(): void;
    onTap(e: egret.TouchEvent): void;
}
declare class HelpControl {
    static openHelpWin(id: any): void;
    static getHelpStr(id: any): string;
}
declare const enum HelpID {
    ID_4 = 4,
    ID_7 = 7,
    ID_8 = 8,
    ID_9 = 9,
    ID_10 = 10,
    ID_12 = 12,
    ID_14 = 14,
    ID_15 = 15,
    ID_16 = 16,
    ID_17 = 17,
    ID_18 = 18,
    ID_19 = 19,
    ID_20 = 20,
    ID_21 = 21,
    ID_22 = 22,
    ID_23 = 23,
    ID_24 = 24,
    ID_26 = 26,
    ID_27 = 27,
    ID_29 = 29,
    ID_30 = 30,
    ID_34 = 34,
    ID_35 = 35,
    ID_36 = 36,
    ID_37 = 37,
    ID_38 = 38,
    ID_41 = 41,
    ID_42 = 42,
    ID_44 = 44,
    ID_45 = 45,
    ID_46 = 46,
    ID_49 = 49,
    ID_50 = 50,
    ID_51 = 51,
    ID_53 = 53,
    ID_57 = 57,
    ID_63 = 63,
    ID_65 = 65,
    ID_66 = 66,
    ID_81 = 81,
    ID_82 = 82,
    ID_109 = 109,
    ID_110 = 110,
    ID_111 = 111,
    ID_152 = 152,
    ID_153 = 153,
    ID_200 = 200,
    ID_210 = 210,
    ID_2000 = 2000,
    ID_2001 = 2001,
}
declare class HelpView extends BaseEuiView {
    group: eui.Group;
    background: eui.Image;
    textInfo: eui.Label;
    constructor();
    open(...param: any[]): void;
    private otherClose(evt);
}
/**
 * 战灵技能
 */
declare class AshtarteSkillControl extends SingleClass {
    private triggerInterval;
    static ins(): AshtarteSkillControl;
    /**
     * 检测战灵出现触发
     */
    checkWarSpiritBubbleTrigger(): void;
    /**
     * 检测合击触发
     */
    checkHJTrigger(source: UnitMonster, targets: UnitMonster[]): void;
    /**
     * 检测死亡触发
     */
    checkDieTrigger(source: UnitMonster, targets: UnitMonster[]): void;
    /**
     * 检测血量触发
     */
    checkHPTrigger(target: UnitMonster, sourceTarget: UnitMonster): void;
    /**
     * 间隔执行方法
     */
    private intervalDoFun(indx, cd, fun);
}
declare const enum AshtarteSkillType {
    TYPE0 = 0,
    TYPE1 = 1,
    TYPE2 = 2,
    TYPE3 = 3,
    TYPE4 = 4,
    TYPE5 = 5,
    TYPE6 = 6,
    TYPE7 = 7,
    TYPE8 = 8,
    TYPE9 = 9,
}
declare class HookControl extends SingleClass {
    /** AI循环时间 */
    static AI_UPDATE_TIME: number;
    static SEND_TASK_TYPE: number;
    private inited;
    private aiList;
    /** 技能cd */
    private skillCD;
    private curSkill;
    private curTarget;
    /** 属性触发的效果 cd  非技能*/
    private attrCD;
    private attrValue;
    private skillCastType;
    private skillTargetType;
    private lastTarget;
    private teamAction;
    private hashHpObj;
    private mainAttrHandel;
    private isStartAtk;
    private zhanlingTime;
    private zhanlingdelayTime;
    isFindDrop: boolean;
    pStarting: boolean;
    private isLog;
    private _isTogetherCrit;
    static ins(): HookControl;
    init(): void;
    /**
     * 开始挂机
     */
    start(): void;
    /**
     * 关闭挂机
     */
    stop(): void;
    clearTarget(target: any): void;
    clearAIList(): void;
    clear(): void;
    destruct(): void;
    readonly starting: boolean;
    add(char: any): void;
    remove(char: any): void;
    getAIList(): Map<UnitMonster>;
    /**
     * 开始
     */
    private startHook();
    private checkCanScreeningTarget(selfTarget, skill, curTarget);
    /**
     * 使用技能
     */
    useSkill(selfTarget: UnitMonster, target: UnitMonster, skill: SkillVo): void;
    private tryExtHarm(selfTarget, target);
    private tryExtSummoner(selfTarget, target, skill);
    private repel(selfTarget, target, skill);
    /**
     * 触发被动
     * @param selfTarget
     * @param type  0为AttributeType  1为ExAttributeType
     * @param attrType 属性cd
     * @param per 触发概率
     */
    private checkTriggerAttr(selfTarget, type, attrType, per?, exValue?);
    /**
     * 是否触发
     */
    private isTriggerAttr(selfTarget, type, attrType, def?);
    /**
     * 给自身添加附加效果
     * @param selfTarget
     * @param ImbaData
     */
    private addSelfReviseSkillEffect(selfTarget, ImbaData);
    /**
     * 给目标添加附加效果
     * @param target
     * @param source
     * @param ImbaData
     */
    private addTargetReviseSkillEffect(target, source, ImbaData);
    /**
     * 被攻击触发被动
     */
    private tryUsePassiveSkill(selfTarget, target, isBeEffect?, _type?);
    /**
     * 触发战灵被动技能
     */
    tryUseAshtarteSkill(selfTarget: any, skillId: any, isBeEffect: any): void;
    /**
     * 触发羽翼被动技能
     */
    private tryUseWingSkill(selfTarget, skill, isBeEffect);
    /**
     * 检查被动技能
     */
    private checkWingEffect(selfTarget, skill, isBeEffect?);
    /**
     * 烈焰技能附加效果
     */
    private tryUseYlPassiveSkill(selfTarget, target, skill);
    /**
     * 传世神装效果
     */
    private tryTriggerHeirloomSkill(selfTarget, tempArr, hitTargetInfo);
    /**
     * 触发冰魂效果
     */
    private tryUseWeaponSkill(target, skill, isBeHit);
    /**
     * 触发秘籍效果
     */
    private tryTriggerMijiBuqu(ttarget);
    /**
     * 触发魂骨效果
     */
    private tryTriggerHungu(ttarget);
    /**
     * 触发心法效果
     */
    private tryTriggerHeart(ttarget);
    /**
     * 触发主宰效果
     */
    triggerMaster(selfTarget: UnitMonster, target: UnitMonster): void;
    /**
     * 触发雷霆技能
     */
    tryThunderSkill(selfTarget: UnitMonster, target: UnitMonster, skill: SkillVo): boolean;
    /**
     * 宠物被动技能
     * @param selfTarget
     * @param isBeEffect
     */
    private petTryUsePassiveSkill(selfTarget, isBeEffect?);
    /**
     * 显示buff伤害
     */
    private showBuffHarm(selfTarget, target, skill, hramValue);
    /**
     * 受击是否死亡
     */
    private hramedDie(target, val);
    /**
     * 伤害表现
     */
    private showHram(isDie, damageType, target, sourceTarget, hramValue, logStr?);
    /**
     * 检查战斗是否结束
     * @param attacker 攻击方
     * @param defender 防守方
     */
    private checkAIend(attacker, defender);
    /**
     * 怪物死亡音效
     */
    checkPlayDieSound(monster: UnitMonster): void;
    getPickAI(): void;
    getTeamCount(team: Team, funs: Function[]): number;
    private stopHookTimer();
    private addHookTimer();
    private addAshtarteTimer();
    getArgs(id: number, imbaData?: SkillsImbaReviseConfig, gwSKill?: SkillsGWReviseConfig, commSkillReviseConfig?: SkillsCommonReviseConfig): {
        a: number;
        b: number;
        c: number;
        time: number;
    };
    skillEffValue(selfTarget: UnitMonster, skillEff: SkillsEffectsConfig, args?: {
        a: number;
        b: number;
        c: number;
    }): number;
    /**
     * 技能范围内
     */
    private tryUseSkill(selfTarget);
    /**
     * 筛选技能
     */
    private screeningSkill(hCode);
    /**
     * 检查距离
     */
    private checkDistance(selfTarget, master, range?);
    /**
     * 获取释放技能列表
     */
    private getCanUseSkillList(selfTarget, isActive?);
    private sortFunc(a, b);
    /**
     * 基础伤害
     */
    private damageBaseCalculation(selfTarget, target, skill);
    /**
     * 宠物技能加成
     */
    private gePetSkillAdd(selfTarget);
    /**
     * 伤害减去buff抵挡
     */
    private damageBuff(selfTarget, target, damage);
    /**
     * 筛选对象
     */
    private screeningTarget(selfTarget, range?, isSameTeam?);
    private checkMySubInList(list, isSameTeam?, team?);
    private startAshtarte();
    private checkShowZhanling();
    private getEffectIdsByGroup(group);
    private trace(str);
}
declare const enum TargetType {
    Friendly = 1,
    Enemy = 2,
}
declare const enum Team {
    /**自己 */
    My = 0,
    /**怪物 */
    Monster = 1,
    /**遭遇对象 */
    WillEntity = 2,
    /**遭遇Boss */
    WillBoss = 3,
    NotAtk = 4,
    /**野外玩家 */
    Faker = 5,
}
declare const enum AI_State {
    Stand = 0,
    Run = 1,
    Atk = 2,
    Die = 3,
    Patrol = 4,
}
declare const enum PassiveCond {
    attack = 0,
    beAttack = 1,
    crit = 2,
    beCrit = 3,
    hpLess = 4,
    kill = 5,
    dead = 6,
    baAttackHp = 7,
    heJi = 8,
}
declare const enum CastType {
    Friend = 1,
    Other = 2,
    Self = 3,
    SelfHpLess = 4,
}
/**
 * 图腾技能
 */
declare class TotemSkillControl extends BaseSystem {
    skillJob: {};
    skillIndex: {};
    constructor();
    static ins(): TotemSkillControl;
    getSkillID(roleId: any): any[];
    onCreate(model: UnitModel): void;
    initEff(job: any): void;
    init(): void;
    checkActedFHJT(self: UnitMonster, targets: UnitMonster[]): void;
}
declare class SkillBallMgt {
    nX: number;
    nY: number;
    _angle: number;
    runing: boolean;
    readly: boolean;
    target: any;
    max: number;
    ballRes: string;
    ballContainer: any;
    private _balls;
    private _angles;
    constructor(target: any, ballMax?: number, resName?: string);
    reset(ballMax: any): void;
    starAddBall(time?: number): void;
    pushBall(): void;
    creatBall(num: any): void;
    resetPos(): void;
    refPos(): void;
    startRun(): void;
    stop(): void;
    getBallNum(): number;
    isReady(): boolean;
    attackT(point: any, val: any): void;
    runCircle(): void;
    remove(): void;
    destroy(): void;
}
declare class InviteControl extends BaseSystem {
    private inviteDatas;
    private allInviteNum;
    private rewardStatus;
    private typeCurIdDatas;
    private typeToIdsCfgDict;
    private idsStandardDict;
    constructor();
    static ins(): InviteControl;
    /**
     * 邀请数据下行
     * 81-2
     */
    private downAllInfo(datas, allNum);
    /**
     * 奖励数据下行
     * 81-3
     */
    private downRewardInfo(status);
    /**
     * 上行邀请人数据
     * 81-1
     */
    upInviteInfo(inviterId: number, inviterSid: number): number[];
    /**
     * 领奖
     * 81-3
     */
    upReward(rewardId: number): number[];
    getInviteData(): {
        actorId: number;
        sid: number;
        level: number;
        zsLevel: number;
        recharge: number;
    }[];
    getTotalInviteNum(): number;
    getCurCountById(id: number): number;
    isRewardDone(id: number): boolean;
    private calStandardDatas();
    private calCurIdDatas();
    getCurIdByType(type: number): number;
    getTypesCfgDict(): {
        [type: number]: number[];
    };
    checkRed(): boolean;
    private checkRewardRed();
    checkRewardRedById(id: number): boolean;
    checkAllStandard(): boolean;
}
declare class InviteBonusPanel extends BasePanel {
    shareButton: eui.Button;
    blGold: eui.BitmapLabel;
    blExp: eui.BitmapLabel;
    open(...param: any[]): void;
    close(...param: any[]): void;
    private initAllEvents();
    private removeAllEvents();
    private onTap(e);
    private updateView();
}
declare class InvitePanel extends BasePanel {
    dayNumLbl: eui.Label;
    totalNumLbl: eui.Label;
    shareButton: eui.Button;
    shareRed: eui.Image;
    rewardList: eui.List;
    open(...param: any[]): void;
    close(...param: any[]): void;
    private initAllEvents();
    private removeAllEvents();
    private onTap(e);
    private updateView();
}
declare class InviteRewardItemRenderer extends BaseItemRender {
    bg: eui.Image;
    rewardList: eui.List;
    targetLbl: eui.Label;
    getButton: eui.Button;
    redPoint: eui.Image;
    private listData;
    childrenCreated(): void;
    protected dataChanged(): void;
    private onTap(e);
}
declare class LeaseControl extends BaseSystem {
    weaponId: number;
    firstRedPoint: boolean;
    static ins(): LeaseControl;
    checkOpen(showTips?: boolean): boolean;
    getRedPoint(id?: any, state?: boolean): boolean;
    getBuyEndTime(): number;
    getTime(): number;
    dispatchFirstRedPoint(): void;
    /**
     * 租赁
     * 41-26
     */
    upGodWeaponRent(id: any): any[];
    /**
     * 租赁
     * 41-26
     */
    downGodWeaponRent(weaponId: number): void;
}
declare class LeaseView extends BaseEuiView {
    closeBtn: eui.Button;
    actInfo: eui.Label;
    actTime: eui.Label;
    roleSelect0: any;
    maxItem: number;
    arr: LeaseLvConfig[];
    isOpen: boolean;
    constructor();
    close(): void;
    static openCheck: () => boolean;
    open(): void;
    onTouch(e: any): void;
    onClick(e: any): void;
    updateView(): void;
    updateRedPoint(): void;
    updateBtn(): void;
    updateEff(): void;
    setTime(): void;
}
declare class MeridiansControl extends BaseSystem {
    static ins(): MeridiansControl;
    /**
     * 冲脉
     * 12-1
     */
    upBoost(roleId: number): number[];
    /**
     * 提升
     * 12-2
     */
    upUpgrade(roleId: number): number[];
    /**
     * 冲脉
     * 12-1
     */
    private downUpData(index, ...param);
    /**
     * 直升
     * 12-4
     */
    upBigUpLevel(roleId: number): number[];
    /**
     * 直升
     * 12-4
     */
    downBigUpLevel(result: number, type: number): void;
    /**
     * 是否可以提升经脉
     */
    canGradeupJingMai(): boolean[];
}
declare class MeridiansVo {
    level: number;
    stage: number;
    init(datas: any[]): void;
    jingMaiCanUp(): boolean;
}
/**
 * 经脉窗口
 */
declare class MeridiansPanel extends BasePanel {
    private jinMaiName;
    private jinmaiStage;
    private fightGroup;
    private _totalPower;
    private attr;
    private nextAttr;
    private countLabel;
    private boostBtn;
    private redPoint0;
    /** 直升一阶 */
    private bigUpLevelBtn;
    private cursor;
    private cursorLocation;
    curRole: number;
    private _data;
    private danItemID;
    private powerPanel;
    private canClick;
    constructor();
    childrenCreated(): void;
    init(): void;
    open(): void;
    close(): void;
    private onTap(e);
    /**
     * 显示亮光
     */
    private showLight(lv, flag);
    /**
     * 显示升阶特效
     */
    private showUpgradeEffect();
    private setForgeData(levelUp?);
}
/**
 * 经脉窗口
 */
declare class MeridiansItemRenderer extends BaseItemRender {
    guang: eui.Image;
    bgImg: eui.Image;
    item: eui.Image;
    private mc;
    constructor();
    setLights(type: number): void;
}
declare class MerryshopView extends BaseEuiView {
    private closeBtn0;
    private rmbTxt;
    private topGroup;
    private leftBtn;
    private rightBtn;
    private buyBtn;
    private list;
    private desImg;
    private discountLabel;
    private cdTime;
    private curIndex;
    private chargeRate;
    private time;
    private barbc;
    constructor();
    initUI(): void;
    open(...param: any[]): void;
    private getLeftTime();
    private runTime();
    /**经验进度条改变 */
    private changeExpBar();
    private getRechargeIndex();
    /**奖励改变 */
    private changeAwards();
    /**设置领取奖励按钮状态 */
    private setAwards(config);
    private changeBtn();
    close(...param: any[]): void;
    protected onTap(e: egret.TouchEvent): void;
    private showVipInfo(config);
}
declare class MythEquipControl extends BaseSystem {
    static ins(): MythEquipControl;
    /**
     * 神话是否开放
     */
    checkLegendForgeIsOpen(): boolean;
    /**
     * 神话战力
     */
    getLegendForgePower(role: RoleModel, slot: number): number;
    /**
     * 神话套装战力
     */
    getLegendForgeTZPower(role: RoleModel): number;
    /**
     * 神话数据变更
     * 7-9
     */
    upLegendSlotForge(roleId: number, slot: number): number[];
    /**
     * 神话数据变更
     * 7-9
     */
    downLegendSlot(roleId: number, slot: number, level: number): void;
    /**
     * 神话数据
     */
    getMythForgeVo(roleId: number): MythForgeVo;
    /**
     * 神话技能等级
     */
    getSkillLv(role: RoleModel): number;
    /**
     * 是否满足升级
     */
    getLegendForgeNextIsEnough(roleId: number, slot: number): boolean;
    dispatchLegendSelected(slot: number): void;
}
/**
 * 神话装备
 */
declare class MythEquipRedPoint extends BaseSystem {
    redPoint: boolean;
    forgeRoleRed: boolean[];
    forgeRed: boolean;
    legendRoleRed: boolean[];
    legendRed: boolean;
    constructor();
    static ins(): MythEquipRedPoint;
    getRoleRed(roleId: any): boolean;
    dispatchRedPoint(): void;
    dispatchLegendUpRed(): void;
    dispatchLegendForgeRed(): void;
}
declare class MythForgeVo {
    roleId: number;
    slotData: MythSlotVo[];
    init(datas: any[]): void;
    getSlotData(slot: number): MythSlotVo;
    updateSlotData(slot: number, level: number): void;
}
declare class MythSlotVo {
    slot: number;
    level: number;
    constructor(slot: any, level: any);
}
declare class MythEquipPanel extends BasePanel {
    private powerPanel;
    sword: MythEquipSlotItemRenderer;
    amor: MythEquipSlotItemRenderer;
    taozhuangImg: eui.Image;
    executeBtn: eui.Button;
    turnBeforeBtn: eui.Button;
    turnNextBtn: eui.Button;
    swordEquipImg: eui.Image;
    amorEquipImg: eui.Image;
    curState: eui.Label;
    curAttr: eui.Label;
    nextState: eui.Label;
    nextAttr: eui.Label;
    arrow: eui.Image;
    costGroup: eui.Group;
    maxDesc: eui.Label;
    icon: eui.Image;
    countLabel: eui.Label;
    curState0: eui.Label;
    curAttr0: eui.Label;
    skillSelMc: GameMovieClip;
    skillSelectEff: eui.Group;
    btnMc: GameMovieClip;
    require1: eui.Label;
    require2: eui.Label;
    require3: eui.Label;
    require4: eui.Label;
    private _roleId;
    private _curIndex;
    curSkillLv: number;
    curSelectedLv: number;
    states: string[];
    needCount: number;
    needItem: number;
    open(...param: any[]): void;
    updateView(param?: any[]): void;
    setRoleId(roleId: number): void;
    setSelectedIndex(slot: number): void;
    updateNextNeed(): void;
    setSelectedSkill(): void;
    setSkillLv(lv: number): void;
    getLabel(index: any): any;
    setSelectSkillEff(val: any): void;
    setBtnEff(val: any): void;
    onTap(e: any): void;
    getItem(pos: number): MythEquipSlotItemRenderer;
    updatePower(): void;
    close(): void;
}
declare class MythEquipView extends BaseEuiView {
    roleSelect: RoleSelectPanel;
    tab: eui.TabBar;
    viewStack: eui.ViewStack;
    closeBtn: eui.Button;
    help: eui.Button;
    redPoint0: eui.Image;
    redPoint1: eui.Image;
    selectIndex: number;
    constructor();
    open(...param: any[]): void;
    onTap(e: any): void;
    onTabTouch(e: any): void;
    onTabTouching(e: any): void;
    switchRole(): void;
    setSelected(param: any): void;
    setSelectedIndex(selectIndex: number, param?: any): void;
    updateRed(): void;
    close(...param: any[]): void;
}
declare class MythEquipSlotItemRenderer extends eui.Component {
    swordLevel: eui.Label;
    mc: GameMovieClip;
    weaponEff: eui.Group;
    redPoint: eui.Image;
    Select: eui.Image;
    level: eui.Group;
    effs: any[];
    _isSelected: boolean;
    protected childrenCreated(): void;
    setData(roleId: any, slotData: MythSlotVo): void;
    setSelected(value: any): void;
    showBall(value: any): void;
    readonly isSelected: boolean;
    getPoint(index: any): any;
    setPointOpen(index: any, open: any, level: any): void;
}
declare class OfficeControl extends BaseSystem {
    officeDatas: any[];
    private titles;
    static ins(): OfficeControl;
    /**
     * 官职数据
     * 31-1
     */
    downInfo(job: number, idx: number, dailyAward: number): void;
    /**
     * 官职升级
     * 31-2
     */
    upUpgrade(job: any): any[];
    /**
     * 领取官职奖励
     * 31-3
     */
    upGetDaiylyAward(job: any): any[];
    open(): boolean;
    getAttrStr(job: any, idx: any, sign?: string): {
        str: string;
        exStr: string;
    };
    getPower(role: any): number;
    checkItemIdCanDestroy(id: any): boolean;
    getTitle(role: any): TitleConfig;
    getRoleTitles(job: any): number[];
    getTitleIdx(role: any, isNext?: number): number;
}
declare class OfficeRedPoint extends BaseSystem {
    isOpen: boolean;
    isRed: {};
    upgradeRed: {};
    awardRed: {};
    constructor();
    static ins(): OfficeRedPoint;
    update(job: any): void;
    readonly redPoint: boolean;
    getRed(key: any): boolean;
    getAwardRP(key: any): boolean;
    getUpgradeRP(key: any): boolean;
    dispatchOpen(): void;
    dispatchRedPoint(): void;
    dispatchDailyAwardRed(job: any): boolean;
    getDailyAwardRed(job: any): boolean;
    dispatchUpgradeRed(job: any): boolean;
    getUpgradeRed(job: any): boolean;
}
declare class OfficeDailyAwardView extends BaseEuiView {
    private bgClose;
    private getBtn;
    private displayList;
    curJob: number;
    constructor();
    open(job: any): void;
    onTap(e: any): void;
}
declare class OfficePositionView extends BaseEuiView {
    private roleSelect;
    private powerPanel;
    private getLabel;
    private closeBtn;
    private practiseBtn2;
    private upGradeBtn0;
    private titleName;
    private icon0;
    private countLabel0;
    private lvlNow;
    private nextGroup;
    private nowGroup;
    private arrow;
    private attrNow;
    private upInfo;
    private lvlNext;
    private nextTitleGroup;
    private attrNext;
    private lbOver;
    private tpisLevel;
    private title;
    private titleEff;
    private dailyRedPoint;
    private btnRedPoint;
    private titleMc;
    curRole: number;
    curJob: number;
    isEnought: boolean;
    lastObj: {
        job: number;
        stage: number;
    };
    nextTitleIdx: number;
    constructor();
    open(roleId?: number): void;
    updateView(): void;
    setSelected(e: any): void;
    onTap(e: any): void;
    onUpgrade(): void;
    updateRed(): void;
}
declare class OfficeDailyAwardItemRenderer extends BaseItemRender {
    private levelName;
    private rewardList;
    private currentGroup;
    dataChanged(): void;
}
declare class OfflineRewardView extends BaseEuiView {
    private okBtn;
    private time;
    private exp;
    private money;
    private equipNum;
    private bagFull;
    label0: eui.Label;
    label2: eui.Label;
    image1: eui.Image;
    image: eui.Image;
    label6: eui.Label;
    label3: eui.Label;
    label5: eui.Label;
    label4: eui.Label;
    label1: eui.Label;
    jinglianshiNum: eui.Label;
    ybTextGroup: eui.Group;
    coin: {
        id: number;
        count: number;
    }[];
    private arr;
    constructor();
    open(...param: any[]): void;
    updateYBText(): void;
    private update();
    private onClick();
}
declare class RambleBlackControl extends BaseSystem {
    private _blackList;
    static ins(): RambleBlackControl;
    checkIsBlack(roleId: any): boolean;
    getBlackList(): RambleKfBlackVo[];
    /**
     * 30-10
     */
    downBlackList(datas: any[]): void;
    /**
     * 30-10
     */
    upAddBlackRole(data: any): any[];
    /**
     * 30-11
     */
    upDelBlackRole(index: any): any[];
}
declare class RambleControl extends BaseSystem {
    /** 聊天tip显示状态 */
    isShowTip: boolean;
    /**聊天数据 */
    chatInterval: number;
    charMax: number;
    canSpeak: boolean;
    UpSpeak: string;
    private _chatListData;
    private _systemListData;
    private _chatListData2;
    private _kfListData;
    private curListData;
    canSpeakTime: number;
    kfNoReadMsgList: any[];
    allChatOpen: boolean;
    chatPoolDic: {};
    protected initLogin(): void;
    static ins(): RambleControl;
    upChatInfo(type: number, str: string, pointId?: number): void;
    /**
     * 30-0
     */
    private upGm(str);
    /**
     * 30-1
     */
    private upChat(type, str, pointId);
    /**
     * 收到新的新的聊天消息
     * 30-1
     */
    downNewChatMsg(...param: any[]): void;
    insertChatMsg(message: any): void;
    insertMsg(list: ArrayCollection, message: any, maxNum?: number): void;
    sortAllChatMsg(): void;
    removeAllChatMsg(message: any): void;
    /**移除某id的聊天 */
    removeChatWithId(userId: number): void;
    removeChatById(listData: any, userId: any): void;
    /**
     * 一条聊天消息
     */
    dispatchNewChatMsg(message: RambleInfoVo | UnionMessageInfoVo | RambleSystemVo | RambleCampVo): void;
    /**
     * 30-2
     */
    private downSystemInfo();
    /**
     * 30-3
     */
    private downIsSendSuccess(result);
    /**
     * 新发送消息成功
     */
    dispatchSendInfoSuccess(): void;
    /**
     * 30-4
     */
    private downSystemMessage(level, type, str);
    /**
     * 禁言
     * 30-5
     */
    private downCannotSpeak(canSpeakTime);
    /**
     * 30-6
     */
    private downRemoveRoleChat(userId);
    private removeRoleChat(userId);
    /**
     * 30-8
     */
    private downAllChatMsg(datas);
    /**
     * 是否禁言中
     */
    isCanSpeak(): boolean;
    readonly chatListData: eui.ArrayCollection;
    readonly chatListData2: eui.ArrayCollection;
    readonly kfListData: eui.ArrayCollection;
    setCurListData(data: any): void;
    readonly chatListTip: RambleInfoVo[];
    /**用于主界面聊天频道 */
    readonly chatListTip2: RambleInfoVo[];
    startInterval(): void;
    private timeDo();
    dispatchSysChatMsg(message: RambleSystemVo): void;
    readonly systemListData: eui.ArrayCollection;
    checkRepeatString(str: string): boolean;
    /**
     * 获取世界字
     */
    getWorldStr(): string;
    checkChatSend(content: string, type: number, up?: boolean): void;
    checkChatIsOpen(showMsg?: boolean): boolean;
    /**
     * 30-7
     */
    upFace(type: any, emojis: number[]): false | any[];
    checkFaces(type: any, msg: any): boolean;
    checkSendMsg(value: any): boolean;
    canKfNoReadTip(): boolean;
    checkAllChatOpen(showMsg?: boolean): boolean;
    checkCanSpeak(): any;
    chatLimit(type: any, msg: any, userId?: any): void;
    insertWorldChat(type: any, msg: any): void;
    insertGuildChat(msg: any): void;
    insertCampChat(userId: any, msg: any): void;
    readonly guildChatList: ArrayCollection;
    readonly campChatList: ArrayCollection;
    initWorldChat(messages: any): void;
    initGuildChat(messages: any): void;
    initSystemNotice(messages: any): void;
    addWorldChat(message: any): void;
    addGuildChat(message: any): void;
    addCampChat(message: any): void;
    addSystemNotice(message: any): void;
    removeAllChatByType(type: any): void;
    insertWorldChatMessage(message: any): any;
    insertGuildChatMessage(message: any): any;
    insertSystemNoticeMessage(message: any): any;
    binFunc(a: any, b: any): 1 | 0 | -1;
    insertItemToList(list: any, message: any, state?: boolean): any;
}
declare const enum ChatTabType {
    all = 0,
    world = 1,
    kuafu = 2,
    team = 3,
    guild = 4,
    system = 5,
    kefu = 6,
    mail = 7,
}
declare const enum EmojiAlign {
    TOP = 1,
    MIDDLE = 2,
    BOTTOM = 3,
}
declare const enum TagChanneID {
    ciChannelSecret = 0,
    ciChannelNear = 1,
    ciChannelWorld = 2,
    ciChannelGuild = 3,
    ciChannelTeam = 4,
    ciChannelBigTeam = 5,
    ciChannelMap = 6,
    ciChannelAll = 7,
    ciChannelCamp = 8,
    ciChannelSystem = 9,
    ciChannelKuafu = 10,
    ciChannelSos = 11,
    ciChannelCosign = 12,
    ciChannelLianfu = 13,
    ciChannelMax = 14,
}
/**
 * 类型12活动
 */
interface Amusement12Config {
    id: number;
    index: number;
    score: number;
    isCross: number;
    exitTime: number;
    info: {
        multiple: number;
        value: number;
    }[];
    showType: number;
    skinType: string;
    record: string;
    blessWord: string;
    wordCount: number;
    desc: string;
}
declare class RambleCampVo extends RambleBaseVo {
    campType: number;
    servId: number;
    name: string;
    str: string;
    constructor();
    initData(campType: number, servId: number, name: string, str: string, time: number): void;
}
declare class RambleEmojiRiceTextVo extends egret.Sprite {
    touchBg: eui.Rect;
    static CHAT_EMOJI: RegExp;
    static CHAT_EMOJI_ID: RegExp;
    static isLinkRich: boolean;
    static EMOJI_MAX_ID: number;
    static MAX_ID: number;
    static VIP_IMG: string;
    static SVIP_IMG: string;
    emojiMaxH: number;
    emojiSize: number;
    curHight: number;
    curForceY: number;
    curForceX: number;
    curLine: number;
    _autoWrapLine: boolean;
    _fontSize: number;
    _lineSpacing: number;
    _textColor: number;
    _emojiAlignment: EmojiAlign;
    useDpEmojiSize: boolean;
    canLink: boolean;
    outLineSpacing: number;
    EMOJI_INTERVAL: number;
    EMOJI_DATA: {
        "80": {
            width: number;
            height: number;
            soure: string;
            scale: number;
        };
        "81": {
            width: number;
            height: number;
            soure: string;
            scale: number;
        };
    };
    txtPool: any[];
    lineEmojiArr: any[];
    lineTextArr: any[];
    constructor(e?: any);
    static filterSpecEmojiStr(content: string): string;
    startTouchBg(): void;
    onAddToStage(t: any): void;
    onRemoveFromStage(): void;
    richText: string;
    insertTxt(str: string): void;
    addText(str: string): egret.TextField;
    insertEmoji(str: string): void;
    addEmoji(resName: string): RambleEmojiVo;
    autoWrapLine: boolean;
    emojiAlignment: number;
    textColor: number;
    size: number;
    lineSpacing: number;
    readonly uHeight: number;
    setEmojiSize(value: number): void;
    reset(): void;
    removeText(): void;
    removeEmoji(): void;
    getEmojiInfo(id: number): any;
    getEmojiY(value: number): number;
    splitFace(str: string): any;
    invalidateLayoutY(): void;
    onLink(e: any): void;
    getTxt(): egret.TextField;
    addPool(target: any): void;
}
declare class RambleEmojiVo extends egret.Sprite {
    emojiMc: GameMovieClip;
    emojiImg: eui.Image;
    setData(resName: string, isMc?: boolean): void;
    reset(): void;
    dispose(): void;
}
declare class RambleHlpVo {
    static sourceObj: {};
    static checkVMsg(target: any, e?: any): any;
    static regInputEvt(target: any, btn?: any, hasFace?: any): void;
    static inputIn(e: any): void;
    static onRemovedFromStage(e: any): void;
}
declare class RambleInfoVo extends RambleBaseVo {
    type: number;
    id: number;
    servId: number;
    name: string;
    job: number;
    sex: number;
    vip: number;
    monthCard: number;
    ladderLevel: number;
    pointId: number;
    str: string;
    isFirst: number;
    zsLevel: number;
    lv: number;
    guild: string;
    titleId: number;
    init(datas: any[]): void;
}
declare class RambleKfBlackVo {
    index: number;
    roleId: number;
    serId: number;
    roleName: string;
    job: number;
    sex: number;
    zsLevel: number;
    level: number;
    time: number;
    constructor();
    init(datas: any[]): void;
}
declare class RambleSystemVo extends RambleBaseVo {
    type: number;
    str: string;
    lv: number;
    constructor(type: number, str: string);
}
declare class RambleEmojiView extends BaseEuiView {
    private closeBg;
    private emoji;
    private chatInput;
    constructor();
    initUI(): void;
    open(...param: any[]): void;
    close(): void;
    onChooseEmoji(e: any): void;
    onTouch(e: any): void;
}
declare class RambleInputView extends BaseEuiView {
    faceBtn: eui.Image;
    chatInput: eui.EditableText;
    sendBtn: eui.Button;
    lineImg: eui.Image;
    sourceInput: eui.EditableText | eui.TextInput;
    sourceSendBtn: eui.Button;
    historyMsg: string;
    isSourceFocus: boolean;
    constructor();
    open(input: any, btn: any, hashCode: any): void;
    close(): void;
    onFocusOut(): void;
    onSFocusOut(): void;
    onFocusIn(): void;
    onChange(): void;
    showFocus(): void;
    onTouch(t: any): void;
    static openCheck(): boolean;
}
interface Amusement13Config {
    Id: number;
    index: number;
    award: RewardVo[];
    count: number;
    showReward: RewardVo[];
    nextProgress: number;
}
declare class RamblePlayerTipsView extends BaseEuiView {
    private labelName;
    private labelLv;
    private labelGuild;
    private imgBg;
    private imgHead;
    private btnInfo;
    private btnIgnore;
    private btnChat;
    private btnFriend;
    private rect;
    private currId;
    private serverId;
    private data;
    constructor();
    open(...param: any[]): void;
    private onTap(e);
    private initView();
    /**
     * 查看角色界面
     */
    private openOtherPlayerView(otherPlayerData);
}
declare class RambleTipsView extends eui.Component {
    bg: eui.Image;
    lab: eui.Label;
    private showOver;
    constructor();
    setData(msg: RambleSystemVo): void;
    private setshowTime();
    private showOverInfo();
}
declare class RambleUIView extends RambleMainView {
    constructor();
}
declare class RambleView extends BaseEuiView {
    winGroup: eui.Group;
    upBtn: eui.Button;
    closeBtn0: eui.Button;
    chatList: eui.List;
    chatInput: eui.EditableText;
    sendBtn: eui.Button;
    tab: eui.TabBar;
    barList: eui.Scroller;
    input: eui.TextInput;
    sendBtn0: eui.Button;
    allReceiveBtn: eui.Button;
    private redPoint2;
    private faceBtn;
    unReadGroup: eui.Group;
    unReadLabel: eui.Label;
    private cruIndex;
    private defaultText;
    private fistOpenGuild;
    private oldChangle;
    /** 界面是否展开 */
    private isStretch;
    private tabData;
    private curTabType;
    private _curTabType;
    private curDataLen;
    private isStopRef;
    /** 窗口展开时高度 */
    static BIG_HEIGHT: number;
    /** 窗口收起时高度 */
    static LITTLE_HEIGHT: number;
    constructor();
    initUI(): void;
    isShowWorld(): boolean;
    private refTab();
    getChatType(index: any): number;
    readonly curType: any;
    open(...param: any[]): void;
    close(...param: any[]): void;
    private updateInput();
    private checkIsOpen(e);
    private selectIndexChange(e);
    private backSelect(id);
    /** 点击请求一个邮件详情 */
    private onSendMail(e);
    /** 更新邮件状态 */
    private setOpenMail(mailData);
    /** 更新list列表 */
    private updataList(barChange?);
    autoStopRefStatus(isStopRef: any): void;
    scrollChangeStart(): void;
    refListBottom(): void;
    scrollChangeEnd(): void;
    refNoMsgTip(): void;
    private updateMsgRedPoint();
    getRedPoint(tabType: number): any;
    updateTabTypeRed(tabType: number, isShow: boolean): void;
    private getNewOne(msg);
    private getNewOneGuild(msg);
    private listDataChange(isScroll);
    private refushBar(isScroll?);
    /** 设置滚动到列表定部 */
    private refushBarListTop();
    private textInOn();
    /** 设置界面展开/收起 */
    private setStretchWin();
    /** 邮件一键领取 */
    private allReceiveMail();
    private onListTap();
    private onLink(str, selectedItem);
    private onTap(e);
}
declare class RambleGuildItemRenderer extends BaseItemRender {
    private showText;
    chatVip: eui.Image;
    showHead: eui.Label;
    textGroup: eui.Group;
    emojiTxt: RambleEmojiRiceTextVo;
    constructor();
    dataChanged(): void;
}
declare class RambleKfBlackItemRenderer extends BaseItemRender {
    private btn_delete;
    private label_name;
    private img_userIcon;
    private labelGuild;
    private headBg;
    private severId;
    protected childrenCreated(): void;
    protected dataChanged(): void;
}
declare class RambleListItem2Renderer extends BaseItemRender {
    textGroup: eui.Group;
    showChannel: eui.Label;
    emojiTxt: RambleEmojiRiceTextVo;
    constructor();
    dataChanged(): void;
}
declare class RambleListItem3Renderer extends BaseItemRender {
    showText: eui.Label;
    textGroup: eui.Group;
    showHead: eui.Label;
    chatVip: eui.Image;
    emojiTxt: RambleEmojiRiceTextVo;
    constructor();
    dataChanged(): void;
}
declare class RambleListItemRenderer extends BaseItemRender {
    showText: eui.Label;
    static HEAD_BG: string[];
    chatVip: eui.Image;
    showHead: eui.Label;
    textGroup: eui.Group;
    emojiTxt: RambleEmojiRiceTextVo;
    constructor();
    dataChanged(): void;
}
declare class RambleSystemItemRenderer extends BaseItemRender {
    str: eui.Label;
    type: eui.Image;
    constructor();
    dataChanged(): void;
    onLink(e: any): void;
}
/**
 * 回归面板
 */
declare class RegressionView extends BaseEuiView {
    list: eui.List;
    sure: eui.Button;
    bgClose: eui.Rect;
    constructor();
    initUI(): void;
    open(...param: any[]): void;
    oncloseEff(): void;
    private onClick(e);
}
/**
 * 改名
 */
declare class RenameView extends BaseEuiView {
    bgClose: eui.Rect;
    sureBtn: eui.Button;
    input: eui.EditableText;
    constructor();
    open(...param: any[]): void;
    private onTap(e);
    close(...param: any[]): void;
}
/**
 * 前端存储
 */
declare class ClientStorage extends SingleClass {
    private _storage;
    private _tempStorage;
    constructor();
    static ins(): ClientStorage;
    setItem(key: string, value: any, type?: string): void;
    getItem(key: string, type?: string): any;
    delItem(key: string, type?: string): void;
    setBool(key: string, value: any, type?: string): void;
    getBool(key: any, type?: string): boolean;
    setValue(key: any, value: any): void;
    getValue(key: any): any;
    init(): void;
    private initValue();
    private storage();
    private getStorageKey();
}
declare class SetValueType {
    static default: string;
    static special: string;
}
/**
 * 后端存储
 */
declare class ServerStorage extends BaseSystem {
    map: Map<number>;
    isInit: boolean;
    static ins(): ServerStorage;
    static readonly currPart: number;
    static readonly currStep: number;
    static setSpecialGuild(index: any): void;
    static getSpecialGuild(index: any): boolean;
    downParser(datas: [number, number][]): void;
    dispatchInitSetting(): void;
    initSetting(): void;
    updateSetting(): void;
    dispatchUpdate(key: any): any;
    /**
     * 保存数据
     * 255-19
     */
    private upSave(key, value);
    setValue(key: ClientSet, value: number): void;
    getValue(key: ClientSet, def?: number): number;
    setBitValue(bit: any, value: any): void;
    getBitValue(bit: any): number;
    setBitBool(key: any, value: any): void;
    getBitBool(key: any): boolean;
}
declare const enum ClientSet {
    guidePart = 0,
    guideStep = 1,
    expFirst = 2,
    headRed = 3,
    diedFirstTime = 4,
    recharge1 = 5,
    vip = 6,
    role = 7,
    FB = 8,
    recharge2 = 9,
    diedFirstTime2 = 10,
    mijiRedPoint = 11,
    firstMonthCard = 12,
    firstrecharge1 = 13,
    firstClickTreasure = 14,
    autoHeji = 15,
    saveDesktop = 16,
    doubleEncouter = 17,
    kfBossRemind = 18,
    loginTime = 19,
    peakedMallTip = 20,
    devildomFinal = 21,
    guideSpecialPart = 22,
    monthTips = 23,
    directShopClose = 24,
    threeRoleTips = 25,
    firstRechargeTimer = 26,
    guildActTip = 27,
    vipbossTip = 28,
    tutenBossRemind = 29,
    kfChatTip = 30,
    zhBossRemind = 31,
    firstClickDemonBoss = 32,
    bossInvestShowEffect = 33,
    multBossRemind = 35,
    fcm = 40,
    dailyloginTime = 41,
    serverBattleBoss = 42,
    team_fb_login_red = 43,
    pve10Timestamp = 51,
    dan_zhuzao_use = 52,
    dan_longhun_use = 53,
    dan_wing_use = 54,
    dan_book_use = 55,
    dan_ring_use = 56,
    dan_equip_use = 57,
    Bit = 100,
}
declare class ClientSetBit {
    static guildFirstRed: number;
    static firstRecharge: number;
    static firstRechargeAni: number;
    static isDailyDieFirstRecharge: number;
    static isDailyDieMaBi: number;
    static isDailyDieThreeRoles: number;
    static activity5029: number;
    static playWarn: number;
    static legendtempleRedPoint: number;
    static ladderMore: number;
    static ladderMoreEff: number;
    static kfzhbossRed: number;
    static superVipEff: number;
    static worldBossMult1: number;
    static worldBossMultEff1: number;
    static worldBossMult5: number;
    static worldBossMultEff5: number;
    static worldBossMult7: number;
    static worldBossMultEff7: number;
    static worldBossMult10: number;
    static worldBossMultEff10: number;
    static worldBossMult12: number;
    static worldBossMultEff12: number;
    static newFunNotice: number;
    static godweaponrent: number;
    static pubBossNoTipYb: number;
    static pubBossNoTipItem: number;
    static syBossNoTipItem: number;
    static matchKOTips: number;
    static matchGPTips: number;
    static serverBattleShop: number;
    static sound_effect: number;
    static shake_win: number;
    static auto_heji: number;
    static dice: number;
    static dice2: number;
    static hide_mine_wing: number;
    static hide_other_wing: number;
    static hide_friend_req: number;
    static level_up_item_red: number;
    static kf_chat_tips: number;
    static hide_mine_zhanling: number;
    static hide_other_zhanling: number;
    static hide_mine_title: number;
    static hide_other_title: number;
    static setting_view_init: number;
    static renameCard: number;
    static funcopen: number;
    static bluntBangs: number;
}
declare class SettingView extends BaseEuiView {
    private bgClose;
    private maskSound;
    private maskShake;
    private maskPunch;
    private maskFriend;
    private maskSelf;
    private maskOther;
    private bluntBangs;
    private effGroup;
    private openIdTxt;
    private switchUser;
    private titleTxt;
    private headRedLv;
    constructor();
    open(): void;
    onLongTap(): void;
    close(): void;
    private onTouch(e);
    reqFriendAppList(): void;
}
/**
 * 签到
 */
declare class SignInControl extends BaseSystem {
    /**签到天数 */
    loginTimes: number;
    /**连续签到天数 */
    conLoginTimes: number;
    /**奖励状态 */
    todayReward: boolean;
    /**奖励索引 */
    rewardIndex: number;
    /**可补签的index列表 */
    comTimesIndexList: number[];
    static ins(): SignInControl;
    /**
     * 签到
     * 54-1
     */
    upSignIn(index: number): number[];
    /**
     * 签到数据
     * 54-1
     */
    downSignInData(loginTimes: number, todayReward: boolean, conLoginTimes: number, rewardIndex: number): void;
    /**
     * 领取奖励
     * 54-3
     */
    upGetReward(index: number): number[];
    /**
     * 显示红点
     */
    showRedPoint(): boolean;
    /**
     * 可以签到
     */
    canNormalCheckIn(): boolean;
    /**
     * 可以领奖
     */
    checkCanReward(): boolean;
    getCheckInState(day: number): number;
    getRewardList(index: number): SignInDaysConfig;
}
declare const enum SignInState {
    /**
     * 还未领取
     */
    notYet = 0,
    /**
     * 准备领取
     */
    canCheck = 1,
    /**
     * 领取过了
     */
    hasChecked = 2,
}
/**
 * 签到
 */
declare class SignInPanel extends BaseEuiView {
    checkInLab: eui.Label;
    remainComplementLab: eui.Label;
    cardScroller: eui.Scroller;
    cardList: eui.List;
    listData: eui.ArrayCollection;
    dayReardText: eui.Label;
    rewardItem: ItemBase;
    rewardBtn: eui.Button;
    rewardGroup: eui.Group;
    effGroup: eui.Group;
    eff: GameMovieClip;
    private monthList;
    private currentDay;
    private panelwidth;
    private curRewardData;
    constructor();
    childrenCreated(): void;
    open(...param: any[]): void;
    updateCheckInTimes(): void;
    private updateList();
    /**
     * 数据变更
     */
    private updateSignInData(param);
    private onListTap(e);
    private onClick(e);
    /**
     * 清理列表
     */
    private cleanList();
    close(...param: any[]): void;
}
declare class SignInItemRenderer extends BaseItemRender {
    item: ItemBase;
    complement: eui.Image;
    vipFlagGroup: eui.Group;
    vipLab: eui.Label;
    dayFlagGroup: eui.Group;
    dayLab: eui.Label;
    checkedMask: eui.Image;
    checked: eui.Image;
    effGrp: eui.Group;
    id: number;
    checkInState: number;
    private equipEffect;
    constructor();
    dataChanged(): void;
    private showEquipEffect();
    /**
     * 显示已签到
     */
    private showChecked();
    /**
     * 显示标识
     */
    private showFlag();
    private resetView();
}
declare class StarSunControl extends BaseSystem {
    static ins(): StarSunControl;
    checkUpRedPoint(role: any, slot: any): boolean;
    redPoint(role: any, slot: any): boolean;
    open(): boolean;
    /**
     * 星辰数据
     */
    init(role: RoleModel, datas: any[]): void;
    isMaterialUpLevel(slot: any, level: any): boolean;
    isMaxLevel(slot: any, level: any): boolean;
    getAttrs(role: any, slot: any, isNext?: boolean): any[];
    getPercentAttrs(role: any, slot: any, isNext?: boolean): any[];
    getSlotsByPos(role: any, slot: any): any[];
    /**
     * 升级星辰
     * 7-10
     */
    downStarSunInfo(roleId: number, pos: number, level: number): void;
    /**
     * 升级星辰
     * 7-10
     */
    upUpgrade(roleId: any, pos: any): any[];
}
declare class StarSunRedPoint extends BaseSystem {
    roleTabs: boolean[];
    private redPoint;
    private redPoint0;
    constructor();
    static ins(): StarSunRedPoint;
    dispatchStarSunRedPoint(): void;
    dispatchStarSunUpRedPoint(): void;
}
declare class StarSunVo {
    id: number;
    level: number;
    constructor(id: number, level?: number);
}
declare class StarSunView extends BaseEuiView {
    private roleSelect;
    private getItemTxt0;
    private upGradeBtn0;
    private closeBtn;
    private starEff;
    private sp;
    private upInfo;
    private icon0;
    private countLabel0;
    private maxlv;
    private powerPanel;
    private attr0;
    private arrow0;
    private addAttr0;
    private redPoint2;
    private starPos;
    private aniPlaying;
    private oldRes;
    private roleId;
    private slot;
    private costId;
    constructor();
    close(...param: any[]): void;
    open(...param: any[]): void;
    switchRole(): void;
    EnhanceInfoCallBack(): void;
    onTap(e: any): void;
    updateView(): void;
    updateCost(): void;
    updateAttr(): void;
    updateRedPoint(): void;
    updateStarEffX(): void;
    getNewEffPos(oldStar: any, newStar: any): EquipPosAniVo[];
    getStarEffRes(): number[];
    swapItemPosAni(oldStar: any, newStar: any): void;
    action(star: any, vo: any): void;
    aniTime(): void;
    isPlaySuccess(): boolean;
    playEffTween(): void;
    stopEffTween(): void;
    addSp(): void;
    cleanSp(): void;
    updateEffColor(): void;
    setGray(target: any): void;
    setLight(target: any): void;
}
declare class StarSunAttrsItemRenderer extends BaseItemRender {
    private attr;
    constructor();
    dataChanged(): void;
}
declare class StarSunEnhanceTipsItemRenderer extends BaseItemRender {
    constructor();
    dataChanged(): void;
    setGray(target: any): void;
}
declare class CreateRoleScene extends BaseScene {
    /**
     * 进入Scene调用
     */
    onEnter(): void;
    /**
     * 退出Scene调用
     */
    onExit(): void;
}
declare class LoginScene extends BaseScene {
    /**
    * 进入Scene调用
    */
    onEnter(): void;
    /**
     * 退出Scene调用
     */
    onExit(): void;
}
declare class RegisterLoginScene extends BaseScene {
    /**
    * 进入Scene调用
    */
    onEnter(): void;
    /**
     * 退出Scene调用
     */
    onExit(): void;
}
declare class StartGameScene extends BaseScene {
    /**
     * 进入Scene调用
     */
    onEnter(): void;
    /**
     * 退出Scene调用
     */
    onExit(): void;
}
declare class WXGameScene extends BaseScene {
    /**
    * 进入Scene调用
    */
    onEnter(): void;
    /**
     * 退出Scene调用
     */
    onExit(): void;
}
declare class YYBGameScene extends BaseScene {
    /**
    * 进入Scene调用
    */
    onEnter(): void;
    /**
     * 退出Scene调用
     */
    onExit(): void;
}
declare class ThunderControl extends BaseSystem {
    static suitMaxCount: number;
    static ins(): ThunderControl;
    initLogin(): void;
    /**
     * 雷霆淬炼数据
     */
    init(role: RoleModel, datas: any[]): void;
    /**
     * 雷霆套装数据
     */
    initThunder(role: RoleModel, datas: any[]): void;
    checkSysOpen(): boolean;
    checkSysShow(): boolean;
    getRedPoint(): boolean;
    getRedPoint0(index?: number): boolean;
    getRedPoint1(index?: number): boolean;
    /**
     * 雷霆淬炼
     * 7-6
     */
    upNewStrengthenInfoUp(roleId: number, slot: number, kong: number): number[];
    /**
     * 雷霆淬炼
     * 7-6
     */
    downNewStrengthenInfo(roleId: number, slot: number, kong: number, level: number): void;
    /**
     * 基础属性
     */
    getBaseAttrs(role: RoleModel, equipIndex: number): AttributeData[];
    getEquipSlotTotalLv(role: RoleModel, slot: number): number;
    getRelatePower(role: RoleModel, slot: number): number;
    getBasePower(role: RoleModel, slot: number): number;
    getAttrs(role: RoleModel, attrs?: AttributeData[], slot?: number): AttributeData[];
    getDifAttrs(roleId: number, slot: number, kong: number): AttributeData[];
    getConditionByKong(roleId: number, slot: number, kong: number): boolean;
    getCostByKong(strengthenEquipLevel: ThunderQuenLvConfig): boolean;
    getStrengthenEquipLevelConfig(roleId: number, slot: number, kong: number): ThunderQuenLvConfig;
    /**
     * 雷霆套装
     * 7-7
     */
    upThunderEquipUp(roleId: number, slot: number): number[];
    /**
     * 雷霆套装
     * 7-7
     */
    downThunderEquipUp(roleId: number, slot: number, level: number): void;
    getThunderRedPoint(roleId: number, slot: number): boolean;
    getCostByThunder(thunderEquipLevel: ThunderEquipLvConfig): boolean;
    getThunderEquipLevelConfig(roleId: number, slot: number): ThunderEquipLvConfig;
    getThunderItemAttrs(role: RoleModel, attrs?: AttributeData[], slot?: number, ignoreSlots?: number[]): AttributeData[];
    getThunderItemNextAttrs(roleId: number, slot: number): AttributeData[];
    getAttrValueDesc(type: number, value: number): string;
    /**
     * 雷霆套装数据
     */
    getSuitData(type: number, role: RoleModel): ThunderSuitCalcVo[];
    /**
     * 雷霆套装战力
     */
    getSuitRelatePower(role: RoleModel): number;
    /**
     * 雷霆套装属性
     */
    getThunderSuitAttrs(role: RoleModel, type?: number, num?: number): any[];
    /**
     * 雷霆属性
     */
    getThunderAttrs(role: RoleModel, slot: number): AttributeData[];
    AddThunderPercent(attrs: AttributeData[], value: number, boo?: boolean): void;
    /**
     * 是否雷霆技能
     */
    isThunderSkill(id: number): boolean;
    /**
     * 当前雷霆技能等级
     */
    getCurThunderSkillLv(role: RoleModel): number;
    getThunderSuitLevelConfig(type: number, num: number, level: number): ThunderSuitLvConfig;
}
declare class ThunderForgeVo {
    slot: number;
    level: number[];
    constructor(slot: number);
}
declare const enum ThunderPanelEnum {
    THUNDERFORGE = 0,
    THUNDERSUIT = 1,
}
declare class ThunderSuitCalcVo {
    type: number;
    level: number;
    num: number;
    constructor(type: number, level: number, num: number);
}
declare class ThunderSuitVo {
    slot: number;
    level: number;
    constructor(slot: any);
}
/**
 * 雷霆强化
 */
declare class ThunderForgePanel extends BasePanel {
    equipMc: GameMovieClip;
    getItemTxt: eui.Label;
    upGradeBtn: eui.Button;
    suitAttr: eui.Button;
    equips: eui.List;
    equipUps: eui.List;
    equipUpEff0: eui.Group;
    equipEff: eui.Group;
    equipBg: eui.Image;
    leftRed: eui.Image;
    rightRed: eui.Image;
    upInfo: eui.Group;
    icon: eui.Image;
    countLabel: eui.Label;
    maxlv: eui.Image;
    redPoint0: eui.Image;
    powerPanel: PowerPanel;
    roleId: number;
    slot: number;
    kong: number;
    costId: number;
    iconY: number;
    iconMoveY: number;
    close(...param: any[]): void;
    open(...param: any[]): void;
    NewStrengthenInfoCallBack(): void;
    playMc(): void;
    updateKongIndex(): void;
    onTap(e: any): void;
    onClick(e: any): void;
    setRoleId(index: any): void;
    updateView(): void;
    updateEquipMc(): void;
    updateEquips(): void;
    updateCost(): void;
    updateAttr(): void;
    updateEquipUps(): void;
    playIconTween(): void;
    stopIconTween(): void;
}
declare class ThunderItemTipsView extends BaseEuiView {
    bgClose: eui.Rect;
    powerPanel: PowerPanel;
    itemname: eui.Label;
    lblTitle: eui.Label;
    mc: GameMovieClip;
    thunderEff: eui.Group;
    content: eui.Label;
    itemIcon: ItemIcon;
    itemId: number;
    constructor();
    open(...param: any[]): void;
    onTap(e: any): void;
    updateView(): void;
}
declare class ThunderSkillTipsView extends BaseEuiView {
    actor: eui.Group;
    target: eui.Group;
    show: eui.Group;
    nametxt0: eui.Label;
    lvtxt0: eui.Label;
    lvtxt1: eui.Label;
    activeDesc0: eui.Label;
    activeDesc1: eui.Label;
    skillDesc0: eui.Label;
    skillDesc1: eui.Label;
    selfChar: UnitMonster;
    targetChar: UnitMonster;
    maxLv: number;
    role: RoleModel;
    constructor();
    initUI(): void;
    isAct(): boolean;
    open(...param: any[]): void;
    playSkillEff(skillsDescConfig: SkillsDescConfig): void;
    onTouch(e: any): void;
}
/**
 * 雷霆之力
 */
declare class ThunderStrengthTipsView extends BaseEuiView {
    bgClose: eui.Rect;
    name0: eui.Label;
    content0: eui.Label;
    name1: eui.Label;
    content1: eui.Label;
    activeLbl: eui.Label;
    nextActiveLbl: eui.Label;
    roleId: number;
    slot: number;
    totalLevel: number;
    suitLv: number;
    suitConfig: any;
    nextsuitConfig: any;
    constructor();
    open(...param: any[]): void;
    onTap(e: any): void;
    updateActive(): void;
    updateView(): void;
    setCurDesc(): void;
    setNextDesc(): void;
}
declare class ThunderSuitPanel extends BasePanel {
    powerPanel: PowerPanel;
    equipEff: eui.Group;
    upGradeBtn: eui.Button;
    skillBtn: eui.Button;
    suitBtn: eui.Button;
    leftBtn: eui.Button;
    rightBtn: eui.Button;
    equipUps: eui.List;
    equipUpEff0: eui.Group;
    sp: eui.Group;
    equipEffMc: GameMovieClip;
    upInfo: eui.Group;
    icon: eui.Image;
    countLabel: eui.Label;
    maxlv: eui.Image;
    redPoint0: eui.Image;
    equipEffMcShadow: GameMovieClip;
    equipPos: any[];
    equipItems: any[];
    aniTags: any[];
    beginPoint: number;
    canDoList: any[];
    effY: number;
    effMoveY: number;
    roleId: number;
    slot: number;
    costId: number;
    childrenCreated(): void;
    close(...param: any[]): void;
    open(...param: any[]): void;
    ThunderEquipUpCallBack(): void;
    playMc(): void;
    addSp(): void;
    cleanSp(): void;
    onTap(e: any): void;
    onClick(e: any): void;
    setRoleId(index: any): void;
    updateView(): void;
    updateEffect(): void;
    updateEquips(): void;
    updateEquipItem(index: number): boolean;
    updateAttr(): void;
    updateCost(): void;
    calcEquipItemSortData(): number[];
    playEquipsAni(): void;
    getTags(): boolean;
    aniTime(): void;
    action(target: any, equipPoes: any, i: any): void;
    startBeatAnimat(): void;
    runTween(): void;
    stopBeatAnimat(): void;
    playUpTween(): void;
    stopTween(): void;
}
declare class ThunderSuitTipsView extends BaseEuiView {
    roleId: number;
    slot: number;
    suits: ThunderSuitCalcVo[];
    numLabel0: eui.Label;
    attrGroup: eui.Group;
    informationname0: eui.Label;
    constructor();
    open(...param: any[]): void;
    onTap(e: any): void;
    updateActive(): void;
    updateView(): void;
    setCurDesc(): void;
    setNextDesc(): void;
}
/**
 * 雷霆装备
 */
declare class ThunderView extends BaseEuiView {
    viewStack: eui.ViewStack;
    tab: eui.TabBar;
    closeBtn: eui.Button;
    roleSelect: RoleSelectPanel;
    thunderForgePanel: ThunderForgePanel;
    thunderSuitPanel: ThunderSuitPanel;
    curRole: number;
    curSelectIndex: number;
    panelArr: any[];
    isNotMove: boolean;
    constructor();
    initUI(): void;
    open(...param: any[]): void;
    onClick(e: any): void;
    onTabTouch(e: any): void;
    private onTabTouching(e);
    setSelectedIndex(selectedIndex: number): void;
    checkOpen(selectedIndex: number): boolean;
    switchRole(): void;
    updateView(): void;
    setRedPoint(): void;
    close(...param: any[]): void;
}
declare class UnionBossControl extends BaseSystem {
    leftTimes: number;
    passRecord: number[];
    canChallenge: number;
    isKilled: number;
    guildBossReward: RewardVo[];
    passId: number;
    challengeTime: number;
    bossHP: number;
    otherGuildId: number;
    otherGuildName: string;
    otherGuildBossHp: number;
    winnerId: number;
    guildRankDic: any;
    guildPersonRankDic: any;
    guildBossState: number;
    static ins(): UnionBossControl;
    /**
     * 玩家数据同步
     * 46-1
     */
    downInfoChange(leftTimes: number, datas: any[], canChallenge: number): void;
    /**
     * BOSS结果奖励
     * 46-2
     */
    downRewardRecord(isKilled: number, datas: any[]): void;
    /**
     * BOSS详细信息
     * 46-3
     */
    downDetailChange(passId: number, time: number, bossHP: number, otherGuildId: number, otherGuildName: string, otherGuildBossHp: number, winnerId: number): void;
    /**
     * BOSS挑战返回
     * 46-4
     */
    downChallengeBack(guildBossState: number): void;
    /**
     * 关卡排名
     * 46-5
     */
    downRankInfoChange(id: number, datas: any[], personDatas: any[]): void;
    /**
     * 挑战BOSS
     * 46-1
     */
    upChallengeBoss(type: number): number[];
    /**
     * 领取通关奖励
     * 46-2
     */
    upGetBossReward(id: number): number[];
    /**
     * 获取工会副本BOSS详细信息
     * 46-3
     */
    upGetBossInfo(): void;
    /**
     * 工会副本排行信息
     * 46-5
     */
    upGetBossRankInfo(id: number): number[];
    getBossRewardState(): boolean;
    getBossChallenge(): boolean;
    isOpen(): boolean;
    /**
     * boss挑战成功
     */
    dispatchChallengeSuccess(): any;
}
declare class guildBossRankData {
    name: string;
    damage: number;
    rank: number;
    devote: number;
}
/**
 * 公会数据
 */
declare class UnionControl extends BaseSystem {
    guildID: number;
    guildName: string;
    guildLv: number;
    /**第一个元素就是公会等级 */
    private _buildingLevels;
    /**资金 */
    money: number;
    /**公告 */
    notice: string;
    records: string[];
    guildListInfos: UnionListInfoVo[];
    private _guildMembers;
    applyGuilds: number[];
    private _guillRoleSkillInfo;
    guildTaskInfos: eui.ArrayCollection;
    guildMessageInfoData: eui.ArrayCollection;
    isFirstGetMessageInfo: boolean;
    /** 按历史贡献 排序，按当日贡献排序*/
    private _memberSortType;
    pageMax: number;
    /**我的当前贡献 */
    myCon: number;
    /**我的历史贡献 */
    myTotalCon: number;
    /**我的职位 */
    myOffice: number;
    private _conCount;
    /**是否有玩家申请 */
    private hasApply;
    /**篝火等级及数据*/
    fireDic: {
        fireLvl: number;
        fireVal: number;
    };
    /** 可改名次数 */
    changeNameNum: number;
    /** 未读信息 */
    noReadMsgList: UnionMessageInfoVo[];
    flagState: number;
    private sendToFireCount;
    /**是否自动加入帮派 */
    isAuto: number;
    /**自动加入的限制战力 */
    attrLimit: number;
    initLv: number;
    hMaxEmemberNum: number;
    /** 公告审核 */
    noticeAudit: number;
    constructor();
    static ins(): UnionControl;
    protected initLogin(): void;
    checkHFDp(): void;
    setGuild(arr: [number, string]): void;
    /**公会技能数据 */
    getSkllInfoByIndex(index: number): GuildRoleSkillInfo;
    /**公会成员列表 */
    getGuildMembersByIndex(index: number): UnionMemberInfoVo;
    /**公会任务列表 */
    getGuildTaskInfosByIndex(index: number): UnionTaskInfoVo;
    /**第一个元素就是公会等级 */
    getBuildingLevels(index?: number): any;
    getConCount(index?: number): any;
    /**
     * 请求帮派信息
     * 37-1
     */
    upGuildInfo(): void;
    /**
     * 37-1
     */
    downGuildInfo(result: number, guildId: number, guildName: string, levels: any[], money: number, notice: string, auto: number, attr: number, fireLvl: number, fireVal: number, changeNameNum: number, noticeAudit: number): void;
    /**
     * 获取公会成员列表
     * 37-2
     */
    upGuildMembers(): void;
    /**
     * 37-2
     */
    downGuildMembers(datas: any[]): void;
    /**
     * 获取公会列表
     * 37-3
     */
    upGuildList(page?: number, num?: number): void;
    /**
     * 37-3
     */
    downGuildList(datas: any[]): void;
    /**
     * 创建工会
     * 37-4
     */
    upGuildCreate(id: number, name: string): (string | number)[];
    /**
     * 创建工会结果
     * 37-4
     */
    downGuildCreate(result: number, guildId: number): void;
    /**
     * 退出工会
     * 37-5
     */
    upQuitGuild(): void;
    /**
     * 申请加入公会
     * 37-6
     */
    upJoinGuild(guildId: number): number[];
    /**
     * 通知有人申请加入公会
     * 37-6
     */
    downJoinGuild(): void;
    /**
     * 获取申请加入公会玩家信息
     * 37-7
     */
    upApplyInfos(): void;
    /**
     * 发送申请加入公会玩家信息
     * 37-7
     */
    downApplyInfos(datas: any[]): void;
    /**
     * 处理申请
     * 37-8
     */
    upProcessJoin(joinId: number, type: number): number[];
    /**
     * 通知申请的玩家申请结果
     * 37-8
     */
    downProcessJoin(guildId: number, result: number): void;
    /**
     * 升降职
     * 37-9
     */
    upChangeOffice(roleId: number, guildOffice: number): number[];
    /**
     * 通知玩家职位变化
     * 37-9
     */
    downChangeOffice(roleId: number, newOffice: number): void;
    /**
     * 弹劾
     * 37-10
     */
    upDemise(): void;
    /**
     * 踢出
     * 37-11
     */
    upKick(roleId: number): number[];
    /**
     * 退出公会
     * 37-11
     */
    downQuitGuild(roleId: number): void;
    /**
     * 帮派信息请求刷新
     * 37-12
     */
    downUpdateGuildInfo(result: number): void;
    /**
     * 捐献
     * 37-13
     */
    upCon(type: number): number[];
    /**
     * 公会资金
     * 37-13
     */
    downGuildMoney(money: number): void;
    /**
     * 修改公告
     * 37-14
     */
    upChangeNotice(text: string): string[];
    /**
     * 修改公告
     * 37-14
     */
    downChangeNotice(result: number, notice: string): void;
    /**
     * 获取公会技能信息
     * 37-15
     */
    upGuildSkillInfo(): void;
    /**
     * 获取公会技能信息
     * 37-15
     */
    downGuildSkillInfo(datas: any[]): void;
    /**
     * 学习公会技能
     * 37-16
     */
    upLearnGuildSkill(roleId: number, skillId: number): number[];
    /**
     * 学习公会技能
     * 37-16
     */
    downLearnGuildSkill(roleId: number, skillId: number, level: number): void;
    /**
     * 修炼公会技能
     * 37-18
     */
    upPracticeGuildSkill(roleId: number, skillId: number): number[];
    /**
     * 修炼公会技能
     * 37-18
     */
    downPracticeGuildSkill(roleId: number, skillId: number, level: number, exp: number, add: number): void;
    /**
     * 升级建筑
     * 37-17
     */
    upUpBuilding(buildType: number): number[];
    /**
     * 升级建筑
     * 37-17
     */
    downUpBuilding(type: number, val: number): void;
    /**
     * 任务信息列表
     * 37-19
     */
    private downGuildTaskInfos(datas);
    /**
     * 通知任务信息改变
     * 37-20
     */
    private downGuildTaskUpdate(id, param, state);
    private updateTaskList();
    /**
     * 升级建筑
     * 37-21
     */
    upGetTaskAward(taskId: number): number[];
    /**
     * 公会事件记录
     * 37-22
     */
    upManageList(): void;
    /**
     * 公会事件记录
     * 37-22
     */
    downManageList(datas: any[]): void;
    parserManage(datas: any[]): void;
    /**
     * 37-23
     */
    private downManage();
    /**
     * 捐献次数
     * 37-24
     */
    upConCount(): void;
    /**
     * 捐献次数
     * 37-24
     */
    downConCount(datas: any[]): void;
    /**
     * 玩家公会数据
     * 37-25
     */
    upMyGuildInfo(): void;
    /**
     * 玩家公会数据
     * 37-25
     */
    downMyGuildInfo(myCon: number, myTotalCon: number, myOffice: number): void;
    /**
     * 发送公会聊天消息
     * 37-26
     */
    upGuildMessage(str: string): false | string[];
    /**
     * 广播公会聊天消息
     * 37-26
     */
    private downGuildMessage(...param);
    addChatMsg(element: UnionMessageInfoVo): void;
    dispatchGetNewGuildMessage(guildInfo: UnionMessageInfoVo): void;
    dispatchGuildChatRed(): void;
    getAllGuildMessage(): void;
    /**
     * 玩家公会数据
     * 37-27
     */
    upAllGuildMessage(): void;
    /**
     * 玩家公会数据
     * 37-27
     */
    downAllGuildMessage(datas: any[]): void;
    /**
     * 玩家自动加入公会数据
     * 37-28
     */
    upAddGuildLimit(auto: number, attr: number): number[];
    /**
     * 加入帮派的变化
     * 37-28
     */
    private downAddGuildlimit(isAuto, attrLimit);
    /**
     * 37-30
     * 捐献篝火
     */
    upToFire(count: any, itemCount: number): any[];
    /**
     * 篝火
     * 37-30
     */
    downUpdateFire(fireLvl: number, fireVal: number): void;
    /**
     * 37-31
     */
    upGuildChangeName(nameStr: string): string[];
    /**
     * 是否有玩家申请
     */
    hasApplys(): boolean;
    private clearGuildInfo();
    /**
     * 移除某id的聊天
     */
    removeMsgWithId(userId: number): void;
    private initTaskInfos();
    private taskInfosSortFunc(aConfig, bConfig);
    getMemberNum(): number;
    /**
     * 获取成员列表
     * sortType 排序方式， 0不排序，1按历史贡献，2 按当日贡献
     */
    getGuildMembers(sortType: number): UnionMemberInfoVo[];
    /**获取某个职的数量 */
    getOfficeNum(office: number): number;
    /**能否任命副会长 */
    canAppointFHZ(): boolean;
    private memberSortFunc(aInfo, bInfo);
    private memberSortFunc2(aInfo, bInfo);
    checkIsInGuild(id: number): boolean;
    getGuildInfoByName(name: any): UnionMemberInfoVo;
    private startCheckShow();
    /**是否有可升级的建筑(有权限的成员) */
    isUpGradeBuilding(): boolean;
    checkIsOpenUploadLogo(): boolean;
    uploadGuildLogo(value: any): void;
    getGuildLogo(id: any, state: any): any;
    refTimeOutList(message?: any): void;
}
/**
 * 公会副本数据
 */
declare class UnionCopyControl extends BaseSystem {
    fbNum: number;
    sweep: number;
    sweepNum: number;
    tongguan: number;
    zuwei: number;
    nextFb: number;
    rankDatas: UnionCopyRankInfoVo[];
    isMaxGK: number;
    maxName: string;
    maxNum: number;
    maxZhuwei: number;
    maxCareer: number;
    maxSex: number;
    fbgkNum: number;
    private _gkDatas;
    rewardNum: number;
    rewardRoleNum: number;
    bossGKNum: number;
    bossTimer: number;
    change: number;
    static ins(): UnionCopyControl;
    /**
     * 通关人数列表
     */
    getGkDatas(index?: number): any;
    /**
     * 公会副本信息
     * 39-1
     */
    private downInfo(fbNum, sweep, sweepNum, tongguan, zuwei, nextFb);
    dispatchGuildFubenInfo(): void;
    /**
     * 公会副本排名
     * 39-2
     */
    private downRankInfo(datas);
    /**
     * 公会副本昨日最高关卡
     * 39-3
     */
    private downMaxGKInfo(isMaxGK, maxName, maxCareer, maxSex, maxNum, maxZhuwei);
    /**
     * 公会副本关卡通关人数
     * 39-4
     */
    private downGKInfo(fbgkNum, datas);
    /**
     * 公会信息变更
     * 39-5
     */
    private downChangeInfo(val);
    /**
     * 公会信息奖励进度
     * 39-6
     */
    private downRewardInfo(rewardNum, rewardRoleNum);
    /**
     * 下一波怪3秒到达
     * 39-7
     */
    downBossInfo(bossGKNum: number): void;
    /**
     * 当前波结束时间
     * 39-8
     */
    downBossTimerEndInfo(bossGKNum: number, time: number): void;
    /**
     * 扫荡结束
     * 39-9
     */
    downSweepEnd(): void;
    /**
     * 请求公会副本排名信息
     * 39-2
     */
    upRankInfo(): void;
    /**
     * 请求公会副本昨日最高通关
     * 39-3
     */
    upMaxGKInfo(): void;
    /**
     * 请求公会副本关卡人员信息
     * 39-4
     */
    upGKRoleInfo(num: number): number[];
    /**
     * 请求挑战公会副本
     * 39-5
     */
    upChallange(): void;
    /**
     * 请求扫荡公会副本
     * 39-6
     */
    upSweep(): void;
    /**
     * 请求公会副本助威
     * 39-7
     */
    upZhuwei(): void;
    /**
     * 请求公会副本通关奖励
     * 39-8
     */
    upReward(): void;
    /**
     * 是否有按钮可点
     */
    hasbtn(): boolean;
    readonly bossTimerEnd: number;
}
declare class UnionRedPoint extends BaseSystem {
    static Tab_LianGong: number;
    /** 行会红点 */
    hanghui: boolean;
    /** 分配奖励 */
    sendReward: boolean;
    /** 红包 */
    redBag: boolean;
    /** 龙城争霸 */
    sczb: boolean;
    /** 行会大厅 */
    hhdt: boolean;
    /** 管理页签 */
    gldt: boolean;
    /** 行会BOSS */
    hhBoss: boolean;
    /** 每日奖励 */
    dayReward: boolean;
    /** 篝火*/
    guildFire: boolean;
    /** 人物头像红点*/
    roleTabs: Map<Map<boolean>>;
    /** 练功房每个人物的技能红点*/
    roleSkillTabs: Map<Map<boolean>>;
    /** 练功房分页红点*/
    liangongRed: boolean;
    devildomAwardRed: boolean;
    constructor();
    static ins(): UnionRedPoint;
    dispatchGuildFire(): void;
    dispatchHhdt(): void;
    dispatchGldt(): void;
    dispatchDayReward(): void;
    dispatchSczb(): void;
    dispatchRedBag(): void;
    dispatchSendReward(): void;
    dispatchHanghui(): void;
    dispatchHanghuiBoss(): void;
    dispatchLianGongRedPoint(): void;
    private getCommonSkillDP(skillID, level);
    dispatchDevildomFenAward(): void;
}
/**
 * 公会商店数据
 */
declare class UnionStoreControl extends BaseSystem {
    guildStoreLv: number;
    guildStoreNum: number;
    private _recordInfoAry;
    private _guildStoreItemData;
    private _recordInfo;
    static ins(): UnionStoreControl;
    /**抽奖记录*/
    getRecordInfoAry(index?: number): any;
    /**箱子数据*/
    getGuildStoreItemData(index?: number): any;
    /**
     * 公会商店信息
     * 42-1
     */
    downInfo(guildStoreLv: number, guildStoreNum: number): void;
    /**
     * 公会宝箱记录
     * 42-2
     */
    downBoxInfo(datas: any[]): void;
    /**
     * 开箱
     * 42-3
     */
    downBox(datas: any[]): void;
    /**
     * 公会商店信息
     * 42-1
     */
    upGetInfo(): void;
    /**
     * 公会宝箱记录
     * 42-2
     */
    upBoxInfo(): number[];
    /**
     * 开箱
     * 42-3
     */
    upBox(): void;
}
declare class UnionWarControl extends BaseSystem {
    private _guildWarModel;
    GuildNameBelongs: string[];
    static ins(): UnionWarControl;
    getModel(): UnionWarModelVo;
    /**
     * 请求发红包
     * 40-2
     */
    upSendRedBag(num: number, bagNum: number): number[];
    /**
     * 请求领取红包
     * 40-3
     */
    upRobRedBag(): void;
    /**
     * 请求进入龙城争霸
     * 40-4
     */
    upJoinAc(): void;
    /**
     * 请求进入下一场景
     * 40-5
     */
    upPlayNextMap(index: number): number[];
    /**
     * 请求龙城争霸 帮派排行榜数据
     * 40-8
     */
    upGuildRank(): void;
    /**
     * 请求龙城争霸 个人排行榜数据
     * 40-9
     */
    upOwnGuildRank(): void;
    /**
     * 行会战个人排行榜
     * 40-9
     */
    downGuildPersonalRank(datas: any[]): void;
    /**
     * 请求龙城争霸 个人每日奖励
     * 40-13
     */
    upDayReward(day: number): number[];
    /**
     * 请求龙城争霸 个人帮派积分排行
     * 40-14
     */
    upOwnMyGuildRank(): void;
    /**
     * 请求 开始采集旗子
     * 40-16
     */
    upStartGetFlag(): void;
    /**
     * 龙城争霸获胜帮派信息
     * 40-21
     */
    upWinGuildInfo(): void;
    /**
     * 红包信息
     * 40-1
     */
    downRedBagInfo(...param: any[]): void;
    /**
     * 发红包
     * 40-2
     */
    downSendRedBack(result: boolean): void;
    /**
     * 抢红包
     * 40-3
     */
    downRobRedBack(result: boolean): void;
    /**
     * 进入龙城争霸的
     * 40-4
     */
    downJoinPlayBack(flag: boolean, doorDie: boolean, rewardFlag: number): void;
    /**
     * 进入下个场景
     * 40-5
     */
    downPlayNextCard(): void;
    /**
     * 个人积分 帮派积分
     * 40-6
     */
    downGetPointInfo(ownPoint: number, guildPoint: number, addNum: number): void;
    dispatchPointUpdate(): void;
    /**
     * 功勋值变化
     * 40-7
     */
    downGetGongXunChange(val: number): void;
    /**
     * 帮派排行数据
     * 40-8
     */
    downGuildRankinfo(...param: any[]): void;
    /**
     * 帮派战 复活信息
     * 40-10
     */
    downGuildWarKillInfo(time: number, killName: string, killGuild: string): void;
    /**
     * 帮派战 皇宫归属变更
     * 40-11
     */
    downGuildWarCityOwn(cityOwn: string): void;
    dispatchCityownChange(): void;
    /**
     * 帮派战 本帮排行
     * 40-14
     */
    downMyActivityRankInfo(datas: any[]): void;
    /**
     * 领取每日奖励状态
     * 40-12
     */
    downDayRewardInfo(canGetDay: boolean, getDayReward: boolean, rewardDay: number): void;
    /**
     * 旗子状态变
     * 40-15
     */
    downFlagInfoChange(flagStatu: number, endTime: number, flagName: string, flagAcId: number, flagGuild: string): void;
    /**
     * 结算
     * 40-17
     */
    downGuildWarResult(...param: any[]): void;
    /**
     * 护盾
     * 40-18
     */
    downHuDunInfoChange(...param: any[]): void;
    /**
     * 40-19
     */
    downAssignsReward(guildWarRank: number, canSendReward: boolean, rewardFlag: number): void;
    /**
     * 40-20
     */
    upFenReward(num: number, list: any): any[][];
    /**
     * 40-20
     */
    downSendRewardSuccess(result: boolean): void;
    /**
     * 40-21
     */
    downWinGuildInfo(...param: any[]): void;
    /**
     * 40-22
     */
    downGuildWarStarInfo(isWatStart: boolean, startTime: number, acEndTime: number): void;
    /**
     * 城门护盾
     * 40-23
     */
    downGuildWarDoorHuDun(curShield: number): void;
    /**
     * 抽奖信息
     * 40-24
     */
    downLotteryInfo(worldPrize: number): void;
    /**
     * 参与抽奖
     * 40-25
     */
    upPlayLotteryInfo(): void;
    /**
     * 排行榜
     * 40-26
     */
    downRankInfoChange(datas: any[]): void;
    /**
     * 40-27
     */
    downChangeAttrHandle(handle: number): void;
    dispatchWeixieChange(b: number): void;
    /**
     * 公会红点
     */
    dispatchGuildRedPointChange(state: boolean): void;
    /**
     * 40-28
     */
    downChangeShowList(handle: number): void;
    /**
     * 40-29
     */
    downPointRewardInfo(...datas: any[]): void;
    /**
     * 请求积分奖励
     * 40-30
     */
    upPointReward(): void;
    /**
     * 城门倒计时
     * 40-31
     */
    downDoorEndtime(time: number): void;
    /**
     * 自己的抽奖点数
     * 40-25
     */
    downGetMyPoint(ran: number): void;
    dispatchLotteryPoint(n: number): void;
    /**
     * 抽奖最高点数
     * 40-32
     */
    downTalkMaxPoint(point: number, name: string): void;
    /**
     * 击杀数
     * 40-32
     */
    downKillHuman(kill: number): void;
    /**
     * 合服活动归属公会名称
     * 40-34
     */
    downHeFuBelong(datas: any[]): void;
    /**
     * 获取合服活动归属公会名
     * 40-34
     */
    upHeFuBelong(): void;
    dispatchLotteryMaxPost(str: string, n: number): void;
    dispatchMyRankChange(): void;
    dispatchPointRewardChange(): void;
    dispatchCanplayChange(): void;
    dispatchRankListChange(): void;
    dispatchGuildNumChange(): void;
    dispatchSendListChange(): void;
    dispatchRankInfo(): void;
}
declare const enum UnionBuilding {
    /** 管理大厅 */
    UNION_HALL = 1,
    /** 练功房 */
    UNION_LIANGONGFANG = 2,
    /** 商城 */
    UNION_SHOP = 3,
    /** 议事堂 */
    UNION_COMMENT = 4,
}
declare const enum UnionOffice {
    UNION_MEMBER = 0,
    UNION_JINGYING = 1,
    UNION_TANGZHU = 2,
    UNION_HUFA = 3,
    UNION_ZHANGLAO = 4,
    UNION_FUBANGZHU = 5,
    UNION_BANGZHU = 6,
}
/** 强盗状态*/
declare class RobberStartInfoVo {
    robberStart: number;
    robberType: number;
}
declare class UnionApplyInfoVo {
    roleID: number;
    vipLevel: number;
    attack: number;
    name: string;
    job: number;
    sex: number;
}
declare class UnionCopyRankInfoVo {
    rank: number;
    name: string;
    guanka: number;
}
declare class UnionListInfoVo {
    guildRank: number;
    guildID: number;
    guildLevel: number;
    commentLv: number;
    guildMember: number;
    guildName: string;
    guildPresident: string;
    attr: number;
}
declare class UnionMemberInfoVo {
    roleID: number;
    name: string;
    office: number;
    job: number;
    sex: number;
    vipLevel: number;
    monthCard: number;
    /**当日贡献 */
    curContribution: number;
    /**历史贡献 */
    contribution: number;
    attack: number;
    downTime: number;
    level: number;
    zsLevel: number;
    /** 天梯积分*/
    score: number;
    /** 胜率*/
    winRate: number;
    /** 跨服竞技场剩余次数*/
    KfArenaCount: number;
    /** 是否加入跨服竞技场队伍*/
    isJoinkfArena: boolean;
    init(datas: any[]): void;
    copyData(tData: UnionMemberInfoVo): void;
}
declare class UnionMessageInfoVo extends RambleBaseVo {
    type: number;
    str: string;
    roleId: number;
    name: string;
    job: number;
    sex: number;
    vipLevel: number;
    monthCard: number;
    office: number;
    zsLevel: number;
    lv: number;
    titleId: number;
    guildName: string;
    ctType: number;
    ctData: any;
    survivalTime: number;
    init(datas: any[]): void;
    analyzeE(): void;
    caleTime(): void;
    timeoutHandle(): void;
    readonly hasTimeOut: boolean;
}
declare class GuildRoleSkillInfo {
    guildSkillInfo: UnionSkillInfoVo[];
    practiceSkillInfo: UnionSkillInfoVo[];
}
declare class UnionSkillInfoVo {
    level: number;
    exp: number;
}
declare class UnionStoreItemDataVo {
    itemId: number;
    num: number;
}
/** 公会商店记录 */
declare class UnionStoreRecordInfoVo {
    roleName: string;
    itemId: number;
    times: number;
}
declare class UnionTaskInfoVo {
    taskID: number;
    /**任务当前变量 */
    param: number;
    /**任务状态（0正在进行，1可以领奖，2已经领奖） */
    state: number;
    stdTask: UnionTaskConfig;
}
declare class UnionWarModelVo {
    guildPoint: number;
    ownPoint: number;
    gongXun: number;
    rewardList: RewardVo[];
    private configList;
    /**城门是否被击杀 */
    doorDie: boolean;
    /**领取第几天的奖励 */
    rewardDay: number;
    canGetDay: boolean;
    getDayReward: boolean;
    /**
     * 剩余的元宝数
     * 不是帮主为0  没收到数据表示不可以发 也不可以领
     */
    remainYB: number;
    /**
     * 是否可以发红包
     * 不是帮主为0
     */
    canSend: boolean;
    /**
     * 是否可领取
     */
    canRod: boolean;
    /**
     * 发出的元宝数
     */
    sendYbNum: number;
    /**最多红包数 */
    maxRedNum: number;
    /**剩余红包数 */
    remainRedNum: number;
    /**抢红包的列表*/
    rebList: GuildRedRobInfo[];
    /**自己抢到的元宝数 */
    robYbNum: number;
    lastGuildName: string;
    guildRankList: RankGuildInfo[];
    killName: string;
    killGuild: string;
    /**皇宫归属*/
    cityOwn: string;
    myRankList: MyRankGuildInfo[];
    /**威胁的列表 */
    weixieList: number[];
    canPlayList: number[];
    flagStatu: number;
    endTime: number;
    flagName: string;
    flagAcId: number;
    flagGuild: string;
    private dataList;
    canClick: boolean;
    private _clickTime;
    guildWarRank: number;
    _canSendReward: boolean;
    rewardIndex: number;
    sendList: any;
    sendNumList: any[];
    rewardFlag: number;
    winGuildInfo: WinGuildInfo;
    isWatStart: boolean;
    startTime: number;
    _acEndTime: number;
    rankList: WarRankInfo[];
    pointInfo: PointRewarddInfo;
    private _doorEndtime;
    attHandle: number;
    myGuildPointRank: SelectInfoData[];
    guildHandleList: number[];
    guildNum: number;
    creatGuildRankReward(rank: number, index?: number): RewardVo[];
    creatGuildRewardList(): number[];
    private checkIsHave(data);
    initRedbagInfo(datas: any[]): void;
    isHaveRedBag(): boolean;
    checkinAppoint(index?: number, up?: boolean): boolean;
    initGuildRankInfo(datas: any[]): void;
    getNextMapName(next?: number): string;
    /**进入下个场景需要的功勋 */
    getIntoNextMapGongxun(): number;
    /**当前场景的按钮描述*/
    getMapLevelInfo(): UnionBattleLvConfig;
    initMyGuildRankInfo(datas: any[]): void;
    changeWeiXieList(handel: number, add?: boolean, showName?: string): void;
    changecanPlayList(handel: number, add?: boolean): void;
    decodeGulidWarResult(...param: any[]): void;
    checkListElements(handle: number, list: number[]): number;
    getRewardByPoint(point: number): RewardVo[];
    getMyPointReward(): UnionBattlePerAwardConfig;
    getMaxReward(): UnionBattlePerAwardConfig;
    clickTime: number;
    private endTimeChangeStatu();
    canSendReward: boolean;
    getCanSendNumByRank(index?: number): number;
    checkISSendAll(): boolean;
    acEndTime: number;
    private reduceTime();
    setOpenDesc(): string;
    /**
     * 复活或者切场景的cd
     * 1  切换场景的cd
     * 2  复活的cd
     */
    getCdByType(type: number): number;
    getIsShowGuildWarBtn(): number;
    rankListChange(datas: any[]): void;
    initPointRewardInfo(datas: any[]): void;
    getSelectDataByIndex(index: number): SelectInfoData[];
    getMyPointRankReward(rank: number): RewardVo[];
    doEndDoorTime(time: number): void;
    private timeDo();
    readonly doorEndtime: number;
    getMyGuildPointRank(): SelectInfoData[];
    private getPointByAcId(acId);
    private sort(a, b);
    setMyGuildNum(handle: number, add?: boolean): void;
    clearGuildWarList(): void;
}
declare class GuildRedRobInfo {
    robNum: number;
    robName: string;
    acId: number;
    init(datas: any[]): void;
}
declare class RankGuildInfo {
    guildPoint: number;
    guildName: string;
    ownName: string;
    init(datas: any[]): void;
}
declare class MyRankGuildInfo {
    myName: string;
    mapName: string;
    point: number;
    attr: number;
    office: number;
    job: number;
    sex: number;
    roleID: number;
    init(datas: any[]): void;
}
/**获胜帮会的信息 */
declare class WinGuildInfo {
    guildId: number;
    guildName: string;
    guildOwnName: string;
    guildOwnId: number;
    guildOwnJob: number;
    guildOwnSex: number;
    clothID: number;
    wapenId: number;
    wingOpen: number;
    winId: number;
    init(datas: any[]): void;
}
/**获胜帮会的信息 */
declare class WarRankInfo {
    point: number;
    name: string;
    init(datas: any[]): void;
}
/**积分奖励领取信息 */
declare class PointRewarddInfo {
    isCan: boolean;
    id: number;
    point: number;
    init(datas: any[]): void;
}
declare const enum GuildFlag {
    act = 0,
    hf = 1,
    kf = 2,
}
declare class SelectInfoData {
    data: UnionMemberInfoVo;
    num: number;
}
/**
 * 玩家申请列表
 */
declare class UnionApplyListView extends BaseEuiView {
    private list;
    private bgClose;
    private checkBoxs;
    private attrNum;
    fgClose: eui.Button;
    constructor();
    initUI(): void;
    open(...param: any[]): void;
    close(...param: any[]): void;
    private onTxtChange(e);
    private updateList(listData);
    private onListTouch(e);
    private onTap(e);
    private sort(a, b);
}
/**
 * 公会列表
 */
declare class UnionApplyView extends BaseEuiView {
    createBtn: eui.Button;
    list: eui.List;
    noGuild: eui.Label;
    bgClose: eui.Rect;
    private fgClose;
    /**第一页从0开始*/
    private dataArr;
    constructor();
    static openCheck(...param: any[]): boolean;
    open(...param: any[]): void;
    private onListTouch(e);
    private updateList();
    private onTap(e);
    destoryView(): void;
}
declare class UnionCampFirePanel extends BasePanel {
    private btnImg;
    private progressBar;
    private desc1;
    private desc2;
    private cha;
    private count;
    private give;
    private fireLv;
    private lv0;
    private lv1;
    private fire1;
    private firestar;
    private redPoint;
    private itemCount;
    private delayTime;
    open(): void;
    close(): void;
    private update();
    private onGiveBegin();
    private onGiveEnd();
    private stratAddFire();
}
declare class UnionChangeNameView extends BaseEuiView {
    private bgClose;
    private closeBtn;
    private input;
    private sureBtn;
    constructor();
    open(): void;
    private onTap(e);
    private onChangeName();
}
declare class UnionConView extends BaseEuiView {
    desc0: eui.Label;
    desc1: eui.Label;
    count0: eui.Label;
    count1: eui.Label;
    info0: eui.Label;
    info1: eui.Label;
    btn0: eui.Button;
    btn1: eui.Button;
    private bgClose;
    constructor();
    initUI(): void;
    static openCheck(...param: any[]): boolean;
    private update();
    open(...param: any[]): void;
    close(...param: any[]): void;
    private onTap(e);
}
declare class UnionCreateView extends BaseEuiView {
    private okBtn;
    private leftLab;
    private rightLab;
    private textInput;
    private selectBmp;
    private selectLevel;
    private bgClose;
    bg1: eui.Image;
    bg2: eui.Image;
    constructor();
    initUI(): void;
    private changeSelect(id);
    private formatLab(level);
    static openCheck(...param: any[]): boolean;
    open(...param: any[]): void;
    private onTap(e);
}
declare class UnionInfoPanel extends BasePanel {
    private guildName;
    private guildMember;
    private checkJoin;
    private myCon;
    private guildMoney;
    private guildLevel;
    private conBtn;
    private list;
    private notice;
    private eff;
    private isInit;
    private userGuild;
    cityBtn: eui.Button;
    rename: eui.Button;
    auditText: eui.Label;
    childrenCreated(): void;
    init(): void;
    initUI(): void;
    open(...param: any[]): void;
    private onTap(e);
    private updateMyInfo();
    private updateGuild();
    private updateMember();
    private onLinkApply();
    private updateApplys();
}
declare class UnionListPanel extends BasePanel {
    private list;
    /**第一页从0开始*/
    private curPage;
    childrenCreated(): void;
    protected init(): void;
    open(...param: any[]): void;
    private pageChange(page);
    private updateList();
}
declare class UnionManageBuildPanel extends BasePanel {
    private buildList;
    private messageList;
    buildScroller: eui.Scroller;
    childrenCreated(): void;
    protected init(): void;
    static openCheck(...param: any[]): boolean;
    open(): void;
    close(): void;
    private update();
    private index;
    private updateList();
    private refushBar();
    private refushBarList();
    private onListTouch(e);
}
declare class UnionMapView extends BaseEuiView {
    private closeBtn;
    private rankBg;
    private cityBtn;
    private manageBtn;
    private shopBtn;
    private practiseBtn;
    private list;
    private redPoint0;
    private redPoint1;
    private redPoint2;
    private redPoint3;
    private chatBtn;
    private guildWarEffect2;
    private guildRewardEff;
    private reward;
    private rewardTouch;
    constructor();
    initUI(): void;
    static openCheck(...param: any[]): boolean;
    open(...param: any[]): void;
    close(...param: any[]): void;
    private hhdtRed();
    private updateRedpoint();
    private updateGuildPoint();
    private updateBossPoint();
    private updateList();
    private onTap(e);
    private updateSendBtnStatu();
    private refushGuildwarEffect();
}
declare class UnionMemberPanel extends BasePanel {
    private office;
    private totalCon;
    quitBtn: eui.Button;
    private list;
    private dataArr;
    private mtips;
    childrenCreated(): void;
    protected init(): void;
    open(...param: any[]): void;
    close(...param: any[]): void;
    private onListTouch(e);
    private updateMember();
    private onTap(e);
    private updateMyInfo();
}
declare class UnionNoticeView extends BaseEuiView {
    private closeBtn0;
    private saveBtn;
    private textInput;
    private closeBtn1;
    private bgrect;
    initUI(): void;
    open(...param: any[]): void;
    close(...param: any[]): void;
    private onTap(e);
}
declare class UnionShopPanel extends BasePanel {
    closeBtn: eui.Button;
    closeBtn0: eui.Button;
    guildMore: eui.Label;
    unionShopResitem_0: ItemBase;
    unionShopResitem_1: ItemBase;
    unionShopResitem_2: ItemBase;
    unionShopResitem_3: ItemBase;
    unionShopResitem_4: ItemBase;
    unionShopResitem_5: ItemBase;
    unionShopResitem_6: ItemBase;
    unionShopResopen: eui.Group;
    useBtn: eui.Button;
    unionShopReslabel: eui.Label;
    unionShopResxiaolabel: eui.Label;
    unionShopResshengyulabel: eui.Label;
    unionShopResclose: eui.Group;
    unionShopReskaiqi: eui.Label;
    box: eui.Image;
    unionShopResitem_7: ItemBase;
    record: eui.Label;
    record1: eui.Label;
    record2: eui.Label;
    openBoxEff: GameMovieClip;
    private isOpenEff;
    constructor();
    initUI(): void;
    open(...param: any[]): void;
    close(...param: any[]): void;
    private onupdateData();
    private onReadInfo();
    private onItemInfo();
    private startEff();
    private onTap(e);
}
declare class UnionShopRecordView extends BaseEuiView {
    closeBtn: eui.Button;
    closeBtn0: eui.Button;
    closeBtn1: eui.Button;
    list: eui.List;
    private arrList;
    initUI(): void;
    open(...param: any[]): void;
    close(...param: any[]): void;
    private onTap(e);
}
declare class UnionSkillPanel extends BasePanel {
    private skillBmp1;
    private skillBmp2;
    private skillBmp3;
    private praGroup;
    private praName;
    private praCurBase;
    private praNextLab;
    private praCon;
    private praCost;
    private praCost0;
    private praBtn;
    private learnLab;
    private selectBmp;
    private selectBmpX;
    private selectBmpY;
    private selectIconID;
    private selectSkillID;
    private selectSkillBmp;
    private lvTxt;
    private redPoint1;
    private redPoint2;
    private redPoint3;
    private praBtnMc;
    private mc;
    /**0普通 1特殊 */
    private selectSkillType;
    curRole: number;
    constructor();
    protected childrenCreated(): void;
    static openCheck(...param: any[]): boolean;
    open(...param: any[]): void;
    close(): void;
    private updateRedPoint();
    private onLink();
    private updateRole();
    private updateMyInfo();
    update(roleId?: number): void;
    private onTap(e);
    private learnBtnOnClick();
    private selectSkill(selectId);
    /**
     * 获取战斗力接口
     */
    getTotalPower(): number;
    private selectPraSkill(selectId);
    private updateMc();
    private getCommonSkillDP(skillID, level);
    private getCommonSkillLength(skillId);
}
declare class UnionSkillView extends BaseEuiView {
    roleSelect: RoleSelectPanel;
    redPoint1: eui.Image;
    redPoint0: eui.Image;
    viewStack: eui.ViewStack;
    private lastSelect;
    unionSkillPanel: UnionSkillPanel;
    guildstore: eui.Component;
    tab: eui.TabBar;
    unionCampFirePanel: UnionCampFirePanel;
    constructor();
    open(...param: any[]): void;
    private setSelectedIndex(e);
    private selectedIndex(index);
    close(...param: any[]): void;
    private update();
    private updateRed();
    private updateRoleRedPoint();
    static openCheck(...param: any[]): boolean;
}
declare class UnionView extends BaseEuiView {
    tab: eui.TabBar;
    viewStack: eui.ViewStack;
    redPoint0: eui.Image;
    private lastSelect;
    private redPoint1;
    constructor();
    initUI(): void;
    static openCheck(...param: any[]): boolean;
    open(...param: any[]): void;
    close(...param: any[]): void;
    private onTap(e);
    private setSelectedIndex(e);
    private updateRedPoint();
}
declare class UnionAppltListItemRender extends BaseItemRender {
    private nameLab;
    private attack;
    private ok;
    private cancel;
    private myFace;
    attack0: eui.Label;
    vip: eui.Group;
    private vipTitle;
    private vipNum;
    private vipNum0;
    constructor();
    onTap(e: eui.Button): void;
    protected dataChanged(): void;
}
declare class UnionBuildItemRender extends BaseItemRender {
    private nameLab;
    levelLab: eui.Label;
    private upLevelLab;
    private money;
    private upBtn;
    private buildingLab;
    private _maxLevel;
    private _curLevel;
    private _nextMoney;
    manege: eui.Image;
    buildImg: eui.Image;
    progress: eui.ProgressBar;
    needMoney: eui.Label;
    progressblack: eui.Rect;
    progressbg: eui.Image;
    private redPoint;
    constructor();
    onTap(e: eui.Button): void;
    protected dataChanged(): void;
    private updateRedPoint();
}
declare class UnionEventItenRender extends BaseItemRender {
    private info;
    constructor();
    protected dataChanged(): void;
}
declare class UnionListItem2Render extends BaseItemRender {
    private nameLab;
    private president;
    private member;
    private numLab;
    numImg: eui.Image;
    member0: eui.Label;
    attrLab: eui.Label;
    constructor();
    protected dataChanged(): void;
}
declare class UnionListItemRender extends BaseItemRender {
    private nameLab;
    private president;
    private member;
    private applyBtn;
    private numLab;
    attrLabel: eui.Label;
    constructor();
    onTap(): void;
    protected dataChanged(): void;
    destruct(): void;
}
declare class UnionMapMemberItemRender extends BaseItemRender {
    private nameLab;
    private office;
    private conLab;
    constructor();
    protected dataChanged(): void;
}
declare class UnionMemberItem1Render extends BaseItemRender {
    private nameLab;
    private office;
    private conLab;
    private vip;
    private monthcard;
    private vipTitle;
    private vipNum;
    private vipNum0;
    zuncard: eui.Image;
    constructor();
    dataChanged(): void;
}
declare class UnionMemberItem2Render extends BaseItemRender {
    private conLab;
    private attack;
    private nameLab;
    private onLine;
    private headBG;
    private face;
    /**弹劾 */
    private impeachBtn;
    /**禅让 */
    private demiseBtn;
    /**降职 */
    private downBtn;
    /**踢出 */
    private kickBtn;
    /**任命 */
    private appointBtn;
    private group1;
    private group2;
    private group3;
    private vip;
    private vipTitle;
    private vipNum;
    private vipNum0;
    constructor();
    childrenCreated(): void;
    onTap(e: eui.Button): void;
    protected dataChanged(): void;
}
declare class UnionShopRecordItemRender extends BaseItemRender {
    rank: eui.Label;
    constructor();
    protected dataChanged(): void;
}
declare class UnionTaskItemRender extends BaseItemRender {
    private descLab;
    private nameLab;
    private headBG;
    private getGroup;
    private goBtn;
    private conGroup;
    private conBtn;
    private numLab;
    private taskIcon;
    constructor();
    onTap(e: eui.Button): void;
    private conBtnOnCLick();
    private goBtnOnClick();
    protected dataChanged(): void;
}
declare class UnionBossDetailView extends BaseEuiView {
    private chanllage;
    private chanllageOme;
    private bosshp;
    private rewardBar;
    private index;
    private bgClose;
    private cantchanllage;
    private bossname;
    private chanllagecount;
    private rankBtn;
    private bossImage;
    private state;
    fgClose: eui.Button;
    constructor();
    initUI(): void;
    static openCheck(...param: any[]): boolean;
    open(...param: any[]): void;
    private upInfo();
    private setView();
    private onTap(e);
    private challengeSuccess();
    private guildname0;
    private guildname1;
    private guildname2;
    private rankGroup0;
    private rankGroup1;
    private rankGroup2;
    private setRank();
}
declare class UnionBossRankView extends BaseEuiView {
    private bgClose;
    private list;
    private qiansan;
    private myrank;
    private myname;
    private myharm;
    private myreword;
    private index;
    private myData;
    constructor();
    static openCheck(...param: any[]): boolean;
    open(...param: any[]): void;
    close(...param: any[]): void;
    private setView();
    private onTap(e);
}
declare class UnionBossView extends BaseEuiView {
    private closeBtn;
    private enemyname;
    private selfname;
    private ebhpbar;
    private sbhpbar;
    private imgRight;
    private imgleft;
    private itemArr;
    private bossLen;
    private bossArr;
    private itemLen;
    private arrCount;
    private currentArr;
    private currentIndex;
    private fightboss;
    private state;
    constructor();
    initUI(): void;
    static openCheck(...param: any[]): boolean;
    open(...param: any[]): void;
    private getRuleIndex();
    private setView();
    private onTap(e);
    private onItemTap(e);
    private challengeSuccess();
}
declare class UnionBossItemRender extends BaseItemRender {
    private bossname;
    private rankTxt;
    private bossImage;
    private bosshp;
    private redPoint0;
    passImg: eui.Image;
    constructor();
    protected dataChanged(): void;
    private isOpen();
}
declare class UnionBossRankItemRender extends BaseItemRender {
    rank: eui.Label;
    playerName: eui.Label;
    guildOwn: eui.Label;
    harm: eui.Label;
    reward: eui.Label;
    constructor();
    dataChanged(): void;
}
declare class DailyAwardView extends BaseEuiView {
    desc: eui.Label;
    closeBtn: eui.Button;
    sure: eui.Button;
    closeBtn1: eui.Button;
    list: eui.List;
    private bgClose;
    initUI(): void;
    open(...param: any[]): void;
    close(...param: any[]): void;
    private onTap(e);
}
declare class DailyPresidentAwardView extends BaseEuiView {
    bgClose: eui.Rect;
    desc: eui.Label;
    closeBtn: eui.Button;
    sure: eui.Button;
    closeBtn1: eui.Button;
    list: eui.List;
    private dataArr;
    fgClose: eui.Button;
    initUI(): void;
    open(...param: any[]): void;
    close(...param: any[]): void;
    private onTap(e);
}
declare class SelectMemberRewardView extends BaseEuiView {
    rankLabel: eui.Label;
    list: eui.List;
    sendReward: eui.Button;
    bgClose: eui.Rect;
    dataLen: number[];
    constructor();
    initUI(): void;
    open(...param: any[]): void;
    close(...param: any[]): void;
    private refushPanelInfo();
    private refushList();
    private onTap(e);
}
declare class SelectMemberView extends BaseEuiView {
    list: eui.List;
    chooseNum: eui.Label;
    sureBtn: eui.Button;
    index: number;
    maxNum: number;
    private selectItemList;
    selectList: UnionMemberInfoVo[];
    numList: number[];
    bgClose: eui.Rect;
    constructor();
    initUI(): void;
    open(...param: any[]): void;
    refushList(): void;
    close(...param: any[]): void;
    private countNum();
    private onTap(e);
    private setAddInfoShow(item, show?);
    private toNumList();
}
declare class UnionWarMainView extends BaseEuiView {
    redBag: eui.Button;
    closeBtn: eui.Button;
    help: eui.Button;
    play: eui.Button;
    guildName: eui.Label;
    guildOwn: eui.Label;
    openDesc: eui.Label;
    none: eui.Group;
    private redEff;
    private enterEff;
    private titleEff;
    practiseBtn2: eui.Button;
    practiseBtn1: eui.Button;
    practiseBtn: eui.Button;
    practiseBtn0: eui.Button;
    redPoint0: eui.Image;
    titleGroup: eui.Group;
    private roleEff;
    private player;
    initUI(): void;
    open(...param: any[]): void;
    private updateRedBag();
    close(...param: any[]): void;
    private refushPanelInfo();
    private refushStartEffect();
    private refushTitleEffect();
    private refushRewardStatu();
    private refushWinGuild();
    private onTap(e);
}
declare class UnionWarMemView extends BaseEuiView {
    list: eui.List;
    closeBtn0: eui.Button;
    closeBtn: eui.Button;
    data: eui.ArrayCollection;
    private bgClose;
    constructor();
    initUI(): void;
    open(...param: any[]): void;
    close(...param: any[]): void;
    refushList(): void;
    private onTap(e);
}
declare class UnionWarReliveView extends BaseEuiView {
    /**1--切下个场景   2--复活 */
    private type;
    /** 倒计时剩余秒 */
    private s;
    private defaultStr;
    background: eui.Image;
    killName: eui.Label;
    mapName: eui.Label;
    timeDown: eui.Label;
    closeBtn: eui.Button;
    guildName: eui.Label;
    private sceneIndex;
    initUI(): void;
    open(...param: any[]): void;
    close(...param: any[]): void;
    refushMapInfo(): void;
    private updateCloseBtnLabel();
    private onTap(e);
}
declare class UnionWarResultView extends BaseEuiView {
    bg: eui.Image;
    starBg: eui.Image;
    closeBtn: eui.Button;
    result: eui.Image;
    guildName: eui.Label;
    guildPoint: eui.Label;
    myPoint: eui.Label;
    guildRank: eui.Label;
    myRank: eui.Label;
    list1: eui.List;
    list2: eui.List;
    /** 倒计时剩余秒 */
    private s;
    constructor();
    initUI(): void;
    open(...param: any[]): void;
    close(...param: any[]): void;
    private onTap();
}
declare class UnionWarRewardView extends BaseEuiView {
    closeBtn: eui.Button;
    closeBtn0: eui.Button;
    tab: eui.TabBar;
    viewStack: eui.ViewStack;
    title: eui.Image;
    roleSelect: eui.Component;
    private guildInteRankInfo;
    private personalInteRankInfo;
    private guildInteRewardInfo;
    private personInteRewardInfo;
    private type;
    private cruPanel;
    initUI(): void;
    addPanelList(): void;
    open(...param: any[]): void;
    close(...param: any[]): void;
    private onTap(e);
    private onTabTouch(e);
}
declare class UnionWarRulesView extends BaseEuiView {
    bigBg: eui.Image;
    bg: eui.Image;
    attr: eui.Label;
    leftBtn: eui.Button;
    rightBtn: eui.Button;
    mapName: eui.Label;
    private cruIndex;
    initUI(): void;
    open(...param: any[]): void;
    close(...param: any[]): void;
    private refushInfo();
    onTap(e: egret.TouchEvent): void;
}
declare class UnionWarTipsView extends BaseEuiView {
    initUI(): void;
    open(...param: any[]): void;
    close(...param: any[]): void;
    onTap(e: egret.TouchEvent): void;
}
declare class UnionWarUiInfoView extends BaseEuiView {
    guildName: eui.Label;
    guildPoint: eui.Label;
    ownPoint: eui.Label;
    seeRank: eui.Button;
    seeMyGuild: eui.Button;
    playNext: eui.Button;
    attList: eui.Group;
    refush: eui.Button;
    btn: eui.ToggleButton;
    bar1: eui.Scroller;
    list1: eui.List;
    gongxun: eui.Group;
    point: eui.Label;
    help: eui.Button;
    weixie: eui.Group;
    list2: eui.List;
    flagGroup: eui.Group;
    palaceFlag: eui.Button;
    flag: eui.Group;
    bloodBar: eui.ProgressBar;
    scene: eui.Label;
    mon: eui.Group;
    timeDesc: eui.Label;
    ruleDesc: eui.Label;
    hudun1: eui.Group;
    hudun: eui.ProgressBar;
    taskTraceName0: eui.Label;
    taskTraceAwards0: eui.Label;
    guid: eui.Group;
    taskTraceBtn: eui.Group;
    guid2: eui.Group;
    descImg: eui.Image;
    private scorePoint;
    flagStatu: eui.Group;
    flagTime: eui.Label;
    guildName1: eui.Label;
    sceneBar: eui.ProgressBar;
    lastTime: eui.Label;
    comNum: eui.Label;
    private clickEffc;
    private pointEff;
    weijihuo1: eui.Image;
    jihuo1: eui.Image;
    weijihuo2: eui.Image;
    jihuo2: eui.Image;
    jihuo3: eui.Image;
    weijihuo3: eui.Image;
    hgweijihuo: eui.Image;
    hgjh: eui.Image;
    Nextchengnei: eui.Button;
    Nextchengnei0: eui.Button;
    Nextdianqian: eui.Button;
    Nexthuanggong: eui.Button;
    /** 斩杀 */
    private skillGroup;
    /** 玩家血条 */
    private belongGroup;
    private roleHead0;
    private belongNameTxt0;
    private bloodBar1;
    private neigongBar1;
    initUI(): void;
    open(...param: any[]): void;
    close(...param: any[]): void;
    private refushShowInfo();
    private refreshLastTime();
    private refushGuildNum();
    private refushPoint();
    private refushPointReward();
    private cityOwnChange();
    private refushWeixieList(refushPlayList?);
    private refushcanPlayList(data?);
    private doorStatuChange();
    private rankListChange();
    private refushFlagStatu();
    private clearTimeBar();
    private hudunChange(n);
    private runTime();
    private onTap(e);
    private listTap(e);
    private clearRendererItem();
    /**斩杀数*/
    private lztitle;
    private lzlabel;
    private showSkill(value);
    /**变换攻击目标*/
    private updateTarget();
    /**更新敌方血量*/
    private updateHP(param);
    /**敌方玩家血量*/
    private currAttackHandle;
    private changeHp();
}
declare class MemberItem3Render extends BaseItemRender {
    checkBoxs: eui.CheckBox;
    job: eui.Label;
    nameLable: eui.Label;
    payNum: eui.Label;
    attr: eui.Label;
    face: eui.Image;
    btn1: eui.Button;
    btn2: eui.Button;
    num1: eui.Label;
    inputBg: eui.Image;
    chooseNum: number;
    headBg: eui.Image;
    constructor();
    dataChanged(): void;
}
declare class PersonRewardItemRender extends BaseItemRender {
    desc: eui.Label;
    itemList: eui.List;
    constructor();
    dataChanged(): void;
}
declare class SelectRewardItemRender extends BaseItemRender {
    chooseNum: eui.Label;
    goods: ItemBase;
    choosePeople: eui.Button;
    list: eui.List;
    boxname: eui.Label;
    sendNum: number;
    rightBtn: eui.Image;
    leftBtn: eui.Image;
    private index;
    constructor();
    dataChanged(): void;
    private onTap(e);
}
declare class UnionInteRankItemRender extends BaseItemRender {
    rank: eui.Label;
    guildName: eui.Label;
    guildOwn: eui.Label;
    point: eui.Label;
    constructor();
    dataChanged(): void;
}
declare class UnionInteRewardItemRender extends BaseItemRender {
    list: eui.List;
    rankLabel: eui.Label;
    numImg: eui.Image;
    constructor();
    dataChanged(): void;
}
declare class UnionWarMemberHeadItemRender extends BaseItemRender {
    roleHead: eui.Image;
    namebg: eui.Image;
    roleName: eui.Label;
    num: eui.Label;
    clickEffc: GameMovieClip;
    attEffect: GameMovieClip;
    constructor();
    dataChanged(): void;
    addAttEffect(): void;
    removeAttEffect(): void;
    showEffect(): void;
    clearEffect(): void;
    haveGuildName(b: boolean): void;
}
declare class UnionWarMemListItemRender extends BaseItemRender {
    conLab: eui.Label;
    attack: eui.Label;
    nameLab: eui.Label;
    nameLab0: eui.Label;
    headBG: eui.Image;
    face: eui.Image;
    onLine: eui.Label;
    constructor();
    dataChanged(): void;
}
/**个人积分排行 */
declare class PersonalInteRankInfoPanel extends BasePanel {
    list: eui.List;
    data: eui.ArrayCollection;
    fgClose: eui.Button;
    constructor();
    open(...param: any[]): void;
    onTap(...param: any[]): void;
    close(...param: any[]): void;
    refushList(list: RankGuildInfo[]): void;
}
/**个人奖励 */
declare class PersonInteRewardInfoPanel extends BasePanel {
    list: eui.List;
    list1: eui.List;
    dataList: UnionBattlePerAwardConfig[];
    dataArr: eui.ArrayCollection;
    dataList1: UnionBattlePerRankAwardConfig[];
    dataArr1: eui.ArrayCollection;
    fgClose: eui.Button;
    constructor();
    open(...param: any[]): void;
    close(...param: any[]): void;
}
/**帮派积分排行 */
declare class UnionInteRankInfoPanel extends BasePanel {
    list: eui.List;
    data: eui.ArrayCollection;
    guildName: eui.Label;
    infoDesc: eui.Label;
    lastName: eui.Label;
    lastNameJie: eui.Label;
    private model;
    fgClose: eui.Button;
    constructor();
    open(...param: any[]): void;
    onTap(...param: any[]): void;
    close(...param: any[]): void;
    refushList(): void;
}
/**公会奖励 */
declare class UnionInteRewardInfoPanel extends BasePanel {
    itemList: eui.List;
    list1: eui.List;
    private dataArr;
    private dataArr1;
    fgClose: eui.Button;
    constructor();
    open(...param: any[]): void;
    onTap(...param: any[]): void;
    close(...param: any[]): void;
}
declare class RedBagDetailsView extends BaseEuiView {
    closeBtn0: eui.Button;
    num: eui.Label;
    list: eui.List;
    effect: GameMovieClip;
    bgClose: eui.Rect;
    initUI(): void;
    open(...param: any[]): void;
    close(...param: any[]): void;
    private onTap(e);
}
declare class RedBagView extends BaseEuiView {
    send: eui.Button;
    rob: eui.Button;
    btn1: eui.Button;
    btn3: eui.Button;
    btn2: eui.Button;
    btn4: eui.Button;
    btn5: eui.Button;
    btn6: eui.Button;
    remainBag: eui.Label;
    price: PriceIcon;
    num1: eui.TextInput;
    num2: eui.TextInput;
    private model;
    private sendYb;
    private sendNum;
    private sendMaxNum;
    private sendYBMaxNum;
    bgClose: eui.Rect;
    initUI(): void;
    open(...param: any[]): void;
    private onTxtChange(e);
    private checkInputChange(index);
    refushSendInfo(): void;
    refushInfo(): void;
    private onTap(e);
    private checkPercentage();
}
declare class RedBagItemRender extends BaseItemRender {
    num: eui.Label;
    nameLabel: eui.Label;
    constructor();
    dataChanged(): void;
}
declare class WarnControl extends BaseSystem {
    static ins(): WarnControl;
    show(str: string, func: Function, thisObj: any, func2?: Function, thisObj2?: any, statu?: string, align?: string): WarnView;
    showDangerWarn(callback: any): void;
    setWarnLabel(str: string, callBackFun: {
        func: Function;
        thisObj: any;
    }, callBackFun2: {
        func2: Function;
        thisObj2: any;
    }, statu?: string, align?: string): WarnView;
    setBuyGoodsWarn(id: number, num?: number): ShopWarnView;
}
/**
 * 危险提示
 */
declare class DangerWarnView extends BaseEuiView {
    bgClose: eui.Rect;
    sureBtn: eui.Button;
    cancelBtn: eui.Button;
    hintState: eui.CheckBox;
    text: eui.Label;
    sureCallback: Function;
    static sureCall: Function;
    cancelCallback: Function;
    static cancelCall: Function;
    constructor();
    static show(sureCallback: any, cancelCallback?: any): void;
    open(sureCallback: any, cancelCallback: any): void;
    onClick(e: any): void;
    onCancel(): void;
    onSure(): void;
    close(): void;
    updateView(): void;
}
/**
 * 道具获取框
 */
declare class ShopWarnView extends BaseEuiView {
    private bgGroup;
    private frame;
    private titleTxt;
    private goodsGroup;
    private itemIcon;
    private price;
    private nameTxt;
    private decBtn;
    private addBtn;
    private dec10Btn;
    private add10Btn;
    private countTxt;
    private totalPrice;
    private buyBtn;
    private topUpBtn;
    private listGroup;
    private gainList;
    private bgClose;
    private gainListGroup;
    private tipGroup;
    private fgClose;
    private _goodsId;
    private _totalNum;
    constructor();
    initUI(): void;
    open(...param: any[]): void;
    close(...param: any[]): void;
    onTap(e: egret.TouchEvent): void;
    private onTouchList(e);
    private buyCallBack(num);
    private onTxtChange(e);
    setData(id: number, num?: number): void;
    private setTotalPrice(num);
}
/**
 * 弹出框
 */
declare class WarnView extends BaseEuiView {
    bgClose: eui.Rect;
    frame: eui.Image;
    body: eui.Image;
    title: eui.Label;
    sureBtn: eui.Button;
    notBtn: eui.Button;
    warnLabel: eui.Label;
    leftGroup: eui.Group;
    icon1: eui.Image;
    label1: eui.Label;
    rightGroup: eui.Group;
    icon2: eui.Image;
    label2: eui.Label;
    cbx: eui.CheckBox;
    fgClose: eui.Button;
    private _isShowWin;
    protected callBack: {
        func: Function;
        thisObj: any;
    };
    protected calback2: {
        func2: Function;
        thisObj2: any;
    };
    constructor();
    initUI(): void;
    open(...param: any[]): void;
    close(...param: any[]): void;
    onTap(e: egret.TouchEvent): void;
    /**
     * 是否显示框
     */
    /**
     * 是否显示框
     */
    isShowWin: boolean;
    setWarnLabel(str: string, callbackFunc: {
        func: Function;
        thisObj: any;
    }, calbackFun2?: {
        func2: Function;
        thisObj2: any;
    }, statu?: string, align?: string): void;
    setBtnLabel(leftTxt?: any, rightTxt?: any): void;
    showUI(icon1?: string, label1?: string, icon2?: string, label2?: string): void;
}
interface Amusement16Config {
    Id: number;
    buyDay: number;
    buyMoney: number;
    index: number;
    awardDesc: string;
    bigAward: RewardVo;
    reward: RewardVo[];
    rechargeid: any;
    showType: number;
    showReward: RewardVo[];
    showYB: RewardVo[];
}
/**
 * 游戏socket接口
 */
declare class SocketConnection extends SocketBase {
    private hasShowReLoginWin;
    private disconnectTime;
    static ins(): SocketConnection;
    connect(host: string, port: number): void;
    onSocketConnected(): void;
    onSocketClose(e: any): void;
    connectError(e: any): void;
    reLogin(): void;
    onFinishCheck(newStatus: number, oldStatus: number): void;
    private sendCheckAccount();
    record(serverInfo: any): void;
    start(): void;
    private showReLoginWin();
    private loadGame();
    private sendConnect(ip, port);
}
/**
 * 共用方法
 */
declare class CommonFun {
    /**
     * 货币不足提示
     */
    static checkCurrency(num: number, currencyType?: number, noTips?: string, backFun?: Function): boolean;
    static checkBackpackCount(enough?: number, type?: number): boolean;
    static checkLevel(needLv: number, showTips?: boolean, checkZs?: boolean): boolean;
    /**1080 1转80级 */
    static backZsAndLv(needLv: number): number[];
    static checkVersion(func?: any): void;
    static viewItemTips(id: number, count?: number): void;
    static dataToDropTag(dropAwards: RewardVo[], dropTags: number[]): RewardVo[];
    static mergeRewardList(rewards: any): any;
    static dropEff(awardDatas: any, charRole: any, fun: any, flag?: number): void;
    static regKFBackFun(method: any, delay?: number): void;
    static getMailAwards(key: any): true | RewardVo[];
    static convertLevel(level: any): string;
    static getTargetValue(showType: any, id?: any): any;
    static showTargetValue(type: any, val: any, maxVal: any): any[];
    static showTaskValue(taskType: any, val: any, maxVal: any): any[];
    static sortAwards(itemDatas: any): void;
    static getMultInfo(multiLimits: any, dayKey?: string, zsLvKey?: string): any;
    static getWorldBossMultNum(id: any): any;
    static flyItemToBag(target: any, item?: any): void;
    static openWin(args: any): void;
    static isCyberPuzzle(target: string): boolean;
    static gotoQuanQia(): boolean;
    static getJobName(index: number): string;
    static andState(list: any): boolean;
    /**
     * 激活升阶
     * @param type    		0-激活 1-升阶
     * @param name    		名字
     * @param imgName 		图片资源
     * @param effName 		动画资源
     * @param spotlight 	聚光灯
     * @param closeCallback 关闭回调
     */
    static show(type: number, name: string, imgName: string, effName?: string, spotlight?: boolean, closeCallback?: Function, mcRotation?: number, mcOffsetY?: number): void;
    static instanceofByName(value: any, className: string): boolean;
    static convertCfgLvToComLv(level: any, zslevel: any): any;
}
declare var generateEUI2: {
    paths: string[];
    skins: any;
};
declare class EgretModify {
    private static exmlsDic;
    static modify(): void;
    private static fixCommonJs2ItemRenderer();
    private static fixDefaultThm();
    private static fixEXMLParser();
    private static fixLoadThm();
    private static fixComponentSkinName();
    private static parseSkinName(skinName);
    private static preParserExml();
    static fixInputText(): void;
    static fixHTML5StageText(): void;
    static fixWebGLRenderContext(): void;
    static fixWebGLRenderTarget(): void;
}
declare class ItemUtils {
    private static itemPoints;
    /**
     * 计算普通装备的评分
     */
    static calculateBagItemScore(item: ItemData, ignore?: number[]): number;
    /**
     * 计算神装&传奇装的评分
     */
    static pointCalNumber(item: ItemConfig): number;
    /**
     * 获取基础属性
     */
    static getBaseAttrData(item: ItemConfig): AttributeData[];
    /**
     * 计算关联属性战力
     */
    static calculateRelatePower(attrs: AttributeData[], role: UnitModel): number;
    /**
     * 关联属性战力计算公式
     */
    static relatePower(attr: AttributeData, role: UnitModel): number;
    static relatePowerEx(attrs: AttributeData[], role: RoleModel): AttributeData[];
    static getQuality(config: ItemConfig): number;
    static getQualityColor(config: ItemConfig): number;
    static getType(config: ItemConfig): number;
    static getSubType(config: ItemConfig): number;
    static getJob(config: ItemConfig): number;
}
declare class LinkUtils {
    static textLink(str: string, data?: any): void;
}
declare class Md5Utils {
    static hex_md5(s: any): string;
    static obj_cntstr(obj: Object, verifyKey?: string, ignoreVerifyKeys?: string[], isASC?: boolean): string;
    static obj_md5(obj: Object, verifyKey?: string, ignoreVerifyKeys?: string[], isASC?: boolean): string;
    static obj_md5_args(obj: Object, verifyKey?: string, addSign?: boolean, encodeKeys?: string[], ignoreVerifyKeys?: string[], isASC?: boolean): string;
}
declare class Sha1Utils {
    static hex_sha1(s: any): string;
}
declare class SoundUtils extends SingleClass {
    static RUN: string;
    static VIEW: string;
    static TASK: string;
    static UPGRADE: string;
    static TRANSFER: string;
    static WEAR: string;
    static CREATE_ROLE: string;
    static STRENGTHEN: string;
    static SMELT: string;
    static SKILL_UPGRADE: string;
    static PLAY_OPEN_VIEW: boolean;
    private _delayTime;
    private _delayStartTime;
    private _runTimeGap;
    private _runTimeStart;
    static ins(): SoundUtils;
    private playRunSound();
    playRun(): void;
    stopRun(): void;
    playEffect(effectName: any): void;
    playBg(bgName: string): void;
    touchBg(): void;
    stopBg(): void;
    setEffectOn(val: boolean): void;
    setBgOn(val: boolean): void;
    delayTime(time: number): void;
}
declare class GameLoadingMJ extends GameLoadingUI {
    protected initUI(): void;
}
declare class GameLoadingQTT extends GameLoadingUI {
    protected initUI(): void;
    setProgress(value: number, tips: string, duration?: number, barTotalWidth?: number): void;
}
interface Amusement18Config {
    Id: number;
    index: number;
    showDrop: RewardVo[];
    yb: number;
    count: number;
    rewards: RewardVo[];
    dbCount: number;
    showType: number;
    item: number;
    itemCount: number;
    relateActivityId: number;
}
declare class GameLoadingZGBY extends GameLoadingUI {
    protected initUI(): void;
    setOwnerDes(content: string): void;
}
declare class LoadingUI extends egret.Sprite {
    private textField;
    constructor();
    private createView();
    setProgress(current: any, total: any): void;
}
declare class ResVersionMgr extends SingleClass {
    resVersionData: any;
    static ins(): ResVersionMgr;
    loadConfig(versionPath: string, complateFunc: Function, complateFuncTarget: any): void;
    registerVersionController(resRoot: string): void;
    private getResVerUrl(resRoot, url);
}
declare class GlobalModel {
    private static urlParam;
    static getHosts(): string;
    static init(pfCfg: any): void;
    /**
     * 获取URL参数
     * 参数包含特殊符号时使用
     */
    static GetSearchParamByName(name: any): string;
    /**
     * 获取URL参数
     */
    static getUrlParamValue(key: any): any;
    /**
     * 设置参数
     */
    static setUrlParamValue(key: any, value: any): void;
    /**
     * 资源服地址
     */
    static resAdd: string;
    /**
     * 需要创角
     */
    static isCreateRole: boolean;
    /**
     * 创角预加载
     */
    static readonly createRolePreload: string;
    /**
     * 用户OpenID
     */
    static openID: string;
    /**
     * 服务器ID
     */
    static srvid: number;
    /**
     * 合服服务器ID
     */
    static mainSrvid: number;
    /**
     * 服务器名称
     */
    static srvname: string;
    /**
     * 服务器IP
     */
    static serverIP: string;
    /**
     * 服务器端口
     */
    static serverPort: number;
    /**
     * 平台昵称
     */
    static nickName: string;
    /**
     * 客服端版本号
     */
    static gameVersion: number;
    /**
     * 游戏ID
     */
    static gameId: number;
    static appid: string;
    /**
     * 著作权人描述
     */
    static readonly ownerDes: string;
    /**
     * 著作权人描述 和忠告换位置
     */
    static readonly chOwnerDesPos: boolean;
    /**
     * 是否开放一键熔炼
     */
    static readonly oneKeySmelt: boolean;
    /**
     * 货币类型
     */
    static readonly currentType: string;
    /**
     * 渠道ID
     */
    static readonly channelId: string;
    /**
     * 提审状态
     */
    static readonly isAuditState: boolean;
    /**
     * APP版本号
     */
    static readonly appVersion: string;
    /**
     * 提审版本号
     */
    static readonly auditVersion: string;
    /**
     * 1元购后是否调用悬浮窗
     */
    static readonly openTab: boolean;
    /**
     * 平台ID
     */
    static pfid: string;
    /**
     * 平台
     */
    static pf: string;
    /**
     * 网页
     */
    static readonly isWeb: boolean;
    /**
     * 创建账号时间
     */
    static createAccountTime: number;
    /**
     * 角创建色时间(秒)
     */
    static createActorTime: number;
    /**
     * 角色登陆时间
     */
    static actorLoginTime: number;
    /**
     * 设置加载进度 & 描述
     */
    static setLoadProgress(n: number, str: string, duration?: number): void;
    /**
     * 检查版本号
     */
    static checkClientVersion(loadGame?: Function): void;
    /**
     * 主UI显示状态
     */
    static readonly mianUIState: string;
    /**
     * 游戏皮肤类型
     */
    static readonly skinType: string;
    /**
     * 屏蔽丑资源
     */
    static readonly changeUglyRes: boolean;
    /**
     * 职业显示UI
     */
    static readonly jobUIState: boolean;
    /**
     * 身体盖住武器
     */
    static bodyCoverWeapon(job: number): boolean;
    /**
     * 衣服绑定武器
     */
    static readonly bodyBindWeapon: boolean;
    /**
     * 武器绑定衣服
     */
    static readonly weaponBindBody: boolean;
    /**
     * 时装不显示基础装备
     */
    static readonly onlyShowDress: boolean;
    /**
     * 充值比例
     */
    static readonly chargeRate: number;
    /**
     * 开放音效
     */
    static readonly openSound: boolean;
    /**
     * 开启补丁
     */
    static readonly openPatch: boolean;
    /**
     * 显示分享
     */
    static readonly showShare: boolean;
    /**
     * 显示关注
     */
    static readonly showFocus: boolean;
    /**
     * 系统
     */
    static readonly os: string;
    /**
     * 基础会员等级
     */
    static readonly baseVipLevel: number;
    /**
     * 角色数量
     */
    static readonly roleNum: number;
    /**
     * 主UI聊天显示数量
     */
    static readonly chatShowNum: number;
    /**
     * 主UI功能Icon位置
     */
    static readonly iconsIsLeft: boolean;
    /**
     * 是否海外版本
     */
    static readonly isHw: boolean;
    /**
     * 是否新加坡版本
     */
    static readonly isXJP: boolean;
    /**
     * SDK域名
     */
    static readonly sdkDomain: string;
    /**
     * GM后台域名
     */
    static readonly gmDomain: string;
    /**
     * 显示微端下载
     */
    static readonly showMicroclientDownload: boolean;
    /**
     * 是否微端登陆
     */
    static readonly isMicroclient: boolean;
    /**
     * 加载界面配置
     */
    static readonly loadingClass: string;
    /**
     * 进入游戏是否播放背景音乐
     */
    static readonly playGameMusic: string;
    /**
     * 是否为QQ大厅 平台
     */
    static readonly IsQQHall: boolean;
    /**
     * 渠道参数(pfCfg)配置
     */
    static readonly pfArgs: any;
    /**
     * 渠道数据
     */
    static readonly pfData: any;
    /**
     * QuickCode兼容一皮多游戏
     */
    static readonly QuickH5ProductCode: string;
    /**
     * QuickKey兼容一皮多游戏
     */
    static readonly QuickH5ProductKey: string;
    /**
     * Quick切换刷新开关
     */
    static readonly openQuickReload: boolean;
    /**
     * 是否Https
     */
    static readonly isHttps: boolean;
    /**
     * 是否启用wss协议
     */
    static readonly useWss: boolean;
    /**
     * 自己玩过的区服数量
     */
    static serverNumberPlyer: number;
    /**
     * 是否自动进入
     */
    static autoEnterGame: number;
    /**
     * 兼容不区分渠道共用加载图片
     */
    static notdifferentiate: any;
    /**
     * 返回服务器菜单风格的渠道id列表
     */
    static readonly serverStyle: Array<any>;
    /**
     * 是否混淆配置表名
     */
    static readonly isMangleCfgWeb: boolean;
    /**
     * 实名认证状态
     */
    /**
     * 实名认证状态
     */
    static realNameState: any;
    /**
     * 客服端玩家IP
     */
    static clientPlayerIp: string;
    /**
     * 选择充值方式
     */
    static readonly showPayWay: boolean;
    /**
     * 开启客服端错误日志打点
     */
    static readonly openClientErrorLog: boolean;
    /**
     * 获取计费id
     * 规则1:os和pfid为“” 不区分系统和平台，通过包和档位确认计费点
     * 规则2:packageName和pfid为“” 不区分包和平台，通过系统和档位确认计费点
     * 规则3:全部匹配
     * @param pfid 平台id
     * @param items 计费id
     * @param osType 系统类型
     * @param packageName 包名
     */
    static productIdByItems(pfid: any, items: any, osType: any, packageName?: string): string;
}
declare class PHPConfig {
    static VERIFY_KEY: string;
    static readonly GET_PATCH_URL: string;
    static readonly SET_GM_REPORT: string;
    static readonly GET_CHANNEL_URL: string;
    static readonly REGISTER_LOGIN_URL: string;
    static readonly GET_SERVER_URL: string;
    static readonly SET_USER_URL: string;
    static readonly SET_ACTOR_INFO: string;
    static readonly MAKE_ORDER_URL: string;
    static readonly SET_ROLE_INFO: string;
    static readonly SET_LANZHUAN_INFO: string;
    static requestPhpData(url: string, params: any, completeListener?: Function, thisObject?: any, errorListener?: Function, method?: string, responseType?: string, ...argArray: any[]): void;
}
declare class Platform7724H5 extends PlatformBase {
    private SbPulSdk;
    /**
     * 初始化SDK
     */
    SDKInitNative(): void;
    /**
     * 是否需要登录
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * SDK分享
     */
    SDKShowShare(): void;
    /**
     * SDK二维码
     */
    SDKShowQRCode(): void;
}
declare class Platform99KH5 extends PlatformBase {
    private TPGAME_SDK;
    /**
     * 初始化SDK
     */
    SDKInitNative(): void;
    /**
     * 是否需要登录
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    private setData(params, isCreate?, isUpLv?);
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * SDK二维码
     */
    SDKShowQRCode(): void;
}
/**
 * AiwanH5
 */
declare class PlatformAiwanH5 extends PlatformBase {
    AiwanSDK: any;
    /**
     * 初始化SDK
     */
    SDKInitNative(): void;
    /**
     * SDK需要登陆
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * 登录
     */
    SDKLoginNative(): void;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    private setData(params, isCreate?, isUpLv?);
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * SDK登出
     */
    SDKLogoutNative(): void;
    /**
     * SDK回调
     */
    nativeCallback(msg: any): void;
}
/**
 * AiwanH5H5
 */
declare class PlatformAiwanH5WD extends PlatformBase {
    AiwanSDK: any;
    /**
     * 初始化SDK
     */
    SDKInitNative(): void;
    /**
     * SDK需要登陆
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * 登录
     */
    SDKLoginNative(): void;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    private setData(params, isCreate?, isUpLv?);
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * SDK登出
     */
    SDKLogoutNative(): void;
    SDKShowLogout(): boolean;
    /**
     * SDK回调
     */
    nativeCallback(msg: any): void;
}
/**
 * 类型19活动
 */
interface Amusement19Config {
    Id: number;
    index: number;
    range: number[];
    condition: number;
    rewards: {
        type: number;
        id: number;
        count: number;
    }[];
    showType: number;
    activityID: number;
}
/**
 * Braintree
 */
declare class PlatformBraintree extends PlatformBase {
    payObj: any;
    PayWay: string;
    httpRequest: egret.HttpRequest;
    httpRequestUrl: HrInfo[];
    isComplete: boolean;
    /**
     * 初始化SDK
     */
    SDKInitNative(): void;
    /**
     * SDK需要登陆
     */
    SDKIsNeedLoginNative(): boolean;
    SDKLoginNative(): void;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    getRequest(urlStr: string): any;
    sendReportUrl(url: any, params: any, method: any): void;
    private onGetComplete(event);
    private onGetIOError(event);
    GetMakeOrderSdkArgs(params: any): string;
    upperCase(str: string): string;
    /**返回拼接好的数据 */
    getUrl(obj: any): string;
    /**
     * 获取加密
     */
    getSign(obj: any): string;
    /**
     * 渠道计费点
     */
    private GetChannelItemId(itemid);
    /**
     * SDK支付
     */
    weiChatPay(params: any): void;
    /**
     * SDK回调
     */
    nativeCallback(msg: any): void;
}
declare class PlatformBZ extends PlatformBase {
    private BZ_SDK;
    /**
     * 初始化SDK
     */
    SDKInitNative(): void;
    /**
     * 是否需要登录
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * 登录
     */
    SDKLoginNative(): void;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    private setData(params, isCreate?, isUpLv?);
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * SDK登出
     */
    SDKLogoutNative(): void;
    /**
     * 显示切换账号
     */
    SDKShowLogout(): boolean;
    /**
     * SDK回调
     */
    nativeCallback(msg: any): void;
}
declare class PlatformBZH5 extends PlatformBase {
    private BZ_SDK;
    /**
     * 初始化SDK
     */
    SDKInitNative(): void;
    /**
     * 是否需要登录
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * 登录
     */
    SDKLoginNative(): void;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    private setData(params, isCreate?, isUpLv?);
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * SDK登出
     */
    SDKLogoutNative(): void;
    /**
     * 显示切换账号
     */
    SDKShowLogout(): boolean;
    /**
     * SDK回调
     */
    nativeCallback(msg: any): void;
}
/**
 * CandyH5
 */
declare class PlatformCandyH5 extends PlatformBase {
    CYSDK: any;
    /**
     * 初始化SDK
     */
    SDKInitNative(): void;
    /**
     * SDK需要登陆
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * 登录
     */
    SDKLoginNative(): void;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    private setData(params, isCreate?, isUpLv?);
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    getItemID(itemid: any): string;
    /**
     * SDK回调
     */
    nativeCallback(msg: any): void;
}
/**
 * CGamex
 */
declare class PlatformCGamex extends PlatformBase {
    /**
     * SDK需要登陆
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    private setData(params, isCreate?, isUpLv?);
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * SDK回调
     */
    nativeCallback(msg: any): void;
}
/**
 * ChengZi
 */
declare class PlatformChengZi extends PlatformBase {
    /**
     * SDK需要登陆
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    setData(params: any, isCreate?: boolean, isUpLv?: boolean): void;
    /**
     * SDK下单参数
     */
    GetMakeOrderSdkArgs(params: any): string;
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * 渠道计费点
     */
    private GetChannelItemId(itemid);
    /**
     * SDK回调
     */
    nativeCallback(msg: any): void;
}
/**
 * Ugame
 */
declare class PlatformGame8UH5 extends PlatformBase {
    /**
     * SDK需要登陆
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
    * SDK创建角色
    */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    private setData(params, isCreate?, isUpLv?);
    /**
     * SDK下单参数
     */
    GetMakeOrderSdkArgs(params: any): string;
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * 渠道计费点
     */
    private GetChannelItemId(itemid);
    /**
     * facebook礼包
     */
    SDKStartForGift(): void;
    /**
     * 活动
     */
    SDKFaceStartGift(): void;
    /**
     * SDK回调
     */
    nativeCallback(msg: any): void;
}
declare class PlatformHaoWanBaH5 extends PlatformBase {
    url: string;
    /**
     * 初始化SDK
     */
    SDKInitNative(): void;
    /**
     * 是否需要登录
     */
    SDKIsNeedLoginNative(): boolean;
    /**返回拼接好的数据 */
    getUrl(obj: any): string;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * SDK回调
     */
    nativeCallback(msg: any): void;
}
/**
 * 华为
 */
declare class PlatformHuaWei extends PlatformBase {
    /**
     * SDK需要登陆
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * SDK回调
     */
    nativeCallback(msg: any): void;
}
declare class PlatformHuoSdk extends PlatformBase {
    /**
     * SDK需要登陆
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    private setData(params, isCreate?, isUpLv?);
    getRoleInfo(params: any, roleType: any): any;
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * 切换账号
     */
    SDKLogoutNative(): void;
    /**
     * SDK回调
     */
    nativeCallback(msg: any): void;
}
declare class PlatformHuoSdkH5 extends PlatformBase {
    private HuoSdk;
    /**
     * 初始化SDK
     */
    SDKInitNative(): void;
    /**
     * 是否需要登录
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    private setData(params, isCreate?, isUpLv?);
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * SDK登出
     */
    SDKLogoutNative(): void;
    /**
     * SDK回调
     */
    nativeCallback(msg: any): void;
}
/**
 * Jianwan
 */
declare class PlatformJianwan extends PlatformBase {
    /**
     * SDK需要登陆
     */
    SDKIsNeedLoginNative(): boolean;
    SDKLoginNative(): void;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
    * SDK创建角色
    */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    private setData(params, isCreate?, isUpLv?);
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * SDK回调
     */
    nativeCallback(msg: any): void;
}
/**
 * JianwanH5
 */
declare class PlatformJianwanH5 extends PlatformBase {
    DataSdk: any;
    /**
     * 初始化SDK
     */
    SDKInitNative(): void;
    /**
     * SDK需要登陆
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * 登录
     */
    SDKLoginNative(): void;
    /**
    * SDK创建角色
    */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    private setData(params, isCreate?, isUpLv?);
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * SDK登出
     */
    SDKLogoutNative(): void;
    /**
     * SDK回调
     */
    nativeCallback(msg: any): void;
}
declare class PlatformJiuYuanH5 extends PlatformBase {
    private xgGame;
    /**
     * 初始化SDK
     */
    SDKInitNative(): void;
    /**
     * 是否需要初始化
     */
    SDKIsNeedInit(): boolean;
    /**
     * 是否需要登录
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * 登录
     */
    SDKLoginNative(): void;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    private setData(params, isCreate?, isUpLv?);
    /**
     * 渠道上报等级
     */
    private GetChannelLevel(channelId, level, zsLevel);
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    ksort(vm: any, inputArr: any, sort_flags?: any): {};
    getUrl(obj: any): string;
    signData(data: any, game_key: any): string;
    /**
     * SDK登出
     */
    SDKLogoutNative(): void;
    /**
     * SDK回调
     */
    nativeCallback(msg: any): void;
    getStatusHeight(): number;
    /**
     * SDK分享
     */
    SDKShowShare(): void;
}
/**
 * 九尊SDK JAR
 */
declare class PlatformJiuZun extends PlatformBase {
    private loginComplete;
    /**
     * SDK需要登陆
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆
     */
    SDKLoginNative(args?: any): void;
    /**
     * SDK自定义登陆界面
     */
    SDKHasLoginScene(): any;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
    * SDK创建角色
    */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    private setData(params, isCreate?, isUpLv?);
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * SDK回调
     */
    nativeCallback(msg: any): void;
    /**
     * 显示切换账号
     */
    SDKShowLogout(): boolean;
    /**
     * 显示切换账号
     */
    SDKLogoutNative(): void;
}
declare class PlatformJiuZunH5 extends PlatformBase {
    private JiuZunSDK;
    /**
     * 初始化SDK
     */
    SDKInitNative(): void;
    /**
     * 是否需要登录
     */
    SDKIsNeedLoginNative(): boolean;
    /**返回拼接string */
    private toolStr(obj, key);
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    private setData(params, isCreate?, isUpLv?);
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * SDK分享
     */
    SDKShowShare(): void;
    /**
     * SDK关注
     */
    SDKShowQRCode(): void;
}
declare class PlatformKu25H5 extends PlatformBase {
    private Ku25Sdk;
    /**
     * 初始化SDK
     */
    SDKInitNative(): void;
    /**
     * 是否需要登录
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    private setData(params, isCreate?, isUpLv?);
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
}
declare class PlatformLuoTuoH5 extends PlatformZwH5 {
    url: string;
    /**
     * 获取加密
     */
    getSign(obj: any): string;
    payOnComplete(event: egret.Event): void;
}
/**
 * Orange
 */
declare class PlatformOrange extends PlatformBase {
    /**
     * SDK需要登陆
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * 返回拼接好的数据
     */
    getUrl(obj: any): string;
    /**
     * 获取加密
     */
    getSign(obj: any): string;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    setData(params: any, isCreate?: boolean, isUpLv?: boolean): void;
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    upperCase(str: string): string;
    /**
     * 渠道计费点
     */
    private GetChannelItemId(itemid);
    /**
     * SDK回调
     */
    nativeCallback(msg: any): void;
}
/**
 * OrangeH5
 */
declare class PlatformOrangeH5 extends PlatformBase {
    private SbPulSdk;
    private baseGKLeve;
    /**
     * 初始化SDK
     */
    SDKInitNative(): void;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * SDK埋点
     */
    SDKSetDataNative(params: any): void;
    /**
     * SDK登出
     */
    SDKLogoutNative(): void;
}
/**
 * QQ小游戏
 */
declare class PlatformQQMiniGame extends PlatformBase {
    private startTime;
    SDKInitNative(): void;
    SDKIsNeedLoginNative(): boolean;
    SDKLoginNative(): void;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK下单参数
     */
    GetMakeOrderSdkArgs(params: any): string;
    SDKPayNative(params: any): void;
}
/**
 * Quick
 */
declare class PlatformQuick extends PlatformBase {
    /**
     * SDK需要登陆
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
    * SDK创建角色
    */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    private setData(params, isCreate?, isUpLv?);
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * SDK回调
     */
    nativeCallback(msg: any): void;
}
declare class PlatformQuickH5 extends PlatformBase {
    private QuickSDK;
    /**
     * 初始化SDK
     */
    SDKInitNative(): void;
    /**
     * 是否需要初始化
     */
    SDKIsNeedInit(): boolean;
    /**
     * 是否需要登录
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * 登录
     */
    SDKLoginNative(): void;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    private setData(params, isCreate?, isUpLv?);
    /**
     * 渠道上报等级
     */
    private GetChannelLevel(channelId, level, zsLevel);
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * 渠道计费点
     */
    private GetChannelItemId(channelId, itemid);
    /**
     * SDK登出
     */
    SDKLogoutNative(): void;
    /**
     * SDK回调
     */
    nativeCallback(msg: any): void;
}
declare class PlatformQuickH5TY extends PlatformBase {
    private QuickSDK;
    /**
     * 初始化SDK
     */
    SDKInitNative(): void;
    /**
     * 是否需要初始化
     */
    SDKIsNeedInit(): boolean;
    /**
     * 是否需要登录
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * 登录
     */
    SDKLoginNative(): void;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    private setData(params, isCreate?, isUpLv?);
    /**
     * 渠道上报等级
     */
    private GetChannelLevel(channelId, level, zsLevel);
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * 渠道计费点
     */
    private GetChannelItemId(channelId, itemid);
    /**
     * SDK登出
     */
    SDKLogoutNative(): void;
    /**
     * SDK回调
     */
    nativeCallback(msg: any): void;
    realNameCallBack(data: any): void;
    /**
     * 显示切换账号
     */
    SDKShowLogout(): boolean;
    getStatusHeight(): number;
}
declare class PlatformQuickH5WD extends PlatformBase {
    private QuickSDK;
    /**
     * 初始化SDK
     */
    SDKInitNative(): void;
    /**
     * 是否需要登录
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * 登录
     */
    SDKLoginNative(): void;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    private setData(params, isCreate?, isUpLv?);
    /**
     * 渠道上报等级
     */
    private GetChannelLevel(channelId, level, zsLevel);
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * 渠道计费点
     */
    private GetChannelItemId(channelId, itemid);
    /**
     * SDK登出
     */
    SDKLogoutNative(): void;
    /**
     * SDK回调
     */
    nativeCallback(msg: any): void;
}
declare class PlatformQunHeiH5 extends PlatformBase {
    private QhSdk;
    /**
     * 初始化SDK
     */
    SDKInitNative(): void;
    /**
     * 是否需要登录
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    private setData(params, isCreate?, isUpLv?);
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * SDK分享
     */
    SDKShowShare(): void;
    /**
     * SDK二维码
     */
    SDKShowQRCode(): void;
}
declare class PlatformQuTouTiaoCPL extends PlatformBase {
    /**
     * 是否需要登录
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * 弹出SDK悬浮窗并进入任务tab
     */
    SDKTapExecute(): void;
}
declare class PlatformQuTouTiaoH5 extends PlatformBase {
    private QttSDK;
    /**
     * 是否需要登录
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * 弹出SDK悬浮窗并进入任务tab
     */
    SDKTapExecute(): void;
}
declare class PlatformSdwH5 extends PlatformBase {
    private SdwSDK;
    /**
     * 初始化SDK
     */
    SDKInitNative(): void;
    /**
     * 是否需要登录
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    private setData(params, isCreate?);
    /**
     * SDK下单参数
     */
    GetMakeOrderSdkArgs(params: any): string;
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * SDK二维码
     */
    SDKShowQRCode(): void;
}
/**
 * SmileGamesH5
 */
declare class PlatformSmileGamesH5 extends PlatformBase {
    private gameUrl;
    SDKInitNative(): void;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    private getUrlData(urlStr);
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
}
declare class PlatformSoeasyH5 extends PlatformBase {
    private ZmSdk;
    /**
     * 初始化SDK
     */
    SDKInitNative(): void;
    /**
     * 是否需要登录
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    private setData(params, isCreate?, isUpLv?);
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * SDK回调
     */
    nativeCallback(msg: any): void;
}
/**
 * 测试平台
 */
declare class PlatformTest extends PlatformBase {
    SDKInitNative(): void;
    SDKIsNeedLoginNative(): boolean;
    SDKLoginNative(): void;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**显示超级会员 */
    showSuperVip(): boolean;
    /**
     * SDK下单参数
     */
    GetMakeOrderSdkArgs(params: any): string;
    SDKPayNative(params: any): void;
    SDKMiniAuditVer(): number;
    SDKShowShare(param: any): void;
    /** 是否显示分享入口 */
    isShowSharePortalIcon(): boolean;
    /** 邀请人数据 */
    getInviterInfo(): {
        inviterId: number;
        inviterSid: number;
    };
}
declare class PlatformTongChengH5 extends PlatformBase {
    private TCYSDK;
    /**
     * 初始化SDK
     */
    SDKInitNative(): void;
    /**
     * 是否需要登录
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * 登录
     */
    SDKLoginNative(): void;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    private setData(params, isCreate?, isUpLv?);
    getAES(str: string): any;
    getAesString(data: any, key: any, iv: any): any;
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * SDK登出
     */
    SDKLogoutNative(): void;
}
/**
 * UC(九游)
 */
declare class PlatformUc extends PlatformBase {
    /**
     * SDK需要登陆
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
    * SDK创建角色
    */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    private setData(params, isCreate?, isUpLv?);
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * SDK回调
     */
    nativeCallback(msg64: any): void;
}
/**
 * UC小游戏
 */
declare class PlatformUCMiniGame extends PlatformBase {
    static systemInfo: any;
    SDKInitNative(): void;
    /**
     * 小游戏提审版本
     */
    SDKMiniAuditVer(): any;
    SDKIsNeedLoginNative(): boolean;
    SDKLoginNative(): void;
    static ucLoginFail(): void;
    /**
     * 获取玩家OpenId
     * @param loginCode
     */
    static getUserOpenId(loginCode: string): void;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK是否支持支付
     */
    CheckSupportRecharge(): boolean;
    SDKPayNative(params: any): void;
    private compareVersion(v1, v2);
    getStatusHeight(): number;
}
/**
 * Ugame
 */
declare class PlatformUgame extends PlatformBase {
    /**
     * SDK需要登陆
     */
    SDKIsNeedLoginNative(): boolean;
    /**返回拼接好的数据 */
    getUrl(obj: any): string;
    /**
     * 获取加密
     */
    getSign(obj: any): string;
    /**
     * SDK登陆
     */
    SDKLoginNative(args?: any): void;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    /**创建类型*/
    setData(type: number): void;
    /**
     * SDK下单参数
     */
    GetMakeOrderSdkArgs(params: any): string;
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**显示超级会员 */
    showSuperVip(): boolean;
    upperCase(str: string): string;
    /**
     * 渠道计费点
     */
    private GetChannelItemId(itemid);
    /**
     * facebook礼包
     */
    SDKStartForGift(): void;
    /**
     * 活动
     */
    SDKFaceStartGift(): void;
    /**
     * 提审
     */
    SDKMiniAuditVer(): 1 | 0;
    /**
     * SDK回调
     */
    nativeCallback(msg: any): void;
}
/**
 * UgameH5
 */
declare class PlatformUgameH5 extends PlatformBase {
    /**
     * 初始化SDK
     */
    SDKInitNative(): void;
    /**
     * 是否需要登录
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * 获取加密
     */
    getSign(obj: any): string;
    /**
     * 返回拼接好的数据
     */
    getUrl(obj: any): string;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    /**
     * sdk 上报数据
     */
    setData(type: number, params: any): void;
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * 显示超级会员
     */
    showSuperVip(): boolean;
    upperCase(str: string): string;
    /**
     * 渠道计费点
     */
    private GetChannelItemId(itemid);
}
/**
 * 游趣
 */
declare class PlatformWmsdH5 extends PlatformBase {
    /**
     * 初始化SDK
     */
    SDKInitNative(): void;
    /**
     * SDK需要登陆
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
}
/**
 * 微信
 */
declare class PlatformWx extends PlatformBase {
    /**
     * SDK需要登陆
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK自定义登陆界面
     */
    SDKHasLoginScene(): any;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * SDK回调
     */
    nativeCallback(msg: any): void;
}
/**
 * 活动类型1
 */
interface Amusement1Config {
    Id: number;
    index: number;
    level: number;
    zslevel: number;
    wingLv: number;
    zzLv: number;
    lhLv: number;
    szLv: number;
    tjPower: number;
    equipPower: number;
    showType: number;
    total: number;
    rewards: RewardVo[];
    consumeYuanbao: number;
    huoyanRingLv: number;
    lunhLv: number;
    zhanlingLv: number;
    skillCount: number;
    shenwuLv: number;
    power: number;
    zhuzaiScore: number;
    fuwenPower: number;
    aexringPower: number;
}
/**
 * 小7海外
 */
declare class PlatformX7syHW extends PlatformX7sy {
}
declare class PlatformXcH5 extends PlatformBase {
    /**只有一个init 方法 返回 sdk 实例 */
    private XCVGAMEH5SDKObj;
    /**sdk实例 */
    private XCVGAMEH5SDK;
    /**
     * 初始化SDK
     */
    SDKInitNative(): void;
    /**
     * 是否需要登录
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * SDK分享
     */
    SDKShowShare(): void;
    /**
     * SDK二维码关注
     */
    SDKShowQRCode(): void;
    /**
     * SDK退出
     */
    SDKExitNative(): void;
}
declare class PlatformXJH5 extends PlatformBase {
    private XJGAME_SDK;
    private baseLeve;
    /**
     * 初始化SDK
     */
    SDKInitNative(): void;
    /**
     * 是否需要登录
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    private setData(params, isCreate?, isUpLv?);
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * SDK登出
     */
    SDKLogoutNative(): void;
}
declare class PlatformXYouH5 extends PlatformBase {
    private XYOUSDK;
    /**
     * 初始化SDK
     */
    SDKInitNative(): void;
    /**
     * 是否需要登录
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    private setData(params, isCreate?, isUpLv?);
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * SDK回调
     */
    nativeCallback(msg: any): void;
}
/**
 * YiYou
 */
declare class PlatformYiYou extends PlatformBase {
    /**
     * SDK需要登陆
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
    * SDK创建角色
    */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    private setData(params, isCreate?, isUpLv?);
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * SDK回调
     */
    nativeCallback(msg: any): void;
}
/**
 * 易接
 */
declare class PlatformYj extends PlatformBase {
    /**
     * SDK需要登陆
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    private setData(params, isCreate?, isUpLv?);
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * SDK回调
     */
    nativeCallback(msg: any): void;
}
/**
 * 游趣
 */
declare class PlatformYouQuH5 extends PlatformBase {
    private H5And;
    /**
     * 初始化SDK
     */
    SDKInitNative(): void;
    /**
     * SDK需要登陆
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    private setData(params, isCreate?, isUpLv?);
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
}
/**
 * 游趣IOS
 */
declare class PlatformYouQuIOS extends PlatformBase {
    /**
     * SDK需要登陆
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
    * SDK创建角色
    */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    private setData(params, isCreate?, isUpLv?);
    /**
     * SDK下单参数
     */
    GetMakeOrderSdkArgs(params: any): string;
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * 渠道计费点
     */
    private GetChannelItemId(itemid);
    /**
     * SDK回调
     */
    nativeCallback(msg: any): void;
}
declare class PlatformYxH5 extends PlatformBase {
    private YxSDK;
    /**
     * 初始化SDK
     */
    SDKInitNative(): void;
    /**
     * 是否需要登录
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    /**
     * 上报数据类型
     * dataType 上报类型,1(选择服务器)，2(创建角色)，3(进入游戏)、4(等级提升)、5(退出游戏)
     */
    private setData(params, isCreate?, isUpLv?, dataType?);
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
}
/**
 * 应用宝
 */
declare class PlatformYyb extends PlatformBase {
    private loginComplete;
    /**
     * SDK需要登陆
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆
     */
    SDKLoginNative(args?: any): void;
    /**
     * SDK自定义登陆界面
     */
    SDKHasLoginScene(): any;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * SDK回调
     */
    nativeCallback(msg: any): void;
    /**
     * 打开应用宝平台ICO特定的功能界面
     */
    SDKShowImmersiveIconNative(params: any): void;
    /**
     * 显示切换账号
     */
    SDKShowLogout(): boolean;
    /**
     * 游戏内微信分享图片
     */
    SDKShowShare(params?: any): void;
}
declare class ReportYybPayData {
    private static _ins;
    private httpRequest;
    private httpRequestUrl;
    private isComplete;
    static getIns(): ReportYybPayData;
    constructor();
    reportUrl(url: string, params: any, method?: string): void;
    private sendReportUrl();
    private onGetComplete(event);
    private onGetIOError(event);
}
declare class PlatformZjH5 extends PlatformBase {
    private SbPulSdk;
    /**
     * 初始化SDK
     */
    SDKInitNative(): void;
    /**
     * 是否需要登录
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * SDK埋点
     */
    SDKSetDataNative(params: any): void;
    /**
     * SDK登出
     */
    SDKLogoutNative(): void;
    /**
     * 调用开通QQ蓝钻
     */
    SDKTapExecute(): void;
    /**
     * 调用PHP后台获取玩家QQ蓝钻信息
     */
    private GetUserLzInfo();
}
declare class PlatformZSH5 extends PlatformBase {
    private BZ_SDK;
    /**
     * 初始化SDK
     */
    SDKInitNative(): void;
    /**
     * 是否需要登录
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * 登录
     */
    SDKLoginNative(): void;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    private setData(params, isCreate?, isUpLv?);
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * SDK登出
     */
    SDKLogoutNative(): void;
    /**
     * 显示切换账号
     */
    SDKShowLogout(): boolean;
    /**
     * SDK回调
     */
    nativeCallback(msg: any): void;
}
declare class PlatformZSWDH5 extends PlatformBase {
    private BZ_SDK;
    /**
     * 初始化SDK
     */
    SDKInitNative(): void;
    /**
     * 是否需要登录
     */
    SDKIsNeedLoginNative(): boolean;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * 登录
     */
    SDKLoginNative(): void;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    private setData(params, isCreate?, isUpLv?);
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * SDK登出
     */
    SDKLogoutNative(): void;
    /**
     * 显示切换账号
     */
    SDKShowLogout(): boolean;
    /**
     * SDK回调
     */
    nativeCallback(msg: any): void;
}
/**
 * 类型20活动
 */
interface Amusement20Config {
    Id: number;
    index: number;
    openTime: number;
    duration: number;
    rankReward: {
        start: number;
        endi: number;
        head: string;
        context: string;
        reward: {
            type: number;
            id: number;
            count: number;
        }[];
    }[];
    enterTime: number;
    monsterId: {
        id: number;
        monster: string;
        scale: number;
    };
    showReward: {
        type: number;
        id: number;
        count: number;
    }[];
}
declare class PlatformZwWxMini extends PlatformBase {
    url: string;
    id: string;
    channel_id: string;
    token: string;
    appId: string;
    private sdkBaseInfo;
    private systemInfo;
    private startTime;
    private wxsubFun;
    private hasPopSub;
    private shareCallback;
    private shareQuery;
    constructor();
    SDKMiniAuditVer(): number;
    isShowMiniAccountJumpPortalIcon(): boolean;
    miniAccountJumpPortalIconTap(): void;
    /**显示超级会员 */
    showSuperVip(): boolean;
    /**
     * 初始化SDK
     */
    SDKInitNative(): void;
    private getSkdBaseData();
    private onGetSdkBaseInfo(event);
    /**
     * SDK是否支持支付
     */
    CheckSupportRecharge(): boolean;
    isHideRechargeShow(): boolean;
    /**
     * 是否需要登录
     */
    SDKIsNeedLoginNative(): boolean;
    SDKLoginNative(): void;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    private setData(params, isCreate?, isUpLv?);
    onGetComplete(event: egret.Event): void;
    onGetIOError(data: any): void;
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    payOnComplete(event: egret.Event, payData: any): void;
    payIOError(data: any): void;
    /**
     * 跳转小程序
     */
    jumpXcx(appid: string, pathUrl: string, param: string): void;
    shareXcx(title: string, imageUrl: string, desc: string): void;
    /** 是否显示分享入口 */
    isShowSharePortalIcon(): boolean;
    /**分享 */
    SDKShowShare(param: any): void;
    shareComplete(event: any): void;
    loginOnComplete(event: egret.Event): void;
    loginIOError(error: any): void;
    /**
     * SDK回调
     */
    nativeCallback(msg: any): void;
    getStatusHeight(): number;
    compareVersion(v1: any, v2: any): number;
    subscribeMessage(): void;
    getSubscribeData(event: any): void;
    /** 邀请人数据 */
    getInviterInfo(): {
        inviterId: number;
        inviterSid: number;
    };
}
declare class PlatformZwWXMiniH5 extends PlatformBase {
    url: string;
    SDKMiniAuditVer(): number;
    /**
     * 初始化SDK
     */
    SDKInitNative(): void;
    /**
     * 是否需要登录
     */
    SDKIsNeedLoginNative(): boolean;
    /**显示超级会员 */
    showSuperVip(): boolean;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): string;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
  * SDK角色升级
  */
    SDKUserUpgradeNative(params: any): void;
    private setData(params, isCreate?, isUpLv?);
    onGetComplete(event: egret.Event): void;
    onGetIOError(data: any): void;
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    payOnComplete(event: egret.Event): void;
    payIOError(data: any): void;
    /**
     * 获取加密
     */
    getSign(obj: any): string;
}
declare class ReportData {
    private static _ins;
    private httpRequest;
    private httpRequestUrl;
    private isComplete;
    static getIns(): ReportData;
    constructor();
    /**
     * 上报用户玩过区
     */
    reportPlayedServer(): void;
    /**
     * 上报用户创角信息
     */
    reportActorInfo(): void;
    /**
     * 上报用户信息
     */
    reportRoleInfo(params?: any, enterGame?: boolean, upLeve?: boolean, create?: boolean): void;
    /**
     * 上报聊天信息
     * 1.世界
     * 2.帮会
     * 3.好友
     */
    reportChatInfo(msgType: number, content: string, toActorId?: number, toActorName?: string, toChannel?: string): void;
    /**
     * 区间打点
     */
    reportIntervalPoint(time: number, typeId: number): void;
    /**
     * 上报特殊渠道
     */
    reportChannelData(num: number, type: number): void;
    /**
     * 请求微端下载奖励
     */
    reportMicroclientReward(): void;
    /**
     * 运营后台新功能，打点上报
     */
    reportDoPoint(doPointType: number): void;
    /**
     * 前端错误打点
     */
    reportClientErrorLog(type: string, desc: string): void;
    /**
     * 登录打点
     */
    reportDoPointLogin(): void;
    reportUrl(url: string, params: any, method?: string): void;
    private sendReportUrl();
    private onGetComplete(event);
    private onGetIOError(event);
}
declare class HrInfo {
    url: string;
    params: any;
    method: string;
    sendCount: number;
}
declare class SDKManager extends SingleClass {
    /**打点次数 只打一次 */
    private doPointTimes;
    static ins(): SDKManager;
    private platform;
    /**
     * 初始化
     */
    Init(): void;
    /**
     * 小游戏提审版本
     */
    SDKMiniAuditVer(): number;
    /**
     * 是否需要初始化
     */
    SDKIsNeedInit(): false | void;
    SDKInitComplete(): void;
    /**
     * 注册监听
     */
    private static addNativeCallBack(funName, handler, thisObj);
    /**
     * 初始化SDK
     */
    private SDKInitNative();
    /**
     * 是否需要登陆
     */
    SDKIsNeedLoginNative(): any;
    /**
     * SDK自动登陆
     */
    SDKAutoLoginNative(args?: any): void;
    /**
     * SDK登陆
     */
    SDKLoginNative(args?: any): void;
    /**
     * SDK自定义登陆界面
     */
    SDKHasLoginScene(): any;
    /**
     * SDK登陆验证参数
     */
    GetSDKCheckAccountArgs(): any;
    /**
     * SDK创建角色
     */
    SDKCreateRoleNative(params: any): void;
    /**
     * SDK进入游戏
     */
    SDKEnterGameNative(params: any): void;
    /**
     * SDK角色升级
     */
    SDKUserUpgradeNative(params: any): void;
    /**
     * SDK下单参数
     */
    GetMakeOrderSdkArgs(params?: any): string;
    /**
     * SDK是否支持支付
     */
    CheckSupportRecharge(): boolean;
    /**
     * SDK支付
     */
    SDKPayNative(params: any): void;
    /**
     * SDK埋点
     */
    SDKSetDataNative(params: any): void;
    /**
     * SDK登出
     */
    SDKLogoutNative(): void;
    /**
     * SDK退出
     */
    SDKExitNative(): void;
    /**
     * SDK分享
     */
    SDKShowShare(params?: any): void;
    /**
     * SDK二维码关注
     */
    SDKShowQRCode(): void;
    /**
     * facebook礼包
     */
    SDKStartForGift(): void;
    /**
     * 活动
     */
    SDKFaceStartGift(): void;
    /**
     * SDK回调
     */
    NativeCallback(msg: any): void;
    /**
     * 执行tap
     */
    SDKTapExecute(): void;
    /**
     * 打开平台ICO特定的功能界面
     */
    SDKShowImmersiveIconNative(params: any): void;
    /**
     * 显示切换账号
     */
    SDKShowLogout(): boolean;
    /**
     * 显示超级vip
     */
    SDKShowSuperVip(): boolean;
    /**
     * 获取状态栏高度
     */
    getStatusHeight(): number;
    /**
     * 获取底部安全高度
     */
    getBottomSafeHeight(): number;
    /**是否显示小游戏账号互通按钮 */
    isShowMiniAccountJumpPortalIcon(): boolean;
    /**小游戏账号互通按钮操作 */
    miniAccountJumpPortalIconTap(): void;
    /** 是否不显示任何支付样式 */
    isHideRechargeShow(): boolean;
    /** 是否显示分享入口 */
    isShowSharePortalIcon(): boolean;
    powerChange(): void;
    /** 邀请人数据 */
    getInviterInfo(): {
        inviterId: number;
        inviterSid: number;
    };
}
interface Amusement22_1Config {
    Id: number;
    freshPrice: number;
    showType: number;
    freshItem: number;
    costItem: number;
}
declare class UnitFilterUtils {
    static getBuffFilter(filter: UnitFilter): egret.ColorMatrixFilter[];
    static getUnitFilter(groupID: number): UnitFilter;
    static isHard(groupID: any): boolean;
    static isPoison(groupID: any): boolean;
}
declare const enum UnitFilter {
    no = 0,
    hard = 1,
    poison = 2,
}
interface Amusement22_3Config {
    id: number;
    low: number;
    high: number;
    showReward: {
        type: number;
        id: number;
        count: number;
        cost: number;
        discountImg: number;
    }[];
    score: number;
}
/**
 * 掉落物
 */
declare class UnitItem extends BaseLeakDisplay {
    /** 物品图片 */
    protected _itemImg: eui.Image;
    protected _roatImg: eui.Image;
    private _effId;
    private _itemMc;
    constructor();
    setData(item: RewardVo): void;
    addRoatEffect(): void;
    removeRoatEffect(): void;
    addEffect(): void;
    removeEffect(): void;
}
/**
 * 掉落名
 */
declare class UnitItemName extends egret.DisplayObjectContainer {
    protected _nameTxt: eui.Label;
    constructor();
    setData(item: RewardVo): void;
}
/**
 * 掉落物名
 */
declare class UnitItemNameMerge extends egret.DisplayObjectContainer {
    item: UnitItem;
    itemName: UnitItemName;
    /** 道具信息 */
    private _infoModel;
    private _itemParent;
    constructor();
    infoModel: UnitModel;
    setData(item: RewardVo): void;
    setItemParent(parent: any): void;
    addFloatEffect(): void;
    addRoatEffect(): void;
    removeRoatEffect(): void;
    addEffect(): void;
    removeEffect(): void;
    private onAdd(e);
    private onRemove(e);
    x: number;
    y: number;
    readonly team: Team;
    reset(): void;
    destruct(): void;
}
/**
 * 旷工
 */
declare class UnitMiner extends UnitNpc {
    constructor();
    infoModel: MineModel;
    updateModel(): void;
    updateTime(): void;
    updateTitleState(): void;
    destruct(): void;
}
/**
 * 活动类型25
 */
interface Amusement25Config {
    Id: number;
    rewards: RewardVo[];
    index: number;
}
interface Amusement26Config {
    id: number;
    index: number;
    buyCount: number;
    itemDesc: string;
    itemName: string;
    originalPrice: number;
    rechargeId: number;
    reward: RewardVo[];
    sort: number;
    showBtnTips: number;
    Zjmicon: string;
    pack: number[];
    rebate: number;
    rechargeLimit: number;
}
declare class UnitNpcHead extends eui.Component {
    contentGroup: eui.Group;
    nameTxt: eui.Label;
    timeTxt: eui.Label;
    titleImg: eui.Image;
    icon: eui.Image;
    workerState: eui.Image;
    stateGroup: eui.Group;
    states: string[];
    private eff;
    private titleGroup;
    constructor();
    updateModel(info: NpcModel): void;
    updateState(info: MineModel): void;
    private setState(state);
    private setEff(state);
    private getEff();
}
/**
 * 人物
 */
declare class UnitRole extends UnitMonster {
    protected _lilianTitle: eui.Image;
    protected neigongBar: eui.ProgressBar;
    private _headTitle;
    private _headTitleMc;
    protected ringMc: SuperRingTurnDisplayer[];
    _buffEffList: any[];
    private zhanLingAttack;
    private timeID;
    constructor();
    protected createTweenObj(): void;
    setClothesFileName(resName: any, mcOrder?: UnitMcType): void;
    setWeaponFileName(resName: string, sex?: number): void;
    setWing(): void;
    setWingFileName(name: string): void;
    setHeirloomFileName(name: string): void;
    setSoulFileName(name: string): void;
    protected loadOther(mcType: UnitMcType): void;
    protected playBody(e: egret.Event): void;
    getResDir(mcType: UnitMcType): number;
    /**
     * 更新数据显示
     */
    updateBlood(force?: boolean): void;
    protected parseModel(): void;
    updateNameColor(): void;
    setHeirloomSuitEff(): void;
    addBuff(buff: BuffModel): void;
    /**
     * 更新内功显示
     */
    updateNeiGong(): void;
    checkNeigongVisible(): boolean;
    /**
     * 更新称号
     */
    updateTitle(): void;
    removeHeadTitle(): void;
    onTitleComplete(): void;
    /**
     * 显示新手引导称号
     */
    private showNewPlayerTitle();
    /**
     * 播放称号动画
     */
    private playTitleEff(effurl);
    private updateRingMC();
    setCharName(str: string): void;
    setLilian(url: string): void;
    infoModel: UnitModel;
    private autoAddBlood();
    showNeigong(b: boolean): void;
    showZhanling(id: number, lv: number, ishide?: any): boolean;
    updateZhanLingOffset(): void;
    private playZhanLingAttack();
    private hideAshtarte();
    reset(): void;
    destruct(): void;
    deadDelay(): void;
    readonly nameVisible: boolean;
    showNameAndHp(): void;
    showBodyContainer(): void;
    hideBodyContainer(): void;
    private moveCamera();
    checkMove(): void;
    /**
     * 是否在安全区域
     */
    isSafety(): boolean;
    /**
     * 死亡处理
     */
    onDead(callBack?: () => void): void;
    stopMove(): void;
    checkIsCamera(): any;
    hideBar(): void;
    updateShadow(): void;
}
declare class UnitShadow extends egret.DisplayObjectContainer {
    private shadowImg;
    private shadowMc;
    lastType: number;
    constructor();
    setType(type: number): void;
    playFile(name: any, playCount?: number, scaleX?: number): void;
    reset(): void;
    dispose(): void;
}
declare const enum ShadowType {
    image = 0,
    movie = 1,
}
declare class UnitStatue extends egret.DisplayObjectContainer {
    private title;
    private roleName;
    private model;
    constructor(title: string, name: string, body: string);
    readonly weight: number;
}
/**
 * 传送点
 */
declare class UnitTransfer extends UnitEffect {
    private transferName;
    constructor();
    infoModel: TransferModel;
    updateModel(): void;
}
declare class UnitTransferHead extends eui.Component {
    num: eui.BitmapLabel;
    constructor();
    updateModel(info: TransferModel): void;
}
declare class UnitHideMgr extends BaseSystem {
    isOpen: boolean;
    isShow: boolean;
    showHandles: number[];
    showNum: number;
    storageKey: string;
    lastAtkHandle: number;
    lastFbID: number;
    stageMsHandle: {};
    stageRoleNum: number;
    maxStageRoleNum: number;
    ignoreMaxNum: number;
    shadowMcOpen: boolean;
    enIns: UnitMgr;
    constructor();
    static ins(): UnitHideMgr;
    changeScene(): void;
    onCreateEntity(model: UnitModel): void;
    setShowState(isShow: boolean, ignoreStorage?: boolean): void;
    checkIsShowBody(handle: number): boolean;
    private onRemoveEntity([handle, entity]);
    private updateShowHandles(masterHandle, isAdd);
    private onChangeTarget();
    private onRoleDie();
    private searchNewHandle();
    private showOrHideEntitys(isShow);
    private showEntity(masterHandle);
    private hideEntity(masterHandle);
    private sendHandlesToServer();
    private getIsOpen();
    private getMaxStageNum();
    onLvChange(lv: any): void;
    showOrHideAllEntitys(isShow: boolean): void;
    checkIsInStageList(handle: any): boolean;
    checkCanToStage(infoModel: any): boolean;
    addRoleToStage(handle: any): void;
    removeRoleFromStage(handle: any): void;
    addToStageList(infoModel: any): boolean;
    removeFromStageList(infoModel: any): boolean;
    searchRoleAddToStage(): void;
    searchRoleRomoveFromStage(): void;
    showAllEntity(handle: any): void;
    hideAllEntity(handle: any): void;
}
declare class UnitMgr extends SingleClass {
    static CHAR_DEFAULT_HEIGHT: number;
    static CHAR_DEFAULT_TYPEFACE: number;
    actorList: any;
    masterList: any;
    private entityList;
    private transferList;
    private mineList;
    private distances;
    private listCount;
    private isHideOther;
    static ins(): UnitMgr;
    getAllEntity(): any;
    resetRole(): void;
    private addList(char);
    private addTransfer(char);
    removeTransferById(configID: any): void;
    getTransferById(configID: any): any;
    getMineByIndex(index: any): any;
    removeMineByIndex(index: any): void;
    createEntity(model: any, param?: any): egret.DisplayObject;
    removeAll(): void;
    hideOtherEntity(b: boolean): void;
    getEntityRelationHandle(handle: number): any[];
    removeByHandle(handle: any, removeDisplay?: boolean, expEffect?: boolean): UnitMonster;
    getEntityByHandle(handle: any): any;
    getMasterList(masterHandle: any): any;
    /**
     * 获取最顶层的ActorHandle
     */
    getRootMasterHandle(handle: any): any;
    getMainRole(index: number): UnitRole;
    getJobMainRole(index: number): UnitRole;
    getMainRoleByJob(job: any): any;
    getNoDieRoleIndex(): number;
    getNoDieRole(): UnitRole;
    getMyOtherRolePos(): {};
    private sortSubRole(a, b);
    getTeamCount(team: Team): number;
    checkCount(target: UnitMonster, range: number, count?: number, sameTeam?: boolean): boolean;
    checkCanAddBlood(t: Team): boolean;
    getNoDieEntityBymasterhHandle(masterHandle: number): any;
    getEntityBymasterhHandle(masterHandle: number): egret.DisplayObject;
    getEntitysBymasterhHandle(handle: number, type?: number): any[];
    getEntityByTeam(team?: Team): any[];
    getEntityByMonsterId(monsterId: any): any[];
    getEntityByIsMy(isMy: boolean): any[];
    updateRoleWingState(isMy: any): void;
    updateRoleTitleState(isMy: any): void;
    updateName(isMy?: any): void;
    /**
     * 通过伤害范围ID获取怪物列表
     * @param selfTarget
     * @param target
     * @param maxNum
     * @param areaId
     */
    screeningTargetByMap(selfTarget: UnitMonster, target: UnitMonster, maxNum: number, areaId: number): UnitMonster[];
    screeningTargetByPos(selfTarget: UnitMonster, sameTeam?: boolean, maxNum?: number, range?: number, list?: any): UnitMonster[];
    private sortFunc(a, b);
    getActorByAcotorID(acotorId: any): any;
    getNpcByConfigID(configID: any): any;
    isRole(entity: any): boolean;
    isMonster(entity: any): boolean;
    isMiner(entity: any): boolean;
    isNpc(entity: any): boolean;
    createNpc(data: any): any;
    getMasterSpeed(infoModel: any): any;
}
declare class UnitShowMgr extends SingleClass {
    private MAX_SHOW_NUM;
    private MAX_EFFECT_NUM;
    private isOpen;
    static ins(): UnitShowMgr;
    changeScene(): void;
    private hideFurtherOtherRole();
    showNearSomeOne(): void;
    showHideSomeOne(handle: number): void;
    private hideByHandle(handle);
    private showByHandle(handle);
    checkShowSkillEffect(): boolean;
    checkShowHandle(handle: number): boolean;
    private countShowNum();
}
declare class BuffModel {
    /** 效果配置 */
    effConfig: SkillsEffectsConfig;
    /** 开始时间 */
    addTime: number;
    /** 结束时间 */
    endTime: number;
    /** 计算后的值 */
    value: number;
    /** 总执行次数 */
    count: number;
    /** 当前执行次数 */
    step: number;
    /** 倍率 */
    multRate: number;
    /** 宿主handle */
    hostsHandle: number[];
    /** 施法者 */
    source: any;
    isLift: boolean;
    dispose(): void;
    static createBuff(id: number, selfTarget: UnitMonster, args?: {
        a: number;
        b: number;
        c: number;
        time: number;
    }): BuffModel;
    static createBaseBuff(id: number, selfTarget: UnitMonster, value?: number, duration?: number): BuffModel;
    static isMaBi(group: any): boolean;
    static hasReMabi(target: any): boolean;
    static hasMabi(target: any): boolean;
    static hasReFronzen(target: any): boolean;
    static getBuffCfgByGroupId(group: any): SkillsEffectsConfig;
    /**
     * 是否可以执行buff效果
     */
    isExecute(): boolean;
    /**
     * 是否可以移除buff
     */
    canRemove(): boolean;
    isCanotHit(): boolean;
    static isCanotHit(effConfig: any): boolean;
    reCanotHit(): boolean;
    isFronzen(): boolean;
    reFronzen(): boolean;
    isExtHurmK(): boolean;
}
interface Amusement2Config {
    Id: number;
    index: number;
    vip: number;
    needRecharge: number;
    /**货币类型 2元宝 1金币 */
    currencyType: number;
    originalPrice: number;
    price: number;
    count: number;
    rewards: RewardVo[];
    countReward: {
        count: number;
        reward: RewardVo[];
    }[];
    discount: number;
    source: string[];
    showType: number;
    scount: number;
    limitTime: Array<Number>;
    shamScount: number;
    shamScountLimit: any;
    shamScountRed: string;
    giftName: string;
}
declare class ItemModel extends UnitModel {
    itemData: RewardVo;
    initItemData(datas: any[]): void;
}
/**
 * 旷工
 */
declare class MineModel extends NpcModel {
    index: number;
    actorID: number;
    name: string;
    power: number;
    guildName: string;
    configID: number;
    startTime: number;
    endTime: number;
    isBeFight: boolean;
    beFightActorID: number[];
    sceceId: number;
    constructor();
    readonly npcConfig: NpcBaseConfig;
    init(datas: any[]): void;
    readonly isBeMeRob: boolean;
    readonly isBeMeFight: boolean;
    setBeMeFight(): void;
    readonly isBeRobOver: boolean;
}
interface Amusement3Config {
    Id: number;
    index: number;
    type: number;
    day: number;
    val: number;
    rewards: RewardVo[];
    showType: number;
    expAttr: string[];
    activityID: number[];
    awardShow: string;
    payType: number;
}
declare class RoleModel extends UnitModel {
    /** 编号 */
    index: number;
    /** 职业 */
    job: JobConst;
    /** 性别 */
    sex: number;
    /** 技能数据 */
    skillsData: SkillVo[];
    /** 装备数据 */
    equipsData: EquipVo[];
    /** 特殊戒指数据 */
    exRingsData: number[];
    /** 羽翼数据 */
    wingsData: FeatherVo;
    /** 经脉数据 */
    jingMaiData: MeridiansVo;
    /** 龙魂等级 */
    loongSoulData: DragonSoulDataVo;
    /** 护盾等级 */
    shieldData: DragonSoulDataVo;
    /** 显示的称号ID */
    title: number;
    /** 公会id */
    guildID: number;
    /** 公会名 */
    guildName: string;
    /** 战灵等级*/
    warLevel: number;
    zhuangbei: number[];
    heirloom: HeirloomVo;
    /**兵魂*/
    weapons: WeaponsSoulDataVo;
    /**兵魂id*/
    weaponsId: number;
    /** 阵营id，用于阵营战，1为冰，2为火*/
    camp: number;
    /** 雷霆淬炼 */
    thunderForgeVos: ThunderForgeVo[];
    /** 雷霆套装 */
    thunderSuitVos: ThunderSuitVo[];
    /**战纹数据 */
    runeDatas: ItemData[];
    /**羽翼数据 */
    wingSkillData: number[];
    /** 历练 */
    lilianLv: number;
    /**麻痹戒指1是,0否 -_- */
    private _mbRing;
    /**护声戒指1是,0否*/
    hsRing: number;
    /**神兵技能 */
    godWeaponSkills: SkillVo[];
    /**玉佩数据 */
    jadeData: JadeDataNewVo;
    /**法阵ID */
    deCirShowID: number;
    /**星辰数据 */
    starSunVos: StarSunVo[];
    /**主宰装备 */
    masterEquips: ItemData[];
    /**神话数据 */
    mythForgeVo: MythForgeVo;
    /**龙魂道具 */
    longhunItemData: DragonSoulItemDataVo[];
    /**霸主装备 */
    thirteenEquipLv: number;
    /**传世时装 */
    heirloomDressId: number;
    /**官职等级 */
    guanZhiLv: number;
    canWearNewTitle: boolean;
    newTitle: number;
    headTitleType: number;
    headTitleLv: number;
    weaponViewType: number;
    weaponViewId: number;
    clothesViewType: number;
    clothesViewId: number;
    constructor();
    /**
     * 通过属性名获取属性类型
     */
    static getAttrTypeByName(attrName: string): number;
    /**
     * 通过职业类型获取职业名
     */
    static getJobNameByJob(type: number): string;
    static getHejiEquipNameByType(type: number): string;
    static getEquipNameByType(type: number): string;
    static getWingEquipNameByType(type: number): string;
    /**
     * 强化等级
     */
    static getIntensifyTotalLvByType(type: number): number;
    /**
     * 神装总转身数据
     * @param index 装备索引
     * @param packageID
     */
    static getAllZSLevel(): number;
    init(datas: any[]): void;
    /**
     * 战纹
     */
    initRune(datas: any[]): void;
    /**
     * 传世
     */
    initHeirloom(datas: any[]): void;
    /**
     * 兵魂
     */
    initWeapons(weaponsId: number): void;
    /**
     * 雷霆
     */
    initNewStrengthen(datas: any[], suitDatas: any[]): void;
    /**
     * 主宰
     */
    initMasterEquip(datas: any[]): void;
    /**
     * 属性
     */
    initAtt(datas: any[], showTip?: boolean): void;
    /**
     * 扩展属性
     */
    initExAtt(datas: any[]): void;
    /**
     * 玉佩
     */
    initJadeData(lv: number): void;
    /**
     * 装扮
     */
    initZhuangbei(datas: any[]): void;
    /**
     * 羽翼技能
     */
    setWingSkill(): void;
    /**
     * 神话
     */
    initLegendEquipForge(datas: any[]): void;
    /**
     * 星辰
     */
    initEnhance(datas: any[]): void;
    intOtherRole(datas: any[]): void;
    mbRing: number;
    /**
     * 通过锻造类型获取等级最小的装备索引
     * @param type 0 强化 1 铸造 2 精炼
     */
    getMinEquipIndexByType(type: number): number;
    /**
     * 通过锻造类型获取装备总等级
     * @param type 0 强化 1 宝石 2 注灵
     */
    getEquipForgeTotalLv(type: number): number;
    getEquipForgeLv(solt: number, type: number): number;
    getAllHeirloomPower(): number;
    getHeirloomSlotPower(solt: number): number;
    getCurSkillIDs(): number[];
    mergeData(data: any): RoleModel;
    mergeOtherAttr(data: any): void;
    /**
     * 根据装备位置获取该装备数据
     * @param subType 装备子类型
     */
    getEquipDataByPos(pos: number): EquipVo;
    /**
     * 锻造总战斗力
     */
    getForgeTotalPower(type: number): number;
    /**
     * 兵魂战斗力
     * @param 兵魂id(有值则返回指定兵魂战斗力)
     */
    getWeaponTotalPower(id?: number): number;
    name: string;
    /**
     * 获取带服务器ID的名字
     */
    getNameWithServer2(): string;
    readonly guildAndName: string;
    readonly lilianUrl: string;
    readonly lv: number;
    /**
     * 根据索引获取装备
     */
    getEquipByIndex(index: number): EquipVo;
    /**
     * 是否隐藏兵魂特效
     */
    hideWeapons(): boolean;
    /**
     * 获取装备数量
     */
    getEquipLen(): number;
    /**
     * 根据索引获取特殊戒指数据
     */
    getExRingsData(index: number): number;
    /**
     * 根据所以设置特殊戒指数据
     */
    setExRingsData(index: number, value: number): void;
    static isAllDie(isMaster?: any): boolean;
}
/**
 * 传送点
 */
declare class TransferModel extends NpcModel {
    index: number;
    constructor();
    readonly avatarFileName: string;
}
interface UnionBattleDayAwardConfig {
    /**
     * 天数
    */
    day: number;
    /**
     * 奖励数据
    */
    award: RewardVo[];
}
