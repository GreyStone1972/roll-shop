<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>

         <table class="item" v-for="(item, index) in productsByCategory" :key="index">
            <tbody>
                <tr>
                    <td class="name">{{ item.product_name }}</td>
                    <td class="name2">Вес: <span style="color: white;">{{ item.product_weight }}</span> г</td>
                    <td class="name2">Цена: <span style="color: white;">{{ item.product_price }}</span> руб.</td>
                    <td><btn class="buy-button" @click="onBuyClick(item.product_id); onBuyClick2(item.product_id);">Купить</btn></td>
                </tr>
                <tr>
                    <td class="name2">Состав: <span style="color: white">{{ item.product_description }}</span></td>
                </tr>
            </tbody>
            </table>

</template>

<script>
  import axios from "axios"
  import { mapActions, mapGetters } from 'vuex'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Category",
    props: ['category_id'],
    data() {
      return {
        items: [],
        productsByCategory: []
      }
    },
    created() {
        this.getProducts()
        console.log(this.items)
    },
    computed: {
    ...mapGetters('goods', [
      'getData',
      'getItemsInCart',
      'getSumInCart',
    ])
  },
    methods: {
        async getProducts() {
        try {
          const response = await axios.get("http://localhost:5000/products");
          this.items = response.data
          console.log(this.items)
          console.log(this.category_id)
          let arr = this.items.filter((item) => {
             return item.category_id == this.category_id
            })
            
            console.log(arr)
            this.productsByCategory = arr
            

        } catch (err) {
          console.log(err)
        }
      },

      ...mapActions('goods', [
      'addInCart',
      'addInCartSum',
      'addInCartCounter'
    ]),

    showProductsByCategory(category_id){
            console.log(category_id)
            console.log(this.items)
            this.productsByCategory = this.items.filter((item) => {
             item.category_id == category_id
            })
            console.log(this.productsByCategory)
    
    },
    onBuyClick (id) {
      let currentItem = this.items.find(item => item.product_id == id)
      console.log(currentItem)
      
     // id = id.toString()
      console.log(id)
      console.log(this.getItemsInCart)
      
      let itemInCart = this.getItemsInCart.find(item => item.product_name == currentItem.product_name)
    
      if(!itemInCart){
        this.addInCart(currentItem)
        currentItem.counter++
      
      } else if (itemInCart){
        
        itemInCart.counter++
      }
      console.log(currentItem.counter)
    },
    onBuyClick2 (id) {
      let currentItem = this.items.find(item => item.product_id == id)
      this.addInCartSum(currentItem.product_price)
    }
}
}


</script>

<style>
template{
    background: url(img/Background2.jpg);
    display: flex;
    flex-direction: row;
    justify-content: center;
}
  .list{
    width: 90%;
    margin: 0 auto;
    justify-content: space-between;
    border-left: 1px solid white;
    border-right: 1px solid white;
    font-family: segoeprint;
  }
  
  .item {
    /* display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between; */

	margin: 0px 3px;
    padding: 2px;
    border-bottom: 1px dashed white;
    font-size: 16px;
    position: relative;
    color: white;
}


.name{
  min-height: 30px;
  min-width: 200px;
	font-size: 22px;
	color: rgb(242, 141, 23);
	font-weight: bold;
	font-family: segoeprint;
  text-align: left;
  white-space: pre-wrap;
}
.name2{
  color: rgb(242, 141, 23);
  margin: 0;
}

.buy-button{
	text-align: center;
	width: 90px;
	height: 30px;
	background: linear-gradient(to left, rgba(37, 23, 6, 0.4), rgb(191, 117, 28)) ;
	font-size: 14px;
	/* border: 1px solid; */
	/* border-radius: 5px; */
	box-shadow: 5px 5px 5px rgba(0,0,0,0.4);
	margin: 2px;
	cursor: pointer;

  position: absolute;

  right: 2%;
}
.buy-button:active{
	background: rgb(32, 27, 33);
  color: rgb(239, 136, 7);
}

td{
    width: 20%;
}

td:first-child{
    width: 60%;
}

td:nth-child(2){
    width: 10%;
}

@media screen and (max-width: 900px){
    td:first-child{
    width: 40%;
    }
}

@media screen and (max-width: 710px){
    .item{
    font-size: 12px;
    }
}

@media screen and (max-width: 600px){
    .item{
    font-size: 10px;
    }
}

/* .table {

width: 100%;

margin-bottom: 20px;

border: 1px solid #dddddd;

border-collapse: collapse; 

}
.table th {
font-weight: bold;
padding: 5px;
background: #000;
border: 1px solid #dddddd;
}

.table td {
border: 1px solid #dddddd;
padding: 5px;
} */

</style>