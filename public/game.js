var config = {
    type: Phaser.AUTO,
    width: 1440,
    height: 810,
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('field', 'assets/field.png');
    this.load.image('player', 'assets/player.png');

}

function create () 
{
    let background = this.add.image(720, 410, 'field');
    background.setScale(0.80);
    // (400, 300, 'player').setScale(.15).refreshBody();
    player1 = this.physics.add.sprite(900, 410, 'player').setScale(0.15);
    player2 = this.physics.add.sprite(540, 410, 'player').setScale(0.15);
    
}

function update ()
{
    // var timer = update.time.addEvent({
    //     delay: 500,                // ms
    //     callback: callback,
    //     //args: [],
    //     callbackScope: thisArg,
    //     repeat: 4
    // });

    cursors = this.input.keyboard.createCursorKeys();
    

    if (cursors.left.isDown)
    {
        player1.setVelocityX(-160);
    }
    else if (cursors.right.isDown)
    {
        player1.setVelocityX(160);
    }
    else
    {
        player1.setVelocityX(0);
    }
    
    if (cursors.up.isDown)
    {
        player1.setVelocityY(-160);
    }
    else if (cursors.down.isDown)
    {
        player1.setVelocityY(160);
    }
    else
    {
        player1.setVelocityY(0);
    }

    cursors = this.input.keyboard.addKeys('W,S,A,D, shift');

    if (cursors.shift.isDown && player1.x != 0)
    {
        player1.setVelocityX(player1.x * 2);
    }

    if (cursors.shift.isDown && player1.y != 0)
    {
        player1.setVelocityY(player1.y * 2);
    }

    

    // this.cursors2 = this.input.keyboard.addKeys(
    //     {up:Phaser.Input.Keyboard.KeyCodes.W,
    //     down:Phaser.Input.Keyboard.KeyCodes.S,
    //     left:Phaser.Input.Keyboard.KeyCodes.A,
    //     right:Phaser.Input.Keyboard.KeyCodes.D});
    
    

    if (cursors.A.isDown)
    {
        player2.setVelocityX(-160);
    }
    else if (cursors.D.isDown)
    {
        player2.setVelocityX(160);
    }
    else
    {
        player2.setVelocityX(0);
    }
    
    if (cursors.W.isDown)
    {
        player2.setVelocityY(-160);
    }
    else if (cursors.S.isDown)
    {
        player2.setVelocityY(160);
    }
    else
    {
        player2.setVelocityY(0);
    }
}