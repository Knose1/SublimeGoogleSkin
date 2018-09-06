//Ag logo
document.querySelectorAll("img[src='https://www.anime-gate.net/images/anime-manga-download-animegate-logo.svg']").forEach(qsa => {
  qsa.src = chrome.runtime.getURL("/icons/TrapGateLogo.svg");
});

//Ag logo negative
document.querySelectorAll("img[src='https://www.anime-gate.net/images/anime-manga-download-animegate-logo-inverse.svg']").forEach(qsa => {
  qsa.src = chrome.runtime.getURL("/icons/TrapGateLogoInvert.svg");
})

document.querySelectorAll("link[rel=icon][href*='/favicon']").forEach(qsa => {
  qsa.src = chrome.runtime.getURL("/icons/TrapGateImg.png");
})
