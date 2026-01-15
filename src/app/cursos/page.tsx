'use client'

import { motion } from 'framer-motion'

const cursos = [
  {
    titulo: 'Essencia e Plenitude Experience',
    descricao: 'Uma jornada de autodescoberta e transformacao profunda. Imersao completa para quem busca reconexao com sua essencia.',
    duracao: 'Imersao de fim de semana',
    modalidade: 'Presencial',
    destaque: true,
    cor: 'from-primary-dark to-primary-light',
  },
  {
    titulo: 'Leader Training I',
    descricao: 'Formacao fundamental em lideranca. Desenvolva as competencias essenciais para liderar com proposito e impacto.',
    duracao: '40 horas',
    modalidade: 'Presencial / Online',
    destaque: false,
    cor: 'from-primary-light to-accent',
  },
  {
    titulo: 'Leader Training II',
    descricao: 'Nivel avancado de lideranca. Aprofundamento em tecnicas de gestao de equipes e desenvolvimento de alta performance.',
    duracao: '40 horas',
    modalidade: 'Presencial / Online',
    destaque: false,
    cor: 'from-olive-600 to-olive-400',
  },
  {
    titulo: 'Coaching Executivo',
    descricao: 'Programa individualizado para executivos e lideres que buscam maximizar seu potencial e acelerar resultados.',
    duracao: '10 sessoes',
    modalidade: 'Presencial / Online',
    destaque: false,
    cor: 'from-accent to-primary-light',
  },
  {
    titulo: 'Inteligencia Emocional nas Organizacoes',
    descricao: 'Desenvolva a capacidade de reconhecer e gerenciar emocoes para melhorar relacionamentos e desempenho.',
    duracao: '16 horas',
    modalidade: 'Presencial / Online',
    destaque: false,
    cor: 'from-olive-500 to-primary-light',
  },
  {
    titulo: 'Gestao de Conflitos e Comunicacao',
    descricao: 'Aprenda tecnicas eficazes para resolver conflitos e desenvolver uma comunicacao assertiva e empativa.',
    duracao: '16 horas',
    modalidade: 'Presencial / Online',
    destaque: false,
    cor: 'from-primary-dark to-olive-600',
  },
]

const palestras = [
  'Saude Mental nas Organizacoes',
  'Lideranca com Proposito',
  'Resiliencia e Adaptabilidade',
  'Equilibrio Vida-Trabalho',
  'Inteligencia Emocional',
  'Comunicacao Nao Violenta',
]

export default function Cursos() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-olive-50 via-white to-primary-light/10 relative overflow-hidden">
        <motion.div
          className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container-custom relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-2 bg-accent/20 text-primary-dark font-medium rounded-full text-sm mb-6">
              Cursos e Formacoes
            </span>

            <h1 className="heading-1 text-primary-dark mb-6">
              Cursos <span className="text-gradient">Semiguini</span>
            </h1>

            <p className="text-xl text-gray-600">
              Programas de formacao e desenvolvimento para individuos e equipes
              que buscam transformacao genuina e resultados duradouros.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cursos */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-primary-light/20 text-primary-dark font-medium rounded-full text-sm mb-6">
              Programas
            </span>
            <h2 className="heading-2 text-primary-dark mb-6">
              Nossos Cursos e Formacoes
            </h2>
            <p className="text-lg text-gray-600">
              Escolha o programa ideal para seu momento e objetivos de desenvolvimento.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cursos.map((curso, index) => (
              <motion.div
                key={curso.titulo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative ${curso.destaque ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-olive-100 hover:-translate-y-1">
                  {/* Header Color Bar */}
                  <div className={`h-2 bg-gradient-to-r ${curso.cor}`} />

                  <div className="p-8">
                    {curso.destaque && (
                      <span className="inline-block px-3 py-1 bg-accent text-primary-dark text-xs font-semibold rounded-full mb-4">
                        Destaque
                      </span>
                    )}

                    <h3 className="text-xl font-bold text-primary-dark mb-3">
                      {curso.titulo}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {curso.descricao}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="px-3 py-1 bg-olive-50 text-olive-700 text-sm rounded-full">
                        {curso.duracao}
                      </span>
                      <span className="px-3 py-1 bg-primary-light/20 text-primary-dark text-sm rounded-full">
                        {curso.modalidade}
                      </span>
                    </div>

                    <motion.a
                      href="https://wa.me/5511999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary-dark font-medium group-hover:text-accent transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      Saiba mais
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Palestras */}
      <section className="section-padding bg-primary-dark text-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent font-medium rounded-full text-sm mb-6">
              Palestras
            </span>
            <h2 className="heading-2 mb-6">
              Palestras e Workshops
            </h2>
            <p className="text-lg text-white/70">
              Levamos conhecimento e inspiracao para sua empresa atraves de
              palestras dinamicas e workshops interativos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {palestras.map((palestra, index) => (
              <motion.div
                key={palestra}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-4 p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
              >
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-medium">{palestra}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-white/60 mb-6">
              Palestras personalizadas de acordo com as necessidades da sua empresa.
            </p>
            <motion.a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar Proposta
            </motion.a>
          </motion.div>
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
              Nao Sabe por Onde Comecar?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Entre em contato e conversemos sobre suas necessidades. Juntos,
              encontraremos o programa ideal para voce ou sua equipe.
            </p>

            <motion.a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
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
