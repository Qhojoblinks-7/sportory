import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { 
  ShoppingBag, 
  ShoppingCart, 
  Heart, 
  Star, 
  Plus, 
  Minus,
  X,
  CreditCard,
  Phone
} from 'lucide-react'

const Marketplace = () => {
  const { user } = useAuth()
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)

  const products = [
    {
      id: '1',
      name: 'Sportory Official Jersey',
      price: 150,
      originalPrice: 200,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
      category: 'Jerseys',
      rating: 4.8,
      reviews: 124,
      inStock: true,
      description: 'Official Sportory team jersey with premium quality fabric'
    },
    {
      id: '2',
      name: 'Ghana Football Scarf',
      price: 25,
      originalPrice: 35,
      image: 'https://images.unsplash.com/photo-1511886929837-354984827c0f?w=400&h=400&fit=crop',
      category: 'Accessories',
      rating: 4.6,
      reviews: 89,
      inStock: true,
      description: 'Traditional Ghana colors with team logo'
    },
    {
      id: '3',
      name: 'Training Shorts',
      price: 45,
      originalPrice: 60,
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop',
      category: 'Training',
      rating: 4.7,
      reviews: 67,
      inStock: true,
      description: 'Comfortable training shorts for athletes'
    },
    {
      id: '4',
      name: 'Team Cap',
      price: 20,
      originalPrice: 25,
      image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&h=400&fit=crop',
      category: 'Accessories',
      rating: 4.5,
      reviews: 43,
      inStock: false,
      description: 'Official team cap with embroidered logo'
    },
    {
      id: '5',
      name: 'Sports Water Bottle',
      price: 15,
      originalPrice: 20,
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop',
      category: 'Accessories',
      rating: 4.9,
      reviews: 156,
      inStock: true,
      description: 'Insulated water bottle for training sessions'
    },
    {
      id: '6',
      name: 'Athletic Socks',
      price: 12,
      originalPrice: 18,
      image: 'https://images.unsplash.com/photo-1586350977771-b3b034c3c3e5?w=400&h=400&fit=crop',
      category: 'Training',
      rating: 4.4,
      reviews: 78,
      inStock: true,
      description: 'High-performance athletic socks'
    }
  ]

  const addToCart = (product) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === product.id)
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCart(prev => prev.map(item =>
      item.id === productId
        ? { ...item, quantity: newQuantity }
        : item
    ))
  }

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0)
  }

  const handleCheckout = () => {
    if (!user) {
      alert('Please log in to checkout')
      return
    }
    setShowCheckout(true)
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold text-text mb-4 flex items-center">
              <ShoppingBag className="mr-3 text-primary" size={40} />
              Marketplace
            </h1>
            <p className="text-xl text-text/70">
              Official Sportory merchandise and gear
            </p>
          </div>
          
          {/* Cart Button */}
          <button
            onClick={() => setShowCart(true)}
            className="relative btn-primary flex items-center space-x-2"
          >
            <ShoppingCart size={20} />
            <span>Cart</span>
            {getCartCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-highlight text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="glass-card hover:bg-white/20 transition-all duration-300">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                {!product.inStock && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                    Out of Stock
                  </div>
                )}
                <button className="absolute top-2 left-2 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                  <Heart size={16} className="text-white" />
                </button>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary font-medium">{product.category}</span>
                  <div className="flex items-center space-x-1">
                    <Star size={14} className="text-highlight fill-current" />
                    <span className="text-sm text-text/70">{product.rating}</span>
                    <span className="text-sm text-text/50">({product.reviews})</span>
                  </div>
                </div>
                
                <h3 className="font-semibold text-text">{product.name}</h3>
                <p className="text-sm text-text/70">{product.description}</p>
                
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-text">₵{product.price}</span>
                  <span className="text-sm text-text/50 line-through">₵{product.originalPrice}</span>
                </div>
                
                <button
                  onClick={() => addToCart(product)}
                  disabled={!product.inStock}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Sidebar */}
        {showCart && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-background rounded-lg p-6 max-w-md w-full mx-4 max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-text">Shopping Cart</h2>
                <button
                  onClick={() => setShowCart(false)}
                  className="p-2 text-text/60 hover:text-text transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingCart size={48} className="text-text/30 mx-auto mb-4" />
                  <p className="text-text/70">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-text">{item.name}</h3>
                        <p className="text-sm text-text/70">₵{item.price}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 bg-white/10 rounded hover:bg-white/20"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 bg-white/10 rounded hover:bg-white/20"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 text-red-500 hover:text-red-400"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                  
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-semibold text-text">Total:</span>
                      <span className="text-xl font-bold text-primary">₵{getCartTotal()}</span>
                    </div>
                    <button
                      onClick={handleCheckout}
                      className="btn-primary w-full"
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Checkout Modal */}
        {showCheckout && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-background rounded-lg p-6 max-w-md w-full mx-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-text">Checkout</h2>
                <button
                  onClick={() => setShowCheckout(false)}
                  className="p-2 text-text/60 hover:text-text transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-text mb-4">Payment Method</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-primary/10 rounded-lg">
                      <Phone className="text-primary" size={20} />
                      <div>
                        <div className="font-medium text-text">Mobile Money</div>
                        <div className="text-sm text-text/70">Pay with MoMo</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-text mb-4">Order Summary</h3>
                  <div className="space-y-2">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between">
                        <span className="text-text/70">{item.name} x {item.quantity}</span>
                        <span className="text-text">₵{item.price * item.quantity}</span>
                      </div>
                    ))}
                    <div className="border-t border-white/10 pt-2">
                      <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span className="text-primary">₵{getCartTotal()}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <button
                    onClick={() => {
                      alert('Payment would be processed here with MoMo integration')
                      setShowCheckout(false)
                      setShowCart(false)
                      setCart([])
                    }}
                    className="btn-primary w-full"
                  >
                    Pay with MoMo
                  </button>
                  <button
                    onClick={() => setShowCheckout(false)}
                    className="btn-outline w-full"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Marketplace