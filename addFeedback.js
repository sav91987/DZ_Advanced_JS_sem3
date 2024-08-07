import { getDataFromLS, setDataToLS } from "./localStorage.js";
const lsKeyFB = "feedback";
const lsKeyH2Text = "h2Text";

const inputEl = document.querySelector(".feedback__input");
const btnEl = document.querySelector(".feedback__btn");
const pEl = document.querySelector(".feedback__message");
//const divEl = document.querySelector(".feedback");

btnEl.addEventListener("click", () => {
    if (inputEl.value.trim() === "") {
        pEl.textContent = "Вы ничего не написали. Оставьте отзыв.";
        inputEl.value = "";
    } else {
        pEl.textContent = "Спасибо за ваш отзыв!";
        const textFeedback = inputEl.value.trim();
        inputEl.value = "";
        

        const feedback = getDataFromLS(lsKeyFB);
        const h2Text = getDataFromLS(lsKeyH2Text);
        console.log(h2Text);
        feedback.push({name: h2Text, textFeedback});

        setDataToLS(lsKeyFB, feedback);

        btnEl.disabled = true;
        
        setTimeout(() => {
            location.href = "./lookFeedback.html";
        }, 2000);
    }
});
