| 属性名		| 类型			| 必填	| 默认值	| 说明														|
| -------------	| -------------	| ----	| ------	| ------------------------------------------------------	|
| height		| String		| 否	| 100%		| 图片高度													|
| src			| String		| 否	|			| 图片链接													|
| width			| String		| 否	| 100%		| 图片宽度													|
| borderRadius	| String		| 否	| 0			| 图片圆角													|
| minTimeOut	| String/Number	| 否	| 300		| 当图片加载过快(存在缓存)至少显示多少毫秒加载动画			|
| showDistance	| Object		| 否	| {bottom:0}| 当图片距离屏幕多少距离的时候开始加载 单位px 可以是负数	|
| loadSrc		| String		| 否	|			| 占位图													|
| errorSrc		| String		| 否	|			| 加载失败占位图											|
| effect		| String		| 否	|linear		| 过渡效果  linear / ease / ease-in / ease-out / ease-in-out|
| duration		| String/Number	| 否	|300		| 图片加载成功后的过渡时间 单位毫秒							|




# 注意事项


宽高是要带单位的

此插件只支持固定宽高的图片，介意勿用

本插件使用 intersectionObserver API 监听节点的相交情况实现懒加载

比传统的监听页面滚动性能要好不少

如果有问题在下面评论下，我会改