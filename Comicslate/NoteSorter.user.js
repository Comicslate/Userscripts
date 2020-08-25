// ==UserScript==
// @name			Comicslate NoteSorter
// @version			2020.08.26
// @description		Сортировка наклеек
// @match			http*://*comicslate.org/*do=edit*
// @match			http*://*comicslate.org/*do=draft*
// @exclude			http*://browsershots.org/*
// @icon			https://www.google.com/s2/favicons?domain=comicslate.org
// @author			Rainbow-Spike
// @grant			none
// ==/UserScript==

var wiki_text = document.querySelector ( '#wiki__text' );

if ( ( wiki_text != null ) && !wiki_text.textContent.match ( 'Не_сортировать' ) && ( wiki_text.textContent.match ( 'cotan' || 'aimg' ) != null ) ) {
	var parts = wiki_text.textContent.split ( '\n@' ), // разделение и зачистка
		begin = parts.slice ( 0 , 1 ),
		notes = parts.slice ( 1 ),
		num = parts.length - 2,
		end = '{{<' + notes [ num ].split ( '{{<' ) [ 1 ],
		centers = [ ],
		borders = [ ],
		new_notes = [ ];
	notes [ num ] = notes [ num ].split ( '{{' ) [ 0 ];
	for ( var i = 0; i <= num; i++ ) { // создание списков
		var nparts = notes [ i ].split ( '\n' ),
			coords = nparts [ 0 ].split ( ';' ) [ 0 ].split ( ',', 4 ),
			mark = nparts [ 1 ].charAt(0);
		if ( mark == '#' ) { // для фонов
			var center = [];
			center.push ( i ); // изначальный notes-номер
			center.push ( i ); // сортировочный номер
			center.push ( Math.round ( coords [ 1 ] * 1 + coords [ 2 ] / 2 ) ); // центр фона по x
			center.push ( Math.round ( coords [ 0 ] * 1 + coords [ 3 ] / 2 ) ); // центр фона по y
			centers.push ( center );
		} else { // для текстов
			var border = [];
			border.push ( i ); // аналогично
			border.push ( ( i + 1 ) * 100 );
			border.push ( coords [ 1 ] * 1 ); // левая граница
			border.push ( coords [ 1 ] * 1 + coords [ 2 ] * 1 ); // правая
			border.push ( coords [ 0 ] * 1 ); // верхняя
			border.push ( coords [ 0 ] * 1 + coords [ 3 ] * 1 ); // нижняя
			borders.push ( border );
		}
	}
	for ( var k = 0; k < borders.length; k++ ) { // проверка на вхождение центра фона в область действия текста
		for ( var j = 0; j < centers.length; j++ ) {
        	if (
				(
					( centers [ j ] [ 2 ] > borders [ k ] [ 2 ] ) // центр фона правее левой границы текста
					&&
					( centers [ j ] [ 2 ] < borders [ k ] [ 3 ] ) // левее правой
				)
				&&
				(
					( centers [ j ] [ 3 ] > borders [ k ] [ 4 ] ) // ниже верхней
					&&
					( centers [ j ] [ 3 ] < borders [ k ] [ 5 ] ) // выше нижней
				)
			) {
				centers [ j ] [ 1 ] = borders [ k ] [ 1 ] - 1; // сортировка фона за текст
				borders [ k ] [ 1 ] = borders [ k ] [ 1 ] + 1; // сдвиг текста
        	}
    	}
	}
	var end_array = [ ].concat ( centers, borders );
	end_array.sort (
		function ( a, b ) {
			return a [ 1 ] - b [ 1 ];
		}
	)
	for ( var l = 0; l < end_array.length; l++ ) {
		new_notes [ l ] = notes [ end_array [ l ] [ 0 ] ];
	}
	wiki_text.value = ( begin + '\n@' + new_notes.join ( '\n@' ) + '\n' + end ).replace ( /~\n\n@/g, '~\n@');
}
