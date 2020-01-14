import { getFlowers } from "./flower/flowerDataProvider.js";
import FlowerComponent from "./flower/flowerList.js";
import { getRetailers } from "./retailers/retailerDataProvider.js";
import retailerListComponent from "./retailers/retailerList.js";
import { getDistributors } from "./distributors/distributorsDataProvider.js";
import { getNurseryFlowers } from "./nurseries/nurseryFlowerProvider.js";
import {getNurseries} from "./nurseries/nurseryProvider.js";
import { getNurseryDistributors } from "./nurseries/nurseryDistributorProvider.js";

getFlowers().then(FlowerComponent)
getRetailers()
.then(getDistributors)
.then(getNurseries)
.then(getNurseryDistributors)
.then(getNurseryFlowers)
.then(retailerListComponent)