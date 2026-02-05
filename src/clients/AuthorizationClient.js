import axios from "axios";

const URL = "http://localhost:8082/auth/api/v1.0/usuarios/token?user=estudiante&password=1234567890"

let tokenEnMemoria = null;

const obtenerToken = async () => {

	if (tokenEnMemoria) {
		return tokenEnMemoria;
	}

	try {
		const token = await axios.get(`${URL}`).then(r => r.data);
		tokenEnMemoria = token.accessToken;

		console.log(token.accessToken);
		return tokenEnMemoria;
	} catch (error) {
		console.error(`El token no se pudo obtener: ${error}`)
		throw error;
	}


}

export const obtenerTokenFachada = async () => {
	return await obtenerToken();
}
