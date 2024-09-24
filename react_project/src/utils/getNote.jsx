// backURl = адресс сервера
// hash = хэш заметки
// setText = метод установки текста
// setErr = метод установки сообщения ошибки

export async function getNote(backUrl, hash, setText, setErr) {
  try {
    const response = await fetch(backUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({ url: hash }),
    });

    const data = await response.json();
    if (!data.result) {
      throw Error("ОШИБКА: Данные не получены");
    }
    setText(data.note);
    setErr(null);
  } catch (error) {
    if (error instanceof TypeError) {
      setErr("Ошибка: невозможно выполнить запрос");
    } else {
      setErr(error.message);
    }
  }
}
