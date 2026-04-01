import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router";
import svgPaths from "../../imports/svg-rt86nqhfv4";
import { setPendingAgent } from "./agentStore";
import imgImage721 from "figma:asset/432ada78325d53e71ce8d672d1b411eb4ee25265.png";
import imgGallery01 from "../../assets/center-images/gallery-01.png";
import imgGallery02 from "../../assets/center-images/gallery-02.png";
import imgGallery03 from "../../assets/center-images/gallery-03.png";
import imgGallery04 from "../../assets/center-images/gallery-04.png";
import imgGallery05 from "../../assets/center-images/gallery-05.png";
import imgGallery06 from "../../assets/center-images/gallery-06.png";
import imgGallery07 from "../../assets/center-images/gallery-07.png";
import imgGallery08 from "../../assets/center-images/gallery-08.png";
import imgGallery09 from "../../assets/center-images/gallery-09.png";
import imgGallery10 from "../../assets/center-images/gallery-10.png";
import imgGallery11 from "../../assets/center-images/gallery-11.png";
import imgGallery12 from "../../assets/center-images/gallery-12.png";
import { imgFrame2147239680 } from "../../imports/svg-s2yy1";

// Center (large) avatar images - one per gallery position
import imgCenter0 from "../../assets/center-images/center-01.png";
import imgCenter1 from "../../assets/center-images/center-02.png";
import imgCenter2 from "../../assets/center-images/center-03.png";
import imgCenter3 from "../../assets/center-images/center-04.png";
import imgCenter4 from "../../assets/center-images/center-05.png";
import imgCenter5 from "../../assets/center-images/center-06.png";
import imgCenter6 from "../../assets/center-images/center-07.png";
import imgCenter7 from "../../assets/center-images/center-08.png";
import imgCenter8 from "../../assets/center-images/center-09.png";
import imgCenter9 from "../../assets/center-images/center-10.png";
import imgCenter10 from "../../assets/center-images/center-11.png";
import imgCenter11 from "../../assets/center-images/center-12.png";

// ─── Contextual Name Summarizer ──────────────────────────────────────────────

const STOP_WORDS = new Set([
  "i", "me", "my", "we", "our", "you", "your", "the", "a", "an", "and", "or",
  "but", "in", "on", "at", "to", "for", "of", "with", "by", "from", "is",
  "am", "are", "was", "were", "be", "been", "being", "have", "has", "had",
  "do", "does", "did", "will", "would", "could", "should", "shall", "may",
  "might", "can", "that", "this", "these", "those", "it", "its", "not", "no",
  "so", "if", "then", "than", "what", "which", "who", "whom", "how", "when",
  "where", "why", "all", "each", "every", "both", "few", "more", "most",
  "other", "some", "such", "only", "also", "just", "about", "up", "out",
  "into", "over", "after", "before", "between", "under", "above", "very",
  "too", "here", "there", "again", "once", "well", "back", "even", "still",
  "already", "always", "never", "often", "sometimes", "usually", "really",
  "quite", "much", "many", "any", "own", "same", "able", "specialize",
  "specializing", "focus", "focusing", "help", "helping", "work", "working",
  "make", "making", "use", "using", "provide", "providing", "ensure",
  "ensuring", "like", "need", "want", "get", "got", "go", "going", "take",
  "taking", "come", "know", "think", "see", "look", "find", "give", "tell",
  "try", "ask", "seem", "feel", "leave", "call", "keep", "let", "begin",
  "show", "hear", "play", "run", "move", "live", "believe", "bring", "happen",
  "set", "put", "pay", "hold", "learn", "change", "lead", "understand",
  "across", "through", "during", "around", "among", "along", "within",
  "without", "toward", "upon", "act",
]);

interface DomainEntry {
  domain: string;
  keywords: string[];
  weight: number;
}

const DOMAIN_MAP: DomainEntry[] = [
  { domain: "Feedback", keywords: ["feedback", "reviews", "ratings", "survey", "surveys", "nps", "csat"], weight: 1 },
  { domain: "Customer", keywords: ["customer", "customers", "client", "clients", "user", "users", "consumer"], weight: 1 },
  { domain: "Sales", keywords: ["sales", "revenue", "pipeline", "deals", "quota", "crm", "leads", "conversion", "upsell", "churn"], weight: 1 },
  { domain: "Marketing", keywords: ["marketing", "campaign", "campaigns", "brand", "branding", "seo", "advertising", "ads", "social media", "engagement"], weight: 1 },
  { domain: "Product", keywords: ["product", "products", "roadmap", "feature", "features", "backlog", "sprint", "agile", "scrum", "prioritize", "prioritization"], weight: 1 },
  { domain: "Engineering", keywords: ["code", "coding", "engineer", "engineering", "developer", "development", "software", "programming", "api", "backend", "frontend", "fullstack", "devops", "cicd", "deploy", "debug", "refactor"], weight: 1 },
  { domain: "Design", keywords: ["design", "ux", "ui", "figma", "wireframe", "prototype", "visual", "layout", "typography", "accessibility"], weight: 1 },
  { domain: "Data", keywords: ["data", "database", "sql", "analytics", "metrics", "kpi", "dashboard", "visualization", "warehouse", "etl", "pipeline"], weight: 1 },
  { domain: "Research", keywords: ["research", "study", "studies", "findings", "hypothesis", "experiment", "experiments", "insights", "discovery", "literature"], weight: 1 },
  { domain: "Content", keywords: ["content", "writing", "write", "blog", "article", "articles", "copy", "copywriting", "editorial", "publishing", "documentation", "docs"], weight: 1 },
  { domain: "Finance", keywords: ["finance", "financial", "budget", "budgeting", "accounting", "revenue", "cost", "costs", "expense", "forecast", "forecasting", "profit", "invoice"], weight: 1 },
  { domain: "HR", keywords: ["hr", "hiring", "recruit", "recruiting", "recruitment", "onboarding", "talent", "employee", "employees", "workforce", "culture", "retention", "benefits", "payroll"], weight: 1 },
  { domain: "Security", keywords: ["security", "cybersecurity", "vulnerability", "threat", "threats", "compliance", "audit", "encryption", "authentication", "authorization", "firewall"], weight: 1 },
  { domain: "Support", keywords: ["support", "helpdesk", "ticket", "tickets", "issue", "issues", "troubleshoot", "troubleshooting", "resolution", "escalation", "sla"], weight: 1 },
  { domain: "Operations", keywords: ["operations", "ops", "logistics", "supply", "chain", "inventory", "procurement", "process", "processes", "workflow", "workflows", "automation", "efficiency"], weight: 1 },
  { domain: "Legal", keywords: ["legal", "law", "contract", "contracts", "compliance", "regulation", "regulations", "policy", "policies", "intellectual property", "patent", "trademark"], weight: 1 },
  { domain: "Communication", keywords: ["communication", "email", "emails", "messaging", "meetings", "presentation", "presentations", "reports", "reporting", "stakeholder"], weight: 1 },
  { domain: "AI", keywords: ["ai", "artificial intelligence", "machine learning", "ml", "deep learning", "nlp", "natural language", "model", "models", "neural", "training", "inference", "llm", "gpt", "prompt"], weight: 1 },
  { domain: "Sentiment", keywords: ["sentiment", "emotion", "emotions", "tone", "mood", "opinion", "opinions", "perception", "feeling", "feelings", "satisfaction"], weight: 1 },
  { domain: "Strategy", keywords: ["strategy", "strategic", "planning", "plan", "vision", "mission", "goals", "objectives", "okr", "initiative", "initiatives", "transformation"], weight: 1 },
  { domain: "Quality", keywords: ["quality", "qa", "testing", "test", "tests", "bug", "bugs", "defect", "defects", "regression", "validation", "verification"], weight: 1 },
  { domain: "Education", keywords: ["education", "learning", "training", "course", "courses", "curriculum", "teaching", "mentoring", "coaching", "tutorial", "tutorials", "lesson"], weight: 1 },
  { domain: "Health", keywords: ["health", "healthcare", "medical", "clinical", "patient", "patients", "wellness", "diagnosis", "treatment", "pharmaceutical"], weight: 1 },
  { domain: "Project", keywords: ["project", "projects", "milestone", "milestones", "deliverable", "deliverables", "timeline", "deadline", "deadlines", "gantt", "task", "tasks"], weight: 1 },
];

interface ActionEntry {
  role: string;
  keywords: string[];
}

const ACTION_MAP: ActionEntry[] = [
  { role: "Analysis", keywords: ["analyze", "analyzing", "analysis", "examine", "evaluate", "evaluating", "assess", "assessing", "measure", "measuring", "audit", "inspect", "review", "reviewing", "interpret"] },
  { role: "Intelligence", keywords: ["uncover", "discover", "identify", "identifying", "detect", "detecting", "insight", "insights", "intelligence", "monitor", "monitoring", "track", "tracking", "observe", "recognize"] },
  { role: "Strategy", keywords: ["strategy", "strategic", "plan", "planning", "advise", "advising", "recommend", "recommending", "optimize", "optimizing", "improve", "improving", "transform", "prioritize", "prioritizing"] },
  { role: "Creation", keywords: ["create", "creating", "generate", "generating", "build", "building", "craft", "crafting", "compose", "composing", "produce", "producing", "draft", "drafting", "write", "writing"] },
  { role: "Automation", keywords: ["automate", "automating", "automation", "streamline", "streamlining", "accelerate", "simplify", "simplifying", "scale", "scaling", "orchestrate"] },
  { role: "Support", keywords: ["support", "supporting", "assist", "assisting", "resolve", "resolving", "troubleshoot", "troubleshooting", "respond", "responding", "guide", "guiding", "answer", "answering"] },
  { role: "Synthesis", keywords: ["synthesize", "synthesizing", "summarize", "summarizing", "aggregate", "aggregating", "consolidate", "compile", "compiling", "distill", "combine", "merge", "unify"] },
  { role: "Orchestration", keywords: ["coordinate", "coordinating", "manage", "managing", "orchestrate", "orchestrating", "organize", "organizing", "facilitate", "facilitating", "delegate", "delegating"] },
  { role: "Prediction", keywords: ["predict", "predicting", "forecast", "forecasting", "anticipate", "anticipating", "project", "projecting", "estimate", "estimating", "model", "modeling", "simulate"] },
  { role: "Curation", keywords: ["curate", "curating", "select", "selecting", "filter", "filtering", "sort", "sorting", "categorize", "categorizing", "classify", "classifying", "tag", "tagging", "label"] },
];

function summarizeExpertise(text: string): string {
  if (!text || text.trim().length === 0) return "General Purpose";

  const lower = text.toLowerCase();
  const words = lower.split(/[^a-z0-9]+/).filter((w) => w.length > 1 && !STOP_WORDS.has(w));

  const domainScores = DOMAIN_MAP.map((entry) => {
    let score = 0;
    for (const kw of entry.keywords) {
      if (kw.includes(" ")) {
        if (lower.includes(kw)) score += 2;
      } else {
        for (const w of words) {
          if (w === kw) score += 2;
          else if (w.startsWith(kw.slice(0, Math.min(kw.length, 4))) && kw.length > 3) score += 1;
          else if (kw.startsWith(w.slice(0, Math.min(w.length, 4))) && w.length > 3) score += 1;
        }
      }
    }
    return { domain: entry.domain, score };
  }).filter((d) => d.score > 0).sort((a, b) => b.score - a.score);

  const actionScores = ACTION_MAP.map((entry) => {
    let score = 0;
    for (const kw of entry.keywords) {
      for (const w of words) {
        if (w === kw) score += 2;
        else if (w.startsWith(kw.slice(0, Math.min(kw.length, 5)))) score += 1;
      }
    }
    return { role: entry.role, score };
  }).filter((a) => a.score > 0).sort((a, b) => b.score - a.score);

  const topDomain = domainScores[0]?.domain;
  const secondDomain = domainScores[1]?.domain;
  const topAction = actionScores[0]?.role;

  if (topDomain && topAction) {
    if (
      secondDomain &&
      domainScores[1].score >= domainScores[0].score * 0.7 &&
      secondDomain !== topDomain
    ) {
      return `${topDomain} & ${secondDomain} ${topAction}`;
    }
    return `${topDomain} ${topAction}`;
  }

  if (topDomain) {
    return `${topDomain} Intelligence`;
  }

  if (topAction) {
    return `${topAction}`;
  }

  const freq: Record<string, number> = {};
  for (const w of words) {
    freq[w] = (freq[w] || 0) + 1;
  }
  const topWord = Object.entries(freq).sort((a, b) => b[1] - a[1])[0];
  if (topWord) {
    const capitalized = topWord[0].charAt(0).toUpperCase() + topWord[0].slice(1);
    return `${capitalized} Specialist`;
  }

  return "AI Assistant";
}

type AvatarItem = {
  id: number;
  img: string;
  centerImg: string;
  name: string;
  wrapperClass: string;
  renderType: 'nested' | 'cover' | 'flipped';
  imgStyle?: Record<string, string>;
  flipSize?: { h: number; w: number };
};

const avatars: AvatarItem[] = [
  { id: 0, img: imgGallery01, centerImg: imgCenter0, name: "Avatar 1",
    wrapperClass: "absolute inset-0",
    renderType: "cover" },
  { id: 1, img: imgGallery02, centerImg: imgCenter1, name: "Avatar 2",
    wrapperClass: "absolute inset-0",
    renderType: "cover" },
  { id: 2, img: imgGallery03, centerImg: imgCenter2, name: "Avatar 3",
    wrapperClass: "absolute inset-0",
    renderType: "cover" },
  { id: 3, img: imgGallery04, centerImg: imgCenter3, name: "Avatar 4",
    wrapperClass: "absolute inset-0",
    renderType: "cover" },
  { id: 4, img: imgGallery05, centerImg: imgCenter4, name: "Avatar 5",
    wrapperClass: "absolute inset-0",
    renderType: "cover" },
  { id: 5, img: imgGallery06, centerImg: imgCenter5, name: "Avatar 6",
    wrapperClass: "absolute inset-0",
    renderType: "cover" },
  { id: 6, img: imgGallery07, centerImg: imgCenter6, name: "Avatar 7",
    wrapperClass: "absolute inset-0",
    renderType: "cover" },
  { id: 7, img: imgGallery08, centerImg: imgCenter7, name: "Avatar 8",
    wrapperClass: "absolute inset-0",
    renderType: "cover" },
  { id: 8, img: imgGallery09, centerImg: imgCenter8, name: "Avatar 9",
    wrapperClass: "absolute inset-0",
    renderType: "cover" },
  { id: 9, img: imgGallery10, centerImg: imgCenter9, name: "Avatar 10",
    wrapperClass: "absolute inset-0",
    renderType: "cover" },
  { id: 10, img: imgGallery11, centerImg: imgCenter10, name: "Avatar 11",
    wrapperClass: "absolute inset-0",
    renderType: "cover" },
  { id: 11, img: imgGallery12, centerImg: imgCenter11, name: "Avatar 12",
    wrapperClass: "absolute inset-0",
    renderType: "cover" },
];

const colorSchemes = [
  { id: 0, color: "#ffffff", border: true },
  { id: 1, color: "#f1c238" },
  { id: 2, color: "#03e8f9" },
  { id: 3, color: "#f960c6" },
  { id: 4, color: "#0291fb" },
  { id: 5, color: "#313131" },
  { id: 6, color: "#00ba5f" },
  { id: 7, color: "#9450fd" },
];

export function AgentConfig() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") navigate("/");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);
  const preselected = location.state as { avatarIndex?: number; name?: string; expertise?: string; avatarBg?: string } | null;
  const [selectedColor, setSelectedColor] = useState(() => {
    if (preselected?.avatarBg) {
      const idx = colorSchemes.findIndex(c => c.color === preselected.avatarBg);
      return idx >= 0 ? idx : 0;
    }
    return 0;
  });
  const [selectedAvatar, setSelectedAvatar] = useState(preselected?.avatarIndex ?? 0);
  const [prevAvatar, setPrevAvatar] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const [agentName, setAgentName] = useState("");
  const [confirmedName, setConfirmedName] = useState(preselected?.name ?? "Elena");
  const [buttonAnimating, setButtonAnimating] = useState(false);
  const [expertise, setExpertise] = useState("");
  const [displayedHeader, setDisplayedHeader] = useState("");
  const [confirmedExpertise, setConfirmedExpertise] = useState(
    preselected?.expertise
      ? summarizeExpertise(preselected.expertise) + " expert"
      : "Feedback Intelligence expert"
  );
  const titleTimeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const [showTitleCursor, setShowTitleCursor] = useState(false);
  const currentHeaderRef = useRef("");
  const currentSubtitleRef = useRef(
    preselected?.expertise
      ? summarizeExpertise(preselected.expertise) + " expert"
      : "Feedback Intelligence expert"
  );
  const confirmedNameRef = useRef(preselected?.name ?? "Elena");

  // Typewriter on load
  const [typewriterPhase, setTypewriterPhase] = useState<"name" | "expertise" | "done">("name");
  const typewriterDone = useRef(false);
  const [showNameBorder, setShowNameBorder] = useState(false);
  const [showExpertiseBorder, setShowExpertiseBorder] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);
  const [contentSize, setContentSize] = useState({ width: 0, height: 0 });

  // Text measuring for inputs
  const nameSpanRef = useRef<HTMLSpanElement>(null);
  const expertiseSpanRef = useRef<HTMLSpanElement>(null);
  const [nameWidth, setNameWidth] = useState<number>(0);
  const [expertiseWidth, setExpertiseWidth] = useState<number>(0);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContentSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (nameSpanRef.current) {
      setNameWidth(nameSpanRef.current.offsetWidth);
    }
  }, [agentName]);

  useEffect(() => {
    if (expertiseSpanRef.current) {
      setExpertiseWidth(expertiseSpanRef.current.offsetWidth);
    }
  }, [expertise]);

  const handleOnboard = () => {
    const expertiseTitle = confirmedExpertise
      ? summarizeExpertise(confirmedExpertise) + " Agent"
      : "Feedback Intelligence Agent";
    const agentData = {
      name: confirmedName,
      expertise: expertiseTitle,
      avatarBg: colorSchemes[selectedColor].color,
      avatarImg: avatars[selectedAvatar].centerImg,
      avatarIndex: selectedAvatar,
    };
    setPendingAgent(agentData);
    navigate("/onboarding", { state: agentData });
  };

  const confirmName = () => {
    const newName = agentName.trim();
    if (newName && newName !== confirmedNameRef.current) {
      setButtonAnimating(true);
      setConfirmedName(newName);
      confirmedNameRef.current = newName;
      setTimeout(() => setButtonAnimating(false), 600);
      animateHeader(`${newName}, ${currentSubtitleRef.current}`);
    }
  };

  function generateTitleFromExpertise(text: string): string {
    return summarizeExpertise(text) + " expert";
  }

  const animateHeader = useCallback((newHeader: string) => {
    titleTimeoutsRef.current.forEach(clearTimeout);
    titleTimeoutsRef.current = [];
    setShowTitleCursor(true);

    const oldHeader = currentHeaderRef.current;
    const deleteSpeed = 15;
    const writeSpeed = 25;
    const pauseBetween = 100;

    for (let i = oldHeader.length; i >= 0; i--) {
      const timeout = setTimeout(() => {
        setDisplayedHeader(oldHeader.slice(0, i));
      }, (oldHeader.length - i) * deleteSpeed);
      titleTimeoutsRef.current.push(timeout);
    }

    const deleteTime = oldHeader.length * deleteSpeed;

    for (let i = 0; i <= newHeader.length; i++) {
      const timeout = setTimeout(() => {
        setDisplayedHeader(newHeader.slice(0, i));
        if (i === newHeader.length) {
          currentHeaderRef.current = newHeader;
          setTimeout(() => setShowTitleCursor(false), 500);
        }
      }, deleteTime + pauseBetween + i * writeSpeed);
      titleTimeoutsRef.current.push(timeout);
    }
  }, []);

  const confirmExpertise = useCallback(() => {
    if (expertise.trim() !== confirmedExpertise) {
      setConfirmedExpertise(expertise.trim());
      const newTitle = generateTitleFromExpertise(expertise);
      if (newTitle !== currentSubtitleRef.current) {
        currentSubtitleRef.current = newTitle;
        animateHeader(`${confirmedNameRef.current}, ${newTitle}`);
      }
    }
  }, [expertise, confirmedExpertise, animateHeader]);

  // Handle avatar crossfade
  const handleAvatarSelect = useCallback((idx: number) => {
    if (idx === selectedAvatar) return;
    setPrevAvatar(selectedAvatar);
    setSelectedAvatar(idx);
    setTransitioning(true);
  }, [selectedAvatar]);

  useEffect(() => {
    if (!transitioning) return;
    // Trigger fade-in on next frame so the new image starts at opacity 0
    // then transitions to opacity 1
    const raf = requestAnimationFrame(() => {
      setTransitioning(false); // This flips opacity from 0→1 on new, 1→0 on old
    });
    const cleanup = setTimeout(() => {
      setPrevAvatar(null);
    }, 600); // Remove old image after transition completes
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(cleanup);
    };
  }, [transitioning]);

  useEffect(() => {
    if (typewriterDone.current) return;
    typewriterDone.current = true;

    const targetName = preselected?.name ?? "Elena";
    const targetExpertise = preselected?.expertise
      ? summarizeExpertise(preselected.expertise) + " expert"
      : "Feedback Intelligence expert";
    const typeSpeed = 60;
    const expertiseTypeSpeed = 30;
    const pauseBetween = 400;
    const initialDelay = 500;
    const timeouts: NodeJS.Timeout[] = [];

    // Phase 0: show name border, then immediately start typing
    const showBorderT = setTimeout(() => {
      setShowNameBorder(true);
    }, initialDelay);
    timeouts.push(showBorderT);

    const typeStartDelay = initialDelay;

    // Phase 1: type the name
    for (let i = 0; i <= targetName.length; i++) {
      const t = setTimeout(() => {
        setAgentName(targetName.slice(0, i));
      }, typeStartDelay + i * typeSpeed);
      timeouts.push(t);
    }

    const nameEndTime = typeStartDelay + targetName.length * typeSpeed;

    // Pause, then switch to expertise phase — show expertise border and start typing
    const showExBorderT = setTimeout(() => {
      setTypewriterPhase("expertise");
      setShowExpertiseBorder(true);
    }, nameEndTime + pauseBetween);
    timeouts.push(showExBorderT);

    const expertiseTypeStart = nameEndTime + pauseBetween;

    // Phase 2: type the expertise
    for (let i = 0; i <= targetExpertise.length; i++) {
      const t = setTimeout(() => {
        setExpertise(targetExpertise.slice(0, i));
      }, expertiseTypeStart + i * expertiseTypeSpeed);
      timeouts.push(t);
    }

    const expertiseEndTime = expertiseTypeStart + targetExpertise.length * expertiseTypeSpeed;

    // Finish: set header and mark done
    const finishT = setTimeout(() => {
      setTypewriterPhase("done");
      setConfirmedExpertise(targetExpertise);
      currentSubtitleRef.current = targetExpertise;
      const fullHeader = `${targetName}, ${targetExpertise}`;
      // Animate the header typing instead of setting it instantly
      setShowTitleCursor(true);
      const headerWriteSpeed = 25;
      for (let i = 0; i <= fullHeader.length; i++) {
        const ht = setTimeout(() => {
          setDisplayedHeader(fullHeader.slice(0, i));
          if (i === fullHeader.length) {
            currentHeaderRef.current = fullHeader;
            setTimeout(() => setShowTitleCursor(false), 500);
          }
        }, i * headerWriteSpeed);
        timeouts.push(ht);
      }
    }, expertiseEndTime + 300);
    timeouts.push(finishT);

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-50">
      <div
        className="absolute inset-0 flex flex-col items-start w-full h-full overflow-clip p-[32px] pb-0"
        style={{
          background: "linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), rgba(249,249,249,0.5)",
        }}
      >
        <div className="bg-[#f3f4f8] h-full relative shrink-0 w-full rounded-t-[16px] shadow-[0px_4px_8px_rgba(0,0,0,0.2)]">
          <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-end pt-[16px] px-[16px] relative size-full">
              {/* Header */}
              <div className="relative shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center justify-between pl-[8px] relative w-full">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                      <button
                        onClick={() => navigate("/")}
                        className="shrink-0 size-[32px] flex items-center justify-center rounded-[6px] hover:bg-black/5 transition-colors cursor-pointer"
                        title="Back to dashboard"
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M12.5 15L7.5 10L12.5 5" stroke="#323338" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <div className="bg-white relative rounded-[6px] shrink-0 size-[32px] overflow-hidden transition-colors duration-500"
                        style={{ backgroundColor: colorSchemes[selectedColor].color }}
                      >
                        <div className="overflow-clip relative rounded-[inherit] size-full">
                          <img
                            alt=""
                            className="absolute left-1/2 w-[185%] max-w-none"
                            style={{ bottom: "0", transform: "translateX(-50%)" }}
                            src={avatars[selectedAvatar].centerImg}
                          />
                        </div>
                        <div aria-hidden="true" className="absolute border border-[#d0d4e4] border-solid inset-0 pointer-events-none rounded-[6px]" />
                      </div>
                      <p className="font-['Poppins'] text-[#323338] text-[18px] leading-[24px] whitespace-nowrap">
                        {displayedHeader}
                        {showTitleCursor && (
                          <span
                            className="inline-block w-[2px] h-[18px] bg-[#323338] ml-[1px] align-middle"
                            style={{ animation: "cursor-blink 1s step-end infinite" }}
                          />
                        )}
                      </p>
                    </div>
                    <button onClick={() => navigate("/")} className="content-stretch cursor-pointer flex gap-[8px] items-center justify-center relative rounded-[4px] shrink-0 size-[32px] hover:bg-black/5 transition-colors">
                      <div className="overflow-clip relative shrink-0 size-[20px]">
                        <div className="absolute inset-[20%]">
                          <svg
                            className="absolute block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 12.0008 12"
                          >
                            <path
                              d={svgPaths.p3bd83000}
                              fill="var(--fill-0, #323338)"
                            />
                          </svg>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div
                ref={contentRef}
                className="backdrop-blur-[12px] bg-white flex-1 min-h-0 min-w-px relative rounded-tl-[16px] rounded-tr-[16px] w-full"
              >
                {/* Colored background container (visual only, no children) */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out pointer-events-none"
                  style={{
                    backgroundColor: colorSchemes[selectedColor].color === "#ffffff" ? "transparent" : colorSchemes[selectedColor].color,
                    borderRadius: colorSchemes[selectedColor].color === "#ffffff" ? "16px 16px 0 0" : "40px",
                    width: colorSchemes[selectedColor].color === "#ffffff" ? "100%" : "min(414px, 36vw)",
                    top: colorSchemes[selectedColor].color === "#ffffff" ? "0" : "166px",
                    height: colorSchemes[selectedColor].color === "#ffffff" ? "100%" : "calc(100% - 166px - 50px)",
                  }}
                />

                {/* Avatar images - direct children of content area, clipped via clip-path */}
                {/* Previous avatar (fading out) */}
                {prevAvatar !== null && (
                  <div
                    className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
                    style={{
                      opacity: transitioning ? 1 : 0,
                      transition: "opacity 500ms ease-in-out, clip-path 500ms ease-in-out",
                      clipPath: colorSchemes[selectedColor].color === "#ffffff"
                        ? "inset(0 round 16px 16px 0 0)"
                        : "inset(166px calc((100% - min(414px, 36vw)) / 2) 50px calc((100% - min(414px, 36vw)) / 2) round 40px)",
                    }}
                  >
                    <img
                      alt=""
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-auto max-w-none"
                      style={{
                        transition: "transform 500ms ease-in-out",
                        transform: colorSchemes[selectedColor].color === "#ffffff" ? "scale(1)" : "scale(0.9)",
                        transformOrigin: "bottom center",
                      }}
                      src={avatars[prevAvatar].centerImg}
                    />
                  </div>
                )}
                {/* Current avatar (fading in) */}
                <div
                  className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
                  style={{
                    opacity: transitioning ? 0 : 1,
                    transition: "opacity 500ms ease-in-out, clip-path 500ms ease-in-out",
                    clipPath: colorSchemes[selectedColor].color === "#ffffff"
                      ? "inset(0 round 16px 16px 0 0)"
                      : "inset(166px calc((100% - min(414px, 36vw)) / 2) 50px calc((100% - min(414px, 36vw)) / 2) round 40px)",
                  }}
                >
                  <img
                    alt=""
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-auto max-w-none"
                    style={{
                      transition: "transform 500ms ease-in-out",
                      transform: colorSchemes[selectedColor].color === "#ffffff" ? "scale(1)" : "scale(0.9)",
                      transformOrigin: "bottom center",
                    }}
                    key={avatars[selectedAvatar].id}
                    src={avatars[selectedAvatar].centerImg}
                  />
                </div>

                {/* Agent Name + Subtitle */}
                <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[4px] items-center left-[calc(50%+5px)] top-[36px] w-auto max-w-[90%]">
                  {/* Name Input */}
                  <div className="content-stretch flex items-center py-[4px] relative rounded-[8px] shrink-0"
                    style={{ opacity: showNameBorder || typewriterPhase === "done" ? 1 : 0, transition: "opacity 200ms ease-out" }}
                  >
                    <div aria-hidden="true" className="absolute border border-[#eceff8] border-solid inset-0 pointer-events-none rounded-[8px]"
                      style={{ opacity: showNameBorder || typewriterPhase === "done" ? 1 : 0, transition: "opacity 200ms ease-out" }}
                    />
                    <div className="relative z-[1] flex items-center justify-center">
                      <input
                        type="text"
                        value={agentName}
                        onChange={(e) => { if (typewriterPhase === "done") setAgentName(e.target.value); }}
                        onFocus={(e) => { if (typewriterPhase === "done") e.currentTarget.select(); }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.currentTarget.blur();
                          }
                        }}
                        onBlur={confirmName}
                        readOnly={typewriterPhase !== "done"}
                        className="bg-transparent font-['Poppins'] font-medium text-[#323338] text-[48px] text-center tracking-[-1.4753px] leading-none outline-none px-[12px]"
                        style={{ width: `${nameWidth + 24}px`, transition: "width 80ms ease-out", caretColor: typewriterPhase !== "done" ? "transparent" : undefined }}
                      />
                      {/* Hidden span for measuring name text width */}
                      <span
                        ref={nameSpanRef}
                        className="absolute invisible whitespace-pre font-['Poppins'] font-medium text-[48px] tracking-[-1.4753px] leading-none"
                        aria-hidden="true"
                      >{agentName || "\u200b"}</span>
                    </div>
                  </div>
                  {/* Expertise Subtitle */}
                  <div className="relative rounded-[8px] shrink-0"
                    style={{ opacity: showExpertiseBorder || typewriterPhase === "done" ? 1 : 0, transition: "opacity 200ms ease-out" }}
                  >
                    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip py-[4px] relative rounded-[inherit]">
                      <div className="relative flex items-center justify-center">
                        <input
                          type="text"
                          value={expertise}
                          onChange={(e) => { if (typewriterPhase === "done") setExpertise(e.target.value); }}
                          onFocus={(e) => { if (typewriterPhase === "done") e.currentTarget.select(); }}
                          onBlur={confirmExpertise}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.currentTarget.blur();
                            }
                          }}
                          readOnly={typewriterPhase !== "done"}
                          className="font-['Figtree'] leading-[1.43] text-[#676879] text-[16px] tracking-[0.16px] whitespace-nowrap bg-transparent outline-none text-center px-[12px]"
                          style={{ width: `${expertiseWidth + 24}px`, transition: "width 80ms ease-out", caretColor: typewriterPhase !== "done" ? "transparent" : undefined }}
                        />
                        {/* Hidden span for measuring expertise text width */}
                        <span
                          ref={expertiseSpanRef}
                          className="absolute invisible whitespace-pre font-['Figtree'] leading-[1.43] text-[16px] tracking-[0.16px]"
                          aria-hidden="true"
                        >{expertise || "\u200b"}</span>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#eceff8] border-solid inset-0 pointer-events-none rounded-[8px]"
                      style={{ opacity: showExpertiseBorder || typewriterPhase === "done" ? 1 : 0, transition: "opacity 200ms ease-out" }}
                    />
                  </div>
                </div>

                {/* Left Side - Avatar Selection */}
                <div className="absolute content-stretch flex flex-col items-start left-[24px] lg:left-[48px] top-[127px] w-[280px]">
                  <div className="content-stretch flex flex-col gap-[16px] h-[439px] items-start relative shrink-0 w-full">
                    {/* Title with mask */}
                    <div
                      className="relative shrink-0 w-full"
                      style={{
                        maskImage: `url('${imgFrame2147239680}')`,
                        WebkitMaskImage: `url('${imgFrame2147239680}')`,
                        maskSize: "310px 439px",
                        WebkitMaskSize: "310px 439px",
                        maskPosition: "-16px 0px",
                        WebkitMaskPosition: "-16px 0px",
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                      }}
                    >
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="content-stretch flex items-center justify-center px-[4px] relative w-full">
                          <p className="flex-[1_0_0] font-['Figtree'] leading-[1.43] relative text-[16px] text-[rgba(50,51,56,0.38)] tracking-[0.16px]">
                            Choose your hero
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Avatar Grid */}
                    <div
                      className="relative w-full flex-1 min-h-0 p-[6px] -m-[6px] overflow-hidden"
                      style={{
                        maskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
                      }}
                    >
                      <div
                        className="content-start flex flex-wrap gap-[8px] items-start w-full"
                      >
                        {avatars.map((avatar, idx) => {
                          const isSelected = selectedAvatar === idx;
                          return (
                            <div
                              key={avatar.id}
                              className={`flex-[1_0_0] h-[104px] min-w-[66px] relative ${isSelected ? "z-10" : ""}`}
                            >
                              {isSelected ? (
                                /* Selected wrapper with border */
                                <div className="absolute content-stretch flex inset-[-3.5px_-2.75px_-2.5px_-3.25px] items-center p-[3px] rounded-[14px]">
                                  <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-[-1.5px] pointer-events-none rounded-[15.5px]" />
                                  <button
                                    onClick={() => handleAvatarSelect(idx)}
                                    className="bg-[#f6f7fb] flex-[1_0_0] h-[104px] overflow-clip relative rounded-[12px] cursor-pointer"
                                  >
                                    {renderAvatarContent(avatar)}
                                  </button>
                                </div>
                              ) : (
                                <button
                                  onClick={() => handleAvatarSelect(idx)}
                                  className="bg-[#f6f7fb] absolute inset-0 overflow-clip rounded-[12px] cursor-pointer transition-transform hover:scale-105 hover:z-10"
                                >
                                  {renderAvatarContent(avatar)}
                                </button>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Color Selection */}
                <div className="absolute content-stretch flex flex-col gap-[16px] items-start right-[24px] lg:right-[48px] top-[127px] w-[248px]">
                  <div className="relative shrink-0 w-full">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center px-[4px] relative w-full">
                        <p className="flex-[1_0_0] font-['Figtree'] leading-[1.43] relative text-[16px] text-[rgba(50,51,56,0.38)] tracking-[0.16px]">
                          Background color
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Color Tiles Grid */}
                  <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
                    {colorSchemes.map((color) => {
                      const isSelected = selectedColor === color.id;
                      if (isSelected) {
                        return (
                          <div
                            key={color.id}
                            className="h-[104px] min-w-[50px] relative rounded-[60px] shrink-0 w-[56px]"
                          >
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 p-[3px] rounded-[14px] top-1/2">
                              <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-[-1.5px] pointer-events-none rounded-[15.5px]" />
                              <div
                                className="w-[56px] h-[104px] rounded-[12px] relative"
                                style={{ backgroundColor: color.color }}
                              >
                                {color.border && (
                                  <div aria-hidden="true" className="absolute border border-[#d0d4e4] border-solid inset-0 pointer-events-none rounded-[12px]" />
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      }
                      return (
                        <button
                          key={color.id}
                          onClick={() => setSelectedColor(color.id)}
                          className="flex-[1_0_0] h-[104px] min-w-[50px] rounded-[12px] cursor-pointer transition-transform hover:scale-105 relative"
                          style={{ backgroundColor: color.color }}
                        >
                          {color.border && (
                            <div aria-hidden="true" className="absolute border border-[#d0d4e4] border-solid inset-0 pointer-events-none rounded-[12px]" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Onboard Button */}
                <div className="absolute h-[40px] right-[48px] lg:right-[72px] bottom-[50px] lg:bottom-[70px]">
                  <button
                    onClick={handleOnboard}
                    className="bg-[#333] hover:bg-[#222] active:bg-[#111] content-stretch flex h-[40px] items-center justify-center max-h-[40px] min-h-[40px] px-[16px] rounded-[8px] transition-colors overflow-hidden"
                  >
                    <span className="font-['Figtree'] font-light leading-[22px] text-[16px] text-white whitespace-nowrap inline-flex">
                      Onboard{" "}
                      <span
                        className="inline-block ml-[4px] transition-all duration-400 ease-out"
                        style={{
                          opacity: buttonAnimating ? 0 : 1,
                          transform: buttonAnimating ? "translateY(8px)" : "translateY(0)",
                          filter: buttonAnimating ? "blur(4px)" : "blur(0px)",
                        }}
                      >
                        {confirmedName}
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function renderAvatarContent(avatar: AvatarItem) {
  if (avatar.renderType === "flipped" && avatar.flipSize) {
    return (
      <div className={avatar.wrapperClass}>
        <div className="-scale-y-100 flex-none rotate-180">
          <div
            className="relative overflow-hidden pointer-events-none"
            style={{ height: avatar.flipSize.h, width: avatar.flipSize.w }}
          >
            <img
              alt={avatar.name}
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={avatar.img}
            />
          </div>
        </div>
      </div>
    );
  }

  if (avatar.renderType === "cover") {
    return (
      <div className={avatar.wrapperClass}>
        <img
          alt={avatar.name}
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={avatar.img}
        />
      </div>
    );
  }

  // nested
  return (
    <div className={avatar.wrapperClass}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          alt={avatar.name}
          className="absolute max-w-none pointer-events-none"
          style={avatar.imgStyle}
          src={avatar.img}
        />
      </div>
    </div>
  );
}