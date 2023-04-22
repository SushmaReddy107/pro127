song1 ="";
song2 ="";

function setup(){
    canvas =  createCanvas(600, 530);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();
}

function preload(){
    song1 = loadSound("https://docs.google.com/uc?export=download&id=1WbNgvstVA7OaiiIcr2m3m_WnFwCqg9fM");
    song2 = loadSound("https://docs.google.com/uc?export=download&id=1cmTyFC4omKDRPHoVAGoJ7oPeQ3l1TpO5");
}

function draw(){
    image(video,0,0,600,530);
}