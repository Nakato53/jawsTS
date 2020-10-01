import Game from './game'
import GameStateBase from './states/GameStateBase';

declare global {
    interface Window {
        jaws:any;
    }
}
export type Vector2 = {
    x:number;
    y:number;
}
export enum Anchor{
    top_left= "top_left",
    top_center="top_center",
    top_right="top_right",
    center_left= "center_left",
    center="center",
    center_right="center_right",
    bottom_left= "bottom_left",
    bottom_center="bottom_center",
    bottom_right="bottom_right"
}

export type Sprite = {
    alpha:number;
    anchor:string,
    angle:number;
    color:string,
    flipped:boolean,
    scale_image:number,
    image:ImageBitmap,
    x:number,
    y:number,
    draw():void,
    setAnchor(anchor:string):void,
    resizeTo(width:number, height:number):void
}

class JAWS {

    public jawsjs:any|undefined = undefined;
    public gameloop:any|undefined = undefined;

    constructor(){
        
    }

    start(game:GameStateBase, assets:Array<string>, options:any= {}){
        if(this.jawsjs === undefined){
            if(window.jaws != undefined){
                this.jawsjs = window.jaws;
                setTimeout(()=> this.start(game,assets,options),200);
            }
        }else{
            assets.forEach(asset=> {
                this.jawsjs.assets.add(asset);
            });
            this.jawsjs.start(game, options);
        }
    }

    createSprite(image:string, anchor:Anchor = Anchor.center):Sprite{
        return this.jawsjs.Sprite({image, anchor});
    }

    





}
const _JAWS = new JAWS();

export default _JAWS as JAWS ;