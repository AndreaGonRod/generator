const DATA = {

  OLD_ENGLISH: {
    roots: [
      ['Aethel', 'la nobleza'],
      ['Aelf', 'el elfo'],
      ['Beorht', 'el brillo'],
      ['Cen', 'el valor'],
      ['Cyne', 'la realeza'],
      ['Ead', 'la bendición'],
      ['Eald', 'la antigüedad'],
      ['Gar', 'la lanza'],
      ['God', 'lo divino'],
      ['Here', 'el ejército'],
      ['Leof', 'el amor'],
      ['Os', 'la deidad'],
      ['Rad', 'el consejo'],
      ['Sig', 'la victoria'],
      ['Wulf', 'el lobo']
    ],
    simpleConnectors: [
      ['a', ''],
      ['e', '']
    ],
    complexInfixes: [],
    suffixes: [
      ['beorht', 'MALE', 'el brillante'],
      ['frith', 'MALE', 'el pacífico'],
      ['gar', 'MALE', 'el lancero'],
      ['helm', 'MALE', 'el protector'],
      ['red', 'MALE', 'el consejero'],
      ['ric', 'MALE', 'el gobernante'],
      ['weald', 'MALE', 'el poderoso'],
      ['weard', 'MALE', 'el guardián'],
      ['wulf', 'MALE', 'el lobo'],
      ['stan', 'MALE', 'la piedra'],
      ['burg', 'FEMALE', 'la defensora'],
      ['flaed', 'FEMALE', 'la belleza'],
      ['gifu', 'FEMALE', 'el regalo'],
      ['gyth', 'FEMALE', 'la batalla'],
      ['run', 'FEMALE', 'el misterio'],
      ['swith', 'FEMALE', 'la fuerza'],
      ['wyn', 'FEMALE', 'la alegría']
    ]
  },
  CELESTIAL: {
    roots: [
      ['Ael', 'la luz'],
      ['Sera', 'el fuego divino'],
      ['Celes', 'el cielo'],
      ['Lumin', 'el resplandor'],
      ['Aur', 'la aurora'],
      ['Val', 'el poder sacro'],
      ['Kyri', 'el señorío'],
      ['Puri', 'la pureza'],
      ['Sanc', 'la santidad'],
      ['Mich', 'lo inalcanzable'],
      ['Gabr', 'la fuerza'],
      ['Rapha', 'la sanación'],
      ['Uzi', 'el escudo']
    ],
    simpleConnectors: [
      ['a', ''],
      ['i', ''],
      ['e', '']
    ],
    complexInfixes: [],
    suffixes: [
      ['el', 'MALE', 'de Dios'],
      ['iel', 'MALE', 'el mensajero'],
      ['us', 'MALE', 'el exaltado'],
      ['ion', 'MALE', 'el radiante'],
      ['ia', 'FEMALE', 'de Dios'],
      ['a', 'FEMALE', 'la exaltada'],
      ['elle', 'FEMALE', 'la brillante'],
      ['iel', 'FEMALE', 'la mensajera']
    ]
  },

  ABYSSAL: {
    roots: [
      ['Az', 'la destrucción'],
      ['Bel', 'el señor oscuro'],
      ['Gor', 'la furia'],
      ['Mal', 'la maldad'],
      ['Mor', 'la muerte'],
      ['Zar', 'el vacío'],
      ['Xen', 'el abismo'],
      ['Khoz', 'la ira'],
      ['Dra', 'la sombra'],
      ['Vesh', 'el tormento']
    ],
    simpleConnectors: [
      ['o', ''],
      ['u', ''],
      ['a', '']
    ],
    complexInfixes: [],
    suffixes: [
      ['ial', 'MALE', 'el corruptor'],
      ['goth', 'MALE', 'el amo'],
      ['zor', 'MALE', 'el desollador'],
      ['moth', 'MALE', 'la plaga'],
      ['roth', 'MALE', 'el devorador'],
      ['ith', 'FEMALE', 'la corruptora'],
      ['gatha', 'FEMALE', 'la señora'],
      ['zira', 'FEMALE', 'la torturadora'],
      ['mora', 'FEMALE', 'la peste'],
      ['rya', 'FEMALE', 'la devoradora']
    ]
  },

  GREEK: {
    roots: [
      ['Alex', 'la defensa'],
      ['Andr', 'la fuerza del hombre'],
      ['Arist', 'la excelencia'],
      ['Calli', 'la hermosura'],
      ['Chrys', 'el oro'],
      ['Cleo', 'la gloria'],
      ['Dem', 'el pueblo'],
      ['Di', 'la divinidad'],
      ['Euch', 'la buena plegaria'],
      ['Herm', 'el mensajero'],
      ['Iren', 'la paz'],
      ['Lys', 'la liberación'],
      ['Nik', 'la victoria'],
      ['Phil', 'el amor afín'],
      ['Soph', 'la sabiduría'],
      ['Tim', 'el honor'],
      ['Zen', 'el poder de Zeus']
    ],
    simpleConnectors: [
      ['o', ''],
      ['i', ''],
      ['a', ''],
      ['e', '']
    ],
    complexInfixes: [],
    suffixes: [
      ['ander', 'MALE', 'el hombre de'],
      ['archos', 'MALE', 'el líder de'],
      ['cles', 'MALE', 'la gloria de'],
      ['crates', 'MALE', 'el poder de'],
      ['dorus', 'MALE', 'el regalo de'],
      ['machus', 'MALE', 'el luchador por'],
      ['medes', 'MALE', 'la astucia de'],
      ['menes', 'MALE', 'la fuerza de'],
      ['nikos', 'MALE', 'el victorioso en'],
      ['sthenes', 'MALE', 'el indomable de'],
      ['dora', 'FEMALE', 'el regalo de'],
      ['krateia', 'FEMALE', 'la soberana de'],
      ['mache', 'FEMALE', 'la que lucha por'],
      ['niche', 'FEMALE', 'la victoria de'],
      ['phone', 'FEMALE', 'la voz de'],
      ['thea', 'FEMALE', 'la diosa de']
    ]
  },
  NORDIC: {
    roots: [
      ['Alf', 'el elfo'],
      ['As', 'el dios'],
      ['Bjorn', 'el oso'],
      ['Gud', 'la deidad'],
      ['Gunn', 'la batalla'],
      ['Hall', 'la roca'],
      ['Hrod', 'la fama'],
      ['Ing', 'el ancestro'],
      ['Ketil', 'el yelmo'],
      ['Ragn', 'el consejo divino'],
      ['Sig', 'la victoria'],
      ['Thor', 'el trueno'],
      ['Ulf', 'el lobo'],
      ['Val', 'los caídos'],
      ['Vig', 'la guerra']
    ],
    simpleConnectors: [
      ['i', ''],
      ['a', ''],
      ['u', '']
    ],
    complexInfixes: [],
    suffixes: [
      ['brandr', 'MALE', 'la espada de'],
      ['mund', 'MALE', 'el protector de'],
      ['rik', 'MALE', 'el gobernante de'],
      ['valdr', 'MALE', 'el soberano de'],
      ['vid', 'MALE', 'el árbol de'],
      ['frid', 'FEMALE', 'la paz de'],
      ['gerd', 'FEMALE', 'el amparo de'],
      ['hild', 'FEMALE', 'la batalla de'],
      ['laug', 'FEMALE', 'el compromiso de'],
      ['run', 'FEMALE', 'el secreto de'],
      ['veig', 'FEMALE', 'la fuerza de']
    ]
  },
  LATIN: {
    roots: [
      ['Aure', 'lo dorado'],
      ['Cael', 'lo celestial'],
      ['Cass', 'lo vacío'],
      ['Clar', 'lo brillante'],
      ['Clement', 'la misericordia'],
      ['Domin', 'el señorío'],
      ['Feli', 'la fortuna'],
      ['Flor', 'la flor'],
      ['Ign', 'el fuego'],
      ['Luc', 'la luz'],
      ['Magn', 'la grandeza'],
      ['Silv', 'el bosque'],
      ['Val', 'la fuerza'],
      ['Vic', 'la victoria'],
      ['Vit', 'la vida'],
      ['Aemil', 'el rival'],
      ['August', 'lo venerable'],
      ['Jul', 'la juventud'],
      ['Marc', 'lo consagrado a Marte'],
      ['Ruf', 'lo pelirrojo']
    ],
    simpleConnectors: [
      ['i', ''],
      ['o', ''],
      ['u', '']
    ],
    complexInfixes: [],
    suffixes: [
      ['anus', 'MALE', 'perteneciente a'],
      ['ius', 'MALE', 'de la familia de'],
      ['inus', 'MALE', 'con la naturaleza de'],
      ['icus', 'MALE', 'relativo a'],
      ['ensis', 'MALE', 'procedente de'],
      ['tor', 'MALE', 'el que hace'],
      ['ana', 'FEMALE', 'perteneciente a'],
      ['ia', 'FEMALE', 'de la familia de'],
      ['ina', 'FEMALE', 'con la naturaleza de'],
      ['ica', 'FEMALE', 'relativa a'],
      ['trix', 'FEMALE', 'la que hace']
    ]
  },
  JAPANESE: {
    roots: [
      ['Hiro', 'lo amplio y generoso'],
      ['Kiyo', 'la pureza'],
      ['Masa', 'la justicia'],
      ['Tada', 'la lealtad'],
      ['Taka', 'lo noble'],
      ['Toshi', 'la sabiduría'],
      ['Yoshi', 'la bondad'],
      ['Nori', 'la ley'],
      ['Hide', 'la excelencia'],
      ['Nobu', 'la confianza'],
      ['Kazu', 'la armonía'],
      ['Shige', 'lo exuberante'],
      ['Yasu', 'la paz'],
      ['Mitsu', 'la luz'],
      ['Moto', 'el origen'],
      ['Aya', 'el color'],
      ['Emi', 'la sonrisa']
    ],
    simpleConnectors: [],
    complexInfixes: [],
    suffixes: [
      ['ro', 'MALE', 'el hijo de'],
      ['taro', 'MALE', 'el gran hijo de'],
      ['jiro', 'MALE', 'el segundo hijo de'],
      ['suke', 'MALE', 'el ayudante de'],
      ['shi', 'MALE', 'la voluntad de'],
      ['ya', 'MALE', 'la flecha de'],
      ['hiko', 'MALE', 'el príncipe de'],
      ['maru', 'MALE', 'la pureza de'],
      ['ko', 'FEMALE', 'la niña de'],
      ['mi', 'FEMALE', 'la belleza de'],
      ['ka', 'FEMALE', 'el aroma de'],
      ['na', 'FEMALE', 'la gracia de'],
      ['e', 'FEMALE', 'la bendición de'],
      ['yo', 'FEMALE', 'el mundo de']
    ]
  },
  CELTIC: {
    roots: [
      ['Art', 'el oso'],
      ['Boud', 'la victoria'],
      ['Bran', 'el cuervo'],
      ['Cad', 'la batalla'],
      ['Cinget', 'el guerrero'],
      ['Donn', 'lo oscuro'],
      ['Fionn', 'lo justo'],
      ['Gwend', 'la bendición'],
      ['Llug', 'la luz'],
      ['Mael', 'el príncipe'],
      ['Mor', 'el mar'],
      ['Nert', 'la fuerza'],
      ['Taran', 'el trueno'],
      ['Vind', 'lo blanco']
    ],
    simpleConnectors: [
      ['o', ''],
      ['i', ''],
      ['a', '']
    ],
    complexInfixes: [],
    suffixes: [
      ['rix', 'MALE', 'el rey'],
      ['marus', 'MALE', 'el grande'],
      ['genos', 'MALE', 'el nacido de'],
      ['galus', 'MALE', 'el valiente'],
      ['maglus', 'MALE', 'el noble'],
      ['vellaunus', 'MALE', 'el comandante'],
      ['dur', 'MALE', 'el fuerte'],
      ['boudi', 'FEMALE', 'la victoriosa'],
      ['gena', 'FEMALE', 'la nacida de'],
      ['mara', 'FEMALE', 'la grande'],
      ['rigi', 'FEMALE', 'la reina'],
      ['gwen', 'FEMALE', 'la dama blanca']
    ]
  },
  SLAVIC: {
    roots: [
      ['Bogo', 'lo divino'],
      ['Boro', 'la batalla'],
      ['Brati', 'la hermandad'],
      ['Cedo', 'el niño'],
      ['Draho', 'lo precioso'],
      ['Gosti', 'el invitado'],
      ['Jaro', 'el fuego'],
      ['Ljubo', 'el amor'],
      ['Miro', 'el mundo'],
      ['Rado', 'la alegría'],
      ['Slava', 'la gloria'],
      ['Sveto', 'lo sagrado'],
      ['Veli', 'la grandeza'],
      ['Vladi', 'el poder'],
      ['Zlato', 'el oro']
    ],
    simpleConnectors: [
      ['o', ''],
      ['e', ''],
      ['i', '']
    ],
    complexInfixes: [],
    suffixes: [
      ['mir', 'MALE', 'el pacífico'],
      ['slav', 'MALE', 'el glorioso'],
      ['bor', 'MALE', 'el luchador'],
      ['rad', 'MALE', 'el alegre'],
      ['mil', 'MALE', 'el amado'],
      ['mira', 'FEMALE', 'la pacífica'],
      ['slava', 'FEMALE', 'la gloriosa'],
      ['mila', 'FEMALE', 'la amada'],
      ['rada', 'FEMALE', 'la alegre'],
      ['borka', 'FEMALE', 'la luchadora']
    ]
  },

  EGYPTIAN: {
    roots: [
      ['Amon', 'el oculto'],
      ['Ankh', 'la vida'],
      ['Aten', 'el disco solar'],
      ['Heka', 'la magia'],
      ['Hor', 'el halcón'],
      ['Kha', 'la aparición'],
      ['Maat', 'la justicia'],
      ['Men', 'lo eterno'],
      ['Mer', 'el amor'],
      ['Nefer', 'lo hermoso'],
      ['Ptah', 'el creador'],
      ['Ra', 'el sol'],
      ['Sekhem', 'el poder'],
      ['Set', 'el pilar'],
      ['Thoth', 'la sabiduría']
    ],
    simpleConnectors: [
      ['o', ''],
      ['i', ''],
      ['e', '']
    ],
    complexInfixes: [],
    suffixes: [
      ['hotep', 'MALE', 'el que está en paz'],
      ['mose', 'MALE', 'el nacido de'],
      ['nakht', 'MALE', 'el fuerte'],
      ['kare', 'MALE', 'el alma de'],
      ['kheper', 'MALE', 'el creador'],
      ['neferu', 'FEMALE', 'la belleza de'],
      ['iti', 'FEMALE', 'la que viene'],
      ['mut', 'FEMALE', 'la madre de'],
      ['ankhes', 'FEMALE', 'la que vive por'],
      ['amun', 'FEMALE', 'la de Amón']
    ]
  },
  SUMERIAN: {
    roots: [
      ['An', 'el cielo'],
      ['En', 'el señor'],
      ['Lugal', 'el gran rey'],
      ['Nin', 'la señora'],
      ['Ur', 'el sirviente'],
      ['Lu', 'el hombre'],
      ['Gala', 'el cantor'],
      ['Amar', 'el becerro'],
      ['Dingir', 'lo divino'],
      ['E', 'el templo'],
      ['Ki', 'la tierra'],
      ['Me', 'la esencia divina'],
      ['Nam', 'el destino'],
      ['Utu', 'el sol'],
      ['Inanna', 'la diosa de los cielos']
    ],
    simpleConnectors: [
      ['a', ''],
      ['i', ''],
      ['u', '']
    ],
    complexInfixes: [],
    suffixes: [
      ['gal', 'MALE', 'el grande'],
      ['lil', 'MALE', 'el espíritu de'],
      ['gir', 'MALE', 'el fiero'],
      ['nanna', 'MALE', 'de la luna'],
      ['shag', 'MALE', 'el corazón de'],
      ['zida', 'MALE', 'el verdadero'],
      ['tur', 'FEMALE', 'la pequeña'],
      ['kalag', 'FEMALE', 'la fuerte'],
      ['saga', 'FEMALE', 'la buena'],
      ['bara', 'FEMALE', 'la soberana'],
      ['khegal', 'FEMALE', 'la abundante']
    ]
  },
  SWAHILI: {
    roots: [
      ['Amani', 'la paz'],
      ['Baraka', 'la bendición'],
      ['Chane', 'el tronco'],
      ['Heshima', 'el honor'],
      ['Jani', 'la hoja'],
      ['Kito', 'la joya'],
      ['Lulu', 'la perla'],
      ['Malaika', 'el ángel'],
      ['Nia', 'el propósito'],
      ['Pendo', 'el amor'],
      ['Rafiki', 'el amigo'],
      ['Simba', 'el león'],
      ['Tumaini', 'la esperanza'],
      ['Uhuru', 'la libertad'],
      ['Zuri', 'lo hermoso']
    ],
    simpleConnectors: [
      ['a', ''],
      ['i', ''],
      ['u', '']
    ],
    complexInfixes: [],
    suffixes: [
      ['mani', 'MALE', 'el poderoso'],
      ['kheri', 'MALE', 'el bueno'],
      ['sani', 'MALE', 'el sabio'],
      ['zima', 'MALE', 'el sano'],
      ['kali', 'MALE', 'el feroz'],
      ['mala', 'FEMALE', 'la buena'],
      ['lulu', 'FEMALE', 'la preciosa'],
      ['zuri', 'FEMALE', 'la hermosa'],
      ['penda', 'FEMALE', 'la amada'],
      ['lani', 'FEMALE', 'la celestial']
    ]
  },

  KHUZDUL: {
    roots: [
      ['Azagh', 'el guerrero'],
      ['Baraz', 'lo rojo'],
      ['Buzund', 'lo oscuro'],
      ['Gabil', 'lo grande'],
      ['Gath', 'la caverna'],
      ['Khazad', 'el enano'],
      ['Kibil', 'la plata'],
      ['Kheled', 'el cristal'],
      ['Mahal', 'el creador'],
      ['Narag', 'lo negro'],
      ['Sigin', 'lo largo'],
      ['Thark', 'el báculo'],
      ['Tumunz', 'el valle'],
      ['Uzbad', 'el señor'],
      ['Zirak', 'el pico de piedra']
    ],
    simpleConnectors: [
      ['a', ''],
      ['i', ''],
      ['u', '']
    ],
    complexInfixes: [],
    suffixes: [
      ['in', 'MALE', 'el hijo de'],
      ['ur', 'MALE', 'el fuerte'],
      ['li', 'MALE', 'el combatiente'],
      ['ri', 'MALE', 'el rey'],
      ['or', 'MALE', 'el gran señor'],
      ['fund', 'MALE', 'el sabio'],
      ['rak', 'MALE', 'el excavador'],
      ['dis', 'FEMALE', 'la princesa'],
      ['na', 'FEMALE', 'la hija de'],
      ['rida', 'FEMALE', 'la fuerte'],
      ['gith', 'FEMALE', 'la doncella']
    ]
  },


  SUMERIAN: {
    roots: [
      ['Gilgamesh', 'el héroe épico'],
      ['Enkidu', 'el hombre salvaje'],
      ['Ishtar', 'la diosa del amor y la guerra'],
      ['Ea', 'el dios de la sabiduría'],
      ['Anu', 'el dios del cielo'],
      ['Enlil', 'el señor de la tormenta'],
      ['Dumuzi', 'el pastor divino'],
      ['Nanshe', 'la diosa de la justicia'],
      ['Gula', 'la sanadora celestial'],
      ['Ningal', 'la gran dama'],
      ['Gil', 'el héroe antiguo'],
      ['En', 'el señor de'],
      ['Ki', 'la tierra firme'],
      ['Nid', 'el guerrero feroz'],
      ['Nin', 'la señora de'],
      ['Eri', 'la ciudad de'],
      ['Uru', 'el gran río'],
      ['Ash', 'el espíritu de'],
      ['Lug', 'el gran rey'],
      ['Sham', 'el sol brillante'],
      ['Sin', 'la luna creciente'],
      ['Inan', 'la diosa del amor'],
      ['Mard', 'el toro celestial'],
      ['Zigg', 'el templo alto'],
      ['Eresh', 'la reina del inframundo'],
      ['Nabu', 'el dios de la escritura'],
      ['Utu', 'el juez divino'],
      ['Enki', 'el creador de la humanidad'],
      ['Ninhur', 'la madre de las montañas'],
      ['Kish', 'la primera ciudad sagrada'],
      ['Adad', 'el señor de las tormentas'],
      ['Zar', 'el soberano supremo'],
      ['Nam', 'el destino inexorable'],
      ['Kur', 'la montaña oscura']
    ],
    simpleConnectors: [],
    complexInfixes: [
      ['gal', 'el grande'],
      ['kar', 'el guardián'],
      ['mes', 'el héroe'],
      ['sar', 'el rey'],
      ['gir', 'la espada'],
      ['nun', 'el príncipe'],
      ['mah', 'el exaltado'],
      ['kal', 'el poderoso']
    ],
    suffixes: [
      ['mesh', 'MALE', 'el héroe de'],
      ['kidu', 'MALE', 'el compañero de'],
      ['nanna', 'FEMALE', 'la sacerdotisa de'],
      ['shub', 'FEMALE', 'la hermosa de'],
      ['ki', 'NEUTER', 'el lugar de'],
      ['dingir', 'NEUTER', 'lo divino de'],
      ['kigal', 'NEUTER', 'el gran submundo de'],
      ['lugal', 'MALE', 'el gran rey de'],
      ['gal', 'MALE', 'el grande de'],
      ['mes', 'MALE', 'el joven de'],
      ['ur', 'MALE', 'el servidor de'],
      ['nin', 'FEMALE', 'la señora de'],
      ['ama', 'FEMALE', 'la madre de']
    ]
  },
  SWAHILI: {
    roots: [
      ['Juma', 'el nacido en viernes'],
      ['Khamisi', 'el nacido en jueves'],
      ['Mosi', 'el primogénito'],
      ['Pili', 'el segundo nacido'],
      ['Tatu', 'el tercer nacido'],
      ['Zuri', 'la hermosa'],
      ['Aisha', 'la vida'],
      ['Halima', 'la gentil'],
      ['Jalia', 'la honrada'],
      ['Kamilah', 'la perfecta'],
      ['Kof', 'el nacido en viernes'],
      ['Nia', 'el propósito claro'],
      ['Simb', 'el león fiero'],
      ['Zah', 'el regalo brillante'],
      ['Jab', 'la roca inamovible'],
      ['Im', 'la fe inquebrantable'],
      ['Saf', 'el viaje puro'],
      ['Jam', 'la belleza profunda'],
      ['Taf', 'el buscador de'],
      ['Uhur', 'la libertad de'],
      ['Aman', 'la paz de'],
      ['Bar', 'la bendición de'],
      ['Kip', 'el regalo de'],
      ['Mal', 'el ángel de'],
      ['Tum', 'la esperanza de'],
      ['Akil', 'la inteligencia viva'],
      ['Dah', 'la luz brillante'],
      ['Elim', 'el conocimiento profundo'],
      ['Fah', 'el orgullo de'],
      ['Hesh', 'el honor respetado'],
      ['Kweli', 'la verdad absoluta'],
      ['Mpen', 'el amor querido'],
      ['Nuru', 'la luz del día'],
      ['Pendo', 'el afecto sincero'],
      ['Uzi', 'el hilo de la vida']
    ],
    simpleConnectors: [],
    complexInfixes: [
      ['ari', 'la riqueza de'],
      ['ani', 'la alegría de'],
      ['isha', 'la vida de'],
      ['ili', 'la grandeza de'],
      ['ola', 'el corazón de'],
      ['mali', 'la riqueza de'],
      ['kazi', 'el trabajo de'],
      ['shujaa', 'el héroe de']
    ],
    suffixes: [
      ['ari', 'MALE', 'el fuerte de'],
      ['usi', 'MALE', 'el sabio de'],
      ['ira', 'FEMALE', 'la noble de'],
      ['ina', 'FEMALE', 'la bella de'],
      ['ika', 'NEUTER', 'el destino de'],
      ['baba', 'MALE', 'el padre de'],
      ['mtoto', 'MALE', 'el hijo de'],
      ['mama', 'FEMALE', 'la madre de'],
      ['ani', 'MALE', 'el habitante de'],
      ['aji', 'MALE', 'el creador de'],
      ['ishi', 'FEMALE', 'la que vive en'],
      ['izi', 'FEMALE', 'la guardiana de'],
      ['oko', 'NEUTER', 'el producto de'],
      ['ana', 'NEUTER', 'la unión de'],
      ['eza', 'NEUTER', 'la capacidad de']
    ]
  },
  KHUZDUL: {
    roots: [
      ['Fili', 'el ágil'],
      ['Kili', 'el rápido'],
      ['Dori', 'el fuerte'],
      ['Nori', 'el sabio'],
      ['Ori', 'el aprendiz'],
      ['Oin', 'el vidente'],
      ['Gloin', 'el resplandeciente'],
      ['Bifur', 'el tenaz'],
      ['Bofur', 'el alegre'],
      ['Bombur', 'el robusto'],
      ['Gim', 'la estrella de plata'],
      ['Thor', 'el escudo de roble'],
      ['Bal', 'el señor de las minas'],
      ['Dur', 'el rey bajo la montaña'],
      ['Khel', 'el cristal de hielo'],
      ['Zir', 'el metal precioso'],
      ['Bof', 'el martillo pesado'],
      ['Dwa', 'el forjador de hachas'],
      ['Glo', 'la fragua ardiente'],
      ['Nof', 'la barba de fuego'],
      ['Thra', 'el hacedor de armas'],
      ['Fund', 'el pico de acero'],
      ['Kib', 'el cobre brillante'],
      ['Bar', 'la puerta de piedra'],
      ['Azag', 'el guerrero hacedor'],
      ['Buz', 'la raíz profunda'],
      ['Gabil', 'la gran ciudad'],
      ['Khuz', 'el pueblo enano'],
      ['Mahal', 'el creador Aulë'],
      ['Nar', 'el rojo del fuego'],
      ['Ruk', 'el orco enemigo'],
      ['Sig', 'el collar de oro'],
      ['Thark', 'el anciano de la vara'],
      ['Tum', 'el valle profundo']
    ],
    simpleConnectors: [],
    complexInfixes: [
      ['zil', 'el valle de'],
      ['bad', 'la cueva de'],
      ['rak', 'la montaña de'],
      ['dush', 'la oscuridad de'],
      ['gan', 'la piedra de'],
      ['bund', 'la cabeza de'],
      ['zahar', 'el hueco de'],
      ['dum', 'la mansión de']
    ],
    suffixes: [
      ['li', 'MALE', 'el valiente de'],
      ['in', 'MALE', 'el sabio de'],
      ['ur', 'MALE', 'el rey de'],
      ['dis', 'FEMALE', 'la princesa de'],
      ['zig', 'NEUTER', 'el salón de'],
      ['zar', 'MALE', 'el sabio de'],
      ['uz', 'MALE', 'el heredero de'],
      ['mad', 'NEUTER', 'la cámara de'],
      ['ul', 'MALE', 'el hijo de'],
      ['khuz', 'MALE', 'el enano de'],
      ['gath', 'FEMALE', 'la hija de'],
      ['dum', 'NEUTER', 'la mansión de'],
      ['zahar', 'NEUTER', 'el hueco de'],
      ['bund', 'NEUTER', 'la cima de'],
      ['gabil', 'NEUTER', 'la inmensidad de']
    ]
  },
  ELVISH: {
    roots: [
      ['Aear', 'el mar'],
      ['Aer', 'lo sagrado'],
      ['Ar', 'lo noble'],
      ['Cal', 'la luz'],
      ['Celeb', 'la plata'],
      ['El', 'la estrella'],
      ['Fae', 'el alma'],
      ['Fin', 'el cabello trenzado'],
      ['Galad', 'el resplandor'],
      ['Gil', 'la estrella brillante'],
      ['Ithil', 'la luna'],
      ['Loth', 'la flor'],
      ['Mith', 'lo gris'],
      ['Mor', 'la oscuridad'],
      ['Nim', 'lo blanco'],
      ['Orod', 'la montaña'],
      ['Taur', 'el bosque grande']
    ],
    simpleConnectors: [
      ['a', ''],
      ['o', ''],
      ['i', ''],
      ['e', '']
    ],
    complexInfixes: [],
    suffixes: [
      ['dil', 'MALE', 'el devoto de'],
      ['dir', 'MALE', 'el hombre de'],
      ['dan', 'MALE', 'el forjador de'],
      ['ion', 'MALE', 'el hijo de'],
      ['las', 'MALE', 'la hoja de'],
      ['we', 'MALE', 'la persona de'],
      ['mir', 'NEUTER', 'la joya de'],
      ['rond', 'NEUTER', 'la bóveda de'],
      ['wen', 'FEMALE', 'la doncella de'],
      ['iel', 'FEMALE', 'la hija de'],
      ['ien', 'FEMALE', 'la tierra de'],
      ['eth', 'FEMALE', 'la esencia de']
    ]
  },
  VALYRIAN: {
    roots: [
      ['Aeg', 'el hierro'],
      ['Aem', 'el honor'],
      ['Aen', 'la sangre'],
      ['Aer', 'el fuego'],
      ['Bael', 'el valor'],
      ['Cor', 'la corona'],
      ['Dae', 'el destino'],
      ['Hael', 'la flama'],
      ['Jae', 'el jinete'],
      ['Jaca', 'la sabiduría'],
      ['Laen', 'el mar'],
      ['Luca', 'la luz'],
      ['Maeg', 'la magia'],
      ['Mael', 'la sombra'],
      ['Mon', 'el escamas'],
      ['Rhae', 'el dragón'],
      ['Sae', 'el cielo'],
      ['Vae', 'la antigua'],
      ['Vis', 'la realeza']
    ],
    simpleConnectors: [],
    complexInfixes: [],
    suffixes: [
      ['on', 'MALE', 'el gran'],
      ['or', 'MALE', 'el portador de'],
      ['arys', 'MALE', 'el príncipe de'],
      ['orys', 'MALE', 'el rey de'],
      ['yx', 'MALE', 'el fiero'],
      ['aer', 'MALE', 'el valiente'],
      ['el', 'MALE', 'el noble'],
      ['a', 'FEMALE', 'la gran'],
      ['ya', 'FEMALE', 'la señora de'],
      ['ys', 'FEMALE', 'la princesa de'],
      ['ira', 'FEMALE', 'la reina de'],
      ['ella', 'FEMALE', 'la hermosa'],
      ['ena', 'FEMALE', 'la dorada'],
      ['era', 'FEMALE', 'la sabia']
    ]
  }
};

const GENDERS = ['MALE', 'FEMALE', 'NEUTER'];

const toItem = ([text, meaning], style) => ({ text, meaning, style });
const toSuffix = ([text, gender, meaning], style) => ({ text, gender, meaning, style });

export function getLocalComponents(style = 'GREEK') {
  if (style === 'RANDOM') {
    return mergeComponents(['GREEK', 'NORDIC', 'LATIN', 'JAPANESE', 'CELTIC', 'SLAVIC', 'EGYPTIAN', 'SUMERIAN', 'SWAHILI', 'KHUZDUL', 'ELVISH', 'VALYRIAN', 'OLD_ENGLISH', 'CELESTIAL', 'ABYSSAL']);
  }

  const source = DATA[style] || DATA.GREEK;
  return {
    roots: source.roots.map((item) => toItem(item, style)),
    simpleConnectors: source.simpleConnectors.map((item) => toItem(item, style)),
    complexInfixes: source.complexInfixes.map((item) => toItem(item, style)),
    suffixes: source.suffixes.map((item) => toSuffix(item, style))
  };
}

export function generateLocalNames(params) {
  if (params.style === 'CUSTOM') {
    return generateCustomNames(params);
  }

  const count = params.count ?? 6;
  const useCustomFormula = params.formulaMode === 'CUSTOM';
  const results = [];
  const seenNames = new Set();
  let attempts = 0;
  const maxAttempts = count * 10;
  const isMix = params.style === 'MIX';
  const isRandom = params.style === 'RANDOM';

  while (results.length < count && attempts < maxAttempts) {
    attempts++;
    const gender = params.gender === 'RANDOM' || !params.gender ? pick(GENDERS) : params.gender;
    
    let rootComp, suffixComp, c1Comp, infixComp, c2Comp;
    let formula;
    let finalStyle = params.style || 'GREEK';

    if (isMix && params.mixOrigins) {
      const rootStyle = params.mixOrigins.root || pick(['GREEK', 'NORDIC', 'LATIN', 'JAPANESE', 'CELTIC', 'SLAVIC', 'EGYPTIAN', 'SUMERIAN', 'SWAHILI', 'KHUZDUL', 'ELVISH', 'VALYRIAN', 'OLD_ENGLISH', 'CELESTIAL', 'ABYSSAL']);
      const infixStyle = params.mixOrigins.infix || pick(['GREEK', 'NORDIC', 'LATIN', 'JAPANESE', 'CELTIC', 'SLAVIC', 'EGYPTIAN', 'SUMERIAN', 'SWAHILI', 'KHUZDUL', 'ELVISH', 'VALYRIAN', 'OLD_ENGLISH', 'CELESTIAL', 'ABYSSAL']);
      const suffixStyle = params.mixOrigins.suffix || pick(['GREEK', 'NORDIC', 'LATIN', 'JAPANESE', 'CELTIC', 'SLAVIC', 'EGYPTIAN', 'SUMERIAN', 'SWAHILI', 'KHUZDUL', 'ELVISH', 'VALYRIAN', 'OLD_ENGLISH', 'CELESTIAL', 'ABYSSAL']);
      
      const roots = getLocalComponents(rootStyle).roots;
      const infixes = getLocalComponents(infixStyle).complexInfixes;
      const suffixes = getLocalComponents(suffixStyle).suffixes;
      
      formula = useCustomFormula ? (params.formula || ['ROOT', 'SUFFIX']) : getRandomStructure({ roots, complexInfixes: infixes, suffixes, simpleConnectors: [] });
      
      const suffixPool = params.suffix ? suffixes : suffixes.filter((item) => item.gender === gender);
      
      rootComp = findOrPick(roots, params.root);
      infixComp = findOrPick(infixes, params.infix);
      suffixComp = findOrPick(suffixPool, params.suffix);
      c1Comp = undefined; 
      c2Comp = undefined;
      
      finalStyle = rootStyle;
    } else {
      const style = isRandom ? pick(['GREEK', 'NORDIC', 'LATIN', 'JAPANESE', 'CELTIC', 'SLAVIC', 'EGYPTIAN', 'SUMERIAN', 'SWAHILI', 'KHUZDUL', 'ELVISH', 'VALYRIAN', 'OLD_ENGLISH', 'CELESTIAL', 'ABYSSAL']) : params.style || 'GREEK';
      const components = getLocalComponents(style);
      let formulaComps = components;
      if (isRandom) {
        formulaComps = { ...components, simpleConnectors: [] };
      }
      formula = useCustomFormula ? (params.formula || ['ROOT', 'SUFFIX']) : getRandomStructure(formulaComps);
      const suffixPool = params.suffix ? components.suffixes : components.suffixes.filter((item) => item.gender === gender);
      
      rootComp = formula.includes('ROOT') ? findOrPick(components.roots, params.root) : undefined;
      suffixComp = formula.includes('SUFFIX') ? findOrPick(suffixPool, params.suffix) : undefined;
      c1Comp = formula.includes('CONNECTOR1') ? findOrPick(components.simpleConnectors, params.connector1) : undefined;
      infixComp = formula.includes('INFIX') ? findOrPick(components.complexInfixes, params.infix) : undefined;
      c2Comp = formula.includes('CONNECTOR2') ? findOrPick(components.simpleConnectors, params.connector2) : undefined;
      
      finalStyle = style;
    }

    const newName = buildName({
      style: finalStyle,
      showOriginInsteadOfMeaning: isRandom || (isMix && !useCustomFormula),
      gender,
      formula,
      root: rootComp,
      suffix: suffixComp,
      connector1: c1Comp,
      infix: infixComp,
      connector2: c2Comp,
      index: results.length
    });

    if (!seenNames.has(newName.name)) {
      seenNames.add(newName.name);
      results.push(newName);
    }
  }
  
  return results;
}

function generateCustomNames(params) {
  const roots = params.root?.length ? params.root : [];
  const suffixes = params.suffix?.length ? params.suffix : [];
  const connector1 = params.connector1?.length ? params.connector1 : [''];
  const infixes = params.infix?.length ? params.infix : [''];
  const connector2 = params.connector2?.length ? params.connector2 : [''];
  const f = params.formula?.length ? params.formula : ['ROOT', 'SUFFIX'];
  const results = [];

  for (const root of roots) {
    for (const suffix of suffixes) {
      for (const c1 of connector1) {
        for (const infix of infixes) {
          for (const c2 of connector2) {
            if (!customFormulaIsReady(f, c1, infix, c2)) continue;
            results.push(buildName({
              style: 'CUSTOM',
              gender: params.gender === 'RANDOM' ? pick(GENDERS) : params.gender,
              formula: f,
              root: { text: root, meaning: '' },
              suffix: { text: suffix, meaning: '' },
              connector1: { text: c1, meaning: '' },
              infix: { text: infix, meaning: '' },
              connector2: { text: c2, meaning: '' },
              index: results.length
            }));
            if (results.length >= 50) return results;
          }
        }
      }
    }
  }

  return results;
}

const STYLE_LABELS = {
  OLD_ENGLISH: 'Anglosajón',
  CELESTIAL: 'Celestial',
  ABYSSAL: 'Abisal',
  GREEK: 'Griego Antiguo',
  NORDIC: 'Nórdico Antiguo',
  LATIN: 'Latín',
  JAPANESE: 'Japonés',
  ELVISH: 'Élfico',
  VALYRIAN: 'Alto Valyrio',
  CELTIC: 'Celta',
  SLAVIC: 'Eslavo',
  EGYPTIAN: 'Egipcio',
  SUMERIAN: 'Sumerio',
  SWAHILI: 'Swahili',
  KHUZDUL: 'Khuzdul'
};

function buildName(parts) {
  const f = parts.formula || ['ROOT', 'SUFFIX'];
  const formulaParts = [];
  if (f.includes('ROOT')) formulaParts.push(parts.root);
  if (f.includes('CONNECTOR1')) formulaParts.push(parts.connector1);
  if (f.includes('INFIX')) formulaParts.push(parts.infix);
  if (f.includes('CONNECTOR2')) formulaParts.push(parts.connector2);
  if (f.includes('SUFFIX')) formulaParts.push(parts.suffix);

  const name = capitalize(formulaParts.reduce((result, item) => combine(result, item?.text || ''), ''));
  
  let meaning = [parts.suffix?.meaning, parts.connector2?.meaning, parts.infix?.meaning, parts.connector1?.meaning, parts.root?.meaning]
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .replace(/\bde el\b/g, 'del')
    .replace(/\bde de\b/g, 'de')
    .replace(/\by y\b/g, 'y')
    .replace(/\by de\b/g, 'y')
    .replace(/\bde y\b/g, 'y')
    .replace(/\bde del\b/g, 'del')
    .replace(/\bde ([a-záéíóúñ]+) (el|la|los|las|del|y)\b/gi, '$1 de $2')
    .replace(/\bde de\b/g, 'de')
    .replace(/\bde del\b/g, 'del')
    .replace(/\bde y\b/g, 'y')
    .trim();

  let originMix = null;
  if (parts.showOriginInsteadOfMeaning) {
    const origins = [parts.root?.style, parts.connector1?.style, parts.infix?.style, parts.connector2?.style, parts.suffix?.style].filter(Boolean);
    const uniqueOrigins = Array.from(new Set(origins));
    originMix = uniqueOrigins.map(o => STYLE_LABELS[o] || o).join(' + ');
  }

  return {
    id: `${name}-${parts.index}`,
    name,
    ipa: generateIPA(name, parts.style),
    gender: parts.gender || 'NEUTER',
    meaning,
    originMix,
    formula: formulaLabel(parts.formula),
    style: parts.style
  };
}

function mergeComponents(styles) {
  return styles.reduce((merged, style) => {
    const components = getLocalComponents(style);
    Object.keys(merged).forEach((key) => merged[key].push(...components[key]));
    return merged;
  }, { roots: [], simpleConnectors: [],
    complexInfixes: [], suffixes: [] });
}

function findOrPick(items, text, type) {
  if (!text) return pick(items);
  const selected = items.find((item) => item.text.toLowerCase() === String(text).toLowerCase());
  if (selected) return selected;
  
  // Si no está en este idioma (ej: style=NORDIC pero el usuario forzó una raíz LATIN), buscamos en el resto
  for (const s of ['GREEK', 'NORDIC', 'LATIN', 'JAPANESE', 'CELTIC', 'SLAVIC', 'EGYPTIAN', 'SUMERIAN', 'SWAHILI', 'KHUZDUL', 'ELVISH', 'VALYRIAN', 'OLD_ENGLISH', 'CELESTIAL', 'ABYSSAL']) {
    const comps = getLocalComponents(s);
    for (const key in comps) {
      const found = comps[key].find((item) => item.text.toLowerCase() === String(text).toLowerCase());
      if (found) return found;
    }
  }
  
  return { text, meaning: '' };
}

function customFormulaIsReady(formula, connector1, infix, connector2) {
  if (formula.includes('CONNECTOR1') && !connector1) return false;
  if (formula.includes('INFIX') && !infix) return false;
  if (formula.includes('CONNECTOR2') && !connector2) return false;
  return true;
}

function getRandomStructure() {
  const f = ['ROOT', 'SUFFIX'];
  if (Math.random() > 0.5) f.push('CONNECTOR1');
  if (Math.random() > 0.5) f.push('INFIX');
  if (f.includes('INFIX') && Math.random() > 0.7) f.push('CONNECTOR2');
  return f;
}

function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function combine(a, b) {
  if (!a) return b;
  if (!b) return a;
  const last = a.at(-1);
  const first = b[0];
  if (isVowel(last) && isVowel(first)) {
    if (isDiphthong(last, first)) return a + b;
    if (last.toLowerCase() === 'a' && first.toLowerCase() === 'o') return combine(a, b.slice(1));
    return combine(a.slice(0, -1), b);
  }
  return a + b;
}

function isVowel(char) {
  return 'aeiouyAEIOUY'.includes(char);
}

function isDiphthong(a, b) {
  return ['ia', 'io', 'ie', 'iu', 'ea', 'eo', 'eu', 'ae', 'oe', 'ai', 'ei', 'ua', 'ui', 'ey', 'au'].includes(
    `${a}${b}`.toLowerCase()
  );
}

function capitalize(value) {
  return value ? value[0].toUpperCase() + value.slice(1).toLowerCase() : value;
}

function formulaLabel(formula) {
  const f = formula || ['ROOT', 'SUFFIX'];
  const labels = [];
  if (f.includes('ROOT')) labels.push('Prefijo');
  if (f.includes('CONNECTOR1')) labels.push('Conector 1');
  if (f.includes('INFIX')) labels.push('Infijo');
  if (f.includes('CONNECTOR2')) labels.push('Conector 2');
  if (f.includes('SUFFIX')) labels.push('Sufijo');
  return 'Estructura: ' + labels.join(' + ');
}

function generateIPA(name, style) {
  let ipa = name.toLowerCase();
  
  if (style === 'GREEK') {
    ipa = ipa
      .replace(/ai/g, 'e')
      .replace(/ei/g, 'i')
      .replace(/oi/g, 'i')
      .replace(/ou/g, 'u')
      .replace(/au/g, 'af')
      .replace(/eu/g, 'ef')
      .replace(/ph/g, 'f')
      .replace(/th/g, 'θ')
      .replace(/ch/g, 'x')
      .replace(/y/g, 'i')
      .replace(/c/g, 'k')
      .replace(/x/g, 'ks');
  } else if (style === 'NORDIC') {
    ipa = ipa
      .replace(/ei/g, 'eɪ')
      .replace(/au/g, 'aʊ')
      .replace(/th/g, 'θ')
      .replace(/j/g, 'j')
      .replace(/y/g, 'y')
      .replace(/v/g, 'v')
      .replace(/ö/g, 'ø')
      .replace(/o/g, 'o')
      .replace(/rs/g, 'ʂ')
      .replace(/rn/g, 'rn');
  } else if (style === 'LATIN') {
    ipa = ipa
      .replace(/qu/g, 'kw')
      .replace(/ae/g, 'aɪ')
      .replace(/c/g, 'k')
      .replace(/v/g, 'w')
      .replace(/ph/g, 'f')
      .replace(/th/g, 't')
      .replace(/y/g, 'i');
  } else if (style === 'JAPANESE') {
    ipa = ipa
      .replace(/sh/g, 'ɕ')
      .replace(/ch/g, 'tɕ')
      .replace(/j/g, 'dʑ')
      .replace(/y/g, 'j')
      .replace(/r/g, 'ɾ');
  } else if (style === 'SUMERIAN', 'SWAHILI', 'KHUZDUL', 'ELVISH') {
    ipa = ipa
      .replace(/th/g, 'θ')
      .replace(/dh/g, 'ð')
      .replace(/ch/g, 'x')
      .replace(/ph/g, 'f')
      .replace(/lh/g, 'ɬ')
      .replace(/y/g, 'y');
  } else if (style === 'CELTIC') {
    ipa = ipa
      .replace(/w/g, 'w')
      .replace(/y/g, 'ɨ')
      .replace(/dd/g, 'ð')
      .replace(/th/g, 'θ')
      .replace(/ch/g, 'x')
      .replace(/ll/g, 'ɬ')
      .replace(/ff/g, 'f')
      .replace(/f/g, 'v')
      .replace(/c/g, 'k')
      .replace(/mh/g, 'v');
  } else if (false) {
    ipa = ipa
      .replace(/sh/g, 'ɕ')
      .replace(/ch/g, 'tɕ')
      .replace(/j/g, 'dʑ')
      .replace(/bh/g, 'bʱ')
      .replace(/dh/g, 'dʱ')
      .replace(/gh/g, 'gʱ')
      .replace(/kh/g, 'kʰ')
      .replace(/ph/g, 'pʰ')
      .replace(/th/g, 'tʰ');
  } else if (style === 'SLAVIC') {
    ipa = ipa
      .replace(/sh/g, 'ʂ')
      .replace(/zh/g, 'ʐ')
      .replace(/ch/g, 't͡ʂ')
      .replace(/c/g, 't͡s')
      .replace(/j/g, 'j')
      .replace(/y/g, 'ɨ')
      .replace(/r/g, 'r');
  } else if (style === 'EGYPTIAN') {
    ipa = ipa
      .replace(/kh/g, 'x')
      .replace(/dj/g, 'd͡ʒ')
      .replace(/tj/g, 't͡ʃ')
      .replace(/q/g, 'q')
      .replace(/ph/g, 'f')
      .replace(/th/g, 'θ');
  } else if (style === 'SUMERIAN') {
    ipa = ipa
      .replace(/sh/g, 'ʃ')
      .replace(/kh/g, 'x')
      .replace(/z/g, 't͡s');
  }   else if (style === 'SWAHILI') {
    ipa = ipa
      .replace(/sh/g, 'ʃ')
      .replace(/ch/g, 't͡ʃ')
      .replace(/j/g, 'd͡ʒ')
      .replace(/gh/g, 'ʁ')
      .replace(/ng/g, 'ŋ');
  } else if (style === 'KHUZDUL') {
    ipa = ipa
      .replace(/kh/g, 'kʰ')
      .replace(/th/g, 'tʰ')
      .replace(/zh/g, 'ʒ')
      .replace(/sh/g, 'ʃ')
      .replace(/z/g, 'z');
  
  } else if (style === 'SUMERIAN') {
    ipa = ipa
      .replace(/sh/g, 'ʃ')
      .replace(/kh/g, 'x')
      .replace(/z/g, 't͡s');
  }   else if (style === 'SWAHILI') {
    ipa = ipa
      .replace(/sh/g, 'ʃ')
      .replace(/ch/g, 't͡ʃ')
      .replace(/j/g, 'd͡ʒ')
      .replace(/gh/g, 'ʁ')
      .replace(/ng/g, 'ŋ');
  } else if (style === 'KHUZDUL') {
    ipa = ipa
      .replace(/kh/g, 'kʰ')
      .replace(/th/g, 'tʰ')
      .replace(/zh/g, 'ʒ')
      .replace(/sh/g, 'ʃ')
      .replace(/z/g, 'z');
  }   else if (style === 'OLD_ENGLISH') {
    ipa = ipa
      .replace(/ae/g, 'æ')
      .replace(/cg/g, 'd͡ʒ')
      .replace(/sc/g, 'ʃ')
      .replace(/w/g, 'w')
      .replace(/y/g, 'y');
  } else if (style === 'CELESTIAL') {
    ipa = ipa
      .replace(/ae/g, 'æ')
      .replace(/ph/g, 'f')
      .replace(/th/g, 'θ');
  } else if (style === 'ABYSSAL') {
    ipa = ipa
      .replace(/gh/g, 'ʁ')
      .replace(/sh/g, 'ʃ')
      .replace(/kh/g, 'x')
      .replace(/x/g, 'z')
      .replace(/z/g, 'z');
  } else {
    ipa = ipa
      .replace(/ai/g, 'e')
      .replace(/ou/g, 'u')
      .replace(/ph/g, 'f')
      .replace(/th/g, 'θ')
      .replace(/ch/g, 'x')
      .replace(/y/g, 'i');
  }

  // Accent logic (using standard Spanish tildes instead of IPA stress marks for readability)
  const accents = { 'a': 'á', 'e': 'é', 'i': 'í', 'o': 'ó', 'u': 'ú', 'y': 'ý', 'ø': 'ǿ', 'θ': 'θ' };
  
  // Find all vowel characters
  const vowelsMatches = [...ipa.matchAll(/[aeiouyø]/g)];
  if (vowelsMatches.length >= 2) {
    // Penultimate syllable stress
    const penultMatch = vowelsMatches[vowelsMatches.length - 2];
    const char = penultMatch[0];
    const index = penultMatch.index;
    if (accents[char]) {
      ipa = ipa.substring(0, index) + accents[char] + ipa.substring(index + 1);
    }
  } else if (vowelsMatches.length === 1) {
    const match = vowelsMatches[0];
    const char = match[0];
    const index = match.index;
    if (accents[char]) {
      ipa = ipa.substring(0, index) + accents[char] + ipa.substring(index + 1);
    }
  }

  return ipa;
}
