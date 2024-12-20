'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LogOut, ChevronDown } from 'lucide-react'
import { cn } from '@/app/lib/utils'
import logo from "@/app/ui/assets/codeant.png"
import Image from 'next/image'
import { LuBookText } from "react-icons/lu";

export function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="flex flex-col h-screen w-[240px] bg-[#f8f9fa] border-r border-[#e9ecef]">
      <div className="p-4 flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center">
          <Image src={logo} alt="logo" className="h-7 w-7 text-white" />
        </div>
        <span className="font-semibold text-[15px]">CodeAnt AI</span>
      </div>

      <div className="px-3 mb-2">
        <button className="w-full flex items-center gap-2 p-2 border rounded-xl hover:bg-[#f1f3f5] text-left">
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium truncate">UtkarshDhairyaPa...</div>
          </div>
          <ChevronDown className="w-4 h-4 text-[#868e96]" />
        </button>
      </div>

      <nav className="flex-1 px-3">
        <ul className="space-y-[2px]">
          <li>
            <Link
              href="/dashboard"
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-lg text-[15px] font-bold",
                isActive("/dashboard")
                  ? "bg-blue-500 text-white"
                  : "text-[#495057] hover:bg-[#f1f3f5]"
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              Repositories
            </Link>
          </li>
          <li>
            <Link
              href="/CodeReview"
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-lg text-[15px] font-bold",
                isActive("/CodeReview")
                  ? "bg-blue-500 text-white"
                  : "text-[#495057] hover:bg-[#f1f3f5]"
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                />
              </svg>
              AI Code Review
            </Link>
          </li>
          {/* Repeat for other navigation items */}
          <li>
            <Link
              href="/CloudSecurity"
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-lg text-[15px] font-bold",
                pathname === "/cloud-security" ? "bg-primary text-white" : "text-[#495057] hover:bg-[#f1f3f5]"
              )}
            >
              {/* <CloudCog className="h-4 w-4" /> */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 font-extrabold">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
            </svg>

              Cloud Security
            </Link>
          </li>
          <li>
            <Link
              href="/HowToUse"
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-lg text-[15px] font-bold",
                pathname === "/how-to-use" ? "bg-primary text-white" : "text-[#495057] hover:bg-[#f1f3f5]"
              )}
            >
              {/* <FileQuestion className="h-4 w-4" /> */}
              <LuBookText className='h-5 w-5'/>
              How to Use
            </Link>
          </li>
          <li>
            <Link
              href="/Settings"
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-lg text-[15px] font-bold",
                pathname === "/settings" ? "bg-primary text-white" : "text-[#495057] hover:bg-[#f1f3f5]"
              )}
            >
              {/* <Settings className="h-4 w-4" /> */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>

              Settings
            </Link>
          </li>
        </ul>
      </nav>

      <div className="mt-auto px-3 pb-3">
        <Link
          href="/Support"
          className={cn(
            "flex items-center gap-2 px-3 py-2 text-[15px] font-bold rounded-lg",
            isActive("/Support")
              ? "bg-blue-500 text-white"
              : "text-[#495057] hover:bg-[#f1f3f5]"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>
          Support
        </Link>
        <button
          onClick={() => console.log('Logout clicked')}
          className="w-full flex items-center gap-2 px-3 py-2 text-[15px] font-bold text-[#495057] hover:bg-[#f1f3f5] rounded-lg"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </div>
  );
}
