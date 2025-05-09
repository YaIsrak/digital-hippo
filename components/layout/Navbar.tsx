import MaxWidthWrapper from '@/components/max-width-wrapper';
import Link from 'next/link';
import { LogoIcon } from '../Icons';
import { buttonVariants } from '../ui/button';
import Cart from './Cart';
import MobileNav from './MobileNav';
import NavItems from './NavItems';
import UserAccountNav from './user-account-nav';

export default function Navbar() {
	const user = null;

	return (
		<div className='bg-white sticky z-50 top-0 inset-x-0 h-16'>
			<header className='relative bg-white'>
				<MaxWidthWrapper>
					<div className='border-b border-gray-200'>
						<div className='flex h-16 items-center'>
							<div className='ml-4 flex lg:ml-0'>
								<Link href='/'>
									<LogoIcon className='h-10 w-10' />
								</Link>
							</div>

							<div className='hidden z-50 lg:ml-8 lg:block lg:self-stretch'>
								<NavItems />
							</div>

							<div className='ml-auto flex items-center'>
								<div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-'>
									{user ? null : (
										<Link
											href='/sign-in'
											className={buttonVariants({
												variant: 'ghost',
											})}>
											Sign in
										</Link>
									)}

									{user ? null : (
										<span
											className='h-6 w-px bg-gray-200 mx-2'
											aria-hidden='true'
										/>
									)}

									{user ? (
										<UserAccountNav user={user} />
									) : (
										<Link
											href='/sign-up'
											className={buttonVariants({
												variant: 'ghost',
											})}>
											Create account
										</Link>
									)}

									{user ? (
										<span
											className='h-6 w-px bg-gray-200'
											aria-hidden='true'
										/>
									) : null}

									{user ? null : (
										<div className='flex lg:ml-2'>
											<span
												className='h-6 w-px bg-gray-200'
												aria-hidden='true'
											/>
										</div>
									)}

									<div className='ml-4 flow-root'>
										<Cart />
									</div>
								</div>
							</div>

							<MobileNav />
						</div>
					</div>
				</MaxWidthWrapper>
			</header>
		</div>
	);
}
