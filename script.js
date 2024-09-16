function firstWord(s) {
  // Trim any leading spaces and split the string by space
  const trimmedStr = s.trim();
  
  // Find the index of the first space
  const firstSpaceIdx = trimmedStr.indexOf(' ');
  
  // If there is no space, return the entire string
  if (firstSpaceIdx === -1) {
    return trimmedStr;
  }
  
  // Otherwise, return the substring up to the first space
  return trimmedStr.substring(0, firstSpaceIdx);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
