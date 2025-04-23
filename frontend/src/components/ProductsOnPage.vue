<template>
      <div class="list" v-for="(category, index) in categories" :key="index">
        <p class="category_name">{{ category.category_name }}</p>
        <Category :category_id = "category.category_id"/>
      </div>
  </template>
  
  <script>
  // import axios
  import axios from "axios"
  
  import Category from './Category.vue'
  export default {
    name: "ProductsOnPage",
    components:{
      Category
    },
    data() {
      return {
        items: [],
        categories: [],
        //productsByCategory: []
      }
    },
    created() {
        this.getProducts()
        this.getCategories()
        console.log(this.items)
    },


  
    methods: {
      //Get All Products
      async getProducts() {
        try {
          const response = await axios.get("http://localhost:5000/products");
          this.items = response.data
          console.log(this.items)
        } catch (err) {
          console.log(err)
        }
      },
      


    async getCategories() {
        try {
          const response = await axios.get("http://localhost:5000/categories");
          this.categories = response.data
          console.log(this.categories)
        } catch (err) {
          console.log(err)
        }
      },




    
  }
}
  </script>
  
  <style>
  .list{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    background: url(img/Background2.jpg);
    font-family: segoeprint;
  }

.button2{
  display: flex;
  justify-content: center;
	align-items: center;
	font-size: 14px;
	margin: 5px auto;
	cursor: pointer;
}

.button2:active{
  background: rgb(32, 27, 33);
  color: rgb(239, 136, 7);
}


.category{
  display: flex;
  justify-content: space-between;
	flex-direction: row;
  text-align: center;
  font-family: segoeprint;
  font-size: 20px;
  border-bottom: 1px solid white;
}

.category_name{
  background: linear-gradient(to right, rgba(242, 141, 23, 1.0), rgba(242, 141, 23, 0));
  width: 100%;
  margin : 0 auto;
  font-size: 16px;
  font-family: segoeprint;
  text-align: center;
  font-size: 20px;
	color: rgb(32, 27, 33);
	font-weight: bold;
}

.items{
  display: flex;
  justify-content: center;
	flex-direction: row;
}

  </style>