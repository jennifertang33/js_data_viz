function makeChartForAccommodationPrice(airbnbAccomodationData){
    const priceA = {
        lessThan500: 0,
        lessThan1000: 0,
        lessThan2000: 0,
        lessThan4000: 0,
        moreThan3999: 0
    };
    console.log("price A", priceA)
    console.log("airbnbAccomodationData", airbnbAccomodationData)

    airbnbAccomodationData.forEach(accomodation => {
        if (accomodation.price < 500) {
            priceA.lessThan500 += 1;
        } else if (accomodation.price < 1000) {
            priceA.lessThan1000 += 1;
        } else if (accomodation.price < 2000) {
            priceA.lessThan2000 += 1;
        } else if (accomodation.price < 4000) {
            priceA.lessThan4000 += 1;
        } else if (accomodation.price > 3999) {
            priceA.moreThan3999 += 1;
        }
    })
    console.log("price A", priceA);
    Highcharts.chart('accomodation-price-chart', {
        chart: {
        type: 'pie'
        },
        title: {
            text: 'Accomodation price'
        },
        series: [{
        name: 'Brands',
        innerSize: '40%',
        colorByPoint: true,
        data: [{
            name: 'Less than 500',
            y: priceA.lessThan500,
        }, {
            name: 'Less than 1000',
            y: priceA.lessThan1000
        }, {
            name: 'Less than 2000',
            y: priceA.lessThan2000
        }, {
            name: 'Less than 4000',
            y: priceA.lessThan4000
        }, {
            name: 'More than 3999',
            y: priceA.moreThan3999
        }]
    }]
    })
}
