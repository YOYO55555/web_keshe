$(function(){
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
			valusername(){
				if($("#username").val().length===0){
					this.username="账号不能为空！"
				}else{
					this.username=""
				}
			},
			valpassword(){
				if($("#password").val().length===0){
					this.password="密码不能为空！"
				}else{
					this.password=""
				}
			},
			valEmail(){
				if($("#email").val().length===0){
					this.email="邮箱不能为空！"
				}else{
					this.email=""
				}
			},
			Login(){
				//将对象数组解析为json格式
				var user=JSON.parse(localStorage.getItem("userMsg"))
				var username=$("#username").val()
				var password=$("#password").val()
				var email=$("#email").val()
				var flag=0
				console.log(user)
				for(var i=0;i<user.length;i++){
					if(user[i].username===username&&user[i].password===password&&user[i].email===email){
						flag=1
						alert("登录成功")
						window.open("index.html","_self")
						break;
					}
				}
				if(flag===0){
					alert("账号未注册！")
				}
			},
			Register(){
				window.open("register.html","_self")
			},
			Reset(){
				$("#username").val("")
				$("#password").val("")
				$("#email").val("")
			}
		}
	});
})