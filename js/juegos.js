let principal1 = document.querySelector(".principal1");

const crear = (elemento) => document.createElement(elemento);

const dibujarjuegos = () => {
  juegos.forEach((objjuego) => {
    let card = crear("div");
    card.setAttribute("class", "card");

    let cardImagen = crear("div");
    cardImagen.setAttribute("class", "card__imagen");
    cardImagen.innerHTML = `<img src="${objjuego.poster_path}" alt="" />
														</p>`;

    let cardInfo = crear("div");
    // cardInfo.setAttribute("class", "card__info");
    cardInfo.classList.add("card__info");
    cardInfo.innerHTML = `<h2>${objjuego.title}</h2>
													
													<p class="card__descripcion">
														${objjuego.overview}
													</p>
													<p class="card__feed">
														<small>
															<i class="fas fa-clock"></i> ${objjuego.release_date} &nbsp; &nbsp; &nbsp;
															<i class="fas fa-dollar-sign"></i> ${objjuego.precio} Precio</small>
															
													</p>`;

    card.appendChild(cardImagen);
    card.appendChild(cardInfo);
    principal1.appendChild(card);
  });

};
dibujarjuegos();
