module.exports = (sequelize, DataTypes) => {

    const Novelty = sequelize.define("Novelty", {
        title: {
            type: DataTypes.STRING(128),
            allowNull: false,
        },
        summary: {
            type: DataTypes.STRING(1024),
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING(128),
            allowNull: true,
        },
        contentHtml: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        published: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        publishedDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    });
    return Novelty;
}