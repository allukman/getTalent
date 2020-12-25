const { createPortofolioModel, getPortofolioByIdModel, getPortofolioByEngIdModel, updatePortofolioModel, deletePortofolioModel } = require('../models/portofolio')

module.exports = {
  createPortofolio: async (req, res) => {
    try {
      const { enId, prAplikasi, prDeskripsi, prLinkPub, prLinkRepo, prTpKerja, prType } = req.body
      const setData = {
        en_id: enId,
        pr_aplikasi: prAplikasi,
        pr_deskripsi: prDeskripsi,
        pr_link_pub: prLinkPub,
        pr_link_repo: prLinkRepo,
        pr_tp_kerja: prTpKerja,
        pr_type: prType,
        pr_photo: req.file === undefined ? '' : req.file.filename
      }
      const result = await createPortofolioModel(setData)
      if (result.affectedRows) {
        res.status(200).send({
          success: true,
          message: 'Success add portofolio!'
        })
      } else {
        res.status(400).send({
          success: false,
          message: 'Submit portofolio failed!'
        })
      }
    } catch {
      res.status(500).send({
        success: false,
        message: 'Internal server error'
      })
    }
  },

  getPortofolioById: async (req, res) => {
    try {
      const { prId } = req.params
      const result = await getPortofolioByIdModel(prId)

      if (result.length) {
        res.status(200).send({
          success: true,
          message: `portofolio for id ${prId}`,
          data: result
        })
      } else {
        res.status(404).send({
          success: false,
          message: 'data not found!'
        })
      }
    } catch (error) {
      res.status(500).send({
        success: false,
        message: 'Internal server error'
      })
    }
  },

  getPortofolioByEngId: async (req, res) => {
    try {
      const { engineerId } = req.params
      const result = await getPortofolioByEngIdModel(engineerId)

      if (result.length) {
        res.status(200).send({
          success: true,
          message: `portofolio for id ${engineerId}`,
          data: result[0]
        })
      } else {
        res.status(404).send({
          success: false,
          message: 'data not found!'
        })
      }
    } catch (error) {
      res.status(500).send({
        success: false,
        message: 'Internal server error'
      })
    }
  },
  updatePortofolio: async (req, res) => {
    const { prId } = req.params
    try {
      // const { enId, prAplikasi, prDeskripsi, prLinkPub, prLinkRepo, prTpKerja, prType } = req.body
      // const setData = {
      //   en_id: enId,
      //   pr_aplikasi: prAplikasi,
      //   pr_deskripsi: prDeskripsi,
      //   pr_link_pub: prLinkPub,
      //   pr_link_repo: prLinkRepo,
      //   pr_tp_kerja: prTpKerja,
      //   pr_type: prType,
      //   pr_photo: req.file === undefined ? '' : req.file.filename
      // }
      const resultSelect = await getPortofolioByIdModel(prId)
      if (resultSelect.length) {
        req.body.photo = req.file === undefined ? resultSelect[0].pr_photo : req.file.filename
        const { enId, prAplikasi, prDeskripsi, prLinkPub, prLinkRepo, prTpKerja, prType } = req.body
        const setData = {
          en_id: enId,
          pr_aplikasi: prAplikasi,
          pr_deskripsi: prDeskripsi,
          pr_link_pub: prLinkPub,
          pr_link_repo: prLinkRepo,
          pr_tp_kerja: prTpKerja,
          pr_type: prType,
          pr_photo: req.body.photo
        }

        delete setData.photo
        const result = await updatePortofolioModel(prId, setData)
        if (result.affectedRows) {
          res.status(200).send({
            status: true,
            message: `skill With ID ${prId} has been update`
          })
        } else {
          res.status(400).send({
            status: false,
            message: 'Failed to Update Data '
          })
        }
      } else {
        res.status(400).send({
          success: false,
          message: `skill with id ${prId} not Found`
        })
      }
    } catch {
      res.status(500).send({
        success: false,
        message: 'Internal server error'
      })
    }
  },
  deletePortofolio: async (req, res) => {
    try {
      const { prId } = req.params
      const resultSelect = await getPortofolioByIdModel(prId)
      if (resultSelect.length) {
        const result = await deletePortofolioModel(prId)
        if (result.affectedRows) {
          res.status(200).send({
            success: true,
            message: `account with id ${prId} has been deleted`
          })
        } else {
          res.status(404).send({
            success: false,
            message: `account with id ${prId} not found`
          })
        }
      } else {
        res.status(404).send({
          success: false,
          message: `account with id ${prId} not found`
        })
      }
    } catch (error) {
      res.status(500).send({
        success: false,
        message: 'Internal server error'
      })
    }
  }

}
