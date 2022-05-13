import Link from "next/link";
interface FooterLinkProps {
  href: string;
  linkName: string;
  target?: string;
}
export default function FooterLink(props: Partial<FooterLinkProps>) {
  const { href = "/", linkName, target } = props;
  return (
    <li className="mb-6">
      <Link href={href} target={target}>
        <a className="text-lg color-palette-1 text-decoration-none">
          {linkName}
        </a>
      </Link>
    </li>
  );
}
