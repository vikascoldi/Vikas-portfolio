import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { personalInfo } from '../../data/portfolio'
import { fadeUp, staggerContainer } from '../../utils/motion'
import { Send, Github, Linkedin, Mail, Phone } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `Portfolio Contact from ${form.name}`
    const body = `Name: ${form.name}%0AEmail: ${form.email}%0A%0A${form.message}`
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`)
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-accent tracking-widest uppercase">06 / Contact</span>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        {/* Big CTA heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-20"
        >
          <h2 className="font-display text-[clamp(3rem,10vw,8rem)] text-text leading-none">
            LET'S<br />
            <span className="text-gradient">CONNECT</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            <motion.p variants={fadeUp} className="text-muted leading-relaxed max-w-md">
              I'm currently open to <span className="text-text">internships, freelance work, and full-time roles</span>.
              Whether you have a project in mind or just want to say hi — my inbox is always open.
            </motion.p>

            <motion.div variants={fadeUp} className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                { icon: Github, label: 'GitHub', value: '@vikascoldi', href: personalInfo.github },
                { icon: Linkedin, label: 'LinkedIn', value: 'vikasyadav09xcoldi', href: personalInfo.linkedin },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-9 h-9 border border-border flex items-center justify-center group-hover:border-accent group-hover:text-accent text-muted transition-colors">
                    <Icon size={14} />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-muted tracking-widest uppercase">{label}</p>
                    <p className="text-xs text-text group-hover:text-accent transition-colors">{value}</p>
                  </div>
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {[
              { name: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
              { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
            ].map((field) => (
              <motion.div key={field.name} variants={fadeUp}>
                <label className="block font-mono text-[10px] text-muted tracking-widest uppercase mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required
                  className="w-full bg-surface border border-border px-4 py-3 text-sm text-text placeholder-muted font-mono focus:outline-none focus:border-accent transition-colors"
                />
              </motion.div>
            ))}

            <motion.div variants={fadeUp}>
              <label className="block font-mono text-[10px] text-muted tracking-widest uppercase mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell me about your project..."
                required
                className="w-full bg-surface border border-border px-4 py-3 text-sm text-text placeholder-muted font-mono focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-accent to-accent2 text-white font-mono text-xs tracking-widest uppercase hover:opacity-90 transition-opacity"
              >
                {sent ? 'Opening Mail App...' : 'Send Message'}
                <Send size={13} />
              </button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
