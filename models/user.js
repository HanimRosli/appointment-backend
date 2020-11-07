module.exports = (sequelize, DataTypes) => {
	const Users = sequelize.define('Users', {
        username: DataTypes.STRING,
        fullname: DataTypes.STRING,
        contact: DataTypes.STRING,
        email: DataTypes.STRING,
        address: DataTypes.STRING,
        skin_concern: DataTypes.STRING,
	});

	return Users;
};