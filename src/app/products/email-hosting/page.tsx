import { CheckCircleIcon } from '@heroicons/react/20/solid'
import EmailHostingImages from '@/images/email-hosting.jpg'
import Image from 'next/image'
import Link from 'next/link'
import Pricing from '@/components/Pricing'
import { emailSections, emailTiers } from '@/lib/pricing-tiers'
import { FadeIn } from '@/components/FadeIn'

const benefits = [
  'Professional solution',
  '99.9% uptime guarantee',
  'email@your-domain.com',
  'Off-premise email hosting',
  'Webmail, Mobile or Desktop Apps',
  '10 - 50GB storage per mailbox',
]

export default function EmailHostingPage() {
  return (
    <div className="px-6 py-18 sm:px-6 sm:py-32 min-w-screen">
      <div className="mx-auto max-w-screen text-center">
        <FadeIn className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <Image
              className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
              src={EmailHostingImages}
              alt="Catholic email hosting service."
            />
            <div className="w-full flex-auto">
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Professional Email that works!</h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                We offer professional email hosting solutions for your business. Our email hosting service is designed to help you communicate with your customers and clients in a professional manner. With our email hosting service, you can create email addresses that match your domain name, giving you a professional look.
              </p>
              <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
              >
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3">
                    <CheckCircleIcon className="h-7 w-5 flex-none" aria-hidden="true" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex">
                <Link href="#" className="text-sm font-semibold leading-6 text-blue-400">
                  Get your email! <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
        <Pricing tiers={emailTiers} sections={emailSections} />
      </div>
    </div>
  )
}
