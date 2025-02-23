
// Format:
// {
//   "name": "Construction: 1 Minute", << Name
//   "rate": "250/min.*", << Rate (display text)
//   "formula": function(q, id){return cal(
//            q*250,  << Formula. q is user input
//            this, id)},
//   "points": 0, << Points, should always be 0
//   "special": "speedups-1", << Name of the special function if any to be called (i.e any limits or other functions)
// },

const data = {
    "limits": { // All limits are set here and then referred to by name
      "speedups-1": (itemsTotal, points) => {
          let total = 0;
          let items = data["phase-1"].items;
           for(let item in items){
            if (items[item].max == "speedups-1") {
              total = total + items[item].points;
            }
            if(item == (items.length - 1)){
              return (((total - points)+ itemsTotal) > 100000000)? true : false;
            }
          }
      },
      "vehicle-might": (itemsTotal, points) => {
         return (itemsTotal > 100000000)? true : false; 
        },
      "multiple-input": () => { return false; },
      "none": () => { return false; },
    },

    // Phase 1
    "phase-1": {
      "phaseTotal": 0,
      "items": [
        {
          "name": "Construction: 1 Minute",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*250, this, id)},
          "points": 0,
          "special": "speedups-1",
        },
        {
          "name": "Construction: 5 Minute",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*(250*5), this, id)},
          "points": 0,
          "special": "speedups-1",
        },
        {
          "name": "Construction: 15 Minute",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*(250*15), this, id)},
          "points": 0,
          "special": "speedups-1",
        },
        {
          "name": "Construction: 30 Minute",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*(250*30), this, id)},
          "points": 0,
          "special": "speedups-1",
        },
        {
          "name": "Construction: 60 Minute",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*(250*60), this, id)},
          "points": 0,
          "special": "speedups-1",
        },
        {
          "name": "Construction: 4 Hour",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*(250*(4*60)), this, id)},
          "points": 0,
          "special": "speedups-1",
        },
        {
          "name": "Construction: 8 Hour",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*(250*(8*60)), this, id)},
          "points": 0,
          "special": "speedups-1",
        },
        {
          "name": "Construction: 12 Hour",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*(250*(12*60)), this, id)},
          "points": 0,
          "special": "speedups-1",
        },
        {
          "name": "Construction: 15 Hour",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*(250*(15*60)), this, id)},
          "points": 0,
          "special": "speedups-1",
        },
        {
          "name": "Construction: 1 Day",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*(250*(24*60)), this, id)},
          "points": 0,
          "special": "speedups-1",
        },
  
        {
          "name": "Research: 1 Minute",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*250, this, id)},
          "points": 0,
          "special": "speedups-1",
        },
        {
          "name": "Research: 5 Minute",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*(250*5), this, id)},
          "points": 0,
          "special": "speedups-1",
        },
        {
          "name": "Research: 15 Minute",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*(250*15), this, id)},
          "points": 0,
          "special": "speedups-1",
        },
        {
          "name": "Research: 30 Minute",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*(250*30), this, id)},
          "points": 0,
          "special": "speedups-1",
        },
        {
          "name": "Research: 60 Minute",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*(250*60), this, id)},
          "points": 0,
          "special": "speedups-1",
        },
        {
          "name": "Research: 4 Hour",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*(250*(4*60)), this, id)},
          "points": 0,
          "special": "speedups-1",
        },
        {
          "name": "Research: 8 Hour",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*(250*(8*60)), this, id)},
          "points": 0,
          "special": "speedups-1",
        },
        {
          "name": "Research: 12 Hour",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*(250*(12*60)), this, id)},
          "points": 0,
          "special": "speedups-1",
        },
        {
          "name": "Research: 15 Hour",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*(250*(15*60)), this, id)},
          "points": 0,
          "special": "speedups-1",
        },
        {
          "name": "Research: 1 Day",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*(250*(24*60)), this, id)},
          "points": 0,
          "special": "speedups-1",
        },
  
        {
          "name": "Training: 1 Minute",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*250, this, id)},
          "points": 0,
          "special": "speedups-1",
        },
        {
          "name": "Training: 5 Minute",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*(250*5), this, id)},
          "points": 0,
          "special": "speedups-1",
        },
        {
          "name": "Training: 15 Minute",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*(250*15), this, id)},
          "points": 0,
          "special": "speedups-1",
        },
        {
          "name": "Training: 30 Minute",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*(250*30), this, id)},
          "points": 0,
          "special": "speedups-1",
        },
        {
          "name": "Training: 60 Minute",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*(250*60), this, id)},
          "points": 0,
          "special": "speedups-1",
        },
        {
          "name": "Training: 4 Hour",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*(250*(4*60)), this, id)},
          "points": 0,
          "special": "speedups-1",
        },
        {
          "name": "Training: 8 Hour",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*(250*(8*60)), this, id)},
          "points": 0,
          "special": "speedups-1",
        },
        {
          "name": "Training: 12 Hour",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*(250*(12*60)), this, id)},
          "points": 0,
          "special": "speedups-1",
        },
        {
          "name": "Training: 15 Hour",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*(250*(15*60)), this, id)},
          "points": 0,
          "special": "speedups-1",
        },
        {
          "name": "Training: 1 Day",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*(250*(24*60)), this, id)},
          "points": 0,
          "special": "speedups-1",
        },
  
        {
          "name": "Universal: 1 Minute",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*250, this, id)},
          "points": 0,
          "special": "speedups-1",
        },
        {
          "name": "Universal: 5 Minute",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*(250*5), this, id)},
          "points": 0,
          "special": "speedups-1",
        },
        {
          "name": "Universal: 15 Minute",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*(250*15), this, id)},
          "points": 0,
          "special": "speedups-1",
        },
        {
          "name": "Universal: 30 Minute",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*(250*30), this, id)},
          "points": 0,
          "special": "speedups-1",
        },
        {
          "name": "Universal: 60 Minute",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*(250*60), this, id)},
          "points": 0,
          "special": "speedups-1",
        },
        {
          "name": "Universal: 4 Hour",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*(250*(4*60)), this, id)},
          "points": 0,
          "special": "speedups-1",
        },
        {
          "name": "Universal: 8 Hour",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*(250*(8*60)), this, id)},
          "points": 0,
          "special": "speedups-1",
        },
        {
          "name": "Universal: 12 Hour",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*(250*(12*60)), this, id)},
          "points": 0,
          "special": "speedups-1",
        },
        {
          "name": "Universal: 15 Hour",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*(250*(15*60)), this, id)},
          "points": 0,
          "special": "speedups-1",
        },
        {
          "name": "Universal: 1 Day",
          "rate": "250/min.*",
          "formula": function(q, id){return cal(q*(250*(24*60)), this, id)},
          "points": 0,
          "special": "speedups-1",
        },
        {
          "name": "Exquisite File",
          "rate": "10,800 each",
          "formula": function(q, id){return cal(q*10800, this, id)},
          "points": 0,
          "special": "none"
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
          "formula": function(q, id){return cal(q*1000, this, id)},
          "points": 0,
          "special": "none"
        },
        {
          "name": "Advanced Map",
          "rate": "8000 Each",
          "formula": function(q, id){return cal(q*8000, this, id)}, 
          "points": 0,
          "special": "none"
        },
        {
          "name": "100 XP",
          "rate": "1/50xp",
          "formula": function(q, id){return cal((q*100)/50, this, id)},
          "points": 0,
          "special": "none"
        },
        {
          "name": "500 XP",
          "rate": "1/50xp",
          "formula": function(q, id){return cal((q*500)/50, this, id)},
          "points": 0,
          "special": "none"
        },
        {
          "name": "1,000 XP",
          "rate": "1/50xp",
          "formula": function(q, id){return cal((q*1000)/50, this, id)},
          "points": 0,
          "special": "none"
        },
        {
          "name": "5,000 XP",
          "rate": "1/50xp",
          "formula": function(q, id){return cal((q*5000)/50, this, id)},
          "points": 0,
          "special": "none"
        },
        {
          "name": "10,000 XP",
          "rate": "1/50xp",
          "formula": function(q, id){return cal((q*10000)/50, this, id)},
          "points": 0,
          "special": "none"
        },
        {
          "name": "20,000 XP",
          "rate": "1/50xp",
          "formula": function(q, id){return cal((q*20000)/50, this, id)},
          "points": 0,
          "special": "none"
        },
        {
          "name": "50,000 XP",
          "rate": "1/50xp",
          "formula": function(q, id){return cal((q*50000)/50, this, id)},
          "points": 0,
          "special": "none"
        },
        {
          "name": "Badges: Gold L",
          "rate": " 20,000 Each",
          "formula": function(q, id){return cal(q*20000, this, id)},
          "points": 0,
          "special": "none"
        },
        {
          "name": "Badges: Gold M",
          "rate": "8,000 Each",
          "formula": function(q, id){return cal(q*8000, this, id)},
          "points": 0,
          "special": "none"
        },
        {
          "name": "Badges: Gold S",
          "rate": "2,000 Each",
          "formula": function(q, id){return cal(q*2000, this, id)},
          "points": 0,
          "special": "none"
        },
        {
          "name": "Badges: Purple L",
          "rate": "3,000 Each",
          "formula": function(q, id){return cal(q*3000, this, id)},
          "points": 0,
          "special": "none"
        },
        {
          "name": "Badges: Purple M",
          "rate": "1,200 Each",
          "formula": function(q, id){return cal(q*1200, this, id)},
          "points": 0,
          "special": "none"
        },
        {
          "name": "Badges: Purple S",
          "rate": "300 Each",
          "formula": function(q, id){return cal(q*300, this, id)},
          "points": 0,
          "special": "none"
        },
        {
          "name": "Badges: Blue L",
          "rate": "500 Each",
          "formula": function(q, id){return cal(q*500, this, id)},
          "points": 0,
          "special": "none"
        },
        {
          "name": "Badges: Blue M",
          "rate": "200 Each",
          "formula": function(q, id){return cal(q*200, this, id)},
          "points": 0,
          "special": "none"
        },
        {
          "name": "Badges: Blue S",
          "rate": "40 Each",
          "formula": function(q, id){return cal(q*40, this, id)},
          "points": 0,
          "special": "none"
        },
        {
          "name": "Fragments: Gold",
          "rate": "10,000 Each**",
          "formula": function(q, id){return cal(q*10000, this, id)},
          "points": 0,
          "special": "multiple-input"
        },
        {
          "name": "Fragments: Purple",
          "rate": "2,000 Each**",
          "formula": function(q, id){return cal(q*2000, this, id)},
          "points": 0,
          "special": "multiple-input"
        },
        {
          "name": "Fragments: Blue**",
          "rate": "600 Each",
          "formula": function(q, id){return cal(q*600, this, id)},
          "points": 0,
          "special": "multiple-input"
        },
        {
          "name": "Energy Cores",
          "rate": "15,000 Each**",
          "formula": function(q, id){return cal(q*15000, this, id)},
          "points": 0,
          "special": "multiple-input"
        },
        {
          "name": "Exquisite Files",
          "rate": "10,800 Each",
          "formula": function(q, id){return cal(q*10800, this, id)},
          "points": 0,
          "special": "none"
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
          "formula": function(q, id){return cal(q*5, this, id)},
          "points": 0,
          "special": "none"
        },
        {
          "name": "Troops T2",
          "rate": "10 Each",
          "formula": function(q, id){return cal(q*10, this, id)},
          "points": 0,
          "special": "none"
        },
        {
          "name": "Troops T3",
          "rate": "20 Each",
          "formula": function(q, id){return cal(q*20, this, id)},
          "points": 0,
          "special": "none"
        },
        {
          "name": "Troops T4",
          "rate": "40 Each",
          "formula": function(q, id){return cal(q*40, this, id)},
          "points": 0,
          "special": "none"
        },
        {
          "name": "Troops T5",
          "rate": "80 Each",
          "formula": function(q, id){return cal(q*80, this, id)},
          "points": 0,
          "special": "none"
        },
        {
          "name": "Troops T5",
          "rate": "150 Each",
          "formula": function(q, id){return cal(q*150, this, id)},
          "points": 0,
          "special": "none"
        },
        {
          "name": "Exquisite Files",
          "rate": "10,800 Each",
          "formula": function(q, id){return cal(q*10800, this, id)},
          "points": 0,
          "special": "none"
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
          "formula": function(q, id){return cal(q, this, id)},
          "points": 0,
          "special": "vehicle-might"
        },
        {
          "name": "Tickets",
          "rate": "12,700 Each",
          "formula": function(q, id){return cal(q*12700, this, id)},
          "points": 0,
          "special": "none",
        },
        {
          "name": "Arrows",
          "rate": "15,000 Each",
          "formula": function(q, id){return cal(q*15000, this, id)},
          "points": 0,
          "special": "none",
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
          "formula": function(q, id){return cal(q*55000, this, id)},
          "points": 0,
          "special": "none",
        },
        {
          "name": "Honing: Blue",
          "rate": "1,500 Each",
          "formula": function(q, id){return cal(q*1500, this, id)},
          "points": 0,
          "special": "none",
        },
        {
          "name": "Honing: Purple",
          "rate": "38,000 Each",
          "formula": function(q, id){return cal(q*38000, this, id)},
          "points": 0,
          "special": "none",
        },
        {
          "name": "Carbon",
          "rate": "2,000 Each",
          "formula": function(q, id){return cal(q*2000, this, id)},
          "points": 0,
          "special": "none",
        },
        {
          "name": "Fabric",
          "rate": "200 Each",
          "formula": function(q, id){return cal(q*200, this, id)},
          "points": 0,
          "special": "none",
        },
        {
          "name": "Polymer: Basic",
          "rate": "3,700 Each",
          "formula": function(q, id){return cal(q*3700, this, id)},
          "points": 0,
          "special": "none",
        },
        {
          "name": "Polymer: General",
          "rate": "11,250 Each",
          "formula": function(q, id){return cal(q*11250, this, id)},
          "points": 0,
          "special": "none",
        },
        {
          "name": "Polymer: Premium",
          "rate": "33,750 Each",
          "formula": function(q, id){return cal(q*33750, this, id)},
          "points": 0,
          "special": "none",
        },
        {
          "name": "Polymer: Elite",
          "rate": "101,250 Each",
          "formula": function(q, id){return cal(q*101250, this, id)},
          "points": 0,
          "special": "none",
        },
        {
          "name": "Polymer: Legendary",
          "rate": "303,750 Each",
          "formula": function(q, id){return cal(q*303750, this, id)},
          "points": 0,
          "special": "none",
        },
        {
          "name": "Polymer: Supreme",
          "rate": "911,250 Each",
          "formula": function(q, id){return cal(q*911250, this, id)},
          "points": 0,
          "special": "none",
        },
        {
          "name": "Parts: Basic",
          "rate": "750 Each",
          "formula": function(q, id){return cal(q*750, this, id)},
          "points": 0,
          "special": "none",
        },
        {
          "name": "Parts: General",
          "rate": "2,350 Each",
          "formula": function(q, id){return cal(q*2350, this, id)},
          "points": 0,
          "special": "none",
        },
        {
          "name": "Parts: Premium",
          "rate": "6,750 Each",
          "formula": function(q, id){return cal(q*6750, this, id)},
          "points": 0,
          "special": "none",
        },
        {
          "name": "Parts: Elite",
          "rate": "20,250 Each",
          "formula": function(q, id){return cal(q*20250, this, id)},
          "points": 0,
          "special": "none",
        },
        {
          "name": "Parts: Legendary",
          "rate": "60,750 Each",
          "formula": function(q, id){return cal(q*60750, this, id)},
          "points": 0,
          "special": "none",
        },
        {
          "name": "Parts: Supreme",
          "rate": "182,250 Each",
          "formula": function(q, id){return cal(q*182250, this, id)},
          "points": 0,
          "special": "none",
        },
        {
          "name": "Tickets",
          "rate": "12,700 Each",
          "formula": function(q, id){return cal(q*12700, this, id)},
          "points": 0,
          "special": "none",
        },
        {
          "name": "Arrows",
          "rate": "15,000 Each",
          "formula": function(q, id){return cal(q*15000, this, id)},
          "points": 0,
          "special": "none",
        },
        {
          "name": "Armory Cards",
          "rate": "12,000 Each",
          "formula": function(q, id){return cal(q*12000, this, id)},
          "points": 0,
          "special": "none",
        },
      ]
    },

  };