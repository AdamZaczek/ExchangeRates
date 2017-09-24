const endpoints = {
  '//api.nbp.pl/api/exchangerates/tables/C/?format=json': { rates: [
		{currency: "dolar australijski", code: "AUD", bid: 2.8149, ask: 2.8717},
		{currency: "frank szwajcarski", code: "CHF", bid: 3.6531, ask: 3.7269}
	]},
};

export default function fetch(url) {
	return new Promise((resolve, reject) => {
		process.nextTick(
			() => endpoints[url] ? resolve(endpoints[url].rates) : reject({
				error: 'Endpoint with url ' + url + ' not found.',
			})
		);
	});
}