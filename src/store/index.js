import { createStore } from 'vuex'

export default createStore({
  state: {
    options: {},
    htmlData: {},
  },
  mutations: {
    updateOptions(state, item) {
      state.options = { ...state.options, ...item }
    },
    updateHtmlData(state, htmlData) {
      state.htmlData = htmlData
    },
  },
  actions: {
    updateOptionsAction(context, newData) {
      context.commit('updateOptions', newData)
    },
    updateHtmlAction(context, newData) {
      context.commit('updateHtmlData', newData)
    },
  },
})
