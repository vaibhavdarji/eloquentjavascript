/**
 * The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.

Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the properties of objects to compare them.
 */

const deepEqual = (objectA, objectB) => {
    if (objectA === objectB) return true;

    if (!objectA || typeof objectA !== 'object') return false;
    if (!objectB || typeof objectB !== 'object') return false;

    let propsInA = 0,
        propsInB = 0;
    for (let prop in objectA) {
        propsInA += 1;
    }

    for (let prop in objectB) {
        propsInB += 1;
        if (!(prop in objectA) || !deepEqual(objectA[prop], objectB[prop])) {
            return false;
        }
    }
    return propsInA === propsInB;
}