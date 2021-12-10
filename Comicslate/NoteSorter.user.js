// ==UserScript==
// @name			Comicslate NoteSorter
// @version			2021.12.10.1
// @description		Сортировка наклеек
// @description:en	Note sorting
// @match			http*://*comicslate.org/*do=edit*
// @match			http*://*comicslate.org/*do=preview*
// @match			http*://*comicslate.org/*do=draft*
// @icon			https://comicslate.org/favicon.ico
// @author			Rainbow-Spike
// @grant			GM_addStyle
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/NoteSorter.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/NoteSorter.user.js
// ==/UserScript==

GM_addStyle ( '#sortnotes { margin-left: 4px; background-image: linear-gradient(to bottom,#7EF,#5CC); }' );
GM_addStyle ( '#sortnotes:hover { background-image: linear-gradient(to bottom,#7EF,#3AB); }' );

function h ( tag, props = {} ) {
	return Object . assign ( document . createElement ( tag ), props );
}

function action ( ) {
	const wiki_text = document . querySelector ( '#wiki__text' ),
	wtext = wiki_text . value;

	if (
		!wtext . match ( 'Не_сортировать' )
		&&
		( wtext . match ( 'cotan' ) != null )
	) {
		var cotan = wtext . split ( '{{cotan' );
		for ( var e = 1; e < cotan . length; e++ ) {
			if ( cotan [ e ] . match ( '}}\n{{<' ) == null ) {
				var parts = cotan [ e ] . split ( '\n{{<' ),
					end = parts . pop ( ),
					notes = parts [ 0 ] . split ( '\n@' ), // разделение и зачистка
					begin = notes . shift ( ),
					num = notes . length - 1,
					centers = [ ],
					borders = [ ],
					new_notes = [ ];
				for ( var i = 0; i <= num; i++ ) { // создание списков
					var nparts = notes [ i ] . split ( '\n' ),
						nontext = nparts . shift ( ) . split ( ';' ),
						coords = nontext . shift ( ) . split ( ',' ),
						mark = nparts . toString ( ) . charAt ( 0 );
					if ( mark == '#' ) { // для фонов
						var center = [ ];
						center . push ( i ); // изначальный notes-номер
						center . push ( i ); // сортировочный номер
						center . push ( Math.round ( coords [ 1 ] * 1 + coords [ 2 ] / 2 ) ); // центр фона по x
						center . push ( Math.round ( coords [ 0 ] * 1 + coords [ 3 ] / 2 ) ); // центр фона по y
						centers . push ( center );
					} else { // для текстов
						var border = [ ];
						border . push ( i ); // аналогично
						border . push ( ( i + 1 ) * 100 );
						border . push ( coords [ 1 ] * 1 ); // левая граница
						border . push ( coords [ 1 ] * 1 + coords [ 2 ] * 1 ); // правая
						border . push ( coords [ 0 ] * 1 ); // верхняя
						border . push ( coords [ 0 ] * 1 + coords [ 3 ] * 1 ); // нижняя
						borders . push ( border );
					}
				}
				for ( i = 0; i < borders . length; i++ ) { // проверка на вхождение центра фона в область действия текста
					for ( var j = 0; j < centers . length; j++ ) {
						if (
							(
								( centers [ j ] [ 2 ] > borders [ i ] [ 2 ] ) // центр фона правее левой границы текста
								&&
								( centers [ j ] [ 2 ] < borders [ i ] [ 3 ] ) // левее правой
							)
							&&
							(
								( centers [ j ] [ 3 ] > borders [ i ] [ 4 ] ) // ниже верхней
								&&
								( centers [ j ] [ 3 ] < borders [ i ] [ 5 ] ) // выше нижней
							)
						) {
							centers [ j ] [ 1 ] = borders [ i ] [ 1 ] - 1; // сортировка фона за текст
							borders [ i ] [ 1 ] = borders [ i ] [ 1 ] + 1; // сдвиг текста
						}
					}
				}
				var end_array = [ ] . concat ( centers, borders ); // слияние массивов фонов и текстов, пересортировка по индексам
				end_array . sort ( ( a, b ) => a [ 1 ] - b [ 1 ] );
				for ( var k = 0; k < end_array . length; k++ ) { // сборка конечного массива
					new_notes [ k ] = notes [ end_array [ k ] [ 0 ] ];
				}
				cotan [ e ] = ( begin + '\n@' + new_notes . join ( '\n@' ) + '\n{{<' + end ) . replace ( /~\n\n@/g, '~\n@');
			}
		}
		wiki_text . value = cotan . join ( '{{cotan' );
	}
}

function insertButton ( ) {
	const lastButton = document . querySelector ( '#edbtn__cancel' );
	if ( window . location . href . match ( /\/(d|h)\d+/i) ) return; // ленты имеют url вида /d0000 или h0000 и на них редактор не должен быть запущен

	const sortButton = h ( 'input', {
		type: 'button',
		value: 'Sort notes!',
		id: 'sortnotes',
		title: 'Sort notes!',
		onclick: ( event ) => action ( ),
	} );
	lastButton . after ( sortButton );
}

insertButton ( );
