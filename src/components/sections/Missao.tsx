'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Missao() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-gradient-to-br from-olive-50 via-white to-olive-100 relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-48 h-48 bg-primary-light/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />

      <div className="container-custom relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary-dark/10 text-primary-dark font-medium rounded-full text-sm mb-6">
              Nossa Missao
            </span>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Quote Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-accent/20">
                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <blockquote className="relative z-10">
                <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-dark leading-relaxed text-center">
                  "Promover o desenvolvimento integral de pessoas e organizacoes
                  por meio de solucoes humanizadas, estrategicas e eficazes."
                </p>
              </blockquote>

              {/* Decorative Line */}
              <motion.div
                className="w-24 h-1.5 bg-gradient-to-r from-primary-dark via-primary-light to-accent rounded-full mx-auto mt-10"
                initial={{ width: 0 }}
                animate={isInView ? { width: 96 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              />

              {/* Background Pattern */}
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-olive-50 to-transparent rounded-tl-full" />
            </div>
          </motion.div>

          {/* Vision Cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              {
                title: 'Humanizacao',
                description: 'Cada pessoa e unica, tratamos todos com respeito e empatia.',
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
              },
              {
                title: 'Estrategia',
                description: 'Solucoes inteligentes alinhadas aos objetivos organizacionais.',
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: 'Eficacia',
                description: 'Resultados concretos e transformacoes duradouras.',
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <div className="flex justify-center mb-4 text-primary-dark">{item.icon}</div>
                <h3 className="font-bold text-primary-dark text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
