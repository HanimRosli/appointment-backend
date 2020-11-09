module.exports = (sequelize, DataTypes) => {
	const Staffs = sequelize.define('Staffs', {
        username: DataTypes.STRING,
        fullname: DataTypes.STRING,
        email: DataTypes.STRING,
        address: DataTypes.STRING,
	});

	return Staffs;
};
