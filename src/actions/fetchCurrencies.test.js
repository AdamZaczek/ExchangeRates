import fetch from '../__mocks__/fetch'

test('the data is returned after fetching', async () => {
  expect.assertions(1);
  const returnedData = [
		{currency: "dolar australijski", code: "AUD", bid: 2.8149, ask: 2.8717},
		{currency: "frank szwajcarski", code: "CHF", bid: 3.6531, ask: 3.7269}
	];
  const data = await fetch('//api.nbp.pl/api/exchangerates/tables/C/?format=json');
  expect(data).toEqual(returnedData);
});
  
test('the fetch fails with an error', async () => {
  expect.assertions(1);
  const url = '//randomUrl';
  try {
    await fetch(url);
  } catch (e) {
    expect(e).toEqual({"error": `Endpoint with url ${url} not found.`});
  }
});