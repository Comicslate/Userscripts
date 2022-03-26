// ==UserScript==
// @name			Comicslate TimeFix
// @version			2022.03.26
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
	var timeShift = localStorage . getItem ( 'timezone' ) * 1;
	for ( var i in workPlace ) {
		if ( workPlace [ i ] . innerHTML != undefined ) {
			var timeDigits = workPlace [ i ] . innerHTML . match ( /(\d\d\d\d)\/(\d\d)\/(\d\d) (\d\d):/ );
			if ( timeDigits != null ) {
				var newHour = +timeDigits [ 4 ] + timeShift,
					fixHour = newHour % 24 + ( newHour < 0 ? 24 : 0 ),
					newDay = +timeDigits [ 3 ] + Math . floor ( newHour / 24 ),
					oldMonth = +timeDigits [ 2 ],
					oldYear = +timeDigits [ 1 ],
					monthLength = '';
				switch ( oldMonth ) {
					case 1:
					case 3:
					case 5:
					case 7:
					case 8:
					case 10:
					case 12:
						monthLength = 31;
						break;
					case 2:
						if ( oldYear % 4 == 0 ) {
							monthLength = 29;
						} else {
							monthLength = 28;
						};
						break;
					case 4:
					case 6:
					case 9:
					case 11:
						monthLength = 30;
						break;
				};
				var fixDay = newDay % monthLength;
				if ( fixDay == 0 ) fixDay = monthLength;
				var newMonth = oldMonth + Math . ceil ( newDay / monthLength - 1 ),
					fixMonth = newMonth % 12;
				if ( fixMonth == 0 ) fixMonth = 12;
				var newYear = oldYear + Math . ceil ( newMonth / 12 - 1 );
				workPlace [ i ] . innerHTML = workPlace [ i ] . innerHTML . replace (
					/(\d\d\d\d)\/(\d\d)\/(\d\d) (\d\d):/,
					newYear
					+ '/'
					+ ( ( fixMonth < 10 ) ? ( '0' + fixMonth ) : fixMonth )
					+ '/'
					+ ( ( fixDay < 10 ) ? ( '0' + fixDay ) : fixDay )
					+ '&nbsp;'
					+ ( ( fixHour < 10 ) ? ( '0' + fixHour ) : fixHour )
					+ ':' );
				workPlace [ i ] . style . textShadow = '#000 0 .5px .5px';
			}
		}
	}
}

if ( workPlace . length > 0 ) {
	setInterval ( timeFix, 300 );
}
