import React from "react";

export const Footer = () => {
  return (
    <footer className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-violet-800">
      <span className="block text-sm text-white sm:text-center">
        © 2022{" "}
        <a href="kevinlg.dev/" className="hover:underline">
          Kevin López González
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};
