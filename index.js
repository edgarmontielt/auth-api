const app = require("./src/app");
const { port } = require("./src/config");

const PORT = port || 4000

console.log(port);

app.listen(PORT, () => {
    console.log('Running in http://localhost:' + port)
})