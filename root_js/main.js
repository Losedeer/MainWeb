
window.onload = function () {

/*
*	Set fullpage.js 
*/
var myFullpage = new fullpage('#fullpage', {
	//导航
	menu: '#menu',
	lockAnchors: false,
	anchors:['', ''],
	navigation: false,
	navigationPosition: 'right',
	navigationTooltips: ['firstSlide', 'secondSlide'],
	showActiveTooltip: false,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',

	//滚动
	css3: true,
	scrollingSpeed: 700,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 1000,
	scrollBar: false,
	easing: 'easeInOutCubic',
	easingcss3: 'ease',
	loopBottom: false,
	loopTop: false,
	loopHorizontal: true,
	continuousVertical: false,
	continuousHorizontal: false,
	scrollHorizontally: false,
	interlockedSlides: false,
	dragAndMove: false,
	offsetSections: false,
	resetSliders: false,
	fadingEffect: false,
	normalScrollElements: ' ',
	scrollOverflow: false,
	scrollOverflowReset: false,
	scrollOverflowOptions: null,
	touchSensitivity: 15,
	normalScrollElementTouchThreshold: 5,
	bigSectionsDestination: null,

	//可访问
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	//设计
	controlArrows: true,
	verticalCentered: true,
	sectionsColor : ['white', '#00adb5', '#393e46', '#222831'],
	paddingTop: '',
	paddingTop: '',	//3em
	paddingBottom: '', //10px
	fixedElements: '.navbar',
	responsiveWidth: 0,
	responsiveHeight: 0,
	responsiveSlides: false,
	parallax: false,
	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

	//自定义选择器
	sectionSelector: '.section',
	slideSelector: '.slide',
	lazyLoading: true,

	//事件
	onLeave: function(origin, destination, direction){},
	afterLoad: function(origin, destination, direction){
		if(origin.index == 1)
		{
			alert("dd");
			vueMain.showTriangle();
		}
	},
	afterRender: function(){},
	afterResize: function(width, height){},
	afterResponsive: function(isResponsive){},
	afterSlideLoad: function(section, origin, destination, direction){},
	onSlideLeave: function(section, origin, destination, direction){}
});


	/*
	*	Set ios.parallax 
	*/
	$(document).ready(function() {
	  $('#section_1_body').iosParallax({
		movementFactor: 500
	  });
	});

}

var vueMain =  new Vue({
		el:'#fullpage',
		data:{
			show:false
		},
		methods:{
			/*处理点击 Index 之外的画面，关闭索引选项*/
			showTriangle(){
				this.show  = !this.show;
			}
		}

	});