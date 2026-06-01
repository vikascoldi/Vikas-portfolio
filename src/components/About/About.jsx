import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { personalInfo, education, experience } from '../../data/portfolio'
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react'
import { fadeUp, staggerContainer } from '../../utils/motion'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-accent tracking-widest uppercase">02 / About</span>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.h2
              variants={fadeUp}
              className="font-display text-6xl md:text-7xl text-text leading-none mb-8"
            >
              WHO<br />
              <span className="text-gradient">I AM</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-muted leading-relaxed mb-6 text-sm md:text-base">
              {personalInfo.bio}
            </motion.p>
            <motion.p variants={fadeUp} className="text-muted leading-relaxed mb-8 text-sm md:text-base">
              Currently interning at <span className="text-text">i-DigiTech Skills & Solution</span>, building
              real-world MERN stack applications. I love clean code, pixel-perfect UI, and continuous growth.
            </motion.p>

            {/* Contact details */}
            <motion.div variants={fadeUp} className="space-y-3">
              {[
                { icon: MapPin, text: personalInfo.location },
                { icon: Mail, text: personalInfo.email },
                { icon: Phone, text: personalInfo.phone },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm">
                  <Icon size={14} className="text-accent flex-shrink-0" />
                  <span className="font-mono text-muted">{text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Experience + Education */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            {/* Experience */}
            <motion.div variants={fadeUp}>
              <h3 className="font-mono text-xs text-accent tracking-widest uppercase mb-6">
                Experience
              </h3>
              {experience.map((exp, i) => (
                <div key={i} className="border border-border p-6 rounded-sm hover:border-accent/40 transition-colors group">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-body font-semibold text-text text-sm">{exp.role}</h4>
                      <p className="font-mono text-xs text-accent mt-0.5">{exp.company}</p>
                    </div>
                    <span className="font-mono text-[10px] text-muted tracking-wider bg-surface px-2 py-1 rounded">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-1.5 mt-4">
                    {exp.points.slice(0, 6).map((point, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-muted">
                        <span className="text-accent mt-0.5 flex-shrink-0">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>

            {/* Education */}
            <motion.div variants={fadeUp}>
              <h3 className="font-mono text-xs text-accent tracking-widest uppercase mb-6">
                Education
              </h3>
              <div className="space-y-3">
                {education.map((edu, i) => (
                  <div key={i} className="flex items-start justify-between py-3 border-b border-border last:border-0">
                    <div>
                      <p className="text-xs text-text font-medium">{edu.degree}</p>
                      <p className="font-mono text-[11px] text-muted mt-0.5">{edu.school}</p>
                    </div>
                    <div className="text-right flex-shrink-0 ml-4">
                      <p className="font-mono text-xs text-accent">{edu.score}</p>
                      <p className="font-mono text-[10px] text-muted mt-0.5">{edu.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
