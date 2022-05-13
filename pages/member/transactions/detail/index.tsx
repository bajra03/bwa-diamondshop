import SideBar from "../../../../components/organisms/dashboard/SideBar";
import TransactionDetailContent from "../../../../components/organisms/dashboard/Transaction/TransactionDetailContent";

export default function TransactionDetail() {
  return (
    <section className="transactions-detail overflow-auto">
      <SideBar activeMenu="transactions" />
      <TransactionDetailContent />
    </section>
  );
}
