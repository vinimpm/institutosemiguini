'use client'

import { motion } from 'framer-motion'

const beneficios = [
  'Autoconhecimento profundo',
  'Equilíbrio emocional',
  'Expansão da consciência',
  'Desbloqueio de potenciais',
  'Clareza de propósito',
  'Transformação duradoura',
]

const etapas = [
  {
    titulo: 'Preparação',
    descricao: 'Acolhimento e preparação para a jornada de autodescoberta.',
  },
  {
    titulo: 'Imersão',
    descricao: 'Vivências profundas com técnicas integrativas e terapêuticas.',
  },
  {
    titulo: 'Integração',
    descricao: 'Processamento e integração dos insights e transformações.',
  },
  {
    titulo: 'Sustentação',
    descricao: 'Acompanhamento para sustentar as mudanças no dia a dia.',
  },
]

export default function EssenciaEPlenitude() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-dark via-olive-700 to-primary-dark text-white relative overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              className="inline-block px-4 py-2 bg-accent/20 text-accent font-medium rounded-full text-sm mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Programa de Transformação
            </motion.span>

            <motion.h1
              className="heading-1 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Essência e Plenitude
              <span className="block text-accent">Experience</span>
            </motion.h1>

            <motion.p
              className="text-xl text-white/80 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Uma jornada de autodescoberta e transformação, projetada para quem
              busca um mergulho profundo no seu eu interior.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="btn-accent"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Quero Participar
                </motion.button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* O que e */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-primary-light/20 text-primary-dark font-medium rounded-full text-sm mb-6">
                Sobre o Programa
              </span>

              <h2 className="heading-2 text-primary-dark mb-6">
                Uma Imersão em Si Mesmo
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                O Programa Essência e Plenitude é uma jornada de autodescoberta e
                transformação, projetada para quem busca um mergulho profundo no seu
                eu interior.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Através de metodologias integrativas, o programa visa desbloquear
                potenciais, promover o equilíbrio emocional e expandir a consciência,
                permitindo que cada participante viva sua vida com mais propósito e
                plenitude.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {beneficios.map((beneficio, index) => (
                  <motion.div
                    key={beneficio}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{beneficio}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary-light/20 to-accent/20 p-4 sm:p-8 flex items-center justify-center">
                <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-10 text-center max-w-sm">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-dark to-primary-light rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-dark mb-4">
                    Processo A.M.E
                  </h3>
                  <p className="text-gray-600">
                    Amor, Missão e Essência - os pilares fundamentais para uma vida
                    plena e com propósito.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Etapas */}
      <section className="section-padding bg-olive-50">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-primary-dark/10 text-primary-dark font-medium rounded-full text-sm mb-6">
              A Jornada
            </span>
            <h2 className="heading-2 text-primary-dark mb-6">
              Etapas do Programa
            </h2>
            <p className="text-lg text-gray-600">
              Uma jornada estruturada para guiá-lo em cada passo da sua transformação.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {etapas.map((etapa, index) => (
              <motion.div
                key={etapa.titulo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-6">
                    <span className="text-primary-dark font-bold text-xl">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-3">{etapa.titulo}</h3>
                  <p className="text-gray-600">{etapa.descricao}</p>
                </div>

                {index < etapas.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-light" />
                )}
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
              Pronto para a Transformação?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Junte-se a centenas de pessoas que já viveram essa experiência
              transformadora e descobriram sua essência.
            </p>

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
              Falar com Especialista
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
