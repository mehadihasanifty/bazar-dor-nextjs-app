const unitTranslations: Record<string, string> = {
  kg: "কেজি",
  kilogram: "কেজি",
  gram: "গ্রাম",
  liter: "লিটার",
  litre: "লিটার",
  piece: "টি",
  pieces: "টি",
  dozen: "ডজন",
  pound: "পাউন্ড",
  packet: "প্যাকেট",
};

export const translateUnit = (unit: string): string => {
  return unitTranslations[unit.toLowerCase()] ?? unit;
};