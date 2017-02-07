window.onload = function() {
    var video = document.getElementById('video');
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var trackerCyan = new tracking.ColorTracker(['cyan']);
    tracking.track('#video', trackerCyan, {
        camera: true
    });
    trackerCyan.on('track', function(event) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        event.data.forEach(function(rect) {
            if (rect.color === 'custom') {
                rect.color = trackerCyan.customColor;
            }
            context.strokeStyle = rect.color;
            context.strokeRect(rect.x, rect.y, rect.width, rect.height);
            context.font = '11px Helvetica';
            context.fillStyle = "#fff";
            context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
            context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
            actualizePosCyan(rect);
        });
    });
};


function actualizePosCyan(rect){
    sineWaveCyan.frequency=600-rect.y;
    sineWaveCyan.volume=(rect.x/450);
    console.log(sineWaveCyan.frequency);
}

var sineWaveCyan = new Pizzicato.Sound({
    source: 'wave',
    options: {
        frequency: 440
    }
});
/*var ringModulator = new Pizzicato.Effects.RingModulator({
    speed: 30,
    distortion: 1,
    mix: 0.5
});

sineWave.addEffect(ringModulator);*/
sineWaveCyan.volume=0.1;
sineWaveCyan.play();

/*var drum = new Pizzicato.Sound('./sounds/drum.mp3', function() {
    // Sound loaded!
    drum.loop=true;
    drum.play();
});*/

function silence(){
    sineWaveCyan.volume=0;
}

function updateValues(){
    //update display values, whe
}
