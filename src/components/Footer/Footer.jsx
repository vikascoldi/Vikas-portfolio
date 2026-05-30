import { personalInfo } from '../../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-xl tracking-widest text-gradient">VY</span>
        <p className="font-mono text-xs text-muted text-center">
          Designed & Built by{' '}
          <span className="text-text">Vikas Yadav</span> · {new Date().getFullYear()}
        </p>
        <div className="flex gap-6">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="font-mono text-xs text-muted hover:text-accent transition-colors">GitHub</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="font-mono text-xs text-muted hover:text-accent transition-colors">LinkedIn</a>
          <a href={`mailto:${personalInfo.email}`} className="font-mono text-xs text-muted hover:text-accent transition-colors">Email</a>
        </div>
      </div>
    </footer>
  )
}
