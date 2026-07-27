// Kinu Supply prototype data — real products, prices (SGD) and imagery from kinu.supply (July 2026)
export const FREE_SHIP = 100;
const IMG = 'uploads/high-res/';
export const PRODUCTS = [
  {
    id: 'dachshund-rc-tee', name: 'Dachshund Recreational Club T-shirt', price: 47, type: 'T-shirt',
    animal: 'dog', breed: 'Dachshund', collection: 'Recreational Club', badge: 'Best seller',
    variantLabel: 'Color', variants: ['Black', 'Brown'], sizes: ['S', 'M', 'L', 'XL'],
    img: IMG + '13-dachshund-black-front.jpg', hover: IMG + '14-dachshund-black-back.jpg',
    blurb: 'For humans who proudly wear their favourite long dog on their sleeve.',
    gallery: [
      [IMG + '11-dachshund-recreational-lifestyle-back.jpg', 'Model carrying a dachshund, showing the illustrated Dachshund Recreational Club back print on a black tee'],
      [IMG + '13-dachshund-black-front.jpg', 'Dachshund Recreational Club T-shirt in black, front chest print'],
      [IMG + '14-dachshund-black-back.jpg', 'Dachshund Recreational Club T-shirt in black, full illustrated back print'],
      [IMG + '12-dachshund-recreational-lifestyle-detail.jpg', 'Close-up of the Dachshund Recreational Club illustration print detail']
    ],
    addOns: ['dog-stickers', 'dog-magnets', 'dog-bag']
  },
  {
    id: 'poodle-park-tee', name: 'Poodle Park T-shirt', price: 47, type: 'T-shirt',
    animal: 'dog', breed: 'Poodle', collection: 'Recreational Club', badge: 'New',
    variantLabel: 'Color', variants: ['White'], sizes: ['S', 'M', 'L', 'XL'],
    img: IMG + '09-poodle-park-studio-front.jpg', hover: IMG + '10-poodle-park-studio-back.jpg',
    blurb: 'A whole playground of poodles — swings, sandpit and all — on one tee.',
    gallery: [
      [IMG + '08-poodle-park-lifestyle-back.jpg', 'Model wearing the Poodle Park T-shirt in white, illustrated front print visible'],
      [IMG + '09-poodle-park-studio-front.jpg', 'Poodle Park T-shirt in white, front print'],
      [IMG + '10-poodle-park-studio-back.jpg', 'Poodle Park T-shirt in white, illustrated back print'],
      [IMG + '07-poodle-park-lifestyle-front.jpg', 'Model wearing the Poodle Park T-shirt, front view with cap']
    ],
    addOns: ['dog-stickers', 'dog-magnets', 'dog-bag']
  },
  {
    id: 'cat-club-tee', name: 'Cat Club T-shirt', price: 47, type: 'T-shirt',
    animal: 'cat', breed: 'Cat Club', collection: 'Cat Club', badge: null,
    variantLabel: 'Color', variants: ['White', 'Black'], sizes: ['S', 'M', 'L', 'XL'],
    img: IMG + '17-cat-club-white-front.jpg', hover: IMG + '18-cat-club-black-back.jpg',
    blurb: 'Beautifully illustrated feline crew, purr-fect for any cat lover.',
    gallery: [
      [IMG + '15-cat-club-lifestyle-front.jpg', 'Model wearing the Cat Club T-shirt in white, cats-in-a-box chest print'],
      [IMG + '17-cat-club-white-front.jpg', 'Cat Club T-shirt in white, front print'],
      [IMG + '18-cat-club-black-back.jpg', 'Cat Club T-shirt in black, illustrated back print'],
      [IMG + '16-cat-club-lifestyle-back.jpg', 'Model wearing the Cat Club T-shirt, back print view']
    ],
    addOns: ['cat-stickers', 'cat-bag']
  },
  {
    id: 'dog-stickers', name: 'Dog Stickers (Encyclopedia)', price: 5, from: true, type: 'Sticker',
    animal: 'dog', breed: 'Various', collection: 'Encyclopedia Series', badge: null,
    variantLabel: 'Breed', variants: ['Dachshund', 'Poodle', 'Golden Retriever', 'Border Collie', 'Husky', 'Pomeranian', 'Samoyed', 'Shiba Inu', 'Westie', 'Sheltie', 'Beagle'], sizes: null,
    img: IMG + '19-encyclopedia-dog-stickers.jpg', hover: IMG + '21-dog-stickers-product-sheet-1.jpg',
    blurb: 'Waterproof, gloss-laminated breed decals for laptops and water bottles. Price is per piece.',
    gallery: [
      [IMG + '19-encyclopedia-dog-stickers.jpg', 'Encyclopedia Series dog sticker wall with illustrated breed decals'],
      [IMG + '21-dog-stickers-product-sheet-1.jpg', 'Assorted illustrated dog stickers, product sheet'],
      [IMG + '22-dog-stickers-product-sheet-2.jpg', 'Illustrated dog sticker detail sheet']
    ],
    addOns: ['dog-magnets', 'dog-bag', 'dachshund-rc-tee']
  },
  {
    id: 'cat-stickers', name: 'Cat Stickers (waterproof decals)', price: 5, type: 'Sticker',
    animal: 'cat', breed: 'Cat Club', collection: 'Cat Club', badge: null,
    variantLabel: null, variants: null, sizes: null,
    img: IMG + '20-cat-stickers-sheet.jpg', hover: null,
    blurb: 'Cat illustration stickers to brighten your day. Price is per piece.',
    gallery: [[IMG + '20-cat-stickers-sheet.jpg', 'Illustrated cat sticker sheet with assorted feline designs']],
    addOns: ['cat-bag', 'cat-club-tee']
  },
  {
    id: 'dog-magnets', name: 'Dog Magnets', price: 7, from: true, type: 'Magnet',
    animal: 'dog', breed: 'Various', collection: 'Collectibles', badge: null,
    variantLabel: 'Breed', variants: ['Dachshund', 'Golden Retriever', 'Husky', 'Pomeranian', 'Samoyed', 'Shiba Inu', 'Westie'], sizes: null,
    img: IMG + '34-sticker-golden-sitting.png', hover: null, contain: true,
    blurb: 'The same illustrated breeds, for your fridge. Price is per piece.',
    gallery: [[IMG + '34-sticker-golden-sitting.png', 'Illustrated golden retriever artwork used on Kinu dog magnets']],
    addOns: ['dog-stickers', 'dog-bag']
  },
  {
    id: 'dog-bag', name: 'Foldable Dog Lovers Recycle Bag', price: 13, type: 'Bag',
    animal: 'dog', breed: 'Various', collection: 'Collectibles', badge: null,
    variantLabel: null, variants: null, sizes: null,
    img: IMG + '23-foldable-dog-lover-bag-lifestyle.jpg', hover: IMG + '24-foldable-dog-lover-bag-detail.jpg',
    blurb: 'Foldable recycle bag covered in cute dog heads. Folds into a 13cm pouch.',
    gallery: [
      [IMG + '23-foldable-dog-lover-bag-lifestyle.jpg', 'Foldable dog lovers recycle bag carried on a shoulder'],
      [IMG + '24-foldable-dog-lover-bag-detail.jpg', 'Dog heads print detail on the foldable recycle bag']
    ],
    addOns: ['dog-stickers', 'dog-magnets']
  },
  {
    id: 'cat-bag', name: 'Foldable Cat Lovers Recycle Bag', price: 13, type: 'Bag',
    animal: 'cat', breed: 'Cat Club', collection: 'Cat Club', badge: null,
    variantLabel: null, variants: null, sizes: null,
    img: IMG + '25-foldable-cat-lover-bag-lifestyle.jpg', hover: IMG + '26-foldable-cat-lover-bag-detail.jpg',
    blurb: 'The cat person answer to grocery day. Folds into a small pouch.',
    gallery: [
      [IMG + '25-foldable-cat-lover-bag-lifestyle.jpg', 'Foldable cat lovers recycle bag, lifestyle view'],
      [IMG + '26-foldable-cat-lover-bag-detail.jpg', 'Illustrated cat print detail on the foldable recycle bag']
    ],
    addOns: ['cat-stickers', 'cat-club-tee']
  }
];
export const BREEDS = [
  { n: 'Dachshund', a: 'dog', art: IMG + '33-sticker-dachshund-tennis.png', href: 'Breed.dc.html?breed=dachshund' },
  { n: 'Poodle', a: 'dog', art: IMG + '37-sticker-poodle-trio.png', href: 'Breed.dc.html?breed=poodle' },
  { n: 'Cat Club', a: 'cat', art: IMG + '20-cat-stickers-sheet.jpg', href: 'Breed.dc.html?breed=catclub' },
  { n: 'Golden Retriever', a: 'dog', art: IMG + '34-sticker-golden-sitting.png', href: 'Product.dc.html?id=dog-stickers&v=Golden%20Retriever' },
  { n: 'Border Collie', a: 'dog', art: IMG + '32-sticker-border-collie.png', href: 'Product.dc.html?id=dog-stickers&v=Border%20Collie' },
  { n: 'Husky', a: 'dog', art: IMG + '35-sticker-husky-frisbee.png', href: 'Product.dc.html?id=dog-stickers&v=Husky' },
  { n: 'Pomeranian', a: 'dog', art: IMG + '36-sticker-pomeranian-sitting.png', href: 'Product.dc.html?id=dog-stickers&v=Pomeranian' },
  { n: 'Samoyed', a: 'dog', art: IMG + '38-sticker-samoyed.png', href: 'Product.dc.html?id=dog-stickers&v=Samoyed' },
  { n: 'Shiba Inu', a: 'dog', art: IMG + '39-sticker-shiba-sitting.png', href: 'Product.dc.html?id=dog-stickers&v=Shiba%20Inu' },
  { n: 'Westie', a: 'dog', art: IMG + '40-sticker-westie-sitting.png', href: 'Product.dc.html?id=dog-stickers&v=Westie' },
  { n: 'Sheltie', a: 'dog', art: IMG + '28-sticker-sheltie-sheep.png', href: 'Product.dc.html?id=dog-stickers&v=Sheltie' },
  { n: 'Beagle', a: 'dog', art: IMG + '31-sticker-beagle-in-bag.png', href: 'Product.dc.html?id=dog-stickers&v=Beagle' }
];
export function product(id) { return PRODUCTS.find(p => p.id === id); }
export function money(n) { return 'S$' + (n % 1 ? n.toFixed(2) : n); }
export function getCart() { try { return JSON.parse(localStorage.getItem('kinu-cart-v1')) || []; } catch (e) { return []; } }
export function saveCart(c) {
  localStorage.setItem('kinu-cart-v1', JSON.stringify(c));
  window.dispatchEvent(new CustomEvent('kinu:cart', { detail: {} }));
}
export function addToCart(line) {
  const c = getCart();
  const key = x => x.id + '|' + (x.variant || '') + '|' + (x.size || '');
  const i = c.findIndex(x => key(x) === key(line));
  if (i >= 0) c[i].qty += (line.qty || 1); else c.push({ id: line.id, variant: line.variant || null, size: line.size || null, qty: line.qty || 1 });
  localStorage.setItem('kinu-cart-v1', JSON.stringify(c));
  window.dispatchEvent(new CustomEvent('kinu:cart', { detail: { open: true, added: line } }));
}
