import Link from "next/link";
import CustomLink from "./CustomLink";

function Navbar() {
  return (
    <nav className="bg-background-fill-surface shadow-background-xsm">
      <div className="max-container flex justify-between items-center py-6">
        <Link
          href="/"
          className="text-2xl font-medium bg-orchid-twilight bg-clip-text text-fill-color-transparent"
        >
          {/* after logo here */}
          nODEStHEME
        </Link>
        <ul className="flex justify-center items-center gap-8 leading-6 text-center ">
          <li>
            <CustomLink path={"/"}>Home</CustomLink>
          </li>
          <li>
            <CustomLink path={"/about"}>About</CustomLink>
          </li>
          <li>
            <CustomLink path={"/admission"}>Admission</CustomLink>
          </li>
          <li>
          <CustomLink path={"/pages"}>Pages</CustomLink>
          </li>
          <li>
            <CustomLink path="blogs">Blogs</CustomLink>
          </li>
          <li>
            <CustomLink path="/elements">Elements</CustomLink>
          </li>
          <li>
            <CustomLink path="/contact">Contact</CustomLink>
          </li>
        </ul>
        <div className="flex items-center gap-6 leading-6">
          <Link
            href="sign-in"
            className="text-component-text-primary "
          >
            Sign in
          </Link>
          <Link
            href="sign-up"
            className="py-3 px-6 rounded-[8px] text-component-text-light-fixed bg-component-fill-primary"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
