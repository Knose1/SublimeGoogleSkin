function addExternalCss(pUrl) {
	let lStyle  = document.createElement('link');
	
	lStyle.rel  = "stylesheet";
	lStyle.type = "text/css";
	lStyle.href = pUrl;
	document.head.appendChild(lStyle);
}

function addInternalCss(pContent) {
	let lStyle  = document.createElement('style');
	
	lStyle.type = "text/css";
	lStyle.innerHTML = pContent;
	document.head.appendChild(lStyle);
}
