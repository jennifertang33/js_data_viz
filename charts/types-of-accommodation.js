function makeChartForAccommodationTypes(accommodations){
    const typeA ={private:0, entire:0, shared:0}

    console.log("type A", typeA)
    console.log("accommodations", accommodations)
    
    accommodations.forEach(item=>{
        if (item.room_type==="Entire home/apt") {
            typeA.entire=typeA.entire +1;
        } else if (item.room_type==="Private room") {
            typeA.private=typeA.private +1;
        } else if (item.room_type==="Shared room") {
            typeA.shared=typeA.shared +1;
        }
    
    })
            
    console.log("type A", typeA);
    Highcharts.chart('types-of-accommodation-chart', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Accommodation types'
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: null
        }
    },
    legend: {
        enabled: false
    },
    series: [
        {
        name: 'Accommodation types',
        colorByPoint: true,
        data: [{
            name: 'Private room',
            y: typeA.private
        },{
            name: 'Entire home/apt',
            y: typeA.entire
        },{
            name: 'Shared room',
            y: typeA.shared
        }]
    }]
    })
}