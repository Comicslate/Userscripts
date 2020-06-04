// ==UserScript==
// @name            Comic Adapter: Nerf Now
// @version         2020.06.05
// @description     Extract Info for Comicslate
// @include         http*://*nerfnow.com*
// @icon            https://www.google.com/s2/favicons?domain=nerfnow.com
// @author          Rainbow-Spike
// @grant           none
// ==/UserScript==

// SELECT
function selectblock ( name ) {
	var rng = document.createRange ( );
	rng.selectNode ( name );
	var sel = window.getSelection ( );
	sel.removeAllRanges ( );
	sel.addRange ( rng );
}

function action ( ) {

	// HOTKEYS
	var nav = document.querySelector ( '#navigation ul' ),
		prev = document.querySelector ( '#nav_previous' ),
		prev_a = document.querySelector ( '#nav_previous a' ),
		next = document.querySelector ( '#nav_next' ),
		next_a = document.querySelector ( '#nav_next a' );
	if ( prev_a != null ) prev_a.accessKey = 'z';
	if ( next_a != null ) next_a.accessKey = 'x';

	// ISSUE NUMBER
	var num = ( prev_a != null ) ? ( parseInt ( prev_a.href.match ( /[^\/]+$/ ) ) + 1 ) : 4,
		num_li = document.createElement ( 'li' ),
		num_b = document.createElement ( 'b' );
	num_li.append ( num_b );
	num_b.append ( num );
	if ( nav != null ) nav.insertBefore ( num_li, next );

	// IMAGELINK
	var com_div = document.querySelector ( '#comic' ),
		com_a = document.querySelector ( '#comic a' ),
		com_img = document.querySelector ( '#comic img' ),
			com_title = ( com_img != null ) ? ( '<br>**' + com_img.title + '**' ) : '';
	if ( com_a == null ) {
		com_a = document.createElement ( 'a' );
		com_a.append ( com_img );
		if ( com_div != null ) com_div.append ( com_a );
	};
	if ( com_img != null ) com_a.href = com_img.src;

	// ASSEMBLY
	var texter = '== Nerf Now!! ' + num + ' ==' + com_title + '<br><br>{cnav}<br>{{' + num + '.png}}<br>',
		comcon = document.querySelector ( '.comment-container' ),
		comm = document.querySelector ( '.comment' );
	if ( comm != null ) {
		var ps = comm.querySelectorAll ( 'p' ),
			lastp = ps.length - 1;
		if ( ps [ lastp ].innerHTML == '&nbsp;' ) comm.removeChild ( ps [ lastp ] );
		texter += comm.innerHTML
			.replace ( /\<a href="([^"]+)"\>([^\<]+)\<\/a>/g, '[[$1|$2]]' )
			.replace ( /\<(i|em)>([^\<]+)\<\/(i|em)>/g, '//$2//' )
			.replace ( /\<(b|strong)>([^\<]+)\<\/(b|strong)>/g, '**$2**' );
	}
	texter += '{cnav}';
	if ( comcon != null ) {
		comcon.innerHTML = texter;
		selectblock ( comcon );
	}
}
setTimeout ( action, 100 );
