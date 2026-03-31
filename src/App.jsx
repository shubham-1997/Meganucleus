import {
  ArrowRight,
  Brain,
  Briefcase,
  CheckCircle2,
  Clock3,
  Gauge,
  Quote,
  Sparkles,
  Target,
  Users,
  Zap,
} from 'lucide-react'

const navItems = ['Services', 'How It Works', 'About', 'Contact']

const buttonBase =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

const buttonHero =
  'bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300'

const buttonHeroOutline =
  'border border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 font-medium transition-all duration-300'

const services = [
  {
    title: 'Tech Hiring',
    description:
      'End-to-end hiring support with fast delivery and high-quality candidate pipelines for engineering, AI, data, and product roles.',
    color: 'bg-primary/10 text-primary',
    icon: Briefcase,
  },
  {
    title: 'AI-Assisted Matching',
    description:
      'Recruiter-led screening enhanced by AI insights. Skill-based evaluation combined with human judgment for better candidate relevance.',
    color: 'bg-glow-secondary/10 text-glow-secondary',
    icon: Brain,
  },
  {
    title: 'Embedded Hiring',
    description:
      'Dedicated recruiters aligned with your team. Scalable, flexible hiring support that grows with your organization.',
    color: 'bg-glow-tertiary/10 text-glow-tertiary',
    icon: Users,
  },
  {
    title: 'Team Buildouts',
    description:
      'Full-stack engineers, QA, DevOps, and product managers - complete teams to build and scale web applications.',
    color: 'bg-glow-warm/10 text-glow-warm',
    icon: Target,
  },
]

const process = [
  { title: 'Understand Your Needs', icon: CheckCircle2 },
  { title: 'Smart Sourcing & Screening', icon: Brain },
  { title: 'Curated Shortlist', icon: Sparkles },
  { title: 'Interview -> Offer -> Hire', icon: Zap },
]

const processDescriptions = [
  'We deep-dive into your hiring goals, culture, and tech stack.',
  'Our recruiters leverage AI-assisted tools to source from a vast talent network.',
  'Receive a high-relevance shortlist within days, not weeks.',
  'We support you through interviews to a successful hire.',
]

const metrics = [
  { value: '3x', label: 'Faster Hiring Turnaround' },
  { value: '90%+', label: 'Candidate Relevance Rate' },
  { value: '40%', label: 'Reduction in Hiring Costs' },
  { value: '100+', label: 'Tech Roles Filled' },
]

const differentiators = [
  {
    title: 'Deep Tech Specialization',
    description:
      'We live and breathe tech hiring - engineering, AI, data, and product.',
    color: 'text-primary bg-primary/10',
    icon: Briefcase,
  },
  {
    title: 'Human-First, AI-Enhanced',
    description:
      'Experienced recruiter judgment enhanced by smart AI-assisted tools.',
    color: 'text-glow-secondary bg-glow-secondary/10',
    icon: Brain,
  },
  {
    title: 'Strong Candidate Networks',
    description:
      'Access to passive talent pools built over years of tech recruiting.',
    color: 'text-glow-tertiary bg-glow-tertiary/10',
    icon: Users,
  },
  {
    title: 'High Ownership & Speed',
    description: 'We move fast and take full accountability for results.',
    color: 'text-glow-warm bg-glow-warm/10',
    icon: Zap,
  },
]

const testimonials = [
  {
    quote:
      'Meganucleus helped us scale our engineering team rapidly with high-quality talent and minimal effort.',
    author: 'VP of Engineering',
    company: 'Series B Startup',
  },
  {
    quote:
      'Their expert team, supported by smart tools, cut our hiring time in half. The quality of candidates was consistently impressive.',
    author: 'Head of Talent',
    company: 'Enterprise Tech Co.',
  },
  {
    quote:
      'The embedded hiring model felt like having our own internal recruiting team - but better.',
    author: 'CTO',
    company: 'High-Growth SaaS',
  },
]

function App() {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container px-4 flex items-center justify-between h-16">
          <a href="/" className="font-heading text-xl font-bold tracking-tight">
            <span className="text-gradient">Mega</span>nucleus
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
            <button className={`${buttonBase} ${buttonHero} h-9 rounded-md px-3`}>
              Start Hiring
            </button>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-glow-secondary/5 blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-glow-tertiary/5 blur-[100px]" />

        <div className="container relative z-10 px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              AI-Assisted Talent Solutions
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              Build World-Class Teams with <span className="text-gradient">Expert-Led Hiring</span>{' '}
              Solutions
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Meganucleus combines deep recruiter expertise with AI-assisted tools to help you hire top talent across engineering, data, and product - faster and with greater precision.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className={`${buttonBase} ${buttonHero} h-11 rounded-md px-8 text-base py-6`}>
                Start Hiring
                <ArrowRight className="w-5 h-5 ml-1" />
              </button>
              <button className={`${buttonBase} ${buttonHeroOutline} h-11 rounded-md px-8 text-base py-6`}>
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 border-y border-border/50">
        <div className="container px-4">
          <p className="text-center text-sm text-muted-foreground font-medium uppercase tracking-widest mb-10">
            Trusted by leading global and high-growth companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
            {['Bain & Company', 'Emulus Consulting', 'The Insights Factory'].map((name) => (
              <div
                key={name}
                className="text-xl md:text-2xl font-heading font-semibold text-muted-foreground/60 hover:text-foreground/80 transition-colors duration-300"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-radial-glow opacity-50" />
        <div className="container px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">What We Do</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Expert-led hiring enhanced by smart technology, designed for tech companies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((item) => (
              <div
                key={item.title}
                className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:glow-box"
              >
                <div className={`w-12 h-12 rounded-xl ${item.color.split(' ')[0]} flex items-center justify-center mb-5`}>
                  <item.icon className={`w-6 h-6 ${item.color.split(' ')[1]}`} />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-24 md:py-32 bg-surface">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              A streamlined process built for speed and quality.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />
            <div className="space-y-12">
              {process.map((item, idx) => (
                <div
                  key={item.title}
                  className={`flex items-start gap-6 md:gap-12 ${idx % 2 === 1 ? 'md:flex-row-reverse md:text-right' : ''}`}
                >
                  <div className="flex-1 hidden md:block" />
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-card border border-primary/20 flex items-center justify-center shrink-0 glow-box">
                    <item.icon className="w-7 h-7 text-primary" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{processDescriptions[idx]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="container px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Impact That <span className="text-gradient">Speaks</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {metrics.map((m) => (
              <div key={m.label} className="text-center p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
                <div className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-2">{m.value}</div>
                <div className="text-sm text-muted-foreground font-medium inline-flex items-center gap-2">
                  <Gauge className="w-4 h-4" />
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 md:py-32 bg-surface">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Why Meganucleus</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              We don&apos;t just fill roles - we build teams that win.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {differentiators.map((d) => (
              <div key={d.title} className="flex items-start gap-4 p-6 rounded-xl border border-border/30 hover:border-primary/20 transition-colors duration-300">
                <div className={`w-10 h-10 rounded-lg ${d.color.split(' ')[1]} flex items-center justify-center shrink-0`}>
                  <d.icon className={`w-5 h-5 ${d.color.split(' ')[0]}`} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t) => (
              <div key={t.author + t.company} className="p-8 rounded-2xl bg-card border border-border/50 relative">
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-foreground/90 leading-relaxed mb-6 italic">&quot;{t.quote}&quot;</p>
                <div>
                  <p className="font-semibold text-sm">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="container px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to build your <span className="text-gradient">dream team</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Let&apos;s talk about how Meganucleus can bring expert recruiters and smart tools together to scale your team with confidence.
            </p>
            <button className={`${buttonBase} ${buttonHero} h-11 rounded-md px-10 text-base py-6`}>
              Get Started
              <ArrowRight className="w-5 h-5 ml-1" />
            </button>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border/50">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-heading font-bold text-lg">
              <span className="text-gradient">Mega</span>nucleus
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Meganucleus. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
