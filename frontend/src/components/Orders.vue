<!-- eslint-disable vue/multi-word-component-names -->
<template>
<p>Поступившие заказы</p>

<table class="table is-striped is-bordered mt-2 is-fullwidth">
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Product</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items"
          :key="index">
          <td>{{ item.order_id }}               
            <!-- <button 
            class="button is-info is-small"
            @click="getOrderById(item.id), updateOrder(item.id)">Done</button> -->
            
            <router-link 
                :to="{ name: 'EditOrder', params: { id: item.order_id } }"
                class="button"
                >Edit</router-link
              >
            <button 
            class="button"
            @click="deleteOrder(item.order_id)">Delete</button></td>
          <td>{{ item.name }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.order }}</td>
          <td>{{ item.summa }} руб.</td>
          <td>{{ item.new }} {{ item.done }}</td>
          </tr>
        </tbody>
</table>
</template>

<script>
 //import { mapActions, mapGetters } from 'vuex'
 import axios from "axios"
export default {
    data () {
        return {
            items: [],
            new: "",
            done: ""
        }
    },

    created() {
        this.getOrders()
    },

    methods: {
        async getOrders() {
        try {
          const response = await axios.get("http://localhost:5000/orders");
          this.items = response.data
        } catch (err) {
          console.log(err)
        }
      },

      async getOrderById() {
        try {
          const response = await axios.get(
            `http://localhost:5000/orders/${this.$route.params.id}`
          );
          this.new = response.data.new
          this.done= response.data.done
        } catch (err) {
          console.log(err)
        }
      },

      // async updateOrder(){
        
      //   this.new = ""
      //   this.done = "Completed"
      //   console.log(this.new)
      //   console.log(this.done)
      //   try {
      //     await axios.put(
      //       `http://localhost:5000/orders/${this.$route.params.id}`,
      //       {
      //         new: this.new,
      //         done: this.done
      //       }
      //     )
      //   } catch (err) {
      //     console.log(err)
      //   }
      // },

      async deleteOrder(order_id) {
        try {
          await axios.delete(`http://localhost:5000/orders/${order_id}`);
          this.getOrders()
        } catch (err) {
          console.log(err)
        }
      }
    

}
}


</script>
