import React, { useEffect, useRef } from 'react';

export default function BackgroundParticles() {
  const canvasRef = useRef(null);
  const cursorGlowRef = useRef(null);

  useEffect(() => {
    // ==========================================
    // 1. ANTIGRAVITY CANVAS PARTICLE SIMULATION
    // (Exact model from Digital Marketing Portfolio)
    // ==========================================
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: null,
      y: null,
      radius: 140, // interaction influence radius
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    // Particle Configuration
    const particleCount = Math.min(Math.floor(window.innerWidth / 16), 85);
    let particles = [];

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.65;
        this.vy = (Math.random() - 0.5) * 0.65;
        this.baseRadius = Math.random() * 1.8 + 0.8;
        this.radius = this.baseRadius;

        // Color distribution: 60% electric cyan, 30% purple, 10% emerald
        const roll = Math.random();
        if (roll < 0.6) {
          this.color = 'rgba(0, 240, 255, ';
        } else if (roll < 0.9) {
          this.color = 'rgba(139, 92, 246, ';
        } else {
          this.color = 'rgba(16, 185, 129, ';
        }
        this.alpha = Math.random() * 0.4 + 0.2;
      }

      update() {
        // Antigravity drift
        this.x += this.vx;
        this.y += this.vy;

        // Wrap edges smoothly
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        // Mouse Repulsion & Antigravity field
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            const repelX = Math.cos(angle) * force * 3;
            const repelY = Math.sin(angle) * force * 3;

            this.x += repelX;
            this.y += repelY;
            this.radius = this.baseRadius * (1 + force * 1.5);
          } else {
            this.radius = this.baseRadius;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${this.color}${this.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `${this.color}0.8)`;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function connectParticles() {
      const maxDistance = 110;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    }

    initParticles();
    animate();

    // ==========================================
    // 2. SMOOTH AMBIENT CURSOR GLOW TRACKER
    // ==========================================
    const cursorGlow = cursorGlowRef.current;
    let cursorAnimId;

    if (cursorGlow && window.matchMedia('(pointer: fine)').matches) {
      let mouseX = window.innerWidth / 2;
      let mouseY = window.innerHeight / 2;
      let glowX = mouseX;
      let glowY = mouseY;

      const onCursorMove = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      };

      window.addEventListener('mousemove', onCursorMove);

      const updateCursor = () => {
        glowX += (mouseX - glowX) * 0.12;
        glowY += (mouseY - glowY) * 0.12;

        cursorGlow.style.left = `${glowX}px`;
        cursorGlow.style.top = `${glowY}px`;

        cursorAnimId = requestAnimationFrame(updateCursor);
      };
      updateCursor();

      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseleave', handleMouseLeave);
        window.removeEventListener('mousemove', onCursorMove);
        cancelAnimationFrame(animationFrameId);
        cancelAnimationFrame(cursorAnimId);
      };
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Exact Antigravity Canvas from Digital Marketing Portfolio */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 w-full h-full opacity-85"
        aria-hidden="true"
      />

      {/* Smooth Ambient Cursor Glow Tracker from Digital Marketing Portfolio */}
      <div
        ref={cursorGlowRef}
        className="cursor-glow hidden sm:block"
        aria-hidden="true"
      />
    </>
  );
}
