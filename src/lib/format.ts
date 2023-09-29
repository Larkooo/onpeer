export const formatAddress = (address: string) => {
  return address.slice(0, 6) + "..." + address.slice(-4);
};

export const formatHash = (hash: string) => {
  return hash.slice(0, 12) + "..." + hash.slice(-4);
};
