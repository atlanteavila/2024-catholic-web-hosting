const renewales: any = { Completed: 'text-green-400 bg-green-400/10', Error: 'text-rose-400 bg-rose-400/10' }
const activityItems = [
  {
    domain: '.com',
    register: '$13.49',
    term: 'yearly',
    renewal: '$13.49',
    transfers: '$13.49',
    date: '45 minutes ago',
    dateTime: '2023-01-23T11:00',
  },
  {
    domain: '.net',
    register: '249df660',
    term: 'yearly',
    renewal: '$13.49',
    transfers: '14.99',
    date: '3 hours ago',
    dateTime: '2023-01-23T09:00',
  },

]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function DomainPricing() {
  return (
    <div className="bg-gray-900 py-10">
      <h2 className="px-4 text-base font-semibold leading-7 text-white sm:px-6 lg:px-8">Latest activity</h2>
      <table className="mt-6 w-full whitespace-nowrap text-left">
        <colgroup>
          <col className="w-full sm:w-4/12" />
          <col className="lg:w-4/12" />
          <col className="lg:w-2/12" />
          <col className="lg:w-1/12" />
          <col className="lg:w-1/12" />
        </colgroup>
        <thead className="border-b border-white/10 text-sm leading-6 text-white">
          <tr>
            <th scope="col" className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8">
              Domain
            </th>
            <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell">
              Register
            </th>
            <th scope="col" className="py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20">
              Term
            </th>
            <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20">
              Transfer
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {activityItems.map((item) => (
            <tr key={item.register}>
              <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                <div className="flex items-center gap-x-4">
                  <div className="truncate text-sm font-medium leading-6 text-white">{item.domain}</div>
                </div>
              </td>
              <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                <div className="flex gap-x-3">
                  <div className="font-mono text-sm leading-6 text-gray-400">{item.register}</div>
                  <div className="rounded-md bg-gray-700/40 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-white/10">
                    {item.term}
                  </div>
                </div>
              </td>
              <td className="py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
                <div className="flex items-center justify-end gap-x-2 sm:justify-start">
                  <time className="text-gray-400 sm:hidden" dateTime={item.dateTime}>
                    {item.date}
                  </time>
                  <div className={classNames(renewales[item.renewal], 'flex-none rounded-full p-1')}>
                    <div className="h-1.5 w-1.5 rounded-full bg-current" />
                  </div>
                  <div className="hidden text-white sm:block">{item.renewal}</div>
                </div>
              </td>
              <td className="hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-400 md:table-cell lg:pr-20">
                {item.transfers}
              </td>
              <td className="hidden py-4 pl-0 pr-4 text-right text-sm leading-6 text-gray-400 sm:table-cell sm:pr-6 lg:pr-8">
                <time dateTime={item.dateTime}>{item.date}</time>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
