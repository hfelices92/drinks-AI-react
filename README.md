# Drinks AI React


Drinks AI React is a web application for discovering and creating cocktail recipes. Users can search for existing drinks by category and ingredient using TheCocktailDB API, or generate entirely new recipes using an AI model via OpenRouter. The application also includes a feature to save favorite recipes, which are stored locally in the browser.

## Features

*   **Recipe Search:** Find cocktail recipes by searching for ingredients and categories.
*   **AI Recipe Generation:** Enter a text prompt (e.g., "A refreshing drink with gin and cucumber") to generate a unique recipe using AI.
*   **Detailed Views:** View complete recipe details, including ingredients, measurements, and instructions in a modal window.
*   **Favorites System:** Add your favorite drinks to a personal list for quick access.
*   **Persistent Favorites:** Favorite recipes are saved in your browser's local storage.
*   **Responsive Design:** A clean, responsive interface built with Tailwind CSS.
*   **Notifications:** Get instant feedback for actions like adding a favorite or form validation errors.

## Tech Stack

*   **Framework:** React
*   **Language:** TypeScript
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS & Headless UI
*   **State Management:** Zustand
*   **Routing:** React Router
*   **API Communication:** Axios
*   **AI Integration:** OpenRouter AI SDK
*   **Schema Validation:** Zod
*   **Markdown Rendering:** React Markdown

## Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

*   Node.js (v18 or later)
*   npm
*   An API Key from [OpenRouter](https://openrouter.ai/) for the AI generation feature.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/hfelices92/drinks-ai-react.git
    cd drinks-ai-react
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of the project and add your OpenRouter API key.

    ```
    VITE_OPENROUTER_API_KEY='your-openrouter-api-key'
    ```

4.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## Available Scripts

In the project directory, you can run:

*   `npm run dev`: Runs the app in development mode with hot-reloading.
*   `npm run build`: Builds the app for production to the `dist` folder.
*   `npm run lint`: Lints the project files using ESLint.
*   `npm run preview`: Serves the production build locally to preview it.

## Project Structure

The `src` directory is organized as follows:

*   **`components/`**: Contains reusable UI components like `DrinkCard`, `Header`, and `Modal`.
*   **`layouts/`**: The main application layout component.
*   **`lib/`**: Configuration files for third-party libraries, such as the AI SDK.
*   **`schemas/`**: Zod schemas for validating API responses.
*   **`services/`**: Modules for interacting with external APIs (TheCocktailDB and OpenRouter).
*   **`stores/`**: Zustand state management slices for different application features (recipes, favorites, AI, notifications).
*   **`types/`**: TypeScript type definitions inferred from the Zod schemas.
*   **`views/`**: Top-level components for each page/route (`IndexPage`, `FavoritesPage`, etc.).