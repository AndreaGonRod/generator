const DATA = {
  GREEK: {
    roots: [
      ['Theo', 'la divinidad'],
      ['Astro', 'las estrellas'],
      ['Helio', 'el sol'],
      ['Seleno', 'el brillo lunar'],
      ['Krono', 'el tiempo'],
      ['Geo', 'la tierra'],
      ['Aero', 'el aire y viento'],
      ['Hydro', 'el agua fluida'],
      ['Pyro', 'el fuego ardiente'],
      ['Kalo', 'la belleza'],
      ['Arki', 'el liderazgo'],
      ['Andro', 'la fuerza humana'],
      ['Philo', 'el amor afín'],
      ['Xeno', 'lo misterioso y extranjero'],
      ['Neo', 'lo nuevo y moderno'],
      ['Paleo', 'la sabiduría antigua'],
      ['Mega', 'lo magnífico'],
      ['Kleo', 'el renombre'],
      ['Niko', 'lo triunfante'],
      ['Sofi', 'el conocimiento'],
      ['Aristo', 'lo excelente y mejor'],
      ['Demo', 'el pueblo'],
      ['Irena', 'la paz serena'],
      ['Leon', 'la fuerza del león'],
      ['Zeno', 'el firmamento de Zeus'],
      ['Chrono', 'el paso del tiempo'],
      ['Morpho', 'la forma cambiante'],
      ['Nyx', 'la noche oscura'],
      ['Krypto', 'lo oculto'],
      ['Agape', 'el amor incondicional'],
      ['Bios', 'la esencia de la vida'],
      ['Dyna', 'el poder absoluto'],
      ['Tele', 'la gran distancia'],
      ['Pneumo', 'el aliento vital'],
      ['Calli', 'la hermosura sublime'],
      ['Erebo', 'las sombras primigenias'],
      ['Hiero', 'lo sagrado'],
      ['Orpho', 'el misterio de la noche'],
      ['Aethero', 'el cielo superior'],
      ['Cosmo', 'el orden universal'],
      ['Eros', 'el deseo apasionado'],
      ['Thanatos', 'la muerte serena'],
      ['Hypnos', 'el trance profundo'],
      ['Cyto', 'la célula vital'],
      ['Ptero', 'el ala dorada'],
      ['Archon', 'el magistrado supremo'],
      ['Basi', 'el rey antiguo'],
      ['Cler', 'la suerte designada'],
      ['Dactyl', 'el dedo hábil'],
      ['Echino', 'lo espinoso'],
      ['Giga', 'el coloso gigante'],
      ['Heli', 'el giro en espiral'],
      ['Icon', 'la imagen venerada'],
      ['Kine', 'el movimiento perpetuo'],
      ['Lito', 'la piedra inamovible'],
      ['Macro', 'la grandeza expansiva'],
      ['Nekro', 'el sepulcro silente'],
      ['Odonto', 'la ferocidad mordaz'],
      ['Thalassa', 'el mar profundo'],
      ['Kyklos', 'el círculo eterno'],
      ['Hema', 'la sangre vital'],
      ['Aster', 'la estrella brillante'],
      ['Phos', 'la luz cegadora']
    ],
    simpleConnectors: [
      ['o', ''],
      ['i', ''],
      ['a', ''],
      ['e', '']
    ],
    complexInfixes: [
      ['and', 'la fuerza de'],
      ['ant', 'el brillo de'],
      ['onit', 'la firmeza de'],
      ['ist', 'el seguidor de'],
      ['althe', 'la curación de'],
      ['eleu', 'la libertad de'],
      ['io', 'la gracia de'],
      ['opol', 'la ciudad de'],
      ['ast', 'el espacio de'],
      ['arch', 'el origen de'],
      ['gen', 'el nacimiento de'],
      ['krat', 'el dominio de'],
      ['log', 'la razón de'],
      ['mach', 'la batalla de'],
      ['makh', 'la lucha por'],
      ['crat', 'el gobierno de'],
      ['nom', 'la ley de'],
      ['phane', 'la aparición de'],
      ['dot', 'el regalo de']
    ],
    suffixes: [
      ['os', 'MALE', 'aquel que representa'],
      ['is', 'MALE', 'noble guardián de'],
      ['as', 'MALE', 'fuerte como'],
      ['on', 'MALE', 'el gran protector de'],
      ['ander', 'MALE', 'hombre fuerte de'],
      ['crates', 'MALE', 'el que gobierna con'],
      ['sthenes', 'MALE', 'fuerza indomable de'],
      ['cles', 'MALE', 'fama inmortal de'],
      ['archos', 'MALE', 'líder supremo de'],
      ['doros', 'MALE', 'don divino de'],
      ['a', 'FEMALE', 'aquella que posee gracia de'],
      ['ia', 'FEMALE', 'la esencia mística de'],
      ['ne', 'FEMALE', 'suave melodía de'],
      ['thea', 'FEMALE', 'divina protectora de'],
      ['dora', 'FEMALE', 'regalo de'],
      ['phila', 'FEMALE', 'amiga de'],
      ['phone', 'FEMALE', 'voz cantante de'],
      ['mene', 'FEMALE', 'fuerza persistente de'],
      ['nike', 'FEMALE', 'la victoria de'],
      ['meda', 'FEMALE', 'la astucia de'],
      ['ma', 'NEUTER', 'manifestación concreta de'],
      ['ax', 'NEUTER', 'fuerza industrial de'],
      ['ox', 'NEUTER', 'visión moderna de'],
      ['ic', 'NEUTER', 'sistema de'],
      ['polis', 'NEUTER', 'gran bastión de'],
      ['tron', 'NEUTER', 'el instrumento de'],
      ['makhos', 'MALE', 'el fiero guerrero de'],
      ['phoros', 'MALE', 'el portador eterno de'],
      ['tis', 'FEMALE', 'la tejedora de destinos de'],
      ['gram', 'NEUTER', 'el antiguo mensaje de'],
      ['genes', 'MALE', 'el engendrado por'],
      ['poulos', 'MALE', 'el descendiente de'],
      ['mache', 'FEMALE', 'la que lucha por'],
      ['krateia', 'FEMALE', 'la soberana de'],
      ['phobia', 'NEUTER', 'el terror a'],
      ['mania', 'NEUTER', 'la pasión desmedida por'],
      ['on', 'MALE', 'el señor absoluto de'],
      ['is', 'FEMALE', 'la esencia femenina de'],
      ['os', 'NEUTER', 'el espíritu de']
    ]
  },
  NORDIC: {
    roots: [
      ['Thor', 'el trueno'],
      ['Odin', 'la furia y sabiduría'],
      ['Frey', 'la fertilidad'],
      ['As', 'el entorno de los dioses'],
      ['Ing', 'el dios primordial'],
      ['Ragn', 'el destino'],
      ['Bjorn', 'la fuerza bruta'],
      ['Ulf', 'el lobo'],
      ['Arn', 'el águila'],
      ['Eir', 'la protección y paz'],
      ['Frost', 'la escarcha'],
      ['Snae', 'la nieve'],
      ['Fjord', 'el fiordo'],
      ['Sig', 'la victoria'],
      ['Gunn', 'la batalla'],
      ['Hild', 'la guerra'],
      ['Val', 'los caídos en combate'],
      ['Einar', 'el guerrero solitario'],
      ['Brand', 'la espada de fuego'],
      ['Hrim', 'la escarcha eterna'],
      ['Sol', 'la luz del sol'],
      ['Mani', 'el resplandor de la luna'],
      ['Vidar', 'el silencio profundo'],
      ['Heimdall', 'la guardia vigilante'],
      ['Loki', 'el caos astuto'],
      ['Freya', 'el amor y la guerra'],
      ['Tyr', 'la justicia implacable'],
      ['Draug', 'el espíritu vengativo'],
      ['Surt', 'el fuego negro'],
      ['Fenrir', 'el lobo devorador'],
      ['Skoll', 'la persecución'],
      ['Ymir', 'el gigante primordial'],
      ['Hugin', 'el pensamiento'],
      ['Munin', 'la memoria'],
      ['Asgard', 'el reino dorado'],
      ['Jotun', 'la escarcha gigante'],
      ['Kari', 'el viento helado'],
      ['Leif', 'el heredero sagrado'],
      ['Ivar', 'el arquero letal'],
      ['Sven', 'el joven guerrero'],
      ['Gud', 'la deidad nórdica'],
      ['Axe', 'el hacha de guerra'],
      ['Berg', 'la montaña escarpada'],
      ['Dal', 'el valle profundo'],
      ['Eld', 'el fuego crepitante'],
      ['Fisk', 'el pez plateado'],
      ['Gull', 'el oro brillante'],
      ['Hav', 'el mar embravecido'],
      ['Is', 'el hielo quebradizo'],
      ['Jern', 'el hierro forjado'],
      ['Korp', 'el cuervo mensajero'],
      ['Ljos', 'la luz cegadora'],
      ['Mork', 'el bosque oscuro'],
      ['Drak', 'el dragón ancestral'],
      ['Skog', 'el bosque denso'],
      ['Vind', 'el viento aullante'],
      ['Galdr', 'el hechizo rúnico'],
      ['Blod', 'la sangre guerrera']
    ],
    simpleConnectors: [
      ['a', ''],
      ['i', ''],
      ['o', ''],
      ['e', '']
    ],
    complexInfixes: [
      ['ey', 'la herencia de'],
      ['au', 'el destino de'],
      ['va', 'el paso de'],
      ['heim', 'el hogar nevado de'],
      ['gard', 'la fortaleza de'],
      ['skald', 'el poema épico de'],
      ['jarl', 'el mandato de'],
      ['vard', 'el custodio de'],
      ['varg', 'la ferocidad de'],
      ['ulf', 'la manada de'],
      ['storm', 'la tormenta de'],
      ['hrafn', 'el vuelo de'],
      ['fell', 'la montaña de'],
      ['holm', 'la isla de']
    ],
    suffixes: [
      ['or', 'MALE', 'el ejecutor de'],
      ['ar', 'MALE', 'el ejecutor de'],
      ['ulf', 'MALE', 'el lobo de'],
      ['mund', 'MALE', 'el protector de'],
      ['rik', 'MALE', 'el gobernante de'],
      ['sten', 'MALE', 'la roca inquebrantable de'],
      ['son', 'MALE', 'el hijo de'],
      ['grim', 'MALE', 'la máscara de'],
      ['thjof', 'MALE', 'el saqueador de'],
      ['thun', 'MALE', 'el trueno de'],
      ['rek', 'MALE', 'el rey de'],
      ['da', 'FEMALE', 'la batalla de'],
      ['hild', 'FEMALE', 'la batalla de'],
      ['borg', 'FEMALE', 'el castillo protector de'],
      ['dis', 'FEMALE', 'la diosa protectora de'],
      ['run', 'FEMALE', 'el secreto rúnico de'],
      ['a', 'FEMALE', 'la gracia de'],
      ['dottir', 'FEMALE', 'la hija de'],
      ['bjorg', 'FEMALE', 'la salvación de'],
      ['lief', 'FEMALE', 'la amada de'],
      ['um', 'NEUTER', 'el hogar de'],
      ['en', 'NEUTER', 'el elemento de'],
      ['ark', 'NEUTER', 'el territorio de'],
      ['k', 'NEUTER', 'el núcleo de'],
      ['thing', 'NEUTER', 'la asamblea de'],
      ['gard', 'NEUTER', 'la muralla de'],
      ['heim', 'NEUTER', 'el mundo de'],
      ['kell', 'MALE', 'el casco forjado de'],
      ['stein', 'MALE', 'el pilar sagrado de'],
      ['frid', 'FEMALE', 'la hermosa pacífica de'],
      ['gerd', 'FEMALE', 'el baluarte heroico de'],
      ['hus', 'NEUTER', 'el salón noble de'],
      ['skeg', 'MALE', 'el barbudo de'],
      ['bjorn', 'MALE', 'el oso feroz de'],
      ['fin', 'FEMALE', 'la magia blanca de'],
      ['laug', 'FEMALE', 'la prometida bañada en'],
      ['vik', 'NEUTER', 'la bahía de'],
      ['fjell', 'NEUTER', 'la montaña sagrada de'],
      ['vid', 'MALE', 'el árbol fuerte de'],
      ['gny', 'FEMALE', 'el clamor de'],
      ['stad', 'NEUTER', 'el asentamiento de']
    ]
  },
  LATIN: {
    roots: [
      ['Lux', 'la luz brillante'],
      ['Ignis', 'el fuego devorador'],
      ['Terra', 'la tierra firme'],
      ['Bellum', 'la guerra implacable'],
      ['Aevum', 'la eternidad insondable'],
      ['Sol', 'el sol radiante'],
      ['Luna', 'la luna mística'],
      ['Cor', 'el corazón valiente'],
      ['Vox', 'la voz divina'],
      ['Fatum', 'el destino ineludible'],
      ['Pax', 'la paz duradera'],
      ['Lex', 'la ley inquebrantable'],
      ['Nox', 'la noche profunda'],
      ['Rex', 'la realeza suprema'],
      ['Umbra', 'la penumbra oscura'],
      ['Tempus', 'el tiempo incesante'],
      ['Aura', 'la brisa etérea'],
      ['Lumen', 'el resplandor ciego'],
      ['Somnus', 'el sueño eterno'],
      ['Mortis', 'el final inevitable'],
      ['Imperium', 'el mandato divino'],
      ['Sanguis', 'la sangre derramada'],
      ['Vita', 'la vida vibrante'],
      ['Caelum', 'el cielo estrellado'],
      ['Aqua', 'el agua purificadora'],
      ['Flamma', 'la llama sagrada'],
      ['Argentum', 'la plata pura'],
      ['Aurum', 'el oro resplandeciente'],
      ['Cinis', 'la ceniza ardiente'],
      ['Deus', 'la divinidad creadora'],
      ['Ferrum', 'el hierro letal'],
      ['Gladius', 'la espada justiciera'],
      ['Homo', 'la raza humana'],
      ['Ira', 'la furia divina'],
      ['Lapis', 'la piedra preciosa'],
      ['Mare', 'el vasto océano'],
      ['Natura', 'la esencia natural'],
      ['Silva', 'el bosque tupido'],
      ['Stella', 'la estrella celestial'],
      ['Fulgur', 'el relámpago fugaz'],
      ['Ventus', 'el viento furioso'],
      ['Sidus', 'el astro luminoso']
    ],
    simpleConnectors: [
      ['i', ''],
      ['u', ''],
      ['a', ''],
      ['o', ''],
      ['e', '']
    ],
    complexInfixes: [
      ['ifer', 'el que porta'],
      ['potens', 'el poderoso'],
      ['victrix', 'la victoriosa'],
      ['fid', 'la fe de'],
      ['val', 'el valor de'],
      ['luc', 'el resplandor de'],
      ['ficus', 'el creador de'],
      ['vagus', 'el que vaga por'],
      ['dolor', 'el sufrimiento de'],
      ['glor', 'la gloria de'],
      ['vola', 'el vuelo de'],
      ['fug', 'la huida de']
    ],
    suffixes: [
      ['us', 'MALE', 'aquel que personifica'],
      ['ius', 'MALE', 'el hijo legítimo de'],
      ['or', 'MALE', 'el creador de'],
      ['ianus', 'MALE', 'perteneciente a'],
      ['maximus', 'MALE', 'el más grande de'],
      ['a', 'FEMALE', 'la que personifica'],
      ['ia', 'FEMALE', 'la esencia pura de'],
      ['trix', 'FEMALE', 'la que gobierna sobre'],
      ['ina', 'FEMALE', 'proveniente de'],
      ['rix', 'FEMALE', 'la reina indomable de'],
      ['um', 'NEUTER', 'el concepto de'],
      ['ium', 'NEUTER', 'el reino eterno de'],
      ['mentum', 'NEUTER', 'el instrumento de'],
      ['arium', 'NEUTER', 'el santuario de'],
      ['ensis', 'MALE', 'el habitante orgulloso de'],
      ['ana', 'FEMALE', 'la noble dama de'],
      ['torium', 'NEUTER', 'el lugar de descanso de'],
      ['fex', 'MALE', 'el hacedor de'],
      ['ger', 'MALE', 'el que carga con'],
      ['fer', 'MALE', 'el que lleva'],
      ['fica', 'FEMALE', 'la forjadora de'],
      ['gera', 'FEMALE', 'la que sostiene'],
      ['cola', 'NEUTER', 'el habitante de'],
      ['cida', 'NEUTER', 'el asesino de'],
      ['anus', 'MALE', 'el descendiente noble de'],
      ['aria', 'FEMALE', 'la melodía de'],
      ['etum', 'NEUTER', 'el bosque de']
    ]
  },
  JAPANESE: {
    roots: [
      ['Ryu', 'el dragón ancestral'],
      ['Kami', 'el espíritu divino'],
      ['Kage', 'la sombra silenciosa'],
      ['Tsuki', 'la luna mística'],
      ['Kaze', 'el viento cortante'],
      ['Yama', 'la montaña eterna'],
      ['Mizu', 'el agua que fluye'],
      ['Kura', 'la oscuridad profunda'],
      ['Ten', 'el cielo infinito'],
      ['Shiro', 'el castillo inexpugnable'],
      ['Hi', 'el fuego abrasador'],
      ['Mori', 'el bosque sagrado'],
      ['Tora', 'el tigre feroz'],
      ['Hebi', 'la serpiente sigilosa'],
      ['Inu', 'el lobo guardián'],
      ['Hoshi', 'la estrella guía'],
      ['Yuki', 'la nieve pura'],
      ['Sora', 'el cielo despejado'],
      ['Gin', 'la plata brillante'],
      ['Kin', 'el oro imperial'],
      ['Tetsu', 'el acero inquebrantable'],
      ['Ken', 'la espada sagrada'],
      ['Aki', 'el otoño dorado'],
      ['Haru', 'la primavera florida'],
      ['Natsu', 'el verano ardiente'],
      ['Fuyu', 'el invierno blanco'],
      ['Kuro', 'la oscuridad abisal'],
      ['Ame', 'la lluvia purificadora'],
      ['Ishi', 'la roca ancestral'],
      ['Umi', 'el mar profundo'],
      ['Okami', 'el lobo espectral'],
      ['Kaminari', 'el trueno ensordecedor'],
      ['Kusa', 'la hierba silvestre'],
      ['Shima', 'la isla solitaria'],
      ['Tani', 'el valle oculto'],
      ['Cho', 'la mariposa efímera'],
      ['Neko', 'el gato de la suerte'],
      ['Hashi', 'el puente espiritual'],
      ['Taka', 'el halcón veloz'],
      ['Kiku', 'el crisantemo real'],
      ['Matsu', 'el pino eterno'],
      ['Take', 'el bambú flexible'],
      ['Kari', 'el ganso salvaje']
    ],
    simpleConnectors: [
      ['a', ''],
      ['i', ''],
      ['o', ''],
      ['e', ''],
      ['u', '']
    ],
    complexInfixes: [
      ['no', 'perteneciente a'],
      ['mura', 'la aldea de'],
      ['moto', 'el origen de'],
      ['kawa', 'el río de'],
      ['kami', 'la divinidad de'],
      ['hashi', 'el puente hacia'],
      ['kaze', 'el viento de'],
      ['yama', 'el pico de'],
      ['zaka', 'la colina de'],
      ['guchi', 'la entrada de'],
      ['saki', 'el cabo de']
    ],
    suffixes: [
      ['taro', 'MALE', 'el gran hijo de'],
      ['ro', 'MALE', 'el hijo de'],
      ['shi', 'MALE', 'el guerrero de'],
      ['maru', 'MALE', 'el guardián perfecto de'],
      ['jiro', 'MALE', 'el segundo hijo de'],
      ['suke', 'MALE', 'el asistente de'],
      ['yori', 'MALE', 'la confianza de'],
      ['ko', 'FEMALE', 'la niña de'],
      ['mi', 'FEMALE', 'la belleza de'],
      ['hana', 'FEMALE', 'la flor de'],
      ['hime', 'FEMALE', 'la princesa de'],
      ['nami', 'FEMALE', 'la ola de'],
      ['san', 'NEUTER', 'el honorable linaje de'],
      ['sama', 'NEUTER', 'el gran señorío de'],
      ['shin', 'NEUTER', 'el corazón de'],
      ['do', 'NEUTER', 'el camino de'],
      ['jin', 'NEUTER', 'el espíritu de'],
      ['yoshi', 'MALE', 'el justo servidor de'],
      ['ka', 'FEMALE', 'el aroma dulce de'],
      ['e', 'FEMALE', 'la pintura viva de'],
      ['ku', 'NEUTER', 'el distrito ancestral de'],
      ['katsu', 'MALE', 'la victoria de'],
      ['hide', 'MALE', 'la excelencia de'],
      ['nobu', 'MALE', 'la fe de'],
      ['miya', 'FEMALE', 'el santuario de'],
      ['ki', 'FEMALE', 'la esperanza de'],
      ['mura', 'NEUTER', 'la aldea oculta de'],
      ['kawa', 'NEUTER', 'el río cristalino de'],
      ['ta', 'MALE', 'el campo de'],
      ['mi', 'FEMALE', 'el mar hermoso de'],
      ['sho', 'NEUTER', 'el lugar de']
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
      ['gal', 'el valor de'],
      ['mar', 'la grandeza de'],
      ['vyn', 'la colina de'],
      ['gwyn', 'la bendición de'],
      ['der', 'el roble de']
    ],
    suffixes: [
      ['doc', 'MALE', 'el guerrero de'],
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
      ['natha', 'el señor de'],
      ['pati', 'el maestro de'],
      ['ratna', 'la joya de'],
      ['prasada', 'la gracia de'],
      ['shri', 'la prosperidad de']
    ],
    suffixes: [
      ['dasa', 'MALE', 'el sirviente devoto de'],
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
      ['mir', 'la paz de'],
      ['slav', 'la gloria de'],
      ['bor', 'la batalla de'],
      ['polk', 'el pueblo de'],
      ['dar', 'el don de']
    ],
    suffixes: [
      ['ov', 'MALE', 'el hijo de'],
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
    simpleConnectors: [
      ['a', ''], ['e', ''], ['i', ''], ['o', ''], ['u', '']
    ],
    complexInfixes: [
      ['hotep', 'la paz de'],
      ['mose', 'el nacido de'],
      ['nefer', 'la belleza de'],
      ['ankh', 'la vida de'],
      ['kheper', 'el amanecer de']
    ],
    suffixes: [
      ['mose', 'MALE', 'el engendrado por'],
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
  ARABIC: {
    roots: [
      ['Alt', 'el vuelo del águila'],
      ['Zah', 'la flor radiante'],
      ['Tari', 'la estrella nocturna'],
      ['Kar', 'la generosidad infinita'],
      ['Noo', 'la luz divina'],
      ['Hak', 'la sabiduría eterna'],
      ['Mal', 'el rey soberano'],
      ['Sal', 'la paz profunda'],
      ['Jal', 'la majestad de'],
      ['Kha', 'la eternidad de'],
      ['Rah', 'la misericordia de'],
      ['Ami', 'la confianza de'],
      ['Fari', 'la alegría de'],
      ['Nas', 'la victoria de'],
      ['Ziy', 'el resplandor de']
    ],
    simpleConnectors: [['a', ''], ['i', ''], ['u', ''], ['ou', ''], ['ee', '']],
    complexInfixes: [
      ['din', 'la fe de'],
      ['ullah', 'la bendición de'],
      ['abd', 'el siervo de'],
      ['ibn', 'el hijo de'],
      ['bint', 'la hija de']
    ],
    suffixes: [
      ['ir', 'MALE', 'el príncipe de'],
      ['im', 'MALE', 'el sabio de'],
      ['ira', 'FEMALE', 'la princesa de'],
      ['ima', 'FEMALE', 'la sabia de'],
      ['ar', 'NEUTER', 'el resplandor de']
    ]
  },
  POLYNESIAN: {
    roots: [
      ['Kai', 'el océano infinito'],
      ['Lan', 'el cielo despejado'],
      ['Moa', 'el mar profundo'],
      ['Pel', 'el fuego volcánico'],
      ['Hok', 'la estrella guía'],
      ['Man', 'el poder espiritual'],
      ['Mak', 'el viento suave'],
      ['Al', 'la realeza de'],
      ['Aho', 'el aliento de vida'],
      ['Ika', 'el guerrero fuerte'],
      ['Kap', 'el lugar sagrado'],
      ['Nal', 'la ola gigante'],
      ['On', 'la tierra firme'],
      ['Pon', 'la armonía del'],
      ['Wai', 'el agua dulce']
    ],
    simpleConnectors: [['a', ''], ['e', ''], ['i', ''], ['o', ''], ['u', '']],
    complexInfixes: [
      ['lani', 'el cielo de'],
      ['kai', 'el mar de'],
      ['nui', 'la grandeza de'],
      ['loa', 'la longitud de'],
      ['mana', 'el espíritu de']
    ],
    suffixes: [
      ['haku', 'MALE', 'el señor de'],
      ['koa', 'MALE', 'el guerrero de'],
      ['pua', 'FEMALE', 'la flor de'],
      ['mele', 'FEMALE', 'la canción de'],
      ['ola', 'NEUTER', 'la vida de']
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
    return mergeComponents(['GREEK', 'NORDIC', 'LATIN', 'JAPANESE', 'CELTIC', 'SANSKRIT', 'SLAVIC', 'EGYPTIAN', 'SUMERIAN', 'ARABIC', 'POLYNESIAN', 'SWAHILI', 'KHUZDUL', 'ELVISH', 'VALYRIAN']);
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

  while (results.length < count && attempts < maxAttempts) {
    attempts++;
    const style = params.style === 'RANDOM' ? pick(['GREEK', 'NORDIC', 'LATIN', 'JAPANESE', 'CELTIC', 'SANSKRIT', 'SLAVIC', 'EGYPTIAN', 'SUMERIAN', 'ARABIC', 'POLYNESIAN', 'SWAHILI', 'KHUZDUL', 'ELVISH', 'VALYRIAN']) : params.style || 'GREEK';
    const gender = params.gender === 'RANDOM' || !params.gender ? pick(GENDERS) : params.gender;
    const formula = useCustomFormula ? (params.formula || ['ROOT', 'SUFFIX']) : getRandomStructure();
    const components = getLocalComponents(style);
    const suffixPool = params.suffix
      ? components.suffixes
      : components.suffixes.filter((item) => item.gender === gender);
      
    const newName = buildName({
      style,
      gender,
      formula,
      root: findOrPick(components.roots, params.root),
      suffix: findOrPick(suffixPool, params.suffix),
      connector1: findOrPick(components.simpleConnectors, params.connector1),
      infix: findOrPick(components.complexInfixes, params.infix),
      connector2: findOrPick(components.simpleConnectors, params.connector2),
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

function buildName(parts) {
  const f = parts.formula || ['ROOT', 'SUFFIX'];
  const formulaParts = [];
  if (f.includes('ROOT')) formulaParts.push(parts.root);
  if (f.includes('CONNECTOR1')) formulaParts.push(parts.connector1);
  if (f.includes('INFIX')) formulaParts.push(parts.infix);
  if (f.includes('CONNECTOR2')) formulaParts.push(parts.connector2);
  if (f.includes('SUFFIX')) formulaParts.push(parts.suffix);

  const name = capitalize(formulaParts.reduce((result, item) => combine(result, item?.text || ''), ''));
  const meaning = [parts.suffix?.meaning, parts.infix?.meaning, parts.connector1?.meaning, parts.root?.meaning]
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .replace(/\bde el\b/g, 'del')
    .trim();

  return {
    id: `${name}-${parts.index}`,
    name,
    ipa: generateIPA(name, parts.style),
    gender: parts.gender || 'NEUTER',
    meaning,
    formula: formulaLabel(parts.formula),
    style: parts.style
  };
}

function mergeComponents(styles) {
  return styles.reduce((merged, style) => {
    const components = getLocalComponents(style);
    Object.keys(merged).forEach((key) => merged[key].push(...components[key]));
    return merged;
  }, { roots: [], simpleConnectors: [], complexInfixes: [], suffixes: [] });
}

function findOrPick(items, text, type) {
  if (!text) return pick(items);
  const selected = items.find((item) => item.text.toLowerCase() === String(text).toLowerCase());
  if (selected) return selected;
  
  // Si no está en este idioma (ej: style=NORDIC pero el usuario forzó una raíz LATIN), buscamos en el resto
  for (const s of ['GREEK', 'NORDIC', 'LATIN', 'JAPANESE', 'CELTIC', 'SANSKRIT', 'SLAVIC', 'EGYPTIAN', 'SUMERIAN', 'ARABIC', 'POLYNESIAN', 'SWAHILI', 'KHUZDUL', 'ELVISH', 'VALYRIAN']) {
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
  } else if (style === 'ELVISH') {
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
  } else if (style === 'ARABIC') {
    ipa = ipa
      .replace(/kh/g, 'x')
      .replace(/gh/g, 'ʁ')
      .replace(/sh/g, 'ʃ')
      .replace(/th/g, 'θ')
      .replace(/dh/g, 'ð')
      .replace(/q/g, 'q');
  } else if (style === 'POLYNESIAN') {
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
