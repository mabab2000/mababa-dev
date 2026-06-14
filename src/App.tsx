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
  Globe,
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

function XIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function WhatsApp({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  )
}
import './App.css'

// ─── i18n ─────────────────────────────────────────────────────────────────────

type Lang = 'en' | 'rw' | 'fr'

const TRANSLATIONS = {
  en: {
    navHire: 'Hire Me',
    heroGreeting: "Hello, I'm",
    heroRole: 'Software Engineer',
    heroSince: 'Building digital experiences since 2024',
    heroViewWork: 'View My Work',
    heroContact: 'Contact Me',
    aboutTitle: 'About Me',
    aboutHeading: 'Passionate about building',
    aboutHeadingSuffix: 'great software',
    aboutP1: 'I am Biziyaremye Alphonse, a dedicated Software Engineer with experience building robust, scalable, and user-friendly web applications. Since starting my professional journey in 2024, I have worked on full-stack projects ranging from dynamic frontends to powerful backend APIs.',
    aboutP2: 'I am passionate about clean code, continuous learning, and delivering products that make a real difference. Whether working independently or as part of a team, I bring commitment, creativity, and technical depth to every project.',
    location: 'Rwanda',
    experience: '2024 – Present',
    status: 'Available for hire',
    focus: 'Full-Stack Dev',
    labelLocation: 'Location',
    labelExperience: 'Experience',
    labelStatus: 'Status',
    labelFocus: 'Focus',
    skillsTitle: 'Skills & Technologies',
    expTitle: 'Experience',
    expRole: 'Software Engineer',
    expCompany: 'Self-Employed / Freelance',
    expDesc: 'Designing and developing full-stack web applications for clients. Delivering scalable solutions using modern technologies including React, Node.js, and cloud services.',
    projectsTitle: 'Projects',
    projectsNote: 'Project cards are placeholders — share your project details to fill them in.',
    projectCode: 'Code',
    projectLive: 'Live Demo',
    galleryTitle: 'Gallery',
    galleryNote: "Share your images and I'll replace these placeholders instantly.",
    contactTitle: 'Get In Touch',
    contactHeading: "Let's work",
    contactHeadingSuffix: 'together',
    contactSub: "I'm currently open to new opportunities. Whether you have a project in mind, want to collaborate, or just want to say hi — my inbox is always open.",
    cardDirectLabel: 'Direct Contact',
    cardDirectDesc: 'Reach me by email, phone or WhatsApp',
    cardSocialLabel: 'Social Profiles',
    cardSocialDesc: 'Find me on GitHub, LinkedIn and X',
    cardLocationLabel: 'Based In',
    cardLocationDesc: 'Rwanda — available worldwide',
    labelEmail: 'Email',
    labelPhone: 'Phone / Call',
    labelWhatsApp: 'WhatsApp',
    labelGitHub: 'GitHub',
    labelLinkedIn: 'LinkedIn',
    labelX: 'X (Twitter)',
    footerRights: 'All rights reserved.',
  },
  rw: {
    navHire: 'Nshake',
    heroGreeting: 'Muraho, ndi',
    heroRole: 'Injeniyeri ya Sofutiwe',
    heroSince: 'Kubaka ibikorwa by\'ikoranabuhanga kuva 2024',
    heroViewWork: 'Reba Akazi Kanjye',
    heroContact: 'Mfate Umu Telefoni',
    aboutTitle: 'Ibyerekeye Jye',
    aboutHeading: 'Nshimishwa no kubaka',
    aboutHeadingSuffix: 'sofutiwe nziza',
    aboutP1: 'Ndi Biziyaremye Alphonse, injeniyeri ya sofutiwe ikora imihangano yo kubaka porogaramu zihamye, zishobora gukura kandi zifite uburyo bwiza. Kuva nitangiye akazi kanjye mu 2024, nakoze ku bikorwa bya fullstack binyuze mu mashusho akora no mu API zikomeza.',
    aboutP2: 'Nshimishwa no guandika kode yoroshye, kwiga buri gihe, no gutanga ibicuruzwa bishobora guhindura isi. Niba nkorana n\'abandi cyangwa niko wenyine, ngira ubwitange, uburambe, n\'ubuhanga mu mirimo yanjye yose.',
    location: 'Rwanda',
    experience: '2024 – Ubu',
    status: 'Ndashobora gufatwa',
    focus: 'Fullstack Dev',
    labelLocation: 'Aho ndi',
    labelExperience: 'Uburambe',
    labelStatus: 'Imiterere',
    labelFocus: 'Inshingano',
    skillsTitle: 'Ubuhanga & Ikoranabuhanga',
    expTitle: 'Uburambe',
    expRole: 'Injeniyeri ya Sofutiwe',
    expCompany: 'Kugira Bwite / Freelance',
    expDesc: 'Gutegura no gukora porogaramu za fullstack ku bakiliya. Gutanga ibisubizo bishobora gukura binyuze mu ikoranabuhanga rigezweho harimo React, Node.js, na serivisi z\'ikiragobwa.',
    projectsTitle: 'Imishinga',
    projectsNote: 'Amakarita y\'imishinga ni inshushanyamagambi — tuma amakuru y\'imishinga yawe kugirango yujuzwe.',
    projectCode: 'Kode',
    projectLive: 'Igerageza Nzima',
    galleryTitle: 'Amafoto',
    galleryNote: 'Tuma amafoto yawe kandi nzajyana vuba.',
    contactTitle: 'Twandikane',
    contactHeading: 'Dukorane',
    contactHeadingSuffix: 'hamwe',
    contactSub: 'Ubu ndi mu bucuruzi bushya. Niba ufite umushinga, ushaka gukorana, cyangwa ushaka kuvugana — inbox yanjye ifungutse buri gihe.',
    cardDirectLabel: 'Gutumanahana Butaziguye',
    cardDirectDesc: 'Mfate kuri imeyili, telefoni cyangwa WhatsApp',
    cardSocialLabel: 'Amakuru ku Mbuga',
    cardSocialDesc: 'Umbure kuri GitHub, LinkedIn na X',
    cardLocationLabel: 'Ntuye',
    cardLocationDesc: 'Rwanda — ndashobora gukorana n\'isi yose',
    labelEmail: 'Imeyili',
    labelPhone: 'Telefoni / Guhamagara',
    labelWhatsApp: 'WhatsApp',
    labelGitHub: 'GitHub',
    labelLinkedIn: 'LinkedIn',
    labelX: 'X (Twitter)',
    footerRights: 'Uburenganzira bwose bwihariwe.',
  },
  fr: {
    navHire: 'Recruter',
    heroGreeting: 'Bonjour, je suis',
    heroRole: 'Ingénieur Logiciel',
    heroSince: 'Créer des expériences numériques depuis 2024',
    heroViewWork: 'Voir Mon Travail',
    heroContact: 'Me Contacter',
    aboutTitle: 'À Propos',
    aboutHeading: 'Passionné par la création de',
    aboutHeadingSuffix: 'logiciels remarquables',
    aboutP1: 'Je suis Biziyaremye Alphonse, ingénieur logiciel dévoué avec de l\'expérience dans la création d\'applications web robustes, évolutives et conviviales. Depuis le début de mon parcours professionnel en 2024, j\'ai travaillé sur des projets full-stack allant des interfaces dynamiques aux APIs backend puissantes.',
    aboutP2: 'Je suis passionné par le code propre, l\'apprentissage continu et la livraison de produits qui font une vraie différence. Que je travaille de manière indépendante ou en équipe, j\'apporte engagement, créativité et profondeur technique à chaque projet.',
    location: 'Rwanda',
    experience: '2024 – Présent',
    status: 'Disponible',
    focus: 'Développement Full-Stack',
    labelLocation: 'Localisation',
    labelExperience: 'Expérience',
    labelStatus: 'Statut',
    labelFocus: 'Spécialité',
    skillsTitle: 'Compétences & Technologies',
    expTitle: 'Expérience',
    expRole: 'Ingénieur Logiciel',
    expCompany: 'Indépendant / Freelance',
    expDesc: 'Conception et développement d\'applications web full-stack pour des clients. Livraison de solutions évolutives avec des technologies modernes incluant React, Node.js et les services cloud.',
    projectsTitle: 'Projets',
    projectsNote: 'Les cartes de projet sont des espaces réservés — partagez les détails de vos projets pour les remplir.',
    projectCode: 'Code',
    projectLive: 'Démo en direct',
    galleryTitle: 'Galerie',
    galleryNote: 'Partagez vos images et je remplacerai ces espaces réservés instantanément.',
    contactTitle: 'Contactez-moi',
    contactHeading: 'Travaillons',
    contactHeadingSuffix: 'ensemble',
    contactSub: 'Je suis actuellement ouvert aux nouvelles opportunités. Que vous ayez un projet en tête, que vous souhaitiez collaborer ou simplement dire bonjour — ma boîte de réception est toujours ouverte.',
    cardDirectLabel: 'Contact Direct',
    cardDirectDesc: 'Contactez-moi par e-mail, téléphone ou WhatsApp',
    cardSocialLabel: 'Profils Sociaux',
    cardSocialDesc: 'Retrouvez-moi sur GitHub, LinkedIn et X',
    cardLocationLabel: 'Basé à',
    cardLocationDesc: 'Rwanda — disponible dans le monde entier',
    labelEmail: 'E-mail',
    labelPhone: 'Téléphone / Appel',
    labelWhatsApp: 'WhatsApp',
    labelGitHub: 'GitHub',
    labelLinkedIn: 'LinkedIn',
    labelX: 'X (Twitter)',
    footerRights: 'Tous droits réservés.',
  },
} satisfies Record<Lang, Record<string, string>>

type T = typeof TRANSLATIONS.en

// ─── Data ────────────────────────────────────────────────────────────────────

// ─── Static data ─────────────────────────────────────────────────────────────

const NAV_LINKS: { key: string; label: Record<Lang, string> }[] = [
  { key: 'about',      label: { en: 'About',      rw: 'Ibyerekeye',   fr: 'À Propos'    } },
  { key: 'skills',     label: { en: 'Skills',     rw: 'Ubuhanga',     fr: 'Compétences' } },
  { key: 'experience', label: { en: 'Experience', rw: 'Uburambe',     fr: 'Expérience'  } },
  { key: 'projects',   label: { en: 'Projects',   rw: 'Imishinga',    fr: 'Projets'     } },
  { key: 'gallery',    label: { en: 'Gallery',    rw: 'Amafoto',      fr: 'Galerie'     } },
  { key: 'contact',    label: { en: 'Contact',    rw: 'Twandikane',   fr: 'Contact'     } },
]

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

function Navbar({ t, lang, setLang }: { t: T; lang: Lang; setLang: (l: Lang) => void }) {
  const [open, setOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="text-xl font-bold bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            BA.dev
          </span>
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <button
                key={link.key}
                onClick={() => scrollTo(link.key)}
                className="text-gray-300 hover:text-violet-400 text-sm font-medium transition-colors duration-200"
              >
                {link.label[lang]}
              </button>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            {/* Language switcher */}
            <div className="flex items-center gap-1 bg-gray-800 border border-gray-700 rounded-full px-2 py-1">
              <Globe size={13} className="text-gray-400" />
              {(['en', 'rw', 'fr'] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`text-xs px-2 py-0.5 rounded-full font-medium transition-colors ${
                    lang === l ? 'bg-violet-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <a
              href="mailto:biziyaremyealphonse@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors duration-200"
            >
              {t.navHire}
            </a>
          </div>
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
              key={link.key}
              onClick={() => scrollTo(link.key)}
              className="text-gray-300 hover:text-violet-400 text-sm font-medium text-left transition-colors"
            >
              {link.label[lang]}
            </button>
          ))}
          {/* Mobile language switcher */}
          <div className="flex items-center gap-2">
            <Globe size={14} className="text-gray-400" />
            {(['en', 'rw', 'fr'] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => { setLang(l); setOpen(false) }}
                className={`text-xs px-3 py-1 rounded-full font-medium border transition-colors ${
                  lang === l ? 'bg-violet-600 border-violet-500 text-white' : 'border-gray-700 text-gray-400 hover:text-white'
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <a
            href="mailto:biziyaremyealphonse@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors"
          >
            {t.navHire}
          </a>
        </div>
      )}
    </header>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero({ t }: { t: T }) {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden bg-gray-950 pt-16"
    >
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-700/20 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* ── Left: big profile photo ── */}
          <div className="shrink-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-3xl ring-4 ring-violet-500/40 overflow-hidden bg-gray-800 shadow-2xl shadow-violet-900/30">
            <img
              src="/images/profile.jpeg"
              alt="Biziyaremye Alphonse"
              className="w-full h-full object-cover"
            />
          </div>

          {/* ── Right: text content ── */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-violet-400 font-medium tracking-widest uppercase text-sm mb-3">
              {t.heroGreeting}
            </p>
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold text-white mb-4 leading-tight">
              Biziyaremye{' '}
              <span className="bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Alphonse
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 font-light mb-2">{t.heroRole}</p>
            <p className="text-gray-500 mb-10 text-base sm:text-lg">{t.heroSince}</p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-medium transition-colors duration-200"
              >
                {t.heroViewWork} <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-gray-600 hover:border-violet-400 text-gray-300 hover:text-violet-400 font-medium transition-colors duration-200"
              >
                {t.heroContact}
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              {[
                { icon: <Github size={20} />, href: 'https://github.com/mabab2000', label: 'GitHub' },
                { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/alphonse-biziyaremye-6b55152a2/', label: 'LinkedIn' },
                { icon: <XIcon size={20} />, href: 'https://x.com/Bi_Mababa', label: 'X' },
                { icon: <Mail size={20} />, href: 'mailto:biziyaremyealphonse@gmail.com', label: 'Email' },
              ].map(({ icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-11 h-11 rounded-full border border-gray-700 hover:border-violet-400 flex items-center justify-center text-gray-400 hover:text-violet-400 transition-colors duration-200">
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-600">
        <ChevronDown size={28} />
      </div>
    </section>
  )
}

// ─── About ────────────────────────────────────────────────────────────────────

function About({ t }: { t: T }) {
  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle icon={<User size={20} />} label={t.aboutTitle} />

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
          <div className="relative">
            <div className="w-full aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden bg-gray-800 border border-gray-700">
              <img src="/images/profile.jpeg" alt="Biziyaremye Alphonse" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full max-w-sm aspect-square rounded-2xl border-2 border-violet-500/30 -z-10 mx-auto" />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              {t.aboutHeading}{' '}
              <span className="text-violet-400">{t.aboutHeadingSuffix}</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">{t.aboutP1}</p>
            <p className="text-gray-400 leading-relaxed">{t.aboutP2}</p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { label: t.labelLocation, value: t.location, icon: <MapPin size={14} /> },
                { label: t.labelExperience, value: t.experience, icon: <Calendar size={14} /> },
                { label: t.labelStatus, value: t.status, icon: <Star size={14} /> },
                { label: t.labelFocus, value: t.focus, icon: <Code2 size={14} /> },
              ].map(({ label, value, icon }) => (
                <div key={label} className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="flex items-center gap-2 text-violet-400 text-xs mb-1">{icon}<span>{label}</span></div>
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

function Skills({ t }: { t: T }) {
  return (
    <section id="skills" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle icon={<Code2 size={20} />} label={t.skillsTitle} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-violet-500/50 transition-colors duration-300">
              <h4 className="text-violet-400 font-semibold mb-4 text-sm uppercase tracking-wider">{category}</h4>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />{skill}
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

function Experience({ t }: { t: T }) {
  return (
    <section id="experience" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle icon={<Briefcase size={20} />} label={t.expTitle} />
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
                      <h3 className="text-white font-bold text-lg">{t.expRole}</h3>
                      <p className="text-violet-400 font-medium">{t.expCompany}</p>
                    </div>
                    <span className="text-xs bg-violet-600/20 text-violet-400 border border-violet-500/30 rounded-full px-3 py-1 flex items-center gap-1">
                      <Calendar size={12} /> {exp.year}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{t.expDesc}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-gray-700 text-gray-300 rounded-full px-3 py-1">{tag}</span>
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

function Projects({ t }: { t: T }) {
  return (
    <section id="projects" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle icon={<Code2 size={20} />} label={t.projectsTitle} />
        <p className="text-center text-gray-500 mt-2 mb-12 text-sm">{t.projectsNote}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <div key={i} className={`bg-gray-900 border rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-900/20 ${project.placeholder ? 'border-dashed border-gray-700' : 'border-gray-800'}`}>
              <div className="h-44 bg-gray-800 flex items-center justify-center text-gray-600 border-b border-gray-700">
                {project.placeholder && (<div className="flex flex-col items-center gap-2"><ImageIcon size={36} /><span className="text-xs">Project screenshot</span></div>)}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 my-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-violet-600/20 text-violet-400 border border-violet-500/30 rounded-full px-3 py-1">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 rounded-full px-4 py-2 transition-colors">
                    <Github size={13} /> {t.projectCode}
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-violet-400 border border-gray-700 hover:border-violet-500 rounded-full px-4 py-2 transition-colors">
                    <ExternalLink size={13} /> {t.projectLive}
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

function Gallery({ t }: { t: T }) {
  return (
    <section id="gallery" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle icon={<ImageIcon size={20} />} label={t.galleryTitle} />
        <p className="text-center text-gray-500 mt-2 mb-12 text-sm">{t.galleryNote}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((img, i) =>
            img.src ? (
              <div key={i} className="group relative overflow-hidden rounded-2xl aspect-square bg-gray-800">
                <img src={img.src} alt={img.caption} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gray-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <p className="text-white text-xs">{img.caption}</p>
                </div>
              </div>
            ) : (
              <div key={i} className="aspect-square rounded-2xl bg-gray-800 border-2 border-dashed border-gray-700 flex flex-col items-center justify-center gap-2 text-gray-600 hover:border-violet-500/40 transition-colors">
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

function Contact({ t }: { t: T }) {
  const directLinks = [
    { icon: <Mail size={18} />, label: t.labelEmail, value: 'biziyaremyealphonse@gmail.com', href: 'mailto:biziyaremyealphonse@gmail.com' },
    { icon: <Phone size={18} />, label: t.labelPhone, value: '+250 783 857 284', href: 'tel:+250783857284' },
    { icon: <WhatsApp size={18} />, label: t.labelWhatsApp, value: '+250 783 857 284', href: 'https://wa.me/250783857284' },
  ]
  const socialLinks = [
    { icon: <Github size={18} />, label: t.labelGitHub, value: 'github.com/mabab2000', href: 'https://github.com/mabab2000' },
    { icon: <Linkedin size={18} />, label: t.labelLinkedIn, value: 'linkedin.com/in/alphonse-biziyaremye', href: 'https://www.linkedin.com/in/alphonse-biziyaremye-6b55152a2/' },
    { icon: <XIcon size={18} />, label: t.labelX, value: 'x.com/Bi_Mababa', href: 'https://x.com/Bi_Mababa' },
  ]

  return (
    <section id="contact" className="py-24 bg-gray-950">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <SectionTitle icon={<Mail size={20} />} label={t.contactTitle} />

        <div className="mt-6 text-center max-w-2xl mx-auto mb-14">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {t.contactHeading}{' '}
            <span className="bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {t.contactHeadingSuffix}
            </span>
          </h3>
          <p className="text-gray-400 leading-relaxed">{t.contactSub}</p>
        </div>

        {/* 3 full-width cards on one row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 — Direct contact */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-violet-500/50 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-violet-600/20 flex items-center justify-center text-violet-400">
                <Phone size={22} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg leading-tight">{t.cardDirectLabel}</h4>
                <p className="text-gray-500 text-xs">{t.cardDirectDesc}</p>
              </div>
            </div>
            <div className="space-y-3">
              {directLinks.map(({ icon, label, value, href }) => (
                <a key={label} href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors group">
                  <span className="text-violet-400 group-hover:text-violet-300">{icon}</span>
                  <div>
                    <p className="text-xs text-gray-500">{label}</p>
                    <p className="text-gray-200 text-sm font-medium">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Card 2 — Social profiles */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-violet-500/50 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-violet-600/20 flex items-center justify-center text-violet-400">
                <Github size={22} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg leading-tight">{t.cardSocialLabel}</h4>
                <p className="text-gray-500 text-xs">{t.cardSocialDesc}</p>
              </div>
            </div>
            <div className="space-y-3">
              {socialLinks.map(({ icon, label, value, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors group">
                  <span className="text-violet-400 group-hover:text-violet-300">{icon}</span>
                  <div>
                    <p className="text-xs text-gray-500">{label}</p>
                    <p className="text-gray-200 text-sm font-medium">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Card 3 — Location */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-violet-500/50 transition-colors flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-violet-600/20 flex items-center justify-center text-violet-400">
                <MapPin size={22} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg leading-tight">{t.cardLocationLabel}</h4>
                <p className="text-gray-500 text-xs">{t.cardLocationDesc}</p>
              </div>
            </div>
            {/* Decorative map-like placeholder */}
            <div className="flex-1 rounded-xl bg-gray-800 border border-gray-700 flex flex-col items-center justify-center gap-4 py-8">
              <div className="w-16 h-16 rounded-full bg-violet-600/20 border-2 border-violet-500/40 flex items-center justify-center">
                <MapPin size={32} className="text-violet-400" />
              </div>
              <p className="text-white font-semibold text-lg">Rwanda</p>
              <p className="text-gray-500 text-sm text-center px-4">Kigali · Available worldwide for remote work</p>
              <a
                href="mailto:biziyaremyealphonse@gmail.com"
                className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors"
              >
                <Mail size={15} /> {t.navHire}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer({ t }: { t: T }) {
  return (
    <footer className="py-8 bg-gray-950 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Biziyaremye Alphonse. {t.footerRights}
        </p>
        <div className="flex items-center gap-5">
          {[
            { icon: <Github size={16} />, href: 'https://github.com/mabab2000', label: 'GitHub' },
            { icon: <Linkedin size={16} />, href: 'https://www.linkedin.com/in/alphonse-biziyaremye-6b55152a2/', label: 'LinkedIn' },
            { icon: <XIcon size={16} />, href: 'https://x.com/Bi_Mababa', label: 'X' },
            { icon: <Mail size={16} />, href: 'mailto:biziyaremyealphonse@gmail.com', label: 'Email' },
          ].map(({ icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="text-gray-600 hover:text-violet-400 transition-colors">{icon}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [lang, setLang] = useState<Lang>('en')
  const t = TRANSLATIONS[lang]

  return (
    <div className="font-sans antialiased">
      <Navbar t={t} lang={lang} setLang={setLang} />
      <Hero t={t} />
      <About t={t} />
      <Skills t={t} />
      <Experience t={t} />
      <Projects t={t} />
      <Gallery t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  )
}
