declare namespace egret {
    class Tween extends EventDispatcher {
        private static NONE;
        private static LOOP;
        private static REVERSE;
        private static _tweens;
        private static IGNORE;
        private static _plugins;
        private static _inited;
        private _target;
        private _useTicks;
        private ignoreGlobalPause;
        private loop;
        private pluginData;
        private _curQueueProps;
        private _initQueueProps;
        private _steps;
        private paused;
        private duration;
        private _prevPos;
        private position;
        private _prevPosition;
        private _stepPosition;
        private passive;
        static get(target: any, props?: {
            loop?: boolean;
            onChange?: Function;
            onChangeObj?: any;
        }, pluginData?: any, override?: boolean): Tween;
        static removeTweens(target: any): void;
        static pauseTweens(target: any): void;
        static resumeTweens(target: any): void;
        private static tick(timeStamp, paused?);
        private static _lastTime;
        private static _register(tween, value);
        static removeAllTweens(): void;
        constructor(target: any, props: any, pluginData: any);
        private initialize(target, props, pluginData);
        setPosition(value: number, actionsMode?: number): boolean;
        private _runAction(action, startPos, endPos, includeStart?);
        private _updateTargetProps(step, ratio);
        setPaused(value: boolean): Tween;
        private _cloneProps(props);
        private _addStep(o);
        private _appendQueueProps(o);
        private _addAction(o);
        private _set(props, o);
        wait(duration: number, passive?: boolean): Tween;
        to(props: any, duration?: number, ease?: Function): Tween;
        call(callback: Function, thisObj?: any, params?: any[]): Tween;
        set(props: any, target?: any): Tween;
        play(tween?: Tween): Tween;
        pause(tween?: Tween): Tween;
        $tick(delta: number): void;
    }
}
declare namespace RES {
    interface IVersionController {
        init(): Promise<any>;
        getVirtualUrl(url: string): string;
    }
    interface VersionController extends IVersionController {
    }
    let VersionController: {
        new (): VersionController;
    };
}
declare type ResourceRootSelector<T extends string> = () => T;
declare type ResourceNameSelector = (file: string) => string;
declare type ResourceMergerSelector = (file: string) => {
    path: string;
    alias: string;
};
declare module RES {
    var resourceNameSelector: ResourceNameSelector;
    var resourceMergerSelector: ResourceMergerSelector | null;
    function getResourceInfo(path: string): File | null;
    function setConfigURL(url: string, root: string): void;
    interface ResourceInfo {
        url: string;
        type: string;
        root: string;
        crc32?: string;
        size?: number;
        extra?: 1 | undefined;
        name: string;
        soundType?: string;
        scale9grid?: string;
        groupNames?: string[];
        promise?: Promise<any>;
    }
    interface Data {
        resourceRoot: string;
        mergeSelector: ResourceMergerSelector | null;
        fileSystem: FileSystem;
        groups: {
            [groupName: string]: string[];
        };
        alias: {
            [aliasName: string]: string;
        };
        loadGroup: string[];
    }
    class ResourceConfig {
        config: Data;
        constructor();
        init(): Promise<any>;
        getGroupByName(name: string): ResourceInfo[];
        __temp__get__type__via__url(url_or_alias: string): string;
        getResourceWithSubkey(key: string): {
            r: ResourceInfo;
            key: string;
            subkey: string;
        } | null;
        getKeyByAlias(aliasName: string): string;
        getResource(path_or_alias: string): ResourceInfo | null;
        createGroup(name: string, keys: Array<string>, override?: boolean): boolean;
        addSubkey(subkey: string, name: string): void;
        addAlias(alias: any, key: any): void;
        addResourceData(data: {
            name: string;
            type: string;
            url: string;
            root?: string;
            extra?: 1 | undefined;
        }): void;
        removeResourceData(data: {
            name: string;
            type?: string;
            url: string;
            root?: string;
            extra?: 1 | undefined;
        }): void;
    }
}
declare module RES {
    class ResourceLoader {
        private groupTotalDic;
        private numLoadedDic;
        private groupErrorDic;
        private retryTimesDic;
        maxRetryTimes: number;
        private reporterDic;
        private dispatcherDic;
        private failedList;
        private loadItemErrorDic;
        private errorDic;
        private itemListPriorityDic;
        private itemLoadDic;
        private promiseHash;
        private lazyLoadList;
        pushResItem(resInfo: ResourceInfo): Promise<any>;
        pushResGroup(list: ResourceInfo[], groupName: string, priority: number, reporter?: PromiseTaskReporter): Promise<any>;
        private updatelistPriority(list, priority);
        private findPriorityInDic(item);
        private loadingCount;
        thread: number;
        private loadNextResource();
        private loadSingleResource();
        private getOneResourceInfoInGroup();
        private setGroupProgress(groupName, r);
        private loadGroupEnd(groupName, lastError?);
        private deleteDispatcher(groupName);
        private loadResource(r, p?);
        unloadResource(r: ResourceInfo): boolean;
    }
}
declare module RES.processor {
    interface Processor {
        onLoadStart(host: ProcessHost, resource: ResourceInfo): Promise<any>;
        onRemoveStart(host: ProcessHost, resource: ResourceInfo): void;
        getData?(host: ProcessHost, resource: ResourceInfo, key: string, subkey: string): any;
    }
    function isSupport(resource: ResourceInfo): Processor;
    function map(type: string, processor: Processor): void;
    function getRelativePath(url: string, file: string): string;
    var ImageProcessor: Processor;
    const KTXTextureProcessor: RES.processor.Processor;
    function makeEtc1SeperatedAlphaResourceInfo(resource: ResourceInfo): ResourceInfo;
    const ETC1KTXProcessor: Processor;
    var BinaryProcessor: Processor;
    var TextProcessor: Processor;
    var JsonProcessor: Processor;
    var XMLProcessor: Processor;
    var CommonJSProcessor: Processor;
    const SheetProcessor: Processor;
    var FontProcessor: Processor;
    var SoundProcessor: Processor;
    var MovieClipProcessor: Processor;
    const MergeJSONProcessor: Processor;
    const TTFProcessor: Processor;
    const LegacyResourceConfigProcessor: Processor;
    const _map: {
        [index: string]: Processor;
    };
}
declare module RES {
    namespace ResourceItem {
        const TYPE_XML: string;
        const TYPE_IMAGE: string;
        const TYPE_BIN: string;
        const TYPE_TEXT: string;
        const TYPE_JSON: string;
        const TYPE_SHEET: string;
        const TYPE_FONT: string;
        const TYPE_SOUND: string;
        const TYPE_TTF: string;
        function convertToResItem(r: ResourceInfo): ResourceItem;
    }
    interface ResourceItem extends ResourceInfo {
        name: string;
        url: string;
        type: string;
        data: ResourceInfo;
        crc32?: string;
        size?: number;
        soundType?: string;
    }
}
declare module RES {
    let checkNull: MethodDecorator;
    let FEATURE_FLAG: {
        FIX_DUPLICATE_LOAD: number;
    };
    namespace upgrade {
        function setUpgradeGuideLevel(level: "warning" | "silent"): void;
    }
}
declare namespace egret {
    interface ISocket {
        connect(host: string, port: number, socketServerUrl: string): void;
        addCallBacks(onConnect: Function, onClose: Function, onSocketData: Function, onError: Function, thisObject: any): void;
        send(message: any): void;
        close(): void;
        disconnect(): void;
    }
    let ISocket: {
        new (): ISocket;
    };
}
import Tween = egret.Tween;
import ArrayCollection = eui.ArrayCollection;
declare function callLater(target: any, key: string, descriptor: PropertyDescriptor): PropertyDescriptor;
declare function callDelay(delay: number): (target: any, key: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
declare function recycle(target: any): void;
declare function injectable(target: any): void;
declare function protocolsId(id: number): (target: any) => void;
declare function up(id: number, encode?: any[]): (target: any, key: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
declare function down(id: number, decode?: any[]): (target: any, key: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
declare class BasePanel extends eui.Component implements IBaseEvent {
    msgObject: {};
    tabClickFunc: any;
    ignoreLeak: boolean;
    private _longPress;
    open(...param: any[]): void;
    close(...param: any[]): void;
    addCustomEvent(type: number, listener: Function): void;
    removeCustomEvents(): void;
    addLongPress(obj: any, func: Function): void;
    removeLongPress(): void;
    addEvent(ev: string, obj: any, func: Function, thisObj?: any): void;
    removeEvent(ev: string, obj: any, func: Function, thisObj?: any): void;
    addEventTouchTap(obj: any, func: Function, thisObj?: any): void;
    removeEventTouchTap(obj: any, func: Function, thisObj?: any): void;
    addEventTouchEnd(obj: any, func: Function, thisObj?: any): void;
    removeEventTouchEnd(obj: any, func: Function, thisObj?: any): void;
    addEventChange(obj: any, func: Function, thisObj?: any): void;
    onChangeTap(e: any): void;
    removeEventChange(obj: any, func: Function, thisObj?: any): void;
    addEventChanging(obj: any, func: Function, thisObj?: any): void;
    removeEventChanging(obj: any, func: Function, thisObj?: any): void;
    addEventItemTap(obj: any, func: Function, thisObj?: any): void;
    removeEventItemTap(obj: any, func: Function, thisObj?: any): void;
    addEventAddedFromStage(obj: any, func: Function, thisObj?: any): void;
    removeEventAddedFromStage(obj: any, func: Function, thisObj?: any): void;
    addEventRemovedFromStage(obj: any, func: Function, thisObj?: any): void;
    removeEventRemovedFromStage(obj: any, func: Function, thisObj?: any): void;
    addEventTextLink(obj: any, func: Function, thisObj?: any): void;
    removeEventTextLink(obj: any, func: Function, thisObj?: any): void;
    addEventFocusIn(obj: any, func: Function, thisObj?: any): void;
    removeEventFocusIn(obj: any, func: Function, thisObj?: any): void;
    addEventFocusOut(obj: any, func: Function, thisObj?: any): void;
    removeEventFocusOut(obj: any, func: Function, thisObj?: any): void;
    addEventTouchBegin(obj: any, func: Function, thisObj?: any): void;
    removeEventTouchBegin(obj: any, func: Function, thisObj?: any): void;
    addEventTouchMove(obj: any, func: Function, thisObj?: any): void;
    removeEventTouchMove(obj: any, func: Function, thisObj?: any): void;
    addEventChangeStart(obj: any, func: Function, thisObj?: any): void;
    removeEventChangeStart(obj: any, func: Function, thisObj?: any): void;
    addEventChangeEnd(obj: any, func: Function, thisObj?: any): void;
    removeEventChangeEnd(obj: any, func: Function, thisObj?: any): void;
    $onClose(): void;
}
declare class SingleClass {
    private static instance;
    static ins(...args: any[]): any;
}
declare class GameByteArray extends egret.ByteArray {
    constructor();
    writeCmd(id: number, subId: number): void;
    readString(): string;
    writeString(value: string): void;
    readUnsignedInt64(): number;
    writeUnsignedInt64(val: number): void;
}
declare class BaseSound {
    _cache: any;
    _loadingCache: Array<string>;
    constructor();
    private dealSoundTimer();
    getSound(key: string): egret.Sound;
    private onResourceLoadComplete(data, key);
    loadedPlay(key: string): void;
    checkCanClear(key: string): boolean;
}
declare namespace RES {
    class NativeVersionController implements IVersionController {
        private versionInfo;
        init(): Promise<void>;
        getVirtualUrl(url: string): string;
        private getLocalData(filePath);
    }
}
declare module RES {
    function profile(): void;
    var host: ProcessHost;
    var config: ResourceConfig;
    var queue: ResourceLoader;
    interface ProcessHost {
        state: {
            [index: string]: number;
        };
        resourceConfig: ResourceConfig;
        load: (resource: ResourceInfo, processor?: string | processor.Processor) => Promise<any>;
        unload: (resource: ResourceInfo) => void;
        save: (rexource: ResourceInfo, data: any) => void;
        get: (resource: ResourceInfo) => any;
        remove: (resource: ResourceInfo) => void;
    }
    class ResourceManagerError extends Error {
        static errorMessage: {
            1001: string;
            1002: string;
            2001: string;
            2002: string;
            2003: string;
            2004: string;
            2005: string;
            2006: string;
        };
        private __resource_manager_error__;
        constructor(code: number, replacer?: Object, replacer2?: Object);
    }
}
declare namespace RES {
    interface PromiseTaskReporter {
        onProgress?(current: number, total: number, resItem: ResourceInfo | undefined): void;
    }
}
declare namespace egret {
    class WebSocket extends egret.EventDispatcher {
        static TYPE_STRING: string;
        static TYPE_BINARY: string;
        private socket;
        private _writeMessage;
        private _readMessage;
        private _connected;
        private _connecting;
        constructor(host?: string, port?: number);
        connect(host: string, port: number, isUrl: boolean): void;
        close(): void;
        private onConnect();
        private onClose(e);
        private onError(e);
        private onSocketData(message);
        flush(): void;
        private _isReadySend;
        writeUTF(message: string): void;
        readUTF(): string;
        private _readByte;
        private _writeByte;
        private _bytesWrite;
        writeBytes(bytes: ByteArray, offset?: number, length?: number): void;
        readBytes(bytes: ByteArray, offset?: number, length?: number): void;
        readonly connected: boolean;
        private _type;
        type: string;
    }
}
declare namespace egret.web {
    class HTML5WebSocket implements ISocket {
        private socket;
        constructor();
        private onConnect;
        private onClose;
        private onSocketData;
        private onError;
        private thisObject;
        addCallBacks(onConnect: Function, onClose: Function, onSocketData: Function, onError: Function, thisObject: any): void;
        private host;
        private port;
        connect(host: string, port: number, socketServerUrl: string): void;
        private _bindEvent();
        send(message: any): void;
        close(): void;
        disconnect(): void;
    }
}
declare namespace egret {
    class Ease {
        constructor();
        static get(amount: number): (t: number) => number;
        static getPowIn(pow: number): (t: number) => number;
        static getPowOut(pow: number): (t: number) => number;
        static getPowInOut(pow: number): (t: number) => number;
        static quadIn: (t: number) => number;
        static quadOut: (t: number) => number;
        static quadInOut: (t: number) => number;
        static cubicIn: (t: number) => number;
        static cubicOut: (t: number) => number;
        static cubicInOut: (t: number) => number;
        static quartIn: (t: number) => number;
        static quartOut: (t: number) => number;
        static quartInOut: (t: number) => number;
        static quintIn: (t: number) => number;
        static quintOut: (t: number) => number;
        static quintInOut: (t: number) => number;
        static sineIn(t: number): number;
        static sineOut(t: number): number;
        static sineInOut(t: number): number;
        static getBackIn(amount: number): (t: number) => number;
        static backIn: (t: number) => number;
        static getBackOut(amount: number): (t: any) => number;
        static backOut: (t: any) => number;
        static getBackInOut(amount: number): (t: number) => number;
        static backInOut: (t: number) => number;
        static circIn(t: number): number;
        static circOut(t: number): number;
        static circInOut(t: number): number;
        static bounceIn(t: number): number;
        static bounceOut(t: number): number;
        static bounceInOut(t: number): number;
        static getElasticIn(amplitude: number, period: number): (t: number) => number;
        static elasticIn: (t: number) => number;
        static getElasticOut(amplitude: number, period: number): (t: number) => number;
        static elasticOut: (t: number) => number;
        static getElasticInOut(amplitude: number, period: number): (t: number) => number;
        static elasticInOut: (t: number) => number;
    }
}
declare namespace RES {
    namespace path {
        function normalize(filename: string): string;
        function basename(filename: string): string;
        function dirname(path: string): string;
    }
}
declare namespace egret.tween {
    type EaseType = 'quadIn' | 'quadOut' | 'quadOut' | 'quadInOut' | 'cubicIn' | 'cubicOut' | 'cubicInOut' | 'quartIn' | 'quartOut' | 'quartInOut' | 'quintIn' | 'quintOut' | 'quintInOut' | 'sineIn' | 'sineOut' | 'sineInOut' | 'backIn' | 'backOut' | 'backInOut' | 'circIn' | 'circOut' | 'circInOut' | 'bounceIn' | 'bounceOut' | 'bounceInOut' | 'elasticIn' | 'elasticOut' | 'elasticInOut';
    abstract class BasePath extends EventDispatcher {
        name: string;
    }
    class To extends BasePath {
        props: Object;
        duration: number;
        ease: EaseType | Function;
    }
    class Wait extends BasePath {
        duration: number;
        passive: boolean;
    }
    class Set extends BasePath {
        props: Object;
    }
    class Tick extends BasePath {
        delta: number;
    }
    class TweenItem extends EventDispatcher {
        private tween;
        constructor();
        private _props;
        props: any;
        private _target;
        target: any;
        private _paths;
        paths: BasePath[];
        play(position?: number): void;
        pause(): void;
        private isStop;
        stop(): void;
        private createTween(position);
        private applyPaths();
        private applyPath(path);
        private pathComplete(path);
    }
    class TweenGroup extends EventDispatcher {
        private completeCount;
        constructor();
        private _items;
        items: TweenItem[];
        private registerEvent(add);
        play(time?: number): void;
        pause(): void;
        stop(): void;
        private itemComplete(e);
    }
}
declare var FontCustomProcessor: RES.processor.Processor;
declare var ImageCustomProcessor: RES.processor.Processor;
declare var JsonCustomProcessor: RES.processor.Processor;
declare var SheetCustomProcessor: RES.processor.Processor;
declare class AStar {
    static NEIGHBORPOS_X_VALUES: number[];
    static NEIGHBORPOS_Y_VALUES: number[];
    static AS_MOVECOST: number[];
    private m_LastOpenCell;
    private m_MapCells;
    private m_nCols;
    private m_nRows;
    private m_nMarkTag;
    private grid;
    constructor();
    init(mapInfo: MapInfo, turn: number): void;
    findPatch(fromX: number, fromY: number, targetX: number, targetY: number): AStarNode[];
    private reset(cX, cY);
    private closeCell(cell);
    private openCell(cell);
    private reopenCell(cell);
    isWalkable(x: number, y: number): boolean;
    isAlpha(x: number, y: number): boolean;
}
declare class MapCell {
    static CSNONE: number;
    static CSOPEN: number;
    static CSCLOSE: number;
    x: number;
    y: number;
    block: boolean;
    MarkTag: number;
    f: number;
    g: number;
    h: number;
    LastX: number;
    LastY: number;
    Prev: MapCell;
    Next: MapCell;
    State: number;
    dir: number;
}
declare class AStarNode {
    x: number;
    y: number;
    dir: number;
    constructor(x: number, y: number, dir: number);
}
declare class Bresenham {
    static canThrough(astar: AStar, sx: number, sy: number, ex: number, ey: number): any;
    static lineGrids(ox: number, oy: number, tx: number, ty: number): number[];
}
declare class MapGrid extends egret.Sprite {
    protected _nodes: MapNode[][];
    protected _mapCol: number;
    protected _mapRow: number;
    private _poolNodes;
    constructor();
    init(mapInfo: MapInfo, turn: number): void;
    getGridNode(): MapNode;
    readonly mapCol: number;
    readonly mapRow: number;
    getNode(x: number, y: number): MapNode;
    isBlock(x: number, y: number): boolean;
    clearNodes(): void;
}
interface MapInfo {
    titleSize: number;
    mapWidth: number;
    mapHeight: number;
    mapCol: number;
    mapRow: number;
    datas: number[];
}
declare class MapNode {
    data: number;
    readonly alpha: boolean;
    readonly block: boolean;
}
declare class BaseComponent extends BasePanel {
    className: string;
    protected static filterKeys: string[];
    protected static copyKeys: string[];
    constructor();
    data: any;
}
declare class BaseItemRender extends eui.ItemRenderer implements IBaseEvent {
    constructor();
    addEvent(ev: string, obj: any, func: Function, thisObj?: any): void;
    removeEvent(ev: string, obj: any, func: Function, thisObj?: any): void;
    addEventTouchTap(obj: any, func: Function, thisObj?: any): void;
    removeEventTouchTap(obj: any, func: Function, thisObj?: any): void;
    addEventTouchEnd(obj: any, func: Function, thisObj?: any): void;
    removeEventTouchEnd(obj: any, func: Function, thisObj?: any): void;
    addEventChange(obj: any, func: Function, thisObj?: any): void;
    removeEventChange(obj: any, func: Function, thisObj?: any): void;
    addEventChanging(obj: any, func: Function, thisObj?: any): void;
    removeEventChanging(obj: any, func: Function, thisObj?: any): void;
    addEventItemTap(obj: any, func: Function, thisObj?: any): void;
    removeEventItemTap(obj: any, func: Function, thisObj?: any): void;
    addEventAddedFromStage(obj: any, func: Function, thisObj?: any): void;
    removeEventAddedFromStage(obj: any, func: Function, thisObj?: any): void;
    addEventRemovedFromStage(obj: any, func: Function, thisObj?: any): void;
    removeEventRemovedFromStage(obj: any, func: Function, thisObj?: any): void;
    addEventTextLink(obj: any, func: Function, thisObj?: any): void;
    removeEventTextLink(obj: any, func: Function, thisObj?: any): void;
    addEventFocusIn(obj: any, func: Function, thisObj?: any): void;
    removeEventFocusIn(obj: any, func: Function, thisObj?: any): void;
    addEventFocusOut(obj: any, func: Function, thisObj?: any): void;
    removeEventFocusOut(obj: any, func: Function, thisObj?: any): void;
    addEventTouchBegin(obj: any, func: Function, thisObj?: any): void;
    removeEventTouchBegin(obj: any, func: Function, thisObj?: any): void;
    addEventTouchMove(obj: any, func: Function, thisObj?: any): void;
    removeEventTouchMove(obj: any, func: Function, thisObj?: any): void;
    addEventChangeStart(obj: any, func: Function, thisObj?: any): void;
    removeEventChangeStart(obj: any, func: Function, thisObj?: any): void;
    addEventChangeEnd(obj: any, func: Function, thisObj?: any): void;
    removeEventChangeEnd(obj: any, func: Function, thisObj?: any): void;
    destruct(): void;
}
declare class BaseLayer extends eui.Group {
    constructor();
    setSafeArea(): void;
}
declare class BaseLeakDisplay extends egret.DisplayObjectContainer {
    ignoreLeak: boolean;
}
declare module RES {
    type GetResAsyncCallback = (value?: any, key?: string) => any;
    function nameSelector(url: any): string;
    function typeSelector(path: string): string;
    function registerAnalyzer(type: string, analyzerClass: any): void;
    function setIsCompatible(value: boolean): void;
    let isCompatible: boolean;
    function loadConfig(url: string, resourceRoot: string): Promise<void>;
    function loadGroup(name: string, priority?: number, reporter?: PromiseTaskReporter): Promise<void>;
    function isGroupLoaded(name: string): boolean;
    function getGroupByName(name: string): Array<ResourceItem>;
    function createGroup(name: string, keys: Array<string>, override?: boolean): boolean;
    function hasRes(key: string): boolean;
    function getRes(key: string): any;
    function getResAsync(key: string): Promise<any>;
    function getResAsync(key: string, compFunc: GetResAsyncCallback, thisObject: any): Promise<any> | void;
    function getResByUrl(url: string, compFunc?: Function, thisObject?: any, type?: string): Promise<any>;
    function destroyRes(name: string, force?: boolean): boolean;
    function setMaxLoadingThread(thread: number): void;
    function setMaxRetryTimes(retry: number): void;
    function addEventListener(type: string, listener: (event: egret.Event) => void, thisObject: any, useCapture?: boolean, priority?: number): void;
    function removeEventListener(type: string, listener: (event: egret.Event) => void, thisObject: any, useCapture?: boolean): void;
    function $addResourceData(data: {
        name: string;
        type: string;
        url: string;
    }): void;
    function getVersionController(): VersionController;
    function registerVersionController(vcs: VersionController): void;
    function getVirtualUrl(url: any): any;
    class Resource extends egret.EventDispatcher {
        vcs: VersionController;
        isVcsInit: boolean;
        constructor();
        registerVersionController(vcs: VersionController): void;
        loadConfig(): Promise<void>;
        private normalLoadConfig;
        isGroupLoaded(name: string): boolean;
        getGroupByName(name: string): Array<ResourceInfo>;
        loadGroup(name: string, priority?: number, reporter?: PromiseTaskReporter): Promise<any>;
        private _loadGroup(name, priority?, reporter?);
        createGroup(name: string, keys: Array<string>, override?: boolean): boolean;
        hasRes(key: string): boolean;
        getRes(resKey: string): any;
        getResAsync(key: string): Promise<any>;
        getResAsync(key: string, compFunc: GetResAsyncCallback, thisObject: any): Promise<any>;
        getResByUrl(url: string, compFunc?: Function, thisObject?: any, type?: string): Promise<any>;
        destroyRes(name: string, force?: boolean): boolean;
        setMaxLoadingThread(thread: number): void;
        setMaxRetryTimes(retry: number): void;
        addResourceData(data: {
            name: string;
            type: string;
            url: string;
        }): void;
    }
}
interface IBaseEvent {
    addEvent(ev: string, obj: any, func: Function, thisObj: any): any;
    removeEvent(ev: string, obj: any, func: Function, thisObj: any): any;
    addEventTouchTap(obj: any, func: Function, thisObj: any): any;
    removeEventTouchTap(obj: any, func: Function, thisObj: any): any;
    addEventTouchEnd(obj: any, func: Function, thisObj: any): any;
    removeEventTouchEnd(obj: any, func: Function, thisObj: any): any;
    addEventChange(obj: any, func: Function, thisObj: any): any;
    removeEventChange(obj: any, func: Function, thisObj: any): any;
    addEventChanging(obj: any, func: Function, thisObj: any): any;
    removeEventChanging(obj: any, func: Function, thisObj: any): any;
    addEventItemTap(obj: any, func: Function, thisObj: any): any;
    removeEventItemTap(obj: any, func: Function, thisObj: any): any;
    addEventAddedFromStage(obj: any, func: Function, thisObj: any): any;
    removeEventAddedFromStage(obj: any, func: Function, thisObj: any): any;
    addEventRemovedFromStage(obj: any, func: Function, thisObj: any): any;
    removeEventRemovedFromStage(obj: any, func: Function, thisObj: any): any;
    addEventTextLink(obj: any, func: Function, thisObj: any): any;
    removeEventTextLink(obj: any, func: Function, thisObj: any): any;
    addEventFocusIn(obj: any, func: Function, thisObj: any): any;
    removeEventFocusIn(obj: any, func: Function, thisObj: any): any;
    addEventFocusOut(obj: any, func: Function, thisObj: any): any;
    removeEventFocusOut(obj: any, func: Function, thisObj: any): any;
    addEventTouchBegin(obj: any, func: Function, thisObj: any): any;
    removeEventTouchBegin(obj: any, func: Function, thisObj: any): any;
    addEventTouchMove(obj: any, func: Function, thisObj: any): any;
    removeEventTouchMove(obj: any, func: Function, thisObj: any): any;
    addEventChangeStart(obj: any, func: Function, thisObj: any): any;
    removeEventChangeStart(obj: any, func: Function, thisObj: any): any;
    addEventChangeEnd(obj: any, func: Function, thisObj: any): any;
    removeEventChangeEnd(obj: any, func: Function, thisObj: any): any;
}
interface IBaseView {
    isInit(): boolean;
    isShow(): boolean;
    addToParent(p: egret.DisplayObjectContainer): void;
    removeFromParent(): void;
    initUI(): void;
    initData(): void;
    open(...param: any[]): void;
    close(...param: any[]): void;
    destroy(): void;
    setVisible(value: boolean): void;
}
declare class GameMovieClip extends egret.MovieClip {
    private static originalRate;
    playCount: number;
    _compFun: () => void;
    remove: boolean;
    private jsonData;
    private texture;
    private time;
    private _rate;
    pixelHitTest: boolean;
    static factoryDic: {};
    constructor();
    playFile(name: string, playCount?: number, compFun?: () => void, remove?: boolean): void;
    $onAddToStage(stage: egret.Stage, nestLevel: number): void;
    $onRemoveFromStage(): void;
    private createBody();
    private getMcFactory();
    private playComp();
    private readonly playTime;
    clearComFun(): void;
    dispose(): void;
    destroy(): void;
    private resetMovieClip();
    static displayList: egret.MapLike<egret.DisplayObject[]>;
    static addDisplayObject(displayObject: egret.DisplayObject, bitmapData: egret.BitmapData): void;
    static removeDisplayObject(displayObject: egret.DisplayObject, bitmapData: egret.BitmapData): void;
    rate: number;
}
declare class FrameSurveillance extends SingleClass {
    totalTick: number;
    curTime: number;
    totalTime: number;
    lastLevel: number;
    levelInterval: number[];
    constructor();
    static ins(): FrameSurveillance;
    private callBack(timeStamp);
    private updateLevel(curLevel);
}
declare namespace GameSystem {
    let frameSurveillance: any;
}
declare const enum FrameRateLevel {
    A = 0,
    B = 1,
    C = 2,
    D = 3,
}
declare class DelayOptMgr extends SingleClass {
    private _delayTime;
    private _delayOpts;
    constructor();
    static ins(): DelayOptMgr;
    private run(time);
    addDelayOptFunction(thisObj: any, fun: Function, funPara?: any, callBack?: Function, para?: any): void;
    clear(): void;
}
declare class EventMgr extends SingleClass {
    private dict;
    private eVec;
    private flag;
    static ins(): EventMgr;
    constructor();
    static addListener(type: number, listener: Function, thisObj: any): void;
    private addListener(key, listener, thisObj);
    dispatch(type: number, ...param: any[]): void;
    static removeListener(type: number, listener: Function, thisObj: any): void;
    private removeListener(key, listener, thisObj);
    removeAll(thisObj: any, keys?: string[]): void;
    private run(time);
    private dealMsg(vo);
}
declare class EventVo {
    key: string;
    param: any[];
    dispose(): void;
}
declare class LangMgr {
    private static init;
    private static config;
    static initData(resName: string): void;
    static addValue(jsonObj: any): void;
    static getValueByKey(key: any, ...args: any[]): string;
    static getColor(key: any): number;
    static getValueByArr(keyArr: Array<string>, argsArr: Array<any>): string;
}
declare class ObjectPool {
    private static _content;
    private _objs;
    constructor();
    pushObj(obj: any): void;
    popObj(): any;
    clear(): void;
    static pop(refKey: string, ...args: any[]): any;
    static popWithExtraKey(refKey: string, extraKey: any): any;
    static push(obj: any): boolean;
    static clear(): void;
    static clearClass(refKey: string, clearFuncName?: string): void;
    static dealFunc(refKey: string, dealFuncName: string): void;
}
declare module RES {
    class ResourceEvent extends egret.Event {
        static ITEM_LOAD_ERROR: string;
        static CONFIG_COMPLETE: string;
        static CONFIG_LOAD_ERROR: string;
        static GROUP_PROGRESS: string;
        static GROUP_COMPLETE: string;
        static GROUP_LOAD_ERROR: string;
        constructor(type: string, bubbles?: boolean, cancelable?: boolean);
        itemsLoaded: number;
        itemsTotal: number;
        groupName: string;
        resItem: ResourceItem;
        static dispatchResourceEvent(target: egret.IEventDispatcher, type: string, groupName?: string, resItem?: ResourceInfo | undefined, itemsLoaded?: number, itemsTotal?: number): boolean;
    }
}
declare class SceneMgr extends SingleClass {
    static MAIN: string;
    private _currScene;
    constructor();
    static ins(): SceneMgr;
    clear(): void;
    runScene(SceneClass: any): void;
    getCurrScene(): BaseScene;
    getSceneName(): string;
}
declare class SwitchSceneMgr extends SingleClass {
    scenes: any[];
    static ins(): SwitchSceneMgr;
    register(target: any): void;
    unregister(target: any): void;
    changeScene(): void;
    onEnterScene(): void;
    onExitScene(): void;
}
declare class TimerMgr extends SingleClass {
    private _handlers;
    private _currTime;
    private _currFrame;
    private currHandler;
    private nexthandles;
    constructor();
    static ins(): TimerMgr;
    getFrameId(): number;
    getCurrTime(): number;
    static binFunc(b1: MyTimerHandler, b2: MyTimerHandler): number;
    private static DeleteHandle(handler);
    private onEnterFrame(time);
    private delayCheckCache();
    private checkCache();
    private create(startTime, delay, repeat, method, methodObj, onFinish, fobj);
    doTimer(delay: number, repeat: number, method: Function, methodObj: any, onFinish?: Function, fobj?: any): void;
    doTimerDelay(startTime: number, delay: number, repeat: number, method: Function, methodObj: any, onFinish?: Function, fobj?: any): void;
    doNext(method: Function, methodObj: any): void;
    once(startTime: any, method: Function, methodObj: any): void;
    loop(startTime: any, method: Function, methodObj: any): void;
    remove(method: Function, methodObj: any): void;
    removeAll(methodObj: any): void;
    isExists(method: Function, methodObj: any): boolean;
}
declare class MyTimerHandler {
    delay: number;
    forever: boolean;
    repeatCount: number;
    exeTime: number;
    method: Function;
    methodObj: any;
    onFinish: Function;
    finishObj: any;
    clear(): void;
}
declare const enum ByteType {
    Boolean = 0,
    Byte = 1,
    Short = 2,
    Int = 3,
    UByte = 4,
    UShort = 5,
    UInt = 6,
    UInt64 = 7,
    String = 8,
    Float = 9,
    Double = 10,
    Break = 11,
}
declare class CRC16 {
    static POLYNOMIAL: number;
    private static CRCTable;
    private static DropBits;
    static update(bytes: egret.ByteArray, offset?: number, length?: number): number;
    private static makeCRCTable();
    private static CRCBitReflect(input, bitCount);
}
declare class Encrypt {
    private static sSelfSalt;
    private static sTargetSalt;
    private static sKey;
    private static sKeyBuff;
    static encode(inBuff: egret.ByteArray, offset?: number, length?: number): number;
    static decode(inBuff: egret.ByteArray, offset?: number, length?: number): number;
    static getCRC16(bytes: egret.ByteArray, length?: number): number;
    static getCRC16ByPos(bytes: egret.ByteArray, offset?: number, length?: number): number;
    static getCheckKey(): number;
    static getSelfSalt(): number;
    static getTargetSalt(): number;
    static setTargetSalt(value: number): void;
    private static makeSalt();
    private static makeKey();
}
declare class WatcherUtil {
    static removeFromArrayCollection(dataPro: eui.ArrayCollection): void;
    static removeFromArray(dataPro: any[]): void;
    static removeFromObject(obj: any): void;
}
declare class SocketBase extends SingleClass {
    private pid;
    private socket;
    private recvPack;
    private _host;
    private _port;
    private _socketStatus;
    onClosedCallback: Function;
    onConnectedCallback: Function;
    PACK_HANDLER: any[];
    showLog: boolean;
    private catchError;
    constructor();
    readonly host: string;
    readonly port: number;
    getSocket(): egret.WebSocket;
    setOnClose(fun: Function, obj: any): void;
    setOnConnected(fun: Function, obj: any): void;
    newSocket(): void;
    removeEvent(): void;
    connectSocket(host: string, port: number, isUrl?: boolean): void;
    onSocketConnected(): void;
    private onSocketRead(e);
    private sendKeyToServer();
    protected processRecvPacket(packet: GameByteArray): void;
    private dispatch(protocolsId, messageId, byte);
    encodeParam(encodeObj: any[], param: any, data: GameByteArray): void;
    private decodeParam(decodeObj, data);
    close(): void;
    updateStatus(status: number): void;
    recycleByte(byte: GameByteArray): void;
    getBytes(): GameByteArray;
    regHandler(protocolsId: number, messageId: number, fun: (...params: any[]) => void, sysClass: any, decode?: any[]): void;
    sendToServer(bytes: GameByteArray): void;
    private sendPack(bytes);
    printSocketLog(message: string): void;
    onSocketClose(e: any): void;
    connectError(e: any): void;
    reLogin(): void;
    onFinishCheck(newStatus: number, oldStatus: number): void;
}
declare class SocketConst {
    static DEFAULT_TAG: number;
    static DEFAULT_CRC_KEY: number;
    static HEAD_SIZE: number;
    static STATUS_CONNECTING: number;
    static STATUS_CHECKING: number;
    static STATUS_COMMUNICATION: number;
    static STATUS_DISCONNECT: number;
    static CLASSNAME: string;
}
declare class UInt64 {
    static LeftMoveMask: number[];
    static MaxLowUint: number;
    _lowUint: number;
    _highUint: number;
    constructor(v?: any);
    isEqual(target: UInt64): boolean;
    isGreaterThan(target: any): boolean;
    isGreaterThanOrEqual(target: any): boolean;
    readonly isZero: boolean;
    readonly isGreaterThanZero: boolean;
    writeByte(b: egret.ByteArray): void;
    setValue(lowerUint?: number, higherUint?: number): void;
    value: any;
    valueByString: String;
    leftMove(num: number, result?: UInt64): void;
    add(value: UInt64, result?: UInt64): void;
    subtraction(value: UInt64, result?: UInt64): void;
    scale(value: number, result?: UInt64): void;
    toString(radix?: number): string;
    static stringToUint64(value: string, radix?: number, result?: UInt64): UInt64;
}
declare module RES {
    interface File {
        url: string;
        type: string;
        name: string;
        root: string;
    }
    interface Dictionary {
        [file: string]: File | Dictionary;
    }
    interface FileSystem {
        addFile(data: {
            name: string;
            type: string;
            url: string;
            root?: string;
            extra?: 1 | undefined;
        }): any;
        getFile(filename: string): File | null;
        profile(): void;
        removeFile(filename: string): any;
    }
    class NewFileSystem {
        private data;
        constructor(data: Dictionary);
        profile(): void;
        addFile(filename: string, type?: string): void;
        getFile(filename: string): File | null;
        private resolve(dirpath);
        private mkdir(dirpath);
        private exists(dirpath);
    }
}
declare class SoundBg extends BaseSound {
    private _currBg;
    private _currSound;
    private _currSoundChannel;
    private _volume;
    constructor();
    stop(): void;
    play(effectName: string): void;
    touchPlay(): void;
    private playSound(sound);
    private onSoundComplete();
    private addSoundChannel(channel);
    private removeSoundChannel(channel);
    setVolume(volume: number): void;
    loadedPlay(key: string): void;
    checkCanClear(key: string): boolean;
}
declare class SoundEffects extends BaseSound {
    private _volume;
    constructor();
    play(effectName: string): void;
    private playSound(sound);
    setVolume(volume: number): void;
    loadedPlay(key: string): void;
}
declare class SoundManager extends SingleClass {
    private effect;
    private bg;
    private effectOn;
    private bgOn;
    private currBg;
    private bgVolume;
    private effectVolume;
    constructor();
    static ins(): SoundManager;
    playEffect(effectName: string): void;
    playBg(bgName: string): void;
    stopBg(): void;
    touchBg(): void;
    setEffectOn($isOn: boolean): void;
    setBgOn($isOn: boolean): void;
    setBgVolume(volume: number): void;
    getBgVolume(): number;
    setEffectVolume(volume: number): void;
    getEffectVolume(): number;
}
declare class Base64 {
    private static base64EncodeChars;
    private static base64DecodeChars;
    static base64encode(str: string): string;
    static base64decode(str: string): string;
}
declare class BezierWarp {
    private _fromPoint;
    private _toPoint;
    private _centerPoint;
    private _ease;
    private _display;
    private static _pool;
    static pop(fp?: any, ep?: any): BezierWarp;
    static push(bezier: BezierWarp): void;
    constructor(fp: any, ep: any);
    fromPoint: any;
    toPoint: any;
    display: any;
    ease: any;
    centerPoint: any;
    start(time: any, callback?: Function, callObj?: any, delay?: number): void;
    factor: number;
}
declare class ColorUtils {
    static getColorcChinese(type: number): string;
    static readonly BLACK: number;
    static readonly ALPHA: number;
    static readonly RED: number;
    static readonly GREEN: number;
    static readonly BLUE: number;
    static readonly YELLOW: number;
    static readonly GRAY: number;
    static readonly NORMAL_COLOR: number;
    static readonly WHITE_COLOR: string;
    static readonly RED_COLOR: string;
    static readonly GREEN_COLOR: string;
    static readonly GRAY_COLOR: string;
    static readonly ATTR_DEFAULT_COLOR: number;
}
declare class CommonUtils extends SingleClass {
    static addLableStrokeColor(lable: eui.Label, color: any, stroke: any): void;
    static getObjectLength(list: Object): number;
    static getObjectByAttr(list: Object, attrName: string, attrValue: any): any;
    static getObjectByUnionAttr(list: Object, attrValue: any, attrValue1: any): any;
    static copyDataHandler(obj: any): any;
    static copyDataDepth(data: any): any;
    static objectToArray(obj: any): any;
    static objectToArrayShallow(obj: any): any;
    static arraySort(arr: any, key: any, sortType?: SortType): any;
    static lock(): void;
    static unlock(): void;
    static labelIsOverLenght(label: any, num: any): void;
    static overLength(num: number): any;
    static overLengthChange(num: number): any;
    static overLengthNo(num: number): any;
    static getImgBase64Data(img: egret.DisplayObject): void;
    static searchIndex(source: any[], data: any, fun?: Function): number;
}
declare class DateStyle {
    format: string[];
    from: number;
    to: number;
    isFormatNum: boolean;
    constructor(format: string[], from: number, to: number, isFormatNum: boolean);
}
declare class DateUtils {
    static TIME_FORMAT_1: number;
    static TIME_FORMAT_2: number;
    static TIME_FORMAT_3: number;
    static TIME_FORMAT_4: number;
    static TIME_FORMAT_5: number;
    static TIME_FORMAT_6: number;
    static TIME_FORMAT_7: number;
    static TIME_FORMAT_8: number;
    static TIME_FORMAT_9: number;
    static TIME_FORMAT_10: number;
    static TIME_FORMAT_11: number;
    static TIME_FORMAT_12: number;
    static TIME_FORMAT_13: number;
    static TIME_FORMAT_14: number;
    static TIME_FORMAT_15: number;
    static TIME_FORMAT_16: number;
    static TIME_FORMAT_17: number;
    static TIME_FORMAT_18: number;
    static TIME_FORMAT_19: number;
    static TIME_FORMAT_20: number;
    static MS_PER_SECOND: number;
    static MS_PER_MINUTE: number;
    static MS_PER_HOUR: number;
    static MS_PER_DAY: number;
    static MS_PER_WEEK: number;
    static SECOND_PER_HOUR: number;
    static SECOND_PER_DAY: number;
    private static SECOND_PER_MONTH;
    private static SECOND_PER_YEAR;
    static DAYS_PER_WEEK: number;
    static YEAR_PER_YEAR: number;
    static MONTH_PER_YEAR: number;
    static DAYS_PER_MONTH: number;
    static HOURS_PER_DAY: number;
    static MUNITE_PER_HOUR: number;
    static SECOND_PER_MUNITE: number;
    static SECOND_PER_SECOND: number;
    static SECOND_2010: number;
    private static mod;
    private static mul;
    static MINI_DATE_TIME_BASE: number;
    static TIME_ZONE_OFFSET: number;
    static TO_SECOND: number;
    static TO_MINUTE: number;
    static TO_HOUR: number;
    static TO_DAY: number;
    static TO_MONTH: number;
    static TO_YEAR: number;
    private static format_1_value;
    static FORMAT_2: string[];
    private static style_1_value;
    private static style_2_value;
    static STYLE_3: DateStyle;
    private static style_4_value;
    static readonly FORMAT_1: string[];
    static readonly STYLE_1: DateStyle;
    static readonly STYLE_2: DateStyle;
    static readonly STYLE_4: DateStyle;
    static getFormatTimeByStyle(second: number, style?: DateStyle): string;
    static getFormatTimeByStyle1(ms: number, style?: DateStyle): string;
    static formatMiniDateTime(mdt: number): number;
    static formatServerTime(time: number): number;
    static getFormatBySecond(second: number, type?: number, showLength?: number, format?: boolean): string;
    static getRenainSecond(ms?: number): string;
    static getTodayPassedSecond(): number;
    static getTodayZeroSecond(tdate?: any): number;
    static showWeekFirstDay(): any;
    static showWeekLastDay(): Date;
    static calcWeekFirstDay(): Date;
    static calcNextDay(time?: number): number;
    static calcNextNDay(curTime: number, addDay: number, serverTime: number): number;
    static sameDay(time1: number, time2: number): boolean;
    static calcDiffDay(time1: number, time2: number): number;
    static getDayState(time1: number, time2: number): 0 | 1 | -1;
    private static format_1(ms);
    private static format_2(ms);
    private static format_3(ms);
    private static format_4(ms);
    private static format_5(ms, showLength?, format?);
    private static format_6(ms);
    private static format_7(ms);
    private static format_8(time);
    private static format_9(ms);
    private static format_10(ms);
    private static format_11(ms);
    private static format_12(ms);
    private static format_13(time);
    private static format_14(time);
    private static format_15(time);
    private static format_16(time);
    private static format_17(time);
    private static format_18(time);
    private static format_19(time);
    private static format_20(time);
    static formatTimeNum(t: number, k?: number): string;
    static checkTime(time: number, days: number): boolean;
    static formatFullTime(time: number): string;
    static formatStrTimeToMs(str: string): number;
    static getDateTime(str: any): Date;
}
declare class DebugUtils {
    static OpenRule: boolean;
    static OpenDebug: boolean;
    static log(msg: any, ...optionalParams: any[]): void;
    static warn(msg: any, ...optionalParams: any[]): void;
    static error(msg: any, ...optionalParams: any[]): void;
}
declare var debug: {
    log: (msg: any, ...optionalParams: any[]) => void;
    warn: (msg: any, ...optionalParams: any[]) => void;
    error: (msg: any, ...optionalParams: any[]) => void;
};
declare class DeviceUtils {
    private static BluntBangs;
    static readonly IsHtml5: boolean;
    static readonly IsNative: boolean;
    static readonly IsWxMiniGame: boolean;
    static readonly IsQqMiniGame: boolean;
    static readonly IsUcMiniGame: boolean;
    static IsBluntBangs: boolean;
    static readonly IsMobile: boolean;
    static readonly IsPC: boolean;
    static readonly IsQQBrowser: boolean;
    static readonly IsIEBrowser: boolean;
    static readonly IsFirefoxBrowser: boolean;
    static readonly IsChromeBrowser: boolean;
    static readonly IsSafariBrowser: boolean;
    static readonly IsOperaBrowser: boolean;
    static readonly IsIPhone: boolean;
    static readonly isWebgl: boolean;
}
declare class DirUtils {
    static get8DirBy2Point(startPoint: any, endPoint: any): number;
    static angle2dir(angle: number): number;
    static get4DirBy2Point(startPoint: any, endPoint: any): number;
    static get5DirBy8Dir(dir8: number): number;
    static isScaleX(dir8: number): number;
    static getGridByDir(dir: number, cellSize: number, pos?: number, p?: {
        x: number;
        y: number;
    }): {
        x: number;
        y: number;
    };
    static dir2angle(dir: number): number;
    static dirOpposit(dir: number): number;
}
declare class DisplayUtils {
    private static openShake;
    static setShakeOn($on: boolean): void;
    static removeFromParent(child: egret.DisplayObject): void;
    static shakeIt(target: egret.DisplayObject, range: number, duration: number, times?: number, condition?: Function): void;
    static shakeItFocusAttack(target: egret.DisplayObject, range: number, duration: number, times?: number, condition?: Function): void;
    static shakeItEntity(target: egret.DisplayObject, range: number, duration: number, times?: number, condition?: Function): void;
    static drawCir(shape: egret.Shape, radius: number, angle: number, anticlockwise?: boolean, starAangle?: number): egret.Shape;
    static drawrect(shape: egret.Shape, width: number, height: number, anticlockwise?: boolean): egret.Shape;
    static scrollerToBottom(scroller: eui.Scroller, value?: number, tween?: boolean): void;
}
declare class EncryptMd5 {
    private static hexcase;
    private static b64pad;
    static hex_md5(s: any): string;
    private static b64_md5(s);
    private static any_md5(s, e);
    private static hex_hmac_md5(k, d);
    private static b64_hmac_md5(k, d);
    private static any_hmac_md5(k, d, e);
    private static md5_vm_test();
    private static rstr_md5(s);
    private static rstr_hmac_md5(key, data);
    private static rstr2hex(input);
    private static rstr2b64(input);
    private static rstr2any(input, encoding);
    private static str2rstr_utf8(input);
    private static str2rstr_utf16le(input);
    private static str2rstr_utf16be(input);
    private static rstr2binl(input);
    private static binl2rstr(input);
    private static binl_md5(x, len);
    private static md5_cmn(q, a, b, x, s, t);
    private static md5_ff(a, b, c, d, x, s, t);
    private static md5_gg(a, b, c, d, x, s, t);
    private static md5_hh(a, b, c, d, x, s, t);
    private static md5_ii(a, b, c, d, x, s, t);
    private static safe_add(x, y);
    private static bit_rol(num, cnt);
}
declare class EncryptSha1 {
    private static hexcase;
    private static b64pad;
    static hex_sha1(s: any): string;
    static b64_sha1(s: any): string;
    static any_sha1(s: any, e: any): string;
    static hex_hmac_sha1(k: any, d: any): string;
    static b64_hmac_sha1(k: any, d: any): string;
    static any_hmac_sha1(k: any, d: any, e: any): string;
    private static sha1_vm_test();
    private static rstr_sha1(s);
    private static rstr_hmac_sha1(key, data);
    private static rstr2hex(input);
    private static rstr2b64(input);
    private static rstr2any(input, encoding);
    private static str2rstr_utf8(input);
    private static str2rstr_utf16le(input);
    private static str2rstr_utf16be(input);
    private static rstr2binb(input);
    private static binb2rstr(input);
    private static binb_sha1(x, len);
    private static sha1_ft(t, b, c, d);
    private static sha1_kt(t);
    private static safe_add(x, y);
    private static bit_rol(num, cnt);
}
declare class ErrorUtils {
    private static _ins;
    private stackObj;
    static ins(): ErrorUtils;
    show(str: string): void;
    static Assert(expr: any, msg: string): boolean;
    getErrorStackInfo(): string;
}
declare let Assert: typeof ErrorUtils.Assert;
declare class FilterUtils {
    static shadowVertexSrc: string;
    static shadowFragmentSrc: string;
    static readonly grayFilter: egret.ColorMatrixFilter;
    static readonly grayFilter1: egret.ColorMatrixFilter;
    static readonly ARRAY_GRAY_FILTER: egret.ColorMatrixFilter[];
    static readonly redFilter: egret.ColorMatrixFilter;
    static readonly greenFilter: egret.ColorMatrixFilter;
    static readonly greenFilter1: egret.ColorMatrixFilter;
    static readonly ARRAY_GREEN_FILTER: egret.ColorMatrixFilter[];
    static readonly ARRAY_RED_FILTER: egret.ColorMatrixFilter[];
    static readonly blurFilter: egret.BlurFilter;
    static readonly ARRAY_BLUR_FILTER: egret.BlurFilter[];
    static readonly darkFilter: egret.ColorMatrixFilter;
    static readonly ARRAY_DARK_FILTER: egret.ColorMatrixFilter[];
    static readonly shadowFilter: egret.CustomFilter[];
    static clearFilter(target: egret.DisplayObject, filterType: any): void;
    static clearColorFilter(target: egret.DisplayObject): void;
}
declare class HttpUtils {
    private static _ins;
    private httpRequestInfos;
    private isComplete;
    private httpRequest;
    static getIns(): HttpUtils;
    constructor();
    sendUrl(url: string, params: any, method?: string, thisObject?: any, completeListener?: Function, errorListener?: Function, errcode?: any, sendCount?: number, responseType?: string, ...argArray: any[]): void;
    private sendReportUrl();
    private onGetComplete(event);
    private onGetIOError(event);
    private onCallback(hrInfo, event, success?);
}
declare class HttpReqInfo {
    url: string;
    params: any;
    method: string;
    thisObject: any;
    completeListener: Function;
    errcode: string;
    errorListener: Function;
    sendCount: number;
    responseType: string;
    argArray: any[];
}
declare class Keyboard {
    static LEFT: number;
    static UP: number;
    static RIGHT: number;
    static DOWN: number;
    static KC_1: number;
    static KC_2: number;
    static KC_3: number;
    static KC_4: number;
    static KC_5: number;
    static KC_6: number;
    static KC_7: number;
    static KC_8: number;
    static KC_9: number;
    static KC_0: number;
    static A: number;
    static B: number;
    static C: number;
    static D: number;
    static E: number;
    static F: number;
    static G: number;
    static H: number;
    static I: number;
    static J: number;
    static K: number;
    static L: number;
    static M: number;
    static N: number;
    static O: number;
    static P: number;
    static Q: number;
    static R: number;
    static S: number;
    static T: number;
    static U: number;
    static V: number;
    static W: number;
    static X: number;
    static Y: number;
    static Z: number;
    static SPACE: number;
    static BRACE_L: number;
    static BACKSLASH: number;
    static BRACE_R: number;
    static BACK_QUOTE: number;
    static ENTER: number;
    static KC_BACKSPACE: number;
    static KC_TAB: number;
    static KC_ENTER: number;
    static KC_SHIFT: number;
    static KC_CONTROL: number;
    static KC_ESCAPE: number;
    static KC_SPACE: number;
    static KC_WINDOWS: number;
    static KC_MENU: number;
}
declare class KeyboardUtils extends SingleClass {
    private key_ups;
    private key_downs;
    constructor();
    static ins(): KeyboardUtils;
    addKeyUp(callback: Function, target: any): void;
    addKeyDown(callback: Function, target: any): void;
    removeKeyUp(callback: Function, target: any): void;
    removeKeyDown(callback: Function, target: any): void;
}
declare class LoadUtils extends SingleClass {
    private _configs;
    private _onConfigComplete;
    private _onConfigCompleteTarget;
    private _groups;
    private _load_count;
    constructor();
    static ins(): LoadUtils;
    addConfig(jsonPath: string, filePath: string): void;
    loadConfig($onConfigComplete: Function, $onConfigCompleteTarget: any): void;
    private loadNextConfig();
    private onConfigCompleteHandle(event);
    loadGroup($groupName: string, $onResourceLoadComplete: Function, $onResourceLoadProgress: Function, $onResourceLoadTarget: any): void;
    private onResourceLoadComplete(event);
    private onResourceLoadProgress(event);
    private onResourceLoadError(event);
}
declare class LongPressUtils extends SingleClass {
    static DEALY: number;
    static REPEAT: number;
    static RADIUS: number;
    private _targetDic;
    private _delayTime;
    private _touchX;
    private _touchY;
    private _radius;
    private _curTarget;
    static ins(): LongPressUtils;
    addLongPress(obj: any, func: Function, thisObj: any): void;
    forceEndPress(target?: any): void;
    onBegin(e: any): void;
    onEnd(): void;
    removeLongPress(hashCode: any): void;
    onRepeat(): void;
    onMove(e: any): void;
    addOnceByTime(obj: any, func: Function, thisObj: any, time: number): void;
    removeOnceByTime(hashCode: any): void;
    onBeginByTime(t: any): void;
    onOnceMove(e: any): void;
    onOnceTap(): void;
    onEndByTime(): void;
}
declare class MathUtils {
    static getAngle(radian: number): number;
    static getRadian(angle: number): number;
    static getRadian2(p1X: number, p1Y: number, p2X: number, p2Y: number): number;
    static getDistance(p1X: number, p1Y: number, p2X: number, p2Y: number): number;
    static getDistanceByObject(s: {
        x: number;
        y: number;
    }, t: {
        x: number;
        y: number;
    }): number;
    static getDistanceX2ByObject(s: {
        x: number;
        y: number;
    }, t: {
        x: number;
        y: number;
    }): number;
    static getDirMove(angle: number, distance: number, offsetX?: number, offsetY?: number): {
        x: number;
        y: number;
    };
    static limit($from: number, $end: number): number;
    static limitInteger($from: number, $end: number): number;
    static randomArray(arr: Array<any>): any;
    static toInteger(value: number): number;
}
declare class MobileDevice {
    private static canvas;
    private static gl;
    private static glRenderer;
    private static models;
    private static devices;
    static fringeScreenModels: string[];
    static readonly model: string;
    static arrayContainsStr(arg: string[], str: string): number;
    static isFringeScreen(modelName?: string): boolean;
    static getCanvas(): any;
    static getGl(): any;
    static getResolution(): string;
    static getGlRenderer(): any;
    static getModels(): any;
    static is(match: any): boolean;
}
declare class NetCalcUtils {
    static sendBytes: number;
    static revBytes: number;
    static revBytes2: number;
    static msgBytes: {};
    static calcRevBytes(sysId: any, msgId: any, len: any): void;
    static clearRevBytes(): void;
}
declare class Page {
    private size;
    currentPage: number;
    pageData: Array<any>;
    private dataSource;
    constructor(source: Array<any>, size?: number);
    readonly length: number;
    setPageData(): void;
    getDataSource(): Array<any>;
    readonly totalPage: number;
    havePre(): boolean;
    haveNext(): boolean;
    prev(): void;
    next(): void;
    first(): void;
    last(): void;
    gotoPage(index: number): void;
}
declare class SortUtils {
    static sortAscByKey(obj1: any, obj2: any, key?: string): number;
    static sortDescByKey(obj1: any, obj2: any, key?: string): number;
    static sortByKey(obj1: any, obj2: any, key?: string, sortType?: SortType): number;
}
declare const enum SortType {
    Asc = 0,
    Desc = 1,
}
declare class StageUtils extends SingleClass {
    private static _uiStage;
    private _isFullScreen;
    static COMMON_STAGE_HEIGHT: number;
    constructor();
    static ins(): StageUtils;
    getHeight(): number;
    getWidth(): number;
    setTouchChildren(value: boolean): void;
    setMaxTouches(value: number): void;
    setFrameRate(value: number): void;
    setScaleMode(value: string): void;
    getStage(): egret.Stage;
    getUIStage(): eui.UILayer;
}
declare class StringUtils {
    private static HTML;
    static LuoMaNumbers: string[];
    static REG_NUM: RegExp;
    private static chnNumCharCN;
    private static chnNameValueCN;
    static trimSpace(str: string): string;
    static trimMidReplace(str: string): string;
    static getStringLength(str: string): number;
    static isChinese(str: string): boolean;
    static strByteLen(str: string): number;
    static complementByChar(str: string, length: number, char?: string, ignoreHtml?: boolean): string;
    static repeatStr(str: string, count: number): string;
    static addColor(content: string, color: any): string;
    static addColor1(content: string, color: any): Object;
    static substitute(str: string, ...rest: any[]): string;
    static substr(str: string, ...rest: any[]): string;
    static replaceStr(src: string, tar: string, des: string): string;
    static getStrColor(src: string): any[];
    static replaceStrColor(src: string, color: any): string;
    static replace(str: string, ...args: any[]): string;
    static getStrByRegExp(src: string, reg?: RegExp): string[];
    static formalName(str: string): string;
    static ChineseToNumber(chnStr: string): number;
    static NumberToChinese(num: number): string;
    private static SectionToChinese(section);
    private static strLeachNum(str, len, sign?);
    static getChineseWeek(numbers: number[]): string;
}
declare class TextUtils {
    private static STYLE_COLOR;
    private static STYLE_SIZE;
    private static PROP_TEXT;
    private static UNDERLINE_TEXT;
    private static EVENT;
    private static ITEMID;
    private static ITEMCOUNT;
    static generateTextFlow(sourceText: string): egret.ITextElement[];
    static generateTextFlow1(sourceText: string): egret.ITextElement[];
    private static getSingleTextFlow1(text);
    private static getSingleTextFlow(text);
    static generateTextFlow2(sourceText: string, value?: number): egret.ITextElement[];
    static getSingleTextFlow2(text: string, value?: number): string;
    static getChineseNum(num: number): string;
    static formatUnderLineStr(content: any, event?: any): egret.ITextElement[];
}
declare class TweenUtil {
    static sparkCont: any;
    static FadeOut(target: any, thisObj: any, params: any): void;
    static FadeIn(target: any, thisObj: any, params: any): void;
    static LineTo(target: any, e: egret.DisplayObject, i: egret.DisplayObject, parent?: any, params?: any): void;
    static JumpAniByBottom(target: any, bottom?: number, time?: any, ease?: typeof egret.Ease.bounceOut): void;
    static ListAnimation(target: any, type?: ListAnimType, gap?: number, alpha?: number, group?: string, targetPoint?: any): void;
}
declare const enum ListAnimType {
    TWEEN_R = 1,
    TWEEN_RL = 2,
    TWEEN_U = 3,
    TWEEN_L = 4,
    TWEEN_D = 5,
    TWEEN_S_B = 6,
    TWEEN_S_S = 7,
}
declare class RecycleMgr extends SingleClass {
    private static MaxImageSize;
    private isFirstEnter;
    private resDisTime;
    imageTotalSize: number;
    private images;
    jsons: any;
    sheets: any;
    fonts: any;
    constructor();
    static ins(): RecycleMgr;
    addImage(key: string, value: any): void;
    delImage(key: string): void;
    private start();
    destroy(): void;
    destroyWin(): void;
    disposeResTime(hashCode: number): void;
    private destroyRes();
    private checkCanDestroy(hashCode);
    destroyMapFile(fileDic: any): void;
    private destoryMc(key);
    destoryJson(key: string): void;
    private getTextureHashCode(texture);
    reloadContainer(obj: egret.DisplayObjectContainer, reloadMc?: boolean): void;
    reloadImg(image: eui.Image): void;
    fontGetTexturePath(url: string, fntText: string): string;
}
