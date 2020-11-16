module.exports = (sequelize, DataTypes) => {
	const Services = sequelize.define('Services', {
        category: DataTypes.STRING,
        serviceName: DataTypes.STRING
	});

	return Services;
};