export const prerender = true;

export const boroughBadgeStyle = (borough: string) => {
  const boroughNormalized = borough.toLowerCase();

  switch(boroughNormalized) {
    case "staten island":
      return "bg-blue-50 text-blue-700"
    case "manhattan":
      return "bg-red-50 text-red-700"
    case "bronx":
      return "bg-green-50 text-green-700"
    case "queens":
      return "bg-purple-50 text-purple-700"
    case "brooklyn":
      return "bg-orange-50 text-orange-700"
  }
}