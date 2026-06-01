import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { projects } from '../../data/portfolio'
import { Github, ExternalLink, ArrowRight } from 'lucide-react'
import { fadeUp, staggerContainer } from '../../utils/motion'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-accent tracking-widest uppercase">04 / Projects</span>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="font-display text-6xl md:text-8xl text-text leading-none mb-20"
        >
          SELECTED<br />
          <span className="text-gradient">WORK</span>
        </motion.h2>

        {/* Projects list */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-0"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group border-t border-border py-8 flex flex-col md:flex-row md:items-center gap-6 hover:border-accent/40 transition-colors duration-300 last:border-b"
            >
              {/* Number */}
              <span className="font-display text-5xl text-muted/30 group-hover:text-accent/40 transition-colors duration-300 w-16 flex-shrink-0">
                {project.number}
              </span>

              {/* Info */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3">
                  <h3 className="font-body font-semibold text-text text-lg group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 5).map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] tracking-widest uppercase text-muted border border-border px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-muted text-sm leading-relaxed max-w-xl">{project.description}</p>
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 flex-shrink-0">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 font-mono text-xs text-muted hover:text-text transition-colors"
                >
                  <Github size={14} />
                  Code
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-2 px-4 py-2 border border-border font-mono text-xs text-text hover:border-accent hover:text-accent transition-colors"
                >
                  Live Project
                  <ArrowRight size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/vikascoldi"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 font-mono text-sm text-muted hover:text-accent transition-colors"
          >
            <Github size={16} />
            See more on GitHub
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
