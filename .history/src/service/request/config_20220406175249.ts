let BASE_URL = "";
const TIME_OUT = 10000;

if (process.env.NODE_ENV === "development") {
  BASE_URL = "https://api.inews.qq.com/newsqa/v1";
} else if (process.env.NODE_ENV === "production") {
  BASE_URL = "https://api.inews.qq.com/newsqa/v1";
} else {
  BASE_URL = "https://api.inews.qq.com/newsqa/v1";
}

export { BASE_URL, TIME_OUT };
