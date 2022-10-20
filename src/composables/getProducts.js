import {ref} from 'vue';

const getProducts = () => {
    const products = ref([]);
    const error = ref(null);

    const load = async () => {
        try {
            const data = await fetch('http://localhost:3000/products ');
            if(!data.ok) throw Error('No data available!');
            products.value = await data.json() 
        } catch (err) {
            error.value = err.message;            
        }
    }

    return {products, error ,load}
}

export default getProducts