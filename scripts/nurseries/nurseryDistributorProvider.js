let nurseryDistributors = []
export const useNurseryDistributors =() =>nurseryDistributors.slice()
 export const getNurseryDistributors = () =>fetch("http://localhost:3000/nurseryDistributor") 
 .then (res => res.json()) 
 .then(parsed => nurseryDistributors = parsed)

