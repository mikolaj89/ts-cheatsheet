function longestConsecutive(nums : number[]) {
    if (nums.length === 0) return 0;

    const numSet = new Set(nums);  // Store all numbers for O(1) lookups
    let maxLength = 0;

    for (const num of numSet) {
        // Step 1: Check if `num` is the start of a sequence
        if (!numSet.has(num - 1)) {  // Only start counting if `num - 1` is NOT in the set
            let currentNum = num;
            let currentStreak = 1;

            // Step 2: Expand the sequence
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            // Step 3: Update maxLength if this sequence is the longest
            maxLength = Math.max(maxLength, currentStreak);
        }
    }

    return maxLength;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
// // Output: 4 → (Because [1, 2, 3, 4] is the longest consecutive sequence)

// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 1, 9]));
// // Output: 10 → (Because [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] is the longest sequence)

console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -2, 6, -3, 2]));
// Output: 7 → (Because [-3, -2, -1, 0, 1, 2, 3] is the longest sequence)
