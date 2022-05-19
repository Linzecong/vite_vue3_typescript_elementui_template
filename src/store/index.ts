
import { createStore, Store } from 'vuex'
import { InjectionKey } from 'vue'
import { useStore as baseUseStore } from 'vuex'

import { GlobalState, globalStore as global } from './modules/global'
import { GroupState, groupStore as group } from './modules/group'

export interface RootState {

}

export interface AllState extends RootState {
  global: GlobalState
  group: GroupState
}

export const key: InjectionKey<Store<RootState>> = Symbol()

export const store = createStore<RootState>({
  modules: {
    global, group
  }
})

export function useStore<T = AllState>() {
  return baseUseStore<T>(key)
}
