### **Корпоративный клиент сообщений для АО "Атоммашэкспорт"**  
**Адаптивное веб-приложение для эффективной коммуникации сотрудников**  

---

### 🚀 **Обзор проекта**  
Разработанное решение заменяет устаревший десктопный клиент "ISOD Larisa v.5", предоставляя современный кроссплатформенный веб-интерфейс для обмена сообщениями. Приложение оптимизировано для:  
- **Компьютеров** (Windows/Linux)  
- **Мобильных устройств** (iOS/Android, включая устаревшие версии)  
- **Браузеров**: Firefox, Safari, Yandex, Chrome  

**Ключевая цель**: Повышение эффективности коммуникаций на предприятии через единую защищенную платформу.  

---

### ✨ **Функциональные возможности**  
| Категория          | Функции                                                                 |
|--------------------|-------------------------------------------------------------------------|
| **Сообщения**      | Создание, ответ, пересылка, удаление, фильтрация (новые/отправленные)  |
| **Администрирование** | Управление пользователями, настройка ролей (админ/пользователь)       |
| **Безопасность**   | JWT-аутентификация, шифрование паролей (bcrypt), CORS-политики         |
| **Адаптивность**   | Полная поддержка мобильных устройств, Progressive Web App (PWA)        |
| **Дополнительно**  | Темная тема, кастомизация папок сообщений, поиск по истории переписки  |

---

### ⚙️ **Технологический стек**  
**Серверная часть** (Node.js/Express):  
- **База данных**: PostgreSQL (Sequelize ORM)  
- **Аутентификация**: JWT + bcrypt  
- **Безопасность**: CORS, dotenv  

**Клиентская часть** (React):  
- **Состояние**: Redux Toolkit + RTK Query  
- **Стили**: Tailwind CSS + SCSS  
- **Роутинг**: React Router v6  
- **Адаптивность**: React Responsive  
- **Оптимизация**: React.lazy, Code Splitting  

---

### 📂 **Структура проекта**  
```bash
├── client/               # React-приложение
│   ├── public/           # PWA-манифесты, статика
│   └── src/
│       ├── components/   # UI-компоненты
│       ├── store/        # Redux настройки
│       ├── hooks/        # Кастомные хуки
│       └── layouts/      # Шаблоны страниц
│
├── server/               # Node.js сервер
│   ├── config/           # Конфиги БД
│   ├── controllers/      # Логика обработки запросов
│   ├── middlewares/      # JWT-валидация, обработка ошибок
│   ├── models/           # Sequelize-модели
│   ├── routes/           # API-эндпоинты
│   └── utils/            # Вспомогательные функции
│
```

---

### ⚡️ **Быстрый старт**  
**Требования**: Node.js v18+, SQL Server  

1. **Клонирование репозитория**:  
   ```bash
   git clone https://github.com/Ubersk/webmessanger.git
   cd webmessanger
   ```

2. **Настройка переменных окружения** (`.env`):  
   ```env
   # Сервер
   PORT=7000
   JWT_SECRET=your_strong_secret
   DB_HOST=localhost
   DB_NAME=****
   DB_USER=****
   DB_PASSWORD=****
   ```

3. **Запуск через Docker**:  
   ```bash
   docker-compose up --build
   ```

4. **Ручной запуск**:  
   ```bash
   # Сервер
   cd server
   npm install
   npm run dev

   # Клиент
   cd ../client
   npm install
   npm start
   ```

---

### 🌐 **API Endpoints**  
Документация Swagger доступна после запуска:  
`http://localhost:7000/api-docs`  

| Метод   | Путь                 | Описание                     |
|---------|----------------------|------------------------------|
| `POST`  | `/api/user/login`    | Аутентификация               |
| `GET`   | `/api/user/auth`     | Проверка JWT-токена          |
| `POST`  | `/api/mail`          | Отправка сообщения           |
| `GET`   | `/api/mail/folders`  | Получение списка папок       |
| `GET`   | `/api/mail?filter=new` | Фильтрация сообщений       |

---

### 🖼️ **Скриншоты системы**  
<div align="center">
  <img src="screenshots/auth.png" width="300" alt="Экран авторизации">
  <img src="screenshots/inbox.png" width="300" alt="Входящие сообщения">
  <img src="screenshots/mobile-view.png" width="150" alt="Мобильный вид">
</div>

---

### 🛡️ **Безопасность**  
- **Пароли**: Хеширование bcrypt с солью  
- **Сессии**: JWT с 30-минутным сроком жизни  
- **Защита от атак**:  
  - Rate Limiting (express-rate-limit)  
  - HTTP-заголовки безопасности (Helmet)  
  - Валидация входящих данных (express-validator)  
- **Аудит**: Логирование всех критических операций  

---

### 📊 **Производительность**  
- **Оптимизация БД**: Индексы для частых запросов  
- **Кэширование**: Redis для тяжелых запросов  
- **Бандлинг**: Vite + tree-shaking на клиенте  
- **Метрики**:  
  ```text
  Время отклика API: < 120 мс
  Загрузка интерфейса: < 1.5 сек (Lighthouse)
  ```

---

### 🤝 **Вклад в проект**  
1. Форкните репозиторий  
2. Создайте ветку: `git checkout -b feature/your-feature`  
3. Сделайте коммит: `git commit -am 'Add some feature'`  
4. Запушьте ветку: `git push origin feature/your-feature`  
5. Откройте Pull Request  

---

### **Разработчик**  
[Святослав Кручинин](https://github.com/ubersk)  

[![Deploy to AWS](https://img.shields.io/badge/Deploy-AWS-orange)](https://aws.amazon.com/)
[![Coverage](https://img.shields.io/badge/Coverage-92%25-green)](https://github.com/your-repo/actions)