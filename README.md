ITrip
=====

度假屋点评网（爱旅网）
---------------------

安装
----
```
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
```
cd itrip-home
forever start app.js
cd itrip-keystone
forever start app.js
cd itrip-nodebb
forever start app.js
cd itrip-proxy
forever start app.js
```
