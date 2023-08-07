import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "../styles/globals.css";
import HeaderBarDefault from "@/components/HeaderBarDefault";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "Thirteen Tech",
    description: "Tecnologia, por dentro das mais atualizadas tecnologias de desenvolvimento web",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-br">            
            <body className={montserrat.className}>
                <HeaderBarDefault/>
                {children}
            </body>
        </html>
    );
}
