	(function($) {
		var box = document.getElementById("bm_content");
		
		var l1 = document.getElementById("tb1");
		var l2 = document.getElementById("tb2");
		var state = {
			//allTime: timeFormat('yyyy/mm/dd', new Date().getTime())
			allTime: '2021-01-01',


		}
		var totalPage = 0;
		var page = {
			pageNo: 1,
			pageSize: 50
		};
		var list = []
		setTimeout(()=>{
			getList();	
		},1500)
		
		setTimeout(() => {
			autoScroll();
		}, 2000)

		function autoScroll() {
			var product = RenderList();
			console.log(box)
			l1.innerHTML = product;
			if (l1.offsetHeight > box.offsetHeight) {
				l2.innerHTML = l1.innerHTML; //克隆list1的数据，使得list2和list1的数据一样
				scrollMove = setInterval(scrollup, 35); //数值越大，滚动速度越慢
				box.onmouseover = function() {
					 clearInterval(scrollMove)
				}
			}
		}

		function scrollup() {
			
			//滚动条距离顶部的值恰好等于list1的高度时，达到滚动临界点，此时将让scrollTop=0,让list1回到初始位置，实现无缝滚动
			if (box.scrollTop >= l1.offsetHeight) {
				box.scrollTop = 0;
				if (page.pageNo >= totalPage) return
				page.pageNo++;
				getList();
			} else {
				box.scrollTop++;

			}
		}
		//鼠标离开时，滚动继续
		box.onmouseout = function() {
			scrollMove = setInterval(scrollup, 30);
		}

		function RenderList() {
			var str = '';
			if (list.length) {
				for (var i = 0; i < list.length; i++) {
					str += '<div class="ellipsis">';
					str += `<span class="center name" style="margin-left: 10px;">${list[i].name}</span>`;
					str += '</div>';
				}
			} else {
				str = `<div class="no_msg" >暂无数据</div>`
			}
			return str;
		}

		function getList() {
			let that = this;
			$.ajax({
				//url: `https://yd.ymyimi.cn:9053/fs-call-service/app/fsCall/childPickUp/getToDayPickUpBySquad`,
				url: 'http://192.168.0.162:8053/fs-call-manager/back/fsCall/student/third-list',
				//url:`http://192.168.0.162:8053/fs-call-service/app/fsCall/childPickUp/getToDayPickUpBySquad`,
				type: 'POST',
				headers: {
					'Content-type': 'application/json',
					authorization: '558433A414A84F33974EEBA0E38EAA08',
					sys_sign: 'THIRD',
				},
				data: JSON.stringify({
					page,
					data: {
						startCreateTime: state.allTime,

					},
				}),
				success(res) {
					//alert(res.result.data[0].name)
					if (res.status === 1 && res.result.data && res.result.data.length) {
						totalPage = Math.ceil(res.result.count / res.result.pageSize)
						list=[...list,...res.result.data];
					} else {
						that.stop(`
		                        <div class="no_msg" >暂无数据</div>
		                    `);
					}
				},
				error() {
					console.log("网络连接失败")
				},
				
			});
			$(".log_bg_index").hide()

		}
		$("#handlerSearch").on('click', () => {
			let date = $('#searchDate').val()
			let time = $('#searchTime').val()
			$(".log_bg_index").show()
			$(".ellipsis").remove()
			$(".no_msg").remove()
			state.allTime = `${date} ${time}`
			list=[]
			setTimeout(()=>{
				getList();	
			},1500)
			
			setTimeout(() => {
				autoScroll()
			}, 2000)

			//$('#searchTime').val('')


			console.log(state.allTime)
		})

		function timeFormat(type, date) {
			var date = new Date(date)
			var o = {
				'm+': date.getMonth() + 1, //月份
				'd+': date.getDate(), //日
				'h+': date.getHours(), //小时
				'i+': date.getMinutes(), //分
				's+': date.getSeconds(), //秒
			}
			if (/(y+)/.test(type)) {
				type = type.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
			}
			for (var k in o) {
				if (new RegExp('(' + k + ')').test(type)) {
					type = type.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k])
						.length))
				}
			}
			return type
		}

	})(jQuery)