<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="wrapper">
    <!-- <button class="button is-success mt-5 button" v-on:click="onCartClick">Корзина</button> -->
    <!-- <div  v-if="opened"> -->
      <div v-if="!getItemsInCart.length">
        Список пуст
      </div>
      <div class="item-in-cart" v-for="(item, index) in getItemsInCart" :key="index">
       Товар: {{ getItemsInCart[index].product_name }}, цена: {{ getItemsInCart[index].product_price }} руб., 
       количество: {{ getItemsInCart[index].counter }} шт., 
       стоимость: {{ getItemsInCart[index].product_price * getItemsInCart[index].counter }}
       <btn class="button is-info is-small button2" @click="dec(index)">-</btn>
       <btn class="button is-info is-small button2" @click="inc(index)">+</btn>
       
       <btn class="button is-info is-small" @click="clearProduct(index)">Удалить</btn>
      </div>
      
      <div>
        Общая сумма: {{ getSumInCart }} руб.
      </div>
      <btn class="button" @click="clearCart">Очистить корзину</btn>
      <FormOrder /> 
    </div>
  </template>
  
  <script>
  import FormOrder from './FormOrder.vue'
  import { mapActions, mapGetters } from 'vuex'

  export default {

    // eslint-disable-next-line vue/multi-word-component-names
    name: "Cart",
    components: {
    FormOrder
  },
    data() {
        return {
          items: [],
        }
    },
    props: {
        id: Number
    },
    computed: {
    ...mapGetters('goods', [
      'getData',
      'getItemsInCart',
      'getSumInCart',
    ]),
  },
  methods: {
    ...mapActions('goods', [
      'addInCartSum',
      'addInCartCounter',
      'removeFromCart',
      'reduceCartSum',
      'clearCart',
      'clearCartSum'
      
    ]),

    inc (id) {
      let currentItem = this.getItemsInCart[id]
      currentItem.counter++

      this.addInCartSum(currentItem.product_price)
    },
    dec (id) {
      let currentItem = this.getItemsInCart[id]
      let arr = this.getItemsInCart
      if(currentItem.counter > 1){
        --currentItem.counter
        this.reduceCartSum(currentItem.product_price)
      } else if(currentItem.counter === 1){
        --currentItem.counter
        console.log(id)
        console.log(currentItem.counter)
        this.removeFromCart (id)
        this.reduceCartSum(currentItem.product_price)
      }else if(arr.length == 0){
        this.clearCartSum()
      }
      
      {
        return
      }
    },

    clearProduct(id){
      let currentItem = this.getItemsInCart[id]
      this.removeFromCart(id)
      this.reduceCartSum(currentItem.product_price * currentItem.counter)
    },

    clearCart () {
      let arr = this.getItemsInCart
      for(let i = arr.length - 1; i >= 0; i--){
        let id = arr[i]
        this.removeFromCart(id)
      }
      this.clearCartSum()
    }
  }
}
  </script>
  
  <style>
  .list {
    background: #000;
  }
  .wrapper{
    display: flex;
    flex-direction: column;
    justify-content: top;
    width: 100%;
    height: 100%;
    margin: 10px;
    background: url(img/Background2.jpg);
  
    font-family: segoeprint;
  }
  .button2{
    margin: 10px;
    width: 30px;

  }



  .item-in-cart{
    width: 80%;
    height: 50px;
    margin: 2px auto;
  }
  
  </style>
  