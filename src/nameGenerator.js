const DATA = {

  OLD_ENGLISH: {
    roots: [
      ['Aethel', 'la nobleza'],
      ['Cen', 'el valor'],
      ['Ead', 'la riqueza'],
      ['Leof', 'el amor'],
      ['God', 'la bondad'],
      ['Wulf', 'el lobo'],
      ['Beorht', 'la luz brillante'],
      ['Cyne', 'la realeza'],
      ['Sig', 'la victoria'],
      ['Maer', 'la fama'],
      ['Aelf', 'el elfo'],
      ['Beald', 'la audacia'],
      ['Cwen', 'la reina'],
      ['Dun', 'la colina oscura'],
      ['Eald', 'lo antiguo'],
      ['Frod', 'la sabiduría'],
      ['Gar', 'la lanza'],
      ['Here', 'el ejército'],
      ['Iren', 'el hierro'],
      ['Rad', 'el consejo'],
      ['Os', 'la deidad']
    ],
    simpleConnectors: [
      ['a', ''],
      ['e', ''],
      ['i', ''],
      ['o', '']
    ],
    complexInfixes: [
      ['weald', 'poderoso'],
      ['stan', 'firme'],
      ['helm', 'protector'],
      ['fri', 'pacífico'],
      ['grim', 'feroz']
    ],
    suffixes: [
      ['ric', 'MALE', 'el gobernante de'],
      ['red', 'MALE', 'el consejero de'],
      ['wyn', 'FEMALE', 'la alegría de'],
      ['flaed', 'FEMALE', 'la pureza de'],
      ['run', 'NEUTER', 'el misterio de'],
      ['gar', 'MALE', 'el lancero de'],
      ['weard', 'MALE', 'el guardián de'],
      ['gifu', 'FEMALE', 'el regalo de'],
      ['swith', 'FEMALE', 'la fuerza de'],
      ['burg', 'FEMALE', 'la defensora de']
    ]
  },
  CELESTIAL: {
    roots: [
      ['Aura', 'la esencia luminosa'],
      ['Seraph', 'el fuego divino'],
      ['Lumin', 'el destello puro'],
      ['Cael', 'la bóveda estrellada'],
      ['Aether', 'el cosmos incorruptible'],
      ['Sol', 'la estrella radiante'],
      ['Val', 'el coraje celestial'],
      ['Lux', 'el resplandor infinito'],
      ['Eon', 'la eternidad'],
      ['Iri', 'el arco iris sagrado'],
      ['Astra', 'las estrellas'],
      ['Numen', 'el espíritu divino'],
      ['Lyr', 'la canción de las esferas'],
      ['Thal', 'la pureza absoluta'],
      ['Vesper', 'el atardecer dorado'],
      ['Pyra', 'el fuego sagrado'],
      ['Chryso', 'el oro celestial'],
      ['Nova', 'la explosión de luz'],
      ['Elys', 'el paraíso pacífico'],
      ['Myrr', 'la fragancia divina']
    ],
    simpleConnectors: [
      ['i', 'y'],
      ['ae', 'de'],
      ['ea', 'y'],
      ['io', 'de']
    ],
    complexInfixes: [
      ['thi', 'puro'],
      ['vi', 'sagrado'],
      ['pha', 'resplandeciente'],
      ['ly', 'armonioso'],
      ['za', 'eterno']
    ],
    suffixes: [
      ['el', 'NEUTER', 'la deidad de'],
      ['ion', 'MALE', 'el heredero de'],
      ['a', 'FEMALE', 'la cantora de'],
      ['us', 'MALE', 'el portador de'],
      ['is', 'FEMALE', 'la estrella de'],
      ['ar', 'MALE', 'el guardián de'],
      ['ia', 'FEMALE', 'la gracia de'],
      ['en', 'NEUTER', 'la voz de'],
      ['os', 'MALE', 'el trono de'],
      ['iel', 'FEMALE', 'la luz de']
    ]
  },
  ABYSSAL: {
    roots: [
      ['Gorg', 'la pesadilla'],
      ['Mor', 'la muerte oscura'],
      ['Bael', 'la condenación'],
      ['Vaal', 'el abismo devorador'],
      ['Kael', 'la sangre derramada'],
      ['Thar', 'el dolor eterno'],
      ['Zar', 'el fuego negro'],
      ['Az', 'la ira infinita'],
      ['Uruk', 'la bestia cruel'],
      ['Xar', 'la oscuridad eterna'],
      ['Nul', 'el vacío'],
      ['Vex', 'el tormento'],
      ['Draug', 'el espectro'],
      ['Zath', 'las sombras oscuras'],
      ['Ryl', 'la sangre hirviente'],
      ['Orox', 'la piedra negra'],
      ['Kruz', 'la crueldad'],
      ['Vile', 'la corrupción'],
      ['Nyx', 'la noche eterna'],
      ['Goth', 'la ruina absoluta']
    ],
    simpleConnectors: [
      ['u', 'de'],
      ['o', 'de'],
      ['i', 'y'],
      ['a', 'y']
    ],
    complexInfixes: [
      ['gash', 'profano'],
      ['rok', 'destructor'],
      ['vok', 'aterrador'],
      ['thul', 'implacable'],
      ['zul', 'maldito']
    ],
    suffixes: [
      ['oth', 'NEUTER', 'el demonio de'],
      ['uz', 'MALE', 'el señor oscuro de'],
      ['ith', 'FEMALE', 'la madre de'],
      ['ar', 'NEUTER', 'la abominación de'],
      ['ok', 'MALE', 'el destructor de'],
      ['gol', 'NEUTER', 'el horror de'],
      ['zak', 'MALE', 'el torturador de'],
      ['ish', 'FEMALE', 'la sombra de'],
      ['or', 'MALE', 'el devorador de'],
      ['ux', 'NEUTER', 'el veneno de']
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
      ['Gwen', 'lo blanco y sagrado'],
      ['Bran', 'el cuervo de batalla'],
      ['Mor', 'el mar infinito'],
      ['Rhys', 'el ardor del guerrero'],
      ['Fionn', 'la justicia brillante'],
      ['Taran', 'el trueno resonante'],
      ['Cael', 'la delgadez y gracia'],
      ['Aeron', 'el dios de la guerra'],
      ['Llyw', 'el líder victorioso'],
      ['Boud', 'la victoria rotunda'],
      ['Eoghan', 'el nacido del tejo'],
      ['Oisin', 'el pequeño ciervo'],
      ['Galan', 'la calma y paz'],
      ['Cian', 'la antigüedad y sabiduría'],
      ['Ail', 'la piedra inquebrantable'],
      ['Donn', 'el señor oscuro'],
      ['Fiach', 'el cuervo negro'],
      ['Loch', 'el lago místico'],
      ['Niav', 'la belleza radiante'],
      ['Sion', 'la fortaleza de la colina'],
      ['Art', 'el oso guerrero'],
      ['Beli', 'el dios resplandeciente'],
      ['Cam', 'el camino torcido'],
      ['Dumn', 'el mundo profundo'],
      ['Gwynd', 'el blanco bendito'],
      ['Ial', 'el claro del bosque'],
      ['Llan', 'la iglesia sagrada'],
      ['Mael', 'el príncipe divino'],
      ['Nant', 'el arroyo rápido'],
      ['Pen', 'la colina alta'],
      ['Rhyd', 'el vado del río'],
      ['Tref', 'el pueblo natal'],
      ['Uchel', 'lo alto y noble'],
      ['Vran', 'el cuervo de la muerte'],
      ['Ynys', 'la isla mística']
    ],
    simpleConnectors: [
      ['a', ''], ['o', ''], ['y', ''], ['i', ''], ['e', ''], ['u', '']
    ],
    complexInfixes: [
      ['gal', 'el valor de',
      ['tegi', 'la casa de'],
      ['cassi', 'el hermoso de'],
      ['nemeto', 'lo sagrado de']
    ],
      ['mar', 'la grandeza de'],
      ['vyn', 'la colina de'],
      ['gwyn', 'la bendición de'],
      ['der', 'el roble de']
    ],
    suffixes: [
      ['doc', 'MALE', 'el guerrero de',
      ['rix', 'MALE', 'el rey de'],
      ['mab', 'MALE', 'el joven de'],
      ['mer', 'FEMALE', 'la hija de'],
      ['tigern', 'NEUTER', 'el señorío de']
    ],
      ['wal', 'MALE', 'el líder de'],
      ['gorn', 'MALE', 'el héroe de'],
      ['gan', 'MALE', 'el descendiente de'],
      ['fael', 'MALE', 'el lobo de'],
      ['wen', 'FEMALE', 'la dama de'],
      ['veth', 'FEMALE', 'la protectora de'],
      ['wyn', 'FEMALE', 'la bendecida por'],
      ['na', 'FEMALE', 'la magia de'],
      ['lin', 'NEUTER', 'el canto de'],
      ['dun', 'NEUTER', 'la fortaleza de'],
      ['lan', 'NEUTER', 'el recinto sagrado de'],
      ['rix', 'MALE', 'el rey de'],
      ['maros', 'MALE', 'el grande en'],
      ['boudi', 'FEMALE', 'la victoria de'],
      ['gen', 'FEMALE', 'la nacida de']
    ]
  },
  SANSKRIT: {
    roots: [
      ['Rama', 'la alegría interior'],
      ['Sita', 'el surco sagrado'],
      ['Brahma', 'el creador supremo'],
      ['Shiva', 'el destructor compasivo'],
      ['Krsna', 'el oscuro y atractivo'],
      ['Indra', 'el rey del cielo'],
      ['Agni', 'el fuego purificador'],
      ['Vayu', 'el viento vital'],
      ['Surya', 'el sol iluminador'],
      ['Chandra', 'la luna calmante'],
      ['Deva', 'la divinidad resplandeciente'],
      ['Surya', 'el sol celestial'],
      ['Chandra', 'la luna calmante'],
      ['Vayu', 'el viento vital'],
      ['Agni', 'el fuego transformador'],
      ['Jala', 'el agua purificadora'],
      ['Bhoomi', 'la madre tierra'],
      ['Akasha', 'el éter infinito'],
      ['Dharma', 'la ley universal'],
      ['Karma', 'la acción divina'],
      ['Moksha', 'la liberación final'],
      ['Shanti', 'la paz interior'],
      ['Prema', 'el amor puro'],
      ['Vidya', 'el conocimiento superior'],
      ['Brahma', 'el creador supremo'],
      ['Shiva', 'el destructor compasivo'],
      ['Vishnu', 'el preservador del orden'],
      ['Indra', 'el rey de los dioses'],
      ['Mitra', 'el amigo universal'],
      ['Ravi', 'el sol de la mañana'],
      ['Ananda', 'la felicidad suprema'],
      ['Atman', 'el alma universal'],
      ['Bodhi', 'el despertar de la mente'],
      ['Gita', 'la canción divina'],
      ['Guru', 'el maestro espiritual'],
      ['Jyoti', 'la luz brillante'],
      ['Kala', 'el tiempo eterno'],
      ['Kama', 'el deseo apasionado'],
      ['Loka', 'el mundo entero'],
      ['Maya', 'la ilusión cósmica'],
      ['Nirvana', 'la liberación total'],
      ['Prana', 'el aliento vital'],
      ['Rasa', 'el sabor de la vida'],
      ['Veda', 'el conocimiento sagrado'],
      ['Yoga', 'la unión mística']
    ],
    simpleConnectors: [
      ['a', ''], ['i', ''], ['u', ''], ['e', ''], ['o', '']
    ],
    complexInfixes: [
      ['natha', 'el señor de',
      ['varma', 'el escudo de'],
      ['dasa', 'el sirviente de'],
      ['bhakta', 'el devoto de']
    ],
      ['pati', 'el maestro de'],
      ['ratna', 'la joya de'],
      ['prasada', 'la gracia de'],
      ['shri', 'la prosperidad de']
    ],
    suffixes: [
      ['dasa', 'MALE', 'el sirviente devoto de',
      ['sena', 'MALE', 'el ejército de'],
      ['gupta', 'MALE', 'el protegido de'],
      ['vrat', 'NEUTER', 'el voto de'],
      ['shala', 'NEUTER', 'el salón de'],
      ['dhara', 'MALE', 'el portador de'],
      ['vardhan', 'MALE', 'el que incrementa'],
      ['vati', 'FEMALE', 'la poseedora de'],
      ['mati', 'FEMALE', 'la mente iluminada de'],
      ['dutta', 'MALE', 'el otorgado por'],
      ['kanta', 'MALE', 'el amado por'],
      ['priya', 'FEMALE', 'la amada por']
    ],
      ['deva', 'MALE', 'el dios de'],
      ['datta', 'MALE', 'el dado por'],
      ['kumar', 'MALE', 'el joven príncipe de'],
      ['raj', 'MALE', 'el rey de'],
      ['devi', 'FEMALE', 'la diosa de'],
      ['vati', 'FEMALE', 'la poseedora de'],
      ['mati', 'FEMALE', 'la mente iluminada de'],
      ['kumari', 'FEMALE', 'la princesa de'],
      ['bala', 'FEMALE', 'la fuerza femenina de'],
      ['darshan', 'NEUTER', 'la visión sagrada de'],
      ['mandala', 'NEUTER', 'el círculo de'],
      ['yantra', 'NEUTER', 'el instrumento de']
    ]
  },
  SLAVIC: {
    roots: [
      ['Bojan', 'el guerrero feroz'],
      ['Darko', 'el que tiene un don'],
      ['Goran', 'el hombre de la montaña'],
      ['Novak', 'el hombre nuevo'],
      ['Vuk', 'el lobo protector'],
      ['Zora', 'la luz del alba'],
      ['Vesna', 'la mensajera de la primavera'],
      ['Lada', 'la diosa de la belleza'],
      ['Morana', 'la señora del invierno'],
      ['Slaven', 'el de origen eslavo'],
      ['Vlad', 'el gran poder'],
      ['Miros', 'la paz mundial'],
      ['Bogu', 'la voluntad divina'],
      ['Slava', 'la gloria eterna'],
      ['Lubo', 'el amor sincero'],
      ['Zora', 'el amanecer radiante'],
      ['Vela', 'la gran sabiduría'],
      ['Sveta', 'la luz sagrada'],
      ['Rado', 'la alegría desbordante'],
      ['Drago', 'lo precioso y querido'],
      ['Zlato', 'el oro puro'],
      ['Bor', 'la lucha fiera'],
      ['Mila', 'la gracia amable'],
      ['Gosti', 'el huésped de honor'],
      ['Daro', 'el regalo celestial'],
      ['Brat', 'el hermano leal'],
      ['Cedom', 'el hijo amado'],
      ['Gvozd', 'el bosque denso'],
      ['Jar', 'la primavera feroz'],
      ['Kras', 'la belleza inmensa'],
      ['Ljub', 'el amor verdadero'],
      ['Mst', 'la venganza justa'],
      ['Ogn', 'el fuego devorador'],
      ['Rad', 'el trabajador feliz'],
      ['Stan', 'el gobierno firme'],
      ['Svet', 'el mundo sagrado'],
      ['Tih', 'el silencio de paz'],
      ['Voj', 'la guerra santa'],
      ['Zhiv', 'la vida vibrante'],
      ['Zlat', 'el oro brillante']
    ],
    simpleConnectors: [
      ['o', ''], ['e', ''], ['i', ''], ['a', ''], ['u', '']
    ],
    complexInfixes: [
      ['mir', 'la paz de',
      ['lub', 'el amor de'],
      ['bog', 'el dios de'],
      ['svet', 'la luz de']
    ],
      ['slav', 'la gloria de'],
      ['bor', 'la batalla de'],
      ['polk', 'el pueblo de'],
      ['dar', 'el don de']
    ],
    suffixes: [
      ['ov', 'MALE', 'el hijo de',
      ['ovich', 'MALE', 'el hijo de'],
      ['ovna', 'FEMALE', 'la hija de'],
      ['pol', 'NEUTER', 'el campo de'],
      ['ski', 'MALE', 'el noble de'],
      ['ska', 'FEMALE', 'la dama de'],
      ['in', 'MALE', 'el perteneciente a'],
      ['ina', 'FEMALE', 'la nacida en'],
      ['ec', 'MALE', 'el joven de'],
      ['ka', 'FEMALE', 'la muchacha de'],
      ['stvo', 'NEUTER', 'el reino de']
    ],
      ['in', 'MALE', 'el descendiente de'],
      ['ski', 'MALE', 'el noble de'],
      ['ic', 'MALE', 'el heredero de'],
      ['ova', 'FEMALE', 'la hija de'],
      ['ina', 'FEMALE', 'la doncella de'],
      ['ska', 'FEMALE', 'la dama de'],
      ['ica', 'FEMALE', 'la pequeña de'],
      ['stvo', 'NEUTER', 'el reino de'],
      ['grad', 'NEUTER', 'la ciudad de'],
      ['je', 'NEUTER', 'el territorio de']
    ]
  },
  EGYPTIAN: {
    roots: [
      ['Amon', 'el dios oculto'],
      ['Anubis', 'el guardián de las tumbas'],
      ['Osiris', 'el señor de la eternidad'],
      ['Isis', 'la madre divina'],
      ['Horus', 'el halcón celestial'],
      ['Seth', 'el dios del caos'],
      ['Thoth', 'el escriba sagrado'],
      ['Maat', 'la verdad universal'],
      ['Ptah', 'el creador del mundo'],
      ['Ra', 'el disco solar'],
      ['Ra', 'el dios del sol'],
      ['Amon', 'lo oculto y misterioso'],
      ['Ptah', 'el creador divino'],
      ['Thoth', 'la sabiduría eterna'],
      ['Hor', 'el halcón celeste'],
      ['Osir', 'el señor del más allá'],
      ['Isi', 'la magia protectora'],
      ['Seth', 'el desierto tormentoso'],
      ['Anub', 'el guía de las sombras'],
      ['Maat', 'la verdad y justicia'],
      ['Sekh', 'la leona feroz'],
      ['Bast', 'la gata guardiana'],
      ['Nekh', 'la diosa buitre'],
      ['Hathor', 'el amor y la alegría'],
      ['Aton', 'el disco solar'],
      ['Ahmes', 'nacido de la luna'],
      ['Djehuti', 'el portador de ibis'],
      ['Horem', 'el cielo estrellado'],
      ['Imhotep', 'el que viene en paz'],
      ['Khafre', 'el que aparece grande'],
      ['Khufu', 'el protegido de los dioses'],
      ['Menes', 'el fundador duradero'],
      ['Neith', 'la tejedora del destino'],
      ['Pepy', 'el rey del alto Egipto'],
      ['Ramses', 'el nacido de Ra'],
      ['Senusret', 'el hombre de la diosa'],
      ['Teti', 'el faraón unificador'],
      ['Tut', 'la imagen viva'],
      ['Unas', 'el rey estelar'],
      ['Woser', 'el poderoso']
    ],
    simpleConnectors: [],
    complexInfixes: [
      ['hotep', 'la paz de',
      ['meri', 'el amado de'],
      ['user', 'la fuerza de'],
      ['men', 'la estabilidad de']
    ],
      ['mose', 'el nacido de'],
      ['nefer', 'la belleza de'],
      ['ankh', 'la vida de'],
      ['kheper', 'el amanecer de']
    ],
    suffixes: [
      ['mose', 'MALE', 'el engendrado por',
      ['re', 'MALE', 'el sol de'],
      ['ptah', 'MALE', 'el artesano de'],
      ['mut', 'FEMALE', 'la madre de'],
      ['mose', 'MALE', 'el nacido de'],
      ['hotep', 'MALE', 'el que satisface a'],
      ['amun', 'MALE', 'el consagrado a'],
      ['aten', 'NEUTER', 'el servidor del disco'],
      ['neferet', 'FEMALE', 'la bella compañera de'],
      ['mut', 'FEMALE', 'la amada de la madre'],
      ['kare', 'MALE', 'el espíritu de']
    ],
      ['amun', 'MALE', 'el fiel de'],
      ['ptah', 'MALE', 'el artesano de'],
      ['hor', 'MALE', 'el ojo de'],
      ['aten', 'MALE', 'el devoto de'],
      ['neferet', 'FEMALE', 'la más hermosa de'],
      ['mut', 'FEMALE', 'la madre de'],
      ['isis', 'FEMALE', 'la magia de'],
      ['hathor', 'FEMALE', 'la señora de'],
      ['ankh', 'NEUTER', 'el hálito de'],
      ['kare', 'NEUTER', 'el alma de'],
      ['towy', 'NEUTER', 'las dos tierras de']
    ]
  },
  SUMERIAN: {
    roots: [
      ['Gil', 'el héroe antiguo'],
      ['En', 'el señor de'],
      ['Anu', 'el cielo estrellado'],
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
      ['Zigg', 'el templo alto']
    ],
    simpleConnectors: [['u', ''], ['a', ''], ['i', ''], ['e', ''], ['o', '']],
    complexInfixes: [
      ['gal', 'el grande'],
      ['kar', 'el guardián'],
      ['mes', 'el héroe'],
      ['sar', 'el rey'],
      ['gir', 'la espada']
    ],
    suffixes: [
      ['mesh', 'MALE', 'el héroe de'],
      ['kidu', 'MALE', 'el compañero de'],
      ['nanna', 'FEMALE', 'la sacerdotisa de'],
      ['shub', 'FEMALE', 'la hermosa de'],
      ['ki', 'NEUTER', 'el lugar de']
    ]
  },
  SWAHILI: {
    roots: [
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
      ['Tum', 'la esperanza de']
    ],
    simpleConnectors: [['a', ''], ['e', ''], ['i', ''], ['o', ''], ['u', '']],
    complexInfixes: [
      ['ari', 'la riqueza de'],
      ['ani', 'la alegría de'],
      ['isha', 'la vida de'],
      ['ili', 'la grandeza de'],
      ['ola', 'el corazón de']
    ],
    suffixes: [
      ['ari', 'MALE', 'el fuerte de'],
      ['usi', 'MALE', 'el sabio de'],
      ['ira', 'FEMALE', 'la noble de'],
      ['ina', 'FEMALE', 'la bella de'],
      ['ika', 'NEUTER', 'el destino de']
    ]
  },
  KHUZDUL: {
    roots: [
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
      ['Oin', 'el buscador de oro'],
      ['Fund', 'el pico de acero'],
      ['Kib', 'el cobre brillante'],
      ['Bar', 'la puerta de piedra']
    ],
    simpleConnectors: [['a', ''], ['i', ''], ['u', ''], ['o', ''], ['e', '']],
    complexInfixes: [
      ['zil', 'el valle de'],
      ['bad', 'la cueva de'],
      ['rak', 'la montaña de'],
      ['dush', 'la oscuridad de'],
      ['gan', 'la piedra de']
    ],
    suffixes: [
      ['li', 'MALE', 'el valiente de'],
      ['in', 'MALE', 'el sabio de'],
      ['ur', 'MALE', 'el rey de'],
      ['dis', 'FEMALE', 'la princesa de'],
      ['zig', 'NEUTER', 'el salón de']
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
      ['Celeb', 'la plata brillante'],
      ['Mith', 'la niebla gris'],
      ['Galad', 'la luz radiante'],
      ['Orod', 'la montaña alta'],
      ['Elen', 'la estrella fugaz'],
      ['Taur', 'el gran bosque'],
      ['Loth', 'la flor sagrada'],
      ['Gil', 'la estrella pura'],
      ['Gwae', 'el viento susurrante'],
      ['Fael', 'la justicia dorada'],
      ['Nim', 'el blanco inmaculado'],
      ['Mor', 'la oscuridad antigua'],
      ['Cal', 'la luz del amanecer'],
      ['Rin', 'el recuerdo eterno'],
      ['Anar', 'el sol radiante'],
      ['Ithil', 'la luna plateada'],
      ['Giliath', 'el manto de estrellas'],
      ['Aear', 'el océano profundo'],
      ['Luin', 'el azul etéreo'],
      ['Alf', 'el cisne majestuoso'],
      ['Breg', 'la ferocidad repentina'],
      ['Curu', 'la habilidad artesana'],
      ['Dae', 'la sombra densa'],
      ['Eryn', 'el bosque frondoso'],
      ['Fanu', 'la nube luminosa'],
      ['Glin', 'el destello fugaz'],
      ['Hiril', 'la dama noble'],
      ['Iaur', 'lo antiguo y sabio'],
      ['Lhae', 'el hilo del destino'],
      ['Maeth', 'la batalla gloriosa'],
      ['Amdir', 'la esperanza perdida'],
      ['Estel', 'la fe inquebrantable'],
      ['Hoth', 'la horda oscura'],
      ['Lome', 'el crepúsculo secreto'],
      ['Ring', 'el frío penetrante']
    ],
    simpleConnectors: [
      ['i', ''],
      ['a', ''],
      ['e', ''],
      ['o', ''],
      ['u', ''],
      ['y', '']
    ],
    complexInfixes: [
      ['dil', 'el devoto de'],
      ['dur', 'el sirviente de'],
      ['ndil', 'el amante de'],
      ['los', 'la flor de nieve de'],
      ['wen', 'la doncella de'],
      ['rion', 'el príncipe de'],
      ['goth', 'el enemigo de'],
      ['hel', 'el hielo de']
    ],
    suffixes: [
      ['ion', 'MALE', 'el hijo de'],
      ['dir', 'MALE', 'el guardián de'],
      ['rond', 'MALE', 'el custodio de la caverna de'],
      ['mir', 'MALE', 'la joya de'],
      ['randir', 'MALE', 'el peregrino de'],
      ['iel', 'FEMALE', 'la hija de'],
      ['wen', 'FEMALE', 'la doncella de'],
      ['thien', 'FEMALE', 'la musa de'],
      ['riel', 'FEMALE', 'la doncella coronada de'],
      ['lin', 'NEUTER', 'la melodía de'],
      ['falas', 'NEUTER', 'la costa de'],
      ['dor', 'NEUTER', 'la tierra de'],
      ['las', 'MALE', 'la hoja perenne de'],
      ['gorn', 'MALE', 'el árbol vigoroso de'],
      ['wing', 'FEMALE', 'la espuma del mar de'],
      ['ost', 'NEUTER', 'la fortaleza élfica de'],
      ['lad', 'NEUTER', 'el valle oculto de'],
      ['bor', 'MALE', 'el puño firme de'],
      ['ien', 'FEMALE', 'la doncella de'],
      ['mar', 'NEUTER', 'el hogar de']
    ]
  },
  VALYRIAN: {
    roots: [
      ['Aegon', 'la conquista de hierro'],
      ['Viser', 'el dragón coronado'],
      ['Rhae', 'la sangre inquebrantable'],
      ['Dae', 'la pureza de fuego'],
      ['Jahaer', 'la sabiduría anciana'],
      ['Bae', 'la sombra carmesí'],
      ['Vala', 'la profecía eterna'],
      ['Syrax', 'la escama dorada'],
      ['Laen', 'el océano bravo'],
      ['Gael', 'el canto fiero'],
      ['Aem', 'el fuego voraz'],
      ['Mael', 'el lamento rojo'],
      ['Tyrax', 'la tormenta negra'],
      ['Merax', 'el terror alado'],
      ['Vhag', 'la vieja furia'],
      ['Verm', 'la llama de bronce'],
      ['Tessar', 'el dardo azul'],
      ['Sun', 'el fuego solar'],
      ['Luc', 'la marea fuerte'],
      ['Jacaer', 'el vuelo intrépido'],
      ['Zaldrīz', 'el dragón indomable'],
      ['Perzys', 'el fuego eterno'],
      ['Ānogar', 'la sangre valyria'],
      ['Morghul', 'la muerte segura'],
      ['Dohaer', 'el servicio leal'],
      ['Valar', 'los hombres mortales'],
      ['Muña', 'la madre protectora'],
      ['Kepa', 'el padre sabio'],
      ['Vēzos', 'el sol naciente'],
      ['Bāne', 'el calor abrasador'],
      ['Gela', 'el hielo antiguo'],
      ['Hontes', 'el ave majestuosa'],
      ['Qel', 'la estrella fugaz'],
      ['Rōv', 'la grandeza inmensa'],
      ['Tīk', 'el ala veloz'],
      ['Zūg', 'el temor reverencial'],
      ['Mīr', 'la joya de sangre']
    ],
    simpleConnectors: [
      ['a', ''],
      ['e', ''],
      ['y', ''],
      ['i', ''],
      ['o', ''],
      ['u', '']
    ],
    complexInfixes: [
      ['na', 'la bendición de'],
      ['da', 'el poder de'],
      ['lo', 'la luz de'],
      ['mo', 'la sombra de'],
      ['va', 'la magia de'],
      ['bār', 'el campo de'],
      ['qog', 'la sombra de']
    ],
    suffixes: [
      ['rys', 'MALE', 'el jinete de'],
      ['mon', 'MALE', 'el guardián de'],
      ['lon', 'MALE', 'el señor de'],
      ['on', 'MALE', 'el que cabalga'],
      ['gor', 'MALE', 'el destructor de'],
      ['kar', 'MALE', 'el escudo de'],
      ['nya', 'FEMALE', 'la reina de'],
      ['ra', 'FEMALE', 'la princesa de'],
      ['lys', 'FEMALE', 'la belleza de'],
      ['la', 'FEMALE', 'la llama de'],
      ['nera', 'FEMALE', 'la sacerdotisa de'],
      ['ria', 'FEMALE', 'la heredera de'],
      ['rion', 'NEUTER', 'la fortaleza de'],
      ['x', 'NEUTER', 'la bestia de'],
      ['es', 'NEUTER', 'el secreto de'],
      ['ax', 'MALE', 'el conquistador de'],
      ['vos', 'MALE', 'el señor de fuego de'],
      ['arys', 'MALE', 'el príncipe de'],
      ['ys', 'MALE', 'el nacido de'],
      ['enya', 'FEMALE', 'la conquistadora de'],
      ['aera', 'FEMALE', 'la llama brillante de'],
      ['ela', 'FEMALE', 'la elegida de'],
      ['yssa', 'FEMALE', 'la sacerdotisa oscura de'],
      ['os', 'NEUTER', 'la ceniza de'],
      ['ys', 'NEUTER', 'el legado de'],
      ['ar', 'NEUTER', 'la eternidad de'],
      ['tor', 'MALE', 'el guardián de'],
      ['zys', 'FEMALE', 'la portadora de'],
      ['gon', 'NEUTER', 'el ataque de']
    ]
  }
};

const GENDERS = ['MALE', 'FEMALE', 'NEUTER'];

const toItem = ([text, meaning], style) => ({ text, meaning, style });
const toSuffix = ([text, gender, meaning], style) => ({ text, gender, meaning, style });

export function getLocalComponents(style = 'GREEK') {
  if (style === 'RANDOM') {
    return mergeComponents(['GREEK', 'NORDIC', 'LATIN', 'JAPANESE', 'CELTIC', 'SANSKRIT', 'SLAVIC', 'EGYPTIAN', 'SUMERIAN', 'SWAHILI', 'KHUZDUL', 'ELVISH', 'VALYRIAN', 'OLD_ENGLISH', 'CELESTIAL', 'ABYSSAL']);
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
      const rootStyle = params.mixOrigins.root || pick(['GREEK', 'NORDIC', 'LATIN', 'JAPANESE', 'CELTIC', 'SANSKRIT', 'SLAVIC', 'EGYPTIAN', 'SUMERIAN', 'SWAHILI', 'KHUZDUL', 'ELVISH', 'VALYRIAN', 'OLD_ENGLISH', 'CELESTIAL', 'ABYSSAL']);
      const infixStyle = params.mixOrigins.infix || pick(['GREEK', 'NORDIC', 'LATIN', 'JAPANESE', 'CELTIC', 'SANSKRIT', 'SLAVIC', 'EGYPTIAN', 'SUMERIAN', 'SWAHILI', 'KHUZDUL', 'ELVISH', 'VALYRIAN', 'OLD_ENGLISH', 'CELESTIAL', 'ABYSSAL']);
      const suffixStyle = params.mixOrigins.suffix || pick(['GREEK', 'NORDIC', 'LATIN', 'JAPANESE', 'CELTIC', 'SANSKRIT', 'SLAVIC', 'EGYPTIAN', 'SUMERIAN', 'SWAHILI', 'KHUZDUL', 'ELVISH', 'VALYRIAN', 'OLD_ENGLISH', 'CELESTIAL', 'ABYSSAL']);
      
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
      const style = isRandom ? pick(['GREEK', 'NORDIC', 'LATIN', 'JAPANESE', 'CELTIC', 'SANSKRIT', 'SLAVIC', 'EGYPTIAN', 'SUMERIAN', 'SWAHILI', 'KHUZDUL', 'ELVISH', 'VALYRIAN', 'OLD_ENGLISH', 'CELESTIAL', 'ABYSSAL']) : params.style || 'GREEK';
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
  SANSKRIT: 'Sánscrito',
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
  for (const s of ['GREEK', 'NORDIC', 'LATIN', 'JAPANESE', 'CELTIC', 'SANSKRIT', 'SLAVIC', 'EGYPTIAN', 'SUMERIAN', 'SWAHILI', 'KHUZDUL', 'ELVISH', 'VALYRIAN', 'OLD_ENGLISH', 'CELESTIAL', 'ABYSSAL']) {
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
  } else if (style === 'SANSKRIT') {
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
  } else if (style === ) {
    ipa = ipa
      .replace(/kh/g, 'x')
      .replace(/gh/g, 'ʁ')
      .replace(/sh/g, 'ʃ')
      .replace(/th/g, 'θ')
      .replace(/dh/g, 'ð')
      .replace(/q/g, 'q');
  } else if (style === ) {
    ipa = ipa
      .replace(/w/g, 'v')
      .replace(/r/g, 'ɾ')
      .replace(/l/g, 'l');
  } else if (style === 'SWAHILI') {
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
  } else if (style === ) {
    ipa = ipa
      .replace(/kh/g, 'x')
      .replace(/gh/g, 'ʁ')
      .replace(/sh/g, 'ʃ')
      .replace(/th/g, 'θ')
      .replace(/dh/g, 'ð')
      .replace(/q/g, 'q');
  } else if (style === ) {
    ipa = ipa
      .replace(/w/g, 'v')
      .replace(/r/g, 'ɾ')
      .replace(/l/g, 'l');
  } else if (style === 'SWAHILI') {
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
  } else if (style === ) {
    ipa = ipa
      .replace(/sh/g, 'ʃ')
      .replace(/kh/g, 'x')
      .replace(/q/g, 'q');
  } else if (style === ) {
    ipa = ipa
      .replace(/sh/g, 'ʃ')
      .replace(/kh/g, 'x')
      .replace(/zh/g, 'ʒ');
  } else if (style === 'OLD_ENGLISH') {
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
