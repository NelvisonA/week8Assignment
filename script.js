
//creating a class named Game
class Game {
    constructor(game){
        this.game = game;
    }
}

//creating class named Menu which contains looping methods
class Menu {
    constructor(){
        this.titles = [];
    }

    //method with a switch case that checks which option user selected
    start(){
        let selection = this.showMainMenuOptions();
        while(selection != 0){
            switch(selection){
                case '1':
                    this.addGame();
                    break;
                
                case '2':
                    this.displayGames();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye!');
    }

    //method which shows the user a prompt with options to choose from
    showMainMenuOptions(){
        return prompt(`
        0) exit
        1) add game
        2) view list of games
        `);
    }

    //method which pushes an instance of class Game (titled by the user) into an empty array
    addGame(){
        let title = prompt(`Enter game title: `);
        this.titles.push(new Game(title));
    }

    //displays the titles array filled with each entered game by user
    displayGames(){
        let index = '';
        for(let i = 0; i < this.titles.length; i++){
            index += i + ') ' + this.titles[i].game + '\n';
        }
        alert(index);
    }
}

//declaring class Menu
let menu = new Menu();

//invoking instance of menu
menu.start();