let retailer = []
 export const useRetailers =() =>retailer.slice()
export const getRetailers =() =>fetch("http://localhost:3000/retailers")
.then(res => res.json())
.then(parsed => retailer = parsed)



