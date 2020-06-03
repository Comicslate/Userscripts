// ==UserScript==
// @name			Comic Adapter: Legend of Zhathar
// @version			2020.06.03
// @description		Extract Info for Comicslate
// @include			http*://zhathar.smackjeeves.com/*
// @icon			https://www.google.com/s2/favicons?domain=westerndeep.net
// @author			Rainbow-Spike
// @grant			none
// ==/UserScript==

var strip = document.querySelector ( '#comic_image' ).getAttribute ( 'src' ).split ( '/' )[9],
	header = document.querySelector ( '#comic_header'),
	dlink = document.createElement ( 'p' );

dlink.innerHTML = strip;
dlink.setAttribute ( 'style', 'font-size: 20px; text-align: center;' );
header.appendChild ( dlink );
