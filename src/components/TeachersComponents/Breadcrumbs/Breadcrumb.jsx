import React from "react";
import { MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const DynamicBreadcrumb = ({ items }) => {
  const navigate = useNavigate();

  // Function to handle navigation
  const handleNavigation = (href) => {
    navigate(href);
  };

  // Function to render dropdown items
  const renderDropdownItems = (dropdownItems) => (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1">
        <MoreHorizontal className="h-4 w-4" />
        <span className="sr-only">Toggle menu</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {dropdownItems.map((item, idx) => (
          <DropdownMenuItem
            key={idx}
            onClick={() => {
              if (item.href) {
                handleNavigation(item.href);
              }
              item.onClick?.();
            }}
            className="cursor-pointer"
          >
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  // Function to render the appropriate item type
  const renderBreadcrumbItem = (item, index, isLast) => {
    if (item.type === "dropdown") {
      return (
        <BreadcrumbItem key={index}>
          {renderDropdownItems(item.items)}
        </BreadcrumbItem>
      );
    }

    return (
      <BreadcrumbItem key={index}>
        {isLast ? (
          <BreadcrumbPage>{item.label}</BreadcrumbPage>
        ) : (
          <div
            onClick={() => handleNavigation(item.href)}
            className="inline-block text-[#FF006B] hover:text-[#D4005A] cursor-pointer"
          >
            {item.label}
          </div>
        )}
      </BreadcrumbItem>
    );
  };

  return (
    <Breadcrumb>
      <BreadcrumbList className="text-[#FF006B]">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {renderBreadcrumbItem(item, index, index === items.length - 1)}
            {index < items.length - 1 && (
              <BreadcrumbSeparator className="text-[#FF006B]" />
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DynamicBreadcrumb;
