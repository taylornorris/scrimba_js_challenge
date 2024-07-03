import { propertyForSaleArr } from "./properties/propertyForSaleArr.js"
import { placeholderPropertyObj } from "./properties/placeholderPropertyObj.js"

function getPropertyHtml(propertyArr = [placeholderPropertyObj]) {

    /* iterates array and stores each object in property */
    return propertyArr.map(property => {

        /* destructre object */
        const {
            propertyLocation,
            priceGBP,
            roomsM2,
            comment,
            image
        } = property

        /* add roomsM2 array */
        const totalRoomSize = property.roomsM2.reduce((total, current) => 
            total + current
        )

        /* add html to DOM */
        return `
        <section class="card">
            <img src="/images/${image}">
            <div class="card-right">
                <h2>${propertyLocation}</h2>
                <h3>£${priceGBP}</h3>
                <p>${comment}</p>
                <h3>${totalRoomSize} m&sup2;</h3>
            </div>
        </section>
        `
    }).join("")

}

document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr)