'use client'

import { motion } from 'framer-motion'

const beneficios = [
  {
    titulo: 'Reducao do Absenteismo',
    descricao: 'Programas de saude mental diminuem faltas e afastamentos, garantindo equipes mais presentes e engajadas.',
    icon: '📉',
  },
  {
    titulo: 'Menor Rotatividade',
    descricao: 'Empresas que cuidam da saude emocional retem talentos, reduzindo custos e mantendo a continuidade do conhecimento interno.',
    icon: '🔄',
  },
  {
    titulo: 'Clima Organizacional Fortalecido',
    descricao: 'Ambientes que priorizam o bem-estar promovem confianca, colaboracao e respeito, melhorando o dia a dia de trabalho.',
    icon: '☀️',
  },
  {
    titulo: 'Melhora de Desempenho e Produtividade',
    descricao: 'Colaboradores equilibrados trabalham com mais foco e energia, elevando a produtividade geral da empresa.',
    icon: '📈',
  },
  {
    titulo: 'Reducao de Riscos Juridicos',
    descricao: 'A atencao a saude mental minimiza riscos de acoes trabalhistas relacionadas a assedio moral, burnout ou condicoes insalubres.',
    icon: '⚖️',
  },
  {
    titulo: 'Fortalecimento da Marca Empregadora',
    descricao: 'Ser reconhecida como uma empresa que valoriza a saude mental fortalece a reputacao e atrai os melhores talentos.',
    icon: '🏆',
  },
  {
    titulo: 'Aumento da Atracao de Talentos',
    descricao: 'Organizacoes focadas no bem-estar sao mais atrativas para novos profissionais de alta performance.',
    icon: '🧲',
  },
  {
    titulo: 'Maior Adaptabilidade',
    descricao: 'Colaboradores resilientes lidam melhor com mudancas, tornando a empresa mais agil e preparada para o futuro.',
    icon: '🔀',
  },
  {
    titulo: 'Reducao de Conflitos Internos',
    descricao: 'Ambientes com suporte emocional apresentam menos conflitos interpessoais e mais colaboracao.',
    icon: '🤝',
  },
  {
    titulo: 'Cultura Organizacional Solida',
    descricao: 'Investir em saude mental reforca valores de cuidado, respeito e responsabilidade, construindo uma cultura robusta.',
    icon: '🏛️',
  },
  {
    titulo: 'Comunicacao Interna Aprimorada',
    descricao: 'Ambientes equilibrados promovem comunicacao clara, transparente e respeitosa entre lideres e equipes.',
    icon: '💬',
  },
  {
    titulo: 'Maior Engajamento das Equipes',
    descricao: 'Colaboradores que se sentem cuidados engajam-se mais nos objetivos da empresa, aumentando o desempenho organizacional.',
    icon: '🎯',
  },
  {
    titulo: 'Melhora da Reputacao Institucional',
    descricao: 'O cuidado com a saude mental contribui para uma imagem publica etica, humana e responsavel.',
    icon: '⭐',
  },
  {
    titulo: 'Aumento da Vantagem Competitiva',
    descricao: 'Organizacoes que promovem saude mental se destacam no mercado, atraindo clientes, talentos e investidores.',
    icon: '🚀',
  },
  {
    titulo: 'Estimulo a Inovacao',
    descricao: 'Colaboradores com suporte emocional sentem-se mais seguros para propor novas ideias, estimulando a inovacao.',
    icon: '💡',
  },
]

export default function BeneficiosEmpresa() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-dark via-olive-700 to-primary-dark text-white relative overflow-hidden">
        <motion.div
          className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <motion.span
              className="inline-block px-4 py-2 bg-accent/20 text-accent font-medium rounded-full text-sm mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Para Empresas
            </motion.span>

            <motion.h1
              className="heading-1 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Investimento Estrategico em{' '}
              <span className="text-accent">Capital Humano</span>
            </motion.h1>

            <motion.p
              className="text-xl text-white/80 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Investir no desenvolvimento emocional e humano dos colaboradores nao e
              apenas um diferencial, mas uma estrategia essencial para a
              sustentabilidade e o crescimento do negocio.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-olive-50">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-700 leading-relaxed">
              Empresas sao feitas de <span className="font-bold text-primary-dark">pessoas</span>,
              e pessoas equilibradas emocionalmente criam ambientes mais saudaveis,
              produtivos e colaborativos. O cuidado com o capital humano e o melhor
              investimento que sua empresa pode fazer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-primary-light/20 text-primary-dark font-medium rounded-full text-sm mb-6">
              Beneficios
            </span>
            <h2 className="heading-2 text-primary-dark mb-6">
              O Que Sua Empresa Ganha
            </h2>
            <p className="text-lg text-gray-600">
              Descubra como o investimento em desenvolvimento humano transforma
              os resultados da sua organizacao.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficios.map((beneficio, index) => (
              <motion.div
                key={beneficio.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-olive-100 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{beneficio.icon}</div>
                <h3 className="font-bold text-primary-dark mb-3">{beneficio.titulo}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{beneficio.descricao}</p>
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
              Transforme Sua Empresa
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Invista no bem-estar dos seus colaboradores e colha resultados
              extraordinarios. Entre em contato para uma proposta personalizada.
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
                Solicitar Proposta
              </motion.a>

              <motion.a
                href="/beneficios-colaboradores"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-primary-dark transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Beneficios para Colaboradores
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
