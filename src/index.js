class Sorter {

    constructor() {
        this.arr=[];
        this.comparator = function(left, right) {
            return left - right;
    }

    add(element) {
        this.arr.push(element);
    }

    at(index) {
        return this.arr[index];
    }

    get length() {
      return this.arr.length;
    }

    toArray() {
        return this.arr;
    }

    sort(indices) {
        let newArr=[];
        indices.sort(function(left, right) {
            return left - right;});

        for(let i=0; i<indices.length; i++){
            newArr.push(this.arr[indices[i]]);
        }

        newArr.sort(this.comparator);

        for(let i=0; i<indices.length; i++){
            this.arr[indices[i]]=newArr[i];
        }

    }

    setComparator(compareFunction) {
       this.comparator=compareFunction;
    }
}

module.exports = Sorter;