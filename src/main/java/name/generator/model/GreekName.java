package name.generator.model;

/**
 * Representa un nombre de estilo generado (Griego o Nórdico).
 */
public record GreekName(
    String name,
    Gender gender,
    String meaning,
    String formula,
    Style style
) {}
