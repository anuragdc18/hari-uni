import type { ImageKey } from "@/assets/registry";
import { Picture } from "@/components/ui/Picture";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Typography";
import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";

interface Cta {
  label: string;
  href: string;
  external?: boolean;
}

interface CtaBandProps {
  eyebrow: string;
  title: string;
  text: string;
  primary: Cta;
  secondary?: Cta;
  image: ImageKey;
}

/** Full-bleed photographic call-to-action with gentle parallax, used at the end of most pages. */
export function CtaBand({ eyebrow, title, text, primary, secondary, image }: CtaBandProps) {
  return (
    <section className="relative isolate overflow-hidden text-white">
      <Parallax className="absolute inset-0 -z-20 h-full" innerClassName="h-[120%] -mt-[10%]" amount={80}>
        <Picture src={image} alt="" className="h-full w-full" sizes="100vw" quality={60} />
      </Parallax>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink-950/70" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950/80 via-ink-950/40 to-transparent" />
      <div className="container-x py-24 lg:py-36">
        <div className="max-w-2xl">
          <Reveal direction="none">
            <Eyebrow className="!text-gold-500">{eyebrow}</Eyebrow>
          </Reveal>
          <TextReveal as="h2" text={title} className="display-lg mt-5 !text-white" />
          <Reveal delay={0.15}>
            <p className="lead mt-6 !text-sand-100/85">{text}</p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href={primary.href} external={primary.external}>
                {primary.label}
              </ButtonLink>
              {secondary && (
                <ButtonLink href={secondary.href} variant="outline-light" external={secondary.external}>
                  {secondary.label}
                </ButtonLink>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
