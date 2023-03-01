"use strict";
import { details } from "./details.js";


export class UI {
  displayCards(apiJsonGames) {
    let box = ``;
    for (const object of apiJsonGames) {
      box += `<div class="col-xl-3 col-lg-4 col-md-6 col-12 mt-5">
        <div data-id="${object.id}" class="card bg-transparent h-100 game text-white rounded-2" role="button">
        <div class="px-3 card-body">
          <img src="${object.thumbnail}" class="w-100" alt="${object.title}">
          <div class="d-flex justify-content-between align-items-center mt-3">
            <h3 class="d-inline-block">${object.title}</h3>
            <span class="text-bg-primary p-2 rounded">Free</span>
          </div>
          <p class="mt-1 text-center text-white-50">${object.short_description}</p>
        </div>
        <footer class="d-flex justify-content-between p-2">
          <span class="p-1 rounded">${object.genre}</span>
          <span class="p-1 rounded">${object.platform}</span>
        </footer>
      </div>
      </div>`;
    }
    $(`#games`).find(`.row`).html(box);


    // show details
    $(`.card`).click(function () {
      details.getApiDetails($(this).attr(`data-id`));
      $(`main`).addClass(`d-none`)
      $(`#details`).removeClass(`d-none`);
    })
    // show details
  }



  displayDetails(apiJsonDetails) {
    let box = `<div class="container text-white">
      <div class="d-flex justify-content-between align-items-center">
        <h3 class="d-inline-block py-4">Details Game</h3>
        <button class="btn-close btn-close-white"></button>
      </div>
      <div class="row">
        <div class="col-md-4 col-12">
          <img src="${apiJsonDetails.thumbnail}" class="w-100" alt="${apiJsonDetails.title}">
        </div>
        <div class="col-md-8 col-12">
          <h3>Title: ${apiJsonDetails.title}</h3>
          <p>Category:
            <span class="text-bg-info rounded py-1 px-2">${apiJsonDetails.genre}</span>
          </p>
          <p>Platform:
            <span class="text-bg-info rounded py-1 px-2">${apiJsonDetails.platform}</span>
          </p>
          <p>Status:
            <span class="text-bg-info rounded py-1 px-2">${apiJsonDetails.status}</span>
          </p>
          <p class="detailsDesc">${apiJsonDetails.description}</p>
          <a href="${apiJsonDetails.game_url}" target="_blank" class="btn btn-outline-warning text-white">Show Game</a>
        </div>
      </div>
    </div>`;
    $(`#details`).html(box);


    // close btn
    $(`.btn-close`).click(function () {
      $(`#details`).addClass(`d-none`);
      $(`main`).removeClass(`d-none`)
    })
    // close btn
  }
}

export const ui = new UI();