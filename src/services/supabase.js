import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ertsiftwhhyaskkkskih.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVydHNpZnR3aGh5YXNra2tza2loIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcxMjEwMzAsImV4cCI6MjAyMjY5NzAzMH0.AkPVPSS-Uk-HjnNZkc82DVh9qx-UAh3t4pug8xS5wQ8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
