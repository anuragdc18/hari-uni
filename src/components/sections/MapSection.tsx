import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/Typography";
import { Reveal } from "@/components/motion/Reveal";
import { LazyMap } from "./LazyMap";

interface MapSectionProps {
  id?: string;
  eyebrow: string;
  title: string;
  text?: string;
  address?: string;
  contactLine?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  embedSrc: string;
  embedTitle: string;
}

/** Location block with a lazily-loaded Google Maps embed (loads only when the user asks or scrolls near). */
export function MapSection({ id, eyebrow, title, text, address, contactLine, primary, secondary, embedSrc, embedTitle }: MapSectionProps) {
  return (
    <section id={id} className="container-x py-20 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow={eyebrow} title={title} text={text} size="sm" />
          {address && <p className="mt-6 text-stone-700">{address}</p>}
          {contactLine && <p className="mt-2 text-stone-700">{contactLine}</p>}
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href={primary.href} variant="ink" external>
                {primary.label}
              </ButtonLink>
              {secondary && (
                <ButtonLink href={secondary.href} variant="outline" arrow={false}>
                  {secondary.label}
                </ButtonLink>
              )}
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <Reveal direction="left">
            <LazyMap src={embedSrc} title={embedTitle} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
