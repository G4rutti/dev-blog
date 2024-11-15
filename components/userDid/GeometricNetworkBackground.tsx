"use client";

import { useEffect, useRef } from "react";

export default function GeometricNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let points: Point[] = [];
    const numberOfPoints = 50;
    const connectionDistance = 150;
    const pointSpeed = 0.5;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initPoints();
    };

    class Point {
      x: number;
      y: number;
      vx: number;
      vy: number;

      constructor() {
        const width = canvas ? canvas.width : 1;
        const height = canvas ? canvas.height : 1;
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * pointSpeed;
        this.vy = (Math.random() - 0.5) * pointSpeed;
      }

      update() {
        if (!canvas) return;

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
    }

    const initPoints = () => {
      points = Array.from({ length: numberOfPoints }, () => new Point());
    };

    const drawConnections = () => {
      const isDarkMode = document.documentElement.classList.contains("dark");

      // Set colors based on theme
      const backgroundColor = isDarkMode ? "#030711" : "#ffffff";
      const lineColor = isDarkMode ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)";
      const pointColor = isDarkMode
        ? "rgba(255, 255, 255, 0.2)"
        : "rgba(0, 0, 0, 0.2)";

      // Clear canvas with theme-appropriate background
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.5;
            ctx.strokeStyle = isDarkMode
              ? `rgba(255, 255, 255, ${opacity})`
              : `rgba(0, 0, 0, ${opacity})`;

            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw points
      points.forEach((point) => {
        ctx.fillStyle = pointColor;
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const animate = () => {
      points.forEach((point) => point.update());
      drawConnections();
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 transition-colors duration-300"
      aria-hidden="true"
    />
  );
}
