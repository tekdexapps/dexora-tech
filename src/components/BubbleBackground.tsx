import { useEffect, useRef, useCallback } from "react";

/**
 * BubbleBackground — Dairy-Milk-Silk-inspired interactive bubble canvas.
 * Large glossy 3D spheres with highlight reflections, silky smooth motion,
 * and gentle mouse interaction. Uses the Dexora steel-blue / slate-teal palette.
 */

interface Bubble {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  /** RGB string for the bubble's body */
  color: [number, number, number];
  /** RGB string for the highlight */
  highlight: [number, number, number];
  alpha: number;
  baseAlpha: number;
  phase: number;
  pulseSpeed: number;
  /** Depth layer 0-1 (0 = far/blurred, 1 = close/sharp) */
  depth: number;
}

// Dexora theme palette mapped to RGB — steel-blue / slate-teal family
const PALETTE: Array<{ body: [number, number, number]; highlight: [number, number, number] }> = [
  { body: [90, 130, 185],  highlight: [170, 200, 235] },   // steel blue
  { body: [100, 145, 175], highlight: [175, 210, 230] },   // slate teal
  { body: [75, 115, 170],  highlight: [160, 195, 230] },   // deeper blue
  { body: [110, 150, 200], highlight: [185, 215, 240] },   // lighter steel
  { body: [65, 105, 155],  highlight: [150, 185, 220] },   // muted navy
  { body: [85, 135, 190],  highlight: [165, 200, 235] },   // mid steel
];

const BUBBLE_COUNT = 28;
const MOUSE_RADIUS = 260;
const MOUSE_STRENGTH = 0.05;

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function BubbleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef(0);
  const timeRef = useRef(0);

  const initBubbles = useCallback((w: number, h: number) => {
    const bubbles: Bubble[] = [];
    for (let i = 0; i < BUBBLE_COUNT; i++) {
      const depth = Math.random();
      // Deeper bubbles are smaller, closer ones are larger — Dairy Milk depth effect
      const baseRadius = lerp(12, 65, depth * depth);
      const pal = PALETTE[Math.floor(Math.random() * PALETTE.length)];

      bubbles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: rand(-0.15, 0.15),
        vy: rand(-0.08, -0.35),
        radius: baseRadius,
        baseRadius,
        color: pal.body,
        highlight: pal.highlight,
        alpha: lerp(0.08, 0.32, depth),
        baseAlpha: lerp(0.08, 0.32, depth),
        phase: Math.random() * Math.PI * 2,
        pulseSpeed: rand(0.006, 0.018),
        depth,
      });
    }
    // Sort by depth so far bubbles render first (behind)
    bubbles.sort((a, b) => a.depth - b.depth);
    bubblesRef.current = bubbles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const setSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    setSize();
    initBubbles(window.innerWidth, window.innerHeight);

    const onResize = () => {
      setSize();
      const w = window.innerWidth;
      const h = window.innerHeight;
      bubblesRef.current.forEach((b) => {
        if (b.x > w) b.x = Math.random() * w;
        if (b.y > h) b.y = Math.random() * h;
      });
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    /* ---------- draw a single Dairy-Milk-style glossy sphere ---------- */
    function drawGlossyBubble(
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      r: number,
      color: [number, number, number],
      highlight: [number, number, number],
      alpha: number,
    ) {
      const [cr, cg, cb] = color;
      const [hr, hg, hb] = highlight;

      // --- Main body: radial gradient from bright center to transparent edge ---
      const bodyGrad = ctx.createRadialGradient(
        x - r * 0.28,
        y - r * 0.28,
        r * 0.05,
        x,
        y,
        r,
      );
      bodyGrad.addColorStop(0, `rgba(${hr}, ${hg}, ${hb}, ${Math.min(alpha * 1.4, 0.55)})`);
      bodyGrad.addColorStop(0.35, `rgba(${cr}, ${cg}, ${cb}, ${alpha})`);
      bodyGrad.addColorStop(0.7, `rgba(${cr}, ${cg}, ${cb}, ${alpha * 0.6})`);
      bodyGrad.addColorStop(1, `rgba(${cr}, ${cg}, ${cb}, 0)`);

      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = bodyGrad;
      ctx.fill();

      // --- Glossy highlight: small elliptical white shine at top-left ---
      ctx.save();
      ctx.beginPath();
      ctx.translate(x - r * 0.3, y - r * 0.32);
      ctx.scale(1, 0.6);
      ctx.arc(0, 0, r * 0.35, 0, Math.PI * 2);
      ctx.restore();
      const shineGrad = ctx.createRadialGradient(
        x - r * 0.3,
        y - r * 0.32,
        0,
        x - r * 0.3,
        y - r * 0.32,
        r * 0.38,
      );
      shineGrad.addColorStop(0, `rgba(255, 255, 255, ${alpha * 0.7})`);
      shineGrad.addColorStop(0.5, `rgba(255, 255, 255, ${alpha * 0.2})`);
      shineGrad.addColorStop(1, `rgba(255, 255, 255, 0)`);
      ctx.fillStyle = shineGrad;
      ctx.fill();

      // --- Rim light: thin bright arc along the bottom edge ---
      ctx.beginPath();
      ctx.arc(x, y, r * 0.92, Math.PI * 0.6, Math.PI * 0.9);
      ctx.strokeStyle = `rgba(${hr}, ${hg}, ${hb}, ${alpha * 0.35})`;
      ctx.lineWidth = r * 0.06;
      ctx.lineCap = "round";
      ctx.stroke();

      // --- Subtle outer glow ---
      const glowGrad = ctx.createRadialGradient(x, y, r * 0.85, x, y, r * 1.25);
      glowGrad.addColorStop(0, `rgba(${cr}, ${cg}, ${cb}, ${alpha * 0.15})`);
      glowGrad.addColorStop(1, `rgba(${cr}, ${cg}, ${cb}, 0)`);
      ctx.beginPath();
      ctx.arc(x, y, r * 1.25, 0, Math.PI * 2);
      ctx.fillStyle = glowGrad;
      ctx.fill();
    }

    /* ---------- animation loop ---------- */
    const animate = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      timeRef.current += 1;
      const t = timeRef.current;

      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const bubbles = bubblesRef.current;

      for (let i = 0; i < bubbles.length; i++) {
        const b = bubbles[i];

        // Silky breathing — smooth sinusoidal size oscillation
        b.radius =
          b.baseRadius +
          Math.sin(t * b.pulseSpeed + b.phase) * (b.baseRadius * 0.18) +
          Math.sin(t * b.pulseSpeed * 0.43 + b.phase * 1.7) * (b.baseRadius * 0.08);

        // Alpha breathing
        b.alpha =
          b.baseAlpha +
          Math.sin(t * b.pulseSpeed * 0.6 + b.phase) * (b.baseAlpha * 0.25);

        // Organic drifting — slight sinusoidal lateral sway
        const sway = Math.sin(t * 0.008 + b.phase) * 0.12;

        // Mouse interaction — smooth repulsion + proximity glow
        const dx = b.x - mx;
        const dy = b.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MOUSE_RADIUS && dist > 0) {
          const proximity = 1 - dist / MOUSE_RADIUS;
          const force = proximity * MOUSE_STRENGTH;
          b.vx += (dx / dist) * force;
          b.vy += (dy / dist) * force;

          // Glow up near cursor — Dairy Milk silk effect
          b.alpha = Math.min(b.alpha + 0.18 * proximity, 0.55);
          b.radius = Math.min(b.radius + b.baseRadius * 0.12 * proximity, b.baseRadius * 1.4);
        }

        // Apply velocity
        b.x += b.vx + sway;
        b.y += b.vy;

        // Damping — silky deceleration
        b.vx *= 0.992;
        b.vy *= 0.992;

        // Wrap edges
        if (b.y + b.radius < -40) {
          b.y = h + b.radius + rand(10, 60);
          b.x = Math.random() * w;
        }
        if (b.y - b.radius > h + 40) b.y = -b.radius - 20;
        if (b.x + b.radius < -40) b.x = w + b.radius;
        if (b.x - b.radius > w + 40) b.x = -b.radius;

        // Draw the glossy 3D sphere
        drawGlossyBubble(ctx, b.x, b.y, b.radius, b.color, b.highlight, b.alpha);
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [initBubbles]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
