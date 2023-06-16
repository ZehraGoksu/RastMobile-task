import React, { Component } from 'react'

import DataGrid, { Column, Editing, Popup, Paging, Form} from 'devextreme-react/data-grid';
import 'devextreme-react/text-area';
import { Item } from 'devextreme-react/form';
import "../style/AddNew.scss";
import "../style/Content.scss"; 
import Data from '../assets/data.json'
  

const columns = ["SosyalMedyaLinki", "SosyalMedyaAdı", "Açıklama"];
 
class Content extends Component {
 
  render() {
    return (
      <div id="data-grid-demo" className='grid' >
        <DataGrid
          dataSource={Data}
          defaultColumns={columns}
          showBorders={true}
          keyExpr="ID"
        >
          <Paging enabled={false} />
          <Editing
            mode="popup"
            allowAdding={true} 
          >
            <Popup 
              showTitle={true}
              width={488}
              height={406}
            />

            <Form>
              <Item itemType="group" >
                <Item dataField="SosyalMedyaLinki"/>
                <Item dataField="SosyalMedyaAdı"/>
                <Item dataField="Açıklama" /> 
              </Item> 
            </Form>
            
          </Editing> 
          <Column />
          <Column />
          <Column />  
        </DataGrid>
      </div>
    );
  }
}

export default Content;
