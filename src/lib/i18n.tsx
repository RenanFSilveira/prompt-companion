import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Language = "pt" | "en";

type Dict = Record<string, string | string[]>;

const translations: Record<Language, Dict> = {
  pt: {
    "nav.programa": "Programa",
    "nav.sobre": "Sobre",
    "nav.depoimentos": "Depoimentos",
    "nav.faq": "FAQ",
    "nav.cta": "Agendar Aula Grátis",
    "cta.full": "Agendar Aula Experimental Gratuita",

    "hero.eyebrow": "Renzo Gracie Barra · Jardim Oceânico",
    "hero.headline": "Disciplina. Respeito. Autoconfiança. Seu filho pode desenvolver tudo isso.",
    "hero.sub": "O Projeto Pequenos Samurais usa o Jiu-Jitsu para formar crianças disciplinadas, resilientes e confiantes — em um ambiente familiar e de alto nível na Barra da Tijuca.",
    "hero.alt": "Crianças treinando Jiu-Jitsu",

    "cred.years": "6 anos de história na Barra da Tijuca",
    "cred.lineage": "Filiação direta com Renzo Gracie Academy em NY",

    "pain.eyebrow": "O problema que você já conhece",
    "pain.title": "Horas de tela. Zero disciplina. Nenhuma mudança real.",
    "pain.p1": "A maioria das crianças hoje passa mais de 6 horas por dia em frente a telas. O resultado? Falta de concentração, dificuldade em aceitar limites, sedentarismo, e uma geração que não sabe lidar com frustração.",
    "pain.p2": "Você já tentou limitar o tempo de tela. Já tentou outras atividades. Mas nada parece criar aquela mudança real de comportamento que você quer ver no seu filho.",
    "pain.alt": "Criança exposta a telas",

    "program.eyebrow": "O Método",
    "program.title": "Projeto Pequenos Samurais",
    "program.intro": "O Jiu-Jitsu não é só uma luta. Na Renzo Gracie Barra, ele é uma ferramenta de formação de caráter. Não é uma escolinha de esporte. É uma metodologia de educação — em um tatame.",
    "program.p1.title": "Disciplina e Hierarquia",
    "program.p1.desc": "Respeito às regras, aos professores e aos colegas. Uma base sólida de valores que acompanha a criança para a vida.",
    "program.p2.title": "Resiliência",
    "program.p2.desc": "Aprender que errar faz parte do processo e que persistência é o caminho. Gestão de frustração na prática.",
    "program.p3.title": "Desenvolvimento Social",
    "program.p3.desc": "Interações saudáveis, amizades reais e alegria compartilhada em um ambiente seguro e familiar.",
    "program.p4.title": "Saúde Física",
    "program.p4.desc": "Movimento, postura e bem-estar no lugar de horas de tela. Uma alternativa real ao sedentarismo infantil.",

    "authority.lineageEyebrow": "A Linhagem",
    "authority.lineageTitle": "Uma das maiores linhagens do Jiu-Jitsu mundial",
    "authority.lineageImageAlt": "Mito Pontual e Renzo Gracie",
    "authority.lineageText": "Renzo Gracie é um dos nomes mais respeitados da história das artes marciais. Nossa unidade é filiada diretamente a ele — não é franquia, não é licença. É uma extensão legítima de uma das maiores linhagens do Jiu-Jitsu mundial.",
    "authority.coachEyebrow": "Head Coach",
    "authority.coachName": "Mito Pontual",
    "authority.coachP1": "Mito Pontual lidera a metodologia técnica da academia com foco na formação completa do aluno — dentro e fora do tatame. Com anos de dedicação ao Jiu-Jitsu e uma abordagem que equilibra rigor técnico com acolhimento, ele é a referência para centenas de alunos.",
    "authority.coachP2": "Uma cobertura exclusiva no coração do Jardim Oceânico. Um ambiente seguro, familiar e pensado para quem valoriza qualidade — sem precisar enfrentar o trânsito da Barra.",
    "authority.coachAlt": "Head Coach Mito Pontual",
    "authority.tag1": "Renzo Gracie Team",
    "authority.tag2": "Head Coach",
    "authority.tag3": "Jardim Oceânico",

    "testimonials.eyebrow": "Prova Social",
    "testimonials.title": "O que os pais dizem",
    "testimonials.t1.quote": "Meu filho era extremamente tímido e tinha dificuldade em interagir com outras crianças. Depois de 6 meses no Projeto Pequenos Samurais, a mudança foi impressionante. Ele está mais confiante, fez amigos de verdade e até melhorou na escola.",
    "testimonials.t1.name": "Patrícia M.",
    "testimonials.t1.child": "mãe do Lucas, 8 anos",
    "testimonials.t2.quote": "O Pedro passava o dia inteiro no tablet. Desde que começou no Jiu-Jitsu, ele pede para ir à aula. A disciplina que aprendeu no tatame refletiu em casa — ele aceita regras com muito mais maturidade.",
    "testimonials.t2.name": "Roberto S.",
    "testimonials.t2.child": "pai do Pedro, 10 anos",
    "testimonials.t3.quote": "Eu tinha medo de ser agressivo, mas é o oposto. O ambiente da Renzo Gracie Barra é acolhedor e ao mesmo tempo exigente. A Sophia aprendeu a lidar com frustração de um jeito que nenhuma outra atividade conseguiu.",
    "testimonials.t3.name": "Fernanda L.",
    "testimonials.t3.child": "mãe da Sophia, 7 anos",

    "faq.eyebrow": "Dúvidas Frequentes",
    "faq.title": "Perguntas e Respostas",
    "faq.q1": "O Jiu-Jitsu não é muito agressivo para crianças pequenas?",
    "faq.a1": "Não. O Jiu-Jitsu é uma das artes marciais mais indicadas para crianças justamente por ser baseado em técnica, não em força bruta. O foco do Projeto Pequenos Samurais é controle, respeito e fair play.",
    "faq.q2": "Meu filho é tímido. Será que vai se adaptar?",
    "faq.a2": "Crianças tímidas costumam ser as que mais se transformam. O ambiente familiar da academia e a progressão gradual de habilidades constroem autoconfiança de forma natural.",
    "faq.q3": "Como funciona a aula experimental?",
    "faq.a3": "É gratuita, sem compromisso e sem pressão. A criança participa de uma aula real com os outros alunos. Você assiste e sente o ambiente. Depois, você decide com calma.",
    "faq.q4": "Qual a faixa etária do projeto?",
    "faq.a4": "O Projeto Pequenos Samurais atende crianças a partir de 4 anos. Entre em contato para saber mais sobre as turmas disponíveis.",

    "finalCta.title": "A primeira aula é gratuita. O próximo passo é simples.",
    "finalCta.text": "Você não está matriculando seu filho em uma academia de luta. Você está dando a ele uma ferramenta para a vida: disciplina para estudar, respeito para conviver, resiliência para não desistir quando for difícil.",

    "footer.name": "Renzo Gracie Barra",
    "footer.address": "Av. Olegário Maciel 101, cobertura\nJardim Oceânico - Barra da Tijuca\nRio de Janeiro - RJ",
    "footer.phone": "(21) 98187-7700",
    "footer.phoneLabel": "WhatsApp",
    "footer.rights": "Todos os direitos reservados.",

    "lang.switchTo.en": "Switch to English",
    "lang.switchTo.pt": "Mudar para Português",
    "wa.message": "Olá! Vi o site da Renzo Gracie Barra e gostaria de age﻿‌‌​‌‌​‌⁠‌​​​​​﻿ndar uma aula experimental gratuita de Jiu-Jitsu Kids.",
  },
  en: {
    "nav.programa": "Program",
    "nav.sobre": "About",
    "nav.depoimentos": "Testimonials",
    "nav.faq": "FAQ",
    "nav.cta": "Book a Free Class",
    "cta.full": "Book a Free Trial Class",

    "hero.eyebrow": "Renzo Gracie Barra · Jardim Oceânico",
    "hero.headline": "Discipline. Respect. Self-confidence. Your child can develop it all.",
    "hero.sub": "The Little Samurai Project uses Jiu-Jitsu to raise disciplined, resilient and confident kids — in a family-like, high-level environment in Barra da Tijuca.",
    "hero.alt": "Kids training Jiu-Jitsu",

    "cred.years": "6 years of history in Barra da Tijuca",
    "cred.lineage": "Direct affiliation with Renzo Gracie Academy in NY",

    "pain.eyebrow": "The problem you already know",
    "pain.title": "Hours of screen time. Zero discipline. No real change.",
    "pain.p1": "Most kids today spend more than 6 hours a day in front of screens. The result? Lack of focus, difficulty accepting limits, a sedentary lifestyle, and a generation that can't handle frustration.",
    "pain.p2": "You've already tried limiting screen time. You've tried other activities. But nothing seems to create that real behavior change you want to see in your child.",
    "pain.alt": "Child exposed to screens",

    "program.eyebrow": "The Method",
    "program.title": "Little Samurai Project",
    "program.intro": "Jiu-Jitsu is not just a fight. At Renzo Gracie Barra, it's a tool for building character. This isn't a sports club. It's an education methodology — on the mat.",
    "program.p1.title": "Discipline and Hierarchy",
    "program.p1.desc": "Respect for the rules, teachers and peers. A solid foundation of values that will follow the child for life.",
    "program.p2.title": "Resilience",
    "program.p2.desc": "Learning that making mistakes is part of the process and that persistence is the way. Managing frustration in practice.",
    "program.p3.title": "Social Development",
    "program.p3.desc": "Healthy interactions, real friendships and shared joy in a safe, family-like environment.",
    "program.p4.title": "Physical Health",
    "program.p4.desc": "Movement, posture and wellbeing instead of hours of screen time. A real alternative to childhood sedentary habits.",

    "authority.lineageEyebrow": "The Lineage",
    "authority.lineageTitle": "One of the greatest lineages in world Jiu-Jitsu",
    "authority.lineageImageAlt": "Mito Pontual and Renzo Gracie",
    "authority.lineageText": "Renzo Gracie is one of the most respected names in martial arts history. Our school is directly affiliated with him — not a franchise, not a license. It's a legitimate extension of one of the greatest lineages in world Jiu-Jitsu.",
    "authority.coachEyebrow": "Head Coach",
    "authority.coachName": "Mito Pontual",
    "authority.coachP1": "Mito Pontual leads the academy's technical methodology with a focus on the complete development of the student — on and off the mat. With years dedicated to Jiu-Jitsu and an approach that balances technical rigor with warmth, he's the reference for hundreds of students.",
    "authority.coachP2": "An exclusive penthouse in the heart of Jardim Oceânico. A safe, family-like environment built for those who value quality — without having to deal with Barra traffic.",
    "authority.coachAlt": "Head Coach Mito Pontual",
    "authority.tag1": "Renzo Gracie Team",
    "authority.tag2": "Head Coach",
    "authority.tag3": "Jardim Oceânico",

    "testimonials.eyebrow": "Social Proof",
    "testimonials.title": "What parents say",
    "testimonials.t1.quote": "My son used to be extremely shy and struggled to interact with other kids. After 6 months in the Little Samurai Project, the change was impressive. He's more confident, made real friends and even improved at school.",
    "testimonials.t1.name": "Patrícia M.",
    "testimonials.t1.child": "Lucas' mom, 8 y/o",
    "testimonials.t2.quote": "Pedro used to spend all day on the tablet. Since he started Jiu-Jitsu, he asks to go to class. The discipline he learned on the mat reflected at home — he accepts rules with much more maturity.",
    "testimonials.t2.name": "Roberto S.",
    "testimonials.t2.child": "Pedro's dad, 10 y/o",
    "testimonials.t3.quote": "I was afraid it would be aggressive, but it's the opposite. The Renzo Gracie Barra environment is welcoming and demanding at the same time. Sophia learned to deal with frustration in a way no other activity achieved.",
    "testimonials.t3.name": "Fernanda L.",
    "testimonials.t3.child": "Sophia's mom, 7 y/o",

    "faq.eyebrow": "Frequently Asked Questions",
    "faq.title": "Questions and Answers",
    "faq.q1": "Isn't Jiu-Jitsu too aggressive for young children?",
    "faq.a1": "No. Jiu-Jitsu is one of the most recommended martial arts for kids precisely because it's based on technique, not brute force. The Little Samurai Project's focus is control, respect and fair play.",
    "faq.q2": "My child is shy. Will they adapt?",
    "faq.a2": "Shy kids tend to be the ones who transform the most. The academy's family-like environment and gradual skill progression build self-confidence naturally.",
    "faq.q3": "How does the trial class work?",
    "faq.a3": "It's free, no commitment and no pressure. The child participates in a real class with the other students. You watch and get a feel for the environment. Then you decide calmly.",
    "faq.q4": "What's the age range for the project?",
    "faq.a4": "The Little Samurai Project welcomes children from 4 years old. Get in touch to learn more about the available classes.",

    "finalCta.title": "The first class is free. The next step is simple.",
    "finalCta.text": "You're not enrolling your child in a fight gym. You're giving them a tool for life: discipline to study, respect to live together, resilience to not give up when things get hard.",

    "footer.name": "Renzo Gracie Barra",
    "footer.address": "Av. Olegário Maciel 101, penthouse\nJardim Oceânico - Barra da Tijuca\nRio de Janeiro - RJ",
    "footer.phone": "(21) 98187-7700",
    "footer.phoneLabel": "WhatsApp",
    "footer.rights": "All rights reserved.",

    "lang.switchTo.en": "Switch to English",
    "lang.switchTo.pt": "Mudar para Português",
    "wa.message": "Hi! I saw the Renzo Gracie Barra website and I'd like to book a free trial Jiu-Jitsu Kids class.",
  },
};

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "rgb-lang";

const detectInitial = (): Language => {
  if (typeof window === "undefined") return "pt";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "pt" || stored === "en") return stored;
  const nav = window.navigator.language?.toLowerCase() ?? "";
  return nav.startsWith("pt") ? "pt" : "en";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(detectInitial);

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // ignore storage errors (private mode, etc.)
    }
  }, [language]);

  const setLanguage = (lang: Language) => setLanguageState(lang);

  const t = (key: string) => {
    const value = translations[language][key];
    if (typeof value === "string") return value;
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
