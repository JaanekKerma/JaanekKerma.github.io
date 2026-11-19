/**
 * Ambient programmer's code rain, deliberately restricted to the outer 10%
 * of large viewports. It is visual decoration only: no user data or network.
 */
const rainRoot = document.querySelector<HTMLElement>('[data-code-rain]');

if (rainRoot) {
  const canvases = [...rainRoot.querySelectorAll<HTMLCanvasElement>('[data-code-side]')];
  const contexts = canvases.map((canvas) => canvas.getContext('2d', { alpha: true }));

  if (canvases.length === 2 && contexts.every((ctx) => ctx !== null)) {
    type Stream = {
      x: number;
      y: number;
      speed: number;
      length: number;
      glyphs: string[];
    };
    type Pane = {
      canvas: HTMLCanvasElement;
      ctx: CanvasRenderingContext2D;
      width: number;
      height: number;
      streams: Stream[];
    };

    const glyphs = [...'01ABCDEF{}[]();:<>+=/*#&'];
    const viewportQuery = window.matchMedia('(min-width: 1100px)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const fontSize = 12;
    const rowHeight = 18;
    const columnWidth = 20;
    const frameInterval = 1000 / 28;
    const panes: Pane[] = canvases.map((canvas, index) => ({
      canvas,
      ctx: contexts[index]!,
      width: 0,
      height: 0,
      streams: [],
    }));

    const randomGlyph = () => glyphs[Math.floor(Math.random() * glyphs.length)];
    let animationFrame = 0;
    let lastFrame = 0;

    function resizePanes() {
      for (const pane of panes) {
        const rect = pane.canvas.getBoundingClientRect();
        const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
        pane.width = rect.width;
        pane.height = rect.height;
        pane.canvas.width = Math.max(1, Math.round(rect.width * ratio));
        pane.canvas.height = Math.max(1, Math.round(rect.height * ratio));
        pane.ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
        pane.ctx.textBaseline = 'top';
        pane.ctx.font = '500 ' + fontSize + 'px ui-monospace, SFMono-Regular, Consolas, monospace';

        pane.streams = [];
        const count = Math.floor(Math.max(0, rect.width - 8) / columnWidth);
        for (let i = 0; i < count; i++) {
          // Keep a few gaps so the edges feel atmospheric rather than noisy.
          if (Math.random() < 0.16) continue;
          const length = 5 + Math.floor(Math.random() * 6);
          pane.streams.push({
            x: 5 + i * columnWidth + Math.random() * 5,
            y: Math.random() * (rect.height + 250) - 220,
            speed: 17 + Math.random() * 22,
            length,
            glyphs: Array.from({ length }, randomGlyph),
          });
        }
      }
    }

    function draw(now: number) {
      animationFrame = window.requestAnimationFrame(draw);
      if (now - lastFrame < frameInterval) return;
      const dt = lastFrame ? Math.min((now - lastFrame) / 1000, 0.12) : 0;
      lastFrame = now;

      for (const pane of panes) {
        const { ctx, width, height, streams } = pane;
        ctx.clearRect(0, 0, width, height);

        for (const stream of streams) {
          stream.y += stream.speed * dt;
          if (stream.y - stream.length * rowHeight > height) {
            stream.y = -Math.random() * height * 0.55;
          }

          // Occasional symbol changes suggest live code without fast flicker.
          if (Math.random() < 0.035) {
            stream.glyphs[Math.floor(Math.random() * stream.glyphs.length)] = randomGlyph();
          }
          for (let i = 0; i < stream.length; i++) {
            const y = stream.y - i * rowHeight;
            if (y < -fontSize || y > height) continue;
            const fade = 1 - i / stream.length;
            const alpha = (i === 0 ? 0.25 : 0.14 * fade) * (0.8 + Math.sin(now / 1700 + stream.x) * 0.12);
            ctx.fillStyle = i === 0
              ? 'rgba(188,235,162,' + alpha + ')'
              : 'rgba(112,196,164,' + alpha + ')';
            ctx.fillText(stream.glyphs[i], stream.x, y);
          }
        }
      }
    }

    function stop() {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      lastFrame = 0;
      for (const pane of panes) pane.ctx.clearRect(0, 0, pane.width, pane.height);
    }

    function refresh() {
      const active = viewportQuery.matches && !motionQuery.matches && !document.hidden;
      if (!active) {
        stop();
        return;
      }
      resizePanes();
      if (!animationFrame) animationFrame = window.requestAnimationFrame(draw);
    }

    viewportQuery.addEventListener('change', refresh);
    motionQuery.addEventListener('change', refresh);
    document.addEventListener('visibilitychange', refresh);
    window.addEventListener('resize', refresh, { passive: true });
    window.addEventListener('pagehide', stop);
    refresh();
  }
}
