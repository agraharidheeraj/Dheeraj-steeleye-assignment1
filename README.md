#Dheeraj-steeleye-assignment1

# Dashboard 

This repository contains the questions and answers for the Dashboard project. 


## Q1: Header Title and Total Number of Orders

### Question:
In the title of the header, it displays 5 orders but there are 6 orders in the table. We want to display the total number of orders in the header title.

### Answer:
To display the correct total number of orders in the header title, you need to update the title to show the actual count of orders in the table. I need to update the Dashboard component to calculate the total number of orders from the filteredRows array and then I use it in the HeaderTitle component. Here's how I can do it:
```html
<!-- Before -->
 <HeaderTitle primaryTitle="Orders" secondaryTitle= "Order 5" />

<!-- After -->
  <HeaderTitle primaryTitle="Orders" secondaryTitle={`${totalOrders} orders`} />
```

## Q2: Order Submitted Date Missing

### Question:
In the table, "Order Submitted Date" is missing. We have timestamp data included in `src\assets\timeStamps.json` with the corresponding ids, please combine that with the order data and make sure the order submitted date is being displayed in the table.

### Answer:
To display the "Order Submitted Date" in the table, I need to combine the order data with the timestamp data based on the corresponding IDs. so First we have to import the timestamp data using:

```javascript
import timeStampsData from "../src/assets/timeStamps.json";
```

Then, update the rendering of the "Order Submitted Date" cell in the table by combining the data:

```javascript
 const combinedData = rows.map((row) => ({
    ...row,
    orderTimeStamps: timeStampsData.results.find((item) => item["&id"] === row["&id"]).timestamps,
  }));
```

## Q3: Display Currency Value in "Order Volume" Cell

### Question:
Order Volume cell is displaying USD values, can you please make it display the currency value selected on the dropdown located in the header of the dashboard?

### Answer:
To display the correct currency value in the "Order Volume" cell based on the selected currency from the dropdown,first I need to convert the USD values to the selected currency values before displaying them. and I use exchange rates or conversion rates to perform the conversion. Assuming you have access to the exchange rates, you can use them to convert the USD values to the selected currency values.

```javascript
const fakeConversionRates = {
  USD: 1,
  GBP: 0.75,
  JPY: 110,
  EUR: 0.85,
};
```

## Q4: Search Feature on Order IDs

### Question:
Can you please add a search feature on the order IDs with the search bar given in the header?

### Answer:
To add the search feature, I need to update the Dashboard component to include a search bar. and then I use `useState` hook to manage the search term, and then filter the orders based on the search term. Here's how I can do it:

```javascript
const [searchText, setSearchText] = useState("");

const filteredRows = mockData.results.filter((row) =>
    row["&id"].toLowerCase().includes(searchText.toLowerCase())
  );
```

## Q5: Clear Console Errors and Warnings

### Question:
Please clear the console errors and warnings.

### Answer:
To clear the console errors, I need to ensure that all the required props are passed to each child component. Make sure that the "key" prop is provided for each child in a list, such as when rendering rows in a table.


##Here is Example which i have done in Card Component


```javascript
key={k}
```


## Q6: Populating Card on Order Selection

### Question:
When the user selects an order, can you populate the card on top of the listing component as shown in the image?

### Answer:
To populate the card on top of the listing component when the user selects an order, I need to pass  the selected order details and timestamps to the List row . In the Dashboard component, i just pass the prop ,And list component i just make one fuction with showdata in row and pass value of order details and timestamps.and finnaly i just make a onClick function in list row for show the data on the top of list

```javascript Dashboard Component to pass the prop
selectedOrderDetails={setSelectedOrderDetails} selectedOrderTimeStamps={setSelectedOrderTimeStamps} 
```

```javascript List Component to pass the prop
 const showdata=(rows)=>{
    selectedOrderDetails(rows.executionDetails)
    selectedOrderTimeStamps(rows.orderTimeStamps)
  }
```
```javascript ListRow Component 
onClick={()=>{showdata(data)}}>
```

---
#In Bonus

## Card Component Storybook

### Storybook Setup

To view the Storybook, We have to run these command

1. Run Storybook using the command `npm run storybook`.
2. Open your browser and navigate to `http://localhost:6006` to view the Card component in Storybook.

## Card Component

The Card component is designed to display information in a card format. It accepts the following props:

### Props

- `cardData`: An object containing the card data to be displayed. It includes properties like `description`, `OrderID`, `Buysell`, `Country`, and `OrderSubmitted`.
- `title`: The title of the card.

### Example

```jsx
import React from 'react';
import Card from '../component/card/Card';

export default {
    title: 'Card',
    component: Card,
};

export const DefaultCard = () => (
    <Card
        cardData={{
            description: 'This is a card component used to display information.',
            OrderID: 'SE|20221104|179|9:1:NEWO',
            Buysell: 'BUYI',
            Country: 'NEWO',
            OrderSubmitted: '2022-11-04T15:29:00Z'
        }}
        title="My Card Title"
    />
);
```

In this example, I create a story for the `Card` component and provide sample data for the `cardData` prop. We also set the `title` prop to "My Card Title". This story demonstrates how the Card component is used to display information in a card format.

Thankyou
