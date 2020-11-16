module.exports = (sequelize, DataTypes) => {
	const Bookings = sequelize.define('Bookings', {
        date: DataTypes.STRING,
        time: DataTypes.STRING,
        service: DataTypes.STRING
	});

	Bookings.associate = function(models) {
		Bookings.belongsTo(models.Users)
		//Bookings.belongsTo(models.Services)
	}
	
	return Bookings;
};