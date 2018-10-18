// Generic libraries
import React from 'react';

const Pagination = props => {
	console.log(props);
	return (
		<div data-c-pagination>
			<span className="pagination" onClick={props.addPage}>
				Next
			</span>
			{props.counter > 1 ? (
				<span className="pagination" onClick={props.prevPage}>
					Previous
				</span>
			) : null}
		</div>
	);
};

export default Pagination;
