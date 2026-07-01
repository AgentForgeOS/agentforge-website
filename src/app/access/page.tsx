import type { Metadata } from "next";

import { Container } from "@/components/site/container";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { Display, Eyebrow, Lead } from "@/components/site/typography";
import { Reveal } from "@/components/site/reveal";
import { AccessForm } from "@/components/site/access-form";

export const metadata: Metadata = {
  title: "Request access",
  description:
    "AgentForge is early, and deliberately so — we work closely with a small number of design partners. Tell us about your operation and we'll be in touch.",
};

export default function AccessPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="pt-20 pb-16 md:pt-28 md:pb-24">
          <Container className="flex max-w-2xl flex-col gap-8">
            <Reveal className="flex flex-col gap-6">
              <Eyebrow>Request access</Eyebrow>
              <Display className="text-h1">Start the conversation.</Display>
              <Lead>
                AgentForge is early, and deliberately so — we work closely with a small number of
                design partners while the decision layer proves itself in real operations. Tell us
                about your operation, and if there&apos;s a fit, you&apos;ll hear from a person.
              </Lead>
            </Reveal>
            <Reveal delay={0.1}>
              <AccessForm />
            </Reveal>
          </Container>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
