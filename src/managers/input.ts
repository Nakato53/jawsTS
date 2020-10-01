import JAWS, {Vector2} from '../JAWS';
class Input{
    
    pressed(key:string, combine:boolean = false){
        return JAWS.jawsjs.pressed(key, combine);
    }

    getMousePosition():Vector2{
        return {
            x: JAWS.jawsjs.mouse_x,
            y: JAWS.jawsjs.mouse_y
        }
    }
}

export default new Input();