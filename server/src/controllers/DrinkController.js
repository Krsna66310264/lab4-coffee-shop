module.exports = {
    // index: สำหรับ GET /drinks (ดูทั้งหมด)
    index (req, res) {
        res.send('เรียกดูข้อมูลเครื่องดื่มทั้งหมด (Get All Drinks)');
    },

    // show: สำหรับ GET /drink/:id (ดูทีละแก้ว)
    show (req, res) {
        res.send('ดูข้อมูลเครื่องดื่ม ID: ' + req.params.id);
    },

    // create: สำหรับ POST /drink (สร้างใหม่)
    create (req, res) {
        res.send('สร้างเครื่องดื่มใหม่: ' + JSON.stringify(req.body));
    },

    // update: สำหรับ PUT /drink/:id (แก้ไข)
    update (req, res) {
        res.send('แก้ไขเครื่องดื่ม ID: ' + req.params.id + ' ข้อมูลใหม่: ' + JSON.stringify(req.body));
    },

    // delete: สำหรับ DELETE /drink/:id (ลบ)
    delete (req, res) {
        res.send('ลบเครื่องดื่ม ID: ' + req.params.id);
    }
}