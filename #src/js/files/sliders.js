//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


function sliders_bild_callback(params) { }

let slider_about = new Swiper('.slider', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 3,
	spaceBetween: 30,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	//Dotts
	pagination: {
		el: '.swiper-pagination',
		type: "fraction",
		formatFractionCurrent: addZero,
		formatFractionTotal: addZero
	},
	//Arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1120: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
	
	on: {
		lazyImageReady: function () {
			ibg();
		},
	},
	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
		dragSize: 40,
	},
});
function addZero(num) {
	return (num > 9) ? num : '0' + num;
}
let arr = ['Spacious parking area', 'Comfortable spaces', 'Cozy cafe', 'Child playground', 'Outdoor spaces'];

let slider_new = new Swiper('.ourfacilities__slider', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	//Dotts
	direction: 'vertical',
	pagination: {
		el: '.ourfacilities-swiper-pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (arr[index]) + '</span>';
		}
		// formatFractionCurrent: addZero,
		// formatFractionTotal: addZero
	},
	//Arrows
	// navigation: {
	// 	nextEl: '.ourfacilities__swiper-button-prev',
	// 	prevEl: '.ourfacilities__swiper-button-next',
	// },
	/*
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
	*/
	// on: {
	// 	lazyImageReady: function () {
	// 		ibg();
	// 	},
	// },
	// And if we need scrollbar
	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// 	draggable: true,
	// 	dragSize: 40
	// },
});

let slider_new2 = new Swiper('.frispesgallery__slider', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 4,
	spaceBetween: 30,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	//Dotts
	// direction: "vertical",
	// pagination: {
	// 	el: '.ourfacilities-swiper-pagination',
	// 	clickable: true,
	// 	// renderBullet: function (index, className) {
	// 	// 	return '<span class="' + className + '">' + (arr[index]) + '</span>';
	// 	// }
	// 	// formatFractionCurrent: addZero,
	// 	// formatFractionTotal: addZero
	// },
	//Arrows
	navigation: {
		nextEl: '.frispesgallery__swiper-button-next',
		prevEl: '.frispesgallery__swiper-button-prev',
	},
	
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
	
	// on: {
	// 	lazyImageReady: function () {
	// 		ibg();
	// 	},
	// },
	// And if we need scrollbar
	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// 	draggable: true,
	// 	dragSize: 40
	// },
});
let slider_new3 = new Swiper('.customers__slider', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 3,
	spaceBetween: 30,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	//Dotts
	// direction: "vertical",
	// pagination: {
	// 	el: '.ourfacilities-swiper-pagination',
	// 	clickable: true,
	// 	// renderBullet: function (index, className) {
	// 	// 	return '<span class="' + className + '">' + (arr[index]) + '</span>';
	// 	// }
	// 	// formatFractionCurrent: addZero,
	// 	// formatFractionTotal: addZero
	// },
	//Arrows
	navigation: {
		nextEl: '.customers__swiper-button-next',
		prevEl: '.customers__swiper-button-prev',
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	},

	// on: {
	// 	lazyImageReady: function () {
	// 		ibg();
	// 	},
	// },
	// And if we need scrollbar
	scrollbar: {
		el: '.customers__swiper-scrollbar',
		draggable: true,
		dragSize: 40
	},
});