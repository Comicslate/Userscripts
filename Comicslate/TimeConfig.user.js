// ==UserScript==
// @name			Comicslate TimeConfig
// @version			2022.03.26.1
// @description		Настройка часового пояса на Комикслейте
// @match			http*://*comicslate.org/*do=register
// @match			http*://*comicslate.org/*do=login
// @match			http*://*comicslate.org/*do=profile
// @icon			https://comicslate.org/favicon.ico
// @author			Rainbow-Spike
// @grant			none
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/TimeConfig.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/TimeConfig.user.js
// ==/UserScript==

var insertPlace = document . querySelector ( "#dw__register, #dw__login" ),
	timeShift = localStorage . getItem ( 'timezone' ) * 1;

function insertField ( ) {
	function h ( tag, props = {} ) {
		return Object . assign ( document . createElement ( tag ), props );
	}
	function newTimeZone ( e ) {
		var timeInSt = ( /^\-?\d+(\.5)?$/ . test ( timeInput . value ) && timeInput . value > -11 && timeInput . value < 12 ) ? timeInput . value : 0;
		localStorage . setItem ( 'timezone', timeInSt );
		location . reload ( );
	}
	var timeDiv = h ( 'div', {
			style: 'background-color: #fff; border: 1px solid #8cacbb; border-radius: 5px; box-shadow: 0 0 3px 1px #8cacbb; margin: 8px auto; padding: .4em; width: 400px'
		} ),
		timeText = h ( 'span', {
			innerHTML: 'Timezone: UTC ',
			style: 'font-weight: bold; text-align: center'
		} ),
		timeInput = h ( 'input', {
			type: 'text',
			value: timeShift,
			style: 'border: 1px solid #8cacbb; border-radius: 5px; box-shadow: 0 0 3px 1px #8cacbb; color: #666; font-weight: bold; margin: 0 8px 0 5px; text-align: center; width: 35px;'
		} ),
		timeButton = h ( 'input', {
			type: 'button',
			value: '≡',
			onclick: ( event ) => newTimeZone ( event ),
			style: 'border: 1px solid #999; border-radius: 5px 100% 100% 5px; font-weight: bold; text-align: center; width: 25px;'
		} );
	timeDiv . append ( timeText, timeInput, timeButton );
	return insertPlace . after ( timeDiv );
}

if ( insertPlace != null ) {
	insertField ( );
}
