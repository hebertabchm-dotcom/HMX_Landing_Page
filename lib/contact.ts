export const WHATSAPP_NUMBER = '21969958530';
export const WHATSAPP_NUMBER_E164 = '5521969958530';
export const WHATSAPP_NUMBER_DISPLAY = '(21) 96995-8530';

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${encodeURIComponent(message)}`;
}

