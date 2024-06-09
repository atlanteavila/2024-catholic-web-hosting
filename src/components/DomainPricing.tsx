const renewales: any = { Completed: 'text-green-400 bg-green-400/10', Error: 'text-rose-400 bg-rose-400/10' }
const activityItems = [
  {
    domain: '.com',
    term: 'yearly',
    register: '$13.49 USD',
    transfers: '$13.49 USD',
  },
  {
    domain: '.org',
    term: 'yearly',
    register: '$13.49 USD',
    transfers: '$13.49 USD',
  },
  {
    domain: '.net',
    term: 'yearly',
    register: '$13.49 USD',
    transfers: '$13.49 USD',
  },
  {
    domain: '.biz',
    term: 'yearly',
    register: '$12.00 USD',
    transfers: '$12.00 USD',
  },
  {
    domain: '.info',
    term: 'yearly',
    register: '$17.00 USD',
    transfers: '$17.00 USD',
  },
  {
    domain: '.us',
    term: 'yearly',
    register: '$10.49 USD',
    transfers: '$10.49 USD',
  },
  {
    domain: '.me',
    term: 'yearly',
    register: '$14.99 USD',
    transfers: '$14.99 USD',
  },

]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function DomainPricing() {
  return (
    <div className="bg-[#1c202a] border solid border-[#2c3240] py-10">
      <h2 className="px-4 text-base font-semibold leading-7 text-white sm:px-6 lg:px-8">Catholic Web Hosting - Domain Pricing</h2>
      <table className="mt-6 w-full whitespace-nowrap text-left">
        <colgroup>
          <col className="w-full sm:w-4/12" />
          <col className="lg:w-4/12" />
          <col className="lg:w-1/12" />
        </colgroup>
        <thead className="border-b border-white/10 text-sm leading-6 text-white">
          <tr>
            <th scope="col" className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8">
              TLD
            </th>
            <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell">
              Register
            </th>
            <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20">
              Transfer
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {activityItems.map((item) => (
            <tr key={item.domain}>
              <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                <div className="flex items-center gap-x-4">
                  <div className="truncate text-sm font-medium leading-6 text-white">{item.domain}</div>
                </div>
              </td>
              <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8 text-white">
                <div className="flex gap-x-3">
                  <div className="font-mono text-sm leading-6 text-white">{item.register}</div>
                </div>
              </td>
              <td className="py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
                <div className="flex items-center justify-end gap-x-2 sm:justify-start">
                  <div className={classNames(renewales[item.transfers], 'flex-none rounded-full p-1')}>
                  </div>
                  <div className="hidden text-white sm:block">{item.transfers}</div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
