import React from "react";
import { motion } from "framer-motion";
import { HeartPulse, BrainCircuit, Stethoscope, Activity, FlaskConical, ArrowRight, ShieldCheck, Clock3, Mail, Phone, MapPin, ExternalLink, Sparkles, UserCog, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const LINKS = {
  substack: "https://lahvie.substack.com",
  calendly: "https://calendly.com/lahvie/discovery",
  email: "care@lahviehealth.com",
  phone: "310-648-9308",
  address: "Los Angeles, CA",
  logoPath: "/lahvie-logo.svg",
};

const POSTS = [
  {
    title: "Adding Life to Your Years",
    blurb: "Lahvie’s ethos: joy, rest, community—plus science. Why we focus on adding life to your years.",
    href: "https://lahvie.substack.com/p/adding-life-to-your-years?r=4jszjq",
    cover: "https://picsum.photos/seed/lahvie-alty/800/480",
  },
  {
    title: "The Nervous System Secret: What Your HRV Reveals",
    blurb: "Why HRV can flag risks earlier than traditional tests—and how to improve it.",
    href: LINKS.substack,
    cover: "https://picsum.photos/seed/lahvie-hrv/800/480",
  },
  {
    title: "Intermittent Fasting, Metabolic Health, and Longevity",
    blurb: "Evidence-backed fasting, autophagy, and circadian alignment—minus the hype.",
    href: LINKS.substack,
    cover: "https://picsum.photos/seed/lahvie-if/800/480",
  },
];

const Section = ({ id, eyebrow, title, subtitle, children }) => (
  <section id={id} className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="mb-10">
      {eyebrow && (
        <div className="mb-2">
          <Badge className="rounded-full px-3 py-1 text-xs font-medium">{eyebrow}</Badge>
        </div>
      )}
      {title && (
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
          {title}
        </h2>
      )}
      {subtitle && <p className="mt-3 text-gray-600 max-w-3xl">{subtitle}</p>}
    </div>
    {children}
  </section>
);

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={LINKS.logoPath} alt="Lahvie logo" className="h-8 w-8" />
            <span className="font-semibold">LAHVIE Health</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-emerald-700">Services</a>
            <a href="#score" className="hover:text-emerald-700">Lahvie Score</a>
            <a href="#substack" className="hover:text-emerald-700">Articles</a>
            <a href="#about" className="hover:text-emerald-700">About</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" className="hidden sm:inline-flex">
              <a href="#contact">Get in touch</a>
            </Button>
            <Button asChild className="bg-emerald-700 hover:bg-emerald-800">
              <a href={LINKS.calendly} target="_blank" rel="noreferrer">Book consult</a>
            </Button>
          </div>
        </div>
      </header>

      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/60 to-white pointer-events-none" />
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Badge className="mb-4 rounded-full">Longevity • Personalized</Badge>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                Adding <span className="text-emerald-700">life</span> to your years.
              </h1>
              <p className="mt-4 text-gray-600 text-lg">
                LAHVIE is a forward-thinking longevity clinic in Los Angeles. We combine advanced lab testing, wearables, and AI to build your personalized health plan—so you live longer <em>and</em> better.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="bg-emerald-700 hover:bg-emerald-800">
                  <a href={LINKS.calendly} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">Start with a Discovery Call <ArrowRight className="h-4 w-4"/></a>
                </Button>
                <Button asChild variant="outline">
                  <a href={LINKS.substack} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">Read our latest on Substack <ExternalLink className="h-4 w-4"/></a>
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
                <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-700"/> Concierge, evidence-based</span>
                <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-emerald-700"/> 90-day results roadmap</span>
              </div>
            </div>
            <div>
              <div className="relative rounded-3xl overflow-hidden shadow-xl ring-1 ring-gray-200">
                <img alt="Vitals and analytics dashboard mock" src="https://images.unsplash.com/photo-1513438205128-16af162807eb?q=80&w=1600&auto=format&fit=crop" className="h-[420px] w-full object-cover" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur rounded-2xl p-4 flex items-center gap-4 shadow">
                  <Activity className="h-6 w-6 text-emerald-800"/>
                  <div>
                    <p className="text-sm font-medium">The Lahvie Score™</p>
                    <p className="text-xs text-gray-600">A clear, patient-facing health score—VO₂ max, HRV, labs, cognition—tracked over time.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <Section id="proof" eyebrow="Why Lahvie" title="From ‘normal’ to optimal">
        <div className="grid md:grid-cols-3 gap-6">
          {[{
            icon: <BrainCircuit className="h-5 w-5"/>,
            title: "AI-enhanced insights",
            text: "We turn your labs + wearables into a unified Lahvie Score with clear next steps."
          },{
            icon: <FlaskConical className="h-5 w-5"/>,
            title: "Advanced diagnostics",
            text: "Metabolic, cardiovascular, hormonal, and cognitive testing—prioritized by impact."
          },{
            icon: <Stethoscope className="h-5 w-5"/>,
            title: "Concierge care",
            text: "Direct access, rapid coordination, and specialist navigation at top centers."
          }].map((f, i) => (
            <Card key={i} className="rounded-2xl">
              <CardHeader>
                <div className="flex items-center gap-2 text-emerald-700">{f.icon}<span className="text-sm font-medium">Feature</span></div>
                <CardTitle className="text-xl mt-1">{f.title}</CardTitle>
                <CardDescription>{f.text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="services" eyebrow="Services" title="Choose your path" subtitle="Start with an AI Optimization assessment or upgrade to concierge for white-glove care.">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl border-emerald-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2"><UserCog className="h-5 w-5 text-emerald-700"/><span className="uppercase tracking-wide text-xs text-emerald-700">Program</span></div>
                <Badge className="bg-gray-100 text-gray-800 rounded-full">Popular</Badge>
              </div>
              <CardTitle className="text-2xl">AI Optimization Program</CardTitle>
              <CardDescription>90-day, data-driven reset with the Lahvie Score™, coaching, and lab-guided protocol.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><Sparkles className="h-4 w-4 text-emerald-700 mt-0.5"/> Comprehensive intake + advanced labs (metabolic, lipid, inflammation, hormones as clinically indicated)</li>
                <li className="flex items-start gap-2"><Sparkles className="h-4 w-4 text-emerald-700 mt-0.5"/> Wearable integration (Whoop/Apple Watch) for HRV, RHR, sleep, and VO₂ max trends</li>
                <li className="flex items-start gap-2"><Sparkles className="h-4 w-4 text-emerald-700 mt-0.5"/> Personalized protocol: nutrition, Zone 2 & VO₂ training, sleep, stress, and medication when appropriate</li>
                <li className="flex items-start gap-2"><Sparkles className="h-4 w-4 text-emerald-700 mt-0.5"/> Two virtual consults + messaging; mid-point lab or metrics check-in</li>
              </ul>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-3xl font-semibold">$795</p>
                  <p className="text-xs text-gray-500">or $1,095 with 6-month follow-up labs</p>
                </div>
                <Button asChild className="bg-emerald-700 hover:bg-emerald-800"><a href={LINKS.calendly} target="_blank" rel="noreferrer">Book discovery</a></Button>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <div className="flex items-center gap-2"><HeartPulse className="h-5 w-5 text-emerald-700"/><span className="uppercase tracking-wide text-xs text-emerald-700">Membership</span></div>
              <CardTitle className="text-2xl">Concierge Longevity</CardTitle>
              <CardDescription>High-touch medical guidance, coordination, and rapid access—built around your goals.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><Sparkles className="h-4 w-4 text-emerald-700 mt-0.5"/> Annual executive workup: labs, VO₂ max, body composition (DEXA optional), cognition</li>
                <li className="flex items-start gap-2"><Sparkles className="h-4 w-4 text-emerald-700 mt-0.5"/> Direct messaging with your physician and priority scheduling</li>
                <li className="flex items-start gap-2"><Sparkles className="h-4 w-4 text-emerald-700 mt-0.5"/> Specialist navigation and surgical coordination at top LA centers</li>
                <li className="flex items-start gap-2"><Sparkles className="h-4 w-4 text-emerald-700 mt-0.5"/> Quarterly strategy reviews + Lahvie Score trend report</li>
              </ul>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-3xl font-semibold">By consult</p>
                  <p className="text-xs text-gray-500">Tailored to scope and access needs</p>
                </div>
                <Button asChild variant="outline"><a href="#contact">Request details</a></Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="score" eyebrow="Signature" title="The Lahvie Score™" subtitle="One number. Fourteen dimensions. Real-world actions.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {title: "VO₂ Max & Fitness", text: "Aerobic capacity, Zone 2 base, and power—trainable at any age."},
            {title: "Autonomic & Sleep", text: "HRV, resting heart rate, recovery and sleep performance."},
            {title: "Metabolic & Inflammation", text: "Glucose, insulin sensitivity, lipid profiles, and key inflammatory markers."},
          ].map((i, idx) => (
            <Card key={idx} className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl">{i.title}</CardTitle>
                <CardDescription>{i.text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-3">
          <Button asChild variant="outline"><a href={LINKS.calendly} target="_blank" rel="noreferrer">See a sample report</a></Button>
          <Button asChild variant="ghost"><a href={LINKS.substack} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2"><Newspaper className="h-4 w-4"/> Read how we use the Score</a></Button>
        </div>
      </Section>

      <Section id="substack" eyebrow="Articles" title="Stay on the cutting edge" subtitle="We publish weekly research-backed insights on longevity, VO₂ max, metabolic health, and more.">
        <div className="grid md:grid-cols-3 gap-6">
          {POSTS.map((p, idx) => (
            <Card key={idx} className="rounded-2xl h-full">
              <img alt="Article cover" src={p.cover} className="w-full h-40 object-cover rounded-t-2xl" />
              <CardHeader>
                <CardTitle className="text-lg">{p.title}</CardTitle>
                <CardDescription>{p.blurb}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="ghost" className="justify-start px-0">
                  <a href={p.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">Read on Substack <ExternalLink className="h-4 w-4"/></a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6">
          <Button asChild className="bg-emerald-700 hover:bg-emerald-800"><a href={LINKS.substack} target="_blank" rel="noreferrer">Subscribe on Substack</a></Button>
        </div>
      </Section>

      <Section id="about" eyebrow="About" title="Care that meets you where you are" subtitle="Founded by Dr. Ladouceur, LAHVIE blends clinical rigor with coaching to turn intent into outcomes.">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Our approach</CardTitle>
              <CardDescription>Education-first, data-driven, relentlessly personal.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 leading-relaxed">
                We start with what matters: your goals, your risks, your time. From there, we build a clear protocol and track progress with the Lahvie Score™. You’ll always know what to do next—and why.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Who we serve</CardTitle>
              <CardDescription>Busy professionals, founders, and families who want longevity with joy.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 leading-relaxed">
                We focus on sustainable, high-leverage actions that compound: Zone 2 training, metabolic optimization, sleep and stress mastery, and targeted therapies when indicated.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="book" eyebrow="Next step" title="Book a discovery call">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="md:col-span-2 rounded-2xl">
            <CardHeader>
              <CardTitle>15-minute intro consult</CardTitle>
              <CardDescription>See if LAHVIE is a fit. No pressure—just clarity.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 mb-4">This button opens your scheduling in a new tab.</p>
              <Button asChild className="bg-emerald-700 hover:bg-emerald-800">
                <a href={LINKS.calendly} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">Request a time <ArrowRight className="h-4 w-4"/></a>
              </Button>
            </CardContent>
          </Card>

          <Card id="contact" className="rounded-2xl">
            <CardHeader>
              <CardTitle>Contact</CardTitle>
              <CardDescription>{LINKS.address} • Virtual nationwide where permitted</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-emerald-700"/> <a href={"mailto:care@lahviehealth.com"} className="hover:text-emerald-700">care@lahviehealth.com</a></li>
                <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-emerald-700"/> <a href={"tel:3106489308"} className="hover:text-emerald-700">310-648-9308</a></li>
                <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-emerald-700"/> {LINKS.address}</li>
              </ul>
              <div className="mt-4 flex gap-3">
                <Button asChild variant="outline"><a href={LINKS.substack} target="_blank" rel="noreferrer">Join the newsletter</a></Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      <footer className="border-t">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} LAHVIE Health. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-emerald-700">Services</a>
            <a href={LINKS.substack} target="_blank" rel="noreferrer" className="hover:text-emerald-700">Substack</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
