// ==UserScript==
// @name			Comicslate GradientFix
// @version			2020.08.18
// @description		Фиксатор градиентов
// @match			http*://*comicslate.org/*do=edit*
// @match			http*://*comicslate.org/*do=draft*
// @exclude			http*://browsershots.org/*
// @icon			https://www.google.com/s2/favicons?domain=comicslate.org
// @author			Rainbow-Spike
// @grant			none
// ==/UserScript==

function grad_fix ( ) {
	var grd_bub = document.querySelectorAll ( '.bubble' ),
	grd_note,
	grd_text,
	grd_handle,
	grd_repl = [
		[ /#%/, "linear" ],
		[ /#\*/, "radial" ]
	];
	for ( var j in grd_bub ) { // по каждому бабблу
		for ( var k in grd_repl ) { // по обоим маркерам градиентов
			if (
				( grd_bub [ j ].innerHTML != undefined )
				&&
				( grd_bub [ j ].innerHTML.match ( grd_repl [ k ] [ 0 ] ) != null ) // если есть текст и маркер в нём найден
			) {
				grd_note = grd_bub [ j ].querySelector ( ".ct-note" ); // заметка
				grd_text = grd_note.querySelector ( ".ct-note-content p" ); // описание градиента
				grd_handle = grd_bub [ j ].querySelectorAll ( ".handle" ); // засечь хендлы
				grd_bub [ j ].removeChild ( grd_handle [ 0 ]); // удалить хендлы ( иначе при наведении мыши градиентная маска глюкает )
				grd_bub [ j ].removeChild ( grd_handle [ 1 ]);
				grd_bub [ j ].removeChild ( grd_handle [ 2 ]);
				grd_bub [ j ].removeChild ( grd_handle [ 3 ]);
				grd_note.style.cssText += "background: " + grd_repl [ k ] [ 1 ] + "-gradient(" + grd_text.innerHTML.split ( grd_repl [ k ] [ 0 ] ) [ 1 ] + ");"; // надеть градиент на заметку
				grd_note.innerHTML = ''; // опустошить её содержимое
			}
		}
	}
}

function grad_start ( ) {
	if ( document.querySelector ( '#grad_stop' ) == null ) {
		var grd_target = document.querySelector ( '#cotaned_toolbar' );
		if ( grd_target != null ) {
			var grd_button = document.createElement ( 'button' );
			grd_button.type = 'button';
			grd_button.className = 'button toolbutton';
			grd_button.id = 'grad_stop';
			grd_button.title = 'Градиенты';
			grd_button.innerHTML = 'Градиенты';
			grd_target.appendChild ( grd_button );
			grd_button.onclick = grad_fix;
		}
	}
}

setInterval ( grad_start, 100 );
