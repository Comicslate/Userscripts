// ==UserScript==
// @name			Comicslate TimeFix
// @version			2022.03.29
// @description		Исправление часового пояса на Комикслейте
// @match			http*://*comicslate.org/*
// @icon			https://comicslate.org/favicon.ico
// @author			Rainbow-Spike
// @grant			none
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/TimeFix.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/TimeFix.user.js
// ==/UserScript==

var workPlace = document . querySelectorAll ( ".pageinfo, .date, .diffnav option, th a, .approval_date, .approval_previous, .apr_upd, .apr_prev, .sum, #draft__status" );

function timeFix ( ) {
	var regexp = /(\d\d\d\d)\/(\d\d)\/(\d\d) (\d\d):(\d\d)/;
	for ( var i in workPlace ) {
		if ( workPlace [ i ] . innerHTML != undefined ) {
			var timeDigits = workPlace [ i ] . innerHTML . match ( regexp );
			if ( timeDigits != null ) {
				var newTime = new Date ( Date . parse ( timeDigits [ 1 ] + '-' + timeDigits [ 2 ] + '-' + timeDigits [ 3 ] + 'T' + timeDigits [ 4 ] + ':' + timeDigits [ 5 ] + 'Z' ) ),
					nParts = {
					   year:    newTime . getFullYear ( ),
					   month: ( newTime . getMonth ( ) + 1 ),
					   day:     newTime . getDate ( ),
					   hour:    newTime . getHours ( ),
					   minute:  newTime . getMinutes ( ),
					},
					newParts = { };
				for ( var n in nParts ) {
				   newParts [ n ] = ( parseInt ( nParts [ n ], 10 ) < 10 ) ? ( '0' + nParts [ n ] ) : ( nParts [ n ] );
				}
				newTime = newParts . year + '/' + newParts . month + '/' + newParts . day + '&nbsp;' + newParts . hour + ':' + newParts . minute;
				workPlace [ i ] . innerHTML = workPlace [ i ] . innerHTML . replace ( regexp, newTime )
				workPlace [ i ] . style . textShadow = '#000 0 .5px .5px';
			}
		}
	}
}

if ( workPlace . length > 0 ) {
	setInterval ( timeFix, 300 );
}
