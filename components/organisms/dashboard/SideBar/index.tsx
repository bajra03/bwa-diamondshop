import Profile from "./Profile";
import SidebarFooter from "./SidebarFooter";
import SidebarLink from "./SidebarLink";

export default function SideBar() {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile name="Admin" email="admin@admin.com" />
        <div className="menus">
          <SidebarLink
            title="Overview"
            icon="icon-overview"
            link="/member"
            isActive
          />
          <SidebarLink
            title="Transactions"
            icon="icon-transaction"
            link="/member/transactions"
          />
          <SidebarLink title="Messages" icon="icon-message" link="/member" />
          <SidebarLink title="Card" icon="icon-card" link="/member" />
          <SidebarLink title="Rewards" icon="icon-reward" link="/member" />
          <SidebarLink
            title="Settings"
            icon="icon-setting"
            link="/member/edit"
          />
          <SidebarLink title="Log Out" icon="icon-logout" />
        </div>
        <div className="sidebar-footer pt-73 pe-30">
          <SidebarFooter />
        </div>
      </div>
    </section>
  );
}
