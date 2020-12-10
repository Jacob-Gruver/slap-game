const maxItems = 4;

let Zero = {
    name: "Zero",
    maxHealth: 100,
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
        kickMin: 12,
        kickMax: 15,
        punchMin: 2,
        punchMax: 4,
        slapMin: 1, 
        slapMax: 3
    },
    items: []
};

let items ={
     fire: {name: "fire",modifier: 2,description: "Ow!"},
     water: {name: "h2O",modifier: 1,description: "Yesss!" },
     metal: {name: "Iron",modifier: 3,description: "Yikes!"}
};

function randomNumber(min, max){
    const r = Math.random()*(max-min) + min
    return Math.floor(r)
}



function slap(){
    Zero.health -= ( randomNumber(One.attacks.slapMin, One.attacks.slapMax) + addMods());
    Zero.hits++;
    if(Zero.health <= 0){
        defeated();

    }
    update();

}

function punch(){
    Zero.health -= (randomNumber(One.attacks.punchMin, One.attacks.punchMax) + addMods());
    Zero.hits++;
    if(Zero.health <= 0){
        defeated();

    }
    update();
}

function kick(){
    Zero.health -= (randomNumber(One.attacks.kickMin, One.attacks.kickMax) + addMods());
    Zero.hits++;
    if(Zero.health <= 0){
        defeated();

    }
    update();
}

function update(){
    document.getElementById("health").innerText = Zero.health; 
    document.getElementById("name").innerText = Zero.name;
    document.getElementById("hits").innerText = Zero.hits;

    let percentHealth = (Zero.health / Zero.maxHealth) * 100;

    document.getElementById("health-percent").style.width = percentHealth + "%";
}

function giveFire(){
    if(One.items.length < maxItems){
        One.items.push(items.fire);
    } 
    if (One.items.length == maxItems) {
        togglePowerUps(true);
    }
}

function giveWater(){
    if(One.items.length < maxItems){
        One.items.push(items.water);
    } 
    if (One.items.length == maxItems) {
        togglePowerUps(true);
    }
}

function giveMetal(){
    if(One.items.length < maxItems){
        One.items.push(items.metal);
    } 
    if (One.items.length == maxItems) {
        togglePowerUps(true);
    }
}

function addMods(){
    let totalMod = 0;
    for (let index = 0; index < One.items.length; index++) {
        
         totalMod += One.items[index].modifier;
        
    }
    return totalMod;
}

function togglePowerUps(turnOff){
    if(turnOff){
        document.getElementById("fire").disabled = true;
        document.getElementById("water").disabled = true;
        document.getElementById("metal").disabled = true;
    }else{
        document.getElementById("fire").disabled = false;
        document.getElementById("water").disabled = false;
        document.getElementById("metal").disabled = false;

    }


}

function togglePowerIcons() {
    if(){
        document.getElementById("fire-icon").disabled = true;
        document.getElementById("water-icon").disabled = true;
        document.getElementById("metal-icon").disabled = true;
    }else{
        document.getElementById("fire-icon").disabled = false;
        document.getElementById("water-icon").disabled = false;
        document.getElementById("metal-icon").disabled = false;

    }


    
}

function defeated() {
    Zero.health = 0;

    document.getElementById("slap").disabled = true;
    document.getElementById("punch").disabled = true;
    document.getElementById("kick").disabled = true;
    
    let theEnd = document.getElementById("message")
    theEnd.innerText = "GAME OVER"
    setTimeout(() => { 
        resetGame();
        theEnd.innerText = "";

        document.getElementById("slap").disabled = false;
        document.getElementById("punch").disabled = false;
        document.getElementById("kick").disabled = false;
    }, 5000);
}

function resetGame(){
    if(One.items.length == maxItems){
        togglePowerUps(false);
    }
    Zero.health = 100;
    Zero.hits = 0;
    One.items = [];
    update();
}
update();
