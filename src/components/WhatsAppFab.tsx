// Botón flotante de WhatsApp — vía de conversión de baja fricción para el ~51%
// del tráfico que entra desde navegador in-app (Instagram/Facebook), donde el
// iframe del calendario rinde mal. Siempre visible, complementa al CTA del header.
// El mensaje pre-cargado se configura del lado de wa.link, no acá.
const WHATSAPP_URL = "https://wa.link/3ry22s";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-3.5 text-white shadow-lg shadow-black/25 transition-all hover:-translate-y-0.5 hover:bg-[#1ebe5d] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 sm:py-4"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-6 w-6 shrink-0 sm:h-7 sm:w-7"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.04 4C9.95 4 5 8.95 5 15.04c0 2.05.55 4.05 1.6 5.81L5 28l7.34-1.92a11 11 0 0 0 3.7.64h.01c6.08 0 11.03-4.95 11.03-11.04C27.08 8.95 22.13 4 16.04 4zm0 20.16h-.01a9.1 9.1 0 0 1-4.64-1.27l-.33-.2-3.86 1.01 1.03-3.76-.22-.39a9.06 9.06 0 0 1-1.39-4.84c0-5.03 4.1-9.12 9.13-9.12 2.44 0 4.73.95 6.45 2.68a9.06 9.06 0 0 1 2.67 6.45c0 5.03-4.1 9.12-9.13 9.12zm5.01-6.83c-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.62.14-.18.27-.71.89-.87 1.07-.16.18-.32.2-.59.07-.27-.14-1.16-.43-2.2-1.36-.81-.72-1.36-1.62-1.52-1.89-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.46.09-.18.05-.34-.02-.48-.07-.14-.62-1.49-.85-2.04-.22-.53-.45-.46-.62-.47l-.53-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.66 1.12 2.84.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.66.21 1.25.18 1.72.11.52-.08 1.62-.66 1.84-1.3.23-.64.23-1.18.16-1.3-.07-.11-.25-.18-.52-.32z" />
      </svg>
      <span className="hidden pr-1 text-sm font-semibold sm:inline">Escribinos</span>
    </a>
  );
}
