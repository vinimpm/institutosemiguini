'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const formacoes = [
  'Psicoterapia Transpessoal',
  'Constelação Familiar',
  'Terapia na Linha do Tempo',
  'Reprogramação Neurocelular (R.N.C)',
  'EFT - Técnica de Liberação Emocional',
  'Hipnose Clínica',
  'Programação Neurolinguística (PNL)',
  'Reiki (níveis I, II, III)',
  'Calatonia',
  'Barra de Access',
'Cromoterapia',
  'Coaching IS Humanizado',
  'Frequências de Brilho',
]

const frentesAtuacao = [
  'Processo A.M.E - Essência e Plenitude',
  'Prosperidade familiar, profissional e financeira',
  'Liderança com propósito',
  'Oficinas, vivências e rodas de cura',
  'Cursos e Palestras com foco em transformação',
]

export default function AdilsonSemiguini() {
  return (
    <div className="pt-24">
      {/* Hero - Sua Carreira */}
      <section className="section-padding bg-primary-dark text-white relative overflow-hidden">
        <motion.div
          className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl font-bold mb-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Sua carreira<span className="text-accent">.</span>
              </motion.h1>

              <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <span className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p>
                    Psicoterapeuta Transpessoal (CRT 41.796),{' '}
                    <span className="font-bold text-white">treinador comportamental e
                    especialista em desenvolvimento humano</span>, Adilson construiu uma trajetória de{' '}
                    <span className="font-bold text-white">mais de 19 anos</span> dedicada a uma
                    missão clara: romper limitações emocionais, expandir consciências e ativar o
                    verdadeiro potencial humano.
                  </p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Sua jornada começou no mundo corporativo, atuando em gigantes como{' '}
                  <span className="font-bold text-white">Banco Itaú, Coca-Cola e grandes
                  indústrias nacionais.</span> Foi ali que compreendeu, na prática, as dores
                  invisíveis que travam resultados: medo, insegurança, conflitos internos,
                  ausência de propósito e bloqueios de prosperidade.
                </motion.p>

                <motion.p
                  className="italic text-white/60"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Mas ele foi além do mercado. Decidiu entender a mente.
                </motion.p>
              </div>

              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight space-y-1">
                  <span className="inline-block bg-accent/20 text-accent px-3 py-1">A EMOÇÃO.</span>
                  <br />
                  <span className="inline-block bg-accent/20 text-accent px-3 py-1">A ENERGIA.</span>
                  <br />
                  <span className="inline-block bg-accent/20 text-accent px-3 py-1">A ALMA HUMANA.</span>
                </h2>
                <p className="text-accent font-medium text-lg mt-6">
                  E mergulhou profundamente.
                </p>
              </motion.div>
            </motion.div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/brand/FOTOS/Adilson_pagina.jpg"
                  alt="Adilson Semiguini"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 bg-accent text-primary-dark px-4 py-3 sm:px-6 sm:py-4 rounded-2xl shadow-xl"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <p className="font-bold text-2xl">19+</p>
                <p className="text-sm">Anos de experiência</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Formacoes */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-primary-light/20 text-primary-dark font-medium rounded-full text-sm mb-6">
              Formações
            </span>
            <h2 className="heading-2 text-primary-dark mb-6">
              +20 Formações Terapêuticas
            </h2>
            <p className="text-lg text-gray-600">
              Uma jornada de aprendizado contínuo para oferecer o melhor atendimento
              e as técnicas mais eficazes para cada necessidade.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {formacoes.map((formacao, index) => (
              <motion.div
                key={formacao}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 bg-olive-50 rounded-xl hover:bg-olive-100 transition-colors"
              >
                <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">{formacao}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Frentes de Atuacao */}
      <section className="section-padding bg-primary-dark text-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent font-medium rounded-full text-sm mb-6">
              Atuação
            </span>
            <h2 className="heading-2 mb-6">
              Frentes de Atuação
            </h2>
            <p className="text-lg text-white/70">
              Áreas de expertise onde posso contribuir para sua transformação
              pessoal e profissional.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frentesAtuacao.map((frente, index) => (
              <motion.div
                key={frente}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-colors border border-white/10"
              >
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                  <span className="text-primary-dark font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold">{frente}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-olive-50">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 text-primary-dark mb-6">
              Transforme Sua Vida com Propósito
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              "Dedico esta missão a todas as pessoas com coragem para se conhecer melhor.
              Tornar-se consciente e tornar possível a expansão do seu EU, realizar sua
              missão de vida e ser um canal de transformação."
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Agendar Atendimento
              </motion.a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Atendimento personalizado
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Presencial e online
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
