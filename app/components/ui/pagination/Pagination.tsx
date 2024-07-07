import Link from 'next/link';
import React, { FC } from 'react'

const Pagination: FC<{ page: number }> = ({ page,moviesLength,itemsPerPage  }) => {


	return (
		<nav>
			<Link href={`/?${new URLSearchParams({ page: String(page > 1 ? page - 1 : 1) }).toString()}`}>
				<a>
					prev
				</a>
			</Link>
			<Link href={`/?${new URLSearchParams({ page: String(page < moviesLength / itemsPerPage ? page + 1 : moviesLength / itemsPerPage) }).toString()}`}>
				<a>
					next
				</a>
			</Link>
		</nav>
	);
};

export default Pagination;