export const getInitials = (name: string) => {
  let initials;
  const nameSplit = name.split(' ');
  const nameLength = nameSplit.length;
  if (nameLength > 1) {
    initials = nameSplit[0].substring(0, 1);
  }

  return initials?.toUpperCase();
};
