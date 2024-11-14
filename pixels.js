const url = "https://www.pexels.com/photo/close-up-photo-of-cute-sleeping-cat-416160/";
const apiKey = "a9hLp9nUAMJRNvAkLQyrF3DeHmAYgBGEswTBbRosr2uuf3ep5dMHjtky";
const CardImg = document.querySelectorAll(".card > img");

const LoadImg = (e) => {
  e.preventDefault();

  fetch(url, {
    method: "GET",
    headers: { Authorization: apiKey },
  });
};
