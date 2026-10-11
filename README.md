
# 🛒 বাজার দর | BazarDor

### Your Daily Market Price Companion

**বাজার দর** is a responsive web application that helps users explore daily prices of essential commodities in Bangladesh. Users can compare current prices, track price increases and decreases, browse products by category, and view detailed market price information through a simple and user-friendly interface.

## ✨ Key Features

- **📊 Daily Price Updates:** Explore the latest available prices of essential products and see how prices change compared to the previous day.
- **📈 Price Trends:** Discover the top six products with increasing prices and the top six products with decreasing prices.
- **🛍️ Product Categories:** Browse products by category and sort them by price from low to high or high to low.
- **🔎 Product Details:** View individual product information, price summaries, and market-based price comparisons.
- **🔐 Secure Authentication:** Sign up and sign in using email and password or supported social login providers.
- **👤 Profile Management:** Update your profile information through a dedicated profile page.
- **📱 Responsive Design:** Enjoy a consistent experience across mobile phones, tablets, and desktop devices.
- **⏳ Loading & Error States:** Get helpful loading indicators and friendly error pages when content is unavailable.

## 🛠️ Technologies Used

| Technology      | Purpose                                    |
| --------------- | ------------------------------------------ |
| Next.js         | React framework and application routing    |
| React           | Building interactive user interfaces       |
| TypeScript      | Type-safe development                      |
| Tailwind CSS    | Responsive styling and UI design           |
| Better Auth     | User authentication and session management |
| MongoDB         | Database for authentication data           |
| React Hot Toast | Success and error notifications            |
| React Icons     | Icons throughout the application           |
| REST API        | Fetching product, category, and price data |
| Vercel          | Application deployment                     |

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mehadihasanifty/bazar-dor-nextjs-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd bazar-dor
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env.local` file in the root directory and configure the environment variables required by your application, including the database and authentication credentials.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 API Endpoints

The application uses the BazarDor API to retrieve product and category information.

**Main_API_URL:**

```text
 https://openapi.programming-hero.com/api/bazardor
```

**Base URL:**

```text
https://api.api-store.workers.dev/api/bazardor
```

**Alternative Base URL:**

```text
https://api.abcz.workers.dev/api/bazardor
```

| Endpoint                  | Description                   |
| ------------------------- | ----------------------------- |
| `/products`               | Retrieve all products         |
| `/products?category=chal` | Retrieve products by category |
| `/products/1`             | Retrieve a single product     |
| `/categories`             | Retrieve all categories       |
| `/categories/chal`        | Retrieve a single category    |

## 📂 Project Highlights

- Built with the Next.js App Router.
- Uses TypeScript for improved code reliability.
- Implements reusable React components.
- Supports responsive layouts and interactive product sorting.
- Integrates Better Auth for authentication.
- Provides loading states and user-friendly error handling.

## 🎯 Project Goal

The goal of BazarDor is to make daily market price information easier to explore and understand, helping users stay informed about changes in the prices of essential commodities.

## 👨‍💻 Author

Developed with ❤️ as a web development learning project.

---

**বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।**

---

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
