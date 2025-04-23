const state = {
  //data: {},
  itemsOnPage: [],
  itemsInCart: [],
  sumInCart: 0,
  //Orders: []
}

const getters = {
  //getData: state => state.data,
  getItemsOnPage: state => state.itemsOnPage,
  getItemsInCart: state => state.itemsInCart,
  getSumInCart: state => state.sumInCart,
  //getOrders: state => state.Orders,
}

const actions = {
   requestData ({ commit }) {


    return fetch(`../components/productsOnPage.items`, {
      method: 'GET'
    }) 
      .then(res => {
        console.log(res)
        return res.json()
      })
      .then(data => {
        console.log(data)
        commit('setData', data)
      })
  },

  addInCart ({ commit }, id) {
    commit('addInCart', id)
  },
  removeFromCart ({ commit }, id) {
    commit('removeFromCart', id)
  },

  addInCartSum ({  commit }, price) {
    commit('addInCartSum', price)
  },
  reduceCartSum ({ commit }, price) {
    commit ('reduceCartSum', price)
  },

  // addItem ({state, commit}, data){
  //   fetch('./itemslist', {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //     })
  //     .then(res => {
  //       console.log(res)
  //     })
  //   },

    clearCartSum ({commit}) {
      commit('clearCartSum')
    },
    clearCart({commit}) {
      commit('clearCart')
    },
    // addOrder ({commit}, order) {
    //   commit('addOrder', order)
    // }
}

const mutations = {
  // setData (state, newData) {
  //   state.data = {...state.data, ...newData}
  //   state.itemsOnPage.push(...Object.keys(newData))
  // },
  addInCart (state, item) {
    state.itemsInCart.push(item)
    console.log(state.itemsInCart)
  }, 
  addInCartSum (state, price) {
    state.sumInCart = (state.sumInCart) + +price
  },
  removeFromCart (state, id) {
    // let index = state.itemsInCart.indexOf(id)
    // if (index !== -1) {
      state.itemsInCart.splice(id, 1)
    // }
  },
  reduceCartSum (state, price) {
    state.sumInCart = (state.sumInCart) - +price
  },
  clearCart(state) {
    state.itemsInCart.splice(0, state.itemsInCart.length)
  },
  clearCartSum (state) {
    state.sumInCart = 0
  },
  // addOrder(state, order) {
  //   state.Orders.push(order) 
  // }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
