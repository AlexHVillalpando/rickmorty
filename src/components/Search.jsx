import React, { useRef, useState } from 'react';
import './Search.css';

function Search({ setLocationId }) {
	const [error, setError] = useState('');
	const inputRef = useRef();
	const onSubmit = (e) => {
		e.preventDefault();
		const id = inputRef.current.value;
		if (isNaN(id)) {
			setError('Enter a valid number');
			setTimeout(() => {
				setError('');
			}, 3000);
			return;
		}
		if (id < 1 || id > 126) {
			setError('Enter an id number between 1 and 126');
			setTimeout(() => {
				setError('');
			}, 3000);
		}
		setLocationId(id);
		inputRef.current.value = '';
		//e.target.reset() también es válido para resetear el campo del form
	};

	return (
		<>
			<form onSubmit={onSubmit} className="search">
				<input ref={inputRef} type="text" className="search__input" />
				<button className="search__btn">Search</button>
				<p className="message__error">{error && error}</p>
			</form>
		</>
	);
}

export default Search;
