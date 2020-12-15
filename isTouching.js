function isTouching(gobj1,gobj2){
    if (gobj1.x - gobj2.x < gobj2.width/2 + gobj1.width/2
      && gobj2.x - gobj1.x < gobj2.width/2 + gobj1.width/2
      && gobj1.y - gobj2.y < gobj2.height/2 + gobj1.height/2
      && gobj2.y - gobj1.y < gobj2.height/2 + gobj1.height/2) {
    return true;
  }
  else {
    return false;
  }
  }