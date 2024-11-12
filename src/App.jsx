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
		setPage(page + 1);
	};

	return (
		<>
			<div className="hero" />
			<div className="container">
				<button onClick={onPrev} disabled={page === 1}>
					Anterior
				</button>
				<button onClick={onNext}>Siguiente</button>
				<Search setLocationId={setLocationId} />
				<CardInfo location={location} />
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
