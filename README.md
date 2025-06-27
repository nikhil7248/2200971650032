# 2200971650032
# URL Shortener App

This is a URL Shortener web application developed as part of the **AffordMed Campus Hiring Evaluation**. The application provides the ability to shorten long URLs and manage their validity, with an optional custom shortcode.

## Features

- **Shorten URLs**: Shorten long URLs into more manageable ones.
- **Validity**: Set an optional expiration time for shortened URLs.
- **Custom Shortcode**: Optionally, users can specify a custom shortcode for the shortened URL.
- **Redirection**: Redirect users from the shortened URL to the original long URL.
- **Statistics Page**: View detailed statistics for shortened URLs such as click count and geographical data.

## Requirements

- **React**: The application is built using React for the frontend.
- **Material UI**: The UI is styled using Material UI for a modern, responsive design.
- **Logging Middleware**: Extensive use of logging middleware for monitoring and debugging.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/your-roll-number.git
    ```

2. Install dependencies:

    ```bash
    cd url-shortener-app
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

4. The app will be available at `http://localhost:3000`.

## Folder Structure

- **`src/`**: Contains the main React app components and logic.
  - **`App.js`**: The main component for the URL shortener.
  - **`logger.js`**: Contains the logging middleware for API calls.
- **`public/`**: Contains the static files for the React app.

## API Integration

### Logging Middleware
- The app integrates with a custom logging middleware to log API requests and responses.
- Each log entry captures the following:
  - **Stack**: Identifies if the log is related to the frontend or backend.
  - **Level**: Represents the severity of the log (e.g., info, error).
  - **Package**: Identifies which part of the app generated the log.
  - **Message**: Provides details about the logged event.

### API Endpoints
1. **POST /evaluation-service/url**: Shortens a given URL.
2. **POST /evaluation-service/logs**: Sends logs to the server.
3. **GET /evaluation-service/statistics**: Fetches statistics for all shortened URLs.

## Usage

1. Enter a **long URL** in the input field.
2. Optionally, set a **validity period** in minutes.
3. Optionally, enter a **custom shortcode**.
4. Click **Shorten URL** to generate a shortened version.
5. Visit the **Statistics Page** to see details about each shortened URL.

## Contributing

Feel free to fork this repository and create pull requests for improvements or bug fixes.

## License

This project is open-source and available under the [MIT License](LICENSE).
