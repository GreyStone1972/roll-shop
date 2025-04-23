<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
#app{
  margin: auto;
    color: white;
    background: url(components/img/Background2.jpg);
    min-height: 100%;
    height: 100%;
}

@font-face {
font-family: 'segoeprint'; 
src: local(segoeprint), url(fonts/segoeprint.ttf);
font-style: normal; 
font-weight: normal; 
} 

.button{
	display: flex;
  justify-content: center;
	align-items: center;
	
	height: 30px;
	background: linear-gradient(to left, rgba(37, 23, 6, 0.4), rgb(191, 117, 28)) ;
	font-size: 14px;
	/* border: 1px solid; */
	/* border-radius: 5px; */
	box-shadow: 5px 5px 5px rgba(0,0,0,0.4);
	margin: 5px;
	float: right;
	cursor: pointer;
}

.button:active{
  background: rgb(32, 27, 33);
  color: rgb(239, 136, 7);
}
/* import style bulma */
/* @import "~bulma/css/bulma.css"; */
</style>