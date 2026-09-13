import React, { useState } from 'react';
import { ShoppingBag, Scan, Printer, Zap, RotateCcw, Plus, Minus, Trash2, CheckCircle2, Utensils, AlertCircle } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  category: string;
  price: number;
  qty: number;
  barcode: string;
}

const CATEGORIES = [
  { id: 'all', label: '🔥 Quick All' },
  { id: 'grocery', label: '🥛 Grocery & Dairy' },
  { id: 'pharmacy', label: '💊 Pharmacy (NMRA)' },
  { id: 'bakery', label: '🥖 Bakery & Cafe' },
  { id: 'kot', label: '🍽️ Restaurant KOT' },
];

const SAMPLE_PRODUCTS = [
  { id: '1', name: 'Highland Fresh Milk 1L', category: 'grocery', price: 480, barcode: '479200100124' },
  { id: '2', name: 'Munchee Cream Cracker 190g', category: 'grocery', price: 260, barcode: '479101500201' },
  { id: '3', name: 'Watawala Pure Tea 500g', category: 'grocery', price: 950, barcode: '479211000889' },
  { id: '4', name: 'Panadol 500mg (10s Strip)', category: 'pharmacy', price: 120, barcode: '479600200112' },
  { id: '5', name: 'Amoxil 500mg Caps (Batch #402)', category: 'pharmacy', price: 450, barcode: '479600800099' },
  { id: '6', name: 'Chicken Rice & Curry (Full)', category: 'kot', price: 980, barcode: 'KOT-101' },
  { id: '7', name: 'Devilled Chicken Kottu (L)', category: 'kot', price: 1450, barcode: 'KOT-108' },
  { id: '8', name: 'Fish Bun (Seeni Sambal)', category: 'bakery', price: 140, barcode: '479100800055' },
  { id: '9', name: 'Iced Coffee (Fresh Milk)', category: 'bakery', price: 350, barcode: 'BEV-004' },
];

const InteractiveTerminal: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [cart, setCart] = useState<CartItem[]>([
    { id: '1', name: 'Highland Fresh Milk 1L', category: 'grocery', price: 480, qty: 2, barcode: '479200100124' },
    { id: '6', name: 'Chicken Rice & Curry (Full)', category: 'kot', price: 980, qty: 1, barcode: 'KOT-101' }
  ]);
  const [lastScanned, setLastScanned] = useState<string | null>('479200100124');
  const [isScanning, setIsScanning] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [printedTime, setPrintedTime] = useState<string>('');

  const filteredProducts = selectedCat === 'all' 
    ? SAMPLE_PRODUCTS 
    : SAMPLE_PRODUCTS.filter(p => p.category === selectedCat);

  const addItem = (product: typeof SAMPLE_PRODUCTS[0]) => {
    setIsScanning(true);
    setLastScanned(product.barcode);
    setTimeout(() => setIsScanning(false), 220);

    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.qty + delta;
        return newQty > 0 ? { ...item, qty: newQty } : item;
      }
      return item;
    }));
  };

  const removeItem = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    setShowReceipt(false);
  };

  const handlePrint = () => {
    if (cart.length === 0) return;
    const now = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setPrintedTime(now);
    setShowReceipt(true);
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="bg-[#111827] rounded-3xl p-3 sm:p-5 shadow-2xl border-4 border-[#374151] relative font-sans">
      
      {/* Toast POS Terminal Bezel / Top Status Strip */}
      <div className="bg-[#1F2937] border-b border-gray-700/80 px-4 py-2.5 rounded-t-2xl flex items-center justify-between text-xs mb-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF4C00] animate-pulse" />
            <span className="font-mono font-extrabold text-white text-[11px] tracking-wider uppercase">
              URTHLY POS HARDWARE v4.2
            </span>
          </div>
          <span className="hidden sm:inline-block text-gray-400 font-mono text-[10px] bg-gray-800 px-2 py-0.5 rounded border border-gray-700">
            TILL #01 — COLOMBO STORE
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold flex items-center gap-1">
            <Zap className="w-3 h-3 fill-current text-emerald-400" />
            100% OFFLINE ACTIVE
          </span>
        </div>
      </div>

      {/* Main Terminal Screen Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Left Column: Touch Menu & Product Selector */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
          
          {/* Category Filter Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCat === cat.id
                    ? 'bg-[#FF4C00] text-white shadow-md shadow-[#FF4C00]/30'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Barcode scanner status notification bar */}
          <div className={`px-3 py-2 rounded-xl bg-gray-900 border transition-all flex items-center justify-between font-mono text-xs ${
            isScanning ? 'border-[#FF4C00] bg-[#FF4C00]/10 text-white' : 'border-gray-800 text-gray-300'
          }`}>
            <div className="flex items-center gap-2">
              <Scan className={`w-4 h-4 ${isScanning ? 'text-[#FF4C00] animate-spin' : 'text-gray-400'}`} />
              <span className="text-gray-400 text-[10px] uppercase font-bold">Scanner Input:</span>
              <span className="font-bold text-white text-[11px]">{lastScanned || 'READY'}</span>
            </div>
            <span className="text-[10px] font-bold text-[#FF4C00]">0.04s SPEED</span>
          </div>

          {/* Product Touch Tile Grid (Toast Style) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[280px] overflow-y-auto pr-1">
            {filteredProducts.map((prod) => (
              <button
                key={prod.id}
                onClick={() => addItem(prod)}
                className="group p-3 rounded-xl bg-gray-800/90 hover:bg-gray-700/90 border border-gray-700 hover:border-[#FF4C00] transition-all text-left relative overflow-hidden active:scale-95 flex flex-col justify-between h-[82px] shadow-sm"
              >
                <div className="flex justify-between items-start w-full">
                  <span className="text-[9px] font-mono text-gray-400 uppercase font-semibold truncate pr-1">
                    {prod.category}
                  </span>
                  <Plus className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#FF4C00] transition-colors shrink-0" />
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-100 block truncate group-hover:text-white">
                    {prod.name}
                  </span>
                  <span className="text-xs font-mono font-extrabold text-[#FF4C00] block mt-0.5">
                    LKR {prod.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="text-[10px] font-mono text-gray-400 text-center flex items-center justify-center gap-1 py-1">
            <span>💡 Tap any item above to add to ticket or scan barcode</span>
          </div>

        </div>

        {/* Right Column: Ticket / Bill Receipt Cart */}
        <div className="lg:col-span-5 bg-gray-900 border border-gray-800 rounded-2xl p-4 flex flex-col justify-between shadow-inner min-h-[340px]">
          
          <div>
            {/* Ticket Header */}
            <div className="flex items-center justify-between border-b border-gray-800 pb-2.5 mb-3">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-[#FF4C00]" />
                <span className="text-xs font-extrabold text-white uppercase tracking-wider font-mono">
                  Order Ticket #1042
                </span>
              </div>
              {cart.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-[10px] font-mono text-gray-400 hover:text-red-400 flex items-center gap-1 transition-colors"
                >
                  <RotateCcw className="w-3 h-3" /> Clear
                </button>
              )}
            </div>

            {/* Cart Items List */}
            <div className="space-y-2 max-h-[170px] overflow-y-auto pr-1">
              {cart.length === 0 ? (
                <div className="py-12 text-center text-gray-500 font-mono text-xs space-y-1">
                  <p className="font-bold text-gray-400">TICKET IS EMPTY</p>
                  <p className="text-[10px]">Select items from menu to start billing</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="p-2.5 rounded-xl bg-gray-800/80 border border-gray-700/60 font-mono text-xs flex items-center justify-between"
                  >
                    <div className="truncate pr-2 max-w-[130px] sm:max-w-[150px]">
                      <span className="text-gray-100 font-bold block truncate text-[11px]">
                        {item.name}
                      </span>
                      <span className="text-[10px] text-gray-400">
                        LKR {item.price.toLocaleString()} ea
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {/* Qty Controls */}
                      <div className="flex items-center bg-gray-900 border border-gray-700 rounded-lg">
                        <button
                          onClick={() => updateQty(item.id, -1)}
                          className="px-1.5 py-0.5 text-gray-400 hover:text-white transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-1.5 text-[11px] font-bold text-white">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, 1)}
                          className="px-1.5 py-0.5 text-gray-400 hover:text-white transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-[#FF4C00] font-bold text-[11px] min-w-[70px] text-right">
                        LKR {(item.price * item.qty).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </span>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-500 hover:text-red-400 transition-colors p-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Subtotal & Checkout Actions */}
          <div className="pt-3 border-t border-gray-800 mt-3 space-y-2.5 font-mono">
            
            <div className="space-y-1">
              <div className="flex justify-between items-center text-xs text-gray-400">
                <span>Subtotal ({cart.reduce((a, c) => a + c.qty, 0)} items):</span>
                <span>LKR {subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between items-center text-xs text-gray-400">
                <span>NBT / VAT Tax:</span>
                <span className="text-emerald-400 font-bold">0.00 (Inclusive)</span>
              </div>
              <div className="flex justify-between items-center pt-1 border-t border-gray-800">
                <span className="text-xs font-bold text-white uppercase">Total Payable:</span>
                <span className="text-lg font-black text-[#FF4C00]">
                  LKR {subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>

            <button
              onClick={handlePrint}
              disabled={cart.length === 0}
              className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                cart.length > 0
                  ? 'bg-[#FF4C00] hover:bg-[#E04300] text-white shadow-lg shadow-[#FF4C00]/25 cursor-pointer active:scale-95'
                  : 'bg-gray-800 text-gray-500 cursor-not-allowed border border-gray-700'
              }`}
            >
              <Printer className="w-4 h-4" />
              Pay & Print Thermal Receipt
            </button>

          </div>

        </div>

      </div>

      {/* Simulated High-Resolution Thermal Receipt Popup */}
      {showReceipt && (
        <div className="mt-4 p-5 rounded-2xl bg-white text-gray-900 font-mono text-xs shadow-2xl relative animate-in fade-in slide-in-from-top-4 duration-300 max-w-sm mx-auto border-t-8 border-[#FF4C00] border-x border-b border-gray-200">
          
          <div className="text-center space-y-1 pb-3 border-b border-dashed border-gray-300">
            <span className="font-black text-base block uppercase tracking-wider text-black">URTHLY POS STORE</span>
            <span className="text-[10px] text-gray-600 block">142 Galle Road, Colombo 03, Sri Lanka</span>
            <span className="text-[10px] text-gray-600 block">HOTLINE: +94 77 123 4567 | TAX ID: 4090123</span>
            <div className="pt-1 flex items-center justify-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 py-0.5 rounded">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>PAID & PRINTED OFFLINE ({printedTime})</span>
            </div>
          </div>

          <div className="py-3 space-y-1.5 border-b border-dashed border-gray-300 text-[11px]">
            {cart.map((item, idx) => (
              <div key={idx} className="flex justify-between items-baseline">
                <div className="pr-2">
                  <span className="font-bold text-gray-900">{item.qty}x</span> {item.name.substring(0, 22)}
                </div>
                <span className="font-bold text-black shrink-0">
                  LKR {(item.price * item.qty).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="py-3 space-y-1">
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-600">PAYMENT METHOD:</span>
              <span className="font-bold">CASH TENDERED</span>
            </div>
            <div className="flex justify-between items-center text-sm font-black pt-1">
              <span>TOTAL PAID:</span>
              <span className="text-[#FF4C00] text-base">
                LKR {subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </span>
            </div>
          </div>

          <div className="text-center text-[10px] text-gray-500 pt-3 border-t border-dashed border-gray-300 space-y-1">
            <p className="font-bold text-gray-800">Thank you for your business!</p>
            <p className="font-mono text-[9px] text-gray-400">
              DATABASE: LOCAL SQLITE | LATENCY: 0.04s | STATUS: SAVED
            </p>
          </div>

        </div>
      )}

    </div>
  );
};

export default InteractiveTerminal;
