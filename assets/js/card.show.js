function floatGarland() {
	$(".floatingBox").addClass("see animated animate__fadeInUp");
	setTimeout(function () {
		$(".floatingBox").toggleClass("hi");
	}, 2000);
}
$(".floatingBox").click(function () {
	$(".bttmGarlandWrapper").removeClass("animate__fadeOutDown");
	$(".bttmGarlandWrapper").addClass("see animated animate__fadeInUp");
});
$(".bttmGarlandWrapper .close").click(function () {
	$(".bttmGarlandWrapper").addClass("animate__fadeOutDown");
});
function openContactPop() {
	$("body").addClass("pop_contact_open");
}
function youtube_parser(url) {
	var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
	var match = url.match(regExp);
	return match && match[7].length == 11 ? match[7] : false;
}
function bgmAniFunc() {
	$(".anibox2")
		.addClass("hd")
		.viewportChecker({
			classToAdd: "visible animated fadeInDown ",
			offset: 0,
			callbackFunction: function (elem, action) {
				setTimeout(function () {
					$(".bgmbar").addClass("fadeBg");
				}, 2500);
			},
		});
	var videocontrol = document.getElementById("videoplay");
	if (!videocontrol.paused) {
		$(".bgmbar .sound").find("i.fa").removeClass("fa-volume-off");
		$(".bgmbar .sound").find("i.fa").addClass("fa-volume-up");
	}
}
function splashAniFunc(isBgm, isGarland) {
	$(".pageCover").addClass("blur");
	var typingBool = false;
	var typingIdx = 0;
	var typingTxt = $(".typing-txt").text();
	typingTxt = [...typingTxt];
	$(typingTxt).each(function (idx, val) {
		if (val == "") {
			typingTxt.splice(idx, 1);
		}
	});
	if (typingBool == false) {
		typingBool = true;
		var tyInt = setInterval(typing, 90);
	}
	function typing() {
		if (typingIdx < typingTxt.length) {
			$(".typing").append(typingTxt[typingIdx]);
			typingIdx++;
		} else {
			clearInterval(tyInt);
		}
	}
	setTimeout(function () {
		$(".pageCover").removeClass("blur");
		if ($("#pop_rsvp").hasClass("needShow")) {
			$("#pop_rsvp").css("display", "block");
		}
		$(".splash").addClass("animate__animated animate__fadeOut");
		setTimeout(function () {
			if (isBgm) {
				bgmAniFunc();
			}
			$(".splash").detach();
			if (isGarland) {
				floatGarland();
			}
		}, 1000);
	}, 2200);
}
function openAcctBox(i) {
	$("#acctBox .grp").text($(i).attr("data-group"));
	$("#acctBox .ment").html($(i).attr("data-bank") + "<br/>" + $(i).attr("data-number") + "<br/>" + $(i).attr("data-name"));
	$("#copytext").val($(i).attr("data-number"));
	$("#acctBox").css("display", "block");
}
function closeAcctBox() {
	$("#acctBox").css("display", "none");
}
function copy_to_clipboard(txtId) {
	var copytxt = $("#" + txtId).val();
	const t = document.createElement("textarea");
	document.body.appendChild(t);
	t.value = copytxt;
	t.select();
	document.execCommand("copy");
	document.body.removeChild(t);
	alert("복사가 완료되었습니다.");
}
function remove_focus_clipboard() {
	var sel = window.getSelection ? window.getSelection() : document.selection;
	if (sel) {
		if (sel.removeAllRanges) {
			sel.removeAllRanges();
		} else if (sel.empty) {
			sel.empty();
		}
	}
}
function searchDirCoord(x, y) {
	var point = new naver.maps.Point(x, y);
	NAVER_MAP = new naver.maps.Map("map", {
		center: point,
		zoom: 16,
		mapTypeControl: false,
		anchorSkew: true,
	});
	marker = new naver.maps.Marker({
		position: point,
		map: NAVER_MAP,
	});
}
function searchAddressToCoordinate(address) {
	naver.maps.Service.geocode(
		{
			query: address,
		},
		function (status, response) {
			if (status === naver.maps.Service.Status.ERROR) {
				return;
			}
			if (response.v2.meta.totalCount === 0) {
				return;
			}
			var htmlAddresses = [],
				item = response.v2.addresses[0],
				point = new naver.maps.Point(item.x, item.y);
			if (item.roadAddress) {
				htmlAddresses.push("[도로명 주소] " + item.roadAddress);
			}
			if (item.jibunAddress) {
				htmlAddresses.push("[지번 주소] " + item.jibunAddress);
			}
			if (item.englishAddress) {
				htmlAddresses.push("[영문명 주소] " + item.englishAddress);
			}
			NAVER_MAP = new naver.maps.Map("map", {
				center: point,
				zoom: 16,
				mapTypeControl: false,
				anchorSkew: true,
			});
			marker = new naver.maps.Marker({
				position: point,
				map: NAVER_MAP,
			});
		}
	);
}
function fnCallWeb2App(type) {
	event.preventDefault();
	var scheme, package, fallbackUrl, fail, useUrlScheme;
	switch (type) {
		case "kakaoNavi":
			openAlert("앱이 설치되어 있지 않은 경우\n길 안내가 실행되지 않을 수 있습니다");
			Kakao.Navi.share({
				name: mp_hname,
				x: mp_x,
				y: mp_y,
				coordType: "wgs84",
			});
			break;
		case "tmap":
			openAlert("앱이 설치되어 있지 않은 경우\n길 안내가 실행되지 않을 수 있습니다");
			scheme = `tmap://route?goalx=${mp_x}&goaly=${mp_y}&goalname=${mp_hname}`;
			package = "com.skt.tmap.ku";
			fallbackUrl = scheme;
			break;
		case "naverMap":
			openAlert("앱이 설치되어 있지 않은 경우\n길 안내가 실행되지 않을 수 있습니다");
			scheme = `navermaps://?menu=location&pinType=place&lat=${mp_y}&lng=${mp_x}&title=${mp_hname}`;
			package = "com.nhn.android.nmap";
			fallbackUrl = `http://map.naver.com/index.nhn?elng=${mp_x}&elat=${mp_y}&etext=${mp_hname}&menu=route&pathType=0`;
			fail = function () {
				$("#fakeAnchor").remove();
				$("body").append(
					`<a href='http://map.naver.com/index.nhn?elng=${mp_x}&elat=${mp_y}&etext=${mp_hname}&menu=route&pathType=0' id='fakeAnchor'></a>`
				);
				$("#fakeAnchor").get(0).click();
			};
			break;
	}
	const callWeb2App = new CallWeb2App({
		scheme: scheme,
		package: package,
		useUrlScheme: useUrlScheme,
		fallbackUrl: fallbackUrl,
		fail: fail,
	});
	callWeb2App.run();
}
