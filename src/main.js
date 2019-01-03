// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


router.beforeEach((to, from, next) => {
	debugger;
	if(from.path == "/index" && to.path =="/"){
		to.meta.keepAlive = false;
	}else if(from.path == "/test" && to.path =="/"){
		to.meta.keepAlive = true;
	}
     // 设置下一个路由的 meta
      // B 跳转到 A 时，让 A 缓存，即不刷新
    next();

})

/*router.beforeRouteLeave((to, from, next) =>{
	debugger;
	if(from == "index"){

	}
     // 设置下一个路由的 meta
    to.meta.keepAlive = true;  // B 跳转到 A 时，让 A 缓存，即不刷新
    next();
})*/
