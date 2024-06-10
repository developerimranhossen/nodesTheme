import Link from "next/link";
import CustomLink from "./CustomLink";

const navs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Blogs", path: "/blogs" },
  { name: "Elements", path: "/elements" },
  { name: "Contact", path: "/contact" },
];
function Navbar() {
  return (
    <nav className="nt-nav">
      <div className="nt-nav-container">
        <Link className="nt-logo" href="/">
          {/* after logo here */}
          nODEStHEME
        </Link>
        <ul className="nt-main-ul">
          {navs.map((nav) => (
            <li key={nav.name}>
              <CustomLink path={nav.path}>{nav.name}</CustomLink>
            </li>
          ))}
          <li className="relative group px-3 py-2">
          <button className="hover:opacity-50 cursor-default">Pages</button>
          <div
            className="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[400px] transform">
            <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl">
              <div
                className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm">
              </div>
              <div className="relative z-10 flex justify-around">
                <div className="">
                  <p>Link1</p>
                  <ul>
                    <li>sub-link</li>
                    <li>sub-link</li>
                    <li>sub-link</li>
                  </ul>
                </div>
                <div className="">
                  <p>Link1</p>
                  <ul>
                    <li>sub-link</li>
                    <li>sub-link</li>
                    <li>sub-link</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
        </ul>
        <div className="nt-nav-link-wrap">
          <Link href="sign-in">Sign in</Link>
          <Link href="/registration">Sign up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
