import { Fragment } from 'react'
import { CheckIcon, MinusIcon } from '@heroicons/react/20/solid'
import { FadeIn } from './FadeIn'


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Pricing({ tiers, sections }: { tiers: any[]; sections: any[]; }) {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Plans that will fit all needs!
          </p>
        </FadeIn>
        <FadeIn className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
          <p>
            Our plans start at low cost for those getting started, and increase at very competitive rates for those who need more. We offer a 30 day money back guarantee, so you can try us out risk free! Try Catholic Web Hosting today!
          </p>
        </FadeIn>

        {/* xs to lg */}
        <FadeIn className="mx-auto mt-12 max-w-md space-y-8 sm:mt-16 lg:hidden">
          {tiers.map((tier: any) => (
            <section
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'rounded-xl bg-white/5 ring-1 ring-inset ring-white/10' : '',
                'p-8'
              )}
            >
              <h3 id={tier.id} className="text-sm font-semibold leading-6 text-white">
                {tier.name}
              </h3>
              <p className="mt-2 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold text-white">{tier.priceMonthly}</span>
                <span className="text-sm font-semibold text-gray-300">/month</span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-blue-500 text-white hover:bg-blue-400 focus-visible:outline-blue-500'
                    : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                  'mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                )}
              >
                Buy plan
              </a>
              <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-white">
                {sections.map((section: any) => (
                  <li key={section.name}>
                    <ul role="list" className="space-y-4">
                      {section.features.map((feature: any) =>
                        feature.tiers[tier.name] ? (
                          <li key={feature.name} className="flex gap-x-3">
                            <CheckIcon className="h-6 w-5 flex-none text-blue-400" aria-hidden="true" />
                            <span>
                              {feature.name}{' '}
                              {typeof feature.tiers[tier.name] === 'string' ? (
                                <span className="text-sm leading-6 text-gray-400">({feature.tiers[tier.name]})</span>
                              ) : null}
                            </span>
                          </li>
                        ) : null
                      )}
                    </ul>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </FadeIn>

        {/* lg+ */}
        <FadeIn className="isolate mt-20 hidden lg:block">
          <div className="relative -mx-8">
            {tiers.some((tier: any) => tier.mostPopular) ? (
              <div className="absolute inset-x-4 inset-y-0 -z-10 flex">
                <div
                  className="flex w-1/4 px-4"
                  aria-hidden="true"
                  style={{ marginLeft: `${(tiers.findIndex((tier: any) => tier.mostPopular) + 1) * 25}%` }}
                >
                  <div className="w-full rounded-t-xl border-x border-t border-white/10 bg-white/5" />
                </div>
              </div>
            ) : null}
            <table className="w-full table-fixed border-separate border-spacing-x-8 text-left">
              <caption className="sr-only">Pricing plan comparison</caption>
              <colgroup>
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
              </colgroup>
              <thead>
                <tr>
                  <td />
                  {tiers.map((tier: any) => (
                    <th key={tier.id} scope="col" className="px-6 pt-6 xl:px-8 xl:pt-8">
                      <div className="text-sm font-semibold leading-7 text-white">{tier.name}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <span className="sr-only">Price</span>
                  </th>
                  {tiers.map((tier: any) => (
                    <td key={tier.id} className="px-6 pt-2 xl:px-8">
                      <div className="flex items-baseline gap-x-1 text-white">
                        <span className="text-4xl font-bold">{tier.priceMonthly}</span>
                        <span className="text-sm font-semibold leading-6">/month</span>
                      </div>
                      <a
                        href={tier.href}
                        className={classNames(
                          tier.mostPopular
                            ? 'bg-blue-500 hover:bg-blue-400 focus-visible:outline-blue-600'
                            : 'bg-white/10 hover:bg-white/20 focus-visible:outline-white',
                          'mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                        )}
                      >
                        Buy plan
                      </a>
                    </td>
                  ))}
                </tr>
                {sections.map((section: any, sectionIdx: any) => (
                  <Fragment key={section.name}>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan={4}
                        className={classNames(
                          sectionIdx === 0 ? 'pt-8' : 'pt-16',
                          'pb-4 text-sm font-semibold leading-6 text-white'
                        )}
                      >
                        {section.name}
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/10" />
                      </th>
                    </tr>
                    {section.features.map((feature: any) => (
                      <tr key={feature.name}>
                        <th scope="row" className="py-4 text-sm font-normal leading-6 text-white">
                          {feature.name}
                          <div className="absolute inset-x-8 mt-4 h-px bg-white/5" />
                        </th>
                        {tiers.map((tier: any) => (
                          <td key={tier.id} className="px-6 py-4 xl:px-8">
                            {typeof feature.tiers[tier.name] === 'string' ? (
                              <div className="text-center text-sm leading-6 text-gray-300">
                                {feature.tiers[tier.name]}
                              </div>
                            ) : (
                              <>
                                {feature.tiers[tier.name] === true ? (
                                  <CheckIcon className="mx-auto h-5 w-5 text-blue-400" aria-hidden="true" />
                                ) : (
                                  <MinusIcon className="mx-auto h-5 w-5 text-gray-500" aria-hidden="true" />
                                )}

                                <span className="sr-only">
                                  {feature.tiers[tier.name] === true ? 'Included' : 'Not included'} in {tier.name}
                                </span>
                              </>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
