'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const programas = [
  {
    title: 'Essencia e Plenitude Experience',
    description: 'Uma jornada de autodescoberta e transformacao, projetada para quem busca um mergulho profundo no seu eu interior.',
    featured: true,
    href: '/essencia-e-plenitude',
    image: 'bg-gradient-to-br from-primary-dark to-primary-light',
  },
  {
    title: 'Coaching Executivo',
    description: 'Desenvolvimento personalizado para lideres e executivos alcancarem seu maximo potencial.',
    featured: false,
    href: '/cursos',
    image: 'bg-gradient-to-br from-primary-light to-accent',
  },
  {
    title: 'Leader Training I e II',
    description: 'Formacao completa em lideranca com metodologias praticas e transformadoras.',
    featured: false,
    href: '/cursos',
    image: 'bg-gradient-to-br from-olive-600 to-olive-400',
  },
]

export default function Programas() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-olive-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container-custom relative z-10" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="inline-block px-4 py-2 bg-primary-dark/10 text-primary-dark font-medium rounded-full text-sm mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Programas
          </motion.span>

          <motion.h2
            className="heading-2 text-primary-dark mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Programas de Transformacao
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experiencias imersivas e programas estruturados para impulsionar seu
            desenvolvimento pessoal e profissional.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {programas.map((programa, index) => (
            <motion.div
              key={programa.title}
              className={`group ${programa.featured ? 'lg:row-span-2' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Link href={programa.href}>
                <div
                  className={`relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 ${
                    programa.featured ? 'h-full min-h-[500px]' : 'h-64'
                  }`}
                >
                  {/* Background */}
                  <div className={`absolute inset-0 ${programa.image}`} />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                    {programa.featured && (
                      <span className="inline-block w-fit px-3 py-1 bg-accent text-primary-dark text-sm font-semibold rounded-full mb-4">
                        Destaque
                      </span>
                    )}
                    <h3 className={`font-bold mb-3 ${programa.featured ? 'text-3xl' : 'text-xl'}`}>
                      {programa.title}
                    </h3>
                    <p className={`text-white/80 ${programa.featured ? 'text-lg' : 'text-sm'}`}>
                      {programa.description}
                    </p>

                    {/* Arrow */}
                    <div className="mt-4 flex items-center gap-2 text-accent font-medium group-hover:gap-4 transition-all">
                      <span>Saiba mais</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
