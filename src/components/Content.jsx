import React, { Component } from "react";

import DataGrid, {
  Column,
  StateStoring,
  FilterRow,
  SearchPanel,
  Editing,
  Popup,
  Paging,
  Pager,
  Form,
} from "devextreme-react/data-grid";
import "devextreme-react/text-area";
import { Item, RequiredRule, SimpleItem } from "devextreme-react/form"; 
import "../style/Content.scss";
import Data from "../assets/data.json";

//Column adları eklendi.
const columns = ["SosyalMedyaLinki", "SosyalMedyaAdı", "Açıklama"];

//Gösterilecek satır sayısı için değerler
const allowedPageSizes = [1, 2, 3, 4, 5, 6, 7, 8, 9];

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focusedRowKey: 4,
      autoNavigateToFocusedRow: true,
    };

    this.onFocusedRowChanged = this.onFocusedRowChanged.bind(this);
    this.onAutoNavigateToFocusedRowChanged =
    this.onAutoNavigateToFocusedRowChanged.bind(this);
  }

  //Focuslanıcak satırı seçme
  onTaskIdChanged(e) {
    if (e.event && e.value > 0) {
      this.setState({ focusedRowKey: e.value });
    }
  }

  //Row üzerine tıklandığında focuslama  
  onFocusedRowChanging(e) {
    const rowsCount = e.component.getVisibleRows().length;
    const pageCount = e.component.pageCount();
    const pageIndex = e.component.pageIndex();
    const key = e.event && e.event.key;

    if (key && e.prevRowIndex === e.newRowIndex) {
      if (e.newRowIndex === rowsCount - 1 && pageIndex < pageCount - 1) {
        e.component.pageIndex(pageIndex + 1).done(() => {
          e.component.option("focusedRowIndex", 0);
        });
      } else if (e.newRowIndex === 0 && pageIndex > 0) {
        e.component.pageIndex(pageIndex - 1).done(() => {
          e.component.option("focusedRowIndex", rowsCount - 1);
        });
      }
    }
  }

  onFocusedRowChanged(e) {
    this.setState({
      focusedRowKey: e.component.option("focusedRowKey"),
    });
  }
  
  //Focuslanacak varsayılan değer
  onAutoNavigateToFocusedRowChanged(e) {
    this.setState({ autoNavigateToFocusedRow: e.value });
  }

  render() {
    return (
      <div id="data-grid-demo" className="grid">
      {/* Devextreme datagridi eklendi, gerekli attributeleri kullanıldı. DataSource ile json dosyasındaki veriler alındı */} 
        <DataGrid
          dataSource={Data}
          defaultColumns={columns}
          showBorders={true}
          keyExpr="ID"
          allowColumnReordering={true}
          allowColumnResizing={true}
          columnAutoWidth={true}
          rowAlternationEnabled={true}
          focusedRowEnabled={true}
          focusedRowKey={this.state.focusedRowKey}
          autoNavigateToFocusedRow={this.state.autoNavigateToFocusedRow}
          onFocusedRowChanging={this.onFocusedRowChanging}
          onFocusedRowChanged={this.onFocusedRowChanged}
        >
        {/* LocalStorage a eklenmesi için */} 
        <StateStoring enabled={true} type="localStorage" storageKey="storage" />
        
        {/* Filtreleme, arama, sayfalama için taglar eklenildi. */} 
          <FilterRow visible={true} applyFilter={"onClick"} />
          <SearchPanel visible={true} />
          <Paging defaultPageSize={9} pageIndex={1} enabled={true} />
          <Pager
            visible={true}
            allowedPageSizes={allowedPageSizes}
            displayMode="compact"
            showPageSizeSelector={true}
            showInfo={false}
            showNavigationButtons={true}
            showNavButtons={true}
          />
          {/* Yeni kayıt eklemek için popup form eklendi. */} 
          <Editing mode="popup" allowAdding={true}>
            <Popup showTitle={true} width={495} height={426} />

            <Form
              labelLocation={"top"}
              colCount={1}
              showRequiredMark={false}
              focusStateEnabled={true}
              showColonAfterLabel={false}
            >
              <Item itemType="group">
                <SimpleItem dataField="SosyalMedyaLinki" editorType="dxTextBox">
                  <RequiredRule message="Lütfen sosyal medya linkini giriniz." />
                </SimpleItem>
                <SimpleItem dataField="SosyalMedyaAdı" editorType="dxTextBox">
                  <RequiredRule message="Lütfen sosyal medya adını giriniz." />
                </SimpleItem>
                <SimpleItem dataField="Açıklama" editorType="dxTextBox">
                  <RequiredRule message="Lütfen açıklama giriniz." />
                </SimpleItem>
              </Item>
            </Form>
          </Editing>
        
           {/* Grid üzerinde görünecek kolonlar eklendi. */} 
          <Column />
          <Column />
          <Column />
        </DataGrid>
      </div>
    );
  }
}

export default Content;
