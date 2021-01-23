let User = require("./user.js");

module.exports.addUser = function (req) {
    return new Promise((resolve, reject) => {

        User.getModel().insertMany(req.body).then((res) => {
            resolve({
                status: 200,
                message: "User Successfully Added"
            });
        }).catch((err) => {
            reject({
                status: 500,
                message: "Error while Adding User"
            });
        })
    })
}

module.exports.getUser = function (req) {
    return new Promise ((resolve, reject ) => {

        User.getModel().find(req.body).then((res) =>{
            resolve({
            
                status: 200,
                message : res
                
            });
        }).catch((err) => {
            reject({
                status : 500,
                message : "Error occured while fetching user"
            });
        })

    })
}