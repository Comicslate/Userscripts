// ==UserScript==
// @name            Comic Adapter: Freefall
// @version			2022.10.12
// @description     Extract Info for Comicslate
// @match           http*://freefall.purrsia.com/*
// @match           http*://freefall.glasswings.com/*
// @icon            https://www.google.com/s2/favicons?domain=freefall.purrsia.com
// @author			Rainbow-Spike
// @grant           none
// @run-at			document-end
// @supportURL		https://github.com/Comicslate/Userscripts/issues
// @updateURL		https://github.com/Comicslate/Userscripts/raw/master/Comic%20Adapter/Freefall.user.js
// @downloadURL		https://github.com/Comicslate/Userscripts/raw/master/Comic%20Adapter/Freefall.user.js
// ==/UserScript==

var	title = document . querySelector ( "title" ) . innerText . split ( / +/ ),
	num = title [ 1 ] . toString ( ) . padStart ( 4, "0" ) * 1,
	m_array = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
	date = title [ 4 ] + '-' + title [ 2 ] + '-' + title [ 3 ] . slice ( 0, 2 ),
	place, name, i, ins = '**\\\\<br>**';

for ( i = 0; i < m_array . length; i++ ) {
	date = date . replace ( m_array [ i ], ( i + 1 ) ) . replace ( /-(\d)(\D)/g, '-0$1$2' ) . replace ( ',', '' )
};
place = document . querySelector (
	window . location . href . search ( "ff" ) != -1
	? "font"
	: "table + b"
);
switch ( true ) {
	case num >= 3727: name = "June 30, 2021...<br><br>**Предварительное название: Калмар в цехе технического обслуживания" // ru
		+ ins + "Provisional Title: Sqid in the maintenance shop" // en
		+ ins + "Vorläufiger Titel: Tintefisch in der Wartungswerkstatt" // de
		+ ins + "Titre provisoire : Le kalmar dans l'atelier de maintenance" // fr
		+ ins + "Временно заглавие: Калма в цеха за поддръжка" // bg
		+ ins + "Título provisório: Lul na oficina de manutenção" // br
		+ ins + "Prozatímní název: Kraktice v údržbářské dílně" // cs
		+ ins + "Foreløbig titel: Bleksprutte i vedligeholdelsesværkstedet" // da
		+ ins + "Título provisional: Calmar en el taller de mantenimiento" // es
		+ ins + "Väliaikainen nimi: Calmari huoltoliikkeessä" // fi
		+ ins + "Ideiglenes cím: Tinthal a karbantartó műhelyben" // hu
		+ ins + "仮のタイトル 整備工場のイア" // ja
		+ ins + "Tymczasowy tytuł: Calmar w warsztacie konserwatorskim" // pl
		+ ins + "Título provisório: Luls na loja de manutenção" // pt
		+ ins + "Попередня назва: Калмар у цеху технічного обслуговування" // uk
/*		+ ins + "Geçici unvan: Bakım atölyesinde kalmar" // tr */
		+ ins + "临时标题:维修车间里的鱿余" // zh
		+ "**\\\\"; break;
	case num >= 3706: name = "June 30, 2021<br><br>Sqid in the maintenance shop"; break;
	case num >= 3696: name = "January 10, 2022<br>Sam\'s hunt for money and savings begins:"; break;
	case num >= 3667: name = "November 3, 2021<br>Prepping for dinner on a space station, with a slight detour:"; break;
	case num >= 3659: name = "October 15, 2021<br>Sam, Money, and the pits:"; break;
	case num >= 3649: name = "September 22, 2021<br>Gregor returns home:"; break;
	case num >= 3635: name = "August 20, 2021<br>Niomi passes the entrance courses:"; break;
	case num >= 3629: name = "August 6, 2021<br>A robot\'s interpretation of desires:"; break;
	case num >= 3617: name = "July 9, 2021<br>Meeting the Station Manager:"; break;
	case num >= 3613: name = "June 30, 2021<br>Return to the station:"; break;
	case num >= 3599: name = "May 28, 2021<br>Unused assets at the bomb factory"; break;
	case num >= 3575: name = "April 2, 2021<br>Out to get a reactor"; break;
	case num >= 3539: name = "January 11, 2021<br>Flo and Gregor at the ship"; break;
	case num >= 3534: name = "December 30, 2020<br>Wake up with Niomi"; break;
	case num >= 3530: name = "December 21, 2020<br>Focus back to Sam"; break;
	case num >= 3506: name = "October 26, 2020<br>Dinner with the Thurmads"; break;
	case num >= 3495: name = "September 30, 2020<br>Niomi reports for work"; break;
	case num >= 3491: name = "September 21, 2020<br>Sam pumps for information"; break;
	case num >= 3482: name = "August 31, 2020<br>Arrival at the parent's apartment"; break;
	case num >= 3479: name = "August 24, 2020<br>Niomi wraps up"; break;
	case num >= 3469: name = "July 31, 2020<br>Sam on the move"; break;
	case num >= 3466: name = "July 24, 2020<br>Meet the parents"; break;
	case num >= 3459: name = "July 8, 2020<br>Docked"; break;
	case num >= 3442: name = "May 29, 2020<br>Station approach"; break;
	case num >= 3424: name = "April 17, 2020<br>Niomi's messages home"; break;
	case num >= 3416: name = "March 30, 2020<br>Movies and other distractions"; break;
	case num >= 3389: name = "January 27, 2020<br>Parent talk"; break;
	case num >= 3378: name = "January 1, 2020<br>Year 2020"; break;
	case num >= 3376: name = "December 27, 2019<br>Niomi takes the watch"; break;
	case num >= 3365: name = "December 2, 2019<br>Sam takes the watch"; break;
	case num >= 3344: name = "October 14, 2019<br>Life problems in low gravity"; break;
	case num >= 3329: name = "September 9, 2019<br>Bridge relief"; break;
	case num >= 3299: name = "July 1, 2019<br>Stories of the homeworld. The theft of fire"; break;
	case num >= 3298: name = "June 28, 2019<br>Trolly problem"; break;
	case num >= 3289: name = "June 7, 2019<br>Which way is up?"; break;
	case num >= 3276: name = "May 8, 2019<br>Babysitting. In space!"; break;
	case num >= 3262: name = "April 5, 2019<br>Ready for launch"; break;
	case num >= 3259: name = "April 1, 2019<br>April Fool's day"; break;
	case num >= 3241: name = "February 15, 2019<br>Getting things ready via a montage"; break;
	case num >= 3227: name = "January 14, 2019<br>Extra passengers"; break;
	case num >= 3222: name = "January 2, 2019<br>Year 2019"; break;
	case num >= 3216: name = "December 19, 2018<br>What not to do while terraforming"; break;
	case num >= 3200: name = "November 12, 2018<br>Winston arrives at the ship"; break;
	case num >= 3187: name = "October 12, 2018<br>Polywell fusion and trip rundown"; break;
	case num >= 3180: name = "September 26, 2018<br>You always lose the ones you hate"; break;
	case num >= 3173: name = "September 10, 2018<br>Crime at it's most basic level"; break;
	case num >= 3164: name = "August 20, 2018<br>To teach a thief"; break;
	case num >= 3146: name = "July 9, 2018<br>Should we meet the parents?"; break;
	case num >= 3138: name = "June 20, 2018<br>Ducking the privacy issue"; break;
	case num >= 3129: name = "May 30, 2018<br>Food is ready, though with a few substitutions"; break;
	case num >= 3116: name = "April 30, 2018<br>Dinner from a developing ecosystem"; break;
	case num >= 3101: name = "March 7, 2018<br>Nuclear reactors and targeted advertising"; break;
	case num >= 3093: name = "March 7, 2018<br>What does it take to commit a crime around here?"; break;
	case num >= 3088: name = "February 23, 2018<br>Police indecision"; break;
	case num >= 3082: name = "February 9, 2018<br>Business isn't as much fun when it's legal"; break;
	case num >= 3065: name = "January 1, 2018<br>Year 2018"; break;
	case num >= 3061: name = "December 22, 2017<br>The future of angry mobs"; break;
	case num >= 3055: name = "December 8, 2017<br>Idea's into reality and other tragedies"; break;
	case num >= 3049: name = "November 24, 2017<br>Sam's great idea"; break;
	case num >= 3040: name = "November 3, 2017<br>Robot of the week"; break;
	case num >= 3034: name = "October 20, 2017<br>Waking up and early prevention"; break;
	case num >= 3028: name = "October 6, 2017<br>Mr. Kornada begins his community service"; break;
	case num >= 3024: name = "September 27, 2017<br>End of the day"; break;
	case num >= 3016: name = "September 8, 2017<br>Flashback to a puppy in training"; break;
	case num >= 2999: name = "July 31, 2017<br>The wolf at the door"; break;
	case num >= 2984: name = "June 23, 2017<br>The mayor hits the road"; break;
	case num >= 2975: name = "June 2, 2017<br>The verdict"; break;
	case num >= 2968: name = "May 17, 2017<br>Lunch with the mayor and courses for the future"; break;
	case num >= 2951: name = "April 7, 2017<br>Human-A.I. relations"; break;
	case num >= 2913: name = "January 9, 2017<br>The trial of Mr. Kornada"; break;
	case num >= 2910: name = "January 2, 2017<br>Year 2017"; break;
	case num >= 2900: name = "December 9, 2016<br>Meatloaf and other reasons to go to jail"; break;
	case num >= 2889: name = "November 14, 2016<br>Police and other obstacles"; break;
	case num >= 2874: name = "October 10, 2016<br>Outside of Faraday's cage"; break;
	case num >= 2862: name = "September 12, 2016<br>Is this Heaven?"; break;
	case num >= 2848: name = "August 10, 2016<br>What to do about Clippy?"; break;
	case num >= 2836: name = "July 13, 2016<br>Interviews and interrogations"; break;
	case num >= 2835: name = "July 11, 2016<br>End of Chapter One"; break;
	case num >= 2816: name = "May 27, 2016<br>Pancakes are always a good idea"; break;
	case num >= 2799: name = "April 18, 2016<br>Freedom"; break;
	case num >= 2794: name = "April 6, 2016<br>Blunt, defender of humanity"; break;
	case num >= 2779: name = "March 2, 2016<br>What Sam wants"; break;
	case num >= 2773: name = "February 17, 2016<br>Emancipation agreement"; break;
	case num >= 2767: name = "February 3, 2016<br>Gratitude is Not Quite Its Own Reward"; break;
	case num >= 2753: name = "January 1, 2016<br>Year 2016"; break;
	case num >= 2744: name = "December 11, 2015<br>BALL!"; break;
	case num >= 2724: name = "October 26, 2015<br>Welcome home, Mr. Ishiguro"; break;
	case num >= 2705: name = "September 11, 2015<br>Raibert writes his report in the park"; break;
	case num >= 2696: name = "August 21, 2015<br>A sunny sunday morning"; break;
	case num >= 2689: name = "August 5, 2015<br>House guests"; break;
	case num >= 2681: name = "July 17, 2015<br>The chief visits Raibert"; break;
	case num >= 2678: name = "July 10, 2015<br>Hi"; break;
	case num >= 2663: name = "June 5, 2015<br>Revelations on the voyage home"; break;
	case num >= 2655: name = "May 18, 2015<br>Going to meet the plane"; break;
	case num >= 2649: name = "May 4, 2015<br>Pizza, we have liftoff"; break;
	case num >= 2637: name = "April 6, 2015<br>Hang on, There's someone at the door"; break;
	case num >= 2633: name = "March 27, 2015<br>Out of control group"; break;
	case num >= 2626: name = "March 11, 2015<br>Doctor M consults with Doctor B"; break;
	case num >= 2621: name = "February 27, 2015<br>Cold arctic logic"; break;
	case num >= 2613: name = "February 9, 2015<br>Orders and disclosures"; break;
	case num >= 2604: name = "January 19, 2015<br>Plots and plans"; break;
	case num >= 2597: name = "January 2, 2015<br>Year 2015 -- Wake up, we found her"; break;
	case num >= 2593: name = "December 24, 2014<br>Absolute Power"; break;
	case num >= 2584: name = "December 3, 2014<br>Now I really feel contaminated"; break;
	case num >= 2578: name = "November 19, 2014<br>Exit procedure"; break;
	case num >= 2571: name = "November 3, 2014<br>Free puppies, inquire within"; break;
	case num >= 2558: name = "October 3, 2014<br>The police always call while I'm adjusting my wolf"; break;
	case num >= 2548: name = "September 10, 2014<br>A chat with the commander"; break;
	case num >= 2527: name = "July 23, 2014<br>Socks, Spoons and Neural Nets"; break;
	case num >= 2522: name = "July 11, 2014<br>Mr. Raibert, You've Got Mail"; break;
	case num >= 2504: name = "May 28, 2014<br>The Debate"; break;
	case num >= 2503: name = "May 26, 2014<br>Robots have memories"; break;
	case num >= 2492: name = "April 28, 2014<br>Sam leads the way"; break;
	case num >= 2477: name = "March 24, 2014<br>A meeting of the mehanical minds"; break;
	case num >= 2467: name = "February 28, 2014<br>Doctor Bowman, I presume?"; break;
	case num >= 2442: name = "January 1, 2014<br>Year 2014"; break;
	case num >= 2431: name = "December 6, 2013<br>Florence gets out for a walk"; break;
	case num >= 2408: name = "October 7, 2013<br>Sam figures it out"; break;
	case num >= 2390: name = "August 26, 2013<br>Meanwhile, down at the south pole"; break;
	case num >= 2380: name = "August 2, 2013<br>Max Post talks with the Mayor"; break;
	case num >= 2357: name = "June 10, 2013<br>Chaos in the streets, a good day for Sam"; break;
	case num >= 2352: name = "May 29, 2013<br>Good morning, Mr. Kornada"; break;
	case num >= 2334: name = "April 17, 2013<br>Jailbreak"; break;
	case num >= 2295: name = "January 16, 2013<br>What's it take to get arrested in this town?"; break;
	case num >= 2289: name = "January 2, 2013<br>Year 2013"; break;
	case num >= 2285: name = "December 24, 2012<br>Midnight and movement is restored"; break;
	case num >= 2282: name = "December 17, 2012<br>Clippy discovers his plan has failed"; break;
	case num >= 2260: name = "October 26, 2012<br>Into the Ecosystems Unlimited compound"; break;
	case num >= 2254: name = "October 12, 2012<br>Robot chases wolf"; break;
	case num >= 2240: name = "September 10, 2012<br>Edge reactivates Blunt"; break;
	case num >= 2232: name = "August 22, 2012<br>Spiking the servers"; break;
	case num >= 2214: name = "July 11, 2012<br>Edge and immunity"; break;
	case num >= 2201: name = "June 11, 2012<br>A secret meeting and Sawtooth's birthday"; break;
	case num >= 2157: name = "February 29, 2012<br>Breaking and entering for fun and profit"; break;
	case num >= 2133: name = "January 2, 2012<br>Year 2012"; break;
	case num >= 2116: name = "November 23, 2011<br>Off to see the Mayor"; break;
	case num >= 2096: name = "October 7, 2011<br>Dumpster diving for wolves"; break;
	case num >= 2079: name = "August 29, 2011<br>Off to see Mr. Raibert"; break;
	case num >= 2070: name = "August 8, 2011<br>Clippy spots a wolf and tells Mr. Kornada"; break;
	case num >= 2063: name = "July 22, 2011<br>Edge and the word filter"; break;
	case num >= 1980: name = "January 05, 2011<br>When robot factories go to war"; break;
	case num >= 1979: name = "January 03, 2011<br>Year 2011"; break;
	case num >= 1938: name = "September 22, 2010<br>Day of the dead"; break;
	case num >= 1902: name = "March 10, 2010<br>Florence gets the sticky notes of doom"; break;
	case num >= 1854: name = "March 10, 2010<br>Resupplying satellites"; break;
	case num >= 1831: name = "January 15, 2010<br>Finding a volunteer for the sticky notes of doom"; break;
	case num >= 1825: name = "January 1, 2010<br>Year 2010"; break;
	case num >= 1822: name = "December 23, 2009<br>Buying reaction mass at Kenetic Chemicals"; break;
	case num >= 1804: name = "November 11, 2009<br>Edge and Blunt"; break;
	case num >= 1769: name = "August 21, 2009<br>The Mayor joins in"; break;
	case num >= 1740: name = "June 15, 2009<br>Troubles with the baker and pies for all"; break;
	case num >= 1692: name = "February 13, 2009<br>Home again"; break;
	case num >= 1674: name = "January 2, 2009<br>Year 2009"; break;
	case num >= 1667: name = "December 12, 2008<br>Florence is the problem?"; break;
	case num >= 1607: name = "July 23, 2008<br>Robot and Artificial Intelligence Development. R.A.I.D."; break;
	case num >= 1551: name = "March 14, 2008<br>Off to Ecosystem's Unlimited"; break;
	case num >= 1526: name = "January 16, 2008<br>A call from the mayor"; break;
	case num >= 1520: name = "January 2, 2008<br>Year 2008"; break;
	case num >= 1499: name = "November 14, 2007<br>Dog Pound break out"; break;
	case num >= 1477: name = "September 24, 2007<br>A walk in the park with Polly"; break;
	case num >= 1465: name = "August 27, 2007<br>Sawtooth awakens"; break;
	case num >= 1452: name = "July 27, 2007<br>Safeguards"; break;
	case num >= 1435: name = "June 18, 2007<br>A stop with Qwerty"; break;
	case num >= 1398: name = "March 23, 2007<br>Robot tailors and robot consciousness"; break;
	case num >= 1387: name = "February 26, 2007<br>Omniquantism"; break;
	case num >= 1363: name = "January 1, 2007<br>Year 2007"; break;
	case num >= 1351: name = "December 4, 2006<br>The robot meeting begins"; break;
	case num >= 1344: name = "November 17, 2006<br>Polly!"; break;
	case num >= 1314: name = "November 8, 2006<br>The muggers revealed"; break;
	case num >= 1295: name = "July 26, 2006<br>Rescue!"; break;
	case num >= 1277: name = "June 14, 2006<br>Robomuggers"; break;
	case num >= 1265: name = "May 17, 2006<br>Making life interesting for the mayor"; break;
	case num >= 1253: name = "April 19, 2006<br>Start of the color archives"; break;
	case num >= 1252: name = "April 17, 2006<br>Dumpsters. The original fast food"; break;
	case num >= 1207: name = "January 2, 2006<br>Year 2006"; break;
	case num >= 1200: name = "December 9, 2005<br>Tail chasing and fish catching"; break;
	case num >= 1194: name = "November 25, 2005<br>Saturday morning"; break;
	case num >= 1168: name = "September 25, 2005<br>Boids"; break;
	case num >= 1143: name = "July 29, 2005<br>After dinner thoughts"; break;
	case num >= 1129: name = "June 27, 2005<br>Escape into the museum"; break;
	case num >= 1109: name = "May 11, 2005<br>After dinner"; break;
	case num >= 1095: name = "April 8, 2005<br>At the museum"; break;
	case num >= 1072: name = "February 14, 2005<br>Dropping off Winston"; break;
	case num >= 1060: name = "January 17, 2005<br>Honest Sam"; break;
	case num >= 1054: name = "January 3, 2005<br>Year 2005"; break;
	case num >= 1032: name = "November 12, 2004<br>Smells like dinner with Winston"; break;
	case num >= 1016: name = "October 6, 2004<br>A quick exit before the creditors arrive"; break;
	case num >= 1010: name = "September 22, 2004<br>Re Entry"; break;
	case num >= 970: name = "June 21, 2004<br>Space Walkies"; break;
	case num >= 937: name = "April 5, 2004<br>Sam takes the watch"; break;
	case num >= 897: name = "January 2, 2004<br>Year 2004"; break;
	case num >= 888: name = "December 12, 2003<br>Yes,they're in space"; break;
	case num >= 862: name = "October 13, 2003<br>Launch"; break;
	case num >= 845: name = "September 3, 2003<br>Calling Winston"; break;
	case num >= 817: name = "June 30, 2003<br>Return of the watch and obligatory chase scene"; break;
	case num >= 789: name = "April 25, 2003<br>The inspector cometh"; break;
	case num >= 777: name = "April 28, 2003<br>Mutiny!"; break;
	case num >= 743: name = "January 1, 2003<br>Dress to kilt"; break;
	case num >= 734: name = "December 11, 2002<br>Satellite delivery"; break;
	case num >= 724: name = "November 18, 2002<br>A slight difference among the robots"; break;
	case num >= 662: name = "June 26, 2002<br>Arrival at the mall"; break;
	case num >= 640: name = "May 6, 2002<br>Meet the kids"; break;
	case num >= 607: name = "February 18, 2002<br>Time to wake up and stalk the coffee"; break;
	case num >= 587: name = "January 2, 2002<br>Year 2002"; break;
	case num >= 582: name = "December 24, 2001<br>Hey, where's my wallet?"; break;
	case num >= 548: name = "October 3, 2001<br>Niomi and Tangent show up to repair the water pump"; break;
	case num >= 536: name = "September 5, 2001<br>There are better things to wake up to"; break;
	case num >= 527: name = "August 15, 2001<br>Business opportunities, don't wait up"; break;
	case num >= 510: name = "May 10, 2001<br>Off to new destinations, if we can figure out where we're going"; break;
	case num >= 473: name = "April 10, 2001<br>Sam to the rescue!"; break;
	case num >= 463: name = "March 18, 2001<br>Meanwhile, back at the vet's..."; break;
	case num >= 463: name = "January 1, 2001<br>You ought to be in pictures"; break;
	case num >= 369: name = "August 4, 2000<br>Sam the card flounder"; break;
	case num >= 336: name = "May 17, 2000<br>Canine in the water"; break;
	case num >= 324: name = "April 26, 2000<br>Well, we got almost everyone back"; break;
	case num >= 305: name = "March 6, 2000<br>We came here to rescue this?"; break;
	case num >= 293: name = "February 4, 2000<br>Hurricane Joe is moving in"; break;
	case num >= 277: name = "January 3, 2000<br>Year 2000"; break;
	case num >= 244: name = "October 18, 1999<br>Covering your tracks"; break;
	case num >= 226: name = "September 6, 1999<br>How to catch a deer. Sort of"; break;
	case num >= 209: name = "July 28, 1999<br>Trip to \"The Golden Trough\", the finest in bad cuisine"; break;
	case num >= 199: name = "July 5, 1999<br>A gratuitous shower scene"; break;
	case num >= 183: name = "May 28, 1999<br>Lunch and bunnies"; break;
	case num >= 179: name = "May 19, 1999<br>These people have got to get their priorities straight"; break;
	case num >= 167: name = "April 21, 1999<br>Power! We have power! Or how to start a fusion reactor"; break;
	case num >= 142: name = "February 22, 1999<br>Repairs on the port fusion engine begin. How much trouble can it be to replace a section of pipe?"; break;
	case num >= 138: name = "February 12, 1999<br>Home again. Arrival back at the ship"; break;
	case num >= 120: name = "January 1, 1999<br>Year 1999"; break;
	case num >= 114: name = "December 18, 1998<br>Catch! The first appearance of Sawtooth Rivergrinder"; break;
	case num >= 102: name = "November 20, 1998<br>A truck, a JATO rocket, and duct tape. Three great things that go great together!"; break;
	case num >= 76: name = "September 21, 1998<br>Fun with an open ventilation shaft"; break;
	case num >= 66: name = "August 28, 1998<br>AIEEE! Radiation!"; break;
	case num >= 60: name = "August 14, 1998<br>Arrival at the abandoned colony ship"; break;
	case num >= 44: name = "July 8, 1998<br>Asteroids and other close encounters"; break;
	case num >= 29: name = "June 3, 1998<br>The road trip to the abandoned colony ship gets underway"; break;
	case num >= 15: name = "May 1, 1998<br>Arrival at the ship. Repairs begin. Sort of"; break;
	case num >= 8: name = "April 15, 1998<br>Doggy! First appearance of Florence"; break;
	case num = 1: name = "April 9, 1998<br>The adventure begins!"; break;
	default: name = '×';
};
place . innerHTML += ' ' + num + '<br>' + name + '<br>[!0.987]' + date + '<br><br>';
