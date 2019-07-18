<template>
	<!-- <div>register{{baseUrl}}</div> -->
	<view>register{{baseUrl}}</view>
</template>

<script>
	import { BASE_URL } from '@/utils/const.js'
	export default {
		onLoad() {
			uni.setStorageSync('test', 1000)
			
			uni.request({
				url: 'http://wcwadmin.51dreaming.com/api/index/category',
				method: 'GET'
			}).then(res => {
				let {e, data} = res
				console.log(e)
				console.log(data)
			}).catch(e => {
				console.log(e)
			})
		},
		data: _ => ({
			baseUrl: BASE_URL
		}),
		methods: {
			
		}
	}
</script>

<style>
</style>
