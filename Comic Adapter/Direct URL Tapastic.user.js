// ==UserScript==
// @name			Direct URL Tapastic
// @version			2020.09.16
// @description		Extract Pic Link
// @include			http*://tapas.io/*
// @author			Rainbow-Spike
// @icon			https://www.google.com/s2/favicons?domain=tapas.io
// @grant			none
// ==/UserScript==

var nod = document.createElement ( "a" );
nod.style = 'position: fixed; top: 200px; left: 100px;';
nod.innerHTML = 'Copy Direct Link';
document.querySelector ( "body" ).appendChild ( nod );

function action ( ) {
	nod.href = document.querySelector ( "img.content__img" ).src;
}
setInterval ( action, 100 );
