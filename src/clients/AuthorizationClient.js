import axios from "axios";

const URL = "http://localhost:8082/auth/api/v1.0/usuarios/token?user=estudiante&password=123456789"

const obtenerToken = async () => {
	const token = await axios.get(`${URL}`).then(r => r.data);
	console.log(token.accessToken);
	return token.accessToken;
}

export const obtenerTokenFachada = async () => {
	return await obtenerToken();
}
