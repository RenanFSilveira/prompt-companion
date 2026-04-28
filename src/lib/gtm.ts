declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export const trackWhatsappLead = () => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "lead_whatsapp" });
};
