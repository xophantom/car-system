import Link from 'next/link';
import React from 'react';
import { GoHomeFill } from 'react-icons/go';
import { FaCar } from 'react-icons/fa';

const Header: React.FC = () => {
  //
  //
  return (
    <header className="w-full bg-slate-500 h-28 rounded-b-xl">
      <div className="flex justify-center">
        <nav className="flex flex-col mt-4 text-2xl">
          <Link className="flex justify-center" href="/home">
            <GoHomeFill />
          </Link>
          <Link className="flex justify-center mt-4" href="/oil-control">
            <FaCar />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
