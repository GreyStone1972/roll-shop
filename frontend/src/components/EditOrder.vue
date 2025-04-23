<template>
        <div class="field">
          <label class="label">Name: {{ name }}</label>
          <p></p>
          <label class="label">Phone: {{ phone }}</label>
          <p></p>
          <label class="label">Order:  {{ order }}</label>

          <label class="label">Summa: {{ summa }}</label>
           <p></p>
        </div>
      <div class="control">
        <button class="button" @click="updateOrder">UPDATE</button>
      </div>

  </template>
  
  <script>
  // import axios
  import axios from "axios"
  
  export default {
    name: "EditOrder",
    data() {
      return {
        name: "",
        phone: "",
        order: "",
        summa: Number
      }
    },
    created: function () {
      this.getOrderById()
    },
    methods: {
      // Get Product By Id
      async getOrderById() {
        try {
          const response = await axios.get(
            `http://localhost:5000/orders/${this.$route.params.id}`
          );
          this.summa = response.data.summa
          this.order = response.data.order
          this.name = response.data.name
          this.phone = response.data.phone
        } catch (err) {
          console.log(err)
        }
      },
  
      // Update product
      async updateOrder() {
        try {
          await axios.put(
            `http://localhost:5000/orders/${this.$route.params.id}`,
            {
              new: "",
              done: "Done"
            }
          );
          this.$router.push("/Orders")
        } catch (err) {
          console.log(err)
        }
      }
    }
  }
  </script>
  
  <style>
  </style>