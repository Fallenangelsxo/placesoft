"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";

export default function Home() {
  const heroContainer = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const cardsContainer = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  };

  const scrollToFeatured = () => {
    const el = document.getElementById("featured");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden">
        {/* Animated abstract background */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <motion.div
            className="absolute left-1/2 top-[-4rem] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[color-mix(in_oklab,var(--accent)_75%,#4ade80_10%)] to-[color-mix(in_oklab,#22d3ee_60%,transparent)] blur-3xl opacity-50"
            animate={{ x: [0, 30, -20, 0], y: [0, -20, 10, 0], rotate: [0, 5, -3, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:py-24">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="show"
            className="mx-auto max-w-3xl"
          >
            <motion.h1
              variants={fadeUp}
              className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
            >
              Production-Ready Projects, Instantly
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-pretty text-[--muted-foreground] sm:text-lg"
            >
              ForgeMarket is a curated marketplace of standout student projects—
              engineered with premium UI, fluid motion, and secure foundations.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex justify-center gap-3">
              <Button onClick={scrollToFeatured} className="px-6">
                Explore Featured
              </Button>
              <Button variant="outline" className="px-6">
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured" className="px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-xl font-semibold tracking-tight sm:text-2xl">Featured Projects</h2>
          <motion.div
            variants={cardsContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <motion.div variants={cardVariant} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}>
              <Card
                imageSrc="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200&auto=format&fit=crop"
                imageAlt="Realtime globe visualization"
                heading="Realtime Geo Visualizer"
                description="A WebGL-powered globe with live telemetry overlays and buttery-smooth performance."
                footer={<Button variant="outline">View project</Button>}
              />
            </motion.div>
            <motion.div variants={cardVariant} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}>
              <Card
                imageSrc="https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&w=1200&auto=format&fit=crop"
                imageAlt="Next.js development"
                heading="Next.js AI Starter"
                description="Edge-ready AI starter with streaming UI patterns and solid DX."
                footer={<Button variant="outline">View project</Button>}
              />
            </motion.div>
            <motion.div variants={cardVariant} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}>
              <Card
                imageSrc="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop"
                imageAlt="Research to app"
                heading="Paper-to-App Toolkit"
                description="Convert research into interactive demos in minutes with templated scaffolds."
                footer={<Button variant="outline">View project</Button>}
              />
            </motion.div>
            <motion.div variants={cardVariant} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className="sm:col-span-2 lg:col-span-1">
              <Card
                imageSrc="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop"
                imageAlt="Design systems"
                heading="Design Systems Kit"
                description="A polished component kit with tokens, modes, and motion baked-in."
                footer={<Button variant="outline">View project</Button>}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

