# 中国大陆行政区划编码库

## [china_regions](https://github.com/wecatch/china_regions)

小型项目（不具备数据库接口调用条件）适合使用

另有带类型提示的版本 `china-regions-ts`，建议在找这类行政编码库时，尽量找最新版的。

## [china-regions-ts](https://github.com/zfben/china-regions-ts)

中国行政区域数据，数据基于 [腾讯位置服务](https://lbs.qq.com/service/webService/webServiceGuide/webServiceDistrict)





# Shapefile

## [ts-shapefile](https://github.com/oyvindi/ts-shapefile)

前端直接读取 Esri Shapefile。这个库源代码使用 TypeScript 编写，打包后支持类型提示（自带 `d.ts`）。

> Shapefile 规范本体并不含坐标系，所以本库不解析 `.prj` 文件中的坐标系信息。



## [shp-write](https://github.com/mapbox/shp-write)

用于写入 Shapefile 并下载为 zip 的库

用纯 javascript 编写 shapefile。使用[dbf](https://github.com/tmcw/dbf) 作为数据组件，并使用[jsZIP](http://stuk.github.io/jszip/)生成可在浏览器中下载的 ZIP 文件。

