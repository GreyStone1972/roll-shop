<!-- eslint-disable vue/multi-word-component-names -->
<template>
<div class="footer">
	<div class="work">Часы работы:</div>
		<p>Ежедневно: 11.00 - 23.00</p>
		<p>Самовывоз. Курьерская доставка</p>
	<div class="contacts">
	<a href="tel:33-04-55"><img src="./img/1.png" height="15px"></a>
	99-99-99 
	
		
		
		<!-- <img src="img/icons8-whatsapp-48.png" height="20px"> -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
					<a class="whatsapp" href="https://api.whatsapp.com/send?phone=99999999999&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." target="_blank">
			<!-- <i class="fa fa-whatsapp"></i> -->
			<img src="./img/icons8-whatsapp-48.png" height="15px" alt="">
</a> 

8 999 999 99 99


		
	</div>
<h5>© GreyStone 2022</h5>
</div>
</template>

<script>
export default {

}
</script>
<style>

.work{
	width: 190px;
	color: rgb(242, 141, 23);
	font-family: Segoe Print;
	font-weight: bold;
	margin: auto;
	text-align: center;
}

.contacts{
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
}

.footer{
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.9);
	border-top: 1px solid #000;
	z-index: 10;
	opacity: 0.9;
	border-top:2px solid rgb(242, 141, 23);
}

.footer p{
	margin: 2px auto;
}


h5{
	margin: 20px auto;
	font-size: 10px;
}

img{
	margin: 0 5px;
}

</style>