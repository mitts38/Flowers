import { useRetailers } from "../retailers/retailerDataProvider.js"
import RetailerComponent from "../retailers/retailer.js";
import { useFlowers } from "../flower/flowerDataProvider.js";
import { useNurseryDistributors } from "../nurseries/nurseryDistributorProvider.js";
import { useNurseryFlowers } from "../nurseries/nurseryFlowerProvider.js";
import { useNurseries } from "../nurseries/nurseryProvider.js";
import { useDistributors } from "../distributors/distributorsDataProvider.js";

const contentTarget = document.querySelector(".retailers")

const retailerListComponent = () => {

  const retailers = useRetailers()
  const distributors = useDistributors()
  const nurseries = useNurseries()
  const nursFlowRel = useNurseryFlowers()
  const nursDistRel = useNurseryDistributors()
  const flowers = useFlowers()

  const render = () => {
    contentTarget.innerHTML = retailers.map(retailer => {

      const distributor = distributors.find(distributor => distributor.id === retailer.distributorId)

console.log("distributor:", distributor)
      let nursDistRelation = nursDistRel.filter(nd => nd.distributorId === distributor.id)

      const foundNurseryArray = nursDistRelation.map(ndr => {
        const foundNursery = nurseries.find(nursery => nursery.id === ndr.nurseryId)
        return foundNursery
      })
 
      const flowerArray=foundNurseryArray.map(nursery => {
        const nursFlowRelation = nursFlowRel.filter(nf => nf.nurseryId === nursery.id)

        const foundFlowerArray = nursFlowRelation.map(nfr => {
          let foundFlower = flowers.find(flower => flower.id === nfr.flowerId)
          return foundFlower
        })
        return foundFlowerArray
      })

      



      
     return RetailerComponent(retailer, distributor, foundNurseryArray, flowerArray)}).join("")
  }

  render()

}

export default retailerListComponent