let BASE_URL = "";
const TIME_OUT = 10000;

if (process.env.NODE_ENV === "development") {
  BASE_URL = "https://api.inews.qq.com/newsqa/v1/query/inner/publish";
} else if (process.env.NODE_ENV === "production") {
  BASE_URL = "https://api.inews.qq.com/newsqa/v1/query/inner/publish";
} else {
  BASE_URL = "https://api.inews.qq.com/newsqa/v1/query/inner/publish";
}

export { BASE_URL, TIME_OUT };
