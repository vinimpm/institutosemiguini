'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const categorias = [
  {
    title: 'Psicoterapia Individual',
    tecnicas: ['Psicoterapia Breve', 'Terapia Transpessoal', 'Coaching IS Humanizado'],
  },
  {
    title: 'Terapia de Casal',
    tecnicas: ['Reconstrucao de vinculos', 'Comunicacao afetiva', 'Resgate da intimidade'],
  },
  {
    title: 'Tecnicas de Expansao',
    tecnicas: ['Constelacao Familiar', 'Regressao de Memoria', 'Reprogramacao Neurocelular', 'EFT', 'Hipnose e PNL'],
  },
  {
    title: 'Terapias Integrativas',
    tecnicas: ['Reiki (I, II, III)', 'Calatonia', 'Access The Bars', 'Temazcal', 'Cromoterapia'],
  },
]

export default function Tecnicas() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-olive-50/30 to-white" />

      <div className="container-custom relative z-10" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="inline-block px-4 py-2 bg-primary-light/20 text-primary-dark font-medium rounded-full text-sm mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Nossas Tecnicas
          </motion.span>

          <motion.h2
            className="heading-2 text-primary-dark mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Abordagem Terapeutica Integrativa
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Mais de 20 formacoes terapeuticas combinadas para promover transformacao
            profunda e duradoura.
          </motion.p>
        </div>

        {/* Highlight */}
        <motion.div
          className="bg-gradient-to-r from-primary-dark via-primary-light to-accent p-[1px] rounded-2xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-white rounded-2xl p-8 md:p-10 text-center">
            <p className="text-xl md:text-2xl text-gray-700">
              Voce sabia que mais de <span className="text-primary-dark font-bold">80%</span> dos
              bloqueios emocionais derivam de padroes inconscientes familiares ou memorias reprimidas?
            </p>
            <p className="text-lg text-gray-600 mt-4">
              A integracao de Constelacao Familiar, Regressao de Memoria e Reprogramacao Celular
              pode acelerar em ate <span className="text-accent font-bold">3x</span> a resolucao de
              traumas, fobias e desequilibrios emocionais.
            </p>
          </div>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {categorias.map((categoria, catIndex) => (
            <motion.div
              key={categoria.title}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + catIndex * 0.1 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-olive-100 h-full">
                <h3 className="text-xl font-bold text-primary-dark mb-6 flex items-center gap-3">
                  <span className="w-3 h-3 bg-accent rounded-full" />
                  {categoria.title}
                </h3>
                <ul className="space-y-3">
                  {categoria.tecnicas.map((tecnica, index) => (
                    <motion.li
                      key={tecnica}
                      className="flex items-center gap-3 text-gray-600 group-hover:text-gray-800 transition-colors"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + catIndex * 0.1 + index * 0.05 }}
                    >
                      <svg
                        className="w-5 h-5 text-primary-light flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {tecnica}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link href="/tecnicas">
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Todas as Tecnicas
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
