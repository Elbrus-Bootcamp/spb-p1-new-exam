const fs = require('fs').promises;
const { Order } = require('./db/models');

class OrderProcessor {
  static async loadDataFromFile(filePath) {
    const dataString = await fs.readFile(filePath, 'utf8');
    return dataString;
  }

  static reorganizeData(data) {
    return data
      .split('\n')
      .map((el) => el.split(', '))
      .map((el) => ({
        customer: el[0],
        order: el[1],
        due_date: new Date(el[2]),
      }));
  }

  static sortOrdersByDate(orders) {
    return orders.toSorted(
      (a, b) => new Date(a.due_date) - new Date(b.due_date)
    );
  }

  static async writeDataToDB(orders) {
    try {
      await Promise.all(
        orders.map(async (order) => {
          await Order.create(order);
        })
      );
    } catch (error) {
      console.log(error);
    }
  }

  static async getOrdersDataFromDB() {
    try {
      const allOrders = await Order.findAll({ raw: true });
      console.log(allOrders);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = OrderProcessor;
