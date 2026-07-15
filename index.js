app.delete('/biodata/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const result = await pool.query(
            'DELETE FROM biodata WHERE id = $1 RETURNING *',
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Data dengan id tersebut tidak ditemukan" });
        }

        res.status(200).json({
            message: "Berhasil menghapus data biodata",
            data: result.rows[0]
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Terjadi kesalahan pada server atau database" });
    }
});