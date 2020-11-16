module.exports = (sequelize, DataTypes) => {
	const Bookings = sequelize.define('Bookings', {
        date: DataTypes.STRING,
		time: DataTypes.STRING,
		service: DataTypes.STRING,
		assignTo: DataTypes.STRING,
		status: DataTypes.STRING
	});

	Bookings.associate = function(models) {
		Bookings.belongsTo(models.Users)
	}

	return Bookings;
};