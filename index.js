app.get('/biodata', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM biodata');
        res.status(200).json({
            message: "Berhasil mengambil data biodata",
            data: result.rows
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Terjadi kesalahan pada server atau database" });
    }
});