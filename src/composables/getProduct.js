import {ref} from 'vue';

const getProduct = (id) => {
    const product = ref([]);
    const error = ref(null);

    const load = async () => {
        try {
            const data = await fetch('http://localhost:3000/products/' + id);
            if(!data.ok) throw Error('No data available!');
            product.value = await data.json() 
        } catch (err) {
            error.value = err.message;            
        }
    }

    return {product, error ,load}
}

export default getProduct