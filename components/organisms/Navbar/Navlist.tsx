import cx from "classnames";
import Link from "next/link";

interface MenuProps {
  title: string; // required
  active?: boolean; // not required
  href: string;
}

export default function Navlist(props: Partial<MenuProps>) {
  const { title, active, href = "/" } = props;
  const classTitle = cx({
    "nav-link": true,
    active: active,
  });
  return (
    <li className="nav-item my-auto">
      <Link href={href}>
        <a className={classTitle} aria-current="page">
          {title}
        </a>
      </Link>
    </li>
  );
}
