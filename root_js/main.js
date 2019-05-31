

$(document).ready(function() {
  
	/*
	*	Set ios.parallax 
	*/
	$('#section_1_body').iosParallax({
	movementFactor: 300
	});



	/*
	*	Stars move handele
	*/

	var starSun = document.getElementById('star_sun');
	var starEarth = document.getElementById('star_earth');
	var runTimes = 0
	var x0 = 0;
	var y0 = 0;

	function starsMove(oDiv,lineA,lineB)
	{

		//  alert(oDiv.offsetLeft);
		// alert(oDiv.offsetTop);

		if(runTimes == 0)
		{
			//static？
			x0 = oDiv.offsetLeft;
			y0 = oDiv.offsetTop;
			runTimes++;
		}
		// xn yn 为变动的轨迹
		//oDiv.offsetLeft 为数值 style.left为对象
		oDiv.style.left = oDiv.offsetLeft + 1 + 'px';
		xn = oDiv.offsetLeft + 1;
		//差量计算
		yn = lineB * Math.sqrt(1 - (Math.pow(Math.abs(xn - (lineA + x0)),2) / Math.pow(lineA,2) )  ) + y0;

		 oDiv.style.top = yn + 'px';
		//  alert(x0);
		 //alert(yn);
		//oDiv.style.top =  oDiv.offsetTop + 1 + 'px';

	}
	//setInterval 3 4 ...为调用函数的参数
	setInterval(starsMove,30,starEarth,400,234);



});

/*
*	Handle vue
*/
var vueMain =  new Vue({
		el:'#fullpage',
		data:{
			show:false
		},
		methods:{
			/*处理点击 Index 之外的画面，关闭索引选项*/
			showTriangle(){
				if(!this.show)
				{
					this.show  = !this.show;
				}
			}
		}

	});


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
	sectionsColor : ['white', '#E1EEF6', '#222831', '#222831'],
	paddingTop: '',
	paddingTop: '',	//3em
	paddingBottom: '', //10px
	// fixedElements: '.navbar',
	fixedElements:'.navbar',

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
			vueMain.showTriangle();
		}
	},
	afterRender: function(){},
	afterResize: function(width, height){},
	afterResponsive: function(isResponsive){},
	afterSlideLoad: function(section, origin, destination, direction){},
	onSlideLeave: function(section, origin, destination, direction){}
});

