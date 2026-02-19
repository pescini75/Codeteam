import React, { useEffect, useRef } from 'react';

const NeuralNetworkBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let pulses: Pulse[] = []; // Synaptic pulses
    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 0.2; // Slow, organic movement
        this.vy = (Math.random() - 0.5) * 0.2;
        this.size = Math.random() * 2 + 1.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(148, 163, 184, 0.35)'; // Slightly softer nodes
        ctx.fill();
      }
    }

    class Pulse {
        start: Particle;
        end: Particle;
        progress: number;
        speed: number;
        life: number;

        constructor(start: Particle, end: Particle) {
            this.start = start;
            this.end = end;
            this.progress = 0;
            this.speed = 0.01 + Math.random() * 0.02; // Varied speed for realism
            this.life = 1;
        }

        update() {
            this.progress += this.speed;
            if (this.progress >= 1) {
                this.life = 0; // End of life
            }
        }

        draw() {
            if (!ctx || this.life <= 0) return;
            const dx = this.end.x - this.start.x;
            const dy = this.end.y - this.start.y;
            const x = this.start.x + dx * this.progress;
            const y = this.start.y + dy * this.progress;

            // Draw the synapse firing
            ctx.beginPath();
            ctx.arc(x, y, 2.5, 0, Math.PI * 2);
            // Brand color (orange) for the impulse
            ctx.fillStyle = `rgba(249, 115, 22, ${1 - Math.abs(0.5 - this.progress)})`; 
            ctx.shadowBlur = 8;
            ctx.shadowColor = '#f97316';
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    }

    const initParticles = () => {
      particles = [];
      pulses = [];
      // Adjust density: LOWER number = HIGHER density, HIGHER number = LOWER density
      // Changed from 9000 to 7000 to increase density
      const numberOfParticles = Math.floor((window.innerWidth * window.innerHeight) / 7000); 
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Draw connections first (layer 0)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 200; // Increased connection distance slightly for density

          if (distance < maxDist) {
            // Draw static connection line
            ctx.beginPath();
            // Reduced opacity multiplier to 0.2 to lighten them slightly while being heavier
            const opacity = (1 - distance / maxDist) * 0.2;
            ctx.strokeStyle = `rgba(148, 163, 184, ${opacity})`; // Slate-400
            ctx.lineWidth = 1.2; // Increased width for heavier look
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();

            // Randomly trigger a pulse (synapse)
            if (Math.random() < 0.0008) { 
                // Determine direction
                if(Math.random() > 0.5) {
                    pulses.push(new Pulse(particles[i], particles[j]));
                } else {
                    pulses.push(new Pulse(particles[j], particles[i]));
                }
            }
          }
        }
      }

      // 2. Draw particles (layer 1)
      particles.forEach(p => {
          p.update();
          p.draw();
      });

      // 3. Draw pulses (layer 2 - top)
      for (let i = pulses.length - 1; i >= 0; i--) {
          pulses[i].update();
          pulses[i].draw();
          if (pulses[i].life <= 0) {
              pulses.splice(i, 1);
          }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 bg-black" aria-hidden="true">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default NeuralNetworkBackground;