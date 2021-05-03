import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/app';
import 'firebase/firestore';
class App extends React.Component{
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    }
    this.db = firebase.firestore();
  }

  componentDidMount(){
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot) => {
    //     console.log(snapshot);
    //     snapshot.docs.map((doc) => {
    //       console.log(doc.data());
    //     });

    //     const products = snapshot.docs.map((doc) => {
    //       const data = doc.data();
    //       data['id'] = doc.id;
    //       return data;
    //     });

    //     this.setState({
    //       products,
    //       loading: false
    //     });
    //   })

    this.db
      .collection('products')
      // .where('price', '==', 1999)
      .orderBy('price', 'desc')
      .onSnapshot((snapshot) => {
            console.log(snapshot);
            snapshot.docs.map((doc) => {
              console.log(doc.data());
              return "";
            });
    
            const products = snapshot.docs.map((doc) => {
              const data = doc.data();
              data['id'] = doc.id;
              return data;
            });
    
            this.setState({
              products,
              loading: false
            })
          });
  }

  handleIncreaseQuantity = (product) => {
    const{ products } = this.state;
    const  index = products.indexOf(product);

    // products[index].qty += 1;

    // this.setState({
    //     products
    // })

    const docRef = this.db.collection('products').doc(products[index].id);

    docRef.update({
      qty: products[index].qty+1
    })
    .then(()=>{
      console.log('document updated');
    })
  }

  handleDecreaseQuantity = (product) => {
    const{ products } = this.state;
    const index = products.indexOf(product);
    if(products[index].qty===0) return;
    // products[index].qty -= 1;
    // this.setState({
    //   products
    // })
    const docRef = this.db.collection('products').doc(products[index].id);

    docRef.update({
      qty: products[index].qty - 1
    })
    .then(()=>{
      console.log('document updated');
    })
  }
  
  handleDeleteProduct = (id) => {
    const{ products } = this.state;

    // const items = products.filter((item) => item.id !== id);

    // this.setState({
    //   products: items
    // });

    
    const docRef = this.db.collection('products').doc(id);

    docRef
      .delete()
      .then(() => {
        console.log('Deleted Successfully');
      })
  }

  getCount = () => {
    const {products} = this.state;
    
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  getCartTotal = () => {
    const {products} = this.state;

    let total = 0;

    products.map((product) => {
      total += product.qty * product.price;
      return '';
    })

    return total;
  }

  addProduct = () => {
    this.db
      .collection('products')
      .add({
        img: '',
        price: 1999,
        qty: 3,
        title: 'Washing Machine'
      })
      .then((docRef) => {
        
      })
  }
  render(){
    const { products,loading } = this.state;
    return (
      <div className="App">
        <Navbar 
        count = {this.getCount()}
        />
        {/* <button onClick={this.addProduct} style={{padding:20,fontSize:20}}>Add a product</button> */}
        <Cart
         products = {products}
         onIncreaseQuantity = {this.handleIncreaseQuantity}
         onDecreaseQuantity = {this.handleDecreaseQuantity}
         onDeleteProduct = {this.handleDeleteProduct}
         />
         {loading && <h1>LOADING PRODUCT</h1>}
         <div style = {{fontSize: 20,padding:10}}>TOTAL : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
