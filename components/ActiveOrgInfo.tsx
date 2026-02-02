"use client";

import { useOrganization } from "@clerk/nextjs";

export default function ActiveOrgInfo() {
  const { organization, membership, isLoaded } = useOrganization();

  if (!isLoaded || !organization || !membership) return null;

  return (
    <div className="flex flex-col leading-tight max-w-30 truncate">
      <span className="text-xs font-medium text-foreground truncate">
        {organization.name}
      </span>
      <span className="text-[11px] text-muted-foreground capitalize">
        {membership.role}
      </span>
    </div>
  );
}
