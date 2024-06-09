type HeroSalesPitchProps = { title: string, titleLarge: string; description: string }

export default function HeroSalesPitch({ title, titleLarge, description }: HeroSalesPitchProps) {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-blue-300">{title}</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {titleLarge}
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          {description}
        </p>
      </div>
    </div>
  )
}