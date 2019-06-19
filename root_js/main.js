$(document).ready(function () {

	/*
	 *	Set ios.parallax 
	 */
	$('#section_1_body').iosParallax({
		movementFactor: 300
	});



	/*
	 *	Stars move handele
	 */

	var starMars = document.getElementById('star_mars');
	var starEarth = document.getElementById('star_earth');
	var earth_x0 = starEarth.offsetLeft;
	var earth_y0 = starEarth.offsetTop;
	var mars_x0 = starMars.offsetLeft;
	var mars_y0 = starMars.offsetTop;
	var earth_heading = true;
	var mars_heading = true;

	//orbit move function
	function orbitMove(oDiv, lineA, lineB,x0,y0,heading) {
		//x0 y0为初始的点
		//xn yn为实时运动的点
		var xn = 0;
		var yn = 0;
		//运动点的方向 0初始 1向左 2向右
		//oDiv.offsetLeft 为数值 style.left为对象
		if(heading)
		{
			heading = ((oDiv.offsetLeft - x0) <= (lineA * 2)) ? true : false;
		}
		else
		{
			heading = ((oDiv.offsetLeft - x0) == 0) ? true : false;
		}
		
		if(heading)
		{
			oDiv.style.left = oDiv.offsetLeft + 2 + 'px';
			xn = oDiv.offsetLeft;
			//加7为微调，更加贴近轨道线
			yn = y0 - lineB * Math.sqrt(1 - (Math.pow(Math.abs(xn - (lineA + x0)), 2) / Math.pow(lineA, 2))) + 7;

		}
		else
		{
			oDiv.style.left = oDiv.offsetLeft - 2 + 'px';
			xn = oDiv.offsetLeft;
			yn = lineB * Math.sqrt(1 - (Math.pow(Math.abs(xn - (lineA + x0)), 2) / Math.pow(lineA, 2))) + y0 + 7;
		}
		oDiv.style.top = yn + 'px';
	}
	//setInterval 3 4 ...为调用函数的参数
	//earth move
	var timer1 = setInterval(orbitMove, 30, starEarth, 400, 234,earth_x0,earth_y0,earth_heading);
	// setInterval(orbitMove, 30, starEarth, 600, 350,mars_x0,mars_y0,mars_heading);

});

/*
 *	Handle vue
 */
var vueMain = new Vue({
	el: '#fullpage',
	data: {
		show: false
	},
	methods: {
		/*处理点击 Index 之外的画面，关闭索引选项*/
		showTriangle() {
			if (!this.show) {
				this.show = !this.show;
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
	anchors: ['', ''],
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
	sectionsColor: ['white', '#E1EEF6', '#222831', '#222831'],
	paddingTop: '',
	paddingTop: '', //3em
	paddingBottom: '', //10px
	// fixedElements: '.navbar',
	fixedElements: '.navbar',

	responsiveWidth: 0,
	responsiveHeight: 0,
	responsiveSlides: false,
	parallax: false,
	parallaxOptions: {
		type: 'reveal',
		percentage: 62,
		property: 'translate'
	},

	//自定义选择器
	sectionSelector: '.section',
	slideSelector: '.slide',
	lazyLoading: true,

	//事件
	onLeave: function (origin, destination, direction) {},
	afterLoad: function (origin, destination, direction) {
		if (origin.index == 1) {
			vueMain.showTriangle();
		}
	},
	afterRender: function () {},
	afterResize: function (width, height) {},
	afterResponsive: function (isResponsive) {},
	afterSlideLoad: function (section, origin, destination, direction) {},
	onSlideLeave: function (section, origin, destination, direction) {}
});