//your code here
function findMajorityElement(nums) {
  let count = 0;
  let candidate;

  // Find potential majority element
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
    }

    count += candidate === nums[i] ? 1 : -1;
  }

  // Verify if the candidate is the majority element
  count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === candidate) {
      count++;
    }
  }

  // Return the majority element
  if (count > Math.floor(nums.length / 2)) {
    return candidate;
  }

  // If no majority element is found (this should not occur)
  return null;
}

// Example usage
const nums = [2, 1, 2];
const majorityElement = findMajorityElement(nums);
console.log("Majority Element:", majorityElement);
