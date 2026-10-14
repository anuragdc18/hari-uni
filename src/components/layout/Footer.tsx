import Link from "next/link";
import { contact, copyright, footerColumns, site } from "@/content/site";
import { Logo } from "./Logo";
import { isExternal } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

export function Footer() {
  return (
    <footer className="surface-dark relative mt-auto overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-ink-700/30 blur-3xl" />
      <div className="container-x relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo tone="light" />
            <dl className="mt-8 grid gap-6 text-sm sm:grid-cols-2">
              <div className="sm:col-span-2">
                <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold-500"><Icon name="map" className="h-4 w-4" />{contact.campusOfficeLabel}</dt>
                <dd className="mt-2 max-w-sm leading-relaxed text-sand-200/85">{contact.addressLine}</dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold-500"><Icon name="mail" className="h-4 w-4" />Email</dt>
                <dd className="mt-2">
                  <a href={`mailto:${contact.email}`} className="text-sand-100 underline-offset-4 hover:underline">
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold-500"><Icon name="phone" className="h-4 w-4" />Phone</dt>
                <dd className="mt-2 flex flex-col gap-1">
                  {contact.phones.map((p) => (
                    <a key={p.tel} href={`tel:${p.tel}`} className="text-sand-100 underline-offset-4 hover:underline">
                      {p.display}
                    </a>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            {footerColumns.map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <h2 className="!font-sans text-xs font-semibold uppercase tracking-[0.16em] !text-gold-500">{col.heading}</h2>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      {link.external || isExternal(link.href) ? (
                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sand-100/85 transition-colors hover:text-white">
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href} className="text-sand-100/85 transition-colors hover:text-white">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-sand-200/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="font-display text-base text-white">{site.shortName}</span>
            <span className="mx-3 text-white/30" aria-hidden="true">
              ·
            </span>
            {site.tagline}
          </p>
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
