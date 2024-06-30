class GameObject {
  constructor(type, name, positionX, positionY, width, height, isInteractable) {
    this.type = type;
    this.name = name;
    this.positionX = positionX;
    this.positionY = positionY;
    this.width = width;
    this.height = height;
    this.isInteractable = isInteractable;
  }

  Instantiate() {}
}
