"use client";
import classNames from "classnames";
import Link from "next/link";
import React, { useState, useMemo } from "react";
import CollapseIcon from "../../../icons/CollapseIcon";
import { BookOpen, Home, LayoutDashboardIcon, LogOutIcon, NotebookPen, SquarePen, Utensils, MenuIcon, Bell, Settings } from "lucide-react";
import Image from "next/image";

const menuItems = [
  { id: 1, label: "Home", icon: Home, link: "/" },
  { id: 2, label: "Quiz", icon: SquarePen, link: "/dashboard/quiz" },
  { id: 3, label: "Daily Challenge", icon: NotebookPen, link: "/dashboard/daily-challenge" },
  { id: 4, label: "Diet Plan", icon: Utensils, link: "/dashboard/diet-plan" },
  { id: 5, label: "Get Inspired", icon: BookOpen, link: "/dashboard/get-inspired" },
];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const wrapperClasses = classNames(
    "lg:block h-screen px-4 pt-8 pb-4 bg-[#1A4457] flex justify-between flex-col rounded-r-3xl border-orange-200 border-r-1 hidden lg:z-10",
    {
      ["lg:w-60 w-16 border-r-2"]: !toggleCollapse,
      ["lg:w-20 w-16"]: toggleCollapse,
    }
  );
  
  const wrapperClassesMobile = classNames(
    "lg:hidden  px-4 pt-8 w-14 h-screen pb-4 bg-[#1A4457] flex justify-between flex-col rounded-r-3xl   z-1 top-0 ",
    {
      ["-translate-x-20 border-orange-0 border-r-0"]: !isPressed,
      ["translate-x-0 border-r-2 border-orange-200"]: isPressed,
      
    }
  );

  const profileAppear = classNames(
    "rounded-full ",
    {
      ["translate-x-6 opacity-0 z-1 "]: !isPressed,
      ["translate-x-0 opacity-100"]: isPressed,
      
    }
  );

  const collapseIconClasses = classNames(
    "p-4 rounded bg-light-lighter absolute right-0  ",
    {
      "rotate-180 scale-[1.5]  translate-x-5 ": toggleCollapse,
    }
  );
  
  const isPressedClasses = classNames(
    "bg-light-lighter",
    {
      "animate-bounce animate-pulse": isPressed,
    }
  );
  

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };
  
  const handleMenuToggle = () => {
    setIsPressed(!isPressed);
  };

  return (
    <><div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className=" w-fit h-fit absolute top-5 right-5 items-center gap-3 hidden lg:flex">
      <Link href={"/dashboard"}><Settings className="hover:scale-125"/></Link>
          <Link href={"/dashboard"}><Bell className="hover:scale-125"/></Link>
          <Link href={"/dashboard"}><Image src="/profileicon.svg" alt={""}  height={40} width={40}  className="hover:scale-125"/></Link>
        </div>
      <div className="flex flex-col ">
        <div className="flex items-center justify-between relative">
          <Link href={"/"}>
            <div className="flex items-center pl-1 gap-4 hover:scale-105">

              <div
                className={classNames("mt-2 Serene w-fit h-14 text-orange-100 text-5xl font-extrabold font-['Judson'] scale-125 -translate-x-1", {})}
              >
                S
              </div>
              <div
                className={classNames("mt-2 Serene w-fit h-14 text-orange-100 text-5xl font-medium font-['Judson'] -translate-x-4", {
                  hidden: toggleCollapse,
                })}
              >
                ERENE
              </div>

            </div>
          </Link>
          {isCollapsible && (
            <button
              className={classNames(collapseIconClasses, 'mt-[70vh] translate-x-8 scale-50')}
              onClick={handleSidebarToggle}
            >
              <CollapseIcon />
            </button>
          )}
        </div>

        <div className="w-[2.5rem] h-full flex flex-col justify-between items-stretch gap-64 ">

          <div className="flex flex-col gap-10 mt-10">
            <Link href={"/dashboard"} className="">
              <div className="flex hover:scale-150 scale-125 translate-x-1">
                <div>
                  <LayoutDashboardIcon color="white " className="" />
                </div>

                {!toggleCollapse && (
                  <span className={classNames("text-md font-medium text-text-light text-white ml-2 -translate-x-1")}>
                    Dashboard
                  </span>
                )}
              </div>
            </Link>

            <Link href={"/dashboard"}>
              <div className="flex hover:scale-125">
                <div>
                  <SquarePen color="white" />
                </div>

                {!toggleCollapse && (
                  <span className={classNames("text-md font-medium text-text-light text-white ml-2")}>
                    Quiz
                  </span>
                )}
              </div>
            </Link>

            <Link href={"/dashboard"}>
              <div className="flex hover:scale-125">
                <div>
                  <NotebookPen color="white" />
                </div>

                {!toggleCollapse && (
                  <span className={classNames("text-md font-medium text-text-light text-white ml-2")}>
                    Activities
                  </span>
                )}
              </div>
            </Link>
            <Link href={"/dashboard"}>
              <div className="flex hover:scale-125">
                <div>
                  <Utensils color="white" />
                </div>

                {!toggleCollapse && (
                  <span className={classNames("text-md font-medium text-text-light text-white ml-2 flex-row")}>
                    Diet
                  </span>
                )}
              </div>
            </Link>

            <Link href={"/dashboard"}>
              <div className="flex hover:scale-125">
                <div>
                  <BookOpen color="white" />
                </div>

                {!toggleCollapse && (
                  <span className={classNames("text-md font-medium text-text-light text-white ml-2")}>
                    Read
                  </span>
                )}
              </div>
            </Link>
          </div>
          <Link href={"/dashboard"}>
            <div className="flex mt-4 hover:scale-125 absolute bottom-10">
              <div className="flex ">
                <LogOutIcon color="white" />
              </div>

              {!toggleCollapse && (
                <span className={classNames("text-md font-medium text-text-light text-white ml-2")}>
                  Logout
                </span>
              )}
            </div>
          </Link>

        </div>
      </div>
    </div>

{/* Mobile */}

    <div className="lg:hidden">
      <div className="absolute top-5 right-5 flex gap-2 w-fit h-fit">
          <Image src="/profileicon.svg" alt={""}  height={40} width={40} className={classNames('-mt-[4.5rem]',profileAppear)} style={{ transition: "all 600ms cubic-bezier(0.2, 0, 0, 1) 0s" }}/>
          <div className="flex flex-col gap-2">
          <MenuIcon onClick={handleMenuToggle} className={classNames('z-10 ',isPressedClasses)}/>
          <Bell className={classNames(profileAppear)} style={{ transition: "all 600ms cubic-bezier(0.2, 0, 0, 1) 0s" }} />
          <Settings className={classNames(profileAppear)} style={{ transition: "all 600ms cubic-bezier(0.2, 0, 0, 1) 0s" }} />
          </div>
          </div>
          <div
      className={wrapperClassesMobile}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "all 600ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col ">
        <div className="flex items-center justify-between relative">
          <Link href={"/"}>
            <div className="flex items-center pl-1 gap-4 hover:scale-105">

              <div
                className={classNames(" -translate-y-3 Serene w-fit h-14 text-orange-100 text-5xl font-extrabold font-['Judson'] scale-125 -translate-x-1 z", {})}

              >
                S
              </div>
            </div>
          </Link>
        </div>

        <div className="w-[2.5rem] h-full flex flex-col justify-between items-stretch gap-64">

          <div className="flex flex-col gap-10 mt-10">
            <Link href={"/dashboard"} className="">
              <div className="flex hover:scale-150 scale-125 translate-x-1">
                <div>
                  <LayoutDashboardIcon color="white " className="" />
                </div>
              </div>
            </Link>

            <Link href={"/dashboard"}>
              <div className="flex hover:scale-125">
                <div>
                  <SquarePen color="white" />
                </div>

              </div>
            </Link>

            <Link href={"/dashboard"}>
              <div className="flex hover:scale-125">
                <div>
                  <NotebookPen color="white" />
                </div>
              </div>
            </Link>
            <Link href={"/dashboard"}>
              <div className="flex hover:scale-125">
                <div>
                  <Utensils color="white" />
                </div>
              </div>
            </Link>

            <Link href={"/dashboard"}>
              <div className="flex hover:scale-125">
                <div>
                  <BookOpen color="white" />
                </div>

              </div>
            </Link>
          </div>
          <Link href={"/dashboard"}>
            <div className="flex mt-4 hover:scale-125 absolute bottom-10">
              <div className="flex ">
                <LogOutIcon color="white" />
              </div>
            </div>
          </Link>

        </div>
      </div>
    </div>
      
    </div>
    </>
  );
};

export default Sidebar;