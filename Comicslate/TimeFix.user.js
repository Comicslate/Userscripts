// ==UserScript==
// @name			Comicslate TimeFix
// @version			2022.02.23
// @description		Исправление часового пояса на Комикслейте
// @match			http*://*comicslate.org/*
// @icon			https://comicslate.org/favicon.ico
// @author			Rainbow-Spike
// @grant			GM_addStyle
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/TimeFix.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/TimeFix.user.js
// ==/UserScript==

GM_addStyle ( '#timezone { background-color: #fff; border: 1px dotted #090; border-radius: 5px; box-shadow: 0 0 1px 1px #090; color: #090; font-weight: bold; height: 15px; outline: none; padding: 0; text-align: center; width: 25px; }' );

function h ( tag, props = {} ) {
	return Object . assign ( document . createElement ( tag ), props );
}

function newtimezone ( e ) {
	var key = e . keyCode || e . which;
	if ( key == 13 ) {
		localStorage . setItem ( 'timezone', timezone . value );
		location . reload ( );
	}
}

function insertField ( ) {
	var timeshift = localStorage . getItem ( 'timezone' ) * 1 || 0;
	const insertplace = document . querySelector ( "#dw__register" ),
	timeinput = h ( 'input', {
		id: 'timezone',
		type: 'text',
		value: timeshift,
		onkeypress: ( event ) => newtimezone ( event ),
	} );
	if ( insertplace != null ) {
		insertplace . after ( timeinput );
		insertplace . after ( document . createTextNode ( "Timezone: UTC " ) );
	}
}

insertField ( );

function timefix ( ) {
	var timeshift = localStorage . getItem ( 'timezone' ) * 1 || 0,
		place = document . querySelectorAll ( ".pageinfo, .date, .diffnav option, th a, .approval_date, .approval_previous, .apr_upd, .apr_prev, .sum, #draft__status" );
	if ( place . length > 0 ) {
		for ( var i in place ) {
			if ( place [ i ] . innerHTML != undefined ) {
				var time = place [ i ] . innerHTML . match ( /(\d\d\d\d)\/(\d\d)\/(\d\d) (\d\d):/ );
				if ( time != null ) {
					var new_hour = +time [ 4 ] + timeshift,
						fix_hour = new_hour % 24 + ( new_hour < 0 ? 24 : 0 ),
						new_day = +time [ 3 ] + Math . floor ( new_hour / 24 ),
						month = +time [ 2 ],
						year = +time [ 1 ],
						month_length = '';
					switch ( month ) {
						case 1:
						case 3:
						case 5:
						case 7:
						case 8:
						case 10:
						case 12:
							month_length = 31;
							break;
						case 2:
							if ( year % 4 == 0 ) {
								month_length = 29;
							} else {
								month_length = 28;
							};
							break;
						case 4:
						case 6:
						case 9:
						case 11:
							month_length = 30;
							break;
					};
					var fix_day = new_day % month_length;
					if ( fix_day == 0 ) fix_day = month_length;
					var new_month = month + Math . ceil ( new_day / month_length - 1 ),
						fix_month = new_month % 12;
					if ( fix_month == 0 ) fix_month = 12;
					var new_year = year + Math . ceil ( new_month / 12 - 1 );
					place [ i ] . innerHTML = place [ i ] . innerHTML . replace (
						/(\d\d\d\d)\/(\d\d)\/(\d\d) (\d\d):/,
						new_year
						+ '/'
						+ ( ( fix_month < 10 ) ? ( '0' + fix_month ) : fix_month )
						+ '/'
						+ ( ( fix_day < 10 ) ? ( '0' + fix_day ) : fix_day )
						+ '&nbsp;'
						+ ( ( fix_hour < 10 ) ? ( '0' + fix_hour ) : fix_hour )
						+ ':' );
					place [ i ] . style . textShadow = '#000 0 .5px .5px';
				}
			}
		}
	}
}

setInterval ( timefix, 300 );
