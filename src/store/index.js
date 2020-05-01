import Vue from 'vue'
import Vuex from 'vuex'
import { http } from '../services/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contas: []
  },
  actions: {
    
    listarContas({ commit }){
      http.get('contas').then(r => r.data).then(contas => {
        commit('SET_CONTAS', contas);
      }) 
    },

    salvarConta({ commit }, conta){
      return new Promise(resolve => {
        setTimeout(()=>{
          http.post('conta', conta).then(() => {
            commit('SET_CONTA', conta)
          }, 500)
          resolve(conta)
        })
      })
    },

    excluirConta({ commit }, conta ){ 
      return new Promise(resolve => {
        http.delete('conta', { data: conta }).then(() => {
          commit('DELETE_CONTA', conta)
          resolve(conta)
        }).catch ((e) => {
          console.log(e);
          
        })
      })
    },

    atualizarConta({ commit }, conta ) {
      return new Promise(resolve => {
        http.put('conta', conta).then(()=>{
          commit('UPDATE_CONTA',conta)
        })
        resolve(conta)
      })
    }
  },
  mutations: {
    SET_CONTAS(state, payload){
      state.contas = payload
    },
    SET_CONTA(state, payload){    
      state.contas.push(payload)
    },
    DELETE_CONTA(state, payload){
      state.contas.splice(state.contas.indexOf(payload), 1)
    },
    UPDATE_CONTA(state, payload){
      const index = state.contas.indexOf(payload)
      state.contas[index] = payload;
    }
  },
  modules: {
  }
})
