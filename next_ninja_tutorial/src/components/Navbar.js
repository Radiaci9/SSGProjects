import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" height={128} width={165} />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/rad">Rad Listing</Link>
    </nav>
  );
}
 
export default Navbar;