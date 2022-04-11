import Vue from 'vue'
import vuex from 'vuex'
import user from "./modules/user";
Vue.use(vuex);

export default new vuex.Store({
    modules:{
      user
    },
    state:{
        count: 0
    },
    mutations:{
        add(state){
            state.count ++
        }
    },
    getters:{
        getCount:state => state.count,
        getEvenCount:state => state.count %2 === 0
    },
    actions:{
        getCountNumAfter1S(context){
            setTimeout(function (){
                context.commit('add')
            },2000)
        }
    }
})
