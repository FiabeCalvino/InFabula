
	
	var planes = [
		["<b>Riviera ligure di ponente</b><br>-Giovannin senza paura<br>-L’uomo verde d’alghe<br>-Il bastimento a tre piani<br>-L’uomo che usciva solo di notte<br>-E sette!<br>-Corpo-senza-l’anima",44.1826,8.3958],
		["<b>Genova</b><br>-Il danaro fa tutto<br>-Il pastore che non cresceva mai",44.1826,8.3958],
		["<b>Langhe</b><br>-Il naso d’argento",44.73944354598026, 7.928908659692023],
		["<b>Bra</b><br>-La barba del Conte",-40.98585,174.50659],
		["<b>Monferrato</b><br>-La bambina venduta con le pere<br>-La biscia<br>-I tre castelli<br>-Il principe che sposò una rana<br>-Il pappagallo<br>-I dodici buoi<br>-Cric e Croc",45.3239,8.4235],
		["<b>Torino</b><br>-Il Principe canarino",45.0659,7.6814],
		["<b>Colline del Po</b><br>-Re Crin",45.045718163302865, 7.701683740212728],
		["<b>Biella</b><br>-I biellesi, gente dura",45.5669,8.0557],
		["<b>Milano</b><br>-Il vaso di maggiorana<br>-Il giocatore di biliardo",45.4669,9.1853],
		["<b>Mantova</b><br>-Il linguaggio degli animali<br>-Le tre casette<br>-Il contadino astrologo",45.1452,10.7941],
		["<b>Lago di Garda</b><br>-Il lupo e le tre ragazze",45.5785,10.6183],
		["<b>Milano</b><br>-Il lupo e le tre ragazze",45.4669,9.1853],
		["<b>Verona</b><br>-Il paese dove non si muore mai<br>-Il devoto di San Giuseppe",45.4332,10.9726],
		["<b>Venezia</b><br>-Le tre vecchie<br>-Il principe granchio<br>-Muta per sette anni<br>-Il palazzo dell’Omo morto<br>-Pomo e Scorzo<br>-Il dimezzato<br>-Il nonno che non si vede<br>-Il figlio del Re di Danimarca",45.4360,12.3363],
		["<b>Friuli</b><br>-Il bambino nel sacco<br>-Quaquà! Attaccati là!<br>-La camicia dell’uomo contento<br>-Una notte in Paradiso<br>-Gesù e San Pietro in Friuli",45.8952083124278, 13.10022103130104],
		["<b>Trentino</b><br>-L’anello magico<br>-Il braccio di morto",46.30751069689261, 11.208482815734135],
		["<b>Trieste</b><br>-La scienza della fiacca",45.6491,13.7769],
		["<b>Istria</b><br>-Bella Fronte",45.3155,13.9032],
		["<b>Dalmazia</b><br>-La corona rubata",43.5349,16.4829],
		["<b>Romagna</b><br>-La figlia del Re che non era mai stufa di fichi<br>-I tre cani<br>-Zio Lupo",44.151,11.904],
		["<b>Bologna</b><br>-Giricoccola<br>-Il gobbo Tabagnino<br>-Il Re degli animali<br>-Le brache del Diavolo<br>-Bene come il sale<br>-La Regina delle Tre Montagne d’Oro<br>-La scommessa a chi primo s’arrabbia",44.4941,11.3406],
		["<b>Garfagnana Estense</b><br>-L’Orco con le penne",44.112645143451495, 10.322339655537501],
		["<b>Montale Pistoiese</b><br>-Il Drago dalle sette teste<br>-Bellinda e il Mostro<br>-Il pecoraio a Corte<br>-La Regina Marmotta<br>-Il figlio del mercante di Milano<br>-Il palazzo delle scimmie<br>-La Rosina nel forno<br>-L’uva salamanna<br>-Il palazzo incantato<br>-Testa di Bufala<br>-Il figliolo del Re di Portogallo<br>-Fanta-Ghirò, persona bella<br>-Pelle di vecchia<br>-Uliva<br>-La contadina furba<br>-Il viaggiatore torinese",43.93568197047416, 11.016316340421392],
		["<b>Pisa</b><br>-La figlia del Sole<br>-Il Drago e la cavallina fatata<br>-Il Fiorentino<br>-I Reali sfortunati<br>-Il gobbino che picchia<br>-Fioravante e la bella Isolina",43.7165,10.3999],
		["<b>Livorno</b><br>-Lo sciocco senza paura<br>-La lattaia regina",43.5466,10.3079],
		["<b>Lucca</b><br>-La storia di Campriano",43.8405,10.5070],
		["<b>Mugello</b><br>-Il regalo del vento tramontano",43.9520,11.3952],
		["<b>Val d’Arno Superiore</b><br>-La testa della Maga",43.74947210346265, 11.249871225345991],
		["<b>Firenze</b><br>-La ragazza mela<br>-Prezzemolina<br>-L’Uccel bel-verde<br>-Il Re nel panie<br>-L’assassino senza mano<br>-I due gobbi<br>-Cecino e il bue",43.7691,11.2473],
		["<b>Siena</b><br>-Il Re dei Pavoni<br>-Il palazzo della Regina dannata<br>-Le ochine",43.31837603979415, 11.326618767500745],
		["<b>Marche</b><br>-L’acqua nel cestello<br>-Quattordici<br>-Giuanni Benforte che a cinquecento diede la morte<br>-Gallo cristallo",43.40066541441732, 13.1900008476718],
		["<b>Roma</b><br>-La barca che va per mare e per terra<br>-Il soldato napoletano<br>-Belmiele e Belsole<br>-Il Re superbo<br>-Maria di Legno<br>-La pelle di pidocchio<br>-Cicco Petrillo<br>-Nerone e Berta",41.8890311908544, 12.497538170542715],
		["<b>Abruzzo</b><br>-L’amore delle tre melagrane(Bianca-come-il-latte-rossa-come-il-sangue)<br>-Giuseppe Ciufolo che se non zappava suonava lo zufolo<br>-La Bella Venezia<br>-Il tignoso<br>-Il Re selvatico<br>-Mandorlinfiore<br>-Le tre Regine cieche<br>-Gobba, zoppa e collotorto<br>-Occhio-in-fronte<br>-La finta nonna<br>-L’arte di Franceschiello<br>-Pesce lucente",42.158797238663, 13.792625356930014],
		["<b>Molise</b><br>-La Borea e il Favonio<br>-Il sorcio di palazzo e il sorcio d’orto",41.70425257034142, 14.731157634282063],
		["<b>Benevento</b><br>-Le ossa del moro",41.12373508839481, 14.781100987751362],
		["<b>Irpinia</b><br>-La gallina lavandaia<br>-Cricche, Crocche e Manico d’Uncino",40.918467606257835, 14.784929727335795],
		["<b>Napoli</b><br>-La prima spada e l’ultima scopa<br>-Comare Volpe e Compare Lupo",40.84716007824729, 14.240077285691994],
		["<b>Terra d’Otranto</b><br>-I cinque scapestrati<br>-Ari-ari, ciuco mio, butta danari<br>-La scuola della Salamanca<br>-La fiaba dei gatti<br>-Pulcino<br>-La madre schiava",40.2000462983875, 18.368448021662523],
		["<b>Taranto</b><br>-La sposa sirena",40.46072915750573, 17.258226479385055],
		["<b>Basilicata</b><br>-Le Principesse maritate al primo che passa<br>-Liombruno<br>-Cannelora<br>-Filo d’Oro e Filomena<br>-I tredici briganti",40.38851200126174, 16.1833544941969],
		["<b>Calabria</b><br>-I tre orfani<br>-La bella addormentata ed i suoi figli<br>-Il Reuccio fatto a mano<br>-La tacchina<br>-Le tre raccoglitrici di cicoria<br>-La Bella dei Sett’abiti<br>-Il Re serpente",39.22899409239399, 16.390144423211222],
		["<b>Greci di Calabria</b><br>-La vedova e il brigante<br>-Il granchio dalle uova d’oro",38.08644741509902, 15.65726094791401],
		["<b>Palermo</b><br>-Cola Pesce<br>-Gràttula-Beddàttula<br>-Sfortuna<br>-La serpe Pippina<br>-Caterina la Sapiente<br>-Il mercante ismaelita<br>-La colomba ladra<br>-Padron di ceci e fave<br>-Il Balalicchi con la rogna<br>-La sposa che viveva di vento<br>-Erbabianca<br>-Il Re di Spagna e il Milord inglese<br>-Lo stivale ingioiellato<br>-Il Bracciere di mano manca<br>-Rosmarina<br>-Diavolozoppo<br>-I tre racconti dei tre figli dei tre mercanti<br>-La ragazza colomba<br>-Gesù e San Pietro in Sicilia",38.136202211264724, 13.334970558794838],
		["<b>Entroterra palermitano</b><br>-L’orologio del Barbiere<br>-La sorella del Conte<br>-Mastro Francesco Siedi-e-mangia",37.90672063412715, 13.25441559310678],
		["<b>Madonie</b><br>-Le nozze d’una Regina e d’un brigante",37.884643985972154, 14.013426802418019],
		["<b>Ficarazzi</b><br>-Le sette teste d’agnello<br>-I due negozianti di mare",38.09272618966283, 13.456674475144014],
		["<b>Salaparuta</b><br>-Sperso per il mondo<br>-Un bastimento carico di…<br>-Il figlio del Re nel pollaio",37.757486853400046, 13.007693382368926],
		["<b>Trapani</b><br>-La Reginotta smorfiosa",38.01516926952561, 12.527015231068477],
		["<b>Agrigento</b><br>-Il Gran Narbone<br>-Il linguaggio degli animali e la moglie curiosa<br>-Il vitellino con le corna d’oro<br>-Il Capitano e il Generale",37.312611625722624, 13.57793522683023],
		["<b>Caltanissetta</b><br>-La penna di hu<br>-La vecchia dell’orto<br>-Il sorcetto con la coda che puzza",37.485834958689786, 14.045432991533726],
		["<b>Ragusa</b><br>-Le due cugine<br>-I due compari mulattieri",36.918064720249326, 14.699644916790033],
		["<b>Catania</b><br>-La volpe Giovannuzza<br>-Il bambino che diede da mangiare al Crocifisso<br>-Massaro Verità",37.51329699968901, 15.065156350594583],
		["<b>Acireale</b><br>-Il Re vanesio<br>-La Reginotta con le corna<br>-Giufà",37.62403226013929, 15.162995828020565],
		["<b>Campidano</b><br>-Fra Ignazio<br>-I consigli di Salomone<br>-L’uomo che rubò ai banditi",39.6089367054571, 8.934104278118998],
		["<b>Nurra</b><br>-L’erba dei leoni<br>-Il convento di monache e il convento di frati",40.587163164296285, 8.467185614881437],
        ["<b>Gallura</b><br>-La potenza della felce maschio",41.0823465726473, 9.165769526065073],
		["<b>Logudoro</b><br>-Sant’Antonio dà il fuoco agli uomini",40.80574270813797, 8.415950697640215],
		["<b>Corsica</b><br>-Marzo e il pastore<br>-Giovan Balento<br>-Salta nel mio sacco!",42.123566658047636, 9.00158504319875],
		
		];

        var map = L.map('map').setView([41.384, 13.118], 6);
        mapLink = 
            '<a href="http://openstreetmap.org">OpenStreetMap</a>';
        L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; ' + mapLink + ' Contributors',
            maxZoom: 18,
            }).addTo(map);

		for (var i = 0; i < planes.length; i++) {
			marker = new L.marker([planes[i][1],planes[i][2]])
				.bindPopup(planes[i][0])
				.addTo(map);
		}



		//["<b>Milano</b><br>-Il",45.4669,9.1853],