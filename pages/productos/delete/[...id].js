import Layout from "@/components/Layouts";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

export default function DeleteProductPage(params) {
  const router = useRouter();
  const [productInfo, setProductInfo] = useState(null);
  const { id } = router.query;
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/products?id=" + id).then((response) => {
      setProductInfo(response.data);
    });
  }, [id]);
  function goBack() {
    router.push("/products");
  }
  async function deleteProduct() {
    await axios.delete("/api/products?id=" + id);
    goBack();
  }
  return (
    <Layout>
      <h1 className="text-center">
        Tem a certeza de que deseja remover o produto `{productInfo?.title}`?
      </h1>

      <div className="flex gap-2 justify-center">
        <button className="btn-red" onClick={deleteProduct}>
          Sim
        </button>
        <button className="btn-default" onClick={goBack}>
          Não
        </button>
      </div>
    </Layout>
  );
}
