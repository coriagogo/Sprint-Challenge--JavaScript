// 1. Copy and paste your prototype in here and refactor into class syntax.

class Shape {
  constructor(attr) {
  this.length = attr.length;
  this.width = attr.width;
  this.height = attr.height;
}

  volume() {
    return (this.length * this.width * this.height);
  }

  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}


const cubOid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5,
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cubOid.volume()); // 100
console.log(cubOid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
  constructor(attr) {
    super(attr);
  }

  //the formula for the volume of a cube is the same as for a cuboid so for DRY principles I did not create another one.


  surfaceAreaCube() {
    return 6 * (this.length * this.width)
  }
}

const cube = new CubeMaker({
  length: 4,
  width: 4,
  height: 4,
});

console.log(cube.volume());
console.log(cube.surfaceAreaCube());