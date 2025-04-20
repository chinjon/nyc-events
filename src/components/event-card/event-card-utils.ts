export const boroughClassName = (borough: string) => {
  const boroughNormalized = borough.toLowerCase();
  if (boroughNormalized != "staten island") {
    return boroughNormalized;
  }
  return boroughNormalized.split(" ").join("-");
};