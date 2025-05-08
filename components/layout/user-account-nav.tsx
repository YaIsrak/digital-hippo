'use client';

// import { User } from '@/payload-types'
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
// import { useAuth } from '@/hooks/use-auth'

// todo:
// export default function UserAccountNav({ user }: { user: user })
export default function UserAccountNav({ user }: { user: any }) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				asChild
				className='overflow-visible'>
				<Button
					variant='ghost'
					size='sm'
					className='relative'>
					My account
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent
				className='bg-white w-60'
				align='end'>
				<div className='flex items-center justify-start gap-2 p-2'>
					<div className='flex flex-col space-y-0.5 leading-none'>
						<p className='font-medium text-sm text-black'>
							{/* todo: */}
							{/* {user.email} */}
							0hYtK@example.com
						</p>
					</div>
				</div>

				<DropdownMenuSeparator />

				<DropdownMenuItem asChild>
					<Link href='/sell'>Seller Dashboard</Link>
				</DropdownMenuItem>

				<DropdownMenuItem
					// {/* todo: */}
					//   onClick={signOut}
					className='cursor-pointer'>
					Log out
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
