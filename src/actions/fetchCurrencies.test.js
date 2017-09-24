import request from '../__mocks__/request'
console.log(request);

test('the data is returned after fetching', async () => {
  expect.assertions(1);
  const returnedObject = {frank: '5.5', dolar: '4.2'};
  const data = await request('//api.nbp.pl/api/exchangerates/tables/C/?format=json');
  expect(data).toEqual(returnedObject);
});
  
test('the fetch fails with an error', async () => {
  expect.assertions(1);
  const url = '//randomUrl';
  try {
    await request(url);
  } catch (e) {
    expect(e).toEqual({"error": `Endpoint with url ${url} not found.`});
  }
});