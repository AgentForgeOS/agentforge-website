import { redirect } from "next/navigation";

// The Decisions page became Solutions (customer-POV, capability-first).
// Preserve any shared links.
export default function DecisionsRedirect() {
  redirect("/solutions");
}
