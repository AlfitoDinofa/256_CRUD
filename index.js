app.put('/biodata/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nama, nim, kelas } = req.body;

        const result = await pool.query(
            'UPDATE biodata SET nama = $1, nim = $2, kelas = $3 WHERE id = $4 RETURNING *',
            [nama, nim, kelas, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Data dengan id tersebut tidak ditemukan" });
        }

        res.status(200).json({
            message: "Berhasil mengupdate data biodata",
            data: result.rows[0]
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Terjadi kesalahan pada server atau database" });
    }
});