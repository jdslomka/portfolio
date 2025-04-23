import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.png'
import { socials } from '@/constants/socials'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-yellow-500 dark:text-zinc-200 dark:hover:text-yellow-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-yellow-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m John Slomka. I live in Woolwich Ontario, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m John Slomka. I strive to create software that elevates life.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              My passion for coding ignited in grade 10 when I took a
              programming course and wrote my first lines of C++—I’ve been
              hooked ever since.
            </p>
            <p>
              I pursued this passion at Wilfrid Laurier University, starting my
              computer science degree in 2017. In September 2020, during COVID,
              I paused my studies for a 4-month internship at Achievers, a
              leading employee recognition software company, which they extended
              to April 2021 due to my contributions.
            </p>
            <p>
              Achievers then hired me full-time in February 2022, before I
              completed my degree. While working full-time as a remote full
              stack developer in Woolwich, Ontario, I balanced part-time
              studies, graduating in December 2024.
            </p>
            <p>
              At Achievers, I’ve led impactful projects like designing and
              implementing, on both the frontend and backend, a self-serve
              localized navbar logos and migrating the applications permissions
              to a dynamic Role-Based Access Control (RBAC) system, enabling
              self-managed admin roles via UI, reducing Customer Success
              dependency, and enhancing scalability and security.
            </p>
            <p>
              When I’m not coding, I’m a hobbyist beekeeper, working to keep
              bugs out of my code while happily leaving them in my hives (where
              they belong) making honey instead of mischief.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href={socials.github}
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href={socials.linkedIn}
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href={socials.email}
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              hire@johnslomka.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
