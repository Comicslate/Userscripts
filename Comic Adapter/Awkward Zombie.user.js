// ==UserScript==
// @name			Comic Adapter: Awkward Zombie
// @version			2022.05.21
// @description		Extract Info for Comicslate
// @match			https://www.awkwardzombie.com
// @icon			https://www.google.com/s2/favicons?domain=awkwardzombie.com
// @author			Rainbow-Spike
// @grant			GM_setClipboard
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comic%20Adapter/Awkward%20Zombie.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comic%20Adapter/Awkward%20Zombie.user.js
// ==/UserScript==

function h ( tag, props = {} ) {
	return Object . assign ( document . createElement ( tag ), props );
}

function action ( ) {
	const title = document . querySelector ( ".cc-newsheader a" ) . innerHTML || document . querySelector ( ".cc-newsheader" ) . innerHTML || "",
		tag = document . querySelector ( ".news-storyline a" ) . innerHTML || "",
		comm = document . querySelector ( ".cc-newsbody" ) . innerHTML || "",
		num = document . querySelector ( "#cc-comic" ) . getAttribute ( 'src' ) . replace ( /.*comic(\d+).*/, "$1" ) * 1 + 0,
		num0 = num . toString ( ) . padStart ( 4, "0" ),
		texter = "== AWKWARD ZOMBIE " + num0 + " ==\n"

		+ (
			title != ""
			? "**" + title . charAt ( 0 ) . toUpperCase ( ) + title . slice ( 1 ) . replace ( /\.$/, "" ) . replace ( /Part(\d)/, "Часть $1" ) + "**\n"
			: ""
		)
		+ "\n"

		+ "{"
		+ (
			num == 1
			? "index&lt;"
			: ""
		)
		+ "cnav}\n"

		+ "{{" + num0 + ".png}}\n"

		+ (
			num <= 12
			? "\n=== Фотошоп ===\n\n{{" + num0 + "-r.jpg}}\n"
			: ""
		)

		+ (
			tag !== "None"
			? '{{tag>"' + tag + '"}}'
			: "" ) + "\n"

		+ (
			comm != ""
			? comm
				. replace ( /<a href="([^"]+?)" *> *([^<]+?) *<\/a>/g, "[[$1|$2]]" ) . replace ( /<img src="([^"]+?)" *>/g, "{{$1}}" )
				. replace ( / *<br>(<br>)+/g, "\n\n" ) . replace ( / <br>/g, " " ) . replace ( /<br>/g, "\\\\\n" )
				. replace ( /<\/?(p)>/g, "" ) . replace ( /<\/?(i|em)[^>m]*>/g, "//" ) . replace ( /<\/?(b|strong)[^>r]*>/g, "**" ) . replace ( /<\/?u[^>]*>/g, "__" )
				. replace ( /<center>/g, "&lt;box center unborder unbg>" ) . replace ( /<\/center>/g, "&lt;/box>" )
				. replace ( /--/g, "–" ) . replace ( /\.\.\./g, "…" )
			+ '\n'
			: ""
		);
	GM_setClipboard ( texter, "text" );
};

function insertButton ( ) {
	const Button = h ( 'input', {
		type: 'button',
		value: '[[ ]]',
		title: '[[ ]]',
		style: 'position: fixed; bottom: 20px; left: 50px;',
		onclick: ( event ) => action ( ),
	} );
	document . body . appendChild ( Button );
}

insertButton ( );
