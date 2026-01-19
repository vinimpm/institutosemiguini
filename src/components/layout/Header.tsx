'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Adilson Semiguini', href: '/adilson-semiguini' },
  { name: 'Essencia e Plenitude', href: '/essencia-e-plenitude' },
  { name: 'Tecnicas', href: '/tecnicas' },
  { name: 'Para Empresas', href: '/beneficios-empresa' },
  { name: 'Para Colaboradores', href: '/beneficios-colaboradores' },
  { name: 'Por que investir?', href: '/por-que-investir' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <Image
                src="/brand/PNG/COLORIDO/SEMIGUINI HORIZONTAL 1.png"
                alt="Instituto Semiguini"
                width={180}
                height={50}
                className="h-10 w-auto sm:h-12"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center justify-center flex-1 mx-4">
            <div className="flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-dark rounded-lg hover:bg-primary-light/20 transition-all duration-200 whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/cursos">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-accent text-sm"
              >
                Cursos Semiguini
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            <motion.div
              animate={isMobileMenuOpen ? 'open' : 'closed'}
              className="w-6 h-6 flex flex-col justify-center items-center gap-1.5"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 6 },
                }}
                className="w-6 h-0.5 bg-primary-dark origin-center transition-all"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                className="w-6 h-0.5 bg-primary-dark transition-all"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -6 },
                }}
                className="w-6 h-0.5 bg-primary-dark origin-center transition-all"
              />
            </motion.div>
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="xl:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-gray-700 hover:text-primary-dark hover:bg-primary-light/20 rounded-lg transition-all"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigation.length * 0.05 }}
                  className="pt-4"
                >
                  <Link href="/cursos" onClick={() => setIsMobileMenuOpen(false)}>
                    <button className="btn-accent w-full">
                      Cursos Semiguini
                    </button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
