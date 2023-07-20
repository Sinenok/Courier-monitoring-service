import React from 'react';
import { Container } from 'react-bootstrap';
import { PaginationProps } from './types';

const Pagination: React.FC<PaginationProps> = ({
	sentOrdersPerPage,
	totalOrders,
	paginate
}: PaginationProps) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalOrders / sentOrdersPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<Container className="d-flex justify-content-center py-4">
			<ul className="pagination">
				{pageNumbers.map((number) => (
					<li className="page-item" key={number}>
						<a
							href="#"
							className="page-link"
							onClick={(e) => {
								e.preventDefault();
								paginate(number);
							}}>
							{number}
						</a>
					</li>
				))}
			</ul>
		</Container>
	);
};

export default Pagination;
