<template>
  <div id="app">
		<router-view></router-view>
		<tabbar>
			<tabbarItem path="/home" activeColor="#42200d"> 
				<img slot="item-icon" src="./img/tabbarItemImg/home.png" alt="">
				<img slot="active-icon" src="./img/tabbarItemImg/activeHome.png" alt="">
				<div slot="item-text">首页</div>
			</tabbarItem>
			<tabbarItem path="/category" activeColor="#42200d">
				<img slot="item-icon" src="./img/tabbarItemImg/category.png" alt="">
				<img slot="active-icon" src="./img/tabbarItemImg/activeCategory.png" alt="">
				<div slot="item-text">分类</div>
			</tabbarItem>
			<tabbarItem path="/shoppingCar" activeColor="#42200d">
				<img slot="item-icon" src="./img/tabbarItemImg/shoppingCar.png" alt="">
				<img slot="active-icon" src="./img/tabbarItemImg/activeShopping.png" alt="">
				<div slot="item-text">购物车</div>
			</tabbarItem>
			<tabbarItem path="/user" activeColor="#42200d">
				<img slot="item-icon" src="./img/tabbarItemImg/user.png" alt="">
				<img slot="active-icon" src="./img/tabbarItemImg/activeUser.png" alt="">
				<div slot="item-text">我的</div>
			</tabbarItem>
		</tabbar>
	</div>
</template>

<script>
import tabbar from './components/tabbar/tabbar.vue'
import tabbarItem from './components/tabbar/tabbarItem.vue'
export default {
  name: 'app',
  components: {
		tabbar,
		tabbarItem
  }
} 
</script>

<style lang="scss">
	@import "./assets/scss/base.scss";

</style>
