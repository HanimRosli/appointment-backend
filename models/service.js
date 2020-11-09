module.exports = (sequelize, DataTypes) => {
	const Services = sequelize.define('Services', {
        servicename: DataTypes.STRING,
        category: DataTypes.STRING,
        description: DataTypes.STRING,
        assigned: DataTypes.STRING,
        procedure: DataTypes.STRING,
        comment: DataTypes.STRING,
	});

	return Services;
};