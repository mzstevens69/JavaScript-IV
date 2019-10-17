/* 
prototype-refactor - Take existing code and make it modern.
You're going to work with your prototypes assignment you built out yesterday.
Challenge: Convert all of your constructors into ES6 Classes using the class and extends keywords. You should be able to run your same logs and they should build out the proper expected behaviors.
////////////////////////////////////////////////////////////////////////////////
Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/////////////////////////////////////////////////////////////////////////////////
/*=== GameObject ===
 * createdAt
 * name
 * dimensions (These represent the character's size in the video game)
 * destroy() // prototype method that returns: `${this.name} was removed from the game.`
 */

class GameObject {
    constructor(attrs) {
        this.createdAt = attrs.createdAt,
            //   this.name = attrs.name,
            this.dimensions = attrs.dimensions
    } //closes constructor
    destroy() {
        return `${this.name} was removed from the game`;
    }; //closes destroy
} //closes gameobj
//////////////////////////////////////////////////////
///////functions//////////////////////////////////////

/*
=== CharacterStats ===
* healthPoints
* takeDamage() // prototype method -> returns the string '<object name> took damage.'
* should inherit destroy() from GameObject's prototype
*/
class CharacterStats extends GameObject {
    constructor(charAttrs) {
        super(charAttrs);
        this.healPts = charAttrs.healPts,
        this.name = charAttrs.name
    } //closes Constructor
    takeDamage() {
        return `${this.name} took damage.`;
    }; //closes Damage
} //closes class characterrstats

/*
=== Humanoid (Having an appearance or character resembling that of a human.) ===
* team
* weapons
* language
* greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
* should inherit destroy() from GameObject through CharacterStats
* should inherit takeDamage() from CharacterStats
*/
class Humanoid extends CharacterStats {
    constructor(humanAttrs) {
        super(humanAttrs);
        this.team = humanAttrs.team,
            this.weapons = humanAttrs.weapons,
            this.language = humanAttrs.language        
    } //closing constructor
    greet() {
        return `${this.name} offers a greeting in ${this.language}.`;
    }
}

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test your work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
        'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
        'Giant Sword',
        'Shield',
    ],
    language: 'Common Tongue',
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
});
///////////start Villian Contructor///////////////////////////////////
const vile = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 4,
        width: 2,
        height: 6,
    },
    healthPoints: 25,
    name: 'The Donald',
    team: 'Hells Angels',
    weapons: [
        'Mjolinar', 'Insanity', 'Bag-O-Plenty', 'Red Light-Saber'
    ],
    language: 'Evileen',
    intelligence: 120,
    charisma: "Evil Genius",
    opponentsHealth: 75
});
///////My Hero//////////////////////////////
const blade = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 3,
    },
    healthPoints: 25,
    name: 'Blade',
    team: 'Rocket',
    weapons: [
        'Magic', 'Grit and Determination', 'A Damsel', 'Light-Saber'
    ],
    language: 'multi-lingual',
    intelligence: 'smart-enough',
    charisma: "Like Ali, I'm a pretty man",
    opponentsHealth: 25
});
////////Implement testing//////////////////////////////////////////////
console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.