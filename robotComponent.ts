function solve(clawPos: number, boxes: number[], boxInClaw: boolean): string {
    // Write your code here
    // To debug: console.error('Debug messages...');
    const RIGHT = "RIGHT";
    const LEFT ="LEFT";
    const PLACE ="PLACE";
    const PICK = "PICK";

//OBJECTIFS
    let targetBoxes=boxes;
    let totalBoxes=0;
    boxes.forEach(nbCol=>totalBoxes=totalBoxes+nbCol);

    // tableau des objectifs
    let nbTargetByCol= Math.trunc(totalBoxes/boxes.length);
    let nbToDistribute=totalBoxes%boxes.length;
    for(let i=0;i<boxes.length;i++){
        if(i<nbToDistribute){
            targetBoxes[i]= nbTargetByCol+1;
        }else{
            targetBoxes[i]= nbTargetByCol;
        }
    }

    //les objectifs ont ils été atteint?
    let isTargetreached= targetBoxes==boxes;
    if(isTargetreached){
        return ""
    }
    let isLastCol = clawPos == boxes.length-1;

    //statut actuel
    let isTargedBoxesReachedInCol = boxes[clawPos]== targetBoxes[clawPos];
    let isLessBoxesthantarget = boxes[clawPos]< targetBoxes[clawPos];
    let isMoreBoxesthantarget = boxes[clawPos]> targetBoxes[clawPos];

    let isBoxesneededToTheRight:boolean = false
    for( let i=clawPos+1; i<boxes.length;i++){
        if(boxes[i]< targetBoxes[i]){
            isBoxesneededToTheRight = true;
        }
    }

    let isTooBoxesToTheRight:boolean = false
    for( let i=clawPos+1; i<boxes.length;i++){
        if(boxes[i]> targetBoxes[i]){
            isTooBoxesToTheRight = true;
        }
    }


    //obj on atteint => que dois faire le bras?
    if(boxInClaw){
        if(isLessBoxesthantarget){
            return PLACE;
        }

        if(!isLastCol && isBoxesneededToTheRight){
            return RIGHT;
        }

        return LEFT.
    }else{
        if(isMoreBoxesthantarget){
            return PICK;
        }
        if(!isLastCol && isTooBoxesToTheRight){
            return RIGHT;
        }
        return LEFT;

    }



    return '';
}

function targetBoxes(boxes: number[],clawPos: number): []{
    let targetBoxes;
    let totalBoxes=0;
    boxes.forEach(nbCol=>totalBoxes=totalBoxes+nbCol);
    console.error(totalBoxes);

    let nbnbTargetByCol= Math.floor(totalBoxes/boxes.length);
    let nbToDistribute=totalBoxes%boxes.length;

    for(let i=0;i<boxes.length;i++){
        if(i <nbToDistribute){
            targetBoxes[i]= nbnbTargetByCol+1;
            console.error(i+"=>"+targetBoxes[i]);
        }else{
            targetBoxes[i]= nbnbTargetByCol;
            console.error(i+"=>"+targetBoxes[i]);
        }

    }
    return targetBoxes;
}

/* Ignore and do not change the code below */

// game loop
while (true) {
    const clawPos: number = parseInt(readline());
    const boxInClaw: boolean = readline() !== '0';
    const stacks: number = parseInt(readline());
    const boxes: number[] = readline().split(' ').map(j => parseInt(j)).slice(0, stacks);
    const oldWrite = process.stdout.write;
    process.stdout.write = chunk => { console.error(chunk); return true }
    const action: string = solve(clawPos, boxes, boxInClaw);
    process.stdout.write = oldWrite;
    console.log(action);
}
/* Ignore and do not change the code above */
