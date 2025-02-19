
/* Allow only numbers in input */
const handleAllowNumbersOnly = (e) => {
    if (e.target.type === "text" && !e.key.match(/^[0-9]+$/)) {
      e.preventDefault();
    }
  };

  /* Add commas as the user types the number */
  function addComma(txt) {
    txt.value = txt.value.replace(/,/gi, "").split(/(?=(?:\d{3})+$)/).join(",");
 }  














