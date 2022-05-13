import Overview from "../../components/organisms/dashboard/Overview";
import SideBar from "../../components/organisms/dashboard/SideBar";

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <SideBar />
      <main className="main-wrapper">
        <Overview />
      </main>
    </section>
  );
}
