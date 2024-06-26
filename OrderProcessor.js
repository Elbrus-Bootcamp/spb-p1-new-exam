const fs = require('fs').promises;
const { Order } = require('./db/models');

class OrderProcessor {
  //* Метод для чтения файла
  static async loadDataFromFile(filePath) {}

  //* Метод преобразования данных из файла в массив объектов без лишних данных
  static reorganizeData(data) {}

  //* Метод сортировки заказов по дате выполнения
  static sortOrdersByDate(orders) {}

  //* Метод записи массива объектов заказов в базу данных
  static async writeDataToDB(orders) {}

  //* Метод вывода новых данных из базы (УЖЕ РЕАЛИЗОВАН)
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
