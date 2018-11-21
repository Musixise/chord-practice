import api from '@/utils/api'

const state = {
  count: 0,
  keyList: [],
}

const getters = {
  getKeyDown: (state, getters, rootState) => {
    return state.keyList[1];
  },
}
const actions =  {
  setKey ({ commit }, key ) {
    const { data } = key
    const KEY_DOWN = 144;
    const KEY_UP = 128;
    const TYPE = data[0];
    if(TYPE === KEY_DOWN){
      commit('setKeyList', { data }) 
    }
    if(TYPE === KEY_UP){
        commit('removeKeyList', { data })
    }
  }
}

const mutations = {
  addCount(state, { number }) {
    state.count+= 100
  },
  setKeyList(state, { data }) {
    state.keyList.push(data)
  },
  removeKeyList(state, { data }) {
    state.keyList = state.keyList.filter(item => item[1] !== data[1])
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}