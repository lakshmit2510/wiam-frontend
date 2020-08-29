

export function getConfig() {
  return {
    title: 'Inventory Details',
    cards: [
      {
        title: 'Total Inventory Details',
        list: [{
          labelName: 'Total No Of Products',
          key: 'Count'
        }, {
          labelName: 'Total Cost Price',
          key: 'TotalCostPrice'
        }, {
          labelName: 'Total Selling Price',
          key: 'TotalSellingPrice'
        }, {
          labelName: 'Gross Profit',
          key: 'GrossProfit'
        }]
      },
      {
        title: 'CategoryA Product Details',
        type: 'High Value Stock',
        list: [{
          labelName: 'Total No Of Products',
          key: 'Count'
        }, {
          labelName: 'Total Cost Price',
          key: 'TotalCostPrice'
        }, {
          labelName: 'Total Selling Price',
          key: 'TotalSellingPrice'
        }, {
          labelName: 'Gross Profit',
          key: 'GrossProfit'
        }]
      },
      {
        title: 'CategoryB Product Details',
        type: 'Normal Stock',
        list: [{
          labelName: 'Total No Of Products',
          key: 'Count'
        }, {
          labelName: 'Total Cost Price',
          key: 'TotalCostPrice'
        }, {
          labelName: 'Total Selling Price',
          key: 'TotalSellingPrice'
        }, {
          labelName: 'Gross Profit',
          key: 'GrossProfit'
        }]
      },
      {
        title: 'CategoryC Product Details',
        type: 'Dead Stock',
        list: [{
          labelName: 'Total No Of Products',
          key: 'Count'
        }, {
          labelName: 'Total Cost Price',
          key: 'TotalCostPrice'
        }, {
          labelName: 'Total Selling Price',
          key: 'TotalSellingPrice'
        }, {
          labelName: 'Gross Profit',
          key: 'GrossProfit'
        }]
      }
    ]
  };
}
