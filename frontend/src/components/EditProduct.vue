<template>
    <div>
      <div class="field">
        <label class="label">Product Name</label>
        <div>
          <input
            class="input"
            type="text"
            placeholder="Product Name"
            v-model="productName"
          />
        </div>
      </div>
      <div>
        <label class="label">Description</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Description"
            v-model="productDescription"
          />
        </div>
      </div>
      <div>
        <label class="label">Price</label>
        <div>
          <input
            class="input"
            type="text"
            placeholder="Price"
            v-model="productPrice"
          />
        </div>
      </div>
      <div>
        <button class="button" @click="updateProduct">UPDATE</button>
      </div>
    </div>
  </template>
  
  <script>
  // import axios
  import axios from "axios"
  
  export default {
    name: "EditProduct",
    data() {
      return {
        productName: "",
        productPrice: "",
        productDescription: "",
      }
    },
    created: function () {
      this.getProductById()
    },
    methods: {
      // Get Product By Id
      async getProductById() {
        try {
          const response = await axios.get(
            `http://localhost:5000/products/${this.$route.params.id}`
          );
          this.productName = response.data.product_name
          this.productPrice = response.data.product_price
          this.productDescription = response.data.product_description
        } catch (err) {
          console.log(err)
        }
      },
  
      // Update product
      async updateProduct() {
        try {
          await axios.put(
            `http://localhost:5000/products/${this.$route.params.id}`,
            {
              product_name: this.productName,
              product_price: this.productPrice,
              product_description: this.productDescription
            }
          );
          this.productName = ""
          this.productPrice = ""
          this.productDescription = ""
          this.$router.push("/")
        } catch (err) {
          console.log(err)
        }
      }
    }
  }
  </script>
  
  <style>
  </style>