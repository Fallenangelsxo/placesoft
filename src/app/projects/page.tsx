import React from "react";
import getSupabaseServerClient from "@/lib/supabase/server";
import { Project } from "@/types/project";
import ProjectsGrid from "@/components/ProjectsGrid";

export default async function ProjectsPage() {
  const supabase = getSupabaseServerClient();
  const { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .eq("is_published", true);

  if (error) {
    console.error("Error fetching projects:", error);
    // Handle the error appropriately in a real app
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Projects</h1>
      {projects && projects.length > 0 ? (
        <ProjectsGrid projects={projects as Project[]} />
      ) : (
        <p>No projects found.</p>
      )}
    </main>
  );
}
