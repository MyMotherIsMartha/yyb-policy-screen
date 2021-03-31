import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        isLoading: true
    },
    modules: {
        user
    },
    mutations: {
        SetLoading: (state, bool) => {
            console.log('SEt loading')
            state.isLoading = bool
        }
    },
    getters
})

export default store
