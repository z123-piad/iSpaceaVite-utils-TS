# [JSTS](https://github.com/bjornharrtell/jsts?tab=readme-ov-file)

> JTS 的移植。JTS 有个 C++ 的儿子 `GEOS`，然后又有个 JavaScript 的儿子 `jsts`。`JTS` 是 Java 编写的几何库，其地位无需多言。

JSTS 是一个 ECMAScript 空间谓词和函数库，用于处理符合开放地理空间联盟发布的 SQL 简单特征规范的几何图形。JSTS 也是成熟的 Java 库[JTS](https://github.com/locationtech/jts)的一个端口。

该项目的主要目标是为网络地图应用程序提供一个完整的库来处理和分析简单几何图形，但 JSTS 也可以用作独立的几何库。

[文档1](https://locationtech.github.io/jts/javadoc/) [文档2](https://github.com/locationtech/jts/blob/master/doc/JTS%20Developer%20Guide.pdf)

- 功能强大的开源库
- 支持平面坐标系，不限制于地理坐标系
- 文档缺少，示例缺少  



## [Turf](https://github.com/Turfjs/turf)

Turf.js是JavaScript 空间分析库，Turf 实现了常用的空间分析操作，例如生成缓冲区、计算等高线，建立 TIN 等等。

[文档](http://turfjs.org/)

- 功能强大的GIS开源库，持续更新
- 文档全，示例多
- turf.js只支持3857和4326的坐标系。其他坐标系都不支持



# [geometric](https://github.com/HarryStevens/geometric)

geometric是一个用于处理几何的 JavaScript 库。非常的小巧。提供了点，线，面的及相交判断的相交算法 。

[示例代码1](https://bl.ocks.org/HarryStevens/c4eddfb97535e8e01643325cb43175ff)

[示例代码2](https://bl.ocks.org/HarryStevens/5fe49df19892c04dfb9883c217571409)

- 小而精
- 代码可读性和理解门槛很低，非常适合用于借鉴其中的代码
- 只有几何计算相关的功能，对GIS空间分析的功能支持不够



# [flatten-js](https://github.com/alexbol99/flatten-js)

**flatten-js**是一个 JavaScript 库，用于处理抽象几何形状，如点、矢量、线、射线、线段、圆、圆弧和多边形。形状可以组织到平面集 - 支持空间查询的可搜索容器中。

**flatten-js**提供了许多有用的方法和算法，例如查找交点、检查包含、计算距离、应用仿射变换、执行布尔运算等。

软件包以 3 种格式分发：commonjs、umd 和 es6 模块。Package.json 文件提供了适合不同目标的各种入口点。

TypeScript 用户可以利用包中包含的 TypeScript 定义文件 index.d.ts 进行静态类型检查。