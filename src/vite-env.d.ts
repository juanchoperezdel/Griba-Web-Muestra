/// <reference types="vite/client" />

// Tipos de Vite para import.meta.env (BASE_URL, MODE, etc.).
// LayoutV7 usa import.meta.env.BASE_URL para resolver el logo, porque el
// cliente sirve la landing bajo /landing-crm/ y una ruta absoluta apuntaría
// a la raíz del dominio.
