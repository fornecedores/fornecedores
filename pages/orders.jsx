import Layout from "@/components/Layouts";
import axios from "axios";
import { useEffect, useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get("/api/orders").then((response) => {
      setOrders(response.data);
    });
  }, []);
  return (
    <Layout>
      <h1>Encomendas</h1>
      <table className="basic">
        <thead>
          <tr>
            <th>Data</th>
            <th>Pagamento</th>
            <th>Cliente</th>
            <th>Produto</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 &&
            orders.map((order) => (
              <tr key={order.name}>
                <td>{order.createdAt.replace("T", " ").substring(0, 19)}</td>
                <td>{order.paid ? "SIM" : "NÃO"}</td>
                <td>
                  {order.name} {order.mail} {order.address}
                  <br /> {order.city} {order.contact}
                </td>
                <td>
                  {order.line_items.map((l) => (
                    <>
                      {l.price_data?.product_data.name} x {l.quantity}
                      <br />
                    </>
                  ))}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Layout>
  );
}
