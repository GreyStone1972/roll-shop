<template>
        <router-link :to="{ name: 'Orders' }" class="button"
        >Заказы</router-link
      >
    <div>

      <router-link :to="{ name: 'Create' }" class="button"
        >Добавить новый товар</router-link
      >
      <table class="table">
        <thead>
          <tr>
            <th>Название товара</th>
            <th>Вес</th>
            <th>Цена</th>
            <th>Описание</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.product_id">
            <td>{{ item.product_name }}</td>
            <td>{{ item.product_weight }}</td>
            <td>{{ item.product_price }}</td>
            <td>{{ item.product_description }}</td>
            <td class="has-text-centered">
              <router-link 
                :to="{ name: 'Edit', params: { id: item.product_id } }"
                class="button"
                >Редактировать</router-link
              >
              <a
                class="button"
                @click="deleteProduct(item.product_id)"
                >Удалить</a>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  </template>
  
  <script>
  // import axios
  import axios from "axios"
  
  export default {
    name: "ProductList",
    data() {
      return {
        items: [],
      };
    },
  
    created() {
      this.getProducts()
    },
  
    methods: {
      // Get All Products
      async getProducts() {
        try {
          const response = await axios.get("http://localhost:5000/products");
          this.items = response.data
        } catch (err) {
          console.log(err)
        }
      },
  
      // Delete Product
      async deleteProduct(id) {
        try {
          await axios.delete(`http://localhost:5000/products/${id}`);
          this.getProducts()
        } catch (err) {
          console.log(err)
        }
      }
    }
  }
  </script>
  
  <style>
.table {
width: 100%;
margin-bottom: 10px;
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
}

  </style>