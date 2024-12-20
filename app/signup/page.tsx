'use client'
import React, { useState } from 'react';
import { Button } from '../ui/button';
import pie from "../../app/ui/assets/pie.png"
import Image from 'next/image';
import logo from "../../app/ui/assets/codeant.png"
import biglogo from "../../app/ui/assets/Subtract.png"
import { cn } from '../lib/utils';
import azure from "../../app/ui/assets/azure.png"

function Stats() {
  return (
    <div className=' border rounded-xl shadow-2xl'>
      <div className='border-b font-bold p-2 justify-center flex space-x-3'>
        <div>
        <Image src={logo} alt="logo"></Image>
        </div>
        <div className='pt-1'>
        AI to Detect & Autofix Bad Code
        </div>
        </div>        
        <div className="flex gap-8 items-center justify-center  p-5">
          <div className="text-center">
            <div className="font-bold text-xl">30+</div>
            <div className="text-sm text-gray-600">Language Support</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-xl">10K+</div>
            <div className="text-sm text-gray-600">Developers</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-xl">100K+</div>
            <div className="text-sm text-gray-600">Hours Saved</div>
          </div>
        </div>
    </div>
  );
}


function IssuesCard() {
  return (
    <div className="bg-white border rounded-xl shadow-2xl p-3 mx-5 max-w-[200px]">
      <div className="flex items-center justify-between space-x-14 ">
        {/* Icon Section */}
        <Image src={pie} alt="pie" height={40} width={40}/>

        {/* Growth Section */}
        <div className="text-right">
          <div className="flex items-center justify-end text-blue-500 text-sm font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
              />
            </svg>
            <span className="ml-1">14%</span>
          </div>
          <div className="text-gray-500 text-xs">This week</div>
        </div>
      </div>
      <div className="mt-4">
        <div className="text-sm text-gray-500 font-semibold">Issues Fixed</div>
        <div className="text-2xl font-bold text-gray-900">500K+</div>
      </div>
    </div>
  );
}


function DeploymentOptions() {
  const [selectedOption, setSelectedOption] = useState<"saas" | "self-hosted">("self-hosted");
  return (
    <div className="">
      {/* Toggle Button with full border */}
      <div className="border-b border-gray-300 pb-4 p-2 mb-4">
        <div className="flex border rounded-xl border-gray-300 bg-white text-sm font-medium">
          <button
            onClick={() => setSelectedOption("saas")}
            className={cn(
              "flex-1 px-4 py-2 rounded-xl transition-colors",
              selectedOption === "saas"
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            )}
          >
            SAAS
          </button>
          <button
            onClick={() => setSelectedOption("self-hosted")}
            className={cn(
              "flex-1 px-4 py-2 rounded-xl transition-colors",
              selectedOption === "self-hosted"
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            )}
          >
            Self Hosted
          </button>
        </div>
      </div>

      {/* Deployment options */}
      <div className="mt-1 px-3">
        {selectedOption === "saas" && (
          <div className="space-y-4 py-3">
            <Button className="w-full flex items-center gap-2 border border-gray-300 hover:bg-gray-100">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub"
                className="w-5 h-5"
              />
              <div className="text-sm font-semibold">Sign in with GitHub</div>
            </Button>
            <Button className="w-full flex items-center gap-2 border border-gray-300 hover:bg-gray-100">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Bitbucket-blue-logomark-only.svg/512px-Bitbucket-blue-logomark-only.svg.png"
                alt="Bitbucket"
                className="w-5 h-5"
              />
              <div className="text-sm font-semibold">Sign in with Bitbucket</div>
            </Button>
            <Button className="w-full flex items-center gap-2 border border-gray-300 hover:bg-gray-100">
              <Image src={azure} alt="azure"></Image>
              <div className="text-sm font-semibold">Sign in with Azure DevOps</div>
            </Button>
            <Button className="w-full flex items-center gap-2 border border-gray-300 hover:bg-gray-100">
              <img
                src="https://gitlab.com/assets/favicon-72a2cad5025aa931d6ea56c3201d1f18e68a8cd39788c7c80d5b2b82aa5143ef.png"
                alt="GitLab"
                className="w-5 h-5"
              />
              <div className="text-sm font-semibold">Sign in with GitLab</div>
            </Button>
          </div>
        )}
        {selectedOption === "self-hosted" && (
          <div className="space-y-4 py-5 ">
            <Button className="w-full flex items-center gap-2 ">
              <img
                src="https://gitlab.com/assets/favicon-72a2cad5025aa931d6ea56c3201d1f18e68a8cd39788c7c80d5b2b82aa5143ef.png"
                alt="GitLab"
                className="w-5 h-5"
              />
              <div className="text-sm font-semibold">Self Hosted GitLab</div>
            </Button>
            <Button className="w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                />
              </svg>
              <div className="text-sm font-semibold">Sign in with SSO</div>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}



export default function Signup() {
  return (
    <div className="h-screen flex ">
  {/* Left Section */}
  <div className="hidden md:flex flex-1 items-center border bg-background p-6 relative">
    <div className="w-full flex flex-col items-center">
      <div className="">
        <Stats />
      </div>
      <div className="absolute bottom-1/4 right-32">
        <IssuesCard />
      </div>
    </div>
    <div className="absolute bottom-0 left-0">
      <Image src={biglogo} alt="biglogo" className="w-56 h-56" />
    </div>
  </div>
      
      <div className="flex-1 bg-white  flex flex-col items-center justify-center relative ">
        <div className="absolute inset-0  md:hidden " />
        
        <div className="border  w-full max-w-md justify-center space-y-8 relative z-10">
          <div className="text-center">
            <div className="flex justify-center ">
              <div className="h-10 w-10" />
            </div>
            <div className="flex items-center gap-2 justify-center">
              <div className="w-8 h-8 rounded-lg  flex items-center justify-center">
                <Image src={logo} alt='logo' className="h-7 w-7 text-white" />
              </div>
              <span className="font-semibold text-[15px]">CodeAnt AI</span>
            </div>
            <h2 className="text-2xl font-bold mb-6">Welcome to CodeAnt AI</h2>
          </div>
          <div>
          <DeploymentOptions />
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 pt-2">
            By signing up you agree to the{' '}
            <a href="#" className="text-black font-bold hover:underline">
              Privacy Policy
            </a>
          </div>
      </div>
    </div>
  );
}