import React from "react";
import { Link } from "react-router";

const Footer = () => {
  const facebookClick = () => {
    window.open("https://www.facebook.com/", "_blank");
  };

  const twitterClick = () => {
    window.open("https://x.com/", "_blank");
  };

  return (
    <div>
      <footer className="w-full border-t p-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-center md:text-left">
          <div>
            <h4 className="font-bold text-lg mb-1">Contact</h4>
            <p>email@example.com | +880-1XXXXXXXXX</p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-1">Social</h4>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                onClick={facebookClick}
                className="hover:underline"
                rel="noreferrer"
              >
                Facebook
              </a>
              <a
                onClick={twitterClick}
                className="hover:underline"
                rel="noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>

          <div className="flex justify-end">
            <Link
              className="font-medium text-center"
            >
              Privacy Policy
              <p className="text-sm text-gray-500 mt-1 hover:underline w-80">
                “We respect your privacy and will never share your personal
                information with third parties.”
              </p>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
