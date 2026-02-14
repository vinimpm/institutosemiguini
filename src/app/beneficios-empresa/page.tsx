'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Beneficio {
  titulo: string
  descricao: string
  icon: ReactNode
}

const IconWrapper = ({ children }: { children: ReactNode }) => (
  <div className="w-12 h-12 bg-primary-light/20 rounded-xl flex items-center justify-center text-primary-dark">
    {children}
  </div>
)

const beneficios: Beneficio[] = [
  {
    titulo: 'Redução do Absenteísmo',
    descricao: 'Programas de saúde mental diminuem faltas e afastamentos, garantindo equipes mais presentes e engajadas.',
    icon: <IconWrapper><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg></IconWrapper>,
  },
  {
    titulo: 'Menor Rotatividade',
    descricao: 'Empresas que cuidam da saúde emocional retêm talentos, reduzindo custos e mantendo a continuidade do conhecimento interno.',
    icon: <IconWrapper><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg></IconWrapper>,
  },
  {
    titulo: 'Clima Organizacional Fortalecido',
    descricao: 'Ambientes que priorizam o bem-estar promovem confiança, colaboração e respeito, melhorando o dia a dia de trabalho.',
    icon: <IconWrapper><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg></IconWrapper>,
  },
  {
    titulo: 'Melhora de Desempenho e Produtividade',
    descricao: 'Colaboradores equilibrados trabalham com mais foco e energia, elevando a produtividade geral da empresa.',
    icon: <IconWrapper><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg></IconWrapper>,
  },
  {
    titulo: 'Redução de Riscos Jurídicos',
    descricao: 'A atenção à saúde mental minimiza riscos de ações trabalhistas relacionadas a assédio moral, burnout ou condições insalubres.',
    icon: <IconWrapper><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg></IconWrapper>,
  },
  {
    titulo: 'Fortalecimento da Marca Empregadora',
    descricao: 'Ser reconhecida como uma empresa que valoriza a saúde mental fortalece a reputação e atrai os melhores talentos.',
    icon: <IconWrapper><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg></IconWrapper>,
  },
  {
    titulo: 'Aumento da Atração de Talentos',
    descricao: 'Organizações focadas no bem-estar são mais atrativas para novos profissionais de alta performance.',
    icon: <IconWrapper><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg></IconWrapper>,
  },
  {
    titulo: 'Maior Adaptabilidade',
    descricao: 'Colaboradores resilientes lidam melhor com mudanças, tornando a empresa mais ágil e preparada para o futuro.',
    icon: <IconWrapper><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg></IconWrapper>,
  },
  {
    titulo: 'Redução de Conflitos Internos',
    descricao: 'Ambientes com suporte emocional apresentam menos conflitos interpessoais e mais colaboração.',
    icon: <IconWrapper><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg></IconWrapper>,
  },
  {
    titulo: 'Cultura Organizacional Sólida',
    descricao: 'Investir em saúde mental reforça valores de cuidado, respeito e responsabilidade, construindo uma cultura robusta.',
    icon: <IconWrapper><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg></IconWrapper>,
  },
  {
    titulo: 'Comunicação Interna Aprimorada',
    descricao: 'Ambientes equilibrados promovem comunicação clara, transparente e respeitosa entre líderes e equipes.',
    icon: <IconWrapper><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg></IconWrapper>,
  },
  {
    titulo: 'Maior Engajamento das Equipes',
    descricao: 'Colaboradores que se sentem cuidados engajam-se mais nos objetivos da empresa, aumentando o desempenho organizacional.',
    icon: <IconWrapper><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></IconWrapper>,
  },
  {
    titulo: 'Melhora da Reputação Institucional',
    descricao: 'O cuidado com a saúde mental contribui para uma imagem pública ética, humana e responsável.',
    icon: <IconWrapper><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg></IconWrapper>,
  },
  {
    titulo: 'Aumento da Vantagem Competitiva',
    descricao: 'Organizações que promovem saúde mental se destacam no mercado, atraindo clientes, talentos e investidores.',
    icon: <IconWrapper><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></IconWrapper>,
  },
  {
    titulo: 'Estímulo à Inovação',
    descricao: 'Colaboradores com suporte emocional sentem-se mais seguros para propor novas ideias, estimulando a inovação.',
    icon: <IconWrapper><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg></IconWrapper>,
  },
]

export default function BeneficiosEmpresa() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-dark via-olive-700 to-primary-dark text-white relative overflow-hidden">
        <motion.div
          className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <motion.span
              className="inline-block px-4 py-2 bg-accent/20 text-accent font-medium rounded-full text-sm mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Para Empresas
            </motion.span>

            <motion.h1
              className="heading-1 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Investimento Estratégico em{' '}
              <span className="text-accent">Capital Humano</span>
            </motion.h1>

            <motion.p
              className="text-xl text-white/80 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Investir no desenvolvimento emocional e humano dos colaboradores não é
              apenas um diferencial, mas uma estratégia essencial para a
              sustentabilidade e o crescimento do negócio.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-olive-50">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-700 leading-relaxed">
              Empresas são feitas de <span className="font-bold text-primary-dark">pessoas</span>,
              e pessoas equilibradas emocionalmente criam ambientes mais saudáveis,
              produtivos e colaborativos. O cuidado com o capital humano é o melhor
              investimento que sua empresa pode fazer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-primary-light/20 text-primary-dark font-medium rounded-full text-sm mb-6">
              Benefícios
            </span>
            <h2 className="heading-2 text-primary-dark mb-6">
              O Que Sua Empresa Ganha
            </h2>
            <p className="text-lg text-gray-600">
              Descubra como o investimento em desenvolvimento humano transforma
              os resultados da sua organização.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficios.map((beneficio, index) => (
              <motion.div
                key={beneficio.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-olive-100 hover:-translate-y-1"
              >
                <div className="mb-4">{beneficio.icon}</div>
                <h3 className="font-bold text-primary-dark mb-3">{beneficio.titulo}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{beneficio.descricao}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-dark text-white">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6">
              Transforme Sua Empresa
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Invista no bem-estar dos seus colaboradores e colha resultados
              extraordinários. Entre em contato para uma proposta personalizada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Solicitar Proposta
              </motion.a>

              <motion.a
                href="/beneficios-colaboradores"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-primary-dark transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Benefícios para Colaboradores
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
