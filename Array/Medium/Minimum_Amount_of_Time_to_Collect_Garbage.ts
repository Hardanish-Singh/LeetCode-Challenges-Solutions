type garbageCount = {
        [key: string]: number;
};

var calculateCost = function (garbage: Array<string>, travel: Array<number>, map: garbageCount, key: string): number {
        if (!map.hasOwnProperty(key)) {
                return 0;
        }
        let cost: number = 0;
        for (let i: number = 0; i < garbage.length; i++) {
                if (map[key] <= 0) {
                        return cost;
                }
                cost += travel[i - 1] || 0;
                let garbageType: Array<string> = garbage[i].split("");
                for (let j: number = 0; j < garbageType.length; j++) {
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
        let map: garbageCount = {};
        for (let i: number = 0; i < garbage.length; i++) {
                let garbageType: Array<string> = garbage[i].split("");
                for (let j: number = 0; j < garbageType.length; j++) {
                        garbageType[j] in map ? (map[garbageType[j]] += 1) : (map[garbageType[j]] = 1);
                }
        }
        let cost: number = 0;
        let garbageTypes: Array<string> = ["M", "P", "G"];
        for (let i: number = 0; i < garbageTypes.length; i++) {
                cost += calculateCost(garbage, travel, map, garbageTypes[i]);
        }
        return cost;
};
