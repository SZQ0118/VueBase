/*
 * @Description: 
 * @Author: Shenziqi
 * @Date: 2022-03-08 16:28:12
 */

import Vue from "vue";
import App from '@/App.vue'

// new Vue({
//     el:'#app',
//     components:{
//         App
//     },
//     template:'<App />'
// })


new Vue({
    el: '#app',
    render: h => h(App)
})