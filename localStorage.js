const getDataFromLS = (key) => {
    const data = JSON.parse(localStorage.getItem(key));  
    if (!data) {
        return [];
    }
    return data;
};

const setDataToLS = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

export { getDataFromLS, setDataToLS };
