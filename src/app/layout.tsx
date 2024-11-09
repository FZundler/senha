import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
<<<<<<< HEAD

export const metadata: Metadata = {
  title: "Mão na roda",
  description: "Plataforma que conecta profissionais e clientes",
  keywords: ['']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
        <Footer/>

      </body>
    </html>
  );
=======
import ResetPasswordCard from "@/components/Reset";
import SocialMediaLinks from "@/components/SocialMediaLinks"; // Importando o componente de redes sociais

export const metadata: Metadata = {
    title: "Mão na roda",
    description: "Plataforma que conecta profissionais e clientes",
    keywords: [""],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-br">   
            <body className="flex flex-col min-h-screen"> 
                <Header />
                <main className="flex-grow flex items-center justify-center py-64"> {/* Mantém o card centralizado */}
                    <ResetPasswordCard /> 
                </main>
                <SocialMediaLinks /> {/* Adicionando as redes sociais */}
                <Footer />
            </body>
        </html> 
    );
>>>>>>> f4e5f81400da1e5b6c48c77841eeffd4ef44c4db
}
