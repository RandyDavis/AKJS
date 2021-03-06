// Create the custom object's constructor (constructor function)
function Player(pname, gender, race, age, strength, iq, hitpoints) {
  // Create the custom object's Properties
  this.pname = pname;
  this.gender = gender;
  this.race = race;
  this.age = age;
  this.strength = strength;
  this.iq = iq;
  this.hitpoints = hitpoints;
  // Create the custom object's Methods
  this.getDamage = function getDamage(stren) {
    var damage = stren + (Math.floor(Math.random() * 10) + 1);
    return damage;
  }
}

// Create the game players (instances of Player)
var player1 = new Player("Mysterio", "Male", "Elf", "27", 6, 190, 200);
var player2 = new Player("Brutus", "Male", "Barbarian", 36, 10, 65, 200);

// Player objects attacking by calling the getDamage() method we wrote in our constructor
// Player 1 attacking Player 2
var p1Attack = player1.getDamage(player1.strength);
player2.hitpoints -= p1Attack;  // Subtract the attack damage from hitpoints
document.write(player1.pname + " just dealt " + p1Attack + " damage to " +player2.pname + "<br />");
document.write(player2.pname + " has " + player1.hitpoints + " hit points left");
document.write("<br /><br />");
// Player 2 attacking Player 1
var p2Attack = player2.getDamage(player2.strength);
player1.hitpoints -= p2Attack;  // Subtract the attack damage from hitpoints
document.write(player2.pname +" just dealt " + p2Attack + " damage to " +player1.pname + "<br />");
document.write(player1.pname + " has " + player1.hitpoints + "hit points left");