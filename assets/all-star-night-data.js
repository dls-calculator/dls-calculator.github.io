

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
    "cal": (total, obj) => {
      obj.points = total;
      return total;
    },


    "phase-1": {
      "phaseTotal": 0,
      "items": [
        {
          "name": "Construction: 1 Minute",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*250, this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Construction: 5 Minute",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*(250*5), this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Construction: 15 Minute",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*(250*15), this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Construction: 30 Minute",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*(250*30), this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Construction: 60 Minute",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*(250*60), this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Construction: 4 Hour",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*(250*(4*60)), this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Construction: 8 Hour",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*(250*(8*60)), this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Construction: 12 Hour",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*(250*(12*60)), this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Construction: 15 Hour",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*(250*(15*60)), this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Construction: 1 Day",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*(250*(24*60)), this)},
          "points": 0,
          "max": ""
        },
  
        {
          "name": "Research: 1 Minute",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*250, this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Research: 5 Minute",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*(250*5), this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Research: 15 Minute",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*(250*15), this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Research: 30 Minute",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*(250*30), this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Research: 60 Minute",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*(250*60), this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Research: 4 Hour",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*(250*(4*60)), this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Research: 8 Hour",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*(250*(8*60)), this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Research: 12 Hour",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*(250*(12*60)), this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Research: 15 Hour",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*(250*(15*60)), this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Research: 1 Day",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*(250*(24*60)), this)},
          "points": 0,
          "max": ""
        },
  
        {
          "name": "Training: 1 Minute",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*250, this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Training: 5 Minute",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*(250*5), this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Training: 15 Minute",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*(250*15), this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Training: 30 Minute",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*(250*30), this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Training: 60 Minute",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*(250*60), this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Training: 4 Hour",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*(250*(4*60)), this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Training: 8 Hour",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*(250*(8*60)), this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Training: 12 Hour",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*(250*(12*60)), this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Training: 15 Hour",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*(250*(15*60)), this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Training: 1 Day",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*(250*(24*60)), this)},
          "points": 0,
          "max": ""
        },
  
        {
          "name": "Universal: 1 Minute",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*250, this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Universal: 5 Minute",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*(250*5), this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Universal: 15 Minute",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*(250*15), this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Universal: 30 Minute",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*(250*30), this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Universal: 60 Minute",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*(250*60), this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Universal: 4 Hour",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*(250*(4*60)), this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Universal: 8 Hour",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*(250*(8*60)), this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Universal: 12 Hour",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*(250*(12*60)), this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Universal: 15 Hour",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*(250*(15*60)), this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Universal: 1 Day",
          "rate": "250 per min.",
          "formula": function(q){return data.cal(q*(250*(24*60)), this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Exquisite File",
          "rate": "10,800 each",
          "formula": function(q){return data.cal(q*10800, this)},
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
          "rate": "1000 Each",
          "formula": function(q){return data.cal(q*1000, this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Advanced Map",
          "rate": "8000 Each",
          "formula": function(q){return data.cal(q*8000, this)}, 
          "points": 0,
          "max": ""
        },
        {
          "name": "100 XP",
          "rate": "1 per 50xp",
          "formula": function(q){return data.cal((q*100)/50, this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "500 XP",
          "rate": "1 per 50xp",
          "formula": function(q){return data.cal((q*500)/50, this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "1,000 XP",
          "rate": "1 per 50xp",
          "formula": function(q){return data.cal((q*1000)/50, this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "5,000 XP",
          "rate": "1 per 50xp",
          "formula": function(q){return data.cal((q*5000)/50, this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "10,000 XP",
          "rate": "1 per 50xp",
          "formula": function(q){return data.cal((q*10000)/50, this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "20,000 XP",
          "rate": "1 per 50xp",
          "formula": function(q){return data.cal((q*20000)/50, this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "50,000 XP",
          "rate": "1 per 50xp",
          "formula": function(q){return data.cal((q*50000)/50, this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Badges: Gold L",
          "rate": " 20,000 Each",
          "formula": function(q){return data.cal(q*20000, this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Badges: Gold M",
          "rate": "8,000 Each",
          "formula": function(q){return data.cal(q*8000, this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Badges: Gold S",
          "rate": "2,000 Each",
          "formula": function(q){return data.cal(q*2000, this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Badges: Purple L",
          "rate": "3,000 Each",
          "formula": function(q){return data.cal(q*3000, this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Badges: Purple M",
          "rate": "1,200 Each",
          "formula": function(q){return data.cal(q*1200, this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Badges: Purple S",
          "rate": "300 Each",
          "formula": function(q){return data.cal(q*300, this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Badges: Blue L",
          "rate": "500 Each",
          "formula": function(q){return data.cal(q*500, this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Badges: Blue M",
          "rate": "200 Each",
          "formula": function(q){return data.cal(q*200, this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Badges: Blue S",
          "rate": "40 Each",
          "formula": function(q){return data.cal(q*40, this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Fragments: Gold",
          "rate": "10,000 Each",
          "formula": function(q){return data.cal(q*10000, this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Fragments: Purple",
          "rate": "2,000 Each",
          "formula": function(q){return data.cal(q*2000, this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Fragments: Blue",
          "rate": "600 Each",
          "formula": function(q){return data.cal(q*600, this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Energy Cores",
          "rate": "15,000 Each",
          "formula": function(q){return data.cal(q*15000, this)},
          "points": 0,
          "max": ""
        },
        {
          "name": "Exquisite Files",
          "rate": "10,800 Each",
          "formula": function(q){return data.cal(q*10800, this)},
          "points": 0,
          "max": ""
        },







        // {
        //   "name": "test",
        //   "rate": " Each",
        //   "formula": function(q){return data.cal(q, this)},
        //   "points": 0,
        //   "max": function(){  return data.test},
        // },


      ]
    }
  
  };