'use client'

import { motion } from 'framer-motion'

const beneficios = [
  {
    titulo: 'Qualidade de Vida Aprimorada',
    descricao: 'Oferecemos suporte emocional que ajuda a equilibrar a vida pessoal e profissional, resultando em maior satisfacao e bem-estar diario.',
    icon: '🌟',
  },
  {
    titulo: 'Apoio e Recursos Acessiveis',
    descricao: 'Garantimos acesso a atendimento psicologico, palestras, treinamentos e materiais de apoio, assegurando que voce saiba onde buscar ajuda.',
    icon: '🤲',
  },
  {
    titulo: 'Saude Emocional Fortalecida',
    descricao: 'Nossos programas reduzem o estresse, a ansiedade e a depressao, promovendo uma vida mais saudavel e equilibrada.',
    icon: '💚',
  },
  {
    titulo: 'Aumento da Resiliencia',
    descricao: 'Fortalecemos sua capacidade de enfrentar pressoes, mudancas e desafios, desenvolvendo profissionais mais fortes e confiantes.',
    icon: '💪',
  },
  {
    titulo: 'Maior Satisfacao no Trabalho',
    descricao: 'Colaboradores emocionalmente saudaveis demonstram maior prazer em suas atividades, elevando o comprometimento.',
    icon: '😊',
  },
  {
    titulo: 'Desenvolvimento Socioemocional',
    descricao: 'Incentivamos o desenvolvimento de habilidades como empatia, inteligencia emocional, comunicacao assertiva e gestao de conflitos.',
    icon: '🧠',
  },
  {
    titulo: 'Sentimento de Valorizacao',
    descricao: 'A preocupacao genuina da empresa com o bem-estar gera reconhecimento, aumentando o engajamento e a motivacao.',
    icon: '❤️',
  },
  {
    titulo: 'Equilibrio Vida Pessoal-Profissional',
    descricao: 'Colaboradores assistidos emocionalmente conseguem gerenciar melhor suas energias, reduzindo a sensacao de sobrecarga.',
    icon: '⚖️',
  },
  {
    titulo: 'Estimulo a Criatividade',
    descricao: 'Ambientes que priorizam a saude mental impulsionam a liberdade de pensamento, promovendo a criatividade e a inovacao.',
    icon: '🎨',
  },
  {
    titulo: 'Decisoes Mais Assertivas',
    descricao: 'Colaboradores equilibrados emocionalmente tomam decisoes mais eficazes, minimizando erros e aumentando a eficiencia.',
    icon: '✅',
  },
  {
    titulo: 'Melhora nas Relacoes Interpessoais',
    descricao: 'Promovemos relacoes mais saudaveis com colegas, lideres e clientes, otimizando o ambiente de trabalho.',
    icon: '🤝',
  },
  {
    titulo: 'Fortalecimento da Autoconfianca',
    descricao: 'Nossos programas ajudam a reconhecer suas capacidades, aumentando a autoconfianca no desempenho profissional e pessoal.',
    icon: '🦁',
  },
  {
    titulo: 'Reducao de Problemas Fisicos',
    descricao: 'O cuidado com a saude mental impacta positivamente a saude fisica, diminuindo problemas como insonia e dores musculares.',
    icon: '🏃',
  },
]

export default function BeneficiosColaboradores() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-olive-50 via-white to-primary-light/10 relative overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <motion.span
              className="inline-block px-4 py-2 bg-primary-dark/10 text-primary-dark font-medium rounded-full text-sm mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Para Colaboradores
            </motion.span>

            <motion.h1
              className="heading-1 text-primary-dark mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Bem-Estar e Desenvolvimento{' '}
              <span className="text-gradient">Integral</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Acreditamos que o bem-estar dos colaboradores e a chave para o sucesso.
              Nossos programas sao desenhados para promover uma vida mais equilibrada
              e produtiva.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-primary-dark text-white">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xl leading-relaxed">
              Voce merece trabalhar em um ambiente que valoriza seu{' '}
              <span className="text-accent font-bold">bem-estar emocional</span>. Nossos
              programas foram desenvolvidos pensando em voce, para que possa viver e
              trabalhar com mais equilibrio, satisfacao e proposito.
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
              O Que Voce Ganha
            </h2>
            <p className="text-lg text-gray-600">
              Descubra como nossos programas podem transformar sua vida pessoal
              e profissional.
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
                className="group bg-gradient-to-br from-white to-olive-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-olive-100 hover:-translate-y-1"
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
      <section className="section-padding bg-olive-50">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 text-primary-dark mb-6">
              Cuide de Voce
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Sua saude emocional e importante. Se sua empresa ainda nao oferece
              nossos programas, entre em contato e descubra como voce pode se
              beneficiar individualmente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

              <motion.a
                href="/beneficios-empresa"
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Beneficios para Empresas
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
