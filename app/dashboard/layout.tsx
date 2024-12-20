'use client'

import { useState } from 'react'
import { Inter } from 'next/font/google'
import { Menu } from 'lucide-react'
// import { Button } from '@/app/ui/button'
// import "./globals.css"
import { Sidebar } from '@/app/components/Sidebar'
import { MobileMenu } from '@/app/components/MobileMenu'
import logo from "@/app/ui/assets/codeant.png"
import Image from 'next/image'
import { ButtonRepo } from '@/app/ui/buttonRepo'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-white">
          <div className="hidden md:block">
            <Sidebar />
          </div>
          <main className="flex-1 overflow-y-auto">
            <div className="md:hidden flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-2">
                  <Image src={logo} alt='logo' ></Image>
                <span className="font-semibold">CodeAnt AI</span>
              </div>
              <ButtonRepo
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </ButtonRepo>
            </div>
            {children}
          </main>
          <MobileMenu 
            isOpen={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
          />
        </div>
      </body>
    </html>
  )
}

