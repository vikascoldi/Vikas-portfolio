import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experience, education } from '../../data/portfolio'
import { fadeUp, staggerContainer } from '../../utils/motion'
import { Briefcase, GraduationCap } from 'lucide-react'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-32 px-6 bg-surface/30">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-accent tracking-widest uppercase">05 / Experience</span>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="font-display text-6xl md:text-8xl text-text leading-none mb-20"
        >
          JOURNEY &<br />
          <span className="text-gradient">GROWTH</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Work Experience */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
              <Briefcase size={14} className="text-accent" />
              <h3 className="font-mono text-xs text-accent tracking-widest uppercase">Work Experience</h3>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

              {experience.map((exp, i) => (
                <motion.div key={i} variants={fadeUp} className="pl-8 pb-10 relative">
                  {/* Dot */}
                  <div className="absolute left-[-4px] top-1 w-2 h-2 rounded-full bg-accent border-2 border-bg" />

                  <div className="border border-border p-6 hover:border-accent/40 transition-colors group">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-text text-sm">{exp.role}</h4>
                    </div>
                    <p className="font-mono text-xs text-accent mb-1">{exp.company}</p>
                    <p className="font-mono text-[10px] text-muted mb-5">{exp.location} · {exp.period}</p>
                    <ul className="space-y-2">
                      {exp.points.map((point, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-muted">
                          <span className="text-accent mt-0.5 flex-shrink-0">▸</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
              <GraduationCap size={14} className="text-accent" />
              <h3 className="font-mono text-xs text-accent tracking-widest uppercase">Education</h3>
            </motion.div>

            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

              {education.map((edu, i) => (
                <motion.div key={i} variants={fadeUp} className="pl-8 pb-10 relative last:pb-0">
                  <div className="absolute left-[-4px] top-1 w-2 h-2 rounded-full bg-accent2 border-2 border-bg" />
                  <div className="border border-border p-6 hover:border-accent/40 transition-colors">
                    <h4 className="font-semibold text-text text-sm mb-1">{edu.degree}</h4>
                    <p className="font-mono text-[11px] text-muted mb-3">{edu.school}</p>
                    <div className="flex gap-4">
                      <span className="font-mono text-xs text-accent">{edu.score}</span>
                      <span className="font-mono text-xs text-muted">{edu.year}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Currently box */}
            <motion.div variants={fadeUp} className="mt-8 border-gradient p-6 rounded-sm">
              <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">// Currently</p>
              <p className="text-sm text-muted leading-relaxed">
                Interning & building full-stack MERN applications. Actively seeking opportunities to grow as a{' '}
                <span className="text-text">Full Stack Developer</span>.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
