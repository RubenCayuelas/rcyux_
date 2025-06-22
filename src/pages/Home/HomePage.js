import React from 'react';
import instagram_logo from 'assets/images/instagram_logo.svg';
import 'assets/styles/HomePage.css';

export function HomePage() {
  return (
    <div data-testid="homepage">
      <div className="background">
        <h1>
          <img src={instagram_logo} className="instagram-logo" alt="Instagram Logo" />
          rcyux_
        </h1>
      </div>
      <div className="content">
        <h2>Hello World</h2>
        <div>
          <p>
            . . .
          </p>
        </div>
      </div>
    </div>
  );
}
