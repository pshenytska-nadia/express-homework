const stats = require('../data/statistics');

const getStatsByName = (req, res) => {
	const { name } = req.params;
	const student = stats.find((st) => st.name === name);

	if (!student) {
		res.status(404).json({
			error: 'Studen with name ${name} NOT FOUND',
		});
	}

	res.status(200).json(student);
};

const worstHomeworkScore = (req, res) => {
	const scoresForHomework = stats.map((user) => {
		return user.scores.find((score) => score.type === 'homework').score;
	});

	const minScore = Math.min(...scoresForHomework);
	const student = stats.find((st) =>
		st.scores.find(
			(score) => score.type === 'homework' && score.score === minScore,
		),
	);

	res.status(200).json(student);
};

module.exports = { getStatsByName, worstHomeworkScore };
