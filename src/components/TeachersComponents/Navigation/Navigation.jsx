import React from "react";
import logo from "../../../../public/favicon.png";

import { User, Settings, CreditCard, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="border-b border-[#FF006B]/10">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex flex-row items-center gap-1">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            <h1 className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-pink-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              Teacher's Dashboard
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="hover:bg-[#FF006B]/10 focus:bg-[#FF006B]/5 group"
                >
                  <User className="h-5 w-5 text-[#FF006B] group-hover:text-[#FF006B]" />
                  <span className="ml-2 group-hover:text-[#FF006B]">
                    Account
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-56"
                align="end"
                style={{
                  borderColor: "#FF006B20",
                }}
              >
                <DropdownMenuLabel className="text-[#FF006B]">
                  My Account
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-[#FF006B]/10" />
                <DropdownMenuItem className="cursor-pointer hover:bg-[#FF006B]/5 focus:bg-[#FF006B]/5">
                  <Settings className="mr-2 h-4 w-4 text-[#FF006B]" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-[#FF006B]/5 focus:bg-[#FF006B]/5">
                  <CreditCard className="mr-2 h-4 w-4 text-[#FF006B]" />
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-[#FF006B]/10" />
                <DropdownMenuItem className="cursor-pointer text-[#FF006B] hover:bg-[#FF006B]/5 focus:bg-[#FF006B]/5">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="hover:bg-[#FF006B]/10 focus:bg-[#FF006B]/5"
                >
                  <User className="h-5 w-5 text-[#FF006B]" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-48"
                align="end"
                style={{
                  borderColor: "#FF006B20",
                }}
              >
                <DropdownMenuLabel className="text-[#FF006B]">
                  My Account
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-[#FF006B]/10" />
                <DropdownMenuItem className="cursor-pointer hover:bg-[#FF006B]/5 focus:bg-[#FF006B]/5">
                  <Settings className="mr-2 h-4 w-4 text-[#FF006B]" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-[#FF006B]/5 focus:bg-[#FF006B]/5">
                  <CreditCard className="mr-2 h-4 w-4 text-[#FF006B]" />
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-[#FF006B]/10" />
                <DropdownMenuItem className="cursor-pointer text-[#FF006B] hover:bg-[#FF006B]/5 focus:bg-[#FF006B]/5">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
