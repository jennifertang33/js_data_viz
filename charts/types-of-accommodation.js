const typeA ={private:0, entire:0, shared:0}

console.log("type A", typeA)
console.log("airbnbAccomodationData", airbnbAccomodationData)

airbnbAccomodationData.forEach(item=>{
    if (item.room_type==="Entire home/apt") {
        typeA.entire=typeA.entire +1;
    } else if (item.room_type==="Private room") {
        typeA.private=typeA.private +1;
    } else if (item.room_type==="Shared room") {
        typeA.shared=typeA.shared +1;
    }

})

console.log("type A", typeA)