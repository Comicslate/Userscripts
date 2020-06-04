// ==UserScript==
// @name			Comic Adapter: Nerd Rage
// @version			2020.06.04
// @description     Extract Info for Comicslate
// @include			http*://*nerdragecomic.com*
// @icon			https://www.google.com/s2/favicons?domain=nerdragecomic.com
// @author			Rainbow-Spike
// @grant			none
// ==/UserScript==

var arena = document.querySelector ( ".shadow:nth-of-type(3) tr:nth-of-type(2) td:nth-of-type(2)" ),
	title = arena.querySelector ( "td > font > p > font" ).innerHTML.replace ( /g>.+<br>\s*(.+)<\/s/, "g>**$1**</s" ),
	text = arena.querySelector ( "td > p > font" ).innerHTML
		.replace ( /\<a href="([^"]+)" [^\>]+\>([^\<]+)\<\/a>/g, "[[$1|$2]]" )
		.replace ( /\<img src="([^"]+)"\>/g, "{{$1}}" )
		.replace ( /\<img src="([^"]+)" width="(\d+)"\>/g, "{{$1?$2}}" )
		.replace ( /\{\{\.\./g, "{{http://www.nerdragecomic.com" )
//		.replace ( /\<iframe src="[^"]+youtube.com\/embed\/([^\?]+)\?[^\>]+\>[\w\W]+?\<\/iframe\>/g, "{{youtube>$1?middle}}" )
// не пашет
		.replace ( /\<em>([^\<]+)\<\/em>/g, "//$1//" )
		.replace ( /\<strong>([^\<]+)\<\/strong>/g, "**$1**" );

arena.querySelector ( "td" ).innerHTML = title + "<br>" + text;
