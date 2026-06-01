import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../../data/portfolio'
import { fadeUp, staggerContainer } from '../../utils/motion'

function SkillBar({ name, level, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="font-mono text-xs text-text tracking-wide">{name}</span>
        <span className="font-mono text-xs text-accent">{level}%</span>
      </div>
      <div className="h-px bg-border overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full bg-gradient-to-r from-accent to-accent2"
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="px-6  bg-surface/30">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-accent tracking-widest uppercase">03 / Skills</span>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="font-display text-6xl md:text-8xl text-text leading-none mb-20"
        >
          TECH<br />
          <span className="text-gradient">STACK</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Frontend */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.h3 variants={fadeUp} className="font-mono text-xs text-accent tracking-widest uppercase mb-8">
              Frontend
            </motion.h3>
            <div className="space-y-6">
              {skills.frontend.map((skill, i) => (
                <motion.div key={skill.name} variants={fadeUp}>
                  <SkillBar name={skill.name} level={skill.level} delay={i * 0.1} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.h3 variants={fadeUp} className="font-mono text-xs text-accent tracking-widest uppercase mb-8">
              Backend (Intermediate)
            </motion.h3>
            <div className="space-y-6">
              {skills.backend.map((skill, i) => (
                <motion.div key={skill.name} variants={fadeUp}>
                  <SkillBar name={skill.name} level={skill.level} delay={i * 0.1 + 0.3} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.h3 variants={fadeUp} className="font-mono text-xs text-accent tracking-widest uppercase mb-8">
              Tools & Workflow
            </motion.h3>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              {skills.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 border border-border font-mono text-xs text-muted hover:border-accent hover:text-accent transition-colors duration-300 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </motion.div>

            {/* Decorative block */}
            <motion.div
              variants={fadeUp}
              className="mt-10 p-6 border-gradient rounded-sm"
            >
              <p className="font-mono text-xs text-muted leading-relaxed">
                <span className="text-accent">// Currently learning</span>
                <br />
                Backend architecture,{' '}
                <span className="text-text">MongoDB</span> optimization,
                and full-stack deployment
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
