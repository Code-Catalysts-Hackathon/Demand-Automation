import React from 'react';
import LogoSVG from '../common/LogoSVG';

export default function HeaderDefault() {
  return (
    <header className="bg-primary-dark">
      <nav className="px-3">
        <LogoSVG />
      </nav>
    </header>
  );
}
