export const BILLION = 1000000000;
export const MILLION = 1000000;

export const prettifyNumber = (number: any) => {
  if (!isNaN(parseFloat(number)) && isFinite(number)) {
    return parseFloat(number).toLocaleString('en-US');
  }

  return number;
};

function removeAndAddItemToArray(users) {
  const idsToRemove = ['z8'];
  const filteredUsers = users.filter((item) => !idsToRemove.includes(item));

  return [
    ...filteredUsers,
    {
      id: 's7',
      name: 'Sara',
    },
  ];
}
