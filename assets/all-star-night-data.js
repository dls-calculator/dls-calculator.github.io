

//   "name": "Item Name", << Item Name
//   "quantity": 0, << Item quantity, should always be set to 0
//   "rate": "0 per -.", << Display text for rate
//   "formula": [
//    "", << Formula Type
//    250 << Formula for rate (i.e Quantity Formula_Type Formula should = points)
//      ] 
//   "points": 0, << Item points, should always be set to 0
//   "max": [
//    "", << Max points from this item
//    "" << Max points from this type of item (this is for stuff with more than one item)
//    ] ^^ Use string for no max and number to set max



const data = {
    "phase-1": {
      "phaseTotal": 0,
      "items": [
        {
          "name": "Construction: 1 Minute",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*250},
          "points": 0,
          "max": ""
        },
        {
          "name": "Construction: 5 Minute",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*(250*5)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Construction: 15 Minute",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*(250*15)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Construction: 30 Minute",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*(250*30)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Construction: 60 Minute",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*(250*60)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Construction: 4 Hour",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*(250*(4*60))},
          "points": 0,
          "max": ""
        },
        {
          "name": "Construction: 8 Hour",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*(250*(8*60))},
          "points": 0,
          "max": ""
        },
        {
          "name": "Construction: 12 Hour",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*(250*(12*60))},
          "points": 0,
          "max": ""
        },
        {
          "name": "Construction: 15 Hour",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*(250*(15*60))},
          "points": 0,
          "max": ""
        },
        {
          "name": "Construction: 1 Day",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*(250*(24*60))},
          "points": 0,
          "max": ""
        },
  
        {
          "name": "Research: 1 Minute",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*250},
          "points": 0,
          "max": ""
        },
        {
          "name": "Research: 5 Minute",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*(250*5)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Research: 15 Minute",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*(250*15)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Research: 30 Minute",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*(250*30)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Research: 60 Minute",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*(250*60)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Research: 4 Hour",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*(250*(4*60))},
          "points": 0,
          "max": ""
        },
        {
          "name": "Research: 8 Hour",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*(250*(8*60))},
          "points": 0,
          "max": ""
        },
        {
          "name": "Research: 12 Hour",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*(250*(12*60))},
          "points": 0,
          "max": ""
        },
        {
          "name": "Research: 15 Hour",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*(250*(15*60))},
          "points": 0,
          "max": ""
        },
        {
          "name": "Research: 1 Day",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*(250*(24*60))},
          "points": 0,
          "max": ""
        },
  
        {
          "name": "Training: 1 Minute",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*250},
          "points": 0,
          "max": ""
        },
        {
          "name": "Training: 5 Minute",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*(250*5)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Training: 15 Minute",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*(250*15)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Training: 30 Minute",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*(250*30)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Training: 60 Minute",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*(250*60)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Training: 4 Hour",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*(250*(4*60))},
          "points": 0,
          "max": ""
        },
        {
          "name": "Training: 8 Hour",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*(250*(8*60))},
          "points": 0,
          "max": ""
        },
        {
          "name": "Training: 12 Hour",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*(250*(12*60))},
          "points": 0,
          "max": ""
        },
        {
          "name": "Training: 15 Hour",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*(250*(15*60))},
          "points": 0,
          "max": ""
        },
        {
          "name": "Training: 1 Day",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*(250*(24*60))},
          "points": 0,
          "max": ""
        },
  
        {
          "name": "Universal: 1 Minute",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*250},
          "points": 0,
          "max": ""
        },
        {
          "name": "Universal: 5 Minute",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*(250*5)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Universal: 15 Minute",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*(250*15)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Universal: 30 Minute",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*(250*30)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Universal: 60 Minute",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*(250*60)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Universal: 4 Hour",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*(250*(4*60))},
          "points": 0,
          "max": ""
        },
        {
          "name": "Universal: 8 Hour",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*(250*(8*60))},
          "points": 0,
          "max": ""
        },
        {
          "name": "Universal: 12 Hour",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*(250*(12*60))},
          "points": 0,
          "max": ""
        },
        {
          "name": "Universal: 15 Hour",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*(250*(15*60))},
          "points": 0,
          "max": ""
        },
        {
          "name": "Universal: 1 Day",
          "quantity": 0,
          "rate": "250 per min.",
          "formula": (q) => {return q*(250*(24*60))},
          "points": 0,
          "max": ""
        },
        {
          "name": "Exquisite File",
          "quantity": 0,
          "rate": "10,800 each",
          "formula": (q) => {return q*10800},
          "points": 0,
          "max": ""
          },
        ], 
    },

    "phase-2": {
      "phaseTotal": 0,
      "items": [
        {
          "name": "Normal Map",
          "quantity": 0,
          "rate": "1000 Each",
          "formula": (q) => {return q*1000},
          "points": 0,
          "max": ""
        },
        {
          "name": "Advanced Map",
          "quantity": 0,
          "rate": "8000 Each",
          "formula": (q) => {return q*8000}, 
          "points": 0,
          "max": ""
        },
        {
          "name": "100 XP",
          "quantity": 0,
          "rate": "1 per 50xp",
          "formula": (q) => {return (q*100)/50},
          "points": 0,
          "max": ""
        },
        {
          "name": "1,000 XP",
          "quantity": 0,
          "rate": "1 per 50xp",
          "formula": (q) => {return (q*1000)/50},
          "points": 0,
          "max": ""
        },









        {
          "name": "Badges: Gold L",
          "quantity": 0,
          "rate": " 20,000 Each",
          "formula": (q) => {return q*20000},
          "points": 0,
          "max": ""
        },
        {
          "name": "Badges: Gold M",
          "quantity": 0,
          "rate": "8,000 Each",
          "formula": (q) => {return q*8000},
          "points": 0,
          "max": ""
        },
        {
          "name": "Badges: Gold S",
          "quantity": 0,
          "rate": "2,000 Each",
          "formula": (q) => {return q*2000},
          "points": 0,
          "max": ""
        },
        {
          "name": "Badges: Purple L",
          "quantity": 0,
          "rate": "3,000 Each",
          "formula": (q) => {return q*3000},
          "points": 0,
          "max": ""
        },
        {
          "name": "Badges: Purple M",
          "quantity": 0,
          "rate": "1,200 Each",
          "formula": (q) => {return q*1200},
          "points": 0,
          "max": ""
        },
        {
          "name": "Badges: Purple S",
          "quantity": 0,
          "rate": "300 Each",
          "formula": (q) => {return q*300},
          "points": 0,
          "max": ""
        },
        {
          "name": "Badges: Blue L",
          "quantity": 0,
          "rate": "500 Each",
          "formula": (q) => {return q*500},
          "points": 0,
          "max": ""
        },
        {
          "name": "Badges: Blue M",
          "quantity": 0,
          "rate": "200 Each",
          "formula": (q) => {return q*200},
          "points": 0,
          "max": ""
        },
        {
          "name": "Badges: Blue S",
          "quantity": 0,
          "rate": "40 Each",
          "formula": (q) => {return q*40},
          "points": 0,
          "max": ""
        },
        {
          "name": "Fragments: Gold",
          "quantity": 0,
          "rate": "10,000 Each",
          "formula": (q) => {return q*10000},
          "points": 0,
          "max": ""
        },
        {
          "name": "Fragments: Purple",
          "quantity": 0,
          "rate": "2,000 Each",
          "formula": (q) => {return q*2000},
          "points": 0,
          "max": ""
        },
        {
          "name": "Fragments: Blue",
          "quantity": 0,
          "rate": "600 Each",
          "formula": (q) => {return q*600},
          "points": 0,
          "max": ""
        },
        {
          "name": "Energy Cores",
          "quantity": 0,
          "rate": "15,000 Each",
          "formula": (q) => {return q*15000},
          "points": 0,
          "max": ""
        },
        {
          "name": "Exquisite Files",
          "quantity": 0,
          "rate": "10,800 Each",
          "formula": (q) => {return q*10800},
          "points": 0,
          "max": ""
        },







        {
          "name": "",
          "quantity": 0,
          "rate": " Each",
          "formula": [ "", ],
          "points": 0,
          "max": ""
        },


      ]
    }
  
  };