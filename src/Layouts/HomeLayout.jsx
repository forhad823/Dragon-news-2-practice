import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/HomeLayout/LeftAside";
import RightAside from "../Components/HomeLayout/RightAside";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header />

        {/* LatestNews sticks to top after Header scrolls away */}
        <div>
          <section className="w-11/12 mx-auto my-3">
            <LatestNews />
          </section>
        </div>
      </header>
      <nav className="w-11/12 mx-auto my-3 sticky top-0 z-40 bg-white">
        <Navbar />
      </nav>
      {/* main uses a fixed height and lets asides scroll independently */}
      <main className="w-11/12 mx-auto my-3 grid grid-cols-12 items-start gap-5">
        {/* LeftAside sticks below LatestNews+Navbar, scrollable inside */}
        <aside className="col-span-3 sticky top-[var(--stuck-top)] max-h-[calc(100vh-var(--stuck-top))] overflow-y-auto">
          <LeftAside />
        </aside>

        {/* Outlet scrolls naturally, no sticky */}
        <section className="main col-span-6">
          <Outlet />
        </section>

        {/* RightAside same as LeftAside */}
        <aside className="col-span-3 sticky top-[var(--stuck-top)] max-h-[calc(100vh-var(--stuck-top))] overflow-y-auto">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
