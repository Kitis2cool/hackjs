function closeit(){ 
prodigydiv.remove()
} 
setTimeout("closeit", 3000);
function getallCurrencies() {
PIXI.game.prodigy.player.backpack.data.currency=[]
x = PIXI.game.state.states.Boot._gameData.currency
for (i in x) {
    PIXI.game.prodigy.player.backpack.data.currency[i] = {"ID": x[i].ID, "N": 9999999999}
}
}
function getallBuddies() {
PIXI.game.prodigy.player.backpack.data.follow=[]
x = PIXI.game.state.states.Boot._gameData.follow
for (i in x) {
    PIXI.game.prodigy.player.backpack.data.follow[i] = {"ID": x[i].ID, "N": 1}
}
}
function getallItems() {
PIXI.game.prodigy.player.backpack.data.item=[]
x = PIXI.game.state.states.Boot._gameData.item
for (i in x) {
    PIXI.game.prodigy.player.backpack.data.item[i] = {"ID": x[i].ID, "N": 9999999999}
}
}
function getallRelics() {
PIXI.game.prodigy.player.backpack.data.spellRelic=[]
x = PIXI.game.state.states.Boot._gameData.spellRelic
for (i in x) {
    PIXI.game.prodigy.player.backpack.data.spellRelic[i] = {"ID": x[i].ID, "N": 99999999999999}
}
}
function getallHats() {
PIXI.game.prodigy.player.backpack.data.hat=[]
x = PIXI.game.state.states.Boot._gameData.hat
for (i in x) {
    PIXI.game.prodigy.player.backpack.data.hat[i] = {"ID": x[i].ID, "N": 9999999999999999}
}
}
function getallOutfits() {
PIXI.game.prodigy.player.backpack.data.outfit=[]
x = PIXI.game.state.states.Boot._gameData.outfit
for (i in x) {
    PIXI.game.prodigy.player.backpack.data.outfit[i] = {"ID": x[i].ID, "N": 99999999999999}
}
}
function getallBoots() {
PIXI.game.prodigy.player.backpack.data.boots=[]
x = PIXI.game.state.states.Boot._gameData.boots
for (i in x) {
    PIXI.game.prodigy.player.backpack.data.boots[i] = {"ID": x[i].ID, "N": 99999999999999}
}
}
function getallWeapons() {
PIXI.game.prodigy.player.backpack.data.weapon=[]
x = PIXI.game.state.states.Boot._gameData.weapon
for (i in x) {
    PIXI.game.prodigy.player.backpack.data.weapon[i] = {"ID": x[i].ID, "N": 1}
}
}
function getallGems() {
PIXI.game.prodigy.player.backpack.data.key=[]
x = PIXI.game.state.states.Boot._gameData.key
for (i in x) {
    PIXI.game.prodigy.player.backpack.data.key[i] = {"ID": x[i].ID, "N": 1}
}
}
function FreeMembership(){
PIXI.game.prodigy.player.tt=true
}  
function levelup(){
PIXI.game.prodigy.player.data.level=100
}
function levelUpPets() {
    for (let PetLoopTest = 0; PetLoopTest < PIXI.game.prodigy.player.kennel.data.length; PetLoopTest++) { 
     PIXI.game.prodigy.player.kennel.data[PetLoopTest].level=100
    };
}
var prodigydiv = document.createElement("prodigydiv");
prodigydiv.style.width = "100px";
prodigydiv.style.height = "100px";
prodigydiv.style.background = "black";
prodigydiv.style.color = "purple";
prodigydiv.innerHTML = '<button type="button" onclick="{prodigydiv.remove();}">Close</button> <button type="button" onclick="{FreeMembership();}">Free Membership</button> <button type="button" onclick="{PIXI.game.prodigy.debugMisc.smallLoan(10000000000000);}">1,000,000,000,0000 Coins</button> <button type="button" onclick="{PIXI.game.prodigy.debugMisc.getAllPets();}">Get All Pets</button> <button type="button" onclick="{PIXI.game.prodigy.player.backpack.data.item.push({"N":999999,"ID":130});}">Infinite Wheel Spins</button>  <button type="button" onclick="{FreeAtSchool()}">Unlock Zones at School</button> <button type="button" onclick="{levelup()}">Level Up</button> <button type="button" onclick="{levelUpPets()}">Level Up Pets</button> <button type="button" onclick="{PIXI.game.prodigy.player.appearance._name.nickname=7}">W12-4RD Nickname</button> <button type="button" onclick="{getallBuddies()}">Get All Buddies</button> <button type="button" onclick="{getallItems()}">Get All Items</button> <button type="button" onclick="{getallRelics()}">Get All Relics</button> <button type="button" onclick="{getallHats()}">Get All Hats</button> <button type="button" onclick="{getallOutfits()}">Get All Outfits</button> <button type="button" onclick="{getallBoots()}">Get All Boots</button> <button type="button" onclick="{getallWeapons()}">Get All Weapons</button> <button type="button" onclick="{getallGems()}">Get All Gems</button><p>Custom Prodigy Mod Menu made by R1DD13 #8209</p>';

document.body.insertBefore(prodigydiv, document.body.firstChild);
@riley388
riley388 commented on Mar 20, 2020
ibk

@EpicCoder999
EpicCoder999 commented on Mar 22, 2020
add all furnitrue and give me the credit

PIXI.game.prodigy.player.house.data.items = []
x = PIXI.game.state.states.Boot._gameData.dorm
for (i in x) {
PIXI.game.prodigy.player.house.data.items[x[i]["ID"]] = {A: [], N: 999}
