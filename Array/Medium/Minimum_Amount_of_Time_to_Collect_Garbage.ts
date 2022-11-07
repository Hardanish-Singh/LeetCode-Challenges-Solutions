var calculateCost = function (garbage, travel, map, key) {
        if (!map.hasOwnProperty(key)) {
                return 0;
        }
        let cost = 0;
        for (let i = 0; i < garbage.length; i++) {
                if (map[key] <= 0) {
                        return cost;
                }
                cost += travel[i - 1] || 0;
                let garbageType = garbage[i].split("");
                for (let j = 0; j < garbageType.length; j++) {
                        if (garbageType[j] === key) {
                                cost++;
                                map[garbageType[j]] -= 1;
                        }
                }
        }
        return cost;
};

/**
 * @param { string[] } garbage
 * @param { number[] } travel
 * @return { number }
 */

var garbageCollection = function (garbage: Array<string>, travel: Array<number>): number {
        let map = {};
        for (let i = 0; i < garbage.length; i++) {
                let garbageType = garbage[i].split("");
                for (let j = 0; j < garbageType.length; j++) {
                        garbageType[j] in map ? (map[garbageType[j]] += 1) : (map[garbageType[j]] = 1);
                }
        }
        let cost = 0;
        let garbageTypes = ["M", "P", "G"];
        for (let i = 0; i < garbageTypes.length; i++) {
                cost += calculateCost(garbage, travel, map, garbageTypes[i]);
        }
        return cost;
};
