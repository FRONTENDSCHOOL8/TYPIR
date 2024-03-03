const PB_AP = import.meta.env.VITE_PB_URL;

export default function getPbImage({ collectionId, id, image }) {
  return `${PB_AP}/api/files/${collectionId}/${id}/${image}`;
}

// function getPbImageURL(item, fileName = 'images') {
//   return `${import.meta.env.VITE_PB_URL}/api/files/${item.collectionId}/${item.id}/${item[fileName]}`;
// }

// const fetchProduct = async () => {
//   const products = await pb.collection('products').getList();

//   // 뮤테이션(mutation)
//   const productItems = products.items.map((product) => {
//     const photoURL = getPbImage(product);
//     product.photo = photoURL;
//     return product;
//   });

//   return {
//     ...products,
//     items: productItems,
//   };
// };
