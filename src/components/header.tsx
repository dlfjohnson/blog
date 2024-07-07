'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import {
  RegisterLink,
  LoginLink,
  LogoutLink
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";


const navLinks = [
  {
    href: '/',
    label: 'Home'
  },
  {
    href: '/posts',
    label: 'Posts'
  },
  {
    href: '/create-post',
    label: 'Create post'
  },
];

export default function Header() {
  const pathname = usePathname();
  const { isAuthenticated, isLoading } = useKindeBrowserClient();

  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Link href="/">
        <Image
          src="https://bytegrad.com/course-assets/youtube/example-logo.png"
          alt="Logo"
          className="w-[35px] h-[35px]"
          width="35"
          height="35"
        />
      </Link>

      <nav>
        <ul className="flex gap-x-5 text-[14px]">
          {
            navLinks.map((link) => {
              if (
                (!isAuthenticated && link.label === 'Create post') ||
                (isLoading && link.label === 'Create post')
              ) return;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={clsx({
                      'text-zinc-400': true,
                      'text-zinc-900': pathname === link.href
                    })}
                  >{link.label}</Link>
                </li>
              )
            })
          }
          {!isLoading &&
            <>
              {isAuthenticated ?
                <LogoutLink>Sign out</LogoutLink>
              :
                <>
                  <LoginLink>Sign in</LoginLink>
                  <RegisterLink>Sign up</RegisterLink>
                </>
              }
            </>
          }
        </ul>
      </nav>
    </header>
  )
}
