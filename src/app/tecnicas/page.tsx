'use client'

import { motion } from 'framer-motion'

const categorias = [
  {
    titulo: 'Psicoterapia Individual',
    descricao: 'Atendimento personalizado focado nas necessidades específicas de cada pessoa.',
    tecnicas: [
      {
        nome: 'Psicoterapia Breve',
        descricao: 'Abordagem focada em objetivos específicos com resultados em curto prazo.',
      },
      {
        nome: 'Terapia Transpessoal',
        descricao: 'Integração de aspectos psicológicos, emocionais e espirituais.',
      },
      {
        nome: 'Coaching IS Humanizado',
        descricao: 'Metodologia sistêmica e transpessoal para desenvolvimento pessoal e profissional.',
      },
    ],
  },
  {
    titulo: 'Terapia de Casal',
    descricao: 'Trabalho especializado para reconstrução e fortalecimento de relacionamentos.',
    tecnicas: [
      {
        nome: 'Reconstrução de Vínculos',
        descricao: 'Restauração da conexão emocional e confiança entre o casal.',
      },
      {
        nome: 'Comunicação Afetiva',
        descricao: 'Desenvolvimento de habilidades de comunicação respeitosa e empática.',
      },
      {
        nome: 'Resgate da Intimidade',
        descricao: 'Reconexão emocional e física para fortalecer a parceria.',
      },
    ],
  },
  {
    titulo: 'Técnicas de Expansão e Reprogramação',
    descricao: 'Metodologias avançadas para transformação profunda e duradoura.',
    tecnicas: [
      {
        nome: 'Constelação Familiar',
        descricao: 'Revelação e resolução de dinâmicas familiares inconscientes.',
      },
      {
        nome: 'Terapia na Linha do Tempo',
        descricao: 'Regressão de memória para acessar e ressignificar experiências passadas.',
      },
      {
        nome: 'Reprogramação Neurocelular (R.N.C)',
        descricao: 'Técnica para reprogramar padrões limitantes a nível celular.',
      },
      {
        nome: 'EFT - Técnica de Liberação Emocional',
        descricao: 'Estimulação de pontos de acupuntura para liberar emoções bloqueadas.',
      },
      {
        nome: 'Hipnose e PNL',
        descricao: 'Acesso ao subconsciente para mudanças comportamentais profundas.',
      },
      {
        nome: 'Frequências de Brilho',
        descricao: 'Trabalho com frequências energéticas para equilíbrio e cura.',
      },
    ],
  },
  {
    titulo: 'Terapias Complementares e Integrativas',
    descricao: 'Abordagens holísticas que complementam o trabalho terapêutico principal.',
    tecnicas: [
      {
        nome: 'Reiki (níveis I, II, III)',
        descricao: 'Canalização de energia universal para equilíbrio e cura.',
      },
      {
        nome: 'Calatonia',
        descricao: 'Técnica de relaxamento profundo através de toques sutis.',
      },
      {
        nome: 'Barra de Access',
        descricao: 'Liberação de limitações através de pontos específicos na cabeça.',
      },
{
        nome: 'Cromoterapia',
        descricao: 'Uso terapêutico das cores para equilíbrio energético.',
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
              Nossas Técnicas
            </span>

            <h1 className="heading-1 text-primary-dark mb-6">
              Abordagem Terapêutica Integrativa
            </h1>

            <p className="text-xl text-gray-600">
              Mais de 20 formações terapêuticas combinadas para promover transformação
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
              Você sabia que mais de <span className="text-accent font-bold">80%</span> dos
              bloqueios emocionais derivam de padrões inconscientes familiares ou memórias
              reprimidas? A integração de nossas técnicas pode acelerar em até{' '}
              <span className="text-accent font-bold">3x</span> a resolução de traumas,
              fobias e desequilíbrios emocionais.
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
              Qual Técnica é Ideal para Você?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Cada pessoa é única e merece uma abordagem personalizada. Entre em
              contato para uma avaliação e descubra qual caminho terapêutico é mais
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
