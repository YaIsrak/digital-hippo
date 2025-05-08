'use client';

import { PRODUCT_CATEGORIES } from '@/lib/constants';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet';

export default function MobileNav() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const pathname = usePathname();

	// whenever we click an item in the menu and navigate away, we want to close the menu
	useEffect(() => {
		setIsOpen(false);
	}, [pathname]);

	// when we click the path we are currently on, we still want the mobile menu to close,
	// however we cant rely on the pathname for it because that won't change (we're already there)
	const closeOnCurrent = (href: string) => {
		if (pathname === href) {
			setIsOpen(false);
		}
	};

	return (
		<Sheet
			open={isOpen}
			onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<button
					type='button'
					onClick={() => setIsOpen(true)}
					className='lg:hidden relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400'>
					<Menu
						className='h-6 w-6'
						aria-hidden='true'
					/>
				</button>
			</SheetTrigger>

			<SheetContent side='left'>
				<SheetTitle></SheetTitle>
				<div className=' overflow-y-auto'>
					<div>
						<ul>
							{PRODUCT_CATEGORIES.map((category) => (
								<li
									key={category.label}
									className='space-y-10 px-4 pb-8 pt-10'>
									<div className='border-b border-gray-200'>
										<div className='-mb-px flex'>
											<p className='border-transparent text-gray-900 flex-1 whitespace-nowrap border-b-2 py-4 text-base font-medium'>
												{category.label}
											</p>
										</div>
									</div>

									<div className='grid grid-cols-2 gap-y-10 gap-x-4'>
										{category.featured.map((item) => (
											<div
												key={item.name}
												className='group relative text-sm'>
												<div className='relative aspect-square overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75'>
													<Image
														fill
														src={item.imageSrc}
														alt='product category image'
														className='object-cover object-center'
													/>
												</div>
												<Link
													href={item.href}
													className='mt-6 block font-medium text-gray-900'>
													{item.name}
												</Link>
											</div>
										))}
									</div>
								</li>
							))}
						</ul>
					</div>

					<div className='space-y-6 border-t border-gray-200 px-4 py-6'>
						<div className='flow-root'>
							<Link
								onClick={() => closeOnCurrent('/sign-in')}
								href='/sign-in'
								className='-m-2 block p-2 font-medium text-gray-900'>
								Sign in
							</Link>
						</div>
						<div className='flow-root'>
							<Link
								onClick={() => closeOnCurrent('/sign-up')}
								href='/sign-up'
								className='-m-2 block p-2 font-medium text-gray-900'>
								Sign up
							</Link>
						</div>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
