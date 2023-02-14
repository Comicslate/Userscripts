// ==UserScript==
// @name			DeepL LangSorter
// @version			2023.02.15
// @description		Отрыватель языков из колонок + автоклик рекламки
// @match			http*://*deepl.com/*
// @icon			https://www.google.com/s2/favicons?domain=deepl.com
// @author			Rainbow-Spike
// @grant			none
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/General%20purposes/DeepL%20LangSorter.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/General%20purposes/DeepL%20LangSorter.user.js
// ==/UserScript==

function action ( ) {
	var father = document . querySelector ( '.lmt__language_select__menu .lmt__language_wrapper:last-of-type' ),
		cols = father . querySelectorAll ( '.lmt__language_select_column' );
    for ( var i = 0; i < cols.length; i++ ) {
        father . append(...cols [ i ] . children);
        father . removeChild ( cols [ i ] );
    }
	document . querySelector ( '.dl_button.dl_button--3' ) . click ( );
}
setInterval ( action, 200 );
