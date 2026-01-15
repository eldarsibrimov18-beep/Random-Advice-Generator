const adviceId = document.getElementById('advice-id');
const adviceText = document.getElementById('advice-text');
const adviceBtn = document.getElementById('generate-btn');

const API_URL = 'https://api.adviceslip.com/advice';

async function getAdvice() {
    try {
        // 1. Делаем запрос к API
        const response = await fetch(API_URL);

        // 2. Превращаем ответ в понятный JS объект
        const data = await response.json();

        // 3. Вытаскиваем нужные данные
        const { id, advice } = data.slip;

        // 4. Обновляем страницу
        adviceId.textContent = id;
        adviceText.textContent = `"${advice}"`;

    } catch (error) {
        console.error("Ошибка получения совета:", error);
        adviceText.textContent = "Упс! Интернет сломался :(";
    }
}

// Вешаем слушатель событий на кнопку
adviceBtn.addEventListener('click', getAdvice);

// Загружаем первый совет при открытии страницы
getAdvice();