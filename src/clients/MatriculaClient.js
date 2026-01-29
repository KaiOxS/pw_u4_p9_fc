import axios from "axios";

const consultarTodos = async () => {
	const data = await axios.get('http://localhost:8081/matricula/api/v1.0/estudiantes').then(r => r.data);
	return data;
}

export async function consumirTodosFacade() {
	return await consultarTodos();
}
