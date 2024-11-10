import { AppHeader, AppFooter, AppMetadata } from "../components";
import "../styles/globals.css";
import { ThemeContext } from "../context";

// Exportar los metadatos como antes, sin `colorScheme`
export const metadata = { ...AppMetadata };

// Definir y exportar el viewport de forma independiente
export const viewport = {
  colorScheme: "dark", // Mover el colorScheme aquí
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ThemeContext>
          <AppHeader />
          {children}
          <AppFooter />
        </ThemeContext>
      </body>
    </html>
  );
}