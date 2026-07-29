class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        const mapS = new Map();

        for (let char of s) {
            mapS.set(char, (mapS.get(char) || 0) + 1);
        }

        console.log(mapS);

        for (let char of t){
            if(mapS.has(char)) {
                const value = mapS.get(char);
                if(value === 1) mapS.delete(char);
                else mapS.set(char,value - 1)
            } else return false;
        }

        console.log(mapS);

        return mapS.size === 0;
    }
}
