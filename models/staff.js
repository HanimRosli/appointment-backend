module.exports = (sequelize, DataTypes) => {
	const Staff = sequelize.define('Staff', {
        username: DataTypes.STRING,
        fullname: DataTypes.STRING,
        email: DataTypes.STRING,
        address: DataTypes.STRING,
	});

	return Staff;
};
