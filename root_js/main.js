/*
*	Set fullpage.js 
*/
$(function(){
	$('#dowebok').fullpage({
		sectionsColor: ['', '#4BBFC3', '#7BAABE', '#1bbc9b'],
		'navigation': true,
		fixedElements:'.btn_github'
	
	});
});


/*
*	Set ios.parallax 
*/
$(document).ready(function() {
  $('.section_body').iosParallax({
	movementFactor: 120
  });
});

/*
*	Vue.js
*/
	new Vue({
		el:'#dowebok',
		data:{
			showHead:false,
			showLeft:true,
			showCha:true,
			showBtnIdx:true
		},
		methods:{
			clickIdx:function (argument) {
				this.showHead = !this.showHead;
				this.showLeft = !this.showLeft;
				this.showCha = !this.showCha;
				this.showBtnIdx = !this.showBtnIdx;
			}
		}

	})

window.onload = function () {



}