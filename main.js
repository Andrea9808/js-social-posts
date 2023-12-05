//Milestone 1 - Prendendo come riferimento il layout di esempio presente nell’html, 
//stampiamo i post del nostro feed, 
//prendendo le informazioni che ci servono dall’array di oggetti che già trovate.


const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


//considero il container
const containerPost = document.getElementById("container");

posts.forEach(post => {

    containerPost.innerHTML +=
    `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src= ${post.author.image} alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${post.author.name}</div>
                        <div class="post-meta__time">${europaDate(post.created)}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${post.content}</div>
            <div class="post__image">
                <img src=${post.media} alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `
    //Milestone 2 - Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali iniziale dei like e inizializzo una variabile per il abbiamo messo il like.
   
    //prendo in considerazione il footer del progetto 
    const footer = document.querySelectorAll(".post__footer");

    //creo un ciclo forEach per i bottoni
    footer.forEach(postFooter => {

        //seleziono il pulsante like
        const likeButton = postFooter.querySelector(".js-like-button");

        //seleziono il contatore del like
        const likeCounter = postFooter.querySelector(".js-likes-counter")


        //converto la stringa in numero.
        let likes = parseInt(likeCounter.innerText);

        console.log(likeCounter);  
        
        //inizzializzo del pulsante in false
        let clickButton = false;


        //al click del pulsante like

        likeButton.addEventListener("click", function(){
            
             // cambia il colore del testo del pulsante e aggiorna il contatore dei likes

             //SE il pulsante è cliccato
            if(!clickButton)
            {
                likeButton.style.color = 'blue';
                clickButton = true;
                likes++;

            //ALTRIMENTI se non è cliccato o tolgo il click
            } else 
            {
                likeButton.style.color = '#404040';
                clickButton = false;
                likes--;
            }

            // aggiorno il contatore dei like
            likeCounter.innerText = likes;


        }
        )

    })

})


//funzione per inserire data europea
function europaDate(date) {
    const dataEuropa = new Date(date).toLocaleDateString('it-IT',  { day: 'numeric', month: 'numeric', year: 'numeric' });
    return dataEuropa;
}


