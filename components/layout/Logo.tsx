import LogoMark from "./LogoMark";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#" className={`flex items-center gap-3.5 ${className}`}>
      <LogoMark />
      <span className="font-serif text-xl tracking-[0.2em] text-white">
        STOICO
      </span>
    </a>
  );
}
