var url = "https://api.mrberry.ga/v1/sea-street-gold-rate";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
      let jsonData = JSON.parse(xhr.responseText);
      document.querySelector("#goldPrice").innerText = jsonData.rate;
   }};

xhr.send();

document.querySelector("#calform").onsubmit = function(e) {
    e.preventDefault();
    
    
    let price = parseFloat(document.querySelector("#goldPrice").value);
    let karat = parseInt(document.querySelector("#karat").value);
    let making = parseFloat(document.querySelector("#making").value);
    let weight = parseFloat(document.querySelector("#weight").value);
    let wastage = parseFloat(document.querySelector("#wastage").value);

    let price1g = price / 8;
    let weightPrice = (weight * price1g) / 100;
    switch (karat) {
        case 18:
            weightPrice *= 75.0;
            break;
        case 21:
            weightPrice *= 87.5;
            break;
        case 22:
            weightPrice *= 91.67;
            break;
        case 23:
            weightPrice *= 95.8;
            break;
        case 24:
            weightPrice *= 100;
            break;
        default:
            weightPrice *= 100;
            break;
    }

    let total_wastage_cost = weightPrice * (wastage/100);
    let total_making_cost = making * weight;
    let total_pure_gold_price = weightPrice;
    let total_making_wastage_cost = total_wastage_cost + total_making_cost;
    let total_price = weightPrice + total_making_cost + total_wastage_cost;


    document.querySelector("#total_wastage_cost").innerText = total_wastage_cost.toFixed(2);
    document.querySelector("#total_making_cost").innerText = total_making_cost.toFixed(2);
    document.querySelector("#total_pure_gold_price").innerText = total_pure_gold_price.toFixed(2);
    document.querySelector("#total_making_wastage_cost").innerText = total_making_wastage_cost.toFixed(2);
    document.querySelector("#total_price").innerText = total_price.toFixed(2);
    
    window.location.href = '#result';

}