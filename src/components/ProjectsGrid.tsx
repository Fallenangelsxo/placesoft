"use client";

import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/types/project";
import Link from "next/link";
import Card from "@/components/ui/Card";

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project) => (
        <motion.div key={project.id} variants={cardVariants} whileHover={{ scale: 1.05 }}>
          <Link href={`/projects/${project.id}`}>
            <Card
              imageSrc={project.main_image_url}
              imageAlt={project.name}
              heading={project.name}
              description={project.headline}
              footer={`$${project.price.toLocaleString()}`}
            />
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
