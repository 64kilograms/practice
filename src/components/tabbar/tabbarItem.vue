<template>
	<div class="tabBar-item" @click="tabbarEvent">
		<div v-if="!isActive">
			<slot name="item-icon"></slot>
		</div>
		<div v-else>
			<slot name="active-icon"></slot>
		</div>
		<div :style="activeStyle">
			<slot  name="item-text"></slot>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
			}
		},
		props: {
			path: String,
			activeColor: {
				type: String,
				default: '#42200d'
			}
		},
		computed:{
			isActive() {
				return this.$route.path.indexOf(this.path) !== -1
			},
			activeStyle() {
				return this.isActive? {color: this.activeColor} : {}
				}
		},
		methods: {
			tabbarEvent(){
				if(this.$route.path != this.path){
					this.$router.replace(this.path)
				}
			}
		}
	}
</script>

<style lang="scss">
	.tabBar-item{
		flex: 1;
		text-align: center;
		height: 49px;
		
	}
	img{
		width: 20px;
		height: 20px;
		margin: 0;
		padding: 0;
		vertical-align: middle;
		margin-top: 2px;
		margin-bottom: 2px;
	} 

</style>
