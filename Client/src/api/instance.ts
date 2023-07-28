import axios from 'axios';

export const axiosInstance = axios.create({});

/**
 * Много закомментированного кода, плюс комментарий ниже всё ещё актуален
 */

/**
 * Необходимо избегать изменений параметров функций, т.к. это влечёт побочные эффекты.
 * См. статью про чистые функции
 * https://habr.com/ru/post/437512/
 *
 * Особенно осторожным нужно быть с изменением объектов (не только параметров функций, а вообще),
 * поскольку в JS объект представляет собой ссылку на область памяти.
 * Изменяя параметр `config`, мы влияем на него не только внутри данной функции, но и за её пределами.
 * Про копирование объектов см. https://learn.javascript.ru/object-copy
 *
 *  Переписал
 */

axiosInstance.interceptors.request.use((config) => {
	const accessToken = sessionStorage.getItem('token');
	if (accessToken) {
		const autharization = `Bearer ${accessToken}`;
		config.headers.Authorization = autharization;
	}
	return config;
});
