'use client'

import { motion } from 'framer-motion'

const categorias = [
  {
    titulo: 'Psicoterapia Individual',
    descricao: 'Atendimento personalizado focado nas necessidades especificas de cada pessoa.',
    tecnicas: [
      {
        nome: 'Psicoterapia Breve',
        descricao: 'Abordagem focada em objetivos especificos com resultados em curto prazo.',
      },
      {
        nome: 'Terapia Transpessoal',
        descricao: 'Integracao de aspectos psicologicos, emocionais e espirituais.',
      },
      {
        nome: 'Coaching IS Humanizado',
        descricao: 'Metodologia sistemica e transpessoal para desenvolvimento pessoal e profissional.',
      },
    ],
  },
  {
    titulo: 'Terapia de Casal',
    descricao: 'Trabalho especializado para reconstrucao e fortalecimento de relacionamentos.',
    tecnicas: [
      {
        nome: 'Reconstrucao de Vinculos',
        descricao: 'Restauracao da conexao emocional e confianca entre o casal.',
      },
      {
        nome: 'Comunicacao Afetiva',
        descricao: 'Desenvolvimento de habilidades de comunicacao respeitosa e empativa.',
      },
      {
        nome: 'Resgate da Intimidade',
        descricao: 'Reconexao emocional e fisica para fortalecer a parceria.',
      },
    ],
  },
  {
    titulo: 'Tecnicas de Expansao e Reprogramacao',
    descricao: 'Metodologias avancadas para transformacao profunda e duradoura.',
    tecnicas: [
      {
        nome: 'Constelacao Familiar',
        descricao: 'Revelacao e resolucao de dinamicas familiares inconscientes.',
      },
      {
        nome: 'Terapia na Linha do Tempo',
        descricao: 'Regressao de memoria para acessar e ressignificar experiencias passadas.',
      },
      {
        nome: 'Reprogramacao Neurocelular (R.N.C)',
        descricao: 'Tecnica para reprogramar padroes limitantes a nivel celular.',
      },
      {
        nome: 'EFT - Tecnica de Liberacao Emocional',
        descricao: 'Estimulacao de pontos de acupuntura para liberar emocoes bloqueadas.',
      },
      {
        nome: 'Hipnose e PNL',
        descricao: 'Acesso ao subconsciente para mudancas comportamentais profundas.',
      },
      {
        nome: 'Frequencias de Brilho',
        descricao: 'Trabalho com frequencias energeticas para equilibrio e cura.',
      },
    ],
  },
  {
    titulo: 'Terapias Complementares e Integrativas',
    descricao: 'Abordagens holisticas que complementam o trabalho terapeutico principal.',
    tecnicas: [
      {
        nome: 'Reiki (niveis I, II, III)',
        descricao: 'Canalizacao de energia universal para equilibrio e cura.',
      },
      {
        nome: 'Calatonia',
        descricao: 'Tecnica de relaxamento profundo atraves de toques sutis.',
      },
      {
        nome: 'Access The Bars',
        descricao: 'Liberacao de limitacoes atraves de pontos especificos na cabeca.',
      },
      {
        nome: 'Temazcal - Roda de Cura Xamanica',
        descricao: 'Ritual de purificacao e reconexao com elementos ancestrais.',
      },
      {
        nome: 'Cromoterapia',
        descricao: 'Uso terapeutico das cores para equilibrio energetico.',
      },
    ],
  },
]

export default function Tecnicas() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-olive-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-30" />

        <div className="container-custom relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-2 bg-accent/20 text-primary-dark font-medium rounded-full text-sm mb-6">
              Nossas Tecnicas
            </span>

            <h1 className="heading-1 text-primary-dark mb-6">
              Abordagem Terapeutica Integrativa
            </h1>

            <p className="text-xl text-gray-600">
              Mais de 20 formacoes terapeuticas combinadas para promover transformacao
              profunda e duradoura, respeitando a singularidade de cada pessoa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Destaque */}
      <section className="py-12 bg-primary-dark text-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-xl">
              Voce sabia que mais de <span className="text-accent font-bold">80%</span> dos
              bloqueios emocionais derivam de padroes inconscientes familiares ou memorias
              reprimidas? A integracao de nossas tecnicas pode acelerar em ate{' '}
              <span className="text-accent font-bold">3x</span> a resolucao de traumas,
              fobias e desequilibrios emocionais.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categorias */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-20">
            {categorias.map((categoria, catIndex) => (
              <motion.div
                key={categoria.titulo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <div className="mb-10">
                  <h2 className="heading-3 text-primary-dark mb-4">{categoria.titulo}</h2>
                  <p className="text-lg text-gray-600 max-w-2xl">{categoria.descricao}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoria.tecnicas.map((tecnica, tecIndex) => (
                    <motion.div
                      key={tecnica.nome}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: tecIndex * 0.05 }}
                      className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-olive-100 hover:-translate-y-1"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-light to-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <svg className="w-6 h-6 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-primary-dark mb-2">{tecnica.nome}</h3>
                          <p className="text-gray-600 text-sm">{tecnica.descricao}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
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
              Qual Tecnica e Ideal para Voce?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Cada pessoa e unica e merece uma abordagem personalizada. Entre em
              contato para uma avaliacao e descubra qual caminho terapeutico e mais
              adequado para suas necessidades.
            </p>

            <motion.a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Agendar Consulta
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
