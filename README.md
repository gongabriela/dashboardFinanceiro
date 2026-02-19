# Financial Dashboard

## About the Project

This project is a Personal Financial Dashboard developed as part of the Javascript Fundamentals module at UPskill ServiceNow program. Building upon foundational DOM manipulation, this application represents a significant technical leap, introducing modular architecture, data persistence, and advanced JavaScript concepts.

The main goal was to create a fully functional, real-world application to track personal income and expenses, automatically calculating balances and filtering recent activity.

## Key Features

* **Dynamic Dashboard:** Automatically calculates and displays Total Balance, Total Income, and Total Expenses based on registered transactions.
* **Transaction Management:** Users can add new income or expense records, as well as delete existing ones.
* **Smart Filtering:** The main dashboard automatically filters and displays only the recent transactions from the last 7 days.
* **Full History View:** A dedicated secondary page (`transacoes.html`) to view the complete transaction history.
* **Robust Form Validation:** Real-time validation preventing empty fields, future dates, negative values, and character limits, with dynamic error messages.
* **Data Persistence:** All transactions are securely saved in the browser's `localStorage`, ensuring data is not lost when refreshing or closing the page.
* **Automatic Formatting:** Values are automatically formatted to the Euro (€) currency standard.

## Concepts & Technologies Learned

* **HTML5 & CSS3:** Semantic markup and a highly modularized CSS architecture (global, layout, components, responsive).
* **JavaScript ES6 Modules:** Separation of concerns using `import` and `export` to divide logic into specific modules (DOM manipulation, services, utilities, calculations).
* **Advanced Array Methods:** Extensive use of `.map()`, `.filter()`, and `.reduce()` for data processing and calculations.
* **Browser Storage API:** Utilizing `JSON.stringify` and `JSON.parse` alongside `localStorage` to manage state.

## Folder Structure Highlights

The project follows a clean and scalable directory structure, separating JavaScript logic into a `modules/` folder (with subdirectories for `dom`, `services`, `utils`, and `transacoes`) and styling into a `styles/` folder, making the codebase highly maintainable.

## How to Run

You can view the live project on GitHub Pages here: [Live Demo](https://gongabriela.github.io/dashboardFinanceiro/)

To run locally:
1. Clone the repository.
2. Open the `index.html` file in your preferred web browser.

## License

This project is for educational purposes within the UPskill program.
