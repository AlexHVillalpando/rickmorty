import { useEffect, useState } from 'react';
import useFetch from './hooks/useFetch';
import CardInfo from './components/CardInfo';
import ResidentsList from './components/ResidentsList';
import Search from './components/Search';
import './App.css';

function App() {
	const [location, setLocation] = useFetch();
	const [locationId, setLocationId] = useState(1);

	const [page, setPage] = useState(1);
	const itemsPerPage = 6;
	const totalItems = location ? location?.residents.length : 0;
	console.log(totalItems);
	const maxPage = Math.ceil(totalItems / itemsPerPage);

	useEffect(() => {
		setLocation(`https://rickandmortyapi.com/api/location/${locationId}`);
	}, [locationId]);

	const onPrev = () => {
		if (page > 1) {
			setPage(page - 1);
		}
	};

	const onNext = () => {
		if (page < maxPage) {
			setPage(page + 1);
		}
	};

	return (
		<>
			<div className="hero" />
			<div className="container">
				<Search setLocationId={setLocationId} />
				<CardInfo location={location} />
				<button onClick={onPrev} disabled={page === 1}>
					Anterior
				</button>
				<span>
					{page} / {maxPage}
				</span>
				<button onClick={onNext} disabled={page === maxPage}>
					Siguiente
				</button>
				<ResidentsList
					residents={location?.residents}
					page={page}
					itemsPerPage={itemsPerPage}
				/>
			</div>
		</>
	);
}

export default App;
