class Plant {
    constructor(id, name, health, height, stage) {
        this.id = id;
        this.name = name;
        this.health = health;
        this.waterLevel = 0;
        this.height = height;
        this.stage = stage;
    }

    setWater(level) {
        this.waterLevel = level;
    }

}

class Farmer {
    constructor(id, name, plants, inventory, level) {
        this.id = id;
        this.name = name;
        this.plants = plants;
        this.inventory = inventory;
        this.level = level;
    }

    getId() { return this.id; }
    getName() { return this.name; }
    getPlants() { return this.plants; }
    getInventory() { return this.inventory; }

    setId(input) { return this.id = input }
    setName(input) { return this.name = input; }
    setPlants(input) { return this.plants = input; }
    setInventory(input) { return this.inventory = input; }

    waterPlant(plant) {
        if (this.level >= 1 && this.level < 4) {
            plant.setWater(2);
        }
        if (this.level >= 4) {
            plant.setWater(4);
        }
    }
}

class Tool {
    constructor(id, name, action) {
        this.id = id;
        this.name = name;
        this.action = action;
    }
    action(action) {
        action
    } 
}
//Create Plants - push n instances of plants into accesible array
let plants = [];
for (let i = 0; i < 10; i++) {
    const plant = new Plant(i, `plant${i}`, 100, 0, `v1`);
    plants.push(plant);
}


// Methods
const createFarmer = ()=> {
    const name = prompt("what is ur name?");
    const farmer = new Farmer(1, name, [plants[0]], [], 1);
    console.log("Farmer: ", farmer);
    return farmer;
}

const gameInit = () => {
    console.log("zero the hero before: ", plants[0]);
    const farmer = createFarmer();
    farmer.waterPlant(plants[0])
    console.log("zero the hero after: ", plants[0]);
}


// let game_active = true;

// while (game_active) {

// }