<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="#/"
        >
          gotoHello
        </a>
        <a
          href="#/test"
        >
          gotoTest
        </a>
      </li>

      
      
    </ul>
    
  </div>
</template>

<script>

import common from '../utils/axios_'
import axios from 'axios'
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list:[]
    }
  },
  methods:{

  },
  create(){

  },
  mounted(){
    console.log("index+++init");
    debugger;
    this.list = [1,2,3];
    console.log(this.$root);
    // this.$root.list.length = 0;

    // this.$parent.$refs.dddd.$destroy(true);
    var CancelToken = axios.CancelToken;
    var source = CancelToken.source();



    common.axios_(
        {
            url:'/HealthCard/healthCard/getCard',
            type:'get',
            data:{body:'ia/nkPlnA1H3gpIPV1qKm72iC2odGL3zSBryS0exOeNJZ9eMLWG9Pqkf0pyV8HAqgDSEdVjhrN99fUo6T8u3wYYNcaQXC6y1KvpbEOtpNIj6b77MO/04uJYridvFlEqvl7qJl6fvvbBvp415iAplWw=='},
            cancelToken:source.token
        }
    );



    common.axios_(
        {
            url:'/HealthCard/healthCard/getCard',
            type:'get',
            data:{body:'ia/nkPlnA1H3gpIPV1qKm72iC2odGL3zSBryS0exOeNJZ9eMLWG9Pqkf0pyV8HAqgDSEdVjhrN99fUo6T8u3wYYNcaQXC6y1KvpbEOtpNIj6b77MO/04uJYridvFlEqvl7qJl6fvvbBvp415iAplWw=='},
            cancelToken:source.token
        }
    );


 setTimeout (function () {
     // 取消请求
     // source.cancel('Operation canceled by the user.');
 },1000)





  },
  // beforeRouteLeave(to, from, next) {
  //   debugger;
  //   // 设置下一个路由的 meta
  //   to.meta.keepAlive = false;  // B 跳转到 A 时，让 A 缓存，即不刷新
  //   next();
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
