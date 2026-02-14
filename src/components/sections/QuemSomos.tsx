'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function QuemSomos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="quem-somos" className="section-padding bg-primary-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="absolute top-10 left-10 w-64 h-64 text-white/5" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" fill="currentColor" />
          </svg>
          <svg className="absolute bottom-10 right-10 w-96 h-96 text-white/5" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            className="inline-block px-4 py-2 bg-accent/20 text-accent font-medium rounded-full text-sm mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Quem Somos
          </motion.span>

          <motion.h2
            className="heading-2 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Transformação Humana e Organizacional
          </motion.h2>

          <motion.div
            className="space-y-6 text-lg text-white/80 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              O <span className="text-accent font-semibold">Instituto Semiguini</span> é uma empresa de{' '}
              <span className="text-white font-semibold">transformação humana e organizacional</span>,
              no mercado desde <span className="text-accent font-semibold">2006</span> com cursos
              motivacionais, palestras, imersões entre outras técnicas.
            </p>
            <p>
              <span className="text-white font-semibold">Atuamos</span> como parceiros estratégicos
              de empresas que acreditam que o desenvolvimento de pessoas é o caminho mais poderoso
              para alcançar resultados sustentáveis.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              { number: '18+', label: 'Anos de Experiência' },
              { number: '20+', label: 'Formações Terapêuticas' },
              { number: '100s', label: 'Vidas Transformadas' },
              { number: '50+', label: 'Empresas Atendidas' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
