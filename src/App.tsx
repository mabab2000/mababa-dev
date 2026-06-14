import { useState } from 'react'
import {
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code2,
  Briefcase,
  User,
  ChevronDown,
  Star,
  Calendar,
  ArrowRight,
  ImageIcon,
} from 'lucide-react'

function Github({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .319.216.694.825.576C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function Linkedin({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
import './App.css'

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_LINKS = ['About', 'Skills', 'Experience', 'Projects', 'Gallery', 'Contact']

const SKILLS: Record<string, string[]> = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
  Backend: ['Node.js', 'Express.js', 'Python', 'REST APIs', 'GraphQL'],
  Database: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
  'DevOps & Tools': ['Git', 'GitHub', 'Docker', 'VS Code', 'Linux', 'Postman'],
}

const EXPERIENCE = [
  {
    year: '2024 – Present',
    role: 'Software Engineer',
    company: 'Self-Employed / Freelance',
    description:
      'Designing and developing full-stack web applications for clients. Delivering scalable solutions using modern technologies including React, Node.js, and cloud services.',
    tags: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
  },
]

const PROJECTS = [
  {
    title: 'Project #1',
    description: 'Details coming soon — share your project info and I will add it here.',
    tags: ['React', 'Node.js'],
    github: '#',
    live: '#',
    placeholder: true,
  },
  {
    title: 'Project #2',
    description: 'Details coming soon — share your project info and I will add it here.',
    tags: ['TypeScript', 'PostgreSQL'],
    github: '#',
    live: '#',
    placeholder: true,
  },
  {
    title: 'Project #3',
    description: 'Details coming soon — share your project info and I will add it here.',
    tags: ['Next.js', 'Tailwind CSS'],
    github: '#',
    live: '#',
    placeholder: true,
  },
]

// 8 placeholder image slots — replace src values once you share photos
const GALLERY_IMAGES: { src: string; caption: string }[] = [
  { src: '', caption: 'Image 1 — add your photo' },
  { src: '', caption: 'Image 2 — add your photo' },
  { src: '', caption: 'Image 3 — add your photo' },
  { src: '', caption: 'Image 4 — add your photo' },
  { src: '', caption: 'Image 5 — add your photo' },
  { src: '', caption: 'Image 6 — add your photo' },
  { src: '', caption: 'Image 7 — add your photo' },
  { src: '', caption: 'Image 8 — add your photo' },
]

// ─── Section title helper ─────────────────────────────────────────────────────

function SectionTitle({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-2 text-violet-400 text-sm font-medium bg-violet-600/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-3">
        {icon}
        {label}
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold text-white">{label}</h2>
      <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-linear-to-r from-violet-500 to-cyan-500" />
    </div>
  )
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="text-xl font-bold bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            BA.dev
          </span>
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-gray-300 hover:text-violet-400 text-sm font-medium transition-colors duration-200"
              >
                {link}
              </button>
            ))}
          </nav>
          <a
            href="mailto:alphonsebiziyaremye@gmail.com"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors duration-200"
          >
            Hire Me
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-300 hover:text-violet-400"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-gray-950 border-t border-gray-800 px-4 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-gray-300 hover:text-violet-400 text-sm font-medium text-left transition-colors"
            >
              {link}
            </button>
          ))}
          <a
            href="mailto:alphonsebiziyaremye@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-950 pt-16"
    >
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-700/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="mx-auto mb-8 w-32 h-32 rounded-full ring-4 ring-violet-500/50 overflow-hidden bg-gray-800 flex items-center justify-center">
          {/* Replace with <img src="./assets/avatar.jpg" alt="Alphonse" className="w-full h-full object-cover" /> once you share your photo */}
          <User size={56} className="text-gray-500" />
        </div>

        <p className="text-violet-400 font-medium tracking-widest uppercase text-sm mb-3">
          Hello, I'm
        </p>
        <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-4 leading-tight">
          Biziyaremye{' '}
          <span className="bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Alphonse
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 font-light mb-2">
          Software Engineer
        </p>
        <p className="text-gray-500 mb-10 text-base sm:text-lg">
          Building digital experiences since 2024
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-medium transition-colors duration-200"
          >
            View My Work <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-gray-600 hover:border-violet-400 text-gray-300 hover:text-violet-400 font-medium transition-colors duration-200"
          >
            Contact Me
          </a>
        </div>

        <div className="flex items-center justify-center gap-5">
          {[
            { icon: <Github size={20} />, href: 'https://github.com/', label: 'GitHub' },
            { icon: <Linkedin size={20} />, href: 'https://linkedin.com/', label: 'LinkedIn' },
            { icon: <Mail size={20} />, href: 'mailto:alphonsebiziyaremye@gmail.com', label: 'Email' },
          ].map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full border border-gray-700 hover:border-violet-400 flex items-center justify-center text-gray-400 hover:text-violet-400 transition-colors duration-200"
            >
              {icon}
            </a>
          ))}
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-600">
          <ChevronDown size={28} />
        </div>
      </div>
    </section>
  )
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle icon={<User size={20} />} label="About Me" />

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
          <div className="relative">
            <div className="w-full aspect-square max-w-sm mx-auto rounded-2xl bg-gray-800 border border-gray-700 flex flex-col items-center justify-center gap-3 text-gray-600">
              {/* Replace contents with <img src="./assets/about.jpg" … /> once you share a photo */}
              <ImageIcon size={64} />
              <p className="text-sm">Your photo goes here</p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full max-w-sm aspect-square rounded-2xl border-2 border-violet-500/30 -z-10 mx-auto" />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              Passionate about building{' '}
              <span className="text-violet-400">great software</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I am <strong className="text-white">Biziyaremye Alphonse</strong>, a dedicated
              Software Engineer with experience building robust, scalable, and user-friendly
              web applications. Since starting my professional journey in 2024, I have worked
              on full-stack projects ranging from dynamic frontends to powerful backend APIs.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I am passionate about clean code, continuous learning, and delivering products
              that make a real difference. Whether working independently or as part of a team,
              I bring commitment, creativity, and technical depth to every project.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { label: 'Location', value: 'Rwanda', icon: <MapPin size={14} /> },
                { label: 'Experience', value: '2024 – Present', icon: <Calendar size={14} /> },
                { label: 'Status', value: 'Available for hire', icon: <Star size={14} /> },
                { label: 'Focus', value: 'Full-Stack Dev', icon: <Code2 size={14} /> },
              ].map(({ label, value, icon }) => (
                <div key={label} className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="flex items-center gap-2 text-violet-400 text-xs mb-1">
                    {icon}
                    <span>{label}</span>
                  </div>
                  <p className="text-white font-medium text-sm">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Skills ───────────────────────────────────────────────────────────────────

function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle icon={<Code2 size={20} />} label="Skills & Technologies" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div
              key={category}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-violet-500/50 transition-colors duration-300"
            >
              <h4 className="text-violet-400 font-semibold mb-4 text-sm uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Experience ───────────────────────────────────────────────────────────────

function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle icon={<Briefcase size={20} />} label="Experience" />

        <div className="mt-12 relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-700 hidden sm:block" />
          <div className="space-y-8">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="hidden sm:flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-violet-600/20 border-2 border-violet-500 flex items-center justify-center shrink-0 z-10">
                    <Briefcase size={18} className="text-violet-400" />
                  </div>
                </div>
                <div className="flex-1 bg-gray-800 border border-gray-700 rounded-2xl p-6 group-hover:border-violet-500/50 transition-colors duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                      <p className="text-violet-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-xs bg-violet-600/20 text-violet-400 border border-violet-500/30 rounded-full px-3 py-1 flex items-center gap-1">
                      <Calendar size={12} /> {exp.year}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-gray-700 text-gray-300 rounded-full px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Projects ─────────────────────────────────────────────────────────────────

function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle icon={<Code2 size={20} />} label="Projects" />
        <p className="text-center text-gray-500 mt-2 mb-12 text-sm">
          Project cards below are placeholders — share your project details to fill them in.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              className={`bg-gray-900 border rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-900/20 ${
                project.placeholder ? 'border-dashed border-gray-700' : 'border-gray-800'
              }`}
            >
              <div className="h-44 bg-gray-800 flex items-center justify-center text-gray-600 border-b border-gray-700">
                {project.placeholder && (
                  <div className="flex flex-col items-center gap-2">
                    <ImageIcon size={36} />
                    <span className="text-xs">Project screenshot</span>
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 my-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-violet-600/20 text-violet-400 border border-violet-500/30 rounded-full px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 rounded-full px-4 py-2 transition-colors"
                  >
                    <Github size={13} /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-violet-400 border border-gray-700 hover:border-violet-500 rounded-full px-4 py-2 transition-colors"
                  >
                    <ExternalLink size={13} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Gallery ──────────────────────────────────────────────────────────────────

function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle icon={<ImageIcon size={20} />} label="Gallery" />
        <p className="text-center text-gray-500 mt-2 mb-12 text-sm">
          Share your images and I'll replace these placeholders instantly.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((img, i) =>
            img.src ? (
              <div key={i} className="group relative overflow-hidden rounded-2xl aspect-square bg-gray-800">
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gray-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <p className="text-white text-xs">{img.caption}</p>
                </div>
              </div>
            ) : (
              <div
                key={i}
                className="aspect-square rounded-2xl bg-gray-800 border-2 border-dashed border-gray-700 flex flex-col items-center justify-center gap-2 text-gray-600 hover:border-violet-500/40 transition-colors"
              >
                <ImageIcon size={28} />
                <p className="text-xs text-center px-2">{img.caption}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:alphonsebiziyaremye@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle icon={<Mail size={20} />} label="Get In Touch" />

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Let's work <span className="text-violet-400">together</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I'm currently open to new opportunities. Whether you have a project in mind,
              want to collaborate, or just want to say hi — my inbox is always open.
            </p>

            <div className="space-y-4">
              {[
                { icon: <Mail size={18} />, label: 'Email', value: 'alphonsebiziyaremye@gmail.com', href: 'mailto:alphonsebiziyaremye@gmail.com' },
                { icon: <Phone size={18} />, label: 'Phone', value: '+250 — update me', href: '#' },
                { icon: <MapPin size={18} />, label: 'Location', value: 'Rwanda', href: '#' },
                { icon: <Github size={18} />, label: 'GitHub', value: 'github.com/alphonse — update me', href: 'https://github.com/' },
                { icon: <Linkedin size={18} />, label: 'LinkedIn', value: 'linkedin.com/in/alphonse — update me', href: 'https://linkedin.com/' },
              ].map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-900 border border-gray-800 rounded-xl hover:border-violet-500/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-violet-600/20 flex items-center justify-center text-violet-400 group-hover:bg-violet-600/40 transition-colors">
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{label}</p>
                    <p className="text-gray-300 text-sm font-medium">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-12">
                <div className="w-16 h-16 rounded-full bg-violet-600/20 flex items-center justify-center">
                  <Mail size={32} className="text-violet-400" />
                </div>
                <h4 className="text-white text-xl font-bold">Message ready!</h4>
                <p className="text-gray-400 text-sm">Your email client should have opened. Send it when ready.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 text-violet-400 hover:text-violet-300 text-sm underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h4 className="text-white font-bold text-lg mb-2">Send a Message</h4>
                <div>
                  <label htmlFor="name" className="block text-xs text-gray-500 mb-1">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs text-gray-500 mb-1">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs text-gray-500 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Send Message <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="py-8 bg-gray-950 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Biziyaremye Alphonse. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          {[
            { icon: <Github size={16} />, href: 'https://github.com/', label: 'GitHub' },
            { icon: <Linkedin size={16} />, href: 'https://linkedin.com/', label: 'LinkedIn' },
            { icon: <Mail size={16} />, href: 'mailto:alphonsebiziyaremye@gmail.com', label: 'Email' },
          ].map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-600 hover:text-violet-400 transition-colors"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}
