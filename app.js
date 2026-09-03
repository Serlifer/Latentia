let currentLang = 'es';

// DICCIONARIO DE INTERFAZ
const uiTranslations = {
    es: {
        homeTitle: "Huelva Secreta",
        homeSubtitle: "Selecciona una época para explorar",
        btnBackMenu: "← Volver al Menú",
        btnShowMap: "📍 Ver Ruta Real",
        btnBackHistory: "← Volver a la Historia",
        tabEscena: "🎙️ La Escena",
        tabHistoria: "📜 Historia Completa",
        tabGlosario: "📖 Glosario",
        tabRigor: "🔎 Rigor Histórico",
        personajesTitle: "👥 Sobre los personajes:",
        retoTitle: "🧩 Pregunta Opcional",
        offlineWarning: "Modo Offline: Mapa real no disponible sin conexión.",
        mapDestination: "Destino: ",
        feedbackCorrect: "¡Correcto! Has desentrañado este enigma.",
        feedbackIncorrect: "Incorrecto. Los secretos de Huelva siguen ocultos.",
        youAreHere: "Estás aquí",
        legalTrigger: "Créditos y Aviso Legal"
    },
    en: {
        homeTitle: "Secret Huelva",
        homeSubtitle: "Select an era to explore",
        btnBackMenu: "← Back to Menu",
        btnShowMap: "📍 View Real Route",
        btnBackHistory: "← Back to History",
        tabEscena: "🎙️ The Scene",
        tabHistoria: "📜 Full History",
        tabGlosario: "📖 Glossary",
        tabRigor: "🔎 Historical Accuracy",
        personajesTitle: "👥 About the characters:",
        retoTitle: "🧩 Optional Question",
        offlineWarning: "Offline Mode: Real map unavailable without connection.",
        mapDestination: "Destination: ",
        feedbackCorrect: "Correct! You have unraveled this enigma.",
        feedbackIncorrect: "Incorrect. The secrets of Huelva remain hidden.",
        youAreHere: "You are here",
        legalTrigger: "Credits & Legal Notice"
    },
    fr: {
        homeTitle: "Huelva Secrète",
        homeSubtitle: "Sélectionnez une époque à explorer",
        btnBackMenu: "← Retour au Menu",
        btnShowMap: "📍 Voir l'Itinéraire",
        btnBackHistory: "← Retour à l'Histoire",
        tabEscena: "🎙️ La Scène",
        tabHistoria: "📜 Histoire Complète",
        tabGlosario: "📖 Glossaire",
        tabRigor: "🔎 Rigueur Historique",
        personajesTitle: "👥 À propos des personnages :",
        retoTitle: "🧩 Question Optionnelle",
        offlineWarning: "Mode Hors-ligne : Carte réelle indisponible sans connexion.",
        mapDestination: "Destination : ",
        feedbackCorrect: "Correct ! Vous avez percé cette énigme.",
        feedbackIncorrect: "Incorrect. Les secrets de Huelva restent cachés.",
        youAreHere: "Vous êtes ici",
        legalTrigger: "Crédits et Mentions Légales"
    }
};

// BASE DE DATOS MULTI-IDIOMA CON PERFILES DE PERSONAJES Y RIGOR HISTÓRICO
const historiasData = [
  {
    id: 1,
    lat: 37.255028, lng: -6.960179,
    imgUrl: "./assets/img/historia1.jpeg",
    audios: [{ personaje: "Melqart-Baal", url: "./assets/audio/historia1_melqart.mp3" }],
    es: {
      titulo: "Historia 1: El Gran Trueque de la Ría",
      epoca: "Siglo VIII a.C.",
      personaje: "Melqart-Baal",
      direccion: "Canoa de Punta Umbría, Muelle de Levante (Plus Code: 723Q+XW)",
      personajesInfo: "<p><strong>Melqart-Baal y Arisbael:</strong> Personajes ficticios. Representan a los navegantes, comerciantes y maestros fundidores fenicios reales que se asentaron en la ría de Huelva.</p><p><strong>Régulo Tartésico:</strong> Personaje ficticio. Representa a los líderes indígenas locales que controlaban el comercio de los metales.</p>",
      escena: `
        <p><strong>MELQART-BAAL:</strong> «Tres lunas navegando hacia el ocaso, guiados solo por la estrella del norte y los relatos de mi abuelo sobre una tierra donde los ríos arrastran plata líquida. Cuando doblamos el cabo y entramos en este estuario, el olor a salitre se mezcló de pronto con el azufre y el humo de las colinas. Ahí estaban ellos. Los hombres de las colinas esperaban en la orilla con armas de bronce pulido que jamás habíamos visto en Oriente.»</p>
        <p>«No buscamos la guerra, sino el peso exacto de la balanza. Ellos codiciaban nuestro vidrio transparente y los tejidos teñidos con la púrpura sagrada de Tiro. Nosotros anhelábamos la riqueza que brota de sus montañas del norte. Huelva no es un simple refugio costero, es la puerta del fin del mundo donde dos pueblos que jamás debieron encontrarse sellaron el primer pacto del metal.»</p>
      `,
      historia: `
        <p>El aire en la cima del Cabezo de San Pedro no traía el aroma limpio del estuario, sino el mordisco agrio del carbón de encina y la densa niebla plomiza del litargirio. En aquel siglo VIII a.C. la elevación dominaba el corazón de Onoba, un emporio singular donde no existían murallas de segregación. Las cabañas indígenas y los talleres orientales compartían el mismo suelo arcilloso entre las desembocaduras del Tinto y el Odiel.</p>
        <p>Arisbael, un maestro fundidor fenicio con las manos curtidas por el fuego de Levante, vigilaba el resoplido rítmico de la tobera de fuelle contra la base de un crisol de arcilla porosa. A su lado, un régulo tartésico cubierto con un manto de lana basta y prendido con una fíbula de codo de bronce observaba la boca incandescente del horno. El mineral en bruto bajado en barcazas fluviales desde las colinas rojas de Riotinto y Tharsis no servía en su estado nativo, requería el secreto químico que los navegantes de Tiro habían traído a través del Mediterráneo para la copelación.</p>
        <p>«Mira cómo sangra la piedra gris», murmuró Arisbael apartando la costra superficial de escoria con una vara de fresno, «vuestra tierra pare la roca, nuestro fuego le enseña a soltar el alma blanca.»</p>
        <p>A más de 900 grados, el plomo absorbía las impurezas del mineral y se oxidaba contra las paredes del crisol poroso decantando en el fondo un botón cóncavo de plata pura con más del 95% de ley. Cuando el tejo de metal se enfrió sobre la arena, el caudillo acarició la marca de cuña recién estampada. Para la élite local aquel lingote era el salvoconducto que legitimaba su poder sobre las tribus del interior. A cambio de la plata, los almacenes a pie de playa se llenaban de ánforas vinarias levantinas de engobe rojo, copas griegas de estilo eubeo, calderos repujados y ungüentarios de alabastro sirio.</p>
        <p>Al pie del cabezo, las aguas de la ría mecían los cascos de los hippos, naves comerciales fenicias con mascarón de caballo, mientras las fogatas de los campamentos mixtos ardían bajo la noche atlántica sellando el pacto del metal en el confín del mundo conocido.</p>
      `,
      glosario: `
        <ul>
          <li><strong>Cabezo:</strong> Elevación de suelo arcilloso característico del relieve geográfico de Huelva, empleado como asentamiento defensivo y residencial frente a las zonas inundables.</li>
          <li><strong>Copelación:</strong> Proceso químico para purificar metales nobles fundiendo el mineral argentífero en un crisol poroso y forzando una corriente de aire para oxidar el plomo.</li>
          <li><strong>Emporio:</strong> Asentamiento comercial establecido en la Antigüedad dedicado al intercambio a larga distancia entre navegantes y comunidades indígenas.</li>
          <li><strong>Engobe rojo:</strong> Técnica alfarera fenicia consistente en aplicar una capilla fina de arcilla líquida sobre la cerámica para lograr un acabado impermeable y rojizo brillante.</li>
          <li><strong>Eubeo:</strong> Perteneciente a Eubea, isla griega de donde procedían algunas de las cerámicas más antiguas halladas en Huelva.</li>
          <li><strong>Fíbula de codo:</strong> Broche metálico de bronce utilizado en la Protohistoria para sujetar túnicas y mantos al hombro.</li>
          <li><strong>Hippos:</strong> Embarcación mercante fenicia de casco redondeado y proa adornada con un mascarón en forma de cabeza de caballo.</li>
          <li><strong>Litargirio:</strong> Monóxido de plomo fundido generado como escoria densa durante el refinado de la plata.</li>
          <li><strong>Régulo:</strong> Jefe o caudillo de una tribu indígena durante la época protohistórica.</li>
          <li><strong>Tejo:</strong> Lingote pequeño de metal fundido con forma de disco plano o ligeramente cóncavo.</li>
          <li><strong>Tobera:</strong> Conducto cónico de arcilla que conectaba los fuelles con el interior del horno para inyectar oxígeno continuo a las brasas.</li>
        </ul>
      `,
      rigor: `
        <div class="rigor-box">
            <div class="rigor-score">Exactitud Histórica: <strong>92%</strong></div>
            <h4>✅ Puntos Fuertes:</h4>
            <ul>
                <li>El retrato del Cabezo de San Pedro como un asentamiento de sincretismo cultural (sin murallas de segregación) es arqueológicamente impecable.</li>
                <li>La descripción del proceso de copelación de la plata utilizando hornos con toberas, crisoles y litargirio para purificar los sulfuros es de una precisión técnica sobresaliente.</li>
                <li>La enumeración de la cultura material (fíbulas, cerámica eubea, engobe rojo fenicio) refleja exactamente los estratos hallados en excavaciones de Huelva.</li>
            </ul>
            <h4>⚠️ Partes a Mejorar:</h4>
            <ul>
                <li>El texto funde en un solo momento el inicio del contacto fenicio-tartésico y el depósito de armas de la ría ("espadas de lengua de carpa"). El famoso Depósito de la Ría de Huelva data del Bronce Final, siendo ligeramente anterior a la consolidación del emporio fenicio.</li>
                <li>El "pacto" se dramatiza como un encuentro repentino, cuando la colonización fue un proceso de asimilación progresiva y comercial que duró décadas.</li>
            </ul>
        </div>
      `,
      reto: { pregunta: "¿Qué material arrojaron los jefes locales a la ría como ofrenda para sellar la paz eterna?", opciones: ["Espadas de lengua de carpa de bronce", "Lingotes de oro de Tiro", "Ánforas de vino fenicio"], respuestaCorrecta: 0 }
    },
    en: {
      titulo: "Story 1: The Great Estuary Exchange",
      epoca: "8th Century BC",
      personaje: "Melqart-Baal",
      direccion: "Punta Umbría Canoe, Levante Pier (Plus Code: 723Q+XW)",
      personajesInfo: "<p><strong>Melqart-Baal and Arisbael:</strong> Fictional characters. They represent the real Phoenician navigators, merchants, and master smelters who settled in the Huelva estuary.</p><p><strong>Tartessian Regulus:</strong> Fictional character. Represents the local indigenous leaders who controlled the metal trade.</p>",
      escena: `
        <p><strong>MELQART-BAAL:</strong> "Three moons sailing towards the sunset, guided only by the north star and my grandfather's tales of a land where rivers carry liquid silver. When we rounded the cape and entered this estuary, the scent of saltpeter suddenly mixed with sulfur and the smoke from the hills. There they were. The men of the hills waited on the shore with polished bronze weapons we had never seen in the East."</p>
        <p>"We seek not war, but the exact weight of the scale. They coveted our transparent glass and fabrics dyed with the sacred purple of Tyre. We yearned for the wealth that springs from their northern mountains. Huelva is not a mere coastal refuge, it is the door to the end of the world where two peoples who should never have met sealed the first pact of metal."</p>
      `,
      historia: `
        <p>The air at the summit of Cabezo de San Pedro did not bring the clean scent of the estuary, but the sour bite of holm oak charcoal and the dense leaden fog of litharge. In that 8th century BC, the elevation dominated the heart of Onoba, a unique emporium where segregation walls did not exist. Indigenous huts and oriental workshops shared the same clay soil between the mouths of the Tinto and Odiel rivers.</p>
        <p>Arisbael, a Phoenician master smelter with hands weathered by the fire of the Levant, watched the rhythmic snorting of the bellows tuyere against the base of a porous clay crucible. Beside him, a Tartessian regulus covered in a coarse wool cloak pinned with a bronze elbow fibula watched the glowing mouth of the furnace. The raw ore brought down in river barges from the red hills of Riotinto and Tharsis was useless in its native state; it required the chemical secret that the navigators of Tyre had brought across the Mediterranean for cupellation.</p>
        <p>"See how the gray stone bleeds," Arisbael murmured, pushing aside the superficial crust of slag with an ash wand, "your earth gives birth to the rock, our fire teaches it to release its white soul."</p>
        <p>At over 900 degrees, the lead absorbed the impurities from the ore and oxidized against the walls of the porous crucible, decanting a concave button of pure silver with over 95% purity at the bottom. When the tejo cooled on the sand, the chieftain caressed the newly stamped wedge mark. For the local elite, that ingot was the safe-conduct that legitimized their power over the inland tribes. In exchange for the silver, the warehouses on the beach were filled with Levantine wine amphorae with red slip, Euboean Greek cups with geometric figures, embossed cauldrons, and Syrian alabaster unguentaria.</p>
        <p>At the foot of the hill, the estuary waters rocked the hulls of the hippos, Phoenician merchant ships with horse-head figureheads, while the campfires of the mixed settlements burned under the Atlantic night, sealing the pact of metal at the edge of the known world.</p>
      `,
      glosario: `
        <ul>
          <li><strong>Cabezo:</strong> Clay soil elevation characteristic of Huelva's geography, used as a defensive and residential settlement facing the flood zones.</li>
          <li><strong>Cupellation:</strong> Chemical process to purify noble metals by melting argentiferous ore in a porous crucible and forcing an air current to oxidize the lead.</li>
          <li><strong>Emporium:</strong> Commercial settlement established in Antiquity dedicated to long-distance exchange between navigators and indigenous communities.</li>
          <li><strong>Red slip:</strong> Phoenician pottery technique consisting of applying a fine layer of liquid clay to achieve a waterproof and bright reddish finish.</li>
          <li><strong>Euboean:</strong> Pertaining to Euboea, a Greek island where some of the oldest ceramics found in Huelva originated.</li>
          <li><strong>Fibula:</strong> Bronze metallic brooch used in Protohistory to fasten tunics and cloaks at the shoulder.</li>
          <li><strong>Hippos:</strong> Phoenician merchant vessel with a rounded hull and a prow adorned with a horse-head figurehead.</li>
          <li><strong>Litharge:</strong> Molten lead monoxide generated as dense slag during silver refining.</li>
          <li><strong>Regulus:</strong> Chief or leader of an indigenous tribe during the protohistoric era.</li>
          <li><strong>Tejo:</strong> Small block of molten metal shaped as a flat or slightly concave disk.</li>
          <li><strong>Tuyere:</strong> Conical clay duct connecting the bellows to the inside of the furnace to inject continuous oxygen into the embers.</li>
        </ul>
      `,
      rigor: `
        <div class="rigor-box">
            <div class="rigor-score">Historical Accuracy: <strong>92%</strong></div>
            <h4>✅ Strengths:</h4>
            <ul>
                <li>The portrayal of Cabezo de San Pedro as a settlement of cultural syncretism (without segregation walls) is archaeologically impeccable.</li>
                <li>The description of the silver cupellation process using tuyere furnaces, crucibles, and litharge is of outstanding technical precision.</li>
                <li>The enumeration of material culture (fibulae, Euboean ceramics, Phoenician red slip) accurately reflects the strata found in Huelva's excavations.</li>
            </ul>
            <h4>⚠️ Areas for Improvement:</h4>
            <ul>
                <li>The text merges the start of Phoenician-Tartessian contact with the estuary weapons deposit ("carp's tongue swords") into a single moment. The famous Huelva Estuary Deposit dates from the Late Bronze Age, slightly earlier than the consolidation of the Phoenician emporium.</li>
                <li>The "pact" is dramatized as a sudden encounter, whereas colonization was a progressive, commercial assimilation process lasting decades.</li>
            </ul>
        </div>
      `,
      reto: { pregunta: "What material did the local chiefs throw into the estuary as an offering to seal eternal peace?", opciones: ["Bronze carp's tongue swords", "Gold ingots from Tyre", "Phoenician wine amphorae"], respuestaCorrecta: 0 }
    },
    fr: {
      titulo: "Histoire 1 : Le Grand Troc de l'Estuaire",
      epoca: "VIIIe siècle av. J.-C.",
      personaje: "Melqart-Baal",
      direccion: "Canoë de Punta Umbría, Quai de Levante (Plus Code: 723Q+XW)",
      personajesInfo: "<p><strong>Melqart-Baal et Arisbael :</strong> Personnages fictifs. Ils représentent les vrais navigateurs, marchands et maîtres fondeurs phéniciens qui se sont installés dans l'estuaire de Huelva.</p><p><strong>Régule Tartessien :</strong> Personnage fictif. Représente les chefs indigènes locaux qui contrôlaient le commerce des métaux.</p>",
      escena: `
        <p><strong>MELQART-BAAL :</strong> « Trois lunes à naviguer vers le couchant, guidés seulement par l'étoile du nord et les récits de mon grand-père sur une terre où les fleuves charrient de l'argent liquide. Lorsque nous avons passé le cap et sommes entrés dans cet estuaire, l'odeur du salpêtre s'est soudainement mêlée au soufre et à la fumée des collines. Ils étaient là. Les hommes des collines attendaient sur le rivage avec des armes en bronze poli que nous n'avions jamais vues en Orient. »</p>
        <p>« Nous ne cherchons pas la guerre, mais le poids exact de la balance. Ils convoitaient notre verre transparent et nos tissus teints de la pourpre sacrée de Tyr. Nous aspirions à la richesse qui jaillit de leurs montagnes du nord. Huelva n'est pas un simple refuge côtier, c'est la porte de la fin du monde où deux peuples qui n'auraient jamais dû se rencontrer ont scellé le premier pacte du métal. »</p>
      `,
      historia: `
        <p>L'air au sommet du Cabezo de San Pedro n'apportait pas l'odeur pure de l'estuaire, mais la morsure aigre du charbon de chêne vert et l'épais brouillard plombé de la litharge. En ce VIIIe siècle av. J.-C., l'élévation dominait le cœur d'Onoba, un emporium singulier où il n'y avait pas de murs de ségrégation. Les huttes indigènes et les ateliers orientaux partageaient le même sol argileux entre les embouchures du Tinto et de l'Odiel.</p>
        <p>Arisbael, un maître fondeur phénicien aux mains burinées par le feu du Levant, surveillait le souffle rythmique de la tuyère des soufflets contre la base d'un creuset en argile poreuse. À ses côtés, un régule tartessien recouvert d'un manteau de laine brute attaché par une fibule en bronze observait la bouche incandescente du four. Le minerai brut descendu par des barges fluviales depuis les collines rouges de Riotinto et Tharsis ne servait à rien à l'état natif, il nécessitait le secret chimique que les navigateurs de Tyr avaient apporté à travers la Méditerranée pour la coupellation.</p>
        <p>« Regarde comment la pierre grise saigne », murmura Arisbael en écartant la croûte superficielle de scories avec une baguette de frêne, « votre terre donne naissance à la roche, notre feu lui apprend à libérer son âme blanche. »</p>
        <p>À plus de 900 degrés, le plomb absorbait les impuretés du minerai et s'oxydait contre les parois du creuset poreux, décantant au fond un bouton concave d'argent pur à plus de 95%. Lorsque le tejo de métal a refroidi sur le sable, le chef a caressé la marque cunéiforme nouvellement estampée. Pour l'élite locale, ce lingot était le sauf-conduit qui légitimait leur pouvoir sur les tribus de l'intérieur. En échange de l'argent, les entrepôts sur la plage se remplissaient d'amphores à vin levantines à engobe rouge, de coupes grecques de style eubéen aux figures géométriques, de chaudrons repoussés et d'onguentaires en albâtre syrien.</p>
        <p>Au pied de la colline, les eaux de l'estuaire berçaient les coques des hippos, des navires marchands phéniciens à figure de proue en tête de cheval, tandis que les feux de camp des colonies mixtes brûlaient sous la nuit atlantique, scellant le pacte du métal aux confins du monde connu.</p>
      `,
      glosario: `
        <ul>
          <li><strong>Cabezo :</strong> Élévation de sol argileux caractéristique de la géographie de Huelva, utilisée comme établissement défensif et résidentiel face aux zones inondables.</li>
          <li><strong>Coupellation :</strong> Processus chimique pour purifier les métaux nobles en faisant fondre le minerai argentifère dans un creuset poreux et en forçant un courant d'air pour oxyder le plomb.</li>
          <li><strong>Emporium :</strong> Établissement commercial de l'Antiquité dédié aux échanges longue distance entre navigateurs et communautés indigènes.</li>
          <li><strong>Engobe rouge :</strong> Technique de poterie phénicienne consistant à appliquer une fine couche d'argile liquide pour obtenir une finition imperméable et rouge brillant.</li>
          <li><strong>Eubéen :</strong> Relatif à l'Eubée, île grecque d'où provenaient certaines des plus anciennes céramiques trouvées à Huelva.</li>
          <li><strong>Fibule :</strong> Broche métallique en bronze utilisée dans la Protohistoire pour attacher les tuniques et les manteaux à l'épaule.</li>
          <li><strong>Hippos :</strong> Navire marchand phénicien à coque arrondie et proue ornée d'une figure en tête de cheval.</li>
          <li><strong>Litharge :</strong> Monoxyde de plomb fondu généré sous forme de scories denses lors de l'affinage de l'argent.</li>
          <li><strong>Régule :</strong> Chef d'une tribu indigène à l'époque protohistorique.</li>
          <li><strong>Tejo :</strong> Petit bloc de métal fondu en forme de disque plat ou légèrement concave.</li>
          <li><strong>Tuyère :</strong> Conduit conique en argile reliant les soufflets à l'intérieur du four pour injecter de l'oxygène en continu.</li>
        </ul>
      `,
      rigor: `
        <div class="rigor-box">
            <div class="rigor-score">Précision Historique : <strong>92%</strong></div>
            <h4>✅ Points Forts :</h4>
            <ul>
                <li>La représentation du Cabezo de San Pedro comme un établissement de syncrétisme culturel (sans murs de ségrégation) est archéologiquement impeccable.</li>
                <li>La description du processus de coupellation de l'argent utilisant des fours à tuyère, des creusets et de la litharge est d'une précision technique exceptionnelle.</li>
                <li>L'énumération de la culture matérielle reflète exactement les strates trouvées dans les fouilles de Huelva.</li>
            </ul>
            <h4>⚠️ À Améliorer :</h4>
            <ul>
                <li>Le texte fusionne en un seul instant le début du contact phénicien-tartessien et le dépôt d'armes de l'estuaire. Le célèbre Dépôt de l'Estuaire de Huelva date du Bronze final, légèrement antérieur à la consolidation de l'emporium phénicien.</li>
                <li>Le « pacte » est dramatisé comme une rencontre soudaine, alors que la colonisation fut un processus d'assimilation progressif qui dura des décennies.</li>
            </ul>
        </div>
      `,
      reto: { pregunta: "Quel matériau les chefs locaux ont-ils jeté dans l'estuaire en offrande pour sceller une paix éternelle ?", opciones: ["Épées en bronze à langue de carpe", "Lingots d'or de Tyr", "Amphores de vin phénicien"], respuestaCorrecta: 0 }
    }
  },
  {
    id: 2,
    lat: 37.267934, lng: -6.94881,
    imgUrl: "./assets/img/historia2.jpeg",
    audios: [{ personaje: "Sexto Julio Juliano", url: "./assets/audio/historia2_juliano.mp3" }],
    es: {
      titulo: "Historia 2: El Agua Oculta y el Sabor del Imperio",
      epoca: "Siglo I d.C.",
      personaje: "Sexto Julio Juliano",
      direccion: "Fuente Vieja, Mirador del Conquero (Plus Code: 7392+4F)",
      personajesInfo: "<p><strong>Sexto Julio Juliano:</strong> Personaje histórico. Fue Duunviro (magistrado con máxima autoridad ejecutiva y judicial) de la ciudad romana de Onoba Aestuaria.</p>",
      escena: `
        <p><strong>SEXTO JULIO JULIANO:</strong> «Bajo las colinas de arcilla que vosotros llamáis cabezos no corre el fuego de los dioses, sino el pulso invisible de Roma. Mientras la plebe negocia en el foro y los mercaderes cargan las naves en la ría, yo prefiero descender aquí a las entrañas del Conquero. Silencio, humedad y piedra tallada a golpe de pico.»</p>
        <p>«Esta galería abovedada del acueducto subterráneo que nuestros zapadores perforaron vara a vara en la roca viva no solo calma la sed de la ciudad, es el motor que mantiene en marcha las factorías del litoral. Sin este caudal inagotable de agua dulce no habría salazón, ni garum para la mesa del César en el Palatino, ni lingotes de cobre navegando hacia Ostia. Roma no conquista con la espada, conquista domesticando la tierra y gobernando las mareas de Onoba Aestuaria.»</p>
      `,
      historia: `
        <p>El frescor del specus subterráneo contrastaba violentamente con el calor sofocante que golpeaba la superficie de Onoba Aestuaria. A más de diez metros bajo la cumbre del cabezo, Sexto Julio Juliano recorría el canal comprobando con la yema de los dedos la impermeabilidad del enlucido de opus signinum. El agua, filtrada de manera natural a través de los estratos areniscosos de la colina, corría limpia y constante por la solera de ladrillo hacia los depósitos terminales de la ciudad baja.</p>
        <p>Al emerger por uno de los pozos de registro, o puteus, cercanos al foro, el zumbido de la urbe portuaria lo envolvía todo. Onoba se había transformado en una de las joyas mercantiles de la provincia Baetica. En la zona costera, el aire se impregnaba del aroma denso a salmuera y especias procedentes de la cetaria, una gran pileta cuadrangular excavada en el suelo. Allí, cuadrillas de esclavos y libertos maceraban caballas y atunes bajo el sol atlántico para elaborar el codiciado garum y sellarlo en millares de ánforas tipológicas Dressel de arcilla local.</p>
        <p>Junto a los muelles de madera de la ría del Odiel el trasiego no se detenía. Las barcazas de fondo plano llegadas desde las estribaciones mineras de Riotinto descargaban pesados lingotes de cobre y plomo marcados con el sello imperial listos para ser estibados en una gran corbita de carga. Como duunviro el deber de Juliano no admitía errores, la cuota fiscal en metales y conservas debía zarpar antes de los temporales de otoño. Roma exigía el sustento y la riqueza de las provincias lejanas y Onoba cumplía puntualmente su tributo al Imperio.</p>
      `,
      glosario: `
        <ul>
          <li><strong>Acueducto subterráneo:</strong> Sistema de captación y conducción de aguas excavado en forma de túnel a través de formaciones geológicas permeables, conocido como cuniculus.</li>
          <li><strong>Cetaria:</strong> Pileta rectangular construida en mampostería e impermeabilizada con mortero hidráulico, empleada para la salazón de pescado y la fermentación del garum.</li>
          <li><strong>Corbita:</strong> Embarcación mercante romana de casco redondeado y gran capacidad de carga utilizada para el transporte marítimo de grano y metales.</li>
          <li><strong>Dressel:</strong> Sistema de clasificación arqueológica para catalogar las ánforas romanas según su forma y contenido.</li>
          <li><strong>Duunviro:</strong> Magistrado principal que ostentaba el máximo poder ejecutivo y judicial en los municipios y colonias del Imperio romano.</li>
          <li><strong>Garum:</strong> Salsa de pescado de alto valor gastronómico obtenida mediante la maceración y fermentación al sol de vísceras de pescados azules con sal y hierbas aromáticas.</li>
          <li><strong>Onoba Aestuaria:</strong> Denominación romana de Huelva, cuyo epíteto aludía a su emplazamiento geográfico sobre un estuario sometido a las mareas del Atlántico.</li>
          <li><strong>Opus signinum:</strong> Mortero hidráulico impermeable compuesto de cal, arena y fragmentos finamente triturados de cerámica y tejas cocidas.</li>
          <li><strong>Puteus:</strong> Pozo vertical de acceso excavado a intervalos regulares a lo largo de un acueducto subterráneo para permitir la ventilación y el mantenimiento del canal.</li>
          <li><strong>Specus:</strong> Canal o conducto interior por el que discurre el agua en un acueducto romano.</li>
        </ul>
      `,
      rigor: `
        <div class="rigor-box">
            <div class="rigor-score">Exactitud Histórica: <strong>90%</strong></div>
            <h4>✅ Puntos Fuertes:</h4>
            <ul>
                <li>La mención técnica del acueducto subterráneo describe fielmente la infraestructura de la actual Fuente Vieja del Conquero.</li>
                <li>Vincular la infraestructura hidráulica directamente con el funcionamiento de las cetariae demuestra una excelente comprensión del urbanismo industrial romano.</li>
                <li>El personaje del duunviro sitúa correctamente la estructura de poder de un municipio en la Baetica.</li>
            </ul>
            <h4>⚠️ Partes a Mejorar:</h4>
            <ul>
                <li>Aunque Onoba Aestuaria producía garum y conservas, la capitalidad de esta industria en el sur peninsular residía en el Estrecho (Baelo Claudia). Onoba era principalmente un puerto de salida metalúrgica. El relato eleva ligeramente la escala pesquera local al nivel de las grandes factorías imperiales.</li>
            </ul>
        </div>
      `,
      reto: { pregunta: "¿Para qué se utilizaba principalmente el agua dulce del acueducto subterráneo en la Onoba costera?", opciones: ["Para las termas privadas del Duunviro", "Para la elaboración de Garum en las cetariae", "Para inundar el foso de la muralla"], respuestaCorrecta: 1 }
    },
    en: {
      titulo: "Story 2: The Hidden Water and the Taste of the Empire",
      epoca: "1st Century AD",
      personaje: "Sextus Julius Julianus",
      direccion: "Fuente Vieja, Conquero Viewpoint (Plus Code: 7392+4F)",
      personajesInfo: "<p><strong>Sextus Julius Julianus:</strong> Historical figure. He was the Duumvir (highest executive and judicial magistrate) of the Roman city of Onoba Aestuaria.</p>",
      escena: `
        <p><strong>SEXTUS JULIUS JULIANUS:</strong> "Beneath the clay hills you call cabezos runs not the fire of the gods, but the invisible pulse of Rome. While the plebs negotiate in the forum and merchants load ships in the estuary, I prefer to descend here into the bowels of the Conquero. Silence, dampness, and stone carved by pickaxe."</p>
        <p>"This gallery of the subterranean aqueduct that our sappers drilled yard by yard into the living rock not only quenches the city's thirst; it is the engine that keeps the coastal factories running. Without this inexhaustible flow of fresh water, there would be no salting, no garum for Caesar's table on the Palatine, no copper ingots sailing towards Ostia. Rome does not conquer with the sword; it conquers by taming the land and governing the tides of Onoba Aestuaria."</p>
      `,
      historia: `
        <p>The coolness of the subterranean specus contrasted violently with the sweltering heat striking the surface of Onoba Aestuaria. More than thirty feet below the summit of the hill, Sextus Julius Julianus walked the vaulted gallery, checking the impermeability of the opus signinum plaster with his fingertips. The water, naturally filtered through the sandstone strata of the hill, ran clean and steady along the brick floor towards the terminal reservoirs of the lower city.</p>
        <p>Upon emerging through one of the inspection shafts, or puteus, near the forum, the buzz of the port city enveloped everything. Onoba had transformed into one of the mercantile jewels of the Baetica province. In the coastal zone, the air was impregnated with the dense aroma of brine and spices coming from the cetaria, a large quadrangular vat excavated in the ground. There, gangs of slaves and freedmen macerated mackerel and tuna under the Atlantic sun to produce the coveted garum and seal it in thousands of local clay Dressel amphorae.</p>
        <p>Next to the wooden docks of the Odiel estuary, the hustle and bustle never stopped. Flat-bottomed barges arriving from the mining foothills of Riotinto unloaded heavy copper and lead ingots marked with the imperial seal, ready to be stowed on a large corbita cargo ship. As a duumvir, Julianus's duty admitted no errors; the fiscal quota in metals and preserves had to set sail before the autumn storms. Rome demanded the sustenance and wealth of the distant provinces, and Onoba fulfilled its tribute to the Empire punctually.</p>
      `,
      glosario: `
        <ul>
          <li><strong>Subterranean aqueduct:</strong> System for capturing and conducting water excavated as a tunnel through permeable geological formations, known as a cuniculus.</li>
          <li><strong>Cetaria:</strong> Rectangular vat built in masonry and waterproofed with hydraulic mortar, used for fish salting and garum fermentation.</li>
          <li><strong>Corbita:</strong> Roman merchant vessel with a rounded hull and large cargo capacity used for the maritime transport of grain and metals.</li>
          <li><strong>Dressel:</strong> Archaeological classification system used to catalog Roman amphorae according to their shape and content.</li>
          <li><strong>Duumvir:</strong> Principal magistrate who held maximum executive and judicial power in the municipalities and colonies of the Roman Empire.</li>
          <li><strong>Garum:</strong> Highly valued fish sauce obtained by macerating and sun-fermenting bluefish viscera with salt and aromatic herbs.</li>
          <li><strong>Onoba Aestuaria:</strong> Roman name for Huelva, whose epithet alluded to its geographical location on an estuary subject to Atlantic tides.</li>
          <li><strong>Opus signinum:</strong> Waterproof hydraulic mortar composed of lime, sand, and finely crushed fragments of ceramics and roof tiles.</li>
          <li><strong>Puteus:</strong> Vertical access shaft excavated at regular intervals along a subterranean aqueduct to allow ventilation and channel maintenance.</li>
          <li><strong>Specus:</strong> Internal channel or conduit through which water flows in a Roman aqueduct.</li>
        </ul>
      `,
      rigor: `
        <div class="rigor-box">
            <div class="rigor-score">Historical Accuracy: <strong>90%</strong></div>
            <h4>✅ Strengths:</h4>
            <ul>
                <li>The technical mention of the subterranean aqueduct faithfully describes the infrastructure of the Fuente Vieja del Conquero.</li>
                <li>Linking the hydraulic infrastructure directly with the operation of the cetariae demonstrates an excellent understanding of Roman industrial urbanism.</li>
                <li>The duumvir character correctly situates the power structure of a municipality in Baetica.</li>
            </ul>
            <h4>⚠️ Areas for Improvement:</h4>
            <ul>
                <li>Although Onoba Aestuaria produced garum and preserves, the capital of this industry in the southern peninsula resided in the Strait (Baelo Claudia). Onoba was mainly a metallurgical exit port. The story slightly elevates the local fishing scale to the level of the great imperial factories.</li>
            </ul>
        </div>
      `,
      reto: { pregunta: "What was the fresh water from the subterranean aqueduct primarily used for in coastal Onoba?", opciones: ["For the Duumvir's private baths", "For the elaboration of Garum in the cetariae", "To flood the city wall's moat"], respuestaCorrecta: 1 }
    },
    fr: {
      titulo: "Histoire 2 : L'Eau Cachée et la Saveur de l'Empire",
      epoca: "Ier siècle apr. J.-C.",
      personaje: "Sextus Julius Julianus",
      direccion: "Fuente Vieja, Belvédère du Conquero (Plus Code: 7392+4F)",
      personajesInfo: "<p><strong>Sextus Julius Julianus :</strong> Figure historique. Il était Duumvir (magistrat suprême) de la cité romaine d'Onoba Aestuaria.</p>",
      escena: `
        <p><strong>SEXTUS JULIUS JULIANUS :</strong> « Sous les collines d'argile que vous appelez cabezos ne coule pas le feu des dieux, mais le pouls invisible de Rome. Pendant que la plèbe négocie sur le forum et que les marchands chargent les navires dans l'estuaire, je préfère descendre ici dans les entrailles du Conquero. Silence, humidité et pierre taillée à coups de pioche. »</p>
        <p>« Cette galerie voûtée de l'aqueduc souterrain que nos sapeurs ont forée mètre par mètre dans la roche vive ne calme pas seulement la soif de la ville, elle est le moteur qui fait tourner les usines du littoral. Sans ce flux inépuisable d'eau douce, il n'y aurait pas de salaison, pas de garum pour la table de César sur le Palatin, pas de lingots de cuivre naviguant vers Ostie. Rome ne conquiert pas par l'épée, elle conquiert en apprivoisant la terre et en gouvernant les marées d'Onoba Aestuaria. »</p>
      `,
      historia: `
        <p>La fraîcheur du specus souterrain contrastait violemment avec la chaleur étouffante qui frappait la surface d'Onoba Aestuaria. À plus de dix mètres sous le sommet de la colline, Sextus Julius Julianus parcourait la galerie en vérifiant du bout des doigts l'imperméabilité de l'enduit en opus signinum. L'eau, filtrée naturellement à travers les strates gréseuses de la colline, coulait propre et constante sur le sol en briques vers les réservoirs terminaux de la ville basse.</p>
        <p>En émergeant par l'un des puits de visite, ou puteus, près du forum, le bourdonnement de la ville portuaire enveloppait tout. Onoba s'était transformée en l'un des joyaux marchands de la province de Bétique. Dans la zone côtière, l'air était imprégné de l'arôme dense de saumure et d'épices provenant de la cetaria, une grande cuve quadrangulaire creusée dans le sol. Là, des équipes d'esclaves et d'affranchis macéraient des maquereaux et des thons sous le soleil atlantique pour élaborer le très convoité garum et le sceller dans des milliers d'amphores locales de type Dressel.</p>
        <p>Près des quais en bois de l'estuaire de l'Odiel, le va-et-vient ne s'arrêtait jamais. Les barges à fond plat arrivant des contreforts miniers de Riotinto déchargeaient de lourds lingots de cuivre et de plomb marqués du sceau impérial, prêts à être arrimés sur une grande corbita de charge. En tant que duumvir, le devoir de Julianus n'admettait aucune erreur ; le quota fiscal en métaux et en conserves devait lever l'ancre avant les tempêtes d'automne. Rome exigeait la subsistance et la richesse des provinces lointaines et Onoba s'acquittait ponctuellement de son tribut à l'Empire.</p>
      `,
      glosario: `
        <ul>
          <li><strong>Aqueduc souterrain :</strong> Système de captage et de conduite des eaux creusé sous forme de tunnel à travers des formations géologiques perméables, connu sous le nom de cuniculus.</li>
          <li><strong>Cetaria :</strong> Cuve rectangulaire construite en maçonnerie et imperméabilisée avec du mortier hydraulique, utilisée pour la salaison du poisson et la fermentation du garum.</li>
          <li><strong>Corbita :</strong> Navire marchand romain à coque arrondie et à grande capacité de charge utilisé pour le transport maritime de céréales et de métaux.</li>
          <li><strong>Dressel :</strong> Système de classification archéologique pour cataloguer les amphores romaines selon leur forme et leur contenu.</li>
          <li><strong>Duumvir :</strong> Magistrat principal qui détenait le pouvoir exécutif et judiciaire suprême dans les municipes et les colonies de l'Empire romain.</li>
          <li><strong>Garum :</strong> Sauce de poisson de grande valeur gastronomique obtenue par la macération et la fermentation au soleil de viscères de poissons bleus avec du sel et des herbes aromatiques.</li>
          <li><strong>Onoba Aestuaria :</strong> Nom romain de Huelva, dont l'épithète faisait allusion à sa situation géographique sur un estuaire soumis aux marées de l'Atlantique.</li>
          <li><strong>Opus signinum :</strong> Mortier hydraulique imperméable composé de chaux, de sable et de fragments finement broyés de céramique et de tuiles cuites.</li>
          <li><strong>Puteus :</strong> Puits d'accès vertical creusé à intervalles réguliers le long d'un aqueduc souterrain pour permettre la ventilation et l'entretien du canal.</li>
          <li><strong>Specus :</strong> Canal interne par lequel s'écoule l'eau dans un aqueduc romain.</li>
        </ul>
      `,
      rigor: `
        <div class="rigor-box">
            <div class="rigor-score">Précision Historique : <strong>90%</strong></div>
            <h4>✅ Points Forts :</h4>
            <ul>
                <li>La mention technique de l'aqueduc souterrain décrit fidèlement l'infrastructure de l'actuelle Fuente Vieja.</li>
                <li>Relier l'infrastructure hydraulique directement au fonctionnement des cetariae démontre une excellente compréhension de l'urbanisme industriel romain.</li>
                <li>Le personnage du duumvir situe correctement la structure du pouvoir d'une municipalité en Bétique.</li>
            </ul>
            <h4>⚠️ À Améliorer :</h4>
            <ul>
                <li>Bien qu'Onoba Aestuaria produisait du garum, la capitale de cette industrie dans le sud de la péninsule résidait dans le Détroit (Baelo Claudia). Onoba était principalement un port de sortie métallurgique. L'histoire élève légèrement l'échelle de pêche locale au niveau des grandes usines impériales.</li>
            </ul>
        </div>
      `,
      reto: { pregunta: "À quoi servait principalement l'eau douce de l'aqueduc souterrain sur la côte d'Onoba ?", opciones: ["Pour les thermes privés du Duumvir", "Pour l'élaboration du Garum dans les cetariae", "Pour inonder les douves de la muraille"], respuestaCorrecta: 1 }
    }
  },
  {
    id: 3,
    lat: 37.212104, lng: -6.940367,
    imgUrl: "./assets/img/historia3.jpeg",
    audios: [{ personaje: "Abd al-Aziz al-Bakrī", url: "./assets/audio/historia3_aziz.mp3" }],
    es: {
      titulo: "Historia 3: El Ocaso de la Taifa",
      epoca: "Siglo XI",
      personaje: "Abd al-Aziz al-Bakrī",
      direccion: "Monumento a Colón, Punta del Sebo (Plus Code: 6365+WR)",
      personajesInfo: "<p><strong>Abd al-Aziz al-Bakrī:</strong> Personaje histórico. Fue señor y gobernador de la Taifa independiente de Huelva y la Isla de Saltés.</p><p><strong>Abu Ubayd al-Bakrī:</strong> Personaje histórico (mencionado en el texto). Hijo del gobernador, que se convirtió en uno de los geógrafos más eminentes de todo Al-Ándalus.</p>",
      escena: `
        <p><strong>ABD AL-AZIZ AL-BAKRĪ:</strong> «Desde esta terraza en la isla de Shaltīs el mundo parece un tapiz tejido por el agua y el fuego. Hacia el oriente las naves de Sevilla preparan sus velas de guerra bajo las órdenes de Al-Mu'tadid, hacia el norte el humo de nuestras fraguas de hierro sigue tiñendo el cielo de la ría. Saben que este reino es pequeño en lanzas, pero infinito en saber y metales.»</p>
        <p>«Las espadas abbadíes podrán derribar nuestras murallas de arcilla y mampostería, pero jamás borrarán la memoria de este estuario. Mi hijo Abu Ubayd ya escribe en sus cuadernos cada recodo de estos caños, cada puerto del mar Océano y el secreto de las arenas donde el Tinto y el Odiel se abrazan. Los imperios caen bajo el filo de las cimitarras, la palabra escrita y las mareas de Walba permanecen para siempre.»</p>
      `,
      historia: `
        <p>El viento de poniente arrastraba sobre las almenas de Madinat Shaltīs una mezcla inconfundible de salitre atlántico, matorral de marisma y el aliento metálico de los hornos de reducción de hierro. Corría el año 1051 y la ciudad insular levantada en mitad del estuario no era un mero enclave pesquero, sino una próspera medina amurallada dotada de mezquita aljama, baños públicos, zocos artesanales y un fondeadero estratégico capaz de controlar todo el tráfico fluvial hacia el interior de Walba.</p>
        <p>Abd al-Aziz al-Bakrī observaba el horizonte desde el alcázar mientras su joven hijo, que años más tarde se consagraría como uno de los mayores geógrafos del mundo árabe clásico, trazaba las líneas maestras de las rutas marítimas en gruesos pliegos de pergamino. La pequeña taifa independiente vivía sus últimos días de autonomía ya que el expansionismo del rey poeta Al-Mu'tadid de Sevilla amenazaba con cerrar el cerco sobre el estuario. La verdadera fuerza de Saltés nunca residió en el número de sus jinetes, sino en su excepcional maestría metalúrgica y su dominio de las mareas.</p>
        <p>En los talleres de la parte baja de la isla las fraguas ardían sin descanso transformando los minerales de la sierra en armas y herrajes navales de afamada dureza que se exportaban hasta los confines del Magreb y el Levante mediterráneo. El laberinto del estero y caño mareal del Odiel constituía un escudo natural infranqueable para los pilotos inexpertos, pero permeable para las galeras locales que conocían al milímetro el ritmo de las bajamares, aprovechadas mediante alguna noria de tiro. Aunque la anexión sevillana era inminente, el legado de la dinastía de los Banu Bakr no se extinguiría en el campo de batalla, quedaría grabado en las páginas del Kitāb al-Masālik wa-l-Mamālik para inmortalizar la riqueza de la ría onubense.</p>
      `,
      glosario: `
        <ul>
          <li><strong>Alcázar:</strong> Recinto fortificado o palacio defensivo dentro de una ciudad andalusí que servía de sede al gobernador militar.</li>
          <li><strong>Al-Mu'tadid:</strong> Monarca de la Taifa de Sevilla célebre por su implacable política expansionista sobre las taifas vecinas, entre ellas Huelva y Saltés.</li>
          <li><strong>Banu Bakr:</strong> Familia noble hispanomusulmana que gobernó la Taifa independiente de Huelva tras la fragmentación del Califato de Córdoba.</li>
          <li><strong>Estero:</strong> Canal natural de agua en zonas de marisma por donde fluye y refluye la marea, fundamental para la navegación defensiva.</li>
          <li><strong>Kitāb al-Masālik wa-l-Mamālik:</strong> Obra geográfica descriptiva redactada en el siglo XI por Abu Ubayd al-Bakrī, conocida como "Libro de los Caminos y los Reinos".</li>
          <li><strong>Madinat Shaltīs:</strong> Nombre árabe de la ciudad medieval fortificada situada en la actual Isla de Saltés.</li>
          <li><strong>Mezquita Aljama:</strong> Mezquita principal de una ciudad islámica destinada al rezo colectivo de los viernes.</li>
          <li><strong>Noria de tiro:</strong> Dispositivo hidráulico tradicional para la elevación de agua dulce o el aprovechamiento de la fuerza de las mareas.</li>
          <li><strong>Taifa:</strong> Pequeños reinos independientes en los que se dividió Al-Ándalus tras la disolución del Califato Omeya.</li>
          <li><strong>Walba:</strong> Topónimo andalusí del que procede el actual nombre de Huelva.</li>
        </ul>
      `,
      rigor: `
        <div class="rigor-box">
            <div class="rigor-score">Exactitud Histórica: <strong>95%</strong></div>
            <h4>✅ Puntos Fuertes:</h4>
            <ul>
                <li>Identificar la Isla de Saltés no solo como puerto pesquero, sino como un importante centro de metalurgia del hierro es un detalle arqueológico de gran erudición, a menudo ignorado.</li>
                <li>El contexto político es exacto: la inminente caída de la taifa ante el rey Al-Mu'tadid de Sevilla en 1051.</li>
                <li>Pone en valor a Abu Ubayd al-Bakrī, la figura intelectual más importante nacida en Huelva durante la Edad Media.</li>
            </ul>
            <h4>⚠️ Partes a Mejorar:</h4>
            <ul>
                <li>La escena presenta al joven Abu Ubayd trazando mapas durante el asedio. En rigor histórico, Abu Ubayd desarrolló su inmensa obra geográfica años más tarde durante su exilio en Córdoba y Almería, trabajando más con fuentes y archivos que con observación directa en su juventud.</li>
            </ul>
        </div>
      `,
      reto: { pregunta: "¿Qué actividad artesanal, visible desde la ría por su humo, hacía famosa a la Isla de Saltés en Al-Ándalus?", opciones: ["La fundición y forja de hierro", "El tejido de seda púrpura", "La talla de alabastro"], respuestaCorrecta: 0 }
    },
    en: {
      titulo: "Story 3: The Twilight of the Taifa",
      epoca: "11th Century",
      personaje: "Abd al-Aziz al-Bakrī",
      direccion: "Columbus Monument, Punta del Sebo (Plus Code: 6365+WR)",
      personajesInfo: "<p><strong>Abd al-Aziz al-Bakrī:</strong> Historical figure. Lord and ruler of the independent Taifa of Huelva and Saltes Island in the 11th century.</p><p><strong>Abu Ubayd al-Bakrī:</strong> Historical figure (mentioned). Son of the ruler, who became one of the most eminent geographers in Al-Andalus.</p>",
      escena: `
        <p><strong>ABD AL-AZIZ AL-BAKRI:</strong> "From this terrace on the island of Shaltis the world looks like a tapestry woven by water and fire. To the east, the ships of Seville prepare their war sails under the orders of Al-Mu'tadid; to the north, the smoke from our iron forges continues to dye the sky over the estuary. They know this kingdom is small in spears, but infinite in knowledge and metals."</p>
        <p>"The Abbadid swords may tear down our walls of clay and masonry, but they will never erase the memory of this estuary. My son Abu Ubayd is already writing in his notebooks every bend of these channels, every port of the Ocean Sea, and the secret of the sands where the Tinto and Odiel rivers embrace. Empires fall under the edge of scimitars; the written word and the tides of Walba remain forever."</p>
      `,
      historia: `
        <p>The west wind carried over the battlements of Madinat Shaltīs an unmistakable mixture of Atlantic saltpeter, marsh scrub, and the metallic breath of the iron reduction furnaces. It was the year 1051, and the island city built in the middle of the estuary was not a mere fishing enclave, but a prosperous walled medina equipped with an Aljama Mosque, public baths, artisanal souks, and a strategic anchorage capable of controlling all river traffic inland to Walba.</p>
        <p>Abd al-Aziz al-Bakri watched the horizon from the alcázar while his young son, who years later would be consecrated as one of the greatest geographers of the classical Arab world, traced the master lines of maritime routes on thick sheets of parchment. The small independent taifa was living its last days of autonomy as the expansionism of the poet king Al-Mu'tadid of Seville threatened to close the siege on the estuary. The true strength of Saltes never lay in the number of its horsemen, but in its exceptional metallurgical mastery and its dominion over the tides.</p>
        <p>In the workshops of the lower part of the island, the forges burned tirelessly, transforming the minerals of the sierra into famously hard weapons and naval fittings that were exported to the ends of the Maghreb and the Mediterranean Levant. The labyrinth of the tidal channel of the Odiel constituted an impassable natural shield for inexperienced pilots, but permeable for local galleys that knew the rhythm of the low tides down to the millimeter, often harnessed by a waterwheel. Although the Sevillian annexation was imminent, the legacy of the Banu Bakr dynasty would not be extinguished on the battlefield; it would be engraved in the pages of the Kitāb al-Masālik wa-l-Mamālik to immortalize the wealth of the Huelva estuary.</p>
      `,
      glosario: `
        <ul>
          <li><strong>Alcázar:</strong> Fortified enclosure or defensive palace within an Andalusi city that served as the seat of the military governor.</li>
          <li><strong>Al-Mu'tadid:</strong> Monarch of the Taifa of Seville famous for his relentless expansionist policy over neighboring taifas, including Huelva and Saltes.</li>
          <li><strong>Banu Bakr:</strong> Hispano-Muslim noble family that ruled the independent Taifa of Huelva after the fragmentation of the Caliphate of Cordoba.</li>
          <li><strong>Tidal channel:</strong> Natural water channel in marsh areas where the tide flows and ebbs, fundamental for defensive navigation.</li>
          <li><strong>Kitāb al-Masālik wa-l-Mamālik:</strong> Descriptive geographical work written in the 11th century by Abu Ubayd al-Bakri, a key historical source for knowing the routes of the time.</li>
          <li><strong>Madinat Shaltīs:</strong> Arabic name for the fortified medieval city located on present-day Saltes Island.</li>
          <li><strong>Aljama Mosque:</strong> Principal mosque of an Islamic city designated for collective Friday prayers.</li>
          <li><strong>Waterwheel:</strong> Traditional hydraulic device for raising fresh water or harnessing the power of the tides.</li>
          <li><strong>Taifa:</strong> Small independent kingdoms into which Al-Andalus was divided after the dissolution of the Umayyad Caliphate.</li>
          <li><strong>Walba:</strong> Andalusi toponym from which the current name of Huelva derives.</li>
        </ul>
      `,
      rigor: `
        <div class="rigor-box">
            <div class="rigor-score">Historical Accuracy: <strong>95%</strong></div>
            <h4>✅ Strengths:</h4>
            <ul>
                <li>Identifying Saltes Island not just as a fishing port, but as a major center for iron metallurgy is a highly erudite archaeological detail.</li>
                <li>The political context is precise: the imminent fall of the taifa to King Al-Mu'tadid of Seville in 1051.</li>
                <li>It highlights Abu Ubayd al-Bakri, the most important intellectual figure born in Huelva during the Middle Ages.</li>
            </ul>
            <h4>⚠️ Areas for Improvement:</h4>
            <ul>
                <li>The scene shows the young Abu Ubayd drawing maps during the siege. Historically, Abu Ubayd developed his immense geographical work years later during his exile in Cordoba and Almeria, working more with sources and archives than with direct observation in his youth.</li>
            </ul>
        </div>
      `,
      reto: { pregunta: "What artisanal activity, visible from the estuary due to its smoke, made the Island of Saltes famous in Al-Andalus?", opciones: ["Iron smelting and forging", "Purple silk weaving", "Alabaster carving"], respuestaCorrecta: 0 }
    },
    fr: {
      titulo: "Histoire 3 : Le Crépuscule de la Taïfa",
      epoca: "XIe siècle",
      personaje: "Abd al-Aziz al-Bakrī",
      direccion: "Monument à Colomb, Punta del Sebo (Plus Code: 6365+WR)",
      personajesInfo: "<p><strong>Abd al-Aziz al-Bakrī :</strong> Figure historique. Seigneur et gouverneur de la Taïfa indépendante de Huelva et de l'île de Saltés au XIe siècle.</p><p><strong>Abu Ubayd al-Bakrī :</strong> Figure historique (mentionné). Fils du gouverneur, qui est devenu l'un des géographes les plus éminents d'Al-Andalus.</p>",
      escena: `
        <p><strong>ABD AL-AZIZ AL-BAKRI :</strong> « Depuis cette terrasse sur l'île de Shaltīs, le monde ressemble à une tapisserie tissée par l'eau et le feu. Vers l'orient, les navires de Séville préparent leurs voiles de guerre sous les ordres d'Al-Mu'tadid ; vers le nord, la fumée de nos forges de fer continue de teinter le ciel de l'estuaire. Ils savent que ce royaume est petit en lances, mais infini en savoir et en métaux. »</p>
        <p>« Les épées abbadides pourront abattre nos murs d'argile et de maçonnerie, mais elles n'effaceront jamais la mémoire de cet estuaire. Mon fils Abu Ubayd écrit déjà dans ses carnets chaque méandre de ces canaux, chaque port de la mer Océane et le secret des sables où le Tinto et l'Odiel s'embrassent. Les empires tombent sous le tranchant des cimeterres, la parole écrite et les marées de Walba demeurent pour toujours. »</p>
      `,
      historia: `
        <p>Le vent d'ouest transportait sur les remparts de Madinat Shaltīs un mélange incomparable de salpêtre atlantique, de broussailles de marais et le souffle métallique des fours de réduction de fer. C'était l'an 1051 et la ville insulaire bâtie au milieu de l'estuaire n'était pas une simple enclave de pêcheurs, mais une prospère médina fortifiée dotée d'une Mosquée Aljama, de bains publics, de souks artisanaux et d'un mouillage stratégique capable de contrôler tout le trafic fluvial vers l'intérieur de Walba.</p>
        <p>Abd al-Aziz al-Bakri observait l'horizon depuis l'alcázar tandis que son jeune fils, qui des années plus tard serait consacré comme l'un des plus grands géographes du monde arabe classique, traçait les lignes maîtresses des routes maritimes sur d'épaisses feuilles de parchemin. La petite taïfa indépendante vivait ses derniers jours d'autonomie alors que l'expansionnisme du roi poète Al-Mu'tadid de Séville menaçait de refermer le siège sur l'estuaire. La véritable force de Saltés n'a jamais résidé dans le nombre de ses cavaliers, mais dans son exceptionnelle maîtrise métallurgique et sa domination sur les marées.</p>
        <p>Dans les ateliers de la partie basse de l'île, les forges brûlaient sans relâche, transformant les minéraux de la sierra en armes et ferrures navales d'une dureté réputée qui s'exportaient jusqu'aux confins du Maghreb et du Levant méditerranéen. Le labyrinthe du canal de marée de l'Odiel constituait un bouclier naturel infranchissable pour les pilotes inexpérimentés, mais perméable pour les galères locales qui connaissaient au millimètre près le rythme des marées basses, exploitées par une noria. Bien que l'annexion sévillane fût imminente, l'héritage de la dynastie des Banu Bakr ne s'éteindrait pas sur le champ de bataille, il serait gravé dans les pages du Kitāb al-Masālik wa-l-Mamālik pour immortaliser la richesse de la ria de Huelva.</p>
      `,
      glosario: `
        <ul>
          <li><strong>Alcázar :</strong> Enceinte fortifiée ou palais défensif au sein d'une ville andalouse qui servait de siège au gouverneur militaire.</li>
          <li><strong>Al-Mu'tadid :</strong> Monarque de la Taïfa de Séville célèbre pour sa politique expansionniste implacable sur les taïfas voisines, y compris Huelva et Saltés.</li>
          <li><strong>Banu Bakr :</strong> Famille noble hispano-musulmane qui gouverna la Taïfa indépendante de Huelva après la fragmentation du Califat de Cordoue.</li>
          <li><strong>Canal de marée :</strong> Canal d'eau naturel dans les zones de marais où la marée monte et descend, fondamental pour la navigation défensive.</li>
          <li><strong>Kitāb al-Masālik wa-l-Mamālik :</strong> Œuvre géographique descriptive rédigée au XIe siècle par Abu Ubayd al-Bakri, une source historique clé pour connaître les routes de l'époque.</li>
          <li><strong>Madinat Shaltīs :</strong> Nom arabe de la ville médiévale fortifiée située sur l'actuelle île de Saltés.</li>
          <li><strong>Mosquée Aljama :</strong> Mosquée principale d'une ville islamique destinée aux prières collectives du vendredi.</li>
          <li><strong>Noria :</strong> Dispositif hydraulique traditionnel pour l'élévation de l'eau douce ou l'exploitation de la force des marées.</li>
          <li><strong>Taïfa :</strong> Petits royaumes indépendants dans lesquels Al-Andalus s'est divisé après la dissolution du Califat Omeyyade.</li>
          <li><strong>Walba :</strong> Toponyme andalou dont dérive le nom actuel de Huelva.</li>
        </ul>
      `,
      rigor: `
        <div class="rigor-box">
            <div class="rigor-score">Précision Historique : <strong>95%</strong></div>
            <h4>✅ Points Forts :</h4>
            <ul>
                <li>Identifier l'île de Saltés non seulement comme un port de pêche, mais comme un centre majeur de métallurgie du fer est un détail archéologique d'une grande érudition.</li>
                <li>Le contexte politique est précis : la chute imminente de la taïfa face au roi Al-Mu'tadid de Séville en 1051.</li>
                <li>Met en valeur Abu Ubayd al-Bakri, la figure intellectuelle la plus importante née à Huelva au Moyen Âge.</li>
            </ul>
            <h4>⚠️ À Améliorer :</h4>
            <ul>
                <li>La scène présente le jeune Abu Ubayd traçant des cartes pendant le siège. Historiquement, Abu Ubayd a développé son immense œuvre géographique des années plus tard pendant son exil à Cordoue et Almería, travaillant davantage avec des sources et des archives qu'avec une observation directe dans sa jeunesse.</li>
            </ul>
        </div>
      `,
      reto: { pregunta: "Quelle activité artisanale, visible depuis l'estuaire par sa fumée, rendait l'île de Saltés célèbre en Al-Andalus ?", opciones: ["La fonte et forge du fer", "Le tissage de soie pourpre", "La sculpture sur albâtre"], respuestaCorrecta: 0 }
    }
  },
  {
    id: 4,
    lat: 37.257736, lng: -6.947324,
    imgUrl: "./assets/img/historia4.jpeg",
    audios: [
      { personaje: "Alonso Sánchez", url: "./assets/audio/historia4_alonso.mp3" },
      { personaje: "Fray Juan Pérez", url: "./assets/audio/historia4_fray.mp3" },
      { personaje: "Pero Vázquez", url: "./assets/audio/historia4_pero.mp3" },
      { personaje: "Martín Alonso Pinzón", url: "./assets/audio/historia4_martin.mp3" }
    ],
    es: {
      titulo: "Historia 4: El Cuarteto de la Ría",
      epoca: "1492",
      personaje: "Fray Juan Pérez, Martín Alonso Pinzón y Alonso Sánchez",
      direccion: "Mirador del Parque Alonso Sánchez (Plus Code: 7353+43)",
      personajesInfo: "<p><strong>Alonso Sánchez:</strong> Figura histórica semi-legendaria. Conocido como 'El Prenauta', un marino de Huelva que supuestamente llegó a América antes que Colón.</p><p><strong>Fray Juan Pérez:</strong> Personaje histórico. Fraile del Monasterio de La Rábida clave en convencer a los Reyes Católicos.</p><p><strong>Pero Vázquez de la Frontera:</strong> Personaje histórico. Respetado y veterano marino de Palos.</p><p><strong>Martín Alonso Pinzón:</strong> Personaje histórico. Rico armador y co-descubridor de América.</p>",
      escena: `
        <p><strong>ALONSO SÁNCHEZ («EL PRENAUTA»):</strong> «No fue un sueño de matemáticos, yo estuve allí. Un temporal de veintinueve días nos arrastró más allá de donde el mapa se acaba, hasta una isla verde de playas vírgenes que ningún cristiano había pisado. Cuando regresé a Madeira con el casco destrozado y mis marineros muertos llamé al forastero genovés a mi lecho. En sus manos dejé mi rumbo, mis cálculos y el secreto de las corrientes. Yo puse la certeza, él se llevó la gloria.»</p>
        <p><strong>FRAY JUAN PÉREZ:</strong> «Cuando Cristóbal llegó exhausto a La Rábida con aquel diario en la faltriquera vi que no era locura de visionario, sino la providencia de Castilla aguardando tras la niebla. Aquella misma noche ensillé mi mula rumbo al campamento de Santa Fe. La reina Isabel escuchó la voz de la fe, pero la fe no flota en el agua si no hay marinos que sepan domar el mar.»</p>
        <p><strong>PERO VÁZQUEZ DE LA FRONTERA:</strong> «Los doctores de Salamanca temían que el agua hirviera en el abismo. Yo les hablé de maderas labradas que las corrientes arrojan a las Azores y de cañas gigantescas traídas por los alisios. Las notas del piloto de Huelva no mentían, el Mar Tenebroso es un camino abierto para quien sepa leer el cielo del poniente.»</p>
        <p><strong>MARTÍN ALONSO PINZÓN:</strong> «¡En Palos nadie se embarca por un papel firmado por los reyes ni por el mapa de un muerto! Tuve que poner medio millón de maravedíes de mi bolsillo, mi propia carabela y la sangre de mis propios hermanos para que la gente de esta ría diera el paso al frente. Miren las naves listas en la barra, no vamos a morir al fin del mundo. ¡Vamos a ganar honra y riquezas para Huelva! ¡Soltad amarras!»</p>
      `,
      historia: `
        <p>En 1492 el mayor hito náutico de la historia no fue producto del azar ni del genio solitario de un hombre, sino la convergencia milimétrica de cuatro voluntades nacidas o templadas en las aguas de Huelva: la certeza empírica del náufrago, la diplomacia de la fe, la ciencia cartográfica y el poder naval del estuario.</p>
        <p><strong>El Secreto del Náufrago</strong><br>
        Años antes de que la primera carabela se armara en el Tinto el rumor corría ya por las tabernas de la ría y las casas de mareantes de Madeira. Alonso Sánchez de Huelva, un experimentado patrón mercante conocido por la leyenda como el Prenauta, fue sorprendido hacia 1484 por un temporal implacable. Arrastrado por los vientos de levante hacia aguas jamás cartografiadas arribó a las Antillas. Moribundo, fue acogido en Porto Santo en la casa de Cristóbal Colón. En agradecimiento por sus cuidados, le entregó su bien más preciado: el cuaderno de bitácora donde había anotado el régimen de vientos alisios y la derrota exacta para alcanzar aquella tierra ignota.</p>
        <p><strong>La Noche de La Rábida</strong><br>
        A finales de 1491 Colón se encontraba derrotado. Tras el dictamen negativo de los sabios de Salamanca se disponía a huir a Francia, pero recaló en el convento franciscano de La Rábida. Allí, Fray Juan Pérez analizó los mapas y los testimonios que el genovés custodiaba. El fraile cabalgó hasta el campamento militar de Santa Fe. Su oratoria en la corte logró la firma de las Capitulaciones de Santa Fe en abril de 1492.</p>
        <p><strong>El Susurro del Océano</strong><br>
        El miedo al Mar Tenebroso impedía reclutar tripulaciones hasta que intervino Pero Vázquez de la Frontera, un veterano piloto de Palos. En reuniones nocturnas en las casas del puerto confirmó la veracidad del relato del piloto onubense, asegurando haber visto troncos esculpidos y cañas gigantes. Su autoridad técnica despejó las dudas científicas.</p>
        <p><strong>El Liderazgo del Puerto</strong><br>
        Pese a la Real Provisión que embargaba naves, nadie quería embarcarse con un extranjero. Fue entonces cuando Martín Alonso Pinzón decidió liderar la empresa. Pinzón aportó medio millón en piezas de maravedí de su patrimonio personal, fletó la carabela Pinta y la Niña, descartando la pesada nao, y recorrió las riberas del Tinto arengando a sus vecinos. El 3 de agosto de 1492 las tres naves cruzaron la barra de Saltés para transformar la historia.</p>
      `,
      glosario: `
        <ul>
          <li><strong>Alisios:</strong> Vientos planetarios regulares del noreste en el hemisferio norte, aprovechados por los marinos onubenses como motor constante para el cruce del Atlántico.</li>
          <li><strong>Barra de Saltés:</strong> Peligroso bajo arenoso situado en la confluencia del Tinto y el Odiel cuyo cruce exigía pericia técnica y coincidencia con la pleamar para evitar el naufragio.</li>
          <li><strong>Capitulaciones de Santa Fe:</strong> Pacto jurídico firmado en 1492 entre los Reyes Católicos y Colón donde se fijaban las condiciones económicas y privilegios de la expedición descubridora.</li>
          <li><strong>Carabela:</strong> Embarcación ligera de casco alargado y gran maniobrabilidad desarrollada en la península ibérica, idónea para la exploración de costas desconocidas.</li>
          <li><strong>Cuaderno de bitácora:</strong> Registro diario manuscrito donde el piloto anotaba rumbos, distancias estimadas, vientos y corrientes de navegación.</li>
          <li><strong>Derrota:</strong> Trayectoria o rumbo trazado y seguido por una embarcación sobre la superficie del mar.</li>
          <li><strong>Mar Tenebroso:</strong> Nombre mitológico con el que la cosmografía medieval se refería a las aguas inexploradas del océano Atlántico más allá del horizonte conocido.</li>
          <li><strong>Maravedí:</strong> Moneda y unidad de cuenta castellana empleada para saldar los sueldos y pertrechos de la marinería.</li>
          <li><strong>Nao:</strong> Embarcación mercante de mayor porte y manga ancha que la carabela, más pesada pero con mayor bodega de carga.</li>
          <li><strong>Prenauta:</strong> Término histórico y legendario atribuido a Alonso Sánchez de Huelva, aludiendo al marino que presuntamente descubrió América de forma accidental antes del viaje oficial de 1492.</li>
        </ul>
      `,
      rigor: `
        <div class="rigor-box">
            <div class="rigor-score">Exactitud Histórica: <strong>80%</strong></div>
            <h4>✅ Puntos Fuertes:</h4>
            <ul>
                <li>Descentraliza el mérito exclusivo de Colón y subraya el inmenso poder naval y técnico de la ría.</li>
                <li>La inclusión de Pero Vázquez de la Frontera es un enorme acierto historiográfico. Su testimonio técnico a los marineros indecisos es un hecho real documentado en los Pleitos Colombinos.</li>
                <li>El peso financiero y el liderazgo carismático de Martín Alonso Pinzón en Palos están descritos con total fidelidad a la historia.</li>
            </ul>
            <h4>⚠️ Partes a Mejorar:</h4>
            <ul>
                <li>La historia de Alonso Sánchez ("El Prenauta") es una leyenda historiográfica fijada y popularizada por el <strong>Inca Garcilaso de la Vega</strong> en su obra <em>Comentarios Reales de los Incas</em> (publicada en <strong>1609</strong>). Su objetivo originario fue restar mérito a Colón. Ningún historiador americanista riguroso la acepta hoy como un hecho probado, si bien este relato interactivo la asume como cierta por su tremendo valor dramático y su arraigo en la tradición popular onubense.</li>
            </ul>
        </div>
      `,
      reto: { pregunta: "¿Qué elemento natural clave aportó el piloto Pero Vázquez para convencer a la marinería de que existía tierra al oeste?", opciones: ["Trozos de hielo flotante", "Maderas labradas arrastradas a las Azores", "Restos de embarcaciones vikingas"], respuestaCorrecta: 1 }
    },
    en: {
      titulo: "Story 4: The Estuary Quartet",
      epoca: "1492",
      personaje: "Friar Juan Pérez, Martín Alonso Pinzón & Alonso Sánchez",
      direccion: "Alonso Sánchez Park Viewpoint (Plus Code: 7353+43)",
      personajesInfo: "<p><strong>Alonso Sánchez:</strong> Semi-legendary historical figure. Known as 'The Pre-navigator', a sailor from Huelva who allegedly reached America before Columbus.</p><p><strong>Friar Juan Pérez:</strong> Historical figure. Friar at La Rábida Monastery, key in convincing the Catholic Monarchs.</p><p><strong>Pero Vázquez de la Frontera:</strong> Historical figure. Respected and veteran sailor from Palos.</p><p><strong>Martín Alonso Pinzón:</strong> Historical figure. Wealthy shipowner and co-discoverer of America.</p>",
      escena: `
        <p><strong>ALONSO SANCHEZ ("THE PRE-NAVIGATOR"):</strong> "It wasn't a dream of mathematicians, I was there. A twenty-nine-day storm dragged us beyond where the map ends, to a green island with virgin beaches no Christian had ever stepped on. When I returned to Madeira with a shattered hull and my dead sailors, I called the Genoese stranger to my bed. In his hands I left my course, my calculations, and the secret of the currents. I provided the certainty; he took the glory."</p>
        <p><strong>FRIAR JUAN PEREZ:</strong> "When Christopher arrived exhausted at La Rábida with that journal in his satchel, I saw it wasn't the madness of a visionary, but the providence of Castile waiting behind the fog. That same night I saddled my mule for the military camp of Santa Fe. Queen Isabella listened to the voice of faith, but faith doesn't float on water if there are no sailors who know how to tame the sea."</p>
        <p><strong>PERO VAZQUEZ DE LA FRONTERA:</strong> "The scholars of Salamanca feared the water would boil in the abyss. I told them about carved wood that currents wash up on the Azores and gigantic canes brought by the trade winds. The Huelva pilot's notes didn't lie, the Sea of Darkness is an open road for those who know how to read the western sky."</p>
        <p><strong>MARTIN ALONSO PINZON:</strong> "In Palos no one sets sail for a paper signed by kings or the map of a dead man! I had to put half a million in maravedí coin from my own pocket, my own caravel, and the blood of my own brothers so the people of this estuary would step forward. Look at the ships ready at the sandbar, we are not going to die at the end of the world. We are going to win honor and riches for Huelva! Cast off!"</p>
      `,
      historia: `
        <p>In 1492, the greatest nautical milestone in history was not the product of chance or the solitary genius of one man, but the precise convergence of four wills born or tempered in the waters of Huelva: the empirical certainty of the castaway, the diplomacy of faith, cartographic science, and the naval power of the estuary.</p>
        <p><strong>The Secret of the Castaway</strong><br>
        Years before the first caravel was armed in the Tinto, the rumor was already spreading through the taverns of the estuary and the sailors' houses in Madeira. Alonso Sanchez of Huelva, an experienced merchant skipper known as the pre-navigator, was caught by a relentless storm around 1484. Dragged by easterly winds into unmapped waters, he arrived in the Antilles. Dying, he was taken in at Porto Santo in the house of Christopher Columbus. In gratitude for his care, the pilot gave him his most prized possession: the logbook where he had noted the trade winds and the exact course to reach that unknown land.</p>
        <p><strong>The Night of La Rábida</strong><br>
        At the end of 1491, Columbus was defeated. After the negative verdict of the wise men of Salamanca, he was preparing to flee to France, but he stopped at the Franciscan convent of La Rábida. There, Friar Juan Perez analyzed the maps. The friar rode to the military camp of Santa Fe. His oratory at court achieved the signing of the Capitulations of Santa Fe in April 1492.</p>
        <p><strong>The Whisper of the Ocean</strong><br>
        The fear of the unknown prevented crew recruitment until Pero Vazquez de la Frontera, a veteran Palos pilot, intervened. In night meetings he confirmed the veracity of Alonso Sanchez's account, assuring he had seen carved logs and giant canes. His technical authority cleared scientific doubts about the Sea of Darkness.</p>
        <p><strong>The Leadership of the Port</strong><br>
        Despite the Royal Provision, no one wanted to sail under the command of a foreigner. That was when Martin Alonso Pinzon decided to lead the enterprise. Pinzon contributed half a million maravedí of his personal wealth, chartered the Pinta and the Niña (avoiding the heavier nao), and traveled the banks of the Tinto rallying his neighbors. On August 3, 1492, the three ships crossed the Saltes sandbar to transform world history.</p>
      `,
      glosario: `
        <ul>
          <li><strong>Trade winds:</strong> Regular planetary winds from the northeast in the northern hemisphere, used by Huelva sailors as a constant engine to cross the Atlantic.</li>
          <li><strong>Saltes sandbar:</strong> Dangerous sandy shoal located at the confluence of the Tinto and Odiel rivers whose crossing required technical skill and high tide to avoid shipwreck.</li>
          <li><strong>Capitulations of Santa Fe:</strong> Legal pact signed in 1492 between the Catholic Monarchs and Columbus establishing the economic conditions and privileges of the expedition.</li>
          <li><strong>Caravel:</strong> Light vessel with an elongated hull and great maneuverability developed in the Iberian Peninsula, ideal for exploring unknown coasts.</li>
          <li><strong>Logbook:</strong> Handwritten daily record where the pilot noted courses, estimated distances, winds, and navigation currents.</li>
          <li><strong>Course:</strong> Trajectory or route traced and followed by a vessel on the surface of the sea.</li>
          <li><strong>Sea of Darkness:</strong> Mythological name used in medieval cosmography to refer to the unexplored waters of the Atlantic Ocean beyond the known horizon.</li>
          <li><strong>Maravedí:</strong> Castilian coin and unit of account used to pay the salaries and supplies of the sailors.</li>
          <li><strong>Nao:</strong> Merchant vessel with a larger size and wider beam than the caravel, heavier but with a larger cargo hold.</li>
          <li><strong>Pre-navigator:</strong> Historical and legendary term attributed to Alonso Sanchez of Huelva, alluding to the sailor who allegedly discovered America accidentally before the official voyage of 1492.</li>
        </ul>
      `,
      rigor: `
        <div class="rigor-box">
            <div class="rigor-score">Historical Accuracy: <strong>80%</strong></div>
            <h4>✅ Strengths:</h4>
            <ul>
                <li>It decentralizes the exclusive merit of Columbus and highlights the immense naval power of the estuary.</li>
                <li>The inclusion of Pero Vazquez de la Frontera is a huge historiographical success. His technical testimony to undecided sailors is a real fact documented in the Pleitos Colombinos.</li>
                <li>The financial weight and charismatic leadership of Martin Alonso Pinzon in Palos are described with complete fidelity to history.</li>
            </ul>
            <h4>⚠️ Areas for Improvement:</h4>
            <ul>
                <li>The story of Alonso Sanchez ("The Pre-navigator") is a historiographical legend recorded and popularized by <strong>Inca Garcilaso de la Vega</strong> in his work <em>Comentarios Reales de los Incas</em> (published in <strong>1609</strong>). Its original purpose was to diminish Columbus's merit. No rigorous historian accepts it today as a proven fact, although this interactive narrative assumes it to be true due to its tremendous dramatic value and deep roots in popular tradition.</li>
            </ul>
        </div>
      `,
      reto: { pregunta: "What key natural element did pilot Pero Vazquez bring up to convince the sailors that land existed to the west?", opciones: ["Floating chunks of ice", "Carved wood washed up on the Azores", "Remains of Viking vessels"], respuestaCorrecta: 1 }
    },
    fr: {
      titulo: "Histoire 4 : Le Quatuor de l'Estuaire",
      epoca: "1492",
      personaje: "Frère Juan Pérez, Martín Alonso Pinzón et Alonso Sánchez",
      direccion: "Belvédère du Parc Alonso Sánchez (Plus Code: 7353+43)",
      personajesInfo: "<p><strong>Alonso Sánchez :</strong> Figure historique semi-légendaire. Connu sous le nom de 'Pré-navigateur', un marin de Huelva qui aurait atteint l'Amérique avant Colomb.</p><p><strong>Frère Juan Pérez :</strong> Figure historique. Frère au monastère de La Rábida, clé pour convaincre les Rois Catholiques.</p><p><strong>Pero Vázquez de la Frontera :</strong> Figure historique. Marin respecté et vétéran de Palos.</p><p><strong>Martín Alonso Pinzón :</strong> Figure historique. Armateur fortuné et co-découvreur de l'Amérique.</p>",
      escena: `
        <p><strong>ALONSO SÁNCHEZ (« LE PRÉ-NAVIGATEUR ») :</strong> « Ce n'était pas un rêve de mathématiciens, j'y étais. Une tempête de vingt-neuf jours nous a entraînés au-delà d'où la carte se termine, jusqu'à une île verte aux plages vierges qu'aucun chrétien n'avait foulée. Quand je suis retourné à Madère avec la coque brisée et mes marins morts, j'ai appelé l'étranger génois à mon chevet. Entre ses mains j'ai laissé ma route, mes calculs et le secret des courants. J'ai apporté la certitude, il a pris la gloire. »</p>
        <p><strong>FRÈRE JUAN PÉREZ :</strong> « Quand Christophe est arrivé épuisé à La Rábida avec ce journal dans sa besace, j'ai vu que ce n'était pas la folie d'un visionnaire, mais la providence de Castille qui attendait derrière le brouillard. Cette même nuit j'ai sellé ma mule pour le camp militaire de Santa Fe. La reine Isabelle a écouté la voix de la foi, mais la foi ne flotte pas sur l'eau s'il n'y a pas de marins qui savent dompter la mer. »</p>
        <p><strong>PERO VÁZQUEZ DE LA FRONTERA :</strong> « Les docteurs de Salamanque craignaient que l'eau ne bout dans l'abîme. Je leur ai parlé de bois sculptés que les courants rejettent aux Açores et de roseaux gigantesques apportés par les alizés. Les notes du pilote de Huelva ne mentaient pas, la Mer des Ténèbres est une voie ouverte pour qui sait lire le ciel du couchant. »</p>
        <p><strong>MARTÍN ALONSO PINZÓN :</strong> « À Palos personne n'embarque pour un papier signé par les rois ni pour la carte d'un mort ! J'ai dû mettre un demi-million en maravédis de ma poche, ma propre caravelle et le sang de mes propres frères pour que les gens de cet estuaire fassent le pas. Regardez les navires prêts à la barre, nous n'allons pas mourir au bout du monde. Nous allons gagner honneur et richesses pour Huelva ! Larguez les amarres ! »</p>
      `,
      historia: `
        <p>En 1492, la plus grande étape nautique de l'histoire ne fut pas le produit du hasard ni du génie solitaire d'un seul homme, mais la convergence millimétrique de quatre volontés nées ou trempées dans les eaux de Huelva : la certitude empirique du naufragé, la diplomatie de la foi, la science cartographique et le pouvoir naval de l'estuaire.</p>
        <p><strong>Le Secret du Naufragé</strong><br>
        Des années avant que la première caravelle ne soit armée sur le Tinto, la rumeur courait déjà dans les tavernes de l'estuaire. Alonso Sánchez de Huelva, un patron marchand expérimenté connu sous le nom de pré-navigateur, fut surpris vers 1484 par une tempête implacable. Arrivé mourant aux Antilles puis à Porto Santo, il fut recueilli par Christophe Colomb. En remerciement, il lui remit son journal de bord où il avait noté le régime des alizés et la route exacte pour atteindre cette terre inconnue.</p>
        <p><strong>La Nuit de La Rábida</strong><br>
        Fin 1491, Colomb était vaincu. Après le verdict négatif des sages, il fit escale au couvent de La Rábida. Là, Frère Juan Pérez analysa les cartes. Le frère chevaucha jusqu'au camp de Santa Fe. Son art oratoire obtint la signature des Capitulations de Santa Fe en avril 1492.</p>
        <p><strong>Le Murmure de l'Océan</strong><br>
        La peur de l'inconnu empêchait le recrutement jusqu'à l'intervention de Pero Vázquez de la Frontera, un pilote vétéran de Palos. Lors de réunions nocturnes, il confirma le récit d'Alonso Sánchez. Son autorité technique dissipa les doutes scientifiques sur la redoutée Mer des Ténèbres.</p>
        <p><strong>Le Leadership du Port</strong><br>
        Personne ne voulait s'embarquer sous le commandement d'un étranger. Martín Alonso Pinzón décida de diriger l'entreprise. Pinzón apporta un demi-million en maravédi de sa fortune, affréta la Pinta et la Niña, préférées à la lourde nef, et harangua ses voisins. Le 3 août 1492, les trois navires franchirent la barre de Saltés pour transformer l'histoire.</p>
      `,
      glosario: `
        <ul>
          <li><strong>Alizés :</strong> Vents planétaires réguliers du nord-est dans l'hémisphère nord, utilisés par les marins de Huelva comme moteur constant pour traverser l'Atlantique.</li>
          <li><strong>Barre de Saltés :</strong> Banc de sable dangereux situé au confluent du Tinto et de l'Odiel dont la traversée nécessitait une grande habileté technique et la marée haute pour éviter le naufrage.</li>
          <li><strong>Capitulations de Santa Fe :</strong> Pacte juridique signé en 1492 entre les Rois Catholiques et Colomb fixant les conditions économiques et les privilèges de l'expédition.</li>
          <li><strong>Caravelle :</strong> Navire léger à coque allongée et grande maniabilité développé dans la péninsule ibérique, idéal pour l'exploration de côtes inconnues.</li>
          <li><strong>Journal de bord :</strong> Registre quotidien manuscrit où le pilote notait les caps, les distances estimées, les vents et les courants de navigation.</li>
          <li><strong>Route :</strong> Trajectoire ou cap tracé et suivi par un navire sur la surface de la mer.</li>
          <li><strong>Mer des Ténèbres :</strong> Nom mythologique par lequel la cosmographie médiévale désignait les eaux inexplorées de l'océan Atlantique au-delà de l'horizon connu.</li>
          <li><strong>Maravédi :</strong> Monnaie et unité de compte castillane utilisée pour payer les salaires et les fournitures des marins.</li>
          <li><strong>Nef :</strong> Navire marchand d'une taille et d'une largeur supérieures à la caravelle, plus lourd mais doté d'une plus grande cale.</li>
          <li><strong>Pré-navigateur :</strong> Terme historique et légendaire attribué à Alonso Sánchez de Huelva, faisant allusion au marin qui aurait prétendument découvert l'Amérique par accident avant le voyage officiel de 1492.</li>
        </ul>
      `,
      rigor: `
        <div class="rigor-box">
            <div class="rigor-score">Précision Historique : <strong>80%</strong></div>
            <h4>✅ Points Forts :</h4>
            <ul>
                <li>Décentralise le mérite exclusif de Colomb et souligne l'immense puissance navale de l'estuaire.</li>
                <li>L'inclusion de Pero Vázquez de la Frontera est un énorme succès historiographique. Son témoignage technique est documenté dans les procès colombiens.</li>
                <li>Le poids financier et le leadership charismatique de Martín Alonso Pinzón à Palos sont décrits avec une fidélité absolue à l'histoire.</li>
            </ul>
            <h4>⚠️ À Améliorer :</h4>
            <ul>
                <li>L'histoire d'Alonso Sánchez (« Le Pré-navigateur ») est une légende historiographique fixée et popularisée par l'<strong>Inca Garcilaso de la Vega</strong> dans son œuvre <em>Comentarios Reales de los Incas</em> (publiée en <strong>1609</strong>). Son but initial était de minimiser le mérite de Colomb. Aucun historien rigoureux ne l'accepte aujourd'hui comme un fait prouvé, bien que ce récit interactif la suppose vraie pour son immense valeur dramatique et son ancrage dans la tradition populaire.</li>
            </ul>
        </div>
      `,
      reto: { pregunta: "Quel élément naturel clé le pilote Pero Vázquez a-t-il apporté pour convaincre les marins que la terre existait à l'ouest ?", opciones: ["Des morceaux de glace flottante", "Du bois sculpté rejeté sur les Açores", "Des restes de navires vikings"], respuestaCorrecta: 1 }
    }
  },
  {
    id: 5,
    lat: 37.248196, lng: -6.959204,
    imgUrl: "./assets/img/historia5.jpeg",
    audios: [
      { personaje: "Wilhelm Sundheim", url: "./assets/audio/historia5_wilhelm.mp3" },
      { personaje: "Sir George Bruce", url: "./assets/audio/historia5_george.mp3" },
      { personaje: "Maximiliano Tornet", url: "./assets/audio/historia5_maximiliano.mp3" },
      { personaje: "Dr. Charles Mackay", url: "./assets/audio/historia5_charles.mp3" }
    ],
    es: {
      titulo: "Historia 5: El Imperio del Cobre",
      epoca: "1873–1889",
      personaje: "W. Sundheim, G. Bruce, C. Mackay y M. Tornet",
      direccion: "Paseo del Muelle del Tinto, Av. F. Montenegro (Plus Code: 62XR+68)",
      personajesInfo: "<p><strong>Wilhelm Sundheim:</strong> Personaje histórico. Empresario alemán impulsor del progreso y el ferrocarril en Huelva.</p><p><strong>Sir George Barclay Bruce:</strong> Personaje histórico. Ingeniero civil británico que diseñó el muelle.</p><p><strong>Maximiliano Tornet:</strong> Personaje histórico. Líder obrero anarquista durante las masivas protestas mineras.</p><p><strong>Dr. Charles Mackay:</strong> Personaje histórico. Médico escocés y pionero organizador del fútbol en España.</p>",
      escena: `
        <p><strong>WILHELM SUNDHEIM:</strong> «Cuando llegué a estas costas en 1865, Huelva era una villa marinera adormecida que miraba con nostalgia su pasado de carabelas. Yo vi otra cosa, el tesoro dormido en las entrañas de la sierra. Fui a Londres, convencí a los banqueros de Matheson & Company y pusimos en marcha la mayor operación minera de Europa. Trajimos el ferrocarril, el telégrafo, el Gran Hotel Colón y la luz eléctrica. Huelva se convirtió en el puerto minero del mundo.»</p>
        <p><strong>SIR GEORGE BARCLAY BRUCE:</strong> «La roca y el barro de esta ría se resistían a soportar el peso de los trenes cargados de mineral. Diseñé un muelle de madera y hierro fundido sobre pilotes de rosca que desafiara las mareas, una rampa multinivel donde el tren no se detiene sino que vierte directamente el cobre en las entrañas de los barcos mediante la gravedad. Es una máquina perfecta de tres pisos que une la sierra con el océano.»</p>
        <p><strong>MAXIMILIANO TORNET:</strong> «¡Hablan del progreso, pero no cuentan el precio de nuestra sangre! El aire de la sierra se volvió veneno puro con el humo de las teleras, quemando las cosechas y ahogando el pecho de nuestros hijos. El 4 de febrero de 1888 bajamos miles a reclamar pan y aire limpio frente al gobierno civil y nos respondieron a tiros. El cobre británico brillaba en Londres, pero en las calles de Huelva se pagaba con luto y sudor.»</p>
        <p><strong>DR. CHARLES MACKAY:</strong> «Entre el humo de los talleres y las jornadas interminables, la colonia inglesa y los jóvenes onubenses necesitaban salud, disciplina y aire limpio. En los salones del hotel y en los campos de gasa fundamos el Huelva Recreation Club. Trajimos el tenis, el cricket y sobre todo ese juego de balón que llamábamos football. Aquí plantamos la semilla del deporte en España, el Decano de una pasión que ya nadie podrá apagar.»</p>
      `,
      historia: `
        <p>Durante el último tercio del siglo XIX la provincia de Huelva experimentó la transformación más radical de su historia contemporánea. Tras la venta de las milenarias minas por parte del Estado español en 1873 a la Rio Tinto Company, la ciudad se convirtió en una colonia industrial cosmopolita donde convivieron la vanguardia tecnológica y el contraste social.</p>
        <p><strong>El Cerebro del Progreso</strong><br>
        El banquero y diplomático germano-onubense Wilhelm Sundheim comprendió que la riqueza de la Faja Pirítica Ibérica no tenía utilidad sin una salida marítima rápida hacia los mercados siderúrgicos europeos. Sundheim gestionó la llegada de la línea férrea Zafra-Huelva y promovió la construcción del fastuoso Gran Hotel Colón para conmemorar el IV Centenario del Descubrimiento de América en 1892.</p>
        <p><strong>La Catedral del Hierro</strong><br>
        Para dar salida a las millones de toneladas de cobre, los ingenieros Sir George Barclay Bruce y Thomas Gibson diseñaron en 1874 un muelle de carga revolucionario. Inaugurado en 1876, el Muelle de Riotinto fue una obra maestra de la arquitectura del hierro que se adentraba más de un kilómetro en la ría sobre pilotes de rosca introducidos en el fango marino.</p>
        <p><strong>El Grito de la Sierra</strong><br>
        Para separar el cobre se empleaba el método de las teleras, inmensas pirámides de mineral que se quemaban al aire libre desprendiendo nubes de dióxido de azufre. El descontento desembocó en una alianza entre campesinos locales y mineros dirigidos por el anarquista Maximiliano Tornet. El 4 de febrero de 1888, el ejército abrió fuego indiscriminado contra la multitud desarmada, marcando El Año de los Tiros y constituyendo una de las primeras grandes tragedias ecológicas de España.</p>
        <p><strong>El Legado del Balón</strong><br>
        La presencia de británicos trajo consigo sus costumbres victorianas como los chalés de madera del Barrio Reina Victoria. El médico escocés Dr. Charles Mackay organizó partidos de fútbol. El 23 de diciembre de 1889 fundaron formalmente el Huelva Recreation Club, inscribiendo su nombre como la cuna y el Decano del fútbol español.</p>
      `,
      glosario: `
        <ul>
          <li><strong>Barrio Reina Victoria:</strong> Complejo residencial promovido en 1916 por la compañía minera para alojar a sus empleados, caracterizado por una singular mezcla de arquitectura victoriana británica y detalles andaluces.</li>
          <li><strong>Gran Hotel Colón:</strong> Conjunto arquitectónico edificado entre 1881 y 1883 como hotel de lujo impulsado por Wilhelm Sundheim, dotado de jardines y salones para eventos de la alta sociedad industrial.</li>
          <li><strong>Decano:</strong> Título honorífico y deportivo que ostenta el Real Club Recreativo de Huelva por ser el club de fútbol federado más antiguo de España.</li>
          <li><strong>El Año de los Tiros:</strong> Suceso histórico acaecido el 4 de febrero de 1888 en Minas de Riotinto donde tropas militares reprimieron a tiros una manifestación obrera que protestaba contra las emisiones tóxicas.</li>
          <li><strong>Faja Pirítica Ibérica:</strong> Una de las mayores concentraciones de sulfuros masivos polimetálicos del planeta que cruza todo el centro-norte de Huelva y penetra en Portugal.</li>
          <li><strong>Muelle de Riotinto:</strong> Monumental pantalán de descarga de mineral construido en madera y hierro sobre la ría del Odiel, considerado hito de la ingeniería industrial europea.</li>
          <li><strong>Pilotes de rosca:</strong> Sistema de cimentación de hierro fundido consistente en columnas cilíndricas rematadas en hélice que se atornillaban al fondo fangoso del estuario para soportar el peso de las vías.</li>
          <li><strong>Rio Tinto Company:</strong> Empresa minera británica constituida en Londres en 1873 que explotó a escala masiva los yacimientos mineros de Riotinto durante más de ocho décadas.</li>
          <li><strong>Teleras:</strong> Método metalúrgico tradicional consistente en quemar toneladas de mineral de pirita a cielo abierto durante meses, liberando densas emanaciones de dióxido de azufre altamente contaminantes.</li>
          <li><strong>Zafra-Huelva:</strong> Línea de ferrocarril estratégica promovida por Wilhelm Sundheim para conectar el puerto de Huelva con el interior de Extremadura y facilitar el transporte de mercancías.</li>
        </ul>
      `,
      rigor: `
        <div class="rigor-box">
            <div class="rigor-score">Exactitud Histórica: <strong>98%</strong></div>
            <h4>✅ Puntos Fuertes:</h4>
            <ul>
                <li>La interconexión de las figuras clave es perfecta: el capital (Sundheim), la ingeniería (Bruce), la medicina/deporte (Mackay) y el movimiento obrero (Tornet).</li>
                <li>La descripción de las "teleras" y las consecuencias ecológicas y sociales que desembocaron en la masacre del "Año de los Tiros" (1888) es rigurosa, cruda y fidedigna.</li>
                <li>La fecha fundacional del Huelva Recreation Club (23 de diciembre de 1889) es exacta.</li>
            </ul>
            <h4>⚠️ Partes a Mejorar:</h4>
            <ul>
                <li>Hay un levísimo anacronismo por compresión temporal: la cronología marca "1873-1889", pero se menciona el Barrio Reina Victoria, cuya construcción no fue promovida por la compañía británica hasta 1916.</li>
            </ul>
        </div>
      `,
      reto: { pregunta: "¿Cómo se llama el método de calcinación de mineral al aire libre que provocó la huelga del 'Año de los Tiros' en 1888?", opciones: ["Copelación", "Altos Hornos", "Teleras"], respuestaCorrecta: 2 }
    },
    en: {
      titulo: "Story 5: The Copper Empire",
      epoca: "1873–1889",
      personaje: "W. Sundheim, G. Bruce, C. Mackay & M. Tornet",
      direccion: "Tinto Pier Promenade, F. Montenegro Ave (Plus Code: 62XR+68)",
      personajesInfo: "<p><strong>Wilhelm Sundheim:</strong> Historical figure. German businessman who drove progress and the railway in Huelva.</p><p><strong>Sir George Barclay Bruce:</strong> Historical figure. British civil engineer who designed the pier.</p><p><strong>Maximiliano Tornet:</strong> Historical figure. Anarchist labor leader during the massive mining protests.</p><p><strong>Dr. Charles Mackay:</strong> Historical figure. Scottish doctor and pioneer organizer of football in Spain.</p>",
      escena: `
        <p><strong>WILHELM SUNDHEIM:</strong> "When I arrived on these shores in 1865, Huelva was a sleepy fishing village looking back with nostalgia at its past of caravels. I saw something else: the treasure sleeping in the bowels of the sierra. I went to London, convinced the bankers of Matheson & Company, and we set in motion the largest mining operation in Europe. We brought the railway, the telegraph, the Grand Hotel Colón, and electric light. Huelva became the mining port of the world."</p>
        <p><strong>SIR GEORGE BARCLAY BRUCE:</strong> "The rock and mud of this estuary resisted bearing the weight of the trains loaded with ore. I designed a wooden and cast-iron pier on screw piles that would defy the tides, a multi-level ramp where the train does not stop but pours the copper directly into the bowels of the ships by gravity. It's a perfect three-story machine that unites the sierra with the ocean."</p>
        <p><strong>MAXIMILIANO TORNET:</strong> "They speak of progress, but they don't count the price of our blood! The air in the sierra became pure poison with the smoke from the teleras, burning the crops and choking our children's chests. On February 4, 1888, thousands of us went down to demand bread and clean air in front of the civil government and they answered us with gunfire. British copper shone in London, but in the streets of Huelva it was paid for with mourning and sweat."</p>
        <p><strong>DR. CHARLES MACKAY:</strong> "Amidst the smoke from the workshops and the endless days, the English colony and the young people of Huelva needed health, discipline, and clean air. In the halls of the hotel and on the gauze fields we founded the Huelva Recreation Club. We brought tennis, cricket, and above all that ball game we called football. Here we planted the seed of sport in Spain, the Dean of a passion that no one can extinguish."</p>
      `,
      historia: `
        <p>During the last third of the 19th century, the province of Huelva experienced the most radical transformation of its contemporary history. Following the sale of the ancient Riotinto mines by the Spanish State in 1873 to the Rio Tinto Company, the city became a cosmopolitan industrial colony where technological vanguard and social contrast coexisted.</p>
        <p><strong>The Brains of Progress</strong><br>
        The German-Huelvan banker and diplomat Wilhelm Sundheim understood that the wealth of the Iberian Pyrite Belt was useless without a rapid maritime outlet to the European steel markets. Sundheim managed the arrival of the Zafra-Huelva railway line, and promoted the construction of the lavish Grand Hotel Colón to commemorate the IV Centenary of the Discovery of America in 1892.</p>
        <p><strong>The Cathedral of Iron</strong><br>
        To provide an outlet for the millions of tons of copper, the engineers Sir George Barclay Bruce and Thomas Gibson designed a revolutionary loading pier over the Odiel river in 1874. Inaugurated in 1876, the Riotinto Pier was a masterpiece of iron architecture that extended more than a kilometer into the estuary on cast-iron screw piles introduced into the marine mud.</p>
        <p><strong>The Cry of the Sierra</strong><br>
        To separate the copper, the teleras method was used: immense pyramids of ore that were burned in the open air for months, releasing gigantic clouds of sulfur dioxide. The discontent culminated in an unprecedented alliance between local peasants and miners led by the anarchist Maximiliano Tornet. On February 4, 1888, the army opened fire indiscriminately on the unarmed crowd, an event known as The Year of the Shots, constituting one of the first major ecological tragedies in Spain.</p>
        <p><strong>The Legacy of the Ball</strong><br>
        The presence of British engineers brought with it Victorian customs such as the wooden chalets of the Barrio Reina Victoria. The Scottish doctor Dr. Charles Mackay organized football matches. On December 23, 1889, they formally founded the Huelva Recreation Club, registering its name as the birthplace and the Dean of Spanish football.</p>
      `,
      glosario: `
        <ul>
          <li><strong>Barrio Reina Victoria:</strong> Residential complex promoted in 1916 by the mining company to house its employees, featuring a unique blend of Victorian British architecture and Andalusian details.</li>
          <li><strong>Grand Hotel Colón:</strong> Architectural complex built between 1881 and 1883 as a luxury hotel promoted by Wilhelm Sundheim, equipped with gardens and halls for high-society events.</li>
          <li><strong>Dean:</strong> Honorary and sporting title held by the Real Club Recreativo de Huelva for being the oldest federated football club in Spain.</li>
          <li><strong>The Year of the Shots:</strong> Historical event where military troops shot down a workers' demonstration protesting against toxic emissions in Minas de Riotinto on February 4, 1888.</li>
          <li><strong>Iberian Pyrite Belt:</strong> One of the largest concentrations of massive polymetallic sulfides on the planet crossing central-northern Huelva into Portugal.</li>
          <li><strong>Riotinto Pier:</strong> Monumental ore unloading pier built of wood and iron over the Odiel estuary, considered a landmark of European industrial engineering.</li>
          <li><strong>Screw piles:</strong> Cast-iron foundation system consisting of cylindrical columns topped with a helix screwed into the muddy bottom to support the weight of the trains.</li>
          <li><strong>Rio Tinto Company:</strong> British mining company incorporated in London in 1873 that exploited the Riotinto mining deposits on a massive scale for over eight decades.</li>
          <li><strong>Teleras:</strong> Traditional metallurgical method of burning tons of pyrite ore in the open air for months, releasing highly polluting sulfur dioxide emissions.</li>
          <li><strong>Zafra-Huelva:</strong> Strategic railway line promoted by Wilhelm Sundheim to connect the port of Huelva with the interior of Extremadura.</li>
        </ul>
      `,
      rigor: `
        <div class="rigor-box">
            <div class="rigor-score">Historical Accuracy: <strong>98%</strong></div>
            <h4>✅ Strengths:</h4>
            <ul>
                <li>The interconnection of key figures is perfect: capital (Sundheim), engineering (Bruce), medicine/sports (Mackay), and the labor movement (Tornet).</li>
                <li>The description of the "teleras" and the ecological and social consequences that led to the "Year of the Shots" massacre (1888) is rigorous, raw, and reliable.</li>
                <li>The founding date of the Huelva Recreation Club (December 23, 1889) is exact.</li>
            </ul>
            <h4>⚠️ Areas for Improvement:</h4>
            <ul>
                <li>There is a very slight anachronism due to time compression: the timeline marks "1873-1889", but mentions the Barrio Reina Victoria, whose construction was not promoted by the British company until 1916.</li>
            </ul>
        </div>
      `,
      reto: { pregunta: "What is the name of the open-air ore roasting method that caused the 'Year of the Shots' strike in 1888?", opciones: ["Cupellation", "Blast Furnaces", "Teleras"], respuestaCorrecta: 2 }
    },
    fr: {
      titulo: "Histoire 5 : L'Empire du Cuivre",
      epoca: "1873–1889",
      personaje: "W. Sundheim, G. Bruce, C. Mackay et M. Tornet",
      direccion: "Promenade du Quai du Tinto, Av. F. Montenegro (Plus Code: 62XR+68)",
      personajesInfo: "<p><strong>Wilhelm Sundheim :</strong> Figure historique. Homme d'affaires allemand moteur du progrès et du chemin de fer à Huelva.</p><p><strong>Sir George Barclay Bruce :</strong> Figure historique. Ingénieur civil britannique qui a conçu le quai.</p><p><strong>Maximiliano Tornet :</strong> Figure historique. Dirigeant ouvrier anarchiste lors des manifestations minières.</p><p><strong>Dr Charles Mackay :</strong> Figure historique. Médecin écossais et pionnier de l'organisation du football en Espagne.</p>",
      escena: `
        <p><strong>WILHELM SUNDHEIM :</strong> « Quand je suis arrivé sur ces côtes en 1865, Huelva était un village de pêcheurs endormi qui regardait avec nostalgie son passé de caravelles. J'ai vu autre chose, le trésor endormi dans les entrailles de la sierra. Je suis allé à Londres, j'ai convaincu les banquiers de Matheson & Company et nous avons lancé la plus grande opération minière d'Europe. Nous avons apporté le chemin de fer, le télégraphe, le Grand Hôtel Colón et la lumière électrique. Huelva est devenue le port minier du monde. »</p>
        <p><strong>SIR GEORGE BARCLAY BRUCE :</strong> « La roche et la boue de cet estuaire résistaient à supporter le poids des trains chargés de minerai. J'ai conçu un quai en bois et en fonte sur des pieux à vis qui défierait les marées, une rampe à plusieurs niveaux où le train ne s'arrête pas mais déverse directement le cuivre dans les entrailles des navires par gravité. C'est une machine parfaite à trois étages qui unit la sierra à l'océan. »</p>
        <p><strong>MAXIMILIANO TORNET :</strong> « Ils parlent de progrès, mais ils ne comptent pas le prix de notre sang ! L'air de la sierra est devenu du pur poison avec la fumée des teleras, brûlant les récoltes et étouffant la poitrine de nos enfants. Le 4 février 1888, nous sommes descendus par milliers pour réclamer du pain et de l'air pur devant le gouvernement civil et ils nous ont répondu par des tirs. Le cuivre britannique brillait à Londres, mais dans les rues de Huelva, il se payait en deuil et en sueur. »</p>
        <p><strong>DR. CHARLES MACKAY :</strong> « Au milieu de la fumée des ateliers et des journées interminables, la colonie anglaise et les jeunes de Huelva avaient besoin de santé, de discipline et d'air pur. Dans les salons de l'hôtel et sur les terrains de gaze, nous avons fondé le Huelva Recreation Club. Nous avons apporté le tennis, le cricket et surtout ce jeu de balle que nous appelions football. Ici, nous avons planté la graine du sport en Espagne, le Doyen d'une passion que personne ne pourra plus éteindre. »</p>
      `,
      historia: `
        <p>Durant le dernier tiers du XIXe siècle, la province de Huelva a connu la transformation la plus radicale de son histoire contemporaine. Suite à la vente des millénaires mines par l'État espagnol en 1873 à la Rio Tinto Company, la ville est devenue une colonie industrielle cosmopolite où coexistaient l'avant-garde technologique et le contraste social.</p>
        <p><strong>Le Cerveau du Progrès</strong><br>
        Le banquier et diplomate germano-huelvan Wilhelm Sundheim a compris que la richesse de la Ceinture Pyritique Ibérique n'avait aucune utilité sans un débouché maritime rapide vers les marchés sidérurgiques européens. Sundheim a géré l'arrivée de la ligne de chemin de fer Zafra-Huelva et promu la construction du fastueux Grand Hôtel Colón pour commémorer le IVe Centenaire de la Découverte de l'Amérique en 1892.</p>
        <p><strong>La Cathédrale de Fer</strong><br>
        Pour écouler les millions de tonnes de cuivre, les ingénieurs Sir George Barclay Bruce et Thomas Gibson ont conçu en 1874 un quai de chargement révolutionnaire. Inauguré en 1876, le Quai de Riotinto était un chef-d'œuvre de l'architecture du fer qui s'avançait sur plus d'un kilomètre dans l'estuaire sur des pieux à vis en fonte introduits dans la boue marine.</p>
        <p><strong>Le Cri de la Sierra</strong><br>
        Pour séparer le cuivre, on utilisait la méthode des teleras : d'immenses pyramides de minerai qui brûlaient à l'air libre pendant des mois. Le mécontentement a abouti à une alliance inédite entre les paysans locaux et les mineurs dirigés par l'anarchiste Maximiliano Tornet. Le 4 février 1888, l'armée a ouvert le feu sans discernement sur la foule non armée, événement connu comme L'Année des Tirs, constituant l'une des premières grandes tragédies écologiques d'Espagne.</p>
        <p><strong>L'Héritage du Ballon</strong><br>
        La présence de britanniques a apporté avec elle ses coutumes victoriennes comme les chalets en bois du Quartier Reine Victoria. Le médecin écossais Dr Charles Mackay a organisé des matchs de football. Le 23 décembre 1889, ils ont formellement fondé le Huelva Recreation Club, inscrivant son nom comme le berceau et le Doyen du football espagnol.</p>
      `,
      glosario: `
        <ul>
          <li><strong>Quartier Reine Victoria :</strong> Complexe résidentiel promu en 1916 par la compagnie minière pour loger ses employés, caractérisé par un mélange singulier d'architecture victorienne britannique et de détails andalous.</li>
          <li><strong>Grand Hôtel Colón :</strong> Complexe architectural construit entre 1881 et 1883 comme hôtel de luxe promu par Wilhelm Sundheim, doté de jardins et de salons pour les événements de la haute société.</li>
          <li><strong>Doyen :</strong> Titre honorifique et sportif détenu par le Real Club Recreativo de Huelva pour être le plus ancien club de football fédéré d'Espagne.</li>
          <li><strong>L'Année des Tirs :</strong> Événement historique au cours duquel les troupes militaires ont réprimé par balles une manifestation ouvrière protestant contre les émissions toxiques à Minas de Riotinto le 4 février 1888.</li>
          <li><strong>Ceinture Pyritique Ibérique :</strong> L'une des plus grandes concentrations de sulfures massifs polymétalliques de la planète qui traverse tout le centre-nord de Huelva et pénètre au Portugal.</li>
          <li><strong>Quai de Riotinto :</strong> Quai monumental de déchargement de minerai construit en bois et en fer sur la ria de l'Odiel, considéré comme une étape de l'ingénierie industrielle européenne.</li>
          <li><strong>Pieux à vis :</strong> Système de fondation en fonte constitué de colonnes cylindriques surmontées d'une hélice qui se vissaient au fond boueux pour supporter le poids des trains.</li>
          <li><strong>Rio Tinto Company :</strong> Société minière britannique constituée à Londres en 1873 qui a exploité à grande échelle les gisements miniers de Riotinto pendant plus de huit décennies.</li>
          <li><strong>Teleras :</strong> Méthode métallurgique traditionnelle consistant à brûler des tonnes de minerai de pyrite à ciel ouvert pendant des mois, libérant des émissions de dioxyde de soufre hautement polluantes.</li>
          <li><strong>Zafra-Huelva :</strong> Ligne de chemin de fer stratégique promue par Wilhelm Sundheim pour relier le port de Huelva à l'intérieur de l'Estrémadure.</li>
        </ul>
      `,
      rigor: `
        <div class="rigor-box">
            <div class="rigor-score">Précision Historique : <strong>98%</strong></div>
            <h4>✅ Points Forts :</h4>
            <ul>
                <li>L'interconnexion des figures clés est parfaite : le capital (Sundheim), l'ingénierie (Bruce), la médecine/sport (Mackay) et le mouvement ouvrier (Tornet).</li>
                <li>La description des "teleras" et des conséquences écologiques et sociales qui ont conduit au massacre de "L'Année des Tirs" (1888) est rigoureuse, crue et fidèle.</li>
                <li>La date de fondation du Huelva Recreation Club (23 décembre 1889) est exacte.</li>
            </ul>
            <h4>⚠️ À Améliorer :</h4>
            <ul>
                <li>Il y a un très léger anachronisme par compression temporelle : la chronologie marque "1873-1889", mais mentionne le Quartier Reine Victoria, dont la construction n'a été promue par la compagnie britannique qu'en 1916.</li>
            </ul>
        </div>
      `,
      reto: { pregunta: "Comment s'appelle la méthode de calcination du minerai à l'air libre qui a provoqué la grève de « l'Année des Tirs » en 1888 ?", opciones: ["Coupellation", "Hauts Fourneaux", "Teleras"], respuestaCorrecta: 2 }
    }
  },
  {
    id: 6,
    lat: 37.291092, lng: -6.929486,
    imgUrl: "./assets/img/historia6.jpeg",
    audios: [
      { personaje: "José Antonio Rey", url: "./assets/audio/historia6_jose.mp3" },
      { personaje: "Francis Haselden", url: "./assets/audio/historia6_francis.mp3" },
      { personaje: "Adolf Clauss", url: "./assets/audio/historia6_adolf.mp3" },
      { personaje: "Ewen Montagu", url: "./assets/audio/historia6_ewen.mp3" }
    ],
    es: {
      titulo: "Historia 6: Operación Mincemeat",
      epoca: "1943",
      personaje: "J.A. Rey, F. Haselden, A. Clauss, E. Montagu",
      direccion: "Calle Marina, Huelva (Plus Code: 73RC+M5)",
      personajesInfo: "<p><strong>José Antonio Rey María:</strong> Personaje histórico. Pescador onubense que descubrió el cadáver en el mar.</p><p><strong>Francis Haselden:</strong> Personaje histórico. Vicecónsul británico en Huelva, encargado de reclamar el cuerpo.</p><p><strong>Adolf Clauss:</strong> Personaje histórico. Eficaz espía alemán de la Abwehr destinado en Huelva.</p><p><strong>Ewen Montagu:</strong> Personaje histórico. Oficial de inteligencia británico y arquitecto maestro del engaño militar.</p>",
      escena: `
        <p><strong>JOSÉ ANTONIO REY MARÍA:</strong> «Aquel 30 de abril de 1943 salí antes del alba a recoger las redes de sardinas frente a la playa de La Bota. En mitad del agua flotaba algo oscuro. Creí que era una boya de corcho, pero al acercar la barca se me heló la sangre, era un oficial inglés con uniforme de gala, chaleco salvavidas amarillo y una valija diplomática de cuero negro encadenada a la cintura. No sabía que en mis redes acababa de caer el destino entero de Europa.»</p>
        <p><strong>FRANCIS HASELDEN:</strong> «Londres me había telegrafiado con instrucciones terminantes, actúe como un burócrata histérico. Desde el Viceconsulado Británico acudí a la Comandancia de Marina exigiendo la devolución inmediata del cuerpo del Comandante William Martin y sobre todo de su correspondencia confidencial intacta. Cuanto más insistía yo en proteger aquella valija más despertaba la codicia de los agentes alemanes en Huelva. Todo estaba saliendo al milímetro según el plan.»</p>
        <p><strong>ADOLF CLAUSS:</strong> «Huelva era un hervidero de agentes de la Abwehr. Cuando mis contactos en el ejército español me avisaron del hallazgo moví cielo y tierra. Conseguimos abrir la valija en secreto, desdoblar las cartas selladas del Estado Mayor británico con una aguja al rojo y fotografiar cada página antes de entregarlo a los ingleses. Los informes eran concluyentes, los aliados no atacarían Sicilia, sino Grecia y Cerdeña. Envié los microfilms directos al despacho del Führer en Berlín.»</p>
        <p><strong>EWEN MONTAGU:</strong> «El cuerpo pertenecía en realidad a Glyndwr Michael, un indigente galés fallecido en Londres al que dimos una vida, un amor de ficción llamado Pam y una misión póstuma. Cuando desciframos el mensaje que confirmaba que Hitler había trasladado sus divisiones blindadas de Sicilia a Grecia envié a Churchill el telegrama más dulce de la guerra: Mincemeat tragado con anzuelo, sedal y plomo. Huelva fue el anzuelo y el Reich cayó en la trampa.»</p>
      `,
      historia: `
        <p>Durante la primavera de 1943, Huelva se convirtió en el escenario secreto del mayor ardid de desinformación militar del siglo XX: la Operación Mincemeat. Con una España neutral pero simpatizante del Eje, la inteligencia británica eligió las aguas de la ría onubense para tender la trampa definitiva al Alto Mando alemán.</p>
        <p><strong>El Milagro de la Playa de La Bota</strong><br>
        El 30 de abril de 1943 el pescador de Punta Umbría José Antonio Rey María divisó un bulto flotante mientras faenaba a bordo de su embarcación. Al aproximarse descubrió el cuerpo de un supuesto oficial británico ataviado con una valija diplomática de cuero amarrada a su cuerpo mediante una cadena. El cadáver era en realidad el de Glyndwr Michael, un vagabundo galés cuyo cuerpo había sido conservado en hielo seco y arrojado a las aguas onubenses desde el submarino británico HMS Seraph.</p>
        <p><strong>La Falsa Desesperación</strong><br>
        En Londres, el oficial de inteligencia Ewen Montagu y el equipo del Comité Doble Cruz habían creado una identidad ficticia milimétrica: el Comandante William Martin. En su uniforme introdujeron cartas personales secretas donde se indicaba que el inminente desembarco en el Mediterráneo tendría como objetivo Grecia y Cerdeña. Desde el Viceconsulado Británico, Francis Haselden desempeñó su papel a la perfección reclamando con vehemencia la entrega inmediata.</p>
        <p><strong>La Trampa de la Abwehr</strong><br>
        Huelva albergaba una de las redes más eficientes de la inteligencia militar alemana, la Abwehr, dirigida por Adolf Clauss. Alertado del hallazgo, Clauss logró que expertos del espionaje nazi extrajeran los documentos sin romper los sellos de cera, secaran las cartas y las fotografiaran. Engañado por la información, Adolf Hitler ordenó desviar divisiones blindadas hacia los Balcanes.</p>
        <p><strong>El Triunfo de Sicilia</strong><br>
        El 2 de mayo de 1943 el supuesto Comandante William Martin fue enterrado con honores militares en el Cementerio de la Soledad de Huelva. El 10 de julio de 1943, cuando las tropas aliadas desembarcaron en Sicilia (Operación Husky) encontraron una resistencia muy inferior a la prevista salvando miles de vidas y permitiendo la rápida caída del régimen fascista de Benito Mussolini. Hasta el día de hoy la tumba de William Martin en el cementerio onubense sigue recibiendo flores frescas convertida en un monumento al engaño militar más fascinante de la historia moderna.</p>
      `,
      glosario: `
        <ul>
          <li><strong>Abwehr:</strong> Servicio de inteligencia y contraespionaje militar alemán que contaba con una activa red de agentes clandestinos en ciudades portuarias españolas durante la Segunda Guerra Mundial.</li>
          <li><strong>Comité Doble Cruz:</strong> Sección de contraespionaje e intoxicación informativa del servicio secreto británico encargada de engañar al Eje mediante operaciones de desinformación.</li>
          <li><strong>Glyndwr Michael:</strong> Nombre real del ciudadano galés cuyo cadáver fue utilizado anónimamente por la inteligencia británica para crear el personaje ficticio del Comandante William Martin.</li>
          <li><strong>HMS Seraph:</strong> Submarino de la Real Armada Británica que transportó el cuerpo congelado de William Martin en un contenedor metálico hasta la costa de Huelva.</li>
          <li><strong>Operación Husky:</strong> Nombre en clave del desembarco e invasión aliada de Sicilia facilitado decisivamente por el éxito del engaño de la Operación Mincemeat.</li>
          <li><strong>Operación Mincemeat:</strong> Estratagema de desinformación aliada ideada por Ewen Montagu para desviar la atención militar alemana de la invasión de Sicilia.</li>
          <li><strong>Playa de La Bota:</strong> Extenso arenal del municipio de Punta Umbría donde las corrientes de la ría depositaron el cadáver de William Martin.</li>
          <li><strong>Tumba de William Martin:</strong> Sepultura situada en el Cementerio de la Soledad de Huelva donde reposan los restos de Glyndwr Michael bajo la identidad militar británica asignada en la farsa bélica.</li>
          <li><strong>Valija diplomática:</strong> Maletín oficial protegido por inmunidad internacional que los correos militares llevaban encadenado a la muñeca o al cinto para evitar su sustracción.</li>
          <li><strong>Viceconsulado Británico:</strong> Sede diplomática y consular del Reino Unido clave para la protección del comercio minero y la coordinación de actividades aliadas en el golfo de Cádiz.</li>
        </ul>
      `,
      rigor: `
        <div class="rigor-box">
            <div class="rigor-score">Exactitud Histórica: <strong>99%</strong></div>
            <h4>✅ Puntos Fuertes:</h4>
            <ul>
                <li>Documentación impecable. Los nombres del pescador (José Antonio Rey María), la identidad real del cadáver (Glyndwr Michael), el cónsul británico (Haselden), el espía de la Abwehr (Clauss) y el estratega (Montagu) coinciden perfectamente con los archivos británicos desclasificados.</li>
                <li>Los pormenores operativos (el hielo seco en el submarino, el uso de agujas incandescentes para no romper los sellos) son reales.</li>
            </ul>
            <h4>⚠️ Partes a Mejorar:</h4>
            <ul>
                <li>La escena asume que Clauss abrió personalmente la valija en Huelva. Históricamente, fue la Armada Española (con simpatías hacia el Eje) quien trasladó la valija a Madrid, extrajo los documentos y proporcionó copias a la inteligencia alemana antes de devolverlos. Clauss fue el catalizador local, pero la operación forense se hizo en connivencia con el Estado Mayor español en Madrid.</li>
            </ul>
        </div>
      `,
      reto: { pregunta: "¿Qué objetivo militar real querían ocultar los británicos haciéndole creer a Hitler que atacarían Grecia y Cerdeña?", opciones: ["La invasión de Normandía", "El desembarco aliado en Sicilia", "El asalto a Gibraltar"], respuestaCorrecta: 1 }
    },
    en: {
      titulo: "Story 6: Operation Mincemeat",
      epoca: "1943",
      personaje: "J.A. Rey, F. Haselden, A. Clauss & E. Montagu",
      direccion: "Marina Street, Huelva (Plus Code: 73RC+M5)",
      personajesInfo: "<p><strong>José Antonio Rey María:</strong> Historical figure. Huelva fisherman who discovered the body at sea.</p><p><strong>Francis Haselden:</strong> Historical figure. British Vice-Consul in Huelva, tasked with claiming the body.</p><p><strong>Adolf Clauss:</strong> Historical figure. Efficient German Abwehr spy stationed in Huelva.</p><p><strong>Ewen Montagu:</strong> Historical figure. British intelligence officer and mastermind of the military deception.</p>",
      escena: `
        <p><strong>JOSE ANTONIO REY MARIA:</strong> "That April 30, 1943 I went out before dawn to gather the sardine nets off La Bota beach. In the middle of the water floated something dark. I thought it was a cork buoy, but as I brought the boat closer my blood ran cold, it was an English officer in full dress uniform, yellow life jacket, and a black leather diplomatic pouch chained to his waist. I didn't know that the entire destiny of Europe had just fallen into my nets."</p>
        <p><strong>FRANCIS HASELDEN:</strong> "London had telegraphed me with strict instructions, act like a hysterical bureaucrat. From the British Vice-Consulate, I went to the Naval Command demanding the immediate return of Commander William Martin's body and, above all, his intact confidential correspondence. The more I insisted on protecting that pouch, the more it awakened the greed of the German agents in Huelva. Everything was going perfectly according to plan."</p>
        <p><strong>ADOLF CLAUSS:</strong> "Huelva was a hotbed of Abwehr agents. When my contacts in the Spanish army notified me of the discovery, I moved heaven and earth. We managed to open the pouch in secret, unfold the sealed letters of the British General Staff with a red-hot needle, and photograph every page before returning it to the English. The reports were conclusive, the Allies would not attack Sicily, but Greece and Sardinia. I sent the microfilms straight to the Führer's desk in Berlin."</p>
        <p><strong>EWEN MONTAGU:</strong> "The body actually belonged to Glyndwr Michael, a Welsh vagrant who died in London to whom we gave a life, a fictional love named Pam, and a posthumous mission. When we deciphered the message confirming that Hitler had moved his armored divisions from Sicily to Greece, I sent Churchill the sweetest telegram of the war: Mincemeat swallowed rod, line and sinker. Huelva was the bait and the Reich fell into the trap."</p>
      `,
      historia: `
        <p>During the spring of 1943, Huelva became the secret setting for the greatest military disinformation ruse of the 20th century: Operation Mincemeat. With a formally neutral but Axis-sympathizing Spain, British intelligence chose the waters of the Huelva estuary to set the ultimate trap for the German High Command.</p>
        <p><strong>The Miracle of La Bota Beach</strong><br>
        On April 30, 1943, the Punta Umbría fisherman José Antonio Rey María spotted a floating bundle while fishing aboard his boat. Upon approaching, he discovered the body of a supposed British officer dressed in a Royal Marines uniform with a leather diplomatic pouch chained to his body. The corpse was actually that of Glyndwr Michael, a Welsh vagrant whose body had been preserved in dry ice and dropped into the Huelva waters from the British submarine HMS Seraph.</p>
        <p><strong>The False Despair</strong><br>
        In London, intelligence officer Ewen Montagu and the team of the Double Cross System had created a millimeter-perfect fictional identity: Commander William Martin. In his uniform, they placed secret personal letters indicating that the imminent Allied landing in the Mediterranean would target Greece and Sardinia. From the British Vice-Consulate, Francis Haselden played his role perfectly, vehemently demanding the immediate delivery to the Spanish naval authorities.</p>
        <p><strong>The Abwehr Trap</strong><br>
        Huelva housed one of the most efficient networks of German military intelligence, the Abwehr, directed by Adolf Clauss. Alerted to the discovery, Clauss arranged for Nazi espionage experts to extract the documents without breaking the wax seals, photograph them, and return them. Fascinated by the strategic value of the documents, Adolf Hitler ordered the diversion of Panzer armored divisions towards the Balkans.</p>
        <p><strong>The Triumph of Sicily</strong><br>
        On May 2, 1943, the supposed Commander William Martin was buried with military honors in the Cemetery of La Soledad in Huelva. On July 10, 1943, when Allied troops landed in Sicily (Operation Husky), they encountered much less resistance than anticipated, saving thousands of lives and allowing the rapid fall of Benito Mussolini's fascist regime. To this day, William Martin's grave in the Huelva cemetery continues to receive fresh flowers, a silent monument to the most fascinating military deception in modern history.</p>
      `,
      glosario: `
        <ul>
          <li><strong>Abwehr:</strong> German military intelligence and counterintelligence service that had an active network of clandestine agents in Spanish port cities during WWII.</li>
          <li><strong>Double Cross System:</strong> Counterintelligence and disinformation section of the British secret service tasked with deceiving the Axis.</li>
          <li><strong>Glyndwr Michael:</strong> Real name of the Welsh citizen whose corpse was used anonymously by British intelligence to create the fictional character of Commander William Martin.</li>
          <li><strong>HMS Seraph:</strong> British Royal Navy submarine that transported William Martin's frozen body in a metal canister to the coast of Huelva.</li>
          <li><strong>Operation Husky:</strong> Code name for the Allied landing and invasion of Sicily, decisively facilitated by the success of the Mincemeat deception.</li>
          <li><strong>Operation Mincemeat:</strong> Allied disinformation stratagem devised by Ewen Montagu to divert German military attention from the invasion of Sicily.</li>
          <li><strong>La Bota beach:</strong> Extensive sandy area in Punta Umbria where the estuary currents deposited William Martin's body.</li>
          <li><strong>William Martin's grave:</strong> Grave located in the Cemetery of La Soledad in Huelva where Glyndwr Michael's remains rest under his assigned British military identity.</li>
          <li><strong>Diplomatic pouch:</strong> Official leather briefcase protected by international immunity that military couriers carried chained to avoid theft.</li>
          <li><strong>British Vice-Consulate:</strong> Diplomatic headquarters of the United Kingdom, key to the protection of mining commerce and the coordination of Allied activities.</li>
        </ul>
      `,
      rigor: `
        <div class="rigor-box">
            <div class="rigor-score">Historical Accuracy: <strong>99%</strong></div>
            <h4>✅ Strengths:</h4>
            <ul>
                <li>Impeccable documentation. The names of the fisherman (José Antonio Rey María), the real identity of the corpse (Glyndwr Michael), the British consul (Haselden), the Abwehr spy (Clauss), and the strategist (Montagu) perfectly match declassified British archives.</li>
                <li>The operational details (dry ice in the submarine, the use of incandescent needles to avoid breaking wax seals) are real and fascinating.</li>
            </ul>
            <h4>⚠️ Areas for Improvement:</h4>
            <ul>
                <li>The scene assumes that Clauss personally opened the pouch in Huelva. Historically, it was the Spanish Navy (with Axis sympathies) that transferred the pouch to Madrid, carefully extracted the documents, and provided copies to German intelligence before returning the originals. Clauss was the local catalyst, but the forensic operation was done in collusion with the Spanish General Staff in Madrid.</li>
            </ul>
        </div>
      `,
      reto: { pregunta: "What real military objective did the British want to hide by making Hitler believe they would attack Greece and Sardinia?", opciones: ["The invasion of Normandy", "The Allied landing in Sicily", "The assault on Gibraltar"], respuestaCorrecta: 1 }
    },
    fr: {
      titulo: "Histoire 6 : Opération Mincemeat",
      epoca: "1943",
      personaje: "J.A. Rey, F. Haselden, A. Clauss et E. Montagu",
      direccion: "Rue Marina, Huelva (Plus Code: 73RC+M5)",
      personajesInfo: "<p><strong>José Antonio Rey María :</strong> Figure historique. Pêcheur de Huelva qui a découvert le corps en mer.</p><p><strong>Francis Haselden :</strong> Figure historique. Vice-consul britannique à Huelva, chargé de réclamer le corps.</p><p><strong>Adolf Clauss :</strong> Figure historique. Efficace espion allemand de l'Abwehr en poste à Huelva.</p><p><strong>Ewen Montagu :</strong> Figure historique. Officier de renseignement britannique et architecte de la tromperie militaire.</p>",
      escena: `
        <p><strong>JOSÉ ANTONIO REY MARÍA :</strong> « Ce 30 avril 1943, je suis sorti avant l'aube pour relever les filets à sardines face à la plage de La Bota. Au milieu de l'eau flottait quelque chose de sombre. J'ai cru que c'était une bouée en liège, mais en approchant la barque mon sang s'est glacé, c'était un officier anglais en uniforme d'apparat, gilet de sauvetage jaune et une valise diplomatique en cuir noir enchaînée à la taille. Je ne savais pas que dans mes filets venait de tomber le destin entier de l'Europe. »</p>
        <p><strong>FRANCIS HASELDEN :</strong> « Londres m'avait télégraphié avec des instructions strictes, agissez comme un bureaucrate hystérique. Depuis le Vice-consulat Britannique, je suis allé au Commandement de la Marine exiger la restitution immédiate du corps du Commandant William Martin et surtout de sa correspondance confidentielle intacte. Plus j'insistais pour protéger cette valise, plus cela éveillait la cupidité des agents allemands à Huelva. Tout se déroulait au millimètre près selon le plan. »</p>
        <p><strong>ADOLF CLAUSS :</strong> « Huelva était une fourmilière d'agents de l'Abwehr. Quand mes contacts dans l'armée espagnole m'ont averti de la découverte, j'ai remué ciel et terre. Nous avons réussi à ouvrir la valise en secret, à déplier les lettres scellées de l'État-Major britannique avec une aiguille chauffée au rouge et à photographier chaque page avant de la rendre aux Anglais. Les rapports étaient concluants, les alliés n'attaqueraient pas la Sicile, mais la Grèce et la Sardaigne. J'ai envoyé les microfilms directement sur le bureau du Führer à Berlin. »</p>
        <p><strong>EWEN MONTAGU :</strong> « Le corps appartenait en réalité à Glyndwr Michael, un sans-abri gallois décédé à Londres à qui nous avons donné une vie, un amour de fiction appelé Pam et une mission posthume. Quand nous avons déchiffré le message qui confirmait qu'Hitler avait transféré ses divisions blindées de Sicile en Grèce, j'ai envoyé à Churchill le télégramme le plus doux de la guerre : Mincemeat avalé avec l'hameçon, la ligne et le plomb. Huelva a été l'appât et le Reich est tombé dans le piège. »</p>
      `,
      historia: `
        <p>Au printemps 1943, Huelva est devenue le théâtre secret de la plus grande ruse de désinformation militaire du XXe siècle : l'Opération Mincemeat. Avec une Espagne neutre mais sympathisante de l'Axe, les services de renseignement britanniques ont choisi les eaux de l'estuaire de Huelva pour tendre le piège ultime au Haut Commandement allemand.</p>
        <p><strong>Le Miracle de la Plage de La Bota</strong><br>
        Le 30 avril 1943, le pêcheur de Punta Umbría, José Antonio Rey María, a repéré un paquet flottant alors qu'il pêchait à bord de son bateau. En s'approchant, il a découvert le corps d'un supposé officier britannique vêtu d'un uniforme des Royal Marines, avec une valise diplomatique en cuir attachée à son corps par une chaîne. Le cadavre était en réalité celui de Glyndwr Michael, un sans-abri gallois dont le corps avait été conservé dans la glace carbonique et largué dans les eaux de Huelva depuis le sous-marin britannique HMS Seraph.</p>
        <p><strong>Le Faux Désespoir</strong><br>
        À Londres, l'officier de renseignement Ewen Montagu et l'équipe du Système Double Croix avaient créé une identité fictive millimétrée : le Commandant William Martin. Dans son uniforme, ils ont introduit des lettres personnelles secrètes indiquant que le débarquement imminent en Méditerranée aurait pour objectif la Grèce et la Sardaigne. Depuis le Vice-consulat Britannique, Francis Haselden a joué son rôle à la perfection, réclamant avec véhémence aux autorités navales espagnoles la remise immédiate.</p>
        <p><strong>Le Piège de l'Abwehr</strong><br>
        Huelva abritait l'un des réseaux les plus efficaces du renseignement militaire allemand, l'Abwehr, dirigé par Adolf Clauss. Alerté de la découverte, Clauss a fait extraire les documents par des experts de l'espionnage nazi sans briser les sceaux de cire, les ont photographiés. Fasciné par la valeur stratégique des documents, Adolf Hitler a ordonné de dévier les divisions blindées Panzer vers les Balkans.</p>
        <p><strong>Le Triomphe de la Sicile</strong><br>
        Le 2 mai 1943, le supposé Commandant William Martin a été enterré avec les honneurs militaires dans le Cimetière de La Soledad de Huelva. Le 10 juillet 1943, lorsque les troupes alliées ont débarqué en Sicile (Opération Husky), elles ont rencontré une résistance bien inférieure aux prévisions, sauvant des milliers de vies et permettant la chute rapide du régime fasciste de Benito Mussolini. À ce jour, la tombe de William Martin dans le cimetière de Huelva continue de recevoir des fleurs fraîches, convertie en un monument silencieux à la tromperie militaire la plus fascinante de l'histoire moderne.</p>
      `,
      glosario: `
        <ul>
          <li><strong>Abwehr :</strong> Service de renseignement militaire allemand disposant d'un réseau actif d'agents clandestins dans les villes portuaires espagnoles pendant la Seconde Guerre mondiale.</li>
          <li><strong>Système Double Croix :</strong> Section de contre-espionnage et d'intoxication informative du service secret britannique chargée de tromper l'Axe.</li>
          <li><strong>Glyndwr Michael :</strong> Vrai nom du citoyen gallois dont le cadavre a été utilisé anonymement par les services de renseignement britanniques pour créer le personnage fictif du Commandant William Martin.</li>
          <li><strong>HMS Seraph :</strong> Sous-marin de la Royal Navy britannique qui a transporté le corps congelé de William Martin dans un conteneur métallique jusqu'à la côte de Huelva.</li>
          <li><strong>Opération Husky :</strong> Nom de code du débarquement et de l'invasion alliée de la Sicile, facilité de manière décisive par le succès de la tromperie Mincemeat.</li>
          <li><strong>Opération Mincemeat :</strong> Stratagème de désinformation alliée conçu par Ewen Montagu pour détourner l'attention militaire allemande de l'invasion de la Sicile.</li>
          <li><strong>Plage de La Bota :</strong> Vaste étendue de sable de Punta Umbría où les courants de l'estuaire ont déposé le cadavre de William Martin.</li>
          <li><strong>Tombe de William Martin :</strong> Sépulture située dans le Cimetière de La Soledad à Huelva où reposent les restes de Glyndwr Michael sous l'identité militaire britannique qui lui a été assignée.</li>
          <li><strong>Valise diplomatique :</strong> Mallette officielle protégée par l'immunité internationale que les courriers militaires portaient enchaînée au poignet pour éviter les vols.</li>
          <li><strong>Vice-consulat Britannique :</strong> Siège diplomatique du Royaume-Uni clé pour la protection du commerce minier et la coordination des activités alliées.</li>
        </ul>
      `,
      rigor: `
        <div class="rigor-box">
            <div class="rigor-score">Précision Historique : <strong>99%</strong></div>
            <h4>✅ Points Forts :</h4>
            <ul>
                <li>Documentation impeccable. Les noms du pêcheur (José Antonio Rey María), la véritable identité du cadavre (Glyndwr Michael), le consul britannique (Haselden), l'espion de l'Abwehr (Clauss) et le stratège (Montagu) correspondent parfaitement aux archives britanniques déclassifiées.</li>
                <li>Les détails opérationnels (la glace carbonique dans le sous-marin, l'utilisation d'aiguilles incandescentes pour ne pas briser les sceaux de cire) sont réels.</li>
            </ul>
            <h4>⚠️ À Améliorer :</h4>
            <ul>
                <li>La scène suppose que Clauss a personnellement ouvert la valise à Huelva. Historiquement, c'est la marine espagnole (avec des sympathies pour l'Axe) qui a transféré la valise à Madrid, extrait les documents et fourni des copies aux services de renseignement allemands avant de rendre les originaux. Clauss fut le catalyseur local, mais l'opération a été réalisée de connivence avec l'état-major espagnol à Madrid.</li>
            </ul>
        </div>
      `,
      reto: { pregunta: "Quel véritable objectif militaire les Britanniques voulaient-ils cacher en faisant croire à Hitler qu'ils attaqueraient la Grèce et la Sardaigne ?", opciones: ["L'invasion de la Normandie", "Le débarquement allié en Sicile", "L'assaut sur Gibraltar"], respuestaCorrecta: 1 }
    }
  }
];

let historiaActual = null;
let mapaLeaflet = null;
let marcadoresLeaflet = [];

const viewHome = document.getElementById('home-view');
const viewHistoria = document.getElementById('historia-view');
const viewMap = document.getElementById('map-view');
const containerMenu = document.getElementById('historias-menu');
const audioEl = document.getElementById('audio-element');
const btnPlayPause = document.getElementById('btn-play-pause');
const audioProgress = document.getElementById('audio-progress');
const playlistContainer = document.getElementById('audio-playlist');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

const imageModal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const historiaImg = document.getElementById('historia-img');
const modalClose = document.querySelector('.modal-close');

const glossaryPopover = document.getElementById('glossary-popover');
const glossaryPopoverText = document.getElementById('glossary-popover-text');

const legalModal = document.getElementById('legal-modal');
const btnLegal = document.getElementById('btn-legal');
const legalModalClose = document.getElementById('legal-modal-close');

function initApp() {
    if(localStorage.getItem('huelvaLang')) {
        currentLang = localStorage.getItem('huelvaLang');
    }
    updateUITexts();
    renderMenu();
    
    document.getElementById('btn-back-home').addEventListener('click', goHome);
    document.getElementById('btn-show-map').addEventListener('click', showMap);
    document.getElementById('btn-back-historia').addEventListener('click', backToHistoria);
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if(btn.dataset.lang === currentLang) btn.classList.add('active');
        else btn.classList.remove('active');
        
        btn.addEventListener('click', (e) => {
            const selectedLang = e.target.dataset.lang;
            if(selectedLang !== currentLang) {
                document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                setLanguage(selectedLang);
            }
        });
    });

    btnPlayPause.addEventListener('click', toggleAudio);
    audioEl.addEventListener('timeupdate', updateProgress);
    audioProgress.addEventListener('input', seekAudio);

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.target));
    });

    historiaImg.addEventListener('click', () => {
        if (historiaImg.src) {
            modalImg.src = historiaImg.src;
            imageModal.classList.remove('hidden');
        }
    });

    imageModal.addEventListener('click', () => {
        imageModal.classList.add('hidden');
    });

    btnLegal.addEventListener('click', () => legalModal.classList.remove('hidden'));
    legalModalClose.addEventListener('click', () => legalModal.classList.add('hidden'));
    legalModal.addEventListener('click', (e) => {
        if (e.target === legalModal) legalModal.classList.add('hidden');
    });

    document.querySelector('.popover-close').addEventListener('click', hideGlossaryPopover);
    document.addEventListener('click', (e) => {
        const termEl = e.target.closest('.glossary-term');
        if (termEl) {
            showGlossaryPopover(termEl);
            return;
        }
        if (!e.target.closest('#glossary-popover')) {
            hideGlossaryPopover();
        }
    });
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('huelvaLang', lang);
    updateUITexts();
    
    if(viewHome.classList.contains('active')) {
        renderMenu();
    } else if (viewHistoria.classList.contains('active') && historiaActual) {
        loadHistoria(historiaActual); 
    } else if (viewMap.classList.contains('active') && historiaActual) {
        showMap();
    }
}

function updateUITexts() {
    const t = uiTranslations[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if(t[key]) el.textContent = t[key];
    });
}

function switchTab(targetId) {
    tabBtns.forEach(b => b.classList.remove('active'));
    tabPanes.forEach(p => p.classList.remove('active'));

    const selectedBtn = document.querySelector(`[data-target="${targetId}"]`);
    const selectedPane = document.getElementById(targetId);
    
    if(selectedBtn && selectedPane) {
        selectedBtn.classList.add('active');
        selectedPane.classList.add('active');
    }
}

function renderMenu() {
    containerMenu.innerHTML = '';
    historiasData.forEach(historia => {
        const langData = historia[currentLang];
        const btn = document.createElement('button');
        btn.className = 'btn-historia';
        
        const spanEpoca = document.createElement('span');
        spanEpoca.className = 'epoca';
        spanEpoca.textContent = langData.epoca;
        
        const spanTitulo = document.createElement('span');
        spanTitulo.className = 'titulo';
        spanTitulo.textContent = langData.titulo;
        
        btn.appendChild(spanEpoca);
        btn.appendChild(spanTitulo);
        
        btn.addEventListener('click', () => loadHistoria(historia));
        containerMenu.appendChild(btn);
    });
}

function loadHistoria(historia) {
    historiaActual = historia;
    const langData = historia[currentLang];
    
    document.getElementById('historia-img').src = historia.imgUrl;
    document.getElementById('historia-titulo').textContent = langData.titulo;
    document.getElementById('historia-epoca').textContent = langData.epoca;
    document.getElementById('historia-personaje').textContent = langData.personaje;
    
    document.getElementById('historia-personajes-desc').innerHTML = langData.personajesInfo;
    
    const glossaryTerms = extractGlossaryTerms(langData.glosario);
    document.getElementById('tab-escena').innerHTML = linkifyGlossaryTerms(langData.escena, glossaryTerms);
    document.getElementById('tab-historia').innerHTML = linkifyGlossaryTerms(langData.historia, glossaryTerms);
    document.getElementById('tab-glosario').innerHTML = langData.glosario;
    document.getElementById('tab-rigor').innerHTML = langData.rigor;
    
    switchTab('tab-escena');
    
    document.getElementById('reto-pregunta').textContent = langData.reto.pregunta;
    const opcionesContainer = document.getElementById('reto-opciones');
    opcionesContainer.innerHTML = '';
    
    const feedbackEl = document.getElementById('reto-feedback');
    feedbackEl.className = 'hidden';
    
    langData.reto.opciones.forEach((opcion, index) => {
        const btn = document.createElement('button');
        btn.className = 'btn-opcion';
        btn.textContent = opcion;
        btn.onclick = () => checkRespuesta(btn, index, langData.reto.respuestaCorrecta, opcionesContainer);
        opcionesContainer.appendChild(btn);
    });

    playlistContainer.innerHTML = '';
    historia.audios.forEach((audioObj, index) => {
        const trackBtn = document.createElement('button');
        trackBtn.className = 'track-btn';
        if (index === 0) trackBtn.classList.add('active');
        trackBtn.textContent = audioObj.personaje;
        trackBtn.onclick = () => playTrack(audioObj.url, trackBtn);
        playlistContainer.appendChild(trackBtn);
    });

    if (historia.audios.length > 0) {
        audioEl.src = historia.audios[0].url;
    }
    
    btnPlayPause.textContent = '▶';
    audioProgress.value = 0;

    viewHome.classList.remove('active');
    viewHistoria.classList.remove('hidden');
    viewHistoria.classList.add('active');
    
    viewHistoria.scrollTop = 0; 
}

function playTrack(url, btnElement) {
    document.querySelectorAll('.track-btn').forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');
    
    audioEl.src = url;
    audioEl.play().catch(e => console.log("Esperando interacción del usuario."));
    btnPlayPause.textContent = '⏸';
    audioProgress.value = 0;
}

function checkRespuesta(btn, seleccion, correcta, contenedorOpciones) {
    const feedback = document.getElementById('reto-feedback');
    feedback.classList.remove('hidden');
    
    Array.from(contenedorOpciones.children).forEach(b => b.style.pointerEvents = 'none');
    
    if(seleccion === correcta) {
        btn.classList.add('correcta');
        feedback.textContent = uiTranslations[currentLang].feedbackCorrect;
        feedback.style.color = "#155724";
    } else {
        btn.classList.add('incorrecta');
        feedback.textContent = uiTranslations[currentLang].feedbackIncorrect;
        feedback.style.color = "#721c24";
    }
}

function toggleAudio() {
    if (audioEl.paused) {
        try {
            audioEl.play();
            btnPlayPause.textContent = '⏸';
        } catch(e) {
            console.log("Esperando interacción del usuario.");
        }
    } else {
        audioEl.pause();
        btnPlayPause.textContent = '▶';
    }
}

function updateProgress() {
    if(!isNaN(audioEl.duration)) {
        const percent = (audioEl.currentTime / audioEl.duration) * 100;
        audioProgress.value = percent;
    }
}

function seekAudio() {
    if(!isNaN(audioEl.duration)) {
        const time = (audioProgress.value * audioEl.duration) / 100;
        audioEl.currentTime = time;
    }
}

function showMap() {
    viewHistoria.classList.remove('active');
    viewHistoria.classList.add('hidden');
    viewMap.classList.remove('hidden');
    viewMap.classList.add('active');
    
    const t = uiTranslations[currentLang];
    document.getElementById('map-location-title').textContent = t.mapDestination + historiaActual[currentLang].direccion;

    if (typeof L === 'undefined') {
        document.getElementById('offline-warning').classList.remove('hidden');
        document.getElementById('real-map').style.backgroundColor = "#dcb383";
        return;
    }

    if(!mapaLeaflet) {
        mapaLeaflet = L.map('real-map').setView([historiaActual.lat, historiaActual.lng], 14);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap'
        }).addTo(mapaLeaflet);
    } else {
        mapaLeaflet.setView([historiaActual.lat, historiaActual.lng], 14);
    }

    marcadoresLeaflet.forEach(m => mapaLeaflet.removeLayer(m));
    marcadoresLeaflet = [];

    historiasData.forEach(h => {
        const isActive = (h.id === historiaActual.id);
        const langData = h[currentLang];
        
        const customIcon = L.divIcon({
            className: 'custom-div-icon',
            html: `<div class="custom-map-marker ${isActive ? 'marker-active' : 'marker-inactive'}">${h.id}</div>`,
            iconSize: [32, 32],
            iconAnchor: [16, 16] 
        });

        const marker = L.marker([h.lat, h.lng], {icon: customIcon}).addTo(mapaLeaflet);
        
        marker.bindTooltip(`<b>${langData.titulo}</b><br>${langData.epoca}`, {
            direction: 'top',
            offset: [0, -15],
            opacity: 0.95
        });

        if(isActive) {
            marker.bindPopup(`<b>${langData.titulo}</b><br>${langData.direccion}<br><i>${t.youAreHere}</i>`).openPopup();
        } else {
            marker.bindPopup(`<b>${langData.titulo}</b><br>${langData.direccion}`);
        }

        marcadoresLeaflet.push(marker);
    });
        
    setTimeout(() => mapaLeaflet.invalidateSize(), 300);
}

function goHome() {
    audioEl.pause();
    viewHistoria.classList.remove('active');
    viewHistoria.classList.add('hidden');
    viewHome.classList.add('active');
}

function backToHistoria() {
    viewMap.classList.remove('active');
    viewMap.classList.add('hidden');
    viewHistoria.classList.remove('hidden');
    viewHistoria.classList.add('active');
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function extractGlossaryTerms(glosarioHtml) {
    const terms = [];
    const liRegex = /<li>\s*<strong>(.*?):?<\/strong>\s*(.*?)\s*<\/li>/gs;
    let match;
    while ((match = liRegex.exec(glosarioHtml)) !== null) {
        const term = match[1].trim();
        const definition = match[2].trim();
        if (term && definition) terms.push({ term, definition });
    }
    return terms;
}

function linkifyGlossaryTerms(html, terms) {
    if (!terms || terms.length === 0) return html;

    const sorted = [...terms].sort((a, b) => b.term.length - a.term.length);
    const pattern = sorted.map(t => escapeRegExp(t.term)).join('|');
    if (!pattern) return html;
    const combinedRegex = new RegExp('\\b(' + pattern + ')\\b', 'gi');

    const parts = html.split(/(<[^>]+>)/g);

    return parts.map(part => {
        if (part.startsWith('<')) return part;
        return part.replace(combinedRegex, (match) => {
            const termObj = sorted.find(t => t.term.toLowerCase() === match.toLowerCase());
            const def = termObj ? termObj.definition : '';
            const safeDef = def.replace(/"/g, '&quot;');
            return `<span class="glossary-term" data-def="${safeDef}">${match}</span>`;
        });
    }).join('');
}

function showGlossaryPopover(termEl) {
    glossaryPopoverText.innerHTML = `<strong>${termEl.textContent}:</strong> ${termEl.dataset.def}`;
    
    glossaryPopover.style.visibility = 'hidden';
    glossaryPopover.classList.remove('hidden');
    
    const rect = termEl.getBoundingClientRect();
    const popoverWidth = Math.min(280, window.innerWidth - 20);
    glossaryPopover.style.width = popoverWidth + 'px';
    
    const popoverHeight = glossaryPopover.offsetHeight;
    
    let left = rect.left + (rect.width / 2) - (popoverWidth / 2);
    left = Math.max(10, Math.min(left, window.innerWidth - popoverWidth - 10));
    
    let top = rect.bottom + 10;
    let isAbove = false;
    
    if (top + popoverHeight > window.innerHeight && rect.top - popoverHeight - 10 > 0) {
        isAbove = true;
        top = rect.top - popoverHeight - 10;
    }
    
    if (isAbove) {
        glossaryPopover.classList.add('popover-above');
    } else {
        glossaryPopover.classList.remove('popover-above');
    }
    
    glossaryPopover.style.left = left + 'px';
    glossaryPopover.style.top = top + 'px';
    
    const arrowEl = document.getElementById('popover-arrow');
    if (arrowEl) {
        const centerOfWord = rect.left + (rect.width / 2);
        let arrowLeft = centerOfWord - left - 8; 
        arrowLeft = Math.max(12, Math.min(arrowLeft, popoverWidth - 28));
        arrowEl.style.left = arrowLeft + 'px';
    }
    
    glossaryPopover.style.visibility = 'visible';
}

function hideGlossaryPopover() {
    glossaryPopover.classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', initApp);