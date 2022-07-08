const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
    ],
    target: "https://localhost:15793",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
