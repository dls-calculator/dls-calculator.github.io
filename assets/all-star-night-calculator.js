const phases = ["phase-1", "phase-2", "phase-3", "phase-4", "phase-5"];

// Allow only numbers in input 
const handleAllowNumbersOnly = (e) => {
  if (e.target.multipleinput == false) { // If this is not a multiple input allow only number
    if (e.target.type === "text" && !e.key.match(/^[0-9]+$/)) {
      e.preventDefault();
    }
  } else { // If it is allow Numbers and +
    if (e.target.type === "text" && !e.key.match(/^[0-9&+]+$/)) {
      e.preventDefault();
    }
  }
  };

  // Add commas as the user types the number (and calculate after) 
  function addComma(e) {
    if (e.multipleinput == false) { // Don't add commas to fields that accept multiple inputs
      e.value = addCommas(e.value.replace(/,/gi, ""));
    }
    calculate(e);
 }  

 // Add commas to number (type must be string though)
  function addCommas(number) {
    return number.split(/(?=(?:\d{3})+$)/).join(",")
  }

// On load make all the rows
document.addEventListener("DOMContentLoaded", function(event) {
  for(let phase in phases){
    let items = data[phases[phase]].items;
    for(let item in items){

      const tbody = document.getElementById(phases[phase] + "-body");
      const template = document.getElementById("template-row");
    
      // Clone the new row and insert it into the table
      const clone = template.content.cloneNode(true);

      // Item
      let nameElement = clone.querySelectorAll("p")[0];
      nameElement.textContent = items[item].name;

      // Quantity
      let quantityElement = clone.querySelectorAll("input")[0];
      quantityElement.phase = phases[phase];
      quantityElement.itemNumber = item;
      quantityElement.multipleinput = (items[item].special == "multiple-input")? true : false;
      quantityElement.id = "input-" + item;

      // Rate
      let rateElement = clone.querySelectorAll("p")[1];
      rateElement.textContent = items[item].rate;

      // Points
      let pointsElement = clone.querySelectorAll("p")[2];
      pointsElement.id = phases[phase] + "-points-" + item;

      tbody.appendChild(clone);
    }
  }
});

  function calculate(e) {
    // Get current item and set total to display 
    let quantity = e.value.replace(/,/gi, "");
    let phase = e.phase;
    let num = e.itemNumber;
    let currentItem = data[phase].items[num];
    
    // Update Item total
    if (e.multipleinput == true) { // Add input first if this is a multiple input field
      let inputs = quantity.split("+");
      let itemTotal = 0;
      for (let i in inputs) {
        itemTotal = itemTotal + inputs[i];
      }
      document.getElementById(phase + "-points-" + num).innerText = addCommas(currentItem.formula(itemTotal, e.id).toString());
    } else {
      document.getElementById(phase + "-points-" + num).innerText = addCommas(currentItem.formula(quantity, e.id).toString());
    }
    // Update Phase total
    let total = 0;
    let items = data[phase].items;
    for(let item in items){
        total = Number(total) + Number(items[item].points);
    }
    let phaseTotal = addCommas(total.toString());
    data[phase].phaseTotal = total;
    document.getElementById(phase + "-total").innerText = phaseTotal;
    document.getElementById(phase + "-final-total").innerText = phaseTotal;

    // Update Final total
    let finalTotal = 0;
    for(let i in phases){
      finalTotal = Number(finalTotal) + Number(data[phases[i]].phaseTotal);
    }
    console.log(finalTotal)
    document.getElementById("final-total").innerText = addCommas(finalTotal.toString());
  }

  // UI
  function toggleAccordion(index) {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);
 
    // SVG for Minus icon
    const minusSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
      </svg>
    `;
 
    // SVG for Plus icon
    const plusSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
      </svg>
    `;
 
    // Toggle the content's max-height for smooth opening and closing
    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
      content.style.maxHeight = '0';
      icon.innerHTML = plusSVG;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      icon.innerHTML = minusSVG;
    }
  }

// Other

  // Callback when max is reached fo an item
  function itemLimitReached(id, limitReached) {
    let input = document.getElementById(id);
    if(limitReached){
      input.style.color = "#DC2626";
    } else {
      input.style.color = "#302722";
    }
  }

  // Handles any special functions
  function cal(itemsTotal, obj, id){ 
    let isMax = data.limits[obj.special](itemsTotal, obj.points);
    if (isMax) { // Check if this exceeds the limit if any
      // If it exceeds the limit don't update and change text red
      itemLimitReached(id, true);
      return obj.points;
    } else {
      // If it doesn't exceed the limit update (and clear red text if any)
      itemLimitReached(id, false);
      obj.points = itemsTotal;
      return itemsTotal;
    }
  }
















  