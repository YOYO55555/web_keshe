$(function(){
	//创建Vue实例
	var vm = new Vue({
		el:"#app",
		data:{
			nowTime:''
		},
		methods:{
			large(){
				$("#main_img").css("transform","scale(1.1)")
				$("#main_img").css("transition","0.2s")
			},
			small(){
				$("#main_img").css("transform","scale(1.0)")
			},
			time(){
				var time = new Date()
				this.nowTime=time.getFullYear()+"年"+(time.getMonth()+1)+"月"+time.getDate()+"日"
				+" "+time.getHours()+"时"+time.getMinutes()+"分"+time.getSeconds()+"秒"
			},
			//打开评论区
			openComment(){
				$("#comment").css("display","block")
			},
			cancle(){
				$("#textarea").val("")
				$("#comment").css("display","none")
			},
			commit(){
				var text=$("#textarea").val()
				// comm=JSON.parse("["+localStorage.getItem("comment")+"]")
				comm=JSON.parse(localStorage.getItem("comment"))
				comm.push(text)
				localStorage.setItem("comment",JSON.stringify(comm))
				this.comment=JSON.parse(localStorage.getItem("comment"))
				$("#comment").css("display","none")
				alert("评论提交成功！内容可在首页底部看到")
			}
		},
		//钩子函数，初始化vue并替换模板后首先执行
		mounted(){
			var comm=new Array()
			/**
			 *  每次加载页面时判断 locaStorage 是否存在comment，不存在则初始化，存在则不需要执行此操作
			 * 	用于 持久化 数据
			 */
			if(JSON.parse(localStorage.getItem("comment"))===null){
				localStorage.setItem("comment",JSON.stringify(comm))
			}else{
				this.comment=JSON.parse(localStorage.getItem("comment"))
			}
		}
	});
	setInterval(vm.time,1000)
})