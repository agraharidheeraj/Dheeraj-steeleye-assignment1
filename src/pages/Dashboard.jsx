import React, { useState } from "react";
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";
import mockData from "../assets/data.json";


const Dashboard = () => {
  const [currency, setCurrency] = useState("USD");
  const [searchText, setSearchText] = useState(""); 
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});

  const filteredRows = mockData.results.filter((row) =>
    row["&id"].toLowerCase().includes(searchText.toLowerCase())
  );
                      
  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle primaryTitle="Orders" secondaryTitle="6 orders" />
        <div className={styles.actionBox}>
          <Search value={searchText} onChange={(e) => setSearchText(e.target.value)} />
          <Dropdown
            options={["GBP", "USD", "JPY", "EUR", "CUR"]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <Card cardData={selectedOrderDetails} title="Selected Order Details" />
          <Card cardData={selectedOrderTimeStamps} title="Selected Order Timestamps" />
        </div>
        <List rows={filteredRows} currency={currency} />
      </div>
    </div>
  );
};

export default Dashboard;
