"use client"

import { Button } from "@/components/ui/button"
import { Play, Music2, Radio } from "lucide-react"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"

/**
 * DJ Hero Section
 *
 * A visually striking hero section designed for a DJ/music business.
 * Features animated vinyl records, waveform patterns, and dynamic typography.
 * Respects brand guidelines (no gradients/glow) while maintaining creative impact.
 */
export function DJHeroSection() {
  return (
    <section className="relative min-h-dvh overflow-hidden bg-background">
      {/* Background Pattern Layer */}
      <div className="absolute inset-0 opacity-[0.03]">
        <WaveformPattern />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid min-h-dvh grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8"
          >
            {/* Subtitle with animated badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 self-start"
            >
              <span className="flex size-2 animate-pulse-slow">
                <span className="absolute inline-flex size-2 animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-primary"></span>
              </span>
              <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Live DJ Experience
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-balance font-bold leading-[1.1] tracking-tight"
              >
                <span className="block text-5xl text-foreground md:text-6xl lg:text-7xl">
                  Music That
                </span>
                <span className="relative mt-2 block text-5xl text-primary md:text-6xl lg:text-7xl">
                  Moves You
                  {/* Decorative underline */}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="absolute -bottom-2 left-0 h-1 w-full origin-left bg-primary/20"
                  />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="max-w-lg text-pretty text-lg text-muted-foreground md:text-xl"
              >
                Professional DJ services that bring energy, atmosphere, and unforgettable
                moments to your events. From weddings to corporate gatherings, we create
                the perfect soundtrack for your celebration.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button asChild size="lg" className="gap-2">
                <Link href="/contact">
                  <Play className="size-4" />
                  Book Now
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link href="/services">
                  <Music2 className="size-4" />
                  View Services
                </Link>
              </Button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-8 border-t border-border pt-8"
            >
              <StatItem number="500+" label="Events" />
              <StatItem number="15+" label="Years Experience" />
              <StatItem number="10K+" label="Hours Mixed" />
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Floating Vinyl Records Scene */}
            <div className="relative h-[500px] w-full max-w-[500px] lg:h-[600px] lg:max-w-[600px]">
              {/* Background DJ Image */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="absolute inset-0 overflow-hidden rounded-4xl border border-border/50 bg-secondary/10"
              >
                <Image
                  src="https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&h=800&fit=crop&q=90"
                  alt="DJ performing at event"
                  fill
                  className="object-cover opacity-40"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-background/60" />
              </motion.div>

              {/* Floating Vinyl Record 1 - Large */}
              <motion.div
                animate={{
                  rotate: 360,
                  y: [0, -10, 0],
                }}
                transition={{
                  rotate: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="absolute left-[10%] top-[15%] z-20"
              >
                <VinylRecord size={140} />
              </motion.div>

              {/* Floating Vinyl Record 2 - Medium */}
              <motion.div
                animate={{
                  rotate: -360,
                  y: [0, 15, 0],
                }}
                transition={{
                  rotate: {
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  y: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  },
                }}
                className="absolute right-[15%] top-[40%] z-30"
              >
                <VinylRecord size={100} />
              </motion.div>

              {/* Floating Vinyl Record 3 - Small */}
              <motion.div
                animate={{
                  rotate: 360,
                  y: [0, -15, 0],
                }}
                transition={{
                  rotate: {
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  y: {
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  },
                }}
                className="absolute bottom-[20%] left-[25%] z-10"
              >
                <VinylRecord size={80} />
              </motion.div>

              {/* Pulsing Music Icon */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[15%] right-[10%] z-20"
              >
                <div className="flex size-16 items-center justify-center rounded-full border-2 border-primary/30 bg-background/80 backdrop-blur-sm">
                  <Radio className="size-8 text-primary" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements - Corners */}
      <DecorativeCorners />
    </section>
  )
}

// =============================================================================
// Sub-components
// =============================================================================

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="tabular-nums text-2xl font-bold text-foreground">{number}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  )
}

function VinylRecord({ size }: { size: number }) {
  return (
    <div
      className="relative flex items-center justify-center rounded-full bg-foreground shadow-lg"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      {/* Vinyl grooves effect */}
      <div className="absolute inset-0 rounded-full border-4 border-background/10" />
      <div className="absolute inset-2 rounded-full border-4 border-background/10" />
      <div className="absolute inset-4 rounded-full border-4 border-background/10" />

      {/* Center label */}
      <div
        className="relative flex items-center justify-center rounded-full bg-primary"
        style={{
          width: `${size * 0.35}px`,
          height: `${size * 0.35}px`,
        }}
      >
        {/* Center hole */}
        <div
          className="rounded-full bg-background"
          style={{
            width: `${size * 0.12}px`,
            height: `${size * 0.12}px`,
          }}
        />
      </div>
    </div>
  )
}

function WaveformPattern() {
  return (
    <svg
      className="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern
          id="waveform"
          x="0"
          y="0"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          {/* Waveform bars */}
          <rect x="5" y="30" width="4" height="40" fill="currentColor" />
          <rect x="15" y="20" width="4" height="60" fill="currentColor" />
          <rect x="25" y="35" width="4" height="30" fill="currentColor" />
          <rect x="35" y="15" width="4" height="70" fill="currentColor" />
          <rect x="45" y="25" width="4" height="50" fill="currentColor" />
          <rect x="55" y="30" width="4" height="40" fill="currentColor" />
          <rect x="65" y="20" width="4" height="60" fill="currentColor" />
          <rect x="75" y="35" width="4" height="30" fill="currentColor" />
          <rect x="85" y="25" width="4" height="50" fill="currentColor" />
          <rect x="95" y="30" width="4" height="40" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#waveform)" />
    </svg>
  )
}

function DecorativeCorners() {
  return (
    <>
      {/* Top left corner */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute left-0 top-0 h-32 w-32 border-l-2 border-t-2 border-primary/20"
      />

      {/* Bottom right corner */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-0 right-0 h-32 w-32 border-b-2 border-r-2 border-primary/20"
      />
    </>
  )
}
