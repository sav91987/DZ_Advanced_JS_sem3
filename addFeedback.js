import { getDataFromLS, setDataToLS } from "./localStorage.js";
const lsKeyFB = "feedback";
const lsKeyH2Text = "h2Text";

const inputEl = document.querySelector(".feedback__input");
inputEl.focus();
const btnEl = document.querySelector(".feedback__btn");
const pEl = document.querySelector(".feedback__message");

btnEl.addEventListener("click", () => {
    inputEl.focus();
    if (inputEl.value.trim() === "") {
        pEl.textContent = "Вы ничего не написали. Оставьте отзыв.";
        inputEl.value = "";
    } else {
        pEl.textContent = "Спасибо за ваш отзыв!";
        const textFeedback = inputEl.value.trim();
        inputEl.value = "";
        const feedback = getDataFromLS(lsKeyFB);
        const h2Text = getDataFromLS(lsKeyH2Text);
        feedback.push({name: h2Text, textFeedback});
        setDataToLS(lsKeyFB, feedback);
        btnEl.disabled = true;
        setTimeout(() => {
            location.href = "./lookFeedback.html";
        }, 1000);
    }
});
