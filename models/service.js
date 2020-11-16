module.exports = (sequelize, DataTypes) => {
	const Services = sequelize.define('Services', {
        servicename: DataTypes.STRING,
        description: DataTypes.STRING,
        procedure: DataTypes.STRING
        });
        
       // Services.associate = function(models) {
	//	Services.hasMany(models.Booking)
	//}

	return Services;
};