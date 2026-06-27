# FIBI Portfolio

Одностраничный сайт-портфолио AI Content Creator.

## Стек

- Next.js 15 (App Router)
- TypeScript
- TailwindCSS

## Запуск

```bash
cd website
npm install
npm run dev
```

Сайт будет доступен на [http://localhost:3000](http://localhost:3000).

## Сборка

```bash
npm run build
npm start
```

## Структура

```
website/
├── public/assets/     # Изображения и видео
├── src/
│   ├── app/           # Страницы и глобальные стили
│   ├── components/    # React-компоненты
│   │   ├── hero/      # Hero-секция
│   │   ├── sections/  # Избранные работы, Обо мне, Архив, Контакты
│   │   ├── layout/    # Footer, оверлеи
│   │   └── ui/        # Window, иконки, DesktopIcon
│   └── lib/           # Контент и данные
```

## Секции

1. **Hero** — фон с глазом, MiniDV камера с видео, CD, sidebar, media player
2. **Избранные работы** — 4 проекта в окнах Windows
3. **Обо мне** — текстовый редактор с фото
4. **Архив** — папки и вращающийся CD
5. **Контакты** — Telegram, Instagram, Email
6. **Footer** — панель задач Windows
