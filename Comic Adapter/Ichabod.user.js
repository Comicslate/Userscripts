// ==UserScript==
// @name            Comic Adapter: Ichabod
// @version         2019.11.02
// @description     Extract Info for Comicslate
// @include			http*://*itoc.cfw.me*
// @icon			https://www.google.com/s2/favicons?domain=itoc.cfw.me
// @grant           none
// @author          Rainbow-Spike
// @namespace       https://greasyfork.org/users/7568
// @homepage        https://greasyfork.org/ru/users/7568-dr-yukon
// ==/UserScript==

var titler = document.querySelector ( ".comictitle" ); // титул

titler.innerHTML = "**" + titler.innerHTML + "**"; // звёздочки

// SELECT
function selectblock ( name ) {
	var rng = document.createRange ( );
	rng.selectNode ( name );
	var sel = window.getSelection ( );
	sel.removeAllRanges ( );
	sel.addRange ( rng );
}

selectblock ( titler );
