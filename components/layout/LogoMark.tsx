import Image from "next/image";

// Intrinsic size of public/images/logo-mark.webp (472x753, gold monogram
// only, transparent background). Explicit width/height lock the aspect
// ratio so the CSS height override below (auto width) can never stretch
// or squash it.
export default function LogoMark() {
  return (
    <Image
      src="/images/logo-mark.webp"
      alt=""
      width={472}
      height={753}
      priority
      className="h-11 w-auto shrink-0 object-contain md:h-14"
    />
  );
}
