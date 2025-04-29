function data(dataName) {
    switch (dataName) {
        case "products":
            const products = [
                {
                    id:"1",
                    name:"Swesome soft hat",
                    name_cate: "Thoi trang nam",
                    code: "123-456",
                    image:"https://underarmour.scene7.com/is/image/Underarmour/1376704-114_SLF_SL?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708",
                    price: "750.00",
                    old_price: "500.00",
                },
                {
                    id:"2",
                    name:"Swesome soft hat",
                    name_cate: "Thoi trang nam",
                    code: "123-456",
                    image:"https://underarmour.scene7.com/is/image/Underarmour/1376704-114_SLF_SL?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708",
                    price: "75.00",
                    old_price: "200.00",
                },
                {
                    id:"3",
                    name:"Swesome soft hat",
                    name_cate: "Thoi trang nam",
                    code: "123-456",
                    image:"https://underarmour.scene7.com/is/image/Underarmour/1376704-114_SLF_SL?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708",
                    price: "550.00",
                    old_price: "500.00",
                },
                {
                    id:"4",
                    name:"Swesome soft hat",
                    name_cate: "Thoi trang nam",
                    code: "123-456",
                    image:"https://underarmour.scene7.com/is/image/Underarmour/1376704-114_SLF_SL?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708",
                    price: "350.00",
                    old_price: "500.00",
                },
                {
                    id:"5",
                    name:"Swesome soft hat",
                    name_cate: "Thoi trang nam",
                    code: "123-456",
                    image:"https://underarmour.scene7.com/is/image/Underarmour/1376704-114_SLF_SL?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708",
                    price: "750.00",
                    old_price: "500.00",
                },
            ];
            return products;
            default:
                return [];
    }
}

export default data;