// ==UserScript==
// @name			DeepL LangSorter
// @version			2022.01.12
// @description		Отрыватель языков из колонок
// @include			http*://*deepl.com/*
// @icon			https://www.google.com/s2/favicons?domain=deepl.com
// @author			Rainbow-Spike
// @grant			none
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/General%20purposes/DeepL%20LangSorter.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/General%20purposes/DeepL%20LangSorter.user.js
// ==/UserScript==

function action ( ) {
	var father = document . querySelector ( '.lmt__language_wrapper' ),
		cols = document . querySelectorAll ( '.lmt__language_select_column' );
    for ( var i = 0; i < cols.length; i++ ) {
        father . append(...cols [ i ] . children);
        father . removeChild ( cols [ i ] );
    }
}
setInterval ( action, 200 );
