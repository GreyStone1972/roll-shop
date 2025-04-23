<template>
    <btn class="button" @click="getVisible">Заказать</btn>
    <div v-if="visible">
        <input type="text" placeholder="Ваше имя" v-model="name"/>
        <input type="text" placeholder="Ваш телефон" v-model="phone"/>
        <div>
            Ваш заказ: {{ name }}, тел.: {{ phone }}, {{ order }} Итого к оплате: {{ summa }} руб.
        </div>
        <btn class="button" @click="createOrder">Оплатить</btn>
    </div>
</template>      

<script>
import { mapActions, mapGetters } from 'vuex'
import axios from "axios"
export default {
    name: "FormOrder",
    data (){
        return {
            name: "",
            phone: "",
            order: "",
            summa: 0,
            visible: false,
            new: "New",
            done: ""
        }
    },

    computed: {
        ...mapGetters('goods', [
            'getData',
            'getItemsInCart',
            'getSumInCart',
        ]),
    },
    methods:{

        ...mapActions ('goods', [
            'addOrder',
            'clearCart',
            'clearCartSum'
        ]),



        getVisible(){
            this.visible = !this.visible
                if(!this.order.length){
                    this.getItemsInCart.forEach((item) => {
                    this.order = this.order + String(" " + item.product_name + " - " + item.counter + " шт.,")
                    this.summa = this.getSumInCart
                    })
                }
        },

        //Create new Order
        async createOrder () {
            console.log(this.name)
            console.log(this.phone)
            console.log(this.summa)
            try {
                await axios.post("http://localhost:5000/orders", {
                    name: this.name,
                    phone: this.phone,
                    order: String(this.order),
                    summa: this.summa,
                    new: this.new,
                    done: this.done
                })

                let message = String( this.name + "  " + this.phone + "  " + this.order + "  " + this.summa + " руб.")
                console.log(message)


                this.name = ""
                this.phone = ""
                this.summa = 0
                this.$router.push("/")
                } catch (err) {
                console.log(err);
                }
                this.clearCart()
                this.clearCartSum()

                
                //let link = `https://web.whatsapp.com/send?phone="7962215766"&text="proverka svyazi"`
            
        }   

        // pay(){
        //     let newOrder = String(this.order + this.getSumInCart + this.name + this.phone)
        //     this.addOrder(newOrder)
        //     console.log(newOrder)
        // }

        }
    }

</script>

<style>

</style>