# Food Ordering App

A small React app for browsing a menu of meals and adding them to a shopping cart. It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

- Meal list with name, description and price
- Per-item quantity form for adding meals to the cart
- Header with a cart button
- Cart shown in a modal overlay
- Shared cart state through React Context

## Tech Stack

- React 17
- Create React App (`react-scripts` 5)
- CSS Modules for component styling
- React Testing Library / Jest

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended) and npm

### Install and run

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000). The page reloads when you edit files.

### Scripts

| Command         | Description                                      |
| --------------- | ------------------------------------------------ |
| `npm start`     | Runs the app in development mode                 |
| `npm test`      | Runs the tests in interactive watch mode         |
| `npm run build` | Creates an optimized production build in `build` |
| `npm run eject` | Ejects from Create React App (one-way operation) |

## Project Structure

```
public/                     Static assets and index.html
src/
├── App.js                  Root component; toggles the cart modal
├── index.js                Entry point
├── Assets/                 Images
├── Components/
│   ├── Cart/               Cart modal and cart icon
│   ├── Layout/             Header and header cart button
│   ├── Meals/              Meals page, summary, list and meal items
│   └── UI/                 Reusable Card, Input and Modal components
└── Store/
    ├── Cart-Context.js     Cart context (items, totalAmount, addItem, removeItem)
    └── CartProvider.js     Cart state provider
```

## Notes

- The menu comes from a hard-coded `DUMMY_MEALS` array in `src/Components/Meals/MealsAvalible.js`. There is no backend.
- `src/Store/CartProvider.js` is currently empty. The cart state logic still needs to be implemented there before items can be added to or removed from the cart.

## Learn More

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)
