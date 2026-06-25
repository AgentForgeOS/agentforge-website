import { redirect } from "next/navigation";

// No marketing pages yet — the root points at the design-system reference.
export default function Home() {
  redirect("/design-system");
}
