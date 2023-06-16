import React from 'react'
import '../style/AddNew.scss'

const AddNew = () => {
  return (
    <div className="modal fade" id="addNewModal" aria-labelledby="addNewModalLabel">
       <div className="modal-dialog">
          <div className="modal-content">
             <div className="header d-flex justify-content-end"> 
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
             </div>
             <div  className="modal-body">
                <label className="form-label">Sosyal Medya Linki</label>
                <input type="text" className="form-control" id="addNewLink" />
       
                <label className="form-label">Sosyal Medya Adı</label>
                <input type="text" className="form-control" id="addNewName" />

                <label className="form-label">Açıklama</label>
                <input type="text" className="form-control" id="addNewDesc" />
             </div>
             <div className="footer d-flex justify-content-end">
                <button type="button" className="btn cancel me-3" data-bs-dismiss="modal">Vazgeç</button>
                <button type="button" className="btn submit">Kaydet</button>
             </div>
          </div>
       </div>
    </div>
  )
}

export default AddNew 
/*
   
 
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addNewModal">
  Launch demo modal
</button>


*/