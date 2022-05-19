import { GLOBAL } from '@/store/types'

import { Module } from 'vuex'
import { RootState } from '@/store/index'

interface GlobalState {
    username: string

}


// initial state
const state = () => ({
    username: "",

})

// getters
const getters = {

}

// actions
const actions = {

}

// mutations
const mutations = {
    [GLOBAL.SETCURRENTUSER](state: GlobalState, user: string) {
        state.username = user
    },
}


const store: Module<GlobalState, RootState> = {
    namespaced: false, // 在types里分组
    state,
    getters,
    actions,
    mutations
}


export { GlobalState, store as globalStore }
