$(function(){
	var userList=new Array()
	// 创建Vue实例
	var vm = new Vue({
		//获得根节点
		el:"#app",
		//数据
		data:{
			username:'',
			password:'',
			email:'',
		},
		//方法
		methods:{
			//用户名验证
			valusername(){
				if($("#username").val().length===0){
					this.username="账号不能为空！"
				}else{
					var str=/[A-Z0-9a-z]{4,}/
					var username=$("#username").val()
					// console.log(username.match(str))
					if(username.match(str)==null){
						this.username="请输入正确格式"
					}else{
						this.username=""
					}
				}
			},
			//密码验证
			valpassword(){
				if($("#password").val().length===0){
					this.password="密码不能为空！"
				}else{
					var str=/[A-Z0-9a-z]{4,}/
					var password=$("#password").val()
					if(password.match(str)==null){
						this.password="请输入正确格式"
					}else{
						this.password=""
					}
				}
			},
			//邮箱验证
			valEmail(){
				if($("#email").val().length===0){
					this.email="邮箱不能为空！"
				}else{
					var str=/[1-9]\d{7,10}@qq\.com/
					var email=$("#email").val()
					if(email.match(str)==null){
						this.email="请输入正确格式"
					}else{
						this.email=""
					}	
				}
			},
			//点击注册按钮
			Register(){
				var username=$("#username").val()
				var password=$("#password").val()
				var email=$("#email").val()
				//注册成功 将信息保存到 localstorage 用于验证此账号是否注册
				if((this.email===""&&this.username===""&&this.password==="")&&(username!==""&&password!==""&&email!=="")){
					userList.push({
						"username":username,
						"password":password,
						"email":email
					})
					//使用JSON.stringify将对象数组转化为字符串，用于保存在localStorage中
					localStorage.setItem("userMsg",JSON.stringify(userList))
					alert("注册成功")
					window.open("login.html","_self")
				}else{
					//若输入框验证不通过，则不允许注册
					alert("请检查输入内容是否正确");
				}
			},
			//重置
			Reset(){
				$("#username").val("")
				$("#password").val("")
				$("#email").val("")
			}
		}
	});
})