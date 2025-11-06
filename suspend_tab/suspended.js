const params = new URLSearchParams(window.location.search);
const uri = params.get('uri');
const title = params.get('title');
const favIconUrl = params.get('favIconUrl');

document.title = title;

const favIconElement = document.getElementById('favicon');
favIconElement.href = favIconUrl;

const uriElement = document.getElementById('uri');
uriElement.innerHTML = uri;

const titleElement = document.getElementById('title');
titleElement.innerHTML = title;

const imgElement = document.getElementById('img');
imgElement.src = favIconUrl;

document.onclick = function unsuspend() {
    window.location.href = uri;
}
