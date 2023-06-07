// const mp_hname = "보타닉 파크 웨딩";
// const mp_x = 127.3336544;
// const mp_y = 37.559335;

$(document).ready(function () {
	// 안드로이드 우측 버튼 비활성
	$(".imgblk").bind("contextmenu", function (e) {
		return false;
	});
});

function loading(go) {
	if (go) {
		$("#loadBox2020").css("display", "block");
	} else {
		$("#loadBox2020").css("display", "none");
	}
}

$(document).ready(function () {
	$(".popImg .x_button").click(function () {
		$(".pageCover").removeClass("blur6");
		$(".popImg").removeClass("visible");
	});
});

function openMapImg() {
	$(".pageCover").addClass("blur6");
	$(".popImg").addClass("visible");
}

function openAlert(txt) {
	$(".popAlert .title").text(txt);
	$(".popAlert").css("display", "block");
}
$(document).ready(function () {
	$(".popAlert .background, .popAlert button").click(function () {
		$(".popAlert").css("display", "none");
	});

	$("#tel_popup .x_button").click(function () {
		$("body").removeClass("pop_contact_open");
	});
});

function sortIntroBottom() {
	$(".ibottom .cx .oline .nb02").css("width", "auto");
	$(".ibottom .cx .oline .nb05").css("width", "auto");
	$(".ibottom .cx .oline .nb07").css("width", "auto");
	$(".ibottom .cx .oline .nb08").css("width", "auto");
	$(".ibottom .cx .oline").css("width", "auto");

	try {
		var nb02_1 = $(".ibottom .cx:nth-child(1) .oline .nb02")[0].getBoundingClientRect().width;
		var nb02_2 = $(".ibottom .cx:nth-child(2) .oline .nb02")[0].getBoundingClientRect().width;
		var nb02_width = nb02_1;
		if (nb02_width < nb02_2) {
			nb02_width = nb02_2;
		}
		$(".ibottom .cx .oline .nb02").width(nb02_width);
	} catch (e) {}
	try {
		var nb05_1 = $(".ibottom .cx:nth-child(1) .oline .nb05")[0].getBoundingClientRect().width;
		var nb05_2 = $(".ibottom .cx:nth-child(2) .oline .nb05")[0].getBoundingClientRect().width;
		var nb05_width = nb05_1;
		if (nb05_width < nb05_2) {
			nb05_width = nb05_2;
		}
		$(".ibottom .cx .oline .nb05").width(nb05_width);
	} catch (e) {}
	try {
		var nb07_1 = $(".ibottom .cx:nth-child(1) .oline .nb07")[0].getBoundingClientRect().width;
		var nb07_2 = $(".ibottom .cx:nth-child(2) .oline .nb07")[0].getBoundingClientRect().width;
		var nb07_width = nb07_1;
		if (nb07_width < nb07_2) {
			nb07_width = nb07_2;
		}
		$(".ibottom .cx .oline .nb07").width(nb07_width);
	} catch (e) {}
	try {
		var nb08_1 = $(".ibottom .cx:nth-child(1) .oline .nb08")[0].getBoundingClientRect().width;
		var nb08_2 = $(".ibottom .cx:nth-child(2) .oline .nb08")[0].getBoundingClientRect().width;
		var nb08_width = nb08_1;
		if (nb08_width < nb08_2) {
			nb08_width = nb08_2;
		}
		$(".ibottom .cx .oline .nb08").width(nb08_width);
	} catch (e) {}
	try {
		var oliw1 = $(".ibottom .cx:nth-child(1) .oline")[0].getBoundingClientRect().width;
		var oliw2 = $(".ibottom .cx:nth-child(2) .oline")[0].getBoundingClientRect().width;
		var oliw = oliw1;
		if (oliw1 < oliw2) {
			oliw = oliw2;
		}
		//console.log(oliw1 + " vs " + oliw2);
		$(".ibottom .cx .oline").width(oliw);
	} catch (e) {}
}

var fullboxSwiper = null;
var g_posY = 0;
$(document).ready(function () {
	window.addEventListener("popstate", function (event) {
		if ($(".zoomGallWrapper").is(":visible")) {
			zoomGallClose();
		}
	});
});

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

			//console.log("posY:"+g_posY);
			$("html,body").css("overflow", "visible");
			$(window).scrollTop(g_posY);
		});
	} else {
		fullboxSwiper.init();
	}
	fullboxSwiper.slideTo(parseInt(imgNumb), 100);
}

$(document).ready(function () {
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

	$(".kakaopaylink").attr("href", "javascript:alert('샘플 청첩장에는 카톡송금이 불가능합니다.');");
});

$(document).ready(function () {
	$(".anibox_attend").addClass("hd").viewportChecker({
		classToAdd: "visible animated faster fadeInUp",
		offset: 100,
	});
});

var att_write_sctop = 0;
// 작성 팝업 열기
$(document).ready(function () {
	$("#att_op_id").click(function () {
		att_write_sctop = $(window).scrollTop();

		$("#att_op").css("display", "block");
		$("html,body").css("height", "100%");
		$("html,body").css("overflow-y", "hidden");
	});
	// 팝업 닫기
	$("#att_op .clse").click(function () {
		$("html,body").css("height", "auto");
		$("html,body").css("overflow-y", "visible");
		$("html, body").animate({ scrollTop: att_write_sctop }, 10);

		$(this).parents(".wpopclass").css("display", "none");
	});

	$(".att-fdver select[name=cnt]").change(function () {
		if ($(this).val() != "1") {
			$(".companion-fd").css("display", "block");
		} else {
			$(".companion-fd").css("display", "none");
		}
	});

	$("input[name=attendFlag]").change(function () {
		if ($("input[name=attendFlag]:checked").val() == "true") {
			$(".attendflag-fd").css("display", "block");
		} else {
			$(".attendflag-fd").css("display", "none");
		}
	});
});

// 참석의사 전달하기
// $("#att_op .att-fdver-btn").click(function () {
// 	// alert("샘플 청첩장에는 참석의사 전달이 불가능합니다.");
// 	// return;

// 	var data = $("#att_op form").serializeObject();
// 	if (!check.isNotNull(data.name)) {
// 		alert("참석자 성함을 입력해주세요.");
// 		return;
// 	}
// 	data.name = data.name.trim();
// 	if (data.name.length < 2) {
// 		alert("이름은 2글자 이상 입력해주세요.");
// 		return;
// 	}
// 	var sb = $("#att_op .opt_sb.sel").attr("data-val");

// 	console.log(data);
// 	if (data.attendFlag == "false") {
// 		data.eatFlag = "";
// 		data.vaccineFlag = "";
// 	}

// 	if (!$("#pagree").is(":checked")) {
// 		alert("개인정보 수집 및 이용에 동의해주세요.");
// 		return;
// 	}
// 	//return;

// 	loading(true);

// 	$.ajax({
// 		type: "post",
// 		//dataType : "text",
// 		//contentType : "application/json; charset=utf-8",
// 		data: {
// 			attendFlag: data.attendFlag,
// 			companion: data.companion,
// 			name: data.name,
// 			genderFlag: data.genderFlag,
// 			cnt: data.cnt,
// 			tel: data.tel,
// 			eatFlag: data.eatFlag,
// 			vaccineFlag: data.vaccineFlag,
// 			msg: data.msg,
// 		},
// 		url: "/card-attend/Zq6maHONAZmMgTmXvFLKiqeUe5njUQ",
// 		headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
// 		success: function (data) {
// 			loading(false);
// 			alert("참석의사를 전달 완료 했습니다.");
// 			location.href = "/card/Zq6maHONAZmMgTmXvFLKiqeUe5njUQ";
// 		},
// 		error: function (err) {
// 			loading(true);
// 			alert("등록 중에 문제가 발생했습니다.\r\n문의하기로 연락주시면 확인 즉시 도와드리겠습니다.");
// 		},
// 	});
// });

function snowfallevt() {
	$(".pageCover").snowfall({
		image: "http://theirmood.com/src/img/flake.png",
		minSize: 3,
		maxSize: 10,
		flakeCount: 200,
		maxSpeed: 1.5,
		minSpeed: 1,
	});
}
var bgeffSnow = false;

var bgeffscrl = "top";
$(document).ready(function () {
	$(window).scroll(function () {
		var n = $(window).scrollTop();
		var t = "";
		if (n < 750) {
			t = "top";
		} else {
			t = "bottom";
		}
		if (t != bgeffscrl) {
			bgeffscrl = t;
			if (bgeffscrl == "top") {
				$(".bgeffectVal").css("display", "block");
				if (bgeffSnow) {
					$(".pageCover").snowfall({
						image: "http://theirmood.com/src/img/flake.png",
						minSize: 3,
						maxSize: 10,
						flakeCount: 250,
						maxSpeed: 1.5,
						minSpeed: 1,
					});
				}
			} else {
				//console.log("배경이펙트 종료");
				$(".bgeffectVal").css("display", "none");
				if (bgeffSnow) {
					$(".pageCover").snowfall("clear");
				}
			}
		}
	});
});

//=============================================
// 축하화환 처리

//=============================================
// 오프닝 스플래시 + BGM + 축하화환 처리

$(document).ready(function () {
	var g_audioControl = document.getElementById("videoplay");
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
});
//$(".bgmbar .sound").click();
/* function play(){ 
            if(g_audioControl.paused) g_audioControl.play();
            else g_audioControl.pause();
        }*/

//=============================================
// 캘린더

function initCalander() {
	/*
    let lastDate = new Date('2023', '5', 0);
    var lastDay = lastDate.getDate();

    console.log("lastDate:"+lastDate.getDay());
    console.log("lastDay:"+lastDay);
   
    var week = new Array(0, 1, 2, 3, 4, 5, 6);
    var marriedDate = new Date('2023-10-09').getDay();
    var todayLabel = week[marriedDate];

    console.log(marriedDate);
    console.log(todayLabel);
*/

	var lastDate = moment("2023-10-09").locale("ko");
	var lastDay = parseInt(lastDate.endOf("month").format("D"));

	//console.log("lastDate:"+lastDate.format());
	//console.log("lastDay:"+lastDay);

	var week = new Array(0, 1, 2, 3, 4, 5, 6);
	var marriedDate = new moment("2023-10-01").locale("ko").day();
	var todayLabel = week[marriedDate];

	var dday = 9;

	var c = "";
	var j = 0;
	var r = 1;
	var end = lastDay + todayLabel;
	for (var i = 1; i <= end; i++) {
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
$(document).ready(function () {
	if ($("#calander").is(":visible")) {
		initCalander();

		// $.ajax({
		// 	type: "get",
		// 	data: { date: "2023-10-09" },
		// 	url: "/holiday",
		// 	headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
		// 	success: function (data) {
		// 		//console.log(data);

		// 		$(data).each(function (idx, val) {
		// 			console.log(val.day);
		// 			$(".cal_tr_td_" + val.day).css("color", "var(--main-sun-day-color)");
		// 		});
		// 	},
		// });
	}
});

//=============================================
// 카톡 초대장 보내기
// $(document).ready(function () {
// 	if ($("#kakao-link-btn").is(":visible")) {
// 		try {
// 			//Kakao.init('672965c4b505451294a6ca90fcdfa643');

function sendLink() {
	var t = $("input[name=kt_01]").val();
	var d = $("input[name=kt_02]").val();

	var kImg = "https://velysound.com/invitation/img/284A1205.JPG";
	Kakao.Link.sendDefault({
		objectType: "feed",
		content: {
			title: "소중한 분들을 초대합니다💛",
			// description: "소중한 분들을 초대합니다❤︎",
			imageUrl: kImg,
			link: {
				mobileWebUrl: "https://velysound.com/",
				webUrl: "https://velysound.com/",
			},
		},
		buttons: [
			{
				title: "청첩장 보러 가기",
				link: {
					mobileWebUrl: "https://velysound.com/",
					webUrl: "https://velysound.com/",
				},
			},
		],
	});
}
// 		} catch {}
// 	}
// });
//=============================================
// 식전영상
//Youtube API 로드

//=============================================
// 오시는길 네이버지도

//=============================================
// 네이버 지도

var NAVER_MAP;
var marker;
// function naverMapXY() {
// 	//if (!NAVER_MAP.isStyleMapReady) { return; }
// 	if (!$("#map").is(":visible")) {
// 		return;
// 	}

// 	var point = new naver.maps.LatLng(36.3330602, 127.3336544);

// 	NAVER_MAP = new naver.maps.Map("map", {
// 		center: point,
// 		zoom: 15,
// 		mapTypeControl: true,
// 	});

// 	var infoWindow = new naver.maps.InfoWindow({ anchorSkew: true });
// 	marker = new naver.maps.Marker({
// 		position: point,
// 		map: NAVER_MAP,
// 	});
// }
$(document).ready(function () {
	try {
		// naver.maps.onJSContentLoaded = naverMapXY;
		// naver.maps.Event.once(NAVER_MAP, "init_stylemap", naverMapXY);
		// var mapDiv = document.getElementById("map");
		// NAVER_MAP = new naver.maps.Map(mapDiv);

		console.log(mp_x, mp_y);

		NAVER_MAP = new naver.maps.Map("map", {
			center: new naver.maps.LatLng(mp_y, mp_x), //지도의 초기 중심 좌표
			zoom: 17, //지도의 초기 줌 레벨
			minZoom: 8, //지도의 최소 줌 레벨
			zoomControl: true, //줌 컨트롤의 표시 여부
			zoomControlOptions: {
				//줌 컨트롤의 옵션
				position: naver.maps.Position.TOP_RIGHT,
			},
		});
		marker = new naver.maps.Marker({
			position: new naver.maps.LatLng(mp_y, mp_x),
			map: NAVER_MAP,
		});
	} catch (err) {
		console.log(err);
	}
});

//=============================================
// 구글 지도

//=============================================
// 갤러리

function swipeGallery01() {
	var imglen = $("#swipelistid > .swiper-slide").length;
	//console.log('이미지 갯수: '+imglen);
	if (imglen > 1) {
		new Swiper(".mySwiper", {
			loop: true,
			autoHeight: true,
			speed: 300,
			//centeredSlides: true,
			pagination: {
				el: ".mySwiper .swiper-pagination",
				dynamicBullets: true,
			},
			navigation: {
				nextEl: ".mySwiper .swiper-button-next",
				prevEl: ".mySwiper .swiper-button-prev",
			},
		});
	} else if (imglen == 1) {
		$(".gallHeightAdj").css("height", "75px");
		$(".swiper-opts").detach();
	} else if (imglen == 0) {
		$(".pic_0_del").detach();
		$(".swiper-opts").detach();
		//$(".pic_0_ins.line").css("display","block");
		//$(".pic_0_ins.line").css("width","200px");
		$(".layer01 .title2").css("padding-top", "0px");
	}

	$("#swipelistid .swiper-slide").click(function () {
		zoomGallOpen($(this).attr("data-order"));
	});
}
function swipeGallery02() {
	var imglen = $("#thumblistid > .swiper-slide").length;
	//console.log('이미지 갯수: '+imglen);

	if (imglen > 1) {
		var swiper = new Swiper(".mySwiper", {
			loop: true,
			autoHeight: true,
			speed: 300,
			//effect: "cude",
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
				renderBullet: function (index, className) {
					index = index + 2;
					//if(index > 15)

					var src = $("#thumblistid .ss:nth-child(" + index + ") > .vs").attr("src");
					// console.log(index + " : " + src);
					// console.log($("#thumblistid .ss:nth-child(" + index + ") > .vs"));
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
		//$(".gallHeightAdj").css("height", "75px");
		$(".swiper-opts").detach();
	} else if (imglen == 0) {
		$(".pic_0_del").detach();
		$(".swiper-opts").detach();
		//$(".pic_0_ins.line").css("display","block");
		//$(".pic_0_ins.line").css("width","200px");
		$(".layer01 .title2").css("padding-top", "0px");
	}
}
// swipeGallery02();

//=============================================
// 페이지가 샤르륵 나타나는 효과
$(document).ready(function () {
	//console.log("애니메이션 (샤르륵)");

	$(".anibox").addClass("hd").viewportChecker({
		classToAdd: "visible animated fadeInUp",
		offset: 100,
	});
});

//=============================================
// 방명록

$(document).ready(function () {
	$(".anibox_books").addClass("hd").viewportChecker({
		classToAdd: "visible animated faster fadeInUp",
		offset: 100,
	});
});

var myUid = "00";

var cardUid = "1";

var loadBooksAnysc = true;
var booksPage = 0;

// function loadBooks() {
// 	if (!loadBooksAnysc) {
// 		console.log("방명록 목록을 가져오는 중입니다..");
// 		return;
// 	}
// 	loadBooksAnysc = false;

// 	booksPage++;
// 	$.ajax({
// 		type: "get",
// 		headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
// 		data: {
// 			page: booksPage,
// 		},
// 		url: "/card-books/Zq6maHONAZmMgTmXvFLKiqeUe5njUQ",
// 		headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
// 		success: function (data) {
// 			if (booksPage >= data.page.endPageNum) {
// 				$("#more-btn-books-by").detach(); // 더보기 버튼 삭제
// 			}

// 			var c = "";
// 			$.each(data.books, function (idx, val) {
// 				//console.log(val);
// 				var note = encodeURIComponent(val.note);

// 				c += "<li>";
// 				c += '<div class="top clearfix"> ';
// 				c += '<span class="nam"><b>' + val.name + "</b></span>";
// 				c += '<a class="att right cls" onclick="deBooks(this)" data-idx="' + val.idx + '"><b><i class="fa fa-times-circle"></i></b></a>';
// 				c += '<span class="right date">' + val.created_at + "</span>";
// 				c += "</div>";
// 				c += '<div class="mid clearfix">';
// 				c += "<p><xmp>" + val.note + "</xmp></p>";
// 				c += "</div>";
// 				c += "</li>";
// 				c += "";
// 			});
// 			$("#load-books-by").append(c);

// 			loadBooksAnysc = true;
// 		},
// 	});
// }

// function deBooks(i) {
// 	// alert("샘플 청첩장에는 방명록 삭제가 불가능합니다.");
// 	// return;

// 	var pw = "";
// 	var idx = $(i).attr("data-idx");

// 	if (myUid != cardUid) {
// 		pw = window.prompt("방명록을 작성할 때 입력하신 비밀번호를 입력하세요", "");
// 		if (pw == null || pw == "") {
// 			return;
// 		}
// 	} else {
// 		if (!window.confirm("정말로 삭제하시겠습니까?", "")) {
// 			return;
// 		}
// 	}

// 	$.ajax({
// 		type: "delete",
// 		headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
// 		data: {
// 			password: pw,
// 			idx: idx,
// 		},
// 		url: "/card-books/Zq6maHONAZmMgTmXvFLKiqeUe5njUQ",
// 		headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
// 		success: function (data) {
// 			if (data) {
// 				alert("삭제 되었습니다.");
// 				location.reload();
// 			} else {
// 				alert("비밀번호가 일치하지 않아 삭제할 수 없습니다.");
// 			}
// 		},
// 		error: function (err) {
// 			alert("삭제 중에 문제가 발생했습니다.\r\n문의하기로 연락주시면 확인 즉시 도와드리겠습니다.");
// 		},
// 	});
// }
$(document).ready(function () {
	if ($(".books-swiper").is(":visible")) {
		new Swiper(".books-swiper", {
			slidesPerView: "auto",
			spaceBetween: 10,
			pagination: {
				el: ".books-swiper .swiper-pagination",
				clickable: true,
			},
		});
	}
});
//loadBooks();

gubook_write_sctop = 0;
$(document).ready(function () {
	// 방명록 전체보기 팝업 열기
	$(".books-all > a.a, #books-all-open").click(function () {
		gubook_write_sctop = $(window).scrollTop();
		$("html,body").css("height", "100%");
		$("html,body").css("overflow-y", "hidden");
		$("#gustbk_list").css("display", "block");
	});

	// 방명록 작성 팝업 열기
	$("#books-write-open, .books-all > a.w").click(function () {
		gubook_write_sctop = $(window).scrollTop();
		$("html,body").css("height", "100%");
		$("html,body").css("overflow-y", "hidden");
		$("#gustbk_op").css("display", "block");
	});

	// 팝업 닫기
	$("#gustbk_list .clse, #gustbk_op .clse").click(function () {
		$("html,body").css("height", "auto");
		$("html,body").css("overflow-y", "visible");
		$("html, body").animate({ scrollTop: gubook_write_sctop }, 10);
		$(this).parents(".wpopclass").css("display", "none");
	});

	// 방명록 삭제 버튼 클릭
	$(".books-swiper .swiper-slide .close").click(function () {
		deBooks(this);
	});
});

//var isBooksWriteLoading = false;

// 방명록 작성하기 버튼 클릭
// $("#gustbk_op .att-fdver-btn").click(function () {
// 	// alert("샘플 청첩장에는 방명록 작성이 불가능합니다.");
// 	// return;

// 	var data = $("#gustbk_op form").serializeObject();
// 	if (!check.isNotNull(data.name)) {
// 		alert("이름을 입력해주세요.");
// 		return;
// 	}
// 	if (!check.isNotNull(data.password)) {
// 		alert("비밀번호를 입력해주세요.");
// 		return;
// 	}
// 	if (!check.isNotNull(data.note)) {
// 		alert("방명록 내용을 입력해주세요.");
// 		return;
// 	}

// 	data.name = data.name.trim();
// 	if (data.name.length < 1) {
// 		alert("이름은 1글자 이상 입력해주세요.");
// 		return;
// 	}

// 	data.password = data.password.trim();
// 	if (data.password.length < 4) {
// 		alert("비밀번호는 4글자 이상 입력해주세요.");
// 		return;
// 	}

// 	if (!isBooksWriteLoading) {
// 		isBooksWriteLoading = true;
// 		loading(true);
// 		$.ajax({
// 			type: "post",
// 			//dataType : "text",
// 			//contentType : "application/json; charset=utf-8",
// 			data: data,
// 			//async : false,
// 			url: "/card-books/Zq6maHONAZmMgTmXvFLKiqeUe5njUQ",
// 			headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
// 			success: function (data) {
// 				loading(false);
// 				location.reload();
// 			},
// 			error: function (err) {
// 				loading(false);
// 				isBooksWriteLoading = false;
// 				console.log(err);
// 				alert("등록 중에 문제가 발생했습니다.\r\n문의하기로 연락주시면 확인 즉시 도와드리겠습니다.");
// 			},
// 		});
// 	}
// });

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

$(document).ready(function () {
	splashAniFunc(true, false);

	swipeGallery02();

	getClock();
	intervalId = setInterval(getClock, 1000);

	try {
		// Kakao.init("c16ff2caf51824f96f39fa51a1431904");
		Kakao.init("79edf4ac930c4a8db76386f7c488377d");
	} catch (error) {}
});
