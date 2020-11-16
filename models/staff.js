module.exports = (sequelize, DataTypes) => {
	const Staffs = sequelize.define('Staffs', {
        username: DataTypes.STRING,
        fullname: DataTypes.STRING,
        contact: DataTypes.STRING,
        email: DataTypes.STRING,
        address: DataTypes.STRING,
        position: DataTypes.STRING

	});

	return Staffs;
};
