import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Instituto Semiguini | Transformando Vidas',
  description: 'Consultoria em Desenvolvimento Humano e Organizacional. Transformacao humana e organizacional desde 2006 com cursos motivacionais, palestras, imersoes e tecnicas terapeuticas.',
  keywords: 'desenvolvimento humano, desenvolvimento organizacional, coaching, terapia transpessoal, consultoria empresarial, Sao Paulo',
  authors: [{ name: 'Instituto Semiguini' }],
  openGraph: {
    title: 'Instituto Semiguini | Transformando Vidas',
    description: 'Consultoria em Desenvolvimento Humano e Organizacional',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
