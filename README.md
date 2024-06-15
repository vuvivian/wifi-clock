<!--
 * @Author: vuvivian
 * @Description: 请输入....
 * @Date: 2024-06-14 16:20:31
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-06-15 11:36:20
 * @FilePath: /wifi-clock/README.md
-->

一、 介绍

wifi时钟，使用esp32开发板，通过wifi连接上网络，获取时间，显示在屏幕上。

二、 原理图

三、 开发环境
- 1. 组件兼容
- 2. 接口对接

四、功能概述
- 1. 显示【12小时制、24小时制】
- 2. 时区选择
- 3. Wi-Fi授时 【支持手输wifi名称&选择模式】
- 5. 手动授时 【支持一键获取本地时间】
- 4. 亮度设置
- 5. 夜间模式
- 6. 屏幕旋转

五、 新特性

- 1. 重置功能
- 2. 自定义对时服务器
- 3. 自定义wifi对时对时频率
- 4. 命令说明页

属性	key	value
名称	ssid	
密码	pwd	
显示规则		is12
is24
时区	timeZone	timeZone+timeZoneNumber
自动更新时间	isAutoUpdateTime	true

false
本地时间	localTime	
本地时区？	localTimeZone	
亮度	lightLevel	
屏幕旋转	isAutoRotateScreen	
自动亮度	isAutoLight	