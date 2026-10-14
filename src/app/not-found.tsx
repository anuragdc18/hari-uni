import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Picture } from "@/components/ui/Picture";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden" data-header-tone="dark">
      <Picture src="forestPathCanopyWide" alt="" className="absolute inset-0 -z-10" sizes="100vw" priority />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950/90 via-ink-950/60 to-ink-950/40" aria-hidden="true" />
      <div className="container-x py-32 text-white">
        <p className="eyebrow !text-gold-500">404 — page not found</p>
        <h1 className="display-lg mt-6 max-w-3xl !text-white">This path does not lead anywhere yet.</h1>
        <p className="lead mt-6 max-w-xl !text-sand-100/85">The page you are looking for may have moved. Explore our programmes, visit the campus pages, or contact the HARI team.</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/programs" variant="outline-light">Explore programmes</ButtonLink>
          <ButtonLink href="/contact" variant="outline-light" arrow={false}>Contact HARI</ButtonLink>
        </div>
      </div>
    </section>
  );
}
