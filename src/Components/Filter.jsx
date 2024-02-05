import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Filter = (props) => {
  const handleGenreSelection = (event) => {
    const selection = event.target.innerHTML.toLowerCase();
    props.getGenre(selection);
  };

  const handleAllSelection = () => {
    props.getGenre("");
  };

  return (
    <div className="mr-10 mt-10">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-limeGreen text-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-inset ring-gray-300 hover:bg-gray-50">
            Filter by Genre
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-gray-100 rounded-2xl bg-dBlue text-white shadow-lg ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item as="div">
              <div
                className="block px-4 py-3 text-sm cursor-pointer  hover:text-limeGreen"
                onClick={handleAllSelection}
              >
                All
              </div>
            </Menu.Item>

            <Menu.Item as="div">
              <div
                className="block px-4 py-3 text-sm cursor-pointer  hover:text-limeGreen"
                onClick={handleGenreSelection}
              >
                Animation
              </div>
            </Menu.Item>

            <Menu.Item as="div">
              <div
                className="block px-4 py-3 text-sm cursor-pointer  hover:text-limeGreen"
                onClick={handleGenreSelection}
              >
                Adventure
              </div>
            </Menu.Item>

            <Menu.Item as="div">
              <div
                className="block px-4 py-3 text-sm cursor-pointer  hover:text-limeGreen"
                onClick={handleGenreSelection}
              >
                Family
              </div>
            </Menu.Item>

            <Menu.Item as="div">
              <div
                className="block px-4 py-3 text-sm cursor-pointer  hover:text-limeGreen"
                onClick={handleGenreSelection}
              >
                Comedy
              </div>
            </Menu.Item>

            <Menu.Item as="div">
              <div
                className="block px-4 py-3 text-sm cursor-pointer  hover:text-limeGreen"
                onClick={handleGenreSelection}
              >
                Romance
              </div>
            </Menu.Item>

            <Menu.Item as="div">
              <div
                className="block px-4 py-3 text-sm cursor-pointer  hover:text-limeGreen"
                onClick={handleGenreSelection}
              >
                Drama
              </div>
            </Menu.Item>

            <Menu.Item as="div">
              <div
                className="block px-4 py-3 text-sm cursor-pointer  hover:text-limeGreen"
                onClick={handleGenreSelection}
              >
                Action
              </div>
            </Menu.Item>

            <Menu.Item as="div">
              <div
                className="block px-4 py-3 text-sm cursor-pointer  hover:text-limeGreen"
                onClick={handleGenreSelection}
              >
                Crime
              </div>
            </Menu.Item>

            <Menu.Item as="div">
              <div
                className="block px-4 py-3 text-sm cursor-pointer  hover:text-limeGreen"
                onClick={handleGenreSelection}
              >
                Thriller
              </div>
            </Menu.Item>

            <Menu.Item as="div">
              <div
                className="block px-4 py-3 text-sm cursor-pointer  hover:text-limeGreen"
                onClick={handleGenreSelection}
              >
                Fantasy
              </div>
            </Menu.Item>

            <Menu.Item as="div">
              <div
                className="block px-4 py-3 text-sm cursor-pointer  hover:text-limeGreen"
                onClick={handleGenreSelection}
              >
                Horror
              </div>
            </Menu.Item>

            <Menu.Item as="div">
              <div
                className="block px-4 py-3 text-sm cursor-pointer  hover:text-limeGreen"
                onClick={handleGenreSelection}
              >
                Mystery
              </div>
            </Menu.Item>

            <Menu.Item as="div">
              <div
                className="block px-4 py-3 text-sm cursor-pointer hover:text-limeGreen"
                onClick={handleGenreSelection}
              >
                Biography
              </div>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Filter;
