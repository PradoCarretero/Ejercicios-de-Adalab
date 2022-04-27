const callToApi = (searchName) => {
  return fetch(` https://api.tvmaze.com/search/shows?q=${searchName}`)
    .then((response) => response.json())
    .then((response) => {
      // La respuesta de la API es un objeto que dentro tiene la propiedad results, que es un array
      // Recorremos el array results obteniendo solo el nombre
      // Esto lo hacemos para limpiar la respuesta de la API antes de devolverla al componente App
      // Esto es opcional pero recomendado

      const result = response.map((serie) => {
        return serie.show;
      });
      // Retornamos los resultados de la API al componente App
      return result;
    });
};

export default callToApi;
