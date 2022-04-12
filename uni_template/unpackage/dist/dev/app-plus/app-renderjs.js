var __renderjsModules={};

__renderjsModules["4dba1d4c"] = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toCommonJS = /* @__PURE__ */ ((cache) => {
    return (module, temp) => {
      return cache && cache.get(module) || (temp = __reExport(__markAsModule({}), module, 1), cache && cache.set(module, temp), temp);
    };
  })(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

  // <stdin>
  var stdin_exports = {};
  __export(stdin_exports, {
    default: () => stdin_default
  });

  // ../../../../舒克前端/git项目/project-template/uni_template/components/features/imageColorRecognit/index.js
  var emitImageData = {
    imageData: {}
  };
  var imageColorRecognit_default = emitImageData;

  // <stdin>
  var stdin_default = {
    data() {
      return {
        imgSrc: ""
      };
    },
    methods: {
      receiveMsg(newValue, oldValue, ownerVm, vm) {
        __f__("log", "at components/features/imageColorRecognit/index01.vue:45", "newValue", newValue);
        this.imgSrc = newValue;
        this.emitImage();
      },
      emitImage(e, ownerVm) {
        var imgSrc = "http://yd.ymyimi.cn:9001/api/yid/1629430898298.png";
        const imgEle = document.createElement("img");
        const canvas = document.createElement("canvas");
        imgEle.src = this.imgSrc + "?" + new Date().getTime();
        imgEle.setAttribute("crossOrigin", "");
        imgEle.onload = () => {
          __f__("log", "at components/features/imageColorRecognit/index01.vue:57", "\u52A0\u8F7D\u6210\u529F", imgEle.src);
          var ctx = canvas.getContext("2d");
          var naturalImgSize = [imgEle.naturalWidth, imgEle.naturalHeight];
          canvas.width = naturalImgSize[0];
          canvas.height = naturalImgSize[1];
          ctx.drawImage(imgEle, 0, 0);
          var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const leftSectionData = [];
          const rightSectionData = [];
          const onelineImgDataLen = canvas.width * 4;
          imgData.data.forEach((colorVal, i) => {
            if (i % onelineImgDataLen <= 0.5 * onelineImgDataLen || i % onelineImgDataLen >= 0.6 * onelineImgDataLen) {
              const inLeft = i % onelineImgDataLen <= 0.5 * onelineImgDataLen;
              if (i % 4 === 0) {
                const curAverageRGB = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3;
                let leftOrRightRef = inLeft ? leftSectionData : rightSectionData;
                leftOrRightRef[leftOrRightRef.length] = [curAverageRGB, imgData.data[i], imgData.data[i + 1], imgData.data[i + 2]];
              }
            }
          });
          const averageOfLeft = Math.round(leftSectionData.reduce((_cur, item) => {
            return _cur + item[0];
          }, 0) / leftSectionData.length);
          const averageOfRight = Math.round(rightSectionData.reduce((_cur, item) => {
            return _cur + item[0];
          }, 0) / rightSectionData.length);
          const findNearestIndex = (averageVal, arrBox) => {
            let _gapValue = Math.abs(averageVal - arrBox[0]);
            let _nearColorIndex = 0;
            arrBox.forEach((item, index) => {
              const curGapValue = Math.abs(item - averageVal);
              if (curGapValue < _gapValue) {
                _gapValue = curGapValue;
                _nearColorIndex = index;
              }
            });
            return _nearColorIndex;
          };
          const leftNearestColor = leftSectionData[findNearestIndex(averageOfLeft, leftSectionData)];
          const rightNearestColor = rightSectionData[findNearestIndex(averageOfRight, rightSectionData)];
          var imageData = {
            leftNearestColor,
            rightNearestColor
          };
          imageColorRecognit_default.imageData = imageData;
          __f__("log", "at components/features/imageColorRecognit/index01.vue:111", "\u6570\u636E\u66F4\u65B0\u4E86");
        };
      }
    }
  };
  return __toCommonJS(stdin_exports);
})();
