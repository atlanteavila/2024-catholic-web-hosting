import PlusIcon from '@/images/+-icon.png';
import Image from 'next/image';
import { FadeIn } from './FadeIn';
type CardProps = {
  title: string;
  description: string;
  withIcon?: boolean;
  classes?: string;
}

export default function Card({ title, description, withIcon, classes }: CardProps) {
  return (
    <div className={`bg-[#1f2c37] shadow-lg rounded-lg overflow-hidden ${classes}`}>
      {withIcon && <Image className='m-4' src={PlusIcon} alt="" width={40} height={40} />}
      <div className="p-6">
        <h3 className={`text-white text-lg font-semibold ${withIcon ? 'text-2xl' : ''}`}>{title}</h3>
        <p className="mt-2 text-sm text-white font-thin">{description}</p>
      </div>
    </div>
  )
}