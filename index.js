const fs = require("fs");
const http = require("http");
const url = require("url");

const homePage = fs.readFileSync(`${__dirname}/templates/home.html`, "utf8");
const homePageStyle = fs.readFileSync(
  `${__dirname}/templates/home-style.css`,
  "utf8"
);
const server = http.createServer((req, res) => {
  res.end("Welcome")
  // const pathName = req.url;
  // if (pathName === "/" || pathName === "/home") {
  //   res.writeHead(200, {
  //     "Content-Type": "text/html",
  //   });
  //   res.end(homePage);
  // } else if (pathName === "/home-style.css") {
  //   res.writeHead(200, {
  //     "Content-Type": "text/css",
  //   });
  //   res.end(homePageStyle);
  // } else if (pathName === "/buy-a-car") {
  //   res.end("Hello, buyer!");
  // } else {
  //   res.writeHead(404, {
  //     "Content-Type": "text/html",
  //   });
  //   res.end("<h1>Page not found</h1>");
  // }
});

const port = 8000;
server.listen(port, "127.0.0.1", () => {
  console.log(`Listening to requests on port ${port} `);
});
