// ==UserScript==
// @name			Comic Adapter: Legend of Zhathar
// @version			2019.08.20
// @description		Extract Link for Comicslate
// @include			http*://zhathar.smackjeeves.com/*
// @author			Rainbow-Spike
// @icon			https://www.google.com/s2/favicons?domain=westerndeep.net
// @grant			none
// @run-at			document-end
// ==/UserScript==

var strip = document.querySelector ( '#comic_image' ).getAttribute ( 'src' ).split ( '/' )[9], // ищем путь картинки
	header = document.querySelector ( '#comic_header'),
	dlink = document.createElement ( 'p' ); // готовим параграф

dlink.innerHTML = strip; // обзываем
dlink.setAttribute ( 'style', 'font-size: 20px; text-align: center;' ); // стилизуем
header.appendChild ( dlink ); // прицепляем
