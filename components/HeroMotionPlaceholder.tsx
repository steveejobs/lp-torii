export function HeroMotionPlaceholder() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] overflow-hidden rounded-lg border border-black/10 bg-[#fffaf4] shadow-[0_28px_80px_rgba(16,16,16,0.1)]">
      <div className="absolute right-5 top-5 h-16 w-16 rounded-full bg-[var(--torii-red)] shadow-[0_18px_45px_rgba(196,30,47,0.2)] md:h-24 md:w-24" />
      <div className="absolute left-5 top-7 h-px w-32 origin-left animate-[lineSweep_4.5s_ease-in-out_infinite] bg-black md:left-8 md:w-56" />
      <div className="absolute bottom-8 right-7 h-px w-28 origin-left animate-[lineSweep_5.4s_ease-in-out_infinite] bg-black/80 md:w-44" />

      <div className="relative grid aspect-[4/5] content-between p-6 md:aspect-[5/4] md:p-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.08em] text-[var(--torii-red)]">
            Torii a noite
          </p>
          <p className="mt-4 max-w-[15rem] text-4xl font-black leading-[0.95] text-neutral-950 md:text-5xl">
            Salao, entrega e retirada.
          </p>
        </div>

        <div className="grid gap-3">
          {["Rodizio no salao", "Delivery", "Retirada"].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between border-b border-black/12 pb-3 text-sm font-black uppercase tracking-wide text-neutral-800"
            >
              <span>{item}</span>
              <span className="h-2 w-8 rounded-full bg-[var(--torii-red)]" />
            </div>
          ))}
        </div>

        <div className="absolute bottom-8 left-8 h-20 w-20 border-l border-t border-black/18" />
        <div className="absolute right-10 top-28 h-28 w-px bg-black/16" />
      </div>
    </div>
  );
}
