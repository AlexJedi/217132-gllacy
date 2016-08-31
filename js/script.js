var feedbackopen = document.querySelector(".btn-contact");
var feedbackclose = document.querySelector(".feedback-close-btn");
var feedbackquery = document.querySelector(".feedback");

feedbackclose.addEventListener("click", function (event) {
  event.preventDefault();
  feedbackquery.classList.remove("feedback-form-bounce");
	feedbackquery.classList.remove("feedback-form-shake");
});

feedbackopen.addEventListener("click", function (event) {
	event.preventDefault();
	feedbackquery.classList.add("feedback-form-bounce");
});
