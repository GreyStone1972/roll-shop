<template>
    <div>
      <div class="field">
        <label class="label">Product Name</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Product Name"
            v-model="productName"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Weight</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Weight"
            v-model="productWeight"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Product Description</label>
        <div class="control"></div>
      <input
            class="input"
            type="text"
            placeholder="Product Description"
            v-model="productDescription"
          />
        </div>
  
      <div class="field">
        <label class="label">Price</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Price"
            v-model="productPrice"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Category</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Category"
            v-model="productCategory"
          />
        </div>
      </div>
  
      <div class="control">
        <button class="button" @click="saveProduct">SAVE</button>
      </div>
    </div>
  </template>
  
  <script>
  // import axios
  import axios from "axios"
  
  export default {
    name: "AddProduct",
    data() {
      return {
        productName: "",
        productWeight: "",
        productPrice: "",
        productDescription: "",
        productCategory: "",
        counter: 0
      }
    },
    methods: {
      // Create New product
      async saveProduct() {
        try {
          await axios.post("http://localhost:5000/products", {
            product_name: this.productName,
            product_weight: this.productWeight,
            product_price: this.productPrice,
            product_description: this.productDescription,
            category_id: this.productCategory,
            counter: this.counter
          })
          this.productName = ""
          this.productPrice = ""
          this.productDescription = ""
          this.counter = 0
          this.$router.push("/")
        } catch (err) {
          console.log(err);
        }
      }
    }
  }
  </script>
  
  <style>
  </style>