const endpoints = {
  '//api.nbp.pl/api/exchangerates/tables/C/?format=json': {frank: '5.5', dolar: '4.2'},
};

export default function request(url) {
	return new Promise((resolve, reject) => {
		process.nextTick(
			() => endpoints[url] ? resolve(endpoints[url]) : reject({
				error: 'Endpoint with url ' + url + ' not found.',
			})
		);
	});
}