let Kayu = [
    { id: 01, chKayu: '1030', volKayu: 100 },
    { id: 02, chKayu: '1031', volKayu: 100 }
]

module.exports = {
    index: function(req, res) {
        if (Kayu.length > 0) {
            res.json({
                status: true,
                data: Kayu,
                method: req.method,
                URL: req.url,
                tanggal: new Date
            })
        } else {
            res.json({
                status: false,
                massage: 'DATA Kayu MASIH KOSONG'
            })
        }
    },
    tambah: function(re, res) {
        Kayu.push(req.body)
        res.send({
            status: true,
            data: Kayu,
            massage: 'DATA Kayu BERHASIL DITAMBAHKAN',
            method: req.method,
            url: req.url
        })
    }
}