/* eslint-disable jsx-a11y/control-has-associated-label */
import Link from 'next/link';
import React from 'react';
import { GoHomeFill } from 'react-icons/go';
import { FaCar } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="w-full bg-slate-500 h-28 rounded-b-xl">
      <div className="flex justify-center">
        <div className="flex flex-col mt-4 text-2xl">
          <Link href="/">
            <GoHomeFill />
          </Link>

          <Link className="mt-4" href="/oil-control">
            <FaCar />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
