"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function CustomLink({ children, path }) {
    const pathName = usePathname()
    const active = pathName === path
  return (
    <div>
      <Link href={path} className={active ? 'text-component-text-primary': ''}>{children}</Link>
    </div>
  );
}

export default CustomLink;
