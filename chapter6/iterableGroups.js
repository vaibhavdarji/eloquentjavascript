/**
 * Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during iteration.
 */

class Group {
    constructor () {
        this.group = [];
    }
    // add if given item not in the array (group)
    add (item) {
        if (!this.group.includes(item)) {
            this.group.push(item);
        }
    }
    //delete specific item from group(array)
    delete (item) {
        // find index of item first and then splice the array
        let index = this.group.indexOf(item);
        if (index >= 0) {
            this.group = [
                ...this.group.slice(0, this.group.indexOf(item)) , 
                ...this.group.slice(this.group.indexOf(item) + 1)
            ]; // or use splice
            // this.group.splice(item)
        }
    }

    has (item) {
        return this.group.includes(item);
    }

    static from (collection) {
        let group = new Group;
        for (let value of collection) {
            group.add(value);
        }

        return group;
    }

    [Symbol.iterator] () {
        return new GroupIterator(this);
    }
};

class GroupIterator {
    constructor (group) {
        this.group = group.group;
        this.position = 0;
    }

    next () {
        if (this.position >= this.group.length) {
            return {
                done: true
            };
        }

        let value = this.group[this.position];
        this.position++;
        return {
            value,
            done: false
        };
    }
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}