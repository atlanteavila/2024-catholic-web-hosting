"use client";
import { ServerStackIcon, ComputerDesktopIcon, GlobeAltIcon, LockClosedIcon, AtSymbolIcon } from '@heroicons/react/20/solid';
import Link from 'next/link'
export const webHostingUrl: string = '/products/catholic-web-hosting-services/';
export const webDesignUrl: string = '/products/catholic-web-design-services/';
export const sslCertificatesUrl: string = '/products/ssl-certificates/';
export const domainsUrl: string = '/products/domains/';
export const emailHostingUrl: string = '/products/email-hosting/';


export const navigation = {
  company: [
    { name: 'Home Page', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
  ],

  products: [
    { name: 'Web Hosting', description: '100% Catholic web hosting.', href: webHostingUrl, icon: ServerStackIcon },
    { name: 'Domains', description: 'Get the perfect affordable domain', href: domainsUrl, icon: GlobeAltIcon },
    { name: 'Email Hosting', description: 'Great email hosting for your website!', href: emailHostingUrl, icon: AtSymbolIcon },
    { name: 'SSL Certificates', description: 'Let your customers know your value security', href: sslCertificatesUrl, icon: LockClosedIcon },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#2c444e]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-2">
          <div className='text-white -mt-12 mb-12'>
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 457 457">
              <path fillRule="evenodd" fill="rgb(255, 255, 255)"
                d="M452.327,273.258 C427.608,396.874 307.359,477.047 183.742,452.328 C60.125,427.609 -20.047,307.359 4.673,183.742 C29.392,60.127 149.641,-20.046 273.258,4.673 C396.874,29.392 477.046,149.641 452.327,273.258 ZM207.046,402.970 C203.376,402.501 199.854,401.959 196.498,401.371 C200.019,402.010 203.537,402.548 207.046,402.970 ZM168.448,64.130 C120.298,81.500 80.798,119.618 62.849,169.842 C90.145,144.453 132.363,128.239 176.544,118.450 C171.945,86.213 168.055,64.489 168.055,64.489 C168.178,64.366 168.316,64.249 168.448,64.130 ZM179.338,138.767 C96.940,159.034 57.449,198.125 54.858,200.763 C41.504,282.206 86.898,360.605 161.083,391.033 C204.816,384.375 191.804,233.052 179.338,138.767 ZM262.099,57.213 C239.047,52.604 216.151,52.759 194.419,56.978 C196.643,76.930 199.512,95.696 202.886,113.371 C273.743,101.641 342.975,104.842 357.979,111.808 C333.611,84.687 300.601,64.913 262.099,57.213 ZM373.485,131.781 C374.259,133.534 374.454,134.450 374.454,134.450 C307.583,123.593 251.995,125.325 206.938,133.032 C243.476,297.232 324.478,357.771 336.758,366.134 C368.067,341.271 391.084,305.627 399.538,263.354 C409.026,215.899 398.375,169.092 373.485,131.781 ZM365.373,302.164 L359.397,297.789 L352.199,299.530 L354.531,292.566 L350.609,286.317 L358.024,286.388 L362.797,280.785 L365.049,287.792 L371.922,290.579 L365.897,294.839 L365.373,302.164 ZM350.298,158.310 L345.020,154.472 L338.674,155.986 L340.721,149.894 L337.251,144.418 L343.794,144.490 L347.997,139.593 L349.993,145.730 L356.058,148.179 L350.750,151.899 L350.298,158.310 ZM103.331,307.582 L98.425,303.812 L92.452,305.406 L94.451,299.286 L91.265,293.856 L97.403,293.844 L101.410,288.892 L103.208,295.002 L108.869,297.375 L103.836,301.164 L103.331,307.582 ZM135.100,128.318 L130.523,125.019 L125.026,126.305 L126.789,121.084 L123.773,116.382 L129.440,116.456 L133.073,112.265 L134.813,117.531 L140.073,119.642 L135.481,122.822 L135.100,128.318 Z" />
            </svg>
          </div>
        </div>
        <div className="xl:grid xl:grid-cols-3 xl:gap-2">
          <div className="grid grid-cols-3 gap-8 xl:col-span-2">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
              <ul role="list" className="mt-6 space-y-2">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">Products & Services</h3>
                  <ul role="list" className="mt-6 space-y-2">
                    {navigation.products.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-2">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 xl:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-white">Subscribe to our newsletter</h3>
            <p className="mt-2 text-sm leading-6 text-gray-300">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <form className="mt-6 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                placeholder="Enter your email"
              />
              <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-500 hover:text-gray-400">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            &copy; {new Date().getFullYear() + ' '} Drummer Boy Hosting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
