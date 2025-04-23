<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="header">
        <img src="./img/Logo.png" alt="logo" class="logo">
        <div class="navbar">
                <router-link :to="{ name: 'Index' }" class="button"
                >
                Админ
                </router-link>
                <router-link :to="{ name: 'ProductsOnPage' }" class="button"
                >
                Главная
                </router-link>
                <router-link :to="{ name: 'Cart' }" class="button"
                >
                Корзина
                </router-link>
        </div>
        <div class="banner">
            <img src="./img/01.jpg" alt="logo" class="img">
            <img src="./img/05.jpg" alt="logo" class="img">
            <img src="./img/02.jpg" alt="logo" class="img">
            <img src="./img/03.jpg" alt="logo" class="img">
            <img src="./img/04.jpg" alt="logo" class="img">
            <img src="./img/05.jpg" alt="logo" class="img">
            <img src="./img/06.jpg" alt="logo" class="img">
        </div>
    </div>
</template>

<script>
// import Cart from "./Cart.vue"
export default {
    // components: {
    //     Cart
    // },
    data () {
        return {
            sideNav: false,
        }
    },
    // methods: {
    //     onLogout (){
    //         this.$store.dispatch('logoutUser')
    //         this.$router.push('/')
    //     }
    // },
    computed: {
    //     isUserLoggedIn() {
    //         return this.$store.getters.isUserLoggedIn
    //     },
        links () {
                return [
                { title: 'Cart', url: '/Cart'},
                { title: 'Create', url: '/create'},
                { title: 'ProductList', url: '/ProductList'},
                ]
            } 

        }
    }

</script>

<style>
.navbar{
    margin: 5px auto;
    background: url(img/Background2.jpg);
    min-height: 100%;
    font-family: segoeprint;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    }
    .pointer {
        cursor: pointer;
        color: white;
        text-decoration: none;
    }

    .button{
    display: flex;
    justify-content: center;
	align-items: center;
    width: 150px;
	height: 50px;
	background: linear-gradient(to left, rgba(37, 23, 6, 0.4), rgb(191, 117, 28)) ;
	font-size: 20px;
	box-shadow: 5px 5px 5px rgba(0,0,0,0.4);
	margin: 5px;
	cursor: pointer;
    text-decoration: none;
    }

    .button:active{
	background: rgb(32, 27, 33);
    color: rgb(239, 136, 7);
    }

    .router-link-active{
    border: 0px solid; 
	border-radius: 0px;
    
    }

    a:visited{
        color: white;
    }
    a:active{
        color: white;
    }


    .header{
    display: flex;
	flex-direction: column;
    }

    .logo{
        width: 90px;
        margin: 10px auto;
    }
    
    .banner{
    display: flex;
    justify-content: center;
	flex-direction: row;
    margin: 0;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
    width: 100%;
    }

    .img{
        max-width: 165px;
        margin: 0 1px;
        overflow: hidden;
    }
</style>