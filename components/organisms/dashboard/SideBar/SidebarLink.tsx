import Image from "next/image";
import Link from "next/link";
import cx from "classnames";

interface SidebarLinkProps {
  icon:
    | "icon-overview"
    | "icon-transaction"
    | "icon-message"
    | "icon-card"
    | "icon-reward"
    | "icon-setting"
    | "icon-logout";
  title: string;
  link: string;
  active?: boolean;
}

export default function SidebarLink(props: Partial<SidebarLinkProps>) {
  const { icon, title, link = "/", active } = props;
  const classItem = cx({
    item: true,
    "mb-30": true,
    active: active,
  });
  return (
    <div className={classItem}>
      <div className="me-3">
        <Image
          src={`/icon/${icon}.svg`}
          width={25}
          height={25}
          alt="icon sidebar"
        />
      </div>
      <p className="item-title m-0">
        <Link href={link}>
          <a href="" className="text-lg text-decoration-none">
            {title}
          </a>
        </Link>
      </p>
    </div>
  );
}
