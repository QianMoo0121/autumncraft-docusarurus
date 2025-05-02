# ❓常见问题

此文章归纳了一些 启动枫叶源客户端 和 进入枫叶源服务器 的 常见报错与解决方式

:::warning

此章节已过期，正在等待重构

:::

## 客户端启动

### 1.  弹窗：请使用管理员权限启动游戏

右键启动器 以管理员身份运行即可

![](https://img.picui.cn/free/2025/03/09/67cd676ad4c95.png)

右键启动器,以管理员身份运行

### 2、游戏崩溃 通用解决办法

- 检查客户端是否解压？如果是 请解压
- 不支持32位电脑 请重装64位系统
- 检查是否在MAC或者虚拟机上运行？如果是 请切换到真实的Windows或Linux环境的系统
- 尝试重启电脑或使用任务管理器结束已有的Java进程（PCL右下角的结束按钮同样适用）
- 检查自己电脑和服务器电脑时间是否正确 如果否，参阅[教程](https://blog.csdn.net/qq_29508575/article/details/120381277)同步时间
- mc日志是否有Windows安全中心拦截等字样？如果是 尝试关闭Windows安全中心或者下载火绒 使Windows安全中心闭嘴
- 请尝试关闭防火墙和杀毒软件
- 内存分配是否足够？参考[教程](https://7qrb1ynmpv.k.topthink.com/@autumncraft/❗guanyuneicunfenpei.html)合理分配内存
- 都不是？请发送崩溃截图及日志给服主

### 3、PCL出现错误，检查Minecraft窗口失败，拒绝访问

![](https://img.picui.cn/free/2025/03/09/67cd676a78937.jpg)

- 可以使用旧版PCL2启动器，旧版最高2.3，并且关闭自动更新和更新提示
- 可以更新最新版PCL2启动器，PCL开发者

### 4、PCL提示由于反作弊或安全软件拦截，PCL无法操作游戏窗口

![](https://img.picui.cn/free/2025/03/09/67cd676a66566.png)

无需理会，不会产生任何影响

### 5、弹出反作弊发现异常

![](https://img.picui.cn/free/2025/03/09/67cd676a61bf8.png)

在**确保你没有作弊**的情况下，关闭浏览器、文件浏览器、其他无关程序。

然后尝试重启客户端

### 6、启动游戏卡在下载整合包相关文件/补全文件/登录？

请检查网络环境，或者开启魔法

### 7、无法更新

![](https://img.picui.cn/free/2025/03/09/67cd676a61f4d.png)

在.minecraft/versions/枫叶源AutumnCraft/mcpatch-c下，将version-label.txt内的内容改成3.0.22，并保存。

这时自动更新就可以正常使用了

## 服务器连接

#### 1、提示Badpacket id 97

![](https://img.picui.cn/free/2025/03/09/67cd676a4978b.png)

等待5-10秒重新进入，刷新多几次，还不行就重启客户端，再不行请联系服主

### 2、提示Bad packet id 3500

![](https://img.picui.cn/free/2025/03/09/67cd676b94581.jpg)

客户端未启动反作弊（取决于你是否看到反作弊加载弹窗）

如果没有，参照[教程](https://7qrb1ynmpv.k.topthink.com/@autumncraft/❓kehuduandeanzhuang.html#反作弊的配置)重新配置反作弊

如果还不行，请联系服主

### 3、提示DateFormatException: incorrect header check

![](https://img.picui.cn/free/2025/03/09/67cd676ba95d7.jpg)

反作弊可能没有启动，如果启动了，可关闭文件校验。

关闭文件校验后重启客户端，如果还不行请联系服主

### 4、无法连接至服务器/进服慢 通用解决办法

此解决方法适用于：

- 无法连接至服务器 连接中断
- 无法连接至服务器 连接超时
- 提示getsockopt
- 提示connection rest

### 解决方法：

1. 检查网络环境，是否关闭代理
2. 尝试连接手机热点
3. 尝试连接手机 然后打开USB网络共享
4. 一般晚上进不去枫叶源，因为枫叶源现在在遭受无休止的DDoS攻击和SSH爆破
5. 重启客户端/重启电脑
6. 尝试将“渲染距离”和“模拟距离”拉到最低

![](https://img.picui.cn/free/2025/03/09/67cd676b94aaf.png)

点击`选项`

![](https://img.picui.cn/free/2025/03/09/67cd676b2002f.png)

点击`视频设置`

![](https://img.picui.cn/free/2025/03/09/67cd676b1db3a.png)

将`渲染距离 模拟距离`调低

这会对你的进服速度有提升，进服后再将`渲染距离`和`模拟距离`调回去

### 5、提示缺少Mod

将客户端更新到最新版本 群文件内的客户端始终保持最新版本

### 6、You are not logged into your...

![](https://img.picui.cn/free/2025/03/09/67cd676adbca3.png)

 检查是否使用LittleSkin登录，如果否 请使用LittleSkin登录