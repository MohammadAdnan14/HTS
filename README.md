# 🧠 IQChain

IQChain is a decentralized, Web3-enabled trivia quiz application built on the **Diamante Blockchain**. By combining interactive trivia gameplay, Clerk authentication, and Diamante wallet transactions, IQChain offers a seamless and secure play-to-earn/pay-to-play gaming experience.

---

## 🚀 Key Features

*   **🔒 Clerk Authentication**: Secure and smooth sign-in/sign-up experience for user management.
*   **🔌 Diamante Wallet Integration**: Integration with the Diamante browser wallet extension (`window.diam`) to connect wallets and authenticate public addresses.
*   **💸 Web3 Payments**: Process transactions on the **Diamante Testnet** using `diamnet-sdk` (Aurora server).
*   **🎮 Interactive Trivia**: Fun multiple-choice trivia quizzes with real-time response validation.
*   **🎨 Premium 3D UI**: Immersive and interactive landing page design utilizing Spline 3D graphics.

---

## 🛠️ Tech Stack

*   **Frontend**: Next.js (App Router), React.js, Tailwind CSS
*   **Auth**: `@clerk/nextjs`
*   **Blockchain Communication**: `diamnet-sdk` (loaded dynamically via CDN)
*   **3D Assets**: `@splinetool/react-spline`
*   **Icons**: `react-icons`

---

## 📂 Project Structure

```directory
IQChain/
├── .vscode/                 # Workspace settings
└── next_app/                # Next.js Application Root
    ├── app/                 # Next.js App Router Pages
    │   ├── AboutUs/        # Team profiles and information
    │   ├── ConnectWallet/   # Diamante wallet connection interface
    │   ├── HomePage/        # Clerk auth wrapper, navbar, & Spline 3D landing
    │   ├── Image/           # Static images and assets
    │   ├── QuizPage/        # Core quiz interface and trivia questions
    │   ├── Tn-quiz/         # Portal listing active and upcoming quizzes
    │   ├── fonts/           # Custom local typography (Geist fonts)
    │   ├── payment/         # payment page using diamnet-sdk
    │   ├── diams.js         # Client-side Diamante transaction helper script
    │   ├── globals.css      # Tailwind and custom theme styles
    │   ├── layout.js        # Root application layout
    │   └── page.js          # App entry point (Clerk setup)
    ├── next.config.mjs      # Next.js configuration
    ├── package.json         # Dependencies and dev scripts
    └── tailwind.config.js   # Tailwind style rules and design tokens
```

---

## ⚙️ Configuration & Setup

### Prerequisites
1.  **Node.js** (v18.x or higher) installed.
2.  **Diamante Wallet extension** installed in your browser.
3.  A **Clerk** account and application setup for authentication API keys.

### 1. Clone & Access Project Files
```bash
git clone https://github.com/MohammadAdnan14/IQChain.git
cd IQChain/next_app
```

### 2. Install Dependencies
Install all required package dependencies:
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env.local` file in the `next_app/` directory and specify your Clerk API keys:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

### 4. Run the Development Server
Launch the local server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## ⛓️ Blockchain Details

*   **Network**: Diamante Testnet
*   **Aurora Horizon Server**: `https://diamtestnet.diamcircle.io`
*   **Payment Flow**: Uses `DiamSdk.Aurora.Server` to load accounts, build transaction envelopes, and submit transaction envelopes.

---

## 👥 The Team

Created with ❤️ for the Diamante Blockchain ecosystem by:
*   **Adnan**
*   **Piyush**
*   **Tiru**
*   **Kunal**
