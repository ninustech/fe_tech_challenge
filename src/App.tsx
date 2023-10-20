import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
	const [products, setProducts] = useState<Product[]>([]);
	const [search, setSearch] = useState<string>('');

	// API: https://fakestoreapi.com/products

	return (
		<div className='App'>
			<input
				className='search-bar'
				type='text'
				placeholder='Search'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<ul className='products-list'></ul>
		</div>
	);
}

export default App;
