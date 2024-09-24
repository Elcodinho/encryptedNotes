// backURl = адресс сервера
// url = http.../note+ полученный url в ответе сервера
// bodyKey = ключ в body запроса
// value = значение из инпута
// errorMethod = метод установки сообщения ошибки
// urlMethod = метод установки url
export async function sendData(backUrl, url, value, errorMethod, urlMethod) {
  try {
    const response = await fetch(backUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({ note: value }),
    });

    const data = await response.json();
    if (!data.result) {
      throw Error("ОШИБКА: Данные не получены");
    }

    urlMethod(`${url}/${data.url}`);
    errorMethod(null);
  } catch (error) {
    if (error instanceof TypeError) {
      errorMethod("Ошибка: невозможно выполнить запрос");
    } else {
      errorMethod(error.message);
    }
  }
}
