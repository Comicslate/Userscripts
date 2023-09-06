// ==UserScript==
// @name			Comicslate StringReSorter
// @version			2023.09.06.1
// @description		Вкладывание переводов
// @description:en	Translations sorting
// @match			http*://*comicslate.org/*do=edit*
// @match			http*://*comicslate.org/*do=preview*
// @match			http*://*comicslate.org/*do=draft*
// @icon			https://comicslate.org/favicon.ico
// @author			Rainbow-Spike
// @grant			GM_addStyle
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/StringReSorter.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/StringReSorter.user.js
// ==/UserScript==

GM_addStyle ( '#resorter { margin-left: 4px; background-image: linear-gradient(to bottom,#7EF,#5CC); }' );
GM_addStyle ( '#resorter:hover { background-image: linear-gradient(to bottom,#7EF,#3AB); }' );

var resorter;

function h ( tag, props = {} ) {
	return Object . assign ( document . createElement ( tag ), props );
}

function action ( ) {
	var
		wiki_text = document . querySelector ( '#wiki__text' ), /* взять текст */
		new_texts = wiki_text . value . split ( '\nFIXME' ) [ 0 ] . split ( '\n== ' ) [ 0 ] . split ( '\n' ), /* массив новых строк перед заглавием */
		all_notes = wiki_text . value . split ( '{{cotan' ) [ 1 ] . split ( '\n{{<' ) [ 0 ] . split ( '\n@' ), /* ниже предварительная лапша старого текста */
		old_texts = [ ];

	for ( var i = 1; i <= all_notes . length; i++ ) { /* осмотр лапши */
		if ( /]\n/ . test ( all_notes [ i ] ) ) { /* если есть признак строки старого текста */
			var old_text = all_notes [ i ] . split ( ']\n' ) [ 1 ] . split ( '\n~' ) [ 0 ] || 'X';
			old_texts . push ( old_text ); /* зачистить и внести в массив старых строк */
		}
	}

	if ( new_texts . length === old_texts . length ) { /* проверка на размеравенство массивов */
		for ( var j = 0; j <= new_texts . length; j++ ) {
			wiki_text . value = wiki_text . value . replace ( new_texts [ j ] + '\n', '' ); /* чистим новую строку вверху */
			wiki_text . value = wiki_text . value . replace ( old_texts [ j ], new_texts [ j ] ); /* вставляем новую строку вместо старой */
			resorter . style . display = 'none'; /* гасим кнопку */
		}
	}
}

function insertButton ( ) {
	var lastButton = document . querySelector ( '#edbtn__cancel' );
	if ( window . location . href . match ( /\/(d|h)\d+/i) ) return; // ленты имеют url вида /d0000 или h0000 и на них редактор не должен быть запущен

	resorter = h ( 'input', {
		type: 'button',
		value: 'Resort!',
		id: 'resorter',
		title: 'Resort!',
		onclick: ( event ) => action ( ),
	} );
	lastButton . after ( resorter );
}

insertButton ( );
