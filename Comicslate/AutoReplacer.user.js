// ==UserScript==
// @name			Comicslate AutoReplacer
// @version			2020.06.12
// @description		Автозамены в Комикслейте
// @include			http*://*comicslate.org/*
// @icon			https://www.google.com/s2/favicons?domain=comicslate.org
// @author			Rainbow-Spike
// @grant			none
// ==/UserScript==

var wiki__text = document.querySelector ( "#wiki__text" ),
	repl = [
		//[ "New", "Commander Kitty" ],
		//[ "Old", "Commander Kitty: Origins" ],
		[ "Sequential-art", "Sequential Art" ],
		//[ " Fur ", " Sequential Art (Версия Зверь *TranslayerЪ* Внутри) " ],

		[ "The-first-king", "The First King" ],
		[ "Maishas-story", "Maisha's story"],

		[ "Wolfs-rain-next-generation", "Wolf's Rain – Next Generation" ],
		[ "Chakra-battle-of-the-titans", "Chakra: Battle of the Titans" ],
		[ "Be-reflected-in-my-eyes", "Be reflected in my eyes" ],
		[ "Behind-the-woods", "Behind the woods" ],

		[ "Ozy-and-millie", "Ozy and Millie" ],
		[ "Dan-and-mabs-furry-adventures", "Dan and Mab's Furry Adventures" ],
		//[ "New", "My Life with Fel (new)" ],
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

		[ "Bunny-mischief", "Bunny Mischief" ],
		[ "Goblin-hollow", "Goblin Hollow" ],
		[ "Legend-of-zhathar", "Legend of Zhathar" ],
		[ "Conejo-frustrado", "Conejo Frustrado" ],
		//[ "Big", "Inverloch /resize/" ],
		//[ "Orig", "Inverloch" ],
		[ "Off-white", "Off-White" ],
		[ "The-roomies", "The Roomies" ],

		[ "Yet-another-fantasy-gamer-comic", "Yet Another Fantasy Gamer Comic" ],
		[ "Nerf-now", "Nerf Now!!" ],
		[ "Gamercat", "GaMERCaT" ],
		// [ "New", "Living with hipstergirl and gamergirl" ],
		[ "Nerd-rage", "Nerd Rage" ],
		[ "Diario-magico", "Diario Magico" ],
		[ "Awkward-zombie", "AWKWARD ZOMBIE" ],

		[ "Vida-de-programador", "Vida de Programador" ],
		[ "Sluggy-freelance", "Sluggy Freelance" ],
		[ "Dinosaur-comics", "Dinosaur Comics" ],
		[ "Little-bobby", "Little Bobby" ],
		[ "Zomcom", "ZomCom" ],

		// [ /\{\{(\d+).(gif|j?pn?g)\}\}/, "{{cotan>$1.$2}}\n{{<cotan}}" ],
		// [ "", "" ],
	];

if ( wiki__text != null ) {
	var text = wiki__text.innerHTML;
	for ( var i = 0; i < repl.length; i++ ) text = text.replace ( repl [ i ][ 0 ], repl [ i ][ 1 ] );
	wiki__text.innerHTML = text;
}
