import { useNavigate } from "react-router";
import { useState, useRef, useEffect } from "react";
import svgPaths from "../../imports/svg-pdemzrw1yb";
import leftPanelSvg from "../../imports/svg-19w7g2wc8u";
import imgBeckyAvatar from "../../assets/dashboard-avatars/sidebar-becky.png";
import imgJennyAvatar from "../../assets/dashboard-avatars/sidebar-jenny.png";
import imgElenaAvatar from "../../assets/dashboard-avatars/sidebar-elena.png";
import imgAvatar from "figma:asset/eac42c09287597207b437667c9370e36bdccb709.png";
import imgUnion from "figma:asset/5e227b57af4d3bdb685ae0df66ac5220cd706969.png";
import imgUnion1 from "figma:asset/22ad50eb0713a613f0e61593cee33eeab7e9231a.png";
import imgUnion2 from "figma:asset/83306d74945b866a1ba5d066a909528358e8cf8b.png";
import imgUnion3 from "figma:asset/6df60b613c7ccd2003fe4b19b00b990ef1976949.png";
import imgUnion4 from "figma:asset/e42eb8565e7b580ea1feaa49d5614c5de7cb3d46.png";
import imgUnion5 from "figma:asset/0b7a7fe6a1c5fc9b96dd08251b6e364eb22f5343.png";
import imgUnion6 from "figma:asset/c1db725417c791031e02fded7360fbfba849655c.png";
import imgUnion7 from "figma:asset/b6f370519997afd6354cf1553ebd3467c56d5ce2.png";
import imgUnion8 from "figma:asset/301b01068659bca070b4475e24add8e86def31fa.png";

import imgSuggestElena from "../../assets/dashboard-avatars/suggest-elena.png";
import imgSuggestRon from "../../assets/dashboard-avatars/suggest-ron.png";
import imgSuggestEmma from "../../assets/dashboard-avatars/suggest-emma.png";
import imgSuggestDani from "../../assets/dashboard-avatars/suggest-dani.png";
import imgExploreEmma2 from "../../assets/dashboard-avatars/explore-emma2.png";
import imgExploreDani2 from "../../assets/dashboard-avatars/explore-dani2.png";
import imgExploreRon2 from "../../assets/dashboard-avatars/explore-ron2.png";
import imgExploreDani3 from "../../assets/dashboard-avatars/explore-dani3.png";
import imgExploreDani4 from "../../assets/dashboard-avatars/explore-dani4.png";
import imgExploreElena2 from "../../assets/dashboard-avatars/explore-elena2.png";
import integrationSvgPaths from "../../imports/svg-z7gp0krfru";
import imgGmailLogo from "../../assets/integrations/gmail.png";
import slackLogoUrl from "../../assets/integrations/slack.svg";

/* ─────────────── Integration Icons ─────────────── */
function GmailSkill() {
  return (
    <div className="bg-white mr-[-7.2px] relative rounded-[24px] shrink-0 size-[28.8px]">
      <div className="overflow-clip relative rounded-[inherit] size-full flex items-center justify-center">
        <img alt="Gmail" className="size-[16px] object-contain pointer-events-none" src={imgGmailLogo} />
      </div>
      <div aria-hidden="true" className="absolute border-[#e7e9ef] border-[1.152px] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function MondaySkill() {
  return (
    <div className="bg-white mr-[-7.2px] relative rounded-[24px] shrink-0 size-[28.8px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.4px)] overflow-clip rounded-[11.25px] size-[19.44px] top-[calc(50%-0.4px)]">
          <div className="absolute inset-[22.75%_4.17%_22.76%_4.17%]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.8202 10.5936">
              <path clipRule="evenodd" d={integrationSvgPaths.p21f1b4a0} fill="#FB275D" fillRule="evenodd" />
              <path clipRule="evenodd" d={integrationSvgPaths.p3b21e200} fill="#FFCB00" fillRule="evenodd" />
              <path clipRule="evenodd" d={integrationSvgPaths.p3daa92d0} fill="#00C875" fillRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e7e9ef] border-[1.152px] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function LinkedInSkill() {
  return (
    <div className="bg-white mr-[-7.2px] relative rounded-[24px] shrink-0 size-[28.8px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.4px)] overflow-clip size-[21.6px] top-[calc(50%-0.4px)]">
          <div className="absolute inset-[6.67%_7.21%_6.67%_6.67%]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.602 18.72">
              <path clipRule="evenodd" d={integrationSvgPaths.p19b8ee80} fill="#006699" fillRule="evenodd" />
              <path clipRule="evenodd" d={integrationSvgPaths.p326ef0c0} fill="#006699" fillRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e7e9ef] border-[1.152px] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function SlackSkill() {
  return (
    <div className="bg-white mr-[-7.2px] relative rounded-[24px] shrink-0 size-[28.8px]">
      <div className="overflow-clip relative rounded-[inherit] size-full flex items-center justify-center">
        <img alt="Slack" className="size-[16px] object-contain pointer-events-none" src={slackLogoUrl} />
      </div>
      <div aria-hidden="true" className="absolute border-[#e7e9ef] border-[1.152px] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

type IntegrationType = "gmail" | "monday" | "linkedin" | "slack";

function IntegrationApps({ integrations }: { integrations: IntegrationType[] }) {
  return (
    <div className="content-stretch flex items-center pr-[7.2px] relative shrink-0">
      {integrations.map((type) => {
        switch (type) {
          case "gmail": return <GmailSkill key="gmail" />;
          case "monday": return <MondaySkill key="monday" />;
          case "linkedin": return <LinkedInSkill key="linkedin" />;
          case "slack": return <SlackSkill key="slack" />;
        }
      })}
    </div>
  );
}

/* ─────────────── Header ─────────────── */
function MondayHeader() {
  return (
    <div className="h-[48px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[16px] pr-[24px] py-[8px] relative size-full">
          {/* Left: Logo */}
          <div className="content-stretch flex items-center relative shrink-0 w-[295px]">
            <div className="overflow-clip relative shrink-0 size-[32px]">
              <div className="absolute inset-[15.63%]">
                <div className="absolute inset-[8.14%_6.65%_7.93%_6.51%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.1048 18.4643">
                    <path clipRule="evenodd" d={svgPaths.p31d4e00} fill="#6161FF" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p20525600} fill="#6161FF" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p3daf1f00} fill="#6161FF" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p35f83ac0} fill="#6161FF" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p8fa5880} fill="#6161FF" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p1a8adc00} fill="#6161FF" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="font-['Poppins'] leading-[0] relative shrink-0 text-[#323338] text-[18px] whitespace-nowrap">
              <span className="font-bold leading-[24px]">monday </span>
              <span className="leading-[24px]">work management</span>
            </p>
          </div>

          {/* Right: Icons + profile */}
          <div className="content-stretch flex gap-[14px] items-center justify-end relative shrink-0">
            {/* Icon buttons row */}
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
              {/* Notifications */}
              <button className="flex gap-[8px] items-center justify-center rounded-[4px] size-[40px] cursor-pointer hover:bg-black/5 transition-colors">
                <div className="overflow-clip relative shrink-0 size-[20px]">
                  <div className="absolute inset-[10.25%_15.3%_9.75%_16.25%]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6885 16">
                      <path d={svgPaths.pe496f00} fill="#323338" />
                    </svg>
                  </div>
                </div>
              </button>
              {/* Inbox */}
              <button className="flex gap-[8px] items-center justify-center rounded-[4px] size-[40px] cursor-pointer hover:bg-black/5 transition-colors">
                <div className="overflow-clip relative shrink-0 size-[20px]">
                  <div className="absolute inset-[19.58%_9.58%_19.58%_9.59%]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1667 12.1669">
                      <path clipRule="evenodd" d={svgPaths.p1708f1f0} fill="#323338" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </button>
              {/* Invite */}
              <button className="flex gap-[8px] items-center justify-center rounded-[4px] size-[40px] cursor-pointer hover:bg-black/5 transition-colors">
                <div className="overflow-clip relative shrink-0 size-[20px]">
                  <div className="absolute inset-[10.25%_10.25%_10%_10%]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9502 15.9502">
                      <path clipRule="evenodd" d={svgPaths.p21e40180} fill="#323338" fillRule="evenodd" />
                      <path d={svgPaths.p306cc4c0} fill="#323338" />
                      <path d={svgPaths.p2c5d5900} fill="#323338" />
                    </svg>
                  </div>
                </div>
              </button>
              {/* Apps */}
              <button className="flex gap-[8px] items-center justify-center rounded-[4px] size-[40px] cursor-pointer hover:bg-black/5 transition-colors">
                <div className="overflow-clip relative shrink-0 size-[20px]">
                  <div className="absolute inset-[10%]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <path clipRule="evenodd" d={svgPaths.pb77d400} fill="#323338" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </button>
              {/* Search */}
              <button className="flex gap-[8px] items-center justify-center rounded-[4px] size-[40px] cursor-pointer hover:bg-black/5 transition-colors">
                <div className="overflow-clip relative shrink-0 size-[20px]">
                  <div className="absolute inset-[11.86%_11.56%_11.25%_11.56%]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3764 15.377">
                      <path clipRule="evenodd" d={svgPaths.pb3aa200} fill="#323338" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </button>
              {/* Help */}
              <button className="flex gap-[8px] items-center justify-center rounded-[4px] size-[40px] cursor-pointer hover:bg-black/5 transition-colors">
                <div className="overflow-clip relative shrink-0 size-[20px]">
                  <div className="absolute inset-[10%_27.5%_12.5%_30%]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.5 15.4996">
                      <path d={svgPaths.p19c79400} fill="#323338" />
                      <path d={svgPaths.p182ef980} fill="#323338" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
            {/* Divider */}
            <div className="flex h-[22px] items-center justify-center mix-blend-multiply relative shrink-0 w-0">
              <div className="flex-none rotate-90">
                <div className="h-0 relative w-[22px]">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 1">
                      <line stroke="#C3C6D4" x2="22" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Heart icon */}
            <button className="flex gap-[8px] items-center justify-center rounded-[4px] size-[32px] cursor-pointer hover:bg-black/5 transition-colors">
              <div className="relative shrink-0 size-[20px]">
                <div className="absolute inset-[10.26%_5.04%_9.74%_5.02%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.989 16">
                    <path clipRule="evenodd" d={svgPaths.p31763d00} fill="#323338" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
            </button>
            {/* AI icon */}
            <div className="flex items-center justify-center mix-blend-multiply px-[8px] py-[6px] rounded-[4px] shrink-0 size-[32px]">
              <div className="relative shrink-0 size-[20px]">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[12.801px] left-1/2 top-1/2 w-[12.8px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8002 12.8014">
                    <path d={svgPaths.p2f875330} fill="#323338" />
                  </svg>
                </div>
              </div>
            </div>
            {/* Switcher */}
            <button className="flex gap-[8px] items-center justify-center rounded-[4px] size-[40px] cursor-pointer hover:bg-black/5 transition-colors">
              <div className="overflow-clip relative shrink-0 size-[20px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p1cdea100} fill="#323338" />
                  <path d={svgPaths.p18aed200} fill="#323338" />
                  <path d={svgPaths.p55aba80} fill="#323338" />
                  <path d={svgPaths.p1c75e600} fill="#323338" />
                  <path d={svgPaths.p15b1cf00} fill="#323338" />
                  <path d={svgPaths.p243a0700} fill="#323338" />
                  <path d={svgPaths.p3fb90a00} fill="#323338" />
                  <path d={svgPaths.p3aa49c00} fill="#323338" />
                  <path d={svgPaths.p563540} fill="#323338" />
                </svg>
              </div>
            </button>
            {/* Profile button */}
            <div className="h-[32px] relative shrink-0 w-[62px]">
              <div className="absolute inset-[0_25.81%_0_0] overflow-clip rounded-bl-[4px] rounded-tl-[4px]">
                <div className="absolute bg-white h-[32px] left-0 opacity-50 top-0 w-[46px] rounded-[4px]" />
                <div className="absolute left-[6px] overflow-clip size-[20px] top-[6px]">
                  <div className="absolute inset-[28.34%_54.13%_30.88%_15.62%]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.04997 8.1546">
                      <path clipRule="evenodd" d={svgPaths.p8f5b1c0} fill="#FB275D" fillRule="evenodd" />
                    </svg>
                  </div>
                  <div className="absolute inset-[28.25%_29.47%_30.88%_40.23%]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.05988 8.17401">
                      <path clipRule="evenodd" d={svgPaths.p39d0d080} fill="#FFCB00" fillRule="evenodd" />
                    </svg>
                  </div>
                  <div className="absolute inset-[49.03%_15.62%_30.88%_64.81%]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.91309 4.01822">
                      <path clipRule="evenodd" d={svgPaths.p3521d400} fill="#00C875" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center left-[calc(50%+15px)] rounded-[100px] top-1/2">
                <div className="relative shrink-0 size-[32px]">
                  <img alt="" className="absolute inset-0 rounded-full object-cover size-full border border-white" src={imgAvatar} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────── Left Sidebar ─────────────── */
function SidebarItem({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <div className={`relative rounded-[4px] shrink-0 w-full ${active ? "bg-[rgba(194,213,255,0.4)]" : ""}`}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[5px] relative w-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center leading-[0] min-h-px min-w-px overflow-clip relative">
            <div className="shrink-0">
              {icon}
            </div>
            <div className={`flex flex-[1_0_0] flex-col font-['Figtree'] h-[22px] justify-center min-h-px min-w-px relative text-[14px] ${active ? "text-[#676879]" : "text-[#676879]"}`}>
              <p className="leading-[20px]">{label}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomeIcon({ color = "#676879" }: { color?: string }) {
  return (
    <div className="overflow-clip relative size-[16px]">
      <div className="absolute inset-[10%_10%_12.42%_10%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8 12.4121">
          <path clipRule="evenodd" d={svgPaths.p1a6852f2} fill={color} fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

function MenuIcon() {
  return (
    <div className="overflow-clip relative size-[16px]">
      <div className="absolute inset-[45%_11.66%_40%_15%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7344 2.4">
          <path d={svgPaths.p1dd07400} fill="#98999A" />
          <path d={svgPaths.p3257f1c0} fill="#98999A" />
          <path d={svgPaths.p2f072280} fill="#98999A" />
        </svg>
      </div>
    </div>
  );
}

function AIAgentsIcon() {
  return (
    <div className="relative size-[16px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[11.015px] left-[calc(50%-0.37px)] top-[calc(50%-0.09px)]  w-[12.056px]">
        <div className="absolute inset-[-3.63%_-3.32%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.856 11.8153">
            <path d={svgPaths.p20e44d00} stroke="#676879" strokeWidth="0.8" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[15%_14.64%_16.15%_10%]">
        <div className="absolute inset-[-3.63%_-3.32%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.856 11.8166">
            <path d={svgPaths.p24774e00} fill="url(#agentGrad1)" />
            <path d={svgPaths.p35092d00} fill="url(#agentGrad2)" />
            <defs>
              <linearGradient id="agentGrad1" x1="0" y1="6" x2="12.5" y2="6" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#6161FF" />
                <stop offset="0.5" stopColor="#FE97FC" />
                <stop offset="1" stopColor="#FF7E2D" />
              </linearGradient>
              <linearGradient id="agentGrad2" x1="0" y1="6" x2="12.5" y2="6" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#00D0FF" />
                <stop offset="0.5" stopColor="#33D68E" />
                <stop offset="1" stopColor="#E5FF00" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function AILogoIcon() {
  return (
    <div className="relative size-[16px]">
      <div className="absolute inset-[10%]">
        <div className="absolute inset-[37.2%_37.3%_0_0.04%]">
          <img alt="" className="absolute block max-w-none size-full" src={imgUnion} />
        </div>
        <div className="absolute inset-[0.04%_0.43%_37.16%_36.91%]">
          <img alt="" className="absolute block max-w-none size-full" src={imgUnion1} />
        </div>
        <div className="absolute inset-[36.96%_0_0.02%_37.55%]">
          <img alt="" className="absolute block max-w-none size-full" src={imgUnion2} />
        </div>
        <div className="absolute inset-[0_37.51%_36.95%_0]">
          <img alt="" className="absolute block max-w-none size-full" src={imgUnion3} />
        </div>
        <div className="absolute inset-[37.2%_37.65%_0_0.04%]">
          <img alt="" className="absolute block max-w-none size-full" src={imgUnion4} />
        </div>
        <div className="absolute inset-[0.04%_1%_37.16%_36.7%]">
          <img alt="" className="absolute block max-w-none size-full" src={imgUnion5} />
        </div>
        <div className="absolute inset-[36.96%_0.56%_0.02%_37.34%]">
          <img alt="" className="absolute block max-w-none size-full" src={imgUnion6} />
        </div>
        <div className="absolute inset-[0_37.86%_36.95%_0]">
          <img alt="" className="absolute block max-w-none size-full" src={imgUnion7} />
        </div>
      </div>
    </div>
  );
}

function VibeIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]">
      <div className="-translate-y-1/2 absolute left-[10%] right-[10%] top-1/2" style={{ aspectRatio: "16.067882537841797/14" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8 11.1527">
          <path d={svgPaths.p2951af80} fill="url(#vibeGrad)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="vibeGrad" x1="-4.77" x2="9.19" y1="4.66" y2="12.57">
              <stop offset="0.12" stopColor="#F0C020" />
              <stop offset="0.43" stopColor="#FF9E52" />
              <stop offset="0.65" stopColor="#FF74CD" />
              <stop offset="0.88" stopColor="#FF92E8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function WorkflowIcon() {
  return (
    <div className="overflow-clip relative size-[16px]">
      <div className="absolute inset-[15%_5.1%_10.06%_10%]">
        <img alt="" className="absolute block max-w-none size-full" src={imgUnion8} />
      </div>
    </div>
  );
}

function FolderIcon() {
  return (
    <div className="overflow-clip relative size-[16px]">
      <div className="absolute inset-[15%_10%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8 11.2">
          <path clipRule="evenodd" d={svgPaths.p3a73d100} fill="#98999A" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

function ChevronRightIcon() {
  return (
    <div className="overflow-clip relative size-[16px]">
      <div className="absolute bottom-1/4 left-[35%] right-[35%] top-1/4">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.8 8">
          <path d={svgPaths.p1361c900} fill="#676879" />
        </svg>
      </div>
    </div>
  );
}

function ProjectIcon() {
  return (
    <div className="relative size-[16px]">
      <div className="absolute inset-[12.5%_10%_12.51%_10%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8 11.9989">
          <path d={svgPaths.p239c9920} fill="#676879" />
          <path d={svgPaths.p13556e00} fill="#676879" />
          <path d={svgPaths.p1ed93f80} fill="#676879" />
          <path clipRule="evenodd" d={svgPaths.p3c239100} fill="#676879" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

function PortfolioIcon() {
  return (
    <div className="relative size-[16px]">
      <div className="absolute inset-[12.5%_10%_12.51%_10%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8 11.9989">
          <path d={svgPaths.p17bc7600} fill="#676879" />
          <path d={svgPaths.p1c087300} fill="#676879" />
          <path d={svgPaths.p10a8a800} fill="#676879" />
          <path clipRule="evenodd" d={svgPaths.p2005f000} fill="#676879" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

function LeftSidebar() {
  return (
    <div
      className="flex flex-col items-start pt-[16px] pr-[4px] shrink-0 w-[253px] h-full overflow-y-auto rounded-tl-[12px]"
      style={{ backgroundImage: "linear-gradient(rgba(231, 244, 246, 0) 0%, rgba(236, 239, 248, 0.3) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}
    >
      <div className="flex flex-col gap-[8px] items-start px-[8px] w-full">
        {/* Nav items */}
        <div className="flex flex-col items-start px-[8px] w-full">
          <SidebarItem icon={<HomeIcon />} label="Home" />
          <SidebarItem icon={<MenuIcon />} label="More" />
        </div>

        {/* monday AI section */}
        <div className="flex flex-col items-start w-full">
          {/* Header */}
          <div className="flex items-center pl-[8px] w-full">
            <div className="flex gap-[4px] items-center shrink-0">
              <div className="flex flex-col font-['Figtree'] h-[22px] justify-center text-[#323338] text-[12px] w-[61px]" style={{ fontWeight: 600 }}>
                <p className="leading-[16px]">monday AI</p>
              </div>
              <div className="overflow-clip relative shrink-0 size-[14px]">
                <div className="absolute bottom-[35%] left-1/4 right-1/4 top-[35%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 4.2">
                    <path d={svgPaths.p1b71e300} fill="#676879" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start px-[8px] w-full">
            <SidebarItem icon={<AILogoIcon />} label="AI Sidekick" />
            <SidebarItem icon={<VibeIcon />} label="Vibe" />
            <SidebarItem icon={<WorkflowIcon />} label="AI workflows" />
            <SidebarItem icon={<AIAgentsIcon />} label="AI Agents" active />
          </div>
        </div>

        {/* Favorites */}
        <div className="flex flex-col gap-[4px] items-start w-full">
          <div className="flex items-center pl-[8px] w-full">
            <div className="flex gap-[4px] items-center shrink-0">
              <div className="flex flex-col font-['Figtree'] h-[22px] justify-center text-[#323338] text-[12px] w-[61px]" style={{ fontWeight: 600 }}>
                <p className="leading-[16px]">Favorites</p>
              </div>
              <div className="overflow-clip relative shrink-0 size-[14px]">
                <div className="absolute bottom-1/4 left-[35%] right-[35%] top-1/4">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.2 7">
                    <path d={svgPaths.p1bd9f300} fill="#676879" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Workspaces */}
        <div className="flex flex-col gap-[4px] items-start w-full">
          <div className="flex items-center justify-between pl-[8px] pr-[8px] w-full">
            <div className="flex flex-col font-['Figtree'] h-[22px] justify-center text-[#323338] text-[12px]" style={{ fontWeight: 600 }}>
              <p className="leading-[16px]">Workspaces</p>
            </div>
          </div>
          {/* PMO Workspace */}
          <div className="flex gap-[4px] items-start px-[8px] w-full">
            <div className="flex-[1_0_0] h-[32px] relative rounded-[4px]">
              <div aria-hidden="true" className="absolute border border-[#d0d4e4] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="flex items-center size-full">
                <div className="flex gap-[8px] items-center pl-[6px] pr-[8px] py-[4px] size-full">
                  <div className="flex flex-[1_0_0] gap-[10px] items-center overflow-clip relative">
                    <div className="bg-[#4eccc6] flex items-center justify-center rounded-[4px] shrink-0 size-[20px]">
                      <div className="overflow-clip relative rounded-[4px] shrink-0 size-[14px]">
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[7.7px] top-1/2">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                            <path d={svgPaths.p15d63330} fill="white" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-[1_0_0] flex-col font-['Figtree'] h-[22px] justify-center text-[#323338] text-[14px]" style={{ fontWeight: 700 }}>
                      <p className="leading-[20px]">PMO</p>
                    </div>
                  </div>
                  <div className="overflow-clip relative shrink-0 size-[16px]">
                    <div className="absolute bottom-[35%] left-1/4 right-1/4 top-[35%]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.8">
                        <path d={svgPaths.pe7b2900} fill="#676879" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#0073ea] flex items-center justify-center rounded-[4px] shrink-0 size-[32px]">
              <div className="overflow-clip relative shrink-0 size-[20px]">
                <div className="absolute inset-[11.25%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 15.5">
                    <path d={svgPaths.pfb9b280} fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Workspace items */}
          <div className="flex flex-col items-start pt-[6px] px-[8px]">
            <div className="flex items-center px-[12px] py-[5px] rounded-[4px] w-[217px]">
              <div className="flex flex-[1_0_0] gap-[12px] items-center overflow-clip">
                <PortfolioIcon />
                <div className="flex flex-[1_0_0] flex-col font-['Figtree'] h-[22px] justify-center text-[#676879] text-[14px]">
                  <p className="leading-[20px]">2026 portfolio</p>
                </div>
              </div>
            </div>
            <div className="flex items-center px-[12px] py-[5px] rounded-[4px] w-[217px]">
              <div className="flex flex-[1_0_0] gap-[12px] items-center overflow-clip">
                <ChevronRightIcon />
                <div className="flex flex-[1_0_0] flex-col font-['Figtree'] h-[22px] justify-center text-[#676879] text-[14px]">
                  <p className="leading-[20px]">Projects</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start pl-[12px]">
              <div className="flex items-center px-[12px] py-[5px] rounded-[4px] w-[213px]">
                <div className="flex flex-[1_0_0] gap-[12px] items-center overflow-clip">
                  <ProjectIcon />
                  <div className="flex flex-[1_0_0] flex-col font-['Figtree'] h-[22px] justify-center text-[#676879] text-[14px]">
                    <p className="leading-[20px]">Project January</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center px-[12px] py-[5px] rounded-[4px] w-[217px]">
                <div className="flex flex-[1_0_0] gap-[12px] items-center overflow-clip">
                  <ProjectIcon />
                  <div className="flex flex-[1_0_0] flex-col font-['Figtree'] h-[22px] justify-center text-[#676879] text-[14px]">
                    <p className="leading-[20px]">Project February</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────── Sidebar (collapsible) ─────────────── */
function SidebarNavItem({ icon, label, active }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <div className={`flex items-center gap-[8px] p-[8px] rounded-[6px] w-full cursor-pointer hover:bg-[#f6f7fb] ${active ? "bg-[rgba(103,104,121,0.1)]" : ""}`}>
      <div className="shrink-0 size-[20px] relative">{icon}</div>
      <div className="flex flex-col font-['Figtree'] justify-center text-[#323338] text-[14px] whitespace-nowrap overflow-hidden">
        <p className="leading-[20px] overflow-hidden">{label}</p>
      </div>
    </div>
  );
}

function MiniSidebar({ expanded, onToggle }: { expanded: boolean; onToggle: () => void }) {
  const HamburgerIcon = (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute inset-[21.25%_12.25%_21.25%_10.25%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 11.5">
          <path clipRule="evenodd" d={svgPaths.p2ae7e180} fill="#676879" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );

  const EditIcon = (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="absolute inset-[6.25%_7.59%_11.25%_7.57%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9664 16.5004">
          <path d={leftPanelSvg.p14663440} fill="#676879" />
          <path d={leftPanelSvg.p10abea80} fill="#676879" />
        </svg>
      </div>
    </div>
  );

  const PersonIcon = (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="absolute inset-[10.25%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9 15.9">
          <path clipRule="evenodd" d={leftPanelSvg.p1a7d0570} fill="#676879" fillRule="evenodd" />
          <path clipRule="evenodd" d={leftPanelSvg.p2d4adc00} fill="#676879" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );

  const WorkIcon = (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="absolute inset-[16.25%_10.83%_11.25%_11.25%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5833 14.5">
          <path clipRule="evenodd" d={leftPanelSvg.p2ceeaf00} fill="#676879" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );

  const KnowledgeIcon = (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="absolute flex inset-[10%_15%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[16px] w-[14px]">
          <div className="relative size-full">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16.0001">
              <path clipRule="evenodd" d={leftPanelSvg.p306a480} fill="#676879" fillRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );

  const FeedbackIcon = (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute inset-[10%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path clipRule="evenodd" d={svgPaths.pdc342f0} fill="#676879" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p1da9af80} fill="#676879" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );

  return (
    <div className={`bg-white h-full relative rounded-tl-[12px] shrink-0 overflow-hidden transition-[width] duration-300 ease-in-out ${expanded ? 'w-[256px]' : 'w-[48px]'}`} style={{ borderRight: expanded ? '0.5px solid #d0d4e4' : 'none' }}>

      {/* Expanded content */}
      <div className={`absolute inset-0 flex flex-col gap-[8px] p-[16px] transition-opacity duration-300 ${expanded ? 'opacity-100 delay-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col flex-[1_0_0] gap-[8px] items-start min-h-0 w-[224px]">
          {/* Hamburger */}
          <button className="flex items-center justify-center shrink-0 cursor-pointer size-[32px] rounded-[4px] hover:bg-[#f6f7fb]" onClick={onToggle}>
            {HamburgerIcon}
          </button>
            {/* Nav items */}
            <SidebarNavItem icon={EditIcon} label="New agent" active />
            <SidebarNavItem icon={PersonIcon} label="My agents" />
            <SidebarNavItem icon={WorkIcon} label="Agents work" />

            {/* My agents section */}
            <div className="flex flex-col gap-[4px] items-start py-[16px] shrink-0 w-full">
              <div className="flex h-[32px] items-center justify-between overflow-clip pl-[8px] py-[8px] shrink-0 w-full">
                <div className="flex flex-col font-['Figtree'] justify-center text-[#323338] text-[14px] whitespace-nowrap" style={{ fontWeight: 600 }}>
                  <p className="leading-[20px]">My agents</p>
                </div>
                <button className="cursor-pointer flex gap-[8px] items-center justify-center rounded-[4px] shrink-0 size-[24px] hover:bg-[#f6f7fb]">
                  <div className="overflow-clip relative shrink-0 size-[16px]">
                    <div className="absolute inset-[10.42%_14.17%_14.17%_10.43%]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.064 12.0642">
                        <path d={leftPanelSvg.p130e7000} fill="#323338" />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
              <div className="flex flex-col gap-[16px] items-start shrink-0 w-full">
                {/* Becky */}
                <div className="h-[32px] relative rounded-[4px] shrink-0 w-full cursor-pointer hover:bg-[#f6f7fb]">
                  <div className="flex flex-row items-center size-full">
                    <div className="flex gap-[8px] items-center p-[8px] size-full">
                      <div className="relative shrink-0" style={{ width: 28, height: 28, borderRadius: "24px", overflow: "hidden", background: "#fff", boxShadow: "-0.561px 0.374px 5.613px rgba(31,132,132,0.1)", backdropFilter: "blur(0.7px)" }}>
                        <img alt="" src={imgBeckyAvatar} style={{ position: "absolute", width: 28, height: 28, left: 0, top: 0, borderRadius: "24px", objectFit: "cover" }} />
                      </div>
                      <div className="flex flex-[1_0_0] flex-col items-start overflow-clip text-[#323338] text-[12px] whitespace-nowrap">
                        <div className="flex flex-col font-['Figtree'] justify-center min-w-full overflow-hidden shrink-0" style={{ fontWeight: 600 }}>
                          <p className="leading-[16px] overflow-hidden">Becky</p>
                        </div>
                        <div className="flex flex-col font-['Figtree'] justify-center min-w-full overflow-hidden shrink-0">
                          <p className="leading-[16px] overflow-hidden">Talent Pipeline</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Jenny */}
                <div className="h-[32px] relative rounded-[4px] shrink-0 w-full cursor-pointer hover:bg-[#f6f7fb]">
                  <div className="flex flex-row items-center size-full">
                    <div className="flex gap-[8px] items-center p-[8px] relative size-full">
                      <div className="relative shrink-0" style={{ width: 28, height: 28, borderRadius: "34.67px", overflow: "hidden", background: "#fff", boxShadow: "-0.55px 0.366px 5.496px rgba(31,132,132,0.1)", backdropFilter: "blur(0.687px)" }}>
                        <img alt="" src={imgJennyAvatar} style={{ position: "absolute", width: 28, height: 28, left: 0, top: 0, borderRadius: "34.67px", objectFit: "cover" }} />
                      </div>
                      <div className="flex flex-[1_0_0] flex-col items-start overflow-clip text-[#323338] text-[12px] whitespace-nowrap">
                        <div className="flex flex-col font-['Figtree'] justify-center min-w-full overflow-hidden shrink-0" style={{ fontWeight: 600 }}>
                          <p className="leading-[16px] overflow-hidden">Jenny</p>
                        </div>
                        <div className="flex flex-col font-['Figtree'] justify-center min-w-full overflow-hidden shrink-0">
                          <p className="leading-[16px] overflow-hidden">Market Intelligence</p>
                        </div>
                      </div>
                      <div className="absolute left-[30px] size-[8px] top-[24px]">
                        <div className="absolute inset-[-14.29%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2857 10.2857">
                            <circle cx="5.14286" cy="5.14286" fill="#CCD6DE" r="4.57143" stroke="white" strokeWidth="1.14286" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Elena */}
                <div className="h-[32px] relative rounded-[4px] shrink-0 w-full cursor-pointer hover:bg-[#f6f7fb]">
                  <div className="flex flex-row items-center size-full">
                    <div className="flex gap-[8px] items-center p-[8px] relative size-full">
                      <div className="relative shrink-0" style={{ width: 28, height: 28, borderRadius: "34.67px", overflow: "hidden", background: "#fff", boxShadow: "-0.55px 0.366px 5.496px rgba(31,132,132,0.1)", backdropFilter: "blur(0.687px)" }}>
                        <img alt="" src={imgElenaAvatar} style={{ position: "absolute", width: 28, height: 28, left: 0, top: 0, borderRadius: "34.67px", objectFit: "cover" }} />
                      </div>
                      <div className="flex flex-[1_0_0] flex-col items-start overflow-clip text-[#323338] text-[12px] whitespace-nowrap">
                        <div className="flex flex-col font-['Figtree'] justify-center min-w-full overflow-hidden shrink-0" style={{ fontWeight: 600 }}>
                          <p className="leading-[16px] overflow-hidden">Elena</p>
                        </div>
                        <div className="flex flex-col font-['Figtree'] justify-center min-w-full overflow-hidden shrink-0">
                          <p className="leading-[16px] overflow-hidden">Vendor Shortlist</p>
                        </div>
                      </div>
                      <div className="absolute left-[30px] size-[8px] top-[24px]">
                        <div className="absolute inset-[-14.29%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2857 10.2857">
                            <circle cx="5.14286" cy="5.14286" fill="#00C875" r="4.57143" stroke="white" strokeWidth="1.14286" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom */}
          <div className="flex flex-col gap-[8px] shrink-0 w-full">
            <div className="flex items-center gap-[8px] h-[32px] px-[8px] rounded-[4px] cursor-pointer hover:bg-[#f6f7fb]">
              {KnowledgeIcon}
              <div className="flex flex-col font-['Figtree'] justify-center text-[#323338] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">knowladge base</p>
              </div>
            </div>
            <div className="flex items-center gap-[8px] h-[32px] px-[8px] rounded-[4px] cursor-pointer hover:bg-[#f6f7fb]">
              {FeedbackIcon}
              <div className="flex flex-col font-['Figtree'] justify-center text-[#323338] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">Give feedback</p>
              </div>
            </div>
          </div>
        </div>

      {/* Collapsed content */}
      <div className={`absolute inset-0 flex flex-col items-center transition-opacity duration-300 ${expanded ? 'opacity-0 pointer-events-none' : 'opacity-100 delay-100'}`}>
        <div className="flex flex-col gap-[8px] items-center px-[8px] py-[16px] size-full">
          {/* Hamburger */}
          <button className="flex items-center justify-center shrink-0 cursor-pointer size-[32px] rounded-[4px] hover:bg-[#f6f7fb]" onClick={onToggle}>
            {HamburgerIcon}
          </button>
          {/* New agent */}
          <button className="flex items-center justify-center rounded-[4px] shrink-0 size-[32px] cursor-pointer hover:bg-[#f6f7fb]" title="New agent">
            {EditIcon}
          </button>
          {/* My agents */}
          <button className="flex items-center justify-center rounded-[4px] shrink-0 size-[32px] cursor-pointer hover:bg-[#f6f7fb]" title="My agents">
            {PersonIcon}
          </button>
          {/* Agents work */}
          <button className="flex items-center justify-center rounded-[4px] shrink-0 size-[32px] cursor-pointer hover:bg-[#f6f7fb]" title="Agents work">
            {WorkIcon}
          </button>
          {/* Spacer */}
          <div className="flex-[1_0_0] w-full" />
          {/* Knowledge base */}
          <button className="flex items-center justify-center rounded-[4px] shrink-0 size-[32px] cursor-pointer hover:bg-[#f6f7fb]" title="Knowledge base">
            {KnowledgeIcon}
          </button>
          {/* Give feedback */}
          <button className="flex items-center justify-center rounded-[4px] shrink-0 size-[32px] cursor-pointer hover:bg-[#f6f7fb]" title="Give feedback">
            {FeedbackIcon}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────── Agent Card (suggestion row) ─────────────── */
interface AgentSuggestion {
  id: string;
  name: string;
  description: string;
  avatarImg: string;
  avatarBg: string;
  avatarStyle: React.CSSProperties;
  avatarWrapperStyle?: React.CSSProperties;
  renderType?: "nested" | "cover" | "flipped";
  nestedImgStyle?: React.CSSProperties;
  integrations: IntegrationType[];
}

// Map agent IDs to their avatar index in AgentConfig
const agentAvatarMap: Record<string, number> = {
  elena: 0,
  ron: 1,
  emma: 2,
  dani: 5,
};

// Map agent IDs to their expertise subtitle for the agent builder
const agentExpertiseMap: Record<string, string> = {
  elena: "Feedback Intelligence expert",
  ron: "Project Intelligence expert",
  emma: "Data Intelligence expert",
  dani: "Operations Automation expert",
};

const agentSuggestions: AgentSuggestion[] = [
  {
    id: "elena",
    name: "Elena",
    description: "I specialize in analyzing customer feedback to uncover sentiment, identify themes, and prioritiz...",
    avatarImg: imgSuggestElena,
    avatarBg: "transparent",
    avatarStyle: {},
    renderType: "cover",
    integrations: ["gmail", "monday"],
  },
  {
    id: "ron",
    name: "Ron",
    description: "I keep projects moving by tracking progress, flagging blockers, and making sure everyone stay...",
    avatarImg: imgSuggestRon,
    avatarBg: "transparent",
    avatarStyle: {},
    renderType: "cover",
    integrations: ["linkedin", "gmail"],
  },
  {
    id: "emma",
    name: "Emma",
    description: "I turn information and trends into clear insights so the team can make smarter decisions.",
    avatarImg: imgSuggestEmma,
    avatarBg: "transparent",
    avatarStyle: {},
    renderType: "cover",
    integrations: ["slack", "monday"],
  },
  {
    id: "dani",
    name: "Dani",
    description: "I take care of repetitive tasks and coordinate workflows so things happen at the right time.",
    avatarImg: imgSuggestDani,
    avatarBg: "transparent",
    avatarStyle: {},
    renderType: "cover",
    integrations: ["linkedin", "gmail", "monday"],
  },
];

function AgentSuggestionCard({ agent, onClick }: { agent: AgentSuggestion; onClick: () => void }) {
  return (
    <div
      className="group flex-[1_0_0] min-h-px min-w-[calc(50%-8px)] max-w-[calc(50%-8px)] relative rounded-[20px] cursor-pointer hover:bg-[#676879]/[0.04]"
      onClick={onClick}
    >
      <div className="flex flex-row items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[20px] items-center min-w-[inherit] pl-[8px] pr-[32px] py-[8px] relative w-full">
          {/* Avatar */}
          <div className="overflow-clip relative rounded-[14px] shrink-0 w-[104px] h-[148.571px]">
            <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={agent.avatarImg} />
          </div>
          {/* Text content */}
          <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch">
            <div className="flex flex-col items-start justify-between py-[8px] size-full">
              <div className="flex flex-col gap-[8px] items-start w-full">
                <div className="flex flex-col font-['Figtree'] justify-end text-[#1c1c1c] text-[16px] w-full" style={{ fontWeight: 600 }}>
                  <p className="leading-[1.55]">
                    {agent.name}
                  </p>
                </div>
                <div className="flex flex-col font-['Figtree'] justify-end overflow-hidden text-[#676879] text-[14px] text-ellipsis w-full" style={{ fontWeight: 500 }}>
                  <p className="leading-[1.55] line-clamp-2">
                    {agent.description}
                  </p>
                </div>
              </div>
              <IntegrationApps integrations={agent.integrations} />
            </div>
          </div>
        </div>
      </div>
      {/* Start onboarding button - revealed on hover */}
      <div className="absolute bottom-[16px] right-[16px] flex h-[32px] items-center justify-center px-[8px] rounded-[6px] opacity-0 translate-x-[8px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 ease-out z-[1]">
        <div aria-hidden="true" className="absolute border border-[#c3c6d4] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <span className="font-['Figtree'] text-[14px] text-[#323338] whitespace-nowrap" style={{ fontWeight: 400, lineHeight: '20px' }}>Start onboarding</span>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(18,18,18,0.12)] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

/* ─────────────── Explore Agent Card ─────────────── */
interface ExploreAgent {
  id: string;
  name: string;
  description: string;
  avatarImg: string;
  avatarBg: string;
  renderType: "nested" | "cover" | "flipped";
  avatarWrapperStyle?: React.CSSProperties;
  nestedImgStyle?: React.CSSProperties;
}

const exploreAgents: ExploreAgent[] = [
  {
    id: "emma2",
    name: "Emma",
    description: "I turn information and trends into clear insights so the team can make smarter decisions.",
    avatarImg: imgExploreEmma2,
    avatarBg: "transparent",
    renderType: "cover",
  },
  {
    id: "dani2",
    name: "Dani",
    description: "I take care of repetitive tasks and coordinate workflows so things happen at the right time.",
    avatarImg: imgExploreDani2,
    avatarBg: "transparent",
    renderType: "cover",
  },
  {
    id: "ron2",
    name: "Ron",
    description: "I keep projects moving by tracking progress, flagging blockers, and making sure everyone stays aligned.",
    avatarImg: imgExploreRon2,
    avatarBg: "transparent",
    renderType: "cover",
  },
  {
    id: "dani3",
    name: "Dani",
    description: "I take care of repetitive tasks and coordinate workflows so things happen at the right time.",
    avatarImg: imgExploreDani3,
    avatarBg: "transparent",
    renderType: "cover",
  },
  {
    id: "dani4",
    name: "Dani",
    description: "I take care of repetitive tasks and coordinate workflows so things happen at the right time.",
    avatarImg: imgExploreDani4,
    avatarBg: "transparent",
    renderType: "cover",
  },
  {
    id: "elena2",
    name: "Elena",
    description: "I specialize in analyzing customer feedback to uncover sentiment, identify themes, and prioritize what the team should act on.",
    avatarImg: imgExploreElena2,
    avatarBg: "transparent",
    renderType: "cover",
  },
];

function ExploreAgentCard({ agent, onClick }: { agent: ExploreAgent; onClick: () => void }) {
  return (
    <div
      className="min-h-px relative rounded-[20px] cursor-pointer hover:bg-[#676879]/[0.04]"
      onClick={onClick}
    >
      <div className="flex flex-row items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center min-w-[inherit] pl-[8px] pr-[32px] py-[8px] relative w-full">
          {/* Avatar */}
          <div className="overflow-clip relative rounded-[12px] shrink-0 w-[72px] h-[102.857px]">
            <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={agent.avatarImg} />
          </div>
          {/* Text */}
          <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch">
            <div className="flex flex-col items-start justify-between py-[8px] size-full">
              <div className="flex flex-col gap-[8px] items-start w-full">
                <div className="flex flex-col font-['Figtree'] justify-end text-[#1c1c1c] text-[16px] w-full" style={{ fontWeight: 600 }}>
                  <p className="leading-[1.55]">{agent.name}</p>
                </div>
                <div className="flex flex-col font-['Figtree'] justify-end overflow-hidden text-[#676879] text-[14px] text-ellipsis w-full" style={{ fontWeight: 500 }}>
                  <p className="leading-[1.55] line-clamp-2">{agent.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(18,18,18,0.12)] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

/* ─────────────── Main Content ─────────────── */
function MainContent() {
  const navigate = useNavigate();
  const [promptText, setPromptText] = useState("");
  const promptInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    promptInputRef.current?.focus();
  }, []);

  return (
    <div className="bg-white h-full relative flex-[1_0_0] min-w-0">
      <div className="flex flex-col items-center size-full overflow-y-auto">
        <div className="flex flex-col gap-[46px] items-center px-[72px] py-[84px] relative w-full max-w-[1200px]">

          {/* Title + Prompt Box */}
          <div className="flex flex-col gap-[32px] items-center shrink-0 w-[547px] max-w-full">
            <div className="flex flex-col font-['Poppins'] justify-center text-[#323338] text-[24px] text-center tracking-[-0.12px] whitespace-nowrap">
              <p className="leading-none" dir="auto">
                Design your team's next teammate
              </p>
            </div>

            {/* Prompt Box */}
            <div className="h-[144px] relative shrink-0 w-full">
              {/* Glow border */}
              <div className="absolute inset-[-6px] rounded-[22px] blur-[8px] pointer-events-none" style={{ background: 'linear-gradient(270deg, #9350FC 0%, #1170FD 50%, #03F6FA 100%)', opacity: 0.55 }} />
              {/* Field */}
              <div className="absolute bg-white flex flex-col inset-0 items-start justify-between p-[16px] rounded-[16px]">
                <div aria-hidden="true" className="absolute inset-[-1px] pointer-events-none rounded-[17px]" style={{ padding: '1px', background: 'linear-gradient(90deg, #04F7FB 0%, #0074FD 47.99%, #9450FD 100%)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />

                <div className="flex items-center shrink-0 w-full">
                  <input
                    ref={promptInputRef}
                    autoFocus
                    type="text"
                    value={promptText}
                    onChange={(e) => setPromptText(e.target.value)}
                    placeholder="What do you want agents to handle for you?"
                    className="font-['Figtree'] leading-[22px] text-[#323338] text-[16px] bg-transparent outline-none w-full placeholder:text-[rgba(50,51,56,0.38)]"
                  />
                </div>
                {/* Footer */}
                <div className="flex gap-[12px] items-center shrink-0 w-full">
                  <div className="flex items-center shrink-0">
                    <button
                      className="bg-[#f6f7fb] flex gap-[8px] items-center justify-center rounded-[4px] shrink-0 size-[24px] cursor-pointer hover:bg-[#e6e9f0] transition-colors"
                      onClick={() => setPromptText(promptText ? promptText : "Help me ")}
                    >
                      <div className="overflow-clip relative shrink-0 size-[16px]">
                        <div className="absolute inset-[11.25%]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4 12.4">
                            <path clipRule="evenodd" d={svgPaths.p225c1f00} fill="#323338" fillRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="flex-[1_0_0] h-[14px]" />
                  <button
                    disabled={!promptText.trim()}
                    onClick={() => {
                      if (promptText.trim()) {
                        navigate("/configure", { state: { expertise: promptText.trim() } });
                      }
                    }}
                    className={`flex h-[32px] items-center justify-center px-[8px] rounded-[8px] shrink-0 transition-all ${
                      promptText.trim()
                        ? "bg-[#323338] cursor-pointer hover:bg-[#222] active:bg-[#111]"
                        : "bg-[rgba(50,51,56,0.38)] opacity-50 cursor-default"
                    }`}
                  >
                    <span className={`font-['Figtree'] text-[14px] leading-[20px] whitespace-nowrap ${
                      promptText.trim() ? "text-white" : "text-[#ecedf5]"
                    }`}>
                      Build agent
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Agent Suggestions */}
          <div className="flex flex-col gap-[25px] items-center pt-[32px] shrink-0 w-full">
            {/* Title */}
            <div className="flex gap-[5px] items-center shrink-0 w-full flex-wrap">
              <p className="font-['Poppins'] leading-none text-[#676879] text-[16px] tracking-[-0.08px] whitespace-nowrap">
                Agent suggestions tailored to your
              </p>
              <div className="flex flex-col gap-[2px] items-start justify-center shrink-0">
                <p className="font-['Poppins'] leading-none text-[#323338] text-[16px] tracking-[-0.08px] whitespace-nowrap">
                  HR
                </p>
                <div className="h-0 relative shrink-0 w-full">
                  <div className="absolute inset-[-0.52px_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 1.05">
                      <path d="M0 0.525H21" stroke="#323338" strokeWidth="1.05" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Poppins'] leading-none text-[#676879] text-[16px] tracking-[-0.08px] whitespace-nowrap">
                team at
              </p>
              <div className="flex flex-col gap-[2px] items-start justify-center shrink-0">
                <p className="font-['Poppins'] leading-none text-[#323338] text-[16px] tracking-[-0.08px] whitespace-nowrap">
                  monday.com
                </p>
                <div className="h-0 relative shrink-0 w-full">
                  <div className="absolute inset-[-0.52px_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 107 1.05">
                      <path d="M0 0.525H107" stroke="#323338" strokeWidth="1.05" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Agent Cards Grid */}
            <div className="content-start flex flex-wrap gap-[16px] items-start shrink-0 w-full">
              {agentSuggestions.map((agent) => (
                <AgentSuggestionCard
                  key={agent.id}
                  agent={agent}
                  onClick={() => navigate("/configure", {
                    state: {
                      avatarIndex: agentAvatarMap[agent.id] ?? 0,
                      name: agent.name,
                      expertise: agentExpertiseMap[agent.id] ?? agent.description,
                    },
                  })}
                />
              ))}
            </div>
          </div>

          {/* Explore More Agents */}
          <div className="flex flex-col gap-[25px] items-center shrink-0 w-full">
            <div className="shrink-0 w-full">
              <div className="flex items-center size-full">
                <div className="flex items-center px-[8px] w-full">
                  <p className="font-['Poppins'] leading-none text-[#676879] text-[16px] tracking-[-0.08px] whitespace-nowrap">
                    Explore more agents
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-[16px] shrink-0 w-full">
              {exploreAgents.map((agent) => (
                <ExploreAgentCard
                  key={agent.id}
                  agent={agent}
                  onClick={() => navigate("/configure")}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────── Dashboard Root ─────────────── */
export function Dashboard() {
  const navigate = useNavigate();
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && sidebarExpanded) setSidebarExpanded(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [sidebarExpanded]);

  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ backgroundImage: "linear-gradient(90deg, rgb(236, 239, 248) 0%, rgb(236, 239, 248) 100%)" }}>
      <div className="flex flex-col items-start size-full">
        <MondayHeader />
        <div className="flex-[1_0_0] min-h-0 w-full">
          <div className="flex flex-col items-start pl-[12px] size-full">
            <div className="bg-white flex flex-[1_0_0] items-start min-h-0 overflow-clip rounded-tl-[12px] w-full">
              <LeftSidebar />
              <div className="flex flex-[1_0_0] h-full items-start min-w-0 overflow-clip relative">
                <div aria-hidden="true" className="absolute border-[#d0d4e4] border-l border-solid border-t inset-0 pointer-events-none rounded-tl-[12px] z-10" />
                {/* Start from scratch */}
                <div className="absolute flex gap-[8px] h-[32px] items-center justify-center px-[8px] right-[20px] rounded-[4px] top-[20px] z-20 cursor-pointer hover:bg-[#f6f7fb] transition-colors"
                  onClick={() => navigate("/configure")}
                >
                  <div className="overflow-clip relative shrink-0 size-[20px]">
                    <div className="absolute inset-[26.25%]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 9.5">
                        <path clipRule="evenodd" d={svgPaths.p892e440} fill="#323338" fillRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Figtree'] justify-center text-[#323338] text-[14px] whitespace-nowrap">
                    <p className="leading-[20px]">Start from scratch</p>
                  </div>
                </div>
                <MiniSidebar expanded={sidebarExpanded} onToggle={() => setSidebarExpanded(e => !e)} />
                <MainContent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
