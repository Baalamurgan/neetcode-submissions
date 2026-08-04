class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        const mapS = new Map();
        for (let c of s){
            mapS.set(c, (mapS.get(c) || 0) + 1)
        }

        console.log(mapS)

        for(let c of t) {
            const no = mapS.get(c)
            if(no === 1) {
                mapS.delete(c)
            } else mapS.set(c, no - 1)
        }
        console.log(mapS)

        return mapS.size === 0;
    }
}
