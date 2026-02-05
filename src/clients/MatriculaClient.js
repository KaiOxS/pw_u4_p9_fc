import axios from "axios";
import { obtenerTokenFachada } from "./AuthorizationClient";

// const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJtYXRyaWN1bGEtYXV0aCIsInN1YiI6ImVzdHVkaWFudGUiLCJncm91cHMiOlsiYWRtaW4iXSwiaWF0IjoxNzcwMjQ5MDY0LCJleHAiOjE3NzAyNTI2NjQsImp0aSI6Ijk0NTNiOGU0LTRhMDAtNDAwOC04MDNlLWU5MjcwN2JmNDc4NCJ9.FJXMvSVlue4V8b6d91YuMq0xZc7tbAaED4Ojf1dugrFiR6Y-_mQ2kBzaTwUR-bv-QZEZHo2dqNXxVEvRJbGy5Y22REQi1cAQDNNPPTTJ5uzmWVj57rOj2gEjDDrvhvWbHEOueRBSbSX79g4QOqQZm5dozC8pqQwY6xEyD4oSvUb_Pdry4R5TKkKaNTsOYc8QdS2yqaZV_h9435zG0dfZCygGyUltnkF4vHoWdikC4LkEh5EWYU_zVxf01ckB9Jd2a6l_bm2CjJYV0QlCEVPzkKyHRWUvhmAWgjG8USkGfYEawIXW93g9qIQIsVkNGGFfIR7cQm-aKHMaeS8LwTaQ9A"
const URL = "http://localhost:8081/matricula/api/v1.0/estudiantes"

const consultarTodos = async () => {
	const TOKEN = await obtenerTokenFachada();
	const data = axios.get(`${URL}`, {
		headers: {
			Authorization: `Bearer ${TOKEN}`
		}
	}).then(r => r.data);
	return data;
}

const consultarPorId = async (id) => {
	const TOKEN = await obtenerTokenFachada();

	const data = axios.get(`${URL}/${id}`, {
		headers: {
			Authorization: `Bearer ${TOKEN}`
		}
	}).then(r => r.data);
	return data;
}

const guardar = async (body) => {
	const TOKEN = await obtenerTokenFachada();
	axios.post(`${URL}`, body, {
		headers: {
			Authorization: `Bearer ${TOKEN}`
		}
	}).then(r => r.data);
	/*
	const objeto= {
	nombre:'ANGELO',
	apellido:'Pujota'}
	*/
}

const actualizar = async (id, body) => {
	const TOKEN = await obtenerTokenFachada();
	axios.put(`${URL}/${id}`, body, {
		headers: {
			Authorization: `Bearer ${TOKEN}`
		}
	}).then(r => r.data);
}

const actualizarParcial = async (id, body) => {
	const TOKEN = await obtenerTokenFachada();
	axios.patch(`${URL}/${id}`, body, {
		headers: {
			Authorization: `Bearer ${TOKEN}`
		}
	}).then(r => r.data);
}

const borrar = async (id) => {
	const TOKEN = await obtenerTokenFachada();
	axios.delete(`${URL}/${id}`, {
		headers: {
			Authorization: `Bearer ${TOKEN}`
		}
	}).then(r => r.data);
}


export const consultarTodosFachada = async () => {
	return await consultarTodos();
}

export const consultarPorIdFachada = async (id) => {

	return await consultarPorId(id);
}

export const guardarFachada = async (body) => {
	return await guardar(body);
}

export const actualizarFachada = async (id, body) => {
	return await actualizar(id, body);
}
export const actualizarParcialFachada = async (id, body) => {

	return await actualizarParcial(id, body);
}

export const borrarFachada = async (id) => {
	return await borrar(id);
}
