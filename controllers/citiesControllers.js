const  citiesControllers ={
    getCities : async(req, res) => {
        let cities
        let error = null
        try{
            cities= await Cities.find()
            console.log(cities)
        }
        catch(err) {err = error}
        res.json({
            respose: error ? 'ERROR' : {cities},
            success: error ? false : true,
            error: error
        })
    },

    addCity:async (req,res) => {
        let city
        let error = null
        try{
            city= await new Cities({
                name: name,
                country: country,
                description:description
            })
            .save()
        }
        catch(err) {err = error}
        res.json({
            respose: error ? 'ERROR' : {city},
            success: error ? false : true,
            error: error
        })
    }
}
module.exports = citiesControllers