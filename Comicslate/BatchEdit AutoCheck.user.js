// ==UserScript==
// @name			Comicslate BatchEdit AutoCheck
// @version			2021.09.11
// @description		Автовыбор вариантов
// @match			http*://*comicslate.org/*page=batchedit*
// @icon			https://comicslate.org/favicon.ico
// @author			Rainbow-Spike
// @grant			none
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/BatchEdit%20AutoCheck.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/BatchEdit%20AutoCheck.user.js
// ==/UserScript==

var apply = document . querySelectorAll ( ".be-apply input" ),
	minor = document . querySelector ( "#be-minor" );

function action ( cl ) {
	if ( cl . length !== undefined ) {
		for ( var i = 0; i < cl . length; i++ ) {
			if ( cl [ i ] . checked == false ) cl [ i ] . click ( );
		}
	} else {
		if ( cl . checked == false ) cl . click ( );
	}
}

setInterval ( action ( minor ), 300 );
setInterval ( action ( apply ), 300 );

/*
document . querySelectorAll ( '.be-stats .be-apply label[for*="0001"]' ) . forEach ( function ( e ) { e . previousSibling . previousSibling . click ( ) } )
*/
