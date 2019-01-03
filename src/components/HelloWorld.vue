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
  create(){

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
