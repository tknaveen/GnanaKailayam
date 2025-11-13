import { motion } from 'motion/react';

export function ShivaLogo() {
  return (
    <motion.div
      className="w-[70px] h-[70px] rounded-full bg-transparent border-2 border-orange-500 flex items-center justify-center relative overflow-hidden"
      animate={{
        borderColor: [
          'rgba(249, 115, 22, 1)',
          'rgba(249, 115, 22, 0.5)',
          'rgba(249, 115, 22, 1)',
        ]
      }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <motion.svg
        width="48"
        height="58"
        viewBox="0 0 48 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{
          filter: [
            'drop-shadow(0 0 4px rgba(249, 115, 22, 0.4))',
            'drop-shadow(0 0 8px rgba(249, 115, 22, 0.7))',
            'drop-shadow(0 0 4px rgba(249, 115, 22, 0.4))',
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <defs>
          {/* Main Lingam Gradient - White to Orange */}
          <linearGradient id="lingamGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#ffedd5" />
            <stop offset="60%" stopColor="#ff9d5c" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>

          {/* Base Gradient - Orange tones */}
          <linearGradient id="baseGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>

          {/* Shine effect */}
          <linearGradient id="shineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.9)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </linearGradient>

          {/* Shadow gradient */}
          <radialGradient id="shadowGrad" cx="50%" cy="50%">
            <stop offset="0%" stopColor="rgba(0, 0, 0, 0.1)" />
            <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
          </radialGradient>
        </defs>

        {/* Yoni Base - Traditional three-tier platform */}
        <g>
          {/* Bottom tier - largest */}
          <path
            d="M 6 52 Q 6 49, 9 49 L 39 49 Q 42 49, 42 52 L 42 55 Q 42 56, 40 56 L 8 56 Q 6 56, 6 55 Z"
            fill="url(#baseGrad)"
          />
          
          {/* Middle tier */}
          <path
            d="M 9 46 Q 9 44, 11 44 L 37 44 Q 39 44, 39 46 L 39 49 L 9 49 Z"
            fill="url(#baseGrad)"
            opacity="0.95"
          />
          
          {/* Top tier - spout/abhisheka */}
          <ellipse
            cx="24"
            cy="44"
            rx="13"
            ry="3"
            fill="url(#baseGrad)"
          />

          {/* Spout opening */}
          <ellipse
            cx="24"
            cy="44"
            rx="11"
            ry="2"
            fill="#ea580c"
            opacity="0.6"
          />
        </g>

        {/* Main Lingam Body */}
        <g>
          {/* Shadow beneath */}
          <ellipse
            cx="24"
            cy="45"
            rx="12"
            ry="3"
            fill="url(#shadowGrad)"
            opacity="0.3"
          />

          {/* Main cylindrical body with rounded top */}
          <path
            d="M 12 44 Q 12 15, 24 6 Q 36 15, 36 44 Z"
            fill="url(#lingamGrad)"
          />

          {/* Left highlight for 3D depth */}
          <path
            d="M 15 42 Q 15 18, 24 10 Q 20 14, 20 42 Z"
            fill="url(#shineGrad)"
            opacity="0.3"
          />

          {/* Top dome */}
          <ellipse
            cx="24"
            cy="8"
            rx="11"
            ry="6"
            fill="url(#lingamGrad)"
          />

          {/* Top shine */}
          <ellipse
            cx="24"
            cy="7"
            rx="7"
            ry="3"
            fill="white"
            opacity="0.4"
          />
        </g>

        {/* Sacred Tripundra - Three horizontal lines */}
        <g opacity="0.5">
          <rect
            x="16"
            y="20"
            width="16"
            height="1.2"
            rx="0.6"
            fill="white"
          />
          <rect
            x="16"
            y="25"
            width="16"
            height="1.2"
            rx="0.6"
            fill="white"
          />
          <rect
            x="16"
            y="30"
            width="16"
            height="1.2"
            rx="0.6"
            fill="white"
          />
        </g>

        {/* Bilva leaves decoration on base */}
        <g opacity="0.4">
          {/* Small decorative dots representing flowers/offerings */}
          <circle cx="14" cy="48" r="1" fill="white" />
          <circle cx="24" cy="47" r="1" fill="white" />
          <circle cx="34" cy="48" r="1" fill="white" />
        </g>

        {/* Om symbol at the top */}
        <text
          x="24"
          y="12"
          textAnchor="middle"
          fill="white"
          opacity="0.6"
          style={{ fontSize: '7px', fontFamily: 'serif', fontWeight: 'bold' }}
        >
          ॐ
        </text>
      </motion.svg>
    </motion.div>
  );
}
