class DynamicArray {

  constructor(defaultSize = 4) {

    this.defaultSize = defaultSize;
    this.size = 0;
    this.capacity = defaultSize;
    this.array = new Array(this.capacity);
  }

  read(index) {

    let valueAtIndex = this.array[index];
    return valueAtIndex;
  }

  push(val) {

    let isFull = this.size === this.capacity;
    if (isFull) {
      this.resize();
    }

    this.array[this.size] = val;
    this.size += 1; 
  }


  pop() {

    let lastItem = this.array[this.size - 1];
    this.array[this.size - 1] = undefined;
    this.size -= 1;
    return lastItem;
  }

  shift() {

    let firstItem = this.array[0];

    for (let i = 0; i < this.size - 1; i++) {
      this.array[i] = this.array[i + 1];
    }

    this.array[this.size - 1] = undefined;
    this.size -= 1;

    return firstItem;
  }

  unshift(val) {

    let isFull = this.size === this.capacity;
    if (isFull) {
      this.resize();
    }

    for (let i = this.size; i > 0; i--) {
      this.array[i] = this.array[i - 1];
    }

    this.array[0] = val;
    this.size += 1;
  }

  indexOf(val) {

    let foundIndex = -1;

    for (let i = 0; i < this.size; i++) {
      if (this.array[i] === val) {
        foundIndex = i;
        break;
      }
    }

    return foundIndex;
  }

  resize() {

    let newCapacity = this.capacity * 2;
    let newArray = new Array(newCapacity);

    for (let i = 0; i < this.size; i++) {
      newArray[i] = this.array[i];
    }

    this.array = newArray;
    this.capacity = newCapacity;
  }

}


module.exports = DynamicArray;