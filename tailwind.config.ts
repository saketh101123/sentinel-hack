
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				neon: {
					red: '#ff3a6a',
					blue: '#22e8ff',
					purple: '#c851ff',
					teal: '#0affc2',
					yellow: '#ffdb4d'
				},
				cyber: {
					dark: '#0e102a',
					darker: '#070920',
					light: '#181c42',
					red: {
						DEFAULT: '#ff3a6a',
						muted: '#ff3a6a80'
					},
					blue: {
						DEFAULT: '#22e8ff',
						muted: '#22e8ff80'
					},
					purple: {
						DEFAULT: '#c851ff',
						muted: '#c851ff80'
					}
				}
			},
			fontFamily: {
				'cyber': ['Orbitron', 'sans-serif'],
				'code': ['JetBrains Mono', 'monospace'],
				'sans': ['Inter', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'neon-red': '0 0 5px #ff3a6a, 0 0 20px rgba(255, 58, 106, 0.4)',
				'neon-blue': '0 0 5px #22e8ff, 0 0 20px rgba(34, 232, 255, 0.4)',
				'neon-purple': '0 0 5px #c851ff, 0 0 20px rgba(200, 81, 255, 0.4)',
				'neon-teal': '0 0 5px #0affc2, 0 0 20px rgba(10, 255, 194, 0.4)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'pulse-neon': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'gradient-flow': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'blink': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-neon': 'pulse-neon 3s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'gradient-flow': 'gradient-flow 5s ease infinite',
				'blink': 'blink 1.5s infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'cyber-grid': 'linear-gradient(rgba(10, 10, 12, 0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(10, 10, 12, 0.8) 1px, transparent 1px)',
			},
			backdropBlur: {
				xs: '2px',
			}
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
