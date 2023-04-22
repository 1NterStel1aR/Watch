function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(220);
  //chn_ellipse(mouseX,mouseY,100,50,frameCount*5)
  let h=hour()
  let m=minute()
  let s=second()
  fill(0,0,0);
  chn_rect(width/2,height/2,90,9,270+h*30)
  chn_rect(width/2,height/2,120,7,270+m*6)
  fill(255,0,0);
  stroke(255,255,255);
  chn_rect(height/2,width/2,150,5,270+s*6)
  fill(0,0,0);
  stroke(255,255,255);
  ellipse(width/2,height/2,20,20)

}
function chn_ellipse(x,y,w,h,d){
  push();
  translate(x,y);
  rotate(radians(d));
  ellipse(0,0,w,h);
  pop();
}
function chn_rect(x,y,w,h,d){
  push();
  translate(x,y);
  rotate(radians(d));
  rect(0,-h/2,w,h);
  pop();
}