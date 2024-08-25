import React, { useState } from "react";

export default function Drawer({ children, isOpen, setIsOpen }) {
  const [tab, setTab] = useState(1);
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <div className="flex justify-center mt-3">
            <nav className="flex gap-6" aria-label="Tabs">
              <button
                href="#"
                className={
                  tab === 1
                    ? "shrink-0 rounded-lg bg-sky-100 p-2 text-sm font-medium text-sky-600"
                    : "shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                }
                onClick={() => setTab(1)}
              >
                Messages
              </button>

              <button
                href="#"
                className={
                  tab === 2
                    ? "shrink-0 rounded-lg bg-sky-100 p-2 text-sm font-medium text-sky-600"
                    : "shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                }
                onClick={() => setTab(2)}
                aria-current="page"
              >
                Notifications
              </button>
            </nav>
          </div>
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
