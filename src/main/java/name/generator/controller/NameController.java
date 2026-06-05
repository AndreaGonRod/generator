package name.generator.controller;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import name.generator.model.Gender;
import name.generator.model.GreekName;
import name.generator.model.Style;
import name.generator.service.NameService;

@RestController
@RequestMapping("/api/names")
@CrossOrigin(origins = "*") // Habilitar CORS para máxima accesibilidad
public class NameController {

    private final NameService nameService;

    public NameController(NameService nameService) {
        this.nameService = nameService;
    }

    /**
     * Endpoint para generar nombres griegos aleatorios.
     * Ejemplo: GET /api/names/generate?gender=MALE&count=5
     *
     * @param gender Género opcional (MALE, FEMALE, NEUTER)
     * @param count  Cantidad de nombres (default 1, max 50)
     * @return Lista de nombres generados
     */
    @GetMapping("/generate")
    public List<GreekName> generateNames(
            @RequestParam(required = false) Style style,
            @RequestParam(required = false) Gender gender,
            @RequestParam(defaultValue = "1") int count
    ) {
        return nameService.generateNames(style, gender, count);
    }

    /**
     * Endpoint de introspección para obtener todos los componentes de base de datos de nombres.
     * Ejemplo: GET /api/names/components?style=GREEK
     */
    @GetMapping("/components")
    public Map<String, Object> getComponents(
            @RequestParam(required = false) Style style
    ) {
        return nameService.getComponents(style);
    }
}
