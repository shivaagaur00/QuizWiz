import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 w-full flex items-center justify-between">
      <div className="flex-1 text-left">
        <div>Contact us: QuizWiz.com</div>
      </div>
      <div className="flex-1">
        <a
          href="https://github.com/Prashant-pathak-01/QuizWiz"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 hover:text-gray-400"
        >
          <GitHubIcon style={{ fontSize: 24 }} />
        </a>
      </div>
      <div className="flex-1 text-right">
        <div>Terms of Service | Privacy Policy @2024</div>
      </div>
    </footer>
  );
};

export default Footer;
