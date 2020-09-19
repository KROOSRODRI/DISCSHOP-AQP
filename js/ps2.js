let principal2 = document.querySelector(".principal2");

const crear = (elemento) => document.createElement(elemento);

const dibujarps2 = () => {
    ps2.forEach((objps2) => {
        let card = crear("div");
        card.setAttribute("class", "card");

        let cardImagen = crear("div");
        cardImagen.setAttribute("class", "card__imagen");
        cardImagen.innerHTML = `<img src="${objps2.poster_path}" alt="" />
														</p>`;

        let cardInfo = crear("div");
        // cardInfo.setAttribute("class", "card__info");
        cardInfo.classList.add("card__info");
        cardInfo.innerHTML = `<h2>${objps2.title}</h2>
													
													<p class="card__descripcion">
														${objps2.overview}
													</p>
													<p class="card__feed">
														<small>
															<i class="fas fa-clock"></i> ${objps2.release_date} &nbsp; &nbsp; &nbsp;
															<i class="fas fa-dollar-sign"></i> ${objps2.precio} Precio</small>
															
													</p>`;

        card.appendChild(cardImagen);
        card.appendChild(cardInfo);
        principal2.appendChild(card);
    });

};
dibujarps2();
