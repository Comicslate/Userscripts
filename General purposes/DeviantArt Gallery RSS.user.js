// ==UserScript==
// @name			DeviantArt Gallery RSS
// @version			2020.06.23
// @description		Add RSS link in DeviantArt galleries
// @include			https://www.deviantart.com/*/gallery/*
// @icon			https://www.google.com/s2/favicons?domain=deviantart.com
// @author			Rainbow-Spike
// @namespace       https://greasyfork.org/users/7568
// @homepage        https://greasyfork.org/ru/users/7568-dr-yukon
// @grant			none
// ==/UserScript==

var [ a, b, c, d ] = window.location.pathname.split ( '/' );
if ( c == 'gallery' ) document.querySelector ( 'head' ).innerHTML += '<link rel="alternate" type="application/rss+xml" title="RSS" href="https://backend.deviantart.com/rss.xml?q=gallery%3A' + b + '%2F' + d + '&type=deviation">';
