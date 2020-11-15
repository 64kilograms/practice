<template>
	<div id="tabBar">
		<slot></slot>
	</div>
</template>

<script>
</script>

	
<style lang="scss">
	
	#tabBar{
		background-color: rgba(0,0,0,0.1);
		display: flex;
		color: #646464;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		box-shadow: 0 -3px 1px rgba(0,0,0,0.1);
		
	}
</style>
