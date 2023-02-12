// ==UserScript==
// @name			Comicslate RevUnixTime
// @version			2023.02.12
// @description		Вставка времени создания ревизии
// @match			http*://*comicslate.org/*rev=*
// @icon			https://comicslate.org/favicon.ico
// @author			Rainbow-Spike
// @grant			none
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/RevUnixTime.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/RevUnixTime.user.js
// ==/UserScript==

let	utime = window . location . search . split ( "rev=" ) [ 1 ] * 1,
	title = document . querySelector ( 'h1' );

function conv ( t ) {
	let a = new Date ( t * 1000 ),
		year = a . getFullYear ( ),
		month = a . getMonth ( ) + 1,
		day = a . getDate ( ),
		hour = a . getHours ( ),
		min = a . getMinutes ( ),
		sec = a . getSeconds ( ),
		time = ' (' + year + '.'
			+ ( month < 10 ? '0' : '' ) + month + '.'
			+ ( day < 10 ? '0' : '' ) + day + ' '
			+ ( hour < 10 ? '0' : '' ) + hour + ':'
			+ ( min < 10 ? '0' : '' ) + min + ':'
			+ ( sec < 10 ? '0' : '' ) + sec + ')';
	return time;
}

if ( utime && title ) title . innerHTML += conv ( utime );
