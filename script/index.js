function sublimeGoogleSkinRun_ge95azs2() {
	let lStyle  = document.createElement('link');
	
	lStyle.rel  = "stylesheet";
	lStyle.type = "text/css";
	lStyle.href = chrome.runtime.getURL("script/css/main.css");
	
	document.head.appendChild(lStyle);
}

sublimeGoogleSkinRun_ge95azs2();
