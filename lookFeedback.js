import { getDataFromLS, setDataToLS } from "./localStorage.js";

const lsKeyFB = "feedback";
const lsKeyH2Text = "h2Text";

const initialData = [
    {
        id: "1",
        product: "Apple iPhone 13",
    },
    {
        id: "2",
        product: "Samsung Galaxy Z Fold 3",
    },
    {
        id: "3",
        product: "Sony PlayStation 5",
    },
];

const divEl = document.querySelector(".container_feedback");

initialData.forEach((element) => {
    divEl.innerHTML += `
    <h2 class="h2_feedback">${element.product}</h2>
    <div></div>
    <button class="btn_feedback">Добавить отзыв</button>`;
});

const setLsH2Text = (targetEl) => {
    setDataToLS(lsKeyH2Text, targetEl.textContent);
    const h2Text = [];
    h2Text.push(targetEl.innerText);
    location.href = "addFeedback.html";
};

const showFeedbacks = (targetEl) => {
    setDataToLS(lsKeyH2Text, targetEl.textContent); // разобраться, какая то хуйня попадает
    targetEl.nextElementSibling.innerHTML = "";
    let count = 0;

    if (getDataFromLS(lsKeyFB).length === 0) {
        targetEl.nextElementSibling.innerHTML = `<p>На данный товар еще нет отзыва</p>`;
    }

    getDataFromLS(lsKeyFB).forEach((element) => {
        if (element.name === getDataFromLS(lsKeyH2Text)) {
            targetEl.nextElementSibling.innerHTML += `<div style="display: flex; align-items: center; gap: 15px;">
<p>${element.textFeedback}</p>
<button class="remove_feedback-btn"> - </button>
</div>`;
            count++;
        }
    });

    if (count === 0) {
        targetEl.nextElementSibling.innerHTML = `<p>На данный товар еще нет отзыва</p>`;
    }
};

const removeFeedback = (targetEl) => {
    const removedFeedback = targetEl.previousElementSibling.textContent;

    const arrFedback = getDataFromLS(lsKeyFB);
    arrFedback.forEach((element, index) => {
        if (element.textFeedback === removedFeedback) {
            arrFedback.splice(index, 1);
            console.log(arrFedback);
        }
    });
    setDataToLS(lsKeyFB, arrFedback);
    targetEl.parentNode.remove();
};

const addFeedback = () => {
    divEl.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn_feedback")) {
            setLsH2Text(e.target.previousElementSibling.previousElementSibling);
        }

        if (e.target.classList.contains("h2_feedback")) {
            showFeedbacks(e.target);
        }

        if (e.target.classList.contains("remove_feedback-btn")) {
            removeFeedback(e.target);
        }
    });
};

addFeedback();
