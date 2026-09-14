'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Globe, 
  ExternalLink, 
  Code, 
  Layers, 
  Smartphone, 
  ArrowRight, 
  MessageCircle, 
  X, 
  Send, 
  CheckCircle, 
  Calendar, 
  User, 
  Sparkles, 
  Loader2, 
  Menu,
  Award,
  Briefcase,
  GraduationCap,
  ChevronRight,
  ChevronLeft,
  Copy,
  Check,
  Cpu,
  ShieldCheck,
  ArrowUpRight,
  MapPin,
  Phone
} from 'lucide-react';

const LinkedinIcon = ({ size = 18, className = "", style = {} }: { size?: number; className?: string; style?: React.CSSProperties }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const PlayStoreIcon = ({ size = 16, className = "", style = {} }: { size?: number; className?: string; style?: React.CSSProperties }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={style}
    aria-hidden="true"
  >
    <path d="M3.609 1.814L13.792 12 3.61 22.186a2.44 2.44 0 0 1-.61-1.636V3.45c0-.623.226-1.196.609-1.636zm11.242 11.244L17.75 14.7 5.253 21.921l9.598-8.863zm0-2.116L5.253 2.079l12.497 7.22-2.899 1.643zm2.233 1.267l3.655 2.11a1.233 1.233 0 0 0 0-2.138l-3.655-2.11-1.393 1.069 1.393 1.069z"/>
  </svg>
);

const AppleIcon = ({ size = 16, className = "", style = {} }: { size?: number; className?: string; style?: React.CSSProperties }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={style}
    aria-hidden="true"
  >
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.87-.9.04-2.02.6-2.66 1.34-.56.65-.96 1.7-0.83 2.73 1.01.08 2.04-.51 2.57-1.2"/>
  </svg>
);

const WaveBackground = () => (
  <div className="wave-bg-container">
    <svg className="wave-svg" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: 15 }).map((_, i) => {
        const shift = i * 15;
        const opacity = 0.02 + (i / 15) * 0.045;
        return (
          <path
            key={i}
            d={`M -100 ${450 + shift} 
                C 300 ${200 + shift}, 700 ${700 - shift}, 1100 ${300 + shift} 
                T 1600 ${500 - shift}`}
            stroke="rgba(56, 189, 248, 0.25)"
            strokeWidth="0.75"
            style={{
              opacity,
              animation: `waveMove ${15 + i * 2}s infinite ease-in-out alternate`
            }}
          />
        );
      })}
      {Array.from({ length: 12 }).map((_, i) => {
        const shift = i * 20;
        const opacity = 0.015 + (i / 12) * 0.035;
        return (
          <path
            key={`second-${i}`}
            d={`M -100 ${350 - shift} 
                C 400 ${600 - shift}, 800 ${100 + shift}, 1200 ${500 - shift} 
                T 1600 ${300 + shift}`}
            stroke="rgba(129, 140, 248, 0.2)"
            strokeWidth="0.5"
            style={{
              opacity,
              animation: `waveMove ${20 + i * 3}s infinite ease-in-out alternate-reverse`
            }}
          />
        );
      })}
    </svg>
  </div>
);

const TYPING_WORDS = [
  "Cross-Platform Flutter & Android Solutions.",
  "Enterprise Next.js & NestJS Ecosystems.",
  "Mission-Critical Desktop Management Systems.",
  "Low-Latency WebRTC & IoT BLE Architecture.",
  "Clean Architecture & Distributed Systems."
];

const TypingEffect = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const activeWord = TYPING_WORDS[currentWordIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayedText.length < activeWord.length) {
        timer = setTimeout(() => {
          setDisplayedText(activeWord.slice(0, displayedText.length + 1));
        }, 80);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2400);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(activeWord.slice(0, displayedText.length - 1));
        }, 35);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % TYPING_WORDS.length);
        }, 300);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex]);

  return (
    <span style={{ 
      display: 'inline-block', 
      position: 'relative', 
      whiteSpace: 'nowrap',
      verticalAlign: 'bottom',
      color: '#38bdf8'
    }}>
      <span style={{ 
        display: 'inline-block',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        transform: 'translate3d(0,0,0)'
      }}>
        {displayedText || '\u00A0'}
      </span>
      <span className="typing-cursor" style={{
        color: '#38bdf8',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        transform: 'translate3d(0,0,0)'
      }}>|</span>
    </span>
  );
};

interface ProjectLiveLink {
  label: string;
  url: string;
  type?: 'playstore' | 'appstore' | 'web' | 'demo' | 'contact' | string;
}

interface Project {
  title: string;
  market: string;
  platform: string;
  category: string;
  role: string;
  desc: string;
  primaryImg: string;
  gallery: string[];
  tech: string[];
  liveLinks: ProjectLiveLink[];
  challenges: string;
  results: string;
  timeline: string;
}

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
  hasAward?: boolean;
  awardTitle?: string;
  awardIssuer?: string;
  awardDate?: string;
  awardRecipient?: string;
  awardCitation?: string;
  awardSigner?: string;
  awardImage?: string;
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  
  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please complete all required fields.");
      setFormStatus('error');
      return;
    }
    
    setFormStatus('loading');
    setErrorMessage('');
    
    try {
      const response = await fetch("https://formspree.io/f/mqaeewne", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Portfolio Contact Form - Ikram Ullah",
          message: formData.message
        })
      });
      
      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setTimeout(() => {
          setFormStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 1200);
      }
    } catch {
      setTimeout(() => {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1200);
    }
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation for modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setSelectedCertificate(null);
      }
      if (!selectedProject) return;
      if (e.key === 'ArrowRight' && selectedProject.gallery?.length) {
        setActiveGalleryIndex((prev) => (prev + 1) % selectedProject.gallery.length);
      }
      if (e.key === 'ArrowLeft' && selectedProject.gallery?.length) {
        setActiveGalleryIndex((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  // Lock body scroll when modal or certificate is open to eliminate background bleed
  useEffect(() => {
    if (selectedProject || selectedCertificate) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow || 'unset';
      };
    }
  }, [selectedProject, selectedCertificate]);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setActiveGalleryIndex(0);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  // Projects Data aligned with CV and Provided Images
  const projects: Project[] = [
    {
      title: "Al-Etihad Cooperative Insurance",
      market: "Saudi Arabia 🇸🇦",
      platform: "Mobile App (iOS & Android)",
      category: "mobile",
      role: "Lead Mobile Architect / Mobile Team Lead",
      desc: "Flagship insurance application handling high transaction volumes, multi-step motor claim workflows, policyholder issuance, and digital vehicle insurance cards for the Saudi market.",
      primaryImg: "/projects-images/aletihad%20img/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-06-04%20at%2014.10.04.png",
      gallery: [
        "/projects-images/aletihad%20img/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-06-04%20at%2014.10.04.png",
        "/projects-images/aletihad%20img/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-06-04%20at%2014.12.11.png",
        "/projects-images/aletihad%20img/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-06-04%20at%2014.10.45.png",
        "/projects-images/aletihad%20img/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-06-04%20at%2014.11.59.png",
        "/projects-images/aletihad%20img/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-06-04%20at%2014.48.23.png",
        "/projects-images/aletihad%20img/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-06-04%20at%2014.48.38.png",
        "/projects-images/aletihad%20img/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-06-04%20at%2018.08.27.png",
        "/projects-images/aletihad%20img/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-06-04%20at%2018.08.40.png",
        "/projects-images/aletihad%20img/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-06-11%20at%2011.32.01.png",
        "/projects-images/aletihad%20img/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-06-04%20at%2014.09.53.png"
      ],
      tech: ["Flutter", "Dart", "GetX", "MVC Architecture", "Biometric Auth", "RESTful APIs", "AES Encryption"],
      liveLinks: [
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=sa.aletihad.mob", type: "playstore" },
        { label: "App Store (iOS)", url: "https://apps.apple.com/sa/app/al-etihad/id6475296817", type: "appstore" }
      ],
      challenges: "Architecting a compliant, bilingual (Arabic RTL / English LTR) insurance onboarding and claims processing engine aligned with Saudi Central Bank (SAMA) data protection standards.",
      results: "Cut claims submission turnaround time down to under 15 minutes, reduced customer service inquiry tickets by 40%, and safely scaled daily transaction volume.",
      timeline: "Ongoing (dZONE Solutions)"
    },
    {
      title: "MyKakak's Cleaning Ecosystem",
      market: "Malaysia 🇲🇾",
      platform: "Mobile App (iOS & Android)",
      category: "mobile",
      role: "Lead Mobile Architect",
      desc: "Comprehensive on-demand residential and commercial cleaning platform offering real-time cleaner booking, dispatch routing, geofence verification, and automated invoicing.",
      primaryImg: "/projects-images/mykakaks/one.png",
      gallery: [
        "/projects-images/mykakaks/one.png",
        "/projects-images/mykakaks/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-09-13%20at%2015.35.40.png",
        "/projects-images/mykakaks/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-09-13%20at%2015.35.06.png",
        "/projects-images/mykakaks/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-09-13%20at%2015.35.53.png",
        "/projects-images/mykakaks/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-09-13%20at%2015.40.01.png",
        "/projects-images/mykakaks/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-09-13%20at%2015.33.28.png",
        "/projects-images/mykakaks/Screenshot_1786002909.png",
        "/projects-images/mykakaks/Screenshot_1786003200.png",
        "/projects-images/mykakaks/Screenshot_1786003225.png"
      ],
      tech: ["Flutter", "Dart", "Riverpod", "Clean Architecture", "Firebase", "Google Maps API", "OTP Auth"],
      liveLinks: [
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.mykakaks.customer", type: "playstore" },
        { label: "App Store (iOS)", url: "https://apps.apple.com/my/app/mykakaks-home-office-cleaning/id6791525864", type: "appstore" }
      ],
      challenges: "Decoupling core business logic using Riverpod and Clean Architecture to ensure frictionless state synchronization between customer bookings and dispatch tracking.",
      results: "Increased active service booking retention by 50%, attained a 4.7★ average store rating, and achieved sub-second local order status syncing.",
      timeline: "Lead Architect (dZONE Solutions)"
    },
    {
      title: "URM - Ummah Relief Mission",
      market: "United Kingdom 🇬🇧",
      platform: "Full-Stack Web & Cloud",
      category: "web",
      role: "Full-Stack Lead Developer",
      desc: "Enterprise international charity donation ecosystem with automated UK HMRC Gift Aid declarations, multi-currency payment checkouts, campaign tracking, and donor audit portals.",
      primaryImg: "/projects-images/urm%20img/Screenshot%202026-04-24%20at%205.02.57%E2%80%AFPM.png",
      gallery: [
        "/projects-images/urm%20img/Screenshot%202026-04-24%20at%205.02.57%E2%80%AFPM.png",
        "/projects-images/urm%20img/Screenshot%202026-06-04%20at%205.58.52%E2%80%AFPM.png",
        "/projects-images/urm%20img/Screenshot%202026-06-04%20at%206.02.40%E2%80%AFPM.png",
        "/projects-images/urm%20img/Screenshot%202026-06-04%20at%206.03.47%E2%80%AFPM.png",
        "/projects-images/urm%20img/Screenshot%202026-06-04%20at%206.06.39%E2%80%AFPM.png"
      ],
      tech: ["Next.js", "Nest.js", "Supabase", "PostgreSQL", "Stripe", "PayPal", "Cloudflare", "HMRC API"],
      liveLinks: [
        { label: "Visit urmcharity.org.uk", url: "https://www.urmcharity.org.uk/", type: "web" }
      ],
      challenges: "Engineering high-concurrency donation handshakes resilient to traffic spikes during live appeals, while automating strict HMRC Gift Aid tax compliance audits.",
      results: "Successfully and securely processed £2.5 Million+ in relief funding with 100% tax claim compliance and zero transaction dropout rates.",
      timeline: "Full-Stack Tech Lead"
    },
    {
      title: "Iqra School Management System (SMS)",
      market: "Global Institutions 🎓",
      platform: "Desktop App (Windows & macOS)",
      category: "desktop",
      role: "Lead Flutter Desktop Developer",
      desc: "High-performance Flutter Desktop School Management System featuring cryptographic MAC-address-locked licensing, subscription expiration enforcement, fee billing, and administrative reports.",
      primaryImg: "/projects-images/sms%20img/Screenshot%202026-06-03%20at%204.14.54%E2%80%AFPM.png",
      gallery: [
        "/projects-images/sms%20img/Screenshot%202026-06-03%20at%204.14.54%E2%80%AFPM.png",
        "/projects-images/sms%20img/Screenshot%202026-06-03%20at%204.14.19%E2%80%AFPM.png",
        "/projects-images/sms%20img/Screenshot%202026-06-03%20at%204.15.59%E2%80%AFPM.png",
        "/projects-images/sms%20img/Screenshot%202026-06-03%20at%204.16.35%E2%80%AFPM.png",
        "/projects-images/sms%20img/Screenshot%202026-06-03%20at%204.17.24%E2%80%AFPM.png"
      ],
      tech: ["Flutter Desktop", "Dart", "PostgreSQL", "Hardware MAC Licensing", "Offline-First Sync", "SaaS"],
      liveLinks: [
        { label: "Request SMS Demo", url: "#contact", type: "demo" }
      ],
      challenges: "Designing a tamper-resistant offline licensing engine bound to hardware MAC addresses while ensuring seamless cloud sync for multi-campus grade and billing audits.",
      results: "Deployed across 15+ school campuses, managing 12,000+ active student records with zero data corruption and automated financial reporting.",
      timeline: "Lead Desktop Architect"
    },
    {
      title: "Mobeen Platform",
      market: "Global / MENA 🌍",
      platform: "Mobile App (iOS & Android)",
      category: "mobile",
      role: "Lead Mobile Architect",
      desc: "Engineered a complex consultation and communication app featuring sub-second latency real-time WebRTC video calling, instant chat, and custom deep-linking schemes—purpose-built for stutterers to book doctor appointments and conduct live therapy video sessions.",
      primaryImg: "/projects-images/mobeen/Simulator%20Screenshot%20-%20iPhone%2016%20Pro%20Max%20-%202025-07-01%20at%2020.46.55.png",
      gallery: [
        "/projects-images/mobeen/Simulator%20Screenshot%20-%20iPhone%2016%20Pro%20Max%20-%202025-07-01%20at%2020.46.55.png",
        "/projects-images/mobeen/Simulator%20Screenshot%20-%20iPhone%2016%20Pro%20Max%20-%202025-07-01%20at%2020.45.47.png",
        "/projects-images/mobeen/Simulator%20Screenshot%20-%20iPhone%2016%20Pro%20Max%20-%202025-07-01%20at%2020.46.58.png",
        "/projects-images/mobeen/Simulator%20Screenshot%20-%20iPhone%2016%20Pro%20Max%20-%202025-07-01%20at%2020.47.05.png",
        "/projects-images/mobeen/Simulator%20Screenshot%20-%20iPhone%2016%20Pro%20Max%20-%202025-07-01%20at%2020.47.27.png",
        "/projects-images/mobeen/Simulator%20Screenshot%20-%20iPhone%2016%20Pro%20Max%20-%202025-07-01%20at%2020.48.00.png",
        "/projects-images/mobeen/Simulator%20Screenshot%20-%20iPhone%2016%20Pro%20Max%20-%202025-07-01%20at%2021.51.52.png",
        "/projects-images/mobeen/Simulator%20Screenshot%20-%20iPhone%2016%20Pro%20Max%20-%202025-07-01%20at%2021.54.56.png",
        "/projects-images/mobeen/Simulator%20Screenshot%20-%20iPhone%2016%20Pro%20Max%20-%202025-07-01%20at%2022.10.39.png",
        "/projects-images/mobeen/Simulator%20Screenshot%20-%20iPhone%2016%20Pro%20Max%20-%202025-07-01%20at%2022.10.57.png"
      ],
      tech: ["Flutter", "Dart", "WebRTC Video/Audio", "Instant Chat", "GetX", "Doctor Calendaring", "FCM Push", "Deep Linking"],
      liveLinks: [
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.rahmah.mobeen", type: "playstore" },
        { label: "App Store (iOS)", url: "https://apps.apple.com/sa/app/%D9%85%D8%A8%D9%8A%D9%86-mobeen/id6747980621", type: "appstore" }
      ],
      challenges: "Engineering sub-second latency real-time WebRTC peer-to-peer video & audio connections optimized for speech therapy and stuttering consultation sessions, alongside instant messaging and automated doctor appointment booking.",
      results: "Delivered high-reliability video consultation sessions, reduced appointment scheduling friction, and maintained a 4.8★ rating on Google Play and Apple App Store.",
      timeline: "dZONE Solutions"
    },
    {
      title: "Ghani Groups Corporate Ecosystem",
      market: "Enterprise Portal 🏬",
      platform: "Corporate Web Architecture",
      category: "web",
      role: "Lead Full-Stack Developer",
      desc: "Flagship multi-domain web ecosystem powering Ghani Groups digital presence, corporate communications, and unified brand infrastructure.",
      primaryImg: "/projects-images/ghani-group/Screenshot%202026-09-13%20at%205.23.29%E2%80%AFPM.png",
      gallery: [
        "/projects-images/ghani-group/Screenshot%202026-09-13%20at%205.23.29%E2%80%AFPM.png",
        "/projects-images/ghani-group/Screenshot%202026-09-13%20at%205.23.48%E2%80%AFPM.png",
        "/projects-images/ghani-group/Screenshot%202026-09-13%20at%205.24.04%E2%80%AFPM.png",
        "/projects-images/ghani-group/Screenshot%202026-09-13%20at%205.24.16%E2%80%AFPM.png",
        "/projects-images/ghani-group/Screenshot%202026-09-13%20at%205.24.39%E2%80%AFPM.png"
      ],
      tech: ["Next.js", "React", "Nest.js", "Node.js", "PostgreSQL", "Cloudflare DNS"],
      liveLinks: [
        { label: "Visit Ghani Groups", url: "https://ghanigroups.vercel.app/", type: "web" }
      ],
      challenges: "Building a high-performance, SEO-optimized multi-domain brand platform with fast Server-Side Rendering (SSR) and seamless responsive layouts.",
      results: "Launched a state-of-the-art digital flagship unifying multiple group subsidiaries under one coherent corporate design system.",
      timeline: "Full-Stack Tech Lead"
    },
    {
      title: "Ghani Store E-Commerce",
      market: "Retail E-Commerce 🛒",
      platform: "E-Commerce Web Platform",
      category: "web",
      role: "Lead Full-Stack Developer",
      desc: "Dedicated e-commerce platform for Ghani Groups retail division, featuring online product cataloging, secure checkout workflows, and inventory tracking.",
      primaryImg: "/projects-images/ghani-store/Screenshot%202026-09-13%20at%205.26.57%E2%80%AFPM.png",
      gallery: [
        "/projects-images/ghani-store/Screenshot%202026-09-13%20at%205.26.57%E2%80%AFPM.png"
      ],
      tech: ["Next.js", "React", "Node.js", "PostgreSQL", "E-Commerce Cart", "Payment Gateways"],
      liveLinks: [
        { label: "Visit Ghani Store", url: "https://ghanigroups.vercel.app/sites/store", type: "web" }
      ],
      challenges: "Implementing rapid client-side search filtering, cart state persistence, and responsive mobile-first checkout flows.",
      results: "Streamlined online retail ordering and enabled instant SKU product browsing across devices.",
      timeline: "Full-Stack Tech Lead"
    },
    {
      title: "GS Fitness Club Platform",
      market: "Fitness & Wellness 🏋️‍♂️",
      platform: "Membership & Booking Portal",
      category: "web",
      role: "Lead Full-Stack Developer",
      desc: "Comprehensive health and fitness platform for GS Fitness Club, facilitating member onboarding, subscription management, trainer schedules, and class reservations.",
      primaryImg: "/projects-images/ghani-fitness/Screenshot%202026-09-13%20at%205.27.37%E2%80%AFPM.png",
      gallery: [
        "/projects-images/ghani-fitness/Screenshot%202026-09-13%20at%205.27.37%E2%80%AFPM.png",
        "/projects-images/ghani-fitness/Screenshot%202026-09-13%20at%205.27.52%E2%80%AFPM.png",
        "/projects-images/ghani-fitness/Screenshot%202026-09-13%20at%205.28.01%E2%80%AFPM.png",
        "/projects-images/ghani-fitness/Screenshot%202026-09-13%20at%205.28.09%E2%80%AFPM.png",
        "/projects-images/ghani-fitness/Screenshot%202026-09-13%20at%205.28.22%E2%80%AFPM.png"
      ],
      tech: ["Next.js", "React", "Nest.js", "Node.js", "PostgreSQL", "Membership Automation"],
      liveLinks: [
        { label: "Visit Ghani Fitness", url: "https://ghanigroups.vercel.app/sites/fitness", type: "web" }
      ],
      challenges: "Designing dynamic fitness plan comparison matrices, member session booking slots, and automated recurring billing hooks.",
      results: "Automated new member sign-ups and digitized class scheduling for club members.",
      timeline: "Full-Stack Tech Lead"
    },
    {
      title: "WorkinAus Recruitment Marketplace",
      market: "Australia 🇦🇺",
      platform: "Mobile & Web Ecosystem",
      category: "mobile",
      role: "Software Engineer (9T5 PTY LTD)",
      desc: "Australia's premier recruitment marketplace connecting international skilled jobseekers with verified Australian employers, sponsors, and visa qualification matching.",
      primaryImg: "/projects-images/workinaus/Screenshot%202026-09-13%20at%205.34.48%E2%80%AFPM.png",
      gallery: [
        "/projects-images/workinaus/Screenshot%202026-09-13%20at%205.34.48%E2%80%AFPM.png",
        "/projects-images/workinaus/Screenshot%202026-09-13%20at%205.34.55%E2%80%AFPM.png",
        "/projects-images/workinaus/Screenshot%202026-09-13%20at%205.35.00%E2%80%AFPM.png",
        "/projects-images/workinaus/Screenshot%202026-09-13%20at%205.35.05%E2%80%AFPM.png",
        "/projects-images/workinaus/Screenshot%202026-09-13%20at%205.35.11%E2%80%AFPM.png",
        "/projects-images/workinaus/Screenshot%202026-09-13%20at%205.35.16%E2%80%AFPM.png"
      ],
      tech: ["React.js", "Flutter", "Node.js", "Clean Architecture", "App Store Connect", "Google Play"],
      liveLinks: [
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=workInAUS.sociabletech.com.au", type: "playstore" },
        { label: "App Store (iOS)", url: "https://apps.apple.com/us/app/workinaus/id1605930673", type: "appstore" }
      ],
      challenges: "Architecting high-speed search and filtering indexes that instantaneously match candidate visa credentials with employer sponsorship criteria.",
      results: "Facilitated 100,000+ monthly candidate applications and established CI/CD automated deployment pipelines for Android and iOS builds.",
      timeline: "9T5 PTY LTD"
    },
    {
      title: "Moultrie Feeders (IoT Ecosystem)",
      market: "United States 🇺🇸",
      platform: "Mobile IoT BLE Sync",
      category: "mobile",
      role: "Sr. Flutter Developer (Cybersoft NA)",
      desc: "Industrial-grade wildlife scouting and smart feeder IoT mobile platform communicating directly with field hardware via low-level Bluetooth Low Energy (BLE) byte protocols.",
      primaryImg: "/project_moultrie.png",
      gallery: [
        "/project_moultrie.png"
      ],
      tech: ["Flutter", "Dart", "Bluetooth Low Energy (BLE)", "Byte Encoding/Decoding", "AWS IoT", "Cloud Firestore"],
      liveLinks: [
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.moutriemobile.android.tyche&hl=en", type: "playstore" },
        { label: "App Store (iOS)", url: "https://apps.apple.com/us/app/moultrie/id1099295160", type: "appstore" }
      ],
      challenges: "Engineering custom byte serialization and deserialization routines over erratic Bluetooth connections to reliably flash firmware and configure timer schedules in remote field locations.",
      results: "Connected over 50,000+ active field devices across North America with a 35% reduction in device command latency.",
      timeline: "Cybersoft North America Inc"
    },
    {
      title: "BilliPay Financial Application",
      market: "Australia 🇦🇺",
      platform: "Mobile App (Fintech)",
      category: "mobile",
      role: "Software Engineer (9T5 PTY LTD)",
      desc: "Modern payments and financial utility application facilitating scheduled bill payments, installment tracking, and bank-grade encrypted transactions for Australian users.",
      primaryImg: "/project2.png",
      gallery: [
        "/project2.png"
      ],
      tech: ["Flutter", "Dart", "AES Data Encryption", "Payment Gateways", "RESTful APIs"],
      liveLinks: [
        { label: "Inquire via LinkedIn", url: "https://www.linkedin.com/in/ikram-ullah-7b582a1a9/", type: "contact" }
      ],
      challenges: "Integrating stringent client-side AES cryptographic routines and building resilient offline transaction caching during poor network connectivity.",
      results: "Delivered a secure, PCI-DSS compliant financial mobile product through successful cross-continental remote engineering collaboration.",
      timeline: "9T5 PTY LTD"
    }
  ];

  // Professional Experience aligned directly with CV
  const experienceHistory: ExperienceItem[] = [
    {
      company: "dZONE Solutions",
      role: "Lead Application Developer / Mobile Team Lead",
      period: "10/2023 – Present",
      location: "Lahore, Pakistan",
      description: "Leading mobile engineering teams, establishing rigorous system architecture blueprints, driving automated CI/CD pipelines, and steering flagship client deliveries across the Saudi, Malaysian, and MENA markets.",
      achievements: [
        "Direct and mentor a dedicated team of mobile developers, establishing strict code review standards and agile sprint roadmaps.",
        "Architected Al-Etihad Cooperative Insurance (Saudi Market) flagship app using GetX and MVC architecture for high-volume transactions.",
        "Engineered Mobeen platform: consultation & telehealth app featuring sub-second latency real-time WebRTC video calling, doctor appointment booking, and instant chat for stutterers.",
        "Architected MyKakak's on-demand cleaning ecosystem (Malaysian Market) utilizing Riverpod and Clean Architecture."
      ],
      hasAward: true,
      awardTitle: "Certificate of Achievement — Best Achievement 2025",
      awardIssuer: "dZONE Solutions",
      awardDate: "23 July, 2025",
      awardRecipient: "Mr. Ch. Ikram Ullah",
      awardCitation: "For his dedicated work and outstanding contribution in achieving Best Achievement 2025",
      awardSigner: "Zeeshan Sharif (Director)",
      awardImage: "/certificate-dzone-2025.jpg",
      skills: ["Flutter", "Team Leadership", "Riverpod", "GetX", "Clean Architecture", "WebRTC", "System Design"]
    },
    {
      company: "Cybersoft North America Inc",
      role: "Sr. Flutter Developer",
      period: "02/2023 – 10/2023",
      location: "Lahore, Pakistan",
      description: "Engineered specialized IoT smart hunting and scouting mobile platforms for a major US client.",
      achievements: [
        "Developed and deployed the Moultrie Feeders application for high-profile US wildlife management clients.",
        "Implemented low-level custom byte encoding and decoding routines over Bluetooth Low Energy (BLE) protocols for hardware telemetry.",
        "Integrated AWS IoT and Cloud Firestore for real-time field camera triggers and status alerts."
      ],
      skills: ["Flutter", "BLE Protocols", "Byte Encoding", "IoT Hardware Sync", "AWS IoT", "Dart"]
    },
    {
      company: "9T5 PTY LTD",
      role: "Software Engineer",
      period: "07/2021 – 01/2023",
      location: "Lahore, Pakistan / Remote (Australia)",
      description: "Delivered scalable mobile and web products for the Australian market in a distributed international engineering team.",
      achievements: [
        "Core developer for WorkinAus (Australia's flagship recruitment marketplace), driving mobile app architecture and store deployments.",
        "Developed and maintained BilliPay, a modern financial and utility payments application with AES data encryption.",
        "Managed cross-border client delivery and secure remote engineering collaboration."
      ],
      skills: ["Flutter", "React.js", "Node.js", "Fintech Payments", "Mobile Architecture", "Agile"]
    },
    {
      company: "TV2U Pty Ltd",
      role: "Flutter & Android Developer",
      period: "05/2019 – 06/2021",
      location: "Lahore, Pakistan",
      description: "Modernized legacy mobile applications and engineered high-performance cross-platform software.",
      achievements: [
        "Led the complete migration of legacy mobile applications to Flutter, including London Fly and Fitness Fit.",
        "Developed and optimized the Unanimous Games native Android mobile application."
      ],
      skills: ["Flutter Migration", "Native Android", "Java", "Kotlin", "State Management"]
    },
    {
      company: "HYFA Tech",
      role: "Android Developer",
      period: "09/2018 – 04/2019",
      location: "Lahore, Pakistan",
      description: "Specialized in Native Android architecture with MVVM pattern.",
      achievements: [
        "Engineered the Carre Project and a feature-rich Movie Discovery App solving complex structural data challenges.",
        "Mastered Clean MVVM architecture and Android SDK performance profiling."
      ],
      skills: ["Native Android", "MVVM", "Java", "Android SDK", "RESTful APIs"]
    },
    {
      company: "OneByte",
      role: "Android Developer Intern",
      period: "08/2015 – 01/2016",
      location: "Lahore, Pakistan",
      description: "Gained hands-on professional foundation in Java-based Android development and UI workflows.",
      achievements: [
        "Developed custom UI components and mastered Android SDK lifecycle management."
      ],
      skills: ["Java", "Android SDK", "UI Implementation", "Git"]
    }
  ];

  // Core Competencies Matrix aligned with CV
  const skillCategories = [
    {
      title: "Mobile & Native Engineering",
      icon: <Smartphone size={22} />,
      desc: "High-performance native and cross-platform architectures with smooth 60/120fps animations and resilient offline state.",
      skills: ["Flutter (Mobile, Desktop, Web)", "Dart", "Native Android", "Java", "Kotlin", "App Store Connect", "Google Play Console", "Crashlytics"]
    },
    {
      title: "State & Architecture Patterns",
      icon: <Layers size={22} />,
      desc: "Enterprise design blueprints tailored for modularity, clean testing, maintainability, and micro-frontend isolation.",
      skills: ["Clean Architecture", "Feature-First Design", "Riverpod", "BLoC", "GetX", "Provider", "MVVM / MVC", "Repository Pattern", "SOLID Principles"]
    },
    {
      title: "Full-Stack Web & Cloud",
      icon: <Globe size={22} />,
      desc: "Modern reactive web platforms, payment gate integrations, and real-time backend microservices.",
      skills: ["Next.js (App Router)", "Nest.js", "React.js", "Node.js", "TypeScript", "JavaScript", "Supabase", "PostgreSQL", "Firebase / Firestore", "Stripe & PayPal API", "HMRC Gift Aid"]
    },
    {
      title: "Hardware, Real-Time & DevOps",
      icon: <Cpu size={22} />,
      desc: "Low-level byte protocols, sub-second peer-to-peer media streaming, and automated continuous delivery.",
      skills: ["Bluetooth Low Energy (BLE)", "Byte Encoding/Decoding", "WebRTC Video/Audio", "WebSocket", "FCM Push Notifications", "CI/CD (GitHub Actions, Codemagic)", "Cloudflare DNS", "AES Encryption"]
    }
  ];

  return (
    <>
      {/* Sticky Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#" className="nav-logo">
            <img src="/logo-only.png" alt="Ikram Ullah Logo" className="nav-logo-img" />
            <div className="nav-brand-text">
              <span className="nav-brand-title">IKRAM ULLAH</span>
              <span className="nav-brand-subtitle">CROSS-PLATFORM ARCHITECT</span>
            </div>
          </a>

          {/* Links enclosed together in single rectangle shape border */}
          <div className="nav-links-box">
            <a href="#" className="nav-link">HOME</a>
            <a href="#about" className="nav-link">ABOUT</a>
            <a href="#skills" className="nav-link">COMPETENCIES</a>
            <a href="#experience" className="nav-link">EXPERIENCE</a>
            <a href="#work" className="nav-link">PROJECTS</a>
            <a href="#contact" className="nav-link">CONTACT</a>
          </div>

          <div className="nav-right">
            <a 
              href="https://wa.me/923347471920?text=Hello%20Ikram,%20I%20reviewed%20your%20portfolio..." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="nav-helpline"
              title="WhatsApp: 0334-7471920"
            >
              <div className="nav-helpline-icon">
                <Phone size={17} />
              </div>
              <div className="nav-helpline-text">
                <span className="nav-helpline-label">WHATSAPP</span>
                <span className="nav-helpline-number">0334-7471920</span>
              </div>
            </a>

            <a href="#contact" className="btn btn-primary nav-cta-btn">
              Let&apos;s Talk
            </a>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-menu-toggle"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '52px',
              left: 0,
              right: 0,
              background: 'rgba(6, 10, 20, 0.98)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '1.25rem 1rem',
              zIndex: 55,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.8)'
            }}
          >
            <div className="nav-mobile-links-box">
              <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="nav-link">HOME</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="nav-link">ABOUT</a>
              <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="nav-link">COMPETENCIES</a>
              <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="nav-link">EXPERIENCE</a>
              <a href="#work" onClick={() => setIsMobileMenuOpen(false)} className="nav-link">PROJECTS</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="nav-link">CONTACT</a>
            </div>

            <a 
              href="https://wa.me/923347471920?text=Hello%20Ikram,%20I%20reviewed%20your%20portfolio..." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="nav-helpline mobile-helpline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="nav-helpline-icon">
                <Phone size={18} />
              </div>
              <div className="nav-helpline-text">
                <span className="nav-helpline-label">WHATSAPP</span>
                <span className="nav-helpline-number">0334-7471920</span>
              </div>
            </a>

            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="btn btn-primary" style={{ textAlign: 'center' }}>
              Let&apos;s Talk Directly
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <WaveBackground />
          
          <div className="hero-container">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              style={{ maxWidth: '820px' }}
            >
              <motion.div variants={fadeIn} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.15rem' }}>
                <span className="section-badge" style={{ fontSize: '0.78rem', padding: '0.3rem 0.85rem' }}>
                  <span className="pulse-dot" style={{ width: '6px', height: '6px' }}></span>
                  Lead Flutter Developer & Cross-Platform System Architect
                </span>
              </motion.div>
              
              <motion.h1 
                variants={fadeIn} 
                style={{ 
                  fontSize: 'clamp(1.85rem, 3.4vw, 2.75rem)', 
                  marginBottom: '0.75rem', 
                  letterSpacing: '-0.025em',
                  fontWeight: 800,
                  lineHeight: 1.15
                }}
              >
                Hi, I&apos;m <span className="gradient-text">Ikram Ullah.</span>
              </motion.h1>
              
              <motion.h2
                variants={fadeIn}
                style={{
                  fontSize: 'clamp(1.1rem, 2vw, 1.45rem)',
                  color: 'var(--text-primary)',
                  marginBottom: '1.15rem',
                  fontWeight: 600,
                  lineHeight: 1.35
                }}
              >
                Engineering <TypingEffect />
              </motion.h2>
              
              <motion.p 
                variants={fadeIn} 
                style={{ 
                  fontSize: 'clamp(0.92rem, 1.1vw, 1.025rem)', 
                  color: 'var(--text-secondary)', 
                  maxWidth: '660px', 
                  marginBottom: '1.85rem',
                  lineHeight: 1.7
                }}
              >
                Lead Application Developer & Cross-Platform Architect with <strong style={{ color: '#fff' }}>8+ years</strong> of experience building scalable digital ecosystems across Mobile, Desktop, and Web. Proven track record leading engineering teams at <strong style={{ color: 'var(--accent)' }}>dZONE Solutions</strong> and delivering enterprise products serving <strong style={{ color: '#fff' }}>1M+ global users</strong> across Saudi Arabia, Malaysia, the UK, Australia, and the US.
              </motion.p>
              
              <motion.div variants={fadeIn} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#work" className="btn btn-primary" style={{ gap: '0.5rem', padding: '0.68rem 1.6rem', fontSize: '0.875rem' }}>
                  Explore Selected Work <ArrowRight size={16} />
                </a>
                <a href="#experience" className="btn btn-secondary" style={{ gap: '0.5rem', padding: '0.68rem 1.6rem', fontSize: '0.875rem' }}>
                  <Briefcase size={16} /> Experience & Honors
                </a>
                <a 
                  href="https://wa.me/923347471920?text=Hello%20Ikram,%20I%20reviewed%20your%20portfolio..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-glow"
                  style={{ gap: '0.5rem', padding: '0.68rem 1.6rem', fontSize: '0.875rem' }}
                >
                  <MessageCircle size={16} /> WhatsApp Me
                </a>
              </motion.div>

              {/* Key Highlights / Proof Metrics Ribbon */}
              <motion.div variants={fadeIn} className="hero-stats-ribbon">
                <div className="stat-item">
                  <span className="stat-number">8+</span>
                  <span className="stat-label">Years Cross-Platform Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">1M+</span>
                  <span className="stat-label">Global Users Served</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Production Deliveries</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">4.8★</span>
                  <span className="stat-label">Average App Store Rating</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about">
          <div className="container">
            <div className="section-header">
              <span className="section-badge"><User size={14} /> Profile Overview</span>
              <h2 className="section-title">Architecting Enterprise <span className="gradient-text">Software Systems</span></h2>
              <p className="section-subtitle">
                Pairing robust system design with clean, reactive frontend architectures to solve real-world problems.
              </p>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="glass-panel"
              style={{ padding: 'clamp(2rem, 4vw, 3.5rem)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}
            >
              <div>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '1.25rem', fontWeight: 700 }}>
                  Lead Developer & Technical Mentor
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', fontSize: '1.05rem', lineHeight: 1.7 }}>
                  With over 8 years in modern software engineering, I specialize in architecting scalable client-facing applications and guiding engineering teams toward maintainable codebases. My expertise spans clean state management (<strong style={{ color: '#fff' }}>Riverpod, BLoC, GetX</strong>), modular architectures, and high-concurrency cloud integrations.
                </p>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.75rem', fontSize: '1.05rem', lineHeight: 1.7 }}>
                  I have built and delivered mission-critical applications across diverse international domains — ranging from fintech and motor insurance in Saudi Arabia to on-demand platforms in Malaysia, UK charity payment engines, and low-level IoT telemetry in the United States.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)' }}>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Location</div>
                    <div style={{ fontSize: '1rem', fontWeight: 600, color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.2rem' }}>
                      <MapPin size={16} style={{ color: 'var(--accent)' }} /> Lahore, Pakistan (Open to Global Remote)
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Education</div>
                    <div style={{ fontSize: '1rem', fontWeight: 600, color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.2rem' }}>
                      <GraduationCap size={16} style={{ color: 'var(--accent-indigo)' }} /> BS Computer Science (UOL)
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ background: 'rgba(8, 13, 26, 0.6)', padding: '2rem', borderRadius: '18px', border: '1px solid var(--glass-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <ShieldCheck size={24} style={{ color: 'var(--accent)' }} />
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Engineering Principles</h4>
                </div>

                <ul style={{ listStyle: 'none', display: 'grid', gap: '1rem' }}>
                  <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)', marginTop: '8px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                      <strong style={{ color: '#fff' }}>Clean Architecture:</strong> Domain-driven, decoupled layers allowing independent UI and data evolutions.
                    </span>
                  </li>
                  <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-indigo)', marginTop: '8px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                      <strong style={{ color: '#fff' }}>Reactive State Flow:</strong> Predictable, testable state transitions using Riverpod & BLoC.
                    </span>
                  </li>
                  <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-purple)', marginTop: '8px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                      <strong style={{ color: '#fff' }}>Automated CI/CD:</strong> Zero-touch builds and deployments via GitHub Actions and Codemagic.
                    </span>
                  </li>
                  <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-emerald)', marginTop: '8px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                      <strong style={{ color: '#fff' }}>Hardware & Media Telemetry:</strong> Low-level BLE byte protocol decoding, WebRTC audio/video, and AES data encryption.
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Technical Competencies Matrix */}
        <section id="skills" style={{ background: 'rgba(15, 23, 42, 0.3)' }}>
          <div className="container">
            <div className="section-header">
              <span className="section-badge"><Code size={14} /> Skills & Architecture</span>
              <h2 className="section-title">Core Competencies & <span className="gradient-text">Tech Stack</span></h2>
              <p className="section-subtitle">
                A structured breakdown of my hands-on toolset and enterprise engineering capabilities.
              </p>
            </div>

            <div className="skills-grid">
              {skillCategories.map((cat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="glass-panel skill-category-card"
                >
                  <div className="category-icon-wrapper">
                    {cat.icon}
                  </div>
                  <h3 className="category-title">{cat.title}</h3>
                  <p className="category-desc">{cat.desc}</p>
                  
                  <div className="skill-pills-wrap">
                    {cat.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx} 
                        className={`skill-pill ${sIdx < 2 ? 'highlight' : ''}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience & Career Journey */}
        <section id="experience">
          <div className="container">
            <div className="section-header">
              <span className="section-badge"><Briefcase size={14} /> Career Milestones</span>
              <h2 className="section-title">Professional <span className="gradient-text">Experience</span></h2>
              <p className="section-subtitle">
                Over 8 years of engineering leadership, scalable product deployments, and cross-continental teamwork.
              </p>
            </div>

            <div className="experience-timeline">
              <div className="timeline-line" />

              {experienceHistory.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`timeline-item ${idx === 0 ? 'active' : ''}`}
                >
                  <div className="timeline-node" />
                  
                  <div className="glass-panel timeline-content">
                    <div className="timeline-header">
                      <div>
                        <h3 className="role-title">{exp.role}</h3>
                        <div className="company-name">
                          <span>{exp.company}</span>
                          <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>• {exp.location}</span>
                        </div>
                      </div>
                      <span className="timeline-period">{exp.period}</span>
                    </div>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                      {exp.description}
                    </p>

                    <ul style={{ listStyle: 'none', display: 'grid', gap: '0.65rem', marginBottom: '1.25rem' }}>
                      {exp.achievements.map((ach, aIdx) => (
                        <li key={aIdx} style={{ display: 'flex', gap: '0.6rem', fontSize: '0.9rem', color: '#cbd5e1' }}>
                          <ChevronRight size={16} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.hasAward && (
                      <div 
                        className="leadership-award-card"
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '1rem',
                          background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.12) 0%, rgba(202, 138, 4, 0.05) 100%)',
                          border: '1px solid rgba(234, 179, 8, 0.35)',
                          borderRadius: '16px',
                          padding: '1.25rem',
                          marginTop: '1.25rem',
                          marginBottom: '1.25rem'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                            <div style={{
                              width: '44px',
                              height: '44px',
                              borderRadius: '12px',
                              background: 'rgba(234, 179, 8, 0.2)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0
                            }}>
                              <Award size={24} style={{ color: '#eab308' }} />
                            </div>
                            <div>
                              <div style={{ fontSize: '0.72rem', color: '#eab308', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                                OFFICIAL RECOGNITION • {exp.awardDate}
                              </div>
                              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fef08a', marginTop: '0.2rem' }}>
                                {exp.awardTitle}
                              </div>
                              {exp.awardCitation && (
                                <div style={{ fontSize: '0.875rem', color: '#e2e8f0', marginTop: '0.35rem', fontStyle: 'italic', lineHeight: 1.5 }}>
                                  &ldquo;{exp.awardCitation}&rdquo;
                                </div>
                              )}
                              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                                Awarded to <strong>{exp.awardRecipient}</strong> by Director <strong>{exp.awardSigner}</strong>
                              </div>
                            </div>
                          </div>

                          {exp.awardImage && (
                            <button
                              type="button"
                              onClick={() => setSelectedCertificate(exp.awardImage || null)}
                              className="btn btn-secondary"
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.5rem 1rem',
                                fontSize: '0.825rem',
                                borderRadius: '10px',
                                border: '1px solid rgba(234, 179, 8, 0.4)',
                                color: '#fef08a',
                                background: 'rgba(234, 179, 8, 0.12)',
                                cursor: 'pointer'
                              }}
                            >
                              <ExternalLink size={14} /> View Certificate
                            </button>
                          )}
                        </div>

                        {exp.awardImage && (
                          <div 
                            style={{ 
                              position: 'relative', 
                              cursor: 'pointer', 
                              borderRadius: '12px', 
                              overflow: 'hidden', 
                              border: '1px solid rgba(234, 179, 8, 0.3)',
                              maxHeight: '190px' 
                            }}
                            onClick={() => setSelectedCertificate(exp.awardImage || null)}
                          >
                            <img 
                              src={exp.awardImage} 
                              alt={exp.awardTitle} 
                              style={{ width: '100%', height: '190px', objectFit: 'cover', objectPosition: 'top center', filter: 'brightness(0.95)' }} 
                            />
                            <div style={{
                              position: 'absolute',
                              inset: 0,
                              background: 'linear-gradient(to top, rgba(15, 23, 42, 0.88) 0%, transparent 60%)',
                              display: 'flex',
                              alignItems: 'flex-end',
                              padding: '0.75rem 1rem',
                              color: '#ffffff',
                              fontSize: '0.8rem',
                              fontWeight: 600,
                              gap: '0.4rem'
                            }}>
                              <Sparkles size={14} style={{ color: '#eab308' }} /> Click to enlarge verified certificate
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1.25rem' }}>
                      {exp.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="tech-tag" style={{ fontSize: '0.75rem' }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Projects Showcase */}
        <section id="work" style={{ background: 'rgba(8, 13, 26, 0.4)' }}>
          <div className="container">
            <div className="section-header">
              <span className="section-badge"><Layers size={14} /> Featured Portfolio</span>
              <h2 className="section-title">Selected <span className="gradient-text">Engineering Projects</span></h2>
              <p className="section-subtitle">
                A selection of high-impact cross-platform mobile apps, cloud platforms, and desktop management systems. Click any project to inspect full screenshots, challenges, and architectural metrics.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="filter-container">
              {[
                { id: 'all', label: 'All Projects', count: projects.length },
                { id: 'mobile', label: 'Mobile Apps (Flutter/Android)', count: projects.filter(p => p.category === 'mobile').length },
                { id: 'web', label: 'Full-Stack Web & Cloud', count: projects.filter(p => p.category === 'web').length },
                { id: 'desktop', label: 'Desktop Systems', count: projects.filter(p => p.category === 'desktop').length }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`btn ${activeCategory === cat.id ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ 
                    padding: '0.6rem 1.35rem', 
                    fontSize: '0.875rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.6rem'
                  }}
                >
                  <span>{cat.label}</span>
                  <span style={{ 
                    background: activeCategory === cat.id ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.08)',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: 700
                  }}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <motion.div layout className="projects-grid">
              <AnimatePresence mode="popLayout">
                {projects
                  .filter(p => activeCategory === 'all' || p.category === activeCategory)
                  .map((project) => (
                    <motion.div 
                      layout
                      key={project.title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="glass-panel project-card"
                      onClick={() => openProjectModal(project)}
                    >
                      <div className="project-img-wrapper">
                        <img 
                          src={project.primaryImg} 
                          alt={project.title} 
                          className="project-img" 
                          loading="lazy"
                        />
                        
                        {/* Overlay badges */}
                        <div className="project-badges-overlay">
                          <span className="market-badge">{project.market}</span>
                          {project.gallery && project.gallery.length > 1 && (
                            <span className="photos-count-badge">
                              {project.gallery.length} Screens
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="project-content">
                        <div className="project-role-tag">{project.role}</div>
                        <h3 className="project-title">
                          <span>{project.title}</span>
                          <ArrowUpRight size={18} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                        </h3>
                        <p className="project-desc">{project.desc}</p>
                        
                        <div className="tech-stack">
                          {project.tech.slice(0, 4).map((tech, i) => (
                            <span key={i} className="tech-tag">{tech}</span>
                          ))}
                          {project.tech.length > 4 && (
                            <span className="tech-tag" style={{ color: 'var(--accent)' }}>
                              +{project.tech.length - 4} more
                            </span>
                          )}
                        </div>

                        {/* Live deployment indicator badges */}
                        {project.liveLinks && project.liveLinks.length > 0 && (
                          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.85rem' }}>
                            {project.liveLinks.map((link, lIdx) => {
                              if (link.type === 'playstore') {
                                return (
                                  <span key={lIdx} style={{ fontSize: '0.7rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: '0.2rem 0.5rem', borderRadius: '6px', background: 'rgba(52, 211, 153, 0.12)', color: '#34d399', border: '1px solid rgba(52, 211, 153, 0.25)', fontWeight: 600 }}>
                                    <PlayStoreIcon size={12} /> Play Store
                                  </span>
                                );
                              }
                              if (link.type === 'appstore') {
                                return (
                                  <span key={lIdx} style={{ fontSize: '0.7rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: '0.2rem 0.5rem', borderRadius: '6px', background: 'rgba(148, 163, 184, 0.15)', color: '#e2e8f0', border: '1px solid rgba(255, 255, 255, 0.2)', fontWeight: 600 }}>
                                    <AppleIcon size={12} /> App Store
                                  </span>
                                );
                              }
                              if (link.type === 'web') {
                                return (
                                  <span key={lIdx} style={{ fontSize: '0.7rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: '0.2rem 0.5rem', borderRadius: '6px', background: 'rgba(56, 189, 248, 0.12)', color: '#38bdf8', border: '1px solid rgba(56, 189, 248, 0.25)', fontWeight: 600 }}>
                                    <Globe size={12} /> Live Web
                                  </span>
                                );
                              }
                              return null;
                            })}
                          </div>
                        )}

                        <button 
                          className="btn btn-secondary" 
                          style={{ 
                            width: '100%', 
                            padding: '0.65rem', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            gap: '0.5rem',
                            fontSize: '0.9rem' 
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            openProjectModal(project);
                          }}
                        >
                          View Case Study & Gallery <ArrowRight size={15} />
                        </button>
                      </div>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Contact & Inquiries Section */}
        <section id="contact">
          <div className="container">
            <div className="glass-panel contact-grid">
              {/* Left Column: Direct Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--accent)' }}>
                  <Sparkles size={18} />
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Available For High-Impact Engagements
                  </span>
                </div>

                <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.25rem', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}>
                  Let&apos;s Build Something <span className="gradient-text">Exceptional</span>
                </h2>

                <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.05rem', lineHeight: 1.7 }}>
                  I am open to senior engineering leadership positions, strategic architecture consultations, and enterprise cross-platform mobile initiatives. Drop a note or connect directly:
                </p>

                {/* Direct Contact Cards */}
                <div style={{ display: 'grid', gap: '1rem' }}>
                  {/* Email */}
                  <div className="contact-card-item">
                    <div className="contact-icon-box" style={{ background: 'rgba(56, 189, 248, 0.1)', color: 'var(--accent)' }}>
                      <Mail size={20} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>DIRECT EMAIL</div>
                      <a href="mailto:reply2ikramullah@gmail.com" style={{ fontSize: '0.95rem', fontWeight: 600, color: '#ffffff', display: 'block', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                        reply2ikramullah@gmail.com
                      </a>
                    </div>
                    <button
                      onClick={() => copyToClipboard('reply2ikramullah@gmail.com', 'email')}
                      title="Copy Email"
                      className="btn btn-secondary"
                      style={{ padding: '0.45rem 0.8rem', borderRadius: '8px', fontSize: '0.8rem', gap: '0.35rem' }}
                    >
                      {copiedEmail ? <Check size={14} style={{ color: 'var(--accent-emerald)' }} /> : <Copy size={14} />}
                      {copiedEmail ? 'Copied' : 'Copy'}
                    </button>
                  </div>

                  {/* WhatsApp */}
                  <div className="contact-card-item">
                    <div className="contact-icon-box" style={{ background: 'rgba(37, 211, 102, 0.12)', color: '#25D366' }}>
                      <MessageCircle size={20} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>WHATSAPP / PHONE</div>
                      <a 
                        href="https://wa.me/923347471920?text=Hello%20Ikram,%20I%20reviewed%20your%20portfolio..."
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '0.95rem', fontWeight: 600, color: '#ffffff' }}
                      >
                        +92 334 7471920
                      </a>
                    </div>
                    <button
                      onClick={() => copyToClipboard('+923347471920', 'phone')}
                      title="Copy Phone"
                      className="btn btn-secondary"
                      style={{ padding: '0.45rem 0.8rem', borderRadius: '8px', fontSize: '0.8rem', gap: '0.35rem' }}
                    >
                      {copiedPhone ? <Check size={14} style={{ color: 'var(--accent-emerald)' }} /> : <Copy size={14} />}
                      {copiedPhone ? 'Copied' : 'Copy'}
                    </button>
                  </div>

                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/in/ikram-ullah-7b582a1a9/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-card-item"
                  >
                    <div className="contact-icon-box" style={{ background: 'rgba(10, 102, 194, 0.12)', color: '#0a66c2' }}>
                      <LinkedinIcon size={20} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>PROFESSIONAL NETWORK</div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#ffffff' }}>linkedin.com/in/ikram-ullah-7b582a1a9</div>
                    </div>
                    <ArrowUpRight size={18} style={{ color: 'var(--text-muted)' }} />
                  </a>
                </div>
              </motion.div>

              {/* Right Column: Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                style={{
                  background: 'rgba(8, 13, 26, 0.7)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '20px',
                  padding: 'clamp(1.75rem, 3vw, 2.5rem)'
                }}
              >
                <AnimatePresence mode="wait">
                  {formStatus === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      style={{ textAlign: 'center', padding: '2.5rem 0' }}
                    >
                      <div style={{ 
                        width: '64px', 
                        height: '64px', 
                        borderRadius: '50%', 
                        background: 'rgba(16, 185, 129, 0.15)', 
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        color: 'var(--accent-emerald)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.5rem auto'
                      }}>
                        <CheckCircle size={32} />
                      </div>
                      <h3 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '0.75rem' }}>Message Dispatched!</h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                        Thank you for reaching out. Ikram has received your inquiry and will reply directly to your email shortly.
                      </p>
                      <button 
                        onClick={() => setFormStatus('idle')}
                        className="btn btn-secondary"
                        style={{ padding: '0.65rem 1.6rem', fontSize: '0.9rem' }}
                      >
                        Send Another Inquiry
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      onSubmit={handleContactSubmit}
                      style={{ display: 'grid', gap: '1.25rem' }}
                    >
                      <div>
                        <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.45rem', letterSpacing: '0.05em' }}>
                          Your Name *
                        </label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. John Miller"
                          style={{
                            width: '100%',
                            padding: '0.8rem 1rem',
                            background: 'rgba(15, 23, 42, 0.8)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '12px',
                            color: '#ffffff',
                            fontSize: '0.95rem',
                            outline: 'none',
                            transition: 'all 0.25s'
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.45rem', letterSpacing: '0.05em' }}>
                          Email Address *
                        </label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@company.com"
                          style={{
                            width: '100%',
                            padding: '0.8rem 1rem',
                            background: 'rgba(15, 23, 42, 0.8)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '12px',
                            color: '#ffffff',
                            fontSize: '0.95rem',
                            outline: 'none',
                            transition: 'all 0.25s'
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.45rem', letterSpacing: '0.05em' }}>
                          Subject
                        </label>
                        <input 
                          type="text" 
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="Role Opportunity / Architecture Inquiry"
                          style={{
                            width: '100%',
                            padding: '0.8rem 1rem',
                            background: 'rgba(15, 23, 42, 0.8)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '12px',
                            color: '#ffffff',
                            fontSize: '0.95rem',
                            outline: 'none',
                            transition: 'all 0.25s'
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.45rem', letterSpacing: '0.05em' }}>
                          Message *
                        </label>
                        <textarea 
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell me about your product, requirements, or roadmap..."
                          style={{
                            width: '100%',
                            padding: '0.8rem 1rem',
                            background: 'rgba(15, 23, 42, 0.8)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '12px',
                            color: '#ffffff',
                            fontSize: '0.95rem',
                            outline: 'none',
                            resize: 'none',
                            transition: 'all 0.25s'
                          }}
                        />
                      </div>

                      {formStatus === 'error' && (
                        <p style={{ color: '#ef4444', fontSize: '0.85rem', fontWeight: 500 }}>
                          {errorMessage || "An error occurred. Please try again."}
                        </p>
                      )}

                      <button 
                        type="submit" 
                        disabled={formStatus === 'loading'}
                        className="btn btn-primary" 
                        style={{ 
                          width: '100%', 
                          padding: '0.85rem', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          gap: '0.75rem',
                          marginTop: '0.5rem'
                        }}
                      >
                        {formStatus === 'loading' ? (
                          <>
                            <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
                            Transmitting Message...
                          </>
                        ) : (
                          <>
                            <Send size={16} />
                            Send Message
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Rich Project Modal with Multi-Screenshot Gallery */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="modal-overlay"
          >
            <motion.div
              initial={{ scale: 0.92, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel modal-card"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  background: 'rgba(8, 13, 26, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '50%',
                  width: '38px',
                  height: '38px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#94a3b8',
                  cursor: 'pointer',
                  zIndex: 20,
                  backdropFilter: 'blur(8px)'
                }}
              >
                <X size={20} />
              </button>

              {/* Gallery Component */}
              <div className="modal-gallery-wrapper">
                <div className="modal-main-img-box">
                  {selectedProject.gallery && selectedProject.gallery.length > 0 ? (
                    <img
                      src={selectedProject.gallery[activeGalleryIndex] || selectedProject.primaryImg}
                      alt={`${selectedProject.title} screenshot ${activeGalleryIndex + 1}`}
                      className="modal-main-img"
                    />
                  ) : (
                    <img
                      src={selectedProject.primaryImg}
                      alt={selectedProject.title}
                      className="modal-main-img"
                    />
                  )}

                  {/* Navigation Arrows if multi-image */}
                  {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveGalleryIndex((prev) => 
                            (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length
                          );
                        }}
                        style={{
                          position: 'absolute',
                          left: '1rem',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          background: 'rgba(8, 13, 26, 0.75)',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          borderRadius: '50%',
                          width: '38px',
                          height: '38px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#ffffff',
                          cursor: 'pointer',
                          zIndex: 10
                        }}
                        aria-label="Previous screenshot"
                      >
                        <ChevronLeft size={20} />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveGalleryIndex((prev) => 
                            (prev + 1) % selectedProject.gallery.length
                          );
                        }}
                        style={{
                          position: 'absolute',
                          right: '1rem',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          background: 'rgba(8, 13, 26, 0.75)',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          borderRadius: '50%',
                          width: '38px',
                          height: '38px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#ffffff',
                          cursor: 'pointer',
                          zIndex: 10
                        }}
                        aria-label="Next screenshot"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnails Strip if multi-image */}
                {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                  <div className="gallery-thumbnails-strip">
                    {selectedProject.gallery.map((imgUrl: string, idx: number) => (
                      <button
                        key={idx}
                        onClick={() => setActiveGalleryIndex(idx)}
                        className={`gallery-thumb-btn ${activeGalleryIndex === idx ? 'active' : ''}`}
                      >
                        <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} className="gallery-thumb-img" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Modal Body Info */}
              <div className="modal-content-body">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                  <span className="market-badge">{selectedProject.market}</span>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    fontWeight: 700, 
                    color: 'var(--accent)',
                    background: 'rgba(56, 189, 248, 0.1)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(56, 189, 248, 0.2)'
                  }}>
                    {selectedProject.platform}
                  </span>
                </div>

                <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, marginBottom: '1rem' }}>
                  {selectedProject.title}
                </h2>

                {/* Role & Timeline Strip */}
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                  gap: '1rem', 
                  padding: '1rem 1.25rem',
                  background: 'rgba(8, 13, 26, 0.6)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '14px',
                  marginBottom: '1.75rem'
                }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>ENGINEERING ROLE</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.2rem' }}>
                      <User size={15} style={{ color: 'var(--accent)' }} />
                      {selectedProject.role}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>ENGAGEMENT TIMELINE</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.2rem' }}>
                      <Calendar size={15} style={{ color: 'var(--accent-indigo)' }} />
                      {selectedProject.timeline}
                    </div>
                  </div>
                </div>

                {/* Overview */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: '#ffffff' }}>System Overview</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                    {selectedProject.desc}
                  </p>
                </div>

                {/* Technical Challenges */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: '#ffffff' }}>Technical Architecture & Challenges</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                    {selectedProject.challenges}
                  </p>
                </div>

                {/* Results & Impact */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: '#ffffff' }}>Results & Real-World Impact</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                    {selectedProject.results}
                  </p>
                </div>

                {/* Technologies */}
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Technologies & Libraries</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {selectedProject.tech.map((t: string, i: number) => (
                      <span key={i} className="tech-tag" style={{ fontSize: '0.825rem', padding: '0.35rem 0.8rem' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', alignItems: 'center', marginTop: '1.25rem' }}>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="btn btn-secondary"
                    style={{ minWidth: '110px', padding: '0.75rem 1.25rem' }}
                  >
                    Close
                  </button>

                  {selectedProject.liveLinks && selectedProject.liveLinks.map((link: ProjectLiveLink, lIdx: number) => {
                    const isInternal = link.url.startsWith('#');
                    return (
                      <a
                        key={lIdx}
                        href={link.url}
                        target={isInternal ? '_self' : '_blank'}
                        rel={isInternal ? undefined : 'noopener noreferrer'}
                        className="btn btn-primary"
                        style={{
                          flex: 1,
                          minWidth: '170px',
                          padding: '0.75rem 1.25rem',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.55rem'
                        }}
                        onClick={() => {
                          if (isInternal) {
                            setSelectedProject(null);
                          }
                        }}
                      >
                        {link.type === 'playstore' && <PlayStoreIcon size={16} />}
                        {link.type === 'appstore' && <AppleIcon size={16} />}
                        {link.type === 'web' && <Globe size={16} />}
                        <span>{link.label}</span>
                        {!isInternal && <ExternalLink size={14} style={{ opacity: 0.85 }} />}
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Certificate Viewer Lightbox */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
            className="modal-overlay"
            style={{ zIndex: 1100 }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 15, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel"
              style={{
                maxWidth: '920px',
                width: '100%',
                margin: 'auto 0',
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                background: '#0a0f1d',
                border: '1px solid rgba(234, 179, 8, 0.4)',
                boxShadow: '0 30px 80px -15px rgba(0, 0, 0, 0.95)'
              }}
            >
              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(8, 13, 26, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  width: '38px',
                  height: '38px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  cursor: 'pointer',
                  zIndex: 30,
                  backdropFilter: 'blur(8px)'
                }}
                aria-label="Close certificate"
              >
                <X size={20} />
              </button>

              <div style={{ background: '#ffffff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                  src={selectedCertificate}
                  alt="Certificate of Achievement - dZONE Solutions"
                  style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '75vh', objectFit: 'contain' }}
                />
              </div>

              <div style={{
                padding: '1.25rem 1.75rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'rgba(15, 23, 42, 0.96)',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div>
                  <div style={{ fontWeight: 700, color: '#fef08a', fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Award size={18} style={{ color: '#eab308' }} />
                    dZONE Solutions — Best Achievement 2025
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    Presented to <strong>Mr. Ch. Ikram Ullah</strong> by Director <strong>Zeeshan Sharif</strong> on 23 July, 2025
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <a
                    href={selectedCertificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ padding: '0.55rem 1.1rem', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                  >
                    Open Original <ExternalLink size={14} />
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedCertificate(null)}
                    className="btn btn-primary"
                    style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="social-links">
            <a href="mailto:reply2ikramullah@gmail.com" className="social-link" title="Email Ikram Ullah"><Mail size={18} /></a>
            <a href="https://wa.me/923347471920" target="_blank" rel="noopener noreferrer" className="social-link" title="WhatsApp"><MessageCircle size={18} /></a>
            <a href="https://www.linkedin.com/in/ikram-ullah-7b582a1a9/" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn"><LinkedinIcon size={18} /></a>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            &copy; {new Date().getFullYear()} Ikram Ullah • Lead Flutter Developer & Cross-Platform System Architect.
          </p>
        </div>
      </footer>
    </>
  );
}
