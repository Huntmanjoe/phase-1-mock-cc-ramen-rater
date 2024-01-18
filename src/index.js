document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/ramens')
        .then(resp => resp.json())
        .then(data => {
            data.forEach(ramen => {
                const ramenImg = document.createElement('img');
                ramenImg.src = ramen.image;
                ramenImg.alt = ramen.name;
                ramenImg.addEventListener('click', () => ramenDisplay(ramen));
                document.querySelector('#ramen-menu').appendChild(ramenImg);
                ramenDisplay(data[0]); // This is part of the advanced options
            });
        });
});

document.querySelector('#edit-ramen').addEventListener('submit', (event) => {
    event.preventDefault()
    const newRate = document.querySelector('#edit-rating').value;
    const newCom = document.querySelector('#edit-comment').value;

    if (displayedRamen) {
        displayedRamen.rating = newRate
        displayedRamen.comment = newCom;


        ramenDisplay(displayedRamen);
    } else {
        console.log("no comment displayed")
    }
    

})


function ramenDisplay(ramen) {
    displayedRamen = ramen;
    const image = document.querySelector('#ramen-detail img');
    const name = document.querySelector('#ramen-detail h2');
    const restaurant = document.querySelector('#ramen-detail h3');
    const rating = document.querySelector('#rating-display');
    const comment = document.querySelector('#comment-display');

    image.src = ramen.image;
    name.textContent = ramen.name;
    restaurant.textContent = ramen.restaurant;
    rating.textContent = ramen.rating;
    comment.textContent = ramen.comment;
}

document.querySelector('#new-ramen').addEventListener('submit', (e) => {
    e.preventDefault();
    const newRamen = {
        image: e.target.image.value,
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        rating: e.target.rating.value,
        comment: e.target['new-comment'].value,
    };

    const newerImage = document.createElement('img');
    newerImage.src = newRamen.image;
    newerImage.alt = newRamen.name;
    newerImage.addEventListener('click', () => ramenDisplay(newRamen));
    document.querySelector('#ramen-menu').appendChild(newerImage);

    e.target.reset();
});

