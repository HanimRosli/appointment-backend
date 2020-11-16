module.exports = (sequelize, DataTypes) => {
	const Users = sequelize.define('Users', {
        username: DataTypes.STRING,
        fullname: DataTypes.STRING,
        contact: DataTypes.STRING,
        email: DataTypes.STRING,
        address: DataTypes.STRING,
        skinConcern: DataTypes.STRING,
        });
        
        Users.associate = function(models) {
		Users.hasMany(models.Bookings)
	}

	return Users;
};