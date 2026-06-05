package name.generator.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.Set;

import org.springframework.stereotype.Service;

import name.generator.model.Gender;
import name.generator.model.GreekName;
import name.generator.model.Style;

@Service
public class NameService {

    // Clase interna para representar una Raíz
    private record Root(String text, String meaning, Style style) {}

    // Clase interna para representar un Sufijo
    private record Suffix(String text, Gender gender, String meaning, Style style) {}

    // Clase interna para representar un Conector
    private record Connector(String text, String category, String meaning, Style style) {}

    private final List<Root> roots = new ArrayList<>();
    private final List<Suffix> suffixes = new ArrayList<>();
    private final List<Connector> simpleConnectors = new ArrayList<>();
    private final List<Connector> complexInfixes = new ArrayList<>();
    private final Random random = new Random();

    public NameService() {
        initializeDatabase();
    }

    private void initializeDatabase() {
        // ==========================================
        // 1. COMPONENTES GRIEGOS (Style.GREEK)
        // ==========================================
        
        // Raíces Griegas
        roots.add(new Root("Theo", "la divinidad", Style.GREEK));
        roots.add(new Root("Thea", "la divinidad", Style.GREEK));
        roots.add(new Root("Astro", "las estrellas", Style.GREEK));
        roots.add(new Root("Aster", "el cosmos", Style.GREEK));
        roots.add(new Root("Helio", "el sol", Style.GREEK));
        roots.add(new Root("Seleno", "el brillo lunar", Style.GREEK));
        roots.add(new Root("Krono", "el tiempo", Style.GREEK));
        roots.add(new Root("Chrono", "las eras", Style.GREEK));
        roots.add(new Root("Geo", "la tierra", Style.GREEK));
        roots.add(new Root("Gaea", "el suelo primordial", Style.GREEK));
        roots.add(new Root("Aero", "el aire y viento", Style.GREEK));
        roots.add(new Root("Hydro", "el agua fluida", Style.GREEK));
        roots.add(new Root("Pyro", "el fuego ardiente", Style.GREEK));
        roots.add(new Root("Demeto", "la tierra cultivada", Style.GREEK));
        roots.add(new Root("Kalo", "la belleza", Style.GREEK));
        roots.add(new Root("Kali", "lo estético", Style.GREEK));
        roots.add(new Root("Arki", "el liderazgo", Style.GREEK));
        roots.add(new Root("Archo", "el gobernante", Style.GREEK));
        roots.add(new Root("Arke", "el guía principal", Style.GREEK));
        roots.add(new Root("Andro", "la fuerza humana", Style.GREEK));
        roots.add(new Root("Antro", "la humanidad", Style.GREEK));
        roots.add(new Root("Philo", "el amor afín", Style.GREEK));
        roots.add(new Root("Phile", "el amigo fiel", Style.GREEK));
        roots.add(new Root("Xeno", "lo misterioso y extranjero", Style.GREEK));
        roots.add(new Root("Neo", "lo nuevo y moderno", Style.GREEK));
        roots.add(new Root("Paleo", "la sabiduría antigua", Style.GREEK));
        roots.add(new Root("Mega", "lo magnífico", Style.GREEK));
        roots.add(new Root("Megalo", "lo grande", Style.GREEK));
        roots.add(new Root("Micro", "lo sutil y pequeño", Style.GREEK));
        roots.add(new Root("Proto", "lo primero y primigenio", Style.GREEK));
        roots.add(new Root("Cleo", "la gloria y fama", Style.GREEK));
        roots.add(new Root("Kleo", "el renombre", Style.GREEK));
        roots.add(new Root("Nik", "la victoria", Style.GREEK));
        roots.add(new Root("Niko", "lo triunfante", Style.GREEK));
        roots.add(new Root("Sopho", "la sabiduría", Style.GREEK));
        roots.add(new Root("Sofi", "el conocimiento", Style.GREEK));
        roots.add(new Root("Poly", "lo abundante", Style.GREEK));
        roots.add(new Root("Tele", "lo lejano y visionario", Style.GREEK));
        roots.add(new Root("Aristo", "lo excelente y mejor", Style.GREEK));
        roots.add(new Root("Demo", "el pueblo", Style.GREEK));
        roots.add(new Root("Eu", "lo próspero y bueno", Style.GREEK));
        roots.add(new Root("Irena", "la paz serena", Style.GREEK));
        roots.add(new Root("Leon", "la fuerza del león", Style.GREEK));
        roots.add(new Root("Lys", "la liberación", Style.GREEK));
        roots.add(new Root("Mel", "el canto dulce", Style.GREEK));
        roots.add(new Root("Pan", "lo universal y todo", Style.GREEK));
        roots.add(new Root("Zeno", "el firmamento de Zeus", Style.GREEK));
        roots.add(new Root("Kalli", "lo noble y bello", Style.GREEK));

        // Conectores Griegos Simples
        simpleConnectors.add(new Connector("o", "vocal", "", Style.GREEK));
        simpleConnectors.add(new Connector("i", "vocal", "", Style.GREEK));
        simpleConnectors.add(new Connector("a", "vocal", "", Style.GREEK));
        simpleConnectors.add(new Connector("e", "vocal", "", Style.GREEK));

        // Conectores Griegos Complejos (Infijos)
        complexInfixes.add(new Connector("and", "force", "la fuerza de", Style.GREEK));
        complexInfixes.add(new Connector("ant", "force", "el brillo de", Style.GREEK));
        complexInfixes.add(new Connector("onit", "force", "la firmeza de", Style.GREEK));
        complexInfixes.add(new Connector("ist", "force", "el seguidor de", Style.GREEK));
        complexInfixes.add(new Connector("orist", "force", "el creador de", Style.GREEK));
        complexInfixes.add(new Connector("althe", "lyric", "la curación de", Style.GREEK));
        complexInfixes.add(new Connector("eleu", "lyric", "la libertad de", Style.GREEK));
        complexInfixes.add(new Connector("io", "lyric", "la gracia de", Style.GREEK));
        complexInfixes.add(new Connector("eu", "lyric", "la bondad de", Style.GREEK));
        complexInfixes.add(new Connector("ae", "lyric", "la brisa de", Style.GREEK));
        complexInfixes.add(new Connector("opol", "structural", "la ciudad de", Style.GREEK));
        complexInfixes.add(new Connector("ast", "structural", "el espacio de", Style.GREEK));
        complexInfixes.add(new Connector("esio", "structural", "el origen de", Style.GREEK));
        complexInfixes.add(new Connector("onid", "structural", "el linaje de", Style.GREEK));

        // Sufijos Griegos Masculinos
        suffixes.add(new Suffix("os", Gender.MALE, "aquel que representa", Style.GREEK));
        suffixes.add(new Suffix("is", Gender.MALE, "noble guardián de", Style.GREEK));
        suffixes.add(new Suffix("as", Gender.MALE, "fuerte como", Style.GREEK));
        suffixes.add(new Suffix("es", Gender.MALE, "señor de", Style.GREEK));
        suffixes.add(new Suffix("on", Gender.MALE, "el gran protector de", Style.GREEK));
        suffixes.add(new Suffix("us", Gender.MALE, "la fuerza clásica de", Style.GREEK));
        suffixes.add(new Suffix("ander", Gender.MALE, "hombre fuerte de", Style.GREEK));
        suffixes.add(new Suffix("andro", Gender.MALE, "protector de", Style.GREEK));
        suffixes.add(new Suffix("ides", Gender.MALE, "hijo de", Style.GREEK));
        suffixes.add(new Suffix("ades", Gender.MALE, "descendiente de", Style.GREEK));
        suffixes.add(new Suffix("or", Gender.MALE, "el ejecutor de", Style.GREEK));
        suffixes.add(new Suffix("ax", Gender.MALE, "guerrero feroz de", Style.GREEK));
        suffixes.add(new Suffix("crates", Gender.MALE, "el que gobierna con", Style.GREEK));
        suffixes.add(new Suffix("bulus", Gender.MALE, "consejero de", Style.GREEK));
        suffixes.add(new Suffix("laus", Gender.MALE, "líder del pueblo guiado por", Style.GREEK));
        suffixes.add(new Suffix("machus", Gender.MALE, "combatiente de", Style.GREEK));
        suffixes.add(new Suffix("phanes", Gender.MALE, "aquel que brilla con", Style.GREEK));
        suffixes.add(new Suffix("phon", Gender.MALE, "la voz que proclama", Style.GREEK));

        // Sufijos Griegos Femeninos
        suffixes.add(new Suffix("a", Gender.FEMALE, "aquella que posee gracia de", Style.GREEK));
        suffixes.add(new Suffix("ia", Gender.FEMALE, "la esencia mística de", Style.GREEK));
        suffixes.add(new Suffix("is", Gender.FEMALE, "la fuerza y gracia de", Style.GREEK));
        suffixes.add(new Suffix("ne", Gender.FEMALE, "suave melodía de", Style.GREEK));
        suffixes.add(new Suffix("ea", Gender.FEMALE, "belleza etérea de", Style.GREEK));
        suffixes.add(new Suffix("pe", Gender.FEMALE, "la que habla con la voz de", Style.GREEK));
        suffixes.add(new Suffix("thea", Gender.FEMALE, "divina protectora de", Style.GREEK));
        suffixes.add(new Suffix("ice", Gender.FEMALE, "la victoria surgida de", Style.GREEK));
        suffixes.add(new Suffix("nike", Gender.FEMALE, "la victoria de", Style.GREEK));
        suffixes.add(new Suffix("otis", Gender.FEMALE, "sabiduría antigua de", Style.GREEK));
        suffixes.add(new Suffix("usa", Gender.FEMALE, "ninfa protectora de", Style.GREEK));
        suffixes.add(new Suffix("dora", Gender.FEMALE, "regalo de", Style.GREEK));
        suffixes.add(new Suffix("meda", Gender.FEMALE, "guardiana de", Style.GREEK));
        suffixes.add(new Suffix("patra", Gender.FEMALE, "gloria de la herencia de", Style.GREEK));
        suffixes.add(new Suffix("phila", Gender.FEMALE, "amiga de", Style.GREEK));
        suffixes.add(new Suffix("ra", Gender.FEMALE, "el reino de", Style.GREEK));

        // Sufijos Griegos Neutros
        suffixes.add(new Suffix("on", Gender.NEUTER, "esencia mineral / científica de", Style.GREEK));
        suffixes.add(new Suffix("ma", Gender.NEUTER, "manifestación concreta de", Style.GREEK));
        suffixes.add(new Suffix("ax", Gender.NEUTER, "fuerza industrial de", Style.GREEK));
        suffixes.add(new Suffix("as", Gender.NEUTER, "entidad colectiva de", Style.GREEK));
        suffixes.add(new Suffix("ox", Gender.NEUTER, "visión moderna de", Style.GREEK));
        suffixes.add(new Suffix("or", Gender.NEUTER, "energía neutral de", Style.GREEK));
        suffixes.add(new Suffix("ic", Gender.NEUTER, "sistema de", Style.GREEK));
        suffixes.add(new Suffix("is", Gender.NEUTER, "núcleo de", Style.GREEK));
        suffixes.add(new Suffix("ra", Gender.NEUTER, "dominio de", Style.GREEK));

        // ==========================================
        // 2. COMPONENTES NÓRDICOS (Style.NORDIC)
        // ==========================================
        
        // Raíces Nórdicas (A. Teológicas, B. Naturaleza, C. Guerra)
        roots.add(new Root("Thor", "el trueno (dios Thor)", Style.NORDIC));
        roots.add(new Root("Tor", "el trueno (dios Thor)", Style.NORDIC));
        roots.add(new Root("Odin", "la furia y sabiduría (dios Odín)", Style.NORDIC));
        roots.add(new Root("Od", "la furia (dios Odín)", Style.NORDIC));
        roots.add(new Root("Frey", "el señor (dios Freyr)", Style.NORDIC));
        roots.add(new Root("Freyr", "la fertilidad (dios Freyr)", Style.NORDIC));
        roots.add(new Root("As", "el entorno de los dioses (Asgard)", Style.NORDIC));
        roots.add(new Root("Ans", "el entorno de los dioses (Asgard)", Style.NORDIC));
        roots.add(new Root("Ing", "el dios primordial Ingwaz", Style.NORDIC));
        roots.add(new Root("Ingu", "el dios primordial Ingwaz", Style.NORDIC));
        roots.add(new Root("Ragn", "el consejo de los dioses y el destino", Style.NORDIC));
        roots.add(new Root("Ragne", "el destino y Ragnarok", Style.NORDIC));
    
        roots.add(new Root("Bjorn", "el oso y la fuerza bruta", Style.NORDIC));
        roots.add(new Root("Biorn", "el oso y la fuerza bruta", Style.NORDIC));
        roots.add(new Root("Ulf", "el lobo", Style.NORDIC));
        roots.add(new Root("Ulv", "el lobo", Style.NORDIC));
        roots.add(new Root("Arn", "el águila", Style.NORDIC));
        roots.add(new Root("Arin", "el águila", Style.NORDIC));
        roots.add(new Root("Eir", "la protección y paz", Style.NORDIC));
        roots.add(new Root("Ey", "la isla y el mar", Style.NORDIC));
        roots.add(new Root("Frost", "la escarcha y el frío extremo", Style.NORDIC));
        roots.add(new Root("Snae", "la nieve", Style.NORDIC));
        roots.add(new Root("Sne", "la nieve", Style.NORDIC));
        roots.add(new Root("Is", "el hielo", Style.NORDIC));
        roots.add(new Root("Ice", "el hielo", Style.NORDIC));
        roots.add(new Root("Fjord", "el fiordo y el mar entre montañas", Style.NORDIC));
        roots.add(new Root("Fiord", "el fiordo y el mar entre montañas", Style.NORDIC));
        roots.add(new Root("Stig", "el sendero y camino", Style.NORDIC));
        
        roots.add(new Root("Sig", "la victoria", Style.NORDIC));
        roots.add(new Root("Sigh", "la victoria", Style.NORDIC));
        roots.add(new Root("Gunn", "la batalla", Style.NORDIC));
        roots.add(new Root("Gun", "el combate", Style.NORDIC));
        roots.add(new Root("Hild", "la guerra y conflicto", Style.NORDIC));
        roots.add(new Root("Hil", "la guerra y conflicto", Style.NORDIC));
        roots.add(new Root("Val", "los caídos en combate (Valhalla)", Style.NORDIC));
        roots.add(new Root("Hal", "la roca de fortaleza", Style.NORDIC));
        roots.add(new Root("Hall", "la roca de fortaleza", Style.NORDIC));
        roots.add(new Root("Einar", "el guerrero solitario", Style.NORDIC));
        roots.add(new Root("Vig", "el combate y la fuerza", Style.NORDIC));
        roots.add(new Root("Brand", "la espada de fuego", Style.NORDIC));

        // Conectores Nórdicos Simples (Fórmula 2)
        simpleConnectors.add(new Connector("ar", "vocal", "", Style.NORDIC));
        simpleConnectors.add(new Connector("ir", "vocal", "", Style.NORDIC));
        simpleConnectors.add(new Connector("ur", "vocal", "", Style.NORDIC));
        simpleConnectors.add(new Connector("el", "vocal", "", Style.NORDIC));
        simpleConnectors.add(new Connector("en", "vocal", "", Style.NORDIC));
        simpleConnectors.add(new Connector("st", "vocal", "", Style.NORDIC));

        // Conectores Nórdicos Complejos (Infijos - Fórmula 3)
        complexInfixes.add(new Connector("ey", "diptongo", "la herencia de", Style.NORDIC));
        complexInfixes.add(new Connector("au", "diptongo", "el destino de", Style.NORDIC));
        complexInfixes.add(new Connector("va", "diptongo", "el paso de", Style.NORDIC));

        // Sufijos Nórdicos Masculinos
        suffixes.add(new Suffix("or", Gender.MALE, "el ejecutor de", Style.NORDIC));
        suffixes.add(new Suffix("ar", Gender.MALE, "el ejecutor de", Style.NORDIC));
        suffixes.add(new Suffix("ulf", Gender.MALE, "el lobo de", Style.NORDIC));
        suffixes.add(new Suffix("olf", Gender.MALE, "el lobo de", Style.NORDIC));
        suffixes.add(new Suffix("mund", Gender.MALE, "el protector de", Style.NORDIC));
        suffixes.add(new Suffix("rik", Gender.MALE, "el gobernante de", Style.NORDIC));
        suffixes.add(new Suffix("ric", Gender.MALE, "el gobernante de", Style.NORDIC));
        suffixes.add(new Suffix("vald", Gender.MALE, "el líder de", Style.NORDIC));
        suffixes.add(new Suffix("wald", Gender.MALE, "el líder de", Style.NORDIC));
        suffixes.add(new Suffix("sten", Gender.MALE, "la roca inquebrantable de", Style.NORDIC));
        suffixes.add(new Suffix("stein", Gender.MALE, "la roca inquebrantable de", Style.NORDIC));
        suffixes.add(new Suffix("geir", Gender.MALE, "la lanza de", Style.NORDIC));
        suffixes.add(new Suffix("ger", Gender.MALE, "la lanza de", Style.NORDIC));
        suffixes.add(new Suffix("brand", Gender.MALE, "la espada de", Style.NORDIC));
        suffixes.add(new Suffix("son", Gender.MALE, "el hijo de", Style.NORDIC));

        // Sufijos Nórdicos Femeninos
        suffixes.add(new Suffix("da", Gender.FEMALE, "la batalla de", Style.NORDIC));
        suffixes.add(new Suffix("hild", Gender.FEMALE, "la batalla de", Style.NORDIC));
        suffixes.add(new Suffix("borg", Gender.FEMALE, "el castillo protector de", Style.NORDIC));
        suffixes.add(new Suffix("dis", Gender.FEMALE, "la diosa protectora de", Style.NORDIC));
        suffixes.add(new Suffix("ny", Gender.FEMALE, "la nueva de", Style.NORDIC));
        suffixes.add(new Suffix("run", Gender.FEMALE, "el secreto rúnico de", Style.NORDIC));
        suffixes.add(new Suffix("gurd", Gender.FEMALE, "el recinto protegido de", Style.NORDIC));
        suffixes.add(new Suffix("gerd", Gender.FEMALE, "el recinto protegido de", Style.NORDIC));
        suffixes.add(new Suffix("a", Gender.FEMALE, "la gracia de", Style.NORDIC));
        suffixes.add(new Suffix("sveig", Gender.FEMALE, "la fuerza del camino de", Style.NORDIC));
        suffixes.add(new Suffix("vor", Gender.FEMALE, "la guardiana sabia de", Style.NORDIC));

        // Sufijos Nórdicos Neutros
        suffixes.add(new Suffix("um", Gender.NEUTER, "el hogar de", Style.NORDIC));
        suffixes.add(new Suffix("en", Gender.NEUTER, "el elemento de", Style.NORDIC));
        suffixes.add(new Suffix("ark", Gender.NEUTER, "el territorio de", Style.NORDIC));
        suffixes.add(new Suffix("or", Gender.NEUTER, "la fuerza elemental de", Style.NORDIC));
        suffixes.add(new Suffix("k", Gender.NEUTER, "el núcleo de", Style.NORDIC));
    }

    /**
     * Genera una lista de nombres según el estilo y el género.
     */
    public List<GreekName> generateNames(String styleParam, String genderParam, int count,
                                         String formulaModeParam, String formulaShapeParam,
                                         String connector1Param, String infixParam, String connector2Param,
                                         String rootParam, String suffixParam) {
        List<GreekName> results = new ArrayList<>();

        Style fixedStyle = resolveStyle(styleParam);
        Gender fixedGender = resolveGender(genderParam);
        
        // Handle custom mode separately - generate all combinations
        if (fixedStyle == Style.CUSTOM) {
            return generateCustomCombinations(
                fixedGender, 
                resolveFormulaShape(formulaShapeParam),
                rootParam, connector1Param, infixParam, connector2Param, suffixParam
            );
        }
        
        // Normal modes (GREEK, NORDIC, RANDOM)
        int limit = Math.min(Math.max(count, 1), 50);

        boolean randomStyle = styleParam != null && styleParam.equalsIgnoreCase("RANDOM");
        boolean randomGender = genderParam != null && genderParam.equalsIgnoreCase("RANDOM");
        boolean autoFormula = formulaModeParam == null || formulaModeParam.isBlank() || formulaModeParam.equalsIgnoreCase("AUTO");
        String selectedShape = autoFormula ? getRandomFormulaShape() : resolveFormulaShape(formulaShapeParam);

        Root fixedRoot = resolveRoot(rootParam);
        Suffix fixedSuffix = resolveSuffix(suffixParam);

        for (int i = 0; i < limit; i++) {
            Style currentStyle;
            if (fixedRoot != null) {
                currentStyle = fixedRoot.style();
            } else if (!randomStyle && fixedStyle != null) {
                currentStyle = fixedStyle;
            } else if (fixedSuffix != null) {
                currentStyle = fixedSuffix.style();
            } else {
                currentStyle = getRandomStyle();
            }

            Gender currentGender = fixedGender;

            List<Root> styleRoots = roots.stream().filter(r -> r.style() == currentStyle).toList();
            List<Suffix> styleSuffixes = suffixes.stream().filter(s -> s.style() == currentStyle).toList();
            List<Connector> styleSimple = simpleConnectors.stream().filter(c -> c.style() == currentStyle).toList();
            List<Connector> styleComplex = complexInfixes.stream().filter(c -> c.style() == currentStyle).toList();

            Root selectedRoot = chooseRoot(styleRoots, fixedRoot);
            Suffix selectedSuffix = chooseSuffix(styleSuffixes, fixedSuffix, currentGender);
            Connector selectedConnector1 = chooseConnector(styleSimple, connector1Param);
            Connector selectedConnector2 = chooseConnector(styleSimple, connector2Param);
            Connector selectedInfix = chooseConnector(styleComplex, infixParam);

            switch (selectedShape) {
                case "F1" -> results.add(generateFormula1(currentStyle, currentGender, selectedRoot, selectedSuffix));
                case "F2" -> results.add(generateFormula2(currentStyle, currentGender, selectedRoot, selectedSuffix, selectedConnector1));
                case "F3" -> results.add(generateFormula3(currentStyle, currentGender, selectedRoot, selectedSuffix, selectedInfix));
                case "F4" -> results.add(generateFormula4(currentStyle, currentGender, selectedRoot, selectedSuffix, selectedConnector1, selectedInfix));
                case "F5" -> results.add(generateFormula5(currentStyle, currentGender, selectedRoot, selectedSuffix, selectedInfix, selectedConnector1));
                case "F6" -> results.add(generateFormula6(currentStyle, currentGender, selectedRoot, selectedSuffix, selectedConnector1, selectedInfix, selectedConnector2));
                default -> results.add(generateSingleName(currentStyle, currentGender, styleRoots, styleSuffixes, styleSimple, styleComplex));
            }
        }

        return results;
    }

    private List<GreekName> generateCustomCombinations(Gender fixedGender, String formulaShape,
                                                       String rootParam, String connector1Param, 
                                                       String infixParam, String connector2Param, 
                                                       String suffixParam) {
        List<GreekName> results = new ArrayList<>();
        
        // Parse parameters as comma-separated lists
        List<String> rootList = parseComponentList(rootParam);
        List<String> connector1List = parseComponentList(connector1Param);
        List<String> infixList = parseComponentList(infixParam);
        List<String> connector2List = parseComponentList(connector2Param);
        List<String> suffixList = parseComponentList(suffixParam);
        
        // Check if we have necessary components for the formula
        if (rootList.isEmpty() || suffixList.isEmpty()) {
            return results;
        }
        
        // Generate all combinations based on formula
        switch (formulaShape) {
            case "F1" -> {
                for (String root : rootList) {
                    for (String suffix : suffixList) {
                        Root r = createCustomRoot(root);
                        Suffix s = createCustomSuffix(suffix);
                        results.add(generateFormula1(Style.CUSTOM, fixedGender, r, s));
                        if (results.size() >= 50) return results;
                    }
                }
            }
            case "F2" -> {
                if (connector1List.isEmpty()) return results;
                for (String root : rootList) {
                    for (String conn1 : connector1List) {
                        for (String suffix : suffixList) {
                            Root r = createCustomRoot(root);
                            Connector c1 = createCustomConnector(conn1);
                            Suffix s = createCustomSuffix(suffix);
                            results.add(generateFormula2(Style.CUSTOM, fixedGender, r, s, c1));
                            if (results.size() >= 50) return results;
                        }
                    }
                }
            }
            case "F3" -> {
                if (infixList.isEmpty()) return results;
                for (String root : rootList) {
                    for (String infix : infixList) {
                        for (String suffix : suffixList) {
                            Root r = createCustomRoot(root);
                            Connector inf = createCustomConnector(infix);
                            Suffix s = createCustomSuffix(suffix);
                            results.add(generateFormula3(Style.CUSTOM, fixedGender, r, s, inf));
                            if (results.size() >= 50) return results;
                        }
                    }
                }
            }
            case "F4" -> {
                if (connector1List.isEmpty() || infixList.isEmpty()) return results;
                for (String root : rootList) {
                    for (String conn1 : connector1List) {
                        for (String infix : infixList) {
                            for (String suffix : suffixList) {
                                Root r = createCustomRoot(root);
                                Connector c1 = createCustomConnector(conn1);
                                Connector inf = createCustomConnector(infix);
                                Suffix s = createCustomSuffix(suffix);
                                results.add(generateFormula4(Style.CUSTOM, fixedGender, r, s, c1, inf));
                                if (results.size() >= 50) return results;
                            }
                        }
                    }
                }
            }
            case "F5" -> {
                if (connector1List.isEmpty() || infixList.isEmpty()) return results;
                for (String root : rootList) {
                    for (String infix : infixList) {
                        for (String conn1 : connector1List) {
                            for (String suffix : suffixList) {
                                Root r = createCustomRoot(root);
                                Connector inf = createCustomConnector(infix);
                                Connector c1 = createCustomConnector(conn1);
                                Suffix s = createCustomSuffix(suffix);
                                results.add(generateFormula5(Style.CUSTOM, fixedGender, r, s, inf, c1));
                                if (results.size() >= 50) return results;
                            }
                        }
                    }
                }
            }
            case "F6" -> {
                if (connector1List.isEmpty() || infixList.isEmpty() || connector2List.isEmpty()) return results;
                for (String root : rootList) {
                    for (String conn1 : connector1List) {
                        for (String infix : infixList) {
                            for (String conn2 : connector2List) {
                                for (String suffix : suffixList) {
                                    Root r = createCustomRoot(root);
                                    Connector c1 = createCustomConnector(conn1);
                                    Connector inf = createCustomConnector(infix);
                                    Connector c2 = createCustomConnector(conn2);
                                    Suffix s = createCustomSuffix(suffix);
                                    results.add(generateFormula6(Style.CUSTOM, fixedGender, r, s, c1, inf, c2));
                                    if (results.size() >= 50) return results;
                                }
                            }
                        }
                    }
                }
            }
        }
        
        return results;
    }

    private List<String> parseComponentList(String param) {
        if (param == null || param.isBlank()) {
            return new ArrayList<>();
        }
        String[] parts = param.split(",");
        List<String> result = new ArrayList<>();
        for (String part : parts) {
            String trimmed = part.trim();
            if (!trimmed.isBlank()) {
                result.add(trimmed);
            }
        }
        return result;
    }

    private Style resolveStyle(String styleParam) {
        if (styleParam == null || styleParam.isBlank() || styleParam.equalsIgnoreCase("GREEK")) {
            return Style.GREEK;
        }
        if (styleParam.equalsIgnoreCase("NORDIC")) {
            return Style.NORDIC;
        }
        if (styleParam.equalsIgnoreCase("CUSTOM")) {
            return Style.CUSTOM;
        }
        return Style.GREEK;
    }

    private Gender resolveGender(String genderParam) {
        if (genderParam == null || genderParam.isBlank()) {
            return null;
        }
        try {
            return Gender.valueOf(genderParam.toUpperCase());
        } catch (IllegalArgumentException e) {
            return null;
        }
    }

    private Style getRandomStyle() {
        // Return only GREEK or NORDIC, not CUSTOM
        return random.nextBoolean() ? Style.GREEK : Style.NORDIC;
    }

    private Gender getRandomGender() {
        Gender[] genders = Gender.values();
        return genders[random.nextInt(genders.length)];
    }

    private String resolveFormulaShape(String formulaShapeParam) {
        if (formulaShapeParam == null || formulaShapeParam.isBlank()) {
            return "F1";
        }
        String normalized = formulaShapeParam.toUpperCase();
        return switch (normalized) {
            case "F1", "F2", "F3", "F4", "F5", "F6" -> normalized;
            default -> "F1";
        };
    }

    private String getRandomFormulaShape() {
        String[] shapes = {"F1", "F2", "F3", "F4", "F5", "F6"};
        return shapes[random.nextInt(shapes.length)];
    }

    public List<GreekName> generateNames(Gender gender, int count) {
        return generateNames("GREEK", gender == null ? null : gender.name(), count, null, null, null, null, null, null, null);
    }

    public List<GreekName> generateNames(Style style, Gender gender, int count) {
        return generateNames(style == null ? null : style.name(), gender == null ? null : gender.name(), count, null, null, null, null, null, null, null);
    }

    private GreekName generateSingleName(Style style, Gender gender, List<Root> styleRoots, List<Suffix> styleSuffixes, List<Connector> styleSimple, List<Connector> styleComplex) {
        int formulaChoice = random.nextInt(12); // 6 fórmulas posibles
        
        return switch (formulaChoice) {
            case 0, 1 -> generateFormula1(style, gender, styleRoots, styleSuffixes);
            case 2, 3 -> generateFormula2(style, gender, styleRoots, styleSuffixes, styleSimple);
            case 4, 5 -> generateFormula3(style, gender, styleRoots, styleSuffixes, styleComplex);
            case 6, 7 -> generateFormula4(style, gender, getRandom(styleRoots), getRandomSuffix(styleSuffixes, gender), getRandom(styleSimple), getRandom(styleComplex));
            case 8, 9 -> generateFormula5(style, gender, getRandom(styleRoots), getRandomSuffix(styleSuffixes, gender), getRandom(styleComplex), getRandom(styleSimple));
            default -> generateFormula6(style, gender, getRandom(styleRoots), getRandomSuffix(styleSuffixes, gender), getRandom(styleSimple), getRandom(styleComplex), getRandom(styleSimple));
        };
    }

    /**
     * FÓRMULA 1: Prefijo + Sufijo
     */
    private GreekName generateFormula1(Style style, Gender gender, List<Root> styleRoots, List<Suffix> styleSuffixes) {
        Root root = getRandom(styleRoots);
        Suffix suffix = getRandomSuffix(styleSuffixes, gender);

        String combinedName = combine(root.text(), suffix.text());
        String formattedName = capitalize(combinedName);
        
        String rawMeaning = suffix.meaning() + " " + root.meaning();
        String meaning = cleanMeaning(rawMeaning);

        return new GreekName(formattedName, gender, meaning, "Fórmula 1: Prefijo + Sufijo", style);
    }

    /**
     * FÓRMULA 2: Prefijo + Conector + Sufijo
     */
    private GreekName generateFormula2(Style style, Gender gender, List<Root> styleRoots, List<Suffix> styleSuffixes, List<Connector> styleSimple) {
        Root root = getRandom(styleRoots);
        Connector connector = getRandom(styleSimple);
        Suffix suffix = getRandomSuffix(styleSuffixes, gender);

        String intermediate = combine(root.text(), connector.text());
        String combinedName = combine(intermediate, suffix.text());
        
        String formattedName = capitalize(combinedName);

        String rawMeaning = suffix.meaning() + " " + connector.meaning() + " " + root.meaning();
        String meaning = cleanMeaning(rawMeaning);

        return new GreekName(formattedName, gender, meaning, "Fórmula 2: Prefijo + Conector + Sufijo", style);
    }

    /**
     * FÓRMULA 3: Prefijo + Infijo + Sufijo
     */
    private GreekName generateFormula3(Style style, Gender gender, List<Root> styleRoots, List<Suffix> styleSuffixes, List<Connector> styleComplex) {
        Root root = getRandom(styleRoots);
        Connector infix = getRandom(styleComplex);
        Suffix suffix = getRandomSuffix(styleSuffixes, gender);

        String intermediate = combine(root.text(), infix.text());
        String combinedName = combine(intermediate, suffix.text());
        
        String formattedName = capitalize(combinedName);

        String rawMeaning = suffix.meaning() + " " + infix.meaning() + " " + root.meaning();
        String meaning = cleanMeaning(rawMeaning);

        return new GreekName(formattedName, gender, meaning, "Fórmula 3: Prefijo + Infijo + Sufijo", style);
    }

    private GreekName generateFormula1(Style style, Gender gender, Root root, Suffix suffix) {
        String combinedName = combine(root.text(), suffix.text());
        String formattedName = capitalize(combinedName);

        String rawMeaning = suffix.meaning() + " " + root.meaning();
        String meaning = cleanMeaning(rawMeaning);

        return new GreekName(formattedName, gender, meaning, "Fórmula 1: Prefijo + Sufijo", style);
    }

    private GreekName generateFormula2(Style style, Gender gender, Root root, Suffix suffix, Connector connector) {
        String intermediate = combine(root.text(), connector.text());
        String combinedName = combine(intermediate, suffix.text());
        String formattedName = capitalize(combinedName);

        String rawMeaning = suffix.meaning() + " " + connector.meaning() + " " + root.meaning();
        String meaning = cleanMeaning(rawMeaning);

        return new GreekName(formattedName, gender, meaning, "Fórmula 2: Prefijo + Conector + Sufijo", style);
    }

    private GreekName generateFormula3(Style style, Gender gender, Root root, Suffix suffix, Connector infix) {
        String intermediate = combine(root.text(), infix.text());
        String combinedName = combine(intermediate, suffix.text());
        String formattedName = capitalize(combinedName);

        String rawMeaning = suffix.meaning() + " " + infix.meaning() + " " + root.meaning();
        String meaning = cleanMeaning(rawMeaning);

        return new GreekName(formattedName, gender, meaning, "Fórmula 3: Prefijo + Infijo + Sufijo", style);
    }

    private GreekName generateFormula4(Style style, Gender gender, Root root, Suffix suffix, Connector connector, Connector infix) {
        String first = combine(root.text(), connector.text());
        String second = combine(first, infix.text());
        String combinedName = combine(second, suffix.text());
        String formattedName = capitalize(combinedName);

        String rawMeaning = suffix.meaning() + " " + infix.meaning() + " " + connector.meaning() + " " + root.meaning();
        String meaning = cleanMeaning(rawMeaning);

        return new GreekName(formattedName, gender, meaning, "Fórmula 4: Prefijo + Conector + Infijo + Sufijo", style);
    }

    private GreekName generateFormula5(Style style, Gender gender, Root root, Suffix suffix, Connector infix, Connector connector) {
        String first = combine(root.text(), infix.text());
        String second = combine(first, connector.text());
        String combinedName = combine(second, suffix.text());
        String formattedName = capitalize(combinedName);

        String rawMeaning = suffix.meaning() + " " + connector.meaning() + " " + infix.meaning() + " " + root.meaning();
        String meaning = cleanMeaning(rawMeaning);

        return new GreekName(formattedName, gender, meaning, "Fórmula 5: Prefijo + Infijo + Conector + Sufijo", style);
    }

    private GreekName generateFormula6(Style style, Gender gender, Root root, Suffix suffix, Connector connector1, Connector infix, Connector connector2) {
        String first = combine(root.text(), connector1.text());
        String second = combine(first, infix.text());
        String third = combine(second, connector2.text());
        String combinedName = combine(third, suffix.text());
        String formattedName = capitalize(combinedName);

        String rawMeaning = suffix.meaning() + " " + connector2.meaning() + " " + infix.meaning() + " " + connector1.meaning() + " " + root.meaning();
        String meaning = cleanMeaning(rawMeaning);

        return new GreekName(formattedName, gender, meaning, "Fórmula 6: Prefijo + Conector + Infijo + Conector + Sufijo", style);
    }

    /**
     * Algoritmo de combinación fonética que respeta los diptongos y choques vocálicos.
     */
    public static String combine(String a, String b) {
        if (a == null || a.isEmpty()) return b;
        if (b == null || b.isEmpty()) return a;

        char lastA = a.charAt(a.length() - 1);
        char firstB = b.charAt(0);

        if (isVowel(lastA) && isVowel(firstB)) {
            if (isDiphthong(lastA, firstB)) {
                return a + b;
            }
            
            // Regla de transición específica
            if (Character.toLowerCase(lastA) == 'a' && Character.toLowerCase(firstB) == 'o') {
                return combine(a, b.substring(1));
            }
            
            return combine(a.substring(0, a.length() - 1), b);
        }

        return a + b;
    }

    private static boolean isVowel(char c) {
        return "aeiouyAEIOUY".indexOf(c) != -1;
    }

    private static boolean isDiphthong(char a, char b) {
        String pair = ("" + a + b).toLowerCase();
        return Set.of(
            "ia", "io", "ie", "iu",
            "ea", "eo", "eu",
            "ae", "oe",
            "ai", "ei",
            "ua", "ui",
            "ey", "au", "va" // Añadidos diptongos intermedios nórdicos
        ).contains(pair);
    }

    /**
     * Extrae la forma consonántica de una raíz removiendo las vocales finales.
     */
    private String getConsonantalForm(String text) {
        if (text == null || text.isEmpty()) return text;
        int i = text.length() - 1;
        while (i >= 0 && isVowel(text.charAt(i))) {
            i--;
        }
        return text.substring(0, Math.max(i + 1, 1));
    }

    private <T> T getRandom(List<T> list) {
        return list.get(random.nextInt(list.size()));
    }

    private Suffix getRandomSuffix(List<Suffix> styleSuffixes, Gender gender) {
        List<Suffix> filtered = styleSuffixes.stream()
                .filter(s -> s.gender() == gender)
                .toList();
        if (filtered.isEmpty()) {
            return styleSuffixes.get(random.nextInt(styleSuffixes.size()));
        }
        return filtered.get(random.nextInt(filtered.size()));
    }

    private Root resolveRoot(String rootParam) {
        if (rootParam == null || rootParam.isBlank()) {
            return null;
        }
        return roots.stream()
                .filter(r -> r.text().equalsIgnoreCase(rootParam))
                .findFirst()
                .orElse(null);
    }

    private Suffix resolveSuffix(String suffixParam) {
        if (suffixParam == null || suffixParam.isBlank()) {
            return null;
        }
        return suffixes.stream()
                .filter(s -> s.text().equalsIgnoreCase(suffixParam))
                .findFirst()
                .orElse(null);
    }

    private Root chooseRoot(List<Root> styleRoots, Root fixedRoot) {
        if (fixedRoot != null) {
            return fixedRoot;
        }
        return getRandom(styleRoots);
    }

    private Suffix chooseSuffix(List<Suffix> styleSuffixes, Suffix fixedSuffix, Gender gender) {
        if (fixedSuffix != null) {
            return fixedSuffix;
        }
        return getRandomSuffix(styleSuffixes, gender);
    }

    private Connector chooseConnector(List<Connector> connectors, String connectorParam) {
        if (connectorParam != null && !connectorParam.isBlank()) {
            Connector fixedConnector = findConnector(connectors, connectorParam);
            if (fixedConnector != null) {
                return fixedConnector;
            }
        }
        return getRandom(connectors);
    }

    private Connector findConnector(List<Connector> connectors, String connectorParam) {
        if (connectorParam == null || connectorParam.isBlank()) {
            return null;
        }
        return connectors.stream()
                .filter(c -> c.text().equalsIgnoreCase(connectorParam))
                .findFirst()
                .orElse(null);
    }

    private Root createCustomRoot(String text) {
        if (text == null || text.isBlank()) {
            return null;
        }
        return new Root(text, "", Style.CUSTOM);
    }

    private Suffix createCustomSuffix(String text) {
        if (text == null || text.isBlank()) {
            return null;
        }
        return new Suffix(text, Gender.NEUTER, "", Style.CUSTOM);
    }

    private Connector createCustomConnector(String text) {
        if (text == null || text.isBlank()) {
            return null;
        }
        return new Connector(text, "custom", "", Style.CUSTOM);
    }

    private String capitalize(String str) {
        if (str == null || str.isEmpty()) return str;
        return Character.toUpperCase(str.charAt(0)) + str.substring(1).toLowerCase();
    }

    private String cleanMeaning(String meaning) {
        if (meaning == null) return "";
        return meaning
                .replaceAll("(?i)de el ", "del ")
                .replaceAll("(?i)de la el ", "de la ")
                .replaceAll("(?i)de la la ", "de la ")
                .replaceAll("(?i)con el el ", "con el ")
                .replaceAll("\\s+", " ")
                .trim();
    }

    // Métodos expuestos para la introspección de componentes
    public Map<String, Object> getComponents() {
        return getComponents(Style.GREEK);
    }

    public Map<String, Object> getComponents(String styleParam) {
        if (styleParam == null || styleParam.isBlank()) {
            return getComponents(Style.GREEK);
        }
        if (styleParam.equalsIgnoreCase("RANDOM")) {
            Map<String, Object> components = new HashMap<>();
            components.put("roots", roots);
            components.put("simpleConnectors", simpleConnectors);
            components.put("complexInfixes", complexInfixes);
            components.put("suffixes", suffixes);
            return components;
        }
        Style style = resolveStyle(styleParam);
        return getComponents(style);
    }

    public Map<String, Object> getComponents(Style style) {
        Style targetStyle = (style == null) ? Style.GREEK : style;
        Map<String, Object> components = new HashMap<>();
        components.put("roots", roots.stream().filter(r -> r.style() == targetStyle).toList());
        components.put("simpleConnectors", simpleConnectors.stream().filter(c -> c.style() == targetStyle).toList());
        components.put("complexInfixes", complexInfixes.stream().filter(c -> c.style() == targetStyle).toList());
        components.put("suffixes", suffixes.stream().filter(s -> s.style() == targetStyle).toList());
        return components;
    }
}
