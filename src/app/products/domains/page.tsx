'use client';
import DomainPricing from "@/components/DomainPricing";
import DomainRadioGroup from "@/components/DomainRadioGroup";
import DomainsSelect from "@/components/DomainsSelect";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import { FadeIn } from "@/components/FadeIn";

export default function DomainsPage() {
  const [value, setValue] = useState<{ domain: string; tld: any, registrationType: any }>({
    domain: '',
    tld: undefined,
    registrationType: undefined,
  });
  const [disabled, setDisabled] = useState(true);
  const [result, setResult] = useState<{ status: 'available' | 'false' } | null>(null);

  useEffect(() => {
    setDisabled(value.domain.length < 1 || value?.tld?.title === 'choose' || !value.registrationType);
  }, [value]);

  const handleNonEventInput = (type: 'registrationType' | 'tld', val: any): void => {
    if (type === 'tld') {
      setValue((prev) => ({
        ...prev,
        tld: val,
      }));
    } else {
      setValue((prev) => ({
        ...prev,
        [type]: val,
      }));
    }
  };

  async function handleSubmit() {
    if (value.domain.length < 1 || value?.tld?.title === 'choose' || !value.registrationType) {
      return;
    }
    const domain = value.domain + value.tld.title;
    const response = await fetch('/api/whmcs/domain-search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_call: 'domainwhois',
        response_type: 'json',
        domain,
      }),
    });

    const data = await response.json();
    if (data && data.status === 'available') {
      setResult(data);
    } else {
      setResult({ status: 'false' })
    }
  }

  const handleEventInput = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const target = e.currentTarget as HTMLInputElement;
    const val = target.value.split('.')[0];
    setResult(null);
    if (target) {
      setValue((prev) => ({
        ...prev,
        [target.name]: val,
      }));
    } else {
      console.error("Current target is null");
    }
  };

  return (
    <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          It all starts with a domain name.
          <br />
          Find yours today!
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-200">
          Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
          commodo do ea.
        </p>
        <div className="mt-10">
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-xl font-semibold leading-6 text-white mb-5">
              Search for your domain!
            </label>
            <div className="mb-4">
              <DomainRadioGroup handleInput={handleNonEventInput} />
            </div>
            <div className="flex flex-row space-x-3">
              <input
                type="text"
                name="domain"
                id="domain"
                placeholder="example.com"
                onChange={handleEventInput}
                value={value.domain}
                className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
              />
              <DomainsSelect onChange={handleNonEventInput} />
            </div>
            <button onClick={handleSubmit} disabled={disabled} className={`mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-md ${disabled ? 'hover:bg-blue-200 bg-blue-200 ' : ''}`} >search</button>
          </div>
        </div>
      </FadeIn>
      {result && result.status === 'available' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}

          className="max-w-2xl px-6 py-24 sm:px-6 sm:py-12 m-auto mt-2">
          <div className="relative mx-auto max-w-sm text-center">
            <h3 className="text-2xl font-bold tracking-tight text-green-200 mb-4">Congrats, {value.domain + value.tld.title} is available!</h3>
            <Link
              href="#"
              className="rounded-md bg-green-500 mt-8 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500">
              Order now!<span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
        </motion.div>
      )}

      {result && result.status === 'false' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}

          className="max-w-2xl px-6 py-24 sm:px-6 sm:py-12 m-auto mt-2">
          <div className="relative mx-auto max-w-sm text-center">
            <h3 className="text-2xl font-bold tracking-tight text-red-200">Sorry, {value.domain + value.tld.title} is not available!</h3>
          </div>
        </motion.div>
      )}
      <FadeIn className="my-20 max-w-4xl m-auto">
        <DomainPricing />
      </FadeIn>
    </div>
  )
}
