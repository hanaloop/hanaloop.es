import Image from 'next/image';
import Link from 'next/link';

type RoundedArrowButtonProps = {
    href: string;
    label: string;
    className?: string;
    iconSrc?: string;
};

export function RoundedArrowButton({ href, label, className = '', iconSrc = '/site/icons/ic-arrow.png' }: RoundedArrowButtonProps) {
    return (
        <Link href={href} className={`inline-flex h-[48px] min-w-[230px] items-center justify-between rounded-full bg-black px-12 text-white transition hover:bg-[#1f1f1f] ${className}`}>
            <span className="text-[18px] font-medium leading-none tracking-[-0.25px]">{label}</span>
            <Image src={iconSrc} alt="" aria-hidden="true" width={10} height={10} className="h-3 w-3" />
        </Link>
    );
}
