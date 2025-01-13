// DOM ElEMENTS
const imgCardElm = document.getElementById('grid-img');
const overlayElm = document.getElementById('overlay');
const overlayImageElm = document.getElementById('overlay-image');
const closeButtonElm = document.getElementById('close-btn');
const imagesElm = document.querySelectorAll('.img-fluid');

// Funzione per generare immagini
const imgRenderer = () => {
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
        .then((res) => {
            imgCardElm.innerHTML = "";

            res.data.forEach((img) => {
                const col = document.createElement('div');
                col.className = 'col-sm-12 col-md-6 col-lg-4';

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
                imgCardElm.appendChild(col);

                // Aggiungi event listener per ogni immagine dinamica
                const image = col.querySelector('.img-fluid');
                image.addEventListener('click', () => showOverlay(image.src));
            });
        });
};



// Aggiungo listener al pulsante di chiusura
closeButtonElm.addEventListener('click', hideOverlay);

// Mostra l'overlay con l'immagine selezionata
function showOverlay(imageSrc) {
    overlayImageElm.src = imageSrc; // Imposto l'immagine nell'overlay
    overlayElm.classList.remove('hidden'); // Rimuovo la classe hidden
}

// Nascondo l'overlay
function hideOverlay() {
    overlayElm.classList.add('hidden'); // Aggiungo la classe hidden
}
// PAGE LOAD
imgRenderer();