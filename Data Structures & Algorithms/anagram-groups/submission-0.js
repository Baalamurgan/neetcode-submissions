class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const mapStrs = new Map();

        for(const c of strs){

            console.log(c)
            
            const sortedC = c.split('').sort().join('');

            console.log(sortedC)

            if (mapStrs.has(sortedC)){
                console.log(mapStrs.get(sortedC))
                mapStrs.get(sortedC).push(c);
            } else {
                mapStrs.set(sortedC, [c]);
            }

        }
            return [...mapStrs.values()]
    }
}
