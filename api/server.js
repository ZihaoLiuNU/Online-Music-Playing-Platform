import app from "./com/app.js";

//set the api listening port.
const port = 9000;

app.listen(port, () => console.log(`Server listening at ${port}`))