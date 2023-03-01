"use strict";

import { ui } from "./ui.js";


let apiJsonDetails;

class Details {
  async getApiDetails(id) {
    $(`#loadingWhite`).parent().removeClass(`d-none`);
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0dfb2b2421msh89a3443eb2c628dp1443fdjsnbc37323b02cc',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };

    let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
    apiJsonDetails = await api.json();
    ui.displayDetails(apiJsonDetails);
    $(`#loadingWhite`).parent().addClass(`d-none`);
  }
}


export const details = new Details();
details.getApiDetails();