
import app from "./app.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


// for all
// http://localhost:3000/api/businesses?city=Zirakpur

// for one
//http://localhost:3000/api/businesses?city=Zirakpur&category=restaurants

// explicitivally all
// http://localhost:3000/api/businesses?city=Zirakpur&category=all