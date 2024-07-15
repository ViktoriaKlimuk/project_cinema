import Link from 'next/link';
import React, { FC } from 'react'

const Pagination: FC<{ page: number }> = ({ page,moviesLength,itemsPerPage  }) => {


	return (
		<nav>
			<Link href={`/?${new URLSearchParams({ page: String(page > 1 ? page - 1 : 1) }).toString()}`}>
					prev
			</Link>
			<Link href={`/?${new URLSearchParams({ page: String(page < moviesLength / itemsPerPage ? page + 1 : moviesLength / itemsPerPage) }).toString()}`}>
					next
			</Link>
		</nav>
	);
};

export default Pagination;