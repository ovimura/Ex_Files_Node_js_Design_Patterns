var Shopper = require('./Shopper');
var { 
    InventoryItem,
    GoldenInventoryItem,
    DiamondInventoryItem
 } = require('./InventoryItem');

var alex = new Shopper('Alex', 100);

var walkman = new InventoryItem("Walkman", 29.99);
var necklace = new InventoryItem("Necklace", 9.99);

var gold_neclace = new GoldenInventoryItem(necklace);
var diamond_gold_neclace = new DiamondInventoryItem(gold_neclace);

var diamond_walkman = new DiamondInventoryItem(walkman);


alex.purchase(necklace);
alex.purchase(walkman);

alex.printStatus();
