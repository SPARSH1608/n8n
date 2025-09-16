import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

// 8 images and 8 videos
const mediaNodes: { type: "image" | "video"; src: string }[] = [
  { type: "image", src: "/images/image1.jpg" },
  { type: "image", src: "/images/image2.jpg" },
  { type: "image", src: "/images/image3.jpg" },
  { type: "image", src: "/images/image4.jpg" },
  { type: "image", src: "/images/image5.jpg" },
  { type: "image", src: "/images/image6.jpg" },
  { type: "image", src: "/images/image7.jpg" },
  { type: "image", src: "/images/image8.jpg" },
  { type: "video", src: "/videos/video1.mp4" },
  { type: "video", src: "/videos/video2.mp4" },
  { type: "video", src: "/videos/video3.mp4" },
  { type: "video", src: "/videos/video4.mp4" },
  { type: "video", src: "/videos/video5.mp4" },
  { type: "video", src: "/videos/video6.mp4" },
  { type: "video", src: "/videos/video7.mp4" },
  { type: "video", src: "/videos/video8.mp4" },
];

// Helper to generate spherical coordinates for a sphere with both horizontal and vertical rotation
const getSphereCoordinates = (
  count: number,
  rotY: number,
  rotX: number,
  radius: number,
  centerX: number,
  centerY: number
) => {
  const coords: { x: number; y: number; z: number }[] = [];
  const offset = 2 / count;
  const increment = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    let y = ((i * offset) - 1) + (offset / 2);
    const r = Math.sqrt(1 - y * y);
    const phi = i * increment;

    let x = Math.cos(phi) * r;
    let z = Math.sin(phi) * r;

    // Apply rotation around Y axis (horizontal drag)
    const tempX = x * Math.cos(rotY) - z * Math.sin(rotY);
    const tempZ = x * Math.sin(rotY) + z * Math.cos(rotY);
    x = tempX;
    z = tempZ;

    // Apply rotation around X axis (vertical drag)
    const tempY = y * Math.cos(rotX) - z * Math.sin(rotX);
    const tempZ2 = y * Math.sin(rotX) + z * Math.cos(rotX);
    y = tempY;
    z = tempZ2;

    coords.push({
      x: centerX + radius * x,
      y: centerY + radius * y,
      z: radius * z,
    });
  }
  return coords;
};

const SphereImageGallery: React.FC = () => {
  const [rotationY, setRotationY] = useState<number>(0);
  const [rotationX, setRotationX] = useState<number>(0);
  const [dragRotationY, setDragRotationY] = useState<number>(0);
  const [dragRotationX, setDragRotationX] = useState<number>(0);
  const controls = useAnimation();
  const requestRef = useRef<number | undefined>(undefined);
  const [radius, setRadius] = useState(350);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const dragging = useRef(false);
  const lastPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Animate rotation using requestAnimationFrame for smoothness
  useEffect(() => {
    const animate = () => {
      if (!isPaused && !dragging.current) {
        setRotationY(prev => prev + 0.003);
        setRotationX(prev => prev + 0.0015);
      }
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isPaused]);

  useEffect(() => {
    controls.start({
      scale: 1,
      transition: { duration: 0.5 },
    });
  }, [controls]);

  useEffect(() => {
    const baseRadius = 350;
    const expandedRadius = 500;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollY / docHeight : 0;
      setRadius(baseRadius + (expandedRadius - baseRadius) * progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const centerX = 300;
  const centerY = 300;

  // Combine auto and drag rotation
  const totalRotationY = rotationY + dragRotationY;
  const totalRotationX = rotationX + dragRotationX;

  const coordinates = getSphereCoordinates(
    mediaNodes.length,
    totalRotationY,
    totalRotationX,
    radius,
    centerX,
    centerY
  );

  // Mouse/touch drag handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    setIsPaused(true);
    lastPos.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragging.current) {
      const deltaX = e.clientX - lastPos.current.x;
      const deltaY = e.clientY - lastPos.current.y;
      setDragRotationY(prev => prev + deltaX * 0.01);
      setDragRotationX(prev => prev - deltaY * 0.01);
      lastPos.current = { x: e.clientX, y: e.clientY };
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = false;
    setIsPaused(false);
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  return (
    <div
      style={{
        overflow: 'hidden',
        height: '100vh',
        width: '100vw', // Ensure full viewport width
        perspective: '2000px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <motion.div
        animate={controls}
        style={{
          position: 'relative',
          width: '600px',
          height: '600px',
          margin: '0 auto',
          transformStyle: 'preserve-3d',
          touchAction: 'none',
          userSelect: 'none',
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {/* Central Text */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontWeight: 'bold',
            zIndex: 10,
            pointerEvents: 'none',
            userSelect: 'none',
            color: '#fff',
            textShadow: '0 2px 8px rgba(0,0,0,0.4)',
            fontSize: `${32 + ((radius - 350) / (900 - 350)) * 48}px`, // 2rem to 5rem
            transition: 'font-size 0.2s',
          }}
        >
          N8N
        </div>

        {/* Media Nodes */}
        {mediaNodes.map((node, index) => {
          const { x, y, z } = coordinates[index];
          const isHovered = hoveredIndex === index;
          const baseSize = 120;
          const hoverSize = 220;
          return (
            <motion.div
              key={index}
              style={{
                position: 'absolute',
                top: `${y}px`,
                left: `${x}px`,
                width: isHovered ? `${hoverSize}px` : `${baseSize}px`,
                height: isHovered ? `${hoverSize}px` : `${baseSize}px`,
                borderRadius: isHovered ? '24px' : '18px',
                overflow: 'hidden',
                boxShadow: isHovered
                  ? '0 16px 40px rgba(0,0,0,0.5)'
                  : '0 4px 10px rgba(0,0,0,0.3)',
                transform: `translateZ(${z}px) translate(-50%, -50%)`,
                transition: 'box-shadow 0.2s, width 0.2s, height 0.2s, border-radius 0.2s',
                zIndex: isHovered ? 30 : 5,
                background: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              onMouseEnter={() => {
                setIsPaused(true);
                setHoveredIndex(index);
              }}
              onMouseLeave={() => {
                setIsPaused(false);
                setHoveredIndex(null);
              }}
            >
              {node.type === "image" ? (
                <img
                  src={node.src}
                  width={isHovered ? hoverSize : baseSize}
                  height={isHovered ? hoverSize : baseSize}
                  style={{ objectFit: 'cover', borderRadius: 'inherit' }}
                  alt={`Gallery item ${index + 1}`}
                  draggable={false}
                />
              ) : (
                <video
                  src={node.src}
                  width={isHovered ? hoverSize : baseSize}
                  height={isHovered ? hoverSize : baseSize}
                  style={{ objectFit: 'cover', borderRadius: 'inherit' }}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SphereImageGallery;
