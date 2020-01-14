let nurseryFlowers = []
export const useNurseryFlowers =() =>nurseryFlowers.slice()
 export const getNurseryFlowers = () =>fetch("http://localhost:3000/nurseryFlower") 
 .then (res => res.json()) 
 .then(parsed => nurseryFlowers = parsed)

