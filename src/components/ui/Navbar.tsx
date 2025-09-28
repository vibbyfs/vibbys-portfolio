import Link from 'next/link';
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@radix-ui/react-dropdown-menu';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full py-4 px-6 bg-transparent z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-end">

        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="px-3 py-2 rounded-md hover:bg-gray-100 transition">
              Menu
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              sideOffset={8}
              className="min-w-[150px] bg-white rounded-md"
            >
              <DropdownMenuLabel className="px-3 py-2 text-sm font-medium">Navigation</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href="#summary" className="block w-full px-3 py-2 text-sm">Summary</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#education" className="block w-full px-3 py-2 text-sm">Education</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#work" className="block w-full px-3 py-2 text-sm">Work Experience</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#skills" className="block w-full px-3 py-2 text-sm">Skills</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#projects" className="block w-full px-3 py-2 text-sm">Projects</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#certifications" className="block w-full px-3 py-2 text-sm">Certifications</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
