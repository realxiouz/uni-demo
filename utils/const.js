export default {
	BASE_URL: 'http://wcw.51dreaming.com',
	RES_ROOT: 'http://wcwadmin.51dreaming.com',
	validateToken: t => {
		let token = uni.getStorageSync('token')
		let expires = uni.getStorageSync('expires') ? uni.getStorageSync('expires') : 0
		return token && expires && t < +expires
	}
}
