浅析URL


# URL

URL包括协议、主机、端口、路径

```
protocol :// hostname[:port] / path / [;parameters][?query]#fragment
```

- 协议是指定使用的传输协议，下表列出 protocol 属性的有效方案名称。 最常用的是HTTP协议，它也是WWW中应用最广的协议.常用的协议有file、ftp等
- 主机是指存放资源的服务器的域名系统(DNS) 主机名或 IP 地址
- 端口号:整数，可选，省略时使用方案的默认端口，各种传输协议都有默认的端口号，如http的默认端口为80
- 路径由零或多个“/”符号隔开的字符串，一般用来表示主机上的一个目录或文件地址。
- 查询用于给动态网页（如使用CGI、ISAPI、PHP/JSP/ASP/ASP.NET等技术制作的网页）传递参数，可有多个参数，用“&”符号隔开，每个参数的名和值用“=”符号隔开。
- 锚点一般是浏览器使用，不传给后台，使用#号，用于初始加载页面后定位页面位置


# DNS

DNS， 英文：Domain Name System，是互联网的一项服务。它作为将域名和IP地址相互映射的一个分布式数据库，能够使人更方便地访问互联网

一般使用nslookup命令可以查询DNS信息.用法如下:

```
nslookup www.baidu.com // 查询百度的域名信息
```

# ip

ip的作用是相当于收货地址.可以让别人在网络中找到你的设备.ping命令用法

```
ping www.baidu.com // ping百度的ip
```

# 域名

域名就是ip的别称，因为记忆ip是不容易的，而且ip会变化的，所以采用的域名的方法。一般域名分为三级.比如`www.baidu.com`中，`com`是顶级域名，`baidu.com`是二级域名，`www.baidu.com`是三级域名。