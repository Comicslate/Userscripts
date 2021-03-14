// ==UserScript==
// @name            Comic Adapter: Freefall
// @version			2021.03.14
// @description     Extract Info for Comicslate
// @include         http*://freefall.purrsia.com/*
// @include         http*://freefall.glasswings.com/*
// @icon            https://www.google.com/s2/favicons?domain=freefall.purrsia.com
// @author			Rainbow-Spike
// @grant           none
// ==/UserScript==

var	number = document.querySelector ( "img" ).src.match ( /f[cv]0(\d+)/ ) [ 1 ],
	num = number * 1,
	title = '',
	name;

title = document.querySelector (
	window.location.href.search ( "ff" ) != -1
	? "font"
	: "table + b"
);
switch ( true ) {
	case num >= 3539: name = "Flo and Gregor at the ship – January 11, 2021"; break;
	case num >= 3534: name = "Wake up with Niomi – December 30, 2020"; break;
	case num >= 3530: name = "Focus back to Sam – December 21, 2020"; break;
	case num >= 3506: name = "Dinner with the Thurmads – October 26, 2020"; break;
	case num >= 3495: name = "Niomi reports for work – September 30, 2020"; break;
	case num >= 3491: name = "Sam pumps for information – September 21, 2020"; break;
	case num >= 3482: name = "Arrival at the parent's apartment – August 31, 2020"; break;
	case num >= 3479: name = "Niomi wraps up – August 24, 2020"; break;
	case num >= 3469: name = "Sam on the move – July 31, 2020"; break;
	case num >= 3466: name = "Meet the parents – July 24, 2020"; break;
	case num >= 3459: name = "Docked – July 8, 2020"; break;
	case num >= 3442: name = "Station approach – May 29, 2020"; break;
	case num >= 3424: name = "Niomi's messages home – April 17, 2020"; break;
	case num >= 3416: name = "Movies and other distractions – March 30, 2020"; break;
	case num >= 3389: name = "Parent talk – January 27, 2020"; break;
	case num >= 3378: name = "Year 2020 – January 1, 2020"; break;
	case num >= 3376: name = "Niomi takes the watch – December 27, 2019"; break;
	case num >= 3365: name = "Sam takes the watch – December 2, 2019"; break;
	case num >= 3344: name = "Life problems in low gravity – October 14, 2019"; break;
	case num >= 3329: name = "Bridge relief – September 9, 2019"; break;
	case num >= 3299: name = "Stories of the homeworld. The theft of fire – July 1, 2019"; break;
	case num >= 3298: name = "Trolly problem – June 28, 2019"; break;
	case num >= 3289: name = "Which way is up? – June 7, 2019"; break;
	case num >= 3276: name = "Babysitting. In space! – May 8, 2019"; break;
	case num >= 3262: name = "Ready for launch – April 5, 2019"; break;
	case num >= 3259: name = "April Fool's day – April 1, 2019"; break;
	case num >= 3241: name = "Getting things ready via a montage – February 15, 2019"; break;
	case num >= 3227: name = "Extra passengers – January 14, 2019"; break;
	case num >= 3222: name = "Year 2019 – January 2, 2019"; break;
	case num >= 3216: name = "What not to do while terraforming – December 19, 2018"; break;
	case num >= 3200: name = "Winston arrives at the ship – November 12, 2018"; break;
	case num >= 3187: name = "Polywell fusion and trip rundown – October 12, 2018"; break;
	case num >= 3180: name = "You always lose the ones you hate – September 26, 2018"; break;
	case num >= 3173: name = "Crime at it's most basic level – September 10, 2018"; break;
	case num >= 3164: name = "To teach a thief – August 20, 2018"; break;
	case num >= 3146: name = "Should we meet the parents? – July 9, 2018"; break;
	case num >= 3138: name = "Ducking the privacy issue – June 20, 2018"; break;
	case num >= 3129: name = "Food is ready, though with a few substitutions – May 30, 2018"; break;
	case num >= 3116: name = "Dinner from a developing ecosystem – April 30, 2018"; break;
	case num >= 3101: name = "Nuclear reactors and targeted advertising – March 7, 2018"; break;
	case num >= 3093: name = "What does it take to commit a crime around here? – March 7, 2018"; break;
	case num >= 3088: name = "Police indecision – February 23, 2018"; break;
	case num >= 3082: name = "Business isn't as much fun when it's legal – February 9, 2018"; break;
	case num >= 3065: name = "Year 2018 – January 1, 2018"; break;
	case num >= 3061: name = "The future of angry mobs – December 22, 2017"; break;
	case num >= 3055: name = "Idea's into reality and other tragedies – December 8, 2017"; break;
	case num >= 3049: name = "Sam's great idea – November 24, 2017"; break;
	case num >= 3040: name = "Robot of the week – November 3, 2017"; break;
	case num >= 3034: name = "Waking up and early prevention – October 20, 2017"; break;
	case num >= 3028: name = "Mr. Kornada begins his community service – October 6, 2017"; break;
	case num >= 3024: name = "End of the day – September 27, 2017"; break;
	case num >= 3016: name = "Flashback to a puppy in training – September 8, 2017"; break;
	case num >= 2999: name = "The wolf at the door – July 31, 2017"; break;
	case num >= 2984: name = "The mayor hits the road – June 23, 2017"; break;
	case num >= 2975: name = "The verdict – June 2, 2017"; break;
	case num >= 2968: name = "Lunch with the mayor and courses for the future – May 17, 2017"; break;
	case num >= 2951: name = "Human-A.I. relations – April 7, 2017"; break;
	case num >= 2913: name = "The trial of Mr. Kornada – January 9, 2017"; break;
	case num >= 2910: name = "Year 2017 – January 2, 2017"; break;
	case num >= 2900: name = "Meatloaf and other reasons to go to jail – December 9, 2016"; break;
	case num >= 2889: name = "Police and other obstacles – November 14, 2016"; break;
	case num >= 2874: name = "Outside of Faraday's cage – October 10, 2016"; break;
	case num >= 2862: name = "Is this Heaven? – September 12, 2016"; break;
	case num >= 2848: name = "What to do about Clippy? – August 10, 2016"; break;
	case num >= 2836: name = "Interviews and interrogations – July 13, 2016"; break;
	case num >= 2835: name = "End of Chapter One – July 11, 2016"; break;
	case num >= 2816: name = "Pancakes are always a good idea – May 27, 2016"; break;
	case num >= 2799: name = "Freedom – April 18, 2016"; break;
	case num >= 2794: name = "Blunt, defender of humanity – April 6, 2016"; break;
	case num >= 2779: name = "What Sam wants – March 2, 2016"; break;
	case num >= 2773: name = "Emancipation agreement – February 17, 2016"; break;
	case num >= 2767: name = "Gratitude is Not Quite Its Own Reward – February 3, 2016"; break;
	case num >= 2753: name = "Year 2016 – January 1, 2016"; break;
	case num >= 2744: name = "BALL! – December 11, 2015"; break;
	case num >= 2724: name = "Welcome home, Mr. Ishiguro – October 26, 2015"; break;
	case num >= 2705: name = "Raibert writes his report in the park – September 11, 2015"; break;
	case num >= 2696: name = "A sunny sunday morning – August 21, 2015"; break;
	case num >= 2689: name = "House guests – August 5, 2015"; break;
	case num >= 2681: name = "The chief visits Raibert – July 17, 2015"; break;
	case num >= 2678: name = "Hi – July 10, 2015"; break;
	case num >= 2663: name = "Revelations on the voyage home – June 5, 2015"; break;
	case num >= 2655: name = "Going to meet the plane – May 18, 2015"; break;
	case num >= 2649: name = "Pizza, we have liftoff – May 4, 2015"; break;
	case num >= 2637: name = "Hang on, There's someone at the door – April 6, 2015"; break;
	case num >= 2633: name = "Out of control group – March 27, 2015"; break;
	case num >= 2626: name = "Doctor M consults with Doctor B – March 11, 2015"; break;
	case num >= 2621: name = "Cold arctic logic – February 27, 2015"; break;
	case num >= 2613: name = "Orders and disclosures – February 9, 2015"; break;
	case num >= 2604: name = "Plots and plans – January 19, 2015"; break;
	case num >= 2597: name = "Year 2015 -- Wake up, we found her – January 2, 2015"; break;
	case num >= 2593: name = "Absolute Power – December 24, 2014"; break;
	case num >= 2584: name = "Now I really feel contaminated – December 3, 2014"; break;
	case num >= 2578: name = "Exit procedure – November 19, 2014"; break;
	case num >= 2571: name = "Free puppies, inquire within – November 3, 2014"; break;
	case num >= 2558: name = "The police always call while I'm adjusting my wolf – October 3, 2014"; break;
	case num >= 2548: name = "A chat with the commander – September 10, 2014"; break;
	case num >= 2527: name = "Socks, Spoons and Neural Nets – July 23, 2014"; break;
	case num >= 2522: name = "Mr. Raibert, You've Got Mail – July 11, 2014"; break;
	case num >= 2504: name = "The Debate – May 28, 2014"; break;
	case num >= 2503: name = "Robots have memories – May 26, 2014"; break;
	case num >= 2492: name = "Sam leads the way – April 28, 2014"; break;
	case num >= 2477: name = "A meeting of the mehanical minds – March 24, 2014"; break;
	case num >= 2467: name = "Doctor Bowman, I presume? – February 28, 2014"; break;
	case num >= 2442: name = "Year 2014 – January 1, 2014"; break;
	case num >= 2431: name = "Florence gets out for a walk – December 6, 2013"; break;
	case num >= 2408: name = "Sam figures it out – October 7, 2013"; break;
	case num >= 2390: name = "Meanwhile, down at the south pole – August 26, 2013"; break;
	case num >= 2380: name = "Max Post talks with the Mayor – August 2, 2013"; break;
	case num >= 2357: name = "Chaos in the streets, a good day for Sam – June 10, 2013"; break;
	case num >= 2352: name = "Good morning, Mr. Kornada – May 29, 2013"; break;
	case num >= 2334: name = "Jailbreak – April 17, 2013"; break;
	case num >= 2295: name = "What's it take to get arrested in this town? – January 16, 2013"; break;
	case num >= 2289: name = "Year 2013 – January 2, 2013"; break;
	case num >= 2285: name = "Midnight and movement is restored – December 24, 2012"; break;
	case num >= 2282: name = "Clippy discovers his plan has failed – December 17, 2012"; break;
	case num >= 2260: name = "Into the Ecosystems Unlimited compound – October 26, 2012"; break;
	case num >= 2254: name = "Robot chases wolf – October 12, 2012"; break;
	case num >= 2240: name = "Edge reactivates Blunt – September 10, 2012"; break;
	case num >= 2232: name = "Spiking the servers – August 22, 2012"; break;
	case num >= 2214: name = "Edge and immunity – July 11, 2012"; break;
	case num >= 2201: name = "A secret meeting and Sawtooth's birthday – June 11, 2012"; break;
	case num >= 2157: name = "Breaking and entering for fun and profit – February 29, 2012"; break;
	case num >= 2133: name = "Year 2012 – January 2, 2012"; break;
	case num >= 2116: name = "Off to see the Mayor – November 23, 2011"; break;
	case num >= 2096: name = "Dumpster diving for wolves – October 7, 2011"; break;
	case num >= 2079: name = "Off to see Mr. Raibert – August 29, 2011"; break;
	case num >= 2070: name = "Clippy spots a wolf and tells Mr. Kornada – August 8, 2011"; break;
	case num >= 2063: name = "Edge and the word filter – July 22, 2011"; break;
	case num >= 1980: name = "When robot factories go to war – January 05, 2011"; break;
	case num >= 1979: name = "Year 2011 – January 03, 2011"; break;
	case num >= 1938: name = "Day of the dead – September 22, 2010"; break;
	case num >= 1902: name = "Florence gets the sticky notes of doom – March 10, 2010"; break;
	case num >= 1854: name = "Resupplying satellites – March 10, 2010"; break;
	case num >= 1831: name = "Finding a volunteer for the sticky notes of doom – January 15, 2010"; break;
	case num >= 1825: name = "Year 2010 – January 1, 2010"; break;
	case num >= 1822: name = "Buying reaction mass at Kenetic Chemicals – December 23, 2009"; break;
	case num >= 1804: name = "Edge and Blunt – November 11, 2009"; break;
	case num >= 1769: name = "The Mayor joins in – August 21, 2009"; break;
	case num >= 1740: name = "Troubles with the baker and pies for all – June 15, 2009"; break;
	case num >= 1692: name = "Home again – February 13, 2009"; break;
	case num >= 1674: name = "Year 2009 – January 2, 2009"; break;
	case num >= 1667: name = "Florence is the problem? – December 12, 2008"; break;
	case num >= 1607: name = "Robot and Artificial Intelligence Development. R.A.I.D. – July 23, 2008"; break;
	case num >= 1551: name = "Off to Ecosystem's Unlimited – March 14, 2008"; break;
	case num >= 1526: name = "A call from the mayor – January 16, 2008"; break;
	case num >= 1520: name = "Year 2008 – January 2, 2008"; break;
	case num >= 1499: name = "Dog Pound break out – November 14, 2007"; break;
	case num >= 1477: name = "A walk in the park with Polly – September 24, 2007"; break;
	case num >= 1465: name = "Sawtooth awakens – August 27, 2007"; break;
	case num >= 1452: name = "Safeguards – July 27, 2007"; break;
	case num >= 1435: name = "A stop with Qwerty – June 18, 2007"; break;
	case num >= 1398: name = "Robot tailors and robot consciousness – March 23, 2007"; break;
	case num >= 1387: name = "Omniquantism – February 26, 2007"; break;
	case num >= 1363: name = "Year 2007 – January 1, 2007"; break;
	case num >= 1351: name = "The robot meeting begins – December 4, 2006"; break;
	case num >= 1344: name = "Polly! – November 17, 2006"; break;
	case num >= 1314: name = "The muggers revealed – November 8, 2006"; break;
	case num >= 1295: name = "Rescue! – July 26, 2006"; break;
	case num >= 1277: name = "Robomuggers – June 14, 2006"; break;
	case num >= 1265: name = "Making life interesting for the mayor – May 17, 2006"; break;
	case num >= 1253: name = "Start of the color archives – April 19, 2006"; break;
	case num >= 1252: name = "Dumpsters. The original fast food – April 17, 2006"; break;
	case num >= 1207: name = "Year 2006 – January 2, 2006"; break;
	case num >= 1200: name = "Tail chasing and fish catching – December 9, 2005"; break;
	case num >= 1194: name = "Saturday morning – November 25, 2005"; break;
	case num >= 1168: name = "Boids – September 25, 2005"; break;
	case num >= 1143: name = "After dinner thoughts – July 29, 2005"; break;
	case num >= 1129: name = "Escape into the museum – June 27, 2005"; break;
	case num >= 1109: name = "After dinner – May 11, 2005"; break;
	case num >= 1095: name = "At the museum – April 8, 2005"; break;
	case num >= 1072: name = "Dropping off Winston – February 14, 2005"; break;
	case num >= 1060: name = "Honest Sam – January 17, 2005"; break;
	case num >= 1054: name = "Year 2005 – January 3, 2005"; break;
	case num >= 1032: name = "Smells like dinner with Winston – November 12, 2004"; break;
	case num >= 1016: name = "A quick exit before the creditors arrive – October 6, 2004"; break;
	case num >= 1010: name = "Re Entry – September 22, 2004"; break;
	case num >= 970: name = "Space Walkies – June 21, 2004"; break;
	case num >= 937: name = "Sam takes the watch – April 5, 2004"; break;
	case num >= 897: name = "Year 2004 – January 2, 2004"; break;
	case num >= 888: name = "Yes,they're in space – December 12, 2003"; break;
	case num >= 862: name = "Launch – October 13, 2003"; break;
	case num >= 845: name = "Calling Winston – September 3, 2003"; break;
	case num >= 817: name = "Return of the watch and obligatory chase scene – June 30, 2003"; break;
	case num >= 789: name = "The inspector cometh – April 25, 2003"; break;
	case num >= 777: name = "Mutiny! – April 28, 2003"; break;
	case num >= 743: name = "Dress to kilt – January 1, 2003"; break;
	case num >= 734: name = "Satellite delivery – December 11, 2002"; break;
	case num >= 724: name = "A slight difference among the robots – November 18, 2002"; break;
	case num >= 662: name = "Arrival at the mall – June 26, 2002"; break;
	case num >= 640: name = "Meet the kids – May 6, 2002"; break;
	case num >= 607: name = "Time to wake up and stalk the coffee – February 18, 2002"; break;
	case num >= 587: name = "Year 2002 – January 2, 2002"; break;
	case num >= 582: name = "Hey, where's my wallet? – December 24, 2001"; break;
	case num >= 548: name = "Niomi and Tangent show up to repair the water pump – October 3, 2001"; break;
	case num >= 536: name = "There are better things to wake up to – September 5, 2001"; break;
	case num >= 527: name = "Business opportunities, don't wait up – August 15, 2001"; break;
	case num >= 510: name = "Off to new destinations, if we can figure out where we're going – May 10, 2001"; break;
	case num >= 473: name = "Sam to the rescue! – April 10, 2001"; break;
	case num >= 463: name = "Meanwhile, back at the vet's... – March 18, 2001"; break;
	case num >= 463: name = "You ought to be in pictures – January 1, 2001"; break;
	case num >= 369: name = "Sam the card flounder – August 4, 2000"; break;
	case num >= 336: name = "Canine in the water – May 17, 2000"; break;
	case num >= 324: name = "Well, we got almost everyone back – April 26, 2000"; break;
	case num >= 305: name = "We came here to rescue this? – March 6, 2000"; break;
	case num >= 293: name = "Hurricane Joe is moving in – February 4, 2000"; break;
	case num >= 277: name = "Year 2000 – January 3, 2000"; break;
	case num >= 244: name = "Covering your tracks – October 18, 1999"; break;
	case num >= 226: name = "How to catch a deer. Sort of – September 6, 1999"; break;
	case num >= 209: name = "Trip to \"The Golden Trough\", the finest in bad cuisine – July 28, 1999"; break;
	case num >= 199: name = "A gratuitous shower scene – July 5, 1999"; break;
	case num >= 183: name = "Lunch and bunnies – May 28, 1999"; break;
	case num >= 179: name = "These people have got to get their priorities straight – May 19, 1999"; break;
	case num >= 167: name = "Power! We have power! Or how to start a fusion reactor – April 21, 1999"; break;
	case num >= 142: name = "Repairs on the port fusion engine begin. How much trouble can it be to replace a section of pipe? – February 22, 1999"; break;
	case num >= 138: name = "Home again. Arrival back at the ship – February 12, 1999"; break;
	case num >= 120: name = "Year 1999 – January 1, 1999"; break;
	case num >= 114: name = "Catch! The first appearance of Sawtooth Rivergrinder – December 18, 1998"; break;
	case num >= 102: name = "A truck, a JATO rocket, and duct tape. Three great things that go great together! – November 20, 1998"; break;
	case num >= 76: name = "Fun with an open ventilation shaft – September 21, 1998"; break;
	case num >= 66: name = "AIEEE! Radiation! – August 28, 1998"; break;
	case num >= 60: name = "Arrival at the abandoned colony ship – August 14, 1998"; break;
	case num >= 44: name = "Asteroids and other close encounters – July 8, 1998"; break;
	case num >= 29: name = "The road trip to the abandoned colony ship gets underway – June 3, 1998"; break;
	case num >= 15: name = "Arrival at the ship. Repairs begin. Sort of – May 1, 1998"; break;
	case num >= 8: name = "Doggy! First appearance of Florence – April 15, 1998"; break;
	case num = 1: name = "The adventure begins! – April 9, 1998"; break;
	default: name = '×';
};
title.innerHTML += ' ' + number + ' – ' + name;
