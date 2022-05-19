import { GLOBAL, GROUP } from '@/store/types'

import { Module } from 'vuex'
import { RootState } from '@/store/index'

interface GroupState {
  test: boolean,
}


// initial state
const state = () => ({
    test: false,
    
})

// getters
const getters = {

}

// actions
const actions = {

}

// mutations
const mutations = {
    [GROUP.SETTEST](state: GroupState) {
        state.test = !state.test
    },

}


const store: Module<GroupState, RootState> = {
    namespaced: false, // 在types里分组
    state,
    getters,
    actions,
    mutations
}


export { GroupState, store as groupStore }