import { sidebarLinks } from "@/lib/links";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 h-full border-r border-border bg-muted/40 backdrop-blur-sm text-foreground">
      {/* HEADER */}
      <div className="p-5 border-b border-border">
        <h1 className="text-xl font-bold tracking-tight">
          Shiftoria
        </h1>

        <p className="text-xs text-muted-foreground mt-1">
          Workforce Management
        </p>
      </div>

      {/* NAV */}
      <nav className="flex flex-col gap-1 p-3 overflow-y-auto">
        {sidebarLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="
              px-3 py-2 rounded-xl text-sm font-medium
              text-muted-foreground
              hover:bg-background
              hover:text-foreground
              transition-colors duration-200
              flex items-center
            "
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;