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
    <nav className="nt-nav">
      <div >
        <Link
          href="/"
        >
          {/* after logo here */}
          nODEStHEME
        </Link>
        <ul>
          {navs.map(nav => (<li key={nav.name}>
            <CustomLink path={nav.path}>{nav.name}</CustomLink>
          </li>))}
         
        </ul>
        <div>
          <Link href="sign-in">
            Sign in
          </Link>
          <Link
            href="/sign-up"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
