import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const leftNavItems = [
  { label: "Home", href: "/" },
  { label: "Espaço", href: "/espaco" },
  { label: "Sobre", href: "/sobre" },
];

const rightNavItems = [
  { label: "Especialidades", href: "/especialidades" },
  { label: "Consultas", href: "/consultas" },
  { label: "Contacto", href: "/contacto" },
];

export const MainNavigationSection = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav className="flex w-full items-center justify-between px-6 py-6 lg:py-12 relative z-50">

      {/* Desktop Left Nav — flex-1 justify-end so logo stays centred */}
      <div className="hidden lg:flex flex-1 justify-end pr-[84px]">
        <NavigationMenu>
          <NavigationMenuList className="flex items-start gap-[75px]">
            {leftNavItems.map((item, index) => (
              <NavigationMenuItem key={`left-nav-${index}`}>
                <NavigationMenuLink asChild>
                  <Link
                    href={item.href}
                    className={`[font-family:'Old_Standard_TT',Helvetica] font-normal italic text-lg tracking-[0] leading-[30px] cursor-pointer relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-px after:bg-[#B84C32] after:transition-all after:duration-300 hover:text-[#B84C32] hover:after:w-full transition-colors ${location === item.href ? 'text-[#B84C32] after:w-full' : 'text-textoparagraph after:w-0'}`}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile: spacer to centre logo */}
      <div className="lg:hidden w-8 flex-shrink-0" />

      {/* Logo */}
      <Link href="/" className="flex-1 flex justify-center lg:flex-none flex-shrink-0">
        <img
          className="w-[130px] lg:w-[150px] h-auto cursor-pointer"
          alt="Logo"
          src="/figmaAssets/logo.svg"
        />
      </Link>

      {/* Desktop Right Nav — flex-1 justify-start so logo stays centred */}
      <div className="hidden lg:flex flex-1 justify-start pl-[84px]">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-[46px]">
            {rightNavItems.map((item, index) => (
              <NavigationMenuItem key={`right-nav-${index}`}>
                <NavigationMenuLink asChild>
                  <Link
                    href={item.href}
                    className={`[font-family:'Old_Standard_TT',Helvetica] font-normal italic text-lg tracking-[0] leading-[30px] cursor-pointer relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-px after:bg-[#B84C32] after:transition-all after:duration-300 hover:text-[#B84C32] hover:after:w-full transition-colors ${location === item.href ? 'text-[#B84C32] after:w-full' : 'text-textoparagraph after:w-0'}`}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden text-textoparagraph flex-shrink-0 rounded-full border border-[rgba(137,52,32,0.3)] hover:bg-transparent active:bg-transparent"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-bg-lara border-b border-medium-carmine/10 shadow-xl p-8 flex flex-col items-center gap-6 lg:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          {[...leftNavItems, ...rightNavItems].map((item, index) => (
            <Link key={`mobile-nav-${index}`} href={item.href}>
              <span
                className="[font-family:'Old_Standard_TT',Helvetica] font-normal italic text-textoparagraph text-2xl cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
