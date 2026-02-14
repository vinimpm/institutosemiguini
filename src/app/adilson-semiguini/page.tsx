'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const formacoes = [
  'Psicoterapia Transpessoal',
  'Constelacao Familiar',
  'Terapia na Linha do Tempo',
  'Reprogramacao Neurocelular (R.N.C)',
  'EFT - Tecnica de Liberacao Emocional',
  'Hipnose Clinica',
  'Programacao Neurolinguistica (PNL)',
  'Reiki (niveis I, II, III)',
  'Calatonia',
  'Access The Bars',
  'Temazcal - Roda de cura xamanica',
  'Cromoterapia',
  'Coaching IS Humanizado',
  'Frequencias de Brilho',
]

const frentesAtuacao = [
  'Processo A.M.E - Essencia e Plenitude',
  'Prosperidade familiar, profissional e financeira',
  'Lideranca com proposito',
  'Oficinas, vivencias e rodas de cura',
  'Cursos e Palestras com foco em transformacao',
]

export default function AdilsonSemiguini() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-olive-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-light/10 to-transparent" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-accent/20 text-primary-dark font-medium rounded-full text-sm mb-6">
                Especialista em Transformacao Humana
              </span>

              <h1 className="heading-1 text-primary-dark mb-6">
                Adilson Semiguini
              </h1>

              <div className="flex items-center gap-4 mb-6 text-gray-600">
                <span className="px-3 py-1 bg-primary-dark/10 rounded-full text-sm">
                  CRT 41.796
                </span>
                <span className="px-3 py-1 bg-primary-light/20 rounded-full text-sm">
                  +20 Formacoes Terapeuticas
                </span>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Psicoterapeuta Transpessoal reconhecido por sua abordagem profunda,
                integrativa e transformadora. Guia processos terapeuticos focados no
                autoconhecimento, equilibrio emocional e expansao da consciencia,
                respeitando a singularidade de cada individuo.
              </p>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-olive-100">
                <p className="text-xl italic text-primary-dark font-medium">
                  "Com coragem para minha missao de vida!"
                </p>
                <p className="text-gray-600 mt-2 text-sm">
                  - Conduzir pessoas na jornada de retorno a propria essencia,
                  com responsabilidade, etica e amor.
                </p>
              </div>
            </motion.div>

            {/* Image Placeholder */}
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
                className="absolute -bottom-6 -left-6 bg-accent text-primary-dark px-6 py-4 rounded-2xl shadow-xl"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <p className="font-bold text-2xl">18+</p>
                <p className="text-sm">Anos de experiencia</p>
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
              Formacoes
            </span>
            <h2 className="heading-2 text-primary-dark mb-6">
              +20 Formacoes Terapeuticas
            </h2>
            <p className="text-lg text-gray-600">
              Uma jornada de aprendizado continuo para oferecer o melhor atendimento
              e as tecnicas mais eficazes para cada necessidade.
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
              Atuacao
            </span>
            <h2 className="heading-2 mb-6">
              Frentes de Atuacao
            </h2>
            <p className="text-lg text-white/70">
              Areas de expertise onde posso contribuir para sua transformacao
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
              Transforme Sua Vida com Proposito
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              "Dedico esta missao a todas as pessoas com coragem para se conhecer melhor.
              Tornar-se consciente e tornar possivel a expansao do seu EU, realizar sua
              missao de vida e ser um canal de transformacao."
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
