import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BookingModal } from "@/components/sarah/BookingModal";
import { Navbar } from "@/components/sarah/Navbar";
import { Hero } from "@/components/sarah/Hero";
import { Problem } from "@/components/sarah/Problem";
import { WhyIgnored } from "@/components/sarah/WhyIgnored";
import { HowSarahHelps } from "@/components/sarah/HowSarahHelps";
import { FounderCTA } from "@/components/sarah/FounderCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sarah — Digital Team Member for Real Estate Agency Managers" },
      {
        name: "description",
        content:
          "Sarah helps real estate agency managers qualify property inquiries, reply faster, save lead details, share property links, and route serious buyers before team time is wasted.",
      },
      {
        property: "og:title",
        content: "Sarah — Digital Team Member for Real Estate Agency Managers",
      },
      {
        property: "og:description",
        content:
          "Sarah qualifies property inquiries, saves leads to your CRM, books viewings, and routes serious buyers — even when your team is offline.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Sarah",
          applicationCategory: "BusinessApplication",
          description:
            "Sarah is a digital team member for real estate agency managers. She qualifies inquiries, saves leads to CRM, shares property links, books viewings, and routes serious buyers to the right agent.",
          operatingSystem: "Web",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            description: "3-day free trial for 3 agency managers",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const openBooking = () => setBookingOpen(true);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <Navbar onBook={openBooking} />
      <Hero onBook={openBooking} />
      <Problem />
      <WhyIgnored />
      <HowSarahHelps />
      <FounderCTA onBook={openBooking} />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
}
