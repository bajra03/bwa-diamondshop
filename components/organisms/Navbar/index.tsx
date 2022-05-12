import Image from "next/image";
import Link from "next/link";
import Auth from "./Auth";
import Navlist from "./Navlist";
import TogleMenu from "./TogleMenu";

export default function Navbar() {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand">
              <Image src="/icon/logo.svg" width={60} height={60} />
            </a>
          </Link>
          <TogleMenu />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              <Navlist title="Home" active />
              <Navlist title="Games" href="/games" />
              <Navlist title="Rewards" href="/rewards" />
              <Navlist title="Discover" href="/discover" />
              <Navlist title="Global Rank" href="/rank" />
              <Auth />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
