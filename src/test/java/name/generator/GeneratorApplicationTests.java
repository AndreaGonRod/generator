package name.generator;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import name.generator.model.Gender;
import name.generator.model.GreekName;
import name.generator.model.Style;
import name.generator.service.NameService;

@SpringBootTest
class GeneratorApplicationTests {

	@Autowired
	private NameService nameService;

	@Test
	void contextLoads() {
		assertNotNull(nameService);
	}

	@Test
	void testCombineBasic() {
		// Consonante + Consonante
		assertEquals("Nikmedes", NameService.combine("Nik", "medes"));
		
		// Consonante + Vocal
		assertEquals("Nikandro", NameService.combine("Nik", "andro"));
	}

	@Test
	void testCombineVowelClash() {
		// Choque de vocales iguales: Helio + os -> Helios
		assertEquals("Helios", NameService.combine("Helio", "os"));
		
		// Choque de vocales distintas (drop primera vocal): Theo + ania -> Theania
		assertEquals("Theania", NameService.combine("Theo", "ania"));
	}

	@Test
	void testCombineDiphthongs() {
		// Preservar diptongos griegos comunes (ia, io, ea, ae, etc.)
		assertEquals("Asterias", NameService.combine("Asteri", "as"));
		assertEquals("Galatea", NameService.combine("Galat", "ea"));
		assertEquals("Theodoros", NameService.combine("Theo", "doros"));
	}

	@Test
	void testCombineMegaOpol() {
		// Regla de transición específica para Mega + opol
		assertEquals("Megapolis", NameService.combine(NameService.combine("Mega", "opol"), "is"));
	}

	@Test
	void testGenerateNamesCountAndProperties() {
		int count = 5;
		List<GreekName> maleNames = nameService.generateNames(Gender.MALE, count);
		
		assertEquals(count, maleNames.size());
		
		for (GreekName greekName : maleNames) {
			assertNotNull(greekName.name());
			assertFalse(greekName.name().isEmpty());
			assertEquals(Gender.MALE, greekName.gender());
			assertNotNull(greekName.meaning());
			assertFalse(greekName.meaning().isEmpty());
			assertNotNull(greekName.formula());
			assertFalse(greekName.formula().isEmpty());
		}
	}

	@Test
	void testGenerateFemaleNames() {
		List<GreekName> femaleNames = nameService.generateNames(Gender.FEMALE, 3);
		assertEquals(3, femaleNames.size());
		for (GreekName name : femaleNames) {
			assertEquals(Gender.FEMALE, name.gender());
		}
	}

	@Test
	void testGenerateNeuterNames() {
		List<GreekName> neuterNames = nameService.generateNames(Gender.NEUTER, 2);
		assertEquals(2, neuterNames.size());
		for (GreekName name : neuterNames) {
			assertEquals(Gender.NEUTER, name.gender());
		}
	}

    @Test
    void testGenerateNordicNamesWithStyle() {
        List<GreekName> nordicNames = nameService.generateNames(Style.NORDIC, Gender.MALE, 3);
        assertEquals(3, nordicNames.size());
        for (GreekName name : nordicNames) {
            assertEquals(Gender.MALE, name.gender());
            assertEquals(Style.NORDIC, name.style());
            assertNotNull(name.meaning());
            assertFalse(name.meaning().isEmpty());
        }
    }
}
