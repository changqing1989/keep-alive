<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <input type="text" />
    <ul>
      <li>
        <a
          href="#/test"
        >
          gotoTest
        </a>
        <a
          href="#/index"
        >
          gotoIndex
        </a>
      </li>
    </ul>

    <ul v-for="it in list">
        <li >
            {{it}}
        </li>
    </ul>
      
      
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list:[]
    }
  },
  methods:{

  },
  activated() {
    console.log('list activated')
  },
  deactivated() {
    console.log('list deactivated')
  },
  destroyed() {
    console.log('list destroyed')
  },
  beforeRouteEnter (to, from, next) {
    // if(){

    // }
    // this.$root.$children[0].list.push("HelloWorld");
    next();
  },
  // 路由改变前，组件就已经渲染完了
  // 逻辑稍稍不同
  // beforeRouteUpdate (to, from, next) {
    
  // },
  beforeRouteLeave(to, from, next) {
    debugger;
    if(to.path === "/index"){
      // from.meta.keepAlive = true;
      this.$root.list=[];
      this.$root.$children[0].list = [];
    }else if(to.path === "/test"){
    
        this.$root.$children[0].list.push("HelloWorld");
    }
    // 设置下一个路由的 meta
    // to.meta.keepAlive = false;  // B 跳转到 A 时，让 A 缓存，即不刷新
    next();
  },
  create(){
    this.$root.$children[0].list.push("HelloWorld");
  },
  mounted(){
    console.log("list+++init");
    this.list = [1,2,3,4,5,5,5,5,5,5,5,6,5,5,5];
  }
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
