"use client";

import type { JSX } from "react";

import { NavBar } from "@/components";
import { Stack } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import { ThemeProviderWrapper } from "./ThemeContext";

// export const metadata: Metadata = {
//   title: "Kor ska oss reis",
//   description:
//     "Kor ska oss reis er basert på en egen idé med som er basert på 'Påskelabyrinten' til NRK. Vi har laget en egen versjon av dette, som vi har kalt 'Kor ska oss reis'.",
//   keywords:
//     "Kor ska oss reis, Påskelabyrinten, Påskelabyrint, NRK, Påske, Påskeegg, Påskequiz, Påskejakt, Påskegåte, Påskeoppgave, Påskekonkurranse, Rennebu, Berkåk, Oppdal, Trondheim, Melhus, Støren, Orkanger, Norge, Norway, Påskeferie, Påskeaktivitet, Påskelek, Påskeunderholdning, Påskekonkurranse, Påskequiz, Påskegåte, Påskeoppgave, Påskejakt, Påskeegg",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: JSX.Element;
}>) {
  return (
    <html lang="no">
      <body>
        <NavBar />

        <Stack minHeight="100vh" p="2rem">
          <AppRouterCacheProvider>
            <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
          </AppRouterCacheProvider>
        </Stack>
      </body>
    </html>
  );
}
