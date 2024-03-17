// Navbar.tsx
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-baseline justify-between bg-white px-4 pt-8 pb-4">
        <div className="flex gap-3 text-[10px] absolute right-6 top-0 pt-2"><p>Help</p> <p>Order & Returns</p> <p>Hi, John</p></div>
      <div className="text-3xl font-bold text-black">ECOMMERCE</div>
      <div className="flex flex-grow justify-center">
        <Link href="/categories" passHref>
          <div className="mx-2 text-black font-semibold hover:text-gray-300">Categories</div>
        </Link>
        <Link href="/sale" passHref>
          <div className="mx-2 text-black font-semibold hover:text-gray-300">Sale</div>
        </Link>
        <Link href="/clearance" passHref>
          <div className="mx-2 text-black font-semibold hover:text-gray-300">Clearance</div>
        </Link>
        <Link href="/new-stock" passHref>
          <div className="mx-2 text-black font-semibold hover:text-gray-300">New Stock</div>
        </Link>
        <Link href="/trending" passHref>
          <div className="mx-2 text-black font-semibold hover:text-gray-300">Trending</div>
        </Link>
      </div>

      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-4 h-6 w-6 cursor-pointer text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a2 2 0 01-2-2V7a5 5 0 0110 0v12a2 2 0 01-2 2h-3m-4 0H5a2 2 0 01-2-2V7a2 2 0 012-2h1m6 10v4m0 0H9m4 0h2"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
