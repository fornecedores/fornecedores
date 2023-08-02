import Layout from "@/components/Layouts";
import ProductForm from "@/components/ProductForm";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

export default function EditProductPage() {
    const router = useRouter();
    const [productInfo, setProductInfo] = useState(null);
    const {id} = router.query;
    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get('/api/products?id='+id).then(response => {
            setProductInfo(response.data);
        });
    }, [id]);
    return (
        <Layout>
            <h1>Editar Producto</h1>
            {productInfo && (
                <ProductForm {...productInfo}/>
            )}
            
        </Layout>
    );
}