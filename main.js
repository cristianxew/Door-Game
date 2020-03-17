let botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
let closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';

let doorimage1 = document.getElementById('door1');
let doorimage2 = document.getElementById('door2');
let doorimage3 = document.getElementById('door3');
let startButton = document.getElementById('start');
let numClosedDoors = 3;
let currentlyPlaying = true;
let openDoor1;
let openDoor2;
let openDoor3;


door1.onclick = () => {
    if (currentlyPlaying && !isClicked(door1)) {
        doorimage1.src = openDoor1;
        playDoor(doorimage1);
    }
};

door2.onclick = () => {
    if (currentlyPlaying && !isClicked(door2)) {
        doorimage2.src = openDoor2;
        playDoor(doorimage2);
    }
};

door3.onclick = () => {
    if (currentlyPlaying && !isClicked(door3)) {
        doorimage3.src = openDoor3;
        playDoor(doorimage3);
    }
};

startButton.onclick = () => {
    if (!currentlyPlaying) {
        startRound();
    };
};



const startRound = () => {
    numClosedDoors = 3;
    doorimage1.src = closedDoorPath;
    doorimage2.src = closedDoorPath;
    doorimage3.src = closedDoorPath;
    startButton.innerHTML = 'Good luck!';
    currentlyPlaying = true;
    randomChoreDoorGenerator();
};

const gameOver = status => {
    if (status === 'win') {
        startButton.innerHTML = 'You win! Play again?';
    } else {
        startButton.innerHTML = 'Game over! Play again?';
    }
    currentlyPlaying = false;
};

let playDoor = door => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver('win');
    }
    else if (isBot(door) === true) {
        gameOver();
    }
};

const isBot = door => {
    if (door.src === botDoorPath) {
        return true;
    } else {
        return false;
    }
};

const isClicked = door => {
    if (door.src === closedDoorPath) {
        return false;
    } else {
        return true;
    }
};

let randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    }
    else if (choreDoor === 1) {
        openDoor2 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    }
    else if (choreDoor === 2) {
        openDoor3 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor1 = spaceDoorPath;
    }
};
startRound();



