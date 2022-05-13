import Image from "next/image";
import Link from "next/link";

export default function SidebarFooter() {
  return (
    <div className="footer-card">
      <div className="d-flex justify-content-between mb-20">
        <Image src="/icon/icon-topup-winner.svg" width={50} height={50} />
        <p className="fw-medium color-palette-1">
          Top Up &<br />
          Be The Winner
        </p>
      </div>
      <Link href="/">
        <a
          className="btn btn-get-started w-100 fw-medium text-xs text-center text-white rounded-pill"
          role="button"
        >
          Get Started
        </a>
      </Link>
    </div>
  );
}
