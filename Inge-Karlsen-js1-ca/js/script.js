const baseUrl = "https://rickandmortyapi.com/api/character/";

fetch(baseUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        useJson(json);
    })
    .catch(function(error) {
        console.dir(error);
    });

    function useJson(json) {
    const results = json.results;
    console.dir(results)

    const resultsCard = document.querySelector(".row.results");

    let html = "";

    results.forEach(function(result) {

      const typeUknown = "Unknown"

      if (result.type == false) {
        result.type = typeUknown;
      };
        html += `<div class="col-sm-6 col-md-4 col-lg-3">
                  <div class="card">
                    <img class="image" src="${result.image}" alt="${result.name}">
                    <div class="details">
                      <h4 class="name">${result.name}</h4>
                      <p>Type: ${result.type}</p>
                      <p>Episode count: ${result.episode.length}</p>
                      <a class="btn btn-primary" href="details.html?id=${result.id}">Details</a>
                    </div>
                  </div>
                 </div>`;

});

  resultsCard.innerHTML = html;
}
