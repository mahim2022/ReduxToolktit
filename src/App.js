import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addUser, deleteUser } from "./reducer/Users";

function App() {
	const dispatch = useDispatch();
	const userList = useSelector((state) => state.users.value);
	// if (userList) console.log(userList);
	const [data, setdata] = useState({ name: "" });
	return (
		<>
			<input
				value={data.name}
				onChange={(e) => {
					setdata({ ...data, name: e.target.value });
				}}
			></input>
			{/* <input
				value={data.userName}
				onChange={(e) => {
					setdata({ ...data, userName: e.target.value });
				}}
			></input> */}
			<button
				onClick={() => {
					dispatch(addUser(data.name));
					setdata({ name: "" });
				}}
			>
				Submit
			</button>
			{userList.map((cur, idx) => (
				<h1 key={idx}>
					{cur}
					<button onClick={() => dispatch(deleteUser(cur))}>delete</button>
				</h1>
			))}
		</>
	);
}

export default App;
