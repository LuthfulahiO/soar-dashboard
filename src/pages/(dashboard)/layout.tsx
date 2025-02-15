import { Outlet, NavLink } from "react-router";

const DashboardNavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <NavLink
    to={to}
    className={({ isActive }) => (isActive ? "text-blue-500" : "")}
  >
    {children}
  </NavLink>
);

export default function DashboardLayout() {
  return (
    <div>
      <nav className="bg-primary px-8 py-4 text-white">
        <ul className="flex gap-4">
          <li>
            <DashboardNavLink to="/">Overview</DashboardNavLink>
          </li>
          <li>
            <DashboardNavLink to="/settings">Settings</DashboardNavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
