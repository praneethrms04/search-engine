
const GOOGLE_DEV_KEY = "AIzaSyB84YCZqJfoFFDKr6M_4d8xe3T26utxEYk"
const SEARCH_CX_KEY = "a0ef7fe2e48a443bf"

// const url = `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_DEV_KEY}&cx=${SEARCH_CX_KEY}&q=${searchQuery}`

export const searchForQuery = (searchQuery) => {
  const url = `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_DEV_KEY}&cx=${SEARCH_CX_KEY}&q=${searchQuery}`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => console.log(result));
};

