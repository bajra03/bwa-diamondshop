import React from "react";
import SideBar from "../../../components/organisms/dashboard/SideBar";
import Transaction from "../../../components/organisms/dashboard/Transaction";

export default function MemberTransaction() {
  return (
    <section className="transactions overflow-auto">
      <SideBar activeMenu="transactions" />
      <Transaction />
    </section>
  );
}
