import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import HeroSalesPitch from '@/components/HeroSalesPitch'
import Pricing from '@/components/Pricing'
import { sections, tiers } from '@/lib/pricing-tiers'
import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: '99.9% uptime guarantee',
    description:
      'What good is a website if it is always down? We guarantee that your website will be up 99.9% of the time.',
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates',
    description:
      'Let your customers and search engines know you\'re serious about security. Get free SSL certificates right from the start!',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Unlimited bandwidth',
    description:
      'Reach as many people as possible without worrying about traffic limits. We provide unlimited bandwidth for your website!',
    href: '#',
    icon: ArrowPathIcon,
  },
]

export default function WebHostingPage() {
  return (
    <div className="py-24 sm:py-32">
      <FadeIn>
        <HeroSalesPitch
          title="Catholic Web Hosting Services"
          titleLarge="Catholic web hosting services that you can trust!"
          description="We offer Catholic web hosting services that are packed full of features. Please review and make the choice that best fits your needs! We offer plans fit for a personal account, to a team of engineers ready to get you started online!"
        />
      </FadeIn>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <FadeInStagger>
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (

                <FadeIn key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <feature.icon className="h-5 w-5 flex-none text-blue-300" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <a href={feature.href} className="text-sm font-semibold leading-6 text-blue-300">
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </FadeIn>
              ))}
            </dl>
          </FadeInStagger>
        </div>
      </div>
      <Pricing tiers={tiers} sections={sections} />
    </div>
  )
}
