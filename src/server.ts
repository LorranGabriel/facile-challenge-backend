import app from "./app";
import SecureDAO from "./dao/secureDAO";


require('dotenv').config();

const port = process.env.PORT || 5000

var conn = process.env.DATABASE_URL

app.listen(port, async () => {
    await SecureDAO.injectDB(conn);
    console.log(`Listening on port ${port}`);
})
