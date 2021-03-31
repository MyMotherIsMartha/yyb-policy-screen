import {login} from '@/api/login'


const user = {
    state: {
        token: ''
    },

    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        }
    },

    actions: {
        Login({ commit }) {
            return new Promise((resolve, reject)=>{
                login("5cdccc19fa0e626f65e1b2ce979ae347","Test!@123").then(res=>{
                    commit('SET_TOKEN',res);
                    resolve();
                }).catch(error=>{
                    reject(error)
                })
                
            })
        }
    }
}

export default user