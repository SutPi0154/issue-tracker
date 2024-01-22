import Link from "next/link";
import { AiFillBug } from "react-icons/ai";

const Navbar = () => {
  const links = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Issue",
      href: "/issue",
    },
  ];
  return (
    <nav className=" flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href={"/"}>
        <AiFillBug />
      </Link>
      <ul className=" flex space-x-6 ">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className=" text-zinc-500 hover:text-zinc-800 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;