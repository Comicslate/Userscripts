// ==UserScript==
// @name			Comicslate ImageReplacer
// @version			2020.06.05
// @description		Replace/insert render images
// @description:ru	Замена/вставка отрендеренных картинок
// @include			http*://*comicslate.org/*
// @icon			https://www.google.com/s2/favicons?domain=comicslate.org
// @author			Rainbow-Spike
// @grant			none
// ==/UserScript==

var mode = 2, /* режим
				0 - вставить перед первым навигатором (экзот)
				1 - вставить перед исходником
				2 - замена исходника
				3 - вставить за исходником
				4 - вставить за последним навигатором (экзот) */
	opacity = 0.3;

function readCookie ( name ) { // чтение куки
	var nameEQ = name + '=',
		ca = document.cookie.split ( ';' );
	for ( var i = 0; i < ca.length; i++ ) {
		var c = ca[i];
		while ( c.charAt ( 0 ) == ' ' ) {
			c = c.substring ( 1, c.length );
		}
		if ( c.indexOf ( nameEQ ) == 0 ) return c.substring ( nameEQ.length, c.length );
	}
	return null;
}

function gap ( ) {
	if ( document.querySelectorAll ( ".editBox" ).length != 1 ) {
		document.querySelectorAll ( ".ct-container" ).forEach ( function ( e ) {
			var img = e.querySelector ( "img" ),
				img_src = img.getAttribute ( 'src' ).replace ( /\/\/(.+)_media\/(.+)\.[^\.]+$/, "//app.$1embed.webp?id=$2" ),
				parent = e.parentNode,
				new_img = document.createElement ( 'img' ),
				new_a = document.createElement ( 'a' ),
				zoom_mark = !readCookie ( 'disZoom_' + JSINFO.namespace );
			new_img.setAttribute ( 'src', img_src );
			new_a.setAttribute ( 'href', window.location + '?do=edit' ); // клик по картинке ведёт в редактирование
			new_a.className = 'img-repl';
			new_a.style = 'margin: 0 auto; display: table; transform-origin: left top 0;';
			if ( zoom_mark ) {
				var	page = document.querySelector ( ".page" ),
					pagewidth = page.offsetWidth - 3,
					scale = pagewidth / img.width,
					margin = ( scale - 1 ) * img.height + 10;
				new_a.style.cssText = new_a.style.cssText.replace ( 'left', 'center').replace ( 'auto', 'auto ' + margin + 'px;' );
				new_a.style.cssText += 'transform: scale(' + scale + ');';
			}
			new_a.appendChild ( new_img );
			switch ( mode ) {
				case 0:
					parent.insertBefore ( new_a, parent.firstChild );
					break;
				case 1:
					parent.insertBefore ( new_a, e );
					break;
				case 2:
					parent.replaceChild ( new_a, e );
					break;
				case 3:
					parent.insertBefore ( new_a, e.nextElementSibling );
					break;
				case 4:
					parent.appendChild ( new_a );
			};
			if ( mode != 2 ) e.style = 'opacity: ' + opacity + ';'
		} )
	}
}
setTimeout ( gap, 100 );
