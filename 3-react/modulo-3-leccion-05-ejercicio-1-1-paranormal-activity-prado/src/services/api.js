const callToApi = () => {
  return fetch("https://api.tvmaze.com/search/shows?q=paranormal").then(
    (response) => response.json()
  );
};
export default callToApi;
