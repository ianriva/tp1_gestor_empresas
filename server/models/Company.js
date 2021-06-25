module.exports = (sequelize, DataTypes) => {

    const Company = sequelize.define("Company", {
        denomination: {
            type: DataTypes.STRING(128),
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        businessHours: {
            type: DataTypes.STRING(256),
            allowNull: false,
        },
        aboutUs: {
            type: DataTypes.STRING(1024),
            allowNull: false,
        },
        latitude: {
            type: DataTypes.DECIMAL(7,4),
            allowNull: true,
        },
        longitude: {
            type: DataTypes.DECIMAL(7,4),
            allowNull: true,
        },
        address: {
            type: DataTypes.STRING(256),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(75),
            allowNull: false,
        },
    });
    return Company;
}