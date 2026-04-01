import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router";
import svgPaths from "../../imports/svg-5v47xpc9uc";
import { getPendingAgent } from "./agentStore";

import imgCard0 from "../../assets/center-images/card-01.png";
import imgCard1 from "../../assets/center-images/card-02.png";
import imgCard2 from "../../assets/center-images/card-03.png";
import imgCard3 from "../../assets/center-images/card-04.png";
import imgCard4 from "../../assets/center-images/card-05.png";
import imgCard5 from "../../assets/center-images/card-06.png";
import imgCard6 from "../../assets/center-images/card-07.png";
import imgCard7 from "../../assets/center-images/card-08.png";
import imgCard8 from "../../assets/center-images/card-09.png";
import imgCard9 from "../../assets/center-images/card-10.png";
import imgCard10 from "../../assets/center-images/card-11.png";
import imgCard11 from "../../assets/center-images/card-12.png";

import imgShare0 from "../../assets/sharing-images/Sharing image=01.png";
import imgShare1 from "../../assets/sharing-images/Sharing image=02.png";
import imgShare2 from "../../assets/sharing-images/Sharing image=03.png";
import imgShare3 from "../../assets/sharing-images/Sharing image=04.png";
import imgShare4 from "../../assets/sharing-images/Sharing image=05.png";
import imgShare5 from "../../assets/sharing-images/Sharing image=06.png";
import imgShare6 from "../../assets/sharing-images/Sharing image=07.png";
import imgShare7 from "../../assets/sharing-images/Sharing image=08.png";
import imgShare8 from "../../assets/sharing-images/Sharing image=09.png";
import imgShare9 from "../../assets/sharing-images/Sharing image=10.png";
import imgShare10 from "../../assets/sharing-images/Sharing image=11.png";
import imgShare11 from "../../assets/sharing-images/Sharing image=12.png";

const CARD_AVATAR_DATA: {
  src: string;
}[] = [
  { src: imgCard0 },
  { src: imgCard1 },
  { src: imgCard2 },
  { src: imgCard3 },
  { src: imgCard4 },
  { src: imgCard5 },
  { src: imgCard6 },
  { src: imgCard7 },
  { src: imgCard8 },
  { src: imgCard9 },
  { src: imgCard10 },
  { src: imgCard11 },
];

const SHARE_AVATAR_DATA: string[] = [
  imgShare0, imgShare1, imgShare2, imgShare3,
  imgShare4, imgShare5, imgShare6, imgShare7,
  imgShare8, imgShare9, imgShare10, imgShare11,
];

// ─── Header ──────────────────────────────────────────────────────────────────

function AgentIcon({ avatarImg, avatarBg, avatarIndex }: { avatarImg?: string; avatarBg?: string; avatarIndex?: number }) {
  const bg = avatarBg && avatarBg !== "#ffffff" ? avatarBg : "#edf1fc";
  const src = CARD_AVATAR_DATA[avatarIndex ?? 0]?.src ?? avatarImg ?? imgCard0;
  return (
    <div className="relative rounded-[6px] shrink-0 size-[32px] overflow-hidden" style={{ backgroundColor: bg }}>
      <img
        alt=""
        className="absolute bottom-0 left-1/2 pointer-events-none"
        style={{ transform: "translateX(-50%)", width: "80%", height: "auto" }}
        src={src}
      />
      <div aria-hidden="true" className="absolute border border-[#d0d4e4] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

// ─── Toggle Component ────────────────────────────────────────────────────────

function Toggle({ enabled, onToggle }: { enabled: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="cursor-pointer flex items-center justify-center h-[24px] rounded-[6px] shrink-0"
    >
      <div className="h-[16px] relative shrink-0 w-[28px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 16">
          <rect fill={enabled ? "#0073EA" : "#C3C6D4"} height="16" rx="8" width="28" />
          <path
            clipRule="evenodd"
            d={enabled ? svgPaths.p28df1d00 : svgPaths.p39933f40}
            fill="white"
            fillRule="evenodd"
          />
        </svg>
      </div>
    </button>
  );
}

// ─── Bullet (Active Status) ─────────────────────────────────────────────────

function ActiveBullet() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={svgPaths.p30a9e100} fill="#00C875" opacity="0.2" />
        <path d={svgPaths.p7fcde80} fill="#00C875" />
      </svg>
    </div>
  );
}

// ─── Info Icon ──────────────────────────────────────────────────────────────

function InfoIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]">
      <div className="absolute inset-[10.15%_10.14%_10.15%_10.16%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7531 12.7531">
          <path d={svgPaths.p3b347b40} fill="#676879" />
          <path d={svgPaths.p15f10700} fill="#676879" />
          <path clipRule="evenodd" d={svgPaths.p2544a780} fill="#676879" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

// ─── Chevron Icon ───────────────────────────────────────────────────────────

function ChevronDown() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]">
      <div className="absolute bottom-[35%] left-1/4 right-1/4 top-[35%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 4.2">
          <path d={svgPaths.p1b71e300} fill="#676879" />
        </svg>
      </div>
    </div>
  );
}

// ─── Enter Arrow Icon ───────────────────────────────────────────────────────

function EnterArrowIcon() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="overflow-clip relative size-[20px]">
          <div className="absolute inset-[13.01%_13.65%_13.02%_9.68%]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.334 14.7939">
              <path d={svgPaths.p3c54bc80} fill="#676879" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Play Icon ───────────────────────────────────────────────────────────────

function PlayIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="absolute inset-[10%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d="M13.16 7.184L5.46 2.26C4.78 1.835 3.9 2.32 3.9 3.12v9.76c0 .8.88 1.285 1.56.86l7.7-4.924a1.02 1.02 0 000-1.732z" fill="#323338" />
        </svg>
      </div>
    </div>
  );
}

// ─── Board Icon ──────────────────────────────────────────────────────────────

function BoardIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 16 16">
        <path fillRule="evenodd" clipRule="evenodd" d="M1.6 2.4A.8.8 0 012.4 1.6h11.2a.8.8 0 01.8.8v11.2a.8.8 0 01-.8.8H2.4a.8.8 0 01-.8-.8V2.4zm1.6.8v3.2h3.2V3.2H3.2zm4.8 0v1.6h4.8V3.2H8zm4.8 3.2H8v1.6h4.8V6.4zM3.2 8.8v4h3.2v-4H3.2zm4.8 0v1.6h4.8V8.8H8zm4.8 2.4H8v1.6h4.8v-1.6z" fill="#323338" />
      </svg>
    </div>
  );
}

// ─── Doc Icon ────────────────────────────────────────────────────────────────

function DocIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 16 16">
        <path fillRule="evenodd" clipRule="evenodd" d="M3.2 1.6A.8.8 0 002.4 2.4v11.2a.8.8 0 00.8.8h9.6a.8.8 0 00.8-.8V5.6L9.6 1.6H3.2zm6 1.2v2.8h2.8L9.2 2.8zM4.4 7.2h7.2v1.2H4.4V7.2zm0 2.4h7.2v1.2H4.4V9.6zm0 2.4h4.8v1.2H4.4V12z" fill="#323338" />
      </svg>
    </div>
  );
}

// ─── Attach Icon ─────────────────────────────────────────────────────────────

function AttachIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]">
      <div className="absolute inset-[26.25%_26.25%_11.25%_11.25%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12.4">
          <path fillRule="evenodd" clipRule="evenodd" d="M5 0a3.5 3.5 0 013.5 3.5v5.5a2.5 2.5 0 01-5 0V4a1.5 1.5 0 013 0v4.5a.5.5 0 01-1 0V4a.5.5 0 00-1 0v5a1.5 1.5 0 003 0V3.5a2.5 2.5 0 00-5 0v6a3.5 3.5 0 007 0V4h1v5.5a4.5 4.5 0 01-9 0v-6A3.5 3.5 0 015 0z" fill="#323338" />
        </svg>
      </div>
    </div>
  );
}

// ─── Globe Icon ──────────────────────────────────────────────────────────────

function GlobeIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="5.5" stroke="#323338" strokeWidth="1.2" />
        <path d="M8 2.5c-1.5 1.5-2 3.5-2 5.5s.5 4 2 5.5M8 2.5c1.5 1.5 2 3.5 2 5.5s-.5 4-2 5.5" stroke="#323338" strokeWidth="1.2" />
        <line x1="2.5" y1="8" x2="13.5" y2="8" stroke="#323338" strokeWidth="1.2" />
      </svg>
    </div>
  );
}

// ─── Image Gen Icon ──────────────────────────────────────────────────────────

function ImageGenIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 16 16">
        <path fillRule="evenodd" clipRule="evenodd" d="M2.4 2.4A.8.8 0 013.2 1.6h9.6a.8.8 0 01.8.8v9.6a.8.8 0 01-.8.8h-1.6l-1.6-2.4-2.4 3.2-2-2.4L3.2 13.6a.8.8 0 01-.8-.8V2.4zm8.4 3.2a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" fill="#323338" />
      </svg>
    </div>
  );
}

// ─── Monday Logo (small) ────────────────────────────────────────────────────

function MondayLogo() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" viewBox="0 0 20 20" fill="none">
        <path d="M3.6 14.5c-.58 0-1.06-.49-.91-1.05L5.2 5.62c.11-.42.49-.76.95-.76.58 0 1.06.49.91 1.05l-2.5 7.83c-.11.42-.49.76-.95.76z" fill="#FB275D" />
        <path d="M8.75 14.5c-.58 0-1.06-.49-.91-1.05l2.5-7.83c.11-.42.49-.76.95-.76.58 0 1.06.49.91 1.05l-2.5 7.83c-.11.42-.49.76-.95.76z" fill="#FFCC00" />
        <circle cx="15.2" cy="13.5" r="1.15" fill="#00CA72" />
      </svg>
    </div>
  );
}

// ─── Chevron Right Icon ──────────────────────────────────────────────────────

function ChevronRight() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]">
      <div className="absolute left-[35%] right-[35%] top-[25%] bottom-[25%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.2 7">
          <path d="M0 6.3L2.8 3.5 0 .7.7 0l3.5 3.5L.7 7 0 6.3z" fill="#676879" />
        </svg>
      </div>
    </div>
  );
}

// ─── Section Header ─────────────────────────────────────────────────────────

function SectionHeader({
  title,
  expanded,
  onToggle,
  rightContent,
}: {
  title: string;
  expanded: boolean;
  onToggle: () => void;
  rightContent?: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-[8px] w-full h-[24px]">
      <button
        className="cursor-pointer flex items-center justify-center rounded-[4px] size-[16px]"
        onClick={onToggle}
      >
        {expanded ? <ChevronDown /> : <ChevronRight />}
      </button>
      <div className="flex gap-[4px] items-center flex-1">
        <span className="font-['Figtree'] font-[600] text-[#323338] text-[14px] leading-[20px] whitespace-nowrap">
          {title}
        </span>
        <InfoIcon />
      </div>
      {rightContent}
    </div>
  );
}

// ─── Trigger Icon Badges ────────────────────────────────────────────────────

function TriggerBadges() {
  return (
    <div className="flex items-center gap-[4px]">
      <div className="relative w-[42px] h-[24px]">
        {/* Mention badge */}
        <div className="absolute left-0 top-0 box-border size-[24px] bg-white border-[0.96px] border-[#e7e9ef] rounded-[20px] flex items-center justify-center">
          <div className="overflow-clip relative shrink-0 size-[18px]">
            <div className="absolute inset-[11.25%_11.25%_11.06%_11.25%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4998 15.5383">
                <path clipRule="evenodd" d={svgPaths.p1c4cc900} fill="#323338" fillRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        {/* Person badge */}
        <div className="absolute left-[18px] top-0 box-border size-[24px] bg-white border-[0.96px] border-[#e7e9ef] rounded-[20px] flex items-center justify-center">
          <div className="overflow-clip relative shrink-0 size-[20px]">
            <div className="absolute inset-[10.25%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9 15.9">
                <path clipRule="evenodd" d={svgPaths.p1a7d0570} fill="#323338" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p2d4adc00} fill="#323338" fillRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* Play button */}
      <button className="cursor-pointer flex items-center justify-center rounded-[4px] size-[24px] hover:bg-black/5 transition-colors">
        <div className="overflow-clip relative shrink-0 size-[16px]">
          <div className="absolute inset-[10%]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d="M13.16 7.184L5.46 2.26C4.78 1.835 3.9 2.32 3.9 3.12v9.76c0 .8.88 1.285 1.56.86l7.7-4.924a1.02 1.02 0 000-1.732z" fill="#323338" />
            </svg>
          </div>
        </div>
      </button>
    </div>
  );
}

// ─── Monday Logo Badge ──────────────────────────────────────────────────────

function MondayLogoBadge() {
  return (
    <div className="flex items-center">
      <div className="box-border size-[24px] bg-white border-[0.96px] border-[#e7e9ef] rounded-[20px] flex items-center justify-center">
        <div className="relative shrink-0 size-[18px] rounded-[11.25px] overflow-hidden">
          <svg className="absolute block size-full" viewBox="0 0 18 18" fill="none">
            <path d="M2.7 13.5c-.53 0-.96-.44-.82-.96L4.2 5.1c.1-.38.45-.68.86-.68.53 0 .96.44.82.96l-2.32 7.44c-.1.38-.45.68-.86.68z" fill="#FB275D" />
            <path d="M7.5 13.5c-.53 0-.96-.44-.82-.96L9 5.1c.1-.38.45-.68.86-.68.53 0 .96.44.82.96l-2.32 7.44c-.1.38-.45.68-.86.68z" fill="#FFCB00" />
            <circle cx="13.5" cy="12.5" r="1.05" fill="#00C875" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────

interface AgentData {
  name: string;
  expertise: string;
  avatarBg: string;
  avatarImg: string;
  avatarIndex?: number;
}

export function AgentOnboarding() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") navigate("/");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);
  
  const [searchParams] = useSearchParams();

  // Try router state first, then in-memory store, then URL params (shared link), then defaults
  const storeData = getPendingAgent();
  const routerState = location.state as AgentData | null;
  const sharedAgent: AgentData | null = searchParams.get("name")
    ? {
        name: searchParams.get("name")!,
        expertise: searchParams.get("desc") || "An AI-powered agent",
        avatarBg: searchParams.get("color") || "#F689CD",
        avatarImg: "",
        avatarIndex: parseInt(searchParams.get("avatar") || "0", 10),
      }
    : null;
  const agentData: AgentData = routerState || storeData || sharedAgent || {
    name: "Elena",
    expertise: "Feedback Intelligence Agent",
    avatarBg: "#F689CD",
    avatarImg: imgCard0,
    avatarIndex: 0,
  };

  const [promptValue, setPromptValue] = useState("");
  const [activeTab, setActiveTab] = useState<"brain" | "activity">("brain");
  const [triggers, setTriggers] = useState({ mention: true, assign: true });
  const [typedText, setTypedText] = useState("");
  const [showContent, setShowContent] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const latestUserMsgRef = useRef<HTMLDivElement>(null);
  const [chatMessages, setChatMessages] = useState<{ role: "user" | "agent"; text: string }[]>([]);
  const [isThinking, setIsThinking] = useState(false);
  const [showThinking, setShowThinking] = useState(false);
  const [followUpsDismissed, setFollowUpsDismissed] = useState(false);
  const [scrambledText, setScrambledText] = useState("········");
  const [visibleRange, setVisibleRange] = useState<[number, number]>([0, 0]);
  const stoppingRef = useRef(false);
  const pendingMessageRef = useRef<string | null>(null);

  useEffect(() => {
    if (isThinking) {
      setShowThinking(true);
      stoppingRef.current = false;
    } else {
      stoppingRef.current = true;
    }
  }, [isThinking]);

  useEffect(() => {
    if (!showThinking && pendingMessageRef.current) {
      const msg = pendingMessageRef.current;
      pendingMessageRef.current = null;
      setChatMessages((prev) => [...prev, { role: "agent", text: msg }]);
    }
  }, [showThinking]);

  useEffect(() => {
    if (!showThinking) return;
    const target = "Thinking";
    const glyphs = "·.:·";
    const len = target.length;
    let visible = 0;
    let head = 0;
    let tail = 0;
    let phase: "dots-in" | "wave" | "pause" | "dots-out" | "done" = "dots-in";
    let loops = 0;
    let pauseTicks = 0;
    const maxLoops = 2;

    setScrambledText("········");
    setVisibleRange([0, 0]);

    const interval = setInterval(() => {
      if (phase === "dots-in") {
        visible++;
        setVisibleRange([0, visible]);
        if (visible >= len) {
          phase = "wave";
        }
      } else if (phase === "wave") {
        if (head < len) {
          head++;
        } else {
          tail++;
        }

        if (tail >= len) {
          loops++;
          if (loops >= maxLoops) {
            phase = "dots-out";
            visible = len;
          } else {
            phase = "pause";
            pauseTicks = 0;
          }
        }
      } else if (phase === "pause") {
        pauseTicks++;
        if (pauseTicks >= 6) {
          phase = "wave";
          head = 0;
          tail = 0;
        }
      } else if (phase === "dots-out") {
        tail++;
        setVisibleRange([tail, len]);
        if (tail >= len) {
          clearInterval(interval);
          setShowThinking(false);
          return;
        }
      } else {
        return;
      }

      let result = "";
      for (let i = 0; i < len; i++) {
        if (i < head && i >= tail) {
          result += target[i];
        } else {
          result += glyphs[Math.floor(Math.random() * glyphs.length)];
        }
      }
      setScrambledText(result);
    }, 67);

    return () => clearInterval(interval);
  }, [showThinking]);

  const sendMessage = useCallback((text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isThinking) return;
    setChatMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setPromptValue("");
    setFollowUpsDismissed(true);
    setIsThinking(true);
    setTimeout(() => latestUserMsgRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    setTimeout(() => {
      pendingMessageRef.current = "Got it! I'll update my configuration based on your feedback. Let me know if there's anything else you'd like to adjust.";
      setIsThinking(false);
    }, 2500);
  }, [isThinking]);
  const [rightPanelCollapsed, setRightPanelCollapsed] = useState(false);
  const [showFloatingCard, setShowFloatingCard] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [shareColor, setShareColor] = useState(agentData.avatarBg?.toUpperCase() || "#FFFFFF");
  const [copied, setCopied] = useState(false);
  const shareButtonRef = useRef<HTMLButtonElement>(null);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    triggers: true,
    instructions: true,
    tools: false,
    knowledge: false,
    skills: false,
    model: false,
  });

  const toggleSection = (key: string) =>
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }));

  // 3D tilt effect for card preview
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const tiltContainerRef = useRef<HTMLDivElement>(null);

  const handleTiltMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const container = tiltContainerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const maxAngle = 18;
    setTilt({
      rotateX: (0.5 - y) * maxAngle,
      rotateY: (x - 0.5) * maxAngle,
    });
  }, []);

  const handleTiltLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0 });
  }, []);

  // Delay floating card appearance after panel collapses
  useEffect(() => {
    if (rightPanelCollapsed) {
      const timer = setTimeout(() => setShowFloatingCard(true), 500);
      return () => clearTimeout(timer);
    } else {
      setShowFloatingCard(false);
    }
  }, [rightPanelCollapsed]);

  const fullGreeting = `Nice to meet you 👋`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTypedText(fullGreeting.slice(0, i));
      if (i >= fullGreeting.length) {
        clearInterval(interval);
        setTimeout(() => setShowContent(true), 200);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const bulletPoints = [
    "I'll collect customer feedback from a source you choose",
    "I'll analyze sentiment (positive / neutral / negative) and spot meaningful changes",
    "I'll group feedback into themes (bugs, feature requests, UX friction, pricing, performance, etc.)",
    "I'll extract actionable insights (what's happening + what to do next)",
    "I'll generate prioritized tasks with an urgency level so your team can respond strategically",
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col w-full h-full p-[32px] pb-0"
      style={{
        background: "linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), rgba(249,249,249,0.5)",
      }}
    >
      {/* Main modal container */}
      <div className="relative flex flex-col flex-1 min-h-0 w-full bg-[#F3F4F8] rounded-t-[16px] shadow-[0px_4px_8px_rgba(0,0,0,0.2)]">
        {/* Header */}
        <div className="flex items-center justify-between shrink-0 px-[24px] py-[16px]">
          <div className="flex items-center gap-[8px]">
            <AgentIcon avatarImg={agentData.avatarImg} avatarBg={agentData.avatarBg} avatarIndex={agentData.avatarIndex} />
            <p className="font-['Poppins'] text-[#323338] text-[18px] leading-[24px]">
              {agentData.name}, {agentData.expertise.replace(/\s*Agent$/i, "")} expert
            </p>
          </div>
          <button
            onClick={() => navigate("/")}
            className="cursor-pointer flex items-center justify-center rounded-[4px] size-[32px] hover:bg-black/5 transition-colors"
          >
            <div className="overflow-clip relative shrink-0 size-[20px]">
              <div className="absolute inset-[20%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0008 12">
                  <path d={svgPaths.p3bd83000} fill="#323338" />
                </svg>
              </div>
            </div>
          </button>
        </div>

        {/* Content area */}
        <div className="flex gap-[16px] flex-1 min-h-0 px-[16px]">
          {/* ─── Left: Chat Panel ─────────────────────────────────── */}
          <div className="flex-1 flex flex-col min-w-0 min-h-0">
            <div className="bg-white rounded-[16px] flex-1 min-h-0 flex flex-col justify-start items-center relative overflow-hidden">
              {/* Top gradient fade */}
              <div className="absolute top-[-1px] left-1/2 -translate-x-1/2 w-full h-[32px] bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />

              {/* Floating mini agent card (visible when right panel collapsed) */}
              {rightPanelCollapsed && showFloatingCard && (
                <div
                  className="absolute right-[12px] top-[12px] z-20 bg-[#fafafc] rounded-[24px] w-[286px]"
                  style={{ animation: "slideInFromRight 300ms ease-out" }}
                >
                  <div className="flex gap-[24px] items-start overflow-clip pl-[16px] pr-[24px] py-[16px] rounded-[inherit]">
                    {/* Mini Avatar */}
                    <div
                      className="h-[103px] overflow-clip relative rounded-[8px] shrink-0 w-[76.09px]"
                      style={{ backgroundColor: agentData.avatarBg === "#ffffff" ? "#f6f7fb" : agentData.avatarBg }}
                    >
                      {/* Render full-size avatar (129×174.622) scaled to 76.09×103 */}
                      <div
                        className="absolute top-0 left-0 origin-top-left"
                        style={{
                          width: 129,
                          height: 174.622,
                          transform: `scale(${76.09 / 129})`,
                        }}
                      >
                        <div className="relative w-full h-full overflow-hidden">
                          <img
                            alt=""
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-auto max-w-none pointer-events-none"
                            src={CARD_AVATAR_DATA[agentData.avatarIndex ?? 0]?.src ?? agentData.avatarImg}
                          />
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[#d0d4e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>
                    {/* Mini Info */}
                    <div className="flex-1 min-h-px min-w-px self-stretch">
                      <div className="flex flex-col items-start justify-between py-[8px] h-full">
                        <div className="flex flex-col gap-[8px] items-start w-full">
                          <p className="font-['Figtree'] font-[600] text-[#1c1c1c] text-[18px] leading-[1.55] truncate w-full">
                            {agentData.name}
                          </p>
                          <p className="font-['Figtree'] font-[500] text-[#676879] text-[16px] leading-[1.55] overflow-hidden text-ellipsis w-full" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                            {agentData.expertise}
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Expand button */}
                    <button
                      className="absolute right-[16px] top-[16px] flex items-center justify-center rounded-[4px] size-[32px] cursor-pointer hover:bg-[rgba(0,0,0,0.05)] transition-colors duration-200"
                      onClick={() => setRightPanelCollapsed(false)}
                      title="Expand panel"
                    >
                      <div className="overflow-clip relative shrink-0 size-[20px]">
                        <div className="absolute inset-[15%_10%]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
                            <path clipRule="evenodd" d="M0 2C0 0.89543 0.895431 0 2 0H14C15.1046 0 16 0.895431 16 2V12C16 13.1046 15.1046 14 14 14H2C0.895431 14 0 13.1046 0 12V2ZM5.5 1.5H14C14.2761 1.5 14.5 1.72386 14.5 2V12C14.5 12.2761 14.2761 12.5 14 12.5H5.5L5.5 1.5ZM4 1.5H2C1.72386 1.5 1.5 1.72386 1.5 2V12C1.5 12.2761 1.72386 12.5 2 12.5H4L4 1.5Z" fill="#323338" fillRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#d0d4e4] border-solid inset-0 pointer-events-none rounded-[24px]" />
                </div>
              )}

              {/* Chat content */}
              <div className="flex-1 min-h-0 overflow-y-auto px-[116px] pt-[80px] pb-[75vh]">
                <div className="flex flex-col gap-[16px] max-w-[669px]">
                  {/* Greeting */}
                  <h3 className="font-['Poppins'] text-[#323338] text-[18px] leading-[24px] tracking-[-0.005em]">
                    {typedText}
                  </h3>

                  {/* Message body */}
                  <div
                    className="font-['Figtree'] text-[#323338] text-[16px] leading-[22px] transition-all duration-500"
                    style={{
                      opacity: showContent ? 1 : 0,
                      transform: showContent ? "translateY(0)" : "translateY(8px)",
                    }}
                  >
                    <p className="mb-[12px]">
                      I've gone ahead and set up the basics based on what I understand you want me to do.
                    </p>
                    <p className="font-[600] mb-[12px]">
                      Here's how I'm going to work for you:
                    </p>
                    <ul className="list-disc pl-[24px] mb-[12px] space-y-[4px]">
                      {bulletPoints.map((point, i) => (
                        <li key={i}>
                          <span className="text-[16px] leading-[22px]">{point}</span>
                        </li>
                      ))}
                    </ul>
                    <p>
                      I'm almost ready — first, did I understand the job correctly?
                    </p>
                  </div>

                  {/* Follow-up buttons */}
                  {!followUpsDismissed && (
                    <div
                      className="flex gap-[12px] transition-all duration-500 delay-200"
                      style={{
                        opacity: showContent ? 1 : 0,
                        transform: showContent ? "translateY(0)" : "translateY(8px)",
                      }}
                    >
                      <button
                        className="bg-white h-[36px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#f5f6f8] transition-colors"
                        onClick={() => sendMessage("Yes, that's right")}
                      >
                        <div className="flex gap-[8px] h-full items-center overflow-clip px-[12px] rounded-[inherit]">
                          <EnterArrowIcon />
                          <span className="font-['Figtree'] text-[#323338] text-[16px] leading-[22px] whitespace-nowrap">
                            Yes, that's right
                          </span>
                        </div>
                        <div aria-hidden="true" className="absolute border-[#d0d4e4] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
                      </button>
                      <button
                        className="bg-white h-[36px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#f5f6f8] transition-colors"
                        onClick={() => sendMessage("Make changes")}
                      >
                        <div className="flex gap-[8px] h-full items-center overflow-clip px-[12px] rounded-[inherit]">
                          <EnterArrowIcon />
                          <span className="font-['Figtree'] text-[#323338] text-[16px] leading-[22px] whitespace-nowrap">
                            Make changes
                          </span>
                        </div>
                        <div aria-hidden="true" className="absolute border-[#d0d4e4] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
                      </button>
                    </div>
                  )}

                  {/* Chat messages */}
                  {chatMessages.map((msg, i) => {
                    const isLastUser = msg.role === "user" && !chatMessages.slice(i + 1).some((m) => m.role === "user");
                    return (
                      <div
                        key={i}
                        ref={isLastUser ? latestUserMsgRef : undefined}
                        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`font-['Figtree'] text-[16px] leading-[22px] max-w-[85%] ${
                            msg.role === "user"
                              ? "bg-[#ECEDF5] text-[#323338] rounded-[12px] px-[20px] py-[10px]"
                              : "text-[#323338]"
                          }`}
                        >
                          {msg.text}
                        </div>
                      </div>
                    );
                  })}

                  {/* Thinking indicator */}
                  {showThinking && (
                    <div className="flex justify-start">
                      <span className="font-['Figtree'] text-[16px] leading-[22px] text-[#676879]">
                        {"Thinking".split("").map((realCh, i) => {
                          const ch = scrambledText[i] ?? "·";
                          const isDot = ch !== realCh;
                          const active = i >= visibleRange[0] && i < visibleRange[1];
                          return (
                            <span key={i} className="relative inline-block">
                              <span className="transition-opacity duration-200" style={{ opacity: !isDot && active ? 1 : 0 }}>{realCh}</span>
                              <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-200" style={{ opacity: isDot && active ? 1 : 0 }}>{isDot ? ch : "·"}</span>
                            </span>
                          );
                        })}
                      </span>
                    </div>
                  )}

                  <div ref={chatEndRef} />
                </div>
              </div>

            </div>
          </div>

          {/* ─── Right: Canvas Panel ──────────────────────────────── */}
          <div
            className="shrink-0 flex flex-col pb-[16px] transition-all duration-300 ease-in-out overflow-hidden"
            style={{
              width: rightPanelCollapsed ? 0 : 437,
              opacity: rightPanelCollapsed ? 0 : 1,
              padding: rightPanelCollapsed ? 0 : undefined,
            }}
          >
            <div className="bg-white rounded-[16px] flex-1 flex flex-col p-[12px] pb-[20px] gap-[32px] overflow-y-auto min-w-[437px]">
              {/* Agent Card */}
              <div className="group bg-[#fafafc] relative rounded-[24px] shrink-0 w-full cursor-pointer">
                <div className="absolute inset-0 rounded-[24px] pointer-events-none z-10 transition-colors duration-150 group-hover:bg-[rgba(103,104,121,0.04)]">
                  <div aria-hidden="true" className="absolute border border-[#d0d4e4] border-solid inset-0 pointer-events-none rounded-[24px]" />
                  <div className="absolute right-[16px] top-[16px] flex items-center gap-[4px] pointer-events-auto">
                    {/* Share button */}
                    <div className="relative">
                      <button
                        ref={shareButtonRef}
                        className={`flex items-center justify-center rounded-[4px] size-[32px] cursor-pointer hover:bg-[rgba(0,0,0,0.05)] transition-colors duration-200 ${showShareMenu ? "bg-[rgba(0,0,0,0.07)]" : ""}`}
                        onClick={(e) => { e.stopPropagation(); setShowShareMenu(prev => !prev); }}
                        title="Share"
                      >
                        <svg width="20" height="20" viewBox="0 0 256 256" fill="none">
                          <path d="M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96H80a8,8,0,0,1,0,16H56v96H200V112H176a8,8,0,0,1,0-16h24A16,16,0,0,1,216,112ZM93.66,69.66,120,43.31V136a8,8,0,0,0,16,0V43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66Z" fill="#323338"/>
                        </svg>
                      </button>
                      {showShareMenu && (
                        <>
                          <div className="fixed inset-0 z-[9998]" onClick={() => setShowShareMenu(false)} />
                          <div
                            ref={tiltContainerRef}
                            onMouseMove={handleTiltMove}
                            onMouseLeave={handleTiltLeave}
                            className="fixed z-[9999] bg-white rounded-[16px] shadow-[0px_8px_24px_rgba(0,0,0,0.15)] w-[400px] p-[24px] flex flex-col gap-[16px]"
                            style={{
                              top: (shareButtonRef.current?.getBoundingClientRect().bottom ?? 0) + 4,
                              right: window.innerWidth - (shareButtonRef.current?.getBoundingClientRect().right ?? 0),
                            }}
                          >
                            {/* Header */}
                            <div className="flex items-center justify-between pl-[4px]">
                              <p className="font-['Poppins'] font-[500] text-[#323338] text-[18px] leading-[100%]">Share your agent</p>
                              <button
                                className="flex items-center justify-center rounded-[4px] size-[32px] cursor-pointer hover:bg-black/5 transition-colors"
                                onClick={() => setShowShareMenu(false)}
                              >
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                  <path d="M4 4L16 16M16 4L4 16" stroke="#323338" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                              </button>
                            </div>

                            {/* Card preview */}
                            <div
                              className="relative flex justify-center items-center p-[40px] bg-[#f6f7fb] border border-[rgba(18,18,18,0.12)] rounded-[16px] h-[280px] overflow-hidden"
                              style={{ perspective: "600px" }}
                            >
                              <div
                                aria-hidden="true"
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                  backgroundImage: "radial-gradient(circle, #D0D4E4 1px, transparent 1px)",
                                  backgroundSize: "25.5px 25.5px",
                                  backgroundPosition: "center center",
                                }}
                              />
                              <div
                                aria-hidden="true"
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                  background: "radial-gradient(70% 65% at 50% 50%, rgba(246,247,251,0) 60%, #f6f7fb 100%)",
                                }}
                              />
                              <div
                                className="relative z-10 bg-white border border-[rgba(18,18,18,0.12)] rounded-[20px] w-[212px] p-[12px] flex flex-col gap-[8px]"
                                style={{
                                  transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                                  transition: "transform 0.15s ease-out",
                                  transformStyle: "preserve-3d",
                                  willChange: "transform",
                                  boxShadow: `${-tilt.rotateY * 0.8}px ${tilt.rotateX * 0.8}px 20px rgba(0,0,0,0.12)`,
                                }}
                              >
                                <div className="relative w-full h-[129px] rounded-[12px] overflow-hidden" style={{ backgroundColor: shareColor === "#FFFFFF" ? "#f6f7fb" : shareColor }}>
                                  <img
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                                    src={SHARE_AVATAR_DATA[agentData.avatarIndex ?? 0]}
                                  />
                                  {shareColor === "#FFFFFF" && (
                                    <div aria-hidden="true" className="absolute border border-[#d0d4e4] border-solid inset-0 pointer-events-none rounded-[12px]" />
                                  )}
                                </div>
                                <div className="flex flex-col px-[4px]">
                                  <p className="font-['Figtree'] font-[500] text-[#1c1c1c] text-[18px] leading-[155%]">{agentData.name}</p>
                                  <p className="font-['Figtree'] font-[300] text-[#676879] text-[16px] leading-[155%] line-clamp-2">I specialize in analyzing customer feedback.</p>
                                </div>
                              </div>
                            </div>

                            {/* Color picker */}
                            <div className="flex items-start gap-[9px]">
                              {["#FFFFFF", "#313131", "#F960C6", "#F1C238", "#0291FB", "#00BA5F"].map((color) => (
                                <button
                                  key={color}
                                  className="relative size-[36px] rounded-[25.2px] cursor-pointer transition-transform hover:scale-105"
                                  style={{ backgroundColor: color, border: color === "#FFFFFF" ? "0.9px solid #D0D4E4" : "none" }}
                                  onClick={() => setShareColor(color)}
                                >
                                  {shareColor === color && (
                                    <div className="absolute inset-[-3px] rounded-[28.2px] border-[1.35px] border-black pointer-events-none" />
                                  )}
                                </button>
                              ))}
                            </div>

                            {/* Copy link row */}
                            <div className="flex items-center justify-between border border-[rgba(0,0,0,0.14)] rounded-[12px] pl-[16px] pr-[8px] h-[48px]">
                              <div className="flex items-center gap-[8px]">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                  <path d="M9.57794 2.33996C10.0578 2.233 10.5542 2.2216 11.0389 2.3048C11.5236 2.38804 11.9874 2.5645 12.4031 2.82531C12.8189 3.08616 13.1793 3.4256 13.4627 3.82433C13.7461 4.22307 13.9475 4.6736 14.0555 5.14953C14.1634 5.62548 14.1756 6.11805 14.0916 6.59874C14.0077 7.07937 13.8293 7.53908 13.5662 7.95128L11.4149 11.3194C12.1105 10.4302 13.2098 9.85558 14.4442 9.85558C16.5422 9.85576 18.2449 11.5155 18.2449 13.5607C18.2449 15.6058 16.5422 17.2656 14.4442 17.2657C12.3442 17.2657 10.6385 15.6059 10.6385 13.5607C10.6385 12.9693 10.7814 12.4102 11.035 11.9142L8.72345 15.5362C8.38551 16.0663 7.91815 16.5034 7.36407 16.8058C6.81009 17.108 6.18781 17.2662 5.55548 17.2657C4.88493 17.2651 4.22625 17.0859 3.64923 16.7472C3.07233 16.4085 2.5973 15.9224 2.27423 15.34C1.95118 14.7574 1.79173 14.0992 1.81232 13.4347C1.83296 12.7703 2.03291 12.1234 2.39142 11.5616L7.23321 3.97863C7.49631 3.56639 7.83885 3.20888 8.24103 2.92785C8.64322 2.64681 9.09789 2.447 9.57794 2.33996Z" fill="#1A1A1A"/>
                                </svg>
                                <span className="font-['Figtree'] text-[16px] text-[#676879] tracking-[0.16px]">agent.mndy/{agentData.name.toLowerCase()}</span>
                              </div>
                              <button
                                className={`flex items-center gap-[4px] font-['Figtree'] text-[14px] leading-[20px] px-[8px] h-[32px] rounded-[6px] cursor-pointer transition-all duration-200 ${
                                  copied
                                    ? "bg-[#00854d] text-white"
                                    : "bg-[#323338] text-white hover:bg-[#4a4b54]"
                                }`}
                                onClick={() => {
                                  const params = new URLSearchParams({
                                    color: shareColor,
                                    avatar: String(agentData.avatarIndex ?? 0),
                                    desc: agentData.expertise || "An AI-powered agent",
                                  });
                                  const baseUrl = import.meta.env.VITE_PUBLIC_URL || window.location.origin;
                                  const shareUrl = `${baseUrl}/share/${encodeURIComponent(agentData.name)}?${params}`;
                                  navigator.clipboard.writeText(shareUrl);
                                  setCopied(true);
                                  setTimeout(() => setCopied(false), 2000);
                                }}
                              >
                                {copied && (
                                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                )}
                                {copied ? "Copied" : "Copy"}
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    {/* Toggle panel button */}
                    <button
                      className="flex items-center justify-center rounded-[4px] size-[32px] cursor-pointer hover:bg-[rgba(0,0,0,0.05)] transition-colors duration-200"
                      onClick={() => setRightPanelCollapsed(prev => !prev)}
                      title="Toggle panel"
                    >
                      <div className="overflow-clip relative shrink-0 size-[20px]">
                        <div className="absolute inset-[15%_10%]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
                            <path clipRule="evenodd" d="M0 2C0 0.89543 0.895431 0 2 0H14C15.1046 0 16 0.895431 16 2V12C16 13.1046 15.1046 14 14 14H2C0.895431 14 0 13.1046 0 12V2ZM5.5 1.5H14C14.2761 1.5 14.5 1.72386 14.5 2V12C14.5 12.2761 14.2761 12.5 14 12.5H5.5L5.5 1.5ZM4 1.5H2C1.72386 1.5 1.5 1.72386 1.5 2V12C1.5 12.2761 1.72386 12.5 2 12.5H4L4 1.5Z" fill="#323338" fillRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="flex gap-[24px] items-start pl-[16px] pr-[24px] py-[16px]">
                  {/* Avatar */}
                  <div
                    className="h-[174.622px] overflow-clip relative rounded-[11.384px] shrink-0 w-[129px]"
                    style={{ backgroundColor: agentData.avatarBg === "#ffffff" ? "#f6f7fb" : agentData.avatarBg }}
                  >
                    <img
                      alt=""
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-auto max-w-none pointer-events-none"
                      src={CARD_AVATAR_DATA[agentData.avatarIndex ?? 0]?.src ?? agentData.avatarImg}
                    />
                    {agentData.avatarBg === "#ffffff" && (
                      <div aria-hidden="true" className="absolute border border-[#d0d4e4] border-solid inset-0 pointer-events-none rounded-[11.384px]" />
                    )}
                    {/* Hover: blur overlay + edit icon */}
                    <div className="absolute inset-0 rounded-[11.384px] backdrop-blur-[3px] bg-[rgba(255,255,255,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none">
                      <button
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center size-[32px] rounded-[4px] cursor-pointer pointer-events-auto"
                        onClick={() => navigate("/configure", { state: { avatarIndex: agentData.avatarIndex, name: agentData.name, expertise: agentData.expertise, avatarBg: agentData.avatarBg } })}
                      >
                        <div className="overflow-clip relative shrink-0 size-[20px]">
                          <div className="absolute inset-[10%]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                              <path clipRule="evenodd" d="M11.8542 1.59561V1.59561L2.80915 10.6503L1.81363 14.189L5.35682 13.1957L14.4018 4.14C14.4746 4.06722 14.5161 3.96795 14.5161 3.86503C14.5161 3.76221 14.4753 3.6636 14.4026 3.59083V3.59083L12.4038 1.59568C12.3309 1.52292 12.232 1.48197 12.1289 1.48197C12.026 1.48197 11.927 1.52297 11.8542 1.59561ZM10.8051 0.547542C11.1562 0.196951 11.6324 0 12.1289 0C12.6254 0 13.1016 0.196925 13.4527 0.547473V0.547473L15.4515 2.54263C15.8026 2.89333 16 3.36914 16 3.86503C16 4.36091 15.8028 4.8365 15.4518 5.18719L6.26993 14.3799C6.17984 14.4701 6.06798 14.5356 5.94516 14.57L0.942441 15.9724C0.68418 16.0448 0.406903 15.9723 0.217253 15.7829C0.0276032 15.5934 -0.0448822 15.3165 0.0276754 15.0586L1.43296 10.0633C1.46728 9.94132 1.53237 9.83014 1.62199 9.74042L10.8051 0.547542Z" fill="white" fillRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                  {/* Agent Info */}
                  <div className="flex-1 min-h-0 min-w-0 self-stretch">
                    <div className="flex flex-col justify-between py-[18px] h-full">
                      <div className="flex flex-col gap-[3px]">
                        <p className="font-['Figtree'] font-[600] text-[#1c1c1c] text-[16px] leading-[1.55] truncate">
                          Hi I'm {agentData.name}
                        </p>
                        <p className="font-['Figtree'] text-[#676879] text-[14px] leading-[1.55]">
                          {agentData.expertise}
                        </p>
                      </div>
                      {/* Active badge */}
                      <div className="h-[32px] relative rounded-[62.5px] shrink-0 w-fit">
                        <div className="flex h-full items-center justify-center overflow-clip pr-[5px] py-[12.5px] rounded-[inherit]">
                          <div className="flex gap-[4px] items-center pl-[6px] pr-[10px] py-[6px] rounded-[50px]">
                            <ActiveBullet />
                            <span className="font-['Figtree'] text-[#00c875] text-[14px] leading-none whitespace-nowrap">
                              Active
                            </span>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border border-[#d0d4e4] border-solid inset-0 pointer-events-none rounded-[62.5px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs: Brain / Activity */}
              <div className="shrink-0 w-full">
                <div className="flex items-center px-[12px]">
                  <div className="flex-1 relative">
                    <div aria-hidden="true" className="absolute border-[#d0d4e4] border-b border-solid inset-0 pointer-events-none" />
                    <div className="flex gap-[16px] items-center">
                      <button
                        onClick={() => setActiveTab("brain")}
                        className={`cursor-pointer flex items-center justify-center pb-[8px] px-[8px] relative shrink-0 ${
                          activeTab === "brain" ? "border-b-2 border-[#0073EA]" : ""
                        }`}
                      >
                        <span
                          className={`font-['Figtree'] text-[#323338] text-[16px] leading-[1.35] tracking-[-0.32px] whitespace-nowrap ${
                            activeTab === "brain" ? "font-[600]" : ""
                          }`}
                        >
                          Brain
                        </span>
                      </button>
                      <button
                        onClick={() => setActiveTab("activity")}
                        className={`cursor-pointer flex items-center justify-center pb-[8px] px-[8px] relative shrink-0 ${
                          activeTab === "activity" ? "border-b-2 border-[#0073EA]" : ""
                        }`}
                      >
                        <span
                          className={`font-['Figtree'] text-[#323338] text-[16px] leading-[1.35] tracking-[-0.32px] whitespace-nowrap ${
                            activeTab === "activity" ? "font-[600]" : ""
                          }`}
                        >
                          Activity
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* ─── Triggers Section ────────────────────────────── */}
              <div className="flex flex-col gap-[8px] shrink-0 w-full">
                <SectionHeader
                  title="Triggers"
                  expanded={expandedSections.triggers}
                  onToggle={() => toggleSection("triggers")}
                  rightContent={<TriggerBadges />}
                />

                {expandedSections.triggers && (
                  <div className="bg-white relative rounded-[12px] w-full">
                    <div className="flex flex-col pt-[16px] pb-[8px] gap-[16px] rounded-[inherit]">
                      <div className="flex flex-col justify-center items-start px-[16px] gap-[4px]">
                        <button className="flex items-center px-[8px] gap-[8px] h-[32px] min-h-[32px] max-h-[32px] rounded-[8px] shrink-0 cursor-pointer hover:bg-[#f5f6f8] transition-colors relative">
                          <PlayIcon />
                          <span className="font-['Figtree'] text-[#323338] text-[14px] leading-[20px] whitespace-nowrap">
                            Run now
                          </span>
                          <div aria-hidden="true" className="absolute border border-[#c3c6d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
                        </button>
                        <div className="flex items-center px-[8px] py-[4px] gap-[4px] h-[32px] rounded-[4px] w-full self-stretch">
                          <div className="flex-1 flex items-center gap-[4px]">
                            <div className="overflow-clip relative shrink-0 size-[20px]">
                              <div className="absolute inset-[11.25%_11.25%_11.06%_11.25%]">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4998 15.5383">
                                  <path clipRule="evenodd" d={svgPaths.p1c4cc900} fill="#323338" fillRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                            <span className="font-['Figtree'] text-[#323338] text-[14px] leading-[20px] whitespace-nowrap">
                              Mention @agent
                            </span>
                          </div>
                          <Toggle enabled={triggers.mention} onToggle={() => setTriggers(t => ({ ...t, mention: !t.mention }))} />
                        </div>
                        <div className="flex items-center px-[8px] py-[4px] gap-[4px] h-[32px] rounded-[4px] w-full self-stretch">
                          <div className="flex-1 flex items-center gap-[4px]">
                            <div className="overflow-clip relative shrink-0 size-[20px]">
                              <div className="absolute inset-[10.25%]">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9 15.9">
                                  <path clipRule="evenodd" d={svgPaths.p1a7d0570} fill="#323338" fillRule="evenodd" />
                                  <path clipRule="evenodd" d={svgPaths.p2d4adc00} fill="#323338" fillRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                            <span className="font-['Figtree'] text-[#323338] text-[14px] leading-[20px] whitespace-nowrap">
                              Assign agent
                            </span>
                          </div>
                          <Toggle enabled={triggers.assign} onToggle={() => setTriggers(t => ({ ...t, assign: !t.assign }))} />
                        </div>
                        <div className="flex items-center gap-[8px] px-[8px] py-[4px] h-[32px] rounded-[4px] w-full">
                          <div className="flex items-center gap-[4px]">
                            <div className="overflow-clip relative shrink-0 size-[18px]">
                              <div className="absolute inset-[26.25%]">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.55 8.55">
                                  <path clipRule="evenodd" d={svgPaths.p2474a900} fill="#676879" fillRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                            <span className="font-['Figtree'] text-[#676879] text-[14px] leading-[20px] whitespace-nowrap">
                              Add trigger
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#d0d4e4] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  </div>
                )}
              </div>

              {/* ─── Instructions Section ────────────────────────── */}
              <div className="flex flex-col gap-[8px] shrink-0 w-full">
                <SectionHeader
                  title="Instructions"
                  expanded={expandedSections.instructions}
                  onToggle={() => toggleSection("instructions")}
                  rightContent={
                    <button className="cursor-pointer flex items-center justify-center rounded-[4px] size-[24px] hover:bg-black/5 transition-colors">
                      <div className="overflow-clip relative shrink-0 size-[16px]">
                        <div className="absolute inset-[12.5%_15%]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2 12">
                            <path d={svgPaths.p35083680} fill="#323338" />
                            <path d={svgPaths.p21175a00} fill="#323338" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  }
                />

                {expandedSections.instructions && (
                  <div className="bg-white relative rounded-[12px] w-full">
                    <div className="overflow-hidden rounded-[inherit]">
                      <div className="flex flex-col gap-[8px] p-[16px] relative">
                        <div className="font-['Figtree'] text-[#323338] text-[14px] leading-[20px] max-h-[262px] overflow-hidden">
                          <p className="font-[700] mb-0">📋 Overview</p>
                          <p className="mb-0">
                            Monitor direct and indirect competitors weekly to provide actionable updates and insights for strategic decision-making.
                          </p>
                          <p className="mb-0">&nbsp;</p>
                          <p className="font-[700] mb-0">📊 Competitive research tasks</p>
                          <p className="mb-0">
                            Identify competitors - Research and list relevant direct and indirect competitors in the market.
                          </p>
                          <p className="mb-0">
                            Track updates - Monitor competitor news, product launches, and major changes regularly.
                          </p>
                          <p className="mb-0">
                            Analyze strategies - Assess competitor positioning, marketing tactics, and business moves.
                          </p>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-[135px] bg-gradient-to-b from-transparent via-white/75 to-white pointer-events-none" />
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#d0d4e4] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  </div>
                )}
              </div>

              {/* ─── Tools and access Section ─────────────────────── */}
              <div className="flex flex-col gap-[8px] shrink-0 w-full">
                <SectionHeader
                  title="Tools and access"
                  expanded={expandedSections.tools}
                  onToggle={() => toggleSection("tools")}
                  rightContent={<MondayLogoBadge />}
                />

                {expandedSections.tools && (
                  <div className="bg-white relative rounded-[8px] w-full">
                    <div className="flex flex-col items-start py-[8px] gap-[8px] rounded-[inherit]">
                      <div className="flex flex-col items-start gap-[4px] w-full">
                        <div className="flex items-center px-[24px] gap-[4px] h-[32px] w-full">
                          <div className="flex items-center gap-[8px] flex-1">
                            <GlobeIcon />
                            <span className="font-['Figtree'] text-[#323338] text-[14px] leading-[20px] whitespace-nowrap">
                              Web browsing
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center px-[24px] gap-[4px] h-[32px] w-full">
                          <div className="flex items-center gap-[8px] flex-1">
                            <ImageGenIcon />
                            <span className="font-['Figtree'] text-[#323338] text-[14px] leading-[20px] whitespace-nowrap">
                              Image generation
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="w-full h-px bg-[#e7e9ef] self-stretch shrink-0" />
                      <div className="flex flex-col items-start gap-[4px] w-full">
                        <div className="flex items-center px-[24px] gap-[8px] h-[32px] w-full">
                          <div className="flex items-center gap-[8px] flex-1">
                            <div className="relative shrink-0 size-[16px]">
                              <svg className="absolute block size-full" viewBox="0 0 16 16" fill="none">
                                <rect x="1" y="3" width="14" height="10" rx="1.5" fill="#EA4335" />
                                <path d="M1 4.5L8 9l7-4.5" stroke="white" strokeWidth="1.2" fill="none" />
                              </svg>
                            </div>
                            <span className="font-['Figtree'] text-[#323338] text-[14px] leading-[20px] whitespace-nowrap">Gmail</span>
                            <span className="text-[2px] text-[#676879]">•</span>
                            <span className="font-['Figtree'] text-[#676879] text-[14px] leading-[20px] whitespace-nowrap">Email</span>
                          </div>
                          <button className="flex items-center justify-center px-[8px] gap-[8px] h-[24px] min-h-[24px] max-h-[24px] rounded-[4px] cursor-pointer">
                            <span className="font-['Figtree'] text-[#BB3354] text-[14px] leading-[20px] whitespace-nowrap">Needs reconnection</span>
                          </button>
                        </div>
                        <div className="flex items-center px-[24px] gap-[8px] h-[32px] w-full">
                          <div className="flex items-center gap-[8px] flex-1">
                            <div className="relative shrink-0 size-[16px]">
                              <svg className="absolute block size-full" viewBox="0 0 16 16" fill="none">
                                <rect x="2" y="2" width="12" height="12" rx="2" stroke="#4285F4" strokeWidth="1.2" fill="none" />
                                <line x1="5" y1="5.5" x2="11" y2="5.5" stroke="#4285F4" strokeWidth="0.8" />
                                <line x1="5" y1="8" x2="11" y2="8" stroke="#EA4335" strokeWidth="0.8" />
                                <line x1="5" y1="10.5" x2="9" y2="10.5" stroke="#FBBC04" strokeWidth="0.8" />
                              </svg>
                            </div>
                            <span className="font-['Figtree'] text-[#323338] text-[14px] leading-[20px] whitespace-nowrap">Google Calendar</span>
                            <span className="text-[2px] text-[#676879]">•</span>
                            <span className="font-['Figtree'] text-[#676879] text-[14px] leading-[20px] whitespace-nowrap">Daily</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center px-[16px] gap-[4px] w-full">
                        <div className="flex items-center px-[8px] py-[4px] gap-[8px] h-[32px] rounded-[4px] w-full">
                          <div className="flex items-center gap-[8px]">
                            <div className="flex items-center gap-[4px]">
                              <div className="overflow-clip relative shrink-0 size-[16px]">
                                <div className="absolute inset-[26.25%]">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.55 8.55">
                                    <path clipRule="evenodd" d={svgPaths.p2474a900} fill="#676879" fillRule="evenodd" />
                                  </svg>
                                </div>
                              </div>
                              <span className="font-['Figtree'] text-[#676879] text-[14px] leading-[20px] whitespace-nowrap">Add tool</span>
                            </div>
                            <div className="flex items-center gap-[2px]">
                              <div className="size-[14px] bg-[#f6f7fb] rounded-[4px]" />
                              <div className="size-[14px] bg-[#f6f7fb] rounded-[4px]" />
                              <div className="size-[14px] bg-[#f6f7fb] rounded-[4px]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#d0d4e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                )}
              </div>

              {/* ─── Knowledge Section ────────────────────────────── */}
              <div className="flex flex-col gap-[8px] shrink-0 w-full">
                <SectionHeader
                  title="Knowledge"
                  expanded={expandedSections.knowledge}
                  onToggle={() => toggleSection("knowledge")}
                />

                {expandedSections.knowledge && (
                  <div className="bg-white relative rounded-[8px] w-full">
                    <div className="flex flex-col items-start py-[8px] gap-[8px] rounded-[inherit]">
                      <div className="flex flex-col items-start gap-[4px] w-full">
                        <div className="flex items-center px-[24px] gap-[4px] h-[32px] w-full">
                          <div className="flex items-center gap-[8px] flex-1">
                            <div className="flex items-center gap-[8px]">
                              <MondayLogo />
                              <span className="font-['Figtree'] font-[600] text-[#323338] text-[14px] leading-[20px] whitespace-nowrap">All Boards</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center pl-[44px] pr-[8px] gap-[4px] w-full">
                          <div className="flex items-center justify-between px-[8px] py-[4px] gap-[8px] h-[32px] rounded-[4px] w-full self-stretch">
                            <div className="flex items-center gap-[4px]">
                              <BoardIcon />
                              <span className="font-['Figtree'] text-[#323338] text-[14px] leading-[20px] whitespace-nowrap">Product Updates</span>
                            </div>
                            <button className="flex items-center justify-center px-[8px] gap-[8px] h-[24px] min-h-[24px] max-h-[24px] rounded-[4px] cursor-pointer hover:bg-[#f5f6f8] transition-colors">
                              <span className="font-['Figtree'] text-[#676879] text-[14px] leading-[20px] whitespace-nowrap">All columns</span>
                              <ChevronDown />
                            </button>
                          </div>
                          <div className="flex items-center justify-between px-[8px] py-[4px] gap-[8px] h-[32px] rounded-[4px] w-full self-stretch">
                            <div className="flex items-center gap-[4px]">
                              <DocIcon />
                              <span className="font-['Figtree'] text-[#323338] text-[14px] leading-[20px] whitespace-nowrap">Market Intelligence</span>
                            </div>
                            <button className="flex items-center justify-center px-[8px] gap-[8px] h-[24px] min-h-[24px] max-h-[24px] rounded-[4px] cursor-pointer hover:bg-[#f5f6f8] transition-colors">
                              <span className="font-['Figtree'] text-[#676879] text-[14px] leading-[20px] whitespace-nowrap">All columns</span>
                              <ChevronDown />
                            </button>
                          </div>
                          <div className="flex items-center px-[8px] py-[4px] gap-[8px] h-[32px] rounded-[4px] w-full self-stretch">
                            <div className="flex items-center gap-[4px]">
                              <div className="overflow-clip relative shrink-0 size-[16px]">
                                <div className="absolute inset-[26.25%]">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.55 8.55">
                                    <path clipRule="evenodd" d={svgPaths.p2474a900} fill="#676879" fillRule="evenodd" />
                                  </svg>
                                </div>
                              </div>
                              <span className="font-['Figtree'] text-[#676879] text-[14px] leading-[20px] whitespace-nowrap">Add board</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full h-px bg-[#e7e9ef] self-stretch shrink-0" />
                      <div className="flex flex-col items-start gap-[4px] w-full">
                        <div className="flex items-center px-[24px] gap-[4px] h-[32px] w-full">
                          <div className="flex items-center gap-[8px]">
                            <AttachIcon />
                            <span className="font-['Figtree'] font-[600] text-[#323338] text-[14px] leading-[20px] whitespace-nowrap">Files</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-center pl-[40px] pr-[8px] gap-[4px] w-full">
                          <div className="flex items-center px-[8px] py-[4px] gap-[8px] h-[32px] rounded-[4px] w-full self-stretch">
                            <div className="flex items-center gap-[4px]">
                              <div className="flex items-center isolate shrink-0 size-[16px]">
                                <div className="size-[16px] bg-[#D83A52] rounded-[1.78px] flex items-center justify-center">
                                  <svg width="7" height="8" viewBox="0 0 7 8" fill="none">
                                    <path d="M1 1h2.5L5 2.5V7H1V1z" fill="white" />
                                  </svg>
                                </div>
                              </div>
                              <span className="font-['Figtree'] text-[#323338] text-[14px] leading-[20px] whitespace-nowrap">Competitive Landscape Analysis</span>
                            </div>
                          </div>
                          <div className="flex items-center px-[8px] py-[4px] gap-[8px] h-[32px] rounded-[4px] w-full self-stretch">
                            <div className="flex items-center gap-[4px]">
                              <div className="flex items-center isolate shrink-0 size-[16px]">
                                <div className="size-[16px] bg-[#579BFC] rounded-[1.78px] flex items-center justify-center">
                                  <svg width="7" height="8" viewBox="0 0 7 8" fill="none">
                                    <path d="M1.5 2.5h4M1.5 4h4M1.5 5.5h2.5" stroke="white" strokeWidth="0.8" />
                                  </svg>
                                </div>
                              </div>
                              <span className="font-['Figtree'] text-[#323338] text-[14px] leading-[20px] whitespace-nowrap">Research Findings</span>
                            </div>
                          </div>
                          <div className="flex items-center px-[8px] py-[4px] gap-[8px] h-[32px] rounded-[4px] w-full self-stretch">
                            <div className="flex items-center gap-[4px]">
                              <div className="overflow-clip relative shrink-0 size-[16px]">
                                <div className="absolute inset-[26.25%]">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.55 8.55">
                                    <path clipRule="evenodd" d={svgPaths.p2474a900} fill="#676879" fillRule="evenodd" />
                                  </svg>
                                </div>
                              </div>
                              <span className="font-['Figtree'] text-[#676879] text-[14px] leading-[20px] whitespace-nowrap">Add source</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#d0d4e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                )}
              </div>

              {/* ─── Skills Section ────────────────────────────────── */}
              <div className="flex flex-col gap-[8px] shrink-0 w-full">
                <div className="flex flex-col gap-[4px] w-full">
                  <SectionHeader
                    title="Skills"
                    expanded={expandedSections.skills}
                    onToggle={() => toggleSection("skills")}
                  />
                  <div className="flex justify-center items-center px-[15px] gap-[10px] w-full">
                    <span className="font-['Figtree'] text-[#676879] text-[14px] leading-[20px]">
                      Create new skills in the <span className="text-[#0073EA] cursor-pointer hover:underline">Skills Hub</span>
                    </span>
                  </div>
                </div>

                {expandedSections.skills && (
                  <div className="bg-white relative rounded-[8px] w-full box-border border border-[#D0D4E4]">
                    <div className="flex flex-col items-start py-[8px] gap-[8px] rounded-[inherit]">
                      <div className="flex flex-col items-center px-[16px] gap-[4px] w-full">
                        <div className="flex items-center px-[8px] py-[4px] gap-[8px] h-[32px] rounded-[4px] w-full">
                          <div className="flex items-center gap-[4px]">
                            <div className="overflow-clip relative shrink-0 size-[16px]">
                              <div className="absolute inset-[26.25%]">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.55 8.55">
                                  <path clipRule="evenodd" d={svgPaths.p2474a900} fill="#676879" fillRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                            <span className="font-['Figtree'] text-[#676879] text-[14px] leading-[20px] whitespace-nowrap">
                              Add skill
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* ─── Model Section ─────────────────────────────────── */}
              <div className="flex flex-col gap-[8px] shrink-0 w-full">
                <SectionHeader
                  title="Model"
                  expanded={expandedSections.model}
                  onToggle={() => toggleSection("model")}
                />

                {expandedSections.model && (
                  <div className="bg-white relative rounded-[8px] w-full box-border border border-[#D0D4E4]">
                    <div className="flex flex-col items-start py-[8px] gap-[8px] rounded-[inherit]">
                      <div className="flex flex-col items-center px-[16px] gap-[4px] w-full">
                        <div className="flex items-center justify-between px-[8px] py-[4px] gap-[8px] h-[32px] rounded-[4px] w-full">
                          <div className="flex items-center gap-[4px] flex-1">
                            <div className="relative shrink-0 h-[13px] w-[24px]">
                              <img
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 13' fill='none'%3E%3Ccircle cx='3' cy='6.5' r='2.5' fill='%2310A37F'/%3E%3Ccircle cx='12' cy='6.5' r='2.5' fill='%2310A37F'/%3E%3Ccircle cx='21' cy='6.5' r='2.5' fill='%2310A37F'/%3E%3Cpath d='M5.5 6.5h4M14.5 6.5h4' stroke='%2310A37F' stroke-width='1.2'/%3E%3C/svg%3E"
                                alt=""
                                className="w-[24px] h-[13px]"
                              />
                            </div>
                            <span className="font-['Figtree'] text-[#323338] text-[14px] leading-[20px] whitespace-nowrap">
                              GPT 5.4
                            </span>
                          </div>
                          <ChevronDown />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Fixed Prompt Editor (bottom) ───────────────────────── */}
      <div
        className="fixed bottom-0 left-[48px] z-50 px-[20px] pb-[16px] rounded-t-[16px] transition-[right] duration-300 ease-in-out"
        style={{ right: rightPanelCollapsed ? 48 : 48 + 437 + 16 }}
      >
        <div className="max-w-[700px] w-full mx-auto">
          <div className="bg-white relative rounded-[12px]">
            <div className="flex flex-col justify-between overflow-clip pb-[8px] pt-[12px] rounded-[inherit] min-h-[111px]">
              <div className="flex items-center px-[12px]">
                <div className="flex items-center w-full">
                  <textarea
                    ref={textareaRef}
                    value={promptValue}
                    onChange={(e) => setPromptValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        sendMessage(promptValue);
                      }
                    }}
                    placeholder="Describe what your agent should do"
                    className="font-['Figtree'] text-[15px] leading-[20px] text-[#323338] placeholder:text-[#676879] resize-none border-none outline-none bg-transparent w-full min-h-[20px] max-h-[80px] ml-[4px]"
                    rows={1}
                  />
                </div>
              </div>
              <div className="flex items-center px-[12px] h-[32px] gap-[12px]">
                <div className="bg-[#f6f7fb] flex items-center justify-center rounded-[4px] size-[28px]">
                  <div className="overflow-clip relative shrink-0 size-[16px]">
                    <div className="absolute inset-[11.25%]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4 12.4">
                        <path clipRule="evenodd" d={svgPaths.p225c1f00} fill="#323338" fillRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex-1" />
                <button
                  className={`flex items-center justify-center max-h-[24px] max-w-[24px] rounded-[12px] size-[24px] transition-colors ${promptValue.trim() ? "bg-[#323338] cursor-pointer" : "bg-[#ecedf5] cursor-default"}`}
                  onClick={() => sendMessage(promptValue)}
                  disabled={!promptValue.trim()}
                >
                  <div className="overflow-clip relative shrink-0 size-[16px]">
                    <div className="absolute inset-[11.25%_16.35%_10.54%_17.06%]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6538 12.5137">
                        <path clipRule="evenodd" d={svgPaths.p25262000} fill={promptValue.trim() ? "white" : "rgba(50,51,56,0.38)"} fillRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#c3c6d4] border-solid inset-0 pointer-events-none rounded-[12px]" />
          </div>
        </div>
      </div>
    </div>
  );
}