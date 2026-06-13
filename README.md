# Performance Insights API

Backend API responsible for analyzing website performance and generating insights based on Lighthouse reports.

## 📖 Overview

Performance Insights API allows users to submit a website URL and receive performance analysis results, including metrics, opportunities for improvement, and overall Lighthouse scores.

The project is built with modern Node.js development practices, focusing on:

- Clean Architecture principles
- Modular design
- Type safety with TypeScript
- Request validation with Zod
- Structured logging with Pino
- Code quality with ESLint and Prettier

---

## 🛠️ Tech Stack

- Node.js
- Express
- TypeScript
- Zod
- Pino Logger
- ESLint
- Prettier

---

## 📂 Project Structure

```text
src/

├── app/
│   ├── middlewares/
│   ├── errors/
│   └── interfaces/
│
├── modules/
│   └── analysis/
│       ├── controller/
│       ├── service/
│       ├── repository/
│       ├── schemas/
│       ├── validators/
│       ├── dto/
│       ├── mappers/
│       ├── types/
│       └── tests/
│
├── shared/
│   ├── utils/
│   ├── constants/
│   └── types/
│
├── config/
│
├── routes/
│
└── server.ts
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 22+
- npm 10+

### Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project:

```bash
cd performance-insights-api
```

Install dependencies:

```bash
npm install
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
NODE_ENV=development
LOG_LEVEL=info
```

---

## 🏃 Running the Application

Development mode:

```bash
npm run dev
```

Build project:

```bash
npm run build
```

Run production build:

```bash
npm start
```

---

## 🧹 Code Quality

Run ESLint:

```bash
npm run lint
```

Fix lint issues:

```bash
npm run lint:fix
```

Format code:

```bash
npm run format
```

Check formatting:

```bash
npm run format:check
```

---

## 📡 API Endpoints

### Health Check

```http
GET /health
```

Response:

```json
{
  "status": "ok"
}
```

---

### Analyze URL

> Coming soon

```http
POST /analysis
```

Request:

```json
{
  "url": "https://example.com"
}
```

Response:

```json
{
  "performance": 95,
  "accessibility": 100,
  "bestPractices": 96,
  "seo": 92
}
```

---

## 📋 Development Principles

### Validation

All incoming requests are validated using Zod schemas.

Example:

```ts
const analyzeUrlSchema = z.object({
  url: z.url(),
});
```

---

### Logging

Application logs are handled using Pino.

Example:

```ts
logger.info('Application started');
logger.error(error, 'Unexpected error');
```

---

### Type Safety

Request and response types are inferred directly from Zod schemas whenever possible.

Example:

```ts
type AnalyzeUrlInput = z.infer<typeof analyzeUrlSchema>;
```

---

## 🧪 Testing

Testing setup will be added in future iterations.

Planned tools:

- Vitest
- Supertest

---

## 📈 Roadmap

### Phase 1

- [x] Express setup
- [x] TypeScript configuration
- [x] ESLint configuration
- [x] Prettier configuration
- [x] Pino Logger configuration
- [x] Zod validation

### Phase 2

- [ ] MongoDB integration
- [ ] Lighthouse integration
- [ ] Performance analysis endpoint
- [ ] Report persistence
- [ ] Error handling middleware

### Phase 3

- [ ] Historical reports
- [ ] Dashboard metrics
- [ ] Scheduled analyses
- [ ] Export reports

---

## 🤝 Contributing

1. Create a feature branch.
2. Follow Conventional Commits.
3. Run lint and format checks before opening a pull request.
4. Submit your pull request.

---

## 📝 License

This project is licensed under the MIT License.
