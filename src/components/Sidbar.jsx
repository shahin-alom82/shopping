
import Link from 'next/link';
const Sidebar = () => {
      return (
            <div className="h-full w-44 bg-blue-500 text-white">
                  <div className=" px-10 py-4 text-xl flex flex-col">
                        <Link href="/" className="text-white hover:underline">Home</Link>
                        <Link href="/sneaker" className="text-white hover:underline mt-4">Sneaker</Link>
                        <Link href="/pents" className="text-white hover:underline mt-4">Pents</Link>
                        <Link href="/boot" className="text-white hover:underline mt-4">Mens Boot</Link>
                        <Link href="/bag" className="text-white hover:underline mt-4">Bag</Link>
                        <Link href="/cap" className="text-white hover:underline mt-4">Cap</Link>
                        <Link href="/earphones" className="text-white hover:underline mt-4">Earphones</Link>
                        <Link href="/bottle" className="text-white hover:underline mt-4">Bottle</Link>
                  </div>
            </div>
      );
};

export default Sidebar;
