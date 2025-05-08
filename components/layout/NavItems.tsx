import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { PRODUCT_CATEGORIES } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';

export default function NavItems() {
	return (
		<div className='flex gap-4 h-full'>
			<NavigationMenu>
				<NavigationMenuList>
					{PRODUCT_CATEGORIES.map((category, i) => (
						<NavigationMenuItem key={i}>
							<NavigationMenuTrigger>
								{category.label}
							</NavigationMenuTrigger>

							<NavigationMenuContent>
								<ul className='grid grid-cols-2 gap-3 p-4 md:w-[400px] lg:w-[500px] '>
									{category.featured.map((item) => (
										<li
											key={item.name}
											className='group relative text-base sm:text-sm'>
											<div className='relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75'>
												<Image
													src={item.imageSrc}
													alt='product category image'
													fill
													className='object-cover object-center'
												/>
											</div>

											<Link
												href={item.href}
												className='mt-6 block font-medium text-gray-900'>
												{item.name}
											</Link>
											<p
												className='mt-1'
												aria-hidden='true'>
												Shop now
											</p>
										</li>
									))}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
					))}
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
}
