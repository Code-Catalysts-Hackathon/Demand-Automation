import React from 'react';
import { APP_NAME } from '../../config/constants';

export default function Footer({ className = '' }) {
  const year = new Date().getFullYear();

  return (
    <footer aria-labelledby="footer-heading" className={`bg-primary-dark py-4 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <p className="text-sm text-center leading-5 text-white">
          &copy; {year} {APP_NAME}, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
