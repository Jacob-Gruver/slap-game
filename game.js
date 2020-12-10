let Zero = {
    name: "Zero",
    health: 100,
    hits: 0,
    attacks: {
        kick: 10,
        punch: 5, 
        slap: 1
    },
    items: []
};

let One = {
    name: "One",
    health: 88,
    hits: 0,
    attacks: {
        kick: 15,
        punch: 6, 
        slap: 2
    },
    items: []
};

let items ={
     fire: {name: "fire",modifier: 2,description: "Ow!"},
     water: {name: "h2O",modifier: 1,description: "Yesss!" },
     metal: {name: "Iron",modifier: 3,description: "Yikes!"}
};



function slap(){
    Zero.health -= (One.attacks.slap + addMods());
    Zero.hits++;
    update();

}

function punch(){
    Zero.health -= (One.attacks.punch + addMods());
    Zero.hits++;
    update();
}

function kick(){
    Zero.health -= (One.attacks.kick + addMods());
    Zero.hits++;
    update();
}

function update(){
    document.getElementById("health").innerText = Zero.health; 
    document.getElementById("name").innerText = Zero.name;
    document.getElementById("hits").innerText = Zero.hits;
}

function giveFire(){
    Zero.items.push(items.fire);
}

function giveWater(){
    Zero.items.push(items.water);
}

function giveMetal(){
    Zero.items.push(items.metal);
}

function addMods(){
    let totalMod = 0;
    for (let index = 0; index < Zero.items.length; index++) {
        
         totalMod += Zero.items[index].modifier;
        
    }
    return totalMod;
}

update();
