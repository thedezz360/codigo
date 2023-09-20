import { SortBy, type User } from "../types";

interface Props {
	users: User[];
	showColors: boolean;
	handleDelete:(email:string) => void;
	changeSorting:(sort:SortBy) => void;
	
}

export function UsersList({ showColors, users, handleDelete, changeSorting }: Props) {
	return (
		<table width="100%">
			<thead>
				<tr>
					<th>Foto</th>
					<th className="pointer" onClick={()=> changeSorting(SortBy.NAME)}>Nombre</th>
					<th className="pointer" onClick={()=> changeSorting(SortBy.LAST)}>Apellido</th>
					<th className="pointer" onClick={()=> changeSorting(SortBy.COUNTRY)}>País</th>
					<th>Acciones</th>
				</tr>
			</thead>
			<tbody className={showColors ? "table--showColors" : ""}>
				{
					users.map((user: User) => {
						
						return (
							<tr key={user.email} >
								<td>
									<img src={user.picture.thumbnail} />
								</td>
								<td>{user.name.first}</td>
								<td>{user.name.last}</td>
								<td>{user.location.country}</td>
								<td>
									<button onClick={()=>{handleDelete(user.email);}}>Borrar</button>
								</td>
							</tr>
						);
					})
				}
			</tbody>
		</table>
	);
}
