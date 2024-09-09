import firestore from '@react-native-firebase/firestore';


const productRef = firestore().collection('products');
const categoriesRef = firestore().collection('categories');
const userRef = firestore().collection('users');
const sliderRef = firestore().collection('sliders');
const bsctRef = firestore().collection('bsct')

export {
  productRef,
  categoriesRef,
  userRef,
  sliderRef,
  bsctRef
};