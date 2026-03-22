import type { Plugin } from "vite";
import fs from "fs";
import path from "path";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

const AVATAR_FILES = [
  "Sharing image=01.png", "Sharing image=02.png", "Sharing image=03.png", "Sharing image=04.png",
  "Sharing image=05.png", "Sharing image=06.png", "Sharing image=07.png", "Sharing image=08.png",
  "Sharing image=09.png", "Sharing image=10.png", "Sharing image=11.png", "Sharing image=12.png",
];

let fontDataCache: ArrayBuffer | null = null;

async function loadFont(): Promise<ArrayBuffer> {
  if (fontDataCache) return fontDataCache;
  const res = await fetch(
    "https://fonts.gstatic.com/s/figtree/v9/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_d_QF5e.ttf"
  );
  fontDataCache = await res.arrayBuffer();
  return fontDataCache;
}

let fontBoldCache: ArrayBuffer | null = null;

async function loadFontBold(): Promise<ArrayBuffer> {
  if (fontBoldCache) return fontBoldCache;
  const res = await fetch(
    "https://fonts.gstatic.com/s/figtree/v9/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_ehR15e.ttf"
  );
  fontBoldCache = await res.arrayBuffer();
  return fontBoldCache;
}

function loadAvatarAsDataUrl(assetsDir: string, index: number): string {
  const file = AVATAR_FILES[index] ?? AVATAR_FILES[0];
  const filePath = path.join(assetsDir, file);
  if (!fs.existsSync(filePath)) return "";
  const buf = fs.readFileSync(filePath);
  return `data:image/png;base64,${buf.toString("base64")}`;
}

function generateDots(
  width: number,
  height: number,
  spacing: number,
  radius: number,
  color: string,
): Record<string, unknown>[] {
  const cols = Math.ceil(width / spacing) + 1;
  const rows = Math.ceil(height / spacing) + 1;
  const offsetX = (width - (cols - 1) * spacing) / 2;
  const offsetY = (height - (rows - 1) * spacing) / 2;
  const cx = width / 2;
  const cy = height / 2;

  const dots: Record<string, unknown>[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = offsetX + c * spacing;
      const y = offsetY + r * spacing;
      const dx = (x - cx) / (width * 0.7);
      const dy = (y - cy) / (height * 0.65);
      const dist = Math.sqrt(dx * dx + dy * dy);
      const opacity = dist < 0.6 ? 1 : Math.max(0, 1 - (dist - 0.6) / 0.4);
      if (opacity <= 0.05) continue;

      dots.push({
        type: "div",
        props: {
          style: {
            position: "absolute" as const,
            left: x - radius,
            top: y - radius,
            width: radius * 2,
            height: radius * 2,
            borderRadius: "50%",
            backgroundColor: color,
            opacity,
          },
        },
      });
    }
  }
  return dots;
}

function buildCardMarkup(
  name: string,
  desc: string,
  color: string,
  avatarDataUrl: string,
): Record<string, unknown> {
  const bgColor = color === "#FFFFFF" || !color ? "#f6f7fb" : color;
  const dots = generateDots(OG_WIDTH, OG_HEIGHT, 36, 1.5, "#D0D4E4");

  return {
    type: "div",
    props: {
      style: {
        width: `${OG_WIDTH}px`,
        height: `${OG_HEIGHT}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f0f1f5 0%, #e4e6ee 100%)",
        fontFamily: "Figtree",
        position: "relative" as const,
      },
      children: [
        ...dots,
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              flexDirection: "column",
              background: "white",
              borderRadius: "40px",
              padding: "28px",
              width: "520px",
              gap: "20px",
              boxShadow: "0px 16px 48px rgba(0,0,0,0.14)",
              position: "relative" as const,
              zIndex: 10,
            },
            children: [
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "464px",
                    height: "340px",
                    borderRadius: "28px",
                    backgroundColor: bgColor,
                    overflow: "hidden",
                    position: "relative",
                  },
                  children: avatarDataUrl
                    ? [
                        {
                          type: "img",
                          props: {
                            src: avatarDataUrl,
                            style: {
                              height: "350px",
                              objectFit: "contain",
                            },
                          },
                        },
                      ]
                    : [],
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    padding: "0 12px",
                    gap: "4px",
                  },
                  children: [
                    {
                      type: "div",
                      props: {
                        style: {
                          fontSize: "40px",
                          fontWeight: 600,
                          color: "#1c1c1c",
                          lineHeight: "1.3",
                        },
                        children: name,
                      },
                    },
                    {
                      type: "div",
                      props: {
                        style: {
                          fontSize: "28px",
                          fontWeight: 400,
                          color: "#676879",
                          lineHeight: "1.4",
                        },
                        children: desc,
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  };
}

export default function ogPlugin(): Plugin {
  let assetsDir = "";
  let localOrigin = "http://localhost:5173";

  return {
    name: "vite-plugin-og",
    configResolved(config) {
      assetsDir = path.resolve(config.root, "src/assets/sharing-images");
      const port = config.server.port || 5173;
      const https = config.server.https ? "https" : "http";
      localOrigin = `${https}://localhost:${port}`;
    },
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = new URL(req.url ?? "", `http://${req.headers.host}`);

        // --- OG image endpoint ---
        if (url.pathname === "/api/og-image") {
          try {
            const name = url.searchParams.get("name") || "Agent";
            const desc =
              url.searchParams.get("desc") || "An AI-powered agent";
            const color = url.searchParams.get("color") || "#f6f7fb";
            const avatar = parseInt(
              url.searchParams.get("avatar") || "0",
              10,
            );

            const [fontData, fontBoldData] = await Promise.all([
              loadFont(),
              loadFontBold(),
            ]);

            const avatarDataUrl = loadAvatarAsDataUrl(assetsDir, avatar);
            const markup = buildCardMarkup(name, desc, color, avatarDataUrl);

            const svg = await satori(markup as React.ReactNode, {
              width: OG_WIDTH,
              height: OG_HEIGHT,
              fonts: [
                { name: "Figtree", data: fontData, weight: 400, style: "normal" },
                { name: "Figtree", data: fontBoldData, weight: 600, style: "normal" },
              ],
            });

            const resvg = new Resvg(svg, {
              fitTo: { mode: "width", value: OG_WIDTH },
            });
            const png = resvg.render().asPng();

            res.setHeader("Content-Type", "image/png");
            res.setHeader("Cache-Control", "public, max-age=86400");
            res.end(png);
          } catch (err) {
            console.error("[og-plugin] Image generation error:", err);
            res.statusCode = 500;
            res.end("OG image generation failed");
          }
          return;
        }

        // --- Share page endpoint ---
        const shareMatch = url.pathname.match(/^\/share\/([^/]+)$/);
        if (shareMatch) {
          const name = decodeURIComponent(shareMatch[1]);
          const desc =
            url.searchParams.get("desc") || "An AI-powered agent on monday.com";
          const color = url.searchParams.get("color") || "";
          const avatar = url.searchParams.get("avatar") || "0";

          const proto = req.headers["x-forwarded-proto"] || url.protocol.replace(":", "");
          const publicOrigin = `${proto}://${url.host}`;
          const ogImageUrl = `${publicOrigin}/api/og-image?name=${encodeURIComponent(name)}&desc=${encodeURIComponent(desc)}&color=${encodeURIComponent(color)}&avatar=${avatar}`;
          const redirectUrl = `${localOrigin}/onboarding?name=${encodeURIComponent(name)}&color=${encodeURIComponent(color)}&avatar=${avatar}&desc=${encodeURIComponent(desc)}`;

          const ogTitle = `Meet ${name}`;
          const ogDesc = `Your team's next ${desc}`;

          const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>${ogTitle} | monday.com</title>
  <meta property="og:type" content="website" />
  <meta property="og:title" content="${ogTitle}" />
  <meta property="og:description" content="${ogDesc}" />
  <meta property="og:image" content="${ogImageUrl}" />
  <meta property="og:image:width" content="${OG_WIDTH}" />
  <meta property="og:image:height" content="${OG_HEIGHT}" />
  <meta property="og:url" content="${publicOrigin}${url.pathname}${url.search}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${ogTitle}" />
  <meta name="twitter:description" content="${ogDesc}" />
  <meta name="twitter:image" content="${ogImageUrl}" />
  <meta http-equiv="refresh" content="0;url=${redirectUrl}" />
</head>
<body>
  <p>Redirecting…</p>
</body>
</html>`;

          res.setHeader("Content-Type", "text/html; charset=utf-8");
          res.end(html);
          return;
        }

        next();
      });
    },
  };
}
