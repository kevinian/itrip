ITrip
=====

度假屋点评网（爱旅网）
---------------------

* [Itrip-Home] - Homepage
* [Itrip-Keystone] - Keystone CMS
* [Itrip-NodeBB] - NodeBB Forum
* [Itrip-Proxy] - Proxy Server

安装
----

```sh
npm install forever -g
git clone https://github.com/kevinian/itrip-home
cd itrip-home
npm install
git clone https://github.com/kevinian/itrip-keystone
cd itrip-keystone
npm install
git clone https://github.com/kevinian/itrip-nodebb
cd itrip-nodebb
npm install
git clone https://github.com/kevinian/itrip-proxy
cd itrip-proxy
npm install
```

运行
----

```sh
forever start --sourceDir ./itrip-home/ app.js
forever start --sourceDir ./itrip-keystone/ app.js
forever start --sourceDir ./itrip-nodebb/ app.js
forever start --sourceDir ./itrip-proxy/ app.js
```

关闭
----

```sh
forever stopall
```

启动脚本
--------

复制脚本到指定目录，修改脚本中相关环境配置以及文件权限

####upstart

```sh
cp ./scripts/itrip-home.conf /etc/init/
sudo start itrip-home
```

####bash

```sh
cp ./scripts/itrip-home /etc/init.d/
sudo su
chmod a+x /etc/init.d/itrip-home
sudo service itrip-home start
```

[Itrip-Home]:https://github.com/kevinian/itrip-home
[Itrip-Keystone]:https://github.com/kevinian/itrip-keystone
[Itrip-NodeBB]:https://github.com/kevinian/itrip-nodebb
[Itrip-Proxy]:https://github.com/kevinian/itrip-proxy
