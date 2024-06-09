'use client';
import { useEffect, useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'

const memoryOptions: { name: string; inStock: boolean }[] = [
  { name: 'Register', inStock: true },
  { name: 'Transfer', inStock: true },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function DomainRadioGroup({ handleInput }: { handleInput: any }) {
  const [mem, setMem] = useState<{ name: string; inStock: boolean } | null>(null)
  useEffect(() => {
    if (mem) {
      handleInput('registrationType', mem.name)
    }
  }, [mem]);

  return (
    <fieldset aria-label="Choose a memory option">
      <RadioGroup value={mem} onChange={setMem} className="mt-2 grid grid-cols-3 gap-3 sm:grid-cols-6">
        {memoryOptions.map((option) => (
          <Radio
            key={option.name}
            value={option}
            className={({ focus, checked }) =>
              classNames(
                option.inStock ? 'cursor-pointer focus:outline-none' : 'cursor-not-allowed opacity-25',
                focus ? 'ring-2 ring-blue-600 ring-offset-2' : '',
                checked
                  ? 'bg-blue-600 text-white hover:bg-blue-500'
                  : 'ring-1 ring-inset ring-gray-300 bg-white text-gray-900 hover:bg-gray-50',
                'flex items-center justify-center rounded-md py-3 px-3 text-sm font-semibold uppercase sm:flex-1'
              )
            }
            disabled={!option.inStock}
          >
            {option.name}
          </Radio>
        ))}
      </RadioGroup>
    </fieldset>
  )
}
