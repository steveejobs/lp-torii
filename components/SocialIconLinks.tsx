import { INSTAGRAM_URL, buildWhatsappLink, whatsappMessages } from "@/lib/site";

type SocialIconLinksProps = {
  className?: string;
};

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.2 19.1 6.1 16A8 8 0 1 1 9 18.1z" />
      <path d="M9.2 8.8c.2-.5.4-.6.8-.6h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.4.5c.6 1.1 1.4 1.9 2.5 2.5l.5-.4c.2-.2.5-.2.7-.1l1.6.7c.3.1.4.3.4.6v.5c0 .4-.1.6-.6.8-.5.2-1.2.3-1.8.1-3-.7-5.3-3-6-6-.1-.6-.1-1.3.1-1.8z" />
    </svg>
  );
}

export function SocialIconLinks({ className = "" }: SocialIconLinksProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir Instagram do Torii"
        title="Instagram"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-neutral-800 transition hover:-translate-y-0.5 hover:border-[var(--torii-red)] hover:text-[var(--torii-red)]"
      >
        <InstagramIcon />
      </a>
      <a
        href={buildWhatsappLink(whatsappMessages.footer)}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com o Torii pelo WhatsApp"
        title="WhatsApp"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-neutral-800 transition hover:-translate-y-0.5 hover:border-[var(--torii-red)] hover:text-[var(--torii-red)]"
      >
        <WhatsappIcon />
      </a>
    </div>
  );
}
