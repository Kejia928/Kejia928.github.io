import React from 'react';
import { Mail, FileText, MapPin, GraduationCap, ArrowUpRight } from 'lucide-react';

// ==========================================
// 1. Data Configuration (English Version)
// ==========================================

const personalInfo = {
  name: "Kejia Zhang",
  title: "Ph.D. Candidate @ EPCC",
  institution: "The University of Edinburgh",
  bio: "I am a Ph.D. student at the Edinburgh Parallel Computing Centre (EPCC), University of Edinburgh. My research explores how generative AI can support children's learning through interactive storytelling systems. I develop AI-driven tools that transform mathematical problems into engaging multimodal stories to support understanding and problem solving. In parallel, I work with the Data Science team at TurinTech AI, where I focus on using LLMs and agent-based approaches to automatically optimise code.",
  email: "K.Zhang-61@sms.ed.ac.uku",
  location: "Edinburgh, Scotland, UK",
  googleScholar: "https://scholar.google.com/citations?hl=en&user=cSPZMuUAAAAJ", 
  github: "https://github.com/Kejia928",
  linkedin: "https://www.linkedin.com/in/kejia-zhang-80b967295/",
  cvLink: "/Kejia_Zhang_CV.pdf", 
  avatarUrl: "/photo.jpg"
};

const news = [
  { date: "Apr 2026", content: "Our paper 'MathTales: Designing and Studying an AI Agent-Based Story Generation System for Teaching Mathematical Problem Solving to Children' was presented at ACM CHI 2026 as poster." },
  { date: "Jul 2025", content: "Presented my paper 'Multimodal Story Generation Using Generative AI for Contextualised Mathematics Education' in doctoral consortium at AIED 2025." },
  { date: "Mar 2025", content: "Joined TurinTech AI as a Data Scientist, working on LLM and agent-based approaches for automated code optimisation." },
  { date: "Nov 2024", content: "Graduated from the University of Edinburgh with Distinction in MSc High Performance Computing with Data Science." },
  { date: "Aug 2023", content: "Our work on penguin detection in underwater videos using deep learning was presented at CamTrapAI 2023." },
  { date: "Jun 2023", content: "Graduated with First Class Honours in BSc Computer Science." },
  { date: "Jun 2023", content: "Our paper 'LSTM Neural Network in Stock Price Prediction' was published at ICBIS 2023." }
];

const publications = [
  {
    title: "MathTales: Designing and Studying an AI Agent-Based Story Generation System for Teaching Mathematical Problem Solving to Children",
    authors: "Kejia Zhang, Yuqi Niu, Mona Y. Alqassim, Andrina Inglis, Charaka Palansuriya, Aurora Constantin",
    venue: "ACM CHI conference on Human Factors in Computing Systems",
    year: "2026",
    type: "Poster", 
    links: { Paper: "https://doi.org/10.1145/3772363.3798774"}, // { Paper: "#", Code: "#", "Project Page": "#" }
    highlight: false 
  },
  {
    title: "Evolving Excellence: Automated Optimization of LLM-based Agents",
    authors: "Paul Brookes, Vardan Voskanyan, Rafail Giavrimis, Matthew Truscott, Mina Ilieva, Chrystalla Pavlou, Alexandru Staicu, Manal Adham, Will Evers- Hood, Jingzhi Gong, Kejia Zhang, ...",
    venue: "arXiv preprint",
    year: "2025",
    type: "Preprint", 
    links: { Paper: "https://doi.org/10.48550/arXiv.2512.09108"},
    highlight: false
  },
  {
    title: "Multimodal Story Generation Using Generative AI for Contextualised Mathematics Education",
    authors: "Kejia Zhang, Charaka Palansuriya, Aurora Constantin",
    venue: "International Conference on Artificial Intelligence in Education (AIED)",
    year: "2025",
    type:  "Doctoral Consortium", 
    links: { Paper: "https://doi.org/10.1007/978-3-031-99261-2_52"},
    highlight: false
  },
  {
    title: "Diving with Penguins: Detecting Penguins and their Prey in Animal-borne Underwater Videos via Deep Learning",
    authors: "Kejia Zhang, Mingyu Yang, Stephen Lang, Alistair McInnes, Richard Sherley, Tilo Burghardt",
    venue: "International Workshop on Camera Traps, AI, and Ecology (CamTrapAI)",
    year: "2023",
    type: "Workshop", 
    links: { Paper: "https://doi.org/10.48550/arXiv.2308.07267"},
    highlight: false
  },
  {
    title: "LSTM Neural Network in Stock Price Prediction",
    authors: "Kejia Zhang",
    venue: "International Academic Conference on Blockchain, Information Technology and Smart Finance",
    year: "2023",
    type: "Paper", 
    links: { Paper: "https://doi.org/10.2991/978-94-6463-198-2_87"},
    highlight: false
  }
];
 
const education = [
  {
    degree: "PhD",
    school: "University of Edinburgh",
    year: "2025 - 2028 (Expected)",
    description: "Supervisor: Dr Charaka Palansuriya and Dr Aurora Constantin"
  },
  {
    degree: "MSc in High Performance Computing with Data Science",
    school: "University of Edinburgh",
    year: "2023 - 2024",
    description: "Distinction, awarded the Class Medal"
  },
  {
    degree: "BSc in Computer Science",
    school: "University of Bristol",
    year: "2020 - 2023",
    description: "First Class Honours"
  }
];

const experience = [
  {
    role: "Data Scientist",
    company: "TurinTech AI",
    year: "Mar. 2025 - Present",
    description: ""
  },
  {
    role: "Summer Intern",
    company: "China Securities Co., Ltd.",
    year: "Aug. 2022 -  Oct. 2022",
    description: ""
  }
];

// ==========================================
// 2. Helper Components & Custom Icons
// ==========================================

const highlightMyName = (authorsString, myName) => {
  const parts = authorsString.split(new RegExp(`(${myName}\\*?)`, 'gi'));
  return parts.map((part, i) => {
    if (part.toLowerCase().includes(myName.toLowerCase())) {
      return <strong key={i} className="text-[#1D1D1F] font-semibold">{part}</strong>;
    }
    return part;
  });
};

const ActionLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" 
     className="inline-flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium text-[#1D1D1F] bg-[#F5F5F7] rounded-full hover:bg-[#E8E8ED] transition-colors duration-200">
    {children}
  </a>
);

// Type Label Component (Apple-style subtle badge)
const TypeLabel = ({ type }) => {
  // Define subtle color mappings based on type
  const colorMap = {
    "Poster": "bg-blue-50 text-blue-700",
    "Paper": "bg-emerald-50 text-emerald-700",
    "Preprint": "bg-slate-100 text-slate-600",
    "Workshop": "bg-purple-50 text-purple-700"
  };

  const colorClasses = colorMap[type] || "bg-gray-100 text-gray-700";

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide uppercase ${colorClasses}`}>
      {type}
    </span>
  );
};

// Custom Inline SVGs for Brand Icons
const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

// ==========================================
// 3. Main Page Component
// ==========================================

export default function AcademicPortfolio() {
  return (
    // Apple's signature light gray background (#F5F5F7) and dark text (#1D1D1F)
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] font-sans selection:bg-[#0066CC] selection:text-white pb-24">
      
      <main className="max-w-[52rem] mx-auto px-6 pt-24 md:pt-32 space-y-24 md:space-y-32">
        
        {/* --- Hero Section --- */}
        <section className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          <div className="w-40 h-40 md:w-52 md:h-52 shrink-0">
            <img 
              src={personalInfo.avatarUrl} 
              alt={personalInfo.name} 
              className="w-full h-full object-cover rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-[6px] border-white"
            />
          </div>
          
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#1D1D1F]">
                {personalInfo.name}
              </h1>
              <p className="text-xl text-[#86868B] mt-2 font-medium tracking-tight">
                {personalInfo.title}
              </p>
              <p className="text-lg text-[#86868B] mt-1 tracking-tight">
                {personalInfo.institution}
              </p>
            </div>
            
            <p className="text-[#1D1D1F] leading-relaxed text-lg font-normal opacity-90 text-justify">
              {personalInfo.bio}
            </p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
              {/* <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-[#86868B] hover:text-[#1D1D1F] transition-colors p-2 font-medium" title="Email">
                <Mail className="w-6 h-6" />
                <span className="hidden sm:inline">Email</span>
              </a> */}
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#86868B] hover:text-[#1D1D1F] transition-colors p-2 font-medium" title="GitHub">
                <GithubIcon className="w-6 h-6" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#86868B] hover:text-[#1D1D1F] transition-colors p-2 font-medium" title="LinkedIn">
                <LinkedinIcon className="w-6 h-6" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a href={personalInfo.googleScholar} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#86868B] hover:text-[#1D1D1F] transition-colors p-2 font-medium" title="Google Scholar">
                <GraduationCap className="w-6 h-6" />
                <span className="hidden sm:inline">Google Scholar</span>
              </a>
            </div>

            <div className="pt-4 flex justify-center md:justify-start">
              <a 
                href={personalInfo.cvLink} 
                className="inline-flex items-center gap-2 bg-[#1D1D1F] text-white px-8 py-3.5 rounded-full font-medium hover:scale-105 transition-transform duration-300 shadow-md"
              >
                <FileText className="w-5 h-5" />
                Download CV
              </a>
            </div>
          </div>
        </section>

        {/* --- News Section --- */}
        <section>
          {/* Custom Apple-style thin scrollbar */}
          <style dangerouslySetInnerHTML={{__html: `
            .apple-scrollbar::-webkit-scrollbar { width: 6px; }
            .apple-scrollbar::-webkit-scrollbar-track { background: transparent; }
            .apple-scrollbar::-webkit-scrollbar-thumb { background-color: #E8E8ED; border-radius: 10px; }
            .apple-scrollbar::-webkit-scrollbar-thumb:hover { background-color: #D1D1D6; }
          `}} />
          <h2 className="text-3xl font-semibold tracking-tighter text-[#1D1D1F] mb-8">
            Latest News
          </h2>
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.02)]">
            <ul className="space-y-6 max-h-[280px] overflow-y-auto pr-4 apple-scrollbar overscroll-contain">
              {news.map((item, index) => (
                <li key={index} className="flex flex-col sm:flex-row sm:gap-6 group">
                  <span className="text-[#86868B] font-medium min-w-[100px] shrink-0 text-sm sm:text-base pt-0.5 tracking-wide">
                    {item.date}
                  </span>
                  <span className="text-[#1D1D1F] leading-relaxed">
                    {item.content}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --- Publications Section --- */}
        <section>
          <div className="flex items-baseline gap-3 mb-8">
            <h2 className="text-3xl font-semibold tracking-tighter text-[#1D1D1F]">
              Publications
            </h2>
            <span className="text-sm font-normal text-[#86868B]">(* equal contribution)</span>
          </div>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300">
                
                {/* Title and Type Label Container */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-[#1D1D1F] leading-snug tracking-tight">
                    {pub.title}
                  </h3>
                  {pub.type && (
                    <div className="shrink-0 mt-1 sm:mt-0">
                      <TypeLabel type={pub.type} />
                    </div>
                  )}
                </div>

                <p className="text-[#86868B] mb-2 leading-relaxed">
                  {highlightMyName(pub.authors, "Kejia Zhang")}
                </p>
                <p className="text-[#1D1D1F] font-medium text-sm mb-5">
                  {pub.venue}, {pub.year}
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {Object.entries(pub.links).map(([key, url]) => (
                    <ActionLink key={key} href={url}>
                      {key}
                    </ActionLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Experience Section --- */}
        <section>
          <h2 className="text-3xl font-semibold tracking-tighter text-[#1D1D1F] mb-8">
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.02)]">
                <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#1D1D1F] tracking-tight">{exp.role}</h3>
                    <p className="text-[#86868B] font-medium mt-1">{exp.company}</p>
                  </div>
                  <div className="text-[#86868B] text-sm sm:text-base font-medium shrink-0 sm:text-right pt-1">
                    {exp.year}
                  </div>
                </div>
                {exp.description && <p className="text-[#1D1D1F] leading-relaxed opacity-90">{exp.description}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* --- Education Section --- */}
        <section>
          <h2 className="text-3xl font-semibold tracking-tighter text-[#1D1D1F] mb-8">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.02)]">
                <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#1D1D1F] tracking-tight">{edu.degree}</h3>
                    <p className="text-[#86868B] font-medium mt-1">{edu.school}</p>
                  </div>
                  <div className="text-[#86868B] text-sm sm:text-base font-medium shrink-0 sm:text-right pt-1">
                    {edu.year}
                  </div>
                </div>
                {edu.description && <p className="text-[#1D1D1F] leading-relaxed opacity-90">{edu.description}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* --- Contact Section --- */}
        <section>
          <h2 className="text-3xl font-semibold tracking-tighter text-[#1D1D1F] mb-8">
            Get in Touch
          </h2>
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row gap-8 md:gap-16 items-start sm:items-center justify-between">
            <div className="space-y-5">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 text-[#1D1D1F] hover:text-[#0066CC] transition-colors group">
                <div className="bg-[#F5F5F7] p-3 rounded-full group-hover:bg-[#E8E8ED] transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium text-lg">{personalInfo.email}</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -ml-2" />
              </a>
              <div className="flex items-center gap-4 text-[#86868B]">
                <div className="bg-[#F5F5F7] p-3 rounded-full">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-medium text-lg">{personalInfo.location}</span>
              </div>
            </div>
            
            <div className="text-[#86868B] text-base leading-relaxed max-w-xs">
              <p>Feel free to reach out if you are interested in my research, or looking for collaborations.</p>
            </div>
          </div>
        </section>

      </main>
      
      {/* Footer */}
      <footer className="max-w-[52rem] mx-auto px-6 mt-24 text-center text-[#86868B] text-sm">
        <p>© {new Date().getFullYear()} {personalInfo.name}</p>
      </footer>
    </div>
  );
}