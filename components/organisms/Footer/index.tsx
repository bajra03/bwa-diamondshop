import Image from "next/image";
import Link from "next/link";
import FooterLink from "./FooterLink";

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <Link href="/">
                <a className="mb-30">
                  <Image src="/icon/logo.svg" width={60} height={60} />
                </a>
              </Link>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br /> untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright {new Date().getFullYear()}. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Company
                  </p>
                  <ul className="list-unstyled">
                    <FooterLink linkName="About Us" />
                    <FooterLink linkName="Press Release" />
                    <FooterLink linkName="Terms of Use" />
                    <FooterLink linkName="Privacy & Policy" />
                  </ul>
                </div>
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Support
                  </p>
                  <ul className="list-unstyled">
                    <FooterLink linkName="Refund Policy" />
                    <FooterLink linkName="Unlock Rewards" />
                    <FooterLink linkName="Live Chatting" />
                  </ul>
                </div>
                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Connect
                  </p>
                  <ul className="list-unstyled">
                    <FooterLink
                      href="mailto:hallo@diamondshop.com"
                      linkName="hallo@diamondshop.com"
                    />
                    <FooterLink
                      href="mailto:team@diamondshop.com"
                      linkName="team@diamondshop.com"
                    />
                    <FooterLink
                      href="https://goo.gl/maps/VaPXsGmH9jL3ueZ17"
                      linkName="Denpasar, Bali"
                      target="_blank"
                    />
                    <FooterLink
                      href="tel:+6281180123321"
                      linkName="081180123321"
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
