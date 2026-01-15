'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const razoes = [
  {
    numero: '01',
    titulo: 'Pessoas Sao Seu Maior Ativo',
    descricao: 'Colaboradores saudaveis emocionalmente sao mais produtivos, criativos e engajados. Investir em pessoas e investir no sucesso do negocio.',
  },
  {
    numero: '02',
    titulo: 'ROI Comprovado',
    descricao: 'Empresas que investem em saude mental tem reducao de ate 25% em absenteismo e 40% em rotatividade, gerando economia significativa.',
  },
  {
    numero: '03',
    titulo: 'Cultura Organizacional Forte',
    descricao: 'Ambientes que priorizam o bem-estar atraem e retem os melhores talentos, criando uma vantagem competitiva sustentavel.',
  },
  {
    numero: '04',
    titulo: 'Prevencao e Melhor que Remedio',
    descricao: 'Programas preventivos custam muito menos que lidar com consequencias de burnout, afastamentos e acoes trabalhistas.',
  },
  {
    numero: '05',
    titulo: 'Responsabilidade Social',
    descricao: 'Empresas que cuidam de seus colaboradores sao vistas como eticas e responsaveis, fortalecendo sua imagem no mercado.',
  },
  {
    numero: '06',
    titulo: 'Resultados Sustentaveis',
    descricao: 'Transformacoes genuinas geram resultados duradouros, nao apenas melhorias temporarias que se perdem com o tempo.',
  },
]

const estatisticas = [
  { valor: '25%', label: 'Reducao em absenteismo' },
  { valor: '40%', label: 'Menor rotatividade' },
  { valor: '3x', label: 'Mais engajamento' },
  { valor: '80%', label: 'Satisfacao dos colaboradores' },
]

export default function PorQueInvestir() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-dark via-olive-700 to-primary-dark text-white relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <motion.span
              className="inline-block px-4 py-2 bg-accent/20 text-accent font-medium rounded-full text-sm mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Investimento Estrategico
            </motion.span>

            <motion.h1
              className="heading-1 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Por que a empresa deve investir{' '}
              <span className="text-accent">nesse programa?</span>
            </motion.h1>

            <motion.p
              className="text-xl text-white/80 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Entenda por que as empresas mais bem-sucedidas estao priorizando o
              desenvolvimento humano como estrategia de crescimento.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Estatisticas */}
      <section className="py-16 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {estatisticas.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.valor}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Razoes */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 text-primary-dark mb-6">
              6 Razoes para Investir
            </h2>
            <p className="text-lg text-gray-600">
              Argumentos solidos para convencer qualquer gestor da importancia
              do investimento em desenvolvimento humano.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {razoes.map((razao, index) => (
              <motion.div
                key={razao.numero}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-olive-100 h-full hover:-translate-y-1">
                  <span className="text-6xl font-bold text-olive-100 absolute top-4 right-4 group-hover:text-accent/30 transition-colors">
                    {razao.numero}
                  </span>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-primary-dark mb-4 pr-12">
                      {razao.titulo}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{razao.descricao}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimento */}
      <section className="section-padding bg-olive-50">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-10 md:p-16 shadow-xl relative">
              <div className="absolute top-6 left-6 text-accent/20">
                <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center relative z-10">
                "Empresas sao feitas de pessoas, e pessoas equilibradas
                emocionalmente criam ambientes mais saudaveis, produtivos e
                colaborativos. O melhor investimento que voce pode fazer e no
                seu capital humano."
              </blockquote>

              <div className="mt-8 text-center">
                <p className="font-bold text-primary-dark">Adilson Semiguini</p>
                <p className="text-gray-500 text-sm">Fundador do Instituto Semiguini</p>
              </div>
            </div>
          </motion.div>
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
              Pronto para Dar o Proximo Passo?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Entre em contato para uma conversa sem compromisso e descubra como
              podemos ajudar sua empresa a transformar resultados atraves das pessoas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                Agendar Conversa
              </motion.a>

              <Link href="/beneficios-empresa">
                <motion.button
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-primary-dark transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver Todos os Beneficios
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
