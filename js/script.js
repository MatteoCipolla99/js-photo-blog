// DOM ElEMENTS
const imgCard = document.getElementById('grid-img');

// Funzione per generare immagini
const imgRenderer = () => {
    // AXIOS
    axios
        .get('https://jsonplaceholder.typicode.com/photos?_limit=6')
        .then((res) => {
            imgCard.innerHTML = "";

            // Iterazione sui dati ricevuti
            res.data.forEach((img) => {
                // Creazione del contenitore della card
                const col = document.createElement('div');
                col.className = 'col-lg-4 col-md-6 col-sm-12';

                col.innerHTML = `
                    <img src="img/pin.svg" class="pin">
                    <div class="card custom-card">
                        <img src="${img.url}" class="img-fluid" alt="${img.title}">
                        <div class="card-body custom-card-body">
                            <p>${img.title}</p>
                        </div>
                    </div>
                `;

                // Aggiunta della card al contenitore principale
                imgCard.appendChild(col);
            });
        });
};

// PAGE LOAD
imgRenderer();