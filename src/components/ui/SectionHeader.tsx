"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./dropdown-menu";

type Props = {
  title: React.ReactNode;
  id?: string;
};

export default function SectionHeader({ title, id }: Props) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 id={id} className="text-2xl md:text-3xl font-semibold">
        {title}
      </h2>
      <DropdownMenu>
        <DropdownMenuTrigger className="px-2 py-1 rounded-md">
          •••
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          sideOffset={8}
          className="min-w-[160px]"
        >
          <DropdownMenuLabel className="px-3 py-2 text-sm font-medium">
            Section actions
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {id ? (
            <>
              <DropdownMenuItem asChild>
                <a href={`#${id}`}>Go to section</a>
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => {
                  const url = `${window.location.origin}${window.location.pathname}#${id}`;
                  navigator.clipboard?.writeText(url);
                }}
              >
                Copy link
              </DropdownMenuItem>
            </>
          ) : (
            <DropdownMenuItem
              onSelect={() =>
                navigator.clipboard?.writeText(window.location.href)
              }
            >
              Copy link
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
