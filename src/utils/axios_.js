import axios from 'axios'
// import Vue from 'vue'

// Vue.prototype.axios = axios;


const common = {
	axios_:function (/*url,type,data,cancel*/ options) {
		// body...
		let config = options.type == 'post' ? {
			url:options.url,
			type:options.type,
			data:options.data

		}:{
			url:options.url,
			type:options.type,
			params:options.data
		};


		config.timeout = '10000';
		config.cancelToken = options.cancelToken;




		axios.request(config).catch(function (error) {
			debugger;
			if (axios.isCancel(error)) {
			    console.log('Request canceled', error.message);
		  	} else {
			    // 处理错误
			    if (error.response) {
					// 请求已发出，但服务器响应的状态码不在 2xx 范围内
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
				} else {
					// Something happened in setting up the request that triggered an Error
					console.log('Error', error.message);
				}
		  	}
		    
		    console.log(error.config);
	  	}).then(function (response) {
			console.log(response);
		});



	}



}





export default common;

