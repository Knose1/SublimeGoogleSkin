// will check if the host is *.google.*
com.github.knose1.sublimeGoogleSkin.checkPath(
	"google",
	() => {
		com.github.knose1.sublimeGoogleSkin.addExternalCss( chrome.runtime.getURL("script/css/main.css")     );
		com.github.knose1.sublimeGoogleSkin.addExternalCss( chrome.runtime.getURL("script/css/homepage.css") );
	}
);
