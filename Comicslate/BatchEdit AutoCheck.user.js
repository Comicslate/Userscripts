// ==UserScript==
// @name			Comicslate BatchEdit AutoCheck
// @version			2021.04.15
// @description		Автовыбор вариантов
// @match			http*://*comicslate.org/*page=batchedit*
// @exclude			http*://browsershots.org/*
// @icon			https://www.google.com/s2/favicons?domain=comicslate.org
// @author			Rainbow-Spike
// @grant			none
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/BatchEdit%20AutoCheck.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/BatchEdit%20AutoCheck.user.js
// ==/UserScript==

var apply = document.querySelectorAll ( ".be-apply input" ),
	minor = document.querySelector ( "#be-minor" );

function action ( cl ) {
	if ( cl.length !== undefined ) {
		for ( var i = 0; i < cl.length; i++ ) {
			if ( cl [ i ].checked == false ) cl [ i ].click ( );
		}
	} else {
		if ( cl.checked == false ) cl.click ( );
	}
}

setInterval ( action ( minor ), 300 );
setInterval ( action ( apply ), 300 );
