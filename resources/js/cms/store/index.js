import Vue from 'vue'
import Vuex from 'vuex'
import cms from './cms'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        cms
    }
})
