module.exports = (sequelize, DataTypes) => {
	const Services = sequelize.define('Services', {
        servicename: DataTypes.STRING,
        category: DataTypes.STRING
        });
        
       // Services.associate = function(models) {
	//	Services.hasMany(models.Booking)
	//}

	return Services;
};