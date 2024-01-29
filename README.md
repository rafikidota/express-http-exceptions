## Getting Started
```sh
git clone https://github.com/rafikidota/express-http-exceptions.git && cd express-http-exceptions
```

## Install dependencies:

```sh
npm install
```

## Run the application:

```sh
node app.js
```
Open your browser and visit http://localhost:3000 to see the application in action.

## Routes and Exception Examples

1. HTTP Exception (Not Implemented)

    Endpoint: /http-exception
    Description: Throws a Not Implemented HTTP exception with a status code of 501.

2. Bad Request Exception

    Endpoint: /bad-request
    Description: Throws a Bad Request HTTP exception with a custom message.

3. Unauthorized Exception

    Endpoint: /unauthorized
    Description: Throws an Unauthorized HTTP exception with a custom message.

4. Forbidden Exception

    Endpoint: /forbidden
    Description: Throws a Forbidden HTTP exception with a custom message.

5. Not Found Exception

    Endpoint: /not-found
    Description: Throws a Not Found HTTP exception with a custom message.

6. Internal Server Error Exception

    Endpoint: /internal-server-error
    Description: Throws an Internal Server Error HTTP exception with a custom message.

7. Error Handling

    The application employs a global error handling middleware to catch and respond to HTTP exceptions. The middleware extracts relevant information such as name, message, and status from the error object and sends a JSON response with the details.