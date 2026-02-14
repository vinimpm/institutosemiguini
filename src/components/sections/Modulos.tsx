'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const modulos = [
  {
    id: 'rh',
    title: 'Processos de Recursos Humanos',
    description: 'Otimização de processos de RH para atrair, desenvolver e reter talentos de forma estratégica.',
    items: [
      'Entrevistas e Assessment',
      'Avaliação de Desempenho',
      'Gestão de Clima Organizacional',
      'Programas de Reconhecimento',
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    id: 'lideranca',
    title: 'Desenvolvimento de Liderança',
    description: 'Formação de líderes inspiradores, capazes de engajar equipes e gerar resultados extraordinários.',
    items: [
      'Leader Training I e II',
      'Coaching Executivo',
      'Liderança com Propósito',
      'Comunicação de Liderança',
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    id: 'equipes',
    title: 'Desenvolvimento de Equipes',
    description: 'Construção de equipes de alta performance através de confiança, colaboração e propósito compartilhado.',
    items: [
      'Team Building',
      'Gestão de Conflitos',
      'Comunicação Assertiva',
      'Inteligência Emocional',
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: 'produtividade',
    title: 'Produtividade',
    description: 'Metodologias e técnicas para maximizar a eficiência sem comprometer o bem-estar das pessoas.',
    items: [
      'Gestão do Tempo',
      'Foco e Priorização',
      'Equilíbrio Vida-Trabalho',
      'Gestão de Energia',
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
]

export default function Modulos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeModule, setActiveModule] = useState(modulos[0].id)

  const activeData = modulos.find((m) => m.id === activeModule)

  return (
    <section className="section-padding bg-primary-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_500px_at_50%_200px,#aec170,transparent)]" />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="inline-block px-4 py-2 bg-accent/20 text-accent font-medium rounded-full text-sm mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Áreas de Atuação
          </motion.span>

          <motion.h2
            className="heading-2 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Módulos de Desenvolvimento
          </motion.h2>

          <motion.p
            className="text-lg text-white/70"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Soluções completas para transformar pessoas e organizações em todas as frentes.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Tabs */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {modulos.map((modulo) => (
              <motion.button
                key={modulo.id}
                onClick={() => setActiveModule(modulo.id)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                  activeModule === modulo.id
                    ? 'bg-accent text-primary-dark shadow-lg shadow-accent/30'
                    : 'bg-white/5 hover:bg-white/10'
                }`}
                whileHover={{ x: activeModule === modulo.id ? 0 : 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-xl ${
                      activeModule === modulo.id ? 'bg-primary-dark/10' : 'bg-white/10'
                    }`}
                  >
                    {modulo.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{modulo.title}</h3>
                    <p
                      className={`text-sm mt-1 ${
                        activeModule === modulo.id ? 'text-primary-dark/70' : 'text-white/50'
                      }`}
                    >
                      {modulo.items.length} programas
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Content */}
          <motion.div
            key={activeModule}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white/5 rounded-3xl p-8 lg:p-10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-accent rounded-2xl text-primary-dark">{activeData?.icon}</div>
              <h3 className="text-2xl font-bold">{activeData?.title}</h3>
            </div>

            <p className="text-white/70 text-lg mb-8">{activeData?.description}</p>

            <div className="space-y-4">
              <h4 className="text-accent font-semibold">Programas inclusos:</h4>
              <ul className="grid sm:grid-cols-2 gap-3">
                {activeData?.items.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.button
              className="btn-accent mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Saiba Mais
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
