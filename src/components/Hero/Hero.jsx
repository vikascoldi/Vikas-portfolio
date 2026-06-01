import { motion } from 'framer-motion'
import { personalInfo } from '../../data/portfolio'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#7c3aed 1px, transparent 1px), linear-gradient(90deg, #7c3aed 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent2/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full pt-20">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 border border-border rounded-full"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="font-mono text-xs text-muted tracking-widest uppercase">
            Available for work
          </span>
        </motion.div>

        {/* Main heading */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(4rem,14vw,13rem)] leading-none tracking-tight text-text"
          >
            HI, I'M
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.45, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(4rem,14vw,13rem)] leading-none tracking-tight text-gradient"
          >
            VIKAS
          </motion.h1>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-4">
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="max-w-sm font-body text-muted leading-relaxed text-sm md:text-base"
          >
            A <span className="text-text">Frontend Developer</span> passionate about crafting {' '}
            <span className="text-text">fast, responsive & scalable</span> web experiences with React & MERN.
          </motion.p>

          {/* Right side */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="flex flex-col items-start md:items-end gap-4"
          >
            {/* CTA buttons */}
            <div className="flex gap-3">
              <a
                href="#projects"
                className="px-6 py-3 bg-accent text-white font-mono text-xs tracking-widest uppercase hover:bg-accent/80 transition-colors rounded-sm"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-border text-text font-mono text-xs tracking-widest uppercase hover:border-accent hover:text-accent transition-colors rounded-sm"
              >
                Contact Me
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              {[
                { icon: Github, href: personalInfo.github, label: 'GitHub' },
                { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 flex items-center justify-center border border-border hover:border-accent hover:text-accent text-muted transition-all duration-300"
                  title={label}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 pt-8 border-t border-border grid grid-cols-3 gap-6 max-w-lg"
        >
          {[
            { value: '3+', label: 'Projects Built' },
            { value: '1+', label: 'Years Learning' },
            { value: 'MERN', label: 'Stack Focus' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl text-gradient">{stat.value}</div>
              <div className="font-mono text-xs text-muted tracking-widest uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-muted tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-muted" />
        </motion.div>
      </motion.div>
    </section>
  )
}
