var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
(function(vue) {
  "use strict";
  function _interopNamespace(e) {
    if (e && e.__esModule)
      return e;
    var n2 = { __proto__: null, [Symbol.toStringTag]: "Module" };
    if (e) {
      Object.keys(e).forEach(function(k2) {
        if (k2 !== "default") {
          var d2 = Object.getOwnPropertyDescriptor(e, k2);
          Object.defineProperty(n2, k2, d2.get ? d2 : {
            enumerable: true,
            get: function() {
              return e[k2];
            }
          });
        }
      });
    }
    n2["default"] = e;
    return Object.freeze(n2);
  }
  var vue__namespace = /* @__PURE__ */ _interopNamespace(vue);
  var icons = {
    "pulldown": "\uE588",
    "refreshempty": "\uE461",
    "back": "\uE471",
    "forward": "\uE470",
    "more": "\uE507",
    "more-filled": "\uE537",
    "scan": "\uE612",
    "qq": "\uE264",
    "weibo": "\uE260",
    "weixin": "\uE261",
    "pengyouquan": "\uE262",
    "loop": "\uE565",
    "refresh": "\uE407",
    "refresh-filled": "\uE437",
    "arrowthindown": "\uE585",
    "arrowthinleft": "\uE586",
    "arrowthinright": "\uE587",
    "arrowthinup": "\uE584",
    "undo-filled": "\uE7D6",
    "undo": "\uE406",
    "redo": "\uE405",
    "redo-filled": "\uE7D9",
    "bars": "\uE563",
    "chatboxes": "\uE203",
    "camera": "\uE301",
    "chatboxes-filled": "\uE233",
    "camera-filled": "\uE7EF",
    "cart-filled": "\uE7F4",
    "cart": "\uE7F5",
    "checkbox-filled": "\uE442",
    "checkbox": "\uE7FA",
    "arrowleft": "\uE582",
    "arrowdown": "\uE581",
    "arrowright": "\uE583",
    "smallcircle-filled": "\uE801",
    "arrowup": "\uE580",
    "circle": "\uE411",
    "eye-filled": "\uE568",
    "eye-slash-filled": "\uE822",
    "eye-slash": "\uE823",
    "eye": "\uE824",
    "flag-filled": "\uE825",
    "flag": "\uE508",
    "gear-filled": "\uE532",
    "reload": "\uE462",
    "gear": "\uE502",
    "hand-thumbsdown-filled": "\uE83B",
    "hand-thumbsdown": "\uE83C",
    "hand-thumbsup-filled": "\uE83D",
    "heart-filled": "\uE83E",
    "hand-thumbsup": "\uE83F",
    "heart": "\uE840",
    "home": "\uE500",
    "info": "\uE504",
    "home-filled": "\uE530",
    "info-filled": "\uE534",
    "circle-filled": "\uE441",
    "chat-filled": "\uE847",
    "chat": "\uE263",
    "mail-open-filled": "\uE84D",
    "email-filled": "\uE231",
    "mail-open": "\uE84E",
    "email": "\uE201",
    "checkmarkempty": "\uE472",
    "list": "\uE562",
    "locked-filled": "\uE856",
    "locked": "\uE506",
    "map-filled": "\uE85C",
    "map-pin": "\uE85E",
    "map-pin-ellipse": "\uE864",
    "map": "\uE364",
    "minus-filled": "\uE440",
    "mic-filled": "\uE332",
    "minus": "\uE410",
    "micoff": "\uE360",
    "mic": "\uE302",
    "clear": "\uE434",
    "smallcircle": "\uE868",
    "close": "\uE404",
    "closeempty": "\uE460",
    "paperclip": "\uE567",
    "paperplane": "\uE503",
    "paperplane-filled": "\uE86E",
    "person-filled": "\uE131",
    "contact-filled": "\uE130",
    "person": "\uE101",
    "contact": "\uE100",
    "images-filled": "\uE87A",
    "phone": "\uE200",
    "images": "\uE87B",
    "image": "\uE363",
    "image-filled": "\uE877",
    "location-filled": "\uE333",
    "location": "\uE303",
    "plus-filled": "\uE439",
    "plus": "\uE409",
    "plusempty": "\uE468",
    "help-filled": "\uE535",
    "help": "\uE505",
    "navigate-filled": "\uE884",
    "navigate": "\uE501",
    "mic-slash-filled": "\uE892",
    "search": "\uE466",
    "settings": "\uE560",
    "sound": "\uE590",
    "sound-filled": "\uE8A1",
    "spinner-cycle": "\uE465",
    "download-filled": "\uE8A4",
    "personadd-filled": "\uE132",
    "videocam-filled": "\uE8AF",
    "personadd": "\uE102",
    "upload": "\uE402",
    "upload-filled": "\uE8B1",
    "starhalf": "\uE463",
    "star-filled": "\uE438",
    "star": "\uE408",
    "trash": "\uE401",
    "phone-filled": "\uE230",
    "compose": "\uE400",
    "videocam": "\uE300",
    "trash-filled": "\uE8DC",
    "download": "\uE403",
    "chatbubble-filled": "\uE232",
    "chatbubble": "\uE202",
    "cloud-download": "\uE8E4",
    "cloud-upload-filled": "\uE8E5",
    "cloud-upload": "\uE8E6",
    "cloud-download-filled": "\uE8E9",
    "headphones": "\uE8BF",
    "shop": "\uE609"
  };
  var _export_sfc = (sfc, props) => {
    for (const [key, val] of props) {
      sfc[key] = val;
    }
    return sfc;
  };
  const _sfc_main$e = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      fontFamily: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons
      };
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("text", {
      style: vue.normalizeStyle({ color: $props.color, "font-size": $props.size + "px" }),
      class: vue.normalizeClass(["uni-icons", [$props.fontFamily, $props.fontFamily ? $props.type : ""]]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
    }, vue.toDisplayString($props.fontFamily ? "" : $data.icons[$props.type]), 7);
  }
  var __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$9], ["__scopeId", "data-v-a2e81f6e"]]);
  Object.freeze({});
  Object.freeze([]);
  const isString = (val) => typeof val === "string";
  const objectToString = Object.prototype.toString;
  const toTypeString = (value) => objectToString.call(value);
  const toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  function resolveEasycom(component, easycom) {
    return isString(component) ? easycom : component;
  }
  const nav = [
    {
      name: "\u5BFC\u822A\u7EC4\u4EF6",
      enName: "base",
      packages: [
        {
          name: "Navbar",
          cName: "\u81EA\u5B9A\u4E49\u5BFC\u822A",
          desc: "\u5934\u90E8\u5BFC\u822A",
          show: true,
          path: "/pages/componentsA/navbar/index"
        },
        {
          name: "Navbar",
          cName: "\u5934\u90E8\u5BFC\u822A",
          desc: "\u5934\u90E8\u5BFC\u822A",
          show: true,
          path: "/pages/componentsA/navbar/index'"
        }
      ]
    },
    {
      name: "\u64CD\u4F5C\u53CD\u9988",
      enName: "base",
      packages: [
        {
          name: "Navbar",
          cName: "\u5934\u90E8\u5BFC\u822A",
          desc: "\u5934\u90E8\u5BFC\u822A",
          show: true,
          path: "/pages/componentsA/navbar/index"
        },
        {
          name: "Navbar",
          cName: "\u5934\u90E8\u5BFC\u822A",
          desc: "\u5934\u90E8\u5BFC\u822A",
          show: true,
          path: "/pages/componentsA/navbar/index'"
        }
      ]
    },
    {
      name: "\u8868\u5355\u7EC4\u4EF6",
      enName: "base",
      packages: [
        {
          name: "Collapse",
          cName: "\u6298\u53E0\u9762\u677F",
          desc: "\u6298\u53E0\u9762\u677F",
          show: true,
          path: "/pages/form/collapse/index"
        },
        {
          name: " Picker",
          cName: "\u9009\u62E9\u5668",
          desc: "\u9009\u62E9\u5668",
          show: true,
          path: "/pages/form/picker/index"
        },
        {
          name: " Step",
          cName: "\u6B65\u9AA4\u6761",
          desc: "\u6B65\u9AA4\u6761",
          show: true,
          path: "/pages/form/step/index"
        },
        {
          name: " Step",
          cName: "\u65E5\u5386",
          desc: "\u65E5\u5386",
          show: true,
          path: "/pages/form/day/index"
        }
      ]
    }
  ];
  const _sfc_main$d = {
    name: "doc",
    setup() {
      return vue.reactive({
        nav
      });
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "index" }, [
      vue.createElementVNode("view", { class: "index-header" }, [
        vue.createElementVNode("img", {
          src: "/static/image/commer/aa.jpg",
          alt: ""
        }),
        vue.createElementVNode("view", { class: "info" }, [
          vue.createElementVNode("h1", null, "\u5B9E\u9A8C"),
          vue.createElementVNode("text", null, "Vue3+Ts+Vite\u7B80\u6613\u7EC4\u4EF6")
        ])
      ]),
      vue.createElementVNode("view", { class: "index-components" }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.nav, (nav2) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: "nav-item",
            key: nav2
          }, [
            vue.createElementVNode("view", { class: "nav-name" }, vue.toDisplayString(nav2.name), 1),
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(nav2.packages, (packageItem) => {
              return vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: packageItem }, [
                packageItem.show ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
                  vue.createElementVNode("navigator", {
                    url: packageItem.path,
                    class: "nav-info"
                  }, [
                    vue.createElementVNode("view", null, vue.toDisplayString(packageItem.name) + " " + vue.toDisplayString(packageItem.cName), 1),
                    vue.createElementVNode("view", null, [
                      vue.createVNode(_component_uni_icons, {
                        type: "forward",
                        size: "20"
                      })
                    ])
                  ], 8, ["url"])
                ])) : vue.createCommentVNode("v-if", true)
              ], 64);
            }), 128))
          ]);
        }), 128))
      ])
    ]);
  }
  var PagesIndexComponents = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$8], ["__scopeId", "data-v-6e6f4128"]]);
  const _sfc_main$c = {};
  function isDebugMode() {
    return typeof __channelId__ === "string" && __channelId__;
  }
  function jsonStringifyReplacer(k2, p2) {
    switch (toRawType(p2)) {
      case "Function":
        return "function() { [native code] }";
      default:
        return p2;
    }
  }
  function normalizeLog(type, filename, args) {
    if (isDebugMode()) {
      args.push(filename.replace("at ", "uni-app:///"));
      return console[type].apply(console, args);
    }
    const msgs = args.map(function(v2) {
      const type2 = toTypeString(v2).toLowerCase();
      if (type2 === "[object object]" || type2 === "[object array]") {
        try {
          v2 = "---BEGIN:JSON---" + JSON.stringify(v2, jsonStringifyReplacer) + "---END:JSON---";
        } catch (e) {
          v2 = type2;
        }
      } else {
        if (v2 === null) {
          v2 = "---NULL---";
        } else if (v2 === void 0) {
          v2 = "---UNDEFINED---";
        } else {
          const vType = toRawType(v2).toUpperCase();
          if (vType === "NUMBER" || vType === "BOOLEAN") {
            v2 = "---BEGIN:" + vType + "---" + v2 + "---END:" + vType + "---";
          } else {
            v2 = String(v2);
          }
        }
      }
      return v2;
    });
    return msgs.join("---COMMA---") + " " + filename;
  }
  function formatAppLog(type, filename, ...args) {
    const res = normalizeLog(type, filename, args);
    res && console[type](res);
  }
  const isArray = Array.isArray;
  const isObject = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    const lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      [locale, messages2] = [
        messages2,
        locale
      ];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  function t$1(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  function n(e, t2, n2) {
    return e(n2 = { path: t2, exports: {}, require: function(e2, t3) {
      return function() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(t3 == null && n2.path);
    } }, n2.exports), n2.exports;
  }
  var s = n(function(e, t2) {
    var n2;
    e.exports = (n2 = n2 || function(e2, t3) {
      var n3 = Object.create || function() {
        function e3() {
        }
        return function(t4) {
          var n4;
          return e3.prototype = t4, n4 = new e3(), e3.prototype = null, n4;
        };
      }(), s2 = {}, r2 = s2.lib = {}, o2 = r2.Base = { extend: function(e3) {
        var t4 = n3(this);
        return e3 && t4.mixIn(e3), t4.hasOwnProperty("init") && this.init !== t4.init || (t4.init = function() {
          t4.$super.init.apply(this, arguments);
        }), t4.init.prototype = t4, t4.$super = this, t4;
      }, create: function() {
        var e3 = this.extend();
        return e3.init.apply(e3, arguments), e3;
      }, init: function() {
      }, mixIn: function(e3) {
        for (var t4 in e3)
          e3.hasOwnProperty(t4) && (this[t4] = e3[t4]);
        e3.hasOwnProperty("toString") && (this.toString = e3.toString);
      }, clone: function() {
        return this.init.prototype.extend(this);
      } }, i2 = r2.WordArray = o2.extend({ init: function(e3, n4) {
        e3 = this.words = e3 || [], this.sigBytes = n4 != t3 ? n4 : 4 * e3.length;
      }, toString: function(e3) {
        return (e3 || c2).stringify(this);
      }, concat: function(e3) {
        var t4 = this.words, n4 = e3.words, s3 = this.sigBytes, r3 = e3.sigBytes;
        if (this.clamp(), s3 % 4)
          for (var o3 = 0; o3 < r3; o3++) {
            var i3 = n4[o3 >>> 2] >>> 24 - o3 % 4 * 8 & 255;
            t4[s3 + o3 >>> 2] |= i3 << 24 - (s3 + o3) % 4 * 8;
          }
        else
          for (o3 = 0; o3 < r3; o3 += 4)
            t4[s3 + o3 >>> 2] = n4[o3 >>> 2];
        return this.sigBytes += r3, this;
      }, clamp: function() {
        var t4 = this.words, n4 = this.sigBytes;
        t4[n4 >>> 2] &= 4294967295 << 32 - n4 % 4 * 8, t4.length = e2.ceil(n4 / 4);
      }, clone: function() {
        var e3 = o2.clone.call(this);
        return e3.words = this.words.slice(0), e3;
      }, random: function(t4) {
        for (var n4, s3 = [], r3 = function(t5) {
          t5 = t5;
          var n5 = 987654321, s4 = 4294967295;
          return function() {
            var r4 = ((n5 = 36969 * (65535 & n5) + (n5 >> 16) & s4) << 16) + (t5 = 18e3 * (65535 & t5) + (t5 >> 16) & s4) & s4;
            return r4 /= 4294967296, (r4 += 0.5) * (e2.random() > 0.5 ? 1 : -1);
          };
        }, o3 = 0; o3 < t4; o3 += 4) {
          var a3 = r3(4294967296 * (n4 || e2.random()));
          n4 = 987654071 * a3(), s3.push(4294967296 * a3() | 0);
        }
        return new i2.init(s3, t4);
      } }), a2 = s2.enc = {}, c2 = a2.Hex = { stringify: function(e3) {
        for (var t4 = e3.words, n4 = e3.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var o3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push((o3 >>> 4).toString(16)), s3.push((15 & o3).toString(16));
        }
        return s3.join("");
      }, parse: function(e3) {
        for (var t4 = e3.length, n4 = [], s3 = 0; s3 < t4; s3 += 2)
          n4[s3 >>> 3] |= parseInt(e3.substr(s3, 2), 16) << 24 - s3 % 8 * 4;
        return new i2.init(n4, t4 / 2);
      } }, u2 = a2.Latin1 = { stringify: function(e3) {
        for (var t4 = e3.words, n4 = e3.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var o3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push(String.fromCharCode(o3));
        }
        return s3.join("");
      }, parse: function(e3) {
        for (var t4 = e3.length, n4 = [], s3 = 0; s3 < t4; s3++)
          n4[s3 >>> 2] |= (255 & e3.charCodeAt(s3)) << 24 - s3 % 4 * 8;
        return new i2.init(n4, t4);
      } }, h2 = a2.Utf8 = { stringify: function(e3) {
        try {
          return decodeURIComponent(escape(u2.stringify(e3)));
        } catch (e4) {
          throw new Error("Malformed UTF-8 data");
        }
      }, parse: function(e3) {
        return u2.parse(unescape(encodeURIComponent(e3)));
      } }, l2 = r2.BufferedBlockAlgorithm = o2.extend({ reset: function() {
        this._data = new i2.init(), this._nDataBytes = 0;
      }, _append: function(e3) {
        typeof e3 == "string" && (e3 = h2.parse(e3)), this._data.concat(e3), this._nDataBytes += e3.sigBytes;
      }, _process: function(t4) {
        var n4 = this._data, s3 = n4.words, r3 = n4.sigBytes, o3 = this.blockSize, a3 = r3 / (4 * o3), c3 = (a3 = t4 ? e2.ceil(a3) : e2.max((0 | a3) - this._minBufferSize, 0)) * o3, u3 = e2.min(4 * c3, r3);
        if (c3) {
          for (var h3 = 0; h3 < c3; h3 += o3)
            this._doProcessBlock(s3, h3);
          var l3 = s3.splice(0, c3);
          n4.sigBytes -= u3;
        }
        return new i2.init(l3, u3);
      }, clone: function() {
        var e3 = o2.clone.call(this);
        return e3._data = this._data.clone(), e3;
      }, _minBufferSize: 0 }), d2 = (r2.Hasher = l2.extend({ cfg: o2.extend(), init: function(e3) {
        this.cfg = this.cfg.extend(e3), this.reset();
      }, reset: function() {
        l2.reset.call(this), this._doReset();
      }, update: function(e3) {
        return this._append(e3), this._process(), this;
      }, finalize: function(e3) {
        return e3 && this._append(e3), this._doFinalize();
      }, blockSize: 16, _createHelper: function(e3) {
        return function(t4, n4) {
          return new e3.init(n4).finalize(t4);
        };
      }, _createHmacHelper: function(e3) {
        return function(t4, n4) {
          return new d2.HMAC.init(e3, n4).finalize(t4);
        };
      } }), s2.algo = {});
      return s2;
    }(Math), n2);
  }), r = (n(function(e, t2) {
    var n2;
    e.exports = (n2 = s, function(e2) {
      var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, o2 = s2.Hasher, i2 = t3.algo, a2 = [];
      !function() {
        for (var t4 = 0; t4 < 64; t4++)
          a2[t4] = 4294967296 * e2.abs(e2.sin(t4 + 1)) | 0;
      }();
      var c2 = i2.MD5 = o2.extend({ _doReset: function() {
        this._hash = new r2.init([1732584193, 4023233417, 2562383102, 271733878]);
      }, _doProcessBlock: function(e3, t4) {
        for (var n3 = 0; n3 < 16; n3++) {
          var s3 = t4 + n3, r3 = e3[s3];
          e3[s3] = 16711935 & (r3 << 8 | r3 >>> 24) | 4278255360 & (r3 << 24 | r3 >>> 8);
        }
        var o3 = this._hash.words, i3 = e3[t4 + 0], c3 = e3[t4 + 1], f = e3[t4 + 2], p2 = e3[t4 + 3], g2 = e3[t4 + 4], m2 = e3[t4 + 5], y2 = e3[t4 + 6], _2 = e3[t4 + 7], w2 = e3[t4 + 8], k2 = e3[t4 + 9], S2 = e3[t4 + 10], v2 = e3[t4 + 11], T2 = e3[t4 + 12], P2 = e3[t4 + 13], A2 = e3[t4 + 14], I2 = e3[t4 + 15], E2 = o3[0], b2 = o3[1], O2 = o3[2], U2 = o3[3];
        E2 = u2(E2, b2, O2, U2, i3, 7, a2[0]), U2 = u2(U2, E2, b2, O2, c3, 12, a2[1]), O2 = u2(O2, U2, E2, b2, f, 17, a2[2]), b2 = u2(b2, O2, U2, E2, p2, 22, a2[3]), E2 = u2(E2, b2, O2, U2, g2, 7, a2[4]), U2 = u2(U2, E2, b2, O2, m2, 12, a2[5]), O2 = u2(O2, U2, E2, b2, y2, 17, a2[6]), b2 = u2(b2, O2, U2, E2, _2, 22, a2[7]), E2 = u2(E2, b2, O2, U2, w2, 7, a2[8]), U2 = u2(U2, E2, b2, O2, k2, 12, a2[9]), O2 = u2(O2, U2, E2, b2, S2, 17, a2[10]), b2 = u2(b2, O2, U2, E2, v2, 22, a2[11]), E2 = u2(E2, b2, O2, U2, T2, 7, a2[12]), U2 = u2(U2, E2, b2, O2, P2, 12, a2[13]), O2 = u2(O2, U2, E2, b2, A2, 17, a2[14]), E2 = h2(E2, b2 = u2(b2, O2, U2, E2, I2, 22, a2[15]), O2, U2, c3, 5, a2[16]), U2 = h2(U2, E2, b2, O2, y2, 9, a2[17]), O2 = h2(O2, U2, E2, b2, v2, 14, a2[18]), b2 = h2(b2, O2, U2, E2, i3, 20, a2[19]), E2 = h2(E2, b2, O2, U2, m2, 5, a2[20]), U2 = h2(U2, E2, b2, O2, S2, 9, a2[21]), O2 = h2(O2, U2, E2, b2, I2, 14, a2[22]), b2 = h2(b2, O2, U2, E2, g2, 20, a2[23]), E2 = h2(E2, b2, O2, U2, k2, 5, a2[24]), U2 = h2(U2, E2, b2, O2, A2, 9, a2[25]), O2 = h2(O2, U2, E2, b2, p2, 14, a2[26]), b2 = h2(b2, O2, U2, E2, w2, 20, a2[27]), E2 = h2(E2, b2, O2, U2, P2, 5, a2[28]), U2 = h2(U2, E2, b2, O2, f, 9, a2[29]), O2 = h2(O2, U2, E2, b2, _2, 14, a2[30]), E2 = l2(E2, b2 = h2(b2, O2, U2, E2, T2, 20, a2[31]), O2, U2, m2, 4, a2[32]), U2 = l2(U2, E2, b2, O2, w2, 11, a2[33]), O2 = l2(O2, U2, E2, b2, v2, 16, a2[34]), b2 = l2(b2, O2, U2, E2, A2, 23, a2[35]), E2 = l2(E2, b2, O2, U2, c3, 4, a2[36]), U2 = l2(U2, E2, b2, O2, g2, 11, a2[37]), O2 = l2(O2, U2, E2, b2, _2, 16, a2[38]), b2 = l2(b2, O2, U2, E2, S2, 23, a2[39]), E2 = l2(E2, b2, O2, U2, P2, 4, a2[40]), U2 = l2(U2, E2, b2, O2, i3, 11, a2[41]), O2 = l2(O2, U2, E2, b2, p2, 16, a2[42]), b2 = l2(b2, O2, U2, E2, y2, 23, a2[43]), E2 = l2(E2, b2, O2, U2, k2, 4, a2[44]), U2 = l2(U2, E2, b2, O2, T2, 11, a2[45]), O2 = l2(O2, U2, E2, b2, I2, 16, a2[46]), E2 = d2(E2, b2 = l2(b2, O2, U2, E2, f, 23, a2[47]), O2, U2, i3, 6, a2[48]), U2 = d2(U2, E2, b2, O2, _2, 10, a2[49]), O2 = d2(O2, U2, E2, b2, A2, 15, a2[50]), b2 = d2(b2, O2, U2, E2, m2, 21, a2[51]), E2 = d2(E2, b2, O2, U2, T2, 6, a2[52]), U2 = d2(U2, E2, b2, O2, p2, 10, a2[53]), O2 = d2(O2, U2, E2, b2, S2, 15, a2[54]), b2 = d2(b2, O2, U2, E2, c3, 21, a2[55]), E2 = d2(E2, b2, O2, U2, w2, 6, a2[56]), U2 = d2(U2, E2, b2, O2, I2, 10, a2[57]), O2 = d2(O2, U2, E2, b2, y2, 15, a2[58]), b2 = d2(b2, O2, U2, E2, P2, 21, a2[59]), E2 = d2(E2, b2, O2, U2, g2, 6, a2[60]), U2 = d2(U2, E2, b2, O2, v2, 10, a2[61]), O2 = d2(O2, U2, E2, b2, f, 15, a2[62]), b2 = d2(b2, O2, U2, E2, k2, 21, a2[63]), o3[0] = o3[0] + E2 | 0, o3[1] = o3[1] + b2 | 0, o3[2] = o3[2] + O2 | 0, o3[3] = o3[3] + U2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        n3[r3 >>> 5] |= 128 << 24 - r3 % 32;
        var o3 = e2.floor(s3 / 4294967296), i3 = s3;
        n3[15 + (r3 + 64 >>> 9 << 4)] = 16711935 & (o3 << 8 | o3 >>> 24) | 4278255360 & (o3 << 24 | o3 >>> 8), n3[14 + (r3 + 64 >>> 9 << 4)] = 16711935 & (i3 << 8 | i3 >>> 24) | 4278255360 & (i3 << 24 | i3 >>> 8), t4.sigBytes = 4 * (n3.length + 1), this._process();
        for (var a3 = this._hash, c3 = a3.words, u3 = 0; u3 < 4; u3++) {
          var h3 = c3[u3];
          c3[u3] = 16711935 & (h3 << 8 | h3 >>> 24) | 4278255360 & (h3 << 24 | h3 >>> 8);
        }
        return a3;
      }, clone: function() {
        var e3 = o2.clone.call(this);
        return e3._hash = this._hash.clone(), e3;
      } });
      function u2(e3, t4, n3, s3, r3, o3, i3) {
        var a3 = e3 + (t4 & n3 | ~t4 & s3) + r3 + i3;
        return (a3 << o3 | a3 >>> 32 - o3) + t4;
      }
      function h2(e3, t4, n3, s3, r3, o3, i3) {
        var a3 = e3 + (t4 & s3 | n3 & ~s3) + r3 + i3;
        return (a3 << o3 | a3 >>> 32 - o3) + t4;
      }
      function l2(e3, t4, n3, s3, r3, o3, i3) {
        var a3 = e3 + (t4 ^ n3 ^ s3) + r3 + i3;
        return (a3 << o3 | a3 >>> 32 - o3) + t4;
      }
      function d2(e3, t4, n3, s3, r3, o3, i3) {
        var a3 = e3 + (n3 ^ (t4 | ~s3)) + r3 + i3;
        return (a3 << o3 | a3 >>> 32 - o3) + t4;
      }
      t3.MD5 = o2._createHelper(c2), t3.HmacMD5 = o2._createHmacHelper(c2);
    }(Math), n2.MD5);
  }), n(function(e, t2) {
    var n2, r2, o2;
    e.exports = (r2 = (n2 = s).lib.Base, o2 = n2.enc.Utf8, void (n2.algo.HMAC = r2.extend({ init: function(e2, t3) {
      e2 = this._hasher = new e2.init(), typeof t3 == "string" && (t3 = o2.parse(t3));
      var n3 = e2.blockSize, s2 = 4 * n3;
      t3.sigBytes > s2 && (t3 = e2.finalize(t3)), t3.clamp();
      for (var r3 = this._oKey = t3.clone(), i2 = this._iKey = t3.clone(), a2 = r3.words, c2 = i2.words, u2 = 0; u2 < n3; u2++)
        a2[u2] ^= 1549556828, c2[u2] ^= 909522486;
      r3.sigBytes = i2.sigBytes = s2, this.reset();
    }, reset: function() {
      var e2 = this._hasher;
      e2.reset(), e2.update(this._iKey);
    }, update: function(e2) {
      return this._hasher.update(e2), this;
    }, finalize: function(e2) {
      var t3 = this._hasher, n3 = t3.finalize(e2);
      return t3.reset(), t3.finalize(this._oKey.clone().concat(n3));
    } })));
  }), n(function(e, t2) {
    e.exports = s.HmacMD5;
  }));
  function o(e) {
    return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
  }
  function i(e) {
    return o(e) === "object";
  }
  class a extends Error {
    constructor(e, t2) {
      super(e), this.code = t2;
    }
  }
  function c(e) {
    return e && typeof e == "string" ? JSON.parse(e) : e;
  }
  const u = true, h = "app", l = c({}.UNICLOUD_DEBUG), d = c("[]");
  let p = "";
  try {
    p = "__UNI__9492449";
  } catch (e) {
  }
  let g = {};
  function m(e, t2 = {}) {
    var n2, s2;
    return n2 = g, s2 = e, Object.prototype.hasOwnProperty.call(n2, s2) || (g[e] = t2), g[e];
  }
  const y = ["invoke", "success", "fail", "complete"], _ = m("_globalUniCloudInterceptor");
  function w(e, t2) {
    _[e] || (_[e] = {}), i(t2) && Object.keys(t2).forEach((n2) => {
      y.indexOf(n2) > -1 && function(e2, t3, n3) {
        let s2 = _[e2][t3];
        s2 || (s2 = _[e2][t3] = []), s2.indexOf(n3) === -1 && typeof n3 == "function" && s2.push(n3);
      }(e, n2, t2[n2]);
    });
  }
  function k(e, t2) {
    _[e] || (_[e] = {}), i(t2) ? Object.keys(t2).forEach((n2) => {
      y.indexOf(n2) > -1 && function(e2, t3, n3) {
        const s2 = _[e2][t3];
        if (!s2)
          return;
        const r2 = s2.indexOf(n3);
        r2 > -1 && s2.splice(r2, 1);
      }(e, n2, t2[n2]);
    }) : delete _[e];
  }
  function S(e, t2) {
    return e && e.length !== 0 ? e.reduce((e2, n2) => e2.then(() => n2(t2)), Promise.resolve()) : Promise.resolve();
  }
  function v(e, t2) {
    return _[e] && _[e][t2] || [];
  }
  function T(e, t2) {
    return t2 ? function(n2) {
      const s2 = t2 === "callFunction" && (n2 && n2.name) === "DCloud-clientDB";
      let r2;
      r2 = this.isReady ? Promise.resolve() : this.initUniCloud, n2 = n2 || {};
      const o2 = r2.then(() => s2 ? Promise.resolve() : S(v(t2, "invoke"), n2)).then(() => e.call(this, n2)).then((e2) => s2 ? Promise.resolve(e2) : S(v(t2, "success"), e2).then(() => S(v(t2, "complete"), e2)).then(() => Promise.resolve(e2)), (e2) => s2 ? Promise.reject(e2) : S(v(t2, "fail"), e2).then(() => S(v(t2, "complete"), e2)).then(() => Promise.reject(e2)));
      if (!(n2.success || n2.fail || n2.complete))
        return o2;
      o2.then((e2) => {
        n2.success && n2.success(e2), n2.complete && n2.complete(e2);
      }).catch((e2) => {
        n2.fail && n2.fail(e2), n2.complete && n2.complete(e2);
      });
    } : function(t3) {
      if (!((t3 = t3 || {}).success || t3.fail || t3.complete))
        return e.call(this, t3);
      e.call(this, t3).then((e2) => {
        t3.success && t3.success(e2), t3.complete && t3.complete(e2);
      }, (e2) => {
        t3.fail && t3.fail(e2), t3.complete && t3.complete(e2);
      });
    };
  }
  class P extends Error {
    constructor(e) {
      super(e.message), this.errMsg = e.message || "", Object.defineProperties(this, { code: { get: () => e.code }, requestId: { get: () => e.requestId }, message: { get() {
        return this.errMsg;
      }, set(e2) {
        this.errMsg = e2;
      } } });
    }
  }
  const { t: A, setLocale: I, getLocale: E } = initVueI18n({ "zh-Hans": { "uniCloud.init.paramRequired": "\u7F3A\u5C11\u53C2\u6570\uFF1A{param}", "uniCloud.uploadFile.fileError": "filePath\u5E94\u4E3AFile\u5BF9\u8C61" }, "zh-Hant": { "uniCloud.init.paramRequired": "\u7F3A\u5C11\u53C2\u6570\uFF1A{param}", "uniCloud.uploadFile.fileError": "filePath\u5E94\u4E3AFile\u5BF9\u8C61" }, en: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, fr: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, es: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" } }, "zh-Hans");
  function b() {
    const { deviceId: e, platform: t2 } = uni.getSystemInfoSync();
    return { PLATFORM: h, OS: t2, APPID: p, LOCALE: E(), DEVICEID: e, CLIENT_SDK_VERSION: "1.0.13" };
  }
  var O = { sign: function(e, t2) {
    let n2 = "";
    return Object.keys(e).sort().forEach(function(t3) {
      e[t3] && (n2 = n2 + "&" + t3 + "=" + e[t3]);
    }), n2 = n2.slice(1), r(n2, t2).toString();
  }, wrappedRequest: function(e, t2) {
    return new Promise((n2, s2) => {
      t2(Object.assign(e, { complete(e2) {
        e2 || (e2 = {});
        const t3 = e2.data && e2.data.header && e2.data.header["x-serverless-request-id"] || e2.header && e2.header["request-id"];
        if (!e2.statusCode || e2.statusCode >= 400)
          return s2(new P({ code: "SYS_ERR", message: e2.errMsg || "request:fail", requestId: t3 }));
        const r2 = e2.data;
        if (r2.error)
          return s2(new P({ code: r2.error.code, message: r2.error.message, requestId: t3 }));
        r2.result = r2.data, r2.requestId = t3, delete r2.data, n2(r2);
      } }));
    });
  } };
  const U = { request: (e) => uni.request(e), uploadFile: (e) => uni.uploadFile(e), setStorageSync: (e, t2) => uni.setStorageSync(e, t2), getStorageSync: (e) => uni.getStorageSync(e), removeStorageSync: (e) => uni.removeStorageSync(e), clearStorageSync: () => uni.clearStorageSync() };
  class C {
    constructor(e) {
      ["spaceId", "clientSecret"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e, t2))
          throw new Error(A("uniCloud.init.paramRequired", { param: t2 }));
      }), this.config = Object.assign({}, { endpoint: "https://api.bspapp.com" }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = U, this._getAccessTokenPromise = null, this._getAccessTokenPromiseStatus = null;
    }
    get hasAccessToken() {
      return !!this.accessToken;
    }
    setAccessToken(e) {
      this.accessToken = e;
    }
    requestWrapped(e) {
      return O.wrappedRequest(e, this.adapter.request);
    }
    requestAuth(e) {
      return this.requestWrapped(e);
    }
    request(e, t2) {
      return Promise.resolve().then(() => this.hasAccessToken ? t2 ? this.requestWrapped(e) : this.requestWrapped(e).catch((t3) => new Promise((e2, n2) => {
        !t3 || t3.code !== "GATEWAY_INVALID_TOKEN" && t3.code !== "InvalidParameter.InvalidToken" ? n2(t3) : e2();
      }).then(() => this.getAccessToken()).then(() => {
        const t4 = this.rebuildRequest(e);
        return this.request(t4, true);
      })) : this.getAccessToken().then(() => {
        const t3 = this.rebuildRequest(e);
        return this.request(t3, true);
      }));
    }
    rebuildRequest(e) {
      const t2 = Object.assign({}, e);
      return t2.data.token = this.accessToken, t2.header["x-basement-token"] = this.accessToken, t2.header["x-serverless-sign"] = O.sign(t2.data, this.config.clientSecret), t2;
    }
    setupRequest(e, t2) {
      const n2 = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      return t2 !== "auth" && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = O.sign(n2, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: s2 };
    }
    getAccessToken() {
      if (this._getAccessTokenPromiseStatus === "pending")
        return this._getAccessTokenPromise;
      this._getAccessTokenPromiseStatus = "pending";
      return this._getAccessTokenPromise = this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then((e) => new Promise((t2, n2) => {
        e.result && e.result.accessToken ? (this.setAccessToken(e.result.accessToken), this._getAccessTokenPromiseStatus = "fulfilled", t2(this.accessToken)) : (this._getAccessTokenPromiseStatus = "rejected", n2(new P({ code: "AUTH_FAILED", message: "\u83B7\u53D6accessToken\u5931\u8D25" })));
      }), (e) => (this._getAccessTokenPromiseStatus = "rejected", Promise.reject(e))), this._getAccessTokenPromise;
    }
    authorize() {
      this.getAccessToken();
    }
    callFunction(e) {
      const t2 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e.name, functionArgs: e.data || {} }) };
      return this.request(this.setupRequest(t2));
    }
    getOSSUploadOptionsFromPath(e) {
      const t2 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e) };
      return this.request(this.setupRequest(t2));
    }
    uploadFileToOSS({ url: e, formData: t2, name: n2, filePath: s2, fileType: r2, onUploadProgress: o2 }) {
      return new Promise((i2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e, formData: t2, name: n2, filePath: s2, fileType: r2, header: { "X-OSS-server-side-encrpytion": "AES256" }, success(e2) {
          e2 && e2.statusCode < 400 ? i2(e2) : a2(new P({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        }, fail(e2) {
          a2(new P({ code: e2.code || "UPLOAD_FAILED", message: e2.message || e2.errMsg || "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        } });
        typeof o2 == "function" && c2 && typeof c2.onProgressUpdate == "function" && c2.onProgressUpdate((e2) => {
          o2({ loaded: e2.totalBytesSent, total: e2.totalBytesExpectedToSend });
        });
      });
    }
    reportOSSUpload(e) {
      const t2 = { method: "serverless.file.resource.report", params: JSON.stringify(e) };
      return this.request(this.setupRequest(t2));
    }
    uploadFile({ filePath: e, cloudPath: t2, fileType: n2 = "image", onUploadProgress: s2, config: r2 }) {
      if (o(t2) !== "string")
        throw new P({ code: "INVALID_PARAM", message: "cloudPath\u5FC5\u987B\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B" });
      if (!(t2 = t2.trim()))
        throw new P({ code: "CLOUDPATH_REQUIRED", message: "cloudPath\u4E0D\u53EF\u4E3A\u7A7A" });
      if (/:\/\//.test(t2))
        throw new P({ code: "INVALID_PARAM", message: "cloudPath\u4E0D\u5408\u6CD5" });
      const i2 = r2 && r2.envType || this.config.envType;
      let a2, c2;
      return this.getOSSUploadOptionsFromPath({ env: i2, filename: t2 }).then((t3) => {
        const r3 = t3.result;
        a2 = r3.id, c2 = "https://" + r3.cdnDomain + "/" + r3.ossPath;
        const o2 = { url: "https://" + r3.host, formData: { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: r3.accessKeyId, Signature: r3.signature, host: r3.host, id: a2, key: r3.ossPath, policy: r3.policy, success_action_status: 200 }, fileName: "file", name: "file", filePath: e, fileType: n2 };
        return this.uploadFileToOSS(Object.assign({}, o2, { onUploadProgress: s2 }));
      }).then(() => this.reportOSSUpload({ id: a2 })).then((t3) => new Promise((n3, s3) => {
        t3.success ? n3({ success: true, filePath: e, fileID: c2 }) : s3(new P({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
      }));
    }
    deleteFile({ fileList: e }) {
      const t2 = { method: "serverless.file.resource.delete", params: JSON.stringify({ id: e[0] }) };
      return this.request(this.setupRequest(t2));
    }
    getTempFileURL({ fileList: e } = {}) {
      return new Promise((t2, n2) => {
        Array.isArray(e) && e.length !== 0 || n2(new P({ code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" })), t2({ fileList: e.map((e2) => ({ fileID: e2, tempFileURL: e2 })) });
      });
    }
  }
  const x = { init(e) {
    const t2 = new C(e), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } }, D = typeof location != "undefined" && location.protocol === "http:" ? "http:" : "https:";
  var R;
  !function(e) {
    e.local = "local", e.none = "none", e.session = "session";
  }(R || (R = {}));
  var q = function() {
  };
  const F = () => {
    let e;
    if (!Promise) {
      e = () => {
      }, e.promise = {};
      const t3 = () => {
        throw new Error('Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.');
      };
      return Object.defineProperty(e.promise, "then", { get: t3 }), Object.defineProperty(e.promise, "catch", { get: t3 }), e;
    }
    const t2 = new Promise((t3, n2) => {
      e = (e2, s2) => e2 ? n2(e2) : t3(s2);
    });
    return e.promise = t2, e;
  };
  function L(e) {
    return e === void 0;
  }
  function N(e) {
    return Object.prototype.toString.call(e) === "[object Null]";
  }
  var M;
  function $(e) {
    const t2 = (n2 = e, Object.prototype.toString.call(n2) === "[object Array]" ? e : [e]);
    var n2;
    for (const e2 of t2) {
      const { isMatch: t3, genAdapter: n3, runtime: s2 } = e2;
      if (t3())
        return { adapter: n3(), runtime: s2 };
    }
  }
  !function(e) {
    e.WEB = "web", e.WX_MP = "wx_mp";
  }(M || (M = {}));
  const j = { adapter: null, runtime: void 0 }, K = ["anonymousUuidKey"];
  class B extends q {
    constructor() {
      super(), j.adapter.root.tcbObject || (j.adapter.root.tcbObject = {});
    }
    setItem(e, t2) {
      j.adapter.root.tcbObject[e] = t2;
    }
    getItem(e) {
      return j.adapter.root.tcbObject[e];
    }
    removeItem(e) {
      delete j.adapter.root.tcbObject[e];
    }
    clear() {
      delete j.adapter.root.tcbObject;
    }
  }
  function H(e, t2) {
    switch (e) {
      case "local":
        return t2.localStorage || new B();
      case "none":
        return new B();
      default:
        return t2.sessionStorage || new B();
    }
  }
  class W {
    constructor(e) {
      if (!this._storage) {
        this._persistence = j.adapter.primaryStorage || e.persistence, this._storage = H(this._persistence, j.adapter);
        const t2 = `access_token_${e.env}`, n2 = `access_token_expire_${e.env}`, s2 = `refresh_token_${e.env}`, r2 = `anonymous_uuid_${e.env}`, o2 = `login_type_${e.env}`, i2 = `user_info_${e.env}`;
        this.keys = { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2, anonymousUuidKey: r2, loginTypeKey: o2, userInfoKey: i2 };
      }
    }
    updatePersistence(e) {
      if (e === this._persistence)
        return;
      const t2 = this._persistence === "local";
      this._persistence = e;
      const n2 = H(e, j.adapter);
      for (const e2 in this.keys) {
        const s2 = this.keys[e2];
        if (t2 && K.includes(e2))
          continue;
        const r2 = this._storage.getItem(s2);
        L(r2) || N(r2) || (n2.setItem(s2, r2), this._storage.removeItem(s2));
      }
      this._storage = n2;
    }
    setStore(e, t2, n2) {
      if (!this._storage)
        return;
      const s2 = { version: n2 || "localCachev1", content: t2 }, r2 = JSON.stringify(s2);
      try {
        this._storage.setItem(e, r2);
      } catch (e2) {
        throw e2;
      }
    }
    getStore(e, t2) {
      try {
        if (!this._storage)
          return;
      } catch (e2) {
        return "";
      }
      t2 = t2 || "localCachev1";
      const n2 = this._storage.getItem(e);
      if (!n2)
        return "";
      if (n2.indexOf(t2) >= 0) {
        return JSON.parse(n2).content;
      }
      return "";
    }
    removeStore(e) {
      this._storage.removeItem(e);
    }
  }
  const z = {}, V = {};
  function J(e) {
    return z[e];
  }
  class Y {
    constructor(e, t2) {
      this.data = t2 || null, this.name = e;
    }
  }
  class X extends Y {
    constructor(e, t2) {
      super("error", { error: e, data: t2 }), this.error = e;
    }
  }
  const G = new class {
    constructor() {
      this._listeners = {};
    }
    on(e, t2) {
      return function(e2, t3, n2) {
        n2[e2] = n2[e2] || [], n2[e2].push(t3);
      }(e, t2, this._listeners), this;
    }
    off(e, t2) {
      return function(e2, t3, n2) {
        if (n2 && n2[e2]) {
          const s2 = n2[e2].indexOf(t3);
          s2 !== -1 && n2[e2].splice(s2, 1);
        }
      }(e, t2, this._listeners), this;
    }
    fire(e, t2) {
      if (e instanceof X)
        return console.error(e.error), this;
      const n2 = typeof e == "string" ? new Y(e, t2 || {}) : e;
      const s2 = n2.name;
      if (this._listens(s2)) {
        n2.target = this;
        const e2 = this._listeners[s2] ? [...this._listeners[s2]] : [];
        for (const t3 of e2)
          t3.call(this, n2);
      }
      return this;
    }
    _listens(e) {
      return this._listeners[e] && this._listeners[e].length > 0;
    }
  }();
  function Q(e, t2) {
    G.on(e, t2);
  }
  function Z(e, t2 = {}) {
    G.fire(e, t2);
  }
  function ee(e, t2) {
    G.off(e, t2);
  }
  const te = "loginStateChanged", ne = "loginStateExpire", se = "loginTypeChanged", re = "anonymousConverted", oe = "refreshAccessToken";
  var ie;
  !function(e) {
    e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";
  }(ie || (ie = {}));
  const ae = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"], ce = { "X-SDK-Version": "1.3.5" };
  function ue(e, t2, n2) {
    const s2 = e[t2];
    e[t2] = function(t3) {
      const r2 = {}, o2 = {};
      n2.forEach((n3) => {
        const { data: s3, headers: i3 } = n3.call(e, t3);
        Object.assign(r2, s3), Object.assign(o2, i3);
      });
      const i2 = t3.data;
      return i2 && (() => {
        var e2;
        if (e2 = i2, Object.prototype.toString.call(e2) !== "[object FormData]")
          t3.data = __spreadValues(__spreadValues({}, i2), r2);
        else
          for (const e3 in r2)
            i2.append(e3, r2[e3]);
      })(), t3.headers = __spreadValues(__spreadValues({}, t3.headers || {}), o2), s2.call(e, t3);
    };
  }
  function he() {
    const e = Math.random().toString(16).slice(2);
    return { data: { seqId: e }, headers: __spreadProps(__spreadValues({}, ce), { "x-seqid": e }) };
  }
  class le {
    constructor(e = {}) {
      var t2;
      this.config = e, this._reqClass = new j.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: `\u8BF7\u6C42\u5728${this.config.timeout / 1e3}s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD`, restrictedMethods: ["post"] }), this._cache = J(this.config.env), this._localCache = (t2 = this.config.env, V[t2]), ue(this._reqClass, "post", [he]), ue(this._reqClass, "upload", [he]), ue(this._reqClass, "download", [he]);
    }
    async post(e) {
      return await this._reqClass.post(e);
    }
    async upload(e) {
      return await this._reqClass.upload(e);
    }
    async download(e) {
      return await this._reqClass.download(e);
    }
    async refreshAccessToken() {
      let e, t2;
      this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
      try {
        e = await this._refreshAccessTokenPromise;
      } catch (e2) {
        t2 = e2;
      }
      if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t2)
        throw t2;
      return e;
    }
    async _refreshAccessToken() {
      const { accessTokenKey: e, accessTokenExpireKey: t2, refreshTokenKey: n2, loginTypeKey: s2, anonymousUuidKey: r2 } = this._cache.keys;
      this._cache.removeStore(e), this._cache.removeStore(t2);
      let o2 = this._cache.getStore(n2);
      if (!o2)
        throw new Error("\u672A\u767B\u5F55CloudBase");
      const i2 = { refresh_token: o2 }, a2 = await this.request("auth.fetchAccessTokenWithRefreshToken", i2);
      if (a2.data.code) {
        const { code: e2 } = a2.data;
        if (e2 === "SIGN_PARAM_INVALID" || e2 === "REFRESH_TOKEN_EXPIRED" || e2 === "INVALID_REFRESH_TOKEN") {
          if (this._cache.getStore(s2) === ie.ANONYMOUS && e2 === "INVALID_REFRESH_TOKEN") {
            const e3 = this._cache.getStore(r2), t3 = this._cache.getStore(n2), s3 = await this.send("auth.signInAnonymously", { anonymous_uuid: e3, refresh_token: t3 });
            return this.setRefreshToken(s3.refresh_token), this._refreshAccessToken();
          }
          Z(ne), this._cache.removeStore(n2);
        }
        throw new Error(`\u5237\u65B0access token\u5931\u8D25\uFF1A${a2.data.code}`);
      }
      if (a2.data.access_token)
        return Z(oe), this._cache.setStore(e, a2.data.access_token), this._cache.setStore(t2, a2.data.access_token_expire + Date.now()), { accessToken: a2.data.access_token, accessTokenExpire: a2.data.access_token_expire };
      a2.data.refresh_token && (this._cache.removeStore(n2), this._cache.setStore(n2, a2.data.refresh_token), this._refreshAccessToken());
    }
    async getAccessToken() {
      const { accessTokenKey: e, accessTokenExpireKey: t2, refreshTokenKey: n2 } = this._cache.keys;
      if (!this._cache.getStore(n2))
        throw new Error("refresh token\u4E0D\u5B58\u5728\uFF0C\u767B\u5F55\u72B6\u6001\u5F02\u5E38");
      let s2 = this._cache.getStore(e), r2 = this._cache.getStore(t2), o2 = true;
      return this._shouldRefreshAccessTokenHook && !await this._shouldRefreshAccessTokenHook(s2, r2) && (o2 = false), (!s2 || !r2 || r2 < Date.now()) && o2 ? this.refreshAccessToken() : { accessToken: s2, accessTokenExpire: r2 };
    }
    async request(e, t2, n2) {
      const s2 = `x-tcb-trace_${this.config.env}`;
      let r2 = "application/x-www-form-urlencoded";
      const o2 = __spreadValues({ action: e, env: this.config.env, dataVersion: "2019-08-16" }, t2);
      if (ae.indexOf(e) === -1) {
        const { refreshTokenKey: e2 } = this._cache.keys;
        this._cache.getStore(e2) && (o2.access_token = (await this.getAccessToken()).accessToken);
      }
      let i2;
      if (e === "storage.uploadFile") {
        i2 = new FormData();
        for (let e2 in i2)
          i2.hasOwnProperty(e2) && i2[e2] !== void 0 && i2.append(e2, o2[e2]);
        r2 = "multipart/form-data";
      } else {
        r2 = "application/json", i2 = {};
        for (let e2 in o2)
          o2[e2] !== void 0 && (i2[e2] = o2[e2]);
      }
      let a2 = { headers: { "content-type": r2 } };
      n2 && n2.onUploadProgress && (a2.onUploadProgress = n2.onUploadProgress);
      const c2 = this._localCache.getStore(s2);
      c2 && (a2.headers["X-TCB-Trace"] = c2);
      const { parse: u2, inQuery: h2, search: l2 } = t2;
      let d2 = { env: this.config.env };
      u2 && (d2.parse = true), h2 && (d2 = __spreadValues(__spreadValues({}, h2), d2));
      let f = function(e2, t3, n3 = {}) {
        const s3 = /\?/.test(t3);
        let r3 = "";
        for (let e3 in n3)
          r3 === "" ? !s3 && (t3 += "?") : r3 += "&", r3 += `${e3}=${encodeURIComponent(n3[e3])}`;
        return /^http(s)?\:\/\//.test(t3 += r3) ? t3 : `${e2}${t3}`;
      }(D, "//tcb-api.tencentcloudapi.com/web", d2);
      l2 && (f += l2);
      const p2 = await this.post(__spreadValues({ url: f, data: i2 }, a2)), g2 = p2.header && p2.header["x-tcb-trace"];
      if (g2 && this._localCache.setStore(s2, g2), Number(p2.status) !== 200 && Number(p2.statusCode) !== 200 || !p2.data)
        throw new Error("network request error");
      return p2;
    }
    async send(e, t2 = {}) {
      const n2 = await this.request(e, t2, { onUploadProgress: t2.onUploadProgress });
      if (n2.data.code === "ACCESS_TOKEN_EXPIRED" && ae.indexOf(e) === -1) {
        await this.refreshAccessToken();
        const n3 = await this.request(e, t2, { onUploadProgress: t2.onUploadProgress });
        if (n3.data.code)
          throw new Error(`[${n3.data.code}] ${n3.data.message}`);
        return n3.data;
      }
      if (n2.data.code)
        throw new Error(`[${n2.data.code}] ${n2.data.message}`);
      return n2.data;
    }
    setRefreshToken(e) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e);
    }
  }
  const de = {};
  function fe(e) {
    return de[e];
  }
  class pe {
    constructor(e) {
      this.config = e, this._cache = J(e.env), this._request = fe(e.env);
    }
    setRefreshToken(e) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e);
    }
    setAccessToken(e, t2) {
      const { accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys;
      this._cache.setStore(n2, e), this._cache.setStore(s2, t2);
    }
    async refreshUserInfo() {
      const { data: e } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e), e;
    }
    setLocalUserInfo(e) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e);
    }
  }
  class ge {
    constructor(e) {
      if (!e)
        throw new Error("envId is not defined");
      this._envId = e, this._cache = J(this._envId), this._request = fe(this._envId), this.setUserInfo();
    }
    linkWithTicket(e) {
      if (typeof e != "string")
        throw new Error("ticket must be string");
      return this._request.send("auth.linkWithTicket", { ticket: e });
    }
    linkWithRedirect(e) {
      e.signInWithRedirect();
    }
    updatePassword(e, t2) {
      return this._request.send("auth.updatePassword", { oldPassword: t2, newPassword: e });
    }
    updateEmail(e) {
      return this._request.send("auth.updateEmail", { newEmail: e });
    }
    updateUsername(e) {
      if (typeof e != "string")
        throw new Error("username must be a string");
      return this._request.send("auth.updateUsername", { username: e });
    }
    async getLinkedUidList() {
      const { data: e } = await this._request.send("auth.getLinkedUidList", {});
      let t2 = false;
      const { users: n2 } = e;
      return n2.forEach((e2) => {
        e2.wxOpenId && e2.wxPublicId && (t2 = true);
      }), { users: n2, hasPrimaryUid: t2 };
    }
    setPrimaryUid(e) {
      return this._request.send("auth.setPrimaryUid", { uid: e });
    }
    unlink(e) {
      return this._request.send("auth.unlink", { platform: e });
    }
    async update(e) {
      const { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: o2, city: i2 } = e, { data: a2 } = await this._request.send("auth.updateUserInfo", { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: o2, city: i2 });
      this.setLocalUserInfo(a2);
    }
    async refresh() {
      const { data: e } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e), e;
    }
    setUserInfo() {
      const { userInfoKey: e } = this._cache.keys, t2 = this._cache.getStore(e);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach((e2) => {
        this[e2] = t2[e2];
      }), this.location = { country: t2.country, province: t2.province, city: t2.city };
    }
    setLocalUserInfo(e) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e), this.setUserInfo();
    }
  }
  class me {
    constructor(e) {
      if (!e)
        throw new Error("envId is not defined");
      this._cache = J(e);
      const { refreshTokenKey: t2, accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys, r2 = this._cache.getStore(t2), o2 = this._cache.getStore(n2), i2 = this._cache.getStore(s2);
      this.credential = { refreshToken: r2, accessToken: o2, accessTokenExpire: i2 }, this.user = new ge(e);
    }
    get isAnonymousAuth() {
      return this.loginType === ie.ANONYMOUS;
    }
    get isCustomAuth() {
      return this.loginType === ie.CUSTOM;
    }
    get isWeixinAuth() {
      return this.loginType === ie.WECHAT || this.loginType === ie.WECHAT_OPEN || this.loginType === ie.WECHAT_PUBLIC;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }
  class ye extends pe {
    async signIn() {
      this._cache.updatePersistence("local");
      const { anonymousUuidKey: e, refreshTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e) || void 0, s2 = this._cache.getStore(t2) || void 0, r2 = await this._request.send("auth.signInAnonymously", { anonymous_uuid: n2, refresh_token: s2 });
      if (r2.uuid && r2.refresh_token) {
        this._setAnonymousUUID(r2.uuid), this.setRefreshToken(r2.refresh_token), await this._request.refreshAccessToken(), Z(te), Z(se, { env: this.config.env, loginType: ie.ANONYMOUS, persistence: "local" });
        const e2 = new me(this.config.env);
        return await e2.user.refresh(), e2;
      }
      throw new Error("\u533F\u540D\u767B\u5F55\u5931\u8D25");
    }
    async linkAndRetrieveDataWithTicket(e) {
      const { anonymousUuidKey: t2, refreshTokenKey: n2 } = this._cache.keys, s2 = this._cache.getStore(t2), r2 = this._cache.getStore(n2), o2 = await this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s2, refresh_token: r2, ticket: e });
      if (o2.refresh_token)
        return this._clearAnonymousUUID(), this.setRefreshToken(o2.refresh_token), await this._request.refreshAccessToken(), Z(re, { env: this.config.env }), Z(se, { loginType: ie.CUSTOM, persistence: "local" }), { credential: { refreshToken: o2.refresh_token } };
      throw new Error("\u533F\u540D\u8F6C\u5316\u5931\u8D25");
    }
    _setAnonymousUUID(e) {
      const { anonymousUuidKey: t2, loginTypeKey: n2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.setStore(t2, e), this._cache.setStore(n2, ie.ANONYMOUS);
    }
    _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  }
  class _e extends pe {
    async signIn(e) {
      if (typeof e != "string")
        throw new Error("ticket must be a string");
      const { refreshTokenKey: t2 } = this._cache.keys, n2 = await this._request.send("auth.signInWithTicket", { ticket: e, refresh_token: this._cache.getStore(t2) || "" });
      if (n2.refresh_token)
        return this.setRefreshToken(n2.refresh_token), await this._request.refreshAccessToken(), Z(te), Z(se, { env: this.config.env, loginType: ie.CUSTOM, persistence: this.config.persistence }), await this.refreshUserInfo(), new me(this.config.env);
      throw new Error("\u81EA\u5B9A\u4E49\u767B\u5F55\u5931\u8D25");
    }
  }
  class we extends pe {
    async signIn(e, t2) {
      if (typeof e != "string")
        throw new Error("email must be a string");
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: "EMAIL", email: e, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token: o2, access_token_expire: i2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), o2 && i2 ? this.setAccessToken(o2, i2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), Z(te), Z(se, { env: this.config.env, loginType: ie.EMAIL, persistence: this.config.persistence }), new me(this.config.env);
      throw s2.code ? new Error(`\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: [${s2.code}] ${s2.message}`) : new Error("\u90AE\u7BB1\u767B\u5F55\u5931\u8D25");
    }
    async activate(e) {
      return this._request.send("auth.activateEndUserMail", { token: e });
    }
    async resetPasswordWithToken(e, t2) {
      return this._request.send("auth.resetPasswordWithToken", { token: e, newPassword: t2 });
    }
  }
  class ke extends pe {
    async signIn(e, t2) {
      if (typeof e != "string")
        throw new Error("username must be a string");
      typeof t2 != "string" && (t2 = "", console.warn("password is empty"));
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: ie.USERNAME, username: e, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token_expire: o2, access_token: i2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), i2 && o2 ? this.setAccessToken(i2, o2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), Z(te), Z(se, { env: this.config.env, loginType: ie.USERNAME, persistence: this.config.persistence }), new me(this.config.env);
      throw s2.code ? new Error(`\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: [${s2.code}] ${s2.message}`) : new Error("\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25");
    }
  }
  class Se {
    constructor(e) {
      this.config = e, this._cache = J(e.env), this._request = fe(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), Q(se, this._onLoginTypeChanged);
    }
    get currentUser() {
      const e = this.hasLoginState();
      return e && e.user || null;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
    anonymousAuthProvider() {
      return new ye(this.config);
    }
    customAuthProvider() {
      return new _e(this.config);
    }
    emailAuthProvider() {
      return new we(this.config);
    }
    usernameAuthProvider() {
      return new ke(this.config);
    }
    async signInAnonymously() {
      return new ye(this.config).signIn();
    }
    async signInWithEmailAndPassword(e, t2) {
      return new we(this.config).signIn(e, t2);
    }
    signInWithUsernameAndPassword(e, t2) {
      return new ke(this.config).signIn(e, t2);
    }
    async linkAndRetrieveDataWithTicket(e) {
      this._anonymousAuthProvider || (this._anonymousAuthProvider = new ye(this.config)), Q(re, this._onAnonymousConverted);
      return await this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);
    }
    async signOut() {
      if (this.loginType === ie.ANONYMOUS)
        throw new Error("\u533F\u540D\u7528\u6237\u4E0D\u652F\u6301\u767B\u51FA\u64CD\u4F5C");
      const { refreshTokenKey: e, accessTokenKey: t2, accessTokenExpireKey: n2 } = this._cache.keys, s2 = this._cache.getStore(e);
      if (!s2)
        return;
      const r2 = await this._request.send("auth.logout", { refresh_token: s2 });
      return this._cache.removeStore(e), this._cache.removeStore(t2), this._cache.removeStore(n2), Z(te), Z(se, { env: this.config.env, loginType: ie.NULL, persistence: this.config.persistence }), r2;
    }
    async signUpWithEmailAndPassword(e, t2) {
      return this._request.send("auth.signUpWithEmailAndPassword", { email: e, password: t2 });
    }
    async sendPasswordResetEmail(e) {
      return this._request.send("auth.sendPasswordResetEmail", { email: e });
    }
    onLoginStateChanged(e) {
      Q(te, () => {
        const t3 = this.hasLoginState();
        e.call(this, t3);
      });
      const t2 = this.hasLoginState();
      e.call(this, t2);
    }
    onLoginStateExpired(e) {
      Q(ne, e.bind(this));
    }
    onAccessTokenRefreshed(e) {
      Q(oe, e.bind(this));
    }
    onAnonymousConverted(e) {
      Q(re, e.bind(this));
    }
    onLoginTypeChanged(e) {
      Q(se, () => {
        const t2 = this.hasLoginState();
        e.call(this, t2);
      });
    }
    async getAccessToken() {
      return { accessToken: (await this._request.getAccessToken()).accessToken, env: this.config.env };
    }
    hasLoginState() {
      const { refreshTokenKey: e } = this._cache.keys;
      return this._cache.getStore(e) ? new me(this.config.env) : null;
    }
    async isUsernameRegistered(e) {
      if (typeof e != "string")
        throw new Error("username must be a string");
      const { data: t2 } = await this._request.send("auth.isUsernameRegistered", { username: e });
      return t2 && t2.isRegistered;
    }
    getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
    async signInWithTicket(e) {
      return new _e(this.config).signIn(e);
    }
    shouldRefreshAccessToken(e) {
      this._request._shouldRefreshAccessTokenHook = e.bind(this);
    }
    getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then((e) => e.code ? e : __spreadProps(__spreadValues({}, e.data), { requestId: e.seqId }));
    }
    getAuthHeader() {
      const { refreshTokenKey: e, accessTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e);
      return { "x-cloudbase-credentials": this._cache.getStore(t2) + "/@@/" + n2 };
    }
    _onAnonymousConverted(e) {
      const { env: t2 } = e.data;
      t2 === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
    _onLoginTypeChanged(e) {
      const { loginType: t2, persistence: n2, env: s2 } = e.data;
      s2 === this.config.env && (this._cache.updatePersistence(n2), this._cache.setStore(this._cache.keys.loginTypeKey, t2));
    }
  }
  const ve = function(e, t2) {
    t2 = t2 || F();
    const n2 = fe(this.config.env), { cloudPath: s2, filePath: r2, onUploadProgress: o2, fileType: i2 = "image" } = e;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e2) => {
      const { data: { url: a2, authorization: c2, token: u2, fileId: h2, cosFileId: l2 }, requestId: d2 } = e2, f = { key: s2, signature: c2, "x-cos-meta-fileid": l2, success_action_status: "201", "x-cos-security-token": u2 };
      n2.upload({ url: a2, data: f, file: r2, name: s2, fileType: i2, onUploadProgress: o2 }).then((e3) => {
        e3.statusCode === 201 ? t2(null, { fileID: h2, requestId: d2 }) : t2(new Error(`STORAGE_REQUEST_FAIL: ${e3.data}`));
      }).catch((e3) => {
        t2(e3);
      });
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, Te = function(e, t2) {
    t2 = t2 || F();
    const n2 = fe(this.config.env), { cloudPath: s2 } = e;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e2) => {
      t2(null, e2);
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, Pe = function({ fileList: e }, t2) {
    if (t2 = t2 || F(), !e || !Array.isArray(e))
      return { code: "INVALID_PARAM", message: "fileList\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u6570\u7EC4" };
    for (let t3 of e)
      if (!t3 || typeof t3 != "string")
        return { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" };
    const n2 = { fileid_list: e };
    return fe(this.config.env).send("storage.batchDeleteFile", n2).then((e2) => {
      e2.code ? t2(null, e2) : t2(null, { fileList: e2.data.delete_list, requestId: e2.requestId });
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, Ae = function({ fileList: e }, t2) {
    t2 = t2 || F(), e && Array.isArray(e) || t2(null, { code: "INVALID_PARAM", message: "fileList\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u6570\u7EC4" });
    let n2 = [];
    for (let s3 of e)
      typeof s3 == "object" ? (s3.hasOwnProperty("fileID") && s3.hasOwnProperty("maxAge") || t2(null, { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u5305\u542BfileID\u548CmaxAge\u7684\u5BF9\u8C61" }), n2.push({ fileid: s3.fileID, max_age: s3.maxAge })) : typeof s3 == "string" ? n2.push({ fileid: s3 }) : t2(null, { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u5B57\u7B26\u4E32" });
    const s2 = { file_list: n2 };
    return fe(this.config.env).send("storage.batchGetDownloadUrl", s2).then((e2) => {
      e2.code ? t2(null, e2) : t2(null, { fileList: e2.data.download_list, requestId: e2.requestId });
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, Ie = async function({ fileID: e }, t2) {
    const n2 = (await Ae.call(this, { fileList: [{ fileID: e, maxAge: 600 }] })).fileList[0];
    if (n2.code !== "SUCCESS")
      return t2 ? t2(n2) : new Promise((e2) => {
        e2(n2);
      });
    const s2 = fe(this.config.env);
    let r2 = n2.download_url;
    if (r2 = encodeURI(r2), !t2)
      return s2.download({ url: r2 });
    t2(await s2.download({ url: r2 }));
  }, Ee = function({ name: e, data: t2, query: n2, parse: s2, search: r2 }, o2) {
    const i2 = o2 || F();
    let a2;
    try {
      a2 = t2 ? JSON.stringify(t2) : "";
    } catch (e2) {
      return Promise.reject(e2);
    }
    if (!e)
      return Promise.reject(new Error("\u51FD\u6570\u540D\u4E0D\u80FD\u4E3A\u7A7A"));
    const c2 = { inQuery: n2, parse: s2, search: r2, function_name: e, request_data: a2 };
    return fe(this.config.env).send("functions.invokeFunction", c2).then((e2) => {
      if (e2.code)
        i2(null, e2);
      else {
        let t3 = e2.data.response_data;
        if (s2)
          i2(null, { result: t3, requestId: e2.requestId });
        else
          try {
            t3 = JSON.parse(e2.data.response_data), i2(null, { result: t3, requestId: e2.requestId });
          } catch (e3) {
            i2(new Error("response data must be json"));
          }
      }
      return i2.promise;
    }).catch((e2) => {
      i2(e2);
    }), i2.promise;
  }, be = { timeout: 15e3, persistence: "session" }, Oe = {};
  class Ue {
    constructor(e) {
      this.config = e || this.config, this.authObj = void 0;
    }
    init(e) {
      switch (j.adapter || (this.requestClient = new j.adapter.reqClass({ timeout: e.timeout || 5e3, timeoutMsg: `\u8BF7\u6C42\u5728${(e.timeout || 5e3) / 1e3}s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD` })), this.config = __spreadValues(__spreadValues({}, be), e), true) {
        case this.config.timeout > 6e5:
          console.warn("timeout\u5927\u4E8E\u53EF\u914D\u7F6E\u4E0A\u9650[10\u5206\u949F]\uFF0C\u5DF2\u91CD\u7F6E\u4E3A\u4E0A\u9650\u6570\u503C"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout\u5C0F\u4E8E\u53EF\u914D\u7F6E\u4E0B\u9650[100ms]\uFF0C\u5DF2\u91CD\u7F6E\u4E3A\u4E0B\u9650\u6570\u503C"), this.config.timeout = 100;
      }
      return new Ue(this.config);
    }
    auth({ persistence: e } = {}) {
      if (this.authObj)
        return this.authObj;
      const t2 = e || j.adapter.primaryStorage || be.persistence;
      var n2;
      return t2 !== this.config.persistence && (this.config.persistence = t2), function(e2) {
        const { env: t3 } = e2;
        z[t3] = new W(e2), V[t3] = new W(__spreadProps(__spreadValues({}, e2), { persistence: "local" }));
      }(this.config), n2 = this.config, de[n2.env] = new le(n2), this.authObj = new Se(this.config), this.authObj;
    }
    on(e, t2) {
      return Q.apply(this, [e, t2]);
    }
    off(e, t2) {
      return ee.apply(this, [e, t2]);
    }
    callFunction(e, t2) {
      return Ee.apply(this, [e, t2]);
    }
    deleteFile(e, t2) {
      return Pe.apply(this, [e, t2]);
    }
    getTempFileURL(e, t2) {
      return Ae.apply(this, [e, t2]);
    }
    downloadFile(e, t2) {
      return Ie.apply(this, [e, t2]);
    }
    uploadFile(e, t2) {
      return ve.apply(this, [e, t2]);
    }
    getUploadMetadata(e, t2) {
      return Te.apply(this, [e, t2]);
    }
    registerExtension(e) {
      Oe[e.name] = e;
    }
    async invokeExtension(e, t2) {
      const n2 = Oe[e];
      if (!n2)
        throw Error(`\u6269\u5C55${e} \u5FC5\u987B\u5148\u6CE8\u518C`);
      return await n2.invoke(t2, this);
    }
    useAdapters(e) {
      const { adapter: t2, runtime: n2 } = $(e) || {};
      t2 && (j.adapter = t2), n2 && (j.runtime = n2);
    }
  }
  const Ce = new Ue();
  function xe(e, t2, n2) {
    n2 === void 0 && (n2 = {});
    var s2 = /\?/.test(t2), r2 = "";
    for (var o2 in n2)
      r2 === "" ? !s2 && (t2 += "?") : r2 += "&", r2 += o2 + "=" + encodeURIComponent(n2[o2]);
    return /^http(s)?:\/\//.test(t2 += r2) ? t2 : "" + e + t2;
  }
  class De {
    post(e) {
      const { url: t2, data: n2, headers: s2 } = e;
      return new Promise((e2, r2) => {
        U.request({ url: xe("https:", t2), data: n2, method: "POST", header: s2, success(t3) {
          e2(t3);
        }, fail(e3) {
          r2(e3);
        } });
      });
    }
    upload(e) {
      return new Promise((t2, n2) => {
        const { url: s2, file: r2, data: o2, headers: i2, fileType: a2 } = e, c2 = U.uploadFile({ url: xe("https:", s2), name: "file", formData: Object.assign({}, o2), filePath: r2, fileType: a2, header: i2, success(e2) {
          const n3 = { statusCode: e2.statusCode, data: e2.data || {} };
          e2.statusCode === 200 && o2.success_action_status && (n3.statusCode = parseInt(o2.success_action_status, 10)), t2(n3);
        }, fail(e2) {
          n2(new Error(e2.errMsg || "uploadFile:fail"));
        } });
        typeof e.onUploadProgress == "function" && c2 && typeof c2.onProgressUpdate == "function" && c2.onProgressUpdate((t3) => {
          e.onUploadProgress({ loaded: t3.totalBytesSent, total: t3.totalBytesExpectedToSend });
        });
      });
    }
  }
  const Re = { setItem(e, t2) {
    U.setStorageSync(e, t2);
  }, getItem: (e) => U.getStorageSync(e), removeItem(e) {
    U.removeStorageSync(e);
  }, clear() {
    U.clearStorageSync();
  } };
  const qe = { genAdapter: function() {
    return { root: {}, reqClass: De, localStorage: Re, primaryStorage: "local" };
  }, isMatch: function() {
    return true;
  }, runtime: "uni_app" };
  Ce.useAdapters(qe);
  const Fe = Ce, Le = Fe.init;
  function Ne(e) {
    return e && Ne(e.__v_raw) || e;
  }
  function Me() {
    return { token: U.getStorageSync("uni_id_token") || U.getStorageSync("uniIdToken"), tokenExpired: U.getStorageSync("uni_id_token_expired") };
  }
  Fe.init = function(e) {
    e.env = e.spaceId;
    const t2 = Le.call(this, e);
    t2.config.provider = "tencent", t2.config.spaceId = e.spaceId;
    const n2 = t2.auth;
    return t2.auth = function(e2) {
      const t3 = n2.call(this, e2);
      return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach((e3) => {
        t3[e3] = T(t3[e3]).bind(t3);
      }), t3;
    }, t2.customAuth = t2.auth, t2;
  };
  class je extends C {
    getAccessToken() {
      return new Promise((e, t2) => {
        const n2 = "Anonymous_Access_token";
        this.setAccessToken(n2), e(n2);
      });
    }
    setupRequest(e, t2) {
      const n2 = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      t2 !== "auth" && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = O.sign(n2, this.config.clientSecret);
      const r2 = b(), { APPID: o2, PLATFORM: i2, DEVICEID: a2, CLIENT_SDK_VERSION: c2 } = r2;
      s2["x-client-platform"] = i2, s2["x-client-appid"] = o2, s2["x-client-device-id"] = a2, s2["x-client-version"] = c2;
      const { token: u2 } = Me();
      return s2["x-client-token"] = u2, { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: JSON.parse(JSON.stringify(s2)) };
    }
    uploadFileToOSS({ url: e, formData: t2, name: n2, filePath: s2, fileType: r2, onUploadProgress: o2 }) {
      return new Promise((i2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e, formData: t2, name: n2, filePath: s2, fileType: r2, success(e2) {
          e2 && e2.statusCode < 400 ? i2(e2) : a2(new P({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        }, fail(e2) {
          a2(new P({ code: e2.code || "UPLOAD_FAILED", message: e2.message || e2.errMsg || "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        } });
        typeof o2 == "function" && c2 && typeof c2.onProgressUpdate == "function" && c2.onProgressUpdate((e2) => {
          o2({ loaded: e2.totalBytesSent, total: e2.totalBytesExpectedToSend });
        });
      });
    }
    uploadFile({ filePath: e, cloudPath: t2, fileType: n2 = "image", onUploadProgress: s2 }) {
      if (!t2)
        throw new P({ code: "CLOUDPATH_REQUIRED", message: "cloudPath\u4E0D\u53EF\u4E3A\u7A7A" });
      let r2;
      return this.getOSSUploadOptionsFromPath({ cloudPath: t2 }).then((t3) => {
        const { url: o2, formData: i2, name: a2, fileUrl: c2 } = t3.result;
        r2 = c2;
        const u2 = { url: o2, formData: i2, name: a2, filePath: e, fileType: n2 };
        return this.uploadFileToOSS(Object.assign({}, u2, { onUploadProgress: s2 }));
      }).then(() => this.reportOSSUpload({ cloudPath: t2 })).then((t3) => new Promise((n3, s3) => {
        t3.success ? n3({ success: true, filePath: e, fileID: r2 }) : s3(new P({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
      }));
    }
  }
  const Ke = { init(e) {
    const t2 = new je(e), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } };
  let Be;
  function He({ data: e }) {
    Be || (Be = b());
    const t2 = JSON.parse(JSON.stringify(e || {}));
    if (Object.assign(t2, { clientInfo: Be }), !t2.uniIdToken) {
      const { token: e2 } = Me();
      e2 && (t2.uniIdToken = e2);
    }
    return t2;
  }
  function We({ name: e, data: t2 }) {
    const { localAddress: n2, localPort: s2 } = this, r2 = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider], o2 = this.config.spaceId, i2 = `http://${n2}:${s2}/system/check-function`, a2 = `http://${n2}:${s2}/cloudfunctions/${e}`;
    return new Promise((t3, n3) => {
      U.request({ method: "POST", url: i2, data: { name: e, platform: h, provider: r2, spaceId: o2 }, timeout: 3e3, success(e2) {
        t3(e2);
      }, fail() {
        t3({ data: { code: "NETWORK_ERROR", message: "\u8FDE\u63A5\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5BA2\u6237\u7AEF\u662F\u5426\u548C\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570\u3002" } });
      } });
    }).then(({ data: e2 } = {}) => {
      const { code: t3, message: n3 } = e2 || {};
      return { code: t3 === 0 ? 0 : t3 || "SYS_ERR", message: n3 || "SYS_ERR" };
    }).then(({ code: n3, message: s3 }) => {
      if (n3 !== 0) {
        switch (n3) {
          case "MODULE_ENCRYPTED":
            console.error(`\u6B64\u4E91\u51FD\u6570\uFF08${e}\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570`);
            break;
          case "FUNCTION_ENCRYPTED":
            console.error(`\u6B64\u4E91\u51FD\u6570\uFF08${e}\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570`);
            break;
          case "ACTION_ENCRYPTED":
            console.error(s3 || "\u9700\u8981\u8BBF\u95EE\u52A0\u5BC6\u7684uni-clientDB-action\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u73AF\u5883");
            break;
          case "NETWORK_ERROR": {
            const e2 = "\u8FDE\u63A5\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5BA2\u6237\u7AEF\u662F\u5426\u548C\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B";
            throw console.error(e2), new Error(e2);
          }
          case "SWITCH_TO_CLOUD":
            break;
          default: {
            const e2 = `\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A${s3}\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5`;
            throw console.error(e2), new Error(e2);
          }
        }
        return this._originCallFunction({ name: e, data: t2 });
      }
      return new Promise((e2, n4) => {
        const s4 = He.call(this, { data: t2 });
        U.request({ method: "POST", url: a2, data: { provider: r2, platform: h, param: s4 }, success: ({ statusCode: t3, data: s5 } = {}) => !t3 || t3 >= 400 ? n4(new P({ code: s5.code || "SYS_ERR", message: s5.message || "request:fail" })) : e2({ result: s5 }), fail(e3) {
          n4(new P({ code: e3.code || e3.errCode || "SYS_ERR", message: e3.message || e3.errMsg || "request:fail" }));
        } });
      });
    });
  }
  const ze = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "\uFF0C\u4E91\u51FD\u6570[{functionName}]\u5728\u4E91\u7AEF\u4E0D\u5B58\u5728\uFF0C\u8BF7\u68C0\u67E5\u6B64\u4E91\u51FD\u6570\u540D\u79F0\u662F\u5426\u6B63\u786E\u4EE5\u53CA\u8BE5\u4E91\u51FD\u6570\u662F\u5426\u5DF2\u4E0A\u4F20\u5230\u670D\u52A1\u7A7A\u95F4", mode: "append" }];
  var Ve = /[\\^$.*+?()[\]{}|]/g, Je = RegExp(Ve.source);
  function Ye(e, t2, n2) {
    return e.replace(new RegExp((s2 = t2) && Je.test(s2) ? s2.replace(Ve, "\\$&") : s2, "g"), n2);
    var s2;
  }
  function Xe({ functionName: e, result: t2, logPvd: n2 }) {
    if (this.config.useDebugFunction && t2 && t2.requestId) {
      const s2 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e, requestId: t2.requestId });
      console.log(`[${n2}-request]${s2}[/${n2}-request]`);
    }
  }
  function Ge(e) {
    const t2 = e.callFunction, n2 = function(n3) {
      const s2 = n3.name;
      n3.data = He.call(e, { data: n3.data });
      const r2 = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider];
      return t2.call(this, n3).then((e2) => (Xe.call(this, { functionName: s2, result: e2, logPvd: r2 }), Promise.resolve(e2)), (e2) => (Xe.call(this, { functionName: s2, result: e2, logPvd: r2 }), e2 && e2.message && (e2.message = function({ message: e3 = "", extraInfo: t3 = {}, formatter: n4 = [] } = {}) {
        for (let s3 = 0; s3 < n4.length; s3++) {
          const { rule: r3, content: o2, mode: i2 } = n4[s3], a2 = e3.match(r3);
          if (!a2)
            continue;
          let c2 = o2;
          for (let e4 = 1; e4 < a2.length; e4++)
            c2 = Ye(c2, `{$${e4}}`, a2[e4]);
          for (const e4 in t3)
            c2 = Ye(c2, `{${e4}}`, t3[e4]);
          switch (i2) {
            case "replace":
              return c2;
            case "append":
            default:
              return e3 + c2;
          }
        }
        return e3;
      }({ message: `[${n3.name}]: ${e2.message}`, formatter: ze, extraInfo: { functionName: s2 } })), Promise.reject(e2)));
    };
    e.callFunction = function(t3) {
      let s2;
      return e.debugInfo && !e.debugInfo.forceRemote && d ? (e._originCallFunction || (e._originCallFunction = n2), s2 = We.call(this, t3)) : s2 = n2.call(this, t3), Object.defineProperty(s2, "result", { get: () => (console.warn("\u5F53\u524D\u8FD4\u56DE\u7ED3\u679C\u4E3APromise\u7C7B\u578B\uFF0C\u4E0D\u53EF\u76F4\u63A5\u8BBF\u95EE\u5176result\u5C5E\u6027\uFF0C\u8BE6\u60C5\u8BF7\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {}) }), s2;
    };
  }
  const Qe = Symbol("CLIENT_DB_INTERNAL");
  function Ze(e, t2) {
    return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = Qe, e.__v_raw = void 0, new Proxy(e, { get: (e2, n2, s2) => n2 in e2 || typeof n2 != "string" ? e2[n2] : t2.get(e2, n2, s2) });
  }
  function et(e) {
    switch (o(e = Ne(e))) {
      case "array":
        return e.map((e2) => et(e2));
      case "object":
        return e._internalType === Qe || Object.keys(e).forEach((t2) => {
          e[t2] = et(e[t2]);
        }), e;
      case "regexp":
        return { $regexp: { source: e.source, flags: e.flags } };
      case "date":
        return { $date: e.toISOString() };
      default:
        return e;
    }
  }
  function tt(e) {
    e.database = function(t2) {
      if (t2 && Object.keys(t2).length > 0)
        return e.init(t2).database();
      if (this._database)
        return this._database;
      const n2 = {};
      let s2 = {};
      function r2({ action: t3, command: r3, multiCommand: o3 }) {
        return S(v("database", "invoke")).then(() => e.callFunction({ name: "DCloud-clientDB", data: { action: t3, command: r3, multiCommand: o3 } })).then((e2) => {
          const { code: t4, message: r4, token: o4, tokenExpired: i3, systemInfo: c3 = [] } = e2.result;
          if (c3)
            for (let e3 = 0; e3 < c3.length; e3++) {
              const { level: t5, message: n3, detail: s3 } = c3[e3], r5 = console[t5] || console.log;
              let o5 = "[System Info]" + n3;
              s3 && (o5 = `${o5}
\u8BE6\u7EC6\u4FE1\u606F\uFF1A${s3}`), r5(o5);
            }
          if (t4) {
            const e3 = new a(r4, t4);
            return s2.error && s2.error.forEach((t5) => {
              t5(e3);
            }), Promise.reject(e3);
          }
          o4 && i3 && (!function({ token: e3, tokenExpired: t5 } = {}) {
            e3 && U.setStorageSync("uni_id_token", e3), t5 && U.setStorageSync("uni_id_token_expired", t5);
          }({ token: o4, tokenExpired: i3 }), n2.refreshToken && n2.refreshToken.forEach((e3) => {
            e3({ token: o4, tokenExpired: i3 });
          }), s2.refreshToken && s2.refreshToken.forEach((e3) => {
            e3({ token: o4, tokenExpired: i3 });
          }));
          const u3 = e2.result.affectedDocs;
          return typeof u3 == "number" && Object.defineProperty(e2.result, "affectedDocs", { get: () => (console.warn("affectedDocs\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528inserted/deleted/updated/data.length\u66FF\u4EE3"), u3) }), S(v("database", "success"), e2).then(() => S(v("database", "complete"), e2)).then(() => Promise.resolve(e2));
        }, (e2) => {
          const t4 = new a(e2.message, e2.code || "SYSTEM_ERROR");
          return s2.error && s2.error.forEach((e3) => {
            e3(t4);
          }), /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e2.message) && console.warn("clientDB\u672A\u521D\u59CB\u5316\uFF0C\u8BF7\u5728web\u63A7\u5236\u53F0\u4FDD\u5B58\u4E00\u6B21schema\u4EE5\u5F00\u542FclientDB"), S(v("database", "fail"), e2).then(() => S(v("database", "complete"), e2)).then(() => Promise.reject(e2));
        });
      }
      this.isDefault && (s2 = m("_globalUniCloudDatabaseCallback"));
      class o2 {
        constructor(e2, t3) {
          this.content = e2, this.prevStage = t3, this.udb = null;
        }
        toJSON() {
          let e2 = this;
          const t3 = [e2.content];
          for (; e2.prevStage; )
            e2 = e2.prevStage, t3.push(e2.content);
          return { $db: t3.reverse().map((e3) => ({ $method: e3.$method, $param: et(e3.$param) })) };
        }
        getAction() {
          const e2 = this.toJSON().$db.find((e3) => e3.$method === "action");
          return e2 && e2.$param && e2.$param[0];
        }
        getCommand() {
          return { $db: this.toJSON().$db.filter((e2) => e2.$method !== "action") };
        }
        get useAggregate() {
          let e2 = this, t3 = false;
          for (; e2.prevStage; ) {
            e2 = e2.prevStage;
            const n3 = e2.content.$method;
            if (n3 === "aggregate" || n3 === "pipeline") {
              t3 = true;
              break;
            }
          }
          return t3;
        }
        get count() {
          if (!this.useAggregate)
            return function() {
              return this._send("count", Array.from(arguments));
            };
          const e2 = this;
          return function() {
            return u2({ $method: "count", $param: et(Array.from(arguments)) }, e2);
          };
        }
        get() {
          return this._send("get", Array.from(arguments));
        }
        add() {
          return this._send("add", Array.from(arguments));
        }
        remove() {
          return this._send("remove", Array.from(arguments));
        }
        update() {
          return this._send("update", Array.from(arguments));
        }
        end() {
          return this._send("end", Array.from(arguments));
        }
        set() {
          throw new Error("clientDB\u7981\u6B62\u4F7F\u7528set\u65B9\u6CD5");
        }
        get multiSend() {
        }
        _send(e2, t3) {
          const n3 = this.getAction(), s3 = this.getCommand();
          return s3.$db.push({ $method: e2, $param: et(t3) }), r2({ action: n3, command: s3 });
        }
      }
      const i2 = ["db.Geo", "db.command", "command.aggregate"];
      function c2(e2, t3) {
        return i2.indexOf(`${e2}.${t3}`) > -1;
      }
      function u2(e2, t3) {
        return Ze(new o2(e2, t3), { get(e3, t4) {
          let n3 = "db";
          return e3 && e3.content && (n3 = e3.content.$method), c2(n3, t4) ? u2({ $method: t4 }, e3) : function() {
            return u2({ $method: t4, $param: et(Array.from(arguments)) }, e3);
          };
        } });
      }
      function l2({ path: e2, method: t3 }) {
        return class {
          constructor() {
            this.param = Array.from(arguments);
          }
          toJSON() {
            return { $newDb: [...e2.map((e3) => ({ $method: e3 })), { $method: t3, $param: this.param }] };
          }
        };
      }
      const d2 = { auth: { on: (e2, t3) => {
        n2[e2] = n2[e2] || [], n2[e2].indexOf(t3) > -1 || n2[e2].push(t3);
      }, off: (e2, t3) => {
        n2[e2] = n2[e2] || [];
        const s3 = n2[e2].indexOf(t3);
        s3 !== -1 && n2[e2].splice(s3, 1);
      } }, on: (e2, t3) => {
        s2[e2] = s2[e2] || [], s2[e2].indexOf(t3) > -1 || s2[e2].push(t3);
      }, off: (e2, t3) => {
        s2[e2] = s2[e2] || [];
        const n3 = s2[e2].indexOf(t3);
        n3 !== -1 && s2[e2].splice(n3, 1);
      }, env: Ze({}, { get: (e2, t3) => ({ $env: t3 }) }), Geo: Ze({}, { get: (e2, t3) => l2({ path: ["Geo"], method: t3 }) }), getCloudEnv: function(e2) {
        if (typeof e2 != "string" || !e2.trim())
          throw new Error("getCloudEnv\u53C2\u6570\u9519\u8BEF");
        return { $env: e2.replace("$cloudEnv_", "") };
      }, multiSend() {
        const e2 = Array.from(arguments);
        return r2({ multiCommand: e2.map((e3) => {
          const t3 = e3.getAction(), n3 = e3.getCommand();
          if (n3.$db[n3.$db.length - 1].$method !== "getTemp")
            throw new Error("multiSend\u53EA\u652F\u6301\u5B50\u547D\u4EE4\u5185\u4F7F\u7528getTemp");
          return { action: t3, command: n3 };
        }) }).then((t3) => {
          for (let n3 = 0; n3 < e2.length; n3++) {
            const s3 = e2[n3];
            s3.udb && typeof s3.udb.setResult == "function" && s3.udb.setResult(t3.result.dataList[n3]);
          }
          return Promise.resolve(t3);
        }, (t3) => {
          for (let n3 = 0; n3 < e2.length; n3++) {
            const s3 = e2[n3];
            s3.udb && typeof s3.udb.setResult == "function" && s3.udb.setResult(t3);
          }
          return Promise.reject(t3);
        });
      }, get serverDate() {
        return l2({ path: [], method: "serverDate" });
      }, get RegExp() {
        return l2({ path: [], method: "RegExp" });
      } }, f = Ze(d2, { get: (e2, t3) => c2("db", t3) ? u2({ $method: t3 }) : function() {
        return u2({ $method: t3, $param: et(Array.from(arguments)) });
      } });
      return this._database = f, f;
    };
  }
  let nt;
  const st = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", rt = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
  function ot() {
    const e = Me().token || "", t2 = e.split(".");
    if (!e || t2.length !== 3)
      return { uid: null, role: [], permission: [], tokenExpired: 0 };
    let n2;
    try {
      n2 = JSON.parse((s2 = t2[1], decodeURIComponent(nt(s2).split("").map(function(e2) {
        return "%" + ("00" + e2.charCodeAt(0).toString(16)).slice(-2);
      }).join(""))));
    } catch (e2) {
      throw new Error("\u83B7\u53D6\u5F53\u524D\u7528\u6237\u4FE1\u606F\u51FA\u9519\uFF0C\u8BE6\u7EC6\u9519\u8BEF\u4FE1\u606F\u4E3A\uFF1A" + e2.message);
    }
    var s2;
    return n2.tokenExpired = 1e3 * n2.exp, delete n2.exp, delete n2.iat, n2;
  }
  nt = typeof atob != "function" ? function(e) {
    if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !rt.test(e))
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    var t2;
    e += "==".slice(2 - (3 & e.length));
    for (var n2, s2, r2 = "", o2 = 0; o2 < e.length; )
      t2 = st.indexOf(e.charAt(o2++)) << 18 | st.indexOf(e.charAt(o2++)) << 12 | (n2 = st.indexOf(e.charAt(o2++))) << 6 | (s2 = st.indexOf(e.charAt(o2++))), r2 += n2 === 64 ? String.fromCharCode(t2 >> 16 & 255) : s2 === 64 ? String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255) : String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255, 255 & t2);
    return r2;
  } : atob;
  var it = t$1(n(function(e, t2) {
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = "chooseAndUploadFile:ok", s2 = "chooseAndUploadFile:fail";
    function r2(e2, t3) {
      return e2.tempFiles.forEach((e3, n3) => {
        e3.name || (e3.name = e3.path.substring(e3.path.lastIndexOf("/") + 1)), t3 && (e3.fileType = t3), e3.cloudPath = Date.now() + "_" + n3 + e3.name.substring(e3.name.lastIndexOf("."));
      }), e2.tempFilePaths || (e2.tempFilePaths = e2.tempFiles.map((e3) => e3.path)), e2;
    }
    function o2(e2, t3, { onChooseFile: s3, onUploadProgress: r3 }) {
      return t3.then((e3) => {
        if (s3) {
          const t4 = s3(e3);
          if (t4 !== void 0)
            return Promise.resolve(t4).then((t5) => t5 === void 0 ? e3 : t5);
        }
        return e3;
      }).then((t4) => t4 === false ? { errMsg: n2, tempFilePaths: [], tempFiles: [] } : function(e3, t5, s4 = 5, r4) {
        (t5 = Object.assign({}, t5)).errMsg = n2;
        const o3 = t5.tempFiles, i2 = o3.length;
        let a2 = 0;
        return new Promise((n3) => {
          for (; a2 < s4; )
            c2();
          function c2() {
            const s5 = a2++;
            if (s5 >= i2)
              return void (!o3.find((e4) => !e4.url && !e4.errMsg) && n3(t5));
            const u2 = o3[s5];
            e3.uploadFile({ filePath: u2.path, cloudPath: u2.cloudPath, fileType: u2.fileType, onUploadProgress(e4) {
              e4.index = s5, e4.tempFile = u2, e4.tempFilePath = u2.path, r4 && r4(e4);
            } }).then((e4) => {
              u2.url = e4.fileID, s5 < i2 && c2();
            }).catch((e4) => {
              u2.errMsg = e4.errMsg || e4.message, s5 < i2 && c2();
            });
          }
        });
      }(e2, t4, 5, r3));
    }
    t2.initChooseAndUploadFile = function(e2) {
      return function(t3 = { type: "all" }) {
        return t3.type === "image" ? o2(e2, function(e3) {
          const { count: t4, sizeType: n3, sourceType: o3 = ["album", "camera"], extension: i2 } = e3;
          return new Promise((e4, a2) => {
            uni.chooseImage({ count: t4, sizeType: n3, sourceType: o3, extension: i2, success(t5) {
              e4(r2(t5, "image"));
            }, fail(e5) {
              a2({ errMsg: e5.errMsg.replace("chooseImage:fail", s2) });
            } });
          });
        }(t3), t3) : t3.type === "video" ? o2(e2, function(e3) {
          const { camera: t4, compressed: n3, maxDuration: o3, sourceType: i2 = ["album", "camera"], extension: a2 } = e3;
          return new Promise((e4, c2) => {
            uni.chooseVideo({ camera: t4, compressed: n3, maxDuration: o3, sourceType: i2, extension: a2, success(t5) {
              const { tempFilePath: n4, duration: s3, size: o4, height: i3, width: a3 } = t5;
              e4(r2({ errMsg: "chooseVideo:ok", tempFilePaths: [n4], tempFiles: [{ name: t5.tempFile && t5.tempFile.name || "", path: n4, size: o4, type: t5.tempFile && t5.tempFile.type || "", width: a3, height: i3, duration: s3, fileType: "video", cloudPath: "" }] }, "video"));
            }, fail(e5) {
              c2({ errMsg: e5.errMsg.replace("chooseVideo:fail", s2) });
            } });
          });
        }(t3), t3) : o2(e2, function(e3) {
          const { count: t4, extension: n3 } = e3;
          return new Promise((e4, o3) => {
            let i2 = uni.chooseFile;
            if (typeof wx != "undefined" && typeof wx.chooseMessageFile == "function" && (i2 = wx.chooseMessageFile), typeof i2 != "function")
              return o3({ errMsg: s2 + " \u8BF7\u6307\u5B9A type \u7C7B\u578B\uFF0C\u8BE5\u5E73\u53F0\u4EC5\u652F\u6301\u9009\u62E9 image \u6216 video\u3002" });
            i2({ type: "all", count: t4, extension: n3, success(t5) {
              e4(r2(t5));
            }, fail(e5) {
              o3({ errMsg: e5.errMsg.replace("chooseFile:fail", s2) });
            } });
          });
        }(t3), t3);
      };
    };
  }));
  const at = "manual";
  function ct(e) {
    return { props: { localdata: { type: Array, default: () => [] }, options: { type: [Object, Array], default: () => ({}) }, spaceInfo: { type: Object, default: () => ({}) }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: false }, gettree: { type: [Boolean, String], default: false }, gettreepath: { type: [Boolean, String], default: false }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: false }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: false } }, data: () => ({ mixinDatacomLoading: false, mixinDatacomHasMore: false, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {} }), created() {
      this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(() => {
        var e2 = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach((t2) => {
          e2.push(this[t2]);
        }), e2;
      }, (e2, t2) => {
        if (this.loadtime === at)
          return;
        let n2 = false;
        const s2 = [];
        for (let r2 = 2; r2 < e2.length; r2++)
          e2[r2] !== t2[r2] && (s2.push(e2[r2]), n2 = true);
        e2[0] !== t2[0] && (this.mixinDatacomPage.current = this.pageCurrent), this.mixinDatacomPage.size = this.pageSize, this.onMixinDatacomPropsChange(n2, s2);
      });
    }, methods: { onMixinDatacomPropsChange(e2, t2) {
    }, mixinDatacomEasyGet({ getone: e2 = false, success: t2, fail: n2 } = {}) {
      this.mixinDatacomLoading || (this.mixinDatacomLoading = true, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then((n3) => {
        this.mixinDatacomLoading = false;
        const { data: s2, count: r2 } = n3.result;
        this.getcount && (this.mixinDatacomPage.count = r2), this.mixinDatacomHasMore = s2.length < this.pageSize;
        const o2 = e2 ? s2.length ? s2[0] : void 0 : s2;
        this.mixinDatacomResData = o2, t2 && t2(o2);
      }).catch((e3) => {
        this.mixinDatacomLoading = false, this.mixinDatacomErrorMessage = e3, n2 && n2(e3);
      }));
    }, mixinDatacomGet(t2 = {}) {
      let n2 = e.database(this.spaceInfo);
      const s2 = t2.action || this.action;
      s2 && (n2 = n2.action(s2));
      const r2 = t2.collection || this.collection;
      n2 = Array.isArray(r2) ? n2.collection(...r2) : n2.collection(r2);
      const o2 = t2.where || this.where;
      o2 && Object.keys(o2).length && (n2 = n2.where(o2));
      const i2 = t2.field || this.field;
      i2 && (n2 = n2.field(i2));
      const a2 = t2.foreignKey || this.foreignKey;
      a2 && (n2 = n2.foreignKey(a2));
      const c2 = t2.groupby || this.groupby;
      c2 && (n2 = n2.groupBy(c2));
      const u2 = t2.groupField || this.groupField;
      u2 && (n2 = n2.groupField(u2));
      (t2.distinct !== void 0 ? t2.distinct : this.distinct) === true && (n2 = n2.distinct());
      const h2 = t2.orderby || this.orderby;
      h2 && (n2 = n2.orderBy(h2));
      const l2 = t2.pageCurrent !== void 0 ? t2.pageCurrent : this.mixinDatacomPage.current, d2 = t2.pageSize !== void 0 ? t2.pageSize : this.mixinDatacomPage.size, f = t2.getcount !== void 0 ? t2.getcount : this.getcount, p2 = t2.gettree !== void 0 ? t2.gettree : this.gettree, g2 = t2.gettreepath !== void 0 ? t2.gettreepath : this.gettreepath, m2 = { getCount: f }, y2 = { limitLevel: t2.limitlevel !== void 0 ? t2.limitlevel : this.limitlevel, startWith: t2.startwith !== void 0 ? t2.startwith : this.startwith };
      return p2 && (m2.getTree = y2), g2 && (m2.getTreePath = y2), n2 = n2.skip(d2 * (l2 - 1)).limit(d2).get(m2), n2;
    } } };
  }
  async function ut(e, t2) {
    const n2 = `http://${e}:${t2}/system/ping`;
    try {
      const e2 = await (s2 = { url: n2, timeout: 500 }, new Promise((e3, t3) => {
        U.request(__spreadProps(__spreadValues({}, s2), { success(t4) {
          e3(t4);
        }, fail(e4) {
          t3(e4);
        } }));
      }));
      return !(!e2.data || e2.data.code !== 0);
    } catch (e2) {
      return false;
    }
    var s2;
  }
  let ht = new class {
    init(e) {
      let t2 = {};
      const n2 = e.debugFunction !== false && u && h === "app-plus";
      switch (e.provider) {
        case "tencent":
          t2 = Fe.init(Object.assign(e, { useDebugFunction: n2 }));
          break;
        case "aliyun":
          t2 = x.init(Object.assign(e, { useDebugFunction: n2 }));
          break;
        case "private":
          t2 = Ke.init(Object.assign(e, { useDebugFunction: n2 }));
          break;
        default:
          throw new Error("\u672A\u63D0\u4F9B\u6B63\u786E\u7684provider\u53C2\u6570");
      }
      const s2 = l;
      s2 && !s2.code && (t2.debugInfo = s2);
      let r2 = Promise.resolve();
      var o2;
      o2 = 1, r2 = new Promise((e2, t3) => {
        setTimeout(() => {
          e2();
        }, o2);
      }), t2.isReady = false, t2.isDefault = false;
      const i2 = t2.auth();
      t2.initUniCloud = r2.then(() => i2.getLoginState()).then((e2) => e2 ? Promise.resolve() : i2.signInAnonymously()).then(() => {
        if (t2.debugInfo) {
          const { address: e2, servePort: n3 } = t2.debugInfo;
          return async function(e3, t3) {
            let n4;
            for (let s3 = 0; s3 < e3.length; s3++) {
              const r3 = e3[s3];
              if (await ut(r3, t3)) {
                n4 = r3;
                break;
              }
            }
            return { address: n4, port: t3 };
          }(e2, n3);
        }
      }).then(({ address: e2, port: n3 } = {}) => {
        if (e2)
          t2.localAddress = e2, t2.localPort = n3;
        else if (t2.debugInfo) {
          const e3 = console["warn"];
          let n4 = "";
          t2.debugInfo.initialLaunchType === "remote" ? (t2.debugInfo.forceRemote = true, n4 = "\u5F53\u524D\u5BA2\u6237\u7AEF\u548CHBuilderX\u4E0D\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\uFF08\u6216\u5176\u4ED6\u7F51\u7EDC\u539F\u56E0\u65E0\u6CD5\u8FDE\u63A5HBuilderX\uFF09\uFF0CuniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u4E0D\u5BF9\u5F53\u524D\u5BA2\u6237\u7AEF\u751F\u6548\u3002\n- \u5982\u679C\u4E0D\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u76F4\u63A5\u5FFD\u7565\u6B64\u4FE1\u606F\u3002\n- \u5982\u9700\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u5C06\u5BA2\u6237\u7AEF\u4E0E\u4E3B\u673A\u8FDE\u63A5\u5230\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u5E76\u91CD\u65B0\u8FD0\u884C\u5230\u5BA2\u6237\u7AEF\u3002\n- \u5982\u679C\u5728HBuilderX\u5F00\u542F\u7684\u72B6\u6001\u4E0B\u5207\u6362\u8FC7\u7F51\u7EDC\u73AF\u5883\uFF0C\u8BF7\u91CD\u542FHBuilderX\u540E\u518D\u8BD5\n- \u68C0\u67E5\u7CFB\u7EDF\u9632\u706B\u5899\u662F\u5426\u62E6\u622A\u4E86HBuilderX\u81EA\u5E26\u7684nodejs") : n4 = "\u65E0\u6CD5\u8FDE\u63A5uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u68C0\u67E5\u5F53\u524D\u5BA2\u6237\u7AEF\u662F\u5426\u4E0E\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u3002\n- \u5982\u9700\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u5C06\u5BA2\u6237\u7AEF\u4E0E\u4E3B\u673A\u8FDE\u63A5\u5230\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u5E76\u91CD\u65B0\u8FD0\u884C\u5230\u5BA2\u6237\u7AEF\u3002\n- \u5982\u679C\u5728HBuilderX\u5F00\u542F\u7684\u72B6\u6001\u4E0B\u5207\u6362\u8FC7\u7F51\u7EDC\u73AF\u5883\uFF0C\u8BF7\u91CD\u542FHBuilderX\u540E\u518D\u8BD5\n- \u68C0\u67E5\u7CFB\u7EDF\u9632\u706B\u5899\u662F\u5426\u62E6\u622A\u4E86HBuilderX\u81EA\u5E26\u7684nodejs", e3(n4);
        }
      }).then(() => {
        t2.isReady = true;
      }), Ge(t2), function(e2) {
        const t3 = e2.uploadFile;
        e2.uploadFile = function(e3) {
          let n3;
          return n3 = this.isReady ? Promise.resolve() : this.initUniCloud, n3.then(() => t3.call(this, e3));
        };
      }(t2), tt(t2), function(e2) {
        e2.getCurrentUserInfo = ot, e2.chooseAndUploadFile = it.initChooseAndUploadFile(e2), Object.assign(e2, { get mixinDatacom() {
          return ct(e2);
        } });
      }(t2);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach((e2) => {
        t2[e2] && (t2[e2] = T(t2[e2], e2));
      }), t2.init = this.init, t2;
    }
  }();
  (() => {
    {
      const e = d;
      let t2 = {};
      if (e.length === 1)
        t2 = e[0], ht = ht.init(t2), ht.isDefault = true;
      else {
        const t3 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo"];
        let n2;
        n2 = e && e.length > 0 ? "\u5E94\u7528\u6709\u591A\u4E2A\u670D\u52A1\u7A7A\u95F4\uFF0C\u8BF7\u901A\u8FC7uniCloud.init\u65B9\u6CD5\u6307\u5B9A\u8981\u4F7F\u7528\u7684\u670D\u52A1\u7A7A\u95F4" : "\u5E94\u7528\u672A\u5173\u8054\u670D\u52A1\u7A7A\u95F4\uFF0C\u8BF7\u5728uniCloud\u76EE\u5F55\u53F3\u952E\u5173\u8054\u670D\u52A1\u7A7A\u95F4", t3.forEach((e2) => {
          ht[e2] = function() {
            return console.error(n2), Promise.reject(new P({ code: "SYS_ERR", message: n2 }));
          };
        });
      }
      Object.assign(ht, { get mixinDatacom() {
        return ct(ht);
      } }), ht.addInterceptor = w, ht.removeInterceptor = k;
    }
  })();
  var lt = ht;
  var en = {
    "uni-load-more.contentdown": "Pull up to show more",
    "uni-load-more.contentrefresh": "loading...",
    "uni-load-more.contentnomore": "No more data"
  };
  var zhHans = {
    "uni-load-more.contentdown": "\u4E0A\u62C9\u663E\u793A\u66F4\u591A",
    "uni-load-more.contentrefresh": "\u6B63\u5728\u52A0\u8F7D...",
    "uni-load-more.contentnomore": "\u6CA1\u6709\u66F4\u591A\u6570\u636E\u4E86"
  };
  var zhHant = {
    "uni-load-more.contentdown": "\u4E0A\u62C9\u986F\u793A\u66F4\u591A",
    "uni-load-more.contentrefresh": "\u6B63\u5728\u52A0\u8F09...",
    "uni-load-more.contentnomore": "\u6C92\u6709\u66F4\u591A\u6578\u64DA\u4E86"
  };
  var messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  let platform;
  setTimeout(() => {
    platform = uni.getSystemInfoSync().platform;
  }, 16);
  const { t } = initVueI18n(messages);
  const _sfc_main$b = {
    name: "UniLoadMore",
    emits: ["clickLoadMore"],
    props: {
      status: {
        type: String,
        default: "more"
      },
      showIcon: {
        type: Boolean,
        default: true
      },
      iconType: {
        type: String,
        default: "auto"
      },
      iconSize: {
        type: Number,
        default: 24
      },
      color: {
        type: String,
        default: "#777777"
      },
      contentText: {
        type: Object,
        default() {
          return {
            contentdown: "",
            contentrefresh: "",
            contentnomore: ""
          };
        }
      }
    },
    data() {
      return {
        webviewHide: false,
        platform
      };
    },
    computed: {
      iconSnowWidth() {
        return (Math.floor(this.iconSize / 24) || 1) * 2;
      },
      contentdownText() {
        return this.contentText.contentdown || t("uni-load-more.contentdown");
      },
      contentrefreshText() {
        return this.contentText.contentrefresh || t("uni-load-more.contentrefresh");
      },
      contentnomoreText() {
        return this.contentText.contentnomore || t("uni-load-more.contentnomore");
      }
    },
    mounted() {
      var pages = getCurrentPages();
      var page = pages[pages.length - 1];
      var currentWebview = page.$getAppWebview();
      currentWebview.addEventListener("hide", () => {
        this.webviewHide = true;
      });
      currentWebview.addEventListener("show", () => {
        this.webviewHide = false;
      });
    },
    methods: {
      onClick() {
        this.$emit("clickLoadMore", {
          detail: {
            status: this.status
          }
        });
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "uni-load-more",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      !$data.webviewHide && ($props.iconType === "circle" || $props.iconType === "auto" && $data.platform === "android") && $props.status === "loading" && $props.showIcon ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        style: vue.normalizeStyle({ width: $props.iconSize + "px", height: $props.iconSize + "px" }),
        class: "uni-load-more__img uni-load-more__img--android-MP"
      }, [
        vue.createElementVNode("view", {
          style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
        }, null, 4),
        vue.createElementVNode("view", {
          style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
        }, null, 4),
        vue.createElementVNode("view", {
          style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
        }, null, 4)
      ], 4)) : !$data.webviewHide && $props.status === "loading" && $props.showIcon ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        style: vue.normalizeStyle({ width: $props.iconSize + "px", height: $props.iconSize + "px" }),
        class: "uni-load-more__img uni-load-more__img--ios-H5"
      }, [
        vue.createElementVNode("image", {
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzlBMzU3OTlEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzlBMzU3OUFEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOUEzNTc5N0Q5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOUEzNTc5OEQ5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt+ALSwAAA6CSURBVHja1FsLkFZVHb98LM+F5bHL8khA1iSeiyQBCRM+YGqKUnnJTDLGI0BGZlKDIU2MMglUiDApEZvSsZnQtBRJtKwQNKQMFYeRDR10WOLd8ljYXdh+v8v5fR3Od+797t1dnOnO/Ofce77z+J//+b/P+ZqtXbs2sJ9MJhNUV1cHJ06cCJo3bx7EPc2aNcvpy7pWrVoF+/fvDyoqKoI2bdoE9fX1F7TjN8a+EXBn/fkfvw942Tf+wYMHg9mzZwfjxo0LDhw4EPa1x2MbFw/fOGfPng1qa2tzcCkILsLDydq2bRsunpOTMM7TD/W/tZDZhPdeKD+yGxHhdu3aBV27dg3OnDlzMVANMheLAO3btw8KCwuDmpoaX5OxbgUIMEq7K8IcPnw4KCsrC/r37x8cP378/4cAXAB3vqSkJMuiDhTkw+XcuXNhOWbMmKBly5YhUT8xArhyFvP0BfwRsAuwxJZJsm/nzp2DTp06he/OU+cZ64K6o0ePBkOHDg2GDx8e6gEbJ5Q/NHNuAJQ1hgBeHUDlR7nVTkY8rQAvAi4z34vR/mPs1FoRsaCgIJThI0eOBC1atEiFGGV+5MiRoS45efJkqFjJFXV1dQuA012m2WcwTw98fy6CqBdsaiIO4CScrGPHjvk4odhavPquRtFWXEC25VgkREKOCh/qDSq+vn37htzD/mZTOmOc5U7zKzBPEedygWshcDyWvs30igAbU+6oyMgJBCFhwQE0fccxN60Ay9iebbjoDh06hMowjQxT4fXq1SskArmHZpkArvixp/kWzHdMeArExSJEaiXIjjRjRJ4DaAGWpibLzXN3Fm1vA5teBgh3j1Rv3bp1YgKwPdmf2p9zcyNYYgPKMfY0T5f5nNYdw158nJ8QawW4CLKwiOBSEgO/hok2eBydR+3dYH+PLxA5J8Vv0KBBwenTp0P2JWAx6+yFEBfs8lMY+y0SWMBNI9E4ThKi58VKTg3FQZS1RQF1cz27eC0QHMu+3E0SkUowjhVt5VdaWhp07949ZHv2Qd1EjDXM2cla1M0nl3GxAs3J9yREzyTdFVKVFOaE9qRA8GM0WebRuo9JGZKA7Mv2SeS/Z8+eoQ9BArMfFrLGo6jvxbhHbJZnKX2Rzz1O7QhJJ9Cs2ZMaWIyq/zhdeqPNfIoHd58clIQD+JSXl4dKlyIAuBdVXZwFVWKspSSoxE++h8x4k3uCnEhE4I5KwRiFWGOU0QWKiCYLbdoRMRKAu2kQ9vkfLU6dOhX06NEjlH+yMRZSinnuyWnYosVcji8CEA/6Cg2JF+IIUBqnGKUTCNwtwBN4f89RiK1R96DEgO2o0NDmtEdvVFdVVYV+P3UAPUEs6GFwV3PHmXkD4vh74iDFJysVI/MlaQhwKeBNTLYX5VuA8T4/gZxA4MRGFxDB6R7OmYPfyykGRJbyie+XnGYnQIC/coH9+vULiYrxrkL9ZA9+0ykaHIfEpM7ge8TiJ2CsHYwyMfafAF1yCGBHYIbCVDjDjKt7BeB51D+LgQa6OkG7IDYEEtvQ7lnXLKLtLdLuJBpE4gPUXcW2+PkZwOex+4cGDhwYDBkyRL7/HFcEwUGPo/8uWRUpYnfxGHco8HkewLHLyYmAawAPuIFZxhOpDfJQ8gbUv41yORAptMWBNr6oqMhWird5+u+iHmBb2nhjDV7HWBNQTgK8y11l5NetWzc5ULscAtSj7nbNI0skhWeUZCc0W4nyH/jO4Vz0u1IeYhbk4AiwM6tjxIWByHsoZ9qcIBPJd/y+DwPfBESOmCa/QF3WiZHucLlEDpNxcNhmheEOPgdQNx6/VZFQzFZ5TN08AHXQt2Ii3EdyFuUsPtTcGPhW5iMiCNELvz+Gdn9huG4HUJaW/w3g0wxV0XaG7arG2WeKiUWYM4Y7GO5ezshTARbbWGw/DvXkpp/ivVvE0JVoMxN4rpGzJMhE5Pl+xlATsDIqikP9F9D2z3h9nOksEUFhK+qO4rcPkoalMQ/HqJLIyb3F3JdjrCcw1yZ8joyJLR5gCo54etlag7qIoeNh1N1BRYj3DTFJ0elotxPlVzkGuYAmL0VSJVGAJA41c4Z6A3BzTLfn0HYwYKEI6CUAMzZEWvLsIcQOo1AmmyyM72nHJCfYsogflGV6jEk9vyQZXSuq6w4c16NsGcGZbwOPr+H1RkOk2LEzjNepxQkihHSCQ4ynAYNRx2zMKV92CQMWqj8J0BRE8EShxRFN6YrfCRhC0x3r/Zm4IbQCcmJoV0kMamllccR6FjHqUC5F2R/wS2dcymOlfAKOS4KmzQb5cpNC2MC7JhVn5wjXoJ44rYhLh8n0eXOCorJxa7POjbSlCGVczr34/RsAmrcvo9s+wGp3tzVhntxiXiJ4nvEYb4FJkf0O8HocAePmLvCxnL0AORraVekJk6TYjDabRVXfRE2lCN1h6ZQRN1+InUbsCpKwoBZHh0dODN9JBCUffItXxEavTQkUtnfTVAplCWL3JISz29h4NjotnuSsQKJCk8dF+kJR6RARjrqFVmfPnj3ZbK8cIJ0msd6jgHPGtfVTQ8VLmlvh4mct9sobRmPic0DyDQQnx/NlfYUgyz59+oScsH379pAwXABD32nTpoUHIToESeI5mnbE/UqDdyLcafEBf2MCqgC7NwxIbMREJQ0g4D4sfJwnD+AmRrII05cfMWJE+L1169bQr+fip06dGp4oJ83lmYd5wj/EmMa4TaHivo4EeCguYZBnkB5g2aWA69OIEnUHOaGysjIYMGBAMGnSpODYsWPZwCpFmm4lNq+4gSLQA7jcX8DwtjEyRC8wjabnXEx9kfWnTJkSJkAo90xpJVV+FmcVNeYAF5zWngS4C4O91MBxmAv8blLEpbjI5sz9MTdAhcgkCT1RO8mZkAjfiYpTEvStAS53Uw1vAiUGgZ3GpuQEYvoiBqlIan7kSDHnTwJQFNiPu0+5VxCVYhcZIjNrdXUDdp+Eq5AZ3Gkg8QAyVZRZIk4Tl4QAbF9cXJxNYZMAtAokgs4BrNxEpCtteXg7DDTMDKYNSuQdKsnJBek7HxewvxaosWxLYXtw+cJp18217wql4aKCfBNoEu0O5VU+PhctJ0YeXD4C6JQpyrlpSLTojpGGGN5YwNziChdIZLk4lvLcFJ9jMX3QdiImY9bmGQU+TRUL5CHITTRlgF8D9ouD1MfmLoEPl5xokIumZ2cfgMpHt47IW9N64Hsh7wQYYjyIugWuF5fCqYncXRd5vPMWyizzvhi/32+nvG0dZc9vR6fZOu0md5e+uC408FvKSIOZwXlGvxPv95izA2Vtvg1xKFWARI+vMX66HUhpQQb643uW1bSjuTWyw2SBvDrBvjFic1eGGlz5esq3ko9uSIlBRqPuFcCv8F4WIcN12nVaBd0SaYwI6PDDImR11JkqgHcPmQssjxIn6bUshygDFJUTxPMpHk+jfjPgupgdnYV2R/g7xSjtpah8RJBewhwf0gGK6XI92u4wXFEU40afJ4DN4h5LcAd+40HI3JgJecuT0c062W0i2hQJUTcxan3/CMW1PF2K6bbA+Daz4xRs1D3Br1Cm0OihKCqizW78/nXAF/G5TXrEcVzaNMH6CyMswqsAHqDyDLEyou8lwOXnKF8DjI6KjV3KzMBiXkDH8ij/H214J5A596ekrZ3F0zXlWeL7+P5eUrNo3/QwC15uxthuzidy7DzKRwEDaAViiDgKbTbz7CJnzo0bN7pIfIiid8SuPwn25o3QCmpnyjlZkyxPP8EomCJzrGb7GJMx7tNsq4MT2xMUYaiErZOluTzKsnz3gwCeCZyVRZJfYplNEokEjwrPtxlxjeYAk+F1F74VAzPxQRNYYdtpOUvWs8J1sGhBJMNsb7igN8plJs1eSmLIhLKE4rvaCX27gOhLpLOsIzJ7qn/i+wZzcvSOZ23/du8TZjwV8zHIXoP4R3ifBxiFz1dcVpa3aPntPE+c6TmIWE9EtcMmAcPdWAhYhAXxcLOQi9L1WhD1Sc8p1d2oL7XGiRKp8F4A2i8K/nfI+y/gsTDJ/YC/8+AD5Uh04KHiGl+cIFPnBDDrPMjwRGkLXyxO4VGbfQWnDH2v0bVWE3C9QOXlepbgjEfIJQI6XDG3z5ahD9cw2pS78ipB85wyScNTvsVzlzzhL8/jRrnmVjfFJK/m3m4nj9vbgQTguT8XZTjsm672R5uJKEaQmBI/c58gyus8ZDagLpEVSJBIyHp4jn++xqPV71OgQgJYEWOtZ/haxRtKmWOBu8xdBLftWltsY84zE6WIEy/eIOWL+BaayMx+KHtL7EAkqdNDLiEXmEMUHniedtJqg9HmZtfvt26vNi0BdG3Ft3g8ZOf7PAu59TxtzivLNIekyi+wD1i8CuUiD9FXAa8C+/xS3JPmZnomyc7H+fb4/Se0bk41Fel621r4cgVxbq91V4jVqwB7HTe2M7jgB+QWHavZkDRPmZcASoZEmBx6i75bGjPcMdL4/VKGFAGWZkGzPG0XAbdL9A81G5LOmUnC9hHKJeO7dcUMjblSl12867ElFTtaGl20xvvLGPdVz/8TVuU7y0x1PG7vtNg24oz9Uo/Z412++VFWI7Fcog9tu9Lm6gvRmIPv9x1xmQAu6RDkXtbOtlGEmpgD5Nvnyc0dcv0EE6cfdi1HmhMf9wDF3k3gtRvEedhxjpgfqPb9PU9iEJHnyOUA7bQUXh6kq/D7l2iTjWv7XOD530BDr8jIrus+srXjt4MzumJMHuTsBa63YKE1+RR5lBjEikCCnWKWiHdzOgKO+nRIBAF88za/IFmJ3eMZov4CYxGBabcpGL8EYx+SeMXJeRwHNsV/h+vdxeuhEpN3ZyNY78Gm2fknJxVGhyjixPiQvVkNzT1elD9Py/aTAL64Hb9vcYmC9zfdXdT/C1LeGbg4rnBaAihDFJH12W5ulfNCNe/xTsP3bp8ikzJs5BF+5PNfAQYAPaseTdsEcaYAAAAASUVORK5CYII=",
          mode: "widthFix"
        })
      ], 4)) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("text", {
        class: "uni-load-more__text",
        style: vue.normalizeStyle({ color: $props.color })
      }, vue.toDisplayString($props.status === "more" ? $options.contentdownText : $props.status === "loading" ? $options.contentrefreshText : $options.contentnomoreText), 5)
    ]);
  }
  var __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$7], ["__scopeId", "data-v-90d4256a"]]);
  const _sfc_main$a = {
    name: "uniDataChecklist",
    mixins: [lt.mixinDatacom || {}],
    emits: ["input", "update:modelValue", "change"],
    props: {
      mode: {
        type: String,
        default: "default"
      },
      multiple: {
        type: Boolean,
        default: false
      },
      value: {
        type: [Array, String, Number],
        default() {
          return "";
        }
      },
      modelValue: {
        type: [Array, String, Number],
        default() {
          return "";
        }
      },
      localdata: {
        type: Array,
        default() {
          return [];
        }
      },
      min: {
        type: [Number, String],
        default: ""
      },
      max: {
        type: [Number, String],
        default: ""
      },
      wrap: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
        default: "left"
      },
      selectedColor: {
        type: String,
        default: ""
      },
      selectedTextColor: {
        type: String,
        default: ""
      },
      emptyText: {
        type: String,
        default: "\u6682\u65E0\u6570\u636E"
      },
      disabled: {
        type: Boolean,
        default: false
      },
      map: {
        type: Object,
        default() {
          return {
            text: "text",
            value: "value"
          };
        }
      }
    },
    watch: {
      localdata: {
        handler(newVal) {
          this.range = newVal;
          this.dataList = this.getDataList(this.getSelectedValue(newVal));
        },
        deep: true
      },
      mixinDatacomResData(newVal) {
        this.range = newVal;
        this.dataList = this.getDataList(this.getSelectedValue(newVal));
      },
      value(newVal) {
        this.dataList = this.getDataList(newVal);
        if (!this.is_reset) {
          this.is_reset = false;
          this.formItem && this.formItem.setValue(newVal);
        }
      },
      modelValue(newVal) {
        this.dataList = this.getDataList(newVal);
        if (!this.is_reset) {
          this.is_reset = false;
          this.formItem && this.formItem.setValue(newVal);
        }
      }
    },
    data() {
      return {
        dataList: [],
        range: [],
        contentText: {
          contentdown: "\u67E5\u770B\u66F4\u591A",
          contentrefresh: "\u52A0\u8F7D\u4E2D",
          contentnomore: "\u6CA1\u6709\u66F4\u591A"
        },
        isLocal: true,
        styles: {
          selectedColor: "#007aff",
          selectedTextColor: "#333"
        },
        isTop: 0
      };
    },
    computed: {
      dataValue() {
        if (this.value === "")
          return this.modelValue;
        if (this.modelValue === "")
          return this.value;
        return this.value;
      }
    },
    created() {
      this.form = this.getForm("uniForms");
      this.formItem = this.getForm("uniFormsItem");
      if (this.formItem) {
        this.isTop = 6;
        if (this.formItem.name) {
          if (!this.is_reset) {
            this.is_reset = false;
            this.formItem.setValue(this.dataValue);
          }
          this.rename = this.formItem.name;
          this.form.inputChildrens.push(this);
        }
      }
      if (this.localdata && this.localdata.length !== 0) {
        this.isLocal = true;
        this.range = this.localdata;
        this.dataList = this.getDataList(this.getSelectedValue(this.range));
      } else {
        if (this.collection) {
          this.isLocal = false;
          this.loadData();
        }
      }
    },
    methods: {
      loadData() {
        this.mixinDatacomGet().then((res) => {
          this.mixinDatacomResData = res.result.data;
          if (this.mixinDatacomResData.length === 0) {
            this.isLocal = false;
            this.mixinDatacomErrorMessage = this.emptyText;
          } else {
            this.isLocal = true;
          }
        }).catch((err) => {
          this.mixinDatacomErrorMessage = err.message;
        });
      },
      getForm(name = "uniForms") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      },
      chagne(e) {
        const values = e.detail.value;
        let detail = {
          value: [],
          data: []
        };
        if (this.multiple) {
          this.range.forEach((item) => {
            if (values.includes(item[this.map.value] + "")) {
              detail.value.push(item[this.map.value]);
              detail.data.push(item);
            }
          });
        } else {
          const range = this.range.find((item) => item[this.map.value] + "" === values);
          if (range) {
            detail = {
              value: range[this.map.value],
              data: range
            };
          }
        }
        this.formItem && this.formItem.setValue(detail.value);
        this.$emit("input", detail.value);
        this.$emit("update:modelValue", detail.value);
        this.$emit("change", {
          detail
        });
        if (this.multiple) {
          this.dataList = this.getDataList(detail.value, true);
        } else {
          this.dataList = this.getDataList(detail.value);
        }
      },
      getDataList(value) {
        let dataList = JSON.parse(JSON.stringify(this.range));
        let list = [];
        if (this.multiple) {
          if (!Array.isArray(value)) {
            value = [];
          }
        }
        dataList.forEach((item, index) => {
          item.disabled = item.disable || item.disabled || false;
          if (this.multiple) {
            if (value.length > 0) {
              let have = value.find((val) => val === item[this.map.value]);
              item.selected = have !== void 0;
            } else {
              item.selected = false;
            }
          } else {
            item.selected = value === item[this.map.value];
          }
          list.push(item);
        });
        return this.setRange(list);
      },
      setRange(list) {
        let selectList = list.filter((item) => item.selected);
        let min = Number(this.min) || 0;
        let max = Number(this.max) || "";
        list.forEach((item, index) => {
          if (this.multiple) {
            if (selectList.length <= min) {
              let have = selectList.find((val) => val[this.map.value] === item[this.map.value]);
              if (have !== void 0) {
                item.disabled = true;
              }
            }
            if (selectList.length >= max && max !== "") {
              let have = selectList.find((val) => val[this.map.value] === item[this.map.value]);
              if (have === void 0) {
                item.disabled = true;
              }
            }
          }
          this.setStyles(item, index);
          list[index] = item;
        });
        return list;
      },
      setStyles(item, index) {
        item.styleBackgroud = this.setStyleBackgroud(item);
        item.styleIcon = this.setStyleIcon(item);
        item.styleIconText = this.setStyleIconText(item);
        item.styleRightIcon = this.setStyleRightIcon(item);
      },
      getSelectedValue(range) {
        if (!this.multiple)
          return this.dataValue;
        let selectedArr = [];
        range.forEach((item) => {
          if (item.selected) {
            selectedArr.push(item[this.map.value]);
          }
        });
        return this.dataValue.length > 0 ? this.dataValue : selectedArr;
      },
      setStyleBackgroud(item) {
        let styles = {};
        let selectedColor = this.selectedColor ? this.selectedColor : "#007aff";
        if (this.mode !== "list") {
          styles["border-color"] = item.selected ? selectedColor : "#DCDFE6";
        }
        if (this.mode === "tag") {
          styles["background-color"] = item.selected ? selectedColor : "#f5f5f5";
        }
        let classles = "";
        for (let i2 in styles) {
          classles += `${i2}:${styles[i2]};`;
        }
        return classles;
      },
      setStyleIcon(item) {
        let styles = {};
        let classles = "";
        let selectedColor = this.selectedColor ? this.selectedColor : "#007aff";
        styles["background-color"] = item.selected ? selectedColor : "#fff";
        styles["border-color"] = item.selected ? selectedColor : "#DCDFE6";
        if (!item.selected && item.disabled) {
          styles["background-color"] = "#F2F6FC";
          styles["border-color"] = item.selected ? selectedColor : "#DCDFE6";
        }
        for (let i2 in styles) {
          classles += `${i2}:${styles[i2]};`;
        }
        return classles;
      },
      setStyleIconText(item) {
        let styles = {};
        let classles = "";
        let selectedColor = this.selectedColor ? this.selectedColor : "#007aff";
        if (this.mode === "tag") {
          styles.color = item.selected ? this.selectedTextColor ? this.selectedTextColor : "#fff" : "#333";
        } else {
          styles.color = item.selected ? this.selectedTextColor ? this.selectedTextColor : selectedColor : "#333";
        }
        if (!item.selected && item.disabled) {
          styles.color = "#999";
        }
        for (let i2 in styles) {
          classles += `${i2}:${styles[i2]};`;
        }
        return classles;
      },
      setStyleRightIcon(item) {
        let styles = {};
        let classles = "";
        if (this.mode === "list") {
          styles["border-color"] = item.selected ? this.styles.selectedColor : "#DCDFE6";
        }
        for (let i2 in styles) {
          classles += `${i2}:${styles[i2]};`;
        }
        return classles;
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_load_more = resolveEasycom(vue.resolveDynamicComponent("uni-load-more"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "uni-data-checklist",
      style: vue.normalizeStyle({ "margin-top": $data.isTop + "px" })
    }, [
      !$data.isLocal ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-data-loading"
      }, [
        !_ctx.mixinDatacomErrorMessage ? (vue.openBlock(), vue.createBlock(_component_uni_load_more, {
          key: 0,
          status: "loading",
          iconType: "snow",
          iconSize: 18,
          "content-text": $data.contentText
        }, null, 8, ["content-text"])) : (vue.openBlock(), vue.createElementBlock("text", { key: 1 }, vue.toDisplayString(_ctx.mixinDatacomErrorMessage), 1))
      ])) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
        $props.multiple ? (vue.openBlock(), vue.createElementBlock("checkbox-group", {
          key: 0,
          class: vue.normalizeClass(["checklist-group", { "is-list": $props.mode === "list" || $props.wrap }]),
          onChange: _cache[0] || (_cache[0] = (...args) => $options.chagne && $options.chagne(...args))
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.dataList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("label", {
              class: vue.normalizeClass(["checklist-box", ["is--" + $props.mode, item.selected ? "is-checked" : "", $props.disabled || !!item.disabled ? "is-disable" : "", index !== 0 && $props.mode === "list" ? "is-list-border" : ""]]),
              style: vue.normalizeStyle(item.styleBackgroud),
              key: index
            }, [
              vue.createElementVNode("checkbox", {
                class: "hidden",
                hidden: "",
                disabled: $props.disabled || !!item.disabled,
                value: item[$props.map.value] + "",
                checked: item.selected
              }, null, 8, ["disabled", "value", "checked"]),
              $props.mode !== "tag" && $props.mode !== "list" || $props.mode === "list" && $props.icon === "left" ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "checkbox__inner",
                style: vue.normalizeStyle(item.styleIcon)
              }, [
                vue.createElementVNode("view", { class: "checkbox__inner-icon" })
              ], 4)) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("view", {
                class: vue.normalizeClass(["checklist-content", { "list-content": $props.mode === "list" && $props.icon === "left" }])
              }, [
                vue.createElementVNode("text", {
                  class: "checklist-text",
                  style: vue.normalizeStyle(item.styleIconText)
                }, vue.toDisplayString(item[$props.map.text]), 5),
                $props.mode === "list" && $props.icon === "right" ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "checkobx__list",
                  style: vue.normalizeStyle(item.styleBackgroud)
                }, null, 4)) : vue.createCommentVNode("v-if", true)
              ], 2)
            ], 6);
          }), 128))
        ], 34)) : (vue.openBlock(), vue.createElementBlock("radio-group", {
          key: 1,
          class: vue.normalizeClass(["checklist-group", { "is-list": $props.mode === "list", "is-wrap": $props.wrap }]),
          onChange: _cache[1] || (_cache[1] = (...args) => $options.chagne && $options.chagne(...args))
        }, [
          vue.createCommentVNode(" "),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.dataList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("label", {
              class: vue.normalizeClass(["checklist-box", ["is--" + $props.mode, item.selected ? "is-checked" : "", $props.disabled || !!item.disabled ? "is-disable" : "", index !== 0 && $props.mode === "list" ? "is-list-border" : ""]]),
              style: vue.normalizeStyle(item.styleBackgroud),
              key: index
            }, [
              vue.createElementVNode("radio", {
                class: "hidden",
                hidden: "",
                disabled: $props.disabled || item.disabled,
                value: item[$props.map.value] + "",
                checked: item.selected
              }, null, 8, ["disabled", "value", "checked"]),
              $props.mode !== "tag" && $props.mode !== "list" || $props.mode === "list" && $props.icon === "left" ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "radio__inner",
                style: vue.normalizeStyle(item.styleBackgroud)
              }, [
                vue.createElementVNode("view", {
                  class: "radio__inner-icon",
                  style: vue.normalizeStyle(item.styleIcon)
                }, null, 4)
              ], 4)) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("view", {
                class: vue.normalizeClass(["checklist-content", { "list-content": $props.mode === "list" && $props.icon === "left" }])
              }, [
                vue.createElementVNode("text", {
                  class: "checklist-text",
                  style: vue.normalizeStyle(item.styleIconText)
                }, vue.toDisplayString(item[$props.map.text]), 5),
                $props.mode === "list" && $props.icon === "right" ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  style: vue.normalizeStyle(item.styleRightIcon),
                  class: "checkobx__list"
                }, null, 4)) : vue.createCommentVNode("v-if", true)
              ], 2)
            ], 6);
          }), 128))
        ], 34))
      ], 2112))
    ], 4);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$6], ["__scopeId", "data-v-84d5d996"]]);
  const _sfc_main$9 = {};
  function _sfc_render$5(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "card" }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ]);
  }
  var Card = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$5], ["__scopeId", "data-v-41b3d3d3"]]);
  const _sfc_main$8 = {};
  function _sfc_render$4(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "collapse" }, [
      vue.renderSlot(_ctx.$slots, "default")
    ]);
  }
  var Collapse = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$4]]);
  const _sfc_main$7 = {
    props: {
      title: {
        type: String,
        required: true
      },
      index: {
        type: [String, Number],
        required: true
      },
      open: {
        type: Boolean,
        required: true
      },
      accordion: {
        type: Boolean,
        default: true
      }
    },
    emits: ["change"],
    setup(__props, { emit }) {
      const props = __props;
      const height = vue.ref(0);
      const isShow = vue.ref(false);
      const domArrayData = vue.ref([]);
      function handClick(index) {
        emit("change", index);
        domArrayData.value.forEach((item) => {
          if (item.id == index) {
            height.value = item.height;
            isShow.value = !isShow.value;
          }
        });
      }
      function querClassDom() {
        const query = uni.createSelectorQuery().in(this);
        query.selectAll(".content").boundingClientRect((data) => {
          domArrayData.value.push(...data);
        }).exec();
      }
      vue.onMounted(() => {
        formatAppLog("log", "at components/form/collapse/collapse-item.vue:104", props.accordion);
        querClassDom();
      });
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", {
          class: vue.normalizeClass(["collapse-item"]),
          onClick: _cache[0] || (_cache[0] = ($event) => handClick(__props.index))
        }, [
          vue.createElementVNode("view", {
            class: "collapse-head",
            "hover-stay-time": 200
          }, [
            vue.createElementVNode("view", { class: "collapse-info" }, [
              vue.createElementVNode("view", { class: "title" }, vue.toDisplayString(__props.title), 1)
            ]),
            vue.createElementVNode("view", {
              class: vue.normalizeClass(["collapse-icon", { "icon-active": __props.accordion ? isShow.value : __props.open }])
            }, [
              vue.createVNode(_component_uni_icons, {
                type: "arrowdown",
                size: "20"
              })
            ], 2)
          ]),
          vue.createCommentVNode(" \u5185\u5BB9\u533A\u57DF  "),
          vue.createElementVNode("view", {
            class: "collapse-body",
            style: vue.normalizeStyle([
              {
                height: (__props.accordion ? isShow.value : __props.open) ? height.value + "px" : "0"
              }
            ])
          }, [
            vue.createElementVNode("view", {
              class: "content",
              id: __props.index
            }, [
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ], 8, ["id"])
          ], 4)
        ]);
      };
    }
  };
  var CollapseItem = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-73545e11"]]);
  const _sfc_main$6 = {
    components: {
      Card,
      Collapse,
      CollapseItem
    },
    setup() {
      const value = vue.ref(0);
      const range = vue.ref([
        { value: 0, text: "\u57FA\u7840\u7528\u6CD5" },
        { value: 1, text: "\u624B\u98CE\u7434" }
      ]);
      const accordion = vue.ref(true);
      const itemList = vue.ref([
        {
          head: "\u8D4F\u8BC6\u5728\u4E8E\u89D2\u5EA6\u7684\u8F6C\u6362",
          body: "\u53EA\u8981\u6211\u4EEC\u6B63\u786E\u62E9\u53D6\u4E00\u4E2A\u5408\u9002\u7684\u53C2\u7167\u7269\u4E43\u81F3\u7A0D\u964D\u4E00\u683C\u53BB\u770B\u5F85\u4ED6\u4EBA\uFF0C\u503C\u5F97\u8D4F\u8BC6\u7684\u4E1C\u897F\u4FBF\u4F1A\u6251\u9762\u800C\u6765",
          open: false,
          disabled: true
        },
        {
          head: "\u751F\u6D3B\u4E2D\u4E0D\u662F\u7F3A\u5C11\u7F8E\uFF0C\u800C\u662F\u7F3A\u5C11\u53D1\u73B0\u7F8E\u7684\u773C\u775B",
          body: "\u5B66\u4F1A\u6B23\u8D4F\uFF0C\u5B9E\u9645\u662F\u4E00\u79CD\u79EF\u6781\u751F\u6D3B\u7684\u6001\u5EA6\uFF0C\u662F\u751F\u6D3B\u7684\u8C03\u5473\u54C1\uFF0C\u4F1A\u5728\u6B23\u8D4F\u4E2D\u53D1\u73B0\u751F\u6D3B\u7684\u7F8E",
          open: false
        },
        {
          head: "\u5468\u56F4\u4E00\u4E9B\u4E0D\u8D77\u773C\u7684\u4EBA\u3001\u4E8B\u3001\u7269\uFF0C\u6216\u8BB8\u90FD\u9690\u85CF\u7740\u4E0D\u540C\u51E1\u54CD\u7684\u667A\u6167",
          body: "\u4F46\u662F\u636E\u8BF4\u96D5\u523B\u5927\u536B\u50CF\u6240\u7528\u7684\u8FD9\u5757\u5927\u7406\u77F3\uFF0C\u66FE\u88AB\u591A\u4F4D\u96D5\u523B\u5BB6\u6279\u8BC4\u5F97\u4E00\u65E0\u662F\u5904\uFF0C\u6709\u4E9B\u4EBA\u8BA4\u4E3A\u8FD9\u5757\u5927\u7406\u77F3\u91C7\u51FF\u5F97\u4E0D\u597D\uFF0C\u6709\u4E9B\u4EBA\u5ACC\u5B83\u7684\u7EB9\u8DEF\u4E0D\u591F\u7F8E",
          open: false
        }
      ]);
      function itemChange(val) {
        itemList.value.forEach((item, index) => {
          if (val == index) {
            item.open = !item.open;
          } else {
            item.open = false;
          }
        });
      }
      function change(e) {
        formatAppLog("log", "at pages/form/collapse/index.vue:86", e);
        accordion.value = e.detail.value == 0 ? true : false;
      }
      return {
        itemList,
        itemChange,
        value,
        range,
        change,
        accordion
      };
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_CollapseItem = vue.resolveComponent("CollapseItem");
    const _component_Collapse = vue.resolveComponent("Collapse");
    const _component_Card = vue.resolveComponent("Card");
    const _component_uni_data_checkbox = resolveEasycom(vue.resolveDynamicComponent("uni-data-checkbox"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "collapse" }, [
      vue.createElementVNode("view", { class: "collapse-text" }, "\u57FA\u7840\u7528\u6CD5"),
      vue.createVNode(_component_Card, null, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "collapse-area" }, [
            vue.createVNode(_component_Collapse, null, {
              default: vue.withCtx(() => [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($setup.itemList, (item, index) => {
                  return vue.openBlock(), vue.createBlock(_component_CollapseItem, {
                    onChange: $setup.itemChange,
                    title: item.head,
                    open: item.open,
                    accordion: $setup.accordion,
                    index,
                    key: index
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(vue.toDisplayString(item.body), 1)
                    ]),
                    _: 2
                  }, 1032, ["onChange", "title", "open", "accordion", "index"]);
                }), 128))
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }),
      vue.createElementVNode("view", null, [
        vue.createVNode(_component_uni_data_checkbox, {
          modelValue: $setup.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.value = $event),
          localdata: $setup.range,
          onChange: $setup.change,
          multiple: false
        }, null, 8, ["modelValue", "localdata", "onChange"])
      ])
    ]);
  }
  var PagesFormCollapseIndex = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$3], ["__scopeId", "data-v-549afc32"]]);
  const getType = (value) => {
    let type = typeof value;
    if (type !== "object") {
      return type;
    }
    return Object.prototype.toString.call(value).replace(/^\[Object(\S+)\]$/, "$1");
  };
  const _sfc_main$5 = {
    props: {
      modelValue: {
        type: Boolean,
        default: false
      },
      range: {
        type: Array,
        required: true
      },
      rangeKey: {
        type: String,
        default: ""
      },
      confirmText: {
        type: String,
        default: "\u786E\u8BA4"
      },
      cancelText: {
        type: String,
        default: "\u53D6\u6D88"
      },
      buttonLocation: {
        type: String,
        default: "bottom"
      }
    },
    emits: ["update:modelValue", "confirm", "cancel"],
    setup(__props, { emit }) {
      const props = __props;
      const value = vue.ref([0]);
      const indicatorStyle = vue.ref("height: 50px");
      const showPickerView = vue.ref(false);
      const currenIndex = vue.ref(0);
      function close() {
        showPickerView.value = false;
        setTimeout(() => {
          emit("update:modelValue", showPickerView.value);
        }, 100);
      }
      function handleChange(e) {
        formatAppLog("log", "at components/form/picker/index.vue:106", e.currentTarget.dataset.value);
        currenIndex.value = e.currentTarget.dataset.value;
        formatAppLog("log", "at components/form/picker/index.vue:108", e);
      }
      function handConfirm() {
        let currenObject = {
          currenObject: props.range[currenIndex.value],
          currenIndex: currenIndex.value
        };
        showPickerView.value = false;
        emit("update:modelValue", showPickerView.value);
        emit("confirm", currenObject);
      }
      function handCancel() {
        showPickerView.value = false;
        emit("update:modelValue", showPickerView.value);
        emit("cancel");
      }
      function getItemValue(item, mode) {
        return getType(item) == "object" ? item[props.rangeKey] : item;
      }
      vue.watch([() => props.modelValue], (newValue, oldValue) => {
        formatAppLog("log", "at components/form/picker/index.vue:135", newValue);
        setTimeout(() => {
          showPickerView.value = newValue[0];
        }, 100);
      });
      return (_ctx, _cache) => {
        return __props.modelValue ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "picker"
        }, [
          showPickerView.value ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "picker-body",
            onClick: vue.withModifiers(close, ["stop"])
          }, null, 8, ["onClick"])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["picker-bg", { toggle: showPickerView.value }])
          }, [
            vue.createElementVNode("view", { class: "info" }, [
              vue.withDirectives(vue.createElementVNode("view", { class: "picker-top" }, [
                vue.createElementVNode("button", {
                  class: "cancel",
                  "hover-class": "none",
                  type: "button"
                }, vue.toDisplayString(__props.cancelText), 1),
                vue.createElementVNode("button", {
                  class: "confirm",
                  "hover-class": "none",
                  type: "button"
                }, vue.toDisplayString(__props.confirmText), 1)
              ], 512), [
                [vue.vShow, __props.buttonLocation == "top"]
              ]),
              vue.createElementVNode("view", { class: "picker-view-content" }, [
                (vue.openBlock(), vue.createElementBlock("picker-view", {
                  key: 0,
                  class: "picker-view",
                  "indicator-style": indicatorStyle.value,
                  value: value.value,
                  "mask-class": "mask-class",
                  onChange: handleChange
                }, [
                  vue.createElementVNode("picker-view-column", { class: "picker-view-column" }, [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.range, (item, index) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        class: "item",
                        key: index
                      }, vue.toDisplayString(getItemValue(item)), 1);
                    }), 128))
                  ])
                ], 40, ["indicator-style", "value"]))
              ]),
              vue.withDirectives(vue.createElementVNode("view", { class: "picker-bottom" }, [
                vue.createElementVNode("button", {
                  class: "cancel",
                  "hover-class": "none",
                  type: "button",
                  onClick: handCancel
                }, vue.toDisplayString(__props.cancelText), 1),
                vue.createElementVNode("button", {
                  class: "confirm",
                  "hover-class": "none",
                  type: "button",
                  onClick: handConfirm
                }, vue.toDisplayString(__props.confirmText), 1)
              ], 512), [
                [vue.vShow, __props.buttonLocation == "bottom"]
              ])
            ])
          ], 2)
        ])) : vue.createCommentVNode("v-if", true);
      };
    }
  };
  var pickerBasicUsage = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-93195c5e"]]);
  const _sfc_main$4 = {
    components: {
      pickerBasicUsage
    },
    setup() {
      const show = vue.ref(false);
      const value = vue.ref(0);
      const rangePickerList = vue.ref([1, 2, 3]);
      const buttonLocation = vue.ref("bottom");
      const range = vue.ref([
        { value: 0, text: "\u5E95\u90E8\u6309\u94AE", key: "bottom" },
        { value: 1, text: "\u9876\u90E8\u6309\u94AE", key: "top" }
      ]);
      function handShowPicker() {
        show.value = !show.value;
      }
      function change(e) {
        let { key } = e.detail.data;
        buttonLocation.value = key;
      }
      return {
        show,
        range,
        value,
        rangePickerList,
        buttonLocation,
        change,
        handShowPicker
      };
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_data_checkbox = resolveEasycom(vue.resolveDynamicComponent("uni-data-checkbox"), __easycom_0);
    const _component_pickerBasicUsage = vue.resolveComponent("pickerBasicUsage");
    return vue.openBlock(), vue.createElementBlock("view", { class: "picker" }, [
      vue.createElementVNode("button", {
        type: "button",
        onClick: _cache[0] || (_cache[0] = (...args) => $setup.handShowPicker && $setup.handShowPicker(...args))
      }, "\u6253\u5F00"),
      vue.createVNode(_component_uni_data_checkbox, {
        modelValue: $setup.value,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.value = $event),
        localdata: $setup.range,
        onChange: $setup.change,
        multiple: false
      }, null, 8, ["modelValue", "localdata", "onChange"]),
      vue.createVNode(_component_pickerBasicUsage, {
        modelValue: $setup.show,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.show = $event),
        buttonLocation: $setup.buttonLocation,
        range: $setup.rangePickerList
      }, null, 8, ["modelValue", "buttonLocation", "range"])
    ]);
  }
  var PagesFormPickerIndex = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$2], ["__scopeId", "data-v-c3fb435a"]]);
  const _sfc_main$3 = {
    props: {
      stepIndex: {
        type: [String, Number],
        default: 2
      },
      stepsList: {
        type: Array,
        default: [
          {
            name: "\u516C\u8BC1\u4FE1\u606F"
          },
          {
            name: "\u516C\u8BC1\u4E8B\u9879"
          },
          {
            name: "\u4E0A\u4F20\u6750\u6599"
          },
          {
            name: "\u63D0\u4EA4\u7ED3\u679C"
          }
        ]
      },
      mode: {
        type: String,
        default: ""
      }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "step" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.stepsList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: vue.normalizeClass(["step-item", [index + 1 == __props.stepIndex ? "step-item-greater" : "", index + 1 < __props.stepIndex ? "step-item-to" : ""]]),
              key: index
            }, [
              vue.createElementVNode("view", { class: "step-item-icon" }, [
                __props.mode == "" ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: vue.normalizeClass(["step-item-icon-bg", { "step-item-icon-no": index > 0 }])
                }, vue.toDisplayString(index + 1), 3)) : vue.renderSlot(_ctx.$slots, "icon", {
                  key: 1,
                  index
                }, void 0, true)
              ]),
              vue.createElementVNode("view", { class: "step-item-label" }, vue.toDisplayString(item.name), 1)
            ], 2);
          }), 128))
        ]);
      };
    }
  };
  var step = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-bc5e364c"]]);
  const _sfc_main$2 = {
    components: {
      step
    },
    setup(props) {
      const value = vue.ref(0);
      const range = vue.ref([
        { value: 0, text: "\u57FA\u7840\u7528\u6CD5", key: "" },
        { value: 1, text: "\u81EA\u5B9A\u4E49icon", key: "number" }
      ]);
      const mode = vue.ref("number");
      function change(e) {
        let { key } = e.detail.data;
        mode.value = key;
      }
      return {
        value,
        range,
        change,
        mode
      };
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_step = vue.resolveComponent("step");
    const _component_uni_data_checkbox = resolveEasycom(vue.resolveDynamicComponent("uni-data-checkbox"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "step" }, [
      vue.createVNode(_component_step, {
        mode: $setup.mode,
        stepIndex: 1
      }, {
        icon: vue.withCtx((value) => [
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["step-item-icon", { "step-item-icon-no": value.index > 0 }])
          }, vue.toDisplayString(value.index + 1), 3)
        ]),
        _: 1
      }, 8, ["mode"]),
      vue.createElementVNode("view", null, [
        vue.createVNode(_component_uni_data_checkbox, {
          modelValue: $setup.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.value = $event),
          localdata: $setup.range,
          onChange: $setup.change,
          multiple: false
        }, null, 8, ["modelValue", "localdata", "onChange"])
      ])
    ]);
  }
  var PagesFormStepIndex = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-78edacde"]]);
  const _sfc_main$1 = {
    setup(props) {
      const calendarData = vue.ref([{ label: "\u65E5" }, { label: "\u4E00" }, { label: "\u4E8C" }, { label: "\u4E09" }, { label: "\u56DB" }, { label: "\u4E94" }, { label: "\u516D" }]);
      const calendarDataTime = vue.ref([]);
      const year = vue.ref(0);
      const month = vue.ref(0);
      const date = vue.ref(0);
      const day = vue.ref(-1);
      getNow();
      getCalendarDate();
      setSeventDay();
      function getNow() {
        let now = new Date();
        year.value = +now.getFullYear();
        month.value = +now.getMonth() + 1;
        date.value = +now.getDate();
        day.value = +now.getDay();
        let firstTime = +new Date(year.value, month.value - 1, 1, 0, 0, 0);
        formatAppLog("log", "at pages/form/day/index.vue:41", firstTime);
      }
      function monthDay(month2) {
        if ([1, 3, 5, 7, 8, 10, 12].includes(month2)) {
          return 31;
        } else if ([4, 6, 9, 11].includes(month2)) {
          return 30;
        } else if (month2 == 2) {
          if (year.value % 4 == 0 && year.value % 100 != 0 || year.value % 400 == 0) {
            return 29;
          } else {
            return 28;
          }
        }
      }
      function getCalendarDate() {
        let firstDay = new Date(year.value + "-" + month.value + "-01").getDay();
        let num = Number.parseInt(firstDay);
        let nowDays = monthDay(month.value);
        let lastMonth = month.value - 1 > 0 ? month.value - 1 : 12;
        let lastDays = monthDay(lastMonth);
        formatAppLog("log", "at pages/form/day/index.vue:71", num, firstDay, nowDays, lastDays);
        for (let index = 0; index < num; index++) {
          calendarData.value.push({ label: lastDays - num + index + 1 });
          calendarDataTime.value.push({ label: lastDays - num + index + 1 });
        }
        for (let index = 0; index < nowDays; index++) {
          calendarData.value.push({ label: index + 1 });
          calendarDataTime.value.push({ label: index + 1 });
        }
        if (calendarData.value.length % 7 != 0) {
          let surplusDay = 7 - calendarData.value.length % 7;
          for (let index = 0; index < surplusDay; index++) {
            calendarData.value.push({ label: index + 1 });
          }
        }
        if (calendarDataTime.value.length % 5 != 0) {
          let surplusDay = 5 - calendarDataTime.value.length % 5;
          for (let index = 0; index < surplusDay; index++) {
            calendarDataTime.value.push({ label: index + 1 });
          }
        }
        formatAppLog("log", "at pages/form/day/index.vue:99", num, firstDay, nowDays, lastDays, month.value, year.value);
        formatAppLog("log", "at pages/form/day/index.vue:100", calendarData.value);
        formatAppLog("log", "at pages/form/day/index.vue:101", calendarDataTime.value);
      }
      function setSeventDay() {
        let result = [];
        for (let index = 0; index < calendarDataTime.value.length; index += 7) {
          formatAppLog("log", "at pages/form/day/index.vue:107", index);
          result.push(calendarDataTime.value.slice(index, index + 7));
          formatAppLog("log", "at pages/form/day/index.vue:110", result);
        }
        formatAppLog("log", "at pages/form/day/index.vue:113", result);
      }
      function dateUp() {
        month.value--;
        if (month.value <= 0) {
          year.value--;
          month.value = 12;
        }
        getCalendarDate();
      }
      function dateDown() {
        month.value++;
        if (month.value > 12) {
          year.value++;
          month.value = 1;
        }
        getCalendarDate();
      }
      return {
        calendarData,
        year,
        month,
        date,
        day,
        dateUp,
        dateDown
      };
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("button", {
        onClick: _cache[0] || (_cache[0] = (...args) => $setup.dateUp && $setup.dateUp(...args))
      }, "\u4E0A\u4E00\u4E2A\u6708"),
      vue.createElementVNode("button", {
        onClick: _cache[1] || (_cache[1] = (...args) => $setup.dateDown && $setup.dateDown(...args))
      }, "\u4E0B\u4E00\u4E2A\u6708")
    ]);
  }
  var PagesFormDayIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
  if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
    Promise.prototype.finally = function(callback) {
      const promise = this.constructor;
      return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      }));
    };
  }
  if (uni.restoreGlobal) {
    uni.restoreGlobal(vue__namespace, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
  }
  __definePage("pages/index/components", PagesIndexComponents);
  __definePage("pages/index/template", _sfc_main$c);
  __definePage("pages/form/collapse/index", PagesFormCollapseIndex);
  __definePage("pages/form/picker/index", PagesFormPickerIndex);
  __definePage("pages/form/step/index", PagesFormStepIndex);
  __definePage("pages/form/day/index", PagesFormDayIndex);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:12", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:15", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:18", "App Hide");
    }
  };
  function createApp() {
    const app = vue.createVueApp(_sfc_main);
    return {
      app
    };
  }
  const __app__ = createApp().app;
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.use(uni.__vuePlugin).mount("#app");
})(Vue);
