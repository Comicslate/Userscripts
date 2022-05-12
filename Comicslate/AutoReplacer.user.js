// ==UserScript==
// @name			Comicslate AutoReplacer
// @version			2021.06.01
// @description		Автозамены в Комикслейте
// @match			http*://*comicslate.org/*do=edit*
// @match			http*://*comicslate.org/*do=draft*
// @exclude			http*://*comicslate.org/*/index*
// @icon			https://comicslate.org/favicon.ico
// @author			Rainbow-Spike
// @grant			none
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/AutoReplacer.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/AutoReplacer.user.js
// ==/UserScript==

var wiki__text = document . querySelector ( "#wiki__text" ),
	sum = document . querySelector ( "#edit__summary" ),
	repl = [
		//[ "New", "Commander Kitty" ],
		[ "Sequential-art", "Sequential Art" ],
		//[ " Fur ", " Sequential Art (Версия Зверь *TranslayerЪ* Внутри) " ],

		[ "Missing-pieces", "Missing Pieces" ],
		[ "The-first-king", "The First King" ],
		[ "Maishas-story", "Maisha's story"],
		[ "Taka-alternative-theory", "Taka alternative Theory"],
		[ "Kings-and-vagabonds", "Kings and Vagabonds"],
		[ "Scars-reign", "Scar's Reign" ],
		[ "The-east-land-chronicles", "The East Land Chronicles" ],
		[ "Short-stories", "Истории от Savu" ],
		[ "The-lost-days", "The Lost Days" ],
		[ "The-lion-queen", "The Lion Queen"],
		[ "Heir-to-pride-rock", "Heir to Pride Rock" ],

		[ "Ask-princess-molestia", "Ask Princess Molestia" ],

		[ "Wolfs-rain-next-generation", "Wolf's Rain – Next Generation" ],
		[ "Be-reflected-in-my-eyes", "Be reflected in my eyes" ],
		[ "Behind-the-woods", "Behind the woods" ],

		[ "Ozy-and-millie", "Ozy and Millie" ],
		[ "Dan-and-mabs-furry-adventures", "Dan and Mab's Furry Adventures" ],
		// [ "New", "My Life with Fel (new)" ],
		[ "Heavenly-nostrils", "Heavenly Nostrils" ],
		[ "Tales-of-the-questor", "Tales of the Questor" ],
		[ "Theri-there", "Theri There" ],
		[ "Sandra-and-woo", "Sandra and Woo" ],
		[ "Tofauti-sawa", "Tofauti Sawa" ],
		[ "Ichabod-the-optimistic-canine", "Ichabod the Optimistic Canine" ],
		[ "Beyond-the-western-deep", "Beyond the Western Deep" ],
		[ "Tangent-valley", "Tangent Valley" ],
		[ "Ambers-no-brainers", "Amber's No-Brainers" ],
		[ "Peanut-berry-sundae", "Peanut Berry Sundae" ],
		[ "Furry-guys", "Furry Guys" ],
		[ "College-catastrophe", "College Catastrophe" ],
		[ "Nine-to-nine", "Nine to Nine" ],
		[ "Swords-and-sausages", "Swords and Sausages" ],

		[ "Bunny-mischief", "Bunny Mischief" ],
		[ "Goblin-hollow", "Goblin Hollow" ],
		[ "Legend-of-zhathar", "Legend of Zhathar" ],
		[ "Conejo-frustrado", "Conejo Frustrado" ],
		[ "Off-white", "Off-White" ],
		[ "The-roomies", "The Roomies" ],

		[ "Yet-another-fantasy-gamer-comic", "Yet Another Fantasy Gamer Comic" ],
		[ "Nerf-now", "Nerf Now!!" ],
		[ "Gamercat", "GaMERCaT" ],
		// [ "New", "Living with hipstergirl and gamergirl" ],
		[ "Nerd-rage", "Nerd Rage" ],
		[ "Diario-magico", "Diario Magico" ],
		[ "Awkward-zombie", "AWKWARD ZOMBIE" ],
		[ "It-sucks-to-be-weegie", "It sucks to be Weegie!" ],

		[ "Vida-de-programador", "Vida de Programador" ],
		[ "Sluggy-freelance", "Sluggy Freelance" ],
		[ "Dinosaur-comics", "Dinosaur Comics" ],
		[ "Little-bobby", "Little Bobby" ],
		[ "Zomcom", "ZomCom" ],

		// [ "", "" ],
	];

if ( wiki__text != null ) {
	var text = wiki__text . value, text1 = text;
	for ( var i = 0; i < repl . length; i++ ) text = text . replace ( repl [ i ] [ 0 ], repl [ i ] [ 1 ] );
	wiki__text . value = text;
}

if ( sum && sum . value != null && text1 != text ) {
	if ( sum . value != '' ) sum . value += ' / ';
	sum . value += 'AR 2021.05.30';
}
