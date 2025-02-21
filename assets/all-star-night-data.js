
// TODO redo this:
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
    "cal": (itemsTotal, obj) => { 
      let ismax = data.limits[obj.max](itemsTotal, obj.points);
      if (ismax) { // Check if this exceeds the limit if any
        // If it exceeds the limit don't update it
        return obj.points;
      } else {
        // If it doesn't exceed the limit update
        obj.points = itemsTotal;
        return itemsTotal;
      }
    },
    "limits": { // All limits are set here and then referred to by name
      "speedups-1": (itemsTotal, points) => {
          let total = 0;
          let items = data["phase-1"].items;
           for(let item in items){
            if (items[item].max == "speedups-1") {
              total = total + items[item].points;
            }
            if(item == (items.length - 1)){
              //console.log(((total-points)+ itemsTotal))
              return (((total - points)+ itemsTotal) > 100000000)? true : false;
            }
          }
      },
      "vehicle-might": (itemsTotal, points) => {
         return (itemsTotal > 100000000)? true : false; 
        },
      "none": () => { return false; },

    },


    // Phase 1
    "phase-1": {
      "phaseTotal": 0,
      "items": [
        {
          "name": "Construction: 1 Minute",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*250, this)},
          "points": 0,
          "max": "speedups-1",
        },
        {
          "name": "Construction: 5 Minute",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*(250*5), this)},
          "points": 0,
          "max": "speedups-1",
        },
        {
          "name": "Construction: 15 Minute",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*(250*15), this)},
          "points": 0,
          "max": "speedups-1",
        },
        {
          "name": "Construction: 30 Minute",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*(250*30), this)},
          "points": 0,
          "max": "speedups-1",
        },
        {
          "name": "Construction: 60 Minute",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*(250*60), this)},
          "points": 0,
          "max": "speedups-1",
        },
        {
          "name": "Construction: 4 Hour",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*(250*(4*60)), this)},
          "points": 0,
          "max": "speedups-1",
        },
        {
          "name": "Construction: 8 Hour",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*(250*(8*60)), this)},
          "points": 0,
          "max": "speedups-1",
        },
        {
          "name": "Construction: 12 Hour",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*(250*(12*60)), this)},
          "points": 0,
          "max": "speedups-1",
        },
        {
          "name": "Construction: 15 Hour",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*(250*(15*60)), this)},
          "points": 0,
          "max": "speedups-1",
        },
        {
          "name": "Construction: 1 Day",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*(250*(24*60)), this)},
          "points": 0,
          "max": "speedups-1",
        },
  
        {
          "name": "Research: 1 Minute",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*250, this)},
          "points": 0,
          "max": "speedups-1",
        },
        {
          "name": "Research: 5 Minute",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*(250*5), this)},
          "points": 0,
          "max": "speedups-1",
        },
        {
          "name": "Research: 15 Minute",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*(250*15), this)},
          "points": 0,
          "max": "speedups-1",
        },
        {
          "name": "Research: 30 Minute",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*(250*30), this)},
          "points": 0,
          "max": "speedups-1",
        },
        {
          "name": "Research: 60 Minute",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*(250*60), this)},
          "points": 0,
          "max": "speedups-1",
        },
        {
          "name": "Research: 4 Hour",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*(250*(4*60)), this)},
          "points": 0,
          "max": "speedups-1",
        },
        {
          "name": "Research: 8 Hour",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*(250*(8*60)), this)},
          "points": 0,
          "max": "speedups-1",
        },
        {
          "name": "Research: 12 Hour",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*(250*(12*60)), this)},
          "points": 0,
          "max": "speedups-1",
        },
        {
          "name": "Research: 15 Hour",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*(250*(15*60)), this)},
          "points": 0,
          "max": "speedups-1",
        },
        {
          "name": "Research: 1 Day",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*(250*(24*60)), this)},
          "points": 0,
          "max": "speedups-1",
        },
  
        {
          "name": "Training: 1 Minute",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*250, this)},
          "points": 0,
          "max": "speedups-1",
        },
        {
          "name": "Training: 5 Minute",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*(250*5), this)},
          "points": 0,
          "max": "speedups-1",
        },
        {
          "name": "Training: 15 Minute",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*(250*15), this)},
          "points": 0,
          "max": "speedups-1",
        },
        {
          "name": "Training: 30 Minute",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*(250*30), this)},
          "points": 0,
          "max": "speedups-1",
        },
        {
          "name": "Training: 60 Minute",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*(250*60), this)},
          "points": 0,
          "max": "speedups-1",
        },
        {
          "name": "Training: 4 Hour",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*(250*(4*60)), this)},
          "points": 0,
          "max": "speedups-1",
        },
        {
          "name": "Training: 8 Hour",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*(250*(8*60)), this)},
          "points": 0,
          "max": "speedups-1",
        },
        {
          "name": "Training: 12 Hour",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*(250*(12*60)), this)},
          "points": 0,
          "max": "speedups-1",
        },
        {
          "name": "Training: 15 Hour",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*(250*(15*60)), this)},
          "points": 0,
          "max": "speedups-1",
        },
        {
          "name": "Training: 1 Day",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*(250*(24*60)), this)},
          "points": 0,
          "max": "speedups-1",
        },
  
        {
          "name": "Universal: 1 Minute",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*250, this)},
          "points": 0,
          "max": "speedups-1",
        },
        {
          "name": "Universal: 5 Minute",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*(250*5), this)},
          "points": 0,
          "max": "speedups-1",
        },
        {
          "name": "Universal: 15 Minute",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*(250*15), this)},
          "points": 0,
          "max": "speedups-1",
        },
        {
          "name": "Universal: 30 Minute",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*(250*30), this)},
          "points": 0,
          "max": "speedups-1",
        },
        {
          "name": "Universal: 60 Minute",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*(250*60), this)},
          "points": 0,
          "max": "speedups-1",
        },
        {
          "name": "Universal: 4 Hour",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*(250*(4*60)), this)},
          "points": 0,
          "max": "speedups-1",
        },
        {
          "name": "Universal: 8 Hour",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*(250*(8*60)), this)},
          "points": 0,
          "max": "speedups-1",
        },
        {
          "name": "Universal: 12 Hour",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*(250*(12*60)), this)},
          "points": 0,
          "max": "speedups-1",
        },
        {
          "name": "Universal: 15 Hour",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*(250*(15*60)), this)},
          "points": 0,
          "max": "speedups-1",
        },
        {
          "name": "Universal: 1 Day",
          "rate": "250/min.*",
          "formula": function(q){return data.cal(q*(250*(24*60)), this)},
          "points": 0,
          "max": "speedups-1",
        },
        {
          "name": "Exquisite File",
          "rate": "10,800 each",
          "formula": function(q){return data.cal(q*10800, this)},
          "points": 0,
          "max": "none"
          },
        ], 
    },
    // Phase 2
    "phase-2": {
      "phaseTotal": 0,
      "items": [
        {
          "name": "Normal Map",
          "rate": "1000 Each",
          "formula": function(q){return data.cal(q*1000, this)},
          "points": 0,
          "max": "none"
        },
        {
          "name": "Advanced Map",
          "rate": "8000 Each",
          "formula": function(q){return data.cal(q*8000, this)}, 
          "points": 0,
          "max": "none"
        },
        {
          "name": "100 XP",
          "rate": "1/50xp",
          "formula": function(q){return data.cal((q*100)/50, this)},
          "points": 0,
          "max": "none"
        },
        {
          "name": "500 XP",
          "rate": "1/50xp",
          "formula": function(q){return data.cal((q*500)/50, this)},
          "points": 0,
          "max": "none"
        },
        {
          "name": "1,000 XP",
          "rate": "1/50xp",
          "formula": function(q){return data.cal((q*1000)/50, this)},
          "points": 0,
          "max": "none"
        },
        {
          "name": "5,000 XP",
          "rate": "1/50xp",
          "formula": function(q){return data.cal((q*5000)/50, this)},
          "points": 0,
          "max": "none"
        },
        {
          "name": "10,000 XP",
          "rate": "1/50xp",
          "formula": function(q){return data.cal((q*10000)/50, this)},
          "points": 0,
          "max": "none"
        },
        {
          "name": "20,000 XP",
          "rate": "1/50xp",
          "formula": function(q){return data.cal((q*20000)/50, this)},
          "points": 0,
          "max": "none"
        },
        {
          "name": "50,000 XP",
          "rate": "1/50xp",
          "formula": function(q){return data.cal((q*50000)/50, this)},
          "points": 0,
          "max": "none"
        },
        {
          "name": "Badges: Gold L",
          "rate": " 20,000 Each",
          "formula": function(q){return data.cal(q*20000, this)},
          "points": 0,
          "max": "none"
        },
        {
          "name": "Badges: Gold M",
          "rate": "8,000 Each",
          "formula": function(q){return data.cal(q*8000, this)},
          "points": 0,
          "max": "none"
        },
        {
          "name": "Badges: Gold S",
          "rate": "2,000 Each",
          "formula": function(q){return data.cal(q*2000, this)},
          "points": 0,
          "max": "none"
        },
        {
          "name": "Badges: Purple L",
          "rate": "3,000 Each",
          "formula": function(q){return data.cal(q*3000, this)},
          "points": 0,
          "max": "none"
        },
        {
          "name": "Badges: Purple M",
          "rate": "1,200 Each",
          "formula": function(q){return data.cal(q*1200, this)},
          "points": 0,
          "max": "none"
        },
        {
          "name": "Badges: Purple S",
          "rate": "300 Each",
          "formula": function(q){return data.cal(q*300, this)},
          "points": 0,
          "max": "none"
        },
        {
          "name": "Badges: Blue L",
          "rate": "500 Each",
          "formula": function(q){return data.cal(q*500, this)},
          "points": 0,
          "max": "none"
        },
        {
          "name": "Badges: Blue M",
          "rate": "200 Each",
          "formula": function(q){return data.cal(q*200, this)},
          "points": 0,
          "max": "none"
        },
        {
          "name": "Badges: Blue S",
          "rate": "40 Each",
          "formula": function(q){return data.cal(q*40, this)},
          "points": 0,
          "max": "none"
        },
        {
          "name": "Fragments: Gold",
          "rate": "10,000 Each",
          "formula": function(q){return data.cal(q*10000, this)},
          "points": 0,
          "max": "none"
        },
        {
          "name": "Fragments: Purple",
          "rate": "2,000 Each",
          "formula": function(q){return data.cal(q*2000, this)},
          "points": 0,
          "max": "none"
        },
        {
          "name": "Fragments: Blue",
          "rate": "600 Each",
          "formula": function(q){return data.cal(q*600, this)},
          "points": 0,
          "max": "none"
        },
        {
          "name": "Energy Cores",
          "rate": "15,000 Each",
          "formula": function(q){return data.cal(q*15000, this)},
          "points": 0,
          "max": "none"
        },
        {
          "name": "Exquisite Files",
          "rate": "10,800 Each",
          "formula": function(q){return data.cal(q*10800, this)},
          "points": 0,
          "max": "none"
        },
      ]
    },
    // Phase 3
    "phase-3": {
      "phaseTotal": 0,
      "items": [
        {
          "name": "Troops T1",
          "rate": "5 Each",
          "formula": function(q){return data.cal(q*5, this)},
          "points": 0,
          "max": "none"
        },
        {
          "name": "Troops T2",
          "rate": "10 Each",
          "formula": function(q){return data.cal(q*10, this)},
          "points": 0,
          "max": "none"
        },
        {
          "name": "Troops T3",
          "rate": "20 Each",
          "formula": function(q){return data.cal(q*20, this)},
          "points": 0,
          "max": "none"
        },
        {
          "name": "Troops T4",
          "rate": "40 Each",
          "formula": function(q){return data.cal(q*40, this)},
          "points": 0,
          "max": "none"
        },
        {
          "name": "Troops T5",
          "rate": "80 Each",
          "formula": function(q){return data.cal(q*80, this)},
          "points": 0,
          "max": "none"
        },
        {
          "name": "Troops T5",
          "rate": "150 Each",
          "formula": function(q){return data.cal(q*150, this)},
          "points": 0,
          "max": "none"
        },
        {
          "name": "Exquisite Files",
          "rate": "10,800 Each",
          "formula": function(q){return data.cal(q*10800, this)},
          "points": 0,
          "max": "none"
        },
      ]
    },
    // Phase 4
    "phase-4": {
      "phaseTotal": 0,
      "items": [
        {
          "name": "Vehicle Might",
          "rate": "1 per might (Max 100Mil)",
          "formula": function(q){return data.cal(q, this)},
          "points": 0,
          "max": "vehicle-might"
        },
        {
          "name": "Tickets",
          "rate": "12,700 Each",
          "formula": function(q){return data.cal(q*12700, this)},
          "points": 0,
          "max": "none",
        },
        {
          "name": "Arrows",
          "rate": "15,000 Each",
          "formula": function(q){return data.cal(q*15000, this)},
          "points": 0,
          "max": "none",
        },
      ]
    },
    // Phase 5
    "phase-5": {
      "phaseTotal": 0,
      "items": [
        {
          "name": "Arm. Tracking",
          "rate": "55,000 Each",
          "formula": function(q){return data.cal(q*55000, this)},
          "points": 0,
          "max": "none",
        },
        {
          "name": "Honing: Blue",
          "rate": "1,500 Each",
          "formula": function(q){return data.cal(q*1500, this)},
          "points": 0,
          "max": "none",
        },
        {
          "name": "Honing: Purple",
          "rate": "38,000 Each",
          "formula": function(q){return data.cal(q*38000, this)},
          "points": 0,
          "max": "none",
        },
        {
          "name": "Carbon",
          "rate": "2,000 Each",
          "formula": function(q){return data.cal(q*2000, this)},
          "points": 0,
          "max": "none",
        },
        {
          "name": "Fabric",
          "rate": "200 Each",
          "formula": function(q){return data.cal(q*200, this)},
          "points": 0,
          "max": "none",
        },
        {
          "name": "Polymer: Basic",
          "rate": "3,700 Each",
          "formula": function(q){return data.cal(q*3700, this)},
          "points": 0,
          "max": "none",
        },
        {
          "name": "Polymer: General",
          "rate": "11,250 Each",
          "formula": function(q){return data.cal(q*11250, this)},
          "points": 0,
          "max": "none",
        },
        {
          "name": "Polymer: Premium",
          "rate": "33,750 Each",
          "formula": function(q){return data.cal(q*33750, this)},
          "points": 0,
          "max": "none",
        },
        {
          "name": "Polymer: Elite",
          "rate": "101,250 Each",
          "formula": function(q){return data.cal(q*101250, this)},
          "points": 0,
          "max": "none",
        },
        {
          "name": "Polymer: Legendary",
          "rate": "303,750 Each",
          "formula": function(q){return data.cal(q*303750, this)},
          "points": 0,
          "max": "none",
        },
        {
          "name": "Polymer: Supreme",
          "rate": "911,250 Each",
          "formula": function(q){return data.cal(q*911250, this)},
          "points": 0,
          "max": "none",
        },
        {
          "name": "Parts: Basic",
          "rate": "750 Each",
          "formula": function(q){return data.cal(q*750, this)},
          "points": 0,
          "max": "none",
        },
        {
          "name": "Parts: General",
          "rate": "2,350 Each",
          "formula": function(q){return data.cal(q*2350, this)},
          "points": 0,
          "max": "none",
        },
        {
          "name": "Parts: Premium",
          "rate": "6,750 Each",
          "formula": function(q){return data.cal(q*6750, this)},
          "points": 0,
          "max": "none",
        },
        {
          "name": "Parts: Elite",
          "rate": "20,250 Each",
          "formula": function(q){return data.cal(q*20250, this)},
          "points": 0,
          "max": "none",
        },
        {
          "name": "Parts: Legendary",
          "rate": "60,750 Each",
          "formula": function(q){return data.cal(q*60750, this)},
          "points": 0,
          "max": "none",
        },
        {
          "name": "Parts: Supreme",
          "rate": "182,250 Each",
          "formula": function(q){return data.cal(q*182250, this)},
          "points": 0,
          "max": "none",
        },
        {
          "name": "Tickets",
          "rate": "12,700 Each",
          "formula": function(q){return data.cal(q*12700, this)},
          "points": 0,
          "max": "none",
        },
        {
          "name": "Arrows",
          "rate": "15,000 Each",
          "formula": function(q){return data.cal(q*15000, this)},
          "points": 0,
          "max": "none",
        },
        {
          "name": "Armory Cards",
          "rate": "12,000 Each",
          "formula": function(q){return data.cal(q*12000, this)},
          "points": 0,
          "max": "none",
        },





        // {
        //   "name": "test",
        //   "rate": " Each",
        //   "formula": function(q){return data.cal(q*, this)},
        //   "points": 0,
        //   "max": "none",
        // },


      ]
    },




  };