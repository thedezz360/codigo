import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import { SortBy, User } from "./types";
import { UsersList } from "./components/UsersList";

function App() {
	const [users, setUsers] = useState<User[]>([]);
	const [showColors, setShowColors] = useState(false);
	const [sorting, setSorting] = useState<SortBy>(SortBy.NONE);
	const [filterCountry, setFilterCountry] = useState<string | null>(null);

	// usamos el use ref para guardar un valor
	// que queremos que se comnparta entre renderizados
	// pero que al cambiar, no vuelva a renderizar el componente
	const originalUsers = useRef<User[]>([]);

	// hacemos toggle de una variable
	const toggleColors = () => {
		setShowColors(((prevState) => !prevState));
	};

	
	const toggleSortByCountry = () => {
		const newSortingValue = sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE;
		setSorting(newSortingValue);
	};

	const handleReset = () => {
		setUsers(originalUsers.current);
	};

	const handleDelete = (email: string) => {
		const filteredUsers = users.filter((user: User) => user.email !== email);
		setUsers(filteredUsers);
	};

	const handleChangeSort = (sort:SortBy) => {
		setSorting(sort);
	};

	//para hacer el fetch usamos el useEffect
	useEffect(() => {
		fetch("https://randomuser.me/api/?results=100")
			.then(async (res) => await res.json())
			.then((res) => {
				setUsers(res.results);
				originalUsers.current = res.results;
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	//para filtrar los usuarios por pais
	
	const filteredUsers = useMemo(() => {
		console.log("calculate filter users");
		return typeof filterCountry === "string" && filterCountry.length > 0
			? users.filter((user: User) => {
				return user.location.country
					.toLowerCase()
					.includes(filterCountry.toLowerCase());
			})
			: users;
	},[users, filterCountry]);

	//obtenemos los usuarios ordenados por pais
	//usamos un memo para que solo se ejecute cuando filteredUsers o sortByCountry cambien
	const sortedUsers = useMemo(() => {
	
		if (sorting === SortBy.NONE) return filteredUsers;

		//creamos un objeto 
		const compareProperties: Record<string, (user:User) => string > = {
			[SortBy.COUNTRY] : user => user.location.country,
			[SortBy.NAME] : user => user.name.first,
			[SortBy.LAST] : user => user.name.last

		};

		return [...filteredUsers].sort((a,b) => {
			const extractProperty = compareProperties[sorting];
			return extractProperty(a).localeCompare(extractProperty(b));
		});

	}, [filteredUsers, sorting]);

	return (
		<div>
			<h1>Prueba tecnica</h1>

			<header>
				<button onClick={toggleColors}>
					Colorear filas
				</button>

				<button onClick={toggleSortByCountry}>
					{sorting === SortBy.COUNTRY ? "No ordenar por país" : "Ordenar por pais"}
				</button>

				<button onClick={handleReset}>Reset</button>

				<input
					type="search"
					name="searchCountry"
					onChange={(e) => {
						setFilterCountry(e.target.value);
					}}
				/>
			</header>

			<main>
				<UsersList
					users={sortedUsers}
					showColors={showColors}
					handleDelete={handleDelete}
					changeSorting={handleChangeSort}
				/>
			</main>
		</div>
	);
}

export default App;
