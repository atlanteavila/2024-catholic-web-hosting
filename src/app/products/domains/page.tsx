import DomainPricing from "@/components/DomainPricing";

export default function DomainsPage() {
  return (
    <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          It all starts with a domain name.
          <br />
          Find yours today!
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-200">
          Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
          commodo do ea.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Get started
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <div className="mt-16 max-w-4xl m-auto">
        <DomainPricing />
      </div>
    </div>
  )
}
