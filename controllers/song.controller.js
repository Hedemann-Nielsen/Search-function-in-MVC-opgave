import db from "../config/db.config.js";

//parms = url parameter ( /song )
//query = get parametere ( /songs?id=12 )
//body = post fra en formular

class SongController {
	constructor() {
		console.log("Class SongController instantiated");
	}

	// Søger efter sange
	search = (req, res) => {
		const { keyword } = req.params;

		// SQL Statement med LIKE og wildcards
		const sql = `	SELECT * 
						FROM song 
						WHERE title LIKE ?`;
		const searchKeyword = "%" + keyword + "%";

		db.query(sql, [searchKeyword], (error, results) => {
			console.log(error);
			// Returnerer resultaterne
			return res.json(results);
		});
	};
}

export default SongController;
