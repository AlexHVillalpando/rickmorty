import React from 'react';
import ResidentCard from './ResidentCard';
import './ResidentsList.css';

function ResidentsList({ residents, page, itemsPerPage }) {
	const currentPageItems = residents
		? residents?.slice((page - 1) * itemsPerPage, page * itemsPerPage)
		: [];

	return (
		<div className="cards">
			{currentPageItems?.map((resident) => {
				const residentSplit = resident.split('/');
				const id = residentSplit[residentSplit.length - 1];

				return <ResidentCard key={id} url={resident} />;
			})}
		</div>
	);
}

export default ResidentsList;
