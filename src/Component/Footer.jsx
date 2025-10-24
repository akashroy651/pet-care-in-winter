import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <h1>hello iam footer </h1>
      <footer className="w-full border-t p-6 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
          <div>
            <h4 className="font-bold">Contact</h4>
            <p>email@example.com | +880-1XXXXXXXXX</p>
          </div>
          <div>
            <h4 className="font-bold">Social</h4>
            <div className="flex gap-3">
              <a href="#" target="_blank" rel="noreferrer">
                Facebook
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                Twitter
              </a>
            </div>
          </div>
          <div>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
