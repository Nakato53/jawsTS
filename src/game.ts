import GameState from './states/GameStateBase';
import JAWS, {Sprite, Anchor} from './JAWS';
import Input from './managers/input';

class Game extends GameState{


    sprite:Sprite = null;

	constructor() {
        super();
    } 

    setup(): void {
     this.sprite = JAWS.createSprite("assets/images/1004434.jpg", Anchor.center);
     this.sprite.resizeTo(150,50);
     
    }
    update(): void {
        console.log(Input.getMousePosition());
        this.sprite.x = Input.getMousePosition().x;
        this.sprite.y = Input.getMousePosition().y;
        if(Input.pressed("space")){
            this.sprite.angle += 1;
        }   
    }
    draw(): void {
        JAWS.jawsjs.context.clearRect(0,0,window.jaws.width, window.jaws.height);
        
        this.sprite.draw();
    }

}
export default Game;