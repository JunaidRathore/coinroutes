
# Order Book Application

This is a React application that provides a visualization of order book data, including price charts and best pricing information. It is built with React, Redux, and Tailwind CSS.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [State Management](#state-management)
- [Build](#build)
- [License](#license)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd project-directory
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

To start the development server, run:

```bash
npm start
```

This will run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Components

The application is structured with several components:

- **Common Components:**
  - `Select.jsx`: A reusable select dropdown component.
  - `Spinner.jsx`: A loading spinner component.

- **Order Book Components:**
  - `Price Chart`: Displays a chart of price changes.
  - `Ladder`: Shows the order book ladder with size and prices.
  - `Best Pricing`: Displays the best pricing options.
  - `Currency Dropdown`: Allows the selection of different currencies.

## State Management

This application uses Redux for state management. Key files include:

- `orderBookSlice.js`: Manages state related to the order book.
- `commonSlice.js`: Manages common application state.
- `store.js`: Configures and combines the slices into the Redux store.

## Build

To create a production build, run:

```bash
npm run build
```

This will create an optimized build of the application in the `build` directory.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
