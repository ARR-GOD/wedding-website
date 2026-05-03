"use client";

// Hand-drawn line illustrations for each ceremony, ported from the design.
// Style: thin line art (henna brown), accents in marigold gold + sindoor red,
// each piece is framed by a delicate paisley/mandala border on cream.

import { ReactNode } from "react";

const CER_INK = "var(--henna-500, #7A4A21)";
const CER_INK_2 = "var(--henna-700, #4E2E12)";
const CER_GOLD = "var(--marigold-400, #E89414)";
const CER_GOLD_SOFT = "rgba(232,148,20,0.55)";
const CER_RED = "var(--sindoor-500, #B23A2E)";

function CerFrame({ children }: { children: ReactNode }) {
  const corner = (transform: string) => (
    <g transform={transform} fill="none" stroke={CER_GOLD} strokeWidth="0.8" strokeLinecap="round">
      <path d="M0 0 C 8 -2, 18 4, 22 14 C 24 22, 18 28, 12 26 C 7 24, 5 18, 9 14 C 12 11, 16 12, 17 16"/>
      <circle cx="9" cy="14" r="1.2" fill={CER_GOLD}/>
      <path d="M-2 -2 L 2 2"/>
    </g>
  );
  return (
    <svg viewBox="0 0 360 360" width="100%" preserveAspectRatio="xMidYMid meet" style={{ display: "block" }}>
      <rect x="14" y="14" width="332" height="332" fill="none" stroke={CER_GOLD_SOFT} strokeWidth="0.8"/>
      <rect x="20" y="20" width="320" height="320" fill="none" stroke={CER_GOLD_SOFT} strokeWidth="0.6" strokeDasharray="2 4"/>
      {corner("translate(28 28)")}
      {corner("translate(332 28) scale(-1 1)")}
      {corner("translate(28 332) scale(1 -1)")}
      {corner("translate(332 332) scale(-1 -1)")}
      <g>{children}</g>
    </svg>
  );
}

function CerGanesh() {
  return (
    <CerFrame>
      <g transform="translate(180 200)">
        <g transform="translate(0 -90)" fill="none" stroke={CER_RED} strokeWidth="1.4" strokeLinecap="round">
          <path d="M-14 0 C -14 -10, -4 -14, 2 -10 C 8 -6, 8 4, 0 8 C -6 12, -16 6, -14 0 Z M 0 -6 C 6 -8, 12 -2, 8 4 C 4 9, -2 7, -2 2"/>
          <path d="M 8 -14 Q 14 -16, 18 -10"/>
          <circle cx="20" cy="-18" r="1.6" fill={CER_RED}/>
        </g>
        <path d="M-50 0 Q 0 26, 50 0 L 42 14 Q 0 32, -42 14 Z" fill={CER_GOLD} opacity="0.18" stroke={CER_INK_2} strokeWidth="1.2"/>
        <path d="M-50 0 Q 0 -8, 50 0" fill="none" stroke={CER_INK_2} strokeWidth="1.2"/>
        <path d="M-44 7 L 44 7" stroke={CER_GOLD} strokeWidth="0.6" strokeDasharray="2 3"/>
        <path d="M-46 -2 L -52 -10" stroke={CER_INK_2} strokeWidth="1"/>
        <path d="M-52 -10 C -56 -22, -48 -34, -50 -46 C -44 -38, -42 -22, -52 -10 Z" fill={CER_RED} opacity="0.5" stroke={CER_RED} strokeWidth="1"/>
        <path d="M-52 -14 C -54 -22, -50 -28, -50 -36" stroke={CER_GOLD} strokeWidth="0.8" fill="none"/>
        <g transform="translate(0 22)">
          {[-3, -2, -1, 0, 1, 2, 3].map((i) => (
            <path key={i} d={`M${i*12} 0 Q ${i*12} -10, ${i*12 + 4} -16 Q ${i*12 + 8} -10, ${i*12} 0 Z`} fill="none" stroke={CER_INK} strokeWidth="0.9"/>
          ))}
          <path d="M-46 0 Q 0 4, 46 0" stroke={CER_INK} strokeWidth="1" fill="none"/>
        </g>
        <g stroke={CER_GOLD} strokeWidth="0.8" fill={CER_GOLD}>
          <path d="M-80 -50 l 0 6 M-83 -47 l 6 0"/>
          <path d="M70 -60 l 0 5 M67.5 -57.5 l 5 0"/>
          <circle cx="-90" cy="-20" r="1"/>
          <circle cx="80" cy="-30" r="1"/>
        </g>
      </g>
    </CerFrame>
  );
}

function CerMehendi() {
  return (
    <CerFrame>
      <g transform="translate(180 200)">
        <g fill="none" stroke={CER_INK_2} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M-44 60 L -44 -10 Q -44 -22, -34 -22 Q -28 -22, -28 -12 L -28 -38 Q -28 -50, -18 -50 Q -10 -50, -10 -40 L -10 -56 Q -10 -68, 0 -68 Q 8 -68, 8 -56 L 8 -42 Q 8 -54, 18 -54 Q 26 -54, 26 -44 L 26 -16 Q 26 -28, 36 -28 Q 44 -28, 44 -16 L 44 24 Q 44 42, 36 56 L 36 60 Z"/>
        </g>
        <g fill="none" stroke={CER_RED} strokeWidth="0.9" strokeLinecap="round">
          <circle cx="0" cy="14" r="6"/>
          <circle cx="0" cy="14" r="2.5" fill={CER_RED}/>
          {[0, 60, 120, 180, 240, 300].map(a => (
            <path key={a} d={`M0 14 L ${Math.cos(a*Math.PI/180)*14} ${14 + Math.sin(a*Math.PI/180)*14}`} transform={`rotate(${a} 0 14)`}/>
          ))}
          {[0, 60, 120, 180, 240, 300].map(a => (
            <ellipse key={'p'+a} cx="0" cy="-2" rx="3" ry="6" transform={`rotate(${a} 0 14) translate(0 16)`}/>
          ))}
          <path d="M-32 -10 q 4 -6, 0 -14 q -6 4, 0 14 Z"/>
          <path d="M-14 -32 q 4 -8, 0 -16"/>
          <circle cx="-14" cy="-46" r="1.2" fill={CER_RED}/>
          <path d="M2 -38 q 4 -10, 0 -22"/>
          <circle cx="2" cy="-58" r="1.2" fill={CER_RED}/>
          <path d="M18 -32 q 4 -8, 0 -16"/>
          <path d="M34 -10 q 4 -6, 0 -12"/>
          <g fill={CER_RED}>
            {[-30, -20, -10, 0, 10, 20, 30].map(x => <circle key={x} cx={x} cy="50" r="1"/>)}
          </g>
          <path d="M-22 28 Q -10 36, 4 32"/>
          <path d="M22 28 Q 14 36, 4 32"/>
        </g>
      </g>
    </CerFrame>
  );
}

function CerSangeet() {
  return (
    <CerFrame>
      <g transform="translate(180 200)" fill="none" stroke={CER_INK_2} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="0" cy="0" rx="32" ry="14" fill={CER_GOLD} fillOpacity="0.18"/>
        <path d="M-32 0 L -32 28 Q 0 38, 32 28 L 32 0"/>
        <ellipse cx="0" cy="28" rx="32" ry="10"/>
        {[-24, -8, 8, 24].map(x => (
          <path key={x} d={`M${x} 0 L ${x*0.92} 28`} strokeWidth="0.7" stroke={CER_GOLD}/>
        ))}
        <path d="M-32 14 L 32 14" strokeDasharray="1 3" strokeWidth="0.6" stroke={CER_GOLD}/>
        <g transform="translate(-90 -8)">
          <circle cx="0" cy="-30" r="8"/>
          <path d="M-8 -30 Q -18 -10, -10 10" stroke={CER_RED}/>
          <path d="M0 -22 L 0 8 L -10 28 M0 8 L 8 24"/>
          <path d="M0 -16 L -16 -32 L -10 -42"/>
          <path d="M0 -16 L 16 -10"/>
          <path d="M-12 28 Q 0 34, 12 28 L 16 12 L -10 12 Z" fill={CER_RED} fillOpacity="0.16"/>
        </g>
        <g transform="translate(90 -8)">
          <circle cx="0" cy="-30" r="8"/>
          <path d="M0 -22 L 0 8 L 10 28 M0 8 L -8 24"/>
          <path d="M0 -16 L 18 -28 L 24 -36"/>
          <path d="M0 -16 L -16 -10"/>
          <path d="M-12 28 Q 0 34, 12 28 L 12 12 L -16 12 Z" fill={CER_GOLD} fillOpacity="0.18"/>
        </g>
        <g stroke={CER_GOLD} strokeWidth="1">
          <path d="M-100 -70 l 0 -22 q 4 -2, 6 0 l 0 16"/>
          <ellipse cx="-103" cy="-70" rx="3.5" ry="2.4" fill={CER_GOLD}/>
          <path d="M100 -56 l 0 -22 q 4 -2, 6 0 l 0 16"/>
          <ellipse cx="97" cy="-56" rx="3.5" ry="2.4" fill={CER_GOLD}/>
          <circle cx="0" cy="-90" r="1.5" fill={CER_GOLD}/>
        </g>
      </g>
    </CerFrame>
  );
}

function CerHaldi() {
  return (
    <CerFrame>
      <g transform="translate(180 200)" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M-50 0 Q -56 28, -42 50 Q 0 62, 42 50 Q 56 28, 50 0 Z" fill={CER_GOLD} fillOpacity="0.28" stroke={CER_INK_2} strokeWidth="1.3"/>
        <ellipse cx="0" cy="0" rx="50" ry="10" fill={CER_GOLD} fillOpacity="0.45" stroke={CER_INK_2} strokeWidth="1.2"/>
        <ellipse cx="0" cy="-2" rx="38" ry="6" fill="none" stroke={CER_INK_2} strokeWidth="1"/>
        <path d="M-46 18 Q 0 24, 46 18" stroke={CER_RED} strokeWidth="1.2" fill="none"/>
        <g fill={CER_RED}>
          {[-32, -16, 0, 16, 32].map(x => <circle key={x} cx={x} cy="34" r="1.6"/>)}
        </g>
        <path d="M-44 44 Q 0 50, 44 44" stroke={CER_GOLD} strokeWidth="0.8" strokeDasharray="2 3" fill="none"/>
        <path d="M-30 -2 Q -20 -16, -8 -10 Q 4 -20, 18 -12 Q 28 -16, 32 -2" fill={CER_GOLD} stroke={CER_INK_2} strokeWidth="1"/>
        {[-32, -16, 0, 16, 32].map((x, i) => (
          <g key={i} transform={`translate(${x} -8)`}>
            <path d="M0 0 Q -4 -10, 0 -20 Q 4 -10, 0 0 Z" fill={CER_GOLD} fillOpacity="0.35" stroke={CER_INK} strokeWidth="0.9"/>
            <path d="M0 -2 L 0 -18" stroke={CER_INK} strokeWidth="0.6"/>
          </g>
        ))}
        <g fill={CER_GOLD}>
          <circle cx="-78" cy="-18" r="2.2"/>
          <circle cx="-90" cy="6" r="1.6"/>
          <circle cx="80" cy="-22" r="2"/>
          <circle cx="92" cy="0" r="1.4"/>
          <circle cx="70" cy="-44" r="1.8"/>
        </g>
        <g stroke={CER_GOLD} strokeWidth="1">
          <path d="M-72 -34 q -8 6, -10 14"/>
          <path d="M76 -38 q 8 6, 10 14"/>
        </g>
      </g>
    </CerFrame>
  );
}

function CerSafa() {
  return (
    <CerFrame>
      <g transform="translate(180 196)" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="0" cy="38" rx="32" ry="38" fill={CER_GOLD} fillOpacity="0.08" stroke={CER_INK_2} strokeWidth="1.1"/>
        <path d="M-44 6 Q 0 -34, 44 6 Q 36 18, 0 14 Q -36 18, -44 6 Z" fill={CER_RED} fillOpacity="0.25" stroke={CER_INK_2} strokeWidth="1.2"/>
        <path d="M-42 -2 Q -32 -22, -8 -16" stroke={CER_INK_2} strokeWidth="1.1"/>
        <path d="M42 -2 Q 32 -22, 8 -16" stroke={CER_INK_2} strokeWidth="1.1"/>
        <path d="M-30 4 Q 0 -16, 30 4" stroke={CER_INK_2} strokeWidth="0.9"/>
        <path d="M-20 8 Q 0 -6, 20 8" stroke={CER_INK} strokeWidth="0.8"/>
        <path d="M-6 -28 L 0 -44 L 6 -28 Z" fill={CER_GOLD} stroke={CER_INK_2} strokeWidth="0.9"/>
        <circle cx="0" cy="-26" r="3" fill={CER_RED} stroke={CER_INK_2} strokeWidth="0.6"/>
        <path d="M0 -44 L 0 -56" stroke={CER_GOLD} strokeWidth="1"/>
        <circle cx="0" cy="-58" r="1.5" fill={CER_GOLD}/>
        <path d="M40 4 Q 70 22, 76 56 Q 80 84, 64 100" stroke={CER_RED} strokeWidth="1.3" fill="none"/>
        <path d="M44 0 Q 76 18, 84 54 Q 88 84, 70 104" stroke={CER_GOLD} strokeWidth="0.8" fill="none" strokeDasharray="3 3"/>
        <g stroke={CER_RED} strokeWidth="0.8">
          <path d="M64 100 l -2 8"/>
          <path d="M68 102 l 0 8"/>
          <path d="M72 100 l 2 8"/>
        </g>
        <g stroke={CER_GOLD} strokeWidth="0.7" strokeDasharray="2 2">
          <path d="M-30 0 Q -26 -10, -16 -12"/>
          <path d="M-14 -2 Q -10 -16, 2 -16"/>
          <path d="M14 -2 Q 12 -14, 0 -16"/>
        </g>
      </g>
    </CerFrame>
  );
}

function CerBaraat() {
  return (
    <CerFrame>
      <g transform="translate(180 210)" fill="none" stroke={CER_INK_2} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M-130 64 L 130 64" stroke={CER_GOLD} strokeWidth="0.6" strokeDasharray="2 4"/>
        <g>
          <path d="M-66 24 Q -66 4, -50 0 L 36 0 Q 56 0, 56 22 L 56 32 Q 50 36, 44 32 L 44 26 L 36 26 L 36 64 L 26 64 L 26 26 L -28 26 L -28 64 L -38 64 L -38 26 L -50 26 L -50 64 L -60 64 L -60 26 Q -68 26, -66 24 Z"
                fill={CER_GOLD} fillOpacity="0.18"/>
          <path d="M56 22 L 76 -10 Q 84 -16, 90 -10 L 88 -2 L 80 2 L 76 14 Q 70 22, 56 22"/>
          <circle cx="86" cy="-10" r="1.2" fill={CER_INK_2}/>
          <path d="M82 -16 L 80 -22 L 86 -18 Z" fill={CER_INK_2} fillOpacity="0.35"/>
          <path d="M58 8 Q 50 -2, 56 -10 Q 62 -2, 60 6"/>
          <path d="M50 14 Q 42 4, 48 -2 Q 54 4, 52 12"/>
          <path d="M-66 16 Q -86 18, -94 36 Q -90 26, -82 26"/>
          <path d="M-22 -2 L 28 -2 L 32 -14 L -26 -14 Z" fill={CER_RED} fillOpacity="0.35"/>
          <path d="M-20 -8 L 30 -8" stroke={CER_GOLD} strokeWidth="0.7" strokeDasharray="2 2"/>
          <g stroke={CER_GOLD} strokeWidth="0.8">
            {[-18, -8, 2, 12, 22, 28].map(x => <path key={x} d={`M${x} -2 l 0 6`}/>)}
          </g>
        </g>
        <g transform="translate(0 -28)">
          <circle cx="0" cy="0" r="10" fill={CER_GOLD} fillOpacity="0.2"/>
          <path d="M-12 -4 Q 0 -22, 12 -4 Q 6 4, 0 2 Q -6 4, -12 -4 Z" fill={CER_RED} fillOpacity="0.4"/>
          <path d="M0 -22 L 0 -30" stroke={CER_GOLD}/>
          <circle cx="0" cy="-32" r="1.4" fill={CER_GOLD}/>
          <path d="M0 8 L 0 28 M -8 16 L -16 14 M 8 16 L 16 14"/>
        </g>
        <path d="M-30 2 Q -30 16, -22 22" stroke={CER_GOLD} strokeWidth="0.8"/>
        <g fill={CER_GOLD}>
          <circle cx="-30" cy="6" r="1.4"/>
          <circle cx="-30" cy="14" r="1.4"/>
          <circle cx="-28" cy="20" r="1.4"/>
        </g>
      </g>
    </CerFrame>
  );
}

function CerPheras() {
  return (
    <CerFrame>
      <g transform="translate(180 196)" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {[68, 60, 52, 44, 36, 28, 20].map((r, i) => (
          <circle key={i} cx="0" cy="14" r={r} stroke={CER_GOLD_SOFT} strokeWidth={i === 0 ? 1 : 0.6} strokeDasharray={i % 2 === 0 ? "2 4" : "0"} fill="none"/>
        ))}
        <path d="M-30 30 L 30 30 L 26 50 L -26 50 Z" fill={CER_INK_2} fillOpacity="0.15" stroke={CER_INK_2} strokeWidth="1.2"/>
        <path d="M-30 30 L 30 30" stroke={CER_INK_2} strokeWidth="1.4"/>
        <path d="M-22 30 L -22 38 L 22 38 L 22 30" stroke={CER_INK} strokeWidth="0.7" fill="none"/>
        <path d="M-26 34 L 26 34" stroke={CER_GOLD} strokeWidth="0.6" strokeDasharray="2 2"/>
        <g fill={CER_RED} fillOpacity="0.55" stroke={CER_RED} strokeWidth="1">
          <path d="M-16 30 C -22 14, -10 4, -8 -8 C -2 6, -10 18, -16 30 Z"/>
          <path d="M0 30 C -8 10, 4 -6, 6 -22 C 14 -4, 6 14, 0 30 Z"/>
          <path d="M16 30 C 10 14, 22 4, 24 -8 C 30 6, 22 18, 16 30 Z"/>
        </g>
        <g fill={CER_GOLD} stroke="none">
          <path d="M-12 26 C -16 14, -8 6, -6 -2 C -2 8, -8 18, -12 26 Z" opacity="0.7"/>
          <path d="M2 24 C -4 8, 6 -8, 8 -18 C 14 -2, 8 14, 2 24 Z" opacity="0.6"/>
          <path d="M14 26 C 8 14, 18 6, 20 -4 C 24 8, 18 18, 14 26 Z" opacity="0.7"/>
        </g>
        <g fill={CER_RED}>
          {[0, 1, 2, 3, 4, 5, 6].map(i => {
            const a = -90 + i * (360 / 7);
            const x = Math.cos(a * Math.PI / 180) * 76;
            const y = 14 + Math.sin(a * Math.PI / 180) * 76;
            return <circle key={i} cx={x} cy={y} r="2"/>;
          })}
        </g>
      </g>
    </CerFrame>
  );
}

function CerReception() {
  return (
    <CerFrame>
      <g transform="translate(180 200)" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M-36 -40 L 36 -40 Q 28 -10, 6 0 L 6 40 L 22 50 L -22 50 L -6 40 L -6 0 Q -28 -10, -36 -40 Z" fill={CER_GOLD} fillOpacity="0.18" stroke={CER_INK_2} strokeWidth="1.3"/>
        <path d="M-32 -38 L 32 -38" stroke={CER_GOLD} strokeWidth="0.6"/>
        <g fill={CER_GOLD} stroke="none">
          <circle cx="-12" cy="-22" r="1.6"/>
          <circle cx="6" cy="-28" r="1.2"/>
          <circle cx="14" cy="-20" r="1"/>
          <circle cx="-4" cy="-12" r="1.8"/>
          <circle cx="-18" cy="-30" r="1"/>
        </g>
        <g stroke={CER_GOLD} strokeWidth="0.9" fill={CER_GOLD}>
          <g transform="translate(-72 -68)"><path d="M0 -8 L 2 -2 L 8 0 L 2 2 L 0 8 L -2 2 L -8 0 L -2 -2 Z"/></g>
          <g transform="translate(80 -52)"><path d="M0 -6 L 1.5 -1.5 L 6 0 L 1.5 1.5 L 0 6 L -1.5 1.5 L -6 0 L -1.5 -1.5 Z"/></g>
          <g transform="translate(-90 30)"><path d="M0 -4 L 1 -1 L 4 0 L 1 1 L 0 4 L -1 1 L -4 0 L -1 -1 Z"/></g>
          <g transform="translate(90 60)"><path d="M0 -5 L 1.2 -1.2 L 5 0 L 1.2 1.2 L 0 5 L -1.2 1.2 L -5 0 L -1.2 -1.2 Z"/></g>
        </g>
        <g stroke={CER_RED} strokeWidth="1">
          <path d="M-50 -56 l 6 -6"/>
          <path d="M-50 -50 l 6 0"/>
          <path d="M50 -56 l -6 -6"/>
          <path d="M50 -50 l -6 0"/>
        </g>
        <path d="M-60 60 Q 0 78, 60 60" stroke={CER_RED} strokeWidth="1" fill="none"/>
        <g fill={CER_RED}>
          <circle cx="-46" cy="66" r="1.4"/>
          <circle cx="-22" cy="74" r="1.4"/>
          <circle cx="0" cy="76" r="1.4"/>
          <circle cx="22" cy="74" r="1.4"/>
          <circle cx="46" cy="66" r="1.4"/>
        </g>
      </g>
    </CerFrame>
  );
}

const CEREMONY_ILLUSTRATIONS: Record<string, () => ReactNode> = {
  "Ganesh Puja": CerGanesh,
  "Mehendi": CerMehendi,
  "Sangeet": CerSangeet,
  "Haldi": CerHaldi,
  "Safa Tying": CerSafa,
  "Safa": CerSafa,
  "Baraat": CerBaraat,
  "Pheras": CerPheras,
  "Reception": CerReception,
  "Réception": CerReception,
};

export default function CeremonyIllustration({ name }: { name: string }) {
  const Comp = CEREMONY_ILLUSTRATIONS[name] || CerGanesh;
  return <Comp/>;
}
