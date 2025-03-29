export const getWindDirection = (deg) => {
  const directions = [
    "north",
    "north-Northeast",
    "northeast",
    "east-Northeast",
    "east",
    "east-Southeast",
    "southeast",
    "south-Southeast",
    "south",
    "south-Southwest",
    "southwest",
    "west-Southwest",
    "west",
    "west-Northwest",
    "northwest",
    "north-Northwest",
    "north",
  ];

  let index = Math.round(deg / 22.5) % 16; // Convert degrees to index
  return directions[index];
};
