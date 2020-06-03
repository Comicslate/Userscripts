// ==UserScript==
// @name            Comic Adapter: WesternDeep
// @version         2020.03.18
// @description     Hotkeys
// @include         http*://*westerndeep.net*
// @icon            https://www.google.com/s2/favicons?domain=westerndeep.net
// @grant           none
// @author          Rainbow-Spike
// @namespace       https://greasyfork.org/users/7568
// @homepage        https://greasyfork.org/ru/users/7568-dr-yukon
// ==/UserScript==

// NUMBERS
var prev = document.querySelector ( '.comic-nav-previous' ),
	next = document.querySelector ( '.comic-nav-next' );
prev.accessKey = "z";
if ( next != null ) next.accessKey = "x";
