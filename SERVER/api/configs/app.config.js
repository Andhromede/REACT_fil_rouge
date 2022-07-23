const config = {
    PORT: 5001,
    HASH_PREFIX: "$2b$10$",
    JWT_SECRET: "b3715d5693ef63a7f77454f671a3270a",
    RESTRICTED_ROUTES : {
        "/utilisateur/updateUser": (user) => user.role > 0,
        // "/utilisateur/updateUser": (user, params) => user.role > 0 && user.id == params.id,
        "/race/*": (user) => user.role > 0,
        "/espece/*": (user) => user.role > 0,
        "/animal/*": (user) => user.role > 0,
        "/update": (user) => user.role > 0,
        "/delete": (user) => user.role === 1,
        // "/espece/getAllByEspece/*": (user, params) =>  user.role > 0 && user.id == params.id,
    }
}

module.exports = config;