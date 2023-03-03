export const toFrenchFormat = (date: Date) => date.toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" });
