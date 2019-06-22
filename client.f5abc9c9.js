parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"../core/sync/common.ts":[function(require,module,exports) {
"use strict";var O;exports.__esModule=!0,function(O){O.COMPONENT="0",O.DATA="1",O.MODULE_NAME="2",O.COMPONENT_NAME="3",O.PROPS="4",O.POSITION="5",O.ROTATION="6",O.SCALE="7",O.STEP="8",O.COMPONENTS="9",O.FONT="a",O.NAME="b",O.FORWARD="c",O.BACKWARD="d",O.ACTION="e",O.FILE="f"}(O=exports.Words||(exports.Words={}));
},{}],"../core/server.ts":[function(require,module,exports) {
"use strict";var e;function t(t){e=t}function s(t){return e.requestModule(t)}function r(t,s){return e.fetchModuleAsset(t,s)}function o(t,s){return e.fetchAsset(t,s)}function u(t){return e.showFileDialog(t)}function n(t,s){return e.getAssetURL(t,s)}exports.__esModule=!0,exports.setServer=t,exports.requestModule=s,exports.fetchModuleAsset=r,exports.fetchAsset=o,exports.showFileDialog=u,exports.getAssetURL=n;
},{}],"../core/file.ts":[function(require,module,exports) {
"use strict";var t=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function s(t){try{a(r.next(t))}catch(e){o(e)}}function u(t){try{a(r.throw(t))}catch(e){o(e)}}function a(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(s,u)}a((r=r.apply(t,e||[])).next())})},e=this&&this.__generator||function(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(u){o=[6,u],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};exports.__esModule=!0;var n=require("./server"),r=function(){function r(t,e){this.presentationId=t,this.uuid=e,this.isSlyeFile=!0}return r.prototype.load=function(){return t(this,void 0,Promise,function(){var t;return e(this,function(e){switch(e.label){case 0:return this.cache?[2,this.cache]:[4,n.fetchAsset(this.presentationId,this.uuid)];case 1:return t=e.sent(),this.cache=t,[2,t]}})})},r.prototype.url=function(){return t(this,void 0,Promise,function(){var t,n,r;return e(this,function(e){switch(e.label){case 0:return this.blobURL?[2,this.blobURL]:[4,this.load()];case 1:return t=e.sent(),n=new Blob([t]),r=URL.createObjectURL(n),this.blobURL=r,[2,r]}})})},r.prototype.streamURL=function(){return t(this,void 0,Promise,function(){var t;return e(this,function(e){switch(e.label){case 0:return this.urlCache?[2,this.urlCache]:[4,n.getAssetURL(this.presentationId,this.uuid)];case 1:return t=e.sent(),this.urlCache=t,[2,t]}})})},r}();exports.File=r;
},{"./server":"../core/server.ts"}],"../core/sync/serializer.ts":[function(require,module,exports) {
"use strict";var t=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))(function(o,i){function s(t){try{u(n.next(t))}catch(e){i(e)}}function a(t){try{u(n.throw(t))}catch(e){i(e)}}function u(t){t.done?o(t.value):new r(function(e){e(t.value)}).then(s,a)}u((n=n.apply(t,e||[])).next())})},e=this&&this.__generator||function(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(a){i=[6,a],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},r=this&&this.__read||function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,i=r.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(n=i.next()).done;)s.push(n.value)}catch(a){o={error:a}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return s},n=this&&this.__spread||function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(r(arguments[e]));return t};exports.__esModule=!0;var o=require("./common"),i=require("../file"),s=function(){function r(){this.components=new Map,this.steps=new Map,this.files=new Map,this.unserializeComponent=this.unserializeComponent.bind(this)}return r.prototype.serializeComponent=function(t){var e,r,n;if(this.components.has(t.uuid))return(e={})[o.Words.COMPONENT]=t.uuid,e;this.components.set(t.uuid,t);var i=t.getPosition(),s=i.x,a=i.y,u=i.z,l=t.getRotation(),c=l.x,p=l.y,d=l.z,h=t.getScale(),f=h.x,y=h.y,W=h.z;return(r={})[o.Words.COMPONENT]=t.uuid,r[o.Words.DATA]=((n={})[o.Words.MODULE_NAME]=t.moduleName,n[o.Words.COMPONENT_NAME]=t.componentName,n[o.Words.PROPS]=this.serializeActionData(t.props),n[o.Words.POSITION]=[s,a,u],n[o.Words.ROTATION]=[c,p,d],n[o.Words.SCALE]=[f,y,W],n),r},r.prototype.serializeStep=function(t){var e,r,n,i=this;if(this.steps.has(t.uuid))return(e={})[o.Words.STEP]=t.uuid,e;this.steps.set(t.uuid,t);var s=t.getPosition(),a=s.x,u=s.y,l=s.z,c=t.getRotation(),p=c.x,d=c.y,h=c.z,f=t.getScale(),y=f.x,W=f.y,O=f.z;return(r={})[o.Words.STEP]=t.uuid,r[o.Words.DATA]=((n={})[o.Words.COMPONENTS]=t.components.map(function(t){return i.serializeComponent(t)}),n[o.Words.POSITION]=[a,u,l],n[o.Words.ROTATION]=[p,d,h],n[o.Words.SCALE]=[y,W,O],n),r},r.prototype.serializeActionData=function(t){var e,r,n,i={};for(var s in t){var a=t[s];null==a||"string"==typeof a||"number"==typeof a||"boolean"==typeof a?i[s]=a:a.isSlyeComponent?i[s]=this.serializeComponent(a):a.isSlyeStep?i[s]=this.serializeStep(a):a.isSlyeFont?i[s]=((e={})[o.Words.FONT]=((r={})[o.Words.MODULE_NAME]=a.moduleName,r[o.Words.NAME]=a.name,r),e):a.isSlyeFile?i[s]=((n={})[o.Words.FILE]=a.uuid,n):i[s]={_:this.serializeActionData(a)}}return i},r.prototype.unserializeComponent=function(r){return t(this,void 0,Promise,function(){var t,i,s,a,u,l,c;return e(this,function(e){switch(e.label){case 0:return t=o.Words.DATA,i=r[t],s=o.Words.COMPONENT,a=r[s],i?(l=this.provideComponent,c=[a,i[o.Words.MODULE_NAME],i[o.Words.COMPONENT_NAME]],[4,this.unserializeActionData(i[o.Words.PROPS])]):[2,this.components.get(a)];case 1:return[4,l.apply(this,c.concat([e.sent()]))];case 2:return(u=e.sent()).setPosition.apply(u,n(i[o.Words.POSITION])),u.setRotation.apply(u,n(i[o.Words.ROTATION])),u.setScale.apply(u,n(i[o.Words.SCALE])),this.components.set(a,u),[2,u]}})})},r.prototype.unserializeFile=function(t){var e=t[o.Words.FILE];if(this.files.has(e))return this.files.get(e);var r=new i.File(this.presentationUUID,e);return this.files.set(e,r),r},r.prototype.unserializeStep=function(r){var i=this,s=r[o.Words.DATA],a=r[o.Words.STEP];if(!s)return this.steps.get(a);var u=this.provideStep(a);return u.setPosition.apply(u,n(s[o.Words.POSITION])),u.setRotation.apply(u,n(s[o.Words.ROTATION])),u.setScale.apply(u,n(s[o.Words.SCALE])),s[o.Words.COMPONENTS].map(this.unserializeComponent).map(function(r){return t(i,void 0,void 0,function(){var t,n;return e(this,function(e){switch(e.label){case 0:return n=(t=u).add,[4,r];case 1:return[2,n.apply(t,[e.sent()])]}})})}),this.steps.set(a,u),u},r.prototype.unserializeActionData=function(r){return t(this,void 0,Promise,function(){var t,n,i,s,a,u,l,c,p,d,h,f,y;return e(this,function(e){switch(e.label){case 0:for(i in t={},n=[],r)n.push(i);s=0,e.label=1;case 1:return s<n.length?(a=n[s],null!=(u=r[a])&&"string"!=typeof u&&"number"!=typeof u&&"boolean"!=typeof u?[3,2]:(t[a]=u,[3,10])):[3,11];case 2:return u[o.Words.COMPONENT]?(l=t,c=a,[4,this.unserializeComponent(u)]):[3,4];case 3:return l[c]=e.sent(),[3,10];case 4:return u[o.Words.STEP]?(t[a]=this.unserializeStep(u),[3,10]):[3,5];case 5:return u[o.Words.FILE]?(t[a]=this.unserializeFile(u),[3,10]):[3,6];case 6:return u[o.Words.FONT]?(p=u[o.Words.FONT],d=t,h=a,[4,this.provideFont(p[o.Words.MODULE_NAME],p[o.Words.NAME])]):[3,8];case 7:return d[h]=e.sent(),[3,10];case 8:return u._?(f=t,y=a,[4,this.unserializeActionData(u._)]):[3,10];case 9:f[y]=e.sent(),e.label=10;case 10:return s++,[3,1];case 11:return[2,t]}})})},r.prototype.serialize=function(t,e,r){var n;return JSON.stringify(((n={})[t?o.Words.FORWARD:o.Words.BACKWARD]=!0,n[o.Words.ACTION]=e,n[o.Words.DATA]=this.serializeActionData(r),n))},r.prototype.unserialize=function(r){return t(this,void 0,Promise,function(){var t,n;return e(this,function(e){switch(e.label){case 0:return t=JSON.parse(r),[4,this.unserializeActionData(t[o.Words.DATA])];case 1:return n=e.sent(),[2,{forward:!!t[o.Words.FORWARD],action:t[o.Words.ACTION],data:n}]}})})},r}();exports.Serializer=s;
},{"./common":"../core/sync/common.ts","../file":"../core/file.ts"}],"../core/headless/transformable.ts":[function(require,module,exports) {
"use strict";exports.__esModule=!0;var t=function(){function t(){this.position={x:0,y:0,z:0},this.rotation={x:0,y:0,z:0},this.scale={x:1,y:1,z:1}}return t.prototype.setPosition=function(t,o,i){this.position.x=t,this.position.y=o,this.position.z=i},t.prototype.setRotation=function(t,o,i){this.rotation.x=t,this.rotation.y=o,this.rotation.z=i},t.prototype.setScale=function(t,o,i){this.scale.x=t,this.scale.y=o,this.scale.z=i},t.prototype.getPosition=function(){var t=this.position;return{x:t.x,y:t.y,z:t.z}},t.prototype.getRotation=function(){var t=this.rotation;return{x:t.x,y:t.y,z:t.z}},t.prototype.getScale=function(){var t=this.scale;return{x:t.x,y:t.y,z:t.z}},t}();exports.TransformableImpl=t;
},{}],"../core/headless/component.ts":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(r,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var o in r)r.hasOwnProperty(o)&&(t[o]=r[o])})(r,o)};return function(r,o){function n(){this.constructor=r}t(r,o),r.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var r,o=1,n=arguments.length;o<n;o++)for(var e in r=arguments[o])Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e]);return t}).apply(this,arguments)};exports.__esModule=!0;var o=require("./transformable"),n=function(o){function n(t,r,n,e){var p=o.call(this)||this;return p.uuid=t,p.moduleName=r,p.componentName=n,p.isSlyeComponent=!0,p.props=e,p}return t(n,o),n.prototype.getProp=function(t){return this.props[t]},n.prototype.patchProps=function(t){this.props=r({},this.props,t)},n}(o.TransformableImpl);exports.HeadlessComponent=n;
},{"./transformable":"../core/headless/transformable.ts"}],"../core/headless/font.ts":[function(require,module,exports) {
"use strict";var t=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{l(r.next(t))}catch(e){i(e)}}function a(t){try{l(r.throw(t))}catch(e){i(e)}}function l(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(u,a)}l((r=r.apply(t,e||[])).next())})},e=this&&this.__generator||function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};exports.__esModule=!0;var n=function(){function n(t,e){this.moduleName=t,this.name=e,this.isSlyeFont=!0}return n.prototype.layout=function(n){return t(this,void 0,Promise,function(){return e(this,function(t){throw new Error("`layout` is not implemented for headless fonts")})})},n}();exports.HeadlessFont=n;
},{}],"../core/headless/presentation.ts":[function(require,module,exports) {
"use strict";exports.__esModule=!0;var t=function(){function t(t){this.uuid=t,this.isSlyePresentation=!0,this.steps=[]}return t.prototype.del=function(t){var e=this.steps.indexOf(t);e<0||(t.owner=void 0,this.steps.splice(e,1))},t.prototype.add=function(t){t.owner&&t.owner!==this&&t.owner.del(t),t.owner=this,this.steps.push(t)},t.prototype.getStepId=function(t){return this.steps.indexOf(t)},t}();exports.HeadlessPresentation=t;
},{}],"../core/headless/step.ts":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(o,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)o.hasOwnProperty(n)&&(t[n]=o[n])})(o,n)};return function(o,n){function e(){this.constructor=o}t(o,n),o.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}}();exports.__esModule=!0;var o=require("./transformable"),n=function(o){function n(t){var n=o.call(this)||this;return n.uuid=t,n.isSlyeStep=!0,n.components=[],n}return t(n,o),n.prototype.del=function(t){var o=this.components.indexOf(t);o<0||(t.owner=void 0,this.components.splice(o,1))},n.prototype.add=function(t){t.owner&&t.owner!==this&&t.owner.del(t),t.owner=this,this.components.push(t)},n}(o.TransformableImpl);exports.HeadlessStep=n;
},{"./transformable":"../core/headless/transformable.ts"}],"../core/headless/index.ts":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}exports.__esModule=!0,e(require("./component")),e(require("./font")),e(require("./presentation")),e(require("./step"));
},{"./component":"../core/headless/component.ts","./font":"../core/headless/font.ts","./presentation":"../core/headless/presentation.ts","./step":"../core/headless/step.ts"}],"../core/sync/headlessSerializer.ts":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),e=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{a(r.next(t))}catch(e){i(e)}}function s(t){try{a(r.throw(t))}catch(e){i(e)}}function a(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(u,s)}a((r=r.apply(t,e||[])).next())})},n=this&&this.__generator||function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(s){i=[6,s],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};exports.__esModule=!0;var r=require("./serializer"),o=require("../headless"),i=function(r){function i(){var t=null!==r&&r.apply(this,arguments)||this;return t.fonts=[],t}return t(i,r),i.prototype.provideFont=function(t,r){return e(this,void 0,Promise,function(){var e;return n(this,function(n){return(e=this.fonts.filter(function(e){return e.moduleName===t&&e.name===r})[0])?[2,e]:(e=new o.HeadlessFont(t,r),this.fonts.push(e),[2,e])})})},i.prototype.provideComponent=function(t,r,i,u){return e(this,void 0,Promise,function(){return n(this,function(e){return[2,new o.HeadlessComponent(t,r,i,u)]})})},i.prototype.provideStep=function(t){return new o.HeadlessStep(t)},i}(r.Serializer);exports.HeadlessSerializer=i;
},{"./serializer":"../core/sync/serializer.ts","../headless":"../core/headless/index.ts"}],"../core/sly/types.ts":[function(require,module,exports) {
"use strict";var e;exports.__esModule=!0,function(e){e[e.FILE=0]="FILE",e[e.FONT=1]="FONT"}(e=exports.RefKind||(exports.RefKind={}));
},{}],"../core/sly/encoder.ts":[function(require,module,exports) {
"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(e)}var e=this&&this.__values||function(o){var e="function"==typeof Symbol&&o[Symbol.iterator],t=0;return e?e.call(o):{next:function(){return o&&t>=o.length&&(o=void 0),{value:o&&o[t++],done:!o}}}};exports.__esModule=!0;var t=require("./types");function n(o){var n,u,l,a,s={template:void 0,steps:{}};try{for(var p=e(o.steps),y=p.next();!y.done;y=p.next()){var f=y.value,c=f.getPosition(),m=c.x,d=c.y,v=c.z,x=f.getRotation(),b=x.x,S=x.y,h=x.z,g=f.getScale(),z={position:[m,d,v],rotation:[b,S,h],scale:[g.x,g.y,g.z],components:[]};try{for(var N=e(f.components),w=N.next();!w.done;w=N.next()){var F=w.value,R=F.getPosition(),_=R.x,E=R.y,j=R.z,k=F.getRotation(),K=k.x,P=k.y,q=k.z,I=F.getScale(),L=I.x,M=I.y,O=I.z,T={uuid:F.uuid,moduleName:F.moduleName,component:F.componentName,position:[_,E,j],rotation:[K,P,q],scale:[L,M,O],props:{}};for(var A in F.props){var B=F.props[A];if("string"==typeof B||"number"==typeof B)T.props[A]=B;else if(r(B))T.props[A]={kind:t.RefKind.FONT,font:B.name,moduleName:B.moduleName};else{if(!i(B))throw new Error("Encoder for "+B+" is not implemented yet.");T.props[A]={kind:t.RefKind.FILE,uuid:B.uuid}}}z.components.push(T)}}catch(C){l={error:C}}finally{try{w&&!w.done&&(a=N.return)&&a.call(N)}finally{if(l)throw l.error}}s.steps[f.uuid]=z}}catch(D){n={error:D}}finally{try{y&&!y.done&&(u=p.return)&&u.call(p)}finally{if(n)throw n.error}}return s}function r(e){return"object"===o(e)&&!!e.isSlyeFont}function i(e){return"object"===o(e)&&!!e.isSlyeFile}exports.encode=n;
},{"./types":"../core/sly/types.ts"}],"../core/actions.ts":[function(require,module,exports) {
"use strict";exports.__esModule=!0,exports.actions={DELETE_STEP:{forward:function(r,e){var t=e.step,n=r.steps.indexOf(t);return n>=0&&r.del(t),{step:t,index:n}},backward:function(r,e){var t=e.index,n=e.step;t<0||r.add(n,t)}},DELETE_COMPONENT:{forward:function(r,e){var t=e.component,n=t.owner;return n.del(t),{step:n,component:t}},backward:function(r,e){var t=e.component;e.step.add(t)}},UPDATE_POSITION:{forward:function(r,e){var t=e.object,n=e.prevX,o=e.prevY,a=e.prevZ,p=e.x,c=e.y,v=e.z;return t.setPosition(p,c,v),{object:t,prevX:n,prevY:o,prevZ:a}},backward:function(r,e){var t=e.object,n=e.prevX,o=e.prevY,a=e.prevZ;t.setPosition(n,o,a)}},UPDATE_ROTATION:{forward:function(r,e){var t=e.object,n=e.prevX,o=e.prevY,a=e.prevZ,p=e.x,c=e.y,v=e.z;return t.setRotation(p,c,v),{object:t,prevX:n,prevY:o,prevZ:a}},backward:function(r,e){var t=e.object,n=e.prevX,o=e.prevY,a=e.prevZ;t.setRotation(n,o,a)}},UPDATE_SCALE:{forward:function(r,e){var t=e.object,n=e.prevX,o=e.prevY,a=e.prevZ,p=e.x,c=e.y,v=e.z;return t.setScale(p,c,v),{object:t,prevX:n,prevY:o,prevZ:a}},backward:function(r,e){var t=e.object,n=e.prevX,o=e.prevY,a=e.prevZ;t.setScale(n,o,a)}},UPDATE_PROPS:{forward:function(r,e){var t=e.component,n=e.patch,o={};for(var a in n){var p=t.getProp(a);p!==n[a]&&(o[a]=p)}return t.patchProps(n),{component:t,patch:o}},backward:function(r,e){var t=e.component,n=e.patch;t.patchProps(n)}},INSERT_COMPONENT:{forward:function(r,e){var t=e.step,n=e.component;return t.add(n),{component:n}},backward:function(r,e){var t=e.component;t.owner.del(t)}},INSERT_STEP:{forward:function(r,e){var t=e.step;return r.add(t),{step:t}},backward:function(r,e){var t=e.step;r.del(t)}}};
},{}],"../core/sync/sync.ts":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(r,o){function s(e){try{c(i.next(e))}catch(t){o(t)}}function a(e){try{c(i.throw(e))}catch(t){o(t)}}function c(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(s,a)}c((i=i.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,i=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){s.label=o[1];break}if(6===o[0]&&s.label<r[1]){s.label=r[1],r=o;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(o);break}r[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(a){o=[6,a],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};exports.__esModule=!0;var n=require("../sly/encoder"),i=require("../actions"),r=function(){function r(e,t,n,i,r){if(void 0===r&&(r=!1),this.presentation=e,this.serializer=t,this.ch=n,this.slyDecoder=i,this.isServer=r,this.resolves=[],this.isServer||this.load(),this.onMessage=this.onMessage.bind(this),this.onChange=this.onChange.bind(this),this.ch.onMessage(this.onMessage),t.presentationUUID)throw new Error("Serializer is already in use");t.presentationUUID=e.uuid}return r.prototype.bind=function(e){if(e.listener!==this.onChange){if(e.listener)throw new Error("ActionStack is already binded to another Sync.");e.listener=this.onChange}},r.prototype.open=function(n){return e(this,void 0,Promise,function(){var e=this;return t(this,function(t){switch(t.label){case 0:return[4,this.slyDecoder(this.presentation,n,{onComponent:function(t){e.serializer.components.set(t.uuid,t)},onStep:function(t){e.serializer.steps.set(t.uuid,t)}})];case 1:return t.sent(),this.resolves.map(function(e){return e()}),this.resolves=[],[2]}})})},r.prototype.waitForOpen=function(){var e=this;return new Promise(function(t){return e.resolves.push(t)})},r.prototype.send=function(e){this.ch.send(JSON.stringify(e))},r.prototype.onMessage=function(e){var t=JSON.parse(e);switch(t.command){case"sly":this.handleSly();break;case"sly_response":this.open(t.sly);break;case"action":this.handleAction(t.action)}},r.prototype.handleSly=function(){this.send({command:"sly_response",sly:n.encode(this.presentation)})},r.prototype.handleAction=function(n){return e(this,void 0,Promise,function(){var e;return t(this,function(t){switch(t.label){case 0:return[4,this.serializer.unserialize(n)];case 1:return e=t.sent(),(0,i.actions[e.action][e.forward?"forward":"backward"])(this.presentation,e.data),[2]}})})},r.prototype.load=function(){var e=this.presentation.uuid;this.send({command:"sly",pd:e})},r.prototype.onChange=function(e,t,n){var i=this.serializer.serialize(e,t,n);this.send({command:"action",action:i})},r}();exports.Sync=r;
},{"../sly/encoder":"../core/sly/encoder.ts","../actions":"../core/actions.ts"}],"../core/sly/headlessDecoder.ts":[function(require,module,exports) {
"use strict";exports.__esModule=!0;var e=require("../headless"),o=require("./types"),t=require("../file");function n(n,s,i){for(var a in void 0===i&&(i={}),s.steps){var r=s.steps[a],p=new e.HeadlessStep(a);p.setPosition(r.position[0],r.position[1],r.position[2]),p.setRotation(r.rotation[0],r.rotation[1],r.rotation[2]),p.setScale(r.scale[0],r.scale[1],r.scale[2]);for(var d=0;d<r.components.length;++d){var l=r.components[d],u={};for(var c in l.props){var m=l.props[c];"number"==typeof m||"string"==typeof m?u[c]=m:m.kind===o.RefKind.FILE?u[c]=new t.File(n.uuid,m.uuid):m.kind===o.RefKind.FONT&&(u[c]=new e.HeadlessFont(m.moduleName,m.font))}var f=new e.HeadlessComponent(l.uuid,l.moduleName,l.component,u);f.setPosition(l.position[0],l.position[1],l.position[2]),f.setRotation(l.rotation[0],l.rotation[1],l.rotation[2]),f.setScale(l.scale[0],l.scale[1],l.scale[2]),p.add(f),i.onComponent&&i.onComponent(f)}n.add(p),i.onStep&&i.onStep(p)}}exports.headlessDecode=n;
},{"../headless":"../core/headless/index.ts","./types":"../core/sly/types.ts","../file":"../core/file.ts"}],"../node_modules/uuid/lib/rng-browser.js":[function(require,module,exports) {
var e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(e){var o=new Uint8Array(16);module.exports=function(){return e(o),o}}else{var r=new Array(16);module.exports=function(){for(var e,o=0;o<16;o++)0==(3&o)&&(e=4294967296*Math.random()),r[o]=e>>>((3&o)<<3)&255;return r}}
},{}],"../node_modules/uuid/lib/bytesToUuid.js":[function(require,module,exports) {
for(var r=[],o=0;o<256;++o)r[o]=(o+256).toString(16).substr(1);function t(o,t){var n=t||0,u=r;return[u[o[n++]],u[o[n++]],u[o[n++]],u[o[n++]],"-",u[o[n++]],u[o[n++]],"-",u[o[n++]],u[o[n++]],"-",u[o[n++]],u[o[n++]],"-",u[o[n++]],u[o[n++]],u[o[n++]],u[o[n++]],u[o[n++]],u[o[n++]]].join("")}module.exports=t;
},{}],"../node_modules/uuid/v1.js":[function(require,module,exports) {
var e,r,o=require("./lib/rng"),s=require("./lib/bytesToUuid"),i=0,n=0;function c(c,l,u){var v=l&&u||0,a=l||[],d=(c=c||{}).node||e,t=void 0!==c.clockseq?c.clockseq:r;if(null==d||null==t){var m=o();null==d&&(d=e=[1|m[0],m[1],m[2],m[3],m[4],m[5]]),null==t&&(t=r=16383&(m[6]<<8|m[7]))}var q=void 0!==c.msecs?c.msecs:(new Date).getTime(),f=void 0!==c.nsecs?c.nsecs:n+1,b=q-i+(f-n)/1e4;if(b<0&&void 0===c.clockseq&&(t=t+1&16383),(b<0||q>i)&&void 0===c.nsecs&&(f=0),f>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");i=q,n=f,r=t;var k=(1e4*(268435455&(q+=122192928e5))+f)%4294967296;a[v++]=k>>>24&255,a[v++]=k>>>16&255,a[v++]=k>>>8&255,a[v++]=255&k;var w=q/4294967296*1e4&268435455;a[v++]=w>>>8&255,a[v++]=255&w,a[v++]=w>>>24&15|16,a[v++]=w>>>16&255,a[v++]=t>>>8|128,a[v++]=255&t;for(var g=0;g<6;++g)a[v+g]=d[g];return l||s(a)}module.exports=c;
},{"./lib/rng":"../node_modules/uuid/lib/rng-browser.js","./lib/bytesToUuid":"../node_modules/uuid/lib/bytesToUuid.js"}],"../node_modules/eventemitter3/index.js":[function(require,module,exports) {
"use strict";var e=Object.prototype.hasOwnProperty,t="~";function n(){}function r(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function o(e,n,o,s,i){if("function"!=typeof o)throw new TypeError("The listener must be a function");var c=new r(o,s||e,i),f=t?t+n:n;return e._events[f]?e._events[f].fn?e._events[f]=[e._events[f],c]:e._events[f].push(c):(e._events[f]=c,e._eventsCount++),e}function s(e,t){0==--e._eventsCount?e._events=new n:delete e._events[t]}function i(){this._events=new n,this._eventsCount=0}Object.create&&(n.prototype=Object.create(null),(new n).__proto__||(t=!1)),i.prototype.eventNames=function(){var n,r,o=[];if(0===this._eventsCount)return o;for(r in n=this._events)e.call(n,r)&&o.push(t?r.slice(1):r);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(n)):o},i.prototype.listeners=function(e){var n=t?t+e:e,r=this._events[n];if(!r)return[];if(r.fn)return[r.fn];for(var o=0,s=r.length,i=new Array(s);o<s;o++)i[o]=r[o].fn;return i},i.prototype.listenerCount=function(e){var n=t?t+e:e,r=this._events[n];return r?r.fn?1:r.length:0},i.prototype.emit=function(e,n,r,o,s,i){var c=t?t+e:e;if(!this._events[c])return!1;var f,u,a=this._events[c],l=arguments.length;if(a.fn){switch(a.once&&this.removeListener(e,a.fn,void 0,!0),l){case 1:return a.fn.call(a.context),!0;case 2:return a.fn.call(a.context,n),!0;case 3:return a.fn.call(a.context,n,r),!0;case 4:return a.fn.call(a.context,n,r,o),!0;case 5:return a.fn.call(a.context,n,r,o,s),!0;case 6:return a.fn.call(a.context,n,r,o,s,i),!0}for(u=1,f=new Array(l-1);u<l;u++)f[u-1]=arguments[u];a.fn.apply(a.context,f)}else{var v,h=a.length;for(u=0;u<h;u++)switch(a[u].once&&this.removeListener(e,a[u].fn,void 0,!0),l){case 1:a[u].fn.call(a[u].context);break;case 2:a[u].fn.call(a[u].context,n);break;case 3:a[u].fn.call(a[u].context,n,r);break;case 4:a[u].fn.call(a[u].context,n,r,o);break;default:if(!f)for(v=1,f=new Array(l-1);v<l;v++)f[v-1]=arguments[v];a[u].fn.apply(a[u].context,f)}}return!0},i.prototype.on=function(e,t,n){return o(this,e,t,n,!1)},i.prototype.once=function(e,t,n){return o(this,e,t,n,!0)},i.prototype.removeListener=function(e,n,r,o){var i=t?t+e:e;if(!this._events[i])return this;if(!n)return s(this,i),this;var c=this._events[i];if(c.fn)c.fn!==n||o&&!c.once||r&&c.context!==r||s(this,i);else{for(var f=0,u=[],a=c.length;f<a;f++)(c[f].fn!==n||o&&!c[f].once||r&&c[f].context!==r)&&u.push(c[f]);u.length?this._events[i]=1===u.length?u[0]:u:s(this,i)}return this},i.prototype.removeAllListeners=function(e){var r;return e?(r=t?t+e:e,this._events[r]&&s(this,r)):(this._events=new n,this._eventsCount=0),this},i.prototype.off=i.prototype.removeListener,i.prototype.addListener=i.prototype.on,i.prefixed=t,i.EventEmitter=i,"undefined"!=typeof module&&(module.exports=i);
},{}],"presentation.ts":[function(require,module,exports) {
"use strict";var e=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};exports.__esModule=!0;var r=require("../core/sync/headlessSerializer"),s=require("../core/sync/sync"),n=require("../core/sly/headlessDecoder"),i=e(require("../core/headless")),o=t(require("uuid/v1")),u=t(require("eventemitter3"));exports.presentations=new Map,exports.ee=new u.default;var a=function(){function e(){this.assets=new Map,this.uuid=o.default(),this.meta={},exports.presentations.set(this.uuid,this)}return e.prototype.open=function(e){var t=this.uuid;this.presentation=new i.HeadlessPresentation(t),new s.Sync(this.presentation,new r.HeadlessSerializer,{onMessage:function(e){exports.ee.on("p"+t,function(t){e(t)})},send:function(e){setTimeout(function(){return exports.ee.emit("p"+t+"-x",e)})}},n.headlessDecode,!0).open(e)},e.prototype.patchMeta=function(e){Object.assign(this.meta,e)},e}();exports.Presentation=a;
},{"../core/sync/headlessSerializer":"../core/sync/headlessSerializer.ts","../core/sync/sync":"../core/sync/sync.ts","../core/sly/headlessDecoder":"../core/sly/headlessDecoder.ts","../core/headless":"../core/headless/index.ts","uuid/v1":"../node_modules/uuid/v1.js","eventemitter3":"../node_modules/eventemitter3/index.js"}],"client.ts":[function(require,module,exports) {
"use strict";var t=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))(function(r,i){function u(t){try{c(o.next(t))}catch(e){i(e)}}function s(t){try{c(o.throw(t))}catch(e){i(e)}}function c(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(u,s)}c((o=o.apply(t,e||[])).next())})},e=this&&this.__generator||function(t,e){var n,o,r,i,u={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,o=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(r=(r=u.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){u.label=i[1];break}if(6===i[0]&&u.label<r[1]){u.label=r[1],r=i;break}if(r&&u.label<r[2]){u.label=r[2],u.ops.push(i);break}r[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(s){i=[6,s],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};exports.__esModule=!0;var o=require("./presentation"),r=n(require("uuid/v1")),i=function(){function n(){}return n.prototype.create=function(){return t(this,void 0,Promise,function(){var t,n,i;return e(this,function(e){return n={template:{moduleName:"slye",component:"template"},steps:(t={},t[r.default()]={position:[-110,0,0],rotation:[0,0,0],scale:[1,1,1],components:[{uuid:r.default(),moduleName:"slye",component:"text",position:[-15.20454158717898,.4664170368873606,17.052472519411943],rotation:[-.9999961802122638,0,0],scale:[1,1,.15397232016921775],props:{text:"Slye",size:20,color:15409268,font:{kind:1,font:"Shellia",moduleName:"slye"}}}]},t)},(i=new o.Presentation).open(n),[2,{presentationDescriptor:i.uuid}]})})},n.prototype.close=function(n){return t(this,void 0,Promise,function(){return e(this,function(t){throw new Error("Not implemented.")})})},n.prototype.patchMeta=function(n,r){return t(this,void 0,Promise,function(){return e(this,function(t){return o.presentations.get(n).patchMeta(r),[2,{ok:!0}]})})},n.prototype.getMeta=function(n){return t(this,void 0,Promise,function(){return e(this,function(t){return[2,{meta:o.presentations.get(n).meta}]})})},n.prototype.fetchSly=function(n){return t(this,void 0,Promise,function(){return e(this,function(t){throw new Error("Not implemented.")})})},n.prototype.save=function(n){return t(this,void 0,Promise,function(){return e(this,function(t){throw new Error("Not implemented.")})})},n.prototype.open=function(){return t(this,void 0,Promise,function(){return e(this,function(t){throw new Error("Not implemented.")})})},n.prototype.showFileDialog=function(t){var e,n=new Promise(function(t){return e=t}),i=o.presentations.get(t),u=document.createElement("input");return u.type="file",u.onchange=function(){for(var t=u.files,n=[],o=0;o<t.length;++o){var s=r.default(),c=URL.createObjectURL(t[o]);i.assets.set(s,c),n.push(s)}e({files:n})},u.click(),n},n.prototype.getModuleMainURL=function(n){return t(this,void 0,Promise,function(){return e(this,function(t){if("slye"!==n)throw new Error("Non-default modules are not supported.");return[2,"./modules/"+n+"/main.js"]})})},n.prototype.getModuleAssetURL=function(n,o){return t(this,void 0,Promise,function(){return e(this,function(t){if("slye"!==n)throw new Error("Non-default modules are not supported.");return[2,"./modules/"+n+"/assets/"+o]})})},n.prototype.getAssetURL=function(n,r){return t(this,void 0,Promise,function(){var t;return e(this,function(e){return t=o.presentations.get(n),[2,t.assets.get(r)]})})},n.prototype.syncChannelOnMessage=function(t,e){o.ee.on("p"+t+"-x",function(t){e(t)})},n.prototype.syncChannelSend=function(t,e){o.ee.emit("p"+t,e)},n}();exports.Client=i,window.client=new i;
},{"./presentation":"presentation.ts","uuid/v1":"../node_modules/uuid/v1.js"}]},{},["client.ts"], null)
//# sourceMappingURL=client.f5abc9c9.js.map