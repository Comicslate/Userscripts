// ==UserScript==
// @name			Comicslate TimeFix
// @version			2020.07.23
// @description		Исправление часового пояса на Комикслейте
// @match			http*://*comicslate.org/*
// @exclude			http*://browsershots.org/*
// @icon			https://www.google.com/s2/favicons?domain=comicslate.org
// @author			Rainbow-Spike
// @grant			none
// ==/UserScript==

function timefix ( ) {
	var shift = 10, // fix it for your needs : поправь это под свои нужды
		place = document.querySelectorAll ( ".pageinfo, .date, .diffnav option, th.minor a, th.minor + th a, .approval_date, .approval_previous, .apr_upd, .apr_prev, .sum, .draft__status" );
	if ( place.length > 0 ) {
		for ( var i in place ) {
			if ( place [ i ].innerHTML != undefined ) {
				var time = place [ i ].innerHTML.match ( /(\d\d\d\d)\/(\d\d)\/(\d\d) (\d\d):/ ); // 2019/05/31 10:
				if ( time != null ) {
					var new_hour = +time [ 4 ] + shift,
						fix_hour = new_hour % 24,
						new_day = +time [ 3 ] + Math.floor ( new_hour / 24 ),
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
					var new_month = month + Math.ceil ( new_day / month_length - 1 ),
						fix_month = new_month % 12;
					if ( fix_month == 0 ) fix_month = 12;
					var new_year = year + Math.ceil ( new_month / 12 - 1 );
					place [ i ].innerHTML = place [ i ].innerHTML.replace ( /(\d\d\d\d)\/(\d\d)\/(\d\d) (\d\d):/,
																	new_year
																	+ '/'
																	+ ( ( fix_month < 10 ) ? ( '0' + fix_month ) : fix_month )
																	+ '/'
																	+ ( ( fix_day < 10 ) ? ( '0' + fix_day ) : fix_day )
																	+ '&nbsp;'
																	+ ( ( fix_hour < 10 ) ? ( '0' + fix_hour ) : fix_hour )
																	+ ':' );
				}
			}
		}
	}
}

setInterval ( timefix, 300 );
