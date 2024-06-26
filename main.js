const OrderProcessor = require('./OrderProcessor');

const filePath = './orders.txt';

async function main(filePath) {
  try {
    //* Метод для чтения файла
    const fileData = await OrderProcessor.loadDataFromFile(filePath);

    //* Метод преобразования данных из файла в массив объектов без лишних данных
    const formattedData = OrderProcessor.reorganizeData(fileData);

    //* Метод сортировки заказов по дате выполнения
    const sortedOrders = OrderProcessor.sortOrdersByDate(formattedData);

    //* Метод записи массива объектов заказов в базу данных
    await OrderProcessor.writeDataToDB(sortedOrders);
    console.log(`Данные были успешно добавлены в базу данных`);

    //* Метод вывода новых данных из базы (УЖЕ РЕАЛИЗОВАН)
    await OrderProcessor.getOrdersDataFromDB();
  } catch (error) {
    console.error('Произошла ошибка:', error);
  }
}

main(filePath);
