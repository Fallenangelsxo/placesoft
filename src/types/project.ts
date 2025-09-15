export interface Project {
  id: string; // UUID
  created_at: string; // Timestamptz
  name: string;
  headline: string;
  description: string;
  price: number;
  main_image_url: string;
  is_published: boolean;
  user_id: string; // UUID of the user who created the project
}
