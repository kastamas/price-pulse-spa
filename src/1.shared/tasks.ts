/* 1. Return new array without user with id 'z8' and add new
user with id 's7' and name 'Sara'.
Example users: exports.users = [
  { id: '11', name: 'John' },
  { id: '2f', name: 'Sara' },
  { id: '3a', name: 'Karen' },
  { id: '4c', name: 'Steve' },
  { id: 'j5', name: 'Martin' },
  { id: '6c', name: 'Julie' },
  { id: '7', name: 'Julie' },
  { id: 'z8', name: 'Julie' },
  { id: '9p', name: 'Julie' },
  { id: '10', name: 'Julie' },
];
*/

export function removeAndAddItemToArray(users: any[]) {
  const idsToRemove = ['z8']
  const filteredUsers = users.filter((item) => !idsToRemove.includes(item.id))

  return [
    ...filteredUsers,
    {
      id: 's7',
      name: 'Sara',
    },
  ]
}
