import Cpanel from '@/images/logos/cpanel-white.png'
import Image from 'next/image'
import WordPress from '@/images/logos/wordpress.svg'
import Securessl from '@/images/logos/secure-ssl.png'
import Sitelock from '@/images/logos/sitelock.png'
import Oxappsuite from '@/images/logos/ox-app-suite.png'
import { FadeIn, FadeInStagger } from './FadeIn'

export default function LogoCloud() {

  return (
    <div className="bg-transparent py-24 sm:py-32 mt-2">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeInStagger className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <FadeIn>
            <Image
              className="col-span-2 max-h-12 object-contain lg:col-span-1"
              src={Cpanel}
              alt="cPanel"
              width={140}
              height={24}
            />
          </FadeIn>
          <FadeIn>
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={WordPress}
              alt="WordPress"
              width={140}
              height={48}
            />
          </FadeIn>
          <FadeIn>
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={Securessl}
              alt="Softaculous"
              width={148}
              height={48}
            />
          </FadeIn>
          <FadeIn>

            <Image
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src={Sitelock}
              alt="Sitelock"
              width={300}
              height={208}
            />
          </FadeIn>
          <FadeIn>
            <Image
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={Oxappsuite}
              alt="Statamic"
              width={148}
              height={48}
            />

          </FadeIn>
        </FadeInStagger>
      </div>
    </div>
  )
}
