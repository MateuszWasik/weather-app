const DegreeConverter = (degrees: number) => {
  const directions = ["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"]
  return directions[Math.round((degrees % 360) / 22.5) + 1]
}

export default DegreeConverter
