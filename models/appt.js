module.exports = (sequelize, DataTypes) => {
    const Appointment = sequelize.define('Appointment', {
        title: DataTypes.STRING,
        description: DataTypes.STRING
    });

    return Appointment;
};