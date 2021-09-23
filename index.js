const App = require('./src/application/App');

const app = new App();
try {
    app.start();
} catch (error) {
    throw new Error(error.message);
}