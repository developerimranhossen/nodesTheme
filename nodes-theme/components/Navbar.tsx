import Link from "next/link";
import CustomLink from "./CustomLink";

const navs = [
  {name: "Home", path: "/"},
  {name: "About", path: "/about"},
  {name: "Services", path: "/services"},
  {name: "Pages", path: "/pages"},
  {name: "Blogs", path: "/blogs"},
  {name: "Elements", path: "/elements"},
  {name: "Contact", path: "/contact"},

]
function Navbar() {
  return (
    <nav className="bg-background-fill-surface shadow-background-xsm">
      <div className="nt-max-container flex justify-between items-center py-6">
        <Link
          href="/"
          className="text-[24px] font-medium bg-orchid-twilight bg-clip-text text-fill-color-transparent"
        >
          {/* after logo here */}
          nODEStHEME
        </Link>
        <ul className="flex justify-center items-center gap-8 text-center">
          {navs.map(nav => (<li key={nav.name}>
            <CustomLink path={nav.path}>{nav.name}</CustomLink>
          </li>))}
         
        </ul>
        <div className="flex items-center gap-6 ">
          <Link href="sign-in" className="text-component-text-primary ">
            Sign in
          </Link>
          <Link
            href="/sign-up"
            className=" nt-btn text-component-text-light-fixed bg-component-fill-primary"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
