// ==UserScript==
// @name            Comic Adapter: WesternDeep
// @version         2020.06.03
// @description     Hotkeys
// @include         http*://*westerndeep.net*
// @icon            https://www.google.com/s2/favicons?domain=westerndeep.net
// @author          Rainbow-Spike
// @grant           none
// ==/UserScript==

var prev = document.querySelector ( '.comic-nav-previous' ),
	next = document.querySelector ( '.comic-nav-next' );
if ( prev != null ) prev.accessKey = "z";
if ( next != null ) next.accessKey = "x";
