// ==UserScript==
// @name			Comicslate Freefall AutoReplacer
// @version			2023.11.20
// @description		Автозамены титулов в Фрифоле
// @match			http*://*comicslate.org/*/freefall/*do=edit*
// @match			http*://*comicslate.org/*/freefall/*do=draft*
// @exclude			http*://*comicslate.org/*/h*
// @exclude			http*://*comicslate.org/*/d*
// @exclude			http*://*comicslate.org/*/freefall/index*
// @icon			https://comicslate.org/favicon.ico
// @author			Rainbow-Spike
// @grant			none
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/Freefall AutoReplacer.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comicslate/Freefall AutoReplacer.user.js
// ==/UserScript==

var wiki__text = document . querySelector ( "#wiki__text" ),
	repl = {
		ru: "Предварительное название: Калмар в цехе технического обслуживания",
		en: "Provisional Title: Sqid in the maintenance shop",
		de: "Vorläufiger Titel: Tintefisch in der Wartungswerkstatt",
		fr: "Titre provisoire : Le kalmar dans l'atelier de maintenance",
		bg: "Временно заглавие: Калма в цеха за поддръжка",
		br: "Título provisório: Lul na oficina de manutenção",
		cs: "Prozatímní název: Kraktice v údržbářské dílně",
		da: "Foreløbig titel: Bleksprutte i vedligeholdelsesværkstedet",
		es: "Título provisional: Calmar en el taller de mantenimiento",
		fi: "Väliaikainen nimi: Calmari huoltoliikkeessä",
		hu: "Ideiglenes cím: Tinthal a karbantartó műhelyben",
		ja: "仮のタイトル 整備工場のイア",
		pl: "Tymczasowy tytuł: Calmar w warsztacie konserwatorskim",
		pt: "Título provisório: Luls na loja de manutenção",
		uk: "Попередня назва: Калмар у цеху технічного обслуговування",
		zh: "临时标题:维修车间里的鱿余",
	};

if ( wiki__text != null ) wiki__text . value = wiki__text . value . replace ( repl . ru , repl [ JSINFO . lang ] ) . replace ( repl . bg , repl [ JSINFO . lang ] )
