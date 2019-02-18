//function to generate a monster object with name, health, attack, and defense values
//accepts player object as an argument for use in generating the monster's stats
//need to know player's current stats to build a monster that is around the same level as the player
//this way it shouldn't be too easy or too hard for the player to beat the monster
export default (player) => {
    //collection of descriptive words to randomly choose from
    const descriptors = ['Flying', 'Water', 'Fire', 'Evil', 'Angry', 'Terrifying', 'Putrid', 'Sickly', 'Roaring', 'Nocturnal', 'Grimy', 'Malevolent', 'Radioactive', 'Vicious', 'Rotten' ]
    //collection of types of monsters to randomly choose from
    const monsters = ['Bear', 'Demon', 'Skull', 'Beetle', 'Ogre', 'Robot', 'Allocamelus', 'Screech', 'Encantado', 'Selkie', 'Scorpion', 'Bat', 'Minotaur', 'Werewolf', 'Werehyena', 'Phantom', 'Zombie', 'Wyvern'];

    //random number generator for picking from descriptions and monsters
    //accepts the length of the array to choose from and provides a random index
    function randNum(num) {
        return Math.floor(Math.random() * num);
    }

    //set the name of the monster by randomly choosing a descriptor and monster type
    function setName() {
        return `${descriptors[randNum(descriptors.length)]} ${monsters[randNum(monsters.length)]}`;
    }

    //set attack value for the monster based on player's current stats
    function setAttack() {

    }

    //set attack value for the monster based on player's current stats
    function setDefense() {

    }

    return {
        name: setName(),
        health: 100,
        attack: setAttack(),
        defense: setDefense()
    }
}