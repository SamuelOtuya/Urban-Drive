"use client";

import { Navbar } from "flowbite-react";
import logo from "../../assets/logo.png";

export function DesktopHeader() {
  return (
    <Navbar fluid rounded className="fixed z-50 w-full">
      <Navbar.Brand href="https://flowbite-react.com">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span> */}
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Find A Car</Navbar.Link>
        <Navbar.Link href="#">About Us</Navbar.Link>
        <Navbar.Link href="#">Contact Us</Navbar.Link>
        <Navbar.Link href="#">Blogs</Navbar.Link>
        <Navbar.Link href="#">FAQs</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
