"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({link}) => {
    const pathName = usePathname();
        return (
            <Link className={`rounded p-1 ${pathName === link.url && "bg-gradient-to-b from-slate-500 to-zinc-600 text-white"}`} href={link.url}>
                {link.title}
            </Link>
        )  
    };
  
export default NavLink;