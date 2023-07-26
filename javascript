// Function to find unique elements in an array
function getUnique(arr) {
  return Array.from(new Set(arr));
}

// Function to find the intersection of two arrays
function getIntersection(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item));
}

// Given lists
const List1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan'];
const List2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav'];

// a. Get unique set of users from List1 which are not in List2
function getUsersNotInList2(list1, list2) {
  const uniqueList1 = getUnique(list1);
  const uniqueList2 = getUnique(list2);
  return uniqueList1.filter(user => !uniqueList2.includes(user));
}

// b. Get unique set of users from List2 which are not in List1
function getUsersNotInList1(list1, list2) {
  const uniqueList1 = getUnique(list1);
  const uniqueList2 = getUnique(list2);
  return uniqueList2.filter(user => !uniqueList1.includes(user));
}

// c. Get set of users who are present in List1 and List2 both (intersection of list1 & list2)
function getUsersInBothLists(list1, list2) {
  const uniqueList1 = getUnique(list1);
  const uniqueList2 = getUnique(list2);
  return getIntersection(uniqueList1, uniqueList2);
}

// Output
const usersNotInList2 = getUsersNotInList2(List1, List2);
const usersNotInList1 = getUsersNotInList1(List1, List2);
const usersInBothLists = getUsersInBothLists(List1, List2);

console.log("Users not in List2:", usersNotInList2);
console.log("Users not in List1:", usersNotInList1);
console.log("Users in both List1 and List2:", usersInBothLists);
