import normalizeText from "../helpers/normalizeText";
const FontSize = {
  h1: normalizeText(24),
  h2: normalizeText(20),
  h3: normalizeText(18),
  title: normalizeText(16),
  body: normalizeText(14),
  bodySmall: normalizeText(12),
  bodyExtraSmall: normalizeText(10),
  largeText: normalizeText(36),
  largeMedium: normalizeText(30)
};

export { FontSize };
