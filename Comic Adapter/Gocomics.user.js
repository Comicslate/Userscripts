// ==UserScript==
// @author			Rainbow-Spike
// @version			2020.04.18
// @name			Comic Adapter: Gocomics
// @include			http*://*gocomics.com*
// @icon			https://www.google.com/s2/favicons?domain=gocomics.com
// @grant			none
// @run-at			document-end
// ==/UserScript==

var prev = document.querySelector('.fa-caret-left'); prev.accessKey = "z";
var next = document.querySelector('.fa-caret-right'); next.accessKey = "x";

var strip = document.getElementsByClassName('js-item-comic-link'), // ищем ссылку
	img = strip[0].getElementsByTagName("img")[0].getAttribute('src'), // ищем путь картинки
	dlink = document.createElement('a'); // готовим ссылку

// SELECT
function selectblock ( name ) {
	var rng = document.createRange ( );
	rng.selectNode ( name );
	var sel = window.getSelection ( );
	sel.removeAllRanges ( );
	sel.addRange ( rng );
}

dlink.setAttribute('href', img+'.gif'); // собираем линк
dlink.innerHTML = img+'.gif'; // обзываем
dlink.setAttribute('style', 'font-size: 20px; display: block;'); // стилизуем
strip[0].parentNode.insertBefore(dlink,strip[0].parentNode.firstChild); // прицепляем

selectblock ( dlink );
