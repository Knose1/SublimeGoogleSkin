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

document.head.innerHTML += `
<style>
.news h3 {
  linear-gradient(to top,#e70303 50%,#2c2c2c 50%);
}

a {
  color: #e70303;
}

.btn-primary {
  background-color: #e70303;
  border-color: #e70303;
}

.btn-primary:hover {
  background-color: #b50202;
  border-color: #ab0202;
}

.title {
  border-left: 4px solid red;
}

#login-box .out-of-box.new, #login-box .out-of-box:hover {
  color: #cc0808;
}

.pagination>li>a:focus, .pagination>li>a:hover, .pagination>li>span:focus, .pagination>li>span:hover {
  color: #9b0202;
}

.pagination>.active>a, .pagination>.active>a:focus, .pagination>.active>a:hover, .pagination>.active>span, .pagination>.active>span:focus, .pagination>.active>span:hover {
  background-color: #e70303;
  border-color: #e70303;
}

.pagination>li>a, .pagination>li>span {
  color: #e70303;
}

a:focus, a:hover {
  color: #9b0202;
}
.spinner:before {
  border-top: 2px solid #da0c0c;
}
button.btn.btn-primary.js-ag-modal-edit-media-save {
  color: #fff;
  background-color: #e78a03;
  border-color: #e78a03;
}

.badge-info {
    background: #ed1212;
}
</style>`;
