import dayjs from 'dayjs';
import "./LastTrades.css";

var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)


export default function LastTrades({amount}: {amount: number}) {
    const DATA = [
        {
            "addr1": "0x5a1A14A608A14634B49075659Ce096a7d9A52602",
            "addr2": "0x27FEF19982568d3D430518c9CF38c2F3E3536163",
            "token1": "grimace",
            "token2": "wdoge",
            "buy": true,
            "sell": false,
            "amount": "9",
            "price": "27",
            "time": "04.08.2023 16:02:20 878 +00:00",
            "idOrderAddress1": "4e868cf9-9ede-41bd-9756-79ffbdb3eec8",
            "idOrderAddress2": "edc3b282-2ae4-454a-8e8a-61bcf6e2f033"
        },
        {
            "addr1": "0x5a1A14A608A14634B49075659Ce096a7d9A52602",
            "addr2": "0x5a1A14A608A14634B49075659Ce096a7d9A52602",
            "token1": "grimace",
            "token2": "wdoge",
            "buy": true,
            "sell": false,
            "amount": "2",
            "price": "0.003",
            "time": "12.07.2023 21:36:27 705 +00:00",
            "idOrderAddress1": "b66c76fc-3c30-48ab-ad64-ad812cd9d4d1",
            "idOrderAddress2": "7d45b35d-a9c7-43c0-9c2d-d2dcba387ac5"
        },
        {
            "addr1": "0x5a1A14A608A14634B49075659Ce096a7d9A52602",
            "addr2": "0x5a1A14A608A14634B49075659Ce096a7d9A52602",
            "token1": "grimace",
            "token2": "wdoge",
            "buy": false,
            "sell": true,
            "amount": "2",
            "price": "0.003",
            "time": "12.07.2023 21:36:27 705 +00:00",
            "idOrderAddress1": "7d45b35d-a9c7-43c0-9c2d-d2dcba387ac5",
            "idOrderAddress2": "b66c76fc-3c30-48ab-ad64-ad812cd9d4d1"
        },
        {
            "addr1": "0x5a1A14A608A14634B49075659Ce096a7d9A52602",
            "addr2": "0x27FEF19982568d3D430518c9CF38c2F3E3536163",
            "token1": "grimace",
            "token2": "wdoge",
            "buy": true,
            "sell": false,
            "amount": "1",
            "price": "22",
            "time": "04.08.2023 15:10:17 112 +00:00",
            "idOrderAddress1": "471bb2c5-40c2-4af2-aea7-246db23c2b8e",
            "idOrderAddress2": "edc3b282-2ae4-454a-8e8a-61bcf6e2f033"
        },
        {
            "addr1": "0x68F44698942F6D0D695Af7255cD388f767ce7634",
            "addr2": "0x5a1A14A608A14634B49075659Ce096a7d9A52602",
            "token1": "grimace",
            "token2": "wdoge",
            "buy": true,
            "sell": false,
            "amount": "1",
            "price": "0.007",
            "time": "13.07.2023 21:43:17 079 +00:00",
            "idOrderAddress1": "7ba1c2e0-b264-47ae-8e49-c2f85ad12a98",
            "idOrderAddress2": "33541e64-cc42-476a-81ef-48f1fc913032"
        },
        {
            "addr1": "0x5a1A14A608A14634B49075659Ce096a7d9A52602",
            "addr2": "0x5a1A14A608A14634B49075659Ce096a7d9A52602",
            "token1": "grimace",
            "token2": "wdoge",
            "buy": false,
            "sell": true,
            "amount": "1",
            "price": "0.001",
            "time": "13.07.2023 10:08:49 011 +00:00",
            "idOrderAddress1": "7d45b35d-a9c7-43c0-9c2d-d2dcba387ac5",
            "idOrderAddress2": "0dc7856b-2a9a-4537-aedf-455affe711b7"
        },
        {
            "addr1": "0x5a1A14A608A14634B49075659Ce096a7d9A52602",
            "addr2": "0x68F44698942F6D0D695Af7255cD388f767ce7634",
            "token1": "grimace",
            "token2": "wdoge",
            "buy": true,
            "sell": false,
            "amount": "1",
            "price": "100",
            "time": "18.07.2023 11:14:19 045 +00:00",
            "idOrderAddress1": "e821c918-2709-4420-8fd6-69245a706f4b",
            "idOrderAddress2": "63c8883f-63dd-4b37-b29a-849355c1b7bf"
        },
        {
            "addr1": "0x9A62ef714Dc6029f3B01293EBc58Dbb4c3248980",
            "addr2": "0x5a1A14A608A14634B49075659Ce096a7d9A52602",
            "token1": "grimace",
            "token2": "wdoge",
            "buy": false,
            "sell": true,
            "amount": "1",
            "price": "27",
            "time": "04.08.2023 16:02:21 481 +00:00",
            "idOrderAddress1": "292fb49b-eb0f-4b70-a114-dcce5f8b194d",
            "idOrderAddress2": "4e868cf9-9ede-41bd-9756-79ffbdb3eec8"
        },
        {
            "addr1": "0x5a1A14A608A14634B49075659Ce096a7d9A52602",
            "addr2": "0x5a1A14A608A14634B49075659Ce096a7d9A52602",
            "token1": "grimace",
            "token2": "wdoge",
            "buy": true,
            "sell": false,
            "amount": "1",
            "price": "0.001",
            "time": "13.07.2023 10:08:49 011 +00:00",
            "idOrderAddress1": "0dc7856b-2a9a-4537-aedf-455affe711b7",
            "idOrderAddress2": "7d45b35d-a9c7-43c0-9c2d-d2dcba387ac5"
        },
        {
            "addr1": "0x68F44698942F6D0D695Af7255cD388f767ce7634",
            "addr2": "0x5a1A14A608A14634B49075659Ce096a7d9A52602",
            "token1": "grimace",
            "token2": "wdoge",
            "buy": false,
            "sell": true,
            "amount": "1",
            "price": "100",
            "time": "18.07.2023 11:14:19 045 +00:00",
            "idOrderAddress1": "63c8883f-63dd-4b37-b29a-849355c1b7bf",
            "idOrderAddress2": "e821c918-2709-4420-8fd6-69245a706f4b"
        },
        {
            "addr1": "0x5a1A14A608A14634B49075659Ce096a7d9A52602",
            "addr2": "0x9A62ef714Dc6029f3B01293EBc58Dbb4c3248980",
            "token1": "grimace",
            "token2": "wdoge",
            "buy": true,
            "sell": false,
            "amount": "1",
            "price": "27",
            "time": "04.08.2023 16:02:21 481 +00:00",
            "idOrderAddress1": "4e868cf9-9ede-41bd-9756-79ffbdb3eec8",
            "idOrderAddress2": "292fb49b-eb0f-4b70-a114-dcce5f8b194d"
        },
        {
            "addr1": "0x5a1A14A608A14634B49075659Ce096a7d9A52602",
            "addr2": "0x68F44698942F6D0D695Af7255cD388f767ce7634",
            "token1": "grimace",
            "token2": "wdoge",
            "buy": false,
            "sell": true,
            "amount": "2",
            "price": "0.007",
            "time": "13.07.2023 21:43:16 337 +00:00",
            "idOrderAddress1": "96f35043-8ec1-4781-b8ca-47ce7ef1b248",
            "idOrderAddress2": "7ba1c2e0-b264-47ae-8e49-c2f85ad12a98"
        },
        {
            "addr1": "0x27FEF19982568d3D430518c9CF38c2F3E3536163",
            "addr2": "0x5a1A14A608A14634B49075659Ce096a7d9A52602",
            "token1": "grimace",
            "token2": "wdoge",
            "buy": false,
            "sell": true,
            "amount": "1",
            "price": "22",
            "time": "04.08.2023 15:10:17 112 +00:00",
            "idOrderAddress1": "edc3b282-2ae4-454a-8e8a-61bcf6e2f033",
            "idOrderAddress2": "471bb2c5-40c2-4af2-aea7-246db23c2b8e"
        },
        {
            "addr1": "0x27FEF19982568d3D430518c9CF38c2F3E3536163",
            "addr2": "0x5a1A14A608A14634B49075659Ce096a7d9A52602",
            "token1": "grimace",
            "token2": "wdoge",
            "buy": false,
            "sell": true,
            "amount": "9",
            "price": "27",
            "time": "04.08.2023 16:02:20 878 +00:00",
            "idOrderAddress1": "edc3b282-2ae4-454a-8e8a-61bcf6e2f033",
            "idOrderAddress2": "4e868cf9-9ede-41bd-9756-79ffbdb3eec8"
        },
        {
            "addr1": "0x5a1A14A608A14634B49075659Ce096a7d9A52602",
            "addr2": "0x68F44698942F6D0D695Af7255cD388f767ce7634",
            "token1": "grimace",
            "token2": "wdoge",
            "buy": false,
            "sell": true,
            "amount": "1",
            "price": "0.007",
            "time": "13.07.2023 21:43:17 079 +00:00",
            "idOrderAddress1": "33541e64-cc42-476a-81ef-48f1fc913032",
            "idOrderAddress2": "7ba1c2e0-b264-47ae-8e49-c2f85ad12a98"
        },
        {
            "addr1": "0x68F44698942F6D0D695Af7255cD388f767ce7634",
            "addr2": "0x5a1A14A608A14634B49075659Ce096a7d9A52602",
            "token1": "grimace",
            "token2": "wdoge",
            "buy": true,
            "sell": false,
            "amount": "2",
            "price": "0.007",
            "time": "13.07.2023 21:43:16 337 +00:00",
            "idOrderAddress1": "7ba1c2e0-b264-47ae-8e49-c2f85ad12a98",
            "idOrderAddress2": "96f35043-8ec1-4781-b8ca-47ce7ef1b248"
        }
    ]

  return (
    <div className="token_orders">
            <div className="token_orders_title">
                <div className="token_orders_title_btns">
                    <div  className="token_orders_title_btn token_orders_title_btn_active">
                        Последние сделки
                    </div>
                </div>

            </div>
                <div>
                <div className="token_orders_sell">
                <div className="token_orders_sell_title">
                    <div className="token_orders_sell_title_price">
                        Время
                    </div>
                    <div className="token_orders_sell_title_total">
                        Цена(USDT)
                    </div>
                    <div className="token_orders_sell_title_total">
                        Количество(GRIMACE)
                    </div>
                </div>
                <div className="token_orders_sell_main">
                    {DATA.slice(0, amount) ? (DATA.slice(0, amount).map((order) => <div  className="row">
                            <div className="time">
                                    {dayjs(order.time, "DD.MM HH:mm:ss SSS Z").format("DD.MM.YYYY HH:mm")}
                            </div>
                            <div className={order.sell ? "token_orders_sell_price" : "token_orders_buy_price"}>
                                {order.price}
                            </ div>

                            
                            <div className="token_orders_sell_total">
                                {order.amount}
                            </div>
                    </div>)) : ""}
                    </div>
                    
                    </div></div></div>
  )
}
