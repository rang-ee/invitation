let naver_map;
let naver_marker;

$(document).ready(function () {
	// 안드로이드 우측 버튼 비활성
	$(".imgblk").bind("contextmenu", function (e) {
		return false;
	});

	$(".popImg .x_button").click(function () {
		$(".pageCover").removeClass("blur6");
		$(".popImg").removeClass("visible");
	});

	$(".popAlert .background, .popAlert button").click(function () {
		$(".popAlert").css("display", "none");
	});

	$("#tel_popup .x_button").click(function () {
		$("body").removeClass("pop_contact_open");
	});

	window.addEventListener("popstate", function (event) {
		if ($(".zoomGallWrapper").is(":visible")) {
			zoomGallClose();
		}
	});

	if ($(".accordion1 li").length == 3) {
		$(".accordion1").addClass("cnt3");
	}
	if ($(".accordion1 li").length == 2) {
		$(".accordion1").addClass("cnt2");
	}
	if ($(".accordion1 li").length == 1) {
		$(".accordion1").addClass("cnt1");
	}

	if ($(".accordion2 li").length == 3) {
		$(".accordion2").addClass("cnt3");
	}
	if ($(".accordion2 li").length == 2) {
		$(".accordion2").addClass("cnt2");
	}
	if ($(".accordion2 li").length == 1) {
		$(".accordion2").addClass("cnt1");
	}

	$(".pack").click(function () {
		$(this).parent().toggleClass("active");
	});

	let g_audioControl = document.getElementById("videoplay");
	$(".bgmbar .sound").click(function () {
		if ($(this).find("i.fa").hasClass("fa-volume-off")) {
			$(this).find("i.fa").removeClass("fa-volume-off");
			$(this).find("i.fa").addClass("fa-volume-up");
			g_audioControl?.play();
		} else {
			$(this).find("i.fa").addClass("fa-volume-off");
			$(this).find("i.fa").removeClass("fa-volume-up");
			g_audioControl?.pause();
		}
	});

	if ($("#calander").is(":visible")) {
		initCalander();
	}

	try {
		naver_map = new naver.maps.Map("map", {
			center: new naver.maps.LatLng(mp_y, mp_x), //지도의 초기 중심 좌표
			zoom: 17, //지도의 초기 줌 레벨
			minZoom: 8, //지도의 최소 줌 레벨
			zoomControl: true, //줌 컨트롤의 표시 여부
			zoomControlOptions: {
				//줌 컨트롤의 옵션
				position: naver.maps.Position.TOP_RIGHT,
			},
		});
		naver_marker = new naver.maps.Marker({
			position: new naver.maps.LatLng(mp_y, mp_x),
			map: naver_map,
		});
	} catch (err) {
		console.log(err);
	}

	//=============================================
	// 페이지가 샤르륵 나타나는 효과
	$(".anibox").addClass("hd").viewportChecker({
		classToAdd: "visible animated fadeInUp",
		offset: 100,
	});

	splashAniFunc(true, false);

	swipeGallery02();

	getClock();
	intervalId = setInterval(getClock, 1000);

	try {
		// Kakao.init("c16ff2caf51824f96f39fa51a1431904");
		Kakao.init("79edf4ac930c4a8db76386f7c488377d");
	} catch (error) {}
});

function loading(go) {
	if (go) {
		$("#loadBox2020").css("display", "block");
	} else {
		$("#loadBox2020").css("display", "none");
	}
}

function openMapImg() {
	$(".pageCover").addClass("blur6");
	$(".popImg").addClass("visible");
}

function openAlert(txt) {
	$(".popAlert .title").text(txt);
	$(".popAlert").css("display", "block");
}

let fullboxSwiper = null;
let g_posY = 0;
function zoomGallClose() {
	$(".zoomGallWrapper").css("display", "none");

	$("html,body").css("overflow", "visible");
	$(window).scrollTop(g_posY);
}
function zoomGallOpen(imgNumb) {
	history.pushState(null, null, "#");

	g_posY = $(window).scrollTop();
	$("html,body").css("overflow", "hidden");

	$(".zoomGallWrapper").css("display", "block");

	if (fullboxSwiper == null) {
		fullboxSwiper = new Swiper("#fullbox", {
			zoom: true,
			pagination: {
				el: "#fullbox .swiper-pagination",
				dynamicBullets: true,
			},
			navigation: {
				nextEl: "#fullbox .swiper-button-next",
				prevEl: "#fullbox .swiper-button-prev",
			},
			observer: true,
			observeParents: true,
		});

		$(".zoomGallWrapper .close").click(function (e) {
			e.preventDefault();
			e.stopImmediatePropagation();
			$(".zoomGallWrapper").css("display", "none");

			$("html,body").css("overflow", "visible");
			$(window).scrollTop(g_posY);
		});
	} else {
		fullboxSwiper.init();
	}
	fullboxSwiper.slideTo(parseInt(imgNumb), 100);
}

function initCalander() {
	let lastDate = moment("2023-10-09").locale("ko");
	let lastDay = parseInt(lastDate.endOf("month").format("D"));

	let week = new Array(0, 1, 2, 3, 4, 5, 6);
	let marriedDate = new moment("2023-10-01").locale("ko").day();
	let todayLabel = week[marriedDate];

	let dday = 9;

	let c = "";
	let j = 0;
	let r = 1;
	let end = lastDay + todayLabel;
	for (let i = 1; i <= end; i++) {
		if (j == 0 || j % 7 == 0) {
			if (j == 0) {
				c += "<tr>";
			} else {
				c += "</tr><tr>";
			}
		}
		if (todayLabel > 0) {
			todayLabel--;
			c += "<td></td>";
		} else {
			if (dday == r) {
				c += '<td><span class="dday">' + r + "</span></td>";
			} else {
				c += '<td class="cal_tr_td_' + r + '">' + r + "</td>";
			}

			r++;
		}

		j++;
	}
	c += "</tr>";

	$("#calander tbody").html(c);
}

function sendLink() {
	let t = $("input[name=kt_01]").val();
	let d = $("input[name=kt_02]").val();

	Kakao.Link.sendDefault({
		objectType: "feed",
		content: {
			title: "소중한 분들을 초대합니다💛",
			// description: "소중한 분들을 초대합니다❤︎",
			imageUrl: "https://www.velysound.com/assets/img/284A1205.JPG",
			link: {
				mobileWebUrl: "https://www.velysound.com/",
				webUrl: "https://www.velysound.com/",
			},
		},
		buttons: [
			{
				title: "청첩장 보러가기",
				link: {
					mobileWebUrl: "https://www.velysound.com/",
					webUrl: "https://www.velysound.com/",
				},
			},
		],
	});
}

function swipeGallery02() {
	let imglen = $("#thumblistid > .swiper-slide").length;
	if (imglen > 1) {
		let swiper = new Swiper(".mySwiper", {
			loop: true,
			autoHeight: true,
			speed: 300,
			//effect: "cude",
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
				renderBullet: function (index, className) {
					index = index + 2;

					let src = $("#thumblistid .ss:nth-child(" + index + ") > .vs").attr("src");
					return '<span class="item ' + className + '" style="background-image: url(' + src + ') !important;"></span>';
				},
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});

		$("#thumblistid .swiper-slide").click(function () {
			zoomGallOpen($(this).attr("data-order"));
		});
	} else if (imglen == 1) {
		$(".swiper-opts").detach();
	} else if (imglen == 0) {
		$(".pic_0_del").detach();
		$(".swiper-opts").detach();
		$(".layer01 .title2").css("padding-top", "0px");
	}
}

let intervalId;
function getClock() {
	const now = moment();
	const wday = moment("2023-10-09 16:20:00");

	const day = parseInt(moment.duration(wday.diff(now)).asDays());
	const hours = moment.duration(wday.diff(now)).hours();
	const minutes = moment.duration(wday.diff(now)).minutes();
	const seconds = moment.duration(wday.diff(now)).seconds();

	$(".countdown .data-days").text(day);
	$(".countdown .data-hour").text(hours);
	$(".countdown .data-min").text(minutes);
	$(".countdown .data-sec").text(seconds);

	if (day < 0 || hours < 0 || minutes < 0 || seconds < 0) {
		$(".dday-wrap").hide();
		clearInterval(intervalId);
	} else {
		if (day === 0) {
			$("#dday").text(`오늘`);
			$("#ddayText").text(`입니다`);
		} else {
			$("#dday").text(`${day}`);
			$("#ddayText").text(`일 남았습니다.`);
		}
	}
}
