module.exports = function(sequelize, DataTypes) {
	let Done = sequelize.define('Done', {
		name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		city: {
			type: DataTypes.STRING,
			allowNull: true
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true
		},
		rating: {
			type: DataTypes.STRING,
			allowNull: true
		},
		length: {
			type: DataTypes.STRING,
			allowNull: true
		},
		url: {
			type: DataTypes.STRING,
			allowNull: true
		}
	});

	Done.associate = (models) => {
		Done.belongsToMany(models.User, {
			as: 'Done',
			through: 'done_trails'
		});
		return Done;
	};
};