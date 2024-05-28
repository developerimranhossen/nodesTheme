import Link from "next/link";
import CustomLink from "./CustomLink";

function Navbar() {
  return (
    <nav className="bg-background-fill-surface shadow-background-xsm">
      <div className="max-container flex justify-between items-center py-6">
        <Link
          href="/"
          className="text-[24px] font-medium bg-orchid-twilight bg-clip-text text-fill-color-transparent"
        >
          {/* after logo here */}
          nODEStHEME
        </Link>
        <ul className="flex justify-center items-center gap-8 text-center">
          <li>
            <CustomLink path={"/"}>Home</CustomLink>
          </li>
          <li>
            <CustomLink path={"/about"}>About</CustomLink>
          </li>
          <li>
            <CustomLink path={"/services"}>
              Services
              <svg
                className="inline ml-[13.21px]"
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="6"
                viewBox="0 0 11 6"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.845964 0.942596C1.0616 0.673058 1.4549 0.629357 1.72444 0.844988L5.50067 3.86597L9.27691 0.844988C9.54645 0.629357 9.93975 0.673058 10.1554 0.942596C10.371 1.21214 10.3273 1.60544 10.0578 1.82107L5.89111 5.15441C5.66285 5.33702 5.3385 5.33702 5.11024 5.15441L0.943573 1.82107C0.674034 1.60544 0.630333 1.21214 0.845964 0.942596Z"
                  fill="#28303F"
                />
              </svg>
            </CustomLink>
          </li>
          <li>
            <CustomLink path={"/pages"}>
              Pages
              <svg
                className="inline ml-[13.21px]"
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="6"
                viewBox="0 0 11 6"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.845964 0.942596C1.0616 0.673058 1.4549 0.629357 1.72444 0.844988L5.50067 3.86597L9.27691 0.844988C9.54645 0.629357 9.93975 0.673058 10.1554 0.942596C10.371 1.21214 10.3273 1.60544 10.0578 1.82107L5.89111 5.15441C5.66285 5.33702 5.3385 5.33702 5.11024 5.15441L0.943573 1.82107C0.674034 1.60544 0.630333 1.21214 0.845964 0.942596Z"
                  fill="#28303F"
                />
              </svg>
            </CustomLink>
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
        <div className="flex items-center gap-6 ">
          <Link href="sign-in" className="text-component-text-primary ">
            Sign in
          </Link>
          <Link
            href="/sign-up"
            className=" btn text-component-text-light-fixed bg-component-fill-primary"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
