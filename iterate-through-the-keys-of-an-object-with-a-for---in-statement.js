/*We've defined a function countOnline which accepts one argument, allUsers. Use a for...in statement inside this function to loop through the allUsers object and return the number of users whose online property is set to true*/







const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {
  // Only change code below this line
 let onlineCount = 0;

  // Iterate over each user in the allUsers object using for...in loop
  for (let user in allUsers) {
    // Check if the property is directly owned by the object (not inherited)
    if (allUsers.hasOwnProperty(user)) {
      // Check if the user's online property is true
      if (allUsers[user].online === true) {
        onlineCount++; // Increment the online count
      }
    }
  }

  return onlineCount; // Return the total count of online users

  // Only change code above this line
}

console.log(countOnline(users));